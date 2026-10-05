"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import TimelineItem from "@/components/ui/TimelineItem";
import { journeyTimeline } from "@/data/journey";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function JourneySection() {
  return (
    <section id="journey" className="py-24 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="JOURNEY / 04"
          heading="THE PATH SO FAR"
          supporting="Key moments, hacks, and experiences that shaped my journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Vertical Timeline */}
          <div className="lg:col-span-8 relative">
            {journeyTimeline.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                isLast={index === journeyTimeline.length - 1}
              />
            ))}
          </div>

          {/* Right Column: Editorial Motto Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-[var(--dark-surface)] text-white p-8 md:p-10 border border-slate-800 flex flex-col justify-between min-h-[340px] relative overflow-hidden shadow-md"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 font-mono text-xs text-slate-400 tracking-widest uppercase mb-6 flex items-center justify-between">
              <span>PHILOSOPHY</span>
              <span>2026 — ∞</span>
            </div>

            <div className="relative z-10 my-auto">
              <h3 className="font-display text-3xl font-extrabold tracking-tight mb-4 text-white uppercase">
                Small steps. <br />
                <span className="text-[var(--accent)]">Big dreams.</span>
              </h3>
              <p className="text-xs font-mono text-slate-400 leading-relaxed">
                Building practical applications, experimenting with code, and exploring technologies that challenge the way I think.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>CONTINUOUS LEARNING</span>
              <ArrowRight size={16} className="text-[var(--accent)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
