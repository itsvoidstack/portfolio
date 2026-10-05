import SectionHeader from "@/components/ui/SectionHeader";
import FeaturedProject from "@/components/ui/FeaturedProject";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredProject, moreProjects } from "@/data/projects";

export default function WorkSection() {
  return (
    <section id="work" className="py-24 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="WORK / 02"
          heading="SELECTED WORK"
          supporting="Things I've built while exploring software, AI, and digital products."
        />

        {/* Featured Case Study: Tessera */}
        <div className="mb-16">
          <FeaturedProject project={featuredProject} />
        </div>

        {/* More Projects Section Divider & Title */}
        <div className="pt-8 border-t border-[var(--border)] mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase block mb-1">
              EXPANSION CASE STUDIES
            </span>
            <h3 className="font-display text-2xl font-black uppercase text-[var(--foreground)] tracking-tight">
              MORE PROJECTS
            </h3>
          </div>
          <span className="font-mono text-xs text-[var(--muted)]">
            REUSABLE PROJECT ARCHITECTURE READY FOR FUTURE CASES
          </span>
        </div>

        {/* Editorial Responsive Grid for More Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {moreProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
