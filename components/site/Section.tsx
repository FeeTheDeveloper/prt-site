"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, ease } from "@/components/motion/Motion";

type SectionProps = {
  id?: string;
  /** Short uppercase label above the heading. */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  /** Background variant */
  bg?: "light" | "white" | "navy" | "deep";
  /** Disable scroll-triggered fade-in */
  noAnimation?: boolean;
};

const bgMap = {
  light: "bg-brand-light",
  white: "bg-white",
  navy: "bg-brand-navy text-white",
  deep: "bg-brand-deep text-white",
} as const;

/**
 * Reusable page section wrapper.
 * Provides consistent max-width, padding, optional eyebrow/heading/subtitle,
 * and a subtle fade-up on scroll.
 */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  bg = "white",
  noAnimation = false,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const Wrapper = noAnimation ? "section" : motion.section;
  const animProps = noAnimation
    ? {}
    : {
        variants: fadeUp,
        initial: "hidden" as const,
        animate: inView ? ("visible" as const) : ("hidden" as const),
        transition: { duration: 0.55, ease },
      };

  const isDark = bg === "navy" || bg === "deep";

  return (
    <Wrapper
      ref={ref}
      id={id}
      className={`${bgMap[bg]} ${className}`}
      {...(animProps as Record<string, unknown>)}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {(eyebrow || title) && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && (
              <span
                className={`mb-3 inline-block text-xs font-semibold uppercase tracking-widest ${
                  isDark ? "text-brand-red" : "text-brand-red"
                }`}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-lg leading-relaxed opacity-75">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </Wrapper>
  );
}
