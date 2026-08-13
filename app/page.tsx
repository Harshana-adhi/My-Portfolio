import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Certifications } from "@/components/sections/certifications";
import { Resume } from "@/components/sections/resume";
import { Contact } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Separator className="mx-auto max-w-6xl" />
      <Skills />
      <Projects />
      <Separator className="mx-auto max-w-6xl" />
      <Education />
      <Experience />
      <Separator className="mx-auto max-w-6xl" />
      <Certifications />
      <Resume />
      <Contact />
    </>
  );
}
