"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";
import { MenuBook } from "@/components/MenuBook";

export default function MenuPage() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <Navigation onReserveClick={() => setIsReservationOpen(true)} />
      <main className="pt-20 bg-[var(--color-cream)]">
        {/* Page Header */}
        <section className="py-12 lg:py-16 text-center">
          <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12">
            <span className="font-script text-xl text-[var(--color-amber)] block mb-2">
              Crafted with Passion
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-charcoal)] mb-4">
              Our Menu
            </h1>
            <p className="font-body text-xl text-[var(--color-gray-warm)] max-w-2xl mx-auto leading-relaxed">
              Browse our carefully curated selection of dishes. Each item is prepared
              with the finest ingredients and crafted to perfection.
            </p>
          </div>
        </section>

        {/* Menu Book */}
        <section className="pb-16 lg:pb-24 px-4 lg:px-6">
          <MenuBook />
        </section>

        {/* Additional Info */}
        <section className="py-12 lg:py-16 bg-[var(--color-sand)]">
          <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {/* Dietary Info */}
              <div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-amber)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-amber)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  Dietary Options
                </h3>
                <p className="font-body text-sm text-[var(--color-gray-warm)]">
                  Vegetarian, gluten-free, and allergy-friendly options available.
                  Please inform your server of any dietary requirements.
                </p>
              </div>

              {/* Seasonal */}
              <div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-amber)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-amber)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  Seasonal Specials
                </h3>
                <p className="font-body text-sm text-[var(--color-gray-warm)]">
                  Ask about our daily specials featuring seasonal ingredients
                  sourced from local farms and suppliers.
                </p>
              </div>

              {/* Private Dining */}
              <div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--color-amber)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-amber)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                  Private Events
                </h3>
                <p className="font-body text-sm text-[var(--color-gray-warm)]">
                  Hosting a special occasion? We offer private dining rooms
                  and custom menus for groups of 10 or more.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
