"use client";

type ToggleProps = {
  options: [string, string];
  value: string;
  onChange: (value: string) => void;
  name?: string;
};

/** Segmented control toggle between two options. */
export default function Toggle({
  options,
  value,
  onChange,
  name = "role",
}: ToggleProps) {
  return (
    <div
      role="radiogroup"
      aria-label={name}
      className="inline-flex rounded-lg border border-brand-navy/15 bg-brand-light p-1"
    >
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(opt)}
            className={`rounded-md px-5 py-2 text-sm font-semibold transition-all ${
              active
                ? "bg-brand-navy text-white shadow-sm"
                : "text-brand-deep/70 hover:text-brand-navy"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
