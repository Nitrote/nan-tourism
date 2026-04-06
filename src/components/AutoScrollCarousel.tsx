"use client";

import {
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  Children,
} from "react";

type Props = {
  children: ReactNode;
  speed?: number; // pixels per frame (default 0.5)
  resumeDelay?: number; // ms to wait before resuming after interaction (default 3000)
  repeats?: number; // how many times to repeat the children (default 4)
  className?: string;
};

export default function AutoScrollCarousel({
  children,
  speed = 0.5,
  resumeDelay = 3000,
  repeats = 4,
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(true);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  // Build a long repeating list (like Apple timer approach)
  const items = Children.toArray(children);
  const repeatedItems: ReactNode[] = [];
  for (let r = 0; r < repeats; r++) {
    items.forEach((child, i) => {
      repeatedItems.push(
        <div key={`${r}-${i}`} aria-hidden={r > 0 ? true : undefined} className="contents">
          {child}
        </div>
      );
    });
  }

  // Pause and schedule resume
  const pauseAndScheduleResume = useCallback(() => {
    animatingRef.current = false;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      animatingRef.current = true;
    }, resumeDelay);
  }, [resumeDelay]);

  // Auto-scroll with native scrollLeft
  useEffect(() => {
    function step() {
      const el = containerRef.current;
      if (el && animatingRef.current) {
        el.scrollLeft += speed;

        // If we've scrolled past ~75% of the total width, jump back to ~25%
        // This creates a seamless feel without true infinite loop
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft >= maxScroll * 0.75) {
          el.scrollLeft = maxScroll * 0.25;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [speed]);

  // Scroll to ~25% on mount so we're not starting at the very beginning
  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      requestAnimationFrame(() => {
        const maxScroll = el.scrollWidth - el.clientWidth;
        el.scrollLeft = maxScroll * 0.25;
      });
    }
  }, [repeatedItems.length]);

  return (
    <div
      ref={containerRef}
      className={`carousel-scroll overflow-x-auto flex gap-5 pb-4 ${className}`}
      style={{ scrollBehavior: "auto" }}
      onMouseEnter={pauseAndScheduleResume}
      onMouseLeave={() => {
        // Resume after delay when mouse leaves
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
          animatingRef.current = true;
        }, 800);
      }}
      onTouchStart={pauseAndScheduleResume}
      onScroll={() => {
        // If user is manually scrolling, pause auto-scroll briefly
        if (!animatingRef.current) return;
        pauseAndScheduleResume();
      }}
    >
      {repeatedItems}
    </div>
  );
}
