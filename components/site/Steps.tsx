type Step = {
  label: string;
  description?: string;
};

type StepsProps = {
  steps: Step[];
};

/** Numbered step loop / timeline — compact and clean. */
export default function Steps({ steps }: StepsProps) {
  return (
    <ol className="relative mx-auto max-w-2xl space-y-8 border-l-2 border-brand-navy/10 pl-8">
      {steps.map((s, i) => (
        <li key={s.label} className="relative">
          <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-xs font-bold text-white">
            {i + 1}
          </span>
          <h3 className="font-bold text-brand-navy">{s.label}</h3>
          {s.description && (
            <p className="mt-1 text-sm leading-relaxed text-brand-deep/70">
              {s.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
