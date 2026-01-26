# Card Components

## Overview

Cards are the primary content containers, especially for menu items and dishes. They should feel warm and appetizing, inviting users to explore.

---

## Dish Card

The primary card type for displaying menu items.

### Structure

```
┌─────────────────────────────┐
│                             │
│         [Image]             │
│                             │
├─────────────────────────────┤
│  Dish Name                  │
│  ★★★★★                      │
│                             │
│  Short description text     │
│  that may wrap to two...    │
│                             │
│  $35.00          [Add Cart] │
└─────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Width | 280px (fixed) or fluid in grid |
| Background | `var(--color-cream-soft)` |
| Border Radius | `var(--radius-xl)` (16px) |
| Shadow | `var(--shadow-sm)` |
| Hover Shadow | `var(--shadow-md)` |
| Padding | `var(--space-5)` (24px) |
| Image Aspect | 1:1 (square) |
| Image Radius | `var(--radius-lg)` (12px) |

### CSS Implementation

```css
.dish-card {
  background-color: var(--color-cream-soft);
  border-radius: var(--radius-xl);
  padding: var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-smooth);
  cursor: pointer;
}

.dish-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.dish-card__image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-4);
}

.dish-card__name {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  margin-bottom: var(--space-2);
}

.dish-card__rating {
  display: flex;
  gap: var(--space-1);
  margin-bottom: var(--space-3);
}

.dish-card__rating-star {
  width: 16px;
  height: 16px;
  color: var(--color-amber);
}

.dish-card__rating-star--empty {
  color: var(--color-sand);
}

.dish-card__description {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-4);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dish-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dish-card__price {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-charcoal);
}

.dish-card__action {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-amber);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.dish-card__action:hover {
  background-color: var(--color-amber);
  color: var(--color-white);
}
```

---

## Chef Card

For displaying chef/staff profiles.

### Structure

```
┌─────────────────────────────┐
│                             │
│       ┌─────────┐           │
│       │  Photo  │           │
│       │ (circle)│           │
│       └─────────┘           │
│                             │
│       Chef Name             │
│       Title/Role            │
│                             │
└─────────────────────────────┘
```

### CSS Implementation

```css
.chef-card {
  text-align: center;
  padding: var(--space-5);
}

.chef-card__image {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-full);
  object-fit: cover;
  margin: 0 auto var(--space-4);
  border: 3px solid var(--color-amber-light);
}

.chef-card__name {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  margin-bottom: var(--space-1);
}

.chef-card__role {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
}
```

---

## Feature Card

For highlighting services and features.

### Structure

```
┌─────────────────────────────┐
│   [Icon]                    │
│                             │
│   Feature Title             │
│   Description text here     │
└─────────────────────────────┘
```

### CSS Implementation

```css
.feature-card {
  padding: var(--space-5);
}

.feature-card__icon {
  width: 48px;
  height: 48px;
  color: var(--color-amber);
  margin-bottom: var(--space-4);
}

.feature-card__title {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  margin-bottom: var(--space-2);
}

.feature-card__description {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
  line-height: var(--line-height-relaxed);
}
```

---

## Testimonial Card

For customer reviews and testimonials.

### CSS Implementation

```css
.testimonial-card {
  background-color: var(--color-cream-soft);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
}

.testimonial-card__quote {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  font-style: italic;
  color: var(--color-charcoal);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-5);
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.testimonial-card__avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
  object-fit: cover;
}

.testimonial-card__name {
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  color: var(--color-charcoal);
}

.testimonial-card__meta {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
}
```

---

## Card Grid Layout

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
}

/* 4 columns on large screens */
@media (min-width: 1280px) {
  .card-grid--dishes {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* 3 columns on medium screens */
@media (min-width: 768px) and (max-width: 1279px) {
  .card-grid--dishes {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 2 columns on small screens */
@media (min-width: 480px) and (max-width: 767px) {
  .card-grid--dishes {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## Accessibility

- Cards must have appropriate heading hierarchy
- Interactive cards need `role="button"` or be wrapped in `<a>` or `<button>`
- Ensure sufficient color contrast for text
- Provide alt text for all images
- Add to cart buttons must have accessible labels
