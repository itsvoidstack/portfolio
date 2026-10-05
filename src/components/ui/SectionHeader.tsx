interface SectionHeaderProps {
  label: string; // e.g. "ABOUT / 01"
  heading: string;
  supporting?: string;
  className?: string;
}

export default function SectionHeader({
  label,
  heading,
  supporting,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 border-b border-[var(--border-subtle)] pb-6 ${className}`}>
      <div className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3 flex items-center gap-2">
        <span className="inline-block w-4 h-[1px] bg-[var(--accent)]" />
        {label}
      </div>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] uppercase">
        {heading}
      </h2>
      {supporting && (
        <p className="mt-3 text-sm md:text-base font-sans text-[var(--muted)] max-w-2xl">
          {supporting}
        </p>
      )}
    </div>
  );
}
