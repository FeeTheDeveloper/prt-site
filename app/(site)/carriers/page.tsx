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
  title: "Carriers",
  description:
    "Partner with PRT Logistics & Freight as a carrier. Professional coordination, clear communication, and disciplined execution on every load.",
  openGraph: {
    title: "Carriers — Partner With PRT Logistics & Freight",
    description:
      "Join a professional brokerage that values carriers. Clear load details, fair communication, and long-term partnership opportunities.",
  },
};

/* ── Data ── */

const benefits = [
  {
    title: "Clear Load Details & Expectations",
    description:
      "Every load comes with complete dispatch information — origin, destination, pickup window, commodity, and special requirements up front. No guesswork.",
  },
  {
    title: "Fair, Consistent Communication",
    description:
      "We treat carriers as partners, not transactions. Expect professional coordination, timely responses, and honest conversation throughout every shipment.",
  },
  {
    title: "Fast Escalation & Issue Resolution",
    description:
      "When exceptions happen, we respond with urgency — coordinating rebooking, rerouting, or customer communication to resolve issues quickly.",
  },
  {
    title: "Long-Term Partnership Opportunities",
    description:
      "Carriers who deliver consistent service may be considered for dedicated lane opportunities and recurring freight as availability allows.",
  },
];

const onboardingSteps = [
  {
    label: "Introduce Your Company & Equipment",
    description:
      "Reach out via our contact form or email with your company name, equipment types, and lanes of interest.",
  },
  {
    label: "Submit Basic Carrier Information",
    description:
      "Typical documents requested may include MC/DOT number, certificate of insurance, W-9, and a signed carrier agreement.",
  },
  {
    label: "Review Load & Communication Standards",
    description:
      "We'll walk through our expectations for check calls, tracking updates, and on-time performance so both sides are aligned.",
  },
  {
    label: "Confirm Dispatch & Tracking Expectations",
    description:
      "Agree on communication cadence, POD submission timelines, and exception-reporting procedures before the first load.",
  },
  {
    label: "Build an Ongoing Partnership",
    description:
      "Demonstrate reliable performance and grow into additional lanes and volume as freight and alignment allow.",
  },
];

const equipmentBadges = [
  "Dry Van",
  "Reefer",
  "Flatbed / Open Deck",
  "FTL / LTL Coordination",
];

const faqs = [
  {
    question: "How do I start the carrier onboarding process?",
    answer:
      "Visit our Contact page and select \"I'm a Carrier,\" or email contact@prtlogisticsandfreight.com with your company name, MC/DOT number, and equipment types. We'll follow up with next steps.",
  },
  {
    question: "What information is typically required to get started?",
    answer:
      "We generally request your MC or DOT number, a certificate of insurance, a completed W-9, and a signed carrier agreement. Additional documents may be requested depending on the freight.",
  },
  {
    question: "How do you handle tracking and check calls?",
    answer:
      "We set clear tracking expectations before the first load. Typically, we request check calls at pickup, at scheduled intervals during transit, and at delivery. Proactive updates on delays or exceptions are expected.",
  },
  {
    question: "How are rate confirmations handled?",
    answer:
      "Rate confirmations are issued prior to dispatch with all load details — rate, pickup/delivery windows, commodity, and any special instructions. Both parties confirm before the load moves.",
  },
  {
    question: "What happens if there is an exception or delay?",
    answer:
      "Communicate early. We work with carriers to resolve issues quickly — whether that means adjusting delivery expectations with the customer, coordinating a repower, or documenting the situation for claims readiness.",
  },
  {
    question: "Do you offer dedicated lanes?",
    answer:
      "Dedicated lane opportunities may be available for carriers who demonstrate consistent on-time performance, strong communication, and reliable capacity. Availability varies by lane and volume.",
  },
  {
    question: "Who do I contact with questions?",
    answer:
      "Reach us at contact@prtlogisticsandfreight.com or through the Contact page on our website. We respond within one business day.",
  },
];

/* ── Page ── */

export default function CarriersPage() {
  return (
    <>
      {/* ── A) Hero ── */}
      <Section bg="navy" noAnimation className="relative overflow-hidden">
        <LogisticsBackground variant="dark" density="sparse" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Carriers: Partner With&nbsp;PRT
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            Clear load details, disciplined communication, and a professional
            brokerage relationship.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?type=carrier"
              className="rounded-lg bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-brand-glow-red"
            >
              Start Carrier Onboarding
            </Link>
            <Link
              href="/compliance"
              className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:border-white/50 hover:text-white"
            >
              View Compliance Standards
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">
            For carrier inquiries:{" "}
            <a
              href="mailto:contact@prtlogisticsandfreight.com"
              className="underline underline-offset-2 transition-colors hover:text-white/80"
            >
              contact@prtlogisticsandfreight.com
            </a>
          </p>
        </div>
      </Section>

      {/* ── B) Why Partner With Us ── */}
      <Section
        eyebrow="Benefits"
        title="Why Partner With PRT"
        subtitle="A brokerage that respects the carriers who keep freight moving."
        bg="white"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <ServiceCard
              key={b.title}
              title={b.title}
              description={b.description}
            />
          ))}
        </div>
      </Section>

      {/* ── C) Carrier Onboarding Steps ── */}
      <Section
        eyebrow="Getting Started"
        title="How Carrier Onboarding Works"
        subtitle="A straightforward process designed to get you running loads quickly."
        bg="light"
      >
        <Steps steps={onboardingSteps} />
      </Section>

      {/* ── D) Standards & Expectations ── */}
      <Section
        title="Standards & Expectations"
        subtitle="What the partnership looks like from both sides."
        bg="white"
      >
        <TwoColumn
          leftHeading="What We Expect"
          rightHeading="What You Can Expect From PRT"
          leftItems={[
            "On-time pickups and deliveries mindset",
            "Proactive check calls and status updates",
            "Clean paperwork and timely POD submission",
            "Professional, responsive communication",
          ]}
          rightItems={[
            "Clear, complete dispatch information",
            "Professional coordination and respectful interaction",
            "Support and escalation when exceptions happen",
            "Timely documentation and issue handling",
          ]}
        />
      </Section>

      {/* ── E) Equipment & Coverage ── */}
      <Section
        title="Equipment & Coverage"
        subtitle="Freight opportunities across multiple equipment types."
        bg="light"
      >
        <div className="space-y-6">
          <BadgeGrid items={equipmentBadges} />
          <p className="text-center text-xs text-brand-deep/50">
            Opportunities vary by lane and availability.
          </p>
        </div>
      </Section>

      {/* ── F) FAQ ── */}
      <Section
        title="Carrier FAQs"
        subtitle="Common questions about working with PRT Logistics & Freight."
        bg="white"
      >
        <Accordion items={faqs} />
      </Section>

      {/* ── G) Final CTA Band ── */}
      <CTAInline
        title="Ready to Run Loads With a Professional Brokerage?"
        primaryHref="/contact?type=carrier"
        primaryLabel="Start Carrier Onboarding"
        secondaryHref="mailto:contact@prtlogisticsandfreight.com"
        secondaryLabel="contact@prtlogisticsandfreight.com"
        bg="navy"
      />
    </>
  );
}
