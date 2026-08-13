import { Briefcase, Handshake, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data";
import type { ExperienceEntry } from "@/data";

const typeMeta: Record<ExperienceEntry["type"], { label: string; icon: typeof Briefcase }> = {
  internship: { label: "Internship", icon: Briefcase },
  freelance: { label: "Freelance", icon: Handshake },
  volunteer: { label: "Volunteer", icon: HeartHandshake },
  leadership: { label: "Leadership", icon: Users },
};

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight lowercase sm:text-5xl">
          Experience
        </h2>
      </Reveal>

      <ol className="relative mt-12 space-y-10 border-s border-border ps-6 sm:ps-8">
        {experience.map((item, i) => {
          const Icon = typeMeta[item.type].icon;
          return (
            <Reveal key={`${item.organization}-${item.role}`} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -start-[calc(1.5rem+1px)] flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-primary sm:-start-[calc(2rem+1px)]">
                  <Icon className="size-4" />
                </span>
                <div className="ms-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display font-semibold">{item.role}</h3>
                    <Badge variant="outline">{typeMeta[item.type].label}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {item.organization} · {item.period}
                  </p>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    {item.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
