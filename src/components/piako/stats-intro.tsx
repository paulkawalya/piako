"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Globe2, Workflow, Building2 } from "lucide-react";
import { revealUp } from "@/components/piako/motion";

const STATS = [
  {
    icon: Layers,
    value: "16+",
    label: "Consultancy Services",
    sub: "Delivering integrated engineering across the full project lifecycle.",
  },
  {
    icon: Globe2,
    value: "3",
    label: "Countries of Experience",
    sub: "Project delivery across Uganda, Malawi and Nigeria.",
  },
  {
    icon: Workflow,
    value: "12+",
    label: "Engineering Disciplines",
    sub: "Technical depth coordinated under one consultancy.",
  },
  {
    icon: Building2,
    value: "100%",
    label: "End-to-End Delivery",
    sub: "From feasibility and design through to construction supervision.",
  },
];

export function StatsIntro() {
  return (
    <section id="about" className="bg-white pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header: eyebrow left, statement right */}
        <motion.div {...revealUp()} className="grid lg:grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-3 pt-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span className="eyebrow text-olive">About Us</span>
            </div>
            <p className="text-sm text-ink/45 leading-relaxed max-w-[220px]">
              Innovative Solutions for Modern Infrastructure
            </p>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-[1.9rem] sm:text-4xl lg:text-[2.75rem] leading-[1.14] font-bold tracking-tight text-ink max-w-4xl">
              Committed to Redefining Engineering Standards with Innovation,
              Expertise, and Unwavering Dedication to Excellence
            </h2>
          </div>
        </motion.div>

        {/* Image left + 2x2 stat cards right */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Image with overlapping badge */}
          <motion.div
            {...revealUp(0.04)}
            className="lg:col-span-6 relative rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <img
              src="/images/about-stats.png"
              alt="Mulago Specialised Hospital Maternal & Neonatal Centre"
              className="w-full aspect-[4/3] md:aspect-[16/11] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 to-transparent" />
            <Link
              href="/projects"
              className="group absolute bottom-6 left-6 md:bottom-8 md:left-8 inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-olive text-ink shadow-xl hover:bg-olive-dark transition-colors"
            >
              <div className="text-center">
                <div className="font-display text-lg md:text-xl font-bold leading-none">
                  Projects
                </div>
                <div className="text-[10px] uppercase tracking-wider mt-1 text-ink/65">
                  View all
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 2x2 stat cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4 md:gap-5">
            {STATS.map((s, i) => (
              <motion.article
                key={s.label}
                {...revealUp(0.1 + i * 0.06)}
                className="group bg-white border border-ink/10 rounded-2xl p-6 md:p-7 card-lift flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="font-display text-4xl md:text-[2.75rem] font-bold text-ink leading-none tracking-tight">
                    {s.value}
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-bone text-ink/70 group-hover:bg-olive group-hover:text-ink group-hover:-rotate-6 transition-all duration-300">
                    <s.icon className="w-[18px] h-[18px]" />
                  </div>
                </div>
                <div className="text-[15px] font-bold text-ink">{s.label}</div>
                <p className="text-xs text-ink/55 leading-relaxed mt-2">
                  {s.sub}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
