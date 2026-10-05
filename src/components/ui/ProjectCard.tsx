"use client";

import { Project } from "@/data/projects";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="group border border-[var(--border)] bg-[var(--surface)] p-6 md:p-7 hover:border-[var(--accent)] transition-all duration-300 flex flex-col justify-between h-full relative shadow-xs"
    >
      <div>
        {/* Header Metadata */}
        <div className="flex items-center justify-between font-mono text-xs text-[var(--muted)] mb-3 pb-3 border-b border-[var(--border-subtle)]">
          <span className="font-semibold text-[var(--foreground)]">
            PROJECT // {project.number}
          </span>
          <span className="text-[var(--accent)] font-mono text-[10px] uppercase tracking-wider font-semibold">
            {project.category}
          </span>
        </div>

        {/* Project Title & Subtitle */}
        <h4 className="font-display text-2xl font-extrabold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-1 uppercase tracking-tight">
          {project.title}
        </h4>

        {project.subtitle && (
          <p className="font-mono text-[10px] text-[var(--muted)] tracking-wider uppercase mb-3">
            {project.subtitle}
          </p>
        )}

        {/* Project Description */}
        <p className="text-xs font-sans text-[var(--muted)] mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Key Feature Bullets */}
        {project.bullets && (
          <ul className="space-y-1.5 mb-6 text-xs font-sans text-[var(--muted)]">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle2 size={12} className="text-[var(--accent)] shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 bg-[var(--surface-alt)] border border-[var(--border-subtle)] text-[var(--foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link Row */}
        <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--accent)] font-semibold group-hover:underline"
            >
              <span>VIEW PROJECT</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--accent)] font-semibold group-hover:underline"
            >
              <span>GITHUB</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="text-[var(--muted)] text-[11px]">SLOT RESERVED</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
