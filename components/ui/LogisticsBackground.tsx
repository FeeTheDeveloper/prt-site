"use client";

/**
 * LogisticsBackground — subtle animated CSS grid + flowing dots.
 *
 * - Pure CSS grid pattern (no canvas, no heavy deps)
 * - Framer-Motion floating dots for "movement" impression
 * - Two variants: `light` (brand-light bg) and `dark` (navy/deep bg)
 * - Covers the parent container absolutely, so parent must be `relative`.
 */

import { motion } from "framer-motion";

type Variant = "light" | "dark";
type Density = "sparse" | "normal" | "dense";

interface LogisticsBackgroundProps {
  variant?: Variant;
  density?: Density;
  className?: string;
}

const dotCounts: Record<Density, number> = {
  sparse: 4,
  normal: 6,
  dense: 10,
};

/* Deterministic positions so SSR matches client */
const positions = [
  { x: "12%", y: "18%" },
  { x: "72%", y: "10%" },
  { x: "88%", y: "55%" },
  { x: "28%", y: "72%" },
  { x: "55%", y: "38%" },
  { x: "40%", y: "85%" },
  { x: "8%",  y: "48%" },
  { x: "65%", y: "78%" },
  { x: "92%", y: "22%" },
  { x: "48%", y: "12%" },
];

export default function LogisticsBackground({
  variant = "dark",
  density = "normal",
  className = "",
}: LogisticsBackgroundProps) {
  const count = dotCounts[density];
  const isDark = variant === "dark";

  const gridColor = isDark
    ? "rgba(255,255,255,0.035)"
    : "rgba(0,32,64,0.04)";

  const dotColor = isDark
    ? "rgba(255,255,255,0.07)"
    : "rgba(0,32,64,0.06)";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* CSS Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at 50% 30%, transparent 0%, rgba(0,16,32,0.6) 100%)"
            : "radial-gradient(ellipse at 50% 30%, transparent 0%, rgba(240,240,240,0.7) 100%)",
        }}
      />

      {/* Floating dots */}
      {positions.slice(0, count).map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: pos.x,
            top: pos.y,
            width: 4 + (i % 3) * 2,
            height: 4 + (i % 3) * 2,
            backgroundColor: dotColor,
          }}
          animate={{
            y: [0, -12 - (i % 4) * 4, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4 + (i % 3) * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
        />
      ))}

      {/* Flowing horizontal line */}
      <motion.div
        className="absolute h-px"
        style={{
          top: "40%",
          width: "35%",
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0,32,64,0.05), transparent)",
        }}
        animate={{ left: ["-10%", "110%"] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second flowing line, offset */}
      <motion.div
        className="absolute h-px"
        style={{
          top: "65%",
          width: "25%",
          background: isDark
            ? "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)"
            : "linear-gradient(90deg, transparent, rgba(0,32,64,0.035), transparent)",
        }}
        animate={{ left: ["110%", "-10%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
    </div>
  );
}
