---
name: image-to-webp
description: Download images from URLs, resize them, and convert to WebP format. Use when downloading stock images from sites like Pexels for local caching.
allowed-tools:
  - Bash(python:*)
disable-model-invocation: false
---

# Image to WebP Conversion Skill

Download images from URLs (like Pexels), resize them to 800x600 by default, and convert to WebP format for storage in the project's `public/` folder.

## Usage

Run the conversion script with one or more image URLs:

```bash
python .claude/skills/image-to-webp/scripts/convert.py <url> [url2] [url3] [options]
```

## Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `urls` | One or more image URLs to download | Required |
| `--output` | Output filename prefix (without extension) | Auto-generated from URL |
| `--width` | Target width in pixels | 800 |
| `--height` | Target height in pixels | 600 |
| `--quality` | WebP quality 1-100 | 85 |
| `--dest` | Destination folder | `./public` |
| `--keep-ratio` | Maintain aspect ratio (fit within dimensions) | Off (crops to fill) |

## Examples

### Basic usage - download, resize to 800x600, convert to WebP
```bash
python .claude/skills/image-to-webp/scripts/convert.py https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg
```

### Batch processing multiple URLs
```bash
python .claude/skills/image-to-webp/scripts/convert.py \
  https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg \
  https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg
```

### Custom dimensions (e.g., for hero images)
```bash
python .claude/skills/image-to-webp/scripts/convert.py \
  https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg \
  --width 1920 --height 1080
```

### Custom output name and quality
```bash
python .claude/skills/image-to-webp/scripts/convert.py \
  https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg \
  --output hero-image --quality 90
```

### Keep aspect ratio (fits within 800x600 without cropping)
```bash
python .claude/skills/image-to-webp/scripts/convert.py \
  https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg \
  --keep-ratio
```

### Save to custom directory
```bash
python .claude/skills/image-to-webp/scripts/convert.py \
  https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg \
  --dest ./public/images
```

## Output

The script outputs the path to each created WebP file and reports the file size. For batch operations, it shows progress and a summary at the end.

## Dependencies

Requires Python 3 with Pillow and requests libraries. If not installed, run:

```bash
pip install Pillow requests
```

## Notes

- Auto-generated filenames are derived from the URL or use sequential numbering for batches
- WebP format provides excellent compression while maintaining quality
- Default 800x600 at quality 85 typically produces files of 50-150KB
- The `--keep-ratio` flag prevents cropping by fitting the image within the target dimensions
