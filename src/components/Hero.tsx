"use client";

import Image from "next/image";
import { Button } from "./ui/Button";

interface HeroProps {
  onReserveClick: () => void;
}

export function Hero({ onReserveClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-[var(--color-cream)] pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-[10%] w-64 h-64 bg-[var(--color-amber-light)]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-[5%] w-96 h-96 bg-[var(--color-amber)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[var(--container-max)] mx-auto px-6 lg:px-12 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-charcoal)] leading-tight mb-4">
              The Oak and Barrel
            </h1>
            <p className="font-script text-2xl sm:text-3xl lg:text-4xl text-[var(--color-amber)] mb-6">
              Where Craft Meets Comfort
            </p>
            <p className="font-body text-lg text-[var(--color-gray-warm)] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              A family-friendly New York destination for those who appreciate the art of fine dining.
              From prime dry-aged steaks to fresh sushi, craft beers to live music on Fridays and Sundays
              - every visit is a celebration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button onClick={onReserveClick} size="lg">
                Reserve a Table
              </Button>
              <Button variant="secondary" size="lg" onClick={() => {
                document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
              }}>
                View Menu
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-[var(--color-sand)]">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[var(--color-charcoal)]">20+</p>
                <p className="font-body text-sm text-[var(--color-gray-warm)]">Years of Excellence</p>
              </div>
              <div className="w-px h-12 bg-[var(--color-sand)]" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[var(--color-charcoal)]">4.8</p>
                <p className="font-body text-sm text-[var(--color-gray-warm)]">Guest Rating</p>
              </div>
              <div className="w-px h-12 bg-[var(--color-sand)]" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-[var(--color-charcoal)]">Live</p>
                <p className="font-body text-sm text-[var(--color-gray-warm)]">Music Weekends</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] lg:aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-amber-light)] rounded-full opacity-40 z-0" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--color-amber)] rounded-full opacity-30 z-0" />

              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                <Image
                  src="/images/hero/restaurant-interior.webp"
                  alt="Elegant restaurant interior with warm lighting"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-4 -left-4 lg:-left-8 z-20 bg-white rounded-xl p-4 shadow-[var(--shadow-lg)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-amber)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--color-amber)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-xs text-[var(--color-gray-warm)]">Open Now</p>
                    <p className="font-display text-sm font-semibold text-[var(--color-charcoal)]">Until 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
