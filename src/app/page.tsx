"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FeaturedMenu } from "@/components/FeaturedMenu";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { Footer } from "@/components/Footer";
import { ReservationModal } from "@/components/ReservationModal";

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      <Navigation onReserveClick={() => setIsReservationOpen(true)} />
      <main>
        <Hero onReserveClick={() => setIsReservationOpen(true)} />
        <FeaturedMenu />
        <UpcomingEvents />
      </main>
      <Footer />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
