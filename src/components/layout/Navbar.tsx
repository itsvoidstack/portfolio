"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "SKILLS", href: "#skills" },
  { name: "JOURNEY", href: "#journey" },
  { name: "HOBBIES", href: "#hobbies" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Identity */}
        <Link
          href="#"
          className="font-display font-bold text-sm tracking-wider uppercase text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
        >
          SHIVAM SHAH
        </Link>

        {/* Right: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono tracking-widest text-[var(--muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group py-1 text-[var(--foreground)]/80 hover:text-[var(--accent)] transition-colors"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Far Right: Portfolio Year Annotation */}
        <div className="hidden sm:flex items-center space-x-3 text-xs font-mono tracking-widest text-[var(--muted)]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
          <span>PORTFOLIO 2026</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[var(--foreground)] focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--background)] border-b border-[var(--border)] px-6 py-6 transition-all duration-200">
          <nav className="flex flex-col space-y-4 font-mono text-sm tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--foreground)] hover:text-[var(--accent)] py-1 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-[var(--border)] text-xs text-[var(--muted)] flex items-center justify-between">
              <span>PORTFOLIO 2026</span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                AVAILABLE
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
