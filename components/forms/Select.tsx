"use client";

import { useId } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  name: string;
  options: Option[];
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

/** Labelled select dropdown with consistent styling. */
export default function Select({
  label,
  name,
  options,
  required = false,
  value,
  onChange,
  placeholder = "Select…",
}: SelectProps) {
  const id = useId();

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-brand-navy"
      >
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-lg border border-brand-navy/15 bg-white px-4 py-2.5 text-sm text-brand-deep transition-colors focus:border-brand-navy/40 focus:outline-none focus:ring-2 focus:ring-brand-navy/10"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}
