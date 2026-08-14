import { Reveal } from "@/components/reveal";
import { skills } from "@/data";
import { getSkillIcon } from "@/lib/skill-icons";
import { getCategoryIcon } from "@/lib/skill-category-icons";

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 gradient-mesh opacity-20" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold tracking-tight lowercase sm:text-5xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Technologies and tools I work with, grouped by category.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => {
            const CategoryIcon = getCategoryIcon(group.category);
            return (
              <Reveal key={group.category} delay={i * 0.05}>
                <div className="group/card glass relative flex h-full flex-col overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 sm:p-6">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover/card:opacity-100 opacity-0"
                    aria-hidden
                  />

                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <CategoryIcon className="size-4.5" />
                    </span>
                    <h3 className="font-display text-base font-semibold tracking-tight sm:text-lg">
                      <span className="text-primary">{String(i + 1).padStart(2, "0")}.</span>{" "}
                      {group.category}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const { Icon, color } = getSkillIcon(skill);
                      return (
                        <div
                          key={skill}
                          className="group/chip flex items-center gap-2 whitespace-nowrap rounded-lg border border-border bg-background/40 px-2.5 py-2 text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background/70 sm:text-sm"
                        >
                          <Icon
                            className="size-4 shrink-0 transition-transform duration-200 group-hover/chip:scale-110"
                            style={{ color }}
                          />
                          <span>{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
