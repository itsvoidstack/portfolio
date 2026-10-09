import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkSection from "@/components/sections/WorkSection";
import JourneySection from "@/components/sections/JourneySection";
import SkillsSection from "@/components/sections/SkillsSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import QuickMessageModal from "@/components/ui/QuickMessageModal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* Sticky typography-focused navbar */}
      <Navbar />

      {/* Main page content sections */}
      <main className="flex-1">
        {/* HERO */}
        <HeroSection />

        {/* 01 — ABOUT */}
        <AboutSection />

        {/* 02 — WORK */}
        <WorkSection />

        {/* 03 — MY JOURNEY */}
        <JourneySection />

        {/* 04 — SKILLS / ARSENAL */}
        <SkillsSection />

        {/* 05 — HOBBIES / BEYOND THE CODE */}
        <HobbiesSection />

        {/* 06 — CONTACT */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING QUICK MESSAGE MODAL */}
      <QuickMessageModal />
    </div>
  );
}

