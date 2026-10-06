"use client";

import { HackathonEntry } from "@/data/journey";
import { Award, MapPin, Calendar, Users, Globe, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface TimelineItemProps {
  item: HackathonEntry;
  index?: number;
  isLast?: boolean;
}

export default function TimelineItem({ item, index = 0, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-6 sm:pl-10 md:pl-12 pb-8 sm:pb-10 last:pb-0 group"
    >
      {/* Thin Vertical Timeline Line */}
      {!isLast && (
        <div className="absolute left-[9px] sm:left-[15px] md:left-[19px] top-6 bottom-0 w-[1.5px] bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-300" />
      )}

      {/* Timeline Node Marker */}
      <div className="absolute left-0 sm:left-[8px] md:left-[11px] top-1 w-5 h-5 rounded-full border-2 border-[var(--border)] bg-[var(--background)] flex items-center justify-center group-hover:border-[var(--accent)] transition-all duration-300 z-10">
        <div
          className={`w-1.5 h-1.5 rounded-full ${
            item.isPlacement ? "bg-[var(--accent)] animate-pulse" : "bg-emerald-500"
          }`}
        />
      </div>

      {/* Rich Timeline Card */}
      <div className="bg-[var(--surface-alt)] border border-[var(--border)] p-5 sm:p-6 md:p-7 rounded-xs hover:border-[var(--accent)]/60 transition-all duration-300 shadow-xs relative">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-[var(--accent)] font-bold tracking-widest uppercase">
              ENTRY {item.number}
            </span>
            <span className="text-[var(--border)] font-mono text-xs">/</span>
            <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider flex items-center gap-1.5">
              <Calendar size={12} className="text-[var(--accent)]" />
              {item.dates}
            </span>
          </div>

          {/* Achievement Badge */}
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-bold tracking-wider uppercase rounded-xs border ${
              item.achievementBadge.includes("3RD")
                ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                : item.achievementBadge.includes("5TH")
                ? "bg-blue-500/10 text-[var(--accent)] border-blue-500/30"
                : "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
            }`}
          >
            <Award size={13} />
            {item.achievementBadge}
          </span>
        </div>

        {/* Title & Event Subtitle */}
        <div className="mb-3">
          <h3 className="font-display text-2xl sm:text-3xl font-black text-[var(--foreground)] uppercase tracking-tight mb-0.5">
            {item.title}
          </h3>
          {item.eventSubtitle && (
            <p className="font-mono text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
              {item.eventSubtitle}
            </p>
          )}
        </div>

        {/* Location & Team Metadata */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 font-mono text-xs text-[var(--muted)] mb-4 py-1.5 px-3 bg-[var(--background)] border border-[var(--border-subtle)] w-fit rounded-xs">
          <div className="flex items-center gap-1.5">
            {item.format === "In-Person" ? (
              <MapPin size={12} className="text-[var(--accent)] shrink-0" />
            ) : (
              <Globe size={12} className="text-emerald-500 shrink-0" />
            )}
            <span>
              {item.venue}
              {item.location && ` (${item.location})`}
            </span>
          </div>

          <span className="text-[var(--border)]">|</span>

          <div className="flex items-center gap-1.5">
            <Users size={12} className="text-[var(--accent)] shrink-0" />
            <span>{item.teamInfo || item.role}</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-xs sm:text-sm text-[var(--foreground)]/80 leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Highlights Tags */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
            {item.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="font-mono text-[11px] px-2.5 py-0.5 bg-[var(--background)] border border-[var(--border-subtle)] text-[var(--muted)]"
              >
                ✓ {highlight}
              </span>
            ))}
          </div>
        )}

        {/* Optional Project Link */}
        {item.projectUrl && (
          <div className="mt-3 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-end">
            <a
              href={item.projectUrl}
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[var(--accent)] hover:underline uppercase tracking-wider"
            >
              <span>VIEW IN WORK</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        )}

      </div>
    </motion.div>
  );
}
