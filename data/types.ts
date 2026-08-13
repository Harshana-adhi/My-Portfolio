export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter" | "globe";
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  bio: string[];
  careerGoals: string;
  interests: string[];
  technicalInterests: string[];
  email: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  contribution: string;
  featured?: boolean;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
  achievements: string[];
  coursework?: string[];
}

export interface ExperienceEntry {
  organization: string;
  role: string;
  period: string;
  type: "internship" | "freelance" | "volunteer" | "leadership";
  description: string[];
}
