import type { MotionProps } from "framer-motion";

// Centralized brand assets for consistent usage across the app.
export const brandLogos = {
  primary: "/logo.png",
  full: "/brand/logo-full.png",
  mark: "/brand/logo-mark.png",
  dark: "/brand/logo-dark.png",
  light: "/brand/logo-light.png",
} as const;

export const brandColors = {
  primaryNavy: "#002040",
  deepNavy: "#001020",
  accentRed: "#E00000",
  lightGray: "#F0F0F0",
  midGray: "#A0A0A0",
} as const;

export const brandGradients = {
  navySweep: "linear-gradient(135deg, #002040 0%, #001020 100%)",
  steelSheen: "linear-gradient(120deg, #001020 0%, #002040 45%, #A0A0A0 100%)",
  redEmber: "linear-gradient(120deg, #E00000 0%, #002040 80%)",
} as const;

// Motion presets for consistent logo animations.
export const logoMotionPresets = {
  reveal: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  float: {
    animate: { y: [0, -6, 0] },
    transition: { duration: 3.5, ease: "easeInOut", repeat: Infinity },
  },
  sweep: {
    initial: { opacity: 0, x: -8 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
} satisfies Record<string, MotionProps>;
