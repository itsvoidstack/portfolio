import SectionHeader from "@/components/ui/SectionHeader";
import HobbyCard from "@/components/ui/HobbyCard";
import { hobbies } from "@/data/hobbies";

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-24 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="HOBBIES / 05"
          heading="BEYOND THE CODE"
          supporting="Things that keep me inspired and balanced."
        />

        {/* Playful Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <HobbyCard key={hobby.id} hobby={hobby} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
