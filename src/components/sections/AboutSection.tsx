"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const headlineText = "I LIKE TURNING IDEAS INTO THINGS YOU CAN ACTUALLY USE";
  const words = headlineText.split(" ");

  const wordContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const wordChildVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.5,
        ease: "easeOut",
      },
    },
  };

  const focusCards = [
    { num: "01", title: "BUILDING", desc: "Practical AI Platforms & Web tools." },
    { num: "02", title: "LEARNING", desc: "Agentic Workflows & RAG architectures." },
    { num: "03", title: "EXPLORING", desc: "Full-Stack Systems & digital products." },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-[var(--border)] bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-16 font-mono text-xs text-[var(--muted)]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-[2px] bg-[var(--accent)]" />
            <span className="text-[var(--accent)] font-semibold tracking-widest uppercase">ABOUT / 01</span>
          </div>
          <span className="tracking-widest uppercase text-[11px]">PORTFOLIO 2026</span>
        </motion.div>

        {/* Editorial Typographic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-start">
          
          {/* Main Statement */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                WHO I AM
              </div>
              
              {/* High-Impact Editorial Statement Headline with Original Text */}
              <motion.h2
                variants={wordContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] uppercase leading-[1.05] tracking-tight mb-8"
              >
                <motion.span variants={wordChildVariants} className="inline font-black">
                  I LIKE{" "}
                </motion.span>
                <motion.span variants={wordChildVariants} className="inline-block relative font-serif italic text-slate-700 font-normal lowercase tracking-normal px-1">
                  turning
                  <svg className="absolute -bottom-1 left-0 w-full h-2 text-[var(--accent)]" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none">
                    <path d="M0 15 Q 50 0, 100 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </motion.span>
                <motion.span variants={wordChildVariants} className="inline font-black">
                  {" "}IDEAS INTO{" "}
                </motion.span>
                <motion.span variants={wordChildVariants} className="inline-block relative font-black text-[var(--accent)]">
                  THINGS
                  <motion.span
                    animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1 right-0 w-2.5 h-2.5 bg-[#84cc16] rounded-full shadow-[0_0_8px_#84cc16]"
                  />
                </motion.span>
                <br className="hidden sm:block" />
                <motion.span variants={wordChildVariants} className="inline font-black">
                  YOU CAN{" "}
                </motion.span>
                <motion.span variants={wordChildVariants} className="inline font-serif italic text-slate-700 font-normal lowercase tracking-normal px-1">
                  actually
                </motion.span>
                <motion.span
                  variants={wordChildVariants}
                  className="inline font-display font-black tracking-tight text-transparent ml-1.5"
                  style={{
                    WebkitTextStroke: "1.5px var(--foreground)",
                  }}
                >
                  USE.
                </motion.span>
              </motion.h2>
            </div>

            {/* CTA Button directly connected to MY JOURNEY section */}
            <div className="pt-2">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="#journey"
                className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 font-mono text-xs font-bold uppercase tracking-widest rounded-xs shadow-xs overflow-hidden"
              >
                <span className="relative z-10">EXPLORE MY JOURNEY</span>
                <ArrowUpRight
                  size={16}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[var(--accent)] group-hover:text-white"
                />
              </motion.a>
            </div>
          </div>

          {/* Supporting Copy & Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between space-y-8 pl-0 lg:pl-8 border-l-0 lg:border-l border-[var(--border-subtle)]"
          >
            <div className="space-y-6">
              <p className="font-sans text-lg sm:text-xl font-medium text-[var(--foreground)] leading-relaxed">
                Computer Science student developing an interest in artificial intelligence, full-stack development, and creating impactful digital products.
              </p>

              <p className="font-sans text-base text-[var(--muted)] leading-relaxed">
                I learn best by building — experimenting with ideas, turning them into practical applications, and exploring technologies that challenge the way I think.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                {/* Expanding Quote Dash Accent (0px to 32px) */}
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="h-[2px] bg-[var(--accent)] shrink-0 inline-block"
                />
                <p className="font-mono text-xs text-[var(--accent)] font-semibold tracking-wide italic">
                  &ldquo;Always learning. Always building. Always curious.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Editorial Information Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="pt-12 border-t border-[var(--border)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* CURRENT FOCUS Column */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-6 font-medium">
              CURRENT FOCUS —
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {focusCards.map((card) => (
                <motion.div
                  key={card.num}
                  variants={itemVariants}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          transition: { type: "spring", stiffness: 300, damping: 20 },
                        }
                  }
                  className="group relative p-5 bg-[var(--surface-alt)] border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200 cursor-default"
                >
                  {/* Number Accent with mechanical shift & cyan glow */}
                  <span className="font-mono text-[10px] text-[var(--accent)] font-bold tracking-widest block transition-colors duration-200 group-hover:text-cyan-400 group-hover:-translate-y-0.5 transform">
                    {card.num}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase text-[var(--foreground)] block mt-1">
                    {card.title}
                  </span>
                  <p className="font-sans text-xs text-[var(--muted)] leading-normal mt-1">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ROLE & ETHOS Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-6 font-medium">
              ROLE & ETHOS —
            </span>
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }
              }
              className="group p-6 bg-[var(--surface-alt)] border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:shadow-md transition-all duration-200 font-mono text-xs cursor-default"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] group-hover:scale-125 transition-transform" />
                <span className="text-[var(--foreground)] group-hover:text-[var(--accent)] font-bold uppercase tracking-wider text-xs transition-colors">
                  STUDENT & CREATIVE DEVELOPER
                </span>
              </div>
              <p className="font-sans text-xs text-[var(--muted)] leading-relaxed pt-3 border-t border-[var(--border-subtle)]">
                Focused on purposeful software engineering, thoughtful UX, and clean architecture.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
