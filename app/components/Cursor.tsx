"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });
  const [hovered, setHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const idle = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest("a, button, [data-cursor='hover']");
      setHovered(interactive);
      if (idle.current) window.clearTimeout(idle.current);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-ink)] mix-blend-difference"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-ink)] mix-blend-difference"
        style={{ x: springX, y: springY }}
        animate={{
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
          opacity: hovered ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
    </>
  );
}
