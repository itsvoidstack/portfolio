import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "WORK", href: "#work" },
  { name: "SKILLS", href: "#skills" },
  { name: "JOURNEY", href: "#journey" },
  { name: "HOBBIES", href: "#hobbies" },
  { name: "CONTACT", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-xs tracking-wider uppercase text-[var(--foreground)]">
            SHIVAM SHAH
          </span>
          <span className="text-[10px] font-mono text-[var(--muted)]">/ 08 — FOOTER</span>
        </div>

        {/* Middle: Minimal Navigation */}
        <nav className="flex flex-wrap justify-center gap-6 text-[11px] font-mono tracking-widest text-[var(--muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[var(--accent)] transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Verified Socials & Copyright */}
        <div className="flex items-center gap-6 text-[11px] font-mono text-[var(--muted)] tracking-wider">
          <a
            href="https://github.com/itsvoidstack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] flex items-center gap-1 transition-colors duration-200"
          >
            GITHUB <ArrowUpRight size={11} />
          </a>
          <a
            href="https://linkedin.com/in/shivam-shah-ab0a51411"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] flex items-center gap-1 transition-colors duration-200"
          >
            LINKEDIN <ArrowUpRight size={11} />
          </a>
          <span>© 2026 SHIVAM SHAH.</span>
        </div>
      </div>
    </footer>
  );
}
