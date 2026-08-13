import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data";
import { cn } from "@/lib/utils";

const spanClasses: Record<string, string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-mesh opacity-20" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Technologies and tools I work with, grouped by category.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[minmax(140px,auto)]">
          {skills.map((group, i) => (
            <Reveal
              key={group.category}
              delay={i * 0.05}
              className={cn(spanClasses[group.size ?? "sm"])}
            >
              <div className="glass flex h-full flex-col rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <h3 className="font-display text-sm font-semibold text-muted-foreground">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
