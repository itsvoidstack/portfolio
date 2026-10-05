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
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono tracking-widest uppercase transition-all duration-200 group cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--foreground)] text-white hover:bg-[var(--accent)] border border-transparent shadow-xs",
    outline:
      "border border-[var(--foreground)]/30 text-[var(--foreground)] hover:border-[var(--foreground)] hover:bg-[var(--foreground)]/5",
    secondary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-xs",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
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
