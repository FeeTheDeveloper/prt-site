"use client";

import { motion } from "framer-motion";
import { stagger } from "@/components/motion/Motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Dry Van / Reefer / Flatbed",
    description:
      "Full equipment coverage across standard, temperature-controlled, and open-deck freight. We match the right trailer to every load.",
  },
  {
    title: "FTL + LTL Coordination",
    description:
      "Full truckload and less-than-truckload solutions with competitive pricing and reliable transit times across all major lanes.",
  },
  {
    title: "Dedicated Lanes",
    description:
      "Consistent capacity on your highest-volume routes with pre-vetted carriers, locked rates, and predictable scheduling.",
  },
  {
    title: "Carrier Sourcing & Vetting",
    description:
      "Every carrier in our network is verified for active authority, insurance compliance, and safety record before moving a single load.",
  },
  {
    title: "Load Planning + Dispatch",
    description:
      "Proactive dispatch coordination from tender to delivery. We manage the details so your freight stays on schedule.",
  },
  {
    title: "Tracking + Status Reporting",
    description:
      "Real-time visibility into your shipments with proactive check calls, milestone updates, and exception management.",
  },
  {
    title: "Rate Negotiation + Optimization",
    description:
      "Market-informed rate strategies that balance cost efficiency with carrier quality. No shortcuts, no surprises.",
  },
];

/** Services grid — 7 cards in a responsive layout with staggered reveal. */
export default function ServiceGrid() {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {services.map((svc) => (
        <ServiceCard key={svc.title} {...svc} />
      ))}
    </motion.div>
  );
}
