"use client";

import { useState, useCallback, useEffect } from "react";

interface UsePageFlipOptions {
  totalSpreads: number;
  initialSpread?: number;
}

interface UsePageFlipReturn {
  currentSpread: number;
  isAnimating: boolean;
  canGoNext: boolean;
  canGoPrev: boolean;
  goToNextSpread: () => void;
  goToPrevSpread: () => void;
  goToSpread: (spread: number) => void;
}

export function usePageFlip({
  totalSpreads,
  initialSpread = 0,
}: UsePageFlipOptions): UsePageFlipReturn {
  const [currentSpread, setCurrentSpread] = useState(initialSpread);
  const [isAnimating, setIsAnimating] = useState(false);

  const canGoNext = currentSpread < totalSpreads - 1;
  const canGoPrev = currentSpread > 0;

  const goToNextSpread = useCallback(() => {
    if (!canGoNext || isAnimating) return;

    setIsAnimating(true);
    setCurrentSpread((prev) => prev + 1);

    // Animation duration matches CSS
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [canGoNext, isAnimating]);

  const goToPrevSpread = useCallback(() => {
    if (!canGoPrev || isAnimating) return;

    setIsAnimating(true);
    setCurrentSpread((prev) => prev - 1);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [canGoPrev, isAnimating]);

  const goToSpread = useCallback(
    (spread: number) => {
      if (spread < 0 || spread >= totalSpreads || isAnimating) return;
      if (spread === currentSpread) return;

      setIsAnimating(true);
      setCurrentSpread(spread);

      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    },
    [totalSpreads, isAnimating, currentSpread]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        goToNextSpread();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        goToPrevSpread();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextSpread, goToPrevSpread]);

  return {
    currentSpread,
    isAnimating,
    canGoNext,
    canGoPrev,
    goToNextSpread,
    goToPrevSpread,
    goToSpread,
  };
}
