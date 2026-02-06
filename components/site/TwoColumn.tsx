type TwoColumnProps = {
  /** Left column heading */
  leftHeading: string;
  /** Right column heading */
  rightHeading: string;
  /** Left column bullet items */
  leftItems: string[];
  /** Right column bullet items */
  rightItems: string[];
  /** Accent color for the column headings */
  accent?: "red" | "navy";
};

/** Responsive two-column layout with bullet lists — great for comparison sections. */
export default function TwoColumn({
  leftHeading,
  rightHeading,
  leftItems,
  rightItems,
  accent = "red",
}: TwoColumnProps) {
  const accentCls =
    accent === "red" ? "text-brand-red" : "text-brand-navy";

  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {/* Left */}
      <div className="rounded-xl border border-brand-navy/8 bg-white p-6 sm:p-8">
        <h3
          className={`text-sm font-semibold uppercase tracking-widest ${accentCls}`}
        >
          {leftHeading}
        </h3>
        <ul className="mt-5 space-y-3">
          {leftItems.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-brand-deep/80">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-navy"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="rounded-xl border border-brand-navy/8 bg-white p-6 sm:p-8">
        <h3
          className={`text-sm font-semibold uppercase tracking-widest ${accentCls}`}
        >
          {rightHeading}
        </h3>
        <ul className="mt-5 space-y-3">
          {rightItems.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-brand-deep/80">
              <span
                aria-hidden="true"
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-red"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
