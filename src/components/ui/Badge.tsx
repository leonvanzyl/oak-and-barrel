import { ReactNode } from "react";

type BadgeVariant = "popular" | "chefs-pick" | "default";

interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  popular: "bg-[var(--color-amber)] text-white",
  "chefs-pick": "bg-[var(--color-charcoal)] text-white",
  default: "bg-[var(--color-sand)] text-[var(--color-charcoal)]",
};

export function Badge({ variant = "default", children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        px-2.5 py-0.5
        text-xs font-semibold font-body
        rounded-full
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

export function MenuBadge({ badge }: { badge: "popular" | "chefs-pick" | null }) {
  if (!badge) return null;

  return (
    <Badge variant={badge}>
      {badge === "popular" ? "Popular" : "Chef's Pick"}
    </Badge>
  );
}
