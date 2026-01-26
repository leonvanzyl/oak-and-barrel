# Rating Components

## Overview

Star ratings are essential for displaying dish quality and customer reviews. They use the amber color palette for filled stars.

---

## Star Rating Display

Read-only star display for showing ratings.

### Specifications

| Property | Value |
|----------|-------|
| Star Size | 16px (small), 20px (default), 24px (large) |
| Star Color (filled) | `var(--color-amber)` |
| Star Color (empty) | `var(--color-sand)` |
| Gap | `var(--space-1)` |

### CSS Implementation

```css
.rating {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
}

.rating__stars {
  display: flex;
  gap: 2px;
}

.rating__star {
  width: 20px;
  height: 20px;
  color: var(--color-sand);
}

.rating__star--filled {
  color: var(--color-amber);
}

.rating__star--half {
  position: relative;
}

.rating__star--half::before {
  content: "";
  position: absolute;
  inset: 0;
  width: 50%;
  overflow: hidden;
  color: var(--color-amber);
}

.rating__value {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  margin-left: var(--space-2);
}

.rating__count {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
}

/* Sizes */
.rating--sm .rating__star {
  width: 16px;
  height: 16px;
}

.rating--lg .rating__star {
  width: 24px;
  height: 24px;
}
```

### HTML Structure

```html
<div class="rating">
  <div class="rating__stars">
    <svg class="rating__star rating__star--filled">...</svg>
    <svg class="rating__star rating__star--filled">...</svg>
    <svg class="rating__star rating__star--filled">...</svg>
    <svg class="rating__star rating__star--filled">...</svg>
    <svg class="rating__star">...</svg>
  </div>
  <span class="rating__value">4.0</span>
  <span class="rating__count">(128 reviews)</span>
</div>
```

---

## Interactive Star Rating

For users to submit ratings.

### CSS Implementation

```css
.rating-input {
  display: inline-flex;
  flex-direction: row-reverse;
  gap: 2px;
}

.rating-input__star {
  width: 32px;
  height: 32px;
  color: var(--color-sand);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.rating-input__star:hover,
.rating-input__star:hover ~ .rating-input__star {
  color: var(--color-amber-light);
  transform: scale(1.1);
}

.rating-input__radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.rating-input__radio:checked ~ .rating-input__star {
  color: var(--color-amber);
}

.rating-input__radio:focus-visible ~ .rating-input__star {
  outline: 2px solid var(--color-amber);
  outline-offset: 2px;
}
```

### HTML Structure

```html
<div class="rating-input" role="radiogroup" aria-label="Rating">
  <input type="radio" name="rating" value="5" id="star5" class="rating-input__radio">
  <label for="star5" class="rating-input__star">
    <svg>...</svg>
    <span class="sr-only">5 stars</span>
  </label>

  <input type="radio" name="rating" value="4" id="star4" class="rating-input__radio">
  <label for="star4" class="rating-input__star">
    <svg>...</svg>
    <span class="sr-only">4 stars</span>
  </label>

  <!-- ... repeat for 3, 2, 1 -->
</div>
```

---

## Rating Summary

Aggregate rating display for a product or restaurant.

```css
.rating-summary {
  display: flex;
  gap: var(--space-6);
  align-items: flex-start;
}

.rating-summary__overall {
  text-align: center;
}

.rating-summary__score {
  font-family: var(--font-display);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-charcoal);
  line-height: 1;
}

.rating-summary__total {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
  margin-top: var(--space-2);
}

.rating-summary__breakdown {
  flex: 1;
}

.rating-summary__bar {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-2);
}

.rating-summary__bar-label {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
  min-width: 60px;
}

.rating-summary__bar-track {
  flex: 1;
  height: 8px;
  background-color: var(--color-sand);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.rating-summary__bar-fill {
  height: 100%;
  background-color: var(--color-amber);
  border-radius: var(--radius-full);
  transition: width var(--duration-slow) var(--ease-smooth);
}

.rating-summary__bar-count {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
  min-width: 40px;
  text-align: right;
}
```

---

## Star Icon SVG

```html
<!-- Filled star -->
<svg viewBox="0 0 20 20" fill="currentColor">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
</svg>

<!-- Outline star -->
<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
</svg>
```

---

## Accessibility

- Use `role="img"` with `aria-label` for decorative star displays
- Interactive ratings need proper radio group semantics
- Provide screen reader text for each star option
- Ensure ratings are not the only way to convey information
- Test with keyboard navigation
