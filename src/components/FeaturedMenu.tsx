"use client";

import Image from "next/image";
import Link from "next/link";
import { getFeaturedItems, MenuItem } from "@/data/menuItems";
import { MenuBadge } from "./ui/Badge";
import { Button } from "./ui/Button";

// Local WebP image mapping for featured items
const itemImages: Record<string, string> = {
  "Truffle Burrata": "/images/menu/truffle-burrata.webp",
  "Wagyu Beef Tartare": "/images/menu/wagyu-tartare.webp",
  "Chef's Omakase": "/images/menu/chefs-omakase.webp",
  "Dragon Roll": "/images/menu/dragon-roll.webp",
  "Prime Ribeye": "/images/menu/prime-ribeye.webp",
  "Filet Mignon": "/images/menu/filet-mignon.webp",
  "The Classic Oak": "/images/menu/classic-oak-burger.webp",
  "Wagyu Smash Burger": "/images/menu/wagyu-smash-burger.webp",
  "House Cabernet": "/images/menu/house-cabernet.webp",
  "Chocolate Lava Cake": "/images/menu/chocolate-lava-cake.webp",
  "Crème Brûlée": "/images/menu/creme-brulee.webp",
};

function getItemImage(name: string): string {
  return itemImages[name] || "/images/menu/default-dish.webp";
}

function DishCard({ item }: { item: MenuItem }) {
  return (
    <article className="group bg-[var(--color-cream-soft)] rounded-xl p-5 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-[var(--duration-normal)] ease-[var(--ease-smooth)]">
      {/* Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
        <Image
          src={getItemImage(item.name)}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-[var(--duration-slow)]"
        />
        {item.badge && (
          <div className="absolute top-3 left-3">
            <MenuBadge badge={item.badge} />
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-medium text-[var(--color-charcoal)] mb-2">
        {item.name}
      </h3>
      <p className="font-body text-sm text-[var(--color-gray-warm)] leading-relaxed mb-4 line-clamp-2">
        {item.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="font-body text-lg font-bold text-[var(--color-charcoal)]">
          ${item.price}
        </span>
        <span className="font-body text-sm text-[var(--color-gray-warm)]">
          {item.category}
        </span>
      </div>
    </article>
  );
}

export function FeaturedMenu() {
  const featuredItems = getFeaturedItems(6);

  return (
    <section id="featured" className="py-20 lg:py-32 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="font-script text-xl text-[var(--color-amber)] block mb-2">
            From Our Kitchen
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
            Our Favorites
          </h2>
          <p className="font-body text-lg text-[var(--color-gray-warm)] leading-relaxed">
            Discover the dishes that have made us a Manhattan favorite. Each plate is crafted
            with passion and the finest ingredients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredItems.map((item) => (
            <DishCard key={item.id} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/menu">
            <Button variant="secondary" size="lg">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
