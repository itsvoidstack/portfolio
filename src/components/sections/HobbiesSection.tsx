"use client";

import { useRef, useState } from "react";
import { hobbies } from "@/data/hobbies";
import HobbyCard from "@/components/ui/HobbyCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HobbiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default active item e.g. MUSIC

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollEvent = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = 360; // Approximate card width + gap
    const index = Math.round(scrollLeft / itemWidth);
    if (index >= 0 && index < hobbies.length) {
      setActiveIndex(index);
    }
  };

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (scrollContainerRef.current) {
      const itemWidth = 360;
      scrollContainerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hobbies" className="py-24 border-b border-[var(--border)] bg-[#FAF8F5] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-xs text-[#6B7280] tracking-widest uppercase mb-4">
          <span className="w-2.5 h-[2px] bg-[#84cc16]" />
          <span>HOBBIES / 06</span>
        </div>

        {/* Top Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Huge Title */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#111827] uppercase leading-[0.95]">
              THINGS I ENJOY <br />
              BEYOND CODE<span className="text-[#84cc16]">.</span>
            </h2>
          </div>

          {/* Subheading & Hobbies Index Box */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            {/* Quote / Subheading */}
            <div className="sm:col-span-7 pl-4 border-l-2 border-[#E5E7EB]">
              <p className="text-sm md:text-base font-mono text-[#4B5563] leading-relaxed mb-4">
                When I&apos;m not building, I spend my time exploring new experiences, staying active, and doing things that keep me curious, grounded, and inspired.
              </p>
              <div className="flex items-center gap-2 font-mono text-xs text-[#6B7280] tracking-wider uppercase font-semibold">
                <span className="w-3 h-[1px] bg-[#84cc16]" />
                <span>SAME MINDSET. DIFFERENT PLAYGROUND.</span>
              </div>
            </div>

            {/* List of hobbies numbering right side */}
            <div className="sm:col-span-5 font-mono text-xs space-y-1.5 border-l sm:border-l-0 sm:pl-0 pl-4 border-[#E5E7EB]">
              {hobbies.slice(0, 6).map((hobby, idx) => (
                <button
                  key={hobby.id}
                  onClick={() => scrollToCard(idx)}
                  className={`flex items-center gap-3 w-full text-left transition-colors duration-200 cursor-pointer ${
                    activeIndex === idx
                      ? "text-[#111827] font-bold"
                      : "text-[#9CA3AF] hover:text-[#4B5563]"
                  }`}
                >
                  <span className="text-[10px] text-[#6B7280]">{hobby.number}</span>
                  <span className="tracking-wider uppercase font-semibold text-[11px]">{hobby.tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sideways Scrollable Container */}
      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          onScroll={handleScrollEvent}
          className="flex gap-6 overflow-x-auto scrollbar-none px-6 md:px-12 pb-8 pt-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {hobbies.map((hobby, index) => (
            <div key={hobby.id} className="snap-center">
              <HobbyCard
                hobby={hobby}
                isActive={activeIndex === index}
                onClick={() => scrollToCard(index)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls: Arrows & Active Indicator Dots */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-4 flex items-center justify-center gap-6">
        <button
          onClick={() => handleScroll("left")}
          className="p-2 text-[#4B5563] hover:text-[#111827] hover:scale-110 transition-all cursor-pointer"
          aria-label="Previous hobby"
        >
          <ArrowLeft size={18} />
        </button>

        {/* Scroll Progress Dots */}
        <div className="flex items-center gap-2">
          {hobbies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToCard(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-8 bg-[#84cc16]"
                  : "w-2 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="p-2 text-[#4B5563] hover:text-[#111827] hover:scale-110 transition-all cursor-pointer"
          aria-label="Next hobby"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
