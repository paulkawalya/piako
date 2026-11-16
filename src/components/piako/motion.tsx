"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

/** Shared easing for every reveal and route transition. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Scroll-reveal props for existing motion elements. Keeping this as a helper
 * means cards and sections can animate without adding wrapper elements that
 * would disturb the grid layout.
 */
export function revealUp(delay = 0, distance = 20): MotionProps {
  return {
    initial: { opacity: 0, y: distance },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, delay, ease: EASE },
    },
    viewport: { once: true, amount: "some" },
  };
}

/** Generic block-level reveal for headers and prose. */
export function Reveal({
  children,
  className,
  delay = 0,
  distance = 20,
  amount = "some",
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  amount?: number | "some" | "all";
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      {...revealUp(delay, distance)}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
