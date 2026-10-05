import SectionHeader from "@/components/ui/SectionHeader";
import SkillGroup from "@/components/ui/SkillGroup";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="SKILLS / 03"
          heading="MY ARSENAL"
          supporting="Tools and technologies I work with."
        />

        {/* 4-column on desktop, 2-column on tablet, 1-column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((group, index) => (
            <SkillGroup key={group.id} group={group} index={index} />
          ))}
        </div>

        {/* Technical Footer Bar */}
        <div className="mt-12 p-6 border border-[var(--border)] bg-[var(--surface-alt)] font-mono text-xs text-[var(--muted)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[var(--foreground)] font-semibold uppercase">
              TECHNICAL TOOLKIT & INTEGRATIONS
            </span>
          </div>
          <div>ZERO FAKE PERCENTAGES // HANDS-ON VERIFIED STACK</div>
        </div>
      </div>
    </section>
  );
}
