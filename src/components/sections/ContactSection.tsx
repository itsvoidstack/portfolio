"use client";

import Button from "@/components/ui/Button";
import { Mail, Plus, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)] relative overflow-hidden">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4 flex items-center gap-2 font-semibold">
          <span className="w-4 h-[1px] bg-[var(--accent)]" />
          CONTACT / 06
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Expressive Typography Heading & Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-5xl sm:text-7xl font-black tracking-tighter text-[var(--foreground)] uppercase leading-[0.95] mb-6">
              LET&apos;S BUILD <br />
              <span className="relative text-[var(--accent)] inline-block">
                SOMETHING.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[var(--accent-secondary)] opacity-60"
                  viewBox="0 0 200 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7C50 2 150 2 198 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-base sm:text-lg font-sans text-[var(--muted)] max-w-lg mb-8 leading-relaxed">
              Have an idea, project, or just want to talk? I&apos;d love to hear from you.
            </p>

            <div className="mb-8">
              <Button href="mailto:shivamshah9811@gmail.com" variant="primary" showArrow={true}>
                GET IN TOUCH ↗
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Direct Channels with Real Links */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[var(--surface)] border border-[var(--border)] p-8 md:p-10 shadow-xs relative"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
              <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase">
                DIRECT CHANNELS
              </span>
              <Plus size={16} className="text-[var(--muted)]" />
            </div>

            <div className="space-y-4 font-mono text-xs">
              {/* Email Slot */}
              <a
                href="mailto:shivamshah9811@gmail.com"
                className="flex items-center justify-between p-4 bg-[var(--surface-alt)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[var(--accent)]" />
                  <div>
                    <span className="text-[var(--muted)] block text-[10px] uppercase">EMAIL</span>
                    <span className="text-[var(--foreground)] font-semibold font-mono">
                      shivamshah9811@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* GitHub Slot */}
              <a
                href="https://github.com/itsvoidstack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[var(--surface-alt)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-[var(--accent)]" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <div>
                    <span className="text-[var(--muted)] block text-[10px] uppercase">GITHUB</span>
                    <span className="text-[var(--foreground)] font-semibold font-mono">
                      github.com/itsvoidstack
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn Slot */}
              <a
                href="https://linkedin.com/in/shivam-shah-ab0a51411"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[var(--surface-alt)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 fill-[var(--accent)]" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <div>
                    <span className="text-[var(--muted)] block text-[10px] uppercase">LINKEDIN</span>
                    <span className="text-[var(--foreground)] font-semibold font-mono">
                      linkedin.com/in/shivam-shah-ab0a51411
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Micro Annotation */}
            <div className="mt-8 pt-6 border-t border-[var(--border)] font-mono text-[10px] text-[var(--muted)] flex items-center justify-between">
              <span>IDEAS → CODE → IMPACT</span>
              <span>2026 EDITION</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
