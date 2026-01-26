import Image from "next/image";

interface Event {
  id: string;
  title: string;
  day: string;
  time: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    id: "friday",
    title: "Friday Evening Jazz",
    day: "Every Friday",
    time: "7:00 PM - 10:00 PM",
    description: "Unwind after a long week with smooth jazz and acoustic performances. Our rotating lineup of local artists creates the perfect backdrop for an intimate dinner.",
    image: "/images/events/friday-jazz.webp",
  },
  {
    id: "sunday",
    title: "Sunday Family Sessions",
    day: "Every Sunday",
    time: "2:00 PM - 5:00 PM",
    description: "Bring the whole family for our afternoon music sessions. Enjoy lighter acoustic performances perfect for a relaxed Sunday lunch with loved ones.",
    image: "/images/events/sunday-family.webp",
  },
];

function EventCard({ event }: { event: Event }) {
  return (
    <article className="group relative bg-[var(--color-cream-soft)] rounded-2xl overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-normal)]">
      {/* Image */}
      <div className="relative h-64 lg:h-72 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-[var(--duration-slow)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 bg-[var(--color-amber)] text-white px-3 py-1.5 rounded-full font-body text-sm font-semibold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            Live Music
          </span>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl font-bold text-white mb-1">
            {event.title}
          </h3>
          <div className="flex items-center gap-3 text-white/80 font-body text-sm">
            <span>{event.day}</span>
            <span className="w-1 h-1 rounded-full bg-white/60" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-body text-[var(--color-gray-warm)] leading-relaxed">
          {event.description}
        </p>
      </div>
    </article>
  );
}

export function UpcomingEvents() {
  return (
    <section className="py-20 lg:py-32 bg-[var(--color-sand)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="font-script text-xl text-[var(--color-amber)] block mb-2">
            Join Us
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
            Live Music & Events
          </h2>
          <p className="font-body text-lg text-[var(--color-gray-warm)] leading-relaxed">
            Great food deserves great atmosphere. Join us for live music every
            Friday evening and Sunday afternoon.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Extra info */}
        <div className="mt-12 text-center">
          <p className="font-body text-[var(--color-gray-warm)]">
            Reservations are recommended for live music nights.{" "}
            <span className="text-[var(--color-amber)] font-medium">
              No cover charge.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
