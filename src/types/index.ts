export interface Project {
  id: number;
  title: string;
  category: "Enterprise" | "Full Stack" | "Research";
  year: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  links: { github?: string; live?: string | null };
  highlights: string[];
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Enterprise" | "Research";
}
