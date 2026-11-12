"use client";

import { ArrowUpRight, MapPin, Star, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-bone pt-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Rounded hero card */}
        <div className="relative rounded-[1.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-white md:min-h-[620px] lg:min-h-[680px]">
          {/* Background image - desktop: right side bleed */}
          <div className="absolute inset-0 hidden md:block">
            {/* Desktop: image bleeding right */}
            <div className="absolute inset-y-0 right-0 w-[62%] lg:w-[58%]">
              <img
                src="/images/hero-workers.png"
                alt="Piako engineers and construction crew on site"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Desktop gradient fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white/10" />
          </div>

          {/* Content */}
          <div className="relative grid md:grid-cols-12 md:min-h-[620px] lg:min-h-[680px]">
            {/* Left column - text */}
            <div className="md:col-span-6 lg:col-span-5 p-7 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-6">
                <span className="olive-rule" />
                <span className="eyebrow text-olive">
                  Engineering · Infrastructure · Development
                </span>
              </div>

              <h1 className="font-display text-[2rem] leading-[1.08] sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-tight text-ink">
                Engineering Tomorrow.
                <br />
                Building Sustainable{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Infrastructure.</span>
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-3 text-olive"
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
                </span>
              </h1>

              <p className="mt-6 max-w-md text-sm md:text-base text-ink/65 leading-relaxed">
                We deliver integrated engineering, planning and infrastructure
                consultancy solutions that transform development ambitions into
                practical, sustainable outcomes across Africa.
              </p>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white font-semibold px-6 py-3.5 rounded-full transition-colors"
                >
                  Discuss project
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#services"
                  className="group inline-flex items-center justify-center gap-2 border border-ink/20 hover:border-ink/40 hover:bg-ink/5 text-ink font-semibold px-6 py-3.5 rounded-full transition-colors"
                >
                  Explore services
                </a>
              </div>

              {/* Location pin */}
              <div className="mt-10 flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-olive/10">
                  <MapPin className="w-4 h-4 text-olive" />
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold text-ink">
                    Kampala, Uganda
                  </div>
                  <div className="text-xs text-ink/55">
                    Plot 12, Engineering Close
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - floating elements */}
            <div className="hidden md:block md:col-span-6 lg:col-span-7 relative">
              {/* Rotating circular seal badge - top right */}
              <RotatingSeal />

              {/* Floating testimonial/rating card - bottom left of right column */}
              <TestimonialCard />
            </div>
          </div>

          {/* Mobile image band (in-flow, below text) */}
          <div className="md:hidden relative h-[260px] mt-2">
            <img
              src="/images/hero-workers.png"
              alt="Piako engineers and construction crew on site"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            {/* Mobile rating badge */}
            <div className="absolute bottom-4 left-4 bg-ink/90 backdrop-blur-sm text-white rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="font-display text-2xl font-bold leading-none">
                4.9<span className="text-sm text-olive">/5</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-olive text-olive" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Rotating circular seal badge with curved text */
function RotatingSeal() {
  return (
    <div className="absolute top-8 right-8 md:top-10 md:right-10 lg:top-12 lg:right-14 z-20">
      <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 animate-float">
        {/* Subtle shadow ring for contrast over photo */}
        <div className="absolute -inset-1 rounded-full bg-ink/30 blur-md" />
        <div className="absolute inset-0 animate-spin-slow relative">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            <defs>
              <path
                id="seal-circle"
                d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                fill="none"
              />
            </defs>
            <circle cx="50" cy="50" r="48" fill="#6B7B3F" />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="0.5"
            />
            <text
              fill="white"
              fontSize="7.5"
              fontWeight="700"
              letterSpacing="1.2"
            >
              <textPath href="#seal-circle" startOffset="0%">
                PIAKO CONSULT · ENGINEERING · INFRASTRUCTURE ·
              </textPath>
            </text>
          </svg>
        </div>
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <ArrowDown className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Floating testimonial / rating card */
function TestimonialCard() {
  return (
    <div className="absolute bottom-8 left-0 md:-left-6 lg:-left-10 z-20 max-w-[240px] md:max-w-[260px] animate-float" style={{ animationDelay: "1s" }}>
      <div className="bg-ink text-white rounded-2xl p-5 md:p-6 shadow-2xl shadow-ink/30">
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/55 mb-4">
          Client Testimonials
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex -space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-olive to-olive-dark border-2 border-ink flex items-center justify-center text-[10px] font-bold">
              AK
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-olive-dark to-ink-soft border-2 border-ink flex items-center justify-center text-[10px] font-bold">
              JM
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ink-soft to-olive border-2 border-ink flex items-center justify-center text-[10px] font-bold">
              +
            </div>
          </div>
          <div className="text-xs text-white/55 leading-tight">
            Trusted by
            <br />
            <span className="text-white font-semibold">100+ clients</span>
          </div>
        </div>
        <div className="h-px bg-white/12 my-3" />
        <div className="flex items-end justify-between gap-3">
          <div>
            <div className="font-display text-3xl md:text-4xl font-bold leading-none">
              4.9
              <span className="text-lg text-olive">/5</span>
            </div>
            <div className="flex items-center gap-0.5 mt-1.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-olive text-olive"
                />
              ))}
            </div>
          </div>
          <button className="text-[10px] uppercase tracking-wider border border-white/25 rounded-full px-3 py-1.5 text-white/80 hover:bg-white/10 transition-colors">
            Reviews
          </button>
        </div>
      </div>
    </div>
  );
}
