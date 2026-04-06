"use client";

import { useRef, useEffect, useCallback, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: number; // pixels per frame (default 0.5)
  pauseOnHover?: boolean;
  className?: string;
};

export default function AutoScrollCarousel({
  children,
  speed = 0.5,
  pauseOnHover = true,
  className = "",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const animatingRef = useRef(true);
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startPos: 0,
  });
  const [, forceRender] = useState(0);

  // Measure half-width (one set of children) for loop reset
  const getHalfWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return trackRef.current.scrollWidth / 2;
  }, []);

  // Animation loop
  useEffect(() => {
    let rafId: number;

    function step() {
      const track = trackRef.current;
      if (!track) {
        rafId = requestAnimationFrame(step);
        return;
      }

      if (animatingRef.current && !dragRef.current.isDragging) {
        positionRef.current -= speed;
        const halfWidth = getHalfWidth();
        if (halfWidth > 0 && Math.abs(positionRef.current) >= halfWidth) {
          positionRef.current += halfWidth;
        }
        track.style.transform = `translateX(${positionRef.current}px)`;
      }

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [speed, getHalfWidth]);

  // Force re-render once children are mounted so getHalfWidth works
  useEffect(() => {
    forceRender((n) => n + 1);
  }, [children]);

  // Mouse drag handlers
  function onMouseDown(e: React.MouseEvent) {
    dragRef.current = {
      isDragging: true,
      startX: e.clientX,
      startPos: positionRef.current,
    };
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!dragRef.current.isDragging) return;
    const delta = e.clientX - dragRef.current.startX;
    positionRef.current = dragRef.current.startPos + delta;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  }

  function onMouseUp() {
    dragRef.current.isDragging = false;
    // Normalize position after drag
    const halfWidth = getHalfWidth();
    if (halfWidth > 0) {
      while (positionRef.current > 0) positionRef.current -= halfWidth;
      while (Math.abs(positionRef.current) >= halfWidth)
        positionRef.current += halfWidth;
    }
  }

  // Touch handlers
  function onTouchStart(e: React.TouchEvent) {
    dragRef.current = {
      isDragging: true,
      startX: e.touches[0].clientX,
      startPos: positionRef.current,
    };
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!dragRef.current.isDragging) return;
    const delta = e.touches[0].clientX - dragRef.current.startX;
    positionRef.current = dragRef.current.startPos + delta;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${positionRef.current}px)`;
    }
  }

  function onTouchEnd() {
    onMouseUp();
  }

  return (
    <div
      className={`overflow-hidden cursor-grab active:cursor-grabbing ${className}`}
      onMouseEnter={pauseOnHover ? () => (animatingRef.current = false) : undefined}
      onMouseLeave={
        pauseOnHover
          ? () => {
              animatingRef.current = true;
              dragRef.current.isDragging = false;
            }
          : undefined
      }
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        ref={trackRef}
        className="flex gap-5 will-change-transform select-none"
        style={{ width: "max-content" }}
      >
        {/* Original set */}
        {children}
        {/* Cloned set for infinite loop */}
        <div aria-hidden="true" className="flex gap-5" style={{ width: "max-content" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
