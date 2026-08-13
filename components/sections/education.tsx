import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight lowercase sm:text-5xl">
          Education
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.institution} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/15 p-2.5 text-primary">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">{edu.institution}</h3>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  {edu.period && (
                    <p className="mt-0.5 text-xs text-muted-foreground">{edu.period}</p>
                  )}
                </div>
              </div>

              {edu.achievements.length > 0 && (
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {edu.achievements.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              )}

              {edu.coursework && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <Badge key={c} variant="outline">
                      {c}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
