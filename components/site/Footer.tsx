import Link from "next/link";

/* ── Footer link groups ── */
const columns = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Shippers", href: "/shippers" },
      { label: "Carriers", href: "/carriers" },
      { label: "All Services", href: "/services" },
    ],
  },
  {
    heading: "Compliance",
    links: [{ label: "Compliance & Vetting", href: "/compliance" }],
  },
] as const;

/** Site-wide footer with multi-column links, contact info, and legal lines. */
export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-brand-deep text-brand-mid">
      {/* Decorative top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* ── Top grid ── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="text-lg font-bold text-white transition-colors hover:text-brand-red">
              PRT Logistics &amp; Freight
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-brand-mid/80">
              Veteran-owned freight brokerage delivering nationwide logistics
              coordination with discipline, accountability, and reliability.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/70">
                {col.heading}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-brand-mid/80 transition-colors hover:text-white"
                    >
                      <span className="inline-block h-px w-0 bg-brand-red transition-all duration-300 group-hover:w-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Contact line ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-brand-mid/70">
          <a
            href="mailto:contact@prtlogisticsandfreight.com"
            className="transition-colors hover:text-white"
          >
            contact@prtlogisticsandfreight.com
          </a>
          <span className="hidden sm:inline" aria-hidden="true">
            &middot;
          </span>
          <a
            href="https://prtlogisticsandfreight.com"
            className="transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            prtlogisticsandfreight.com
          </a>
        </div>

        {/* ── Divider ── */}
        <hr className="my-8 border-white/10" />

        {/* ── Legal ── */}
        <div className="flex flex-col items-center gap-2 text-center text-xs text-brand-mid/60">
          <p>
            PRT Logistics and Freight LLC &mdash; Veteran-Owned Freight
            Brokerage
          </p>
          <p>Texas Certificate of Filing effective 06/06/2025</p>
          <p>
            &copy; {new Date().getFullYear()} PRT Logistics and Freight LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
