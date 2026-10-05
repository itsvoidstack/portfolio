import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import SkillsSection from "@/components/sections/SkillsSection";
import JourneySection from "@/components/sections/JourneySection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* Sticky typography-focused navbar */}
      <Navbar />

      {/* Main page content sections */}
      <main className="flex-1">
        {/* 01 — HERO */}
        <HeroSection />

        {/* 02 — ABOUT */}
        <AboutSection />

        {/* 03 — WORK */}
        <WorkSection />

        {/* 04 — SKILLS / ARSENAL */}
        <SkillsSection />

        {/* 05 — JOURNEY */}
        <JourneySection />

        {/* 06 — HOBBIES / BEYOND THE CODE */}
        <HobbiesSection />

        {/* 07 — CONTACT */}
        <ContactSection />
      </main>

      {/* 08 — FOOTER */}
      <Footer />
    </div>
  );
}
