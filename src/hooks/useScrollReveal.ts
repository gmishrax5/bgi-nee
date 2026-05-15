"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Intersection-Observer hook for scroll-reveal animations.
 * Attach `ref` to a container; children with class `reveal`, `reveal-left`, or
 * `reveal-scale` get `.visible` added when they enter the viewport.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  const init = useCallback(() => {
    if (!ref.current) return;
    const targets = ref.current.querySelectorAll(
      ".reveal, .reveal-left, .reveal-scale"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    const cleanup = init();
    return cleanup;
  }, [init]);

  return ref;
}
