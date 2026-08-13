import Link from "next/link";
import { Award, Trophy, Medal, Wrench, Swords } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { certifications } from "@/data";
import type { Certification } from "@/data";

const typeIcon: Record<Certification["type"], typeof Award> = {
  certification: Award,
  hackathon: Swords,
  award: Trophy,
  workshop: Wrench,
  competition: Medal,
};

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight lowercase sm:text-5xl">
          Certifications &amp; Achievements
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = typeIcon[cert.type];
          const content = (
            <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-5 transition-transform hover:-translate-y-1">
              <div className="rounded-lg bg-secondary/20 p-2.5 text-secondary-foreground">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold">{cert.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {cert.issuer} · {cert.date}
                </p>
              </div>
            </div>
          );
          return (
            <Reveal key={cert.title} delay={i * 0.04}>
              {cert.url ? (
                <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                  {content}
                </Link>
              ) : (
                content
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
