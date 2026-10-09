"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";

export interface QuickMessageFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

export interface QuickMessageFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const SUBJECT_OPTIONS = [
  "Just saying hello",
  "Project inquiry",
  "Collaboration",
  "Question",
  "Other",
];

// Global mutex flag to prevent simultaneous submissions across both form components
let isGlobalSubmitting = false;

export default function QuickMessageForm({
  onSuccess,
  isModal = false,
}: {
  onSuccess?: () => void;
  isModal?: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState<QuickMessageFormData>({
    name: "",
    email: "",
    subject: "Just saying hello",
    message: "",
    website: "",
  });

  const [errors, setErrors] = useState<QuickMessageFormErrors>({});

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

    // Prevent simultaneous submission across forms
    if (isGlobalSubmitting || isSubmitting) return;

    if (!validateForm()) return;

    isGlobalSubmitting = true;
    setIsSubmitting(true);

    const endpoint = process.env.NEXT_PUBLIC_QUICK_MESSAGE_ENDPOINT;

    if (!endpoint) {
      isGlobalSubmitting = false;
      setIsSubmitting(false);
      setSubmitError(
        "Backend endpoint is not configured. Please check NEXT_PUBLIC_QUICK_MESSAGE_ENDPOINT in .env.local."
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result && result.success) {
        setIsSubmitting(false);
        isGlobalSubmitting = false;
        setIsSubmitted(true);
        if (onSuccess) onSuccess();
      } else {
        setIsSubmitting(false);
        isGlobalSubmitting = false;
        setSubmitError(
          result?.error || "Failed to deliver message. Please try again later."
        );
      }
    } catch (err) {
      setIsSubmitting(false);
      isGlobalSubmitting = false;
      setSubmitError(
        "Network error or connection failure. Please check endpoint configuration."
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Just saying hello",
      message: "",
      website: "",
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
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
        <button
          type="button"
          onClick={handleReset}
          className="px-6 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase font-semibold transition-colors shadow-xs"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
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
        <label htmlFor={`qm-hp-${isModal ? "modal" : "inline"}`}>Do not fill this field</label>
        <input
          id={`qm-hp-${isModal ? "modal" : "inline"}`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website || ""}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name Input */}
        <div>
          <label
            htmlFor={`qm-name-${isModal ? "modal" : "inline"}`}
            className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5"
          >
            Name <span className="text-[var(--muted)] font-normal">(Optional)</span>
          </label>
          <input
            id={`qm-name-${isModal ? "modal" : "inline"}`}
            type="text"
            placeholder="e.g. Alex Morgan"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[var(--surface-alt)] border border-[var(--border)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-hidden focus:border-[var(--accent)] transition-colors font-sans text-xs"
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor={`qm-email-${isModal ? "modal" : "inline"}`}
            className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id={`qm-email-${isModal ? "modal" : "inline"}`}
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
      </div>

      {/* Subject Dropdown */}
      <div>
        <label
          htmlFor={`qm-subject-${isModal ? "modal" : "inline"}`}
          className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5"
        >
          Subject
        </label>
        <select
          id={`qm-subject-${isModal ? "modal" : "inline"}`}
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
        <label
          htmlFor={`qm-message-${isModal ? "modal" : "inline"}`}
          className="block font-mono text-[11px] uppercase tracking-wider text-[var(--foreground)] font-medium mb-1.5"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id={`qm-message-${isModal ? "modal" : "inline"}`}
          required
          rows={3}
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
          disabled={isSubmitting || isGlobalSubmitting}
          className="w-full py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-mono text-xs uppercase font-semibold tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
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
  );
}
