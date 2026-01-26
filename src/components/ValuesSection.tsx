interface Value {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: Value[] = [
  {
    id: "craft",
    title: "Craft & Quality",
    description: "Every dish is prepared with meticulous attention to detail. From our dry-aged steaks to our handcrafted sushi rolls, we never compromise on quality.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: "family",
    title: "Family & Community",
    description: "We believe great food brings people together. Our restaurant is a gathering place for families, friends, and neighbors to create lasting memories.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: "tradition",
    title: "Tradition & Innovation",
    description: "We honor time-tested culinary traditions while embracing modern techniques. The result is a menu that feels both familiar and excitingly new.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function ValueCard({ value }: { value: Value }) {
  return (
    <article className="text-center p-8 rounded-2xl bg-[var(--color-cream-soft)] hover:shadow-[var(--shadow-md)] transition-all duration-[var(--duration-normal)]">
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--color-amber)]/10 flex items-center justify-center text-[var(--color-amber)]">
        {value.icon}
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-semibold text-[var(--color-charcoal)] mb-3">
        {value.title}
      </h3>
      <p className="font-body text-[var(--color-gray-warm)] leading-relaxed">
        {value.description}
      </p>
    </article>
  );
}

export function ValuesSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--color-sand)]">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="font-script text-xl text-[var(--color-amber)] block mb-2">
            What We Stand For
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
            Our Values
          </h2>
          <p className="font-body text-lg text-[var(--color-gray-warm)] leading-relaxed">
            These principles guide everything we do, from how we source our
            ingredients to how we welcome our guests.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
