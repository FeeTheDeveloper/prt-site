import type { Config } from "tailwindcss";

// Extend Tailwind with the PRT Logistics & Freight brand system.
const brandTheme: Config["theme"] = {
  extend: {
    colors: {
      brand: {
        navy: "#002040",
        deep: "#001020",
        red: "#E00000",
        light: "#F0F0F0",
        mid: "#A0A0A0",
      },
    },
    boxShadow: {
      "brand-depth": "0 18px 40px -20px rgba(0, 16, 32, 0.6)",
      "brand-glow": "0 0 24px rgba(0, 32, 64, 0.45)",
      "brand-glow-red": "0 0 18px rgba(224, 0, 0, 0.45)",
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "scale-in": {
        "0%": { opacity: "0", transform: "scale(0.96)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
      sweep: {
        "0%": { opacity: "0", transform: "translateX(-8px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
    },
    animation: {
      "fade-in": "fade-in 400ms ease-out",
      "scale-in": "scale-in 450ms ease-out",
      sweep: "sweep 420ms ease-out",
    },
  },
};

export default brandTheme;
