import { ReactNode } from "react";

interface MenuPageProps {
  children: ReactNode;
  side: "left" | "right";
  className?: string;
}

export function MenuPage({ children, side, className = "" }: MenuPageProps) {
  return (
    <div
      className={`
        relative w-full h-full p-6 lg:p-8
        bg-gradient-to-br from-[var(--color-cream-soft)] to-[var(--color-cream)]
        ${side === "left" ? "rounded-l-lg" : "rounded-r-lg"}
        ${className}
      `}
    >
      {/* Paper texture overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNjY2MiPjwvcmVjdD4KPC9zdmc+')]" />

      {/* Decorative corner ornaments */}
      <div className={`absolute top-4 ${side === "left" ? "left-4" : "right-4"} w-8 h-8 opacity-20`}>
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" className="text-[var(--color-amber)]">
          <path d="M2 2 L2 12 M2 2 L12 2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className={`absolute bottom-4 ${side === "left" ? "left-4" : "right-4"} w-8 h-8 opacity-20 rotate-180`}>
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" className="text-[var(--color-amber)]">
          <path d="M2 2 L2 12 M2 2 L12 2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full overflow-y-auto">
        {children}
      </div>

      {/* Page fold shadow for center spine */}
      {side === "right" && (
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
      )}
      {side === "left" && (
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
      )}
    </div>
  );
}
