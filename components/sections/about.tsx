import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { AboutBlob } from "@/components/sections/about-blob";
import { profile, projects, experience, skills } from "@/data";

const stats = [
  { value: projects.length, label: "Projects Built" },
  { value: skills.length, label: "Skill Categories" },
  { value: experience.length, label: "Experience Entries" },
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight lowercase sm:text-5xl">
          About Me
        </h2>
        <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary">
          Full-Stack Developer
        </span>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
        <Reveal className="md:col-span-2" delay={0.05}>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            {profile.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <h3 className="font-display text-sm font-semibold">Career Goals</h3>
            <p className="mt-2 text-sm text-muted-foreground">{profile.careerGoals}</p>
          </div>

          <div className="mt-6 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-card">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-5 text-center sm:px-4">
                <div className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                  {stat.value}+
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div>
            <h3 className="font-display text-sm font-semibold">Interests</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {profile.interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="outline"
                  className="w-full justify-center py-1.5 text-center"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold">Technical Interests</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {profile.technicalInterests.map((interest) => (
                <Badge key={interest} className="w-full justify-center py-1.5 text-center">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <AboutBlob />
        </Reveal>
      </div>
    </section>
  );
}
