"use client";

import { ArrowUpRight, Layers, Globe2, Workflow, Building2 } from "lucide-react";

const STATS = [
  {
    icon: Layers,
    value: "16",
    label: "Consultancy services",
    sub: "Integrated under one firm",
  },
  {
    icon: Globe2,
    value: "3",
    label: "Countries of project experience",
    sub: "Uganda · Malawi · Nigeria",
  },
  {
    icon: Workflow,
    value: "End-to-end",
    label: "Project delivery",
    sub: "Feasibility to supervision",
  },
  {
    icon: Building2,
    value: "Multi-sector",
    label: "Engineering expertise",
    sub: "Water · Health · Transport",
  },
];

export function StatsIntro() {
  return (
    <section className="bg-bone pt-16 md:pt-24 pb-4 md:pb-6">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Asymmetric header */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">About Piako</span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-bold tracking-tight text-ink max-w-3xl">
              A multidisciplinary engineering consultancy built for
              Africa&apos;s infrastructure decade.
            </h2>
            <p className="mt-5 text-base text-ink/65 leading-relaxed max-w-2xl">
              Piako Consult delivers integrated planning, design, surveying,
              engineering and project management solutions that support
              sustainable infrastructure development &mdash; across water and
              sanitation, healthcare, buildings and transportation.
            </p>
          </div>
        </div>

        {/* Image left + 2x2 stat cards right */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8">
          {/* Image with overlapping badge */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden">
            <img
              src="/images/about-stats.png"
              alt="Piako infrastructure construction site"
              className="w-full aspect-[4/3] md:aspect-[16/11] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            {/* Overlapping circular badge */}
            <a
              href="#projects"
              className="absolute bottom-5 left-5 md:bottom-7 md:left-7 inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-olive text-white shadow-xl hover:bg-olive-dark transition-colors group"
            >
              <div className="text-center">
                <div className="font-display text-xl md:text-2xl font-bold leading-none">
                  Projects
                </div>
                <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80">
                  View all
                </div>
              </div>
            </a>
          </div>

          {/* 2x2 stat cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4 md:gap-5">
            {STATS.map((s) => (
              <article
                key={s.label}
                className="group bg-white border border-ink/10 rounded-2xl p-5 md:p-6 card-lift flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-olive/10 text-olive">
                    <s.icon className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink/20 group-hover:text-olive group-hover:rotate-45 transition-all" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-ink leading-none">
                  {s.value}
                </div>
                <div className="text-sm font-semibold text-ink mt-2">
                  {s.label}
                </div>
                <div className="text-xs text-ink/55 mt-1">{s.sub}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
