"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let mounted = true;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      if (!mounted) return;
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) requestAnimationFrame(tick);
      else setTimeout(() => mounted && setDone(true), 250);
    };

    const id = requestAnimationFrame(tick);
    return () => {
      mounted = false;
      cancelAnimationFrame(id);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-paper)]"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.85, 0, 0.15, 1] } }}
        >
          <div className="container-x flex w-full items-end justify-between">
            <div>
              <p className="eyebrow mb-3">Emmanuel Doji</p>
              <p className="font-mono text-sm text-[var(--color-mute)]">Portfolio · 2026</p>
            </div>
            <p className="display text-7xl tabular-nums md:text-8xl">
              {String(progress).padStart(3, "0")}
              <span className="text-[var(--color-mute)]">%</span>
            </p>
          </div>
          <div className="container-x mt-6 w-full">
            <div className="h-px w-full bg-[var(--color-line)]">
              <motion.div
                className="h-px bg-[var(--color-ink)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
