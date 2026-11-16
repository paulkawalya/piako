"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Award } from "lucide-react";
import { PageHeader } from "@/components/piako/page-header";
import { revealUp } from "@/components/piako/motion";
import {
  DIFFERENTIATORS,
  EXPERTISE_FACTS,
  TOOLS,
} from "@/lib/piako/content";

export function Expertise() {
  return (
    <section id="expertise" className="bg-ink text-white section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <PageHeader
          eyebrow="Why Piako"
          tone="dark"
          title="Why Piako. Five differentiators that matter."
          intro={
            <p>
              Our value sits in the combination of disciplines, regional
              experience and the way we hold ourselves accountable from
              feasibility to supervision.
            </p>
          }
        />

        {/* Differentiators */}
        <div className="grid lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-16 md:mb-24">
          {DIFFERENTIATORS.map((d, i) => (
            <motion.article
              key={d.n}
              {...revealUp(i * 0.055, 14)}
              className="bg-ink hover:bg-ink-soft transition-colors p-7 md:p-8 min-h-[280px] flex flex-col"
            >
              <div className="font-mono text-xs text-olive mb-6">{d.n}</div>
              <h3 className="font-display text-lg md:text-xl font-semibold leading-snug mb-4">
                {d.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mt-auto">
                {d.body}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Facts strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-16 md:mb-20">
          {EXPERTISE_FACTS.map((f, i) => (
            <motion.div
              key={f.label}
              {...revealUp(i * 0.05, 12)}
              className="bg-ink p-7 text-center"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-olive">
                {f.value}
              </div>
              <div className="text-xs text-white/55 mt-2">{f.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Three info blocks */}
        <motion.div {...revealUp(0.06)} className="grid lg:grid-cols-3 gap-6">
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
        </motion.div>
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
    <article className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 md:p-8 card-lift hover:border-white/20">
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
