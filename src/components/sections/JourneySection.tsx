"use client";

import TimelineItem from "@/components/ui/TimelineItem";
import { hackathonJourney } from "@/data/journey";
import { Terminal, Trophy, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function JourneySection() {
  return (
    <section id="journey" className="py-16 md:py-20 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="mb-12 pb-6 border-b border-[var(--border)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block mb-2 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                MY JOURNEY / 03
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--foreground)] uppercase tracking-tight">
                THINGS I&apos;VE BUILT, COMPETED IN, AND LEARNED FROM<span className="text-[var(--accent)]">.</span>
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[var(--muted)] max-w-md leading-relaxed">
              Three hackathons. Three different challenges. A growing obsession with building under pressure, team collaboration, and practical problem solving.
            </p>
          </div>
        </div>

        {/* Section Main Content Grid (2 Columns: Timeline + Mindset Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Timeline Entries */}
          <div className="lg:col-span-8 relative">
            {hackathonJourney.map((entry, index) => (
              <TimelineItem
                key={entry.id}
                item={entry}
                index={index}
                isLast={index === hackathonJourney.length - 1}
              />
            ))}
          </div>

          {/* Right Column: Editorial Dark Mindset Card & Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-5 sticky top-28"
          >
            {/* Dark Philosophy Card */}
            <div className="bg-[var(--dark-surface)] text-white p-6 md:p-7 border border-slate-800 flex flex-col justify-between relative overflow-hidden shadow-md rounded-xs">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-7xl font-black text-white pointer-events-none select-none">
                03
              </div>

              <div className="relative z-10 font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Terminal size={14} />
                  COMPETITIVE LOG
                </span>
                <span className="text-slate-400">2026</span>
              </div>

              <div className="relative z-10 my-2 space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase leading-snug">
                  BUILDING UNDER PRESSURE<span className="text-[var(--accent)]">.</span>
                </h3>
                <p className="text-xs font-sans text-slate-300 leading-relaxed">
                  Hackathons taught me how to move fast, collaborate under time constraints, turn ambiguous problems into working software, and focus relentlessly on core user value.
                </p>
              </div>

              <div className="relative z-10 pt-4 mt-2 border-t border-slate-800 grid grid-cols-2 gap-3 font-mono text-xs text-slate-400">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-500 uppercase block">COMPETITIONS</span>
                  <span className="text-white font-bold text-sm block">3 HACKATHONS</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-500 uppercase block">PROGRESSION</span>
                  <span className="text-[var(--accent)] font-bold text-sm block">PODIUM FINISH</span>
                </div>
              </div>
            </div>

            {/* Key Insights List */}
            <div className="bg-[var(--surface-alt)] border border-[var(--border)] p-5 space-y-3 font-mono text-xs">
              <span className="text-[var(--accent)] font-bold tracking-widest uppercase block mb-1">
                // WHAT I&apos;VE LEARNED
              </span>

              <div className="flex items-start gap-2.5">
                <Zap size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-[var(--foreground)] leading-relaxed">
                  Rapid MVP execution and shipping working code over perfection.
                </span>
              </div>

              <div className="flex items-start gap-2.5 border-t border-[var(--border-subtle)] pt-2.5">
                <Trophy size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-[var(--foreground)] leading-relaxed">
                  Clear role division, rapid feedback loops, and high-trust team collaboration.
                </span>
              </div>

              <div className="flex items-start gap-2.5 border-t border-[var(--border-subtle)] pt-2.5">
                <Layers size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <span className="text-[var(--foreground)] leading-relaxed">
                  Designing scalable architecture under extreme time limits.
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
