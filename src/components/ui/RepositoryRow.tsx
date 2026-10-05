"use client";

import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface RepositoryRowProps {
  project: Project;
  index: number;
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export default function RepositoryRow({ project, index }: RepositoryRowProps) {
  const rowNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group py-5 px-4 md:px-6 border-b border-[var(--border)] last:border-b-0 bg-[var(--surface)] hover:bg-[var(--surface-alt)] transition-colors duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
    >
      {/* Left side: Index, Icon, Name, Description */}
      <div className="flex items-start md:items-center gap-4 md:gap-6 flex-1 min-w-0">
        {/* Row Index */}
        <span className="font-mono text-xs text-[var(--muted)] shrink-0 pt-0.5 md:pt-0">
          {rowNumber}
        </span>

        {/* GitHub Icon */}
        <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors shrink-0 pt-0.5 md:pt-0">
          <GithubIcon className="w-4 h-4" />
        </div>

        {/* Name & Description */}
        <div className="min-w-0 flex-1">
          <h4 className="font-mono text-sm font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors tracking-tight">
            {project.title}
          </h4>
          <p className="font-sans text-xs text-[var(--muted)] mt-0.5 line-clamp-2 md:line-clamp-1">
            {project.description}
          </p>
        </div>
      </div>

      {/* Right side: Tech Stack & GitHub Link */}
      <div className="flex flex-wrap items-center justify-between md:justify-end gap-4 md:gap-8 shrink-0 border-t md:border-t-0 border-[var(--border-subtle)] pt-3 md:pt-0">
        {/* Tech stack */}
        <div className="font-mono text-[11px] text-[var(--muted)] flex items-center gap-1.5 flex-wrap">
          {project.stack.map((tech, idx) => (
            <span key={tech} className="text-[var(--muted)] group-hover:text-[var(--foreground)]/80 transition-colors">
              {tech}
              {idx < project.stack.length - 1 && <span className="ml-1.5 text-[var(--border)]">·</span>}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0"
          >
            <span>GitHub</span>
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </motion.div>
  );
}
