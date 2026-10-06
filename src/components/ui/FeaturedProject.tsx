"use client";

import { Project } from "@/data/projects";
import BrowserMockup from "@/components/ui/BrowserMockup";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FeaturedProjectProps {
  project: Project;
  imagePosition?: "left" | "right";
  priority?: boolean;
}

export default function FeaturedProject({
  project,
  imagePosition = "left",
  priority = false,
}: FeaturedProjectProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="w-full py-8 md:py-12 border-b border-[var(--border)] last:border-b-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Visual / Screenshot Area */}
        <div
          className={`lg:col-span-7 w-full ${
            isImageLeft
              ? "order-1 lg:order-1"
              : "order-1 lg:order-2"
          }`}
        >
          {project.image ? (
            <BrowserMockup
              imageSrc={project.image}
              altText={`${project.title} live interface preview`}
              addressBarUrl={project.addressBarUrl || project.demoUrl}
              liveUrl={project.demoUrl}
              priority={priority}
            />
          ) : (
            <div className="w-full aspect-[16/10] bg-[var(--surface-alt)] border border-[var(--border)] rounded-lg flex items-center justify-center font-mono text-xs text-[var(--muted)]">
              [PREVIEW UNAVAILABLE]
            </div>
          )}
        </div>

        {/* Project Information Beside / Underneath Screenshot */}
        <div
          className={`lg:col-span-5 flex flex-col justify-between ${
            isImageLeft
              ? "order-2 lg:order-2"
              : "order-2 lg:order-1"
          }`}
        >
          <div>
            {/* Project Number & Subtitle */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs md:text-sm text-[var(--accent)] font-semibold tracking-wider">
                — {project.number}
              </span>
              {project.category && (
                <span className="font-mono text-[11px] text-[var(--muted)] uppercase tracking-wider">
                  / {project.category}
                </span>
              )}
            </div>

            {/* Project Title */}
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[var(--foreground)] uppercase tracking-tight mb-4">
              {project.title}
            </h3>

            {/* Subtitle / Tagline */}
            {project.subtitle && (
              <p className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest font-semibold mb-4">
                {project.subtitle}
              </p>
            )}

            {/* Real Project Description */}
            <p className="font-sans text-sm md:text-base text-[var(--foreground)]/80 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Bullet Highlights if present */}
            {project.bullets && project.bullets.length > 0 && (
              <ul className="space-y-2 mb-6 border-t border-[var(--border-subtle)] pt-4 text-xs font-sans text-[var(--muted)]">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Highlight Badge (Hackathon badge) if present */}
            {project.highlightBadge && (
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--accent)]/10 border border-[var(--accent)]/20 font-mono text-xs text-[var(--accent)] font-medium rounded-xs">
                <Sparkles size={13} className="shrink-0" />
                <span>{project.highlightBadge}</span>
              </div>
            )}

            {/* Metadata Grid: Type & Tech Stack */}
            <div className="border-t border-b border-[var(--border-subtle)] py-4 mb-6 space-y-3 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-[var(--muted)] w-24 shrink-0 uppercase tracking-wider text-[11px]">
                  TYPE
                </span>
                <span className="text-[var(--foreground)] font-medium">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-[var(--muted)] w-24 shrink-0 uppercase tracking-wider text-[11px]">
                  TECH STACK
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.stack.map((tech, idx) => (
                    <span key={tech} className="text-[var(--foreground)] font-sans">
                      {tech}
                      {idx < project.stack.length - 1 && (
                        <span className="text-[var(--muted)] ml-1.5">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] transition-colors duration-200 font-mono text-xs font-semibold uppercase tracking-wider rounded-xs"
              >
                <span>VIEW WEBSITE</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200 font-mono text-xs font-semibold uppercase tracking-wider rounded-xs"
              >
                <span>GITHUB</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
