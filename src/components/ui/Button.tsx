"use client";

import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-amber)] text-white
    hover:bg-[var(--color-amber-deep)] hover:shadow-[var(--shadow-glow)]
    hover:-translate-y-0.5
    active:translate-y-0 active:shadow-[var(--shadow-sm)]
    focus-visible:outline-[var(--color-amber-deep)]
  `,
  secondary: `
    bg-transparent text-[var(--color-amber)] border-2 border-[var(--color-amber)]
    hover:bg-[var(--color-amber)] hover:text-white
  `,
  ghost: `
    bg-transparent text-[var(--color-charcoal)]
    hover:bg-[var(--color-sand)] hover:text-[var(--color-amber-deep)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-lg",
  md: "h-12 px-8 text-base rounded-full",
  lg: "h-14 px-10 text-lg rounded-full",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          font-body font-semibold
          transition-all duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
          shadow-[var(--shadow-sm)]
          disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${isLoading ? "relative text-transparent pointer-events-none" : ""}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...props}
      >
        {leftIcon && !isLoading && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && !isLoading && <span className="flex-shrink-0">{rightIcon}</span>}
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-5 h-5 border-2 border-current border-r-transparent rounded-full animate-spin" />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
