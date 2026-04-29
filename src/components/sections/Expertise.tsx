"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const expertise = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end application development with modern frameworks and best practices. From responsive frontends to scalable backends, I build complete solutions.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Enterprise Architecture",
    description:
      "Designing scalable systems for enterprise environments with focus on reliability, security, and performance. System design, microservices, and cloud infrastructure.",
    tags: ["System Design", "Microservices", "PostgreSQL", "Oracle Fusion", "Cloud", "IoT"],
  },
  {
    title: "Research & Innovation",
    description:
      "Exploring cutting-edge technologies and implementing research-driven solutions. Quantum computing platforms, real-time systems, and AI integration.",
    tags: ["Quantum Computing", "Python", "Real-time Systems", "AI", "Electron"],
  },
];

export function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="expertise" className="py-28 px-6 sm:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#c4956a] text-xs tracking-[0.2em] uppercase font-medium">02</span>
          <div className="h-px flex-1 bg-[#1a1410]/10" />
          <span className="text-[#8a7f76] text-xs tracking-[0.15em] uppercase">Expertise</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#1a1410] mb-14"
        >
          What I do <span className="italic text-[#c4956a]">best.</span>
        </motion.h2>

        {/* Accordion */}
        <div className="space-y-0">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="border-t border-[#1a1410]/10 last:border-b"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-7 text-left group"
                aria-expanded={open === i}
              >
                <div className="flex items-center gap-6">
                  <span className="text-[#c4956a] text-sm font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#1a1410] group-hover:text-[#c4956a] transition-colors">
                    {item.title}
                  </span>
                </div>
                <ChevronDown
                  className={`text-[#8a7f76] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-14 pr-4">
                      <p className="text-[#3d3530] leading-relaxed mb-5 max-w-2xl">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 bg-[#e8e0d5] text-[#1a1410] rounded-full border border-[#1a1410]/8"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
