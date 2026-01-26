"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";
import { FounderSection } from "@/components/FounderSection";
import { ValuesSection } from "@/components/ValuesSection";

export default function AboutPage() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <Navigation onReserveClick={() => setIsReservationOpen(true)} />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-[var(--color-cream)] py-16 lg:py-24 text-center">
          <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12">
            <span className="font-script text-xl text-[var(--color-amber)] block mb-2">
              Get to Know Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-charcoal)] mb-4">
              Our Story
            </h1>
            <p className="font-body text-xl text-[var(--color-gray-warm)] max-w-2xl mx-auto leading-relaxed">
              From a small neighborhood spot to a Manhattan favorite, discover the
              passion and people behind The Oak and Barrel.
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-12 h-px bg-[var(--color-sand)]" />
              <svg
                className="w-6 h-6 text-[var(--color-amber)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <div className="w-12 h-px bg-[var(--color-sand)]" />
            </div>
          </div>
        </section>

        <FounderSection />
        <ValuesSection />

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-[var(--color-amber)]">
          <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
              Ready to Experience The Oak and Barrel?
            </h2>
            <p className="font-body text-lg text-[var(--color-charcoal)]/80 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable dining experience. We can&apos;t wait to welcome you.
            </p>
            <button
              onClick={() => setIsReservationOpen(true)}
              className="inline-flex items-center justify-center h-14 px-10 bg-[var(--color-charcoal)] text-white font-body font-semibold text-lg rounded-full hover:bg-[var(--color-brown-oak)] transition-colors duration-[var(--duration-fast)] shadow-[var(--shadow-lg)]"
            >
              Reserve Your Table
            </button>
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
