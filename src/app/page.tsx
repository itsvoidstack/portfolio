"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
import KineticIntro from "@/components/ui/KineticIntro";
import { siteConfig } from "@/config/site";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {!introDone && (
        <KineticIntro
          name={siteConfig.name.toUpperCase()}
          onComplete={() => setIntroDone(true)}
        />
      )}

      {/* Main Container smoothly reveals when intro completes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.985, y: 15 }}
        animate={{
          opacity: introDone ? 1 : 0.95,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex-1 flex flex-col"
      >
        {/* Sticky typography-focused navbar */}
        <Navbar />

        {/* Main page content sections */}
        <main className="flex-1">
          {/* HERO */}
          <HeroSection />

          {/* 01 — ABOUT */}
          <AboutSection />

          {/* 02 — SKILLS / ARSENAL */}
          <SkillsSection />

          {/* 03 — WORK */}
          <WorkSection />

          {/* 04 — MY JOURNEY */}
          <JourneySection />

          {/* 05 — HOBBIES / BEYOND THE CODE */}
          <HobbiesSection />

          {/* 06 — CONTACT */}
          <ContactSection />
        </main>

        {/* FOOTER */}
        <Footer />

        {/* FLOATING QUICK MESSAGE MODAL */}
        <QuickMessageModal />
      </motion.div>
    </div>
  );
}



