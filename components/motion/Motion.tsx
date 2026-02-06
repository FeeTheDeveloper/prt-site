"use client";

import { type Variants } from "framer-motion";

/*
 * PRT Logistics & Freight — Motion Design System
 *
 * Shared animation presets for a cohesive, premium feel.
 * All durations use a smooth ease-out curve — no bounce.
 * Respects prefers-reduced-motion via the `motion` prop on
 * Framer Motion components (handled automatically by FM ≥10).
 */

/* ── Shared easing ── */
export const ease = [0.22, 1, 0.36, 1] as const;

/* ── Variant presets ── */

/** Fade up from below — the default section reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

/** Simple opacity fade — for inline elements. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease },
  },
};

/** Stagger wrapper — use on the parent of staggered children. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Stagger child item — pair with `stagger` parent. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

/** Subtle page entrance — for layout-level wrapping. */
export const pageEnter: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease },
  },
};

/* ── Interaction presets (use as props, not variants) ── */

/** Lift on hover — for cards and interactive surfaces. */
export const hoverLift = {
  whileHover: { y: -4, transition: { duration: 0.25, ease } },
} as const;

/** Scale pulse on hover — for badges and small elements. */
export const hoverScale = {
  whileHover: { scale: 1.04, transition: { duration: 0.2, ease } },
} as const;

/* ── Reduced-motion helper ── */

/**
 * Returns static (no-op) variants when the user prefers reduced motion.
 * Usage: `variants={prefersReduced() ? noMotion : fadeUp}`
 */
export function prefersReduced(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** No-op variants — skips animation entirely. */
export const noMotion: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};
