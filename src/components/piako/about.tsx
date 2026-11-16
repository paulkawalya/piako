"use client";

import { motion } from "framer-motion";
import { Check, Target, Eye, Compass, Building2, ShieldCheck, MapPin } from "lucide-react";
import { CORE_VALUES, CONTACT } from "@/lib/piako/content";
import { revealUp } from "@/components/piako/motion";

export function About() {
  return (
    <section id="story" className="paper-bg section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Section header */}
        <motion.div {...revealUp()} className="grid lg:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">About Piako</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink">
              Vision, mission and the principles behind every project.
            </h1>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg text-ink/75 leading-relaxed">
              Our experience covers water and sanitation systems, hospital
              infrastructure, engineering design, construction supervision and
              surveying &mdash; delivered across Uganda, Malawi and Nigeria for
              government, development partners, healthcare institutions and
              private sector clients.
            </p>
            <p className="mt-5 text-base text-ink/65 leading-relaxed">
              We hold ourselves to a clear vision, a focused mission and six
              core values that govern how we design, supervise and deliver.
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
        </motion.div>

        {/* Image + vision/mission */}
        <motion.div {...revealUp(0.04)} className="grid lg:grid-cols-12 gap-6 mb-16 md:mb-24">
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
        </motion.div>

        {/* Core values */}
        <div id="values" className="mb-16 md:mb-24 scroll-mt-28">
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
            {CORE_VALUES.map((v, i) => (
              <motion.div
                key={v.name}
                {...revealUp(i * 0.05, 12)}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Corporate Statutory Registration & Headquarters */}
        <motion.div
          id="accreditation"
          {...revealUp(0.1)}
          className="mt-16 md:mt-24 bg-ink text-white rounded-3xl p-8 md:p-12 border border-white/10 scroll-mt-28"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-olive" />
                <span className="eyebrow text-olive">Statutory Accreditation & Headquarters</span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
                Piako Consult Ltd
              </h3>
              <p className="text-white/70 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
                Incorporated and certified in the Republic of Uganda as a registered multidisciplinary engineering and infrastructure consultancy.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 text-xs font-mono text-white/80">
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="text-white/40 text-[10px] uppercase">Cert. No</div>
                  <div className="text-sm font-bold text-white mt-0.5">{CONTACT.certNo}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="text-white/40 text-[10px] uppercase">PPDA No.</div>
                  <div className="text-sm font-bold text-white mt-0.5">{CONTACT.ppdaNo}</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="text-white/40 text-[10px] uppercase">TIN</div>
                  <div className="text-sm font-bold text-white mt-0.5">{CONTACT.tin}</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7">
              <div className="text-xs font-mono uppercase text-olive font-bold tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-olive" />
                Registered Office Address
              </div>
              <div className="font-display font-semibold text-lg text-white">
                {CONTACT.building}
              </div>
              <div className="text-white/80 text-sm mt-1">
                {CONTACT.street}
              </div>
              <div className="text-white/60 text-xs mt-1">
                {CONTACT.landmark} | {CONTACT.country}
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Official Web:</span>
                <span className="text-olive font-mono">{CONTACT.website}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
