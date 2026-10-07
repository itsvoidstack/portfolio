"use client";

import { Hobby } from "@/data/hobbies";
import { motion } from "framer-motion";
import Image from "next/image";

interface HobbyCardProps {
  hobby: Hobby;
  isActive?: boolean;
  onClick?: () => void;
}

export default function HobbyCard({ hobby, isActive = false, onClick }: HobbyCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative shrink-0 w-[300px] sm:w-[350px] md:w-[380px] rounded-2xl border transition-all duration-500 overflow-hidden select-none p-6 md:p-7 flex flex-col justify-between h-[380px] ${
        isActive
          ? "bg-[#FAF8F5] border-[#D1D5DB] shadow-2xl shadow-black/10 ring-1 ring-black/5"
          : "bg-[#FAF8F5]/90 border-[#E5E7EB] hover:border-[#CCCCCC] shadow-lg shadow-black/5"
      }`}
    >
      {/* Category Tag & Number */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono mb-4 text-[#6B7280]">
          <span className="w-2.5 h-[2px] bg-[#84cc16]" />
          <span className="tracking-widest uppercase font-semibold text-[11px] text-[#4B5563]">
            {hobby.number} / {hobby.tag}
          </span>
        </div>

        {/* Title, Description & Small Visual */}
        <div className="flex items-start justify-between gap-4 mt-2">
          <div className="flex-1 pr-2">
            <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight text-[#111827] uppercase leading-none mb-3">
              {hobby.title}
            </h3>

            <p className="text-xs md:text-sm font-sans text-[#6B7280] leading-relaxed line-clamp-5 font-medium">
              {hobby.description}
            </p>
          </div>

          {/* Small Visual */}
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-xl overflow-hidden shrink-0 border border-black/10 shadow-md group-hover:shadow-lg transition-all duration-300">
            <Image
              src={hobby.image}
              alt={hobby.title}
              fill
              className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              sizes="(max-width: 768px) 128px, 144px"
            />
          </div>
        </div>
      </div>

      {/* Clean Bottom Indicator Dot (No CTAs/Arrows/MORE) */}
      <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-end font-mono text-xs text-[#6B7280] mt-auto">
        <span className="w-2 h-2 rounded-full bg-[#84cc16]" />
      </div>
    </motion.div>
  );
}
