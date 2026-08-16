"use client";

import * as React from "react";

const WHEEL_MULTIPLIER = 0.45;
const KEY_SCROLL_PX = 260;
const WHEEL_LERP = 0.1;
const NAV_LERP = 0.22;
const NAV_OFFSET_PX = 72;

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

/**
 * Single owner of programmatic scrolling: wheel/key input and nav-link
 * clicks both drive the same target + rAF loop, so they can never fight
 * over the scroll position the way two independent loops would.
 */
export function ScrollController() {
  React.useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    let target = window.scrollY;
    let lerp = WHEEL_LERP;
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
      window.scrollTo(0, current + diff * lerp);
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
      lerp = WHEEL_LERP;
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
      else if (e.key === " ")
        delta = e.shiftKey ? -window.innerHeight * 0.6 : window.innerHeight * 0.6;
      else return;

      e.preventDefault();
      lerp = WHEEL_LERP;
      if (!animating) target = window.scrollY;
      target = clamp(target + delta);
      startLoop();
    }

    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement).closest("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = hash === "#top" ? document.body : document.querySelector(hash);
      if (!el) return;

      e.preventDefault();

      const targetY = clamp(el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX);

      if (reduceMotion) {
        window.scrollTo(0, targetY);
        history.pushState(null, "", hash);
        return;
      }

      lerp = NAV_LERP;
      target = targetY;
      startLoop();
      history.pushState(null, "", hash);
    }

    function onExternalScroll() {
      if (!animating) target = window.scrollY;
    }

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onExternalScroll, { passive: true });

    if (!isTouch && !reduceMotion) {
      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onExternalScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
