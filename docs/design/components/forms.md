# Form Components

## Overview

Forms should feel welcoming and easy to complete. They're used for reservations, contact, search, and cart interactions.

---

## Text Input

### Specifications

| Property | Value |
|----------|-------|
| Height | 48px |
| Background | `var(--color-white)` |
| Border | 1px solid `var(--color-sand)` |
| Border Radius | `var(--radius-md)` |
| Padding | `var(--space-3) var(--space-4)` |
| Font Size | `var(--font-size-base)` |

### CSS Implementation

```css
.input {
  width: 100%;
  height: 48px;
  background-color: var(--color-white);
  border: 1px solid var(--color-sand);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-charcoal);
  transition: all var(--duration-fast) var(--ease-smooth);
}

.input::placeholder {
  color: var(--color-gray-warm);
}

.input:hover {
  border-color: var(--color-gray-warm);
}

.input:focus {
  outline: none;
  border-color: var(--color-amber);
  box-shadow: 0 0 0 3px rgba(232, 165, 75, 0.15);
}

.input:disabled {
  background-color: var(--color-sand);
  cursor: not-allowed;
  opacity: 0.7;
}

/* Error state */
.input--error {
  border-color: var(--color-error);
}

.input--error:focus {
  box-shadow: 0 0 0 3px rgba(196, 91, 74, 0.15);
}

/* Success state */
.input--success {
  border-color: var(--color-success);
}
```

---

## Input with Icon

```css
.input-group {
  position: relative;
}

.input-group__icon {
  position: absolute;
  left: var(--space-4);
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--color-gray-warm);
  pointer-events: none;
}

.input-group__input {
  padding-left: calc(var(--space-4) + 20px + var(--space-2));
}

/* Icon on right (e.g., search, clear) */
.input-group__icon--right {
  left: auto;
  right: var(--space-4);
}

.input-group__input--icon-right {
  padding-left: var(--space-4);
  padding-right: calc(var(--space-4) + 20px + var(--space-2));
}
```

---

## Textarea

```css
.textarea {
  width: 100%;
  min-height: 120px;
  background-color: var(--color-white);
  border: 1px solid var(--color-sand);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-charcoal);
  resize: vertical;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.textarea:focus {
  outline: none;
  border-color: var(--color-amber);
  box-shadow: 0 0 0 3px rgba(232, 165, 75, 0.15);
}
```

---

## Select Dropdown

```css
.select {
  width: 100%;
  height: 48px;
  background-color: var(--color-white);
  border: 1px solid var(--color-sand);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  padding-right: calc(var(--space-4) + 24px);
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-charcoal);
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B635A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  background-size: 20px;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.select:focus {
  outline: none;
  border-color: var(--color-amber);
  box-shadow: 0 0 0 3px rgba(232, 165, 75, 0.15);
}
```

---

## Checkbox

```css
.checkbox {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
}

.checkbox__input {
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: var(--color-white);
  border: 2px solid var(--color-sand);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
  position: relative;
}

.checkbox__input:hover {
  border-color: var(--color-amber);
}

.checkbox__input:checked {
  background-color: var(--color-amber);
  border-color: var(--color-amber);
}

.checkbox__input:checked::after {
  content: "";
  position: absolute;
  left: 5px;
  top: 2px;
  width: 6px;
  height: 10px;
  border: solid var(--color-white);
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox__input:focus-visible {
  outline: 2px solid var(--color-amber);
  outline-offset: 2px;
}

.checkbox__label {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-charcoal);
}
```

---

## Radio Button

```css
.radio {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
}

.radio__input {
  width: 20px;
  height: 20px;
  appearance: none;
  background-color: var(--color-white);
  border: 2px solid var(--color-sand);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-smooth);
  position: relative;
}

.radio__input:hover {
  border-color: var(--color-amber);
}

.radio__input:checked {
  border-color: var(--color-amber);
}

.radio__input:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  background-color: var(--color-amber);
  border-radius: var(--radius-full);
}

.radio__label {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-charcoal);
}
```

---

## Form Label

```css
.label {
  display: block;
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-charcoal);
  margin-bottom: var(--space-2);
}

.label--required::after {
  content: " *";
  color: var(--color-error);
}
```

---

## Form Helper Text

```css
.helper-text {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  color: var(--color-gray-warm);
  margin-top: var(--space-1);
}

.helper-text--error {
  color: var(--color-error);
}

.helper-text--success {
  color: var(--color-success);
}
```

---

## Search Input

Special input for search functionality.

```css
.search {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.search__input {
  width: 100%;
  height: 48px;
  background-color: var(--color-white);
  border: 1px solid var(--color-sand);
  border-radius: var(--radius-full);
  padding: var(--space-3) var(--space-5);
  padding-left: calc(var(--space-5) + 20px + var(--space-2));
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-charcoal);
}

.search__icon {
  position: absolute;
  left: var(--space-5);
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: var(--color-gray-warm);
}

.search__clear {
  position: absolute;
  right: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-gray-warm);
  border-radius: var(--radius-full);
  opacity: 0;
  transition: all var(--duration-fast) var(--ease-smooth);
}

.search__input:not(:placeholder-shown) ~ .search__clear {
  opacity: 1;
}

.search__clear:hover {
  background-color: var(--color-sand);
  color: var(--color-charcoal);
}
```

---

## Reservation Form Layout

Example form structure for table reservations.

```css
.reservation-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
  max-width: 600px;
}

.reservation-form__field--full {
  grid-column: 1 / -1;
}

@media (max-width: 479px) {
  .reservation-form {
    grid-template-columns: 1fr;
  }
}
```

---

## Accessibility

- Always associate labels with inputs using `for` and `id`
- Provide clear error messages
- Don't rely on color alone for error states
- Ensure 44px minimum touch targets
- Support keyboard navigation
- Use `aria-describedby` for helper text
- Mark required fields with `aria-required="true"`
