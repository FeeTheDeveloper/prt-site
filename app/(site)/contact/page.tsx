import type { Metadata } from "next";
import Section from "@/components/site/Section";
import ContactForm from "@/components/forms/ContactForm";
import LogisticsBackground from "@/components/ui/LogisticsBackground";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a freight quote or start carrier onboarding with PRT Logistics & Freight. Clear communication, qualified capacity, disciplined execution.",
  openGraph: {
    title: "Contact — PRT Logistics & Freight",
    description:
      "Request a freight quote or partner as a carrier. Reach PRT Logistics & Freight for professional, veteran-owned brokerage support.",
  },
};

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const defaultRole = type === "carrier" ? "carrier" : "shipper";

  return (
    <>
      {/* ── Hero ── */}
      <Section bg="navy" noAnimation className="relative overflow-hidden">
        <LogisticsBackground variant="dark" density="sparse" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Request a Quote or Partner&nbsp;With&nbsp;Us
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75 sm:text-xl">
            Clear communication. Qualified capacity. Disciplined execution.
          </p>
        </div>
      </Section>

      {/* ── Form section ── */}
      <Section bg="white">
        <div className="mx-auto max-w-2xl">
          <ContactForm defaultRole={defaultRole} />
        </div>
      </Section>

      {/* ── Direct contact fallback ── */}
      <div className="bg-brand-light py-10 text-center">
        <p className="text-sm text-brand-deep/70">
          Prefer email?{" "}
          <a
            href="mailto:contact@prtlogisticsandfreight.com"
            className="font-medium text-brand-red underline underline-offset-2 transition-colors hover:text-brand-red/80"
          >
            contact@prtlogisticsandfreight.com
          </a>
        </p>
      </div>
    </>
  );
}
