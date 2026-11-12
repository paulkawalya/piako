"use client";

import { ShieldCheck, Wrench, Award } from "lucide-react";
import {
  DIFFERENTIATORS,
  EXPERTISE_FACTS,
  TOOLS,
} from "@/lib/piako/content";

export function Expertise() {
  return (
    <section id="expertise" className="bg-ink text-white section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">05 — Our Expertise</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight">
              Why Piako. Five differentiators that matter.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-white/65 leading-relaxed">
              Our value sits in the combination of disciplines, regional
              experience and the way we hold ourselves accountable from
              feasibility to supervision.
            </p>
          </div>
        </div>

        {/* Differentiators */}
        <div className="grid lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-16 md:mb-24">
          {DIFFERENTIATORS.map((d) => (
            <article
              key={d.n}
              className="bg-ink hover:bg-ink-soft transition-colors p-7 md:p-8 min-h-[280px] flex flex-col"
            >
              <div className="font-mono text-xs text-olive mb-6">{d.n}</div>
              <h3 className="font-display text-lg md:text-xl font-semibold leading-snug mb-4">
                {d.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mt-auto">
                {d.body}
              </p>
            </article>
          ))}
        </div>

        {/* Facts strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-16 md:mb-20">
          {EXPERTISE_FACTS.map((f) => (
            <div key={f.label} className="bg-ink p-7 text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-olive">
                {f.value}
              </div>
              <div className="text-xs text-white/55 mt-2">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Three info blocks */}
        <div className="grid lg:grid-cols-3 gap-6">
          <InfoBlock
            icon={Award}
            title="Professional registrations & certifications"
            body="Piako operates under registered professional engineers and holds the certifications required for public sector and donor-funded engagements. A full list of registrations is available on request and is being finalised for publication."
            note="To be confirmed"
          />
          <InfoBlock
            icon={Wrench}
            title="Tools and software"
            body="Our teams work across industry-standard BIM, GIS, hydraulic modelling and project management environments to keep design, supervision and reporting consistent and auditable."
            chips={TOOLS}
          />
          <InfoBlock
            icon={ShieldCheck}
            title="Quality and safety policy"
            body="Every Piako engagement is governed by a documented quality and safety framework covering design verification, site supervision protocols, incident reporting and continuous improvement."
            note="Available on request"
          />
        </div>
      </div>
    </section>
  );
}

function InfoBlock({
  icon: Icon,
  title,
  body,
  chips,
  note,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
  chips?: string[];
  note?: string;
}) {
  return (
    <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 md:p-8">
      <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-olive/15 text-olive mb-5">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-display text-lg md:text-xl font-semibold mb-3">
        {title}
      </h3>
      <p className="text-sm text-white/65 leading-relaxed">{body}</p>
      {chips && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {chips.map((c) => (
            <span
              key={c}
              className="text-[11px] text-white/70 border border-white/15 rounded-full px-2.5 py-1"
            >
              {c}
            </span>
          ))}
        </div>
      )}
      {note && (
        <div className="mt-5 text-[11px] text-olive/80 font-medium uppercase tracking-wider">
          {note}
        </div>
      )}
    </article>
  );
}
