"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Shipper Consultation",
    description:
      "We learn your freight profile, volume expectations, and service requirements.",
  },
  {
    number: "02",
    title: "Rate Strategy",
    description:
      "Market-informed pricing tailored to your lanes, equipment needs, and timelines.",
  },
  {
    number: "03",
    title: "Load Execution",
    description:
      "Vetted carrier assignment, dispatch coordination, and proactive tracking from pickup.",
  },
  {
    number: "04",
    title: "Delivery Confirmation",
    description:
      "Proof of delivery, incident documentation, and immediate status reporting.",
  },
  {
    number: "05",
    title: "Ongoing Optimization",
    description:
      "Lane analysis, carrier performance reviews, and cost reduction opportunities over time.",
  },
];

/** 5-step "How It Works" timeline. */
export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-deep sm:text-4xl">
            How It Works
          </h2>
        </div>

        {/* Timeline grid */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical connector line — desktop */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-brand-navy/10 md:block" />

          <div className="grid gap-10 md:gap-12">
            {steps.map(({ number, title, description }, i) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : undefined}
                transition={{
                  duration: 0.45,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex gap-6 md:gap-8"
              >
                {/* Step number badge */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white shadow-brand-glow">
                  {number}
                </div>

                <div className="pt-1">
                  <h3 className="text-lg font-bold text-brand-navy">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-deep/70">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
