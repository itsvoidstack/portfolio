"use client";

import { JourneyItem } from "@/data/journey";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  item: JourneyItem;
  index?: number;
  isLast?: boolean;
}

export default function TimelineItem({ item, index = 0, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-8 md:pl-12 pb-12 group"
    >
      {/* Thin Vertical Connecting Line */}
      {!isLast && (
        <div className="absolute left-[11px] md:left-[19px] top-8 bottom-0 w-[1px] bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-300" />
      )}

      {/* Circle Node Dot */}
      <div className="absolute left-0 md:left-[10px] top-1.5 w-6 h-6 rounded-full border-2 border-[var(--border)] bg-[var(--background)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors duration-300 z-10">
        <div
          className={`w-2 h-2 rounded-full ${
            item.isCurrent ? "bg-[var(--accent)] animate-pulse" : "bg-[var(--muted)]"
          }`}
        />
      </div>

      {/* Content Container */}
      <div className="bg-[var(--surface)] border border-[var(--border)] p-6 md:p-8 hover:border-[var(--accent)] transition-all duration-300 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-3 mb-4">
          <span className="font-display text-3xl md:text-4xl font-extrabold text-[var(--accent)] tracking-tight">
            {item.year}
          </span>
          {item.badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-[var(--accent)] font-mono text-xs uppercase tracking-wider font-semibold">
              <Sparkles size={12} />
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="font-display text-xl font-bold text-[var(--foreground)] mb-2 uppercase tracking-tight">
          {item.milestone}
        </h3>

        <p className="text-sm font-sans text-[var(--muted)] leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
