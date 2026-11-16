"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, FileSpreadsheet, Building2, CheckCircle2 } from "lucide-react";
import { revealUp } from "@/components/piako/motion";
import { INDUSTRIES_DATA } from "@/lib/piako/industries-data";

export function IndustriesStats() {
  return (
    <div className="mb-14">
      {/* Quick Navigation Pills */}
      <motion.div {...revealUp(0.04)} className="mb-10">
        <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-3 font-semibold">
          Jump to Sector
        </div>
        <div className="flex flex-wrap gap-2">
          {INDUSTRIES_DATA.map((ind) => (
            <a
              key={ind.id}
              href={`#${ind.id}`}
              className="text-xs font-medium bg-white hover:bg-olive hover:text-white text-ink/75 border border-ink/10 px-3.5 py-2 rounded-full transition-all shadow-sm"
            >
              {ind.name}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Trust & Pre-qualification Strip */}
      <motion.div
        {...revealUp(0.06)}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 md:p-8 rounded-3xl bg-ink text-white border border-white/10"
      >
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-olive/20 text-olive flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-base">PPDA Pre-Qualified</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">PRV/SRVCS/26072903/JUL26</div>
            <div className="text-xs text-white/50 mt-1">Public infrastructure accredited</div>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-olive/20 text-olive flex items-center justify-center shrink-0">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-base">URSB Incorporated</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">No. 80020000712953</div>
            <div className="text-xs text-white/50 mt-1">Duly registered corporate body</div>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-olive/20 text-olive flex items-center justify-center shrink-0">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-base">Tax Compliant (URA)</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">TIN: 1013128810</div>
            <div className="text-xs text-white/50 mt-1">Fully cleared for major contracts</div>
          </div>
        </div>

        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-olive/20 text-olive flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-base">FIDIC & World Bank</div>
            <div className="text-xs text-white/60 font-mono mt-0.5">International Frameworks</div>
            <div className="text-xs text-white/50 mt-1">Strict adherence to safeguards</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
