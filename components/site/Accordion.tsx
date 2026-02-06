"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

/** Accessible FAQ-style accordion with smooth open/close. */
export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <dl className="mx-auto max-w-3xl divide-y divide-brand-navy/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="py-5">
            <dt>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
                className="flex w-full items-start justify-between text-left"
              >
                <span className="text-sm font-semibold text-brand-navy sm:text-base">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy/60 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm leading-relaxed text-brand-deep/70">
                {item.answer}
              </p>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
