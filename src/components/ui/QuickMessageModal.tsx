"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuickMessageForm from "@/components/ui/QuickMessageForm";

export default function QuickMessageModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Keyboard trap & ESC listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);


  return (
    <>
      {/* Floating Trigger Button with Message Bubble Wobble & Alternating Pulse */}
      <motion.button
        id="quick-message-trigger"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{
          scale: 1.05,
          rotate: [0, -3, 3, -2, 0],
          transition: { type: "spring", stiffness: 400, damping: 15 },
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Quick Message Panel"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] font-mono text-xs font-semibold shadow-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all group cursor-pointer"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" style={{ animationDuration: "2s" }} />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)] animate-pulse" />
        </span>
        <MessageSquare size={16} className="text-[var(--accent)] group-hover:scale-110 group-hover:rotate-12 transition-transform" />
        <span className="uppercase tracking-wider">Quick Msg</span>
      </motion.button>


      {/* Floating Message Panel Modal & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
            {/* Backdrop click to dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0"
              aria-hidden="true"
            />

            {/* Panel Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-md bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 shadow-2xl z-10 my-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-[var(--border-subtle)] pb-4 mb-6">
                <div>
                  <div className="font-mono text-[10px] text-[var(--accent)] uppercase tracking-widest font-semibold flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    DIRECT INBOX
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[var(--foreground)]">
                    Quick Message
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Quick Message Modal"
                  className="p-1.5 text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-alt)] border border-transparent hover:border-[var(--border)] transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Shared Quick Message Form Component */}
              <QuickMessageForm isModal={true} onSuccess={() => {}} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}




