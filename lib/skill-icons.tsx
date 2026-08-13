import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiKotlin,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss,
  SiAndroidstudio,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiPostman,
  SiOpenjdk,
} from "react-icons/si";
import {
  Database,
  Smartphone,
  FileCode,
  Brain,
  BrainCircuit,
  BarChart3,
  Code2,
  Webhook,
  Boxes,
  Cpu,
  Workflow,
  Crown,
  Users,
  MessageCircle,
  Puzzle,
  ClipboardList,
  Clock,
  Shuffle,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillIcon {
  Icon: IconType | LucideIcon;
  color: string;
}

const defaultIcon: SkillIcon = { Icon: Sparkles, color: "#8b5cf6" };

export const skillIconMap: Record<string, SkillIcon> = {
  Java: { Icon: SiOpenjdk, color: "#ED8B00" },
  Kotlin: { Icon: SiKotlin, color: "#7F52FF" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Python: { Icon: SiPython, color: "#3776AB" },
  SQL: { Icon: Database, color: "#00758F" },
  "C++": { Icon: SiCplusplus, color: "#00599C" },

  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Express.js": { Icon: SiExpress, color: "#ffffff" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#1572B6" },

  "Android Development": { Icon: Smartphone, color: "#3DDC84" },
  "Android Studio": { Icon: SiAndroidstudio, color: "#3DDC84" },
  XML: { Icon: FileCode, color: "#e34c26" },

  "Artificial Intelligence": { Icon: Brain, color: "#a78bfa" },
  "Machine Learning": { Icon: BrainCircuit, color: "#22d3ee" },
  "Python for AI/ML": { Icon: SiPython, color: "#3776AB" },
  "Data Analysis": { Icon: BarChart3, color: "#f59e0b" },

  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  Supabase: { Icon: SiSupabase, color: "#3FCF8E" },

  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#ffffff" },
  "VS Code": { Icon: Code2, color: "#007ACC" },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  "REST APIs": { Icon: Webhook, color: "#10b981" },

  "Object-Oriented Programming": { Icon: Boxes, color: "#f472b6" },
  "Database Design": { Icon: Database, color: "#00758F" },
  "REST API Development": { Icon: Webhook, color: "#10b981" },
  "Software Engineering": { Icon: Cpu, color: "#818cf8" },
  "System Modeling": { Icon: Workflow, color: "#38bdf8" },

  Leadership: { Icon: Crown, color: "#facc15" },
  Teamwork: { Icon: Users, color: "#34d399" },
  Communication: { Icon: MessageCircle, color: "#60a5fa" },
  "Problem Solving": { Icon: Puzzle, color: "#f97316" },
  "Project Management": { Icon: ClipboardList, color: "#a3e635" },
  "Time Management": { Icon: Clock, color: "#fb7185" },
  Adaptability: { Icon: Shuffle, color: "#c084fc" },
};

export function getSkillIcon(skill: string): SkillIcon {
  return skillIconMap[skill] ?? defaultIcon;
}
