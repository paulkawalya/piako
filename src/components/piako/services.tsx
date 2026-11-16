"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/piako/page-header";
import { revealUp } from "@/components/piako/motion";
import { SERVICES } from "@/lib/piako/content";

export function Services() {
  return (
    <section id="services" className="bg-ink text-white section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <PageHeader
          eyebrow="Our Services"
          tone="dark"
          title="Engineering services built around your project."
          intro={
            <p>
              From masterplanning and engineering design to programme
              management, every service is tailored to deliver practical,
              sustainable outcomes.
            </p>
          }
          actions={
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-ink text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-colors"
            >
              Discuss a service
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          }
        />

        {/* All 16 service rows matching the exact corporate brand layout */}
        <div className="divide-y divide-white/10 border-t border-white/10">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              id={`service-${s.n}`}
              {...revealUp(Math.min(i * 0.04, 0.25))}
              className="group grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center py-10 md:py-14 lg:py-16 scroll-mt-28"
            >
              {/* Left Column: Number, Title, Summary, Action Link */}
              <div className="md:col-span-7">
                <div className="text-xs md:text-sm font-mono text-olive font-semibold tracking-wider mb-2.5 md:mb-3">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.16] font-bold text-white max-w-xl">
                  {s.name}
                </h3>
                <p className="text-sm md:text-base text-slate-300/80 leading-relaxed max-w-lg mt-3.5 mb-6 md:mb-7">
                  {s.summary}
                </p>
                <Link
                  href={`/contact?service=${encodeURIComponent(s.name)}`}
                  className="group/link inline-flex items-center gap-1.5 text-sm md:text-base font-semibold text-white/95 hover:text-olive transition-colors"
                >
                  <span>{s.link}</span>
                  <ArrowUpRight className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>

              {/* Right Column: Rounded 16:10 Image Card */}
              <div className="md:col-span-5 flex justify-end">
                <div className="w-full max-w-[480px] overflow-hidden rounded-2xl md:rounded-[22px] border border-white/10 shadow-2xl bg-white/5">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom consultation prompt */}
        <motion.div
          {...revealUp()}
          className="mt-14 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-ink-soft to-ink border border-white/10 rounded-2xl p-7 md:p-10"
        >
          <div>
            <div className="eyebrow text-olive mb-2">Service Briefs on Demand</div>
            <p className="font-display text-xl md:text-2xl text-white max-w-2xl">
              Need a bespoke scope of work, methodology proposal, or engineer
              curriculum vitae for your project tender?
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-ink text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-colors shrink-0"
          >
            Request project brief
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 group-hover:bg-white transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
