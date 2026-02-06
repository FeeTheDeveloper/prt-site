import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/site/Section";
import CTAInline from "@/components/site/CTAInline";
import FeatureList from "@/components/site/FeatureList";
import Steps from "@/components/site/Steps";
import TwoColumn from "@/components/site/TwoColumn";
import LogisticsBackground from "@/components/ui/LogisticsBackground";

export const metadata: Metadata = {
  title: "Compliance & Carrier Standards",
  description:
    "PRT Logistics & Freight maintains strict carrier onboarding, insurance verification, safety screening, and documentation standards to protect freight and reduce risk.",
  openGraph: {
    title: "Compliance & Carrier Standards — PRT Logistics & Freight",
    description:
      "Strict carrier onboarding, insurance verification, safety screening, and documentation standards that protect freight and reduce risk.",
  },
};

/* ── Data ── */

const onboardingStandards = [
  {
    title: "Operating Authority & Registration Checks",
    description:
      "We verify that every carrier holds active operating authority and proper registration before they are approved to move freight.",
  },
  {
    title: "Insurance Verification",
    description:
      "Active insurance policies are confirmed and reviewed for coverage alignment prior to load tendering, with ongoing monitoring as needed.",
  },
  {
    title: "Safety & Performance Screening",
    description:
      "Carriers are screened using publicly available safety data, inspection history, and performance indicators to assess fitness for service.",
  },
  {
    title: "Documentation Requirements",
    description:
      "Standard onboarding documents typically include a W-9, certificate of insurance, signed carrier agreement, and completed carrier packet.",
  },
  {
    title: "Communication Expectations",
    description:
      "Carriers are expected to maintain scheduled check calls, provide timely tracking updates, and communicate proactively on any exceptions.",
  },
  {
    title: "Professional Conduct & Service Standards",
    description:
      "We expect courteous, on-time pickups and deliveries, proper equipment, and professional interaction at every facility.",
  },
];

const trackingSteps = [
  {
    label: "Load Confirmation",
    description:
      "Rate confirmation, pickup details, and carrier assignment are finalized and documented.",
  },
  {
    label: "Pickup Verification",
    description:
      "Confirmation that the driver has arrived, loaded, and departed the origin facility on schedule.",
  },
  {
    label: "In-Transit Updates",
    description:
      "Scheduled check calls and milestone updates provide real-time visibility throughout transit.",
  },
  {
    label: "Delivery Confirmation + POD Handling",
    description:
      "On-time delivery is verified and proof of delivery documentation is collected and processed.",
  },
];

const insuranceCoverages = [
  "Auto liability",
  "Cargo coverage",
  "General liability (if applicable)",
];

const docBullets = [
  "Clean BOL and delivery documentation on every shipment",
  "Timely POD submission to support invoicing and audit readiness",
  "Exception notes and incident documentation when issues occur",
];

const outcomeBullets = [
  "Reduced service disruptions through qualified capacity",
  "Clear documentation and claims readiness",
  "Better on-time performance backed by vetted carriers",
];

/* ── Page ── */

export default function CompliancePage() {
  return (
    <>
      {/* ── A) Hero ── */}
      <Section bg="navy" noAnimation className="relative overflow-hidden">
        <LogisticsBackground variant="dark" density="sparse" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Compliance &amp; Carrier Standards
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            We prioritize qualified capacity, documentation accuracy, and
            proactive communication to reduce risk and protect service levels.
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
              Partner as a Carrier
            </Link>
          </div>
        </div>
      </Section>

      {/* ── B) Why Compliance Matters ── */}
      <Section
        title="Why Compliance Matters"
        subtitle="Protecting freight starts before a truck is ever dispatched."
        bg="white"
      >
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-brand-deep/80">
            In freight brokerage, compliance isn&apos;t a checkbox — it&apos;s
            the foundation of every reliable shipment. By vetting carriers
            before they enter our network and maintaining documentation discipline
            throughout the lifecycle of every load, PRT reduces risk, strengthens
            accountability, and delivers the consistency shippers depend on.
          </p>
          <ul className="mx-auto max-w-md space-y-3 text-left">
            {outcomeBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-brand-deep/80">
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
        </div>
      </Section>

      {/* ── C) Carrier Onboarding Standards ── */}
      <Section
        eyebrow="Onboarding"
        title="Carrier Onboarding Standards"
        subtitle="Every carrier is evaluated before moving a single load."
        bg="light"
      >
        <FeatureList features={onboardingStandards} columns={2} />
      </Section>

      {/* ── D) Insurance & Risk Management ── */}
      <Section
        title="Insurance & Risk Management"
        subtitle="Verified coverage before every load is tendered."
        bg="white"
      >
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <p className="text-lg leading-relaxed text-brand-deep/80">
            Insurance is verified prior to tendering loads and monitored on an
            ongoing basis. We confirm that carriers maintain active policies with
            coverage aligned to the freight being moved.
          </p>

          <div className="inline-block rounded-xl border border-brand-navy/8 bg-brand-light px-8 py-6 text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-red">
              Typical Coverages Verified
            </p>
            <ul className="space-y-2 text-sm text-brand-deep/80">
              {insuranceCoverages.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs italic text-brand-mid">
            Coverage requirements may vary by shipment and customer needs.
          </p>
        </div>
      </Section>

      {/* ── E) Tracking & Visibility Standards ── */}
      <Section
        eyebrow="Visibility"
        title="Tracking & Visibility Standards"
        subtitle="Proactive updates and exception reporting on every load."
        bg="light"
      >
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-center text-lg leading-relaxed text-brand-deep/80">
            PRT maintains a structured communication cadence from load
            confirmation through delivery. Scheduled check calls, milestone
            alerts, and exception notifications keep shippers informed and allow
            our team to act quickly when issues arise.
          </p>
          <Steps steps={trackingSteps} />
        </div>
      </Section>

      {/* ── F) Documentation & Claims Readiness ── */}
      <Section
        title="Documentation & Claims Readiness"
        subtitle="Accurate paperwork protects everyone involved."
        bg="white"
      >
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-lg leading-relaxed text-brand-deep/80">
            Every shipment is backed by clean documentation — from the initial
            rate confirmation through proof of delivery. When exceptions occur,
            they are documented promptly and accurately to support resolution and
            claims readiness.
          </p>
          <ul className="mx-auto max-w-md space-y-3 text-left">
            {docBullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-brand-deep/80">
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
        </div>
      </Section>

      {/* ── G) For Carriers: Expectations & Benefits ── */}
      <Section
        title="For Carriers"
        subtitle="What we expect — and what you get in return."
        bg="light"
      >
        <TwoColumn
          leftHeading="What We Expect"
          rightHeading="What You Get"
          leftItems={[
            "Communication discipline and responsiveness",
            "Timely check calls and status updates",
            "Professional pickups and deliveries",
            "Accurate documentation and POD submission",
          ]}
          rightItems={[
            "Clear, complete load details upfront",
            "Fair communication and operational support",
            "Fast issue escalation and resolution",
            "A professional, reliable brokerage relationship",
          ]}
        />
      </Section>

      {/* ── H) CTA Band ── */}
      <CTAInline
        title="Move Freight With Standards You Can Trust."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/carriers"
        secondaryLabel="Become a Carrier"
        bg="navy"
      />

      {/* Email line */}
      <div className="bg-brand-navy py-4 text-center">
        <a
          href="mailto:contact@prtlogisticsandfreight.com"
          className="text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          contact@prtlogisticsandfreight.com
        </a>
      </div>
    </>
  );
}
