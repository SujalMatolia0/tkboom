"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { filterProjects } from "@/lib/utils";
import { ExternalLink, GitBranch } from "lucide-react";

const categories = ["All", "Full Stack", "Enterprise", "Research"];

// Tech-field SVG icons per project category — no coffee cups
const ProjectIcon = ({ category }: { category: string }) => {
  if (category === "Enterprise") {
    return (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1410]/40">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <polyline points="7 8 12 13 17 8" />
      </svg>
    );
  }
  if (category === "Research") {
    return (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1410]/40">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    );
  }
  // Full Stack default
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1410]/40">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

// Subtle pattern backgrounds per category
const cardBg: Record<string, string> = {
  "Full Stack": "bg-[#e8e0d5]",
  Enterprise: "bg-[#dde8e0]",
  Research: "bg-[#e0dde8]",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filteredProjects = filterProjects(projects, activeCategory);

  return (
    <section id="projects" className="py-28 px-6 sm:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#c4956a] text-xs tracking-[0.2em] uppercase font-medium">03</span>
          <div className="h-px flex-1 bg-[#1a1410]/10" />
          <span className="text-[#8a7f76] text-xs tracking-[0.15em] uppercase">Projects</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#1a1410]"
          >
            Selected <span className="italic text-[#c4956a]">work.</span>
          </motion.h2>

          {/* Filter pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-wide px-4 py-2 rounded-full border transition-all ${
                  activeCategory === cat
                    ? "bg-[#1a1410] text-[#f2ede6] border-[#1a1410]"
                    : "border-[#1a1410]/20 text-[#8a7f76] hover:border-[#1a1410]/50 hover:text-[#1a1410]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group border border-[#1a1410]/10 rounded-2xl overflow-hidden bg-[#f2ede6] hover:border-[#1a1410]/25 transition-all"
              >
                {/* Card top — icon area */}
                <div
                  className={`${
                    cardBg[project.category] ?? "bg-[#e8e0d5]"
                  } h-36 flex items-center justify-center relative`}
                >
                  <ProjectIcon category={project.category} />
                  <span className="absolute top-4 right-4 text-xs text-[#8a7f76] tracking-wide">
                    {project.year}
                  </span>
                  <span className="absolute top-4 left-4 text-xs px-2.5 py-1 bg-[#f2ede6]/70 text-[#1a1410] rounded-full border border-[#1a1410]/10">
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#1a1410] mb-2 group-hover:text-[#c4956a] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#8a7f76] text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-[#e8e0d5] text-[#3d3530] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-2.5 py-1 bg-[#e8e0d5] text-[#8a7f76] rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#8a7f76] hover:text-[#1a1410] transition-colors"
                      >
                        <GitBranch size={13} />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-[#8a7f76] hover:text-[#1a1410] transition-colors"
                      >
                        <ExternalLink size={13} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
