# Navigation Components

## Overview

Navigation should be clear, unobtrusive, and warmly inviting. It guides users through the dining experience without drawing attention away from the food.

---

## Main Navigation Bar

### Structure

```
┌──────────────────────────────────────────────────────────────────┐
│  [Logo]     About Us  Menu  Reviews  Blog  Contact   [Reserve]  │
└──────────────────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Height | 80px (desktop), 64px (mobile) |
| Background | `var(--color-cream)` or transparent |
| Padding | `0 var(--space-7)` |
| Position | Fixed top |
| Z-index | `var(--z-sticky)` |

### CSS Implementation

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: var(--color-cream);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-7);
  z-index: var(--z-sticky);
  transition: all var(--duration-normal) var(--ease-smooth);
}

/* Scrolled state - add subtle shadow */
.navbar--scrolled {
  box-shadow: var(--shadow-sm);
}

/* Transparent variant for hero sections */
.navbar--transparent {
  background-color: transparent;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.navbar__logo-icon {
  width: 40px;
  height: 40px;
  color: var(--color-amber);
}

.navbar__logo-text {
  font-family: var(--font-display);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-charcoal);
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.navbar__link {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  text-decoration: none;
  padding: var(--space-2) var(--space-1);
  position: relative;
  transition: color var(--duration-fast) var(--ease-smooth);
}

.navbar__link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-amber);
  transition: width var(--duration-normal) var(--ease-smooth);
}

.navbar__link:hover {
  color: var(--color-amber);
}

.navbar__link:hover::after,
.navbar__link--active::after {
  width: 100%;
}

.navbar__link--active {
  color: var(--color-amber);
}

.navbar__cta {
  /* Use .btn-primary styles */
}

/* Mobile menu toggle */
.navbar__toggle {
  display: none;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 1023px) {
  .navbar {
    height: 64px;
    padding: 0 var(--space-5);
  }

  .navbar__links {
    display: none;
  }

  .navbar__toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
```

---

## Mobile Navigation

Slide-in drawer from the right.

### CSS Implementation

```css
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 320px;
  background-color: var(--color-cream);
  z-index: var(--z-modal);
  transform: translateX(100%);
  transition: transform var(--duration-slow) var(--ease-swift);
  padding: var(--space-7) var(--space-5);
}

.mobile-nav--open {
  transform: translateX(0);
}

.mobile-nav__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-7);
}

.mobile-nav__close {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-nav__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.mobile-nav__link {
  font-family: var(--font-display);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  text-decoration: none;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--color-sand);
  transition: color var(--duration-fast) var(--ease-smooth);
}

.mobile-nav__link:hover {
  color: var(--color-amber);
}

.mobile-nav__cta {
  margin-top: var(--space-7);
  width: 100%;
}

/* Backdrop */
.mobile-nav-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(45, 41, 38, 0.5);
  z-index: calc(var(--z-modal) - 1);
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal) var(--ease-smooth);
}

.mobile-nav-backdrop--visible {
  opacity: 1;
  visibility: visible;
}
```

---

## Breadcrumbs

For secondary navigation within pages.

```css
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
}

.breadcrumbs__item {
  color: var(--color-gray-warm);
  text-decoration: none;
}

.breadcrumbs__item:hover {
  color: var(--color-amber);
}

.breadcrumbs__separator {
  color: var(--color-sand);
}

.breadcrumbs__current {
  color: var(--color-charcoal);
  font-weight: var(--font-weight-medium);
}
```

---

## Tab Navigation

For filtering menu categories.

```css
.tabs {
  display: flex;
  gap: var(--space-2);
  border-bottom: 1px solid var(--color-sand);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.tabs__item {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-warm);
  padding: var(--space-3) var(--space-4);
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: color var(--duration-fast) var(--ease-smooth);
}

.tabs__item::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-amber);
  transform: scaleX(0);
  transition: transform var(--duration-normal) var(--ease-smooth);
}

.tabs__item:hover {
  color: var(--color-charcoal);
}

.tabs__item--active {
  color: var(--color-amber);
}

.tabs__item--active::after {
  transform: scaleX(1);
}
```

---

## Footer Navigation

```css
.footer {
  background-color: var(--color-charcoal);
  color: var(--color-cream);
  padding: var(--space-9) var(--space-7);
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-7);
  max-width: var(--container-max);
  margin: 0 auto;
}

.footer__heading {
  font-family: var(--font-display);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-4);
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__link {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-sand);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-smooth);
}

.footer__link:hover {
  color: var(--color-amber-light);
}

@media (max-width: 767px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 479px) {
  .footer__grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Accessibility

- Use semantic `<nav>` elements
- Include `aria-label` for multiple nav regions
- Mark current page with `aria-current="page"`
- Ensure keyboard navigation works
- Mobile menu should trap focus when open
- Close button should be first focusable element in mobile nav
