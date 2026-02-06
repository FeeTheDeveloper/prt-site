"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

import { brandLogos } from "./BrandAssets";
import { useLockBodyScroll } from "./useLockBodyScroll";

/* ── Constants ── */
const DEFAULT_KEY = "prt_intro_seen";
const INTRO_DURATION_MS = 3400; // total runtime before auto-dismiss

/* ── Props ── */
type LogoIntroProps = {
  /** Called when the intro finishes or is skipped. */
  onFinish?: () => void;
  /** sessionStorage key to track "already seen". */
  showOnceKey?: string;
};

/* ── Component ── */
export default function LogoIntro({
  onFinish,
  showOnceKey = DEFAULT_KEY,
}: LogoIntroProps) {
  const [visible, setVisible] = useState<boolean | null>(null); // null = unresolved
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReduced = useReducedMotion();

  // Resolve session state on mount (client-only).
  useEffect(() => {
    try {
      if (sessionStorage.getItem(showOnceKey)) {
        setVisible(false);
        return;
      }
    } catch {
      // sessionStorage unavailable — show intro anyway
    }
    setVisible(true);
  }, [showOnceKey]);

  // Lock body scroll while intro is on screen.
  useLockBodyScroll(visible === true);

  // Auto-dismiss timer.
  useEffect(() => {
    if (visible !== true) return;
    const ms = prefersReduced ? 1200 : INTRO_DURATION_MS;
    timerRef.current = setTimeout(() => dismiss(), ms);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, prefersReduced]);

  const dismiss = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      sessionStorage.setItem(showOnceKey, "1");
    } catch {
      /* noop */
    }
    setVisible(false);
    onFinish?.();
  }, [showOnceKey, onFinish]);

  // Parallax-like subtle mouse tracking on the logo.
  const logoX = useMotionValue(0);
  const logoY = useMotionValue(0);
  const handlePointer = useCallback(
    (e: React.PointerEvent) => {
      if (prefersReduced) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      logoX.set((e.clientX - cx) * 0.015);
      logoY.set((e.clientY - cy) * 0.015);
    },
    [logoX, logoY, prefersReduced],
  );

  // Timing helpers — shortened when user prefers reduced motion.
  const t = useMemo(
    () =>
      prefersReduced
        ? { bg: 0.2, logo: 0.3, sweep: 0.3, exit: 0.25 }
        : { bg: 0.6, logo: 0.8, sweep: 0.7, exit: 0.5 },
    [prefersReduced],
  );

  // Don't render anything until we know the session state.
  if (visible === null || visible === false) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="logo-intro"
          role="dialog"
          aria-label="PRT Logistics & Freight — brand intro"
          aria-modal="true"
          onPointerMove={handlePointer}
          /* ── Exit animation ── */
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: t.exit, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* ── Background ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: t.bg }}
            className="absolute inset-0 bg-brand-deep"
          />

          {/* ── Animated grid overlay — subtle depth texture ── */}
          {!prefersReduced && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px)," +
                  "linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          )}

          {/* ── Glow behind logo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.35, scale: 1.1 }}
            transition={{ duration: t.logo, delay: 0.2 }}
            className="pointer-events-none absolute h-[420px] w-[420px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,32,64,0.7) 0%, transparent 70%)",
            }}
          />

          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: t.logo,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ x: logoX, y: logoY }}
            className="relative z-10"
          >
            <Image
              src={brandLogos.primary}
              alt="PRT Logistics & Freight"
              width={320}
              height={320}
              priority
              className="h-auto w-[60vw] max-w-[320px] select-none sm:max-w-[400px]"
              sizes="(max-width: 640px) 60vw, 400px"
            />
          </motion.div>

          {/* ── Red swoosh streak ── */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: "120%", opacity: [0, 0.85, 0.85, 0] }}
            transition={{
              duration: t.sweep,
              delay: prefersReduced ? 0.3 : 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-y-0 z-20 w-[60%]"
            style={{
              background:
                "linear-gradient(105deg, transparent 20%, #E00000 45%, #ff3333 55%, transparent 80%)",
              filter: "blur(18px)",
              transform: "skewX(-18deg)",
            }}
          />

          {/* ── Secondary white streak (thinner, faster) ── */}
          <motion.div
            initial={{ x: "-140%", opacity: 0 }}
            animate={{ x: "140%", opacity: [0, 0.5, 0.5, 0] }}
            transition={{
              duration: t.sweep * 0.75,
              delay: prefersReduced ? 0.35 : 1.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-y-0 z-20 w-[30%]"
            style={{
              background:
                "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)",
              filter: "blur(12px)",
              transform: "skewX(-18deg)",
            }}
          />

          {/* ── Skip button ── */}
          <motion.button
            type="button"
            onClick={dismiss}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: prefersReduced ? 0.2 : 0.8, duration: 0.4 }}
            className="absolute bottom-10 z-30 rounded-full border border-brand-mid/40 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-mid transition-colors hover:border-brand-red hover:text-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
            aria-label="Skip brand intro"
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

