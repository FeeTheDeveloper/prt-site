"use client";

import { motion } from "framer-motion";
import { staggerItem, hoverLift, ease } from "@/components/motion/Motion";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

/** Individual service card — clean bordered card with hover lift. */
export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      {...hoverLift}
      className="group relative rounded-xl border border-brand-navy/8 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-brand-depth sm:p-8"
    >
      {icon && (
        <motion.div
          className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy transition-colors group-hover:bg-brand-red/10 group-hover:text-brand-red"
          transition={{ duration: 0.3, ease }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-lg font-bold tracking-tight text-brand-navy">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-deep/70">
        {description}
      </p>
    </motion.div>
  );
}
