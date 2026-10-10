"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface KineticIntroProps {
  name?: string;
  onComplete?: () => void;
}

// ==========================================
// RESPONSIVE GRAPHICAL ASSETS
// ==========================================
const ATTACHED_SVGS = [
  {
    id: "svg-mask",
    src: "/svgs/25KrR01.svg",
    size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32",
    position: "top-[10%] left-[3%] sm:left-[6%]",
    rotate: -6,
    tag: "PX_35 // MASK",
  },
  {
    id: "svg-snitch",
    src: "/svgs/7uUwi01.svg",
    size: "w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36",
    position: "top-[8%] right-[3%] sm:right-[6%]",
    rotate: 8,
    tag: "PX_35 // SNITCH",
  },
  {
    id: "svg-seal",
    src: "/svgs/Oea4701.svg",
    size: "w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28",
    position: "bottom-[16%] left-[3%] sm:left-[6%]",
    rotate: -4,
    tag: "PX_35 // SEAL",
  },
  {
    id: "svg-plane",
    src: "/svgs/eTNCl01.svg",
    size: "w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40",
    position: "bottom-[16%] right-[3%] sm:right-[6%]",
    rotate: 5,
    tag: "PX_35 // CREATIVITY",
  },
  {
    id: "svg-toeto",
    src: "/svgs/m8qLF01.svg",
    size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32",
    position: "top-[44%] right-[2%] xl:right-[4%] hidden md:block",
    rotate: -10,
    tag: "PX_35 // TOETO",
  },
];

// TECH BADGES WITH GREEN BADGE TEXT INCLUDED
const TECH_BADGES = [
  { text: "<CODE/>", color: "bg-[#84cc16] text-black font-mono text-xs px-3 py-1.5 rounded shadow-sm font-extrabold" },
  { text: "AI_AGENT", color: "bg-[#3b82f6] text-white font-mono text-xs px-3 py-1.5 rounded shadow-sm font-semibold" },
  { text: "01001100", color: "bg-black text-[#84cc16] font-mono text-xs px-3 py-1.5 rounded shadow-sm font-semibold" },
  { text: "[ REACT ]", color: "bg-[#06b6d4] text-black font-mono text-xs px-3 py-1.5 rounded shadow-sm font-bold" },
  { text: "$ sudo run", color: "bg-[#0f172a] text-emerald-400 font-mono text-xs px-3 py-1.5 rounded shadow-sm font-mono" },
  { text: "CREATIVITY", color: "bg-[#8b5cf6] text-white font-mono text-xs px-3 py-1.5 rounded shadow-sm font-semibold" },
];

const GLITCH_GLYPHS = "X01_#$&@!*?";

export default function KineticIntro({ onComplete }: KineticIntroProps) {
  const [stage, setStage] = useState<"heading" | "subtext" | "done">("heading");
  const [displayText, setDisplayText] = useState("");
  const [subtext, setSubtext] = useState("");
  const [isExiting, setIsExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);

  const fullHeading = "HEY,\nI'M SHIVAM";
  const fullSubtext = "DEVELOPER // DESIGNER";

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const triggerCompletion = () => {
    setIsExiting(true);
  };

  // High-speed Stage 1: Heading Decrypt (<500ms)
  useEffect(() => {
    if (isExiting || stage !== "heading") return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullHeading.length) {
        const revealed = fullHeading.slice(0, index);
        const remaining = fullHeading.slice(index);
        
        let scrambled = "";
        if (remaining.length > 0) {
          const firstChar = remaining[0];
          if (firstChar === "\n" || firstChar === " ") {
            scrambled = firstChar;
          } else {
            scrambled = GLITCH_GLYPHS[Math.floor(Math.random() * GLITCH_GLYPHS.length)];
          }
        }

        setDisplayText(revealed + scrambled);
        index++;
      } else {
        clearInterval(interval);
        setDisplayText(fullHeading);
        setTimeout(() => setStage("subtext"), 100);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [stage, isExiting]);

  // High-speed Stage 2: Subtext Typewriter & Fast Launch
  useEffect(() => {
    if (isExiting || stage !== "subtext") return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullSubtext.length) {
        setSubtext(fullSubtext.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setStage("done");
        setTimeout(() => triggerCompletion(), 350);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [stage, isExiting]);

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
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F4F4F0] text-black font-[family-name:var(--font-inter)] overflow-hidden select-none px-4"
        >
          {/* 1. BLUEPRINT GRID OVERLAY */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
            <div className="absolute inset-0 border-[0.5px] border-black/15 grid grid-cols-6 sm:grid-cols-12 grid-rows-8">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-black/10" />
              ))}
            </div>
          </div>

          {/* 2. TOP HUD METADATA */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)] text-black/70 flex items-center gap-1.5 sm:gap-2 z-20 tracking-wider">
            <span className="text-[#84cc16] font-bold">✦</span>
            <span className="font-semibold uppercase truncate max-w-[200px] sm:max-w-none">
              SHIVAM SHAH // PORTFOLIO 2026
            </span>
            <span className="text-black/50 font-bold ml-1">_</span>
            <span className="text-[10px] sm:text-[11px] tracking-widest text-black/40 hidden md:inline ml-1">
              [SECURE CORE ACTIVE]
            </span>
          </div>

          <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-[10px] sm:text-xs font-[family-name:var(--font-jetbrains-mono)] text-black/60 flex items-center gap-3 z-20 tracking-wider">
            <span>[1920X1080]</span>
          </div>

          {/* 3. VECTOR SVGS */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {ATTACHED_SVGS.map((item) => (
              <div
                key={item.id}
                style={{ transform: `rotate(${item.rotate}deg)` }}
                className={`absolute ${item.position} ${item.size} transition-transform duration-300 opacity-40 sm:opacity-50`}
              >
                <div className="absolute -inset-1.5 sm:-inset-2 border border-emerald-600/30 pointer-events-none rounded-sm">
                  <span className="absolute -top-2 left-0.5 text-[7px] sm:text-[9px] font-[family-name:var(--font-jetbrains-mono)] bg-[#F4F4F0] px-0.5 sm:px-1 text-emerald-700 font-semibold tracking-wider">
                    {item.tag}
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-600" />
                </div>
                <Image
                  src={item.src}
                  alt="Background Vector"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain filter contrast-125 mix-blend-multiply"
                  priority
                />
              </div>
            ))}
          </div>

          {/* 4. MAIN CENTRAL TYPOGRAPHY ("HEY, I'M SHIVAM_") */}
          <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center max-w-4xl mx-auto my-auto">
            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight leading-[0.95] uppercase font-[family-name:var(--font-space-grotesk)] text-black">
              {displayText.split("\n").map((line, lIdx) => (
                <div key={lIdx} className="flex items-baseline justify-center">
                  <span>{line}</span>
                  {lIdx === 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0.2] }}
                      transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
                      className="font-mono text-black font-light ml-1"
                    >
                      _
                    </motion.span>
                  )}
                </div>
              ))}
            </h1>

            {/* SUBTEXT DISPLAY */}
            <div className="mt-4 sm:mt-8 flex flex-col items-center min-h-[36px] sm:min-h-[44px]">
              <div className="relative border-y border-black/20 px-4 sm:px-8 py-1.5 sm:py-2 min-w-[200px] sm:min-w-[280px]">
                <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] sm:text-base md:text-lg font-bold tracking-[0.18em] sm:tracking-[0.25em] text-slate-700 uppercase">
                  {subtext || (stage === "heading" ? "// DECRYPTING..." : "")}
                </p>
              </div>
            </div>
          </div>

          {/* 5. TECH BADGES */}
          <div className="absolute bottom-8 sm:bottom-12 inset-x-0 flex justify-center items-center pointer-events-none z-10">
            <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center px-4">
              {TECH_BADGES.map((badge, idx) => (
                <div
                  key={idx}
                  style={{
                    transform: `rotate(${idx % 2 === 0 ? -3 : 4}deg)`,
                  }}
                  className={`pointer-events-auto cursor-default transition-transform hover:scale-105 ${badge.color}`}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
