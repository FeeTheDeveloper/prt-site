"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, stagger, staggerItem, ease } from "@/components/motion/Motion";
import LogisticsBackground from "@/components/ui/LogisticsBackground";

/** Full-viewport hero with logistics-themed animated background. */
export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-brand-deep">
      {/* ── Animated background ── */}
      <LogisticsBackground variant="dark" density="normal" />

      {/* ── Radial depth overlay ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(0,32,64,0.5) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={staggerItem}
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-brand-red"
          >
            Veteran-Owned Freight Brokerage
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Freight Brokerage, Run With{" "}
            <span className="text-brand-red">Military Discipline.</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-mid sm:text-xl"
          >
            Nationwide freight coordination connecting shippers with qualified
            carriers&mdash;compliant, cost-effective, and on-time.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-lg bg-brand-red px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-brand-glow-red"
            >
              Request a Quote
            </Link>
            <Link
              href="/carriers"
              className="rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white/90 transition-colors hover:border-white/40 hover:text-white"
            >
              Become a Carrier
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-light to-transparent" />
    </section>
  );
}
