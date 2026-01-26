# Hero Components

## Overview

Hero sections create the first impression. They should be warm, inviting, and showcase the restaurant's personality through typography and imagery.

---

## Primary Hero

Full-width hero with tagline, used on the homepage.

### Structure

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│     We Serve The Taste                      ┌──────────────────┐   │
│     You Love ☺                              │                  │   │
│                                             │   [Hero Image]   │   │
│     [Description text here that             │                  │   │
│      explains the restaurant]               └──────────────────┘   │
│                                                                    │
│     [Explore Food]  ○ Search                                       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Specifications

| Property | Value |
|----------|-------|
| Min Height | 80vh (desktop), auto (mobile) |
| Background | `var(--color-cream)` |
| Padding | `var(--space-10) var(--space-7)` |
| Content Max Width | 1280px |

### CSS Implementation

```css
.hero {
  min-height: 80vh;
  background-color: var(--color-cream);
  padding: var(--space-10) var(--space-7);
  display: flex;
  align-items: center;
}

.hero__container {
  max-width: var(--container-max);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

.hero__content {
  max-width: 540px;
}

.hero__tagline {
  font-family: var(--font-script);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  line-height: var(--line-height-tight);
  margin-bottom: var(--space-5);
}

.hero__tagline-emoji {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
}

.hero__description {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  color: var(--color-gray-warm);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-6);
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.hero__search {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-gray-warm);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.hero__search:hover {
  background-color: var(--color-sand);
  color: var(--color-charcoal);
}

.hero__image-wrapper {
  position: relative;
}

.hero__image {
  width: 100%;
  max-width: 500px;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-lg);
}

/* Decorative elements */
.hero__decoration {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: var(--radius-full);
  background-color: var(--color-amber-light);
  opacity: 0.3;
  z-index: -1;
}

.hero__decoration--1 {
  top: -20px;
  right: -20px;
}

.hero__decoration--2 {
  bottom: -30px;
  left: -30px;
  width: 150px;
  height: 150px;
}

/* Responsive */
@media (max-width: 1023px) {
  .hero {
    min-height: auto;
    padding: var(--space-9) var(--space-5);
  }

  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__content {
    max-width: 100%;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__image-wrapper {
    order: -1;
    max-width: 400px;
    margin: 0 auto;
  }
}
```

---

## CTA Hero Section

Promotional section for reservations or special offers.

### Structure

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│                 Do You Have Any Dinner                             │
│                 Plan Today? Reserve Your Table                     │
│                                                                    │
│                 [Reserve Now]                                      │
│                                                    [Food Image]    │
└────────────────────────────────────────────────────────────────────┘
```

### CSS Implementation

```css
.cta-hero {
  background-color: var(--color-amber);
  padding: var(--space-9) var(--space-7);
  position: relative;
  overflow: hidden;
}

.cta-hero__container {
  max-width: var(--container-max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-7);
  align-items: center;
}

.cta-hero__heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-charcoal);
  line-height: var(--line-height-snug);
  margin-bottom: var(--space-5);
}

.cta-hero__button {
  background-color: var(--color-charcoal);
  color: var(--color-white);
  /* Rest uses .btn-primary styles */
}

.cta-hero__button:hover {
  background-color: var(--color-brown-oak);
}

.cta-hero__image {
  position: absolute;
  right: 0;
  bottom: 0;
  max-width: 40%;
  max-height: 120%;
}

@media (max-width: 767px) {
  .cta-hero__container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .cta-hero__image {
    position: relative;
    max-width: 80%;
    margin: var(--space-5) auto 0;
  }
}
```

---

## Section Header

Used to introduce content sections.

```css
.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--space-8);
}

.section-header__eyebrow {
  font-family: var(--font-script);
  font-size: var(--font-size-xl);
  color: var(--color-amber);
  margin-bottom: var(--space-2);
}

.section-header__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-charcoal);
  line-height: var(--line-height-snug);
  margin-bottom: var(--space-4);
}

.section-header__description {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  color: var(--color-gray-warm);
  line-height: var(--line-height-relaxed);
}

/* Left-aligned variant */
.section-header--left {
  text-align: left;
  margin-left: 0;
}
```

---

## Page Header

For interior pages (Menu, About, etc.).

```css
.page-header {
  background-color: var(--color-cream);
  padding: var(--space-10) var(--space-7) var(--space-8);
  text-align: center;
}

.page-header__title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-charcoal);
  margin-bottom: var(--space-4);
}

.page-header__subtitle {
  font-family: var(--font-body);
  font-size: var(--font-size-xl);
  color: var(--color-gray-warm);
  max-width: 600px;
  margin: 0 auto;
}
```

---

## Animation Patterns

### Staggered Fade In

For hero content appearing on load.

```css
.hero__content > * {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp var(--duration-slow) var(--ease-swift) forwards;
}

.hero__tagline { animation-delay: 0ms; }
.hero__description { animation-delay: 100ms; }
.hero__actions { animation-delay: 200ms; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .hero__content > * {
    opacity: 1;
    transform: none;
    animation: none;
  }
}
```

### Parallax Image (subtle)

```css
.hero__image-wrapper {
  transform: translateY(var(--scroll-y, 0));
  transition: transform 0.1s linear;
}
```

```javascript
// JavaScript for parallax
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY * 0.1;
  document.querySelector('.hero__image-wrapper')
    .style.setProperty('--scroll-y', `${scrollY}px`);
});
```
