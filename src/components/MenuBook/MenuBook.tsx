"use client";

import Image from "next/image";
import { usePageFlip } from "@/hooks/usePageFlip";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import { getItemsByCategory, MenuCategory } from "@/data/menuItems";
import { MenuSpread } from "./MenuSpread";
import { MenuItem } from "./MenuItem";
import { PageControls } from "./PageControls";

// Local WebP category images
const categoryImages: Record<string, string> = {
  "Appetizers": "/images/menu/truffle-burrata.webp",
  "Sushi & Sashimi": "/images/menu/chefs-omakase.webp",
  "Prime Steaks": "/images/menu/prime-ribeye.webp",
  "Burgers & Grills": "/images/menu/classic-oak-burger.webp",
  "Craft Beverages": "/images/menu/craft-beverages.webp",
  "Desserts": "/images/menu/chocolate-lava-cake.webp",
};

// Menu spreads configuration
const menuSpreads: Array<{
  id: string;
  type: "cover" | "category";
  category?: MenuCategory;
}> = [
  { id: "cover", type: "cover" },
  { id: "appetizers", type: "category", category: "Appetizers" },
  { id: "sushi", type: "category", category: "Sushi & Sashimi" },
  { id: "steaks", type: "category", category: "Prime Steaks" },
  { id: "burgers", type: "category", category: "Burgers & Grills" },
  { id: "beverages", type: "category", category: "Craft Beverages" },
  { id: "desserts", type: "category", category: "Desserts" },
];

function CoverLeft() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <svg
        className="w-20 h-20 text-[var(--color-amber)] mb-6"
        viewBox="0 0 40 40"
        fill="currentColor"
      >
        <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm0 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S6 27.732 6 20 12.268 6 20 6z" />
        <path d="M20 10c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
        <circle cx="20" cy="20" r="4" />
      </svg>
      <h1 className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-2">
        The Oak and Barrel
      </h1>
      <p className="font-script text-xl lg:text-2xl text-[var(--color-amber)] mb-8">
        Our Menu
      </p>
      <div className="w-16 h-px bg-[var(--color-sand)]" />
    </div>
  );
}

function CoverRight() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <p className="font-script text-lg text-[var(--color-amber)] mb-4">
        Welcome
      </p>
      <p className="font-body text-[var(--color-gray-warm)] leading-relaxed max-w-sm">
        Our menu is a celebration of craft and comfort. From prime dry-aged
        steaks to fresh sushi prepared daily, each dish tells a story of
        quality and passion.
      </p>
      <div className="mt-8">
        <p className="font-body text-sm text-[var(--color-gray-warm)]">
          Swipe or use arrows to explore
        </p>
      </div>
    </div>
  );
}

function CategoryLeft({ category }: { category: MenuCategory }) {
  const items = getItemsByCategory(category);
  const halfIndex = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, halfIndex);

  return (
    <div className="h-full">
      {/* Category Image */}
      <div className="relative h-32 lg:h-40 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-4 lg:mb-6 rounded-tl-lg overflow-hidden">
        <Image
          src={categoryImages[category]}
          alt={category}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-cream-soft)]" />
        <div className="absolute bottom-4 left-6 lg:left-8">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-[var(--color-charcoal)] drop-shadow-sm">
            {category}
          </h2>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-1">
        {leftItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function CategoryRight({ category }: { category: MenuCategory }) {
  const items = getItemsByCategory(category);
  const halfIndex = Math.ceil(items.length / 2);
  const rightItems = items.slice(halfIndex);

  return (
    <div className="h-full pt-2 lg:pt-8">
      <div className="space-y-1">
        {rightItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      {/* Decorative element at bottom */}
      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-[var(--color-amber)] opacity-30">
        <div className="w-8 h-px bg-current" />
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="3" />
        </svg>
        <div className="w-8 h-px bg-current" />
      </div>
    </div>
  );
}

export function MenuBook() {
  const { currentSpread, canGoNext, canGoPrev, goToNextSpread, goToPrevSpread, goToSpread } =
    usePageFlip({ totalSpreads: menuSpreads.length });

  const swipeRef = useSwipeGesture({
    onSwipeLeft: goToNextSpread,
    onSwipeRight: goToPrevSpread,
  });

  const renderSpread = (spread: typeof menuSpreads[number], index: number) => {
    const isActive = index === currentSpread;

    if (spread.type === "cover") {
      return (
        <MenuSpread
          key={spread.id}
          isActive={isActive}
          leftContent={<CoverLeft />}
          rightContent={<CoverRight />}
        />
      );
    }

    if (spread.category) {
      return (
        <MenuSpread
          key={spread.id}
          isActive={isActive}
          leftContent={<CategoryLeft category={spread.category} />}
          rightContent={<CategoryRight category={spread.category} />}
        />
      );
    }

    return null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Book Container */}
      <div
        ref={swipeRef}
        className="relative aspect-[4/3] lg:aspect-[16/10] bg-[var(--color-cream-soft)] rounded-xl shadow-[var(--shadow-xl)] overflow-hidden"
        style={{
          perspective: "2000px",
        }}
      >
        {/* Spreads */}
        {menuSpreads.map((spread, index) => renderSpread(spread, index))}

        {/* Book binding shadow */}
        <div className="absolute left-1/2 top-0 bottom-0 w-4 -ml-2 bg-gradient-to-r from-black/5 via-black/10 to-black/5 pointer-events-none hidden lg:block" />
      </div>

      {/* Controls */}
      <PageControls
        currentSpread={currentSpread}
        totalSpreads={menuSpreads.length}
        canGoNext={canGoNext}
        canGoPrev={canGoPrev}
        onNext={goToNextSpread}
        onPrev={goToPrevSpread}
        onGoToSpread={goToSpread}
      />
    </div>
  );
}
