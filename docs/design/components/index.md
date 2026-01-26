# Component Library Index

## Overview

This document provides an index of all UI components in the Oak & Barrel design system, organized by category.

---

## Core Components

### Interactive

| Component | File | Description |
|-----------|------|-------------|
| **Buttons** | [buttons.md](./buttons.md) | Primary, secondary, ghost, and icon buttons |
| **Forms** | [forms.md](./forms.md) | Inputs, textareas, selects, checkboxes, radios |
| **Ratings** | [ratings.md](./ratings.md) | Star ratings (display and interactive) |

### Layout

| Component | File | Description |
|-----------|------|-------------|
| **Navigation** | [navigation.md](./navigation.md) | Navbar, mobile nav, tabs, breadcrumbs, footer |
| **Hero** | [hero.md](./hero.md) | Hero sections, CTAs, page headers |
| **Cards** | [cards.md](./cards.md) | Dish cards, chef cards, feature cards, testimonials |

---

## Component Checklist

### Implemented

- [x] Buttons (primary, secondary, ghost, icon)
- [x] Text inputs
- [x] Textarea
- [x] Select dropdown
- [x] Checkbox
- [x] Radio button
- [x] Search input
- [x] Form labels & helpers
- [x] Navigation bar
- [x] Mobile navigation
- [x] Breadcrumbs
- [x] Tab navigation
- [x] Footer
- [x] Primary hero
- [x] CTA hero section
- [x] Section headers
- [x] Page headers
- [x] Dish card
- [x] Chef card
- [x] Feature card
- [x] Testimonial card
- [x] Star ratings (display)
- [x] Star ratings (interactive)
- [x] Rating summary

### Future Components

- [ ] Modal/Dialog
- [ ] Toast notifications
- [ ] Dropdown menu
- [ ] Cart drawer
- [ ] Image gallery/lightbox
- [ ] Date picker (for reservations)
- [ ] Time picker
- [ ] Guest counter (+/-)
- [ ] Price display
- [ ] Badge/Tag
- [ ] Avatar
- [ ] Skeleton loaders
- [ ] Empty states
- [ ] Error states
- [ ] Pagination
- [ ] Accordion/FAQ

---

## Usage Guidelines

### Importing Styles

```html
<!-- Link design tokens CSS -->
<link rel="stylesheet" href="/styles/design-tokens.css">

<!-- Link component styles -->
<link rel="stylesheet" href="/styles/components.css">
```

### Using CSS Variables

All components use CSS custom properties from `design-tokens.css`:

```css
.my-component {
  /* Colors */
  color: var(--color-charcoal);
  background: var(--color-cream);

  /* Typography */
  font-family: var(--font-body);
  font-size: var(--font-size-base);

  /* Spacing */
  padding: var(--space-4);
  margin-bottom: var(--space-6);

  /* Effects */
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);

  /* Motion */
  transition: all var(--duration-normal) var(--ease-smooth);
}
```

### Component Naming Convention

We use BEM (Block Element Modifier) naming:

```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__image { }

/* Modifier */
.card--featured { }
.card--compact { }
```

---

## Responsive Patterns

### Mobile-First Breakpoints

```css
/* Base styles (mobile) */
.component { }

/* Tablet and up */
@media (min-width: 768px) {
  .component { }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component { }
}

/* Large desktop */
@media (min-width: 1280px) {
  .component { }
}
```

### Common Responsive Adjustments

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Container padding | 24px | 48px | 64px |
| Section spacing | 64px | 96px | 128px |
| Grid columns | 1-2 | 2-3 | 3-4 |
| Font scale | 0.9x | 1x | 1x |

---

## Accessibility Checklist

All components should meet these requirements:

- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for text)
- [ ] Focus states are visible
- [ ] Touch targets are 44x44px minimum
- [ ] Reduced motion is respected
- [ ] Screen reader text is provided where needed
- [ ] Keyboard navigation works
- [ ] ARIA attributes are correct
- [ ] Semantic HTML is used

---

## Related Files

| File | Description |
|------|-------------|
| [../style-guide.md](../style-guide.md) | Complete style guide |
| [../design-tokens.json](../design-tokens.json) | Machine-readable tokens |
| [../design-tokens.css](../design-tokens.css) | CSS custom properties |

---

*Last updated: January 2026*
