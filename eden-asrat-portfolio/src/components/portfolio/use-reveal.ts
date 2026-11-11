"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook: returns a ref + isVisible flag.
 * Once revealed, stays visible (no re-hide).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  // Lazy init: if IntersectionObserver isn't available (very old browsers /
  // SSR fallback), reveal immediately without needing setState in an effect.
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return typeof IntersectionObserver === "undefined";
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
        ...options,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}
