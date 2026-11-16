"use client";

import { motion } from "framer-motion";
import { FolderCheck, Globe2, Layers, DollarSign, Handshake } from "lucide-react";
import { revealUp } from "@/components/piako/motion";

const METRICS = [
  {
    icon: FolderCheck,
    value: "13+",
    label: "Projects Delivered & Ongoing",
    sub: "Major infrastructure assignments",
  },
  {
    icon: Globe2,
    value: "3+",
    label: "African Countries",
    sub: "Uganda · Malawi · Nigeria · South Sudan",
  },
  {
    icon: Layers,
    value: "4",
    label: "Core Engineering Sectors",
    sub: "Health · Water · Surveying · Commercial",
  },
  {
    icon: DollarSign,
    value: "USD 120M+",
    label: "Cumulative Project Value",
    sub: "Across capital works supervised",
  },
];

export function ProjectStats() {
  return (
    <div className="mb-12">
      {/* 4 Stat Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-6">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="bg-white border border-ink/10 rounded-2xl p-5 md:p-6 card-lift flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-ink/50 font-mono">
                Metric
              </span>
              <div className="w-9 h-9 rounded-xl bg-olive/10 text-olive flex items-center justify-center">
                <m.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold text-ink leading-none">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-ink mt-2">
                {m.label}
              </div>
              <div className="text-xs text-ink/55 mt-1">{m.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Strategic Collaboration Philosophy Banner from PDF Page 17 */}
      <div className="bg-ink text-white rounded-2xl p-6 md:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 border border-white/10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-olive/20 text-olive flex items-center justify-center shrink-0 mt-0.5">
            <Handshake className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-olive font-semibold mb-1">
              Delivery Model & Technical Partnerships
            </div>
            <p className="text-sm text-white/75 leading-relaxed max-w-3xl">
              We collaborate with qualified specialist consultants and testing laboratories (such as associate firm GETLAB for in-situ geotechnical drilling) when an assignment needs additional expertise. Partnership arrangements strengthen our capabilities without diluting accountability to the client.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-white/50 border border-white/15 px-3 py-1.5 rounded-full shrink-0">
          PPDA & URSB Registered
        </div>
      </div>
    </div>
  );
}
