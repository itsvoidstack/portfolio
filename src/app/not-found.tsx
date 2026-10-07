import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Shivam Shah",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col items-center justify-center px-6 text-center">
      <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4">
        ERROR / 404
      </div>
      <h1 className="font-display text-5xl sm:text-7xl font-black uppercase mb-4 tracking-tighter">
        PAGE NOT FOUND<span className="text-[var(--accent)]">.</span>
      </h1>
      <p className="font-sans text-sm sm:text-base text-[var(--muted)] max-w-md mb-8">
        The route you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[var(--foreground)] text-[var(--background)] hover:bg-[var(--accent)] hover:text-white transition-all font-mono text-xs font-bold uppercase tracking-widest"
      >
        RETURN TO HOME
      </Link>
    </div>
  );
}
