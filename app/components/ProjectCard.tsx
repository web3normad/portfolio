"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import type { Project } from "@/lib/data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 25 });
  const transform = useMotionTemplate`translate(calc(${springX}px - 50%), calc(${springY}px - 50%))`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid cursor-none gap-6 border-t border-[var(--color-line)] py-10 md:grid-cols-[100px_1fr_auto] md:gap-10 md:py-14"
    >
      <span className="font-mono text-xs text-[var(--color-mute)]">{project.index}</span>

      <div>
        <h3 className="display text-5xl leading-none transition-colors group-hover:text-[var(--color-mute)] md:text-7xl lg:text-8xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-mute)] md:text-lg">
          {project.tagline}
        </p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-[var(--color-line)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-mute)]"
            >
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-2xl border-l-2 border-[var(--color-ink)] pl-4 text-sm text-[var(--color-ink)]">
          {project.outcome}
        </p>
      </div>

      <div className="flex items-end justify-end gap-2 md:flex-col md:items-end md:gap-3">
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-mute)]">
          {project.year}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
              data-cursor="hover"
            >
              <SiGithub />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live`}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]"
              data-cursor="hover"
            >
              <FiArrowUpRight />
            </a>
          )}
          {project.caseStudy && (
            <Link
              href={`/case-studies/${project.caseStudy}`}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--color-ink)] px-4 text-xs uppercase tracking-[0.18em] text-[var(--color-paper)]"
              data-cursor="hover"
            >
              Case study
              <FiArrowUpRight />
            </Link>
          )}
        </div>
      </div>

      {/* Floating hover label that tracks the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-32 w-32 items-center justify-center rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex"
        style={{ transform }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
          {project.caseStudy ? "Read →" : "View →"}
        </span>
      </motion.div>
    </motion.article>
  );
}
