"use client";

import { SITE_CONFIG } from "@/config/site";
import { useEffect, useState } from "react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#1a1410] text-[#f5f0e8]">
      <div className="py-12 px-6 sm:px-10 border-t border-[#f5f0e8]/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-[#f5f0e8] text-lg">
            {SITE_CONFIG.name.split(" ")[0]}.
          </span>

          <p className="text-[#f5f0e8]/60 text-xs tracking-wide text-center">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f0e8]/60 hover:text-[#c4956a] transition-colors text-xs tracking-wide"
            >
              GitHub
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5f0e8]/60 hover:text-[#c4956a] transition-colors text-xs tracking-wide"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-[#f5f0e8]/60 hover:text-[#c4956a] transition-colors text-xs tracking-wide"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
