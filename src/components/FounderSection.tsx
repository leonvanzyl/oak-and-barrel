import Image from "next/image";

export function FounderSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[var(--container-max)] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--color-amber)] rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[var(--color-amber)]/20 rounded-full" />

              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                <Image
                  src="/images/about/founder-portrait.webp"
                  alt="Leon van Zyl, Founder of The Oak and Barrel"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Founded badge */}
              <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 z-20 bg-[var(--color-amber)] text-white rounded-xl p-4 shadow-[var(--shadow-lg)]">
                <p className="font-script text-lg mb-1">Est.</p>
                <p className="font-display text-3xl font-bold">2004</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="font-script text-xl text-[var(--color-amber)] block mb-2">
              Our Beginning
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[var(--color-charcoal)] mb-6">
              A Vision of Warmth & Quality
            </h2>

            <div className="space-y-4 font-body text-[var(--color-gray-warm)] leading-relaxed">
              <p>
                In 2004, Leon van Zyl had a vision: to create a place where families could
                gather over exceptional food, where the art of craft brewing met the precision
                of sushi, and where a perfectly aged steak could be paired with live music
                on a Friday night.
              </p>
              <p>
                What started as a small neighborhood spot in Manhattan has grown into a
                beloved destination for New Yorkers seeking warmth, quality, and genuine
                hospitality. Leon&apos;s philosophy was simple — use the finest ingredients,
                treat every guest like family, and never compromise on craft.
              </p>
              <p>
                Today, The Oak and Barrel continues that tradition. Our steaks are dry-aged
                in-house, our sushi is prepared with fish flown in daily, and our craft beers
                are carefully curated from the best local breweries. Every Friday evening
                and Sunday afternoon, we fill the restaurant with live music, creating
                moments that our guests remember for years to come.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-[var(--color-sand)]">
              <p className="font-script text-2xl text-[var(--color-charcoal)] mb-1">
                Leon van Zyl
              </p>
              <p className="font-body text-sm text-[var(--color-gray-warm)]">
                Founder & Head Chef
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
