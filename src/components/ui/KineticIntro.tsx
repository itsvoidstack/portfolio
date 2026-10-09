"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { siteConfig } from "@/config/site";

interface KineticIntroProps {
  name?: string;
  onComplete?: () => void;
}

// Letter-by-letter kinetic reveal component
const StaggeredText: React.FC<{
  text: string;
  className?: string;
  delayOffset?: number;
}> = ({ text, className = "", delayOffset = 0 }) => {
  const letters = Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: delayOffset,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { y: "110%", opacity: 0, rotate: 6 },
    visible: {
      y: "0%",
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.55,
        ease: [0.215, 0.61, 0.355, 1.0] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-flex overflow-hidden ${className}`}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function KineticIntro({
  name = siteConfig.name.toUpperCase(),
  onComplete,
}: KineticIntroProps) {
  const [step, setStep] = useState(0);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // Lock body scroll while intro is active
    document.body.style.overflow = "hidden";

    // Smoother, deliberate timeline sequence (in ms)
    const timer1 = setTimeout(() => setStep(1), 1700); // Frame 1 -> Frame 2
    const timer2 = setTimeout(() => setStep(2), 3700); // Frame 2 -> Frame 3
    const timer3 = setTimeout(() => setStep(3), 6000); // Complete & slide exit

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setStep(3);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  const containerVariants: Variants = {
    initial: { y: 0, opacity: 1 },
    exit: {
      y: "-100%",
      opacity: 0.95,
      transition: {
        duration: 1.0,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  const textPopVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.97, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.98,
      filter: "blur(4px)",
      transition: {
        duration: 0.45,
        ease: [0.7, 0, 0.84, 0] as [number, number, number, number],
      },
    },
  };

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }}
    >
      {step < 3 && (
        <motion.div
          key="kinetic-intro-container"
          variants={containerVariants}
          initial="initial"
          exit="exit"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F4F4F0] text-black font-sans overflow-hidden select-none"
        >
          {/* 1. Animated Blueprint Grid Overlay */}
          <div className="absolute inset-0 pointer-events-none grid grid-cols-6 grid-rows-6 opacity-30">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-black/20" />
            ))}
          </div>

          {/* 2. Technical Metadata / Corner Crosshairs */}
          <div className="absolute top-6 left-6 text-xs font-mono text-black/50 flex items-center gap-2">
            <span className="text-[#84cc16] font-bold">+</span> 00.00.2026 // INTRO
          </div>
          <div className="absolute top-6 right-6 text-xs font-mono text-black/50 flex items-center gap-2">
            <span>[1920x1080]</span>
            <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-ping" />
          </div>
          <div className="absolute bottom-6 left-6 text-xs font-mono text-black/50">
            FRAME: 0{Math.min(step + 1, 3)} / 03
          </div>

          {/* 3. Sequence Content */}
          <AnimatePresence mode="wait">
            {/* FRAME 01: THE HOOK */}
            {step === 0 && (
              <motion.div
                key="frame1"
                variants={textPopVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative flex flex-col items-center px-4"
              >
                <div className="relative flex flex-col items-center">
                  <h1 className="text-6xl sm:text-9xl md:text-[10rem] font-black tracking-tighter leading-none flex items-center">
                    <StaggeredText text="HELLO" delayOffset={0.1} />
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.45,
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="inline-block w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#84cc16] ml-3 align-baseline"
                    />
                  </h1>

                  {/* Draw-in accent bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      delay: 0.55,
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-2 sm:h-3 bg-[#84cc16] w-full mt-3 origin-left rounded-full"
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 font-mono text-xs uppercase tracking-widest text-slate-500"
                >
                  // 240px bounds
                </motion.span>
              </motion.div>
            )}

            {/* FRAME 02: IDENTITY POP */}
            {step === 1 && (
              <motion.div
                key="frame2"
                variants={textPopVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative flex flex-col items-center px-4"
              >
                <div className="border-2 border-black p-6 sm:p-10 bg-white/70 backdrop-blur-md relative shadow-2xl">
                  <span className="absolute -top-3 left-4 bg-[#F4F4F0] px-2 font-mono text-xs text-black/70 font-semibold">
                    140px
                  </span>

                  <h2 className="text-3xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-center flex items-center justify-center gap-3 flex-wrap">
                    <StaggeredText text="I'M" delayOffset={0.1} />
                    <span className="bg-black text-white px-4 sm:px-7 py-1 inline-block">
                      <StaggeredText text={name} delayOffset={0.25} />
                    </span>
                  </h2>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: 0.5,
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="h-1 bg-[#84cc16] mt-4"
                  />
                </div>
              </motion.div>
            )}

            {/* FRAME 03: CORE EXPERTISE */}
            {step === 2 && (
              <motion.div
                key="frame3"
                variants={textPopVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative text-center max-w-4xl px-4"
              >
                <div className="flex items-center justify-center gap-3 sm:gap-6 mb-2 flex-wrap sm:flex-nowrap">
                  <h2 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase">
                    <StaggeredText text="DEVELOPER" delayOffset={0.1} />
                  </h2>
                  <motion.span
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.45,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="text-3xl sm:text-6xl font-mono text-[#84cc16]"
                  >
                    //
                  </motion.span>
                </div>

                <h2 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase">
                  <StaggeredText text="DESIGNER" delayOffset={0.3} />
                </h2>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-6 border-y border-black/20 py-3"
                >
                  <p className="font-mono text-xs sm:text-base tracking-widest text-black/80 uppercase">
                    <StaggeredText
                      text="[BUILDING DIGITAL EXPERIENCES]"
                      delayOffset={0.65}
                    />
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 4. Skip Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={() => setStep(3)}
            className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-widest bg-black/10 hover:bg-black hover:text-white px-4 py-2 rounded-full border border-black/20 transition-all active:scale-95 z-20 cursor-pointer backdrop-blur-sm"
          >
            SKIP INTRO [ESC]
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
