import { ReactNode } from "react";
import { MenuPage } from "./MenuPage";

interface MenuSpreadProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  isActive: boolean;
}

export function MenuSpread({ leftContent, rightContent, isActive }: MenuSpreadProps) {
  return (
    <div
      className={`
        absolute inset-0
        transition-opacity duration-[var(--duration-slower)] ease-[var(--ease-smooth)]
        ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}
      `}
    >
      {/* Desktop: Two-page spread */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full">
        <MenuPage side="left">
          {leftContent}
        </MenuPage>
        <MenuPage side="right">
          {rightContent}
        </MenuPage>
      </div>

      {/* Mobile: Single page with combined content */}
      <div className="lg:hidden h-full">
        <MenuPage side="right">
          <div className="space-y-6">
            {leftContent}
            <div className="border-t border-[var(--color-sand)] pt-6">
              {rightContent}
            </div>
          </div>
        </MenuPage>
      </div>
    </div>
  );
}
