"use client";

import { Hobby } from "@/data/hobbies";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface HobbyCardProps {
  hobby: Hobby;
  index?: number;
}

export default function HobbyCard({ hobby, index = 0 }: HobbyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 hover:border-[var(--accent)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full shadow-xs"
    >
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] text-[var(--muted)] mb-4">
          <span className="px-2.5 py-1 bg-[var(--surface-alt)] border border-[var(--border-subtle)] uppercase tracking-wider font-semibold text-[var(--foreground)]">
            {hobby.tag}
          </span>
          <ArrowUpRight
            size={16}
            className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
          />
        </div>

        {/* Title & Subtitle */}
        <h4 className="font-display text-2xl font-black tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2 uppercase">
          {hobby.title}
        </h4>

        <p className="text-xs font-sans text-[var(--muted)] leading-relaxed">
          {hobby.subtitle}
        </p>
      </div>

      {/* Bottom Editorial Tag & Indicator Dot */}
      <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[10px] text-[var(--muted)]">
        <span>INTEREST // {hobby.id.toUpperCase()}</span>
        <span
          className="w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125"
          style={{ backgroundColor: hobby.accentColor || "var(--accent)" }}
        />
      </div>
    </motion.div>
  );
}
