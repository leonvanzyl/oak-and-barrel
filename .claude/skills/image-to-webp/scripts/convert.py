#!/usr/bin/env python3
"""
Image to WebP Conversion Script

Downloads images from URLs, resizes them, and converts to WebP format.
Supports batch processing multiple URLs at once.
"""

import argparse
import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow library is required but not installed.")
    print("Install it with: pip install Pillow")
    sys.exit(1)

try:
    import requests
except ImportError:
    print("Error: requests library is required but not installed.")
    print("Install it with: pip install requests")
    sys.exit(1)


def extract_filename_from_url(url: str) -> str:
    """Extract a clean filename from a URL."""
    parsed = urlparse(url)
    path = parsed.path

    # Get the filename from the path
    filename = os.path.basename(path)

    # Remove extension and clean up
    name = os.path.splitext(filename)[0]

    # Clean up the name (remove special chars, keep alphanumeric and hyphens)
    name = re.sub(r'[^a-zA-Z0-9\-_]', '-', name)
    name = re.sub(r'-+', '-', name)  # Replace multiple hyphens with single
    name = name.strip('-')

    return name if name else "image"


def download_image(url: str) -> Image.Image:
    """Download an image from a URL and return as PIL Image."""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }

    response = requests.get(url, headers=headers, timeout=30)
    response.raise_for_status()

    from io import BytesIO
    return Image.open(BytesIO(response.content))


def resize_image(img: Image.Image, width: int, height: int, keep_ratio: bool) -> Image.Image:
    """Resize an image to the target dimensions."""
    if keep_ratio:
        # Fit within dimensions while maintaining aspect ratio
        img.thumbnail((width, height), Image.Resampling.LANCZOS)
        return img
    else:
        # Crop to fill the target dimensions
        target_ratio = width / height
        img_ratio = img.width / img.height

        if img_ratio > target_ratio:
            # Image is wider - crop sides
            new_width = int(img.height * target_ratio)
            left = (img.width - new_width) // 2
            img = img.crop((left, 0, left + new_width, img.height))
        elif img_ratio < target_ratio:
            # Image is taller - crop top/bottom
            new_height = int(img.width / target_ratio)
            top = (img.height - new_height) // 2
            img = img.crop((0, top, img.width, top + new_height))

        # Resize to exact dimensions
        return img.resize((width, height), Image.Resampling.LANCZOS)


def convert_to_webp(img: Image.Image, output_path: Path, quality: int) -> int:
    """Convert and save image as WebP. Returns file size in bytes."""
    # Convert to RGB if necessary (WebP doesn't support all modes)
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        # Keep alpha channel for transparent images
        img = img.convert('RGBA')
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    img.save(output_path, 'WEBP', quality=quality, method=6)
    return output_path.stat().st_size


def generate_unique_filename(dest: Path, base_name: str, index: int = None) -> Path:
    """Generate a unique filename, adding suffix if file exists."""
    if index is not None:
        name = f"{base_name}-{index}"
    else:
        name = base_name

    output_path = dest / f"{name}.webp"

    # If file exists, add numeric suffix
    counter = 1
    while output_path.exists():
        output_path = dest / f"{name}-{counter}.webp"
        counter += 1

    return output_path


def format_size(size_bytes: int) -> str:
    """Format file size in human-readable format."""
    if size_bytes < 1024:
        return f"{size_bytes} B"
    elif size_bytes < 1024 * 1024:
        return f"{size_bytes / 1024:.1f} KB"
    else:
        return f"{size_bytes / (1024 * 1024):.1f} MB"


def process_url(url: str, args, index: int = None) -> tuple[bool, str, int]:
    """
    Process a single URL. Returns (success, output_path_or_error, file_size).
    """
    try:
        # Download
        print(f"  Downloading: {url[:80]}{'...' if len(url) > 80 else ''}")
        img = download_image(url)

        # Resize
        print(f"  Resizing to {args.width}x{args.height}{'(fit)' if args.keep_ratio else ''}...")
        img = resize_image(img, args.width, args.height, args.keep_ratio)

        # Determine output filename
        if args.output:
            base_name = args.output
        else:
            base_name = extract_filename_from_url(url)

        output_path = generate_unique_filename(args.dest, base_name, index)

        # Convert and save
        print(f"  Converting to WebP (quality={args.quality})...")
        file_size = convert_to_webp(img, output_path, args.quality)

        return True, str(output_path), file_size

    except requests.exceptions.RequestException as e:
        return False, f"Download failed: {e}", 0
    except Exception as e:
        return False, f"Processing failed: {e}", 0


def main():
    parser = argparse.ArgumentParser(
        description="Download images from URLs, resize them, and convert to WebP format.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s https://example.com/image.jpg
  %(prog)s url1 url2 url3 --width 1920 --height 1080
  %(prog)s https://example.com/image.jpg --output hero --quality 90
  %(prog)s https://example.com/image.jpg --keep-ratio --dest ./public/images
        """
    )

    parser.add_argument(
        'urls',
        nargs='+',
        help='One or more image URLs to download and convert'
    )
    parser.add_argument(
        '--output', '-o',
        help='Output filename prefix (without extension). Auto-generated if not specified.'
    )
    parser.add_argument(
        '--width', '-W',
        type=int,
        default=800,
        help='Target width in pixels (default: 800)'
    )
    parser.add_argument(
        '--height', '-H',
        type=int,
        default=600,
        help='Target height in pixels (default: 600)'
    )
    parser.add_argument(
        '--quality', '-q',
        type=int,
        default=85,
        choices=range(1, 101),
        metavar='1-100',
        help='WebP quality 1-100 (default: 85)'
    )
    parser.add_argument(
        '--dest', '-d',
        type=Path,
        default=Path('./public'),
        help='Destination folder (default: ./public)'
    )
    parser.add_argument(
        '--keep-ratio', '-k',
        action='store_true',
        help='Maintain aspect ratio (fit within dimensions instead of crop to fill)'
    )

    args = parser.parse_args()

    # Ensure destination directory exists
    args.dest.mkdir(parents=True, exist_ok=True)

    # Process URLs
    total = len(args.urls)
    succeeded = 0
    failed = 0
    total_size = 0
    results = []

    print(f"\nProcessing {total} image{'s' if total > 1 else ''}...\n")

    for i, url in enumerate(args.urls):
        print(f"[{i+1}/{total}] Processing image:")

        # Use index for batch operations without explicit output name
        index = i + 1 if total > 1 and not args.output else None

        success, result, size = process_url(url, args, index)

        if success:
            succeeded += 1
            total_size += size
            results.append((url, result, size))
            print(f"  Saved: {result} ({format_size(size)})\n")
        else:
            failed += 1
            results.append((url, result, 0))
            print(f"  Error: {result}\n")

    # Summary
    print("=" * 60)
    print(f"Completed: {succeeded}/{total} images converted successfully")
    if succeeded > 0:
        print(f"Total size: {format_size(total_size)}")
        print(f"\nOutput files:")
        for url, path, size in results:
            if size > 0:
                print(f"  {path} ({format_size(size)})")

    if failed > 0:
        print(f"\nFailed ({failed}):")
        for url, error, size in results:
            if size == 0:
                print(f"  {url[:60]}{'...' if len(url) > 60 else ''}")
                print(f"    {error}")

    sys.exit(0 if failed == 0 else 1)


if __name__ == '__main__':
    main()
