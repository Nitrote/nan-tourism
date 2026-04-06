"use client";

import { useScrollProgress } from "@/lib/useScrollAnimations";

/* ═══════════════════════════════════════════
   MOUNTAIN PARALLAX DIVIDER
   Multi-layer mountain silhouettes that spread
   apart at different speeds as you scroll.
   ═══════════════════════════════════════════ */
export function MountainDivider({
  topColor,
  bottomColor,
  accentColor,
}: {
  topColor: string;
  bottomColor: string;
  accentColor: string;
}) {
  const { ref, progress } = useScrollProgress();

  // Each layer moves at a different speed
  const layer1 = (progress - 0.3) * -30;
  const layer2 = (progress - 0.3) * -15;
  const layer3 = (progress - 0.3) * -5;

  return (
    <div
      ref={ref}
      className="relative h-40 md:h-56 overflow-hidden"
      style={{ backgroundColor: bottomColor }}
    >
      {/* Far mountains — slowest */}
      <svg
        viewBox="0 0 1440 200"
        className="absolute bottom-0 left-0 w-full will-change-transform"
        style={{ transform: `translateY(${layer3}px)`, height: "140%" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 L0,100 Q120,20 240,80 Q360,140 480,60 Q600,0 720,50 Q840,100 960,30 Q1080,0 1200,70 Q1320,120 1440,40 L1440,200 Z"
          fill={accentColor}
          opacity="0.3"
        />
      </svg>

      {/* Mid mountains */}
      <svg
        viewBox="0 0 1440 200"
        className="absolute bottom-0 left-0 w-full will-change-transform"
        style={{ transform: `translateY(${layer2}px)`, height: "120%" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 L0,120 Q180,30 360,90 Q540,150 720,70 Q900,10 1080,80 Q1260,140 1440,60 L1440,200 Z"
          fill={accentColor}
          opacity="0.5"
        />
      </svg>

      {/* Front mountains — fastest, matches bottom section */}
      <svg
        viewBox="0 0 1440 200"
        className="absolute bottom-0 left-0 w-full will-change-transform"
        style={{ transform: `translateY(${layer1}px)`, height: "100%" }}
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 L0,140 Q100,60 200,100 Q300,140 420,80 Q540,20 660,90 Q780,140 900,60 Q1020,0 1140,80 Q1260,130 1380,70 Q1440,40 1440,200 Z"
          fill={bottomColor}
        />
      </svg>

      {/* Top fill for seamless blend */}
      <div
        className="absolute top-0 left-0 right-0 h-1/3"
        style={{ background: `linear-gradient(to bottom, ${topColor}, transparent)` }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════
   RIVER CURVE DIVIDER
   Organic S-curve inspired by the Nan River
   flowing between sections.
   ═══════════════════════════════════════════ */
export function RiverDivider({
  topColor,
  bottomColor,
  riverColor,
}: {
  topColor: string;
  bottomColor: string;
  riverColor: string;
}) {
  const { ref, progress } = useScrollProgress();
  const flow = Math.sin(progress * Math.PI) * 20;

  return (
    <div
      ref={ref}
      className="relative h-28 md:h-40 overflow-hidden"
      style={{ backgroundColor: bottomColor }}
    >
      {/* Top fill */}
      <svg
        viewBox="0 0 1440 160"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L1440,0 L1440,50 Q1200,90 960,50 Q720,10 480,60 Q240,110 0,70 Z"
          fill={topColor}
        />
      </svg>

      {/* River stream — animated flow */}
      <svg
        viewBox="0 0 1440 160"
        className="absolute top-0 left-0 w-full h-full will-change-transform"
        preserveAspectRatio="none"
      >
        <path
          d={`M0,75 Q180,${55 + flow} 360,${80 - flow} Q540,${105 + flow} 720,${70 - flow} Q900,${45 + flow} 1080,${75 - flow} Q1260,${100 + flow} 1440,${65 - flow}`}
          fill="none"
          stroke={riverColor}
          strokeWidth="3"
          opacity="0.6"
        />
        <path
          d={`M0,82 Q180,${62 + flow * 0.7} 360,${87 - flow * 0.7} Q540,${112 + flow * 0.7} 720,${77 - flow * 0.7} Q900,${52 + flow * 0.7} 1080,${82 - flow * 0.7} Q1260,${107 + flow * 0.7} 1440,${72 - flow * 0.7}`}
          fill="none"
          stroke={riverColor}
          strokeWidth="1.5"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

/* ═══════════════════════════════════════════
   WEAVING PATTERN DIVIDER
   Zigzag inspired by Tai Lue textile patterns.
   ═══════════════════════════════════════════ */
export function WeaveDivider({
  topColor,
  bottomColor,
  weaveColor,
}: {
  topColor: string;
  bottomColor: string;
  weaveColor: string;
}) {
  const { ref, progress } = useScrollProgress();
  const opacity = Math.min(1, progress * 2);

  return (
    <div
      ref={ref}
      className="relative h-20 md:h-28 overflow-hidden"
      style={{ backgroundColor: bottomColor }}
    >
      {/* Top color base */}
      <svg
        viewBox="0 0 1440 120"
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L1440,0 L1440,40 L0,40 Z" fill={topColor} />
      </svg>

      {/* Zigzag weave pattern */}
      <svg
        viewBox="0 0 1440 120"
        className="absolute top-0 left-0 w-full h-full will-change-transform"
        preserveAspectRatio="none"
        style={{ opacity }}
      >
        {/* Top zigzag row */}
        <polyline
          points={Array.from({ length: 25 }, (_, i) => {
            const x = i * 60;
            const y = i % 2 === 0 ? 30 : 55;
            return `${x},${y}`;
          }).join(" ")}
          fill="none"
          stroke={weaveColor}
          strokeWidth="2.5"
          opacity="0.7"
        />
        {/* Bottom zigzag row — offset */}
        <polyline
          points={Array.from({ length: 25 }, (_, i) => {
            const x = i * 60 + 30;
            const y = i % 2 === 0 ? 50 : 75;
            return `${x},${y}`;
          }).join(" ")}
          fill="none"
          stroke={weaveColor}
          strokeWidth="2.5"
          opacity="0.5"
        />
        {/* Diamond accents */}
        {Array.from({ length: 12 }, (_, i) => {
          const cx = i * 120 + 60;
          return (
            <polygon
              key={i}
              points={`${cx},38 ${cx + 8},48 ${cx},58 ${cx - 8},48`}
              fill={weaveColor}
              opacity="0.4"
            />
          );
        })}
      </svg>
    </div>
  );
}
