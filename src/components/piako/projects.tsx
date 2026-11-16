"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileCheck, PhoneCall, HelpCircle } from "lucide-react";
import { PageHeader } from "@/components/piako/page-header";
import { revealUp } from "@/components/piako/motion";
import { PROJECTS, COUNTRIES, Project } from "@/lib/piako/content";
import { ProjectStats } from "@/components/piako/projects/project-stats";
import { ProjectFilters } from "@/components/piako/projects/project-filters";
import { ProjectCard } from "@/components/piako/projects/project-card";
import { ProjectModal } from "@/components/piako/projects/project-modal";

export function Projects() {
  const sectors = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.sector)))],
    []
  );
  const countries = useMemo(() => ["All", ...COUNTRIES], []);

  const [sector, setSector] = useState("All");
  const [country, setCountry] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchSector = sector === "All" || p.sector === sector;
      const matchCountry = country === "All" || p.country === country;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.client.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.scope.toLowerCase().includes(query) ||
        p.role.toLowerCase().includes(query);
      return matchSector && matchCountry && matchQuery;
    });
  }, [sector, country, searchQuery]);

  const handleReset = () => {
    setSector("All");
    setCountry("All");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="paper-bg section-pad min-h-screen">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Page Header */}
        <PageHeader
          eyebrow="Portfolio & Delivery Record"
          title="Delivering Infrastructure That Performs and Lasts."
          intro={
            <p>
              Piako Consult Ltd has delivered multidisciplinary infrastructure
              assignments across Uganda, Malawi, Nigeria and South Sudan for
              government ministries, development partners, and institutional
              clients.
            </p>
          }
          actions={
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-white text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-colors"
            >
              Discuss a project
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          }
        />

        {/* Portfolio Stats Strip */}
        <ProjectStats />

        {/* Filter & Search Bar */}
        <ProjectFilters
          sectors={sectors}
          countries={countries}
          selectedSector={sector}
          selectedCountry={country}
          searchQuery={searchQuery}
          viewMode={viewMode}
          filteredCount={filtered.length}
          totalCount={PROJECTS.length}
          onSelectSector={setSector}
          onSelectCountry={setCountry}
          onSearchChange={setSearchQuery}
          onViewModeChange={setViewMode}
          onReset={handleReset}
        />

        {/* Projects Listing */}
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 gap-6 md:gap-8"
              : "space-y-4"
          }
        >
          {filtered.map((p) => (
            <ProjectCard
              key={p.id}
              project={p}
              viewMode={viewMode}
              onSelect={setActiveProject}
            />
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-ink/10 p-8">
            <HelpCircle className="w-12 h-12 text-ink/30 mx-auto mb-3" />
            <h3 className="font-display text-xl font-bold text-ink">
              No matching projects found
            </h3>
            <p className="text-sm text-ink/60 mt-1 max-w-md mx-auto">
              We couldn&apos;t find any assignments matching &ldquo;
              {searchQuery || `${sector} / ${country}`}&rdquo;. Try resetting your
              filter criteria.
            </p>
            <button
              onClick={handleReset}
              className="mt-5 inline-flex items-center gap-2 bg-ink text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-ink-soft transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Bottom Tender Consultation Callout */}
        <motion.div
          {...revealUp(0.1)}
          className="mt-16 md:mt-24 bg-ink text-white rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block">
            <div className="w-full h-full grid-overlay" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-olive uppercase tracking-wider mb-3">
                <FileCheck className="w-4 h-4" />
                Procurement & Technical Qualifications
              </div>
              <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Preparing an infrastructure procurement or bid submission?
              </h3>
              <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl leading-relaxed">
                Piako Consult Ltd is pre-qualified on the PPDA register (PRV/SRVCS/26072903/JUL26) and maintains audited financials, tax compliance, and certified engineering personnel ready to partner on FIDIC, World Bank, and government tenders.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm text-center"
              >
                Request Statement of Qualifications
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+256784188814"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-3.5 rounded-full transition-colors text-sm text-center"
              >
                <PhoneCall className="w-4 h-4" />
                +256 784 188814
              </a>
            </div>
          </div>
        </motion.div>

        {/* Detail Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
