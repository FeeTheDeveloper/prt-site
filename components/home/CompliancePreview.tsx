import Link from "next/link";
import Section from "@/components/site/Section";

const standards = [
  "Insurance verification and ongoing monitoring",
  "Safety record and operating authority checks",
  "Documentation accuracy on every shipment",
  "Proactive issue resolution before problems escalate",
];

/** Compliance teaser section with link to full page. */
export default function CompliancePreview() {
  return (
    <Section
      id="compliance-preview"
      bg="light"
      eyebrow="Standards"
      title="Compliance & Carrier Standards"
      subtitle="Every carrier in our network meets strict qualification requirements before they move a single load."
    >
      <div className="mx-auto max-w-2xl">
        <ul className="space-y-4">
          {standards.map((item) => (
            <li key={item} className="flex items-start gap-3 text-brand-deep/80">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 h-5 w-5 shrink-0 text-brand-red"
                aria-hidden="true"
              >
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <span className="text-base leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/compliance"
            className="rounded-lg border border-brand-navy/20 px-6 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
          >
            View Compliance Standards
          </Link>
        </div>
      </div>
    </Section>
  );
}
