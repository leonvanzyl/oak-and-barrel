# Button Components

## Overview

Buttons are the primary interactive elements for user actions. They should feel warm and inviting while clearly communicating interactivity.

---

## Button Variants

### Primary Button

The main call-to-action button. Used for primary actions like "Reserve Table", "Add to Cart", "Order Now".

```css
.btn-primary {
  background-color: var(--color-amber);
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--color-amber-deep);
  box-shadow: var(--shadow-glow);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-amber-deep);
  outline-offset: 2px;
}
```

**Specifications:**
- Height: 48px (default), 40px (small), 56px (large)
- Min-width: 120px
- Border-radius: Full (pill shape)
- Text: Semibold, sentence case

---

### Secondary Button

For secondary actions. Outlined style that complements primary buttons.

```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-amber);
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-base);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  border: 2px solid var(--color-amber);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.btn-secondary:hover {
  background-color: var(--color-amber);
  color: var(--color-white);
}
```

---

### Ghost Button

Minimal button for tertiary actions.

```css
.btn-ghost {
  background-color: transparent;
  color: var(--color-charcoal);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.btn-ghost:hover {
  background-color: var(--color-sand);
  color: var(--color-amber-deep);
}
```

---

### Icon Button

For icon-only buttons (cart, menu toggle, etc.).

```css
.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.btn-icon:hover {
  background-color: var(--color-sand);
}

.btn-icon svg {
  width: 24px;
  height: 24px;
  color: var(--color-charcoal);
}
```

---

## Button Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 36px | 8px 16px | 14px |
| Default | 48px | 12px 32px | 16px |
| Large | 56px | 16px 40px | 18px |

---

## Button States

| State | Description |
|-------|-------------|
| Default | Base appearance |
| Hover | Slightly elevated, color shift |
| Active/Pressed | Pressed down effect |
| Focus | Visible focus ring |
| Disabled | 50% opacity, no pointer events |
| Loading | Spinner icon, disabled interaction |

### Disabled State

```css
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Loading State

```css
.btn--loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn--loading::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Button with Icon

```css
.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.btn-with-icon svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
```

---

## Usage Guidelines

### Do
- Use primary buttons for the main action on a page
- Limit to one primary button per section
- Use clear, action-oriented labels ("Reserve Now" not "Submit")
- Ensure adequate touch targets (44px minimum)

### Don't
- Don't use multiple primary buttons in close proximity
- Don't use vague labels ("Click Here", "Submit")
- Don't disable buttons without explanation
- Don't use icon-only buttons without accessible labels
