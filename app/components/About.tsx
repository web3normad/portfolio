"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "5+", label: "Years shipping production" },
  { value: "12", label: "Packages in Rabit SDK" },
  { value: "9", label: "Sanity document types modelled" },
  { value: "100%", label: "Built with Claude Code" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-40">
      <div className="container-x">
        <SectionHeading index="01" eyebrow="About" title={"A senior engineer\nbuilding with AI in the loop."} />

        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7 md:col-start-3">
            <p className="text-lg leading-relaxed text-[var(--color-ink)] md:text-2xl md:leading-snug">
              I build production software at the seam of <em className="italic">web,</em>{" "}
              <em className="italic">Web3,</em> and <em className="italic">AI</em>. From an embedded
              wallet SDK with non-custodial key recovery to an offline-first AI tutor on Tauri + Rust,
              I&apos;ve shipped tooling that real teams ship on top of.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-mute)] md:text-lg">
              I lead end-to-end CMS migrations, write the schema, design the editor experience, and
              wire Claude Code straight into the publishing flow. Marketing teams ship content by
              prompting; I ship the rails.
            </p>
          </div>

          <div className="md:col-span-10 md:col-start-3">
            <div className="hairline mb-10 mt-6" />
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  <dt className="display text-5xl md:text-6xl">{s.value}</dt>
                  <dd className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-mute)]">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
