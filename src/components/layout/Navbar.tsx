"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#f2ede6]/95 backdrop-blur-sm border-b border-[#1a1410]/8" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-serif text-[#1a1410] text-xl tracking-tight hover:text-[#c4956a] transition-colors"
          >
            {SITE_CONFIG.name.split(" ")[0]}.
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8a7f76] hover:text-[#1a1410] transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="hidden md:inline-flex text-sm text-[#1a1410] border border-[#1a1410]/30 px-5 py-2 rounded-full hover:bg-[#1a1410] hover:text-[#f2ede6] transition-all"
          >
            Hire me
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#1a1410]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#f2ede6] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setIsOpen(false)}
                className="font-serif text-4xl text-[#1a1410] hover:text-[#c4956a] transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
