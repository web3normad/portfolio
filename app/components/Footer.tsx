import { SOCIALS } from "@/lib/data/socials";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] pb-8 text-[var(--color-paper)]/70">
      <div className="container-x">
        <div className="hairline mb-8 bg-[var(--color-paper)]/15" />
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em]">
            © {new Date().getFullYear()} Emmanuel Doji · Built with Next.js + Claude Code
          </p>
          <ul className="flex flex-wrap gap-5 font-mono text-[10px] uppercase tracking-[0.18em]">
            <li>
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                GitHub
              </a>
            </li>
            <li>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" data-cursor="hover">
                Twitter
              </a>
            </li>
            <li>
              <a href={`mailto:${SOCIALS.email}`} data-cursor="hover">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
