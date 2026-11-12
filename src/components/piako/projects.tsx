"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Calendar, Briefcase } from "lucide-react";
import { PROJECTS, COUNTRIES } from "@/lib/piako/content";

export function Projects() {
  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.sector)))],
    []
  );
  const countries = useMemo(() => ["All", ...COUNTRIES], []);

  const [sector, setSector] = useState("All");
  const [country, setCountry] = useState("All");

  const filtered = PROJECTS.filter(
    (p) =>
      (sector === "All" || p.sector === sector) &&
      (country === "All" || p.country === country)
  );

  return (
    <section id="projects" className="paper-bg section-pad">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-10 md:mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">03 — Projects</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink">
              Completed and ongoing assignments across three African markets.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-ink/65 leading-relaxed">
              Filter by sector and country to explore our delivery record. A
              fuller case study library will be published as project
              documentation is finalised.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between border-y border-ink/10 py-5">
          <FilterGroup
            label="Sector"
            options={sectors}
            value={sector}
            onChange={setSector}
          />
          <FilterGroup
            label="Country"
            options={countries}
            value={country}
            onChange={setCountry}
          />
          <div className="text-xs text-ink/55 font-mono">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group bg-white border border-ink/10 rounded-2xl overflow-hidden card-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-[10px] uppercase tracking-wider bg-white/90 text-ink font-semibold px-2.5 py-1 rounded-full">
                    {p.sector}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div className="flex items-center gap-1.5 text-xs">
                    <MapPin className="w-3 h-3 text-olive" />
                    {p.location}, {p.country}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <Calendar className="w-3 h-3 text-olive" />
                    {p.year}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-ink leading-snug">
                    {p.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-ink/30 group-hover:text-olive group-hover:rotate-45 transition-all shrink-0" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-olive font-medium mb-4">
                  <Briefcase className="w-3.5 h-3.5" />
                  {p.client} · {p.role}
                </div>
                <p className="text-sm text-ink/70 leading-relaxed">{p.scope}</p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-ink/50">
            No projects match the current filters.
          </div>
        )}
      </div>
    </section>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
      <span className="eyebrow text-ink/50">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`text-xs font-medium px-3.5 py-2 rounded-full transition-colors ${
              value === opt
                ? "bg-ink text-white"
                : "bg-transparent text-ink/60 hover:text-ink hover:bg-ink/5 border border-ink/10"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
