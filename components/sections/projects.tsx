"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Github, ExternalLink, Layers } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getSkillIcon } from "@/lib/skill-icons";
import { projects } from "@/data";

const DISMISS_DURATION_MS = 550;

export function Projects() {
  const [order, setOrder] = React.useState(projects.map((_, i) => i));
  const [dismissing, setDismissing] = React.useState<number | null>(null);
  const reduceMotion = useReducedMotion();
  const dismissTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (dismissTimeout.current) clearTimeout(dismissTimeout.current);
    };
  }, []);

  function bringToFront(index: number) {
    setOrder((prev) => [index, ...prev.filter((i) => i !== index)]);
  }

  function sendToBack(index: number) {
    setOrder((prev) => [...prev.filter((i) => i !== index), index]);
  }

  function dismissFront(index: number) {
    if (reduceMotion) {
      sendToBack(index);
      return;
    }
    setDismissing(index);
    if (dismissTimeout.current) clearTimeout(dismissTimeout.current);
    dismissTimeout.current = setTimeout(() => {
      sendToBack(index);
      setDismissing(null);
    }, DISMISS_DURATION_MS);
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight lowercase sm:text-5xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A selection of things I&apos;ve built, solo and with teams. Tap the front card to see
          the next one.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-14 overflow-visible px-4 pb-6 sm:px-10">
          <div className="relative h-[1050px] sm:h-[900px]">
            {order.map((projectIndex, pos) => {
              const project = projects[projectIndex];
              const isFront = pos === 0;
              const isDismissing = dismissing === projectIndex;
              const side = pos % 2 === 0 ? 1 : -1;

              function handleClick() {
                if (isFront) {
                  dismissFront(projectIndex);
                } else {
                  bringToFront(projectIndex);
                }
              }

              return (
                <motion.div
                  key={project.title}
                  onClick={handleClick}
                  role="button"
                  tabIndex={0}
                  aria-label={
                    isFront
                      ? `Dismiss ${project.title} and view next project`
                      : `Bring ${project.title} to front`
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleClick();
                    }
                  }}
                  className="absolute inset-x-0 top-0 mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl select-none"
                  style={{ zIndex: isDismissing ? 50 : order.length - pos, cursor: "pointer" }}
                  initial={false}
                  animate={
                    isDismissing
                      ? { x: 560, y: pos * 22 - 40, rotate: 20, opacity: 0, scale: 0.92 }
                      : {
                          y: pos * 22,
                          x: reduceMotion ? 0 : pos * side * 16,
                          scale: 1 - pos * 0.055,
                          rotate: reduceMotion ? 0 : pos === 0 ? 0 : pos * side * 2.5,
                          opacity: 1 - pos * 0.15,
                        }
                  }
                  whileHover={
                    !isFront && !isDismissing
                      ? { y: pos * 22 - 10, scale: 1 - pos * 0.055 + 0.03, opacity: 1 }
                      : undefined
                  }
                  whileTap={!isDismissing ? { scale: (isFront ? 1 : 1 - pos * 0.055) - 0.02 } : undefined}
                  transition={
                    isDismissing
                      ? { duration: DISMISS_DURATION_MS / 1000, ease: [0.32, 0, 0.67, 0] }
                      : { type: "spring", stiffness: 180, damping: 26, mass: 0.9 }
                  }
                >
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      priority={pos === 0}
                      sizes="(max-width: 768px) 100vw, 640px"
                      className="object-cover"
                    />
                    {!isFront && (
                      <div className="absolute inset-0 flex items-center justify-center gap-2 bg-background/50 text-sm font-medium text-foreground opacity-0 backdrop-blur-sm transition-opacity duration-200 hover:opacity-100">
                        <Layers className="size-4" /> Bring to front
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <span className="font-display text-sm text-primary">
                      {String(pos + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>

                    {isFront && (
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}
                      >
                        <p className="mt-3 text-pretty text-muted-foreground">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.map((t) => {
                            const { Icon, color } = getSkillIcon(t);
                            return (
                              <Badge key={t} variant="outline" className="gap-1.5">
                                <Icon className="size-3.5 shrink-0" style={{ color }} />
                                {t}
                              </Badge>
                            );
                          })}
                        </div>

                        <p className="mt-4 text-sm text-muted-foreground">
                          <span className="font-medium text-foreground">My contribution: </span>
                          {project.contribution}
                        </p>

                        {(project.githubUrl || project.liveUrl) && (
                          <div className="mt-6 flex gap-2">
                            {project.githubUrl && (
                              <Button asChild variant="outline" size="sm">
                                <Link
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github className="size-4" /> Code
                                </Link>
                              </Button>
                            )}
                            {project.liveUrl && (
                              <Button asChild variant="secondary" size="sm">
                                <Link
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="size-4" /> Live
                                </Link>
                              </Button>
                            )}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Reveal>

      <div className="mt-8 flex justify-center gap-2">
        {projects.map((p, i) => (
          <button
            key={p.title}
            aria-label={`Bring ${p.title} to front`}
            onClick={() => bringToFront(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              order[0] === i ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
