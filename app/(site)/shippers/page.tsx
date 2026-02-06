import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/site/Section";
import CTAInline from "@/components/site/CTAInline";
import ServiceCard from "@/components/site/ServiceCard";
import Steps from "@/components/site/Steps";
import TwoColumn from "@/components/site/TwoColumn";
import BadgeGrid from "@/components/site/BadgeGrid";
import Accordion from "@/components/site/Accordion";
import LogisticsBackground from "@/components/ui/LogisticsBackground";

export const metadata: Metadata = {
  title: "Shippers",
  description:
    "Request freight brokerage support from PRT Logistics & Freight. Qualified capacity, disciplined execution, and proactive updates from pickup to delivery.",
  openGraph: {
    title: "Shippers — PRT Logistics & Freight",
    description:
      "Qualified carrier capacity, transparent pricing, and proactive communication from pickup to delivery. Request a freight quote today.",
  },
};

/* ── Data ── */

const serviceScope = [
  {
    title: "Capacity Sourcing",
    description:
      "We match your freight with vetted, qualified carriers based on equipment, lane, and service requirements — so the right truck shows up every time.",
  },
  {
    title: "Rate Strategy & Optimization",
    description:
      "Market-informed pricing that balances cost efficiency with carrier quality. Transparent quotes with no hidden fees or last-minute surprises.",
  },
  {
    title: "Dispatch & Appointment Coordination",
    description:
      "We manage scheduling, driver assignment, and facility coordination so pickups and deliveries happen on time and on plan.",
  },
  {
    title: "Tracking & Proactive Updates",
    description:
      "Scheduled check calls, milestone alerts, and real-time visibility keep you informed throughout transit — not just when something goes wrong.",
  },
  {
    title: "Exception Management",
    description:
      "Delays, reschedules, and disruptions are handled with urgency. We communicate early, escalate fast, and drive resolution.",
  },
  {
    title: "Documentation & POD Handling",
    description:
      "Clean BOLs, timely proof of delivery, and accurate invoicing documentation — built to support your audit and payment cycles.",
  },
];

const howItWorksSteps = [
  {
    label: "Shipment Details & Requirements",
    description:
      "Share your origin, destination, commodity, equipment needs, and timeline. The more detail up front, the better the match.",
  },
  {
    label: "Quote & Plan",
    description:
      "We provide a competitive rate and confirm load parameters, service expectations, and any special handling requirements.",
  },
  {
    label: "Carrier Match & Confirmation",
    description:
      "A vetted carrier is assigned and confirmed. You receive dispatch details including driver info and pickup window.",
  },
  {
    label: "Pickup & Tracking Updates",
    description:
      "We confirm pickup, then provide proactive in-transit updates at scheduled intervals through delivery.",
  },
  {
    label: "Delivery Confirmation & Documentation",
    description:
      "On-time delivery is verified, POD is collected, and all documentation is processed and delivered to you.",
  },
];

const freightModes = [
  "Dry Van",
  "Reefer",
  "Flatbed / Open Deck",
  "FTL / LTL Coordination",
];

const industries = [
  "General Freight",
  "Retail & Consumer Goods",
  "Manufacturing Support",
  "Distribution & Warehousing",
  "Food & Temperature-Controlled",
  "Construction Materials",
];

const faqs = [
  {
    question: "What lanes do you cover?",
    answer:
      "PRT coordinates freight nationwide across all major U.S. lanes. Coverage depends on equipment availability and carrier network alignment for specific origin–destination pairs.",
  },
  {
    question: "How fast can I get a quote?",
    answer:
      "Most quotes are returned within a few hours during business hours. For standard lanes and equipment, turnaround is often faster. Complex or specialized shipments may require additional coordination.",
  },
  {
    question: "How do you handle tracking and updates?",
    answer:
      "We maintain a structured communication cadence — check calls at pickup, scheduled in-transit updates, and delivery confirmation. Exception alerts are sent proactively when issues arise.",
  },
  {
    question: "What happens if there's a delay or exception?",
    answer:
      "We communicate early and escalate fast. Our team coordinates with the carrier and customer to adjust expectations, reroute if needed, and document the situation for claims readiness.",
  },
  {
    question: "Do you handle FTL and LTL?",
    answer:
      "Yes. We coordinate both full truckload and less-than-truckload shipments, matching the right service level to your freight volume and delivery timeline.",
  },
  {
    question: "What equipment types do you support?",
    answer:
      "Our carrier network includes dry van, refrigerated (reefer), and flatbed / open deck equipment. Availability varies by lane and timing.",
  },
  {
    question: "How do you manage compliance and carrier standards?",
    answer:
      "Every carrier is screened for active operating authority, insurance coverage, and safety record before moving freight. Visit our Compliance page for full details on our standards.",
  },
  {
    question: "How do I get started?",
    answer:
      "Visit our Contact page and select \"I'm a Shipper,\" or email contact@prtlogisticsandfreight.com with your shipment details. We'll follow up with a quote and next steps.",
  },
];

/* ── Page ── */

export default function ShippersPage() {
  return (
    <>
      {/* ── A) Hero ── */}
      <Section bg="navy" noAnimation className="relative overflow-hidden">
        <LogisticsBackground variant="dark" density="sparse" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Shippers: Move Freight With&nbsp;Confidence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            Qualified capacity, disciplined execution, and proactive
            communication from pickup to delivery.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?type=shipper"
              className="rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-brand-glow-red"
            >
              Request a Quote
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/50 hover:text-white"
            >
              View Services
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            <a
              href="mailto:contact@prtlogisticsandfreight.com"
              className="underline underline-offset-2 transition-colors hover:text-white/80"
            >
              contact@prtlogisticsandfreight.com
            </a>
          </p>
        </div>
      </Section>

      {/* ── B) What We Handle ── */}
      <Section
        eyebrow="Our Services"
        title="What We Handle"
        subtitle="End-to-end freight coordination so you can focus on your business."
        bg="white"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceScope.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </Section>

      {/* ── C) How It Works ── */}
      <Section
        eyebrow="Step by Step"
        title="How It Works"
        subtitle="A structured, repeatable process from first quote to final delivery."
        bg="light"
      >
        <Steps steps={howItWorksSteps} />
      </Section>

      {/* ── D) Service Levels & Communication ── */}
      <Section
        title="Service Levels & Communication"
        subtitle="Clear expectations on both sides of the shipment."
        bg="white"
      >
        <TwoColumn
          leftHeading="What Shippers Can Expect"
          rightHeading="What We Ask From Shippers"
          leftItems={[
            "Clear confirmation and complete load details",
            "Proactive updates — not reactive",
            "Fast escalation when exceptions occur",
            "Documentation accuracy and timely POD",
          ]}
          rightItems={[
            "Accurate shipment details and requirements",
            "Pickup and delivery scheduling information",
            "Special handling or access notes",
            "Receiving contact info and facility instructions",
          ]}
        />
      </Section>

      {/* ── E) Freight Types / Modes ── */}
      <Section
        title="Freight Modes"
        subtitle="Equipment matched to your shipment requirements."
        bg="light"
      >
        <div className="space-y-6">
          <BadgeGrid items={freightModes} />
          <p className="text-center text-xs text-brand-deep/50">
            Mode availability depends on lane and timing.
          </p>
        </div>
      </Section>

      {/* ── F) Industries Served ── */}
      <Section
        title="Industries Served"
        subtitle="Broad capability across commodity types and verticals."
        bg="white"
      >
        <BadgeGrid items={industries} />
      </Section>

      {/* ── G) FAQ ── */}
      <Section
        title="Shipper FAQs"
        subtitle="Common questions about working with PRT Logistics & Freight."
        bg="light"
      >
        <Accordion items={faqs} />
      </Section>

      {/* ── H) Final CTA Band ── */}
      <CTAInline
        title="Let's Get Your Freight Moving."
        primaryHref="/contact?type=shipper"
        primaryLabel="Request a Quote"
        secondaryHref="mailto:contact@prtlogisticsandfreight.com"
        secondaryLabel="contact@prtlogisticsandfreight.com"
        bg="navy"
      />
    </>
  );
}
