"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { SITE_CONFIG } from "@/config/site";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 sm:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-[#c4956a] text-xs tracking-[0.2em] uppercase font-medium">06</span>
          <div className="h-px flex-1 bg-[#1a1410]/10" />
          <span className="text-[#8a7f76] text-xs tracking-[0.15em] uppercase">Contact</span>
        </motion.div>

        {/* Big CTA heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tight text-[#1a1410] mb-16"
        >
          Let&apos;s build<br />
          <span className="italic text-[#c4956a]">something great.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[#3d3530] leading-relaxed mb-10 max-w-sm">
              Have a project in mind or just want to say hello? I&apos;d love to hear
              from you. Drop me a message and I&apos;ll get back to you soon.
            </p>

            <div className="space-y-5">
              {[
                { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { label: "Phone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                { label: "GitHub", value: "SujalMatolia0", href: SITE_CONFIG.links.github },
                { label: "LinkedIn", value: "sujal-sharma", href: SITE_CONFIG.links.linkedin },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-[#1a1410]/8 pb-4">
                  <span className="text-[#8a7f76] text-xs tracking-[0.1em] uppercase">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}
                    rel={item.label !== "Email" && item.label !== "Phone" ? "noopener noreferrer" : undefined}
                    className="text-[#1a1410] text-sm hover:text-[#c4956a] transition-colors"
                  >
                    {item.value} ↗
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-xs text-[#8a7f76] tracking-[0.1em] uppercase mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formState[field.id as keyof typeof formState]}
                  onChange={handleChange}
                  required
                  placeholder={field.placeholder}
                  className="w-full bg-[#e8e0d5] border border-[#1a1410]/10 rounded-xl px-4 py-3 text-[#1a1410] text-sm placeholder-[#8a7f76] focus:outline-none focus:border-[#c4956a]/50 transition-colors"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-xs text-[#8a7f76] tracking-[0.1em] uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-[#e8e0d5] border border-[#1a1410]/10 rounded-xl px-4 py-3 text-[#1a1410] text-sm placeholder-[#8a7f76] focus:outline-none focus:border-[#c4956a]/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#1a1410] text-[#f2ede6] py-4 rounded-full text-sm tracking-wide hover:bg-[#3d3530] transition-colors"
            >
              Send message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
