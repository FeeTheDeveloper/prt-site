"use client";

import LogoIntro from "@/components/brand/LogoIntro";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/site/TrustBar";
import Section from "@/components/site/Section";
import ServiceGrid from "@/components/site/ServiceGrid";
import VeteranAdvantage from "@/components/home/VeteranAdvantage";
import CompliancePreview from "@/components/home/CompliancePreview";
import HowItWorks from "@/components/home/HowItWorks";
import CTAInline from "@/components/site/CTAInline";
import Footer from "@/components/site/Footer";

/**
 * Client shell for the Home page.
 * Renders the cinematic intro overlay on top of all content so the
 * fade-out reveals the finished page cleanly underneath.
 */
export default function HomeContent() {
  return (
    <>
      {/* Intro overlay — shows once per session, then disappears */}
      <LogoIntro />

      {/* A) Hero */}
      <Hero />

      {/* B) Trust Bar */}
      <TrustBar />

      {/* C) Services Overview */}
      <Section
        id="services"
        bg="light"
        eyebrow="What We Do"
        title="Freight Brokerage Services"
        subtitle="Reliable capacity, disciplined execution, and clear communication from pickup to delivery."
      >
        <ServiceGrid />
      </Section>

      {/* D) Veteran Advantage / Mission Block */}
      <VeteranAdvantage />

      {/* E) Compliance Preview */}
      <CompliancePreview />

      {/* F) How It Works */}
      <HowItWorks />

      {/* G) Final CTA Band */}
      <CTAInline
        title="Ready to Move Freight With Confidence?"
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="mailto:contact@prtlogisticsandfreight.com"
        secondaryLabel="contact@prtlogisticsandfreight.com"
        bg="deep"
      />

      {/* Footer (home page is standalone, not in the (site) group) */}
      <Footer />
    </>
  );
}
