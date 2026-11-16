"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Building, ShieldCheck, MapPin } from "lucide-react";
import { IndustryData } from "@/lib/piako/industries-data";

interface IndustryCardProps {
  industry: IndustryData;
  index: number;
}

export function IndustryCard({ industry: ind, index }: IndustryCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article
      id={ind.id}
      className="bg-white border border-ink/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 scroll-mt-28"
    >
      <div className={`grid lg:grid-cols-12 gap-8 items-center p-6 md:p-10 ${isEven ? "" : "lg:grid-flow-dense"}`}>
        {/* Left Column: Text & Capabilities */}
        <div className={`lg:col-span-7 ${isEven ? "" : "lg:col-start-6"}`}>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs uppercase font-mono tracking-wider bg-olive/15 text-olive font-bold px-3 py-1 rounded-full">
              {ind.tag}
            </span>
            <span className="text-xs text-ink/40 font-mono">
              Sector {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight">
            {ind.name}
          </h3>

          <p className="font-medium text-olive text-sm md:text-base mt-2">
            {ind.headline}
          </p>

          <p className="text-sm md:text-base text-ink/70 leading-relaxed mt-3">
            {ind.description}
          </p>

          {/* Core Capabilities */}
          <div className="mt-6 pt-5 border-t border-ink/10">
            <div className="text-xs font-mono uppercase tracking-wider text-ink/50 mb-3 font-semibold">
              Capabilities Delivered
            </div>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {ind.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2 text-xs md:text-sm text-ink/80">
                  <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Representative Clients & Track Record */}
          <div className="mt-6 pt-4 border-t border-ink/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-ink/50 uppercase tracking-wider mr-2">
              Institutions Served:
            </span>
            {ind.clients.map((client) => (
              <span
                key={client}
                className="text-xs bg-bone px-3 py-1 rounded-full text-ink/75 border border-ink/5 font-medium"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Photo & Featured Project Callout */}
        <div className={`lg:col-span-5 ${isEven ? "" : "lg:col-start-1"}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-ink/10 aspect-[4/3] bg-ink group">
            <img
              src={ind.image}
              alt={ind.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90" />
            
            {/* Overlay Featured Project Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-ink/80 backdrop-blur-md border border-white/10 text-white">
              <div className="text-[10px] uppercase font-mono text-olive font-bold tracking-wider mb-1">
                Representative Assignment
              </div>
              <div className="font-display font-bold text-sm md:text-base leading-snug line-clamp-1">
                {ind.featuredProject.title}
              </div>
              <div className="text-xs text-white/70 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-olive" />
                <span>{ind.featuredProject.location}</span>
                <span className="mx-1">·</span>
                <span className="text-olive font-semibold">{ind.featuredProject.value}</span>
              </div>
            </div>
          </div>

          {/* Quick Consultation CTA */}
          <div className="mt-4 flex items-center justify-between px-2">
            <span className="text-xs text-ink/50">Need expertise in this sector?</span>
            <Link
              href={`/contact?sector=${encodeURIComponent(ind.name)}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-olive hover:text-olive-dark transition-colors"
            >
              Discuss {ind.tag} Tender &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
