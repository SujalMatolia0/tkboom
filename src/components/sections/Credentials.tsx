"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
  {
    type: "Education",
    items: [
      {
        title: "B.Tech in Computer Science",
        organization: "Chandigarh University",
        year: "2022–2026",
        description: "Specialization in Systems and Networks",
      },
    ],
  },
  {
    type: "Certifications",
    items: [
      {
        title: "Full Stack Web Development",
        organization: "Industry Recognized",
        year: "2024",
        description: "Advanced React, Node.js, and Database Design",
      },
      {
        title: "Cloud Architecture",
        organization: "AWS & Azure",
        year: "2024",
        description: "Microservices and Infrastructure as Code",
      },
    ],
  },
  {
    type: "Experience",
    items: [
      {
        title: "Full Stack Engineer",
        organization: "IOTX (Enterprise IoT)",
        year: "2025–Present",
        description: "Oracle Fusion, Python backend, IoT automation",
      },
      {
        title: "Research Developer",
        organization: "Neocosmicx",
        year: "2024–2025",
        description: "Quantum computing platform, real-time simulations",
      },
    ],
  },
];

export function Credentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="credentials" className="py-28 px-6 sm:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#c4956a] text-xs tracking-[0.2em] uppercase font-medium">05</span>
          <div className="h-px flex-1 bg-[#1a1410]/10" />
          <span className="text-[#8a7f76] text-xs tracking-[0.15em] uppercase">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] tracking-tight text-[#1a1410] mb-14"
        >
          Background &amp; <span className="italic text-[#c4956a]">credentials.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {credentials.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.1 }}
              className="border border-[#1a1410]/10 rounded-2xl p-6 bg-[#f2ede6] hover:border-[#1a1410]/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#c4956a] text-xs font-medium">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-lg text-[#1a1410]">{section.type}</h3>
              </div>

              <div className="space-y-5">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      i > 0 ? "pt-5 border-t border-[#1a1410]/8" : ""
                    }`}
                  >
                    <h4 className="text-[#1a1410] text-sm font-medium mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[#c4956a] text-xs mb-1">{item.organization}</p>
                    <p className="text-[#8a7f76] text-xs mb-2">{item.year}</p>
                    <p className="text-[#3d3530] text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
