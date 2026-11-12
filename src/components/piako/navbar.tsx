"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/piako/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/logopiako.png"
              alt="Piako Consult Ltd"
              className={`h-10 w-auto object-contain transition-all ${
                scrolled ? "" : ""
              }`}
            />
            <span className="sr-only">Piako Consult Ltd</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[13px] font-medium tracking-wide transition-colors link-underline ${
                  scrolled
                    ? "text-white/75 hover:text-white"
                    : "text-ink/70 hover:text-ink"
                } ${i === 0 ? "font-semibold" : ""}`}
              >
                {item.label}
                {i === 0 && !scrolled && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-olive rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide px-5 py-3 rounded-full transition-colors ${
                scrolled
                  ? "bg-olive hover:bg-olive-dark text-white"
                  : "bg-ink hover:bg-ink-soft text-white"
              }`}
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border transition-colors ${
                scrolled
                  ? "border-white/15 text-white hover:bg-white/10"
                  : "border-ink/20 text-ink hover:bg-ink/5"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-ink transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-5">
          <img
            src="/logopiako.png"
            alt="Piako Consult Ltd"
            className="h-10 w-auto object-contain"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="px-5 py-6 flex flex-col">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-4 text-2xl font-display text-white border-b border-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-white font-semibold px-6 py-4 rounded-full"
          >
            Contact
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
