"use client";

import { Project } from "@/data/projects";
import Image from "next/image";
import { Sparkles, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--surface)] border border-[var(--border)] rounded-sm overflow-hidden shadow-xs hover:border-[var(--accent)] transition-colors duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left Column: Project Details & Technical Stack */}
        <div className="lg:col-span-5 p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-[var(--surface)] border-b lg:border-b-0 lg:border-r border-[var(--border)] order-2 lg:order-1">
          <div>
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
              <div>
                <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block mb-1">
                  01 // FEATURED CASE STUDY
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-[var(--foreground)] uppercase tracking-tight">
                  {project.title}
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-[10px] uppercase tracking-wider border border-[var(--accent)]/20 font-semibold">
                {project.category}
              </span>
            </div>

            <p className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase font-semibold mb-3">
              {project.subtitle}
            </p>

            <p className="text-sm text-[var(--foreground)] leading-relaxed mb-6 font-sans">
              {project.description}
            </p>

            {/* Feature Bullets */}
            {project.bullets && (
              <ul className="space-y-2 mb-6 text-xs font-sans text-[var(--muted)] border-y border-[var(--border-subtle)] py-4">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Role & Category Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6 text-xs font-mono">
              <div className="p-3 bg-[var(--surface-alt)] border border-[var(--border-subtle)]">
                <span className="text-[var(--muted)] uppercase tracking-wider block mb-1 text-[10px]">
                  ROLE
                </span>
                <span className="font-semibold text-[var(--foreground)]">
                  {project.role}
                </span>
              </div>
              <div className="p-3 bg-[var(--surface-alt)] border border-[var(--border-subtle)]">
                <span className="text-[var(--muted)] uppercase tracking-wider block mb-1 text-[10px]">
                  TYPE
                </span>
                <span className="font-semibold text-[var(--foreground)]">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Verified Stack */}
            <div className="mb-6">
              <span className="font-mono text-xs text-[var(--muted)] uppercase tracking-wider block mb-3">
                VERIFIED TECH STACK
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hackathon Badge & Actions */}
          <div>
            {project.highlightBadge && (
              <div className="mb-4 pb-4 border-b border-[var(--border-subtle)] flex items-center gap-2 text-xs font-mono text-[var(--accent)] font-semibold">
                <Sparkles size={14} />
                <span>{project.highlightBadge}</span>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-white font-mono text-xs uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-colors group"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] font-mono text-xs uppercase tracking-wider hover:bg-[var(--surface-alt)] transition-colors group"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Layered Product Mockup Showcase */}
        <div className="lg:col-span-7 bg-[var(--surface-alt)] p-6 md:p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden order-1 lg:order-2">
          {/* Thin Editorial Guide Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[var(--muted)] pb-3 mb-6 border-b border-[var(--border)]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] inline-block animate-pulse" />
              LIVE APPLICATION MOCKUP
            </span>
            <span>TESSERA v1.0</span>
          </div>

          {/* Interactive Mockup Container with Restrained Hover Depth */}
          {project.image ? (
            <motion.div
              whileHover={{ scale: 1.015, y: -2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full aspect-[16/10] my-2 rounded-xs overflow-hidden border border-[var(--border)] shadow-lg bg-[var(--dark-surface)] group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ) : (
            <div className="py-20 text-center font-mono text-xs text-[var(--muted)]">
              [TESSERA PRODUCT MOCKUP CONTAINER]
            </div>
          )}

          <div className="relative z-10 pt-4 border-t border-[var(--border)] font-mono text-[10px] text-[var(--muted)] flex items-center justify-between">
            <span>AI-POWERED REPOSITORY ANALYZER</span>
            <span className="text-[var(--accent)] font-semibold">IMPACT FORGE 2026</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
