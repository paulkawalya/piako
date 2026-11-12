"use client";

import {
  Landmark,
  Globe2,
  HeartPulse,
  Droplets,
  GraduationCap,
  Building2,
  Handshake,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/piako/content";

const ICONS: Record<string, React.ElementType> = {
  Government: Landmark,
  "Development Partners": Globe2,
  Healthcare: HeartPulse,
  "Water and Infrastructure": Droplets,
  "Education and Institutions": GraduationCap,
  "Private Sector": Building2,
  Partnerships: Handshake,
};

export function Industries() {
  return (
    <section id="industries" className="bg-bone section-pad border-y border-ink/10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">04 — Industries</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink">
              Sectors we serve, with the institutions that trust us.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-ink/65 leading-relaxed">
              Piako works across the public, development, institutional and
              private sector landscape &mdash; bringing the right engineering,
              procurement and supervisory capability to each.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICONS[ind.name] ?? Landmark;
            const wide = i === 0; // first card spans wider on lg
            return (
              <article
                key={ind.name}
                className={`group relative bg-white border border-ink/10 rounded-2xl p-7 card-lift overflow-hidden ${
                  wide ? "lg:col-span-2 xl:col-span-2" : ""
                }`}
              >
                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-olive/5 group-hover:bg-olive/10 transition-colors" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ink text-olive mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-ink/65 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
