import RevealText from "./RevealText";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ index, eyebrow, title, className = "" }: Props) {
  return (
    <header className={`mb-12 grid gap-6 md:mb-20 md:grid-cols-[auto_1fr] md:gap-12 ${className}`}>
      <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
        <span className="font-mono text-xs text-[var(--color-mute)]">{index}</span>
        <span className="hairline w-12 md:w-px md:flex-1" />
      </div>
      <div>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <RevealText
          as="h2"
          className="display text-5xl md:text-7xl lg:text-[7.5rem]"
          text={title}
        />
      </div>
    </header>
  );
}
