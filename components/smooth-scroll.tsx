"use client";

import * as React from "react";

const SCROLL_DURATION_MS = 1100;
const NAV_OFFSET_PX = 72;

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export function SmoothScroll() {
  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const target =
        hash === "#top" ? document.body : document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      const targetY =
        target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;

      if (prefersReducedMotion) {
        window.scrollTo(0, Math.max(targetY, 0));
        return;
      }

      const startY = window.scrollY;
      const distance = Math.max(targetY, 0) - startY;
      const startTime = performance.now();

      function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
        window.scrollTo(0, startY + distance * easeInOutQuad(progress));
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      history.pushState(null, "", hash);
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
