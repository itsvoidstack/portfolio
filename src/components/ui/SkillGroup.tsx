"use client";

import { SkillCategory } from "@/data/skills";
import { Cpu, Code, Terminal, Layers, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface SkillGroupProps {
  group: SkillCategory;
  index?: number;
}

const iconMap = {
  Cpu: Cpu,
  Code: Code,
  Terminal: Terminal,
  Layers: Layers,
};

export default function SkillGroup({ group, index = 0 }: SkillGroupProps) {
  const IconComponent = iconMap[group.iconName as keyof typeof iconMap] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="group border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 relative hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between shadow-xs"
    >
      <div>
        {/* Editorial Top Code Label */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-3 mb-6">
          <span className="font-mono text-[10px] text-[var(--accent)] tracking-widest font-semibold uppercase">
            {group.codeLabel}
          </span>
          <ArrowUpRight
            size={14}
            className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>

        {/* Category Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-colors duration-300">
            <IconComponent size={18} />
          </div>
          <h3 className="font-display text-lg font-bold text-[var(--foreground)] tracking-tight uppercase">
            {group.category}
          </h3>
        </div>

        {/* Skill Items List */}
        <ul className="space-y-3 font-mono text-xs">
          {group.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center justify-between group/item text-[var(--foreground)] transition-transform duration-200 group-hover/item:translate-x-1"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-60 group-hover/item:opacity-100 transition-opacity" />
                <span>{skill}</span>
              </span>
              <span className="text-[10px] text-[var(--muted)] opacity-0 group-hover/item:opacity-100 transition-opacity">
                VERIFIED
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Accent Line */}
      <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[10px] text-[var(--muted)]">
        <span>{group.skills.length} TECHNOLOGIES</span>
        <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] opacity-40 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}
