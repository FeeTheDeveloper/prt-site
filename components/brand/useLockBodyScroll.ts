"use client";

import { useEffect } from "react";

/**
 * Locks body scroll while `locked` is true.
 * Restores the original overflow value on cleanup.
 */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}
