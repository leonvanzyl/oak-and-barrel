# Oak & Barrel Design System

A warm, inviting design system for the Oak & Barrel restaurant website. Built to showcase artisanal cuisine with elegant typography, a rich amber palette, and appetizing card-based layouts.

---

## Quick Start

### 1. Include Fonts

Add to your HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Playfair+Display:wght@400;500;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 2. Include Design Tokens

**Option A: CSS Custom Properties**
```html
<link rel="stylesheet" href="docs/design/design-tokens.css">
```

**Option B: Tailwind CSS**
```bash
npm install tailwindcss
# Copy tailwind.config.js to your project root
```

---

## Files Overview

```
docs/design/
├── README.md                 # This file
├── style-guide.md            # Complete visual style guide
├── design-tokens.json        # Machine-readable tokens (Style Dictionary compatible)
├── design-tokens.css         # CSS custom properties
├── tailwind.config.js        # Tailwind CSS configuration
└── components/
    ├── index.md              # Component library index
    ├── buttons.md            # Button specifications
    ├── cards.md              # Card components (dishes, chefs, features)
    ├── forms.md              # Form inputs and controls
    ├── hero.md               # Hero sections and headers
    ├── navigation.md         # Navigation components
    └── ratings.md            # Star rating components
```

---

## Color Palette

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Amber | `#E8A54B` | `--color-amber` | Primary brand, CTAs |
| Cream | `#FDF6E9` | `--color-cream` | Backgrounds |
| Charcoal | `#2D2926` | `--color-charcoal` | Text |
| Sand | `#F5EBD9` | `--color-sand` | Borders, dividers |
| Warm Gray | `#6B635A` | `--color-gray-warm` | Secondary text |

---

## Typography

| Font | Usage | CSS Variable |
|------|-------|--------------|
| **Playfair Display** | Headlines, titles | `--font-display` |
| **Dancing Script** | Taglines, callouts | `--font-script` |
| **Source Sans 3** | Body text, UI | `--font-body` |

---

## Key Components

### Dish Card
The primary component for displaying menu items with image, name, rating, description, and price.

### Hero Section
Large headline with script font tagline, supporting imagery, and call-to-action buttons.

### Navigation
Sticky header with logo, links, and "Reserve Table" CTA button.

### Star Ratings
5-star rating display using amber-filled stars.

---

## Menu Data

Menu items are defined in `docs/menu-items.csv` with categories:
- Appetizers
- Sushi & Sashimi
- Prime Steaks
- Burgers & Grills
- Craft Beverages
- Desserts

Items can have badges: `popular` or `chefs-pick`

---

## Tech Stack Recommendations

This design system is framework-agnostic but works well with:

| Category | Recommended |
|----------|-------------|
| **Framework** | React, Vue, Next.js, Nuxt |
| **Styling** | Tailwind CSS or vanilla CSS |
| **Icons** | Lucide Icons, Heroicons |
| **Animation** | CSS transitions, Framer Motion |

---

## Accessibility

All components are designed to meet WCAG 2.1 AA standards:
- 4.5:1 color contrast for text
- 44px minimum touch targets
- Visible focus states
- Reduced motion support
- Screen reader compatible

---

## Reference Images

Design inspiration in `docs/design/references/`:
- `1.png` - Homepage and dish cards layout
- `2.png` - Menu grid and pricing display

---

## Usage Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oak & Barrel</title>

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;700&family=Playfair+Display:wght@400;500;700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Design Tokens -->
  <link rel="stylesheet" href="design-tokens.css">
</head>
<body style="background-color: var(--color-cream);">

  <!-- Hero -->
  <section class="hero">
    <h1 style="font-family: var(--font-script); font-size: var(--font-size-6xl); color: var(--color-charcoal);">
      We Serve The Taste You Love
    </h1>
    <button class="btn-primary">Reserve Table</button>
  </section>

  <!-- Dish Card -->
  <div class="dish-card">
    <img src="dish.jpg" alt="Truffle Burrata" class="dish-card__image">
    <h3 class="dish-card__name">Truffle Burrata</h3>
    <div class="rating">★★★★★</div>
    <p class="dish-card__description">Creamy burrata, black truffle, arugula</p>
    <div class="dish-card__footer">
      <span class="dish-card__price">$18.00</span>
      <button class="dish-card__action">Add to Cart</button>
    </div>
  </div>

</body>
</html>
```

---

*Oak & Barrel Design System v1.0.0*
