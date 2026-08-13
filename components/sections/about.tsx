import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
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
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <div>
            <h3 className="font-display text-sm font-semibold">Interests</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <Badge key={interest} variant="outline">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold">Technical Interests</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.technicalInterests.map((interest) => (
                <Badge key={interest}>{interest}</Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
