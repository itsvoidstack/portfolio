"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="ABOUT / 01"
          heading="I LIKE TURNING IDEAS INTO THINGS YOU CAN ACTUALLY USE."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Abstract Graphic & Identity Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-[var(--surface-alt)] border border-[var(--border)] p-8 md:p-10 flex flex-col justify-between relative shadow-xs"
          >
            {/* Editorial Corner Crosshair Guides */}
            <div className="absolute top-3 left-3 font-mono text-xs text-[var(--muted)] select-none">┌</div>
            <div className="absolute top-3 right-3 font-mono text-xs text-[var(--muted)] select-none">┐</div>
            <div className="absolute bottom-3 left-3 font-mono text-xs text-[var(--muted)] select-none">└</div>
            <div className="absolute bottom-3 right-3 font-mono text-xs text-[var(--muted)] select-none">┘</div>

            <div className="font-mono text-[10px] text-[var(--accent)] tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              ABSTRACT FORM // IDENTITY
            </div>

            {/* Subtle Abstract Geometry Element with Indigo/Lavender Gradient */}
            <div className="flex-1 flex items-center justify-center py-12 relative my-4">
              <div className="relative w-44 h-44 rounded-full border border-[var(--border)] bg-gradient-to-tr from-[var(--accent)]/15 via-[var(--accent-secondary)]/20 to-indigo-50 flex items-center justify-center shadow-inner">
                {/* Orbital animated dashed ring */}
                <div className="w-32 h-32 rounded-full border border-dashed border-[var(--accent)] animate-spin-slow flex items-center justify-center" />
                {/* Central glowing core */}
                <div className="absolute w-12 h-12 rounded-full bg-[var(--accent)]/20 blur-sm" />
                <div className="absolute w-4 h-4 rounded-full bg-[var(--accent)] shadow-md" />
              </div>
            </div>

            {/* Identity Footer Label */}
            <div className="pt-4 border-t border-[var(--border)] font-mono text-xs flex items-center justify-between">
              <span className="text-[var(--accent)] font-semibold uppercase">
                DEVELOPER & AI ENTHUSIAST
              </span>
              <span className="text-[var(--muted)] text-[10px]">01 // ARCHITECTURE</span>
            </div>
          </motion.div>

          {/* Right Column: Editorial Paragraphs & Structured Statements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                Computer Science student developing an interest in artificial intelligence, full-stack development, and creating impactful digital products.
              </h3>

              <p className="text-base font-sans text-[var(--muted)] leading-relaxed">
                I learn best by building — experimenting with ideas, turning them into practical applications, and exploring technologies that challenge the way I think.
              </p>

              <div className="pt-4 border-l-2 border-[var(--accent)] pl-4">
                <p className="font-mono text-sm text-[var(--accent)] font-semibold tracking-wide">
                  &ldquo;Always learning. Always building. Always curious.&rdquo;
                </p>
              </div>
            </div>

            {/* Editorial Micro Metadata Grid */}
            <div className="mt-12 pt-8 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-3">
                  CURRENT FOCUS —
                </span>
                <ul className="font-mono text-xs space-y-2 text-[var(--foreground)]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                    <span className="font-semibold">BUILDING:</span> Practical AI Platforms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                    <span className="font-semibold">LEARNING:</span> Agentic Workflows & RAG
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                    <span className="font-semibold">EXPLORING:</span> Full-Stack Systems
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-3">
                  ROLE & ETHOS
                </span>
                <div className="p-4 bg-[var(--surface-alt)] border border-[var(--border-subtle)] font-mono text-xs">
                  <span className="text-[var(--foreground)] font-bold block mb-1">
                    STUDENT & CREATIVE DEVELOPER
                  </span>
                  <span className="text-[var(--muted)] text-[11px] leading-relaxed block">
                    Focused on purposeful software engineering, thoughtful UX, and clean architecture.
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
