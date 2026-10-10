import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "secondary";
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  showArrow = true,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono tracking-widest uppercase transition-all duration-300 group cursor-pointer overflow-hidden";

  const variants = {
    primary:
      "bg-[var(--foreground)] text-white hover:bg-[var(--accent)] border border-transparent shadow-xs",
    outline:
      "border border-[var(--foreground)]/30 text-[var(--foreground)] hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
    secondary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-xs",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          className="relative z-10 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
