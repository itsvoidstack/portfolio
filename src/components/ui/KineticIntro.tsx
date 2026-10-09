"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface KineticIntroProps {
  name?: string;
  onComplete?: () => void;
}

// ==========================================
// PROPERLY POSITIONED SVGS (BALANCED UI QUADRANTS)
// ==========================================
const ATTACHED_SVGS = [
  {
    id: "svg-mask",
    src: "/svgs/25KrR01.svg",
    size: "w-28 h-28 sm:w-36 sm:h-36",
    position: "top-[14%] left-[6%]",
    rotate: -8,
    tag: "PX_01 // MASK",
  },
  {
    id: "svg-sketch",
    src: "/svgs/7uUwi01.svg",
    size: "w-32 h-32 sm:w-40 sm:h-40",
    position: "top-[14%] right-[6%]",
    rotate: 10,
    tag: "PX_02 // SKETCH",
  },
  {
    id: "svg-seal",
    src: "/svgs/Oea4701.svg",
    size: "w-24 h-24 sm:w-32 sm:h-32",
    position: "bottom-[16%] left-[6%]",
    rotate: -5,
    tag: "PX_03 // SEAL",
  },
  {
    id: "svg-anchor",
    src: "/svgs/eTNCl01.svg",
    size: "w-32 h-32 sm:w-44 sm:h-44",
    position: "bottom-[16%] right-[6%]",
    rotate: 6,
    tag: "PX_04 // ANCHOR",
  },
  {
    id: "svg-trajectory",
    src: "/svgs/m8qLF01.svg",
    size: "w-28 h-28 sm:w-36 sm:h-36",
    position: "top-[46%] right-[3%] hidden lg:block",
    rotate: -12,
    tag: "PX_05 // TRAJECTORY",
  },
];

// TECH BADGES
const TECH_BADGES = [
  { text: "</>", color: "bg-[#84cc16] text-black font-bold" },
  { text: "AI_AGENT", color: "bg-blue-600 text-white font-mono" },
  { text: "01001100", color: "bg-black text-[#84cc16] font-mono" },
  { text: "{ REACT }", color: "bg-cyan-500 text-black font-semibold" },
  { text: "$ sudo run", color: "bg-slate-900 text-green-400 font-mono" },
  { text: "✦ CREATIVE", color: "bg-[#8B5CF6] text-white font-semibold" },
];

export default function KineticIntro({
  onComplete,
}: KineticIntroProps) {
  const [frame, setFrame] = useState(1);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // 3 Target phrases to type and erase in-place with exact same transition logic
  const frameTargets: Record<number, string> = {
    1: "HELLO!",
    2: `I'M ${siteConfig.name.toUpperCase()}`,
    3: "DEVELOPER // DESIGNER",
  };

  const triggerCompletion = () => {
    setIsExiting(true);
  };

  // Uniform, smooth typewriter & backspace erasing loop for ALL 3 frames
  useEffect(() => {
    if (isExiting || isPaused) return;

    let timer: NodeJS.Timeout;
    const currentTarget = frameTargets[frame];

    if (!isDeleting && displayText !== currentTarget) {
      // Smooth character typing
      timer = setTimeout(() => {
        setDisplayText(currentTarget.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText === currentTarget) {
      // Hold complete text before erasing
      if (frame < 3) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      } else {
        // Complete sequence on Frame 3 finish
        timer = setTimeout(() => {
          triggerCompletion();
        }, 2000);
      }
    } else if (isDeleting && displayText !== "") {
      // Smooth character backspacing
      timer = setTimeout(() => {
        setDisplayText(currentTarget.substring(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText === "") {
      // Advance to next frame cleanly
      setIsDeleting(false);
      setFrame((prev) => prev + 1);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, frame, isExiting, isPaused]);

  // Keyboard shortcut: ESC to skip, Space to toggle Pause
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        triggerCompletion();
      } else if (e.code === "Space") {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }}
    >
      {!isExiting && (
        <motion.div
          key="kinetic-intro-modal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F4F4F0] text-black font-[family-name:var(--font-inter)] overflow-hidden select-none"
        >
          {/* 1. ARCHITECTURAL BLUEPRINT GRID OVERLAY */}
          <div className="absolute inset-0 pointer-events-none opacity-25">
            <div className="absolute inset-0 border-[0.5px] border-black/15 grid grid-cols-8 grid-rows-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-black/10" />
              ))}
            </div>
            <svg
              className="absolute inset-0 w-full h-full"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="4 4"
              fill="none"
            >
              <line x1="0" y1="20%" x2="100%" y2="20%" className="text-black/20" />
              <line x1="0" y1="80%" x2="100%" y2="80%" className="text-black/20" />
              <line x1="15%" y1="0" x2="15%" y2="100%" className="text-black/20" />
              <line x1="85%" y1="0" x2="85%" y2="100%" className="text-black/20" />
            </svg>
          </div>

          {/* 2. TOP HUD METADATA (PROPER TOP MARGIN & WHITESPACE) */}
          <div className="absolute top-6 left-6 text-xs font-[family-name:var(--font-jetbrains-mono)] text-black/60 flex items-center gap-2 z-20">
            <span className="text-[#84cc16] font-bold">✦</span>
            <span>SHIVAM_SHAH // PORTFOLIO 2026</span>
            <span className="text-black/30">|</span>
            <span className="text-[10px] tracking-widest text-black/40 hidden sm:inline">[SECURE_CORE_ACTIVE]</span>
            {isPaused && (
              <span className="bg-amber-400 text-black px-2 py-0.5 rounded text-[10px] font-bold ml-2 animate-pulse">
                [PAUSED FOR TEST]
              </span>
            )}
          </div>

          <div className="absolute top-6 right-6 text-xs font-[family-name:var(--font-jetbrains-mono)] text-black/60 flex items-center gap-3 z-20">
            <span>[1920x1080]</span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#84cc16] animate-ping" />
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-widest text-black/30 pointer-events-none hidden xl:block z-20">
            CERTAIN UNCERTAINTIES [VOL. 2] // KINETIC SEQUENCE_
          </div>

          {/* 3. PROPERLY BALANCED BACKDROP SVGS WITH NO CLUTTER */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {ATTACHED_SVGS.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.55, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ transform: `rotate(${item.rotate}deg)` }}
                className={`absolute ${item.position} ${item.size}`}
              >
                <div className="absolute -inset-2.5 border border-emerald-600/30 pointer-events-none rounded-sm">
                  <span className="absolute -top-2.5 left-1 text-[8px] font-[family-name:var(--font-jetbrains-mono)] bg-[#F4F4F0] px-1 text-emerald-700 font-semibold">
                    {item.tag}
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-emerald-600" />
                </div>
                <Image
                  src={item.src}
                  alt="Background Vector"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain filter contrast-125 mix-blend-multiply opacity-55"
                  priority
                />
              </motion.div>
            ))}
          </div>

          {/* 4. UNIFORM, SMOOTH TYPEWRITER STAGE (SAME TRANSITION FOR ALL FRAMES) */}
          <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center min-h-[240px] w-full max-w-4xl">
            {/* FRAME 1: HELLO! */}
            {frame === 1 && (
              <motion.div
                key="stage-1"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-7xl sm:text-9xl md:text-[10rem] font-black tracking-tight leading-none font-[family-name:var(--font-space-grotesk)] flex items-baseline">
                  <span>{displayText.replace("!", "")}</span>
                  {displayText.includes("!") && (
                    <span className="text-[#84cc16] ml-2">!</span>
                  )}
                  <span className="text-black font-light animate-pulse ml-2">_</span>
                </h1>
                <span className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-slate-500">
                  // 240px bounds
                </span>
              </motion.div>
            )}

            {/* FRAME 2: I'M SHIVAM SHAH */}
            {frame === 2 && (
              <motion.div
                key="stage-2"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                {displayText.startsWith("I'M") && (
                  <span className="font-[family-name:var(--font-jetbrains-mono)] text-sm sm:text-xl text-slate-500 uppercase tracking-widest mb-2 font-semibold">
                    I&apos;M
                  </span>
                )}
                <motion.h1
                  layoutId="shivam-title"
                  transition={{ type: "spring", stiffness: 220, damping: 25 }}
                  className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none uppercase font-[family-name:var(--font-space-grotesk)] flex items-baseline"
                >
                  <span>{displayText.replace("I'M ", "").split(" ")[0]}</span>
                  {displayText.includes("SHAH") && (
                    <>{" "}<span className="text-blue-600">SHAH</span></>
                  )}
                  <span className="text-black font-light animate-pulse ml-2">_</span>
                </motion.h1>
                <span className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-slate-500">
                  // 240px bounds
                </span>
              </motion.div>
            )}

            {/* FRAME 3: DEVELOPER // DESIGNER */}
            {frame === 3 && (
              <motion.div
                key="stage-3"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
              >
                <h1 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase leading-none font-[family-name:var(--font-space-grotesk)] flex items-baseline justify-center flex-wrap">
                  <span>{displayText.split("//")[0]}</span>
                  {displayText.includes("//") && (
                    <span className="text-[#84cc16]"> // </span>
                  )}
                  <span>{displayText.split("//")[1]}</span>
                  <span className="text-black font-light animate-pulse ml-2">_</span>
                </h1>
                {displayText === frameTargets[3] && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 font-[family-name:var(--font-jetbrains-mono)] text-xs sm:text-sm tracking-widest text-slate-700 uppercase border-y border-black/20 py-2"
                  >
                    [STUDENT DEVELOPER & UI/UX & AI ENTHUSIAST]
                  </motion.p>
                )}
                <span className="mt-4 font-[family-name:var(--font-jetbrains-mono)] text-xs uppercase tracking-widest text-slate-500">
                  // 240px bounds
                </span>
              </motion.div>
            )}
          </div>

          {/* 5. BOTTOM TECH BADGES */}
          <div className="absolute bottom-16 inset-x-0 flex justify-center items-center pointer-events-none z-10">
            {TECH_BADGES.map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 150, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 18,
                  delay: 0.08 * idx,
                }}
                style={{
                  translateX: (idx - (TECH_BADGES.length - 1) / 2) * 11 + "vw",
                  rotate: idx % 2 === 0 ? -4 : 6,
                }}
                className={`absolute px-4 py-2 rounded-lg text-xs font-[family-name:var(--font-jetbrains-mono)] shadow-md border border-black/20 ${badge.color}`}
              >
                {badge.text}
              </motion.div>
            ))}
          </div>

          {/* 6. FOOTER CONTROLS */}
          <footer className="absolute bottom-6 inset-x-6 z-30 flex justify-between items-center pointer-events-none font-[family-name:var(--font-jetbrains-mono)]">
            <div className="text-xs text-black/60">
              FRAME: 0{frame} / 03 {isPaused ? "(PAUSED)" : ""}
            </div>
            <div className="pointer-events-auto flex items-center gap-3">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className={`text-xs uppercase tracking-widest px-4 py-2 rounded-full border transition-all cursor-pointer ${
                  isPaused
                    ? "bg-amber-400 text-black border-amber-500 font-bold shadow-md"
                    : "bg-black/5 hover:bg-black hover:text-white border-black/20"
                }`}
              >
                {isPaused ? "RESUME [SPACE]" : "PAUSE [SPACE]"}
              </button>
              <button
                onClick={() => triggerCompletion()}
                className="text-xs uppercase tracking-widest bg-black/5 hover:bg-black hover:text-white px-4 py-2 rounded-full border border-black/20 transition-all active:scale-95 cursor-pointer"
              >
                SKIP INTRO [ESC]
              </button>
            </div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
