"use client";

import { ArrowUpRight, MapPin, Mail, GraduationCap } from "lucide-react";
import { OPEN_ROLES, CONTACT } from "@/lib/piako/content";

export function Careers() {
  return (
    <section id="careers" className="paper-bg section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">06 — Careers</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink">
              Build Africa&apos;s infrastructure. Build your career with Piako.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-ink/65 leading-relaxed">
              We are an engineering consultancy that invests in technical depth,
              mentoring and exposure to multi-sector projects. If you want to do
              serious engineering work that matters, we want to hear from you.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Image + graduate programme */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/careers.png"
                alt="Young engineers collaborating at Piako"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="text-xs text-white/70 mb-1">Why work at Piako</div>
                <div className="font-display text-lg font-semibold">
                  Real projects, real responsibility, real mentoring.
                </div>
              </div>
            </div>

            <div className="bg-ink text-white rounded-2xl p-7">
              <div className="flex items-center gap-3 text-olive mb-4">
                <GraduationCap className="w-5 h-5" />
                <span className="eyebrow">Graduate & Internship Programme</span>
              </div>
              <p className="text-base leading-relaxed text-white/75">
                Each year we take on a small cohort of engineering graduates and
                interns, pairing them with senior engineers on live projects
                across water, healthcare, buildings and transportation.
              </p>
              <p className="text-sm text-white/55 mt-4">
                Applications for the next cohort open{" "}
                <span className="text-olive font-medium">quarterly</span>.
              </p>
            </div>
          </div>

          {/* Open roles */}
          <div className="lg:col-span-7">
            <div className="flex items-end justify-between mb-5">
              <h3 className="font-display text-2xl font-bold text-ink">
                Open roles
              </h3>
              <span className="text-xs text-ink/50 font-mono">
                {OPEN_ROLES.length} positions
              </span>
            </div>

            <div className="border-t border-ink/10">
              {OPEN_ROLES.map((r) => (
                <div
                  key={r.title}
                  className="group flex items-center justify-between gap-4 py-5 border-b border-ink/10 hover:bg-white/60 transition-colors px-3 -mx-3 rounded-lg"
                >
                  <div className="min-w-0">
                    <div className="font-display text-lg md:text-xl font-semibold text-ink">
                      {r.title}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/55">
                      <span className="text-olive font-medium">
                        {r.discipline}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {r.location}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${CONTACT.email}?subject=Application: ${encodeURIComponent(
                      r.title
                    )}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-olive transition-colors whitespace-nowrap"
                  >
                    Apply
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              ))}
            </div>

            {/* General CV submission */}
            <div className="mt-8 bg-white border border-ink/10 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <div className="font-display text-lg font-semibold text-ink">
                  Don&apos;t see your role?
                </div>
                <p className="text-sm text-ink/60 mt-1">
                  Send us your CV. We keep an active talent pool for engineers,
                  surveyors and project managers across all our markets.
                </p>
              </div>
              <a
                href={`mailto:${CONTACT.email}?subject=General CV Submission`}
                className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white font-semibold px-5 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                <Mail className="w-4 h-4" />
                Submit your CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
