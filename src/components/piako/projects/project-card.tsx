"use client";

import { MapPin, Calendar, Briefcase, ArrowUpRight, DollarSign, Layers } from "lucide-react";
import { Project } from "@/lib/piako/content";

interface ProjectCardProps {
  project: Project;
  viewMode: "grid" | "list";
  onSelect: (p: Project) => void;
}

export function ProjectCard({ project: p, viewMode, onSelect }: ProjectCardProps) {
  if (viewMode === "list") {
    return (
      <article
        onClick={() => onSelect(p)}
        className="group cursor-pointer bg-white border border-ink/10 hover:border-olive rounded-2xl p-5 md:p-6 card-lift transition-all flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
      >
        <div className="flex items-start md:items-center gap-5 min-w-0 flex-1">
          <div className="relative w-24 h-20 md:w-32 md:h-24 rounded-xl overflow-hidden shrink-0 bg-ink">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <span className="absolute top-1.5 left-1.5 text-[9px] uppercase font-bold bg-ink/80 text-white px-1.5 py-0.5 rounded">
              {p.country}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="inline-block text-[10px] uppercase tracking-wider font-semibold bg-olive/15 text-olive px-2.5 py-0.5 rounded-full">
                {p.sector}
              </span>
              <span className="text-xs font-mono text-ink/50 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-olive" />
                {p.year}
              </span>
            </div>
            <h3 className="font-display text-lg md:text-xl font-bold text-ink group-hover:text-olive transition-colors truncate">
              {p.title}
            </h3>
            <p className="text-xs text-ink/65 line-clamp-1 mt-1">
              {p.client} · {p.role}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 shrink-0 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-ink/10">
          <div className="text-left md:text-right">
            <div className="text-[11px] uppercase font-mono text-ink/50">Our Services</div>
            <div className="text-sm font-bold text-ink font-mono">{p.servicesValue || "Consultancy"}</div>
          </div>
          <div className="text-left md:text-right hidden sm:block">
            <div className="text-[11px] uppercase font-mono text-ink/50">Project Value</div>
            <div className="text-sm font-bold text-olive font-mono">{p.projectValue || "Capital Works"}</div>
          </div>
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-bone group-hover:bg-olive text-ink group-hover:text-white transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={() => onSelect(p)}
      className="group cursor-pointer bg-white border border-ink/10 hover:border-olive/60 rounded-3xl overflow-hidden card-lift transition-all flex flex-col justify-between"
    >
      <div>
        {/* Top Image Card */}
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          
          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="inline-block text-[10px] uppercase tracking-wider bg-white/95 text-ink font-bold px-3 py-1 rounded-full shadow-md">
              {p.sector}
            </span>
            <span className="inline-block text-[10px] uppercase tracking-wider bg-olive text-white font-bold px-3 py-1 rounded-full shadow-md">
              {p.country}
            </span>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div className="flex items-center gap-1.5 text-xs">
              <MapPin className="w-3.5 h-3.5 text-olive shrink-0" />
              <span className="truncate">{p.location}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <Calendar className="w-3.5 h-3.5 text-olive shrink-0" />
              <span>{p.year}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display text-xl md:text-[1.35rem] font-bold text-ink leading-snug group-hover:text-olive transition-colors">
              {p.title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-ink/30 group-hover:text-olive group-hover:rotate-45 transition-all shrink-0 mt-1" />
          </div>

          <div className="flex items-center gap-2 text-xs text-olive font-semibold mb-4">
            <Briefcase className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{p.client}</span>
          </div>

          <p className="text-sm text-ink/70 leading-relaxed line-clamp-3 mb-5">
            {p.scope}
          </p>
        </div>
      </div>

      {/* Footer Financial & Scale Metrics Strip */}
      <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0">
        <div className="p-3.5 rounded-2xl bg-bone/80 border border-ink/5 grid grid-cols-2 gap-3 text-xs mb-4">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-ink/50 font-mono">Project Value</div>
            <div className="font-bold text-olive truncate font-mono mt-0.5">
              {p.projectValue || "Capital Works"}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-ink/50 font-mono">Our Services</div>
            <div className="font-bold text-ink truncate font-mono mt-0.5">
              {p.servicesValue || "Consultancy"}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs font-semibold text-ink/60 group-hover:text-olive transition-colors">
          <span className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            {p.scale || "Assignment Profile"}
          </span>
          <span className="underline underline-offset-2">View details &rarr;</span>
        </div>
      </div>
    </article>
  );
}
