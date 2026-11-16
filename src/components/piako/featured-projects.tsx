"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/lib/piako/content";
import { revealUp } from "@/components/piako/motion";

const FEATURED = PROJECTS.slice(0, 3);
const MotionLink = motion.create(Link);

export function FeaturedProjects() {
  return (
    <section className="bg-ink text-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <motion.div {...revealUp()} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-olive" />
              <span className="eyebrow text-olive">Selected Work</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.08] font-bold tracking-tight max-w-2xl">
              Projects delivered across water, health and transport.
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 self-start lg:self-auto bg-olive hover:bg-olive-dark text-ink text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-colors shrink-0"
          >
            All projects
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 group-hover:bg-white transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {FEATURED.map((p, i) => (
            <MotionLink
              key={p.id}
              href="/projects"
              {...revealUp(i * 0.07)}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider bg-white/90 text-ink font-semibold px-2.5 py-1 rounded-full">
                  {p.sector}
                </span>
                <span className="absolute bottom-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-olive text-ink opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-olive font-semibold">
                  <MapPin className="w-3 h-3" />
                  {p.location}, {p.country}
                </div>
                <h3 className="font-display text-xl md:text-[1.4rem] font-bold leading-snug mt-2">
                  {p.title}
                </h3>
                <div className="text-sm text-white/45 mt-2">
                  {p.client} · {p.year}
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
