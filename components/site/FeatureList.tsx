type Feature = {
  title: string;
  description: string;
};

type FeatureListProps = {
  features: Feature[];
  /** Number of columns at lg breakpoint */
  columns?: 1 | 2;
};

/** Two-column bullet list with bold titles and supporting copy. */
export default function FeatureList({
  features,
  columns = 2,
}: FeatureListProps) {
  const gridCls =
    columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1 max-w-2xl mx-auto";

  return (
    <ul className={`grid gap-x-10 gap-y-6 ${gridCls}`}>
      {features.map((f) => (
        <li key={f.title} className="flex gap-3">
          {/* Bullet marker */}
          <span
            aria-hidden="true"
            className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-brand-red"
          />
          <div>
            <p className="font-semibold text-brand-navy">{f.title}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-brand-deep/70">
              {f.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
