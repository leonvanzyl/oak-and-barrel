import { MenuItem as MenuItemType } from "@/data/menuItems";
import { MenuBadge } from "../ui/Badge";

interface MenuItemProps {
  item: MenuItemType;
  showDescription?: boolean;
}

export function MenuItem({ item, showDescription = true }: MenuItemProps) {
  return (
    <div className="py-3 border-b border-[var(--color-sand)]/50 last:border-b-0">
      <div className="flex items-start justify-between gap-2 mb-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-display text-base lg:text-lg font-medium text-[var(--color-charcoal)]">
            {item.name}
          </h4>
          {item.badge && <MenuBadge badge={item.badge} />}
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <span className="hidden sm:block flex-grow border-b border-dotted border-[var(--color-sand)] min-w-[20px]" />
          <span className="font-body text-base lg:text-lg font-semibold text-[var(--color-charcoal)]">
            ${item.price}
          </span>
        </div>
      </div>
      {showDescription && (
        <p className="font-body text-sm text-[var(--color-gray-warm)] leading-relaxed pr-16">
          {item.description}
        </p>
      )}
    </div>
  );
}
