"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, MapPin, Calendar, Briefcase, DollarSign, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/piako/content";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-ink/10 my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-ink/70 hover:bg-ink text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-3 text-white">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-wider bg-olive text-white font-bold px-3 py-1 rounded-full mb-2">
                {project.sector}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight">
                {project.title}
              </h2>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto styled-scroll">
          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-bone border border-ink/5 text-sm">
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-mono">Location</div>
              <div className="font-semibold text-ink flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-olive" />
                {project.location}, {project.country}
              </div>
            </div>
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-mono">Timeline</div>
              <div className="font-semibold text-ink flex items-center gap-1 mt-1">
                <Calendar className="w-3.5 h-3.5 text-olive" />
                {project.year}
              </div>
            </div>
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-mono">Project Value</div>
              <div className="font-semibold text-olive flex items-center gap-1 mt-1">
                <DollarSign className="w-3.5 h-3.5 text-olive" />
                {project.projectValue || "Contracted Scope"}
              </div>
            </div>
            <div>
              <div className="text-xs text-ink/50 uppercase tracking-wider font-mono">Our Services</div>
              <div className="font-semibold text-ink font-mono mt-1">
                {project.servicesValue || "Consultancy Scope"}
              </div>
            </div>
          </div>

          {/* Client & Role */}
          <div className="border-b border-ink/10 pb-5">
            <div className="text-xs uppercase tracking-wider text-ink/50 font-mono mb-1">
              Client & Contract Role
            </div>
            <div className="text-base font-bold text-ink flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-olive shrink-0" />
              <span>{project.client}</span>
            </div>
            <div className="text-sm text-olive font-medium mt-1">
              Role: {project.role}
            </div>
          </div>

          {/* Full Scope */}
          <div>
            <div className="text-xs uppercase tracking-wider text-ink/50 font-mono mb-2">
              Assignment Overview & Scope
            </div>
            <p className="text-base text-ink/75 leading-relaxed">
              {project.scope}
            </p>
          </div>

          {/* Technical Deliverables */}
          {project.deliverables && project.deliverables.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-wider text-ink/50 font-mono mb-3">
                Key Technical Deliverables
              </div>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-ink/80 bg-bone/70 p-2.5 rounded-xl border border-ink/5">
                    <CheckCircle2 className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Modal Footer CTA */}
          <div className="pt-4 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-ink/55">
              Verified corporate record from Piako Consult Ltd profile.
            </div>
            <Link
              href={`/contact?project=${encodeURIComponent(project.title)}`}
              onClick={onClose}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white font-bold px-6 py-3 rounded-full transition-colors text-sm"
            >
              Inquire about similar assignment
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
