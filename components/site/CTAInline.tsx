"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, ease } from "@/components/motion/Motion";
import LogisticsBackground from "@/components/ui/LogisticsBackground";

type CTAInlineProps = {
  title: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Background variant */
  bg?: "navy" | "deep" | "red";
};

const bgMap = {
  navy: "bg-brand-navy",
  deep: "bg-brand-deep",
  red: "bg-brand-red",
} as const;

/** Compact inline CTA band — used between sections or as a page closer. */
export default function CTAInline({
  title,
  primaryHref = "/contact",
  primaryLabel = "Request a Quote",
  secondaryHref,
  secondaryLabel,
  bg = "deep",
}: CTAInlineProps) {
  return (
    <section className={`${bgMap[bg]} relative overflow-hidden text-white`}>
      <LogisticsBackground variant="dark" density="sparse" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <motion.h2
          className="text-2xl font-bold tracking-tight sm:text-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease }}
        >
          <Link
            href={primaryHref}
            className="rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-brand-glow-red"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <a
              href={secondaryHref}
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/50 hover:text-white"
            >
              {secondaryLabel}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
