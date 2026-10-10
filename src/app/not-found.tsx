"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-black flex flex-col items-center justify-between p-6 sm:p-10 select-none font-[family-name:var(--font-space-grotesk)]">
      {/* Top Left Back Button */}
      <div className="w-full max-w-5xl flex justify-start">
        <Link
          href="/"
          className="group flex items-center justify-center p-2 text-black hover:opacity-75 transition-opacity"
          aria-label="Back to home"
        >
          <ArrowLeft size={28} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Main Pixel Art 404 & Running Dino Stage */}
      <div className="flex flex-col items-center justify-center my-auto w-full max-w-2xl text-center">
        {/* Pixel Art 404 Container */}
        <div className="relative flex items-center justify-center my-4 scale-90 sm:scale-110">
          
          {/* Big Red Pixelated "404" SVG Header */}
          <div className="relative flex items-center justify-center">
            <svg width="340" height="150" viewBox="0 0 340 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xs">
              {/* Left '4' */}
              <path d="M70 10 H90 V70 H110 V90 H90 V130 H70 V90 H20 V70 L70 10 Z M70 40 L45 70 H70 V40 Z" fill="#FF4D4D" />
              {/* Middle '0' */}
              <path d="M140 10 H200 V130 H140 V10 Z M160 35 V105 H180 V35 H160 Z" fill="#FF4D4D" />
              {/* Right '4' */}
              <path d="M280 10 H300 V70 H320 V90 H300 V130 H280 V90 H230 V70 L280 10 Z M280 40 L255 70 H280 V40 Z" fill="#FF4D4D" />
            </svg>

            {/* Falling Meteors / Pixel Particles */}
            <div className="absolute top-4 left-24 pointer-events-none">
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="35" y="5" width="4" height="4" fill="#222" />
                <rect x="25" y="15" width="5" height="5" fill="#222" />
                <rect x="15" y="25" width="7" height="7" fill="#222" />
                <rect x="5" y="35" width="9" height="9" stroke="#222" strokeWidth="2" strokeDasharray="2 2" />
              </svg>
            </div>

            {/* Pixel T-Rex Dino with Running Legs Motion */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-10">
              <div className="relative w-16 h-18">
                {/* Static Body & Head */}
                <svg width="64" height="72" viewBox="0 0 64 72" fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg">
                  {/* Head & Snout */}
                  <rect x="28" y="0" width="32" height="24" />
                  <rect x="28" y="0" width="36" height="16" />
                  <rect x="32" y="4" width="4" height="4" fill="#FFF" /> {/* Eye */}
                  <rect x="44" y="16" width="16" height="4" fill="#FFF" /> {/* Mouth gap */}
                  {/* Body & Tail */}
                  <rect x="20" y="20" width="28" height="28" />
                  <rect x="12" y="24" width="12" height="20" />
                  <rect x="4" y="28" width="12" height="12" />
                  <rect x="0" y="32" width="8" height="8" />
                  {/* Small Arm */}
                  <rect x="44" y="28" width="8" height="4" />
                  <rect x="48" y="32" width="4" height="4" />
                </svg>

                {/* Left Leg Frame 1 */}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 left-5"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1A1A1A">
                    <rect x="0" y="0" width="6" height="12" />
                    <rect x="0" y="10" width="12" height="4" />
                    <rect x="14" y="4" width="6" height="12" />
                    <rect x="14" y="14" width="10" height="4" />
                  </svg>
                </motion.div>

                {/* Right Leg Frame 2 (Alternating) */}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.25, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-0 left-5"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1A1A1A">
                    <rect x="0" y="4" width="6" height="12" />
                    <rect x="0" y="14" width="10" height="4" />
                    <rect x="14" y="0" width="6" height="12" />
                    <rect x="14" y="10" width="12" height="4" />
                  </svg>
                </motion.div>
              </div>
            </div>

          </div>
        </div>

        {/* Moving Ground Lines Motion Effect */}
        <div className="w-48 h-4 relative overflow-hidden my-1 pointer-events-none">
          <motion.div
            animate={{ x: [0, -40] }}
            transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
            className="flex gap-4 items-center w-[200%]"
          >
            <div className="w-12 h-1 bg-black/60 rounded-full" />
            <div className="w-6 h-1 bg-black/40 rounded-full" />
            <div className="w-16 h-1 bg-black/70 rounded-full" />
            <div className="w-8 h-1 bg-black/40 rounded-full" />
            <div className="w-14 h-1 bg-black/60 rounded-full" />
            <div className="w-10 h-1 bg-black/50 rounded-full" />
          </motion.div>
        </div>

        {/* Pixel "Page not found" Text */}
        <h1
          className="text-3xl sm:text-5xl font-extrabold tracking-wider text-[#FF4D4D] uppercase mt-6 mb-3 font-mono"
          style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
        >
          Page not found
        </h1>

        {/* "Go to home" Secondary CTA */}
        <Link
          href="/"
          className="text-xs sm:text-sm font-sans text-slate-600 hover:text-black hover:underline transition-colors mt-2"
        >
          Go to home
        </Link>
      </div>

      {/* Footer Bottom Spacing Anchor */}
      <div className="w-full h-8" />
    </div>
  );
}
