const TOKENS = [
  "Next.js",
  "TypeScript",
  "Rust",
  "Tauri",
  "Solidity",
  "viem",
  "Sanity",
  "Claude Code",
  "Turborepo",
  "PostgreSQL",
  "React",
  "Web3",
];

export default function Marquee() {
  const items = [...TOKENS, ...TOKENS];
  return (
    <section aria-label="Tech stack marquee" className="border-y border-[var(--color-line)] py-6">
      <div className="flex overflow-hidden">
        <div className="marquee-track flex shrink-0 items-center gap-12 pr-12 font-display text-4xl md:text-6xl">
          {items.map((t, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="italic text-[var(--color-mute)]">{t}</span>
              <span aria-hidden className="text-[var(--color-line)]">
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
