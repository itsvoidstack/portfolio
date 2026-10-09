"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Lock, Globe, ExternalLink } from "lucide-react";

interface BrowserMockupProps {
  imageSrc: string;
  altText: string;
  addressBarUrl?: string;
  liveUrl?: string;
  priority?: boolean;
}

export default function BrowserMockup({
  imageSrc,
  altText,
  addressBarUrl = "https://website.com",
  liveUrl,
  priority = false,
}: BrowserMockupProps) {
  const shouldReduceMotion = useReducedMotion();
  const displayUrl = addressBarUrl.replace(/^https?:\/\//, "");

  return (
    <motion.div
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              scale: 1.018,
              y: -6,
              rotateX: 2,
              rotateY: -2,
            }
      }
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className="group relative w-full rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--surface-alt)] shadow-lg hover:shadow-2xl hover:border-[var(--accent)]/60 transition-all duration-500"
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[var(--border)] bg-[#F0EFEA] text-[var(--muted)] font-mono text-xs select-none">
        {/* Window Dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block opacity-80 group-hover:opacity-100 transition-opacity" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center justify-center max-w-[280px] sm:max-w-xs md:max-w-md w-full mx-2 px-3 py-1 rounded bg-[var(--surface)] border border-[var(--border-subtle)] shadow-inner text-[11px] text-[var(--muted)] truncate">
          <Lock size={11} className="mr-1.5 shrink-0 text-emerald-600/80" />
          <span className="truncate tracking-tight font-sans text-[var(--foreground)]/80">
            {displayUrl}
          </span>
        </div>

        {/* Action Icon */}
        <div className="flex items-center gap-2 shrink-0 text-[var(--muted)]">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open website"
              className="hover:text-[var(--accent)] transition-colors p-0.5"
            >
              <ExternalLink size={12} />
            </a>
          ) : (
            <Globe size={12} className="opacity-60" />
          )}
        </div>
      </div>

      {/* Browser Window Body / Screenshot Container */}
      <div className="relative w-full aspect-[1024/521] bg-[#0F172A] overflow-hidden flex items-start justify-center">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 800px"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
