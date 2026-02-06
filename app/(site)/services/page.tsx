import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/site/Section";
import CTAInline from "@/components/site/CTAInline";
import ServiceCard from "@/components/site/ServiceCard";
import FeatureList from "@/components/site/FeatureList";
import BadgeGrid from "@/components/site/BadgeGrid";
import LogisticsBackground from "@/components/ui/LogisticsBackground";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service freight brokerage — Dry Van, Reefer, Flatbed, FTL, LTL, dedicated lanes, carrier vetting, dispatch coordination, and nationwide logistics solutions from PRT Logistics & Freight.",
  openGraph: {
    title: "Freight Brokerage Services — PRT Logistics & Freight",
    description:
      "Dry Van, Reefer, Flatbed, FTL, LTL, carrier vetting, dispatch coordination, and nationwide logistics solutions with military-grade accountability.",
  },
};

/* ── Data ── */

const freightModes = [
  {
    title: "Dry Van",
    description:
      "Standard enclosed trailer capacity for palletized, boxed, and general commodity freight. The workhorse of over-the-road shipping.",
  },
  {
    title: "Refrigerated (Reefer)",
    description:
      "Temperature-controlled trailers for perishables, pharmaceuticals, and any freight requiring a maintained cold chain from origin to destination.",
  },
  {
    title: "Flatbed / Open Deck",
    description:
      "Open-deck equipment for oversized, heavy, or non-conveyable loads — steel, lumber, machinery, and construction materials.",
  },
  {
    title: "Full Truckload (FTL)",
    description:
      "Dedicated truck capacity for shipments that fill a trailer. Direct routing with no stops means faster transit and reduced handling risk.",
  },
  {
    title: "Less-Than-Truckload (LTL)",
    description:
      "Cost-efficient shared-capacity solutions for smaller shipments that don't require a full trailer. Optimized routing and competitive pricing.",
  },
];

const operationsFeatures = [
  {
    title: "Carrier Sourcing & Vetting",
    description:
      "We identify and qualify carriers with verified authority, insurance, and strong safety records before they enter our network.",
  },
  {
    title: "Rate Negotiation & Cost Optimization",
    description:
      "Market-informed pricing strategies that balance cost efficiency with carrier quality — no shortcuts, no surprises.",
  },
  {
    title: "Load Planning & Dispatch Coordination",
    description:
      "Proactive coordination from tender to delivery. We manage routing, scheduling, and equipment matching so freight stays on track.",
  },
  {
    title: "Tracking & Proactive Status Updates",
    description:
      "Real-time shipment visibility with scheduled check calls, milestone alerts, and exception notifications.",
  },
  {
    title: "Documentation Accuracy & Clean Delivery",
    description:
      "BOLs, rate confirmations, and PODs handled with precision to keep your records audit-ready and payment cycles fast.",
  },
  {
    title: "Issue Resolution & Exception Management",
    description:
      "When disruptions happen, we respond with urgency — rerouting, rebooking, and communicating until the issue is resolved.",
  },
];

const processSteps = [
  { step: "1", label: "Quote + Shipment Details", description: "Submit your load requirements — origin, destination, commodity, and timeline." },
  { step: "2", label: "Carrier Match + Confirmation", description: "We source a vetted, qualified carrier and confirm booking details." },
  { step: "3", label: "Pickup Coordination", description: "Dispatch handles scheduling, driver assignment, and pickup confirmation." },
  { step: "4", label: "Tracking + Communication", description: "Proactive check calls and milestone updates keep you informed in real time." },
  { step: "5", label: "Delivery + Documentation", description: "On-time delivery with clean BOL, POD, and invoicing follow-through." },
];

const industries = [
  "General Freight",
  "Retail & Consumer Goods",
  "Manufacturing Support",
  "Distribution & Warehousing",
  "Food & Temperature-Controlled",
  "Construction Materials",
];

const complianceBullets = [
  "Insurance verification on every carrier",
  "Active authority and safety record checks",
  "Documentation accuracy and audit readiness",
];

/* ── Page ── */

export default function ServicesPage() {
  return (
    <>
      {/* ── A) Hero ── */}
      <Section bg="navy" noAnimation className="relative overflow-hidden">
        <LogisticsBackground variant="dark" density="sparse" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Freight Brokerage Services
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            Disciplined execution, qualified capacity, and clear communication
            from pickup to delivery.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-brand-glow-red"
            >
              Request a Quote
            </Link>
            <Link
              href="/carriers"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/50 hover:text-white"
            >
              Become a Carrier
            </Link>
          </div>
        </div>
      </Section>

      {/* ── B) Freight Modes ── */}
      <Section
        eyebrow="Equipment"
        title="Core Freight Modes"
        subtitle="Equipment and capacity solutions matched to your freight profile."
        bg="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freightModes.map((mode) => (
            <ServiceCard
              key={mode.title}
              title={mode.title}
              description={mode.description}
            />
          ))}
        </div>
      </Section>

      {/* ── C) Brokerage & Operations Support ── */}
      <Section
        eyebrow="Operations"
        title="Brokerage & Operations Support"
        subtitle="End-to-end service capabilities that keep your supply chain moving."
        bg="light"
      >
        <FeatureList features={operationsFeatures} columns={2} />
      </Section>

      {/* ── D) Dedicated Lanes / Contract Support ── */}
      <Section
        title="Dedicated Lanes & Contract Support"
        subtitle="Consistent capacity on your highest-volume routes."
        bg="white"
      >
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-brand-deep/80">
            For shippers with recurring volume, PRT builds dedicated lane
            strategies that lock in capacity, stabilize costs, and deliver
            predictable service levels. Pre-vetted carriers, consistent
            scheduling, and proactive account management mean fewer surprises and
            stronger performance over time.
          </p>
          <div className="inline-block rounded-xl border border-brand-navy/8 bg-brand-light px-8 py-6 text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-red">
              Best For
            </p>
            <ul className="space-y-2 text-sm text-brand-deep/80">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy" />
                Recurring shippers with consistent weekly or monthly volume
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy" />
                Time-sensitive freight requiring guaranteed pickup windows
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy" />
                High-volume lanes where cost control and service levels matter most
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── E) Industries / Freight Types ── */}
      <Section
        title="Industries & Freight Types Served"
        subtitle="Broad capability across commodity types and verticals."
        bg="light"
      >
        <BadgeGrid items={industries} />
      </Section>

      {/* ── F) Process Snapshot ── */}
      <Section
        eyebrow="Process"
        title="How We Deliver"
        subtitle="A structured, repeatable process from first quote to final delivery."
        bg="white"
      >
        <div className="mx-auto max-w-3xl">
          <ol className="relative space-y-8 border-l-2 border-brand-navy/10 pl-8">
            {processSteps.map((s) => (
              <li key={s.step} className="relative">
                {/* Step marker */}
                <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
                  {s.step}
                </span>
                <h3 className="font-bold text-brand-navy">{s.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-deep/70">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── G) Compliance Teaser ── */}
      <Section bg="deep">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Compliance-First Carrier Network
          </h2>
          <ul className="mt-8 space-y-3 text-left sm:mx-auto sm:max-w-md">
            {complianceBullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-sm text-white/80"
              >
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/compliance"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/50 hover:text-white"
            >
              View Compliance Standards
            </Link>
          </div>
        </div>
      </Section>

      {/* ── H) Final CTA Band ── */}
      <CTAInline
        title="Let's Move Freight With Discipline."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="mailto:contact@prtlogisticsandfreight.com"
        secondaryLabel="contact@prtlogisticsandfreight.com"
        bg="navy"
      />
    </>
  );
}
