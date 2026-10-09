"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Sparkles, Plus } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";

const TAGLINE_TEXT = "STUDENT DEVELOPER & UI/UX & AI ENTHUSIAST";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  // Typewriter effect loop for the tagline
  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(TAGLINE_TEXT);
      return;
    }

    const typingSpeed = isDeleting ? 30 : 60;
    const pauseTime = 2500;

    const handleTyping = () => {
      if (!isDeleting) {
        setTypedText(TAGLINE_TEXT.slice(0, typedText.length + 1));
        if (typedText === TAGLINE_TEXT) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setTypedText(TAGLINE_TEXT.slice(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, shouldReduceMotion, loopIndex]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const portraitVariants: Variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.8,
        ease: "easeOut",
        delay: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  return (
    <section className="relative pt-24 md:pt-32 border-b border-[var(--border)] overflow-hidden bg-[var(--background)]">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="relative min-h-[580px] lg:min-h-[660px] flex flex-col justify-between">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-1">
            
            {/* Left Column: Identity & Intro Copy */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-5 pb-10 lg:pb-16 flex flex-col justify-center relative z-20"
            >
              
              {/* Supporting Tagline with Continuous Typing Animation */}
              <motion.div variants={itemVariants} className="font-mono text-[11px] sm:text-xs text-[var(--accent)] tracking-widest uppercase mb-4 flex items-center gap-2 font-semibold min-h-[20px]">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
                <span>
                  — {typedText}
                  {!shouldReduceMotion && (
                    <span className="inline-block w-1.5 h-3.5 bg-[var(--accent)] ml-1 animate-pulse align-middle" />
                  )}
                </span>
              </motion.div>

              {/* Huge Expressive Display Identity with Continuous Gentle Floating Motion */}
              <motion.h1
                variants={itemVariants}
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -6, 0],
                        transition: {
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        },
                      }
                }
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--foreground)] leading-[0.88] uppercase mb-6"
              >
                SHIVAM <br />
                <span className="text-[var(--accent)]">SHAH</span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.div variants={itemVariants} className="space-y-3 max-w-md mb-8">
                <p className="text-sm sm:text-base font-sans text-[var(--foreground)] leading-relaxed font-medium">
                  Computer Science student developing an interest in artificial intelligence,
                  full-stack development, and creating impactful digital products.
                </p>
                <p className="text-xs sm:text-sm font-sans text-[var(--muted)] leading-relaxed">
                  I learn best by building — experimenting with ideas, turning them into practical
                  applications, and exploring technologies that challenge the way I think.
                </p>
              </motion.div>

              {/* Dual CTAs */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-8">
                <Button href="#work" variant="primary">
                  VIEW MY WORK ↗
                </Button>
                <Button href="#contact" variant="outline">
                  LET&apos;S TALK →
                </Button>
              </motion.div>

              {/* Left Social & Metadata Annotations */}
              <motion.div variants={itemVariants} className="pt-4 border-t border-[var(--border-subtle)] font-mono text-[11px] text-[var(--muted)] flex flex-wrap items-center gap-3">
                <span className="text-[var(--foreground)] font-semibold uppercase">
                  SOCIAL MEDIA
                </span>
                <span>/ CODE</span>
                <span>/ DESIGN</span>
                <span>/ CREATIVITY</span>
                <span>/ IMPACT</span>
              </motion.div>
            </motion.div>

            {/* Middle Layer: "BUILD YOUR IMAGINATION" */}
            <div className="lg:col-span-7 relative h-full flex items-end justify-between z-0">
              
              {/* Text Layer */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="absolute top-12 lg:top-16 left-0 z-0 pointer-events-none select-none max-w-lg"
              >
                {/* Grey Display Heading */}
                <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-slate-600/90 tracking-tighter uppercase leading-[0.9]">
                  BUILD YOUR <br />
                  IMAGINATION
                </h2>

                {/* Stacked Vertical Annotation Text */}
                <div className="mt-8 font-mono text-[11px] font-bold text-slate-600 tracking-widest leading-snug uppercase hidden sm:block">
                  <div>TURNING</div>
                  <div>IDEAS</div>
                  <div>INTO</div>
                  <div>DIGITAL</div>
                  <div>EXPERIENCES</div>
                </div>
              </motion.div>

              {/* Upper Right Annotations */}
              <div className="absolute top-6 right-0 font-mono text-[11px] text-[var(--muted)] tracking-widest uppercase text-right z-20 pointer-events-none hidden sm:block">
                CREATIVE <br /> DEVELOPER
              </div>

              {/* Green/Yellow Swoosh Star SVG */}
              <div className="absolute top-10 right-28 z-20 text-lime-500 animate-spin-slow pointer-events-none hidden sm:block">
                <Sparkles size={40} strokeWidth={1.5} />
              </div>

              {/* Crosshair Decorative Icon */}
              <div className="absolute top-2 left-1/3 text-[var(--muted)] z-20 pointer-events-none hidden sm:block">
                <Plus size={18} />
              </div>

              {/* Right Side: Portrait Image Layer with Entrance Animation */}
              <motion.div
                variants={portraitVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 ml-auto w-full max-w-[480px] lg:max-w-[560px] h-[440px] sm:h-[540px] lg:h-[620px] flex items-end justify-end pointer-events-none"
              >
                <Image
                  src="/portrait.png"
                  alt="Shivam Shah"
                  width={620}
                  height={720}
                  priority
                  className="object-contain object-bottom w-auto h-full filter drop-shadow-2xl select-none"
                />
              </motion.div>

            </div>

          </div>

          {/* Hero Bottom Metadata Status Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="py-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[var(--muted)] relative z-20 bg-[var(--background)]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[var(--foreground)] font-semibold uppercase">
                DEVELOPER & AI ENTHUSIAST
              </span>
            </div>
            <div className="uppercase tracking-wider">
              AVAILABLE FOR INTERESTING PROJECTS / COLLABORATIONS
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
