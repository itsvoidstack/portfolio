"use client";

import FeaturedProject from "@/components/ui/FeaturedProject";
import RepositoryRow from "@/components/ui/RepositoryRow";
import { featuredProjects, repositoryProjects } from "@/data/projects";

export default function WorkSection() {
  const [tessera, chroniqx] = featuredProjects;

  return (
    <section id="work" className="py-24 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border)]">
            <div>
              <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block mb-2 font-semibold">
                WORK / 02
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] uppercase tracking-tight">
                SELECTED WORK
              </h2>
            </div>
            
            <p className="font-sans text-sm text-[var(--muted)] max-w-md leading-relaxed">
              A collection of projects I&apos;ve worked on, from full-stack web applications to small experiments. Each project represents a step in my journey of learning and building.
            </p>
          </div>
        </div>

        {/* Featured Projects Presentations */}
        <div className="space-y-16 md:space-y-24 mb-24 md:mb-32">
          {/* FEATURED PROJECT 01 — TESSERA (Screenshot LEFT, Info RIGHT) */}
          {tessera && (
            <FeaturedProject
              project={tessera}
              imagePosition="left"
              priority={true}
            />
          )}

          {/* FEATURED PROJECT 02 — CHRONIQX (Info LEFT, Screenshot RIGHT) */}
          {chroniqx && (
            <FeaturedProject
              project={chroniqx}
              imagePosition="right"
              priority={false}
            />
          )}
        </div>

        {/* OTHER REPOSITORIES SECTION */}
        <div className="pt-8">
          {/* Section Header */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--border)]">
            <div>
              <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block mb-1 font-semibold">
                OTHER WORK
              </span>
              <h3 className="font-display text-3xl font-black uppercase text-[var(--foreground)] tracking-tight">
                Repositories
              </h3>
            </div>
            <p className="font-sans text-xs text-[var(--muted)]">
              A selection of other repositories and experiments.
            </p>
          </div>

          {/* Quiet Repository Editorial List */}
          <div className="border border-[var(--border)] rounded-sm overflow-hidden bg-[var(--surface)]">
            {repositoryProjects.map((repo, idx) => (
              <RepositoryRow key={repo.id} project={repo} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
