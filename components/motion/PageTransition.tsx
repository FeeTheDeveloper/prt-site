"use client";

import { motion } from "framer-motion";
import { pageEnter } from "@/components/motion/Motion";

/**
 * Wraps page content with a subtle fade-up entrance.
 * Used in the (site) layout for consistent page transitions.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={pageEnter}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}
