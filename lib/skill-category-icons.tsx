import {
  Code2,
  Globe,
  Smartphone,
  BrainCircuit,
  Database,
  Wrench,
  Layers,
  Users,
  type LucideIcon,
} from "lucide-react";

export const categoryIconMap: Record<string, LucideIcon> = {
  "Programming Languages": Code2,
  "Web Development": Globe,
  "Mobile Development": Smartphone,
  "AI / ML": BrainCircuit,
  Databases: Database,
  "Tools & Technologies": Wrench,
  "Other Technical Skills": Layers,
  "Soft Skills": Users,
};

export function getCategoryIcon(category: string): LucideIcon {
  return categoryIconMap[category] ?? Layers;
}
