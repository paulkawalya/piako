"use client";

import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/piako/content";

export function Services() {
  return (
    <section id="services" className="bg-ink text-white section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">02 — Our Services</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight">
              Sixteen disciplines, one integrated consultancy.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-white/65 leading-relaxed">
              From masterplanning and engineering design to programme cost
              consultancy and continuous professional development, every Piako
              service is built to deliver practical, sustainable outcomes.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="group relative bg-ink hover:bg-ink-soft transition-colors p-7 md:p-8 min-h-[260px] flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-olive">{s.n}</span>
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-olive group-hover:rotate-45 transition-all duration-300" />
              </div>
              <h3 className="font-display text-lg md:text-[1.15rem] font-semibold leading-snug text-white mb-3">
                {s.name}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mt-auto">
                {s.summary}
              </p>
            </article>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-14 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-ink-soft to-ink border border-white/10 rounded-2xl p-7 md:p-10">
          <div>
            <div className="eyebrow text-olive mb-2">Service detail pages</div>
            <p className="font-display text-xl md:text-2xl text-white max-w-2xl">
              Detailed service pages are available on request. Tell us which
              capability you need &mdash; we will send the relevant scope, case
              studies and team profile.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white font-semibold px-6 py-4 rounded-full whitespace-nowrap transition-colors"
          >
            Request a service brief
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
