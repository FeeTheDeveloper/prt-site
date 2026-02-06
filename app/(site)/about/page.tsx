import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/site/Section";
import CTAInline from "@/components/site/CTAInline";
import ServiceCard from "@/components/site/ServiceCard";
import LogisticsBackground from "@/components/ui/LogisticsBackground";

export const metadata: Metadata = {
  title: "About",
  description:
    "PRT Logistics and Freight LLC is a veteran-owned freight brokerage built on military values — disciplined execution, compliance-minded carrier vetting, and reliable nationwide logistics coordination.",
  openGraph: {
    title: "About PRT Logistics & Freight",
    description:
      "Veteran-owned freight brokerage founded on integrity, accountability, and service. Discover the mission behind PRT Logistics & Freight.",
  },
};

/* ── Values ── */
const values = [
  { name: "Integrity", desc: "We do what we say — every load, every time." },
  { name: "Accountability", desc: "Ownership of outcomes from pickup to delivery." },
  { name: "Service", desc: "Customer-first mindset rooted in military tradition." },
  { name: "Communication", desc: "Proactive updates so you're never in the dark." },
  { name: "Operational Discipline", desc: "Structured processes that eliminate guesswork." },
];

/* ── Differentiators ── */
const differentiators = [
  {
    title: "Veteran-Owned Leadership",
    description:
      "Our military background instills a mission-first mindset — structured planning, decisive action, and unwavering follow-through on every shipment.",
  },
  {
    title: "Compliance-Minded Carrier Vetting",
    description:
      "Every carrier in our network is screened for authority, insurance, and safety record before they touch your freight.",
  },
  {
    title: "Clear, Proactive Updates",
    description:
      "Real-time visibility and consistent communication keep shippers and carriers aligned from dispatch to delivery.",
  },
  {
    title: "Problem-Solving Under Pressure",
    description:
      "When disruptions happen, we respond with urgency and composure — finding solutions, not excuses.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── A) Hero ── */}
      <Section bg="navy" noAnimation className="relative overflow-hidden">
        <LogisticsBackground variant="dark" density="sparse" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Veteran-Owned. Mission-Driven. Freight-Ready.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            Nationwide brokerage coordination built on discipline,
            accountability, and service.
          </p>
        </div>
      </Section>

      {/* ── B) Company Overview ── */}
      <Section
        eyebrow="Our Story"
        title="Who We Are"
        subtitle="PRT Logistics and Freight LLC connects shippers with qualified carriers to move freight efficiently — anywhere in the country."
        bg="white"
      >
        <div className="mx-auto max-w-3xl space-y-5 text-center text-brand-deep/80">
          <p className="text-lg leading-relaxed">
            Founded on the principles of military service, PRT Logistics &amp;
            Freight operates as a licensed freight brokerage coordinating Full
            Truckload, Less-Than-Truckload, and dedicated freight solutions. We
            bring structured process, clear communication, and relentless
            reliability to every shipment we manage.
          </p>
          <p className="text-lg leading-relaxed">
            Our team treats every load like a mission — with defined objectives,
            real-time tracking, and accountability from pickup to delivery.
            Whether you&apos;re shipping pallets across Texas or coordinating
            multi-stop routes nationwide, PRT delivers the discipline your supply
            chain demands.
          </p>
          <p className="text-sm font-medium text-brand-navy/60">
            Texas Certificate of Filing effective 06/06/2025
          </p>
        </div>
      </Section>

      {/* ── C) Mission / Vision / Values ── */}
      <Section bg="light">
        <div className="mx-auto max-w-4xl">
          {/* Mission & Vision */}
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-red">
                Our Mission
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-brand-deep/80">
                Deliver disciplined execution and reliable freight coordination
                that shippers and carriers can count on — every shipment, every
                mile.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-red">
                Our Vision
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-brand-deep/80">
                Become a trusted, long-term partner for shippers and carriers
                through uncompromising compliance, consistent performance, and a
                service-first culture.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">
              Core Values
            </h3>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <li
                  key={v.name}
                  className="rounded-xl border border-brand-navy/8 bg-white p-5 text-left"
                >
                  <span className="font-bold text-brand-navy">{v.name}</span>
                  <p className="mt-1 text-sm text-brand-deep/70">{v.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── D) What Makes Us Different ── */}
      <Section
        eyebrow="Our Edge"
        title="What Makes Us Different"
        subtitle="Four pillars that set PRT Logistics & Freight apart from the rest."
        bg="white"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {differentiators.map((d) => (
            <ServiceCard
              key={d.title}
              title={d.title}
              description={d.description}
            />
          ))}
        </div>
      </Section>

      {/* ── E) CTA Band ── */}
      <CTAInline
        title="Ready to Move Freight with a Team That Gets It Done?"
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/carriers"
        secondaryLabel="Partner as a Carrier"
        bg="navy"
      />

      {/* Email line beneath CTA */}
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
