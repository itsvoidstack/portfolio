"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled runtime error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center px-6 text-center">
      <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4">
        SYSTEM / ERROR
      </div>
      <h1 className="font-display text-4xl sm:text-6xl font-black uppercase mb-4 tracking-tighter">
        SOMETHING WENT WRONG<span className="text-[var(--accent)]">.</span>
      </h1>
      <p className="font-sans text-sm sm:text-base text-[var(--muted)] max-w-md mb-8">
        An unexpected error occurred. Please try reloading the page.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[var(--accent)] text-white hover:opacity-90 transition-all font-mono text-xs font-bold uppercase tracking-widest cursor-pointer"
        >
          TRY AGAIN
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] transition-all font-mono text-xs font-bold uppercase tracking-widest"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}
