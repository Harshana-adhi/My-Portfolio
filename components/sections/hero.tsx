"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const photoOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const photoY = useTransform(scrollY, [0, 350], [0, -60]);
  const photoScale = useTransform(scrollY, [0, 350], [1, 0.85]);
  const ringRotateReverse = useTransform(scrollY, [0, 350], [0, -30]);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 gradient-mesh animate-gradient bg-[length:200%_200%] opacity-70"
        style={{
          maskImage: "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 md:order-1"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
            {profile.role}
          </span>

          <h1
            className="text-balance font-display font-semibold leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 6vw + 1rem, 5.5rem)" }}
          >
            Hi, I&apos;m {profile.name}
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

        <motion.div
          className="relative order-1 mx-auto mt-6 h-[280px] w-[280px] sm:mt-8 sm:h-[360px] sm:w-[360px] md:order-2 md:mt-10 md:h-[440px] md:w-[440px]"
          style={
            reduceMotion
              ? undefined
              : { opacity: photoOpacity, y: photoY, scale: photoScale }
          }
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/50"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={
              reduceMotion ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }
            }
            aria-hidden
          />
          <motion.div
            className="absolute inset-3 rounded-full border border-secondary/40 sm:inset-4"
            style={reduceMotion ? undefined : { rotate: ringRotateReverse }}
            aria-hidden
          />

          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-[3px] shadow-xl shadow-primary/20 sm:inset-8">
            <div className="h-full w-full overflow-hidden rounded-full bg-background">
              <Image
                src="/images/harshana-2.webp"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 280px, 440px"
                className="relative object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:flex"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="flex size-11 items-center justify-center rounded-full border border-primary/40 bg-card/80 text-primary shadow-lg shadow-primary/20 backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowDown className="size-5" />
        </Link>
      </motion.div>
    </section>
  );
}
