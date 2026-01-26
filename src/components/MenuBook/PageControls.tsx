interface PageControlsProps {
  currentSpread: number;
  totalSpreads: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  onNext: () => void;
  onPrev: () => void;
  onGoToSpread: (spread: number) => void;
}

export function PageControls({
  currentSpread,
  totalSpreads,
  canGoNext,
  canGoPrev,
  onNext,
  onPrev,
  onGoToSpread,
}: PageControlsProps) {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      {/* Navigation Arrows */}
      <div className="flex items-center gap-4">
        <button
          onClick={onPrev}
          disabled={!canGoPrev}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-[var(--duration-fast)]
            ${canGoPrev
              ? "bg-[var(--color-amber)] text-white hover:bg-[var(--color-amber-deep)] shadow-[var(--shadow-md)]"
              : "bg-[var(--color-sand)] text-[var(--color-gray-warm)] cursor-not-allowed"
            }
          `}
          aria-label="Previous page"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="font-body text-sm text-[var(--color-gray-warm)] min-w-[80px] text-center">
          {currentSpread + 1} of {totalSpreads}
        </span>

        <button
          onClick={onNext}
          disabled={!canGoNext}
          className={`
            w-12 h-12 rounded-full flex items-center justify-center
            transition-all duration-[var(--duration-fast)]
            ${canGoNext
              ? "bg-[var(--color-amber)] text-white hover:bg-[var(--color-amber-deep)] shadow-[var(--shadow-md)]"
              : "bg-[var(--color-sand)] text-[var(--color-gray-warm)] cursor-not-allowed"
            }
          `}
          aria-label="Next page"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Page Indicator Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSpreads }).map((_, index) => (
          <button
            key={index}
            onClick={() => onGoToSpread(index)}
            className={`
              w-2.5 h-2.5 rounded-full transition-all duration-[var(--duration-fast)]
              ${index === currentSpread
                ? "bg-[var(--color-amber)] w-6"
                : "bg-[var(--color-sand)] hover:bg-[var(--color-amber-light)]"
              }
            `}
            aria-label={`Go to page ${index + 1}`}
            aria-current={index === currentSpread ? "page" : undefined}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <p className="font-body text-xs text-[var(--color-gray-warm)] hidden lg:block">
        Use arrow keys or swipe to navigate
      </p>
    </div>
  );
}
