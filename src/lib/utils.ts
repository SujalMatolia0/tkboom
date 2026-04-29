import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Project } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ANIMATION = {
  stagger: 0.1,
  duration: 0.6,
  heroHold: 0.8,
  easeInOut: [0.4, 0, 0.2, 1],
};

// Color mappings for categories
export const CATEGORY_COLORS = {
  Enterprise: "from-cyan-400 to-blue-400",
  "Full Stack": "from-orange-400 to-red-400",
  Research: "from-emerald-400 to-teal-400",
};

// Filter projects by category
export const filterProjects = (projects: Project[], category: string) => {
  return category === "All"
    ? projects
    : projects.filter(p => p.category === category);
};
