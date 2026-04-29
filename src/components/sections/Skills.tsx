"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Mantine"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "AdonisJS", "PostgreSQL", "Prisma ORM", "REST APIs", "tRPC"],
  },
  {
    category: "Enterprise",
    skills: ["Oracle Fusion", "Oracle VBS", "System Design", "Microservices", "IoT Platforms", "Workflow Automation"],
  },
  {
    category: "Research & Tools",
    skills: ["Quantum Computing", "Python", "Git", "Docker", "CI/CD", "Electron"],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 sm:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#c4956a] text-xs tracking-[0.2em] uppercase font-medium">04</span>
          <div className="h-px flex-1 bg-[#1a1410]/10" />
          <span className="text-[#8a7f76] text-xs tracking-[0.15em] uppercase">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#1a1410] mb-14"
        >
          Tech <span className="italic text-[#c4956a]">stack.</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#c4956a] text-xs font-medium">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg text-[#1a1410]">{cat.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.04 }}
                    className="text-sm px-4 py-2 bg-[#e8e0d5] text-[#3d3530] rounded-full border border-[#1a1410]/8 hover:border-[#c4956a]/40 hover:text-[#1a1410] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
