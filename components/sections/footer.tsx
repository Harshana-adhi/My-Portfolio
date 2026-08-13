import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import { profile } from "@/data";

const icons = { github: Github, linkedin: Linkedin, mail: Mail, twitter: Twitter, globe: Globe };

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {profile.socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="size-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
