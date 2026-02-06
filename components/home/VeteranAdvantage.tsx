import Section from "@/components/site/Section";

const outcomes = [
  {
    title: "On-Time Mindset",
    description:
      "Every load is planned with urgency and precision. Deadlines are commitments, not suggestions.",
  },
  {
    title: "Proactive Communication",
    description:
      "You will never have to chase an update. We report status before you need to ask.",
  },
  {
    title: "Problem Resolution",
    description:
      "When exceptions happen, we respond immediately with solutions — not excuses.",
  },
];

/** Mission-driven differentiator block. */
export default function VeteranAdvantage() {
  return (
    <Section
      id="veteran-advantage"
      bg="navy"
      eyebrow="Our Advantage"
      title="Mission-Driven Freight Execution"
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-10 text-center text-lg leading-relaxed text-white/75">
          Built on disciplined operations, integrity, and accountability. We
          treat every load like a mission — because in freight, there are no
          second chances on a delivery window.
        </p>

        <div className="grid gap-8 sm:grid-cols-3">
          {outcomes.map(({ title, description }) => (
            <div key={title} className="text-center">
              <h3 className="text-base font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
