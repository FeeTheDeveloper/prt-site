import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "PRT Logistics & Freight — Veteran-Owned Freight Brokerage",
  description:
    "Nationwide freight brokerage built on compliance, accountability, and military-level discipline. Request a quote today.",
};

/** Home page — renders the logo intro overlay above the hero content. */
export default function HomePage() {
  return <HomeContent />;
}
