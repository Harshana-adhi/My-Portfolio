"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const HeroScene = dynamic(() => import("./hero-scene"), {
  ssr: false,
  loading: () => null,
});

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsSmall(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsSmall(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isSmall;
}

export function AboutBlob() {
  const isSmallScreen = useIsSmallScreen();
  const reduceMotion = useReducedMotion();

  if (isSmallScreen || reduceMotion) return null;

  return (
    <div className="relative mx-auto h-56 w-56" aria-hidden>
      <React.Suspense fallback={null}>
        <HeroScene />
      </React.Suspense>
    </div>
  );
}
