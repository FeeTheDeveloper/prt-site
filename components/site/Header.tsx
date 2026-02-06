"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { brandLogos } from "@/components/brand/BrandAssets";

/* ── Navigation ── */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/shippers", label: "Shippers" },
  { href: "/carriers", label: "Carriers" },
  { href: "/contact", label: "Contact" },
] as const;

const MOBILE_NAV_ID = "mobile-navigation";
const SCROLL_THRESHOLD = 32;

/* ── Helpers ── */
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* Focus first link when mobile menu opens */
  useEffect(() => {
    if (mobileOpen) firstLinkRef.current?.focus();
  }, [mobileOpen]);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen((v) => !v), []);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full border-b transition-all duration-300 ease-out",
          scrolled
            ? "border-brand-navy/8 bg-white/90 shadow-brand-depth backdrop-blur-xl"
            : "border-transparent bg-white/95 backdrop-blur-md",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-7xl items-center justify-between px-4 transition-[height] duration-300 ease-out sm:px-6 lg:px-8",
            scrolled ? "h-16" : "h-20",
          ].join(" ")}
        >
          {/* ── Logo ── */}
          <Link
            href="/"
            className="relative flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
          >
            <Image
              src={brandLogos.primary}
              alt="PRT Logistics & Freight"
              width={56}
              height={56}
              priority
              className={[
                "object-contain transition-[width,height] duration-300 ease-out",
                scrolled ? "h-[40px] w-[40px]" : "h-[52px] w-[52px]",
              ].join(" ")}
              sizes="56px"
            />
            <span
              className={[
                "hidden font-bold tracking-tight text-brand-navy transition-all duration-300 sm:inline",
                scrolled ? "text-lg" : "text-xl",
              ].join(" ")}
            >
              PRT Logistics
            </span>
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navLinks.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy",
                    active
                      ? "text-brand-navy"
                      : "text-brand-deep/60 hover:text-brand-navy",
                  ].join(" ")}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-brand-red"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-lg bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-brand-glow-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:inline-flex"
            >
              Request a Quote
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
              aria-controls={MOBILE_NAV_ID}
              onClick={toggleMobile}
              className="relative flex h-10 w-10 items-center justify-center rounded-md text-brand-navy transition-colors hover:bg-brand-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy lg:hidden"
            >
              <span
                className={[
                  "absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  mobileOpen ? "rotate-45" : "-translate-y-1.5",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  mobileOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "absolute h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                  mobileOpen ? "-rotate-45" : "translate-y-1.5",
                ].join(" ")}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-deep/40 backdrop-blur-sm lg:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id={MOBILE_NAV_ID}
            key="mobile-nav"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col bg-white shadow-brand-depth lg:hidden"
          >
            {/* Panel header */}
            <div className="flex h-20 items-center justify-between border-b border-brand-navy/10 px-6">
              <span className="text-lg font-bold tracking-tight text-brand-navy">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={closeMobile}
                className="flex h-9 w-9 items-center justify-center rounded-md text-brand-navy transition-colors hover:bg-brand-navy/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M1 1l16 16M17 1L1 17" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
              {navLinks.map(({ href, label }, i) => {
                const active = isActive(pathname, href);
                return (
                  <Link
                    key={href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={href}
                    onClick={closeMobile}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy",
                      active
                        ? "bg-brand-navy/8 text-brand-navy"
                        : "text-brand-deep/75 hover:bg-brand-navy/5 hover:text-brand-navy",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-brand-navy/10 p-4">
              <Link
                href="/contact"
                onClick={closeMobile}
                className="flex w-full items-center justify-center rounded-lg bg-brand-red px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              >
                Request a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
