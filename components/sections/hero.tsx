"use client";

import * as React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data";

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

export function Hero() {
  const isSmallScreen = useIsSmallScreen();
  const reduceMotion = useReducedMotion();
  const showCanvas = !isSmallScreen && !reduceMotion;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-mesh animate-gradient bg-[length:200%_200%] opacity-70" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
            Hi, I&apos;m{" "}
            <span className="font-semibold text-foreground">{profile.name}</span>
          </span>

          <h1
            className="text-balance font-display font-semibold lowercase leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(3.25rem, 8vw + 1rem, 7.5rem)" }}
          >
            <span className="block">software</span>
            <span className="block text-primary">developer</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-pretty text-muted-foreground"
            style={{ fontSize: "clamp(1rem, 0.6vw + 0.9rem, 1.15rem)" }}
          >
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link href="#projects">View My Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#skills">Explore My Skills</Link>
            </Button>
          </div>
        </motion.div>

        <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
          {showCanvas ? (
            <React.Suspense fallback={<GradientFallback />}>
              <HeroScene />
            </React.Suspense>
          ) : (
            <GradientFallback />
          )}
        </div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground sm:flex"
      >
        <ArrowDown className="size-4" />
      </Link>
    </section>
  );
}

function GradientFallback() {
  return (
    <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,#d0ff71_0deg,#0bde66_180deg,#d0ff71_360deg)] opacity-60 blur-2xl" />
  );
}
