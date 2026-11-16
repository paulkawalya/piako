"use client";

import { Search, LayoutGrid, List, X, RotateCcw } from "lucide-react";

interface ProjectFiltersProps {
  sectors: string[];
  countries: string[];
  selectedSector: string;
  selectedCountry: string;
  searchQuery: string;
  viewMode: "grid" | "list";
  filteredCount: number;
  totalCount: number;
  onSelectSector: (sector: string) => void;
  onSelectCountry: (country: string) => void;
  onSearchChange: (query: string) => void;
  onViewModeChange: (mode: "grid" | "list") => void;
  onReset: () => void;
}

export function ProjectFilters({
  sectors,
  countries,
  selectedSector,
  selectedCountry,
  searchQuery,
  viewMode,
  filteredCount,
  totalCount,
  onSelectSector,
  onSelectCountry,
  onSearchChange,
  onViewModeChange,
  onReset,
}: ProjectFiltersProps) {
  const isFiltered =
    selectedSector !== "All" || selectedCountry !== "All" || searchQuery.trim() !== "";

  return (
    <div className="bg-white border border-ink/10 rounded-3xl p-5 md:p-6 mb-10 shadow-sm space-y-5">
      {/* Search and View Controls Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Live Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects by client, location, or keyword…"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-bone rounded-full text-sm text-ink placeholder:text-ink/40 border border-ink/10 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* View Mode Toggle & Reset */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {isFiltered && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive hover:text-olive-dark py-2 px-3 rounded-full hover:bg-olive/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset filters
            </button>
          )}

          <div className="flex items-center bg-bone rounded-full p-1 border border-ink/10">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              aria-label="Grid view"
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === "grid"
                  ? "bg-ink text-white shadow-sm"
                  : "text-ink/50 hover:text-ink"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              aria-label="List view"
              className={`p-1.5 rounded-full transition-colors ${
                viewMode === "list"
                  ? "bg-ink text-white shadow-sm"
                  : "text-ink/50 hover:text-ink"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <div className="text-xs font-mono text-ink/50 hidden sm:block whitespace-nowrap">
            {filteredCount} of {totalCount} projects
          </div>
        </div>
      </div>

      <div className="h-px bg-ink/5" />

      {/* Filter Tabs by Sector */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <span className="text-xs uppercase font-mono tracking-wider text-ink/50 shrink-0 w-16">
          Sector
        </span>
        <div className="flex flex-wrap gap-1.5">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => onSelectSector(s)}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                selectedSector === s
                  ? "bg-ink text-white"
                  : "bg-bone text-ink/70 hover:text-ink hover:bg-ink/5 border border-ink/5"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Tabs by Country */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
        <span className="text-xs uppercase font-mono tracking-wider text-ink/50 shrink-0 w-16">
          Country
        </span>
        <div className="flex flex-wrap gap-1.5">
          {countries.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => onSelectCountry(c)}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                selectedCountry === c
                  ? "bg-olive text-white"
                  : "bg-bone text-ink/70 hover:text-ink hover:bg-ink/5 border border-ink/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
