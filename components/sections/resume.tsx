import { FileDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/data";

export function Resume() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <div className="glass flex flex-col items-center gap-4 rounded-2xl p-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Want the full picture?
            </h2>
            <p className="mt-1 text-muted-foreground">
              Download my resume for a complete overview of my experience.
            </p>
          </div>
          <Button asChild size="lg">
            <a href={profile.resumeUrl} download>
              <FileDown className="size-4" /> Download CV
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
