"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/piako/content";
import { revealUp } from "@/components/piako/motion";

const PREVIEW = [0, 1, 4, 5, 8, 11].map((i) => SERVICES[i]);
const MotionLink = motion.create(Link);

export function HomeServices() {
  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <motion.div {...revealUp()} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span className="eyebrow text-olive">Our Services</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.08] font-bold tracking-tight text-ink max-w-2xl">
              Integrated capability, from first study to final handover.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-sm text-ink/60 leading-relaxed max-w-xs">
              Sixteen consultancy services coordinated under one accountable
              team.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-ink text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-colors shrink-0"
            >
              All services
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PREVIEW.map((s, i) => (
            <MotionLink
              key={s.n}
              href="/services"
              {...revealUp(i * 0.055)}
              className="group flex flex-col bg-white border border-ink/10 rounded-2xl p-6 md:p-7 card-lift hover:border-ink/25"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-ink/40">{s.n}</span>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-ink/10 text-ink/50 group-hover:bg-olive group-hover:border-olive group-hover:text-ink transition-all duration-300">
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-ink leading-snug">
                {s.name}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed mt-3">
                {s.summary}
              </p>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
