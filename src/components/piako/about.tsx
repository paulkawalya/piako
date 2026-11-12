"use client";

import { Check, Target, Eye, Compass } from "lucide-react";
import { CORE_VALUES, TEAM } from "@/lib/piako/content";

export function About() {
  return (
    <section id="about" className="paper-bg section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">01 — About Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink">
              A multidisciplinary consultancy built for Africa&apos;s
              infrastructure decade.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-ink/75 leading-relaxed">
              Piako Consult is a multidisciplinary engineering and
              infrastructure consultancy delivering integrated planning, design,
              surveying, engineering and project management solutions that
              support sustainable infrastructure development.
            </p>
            <p className="mt-5 text-base text-ink/65 leading-relaxed">
              Our experience covers water and sanitation systems, hospital
              infrastructure, engineering design, construction supervision and
              surveying &mdash; delivered across Uganda, Malawi and Nigeria for
              government, development partners, healthcare institutions and
              private sector clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Water & Sanitation", "Healthcare", "Engineering Design", "Construction Supervision", "Surveying"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-xs font-medium text-ink/70 border border-ink/15 rounded-full px-3 py-1.5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Image + vision/mission */}
        <div className="grid lg:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden">
            <img
              src="/images/about-team.png"
              alt="Piako engineers reviewing blueprints on site"
              className="w-full h-full object-cover aspect-[16/10]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="text-white">
                <div className="text-xs text-white/70 mb-1">On site</div>
                <div className="font-display text-lg font-semibold">
                  Construction supervision, Kampala
                </div>
              </div>
              <div className="text-white/70 text-xs font-mono">
                UG · 2024
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-ink text-white rounded-2xl p-7 md:p-8">
              <div className="flex items-center gap-3 text-olive mb-4">
                <Eye className="w-5 h-5" />
                <span className="eyebrow">Vision</span>
              </div>
              <p className="text-lg md:text-xl leading-relaxed font-display">
                To become a leading multidisciplinary engineering and
                infrastructure consultancy in Africa, recognised for technical
                excellence, innovation and sustainable development.
              </p>
            </div>
            <div className="bg-white border border-ink/10 rounded-2xl p-7 md:p-8">
              <div className="flex items-center gap-3 text-olive mb-4">
                <Target className="w-5 h-5" />
                <span className="eyebrow">Mission</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-ink/80">
                To deliver integrated, reliable and cost-effective engineering
                and consultancy solutions through professional expertise,
                innovative thinking and a commitment to quality.
              </p>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Compass className="w-4 h-4 text-olive" />
                <span className="eyebrow text-olive">Core values</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-ink">
                What we hold ourselves to.
              </h3>
            </div>
            <p className="text-sm text-ink/60 max-w-sm">
              Six principles that shape every engagement &mdash; from initial
              feasibility through to construction supervision.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 rounded-2xl overflow-hidden">
            {CORE_VALUES.map((v) => (
              <div
                key={v.name}
                className="bg-white p-7 md:p-8 card-lift hover:bg-bone"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Check className="w-4 h-4 text-olive" />
                  <span className="font-display text-xl font-semibold text-ink">
                    {v.name}
                  </span>
                </div>
                <p className="text-sm text-ink/65 leading-relaxed">
                  {v.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="olive-rule" />
                <span className="eyebrow text-olive">Leadership</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-ink">
                The team behind the work.
              </h3>
            </div>
            <p className="text-sm text-ink/60 max-w-sm">
              Detailed leadership profiles with photos, professional
              registrations and full qualifications will follow as the team page
              is finalised.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="bg-white border border-ink/10 rounded-2xl p-6 card-lift"
              >
                <div className="aspect-[4/5] mb-5 rounded-xl bg-gradient-to-br from-ink to-ink-soft relative overflow-hidden">
                  <div className="absolute inset-0 grid-overlay opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl text-olive/40 font-bold">
                      {m.name.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block text-[10px] uppercase tracking-wider bg-olive text-white px-2 py-1 rounded">
                      {m.registration}
                    </span>
                  </div>
                </div>
                <div className="font-display text-lg font-semibold text-ink">
                  {m.name}
                </div>
                <div className="text-sm text-olive font-medium mt-0.5">
                  {m.title}
                </div>
                <div className="text-xs text-ink/55 mt-2">{m.qualifications}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
