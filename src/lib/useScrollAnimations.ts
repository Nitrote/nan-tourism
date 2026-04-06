"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Triggers a boolean when an element scrolls into view.
 * threshold: 0-1, how much of the element must be visible
 */
export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el); // Only trigger once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/**
 * Returns a 0-1 scroll progress value for an element's journey through the viewport.
 * 0 = element just entered the bottom of the viewport
 * 1 = element has passed through the top
 */
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Element's journey: from entering bottom (progress=0) to leaving top (progress=1)
    const rawProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
    setProgress(Math.max(0, Math.min(1, rawProgress)));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { ref, progress };
}
