"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

// Tech-field floating icons (SVG paths) — replacing coffee cup with dev-related objects
const floatingIcons = [
  {
    id: "terminal",
    x: "12%", y: "22%",
    delay: 0,
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" y1="19" x2="20" y2="19" />
      </svg>
    ),
  },
  {
    id: "code",
    x: "78%", y: "18%",
    delay: 0.4,
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "server",
    x: "8%", y: "62%",
    delay: 0.8,
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "database",
    x: "82%", y: "58%",
    delay: 0.6,
    svg: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: "cpu",
    x: "88%", y: "38%",
    delay: 1.0,
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    id: "git",
    x: "5%", y: "40%",
    delay: 1.2,
    svg: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    id: "layers",
    x: "72%", y: "76%",
    delay: 0.3,
    svg: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: "cloud",
    x: "20%", y: "78%",
    delay: 0.9,
    svg: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating tech icons */}
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-[#1a1410]/10 pointer-events-none select-none"
          style={{ left: icon.x, top: icon.y }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: icon.delay },
            y: {
              duration: 4 + icon.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: icon.delay,
            },
          }}
        >
          {icon.svg}
        </motion.div>
      ))}

      {/* Center content */}
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#8a7f76] text-sm tracking-[0.2em] uppercase mb-6"
        >
          Full Stack Engineer &amp; Systems Architect
        </motion.p>

        {/* Big name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-serif text-[clamp(3.5rem,12vw,9rem)] leading-[0.88] tracking-tight text-[#1a1410] mb-8"
        >
          {SITE_CONFIG.name.split(" ")[0]}
          <br />
          <span className="italic text-[#c4956a]">{SITE_CONFIG.name.split(" ")[1]}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-[#8a7f76] text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-10"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-[#1a1410] text-[#f2ede6] px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-[#3d3530] transition-colors"
          >
            View my work
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-[#1a1410] border border-[#1a1410]/25 px-8 py-3.5 rounded-full text-sm tracking-wide hover:border-[#1a1410]/60 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#1a1410]/30 to-transparent"
        />
        <span className="text-[#8a7f76] text-xs tracking-[0.15em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
