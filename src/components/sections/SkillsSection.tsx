"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { detailedSkills, SkillItem } from "@/data/skills";
import {
  Code,
  FileCode,
  Layers,
  Palette,
  Terminal,
  Zap,
  Cpu,
  Sparkles,
  Database,
  Cloud,
  GitBranch,
  Globe,
  Pause,
  Play,
  X,
  ChevronRight,
  Filter,
  MousePointerClick,
  Hand,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code,
  FileCode,
  Layers,
  Palette,
  Terminal,
  Zap,
  Cpu,
  Sparkles,
  Database,
  Cloud,
  GitBranch,
  Globe,
};

export default function SkillsSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState<"slow" | "norm" | "fast">("norm");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  // Split skills into row 1 and row 2 for dual marquee
  const half = Math.ceil(detailedSkills.length / 2);
  const row1Skills = detailedSkills.slice(0, half);
  const row2Skills = detailedSkills.slice(half);

  // Triple each row for seamless endless scroll loop
  const row1Full = [...row1Skills, ...row1Skills, ...row1Skills];
  const row2Full = [...row2Skills, ...row2Skills, ...row2Skills];

  // Marquee duration based on speed state
  const durationMap = {
    slow: "45s",
    norm: "30s",
    fast: "15s",
  };

  const categories = [
    { id: "all", label: "ALL SKILLS" },
    { id: "ai", label: "AI & AGENTIC AI" },
    { id: "frontend", label: "FRONTEND" },
    { id: "backend", label: "BACKEND" },
    { id: "devops", label: "DEVOPS & CLOUD" },
    { id: "tools", label: "TOOLS & APIS" },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-12 border-b border-[var(--border)] bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="SKILLS / 02"
          heading="MY ARSENAL"
          supporting="An interactive showcase of tools, frameworks, and technologies I use to build scalable, production-ready applications."
        />

        {/* Filters and Speed Controls Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8">
          {/* Category Filter Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 border ${
                    isActive
                      ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-xs"
                      : "bg-[var(--surface)] text-[var(--muted)] border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Marquee Play/Pause & Speed Switchers */}
          <div className="flex items-center gap-3 bg-[var(--surface)] p-1.5 border border-[var(--border)] font-mono text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause Marquee" : "Play Marquee"}
              className="p-1.5 bg-[var(--surface-alt)] hover:bg-[var(--accent)] hover:text-white text-[var(--foreground)] transition-colors border border-[var(--border)]"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <div className="h-4 w-px bg-[var(--border)]" />
            <div className="flex items-center gap-1 text-[var(--muted)]">
              <span className="text-[10px] uppercase tracking-wider mr-1 hidden sm:inline">Speed:</span>
              {(["slow", "norm", "fast"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSpeed(s)}
                  className={`px-2 py-0.5 text-[10px] uppercase font-semibold transition-colors ${
                    speed === s
                      ? "bg-[var(--accent)] text-white"
                      : "hover:bg-[var(--surface-alt)] text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Viewport Outer Container */}
        <div className="relative w-full overflow-hidden py-4 space-y-6">
          {/* Subtle Side Gradient Edge Fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent" />

          {/* ROW 1: Scroll Left to Right */}
          <div className="flex overflow-hidden group/row1">
            <div
              className={`flex gap-6 w-max ${!isPlaying ? "[animation-play-state:paused]" : ""} group-hover/row1:[animation-play-state:paused]`}
              style={{
                animation: `scrollLeftToRight ${durationMap[speed]} linear infinite`,
              }}
            >
              {row1Full.map((skill, idx) => (
                <SkillCard
                  key={`r1-${skill.id}-${idx}`}
                  skill={skill}
                  activeCategory={activeCategory}
                  onClick={() => setSelectedSkill(skill)}
                />
              ))}
            </div>
          </div>

          {/* ROW 2: Scroll Right to Left */}
          <div className="flex overflow-hidden group/row2">
            <div
              className={`flex gap-6 w-max ${!isPlaying ? "[animation-play-state:paused]" : ""} group-hover/row2:[animation-play-state:paused]`}
              style={{
                animation: `scrollRightToLeft ${durationMap[speed]} linear infinite`,
              }}
            >
              {row2Full.map((skill, idx) => (
                <SkillCard
                  key={`r2-${skill.id}-${idx}`}
                  skill={skill}
                  activeCategory={activeCategory}
                  onClick={() => setSelectedSkill(skill)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Instruction Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[var(--muted)] border-t border-[var(--border-subtle)] pt-4">
          <span className="flex items-center gap-1.5">
            <MousePointerClick size={14} className="text-[var(--accent)]" /> Click card for breakdown
          </span>
          <span className="flex items-center gap-1.5">
            <Hand size={14} className="text-[var(--accent-secondary)]" /> Hover row to pause
          </span>
          <span className="flex items-center gap-1.5">
            <Filter size={14} className="text-[var(--foreground)]" /> Filter by category
          </span>
        </div>
      </div>


      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-lg bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 shadow-2xl flex flex-col justify-between"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-5 right-5 p-2 text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-alt)] transition-colors border border-transparent hover:border-[var(--border)]"
              >
                <X size={18} />
              </button>

              <div>
                {/* Modal Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    {(() => {
                      const Icon = iconMap[selectedSkill.iconName] || Code;
                      return <Icon size={26} />;
                    })()}
                  </div>
                  <div>
                    <span className="inline-block px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20 mb-1">
                      {selectedSkill.categoryLabel}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-[var(--foreground)] tracking-tight">
                      {selectedSkill.name}
                    </h3>
                    <p className="font-mono text-xs text-[var(--muted)] mt-0.5">
                      {selectedSkill.experience}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm font-sans text-[var(--foreground)] leading-relaxed mb-6">
                  {selectedSkill.description}
                </p>

                {/* Highlights */}
                <div>
                  <h4 className="font-mono text-[10px] font-bold text-[var(--muted)] uppercase tracking-wider mb-3">
                    Key Highlights & Capabilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 font-mono text-xs bg-[var(--surface-alt)] text-[var(--foreground)] border border-[var(--border)]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-8 pt-4 border-t border-[var(--border)] flex justify-end">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="px-6 py-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase font-bold tracking-wider transition-colors shadow-xs"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function SkillCard({
  skill,
  activeCategory,
  onClick,
}: {
  skill: SkillItem;
  activeCategory: string;
  onClick: () => void;
}) {
  const Icon = iconMap[skill.iconName] || Code;
  const isDimmed = activeCategory !== "all" && skill.category !== activeCategory;
  const isHighlight = activeCategory !== "all" && skill.category === activeCategory;

  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer w-64 sm:w-72 p-5 border bg-[var(--surface)] transition-all duration-300 flex flex-col justify-between shrink-0 ${
        isDimmed
          ? "opacity-30 filter grayscale scale-95 border-[var(--border)]"
          : isHighlight
          ? "border-[var(--accent)] ring-1 ring-[var(--accent)] opacity-100 shadow-md scale-[1.02]"
          : "border-[var(--border)] hover:border-[var(--accent)] hover:-translate-y-1 shadow-xs opacity-100"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="w-10 h-10 bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-200 flex items-center justify-center">
            <Icon size={20} />
          </div>
          <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--muted)]">
            {skill.categoryLabel}
          </span>
        </div>

        <h3 className="font-display text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1 uppercase tracking-tight">
          {skill.name}
          <ChevronRight
            size={14}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--accent)]"
          />
        </h3>

        <p className="text-xs font-sans text-[var(--muted)] line-clamp-2 mt-1 leading-relaxed">
          {skill.summary}
        </p>
      </div>
    </div>
  );
}


