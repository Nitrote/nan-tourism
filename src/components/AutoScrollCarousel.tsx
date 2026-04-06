"use client";

import { useRef, useEffect, useCallback, type ReactNode, Children, useState } from "react";

type Props = {
  children: ReactNode;
  speed?: number;
  resumeDelay?: number;
  repeats?: number;
  arrowColor?: string; // CSS color for arrows
  className?: string;
};

export default function AutoScrollCarousel({
  children,
  speed = 0.5,
  resumeDelay = 3000,
  repeats = 4,
  arrowColor = "var(--color-sky)",
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animatingRef = useRef(true);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const [showArrows, setShowArrows] = useState(false);

  // Build repeating list
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

  const pauseAndScheduleResume = useCallback(() => {
    animatingRef.current = false;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      animatingRef.current = true;
    }, resumeDelay);
  }, [resumeDelay]);

  // Auto-scroll using transform (no scrollbar involved)
  const posRef = useRef(0);

  useEffect(() => {
    function step() {
      const el = containerRef.current;
      if (el && animatingRef.current) {
        posRef.current -= speed;
        // Reset when we've scrolled through ~one set of items
        const itemSetWidth = el.scrollWidth / repeats;
        if (Math.abs(posRef.current) >= itemSetWidth) {
          posRef.current += itemSetWidth;
        }
        el.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [speed, repeats]);

  // Arrow click: jump by one card width (~340px)
  function scrollByArrow(direction: "left" | "right") {
    const jumpPx = 360;
    posRef.current += direction === "left" ? jumpPx : -jumpPx;
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.4s ease-out";
      containerRef.current.style.transform = `translateX(${posRef.current}px)`;
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.transition = "none";
      }, 400);
    }
    pauseAndScheduleResume();
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => {
        setShowArrows(true);
        pauseAndScheduleResume();
      }}
      onMouseLeave={() => {
        setShowArrows(false);
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
          animatingRef.current = true;
        }, 800);
      }}
      onTouchStart={pauseAndScheduleResume}
    >
      {/* Left arrow */}
      <button
        onClick={() => scrollByArrow("left")}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-opacity duration-200 hover:bg-white ${
          showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll left"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={arrowColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scrollByArrow("right")}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-opacity duration-200 hover:bg-white ${
          showArrows ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll right"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={arrowColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </button>

      {/* Track */}
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-5 will-change-transform select-none"
          style={{ width: "max-content" }}
        >
          {repeatedItems}
        </div>
      </div>
    </div>
  );
}
