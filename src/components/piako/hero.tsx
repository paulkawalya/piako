"use client";

import Link from "next/link";
import { ArrowUpRight, MapPin, Star, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-bone pt-4 md:pt-5">
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 md:px-8">
        {/* Large rounded hero card */}
        <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.25rem] bg-[#F2F3F4]">
          <div className="grid lg:grid-cols-12 lg:min-h-[600px] xl:min-h-[640px]">
            {/* Left: copy */}
            <div className="relative z-10 lg:col-span-6 p-7 sm:p-10 md:p-14 lg:p-11 xl:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-6 animate-rise" style={{ animationDelay: "0.05s" }}>
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                  Engineering · Infrastructure · Development
                </span>
              </div>

              <h1
                className="font-display text-[2.35rem] leading-[1.04] sm:text-5xl lg:text-[3.05rem] xl:text-[3.6rem] font-extrabold tracking-[-0.03em] text-ink animate-rise"
                style={{ animationDelay: "0.12s" }}
              >
                Engineering Tomorrow.
                <br />
                Building{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Sustainable</span>
                  <span className="absolute left-0 right-0 bottom-1.5 md:bottom-2 h-3 md:h-4 bg-olive/80 -z-0 origin-left animate-draw" />
                </span>{" "}
                Infrastructure.
              </h1>

              <p
                className="mt-6 max-w-md text-sm md:text-[15px] text-ink/60 leading-relaxed animate-rise"
                style={{ animationDelay: "0.22s" }}
              >
                We deliver integrated engineering, planning and infrastructure
                consultancy solutions that transform development ambitions into
                practical, sustainable outcomes across Africa.
              </p>

              <div
                className="mt-8 flex flex-wrap items-center gap-3 animate-rise"
                style={{ animationDelay: "0.3s" }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-ink font-bold text-sm pl-5 pr-1.5 py-1.5 rounded-full transition-colors"
                >
                  Discuss Project
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 hover:text-ink px-3 py-3 transition-colors"
                >
                  Explore services
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div
                className="mt-8 flex items-center gap-3 animate-rise"
                style={{ animationDelay: "0.38s" }}
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/70 border border-ink/5">
                  <MapPin className="w-4 h-4 text-ink/70" />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-ink">
                    Kampala, Uganda
                  </div>
                  <div className="text-xs text-ink/50">
                    Plot 7, North Park Plaza, Bweyogerere
                  </div>
                </div>
              </div>

              <div
                className="mt-10 hidden sm:block animate-rise"
                style={{ animationDelay: "0.46s" }}
              >
                <TestimonialCard />
              </div>
            </div>

            {/* Right: photo */}
            <div className="hidden lg:block lg:col-span-6 relative overflow-hidden">
              <img
                src="/images/hero-workers.png"
                alt="Piako engineers and construction crew on site"
                className="absolute inset-0 w-full h-full object-cover animate-settle"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F2F3F4] via-[#F2F3F4]/15 to-transparent" />
              <RotatingSeal />
              <Link
                href="/projects"
                className="group absolute bottom-8 right-8 inline-flex items-center gap-2 bg-white/95 hover:bg-white text-ink text-xs font-semibold pl-4 pr-1.5 py-1.5 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Our projects
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile image band */}
          <div className="lg:hidden relative h-[300px] sm:h-[380px] overflow-hidden">
            <img
              src="/images/hero-workers.png"
              alt="Piako engineers and construction crew on site"
              className="w-full h-full object-cover animate-settle"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            <RotatingSeal />
          </div>
        </div>
      </div>
    </section>
  );
}



/* Rotating circular seal badge with curved text */
function RotatingSeal() {
  return (
    <div className="absolute top-7 right-7 md:top-9 md:right-9 z-20 animate-rise" style={{ animationDelay: "0.5s" }}>
      <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 animate-float">
        <div className="absolute inset-0 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
            <defs>
              <path
                id="hero-seal-circle"
                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
            </defs>
            <circle cx="50" cy="50" r="49" fill="#F6B400" />
            <text
              fill="#0E2233"
              fontSize="7.2"
              fontWeight="800"
              letterSpacing="1.6"
            >
              <textPath href="#hero-seal-circle" startOffset="0%">
                PIAKO CONSULT · ENGINEERING · INFRASTRUCTURE ·
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-ink flex items-center justify-center">
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-olive" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Dark testimonial / rating card */
function TestimonialCard() {
  return (
    <div className="max-w-[280px]">
      <div className="bg-ink text-white rounded-2xl p-5 md:p-6 shadow-2xl shadow-ink/20 transition-transform duration-500 hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] uppercase tracking-[0.16em] text-white/55">
            Consumers
            <br />
            Testimonials
          </div>
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/15 text-olive">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-olive to-olive-dark border-2 border-ink flex items-center justify-center text-[10px] font-bold text-ink">
              AK
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 border-2 border-ink flex items-center justify-center text-[10px] font-bold text-ink">
              JM
            </div>
            <div className="w-8 h-8 rounded-full bg-ink-soft border-2 border-ink flex items-center justify-center text-[10px] font-bold text-white">
              +
            </div>
          </div>
          <div className="text-[11px] text-white/55 leading-tight">
            Trusted by
            <br />
            <span className="text-white font-semibold">100+ clients</span>
          </div>
        </div>
        <div className="h-px bg-white/10 my-3" />
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="font-display text-3xl font-bold leading-none">
              4.9<span className="text-base text-olive">/5</span>
            </div>
            <div className="flex items-center gap-0.5 mt-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-olive text-olive" />
              ))}
            </div>
          </div>
          <Link
            href="/insights"
            className="text-[10px] uppercase tracking-wider border border-white/25 rounded-full px-3 py-1.5 text-white/80 hover:bg-white/10 transition-colors"
          >
            Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}

