"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface QuickMessageFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuickMessageFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  submit?: string;
}

const SUBJECT_OPTIONS = [
  "Just saying hello",
  "Project inquiry",
  "Collaboration",
  "Question",
  "Other",
];

export default function QuickMessageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState<QuickMessageFormData>({
    name: "",
    email: "",
    subject: "Just saying hello",
    message: "",
  });

  const [errors, setErrors] = useState<QuickMessageFormErrors>({});

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

  const validateForm = (): boolean => {
    const newErrors: QuickMessageFormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    const endpoint = process.env.NEXT_PUBLIC_QUICK_MESSAGE_ENDPOINT;

    if (!endpoint) {
      setIsSubmitting(false);
      setSubmitError(
        "Backend endpoint is not configured. Please add NEXT_PUBLIC_QUICK_MESSAGE_ENDPOINT to your .env.local file."
      );
      return;
    }

    try {
      // Send payload to Google Apps Script Web App Endpoint
      const response = await fetch(endpoint, {
        method: "POST",
        // 'text/plain;charset=utf-8' prevents CORS preflight OPTIONS request issues on Apps Script
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result && result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        setIsSubmitting(false);
        setSubmitError(
          result?.error || "Failed to deliver message. Please try again later."
        );
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError(
        "Network error or CORS restriction. Please check endpoint configuration and connection."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Just saying hello",
      message: "",
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        id="quick-message-trigger"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open Quick Message Panel"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3.5 bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] font-mono text-xs font-semibold shadow-xl hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]" />
        </span>
        <MessageSquare size={16} className="text-[var(--accent)] group-hover:scale-110 transition-transform" />
        <span className="uppercase tracking-wider">Quick Msg</span>
      </motion.button>

      {/* Floating Message Panel & Backdrop */}
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
                  className="p-1.5 text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-alt)] border border-transparent hover:border-[var(--border)] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Success State */}
              {isSubmitted ? (
                <div className="py-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mx-auto mb-4 border border-[var(--accent)]/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-display text-lg font-bold uppercase text-[var(--foreground)] mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-xs font-sans text-[var(--muted)] leading-relaxed mb-6">
                    Thank you for reaching out. Your message has been delivered directly to my Gmail inbox.
                  </p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex-1 py-2.5 border border-[var(--border)] font-mono text-xs uppercase font-semibold text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-alt)] transition-colors"
                    >
                      Send Another
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase font-semibold transition-colors"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                  {/* General Submit Error Notice */}
                  {submitError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 font-mono text-[11px] flex items-start gap-2">
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Hidden Honeypot Field (Bot Detection) */}
                  <div className="hidden aria-hidden=true font-mono text-[0px] h-0 overflow-hidden opacity-0 pointer-events-none select-none">
                    <label htmlFor="qm-hp">Do not fill this field</label>
                    <input
                      id="qm-hp"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={(formData as any).website || ""}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value } as any)}
                    />
                  </div>

                  {/* Name Input */}
                  <div>
                    <label htmlFor="qm-name" className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5">
                      Name <span className="text-[var(--muted)] font-normal">(Optional)</span>
                    </label>
                    <input
                      id="qm-name"
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-hidden focus:border-[var(--accent)] transition-colors font-sans text-xs"
                    />
                  </div>


                  {/* Email Input */}
                  <div>
                    <label htmlFor="qm-email" className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="qm-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[var(--surface-alt)] border text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-hidden transition-colors font-sans text-xs ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-[var(--border)] focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1 text-[11px] text-red-500 font-mono mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label htmlFor="qm-subject" className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5">
                      Subject
                    </label>
                    <select
                      id="qm-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--foreground)] focus:outline-hidden focus:border-[var(--accent)] transition-colors font-sans text-xs cursor-pointer"
                    >
                      {SUBJECT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[var(--surface)] text-[var(--foreground)]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="qm-message" className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="qm-message"
                      required
                      rows={4}
                      placeholder="How can I help you?"
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-[var(--surface-alt)] border text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-hidden transition-colors font-sans text-xs resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[var(--border)] focus:border-[var(--accent)]"
                      }`}
                    />
                    {errors.message && (
                      <div className="flex items-center gap-1 text-[11px] text-red-500 font-mono mt-1">
                        <AlertCircle size={12} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <Send size={14} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

