"use client";

import * as React from "react";

const WHEEL_MULTIPLIER = 0.45;
const KEY_SCROLL_PX = 260;
const LERP_FACTOR = 0.1;

function isFormField(el: Element | null) {
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    (el as HTMLElement).isContentEditable
  );
}

export function ScrollSpeed() {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let target = window.scrollY;
    let animating = false;
    let rafId: number | null = null;

    function maxScroll() {
      return document.documentElement.scrollHeight - window.innerHeight;
    }

    function clamp(v: number) {
      return Math.min(Math.max(v, 0), maxScroll());
    }

    function loop() {
      const current = window.scrollY;
      const diff = target - current;
      if (Math.abs(diff) < 0.5) {
        window.scrollTo(0, target);
        animating = false;
        return;
      }
      window.scrollTo(0, current + diff * LERP_FACTOR);
      rafId = requestAnimationFrame(loop);
    }

    function startLoop() {
      if (!animating) {
        animating = true;
        rafId = requestAnimationFrame(loop);
      }
    }

    function onWheel(e: WheelEvent) {
      e.preventDefault();
      if (!animating) target = window.scrollY;
      target = clamp(target + e.deltaY * WHEEL_MULTIPLIER);
      startLoop();
    }

    function onKeyDown(e: KeyboardEvent) {
      if (isFormField(document.activeElement)) return;

      let delta = 0;
      if (e.key === "ArrowDown") delta = KEY_SCROLL_PX;
      else if (e.key === "ArrowUp") delta = -KEY_SCROLL_PX;
      else if (e.key === "PageDown") delta = window.innerHeight * 0.6;
      else if (e.key === "PageUp") delta = -window.innerHeight * 0.6;
      else if (e.key === " ") delta = e.shiftKey ? -window.innerHeight * 0.6 : window.innerHeight * 0.6;
      else return;

      e.preventDefault();
      if (!animating) target = window.scrollY;
      target = clamp(target + delta);
      startLoop();
    }

    function onExternalScroll() {
      if (!animating) target = window.scrollY;
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onExternalScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onExternalScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
