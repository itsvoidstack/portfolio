"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: "easeOut",
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
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4 font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                WHO I AM
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--foreground)] uppercase leading-[0.98] tracking-tight mb-8">
                I LIKE TURNING IDEAS INTO THINGS YOU CAN ACTUALLY USE<span className="text-[var(--accent)]">.</span>
              </h2>
            </div>

            {/* CTA Button directly connected to MY JOURNEY section */}
            <div className="pt-2">
              <motion.a
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                href="#journey"
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-300 font-mono text-xs font-bold uppercase tracking-widest rounded-xs shadow-xs"
              >
                <span>EXPLORE MY JOURNEY</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[var(--accent)] group-hover:text-white"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Supporting Copy & Quote */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
            transition={{ delay: 0.1 }}
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
                <span className="w-6 h-[2px] bg-[var(--accent)] shrink-0" />
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
              <motion.div variants={itemVariants} className="p-5 bg-[var(--surface-alt)] border border-[var(--border-subtle)] space-y-2 hover:border-[var(--accent)]/40 transition-colors">
                <span className="font-mono text-[10px] text-[var(--accent)] font-bold tracking-widest block">01</span>
                <span className="font-mono text-xs font-bold uppercase text-[var(--foreground)] block">BUILDING</span>
                <p className="font-sans text-xs text-[var(--muted)] leading-normal">Practical AI Platforms & Web tools.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-5 bg-[var(--surface-alt)] border border-[var(--border-subtle)] space-y-2 hover:border-[var(--accent)]/40 transition-colors">
                <span className="font-mono text-[10px] text-[var(--accent)] font-bold tracking-widest block">02</span>
                <span className="font-mono text-xs font-bold uppercase text-[var(--foreground)] block">LEARNING</span>
                <p className="font-sans text-xs text-[var(--muted)] leading-normal">Agentic Workflows & RAG architectures.</p>
              </motion.div>

              <motion.div variants={itemVariants} className="p-5 bg-[var(--surface-alt)] border border-[var(--border-subtle)] space-y-2 hover:border-[var(--accent)]/40 transition-colors">
                <span className="font-mono text-[10px] text-[var(--accent)] font-bold tracking-widest block">03</span>
                <span className="font-mono text-xs font-bold uppercase text-[var(--foreground)] block">EXPLORING</span>
                <p className="font-sans text-xs text-[var(--muted)] leading-normal">Full-Stack Systems & digital products.</p>
              </motion.div>
            </div>
          </div>

          {/* ROLE & ETHOS Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <span className="font-mono text-xs text-[var(--muted)] tracking-widest uppercase block mb-6 font-medium">
              ROLE & ETHOS —
            </span>
            <div className="p-6 bg-[var(--surface-alt)] border border-[var(--border-subtle)] font-mono text-xs space-y-2 hover:border-[var(--accent)]/40 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                <span className="text-[var(--foreground)] font-bold uppercase tracking-wider text-xs">
                  STUDENT & CREATIVE DEVELOPER
                </span>
              </div>
              <p className="font-sans text-xs text-[var(--muted)] leading-relaxed pt-3 border-t border-[var(--border-subtle)]">
                Focused on purposeful software engineering, thoughtful UX, and clean architecture.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
