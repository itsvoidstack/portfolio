"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { hobbies, Hobby } from "@/data/hobbies";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HobbiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  const targetIndexRef = useRef(0);
  const currentIndexRef = useRef(0);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const animFrameId = useRef<number | null>(null);

  const totalItems = hobbies.length;
  const speed = 0.0025; // Smooth continuous auto-scroll speed

  // Sync state for active index highlight
  const updateActiveIndex = useCallback((curr: number) => {
    const focused = Math.round(curr) % totalItems;
    const norm = (focused + totalItems) % totalItems;
    setActiveIdx(norm);
  }, [totalItems]);

  useEffect(() => {
    let lastTime = performance.now();

    const animateLoop = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;

      if (!isHoveredRef.current && !isDraggingRef.current) {
        targetIndexRef.current += speed * (dt / 16.6);
      }

      // Smooth Lerp Interpolation
      currentIndexRef.current += (targetIndexRef.current - currentIndexRef.current) * 0.08;
      setCurrentIndex(currentIndexRef.current);
      updateActiveIndex(currentIndexRef.current);

      animFrameId.current = requestAnimationFrame(animateLoop);
    };

    animFrameId.current = requestAnimationFrame(animateLoop);
    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [updateActiveIndex]);

  // Touch and Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    targetIndexRef.current -= deltaX * 0.003;
    startXRef.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      targetIndexRef.current = Math.round(targetIndexRef.current);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    targetIndexRef.current -= deltaX * 0.004;
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    targetIndexRef.current = Math.round(targetIndexRef.current);
  };

  const goToHobby = (idx: number) => {
    // Find shortest wrap-around path to target index
    let currentNorm = targetIndexRef.current % totalItems;
    if (currentNorm < 0) currentNorm += totalItems;
    let diff = idx - currentNorm;
    if (diff > totalItems / 2) diff -= totalItems;
    if (diff < -totalItems / 2) diff += totalItems;

    targetIndexRef.current = targetIndexRef.current + diff;
  };

  const goPrev = () => {
    targetIndexRef.current = Math.round(currentIndexRef.current) - 1;
  };

  const goNext = () => {
    targetIndexRef.current = Math.round(currentIndexRef.current) + 1;
  };

  return (
    <section
      id="hobbies"
      className="py-20 md:py-24 border-b border-[#0E131F]/10 bg-[#FAF8F3] relative overflow-hidden select-none"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* SECTION TOP HEADER & EDITORIAL METADATA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          {/* Left Title Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-xs text-[#6B7280] mb-3">
              <span className="w-3 h-0.5 bg-[#84cc16]"></span>
              <span className="tracking-widest uppercase">HOBBIES / 06</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none uppercase text-[#0E131F]">
              THINGS I ENJOY<br />
              BEYOND CODE
              <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-[#84cc16] ml-1"></span>
            </h2>
          </div>

          {/* Middle Editorial Note */}
          <div className="lg:col-span-3 text-xs sm:text-sm text-[#6B7280] leading-relaxed font-mono border-l-2 border-[#0E131F]/10 pl-4 py-1">
            <p>
              When I&apos;m off the screen, I explore crafts and habits that keep my thinking sharp, tactile, and grounded.
            </p>
            <p className="mt-3 font-semibold text-[#0E131F] flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-[#84cc16]"></span>
              — SAME MINDSET. DIFFERENT PLAYGROUND.
            </p>
          </div>

          {/* Right Monospace List & Handwritten Badge */}
          <div className="lg:col-span-3 flex justify-between items-start relative pl-2">
            <ul className="font-mono text-xs space-y-1.5 text-[#6B7280]">
              {hobbies.map((hobby, idx) => (
                <li
                  key={hobby.id}
                  onClick={() => goToHobby(idx)}
                  className={`cursor-pointer transition-colors flex items-center gap-2 ${
                    activeIdx === idx
                      ? "font-bold text-[#0E131F]"
                      : "hover:text-[#0E131F]"
                  }`}
                >
                  <span>{hobby.number}</span>
                  <span
                    className={`hobby-name ${
                      activeIdx === idx
                        ? "underline decoration-[#84cc16] underline-offset-4"
                        : ""
                    }`}
                  >
                    {hobby.title}
                  </span>
                </li>
              ))}
            </ul>

            {/* Decorative Handwritten Script Badge */}
            <div
              style={{ fontFamily: "var(--font-caveat), cursive" }}
              className="text-2xl sm:text-3xl text-[#84cc16] -rotate-12 absolute -top-8 right-0 pointer-events-none select-none text-right font-bold leading-none drop-shadow-sm"
            >
              Better<br />
              Energy,<br />
              Bigger<br />
              Ideas.
            </div>
          </div>
        </div>

        {/* 3D CAROUSEL STAGE CONTAINER */}
        <div
          onMouseEnter={() => (isHoveredRef.current = true)}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            if (isDraggingRef.current) {
              isDraggingRef.current = false;
              targetIndexRef.current = Math.round(targetIndexRef.current);
            }
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: "1200px" }}
          className="relative w-full h-[400px] sm:h-[460px] my-6 overflow-hidden select-none cursor-grab active:cursor-grabbing flex items-center justify-center"
        >
          <div
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {hobbies.map((hobby, idx) => {
              // Calculate position relative to continuous floating index
              let diff = idx - (currentIndex % totalItems);
              while (diff < -totalItems / 2) diff += totalItems;
              while (diff > totalItems / 2) diff -= totalItems;

              const absDiff = Math.abs(diff);

              const translateX = diff * 240; // Horizontal Spacing
              const translateZ = -absDiff * 160; // Depth displacement
              const rotateY = -diff * 20; // Y-Rotation Angle
              const scale = Math.max(0.72, 1 - absDiff * 0.14);
              const opacity = Math.max(0.2, 1 - absDiff * 0.32);
              const zIndex = Math.round(100 - absDiff * 10);
              const isFocused = absDiff < 0.5;

              return (
                <div
                  key={hobby.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToHobby(idx);
                  }}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                    filter: isFocused ? "brightness(1)" : "brightness(0.92)",
                    backfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                  className={`absolute w-[280px] sm:w-[340px] md:w-[380px] h-[340px] sm:h-[380px] rounded-2xl bg-[#FAF8F3] border transition-all duration-100 p-6 flex flex-col justify-between overflow-hidden cursor-pointer ${
                    isFocused
                      ? "border-[#84cc16]/50 shadow-2xl shadow-black/15 ring-1 ring-[#84cc16]/20"
                      : "border-[#0E131F]/10 shadow-lg shadow-black/5"
                  }`}
                >
                  <div>
                    {/* Header / Category */}
                    <div className="flex items-center justify-between font-mono text-xs text-[#6B7280] mb-3">
                      <span className="flex items-center gap-1.5 text-[#0E131F] font-semibold">
                        <span className="w-1.5 h-1.5 bg-[#84cc16] rounded-full"></span>
                        {hobby.number} / {hobby.tag}
                      </span>
                      <span className="text-[#84cc16] font-bold text-lg">+</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#0E131F] tracking-tight mb-3 leading-none">
                      {hobby.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4B5563] font-sans leading-relaxed line-clamp-3">
                      {hobby.description}
                    </p>
                  </div>

                  {/* Image & Footer */}
                  <div>
                    <div className="w-full h-32 sm:h-38 rounded-xl overflow-hidden mb-3 border border-[#0E131F]/10 relative group bg-gray-100">
                      <Image
                        src={hobby.image}
                        alt={hobby.title}
                        fill
                        className={`object-cover ${hobby.imagePosition || "object-center"} grayscale contrast-110 group-hover:scale-105 transition-transform duration-500`}
                        sizes="(max-width: 640px) 280px, 380px"
                      />

                      <div className="absolute inset-0 bg-[#0E131F]/10 pointer-events-none"></div>
                    </div>

                    <div className="flex justify-between items-center font-mono text-[11px] font-bold text-[#0E131F]">
                      <span>MORE</span>
                      <span className="text-[#84cc16] text-base">+</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CONTROLS & PAGINATION */}
        <div className="flex items-center justify-center space-x-6 mt-4">
          <button
            onClick={goPrev}
            aria-label="Previous Hobby"
            className="w-10 h-10 rounded-full border border-[#0E131F]/10 hover:border-[#0E131F] bg-[#FAF8F3] flex items-center justify-center text-[#0E131F] transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Indicator Line & Dots */}
          <div className="flex items-center space-x-2">
            {hobbies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToHobby(idx)}
                aria-label={`Go to hobby ${idx + 1}`}
                style={{ width: activeIdx === idx ? "28px" : "8px" }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIdx === idx ? "bg-[#84cc16]" : "bg-[#0E131F]/10 hover:bg-[#0E131F]/30"
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next Hobby"
            className="w-10 h-10 rounded-full border border-[#0E131F]/10 hover:border-[#0E131F] bg-[#FAF8F3] flex items-center justify-center text-[#0E131F] transition-all hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

