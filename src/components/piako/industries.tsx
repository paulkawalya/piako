"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, HelpCircle, PhoneCall, Building2 } from "lucide-react";
import { PageHeader } from "@/components/piako/page-header";
import { revealUp } from "@/components/piako/motion";
import { INDUSTRIES_DATA } from "@/lib/piako/industries-data";
import { IndustryCard } from "@/components/piako/industries/industry-card";
import { IndustriesStats } from "@/components/piako/industries/industries-stats";

export function Industries() {
  return (
    <section id="industries" className="paper-bg section-pad min-h-screen">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Page Header */}
        <PageHeader
          eyebrow="Industries & Sectors"
          title="Engineering Solutions Across Public, Institutional and Commercial Sectors."
          intro={
            <p>
              Piako Consult Ltd coordinates planning, detailed design, geotechnical
              investigations, and construction supervision tailored to the unique
              governance, procurement, and technical demands of each sector.
            </p>
          }
          actions={
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-white text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-colors"
            >
              Discuss your sector requirements
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          }
        />

        {/* Quick Jump & Accreditation Badges */}
        <IndustriesStats />

        {/* Detailed Industry Cards Showcase */}
        <div className="space-y-8 md:space-y-12">
          {INDUSTRIES_DATA.map((ind, i) => (
            <motion.div key={ind.id} {...revealUp(Math.min(i * 0.05, 0.25))}>
              <IndustryCard industry={ind} index={i} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Tender Consultation Callout */}
        <motion.div
          {...revealUp(0.1)}
          className="mt-16 md:mt-24 bg-ink text-white rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-olive uppercase tracking-wider mb-3">
                <Building2 className="w-4 h-4" />
                Inter-Disciplinary Capability
              </div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Require a multidisciplinary team for an upcoming sector program?
              </h3>
              <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
                Whether structuring a public-private healthcare partnership, supervising donor-funded urban water reticulation, or managing commercial hospitality construction, Piako brings every discipline together under one accountable mandate.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm text-center"
              >
                Request Sector Capability Profile
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:info@consultpiako.com"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-3.5 rounded-full transition-colors text-sm text-center"
              >
                <PhoneCall className="w-4 h-4" />
                info@consultpiako.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
