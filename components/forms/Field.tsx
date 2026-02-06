"use client";

import { useId } from "react";

type FieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date";
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  /** Render a textarea instead of an input */
  multiline?: boolean;
  rows?: number;
  /** Visually hidden (honeypot) */
  hidden?: boolean;
  autoComplete?: string;
};

/** Labelled text input or textarea with consistent styling. */
export default function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  value,
  onChange,
  multiline = false,
  rows = 4,
  hidden = false,
  autoComplete,
}: FieldProps) {
  const id = useId();

  const baseCls =
    "block w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-2.5 text-sm text-brand-deep placeholder:text-brand-mid/60 transition-colors focus:border-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-navy/10";

  const wrapper = hidden
    ? "absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
    : "";

  return (
    <div className={wrapper}>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-brand-navy"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows}
          className={baseCls}
          autoComplete={autoComplete}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseCls}
          autoComplete={autoComplete}
        />
      )}
    </div>
  );
}
