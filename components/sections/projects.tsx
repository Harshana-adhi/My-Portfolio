import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold tracking-tight lowercase sm:text-5xl">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A selection of things I&apos;ve built, solo and with teams.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.05}>
            <Card className="group flex h-full flex-col overflow-hidden transition-transform hover:-translate-y-1">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">My contribution: </span>
                  {project.contribution}
                </p>
              </CardContent>
              <CardFooter className={project.githubUrl || project.liveUrl ? "gap-2" : "hidden"}>
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4" /> Code
                    </Link>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="secondary" size="sm">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4" /> Live
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
