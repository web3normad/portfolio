"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Magnetic from "./Magnetic";
import RevealText from "./RevealText";
import { SOCIALS } from "@/lib/data/socials";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--color-ink)] py-32 text-[var(--color-paper)] md:py-48">
      <div className="container-x">
        <p className="eyebrow mb-6 text-[var(--color-paper)]/60">06 · Contact</p>
        <RevealText
          as="h2"
          className="display text-6xl leading-[0.95] md:text-9xl lg:text-[12rem]"
          text={"Let's build\nsomething sharp."}
        />
        <p className="mt-10 max-w-xl text-lg text-[var(--color-paper)]/70 md:text-xl">
          Open to senior full-stack, Web3, and AI-tooling contracts. I respond within 24 hours,
          usually faster.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <motion.a
            href={`mailto:${SOCIALS.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block w-fit font-display text-3xl underline decoration-[var(--color-paper)]/40 underline-offset-8 transition-colors hover:decoration-[var(--color-paper)] md:text-5xl"
            data-cursor="hover"
          >
            {SOCIALS.email}
          </motion.a>

          <Magnetic strength={0.45}>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="grid h-32 w-32 place-items-center rounded-full bg-[var(--color-paper)] text-[var(--color-ink)] md:h-40 md:w-40"
            >
              <span className="text-center font-mono text-[10px] uppercase tracking-[0.18em]">
                Get in
                <br />
                touch <FiArrowUpRight className="ml-1 inline" />
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-20 grid gap-10 border-t border-[var(--color-paper)]/15 pt-10 md:grid-cols-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
              Based in
            </p>
            <p className="mt-2 font-display text-2xl">Jos, Nigeria</p>
            <p className="text-sm text-[var(--color-paper)]/60">WAT · UTC+1</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
              Phone
            </p>
            <p className="mt-2 font-display text-2xl">{SOCIALS.phone}</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
              Looking for
            </p>
            <p className="mt-2 font-display text-2xl">Contract · Senior</p>
            <p className="text-sm text-[var(--color-paper)]/60">Full-time considered</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-paper)]/50">
              Response time
            </p>
            <p className="mt-2 font-display text-2xl">{"< 24h"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
