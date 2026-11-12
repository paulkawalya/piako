"use client";

import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import { HIGHLIGHTS, COUNTRIES } from "@/lib/piako/content";

export function Hero() {
  return (
    <section id="home" className="relative bg-ink text-white overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Aerial view of African infrastructure development at dusk"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        <div className="absolute inset-0 grid-overlay opacity-60" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8 pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left column */}
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">
                Engineering · Infrastructure · Development
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.02] font-bold tracking-tight">
              Engineering Tomorrow.
              <br />
              <span className="text-white/90">Building</span>{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-olive">Sustainable</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-olive/40"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 8 Q 100 0 198 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              <span className="text-white/90">Infrastructure.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
              We deliver integrated engineering, planning and infrastructure
              consultancy solutions that transform development ambitions into
              practical, sustainable outcomes across Africa.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white font-semibold px-7 py-4 rounded-full transition-colors"
              >
                Request a consultation
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-7 py-4 rounded-full transition-colors"
              >
                Explore services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Country pills */}
            <div className="mt-12 flex flex-wrap items-center gap-2.5">
              <span className="text-xs text-white/40 mr-1">Delivering in</span>
              {COUNTRIES.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 text-xs text-white/80 border border-white/15 rounded-full px-3 py-1.5"
                >
                  <MapPin className="w-3 h-3 text-olive" />
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right column - floating stat card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-olive/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-7">
                <div className="flex items-center gap-2 text-xs text-olive mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
                  Active footprint
                </div>
                <div className="space-y-6">
                  <Stat label="Consultancy services" value="16" />
                  <div className="h-px bg-white/10" />
                  <Stat label="Countries of project experience" value="03" />
                  <div className="h-px bg-white/10" />
                  <Stat label="End-to-end delivery" value="Yes" />
                  <div className="h-px bg-white/10" />
                  <Stat label="Multi-sector expertise" value="Yes" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="relative border-t border-white/10 bg-ink/80 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="px-4 py-6 md:py-8 flex flex-col gap-1"
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-white">
                  {h.stat}
                </div>
                <div className="text-xs md:text-sm text-white/55">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-xs text-white/55">{label}</span>
      <span className="font-display text-xl font-bold text-white">{value}</span>
    </div>
  );
}
