"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SITE_CONFIG } from "@/config/site";

const stats = [
  { value: "6+", label: "Projects" },
  { value: "1.5+", label: "Years exp." },
  { value: "20+", label: "Technologies" },
  { value: "2", label: "Companies" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6 sm:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#c4956a] text-xs tracking-[0.2em] uppercase font-medium">01</span>
          <div className="h-px flex-1 bg-[#1a1410]/10" />
          <span className="text-[#8a7f76] text-xs tracking-[0.15em] uppercase">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — avatar placeholder + stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Avatar / illustration area */}
            <div className="w-full aspect-[4/3] rounded-2xl bg-[#e8e0d5] border border-[#1a1410]/8 flex items-center justify-center mb-10 overflow-hidden relative">
              {/* Dev-themed illustration using SVG */}
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full opacity-30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Code editor window */}
                <rect x="60" y="40" width="280" height="200" rx="12" fill="#1a1410" opacity="0.08" />
                <rect x="60" y="40" width="280" height="32" rx="12" fill="#1a1410" opacity="0.12" />
                <circle cx="82" cy="56" r="5" fill="#1a1410" opacity="0.3" />
                <circle cx="100" cy="56" r="5" fill="#1a1410" opacity="0.3" />
                <circle cx="118" cy="56" r="5" fill="#1a1410" opacity="0.3" />
                {/* Code lines */}
                <rect x="80" y="90" width="60" height="6" rx="3" fill="#c4956a" opacity="0.5" />
                <rect x="148" y="90" width="100" height="6" rx="3" fill="#1a1410" opacity="0.15" />
                <rect x="80" y="108" width="40" height="6" rx="3" fill="#1a1410" opacity="0.15" />
                <rect x="128" y="108" width="80" height="6" rx="3" fill="#c4956a" opacity="0.35" />
                <rect x="216" y="108" width="50" height="6" rx="3" fill="#1a1410" opacity="0.15" />
                <rect x="96" y="126" width="120" height="6" rx="3" fill="#1a1410" opacity="0.12" />
                <rect x="80" y="144" width="70" height="6" rx="3" fill="#c4956a" opacity="0.4" />
                <rect x="158" y="144" width="90" height="6" rx="3" fill="#1a1410" opacity="0.12" />
                <rect x="96" y="162" width="50" height="6" rx="3" fill="#1a1410" opacity="0.15" />
                <rect x="154" y="162" width="110" height="6" rx="3" fill="#1a1410" opacity="0.1" />
                <rect x="80" y="180" width="80" height="6" rx="3" fill="#c4956a" opacity="0.3" />
                <rect x="168" y="180" width="60" height="6" rx="3" fill="#1a1410" opacity="0.12" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-6xl text-[#1a1410]/20 italic">
                  {SITE_CONFIG.name.split(" ")[0][0]}{SITE_CONFIG.name.split(" ")[1][0]}
                </span>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-2xl text-[#1a1410] mb-1">{s.value}</div>
                  <div className="text-[#8a7f76] text-xs tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-2"
          >
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight text-[#1a1410] mb-8">
              Building systems<br />
              <span className="italic text-[#c4956a]">that scale.</span>
            </h2>

            <div className="space-y-4 text-[#3d3530] leading-relaxed text-[15px]">
              <p>
                I&apos;m a Full Stack Engineer with hands-on experience in enterprise systems
                and modern web development. Oracle Fusion experience as a fresher is rare —
                it is my sharpest edge. Strong bias toward shipping.
              </p>
              <p>
                I design systems that scale, from early-stage startups to enterprise IoT
                platforms. My work spans quantum computing research tools, e-commerce
                marketplaces, and enterprise workflow automation.
              </p>
              <p>
                Beyond code, I&apos;m deeply interested in quantum computing research,
                IoT automation, and building tools that make developers more productive.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#1a1410] border border-[#1a1410]/20 px-4 py-2 rounded-full hover:bg-[#1a1410] hover:text-[#f2ede6] transition-all"
              >
                GitHub ↗
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#1a1410] border border-[#1a1410]/20 px-4 py-2 rounded-full hover:bg-[#1a1410] hover:text-[#f2ede6] transition-all"
              >
                LinkedIn ↗
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-sm text-[#1a1410] border border-[#1a1410]/20 px-4 py-2 rounded-full hover:bg-[#1a1410] hover:text-[#f2ede6] transition-all"
              >
                Email ↗
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
