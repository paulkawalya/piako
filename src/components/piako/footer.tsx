"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight, Mail, Phone } from "lucide-react";
import { NAV_ITEMS, CONTACT, SERVICES } from "@/lib/piako/content";
import { revealUp } from "@/components/piako/motion";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white border-t border-white/10">
      {/* Top CTA */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-14 md:py-20 border-b border-white/10">
        <motion.div {...revealUp()} className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="olive-rule origin-left animate-draw" />
              <span className="eyebrow text-olive">Let&apos;s build together</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05]">
              Engineering tomorrow, today.
              <br />
              <span className="text-white/60">
                Talk to Piako about your next project.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:justify-self-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-ink font-bold px-7 py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              Request a consultation
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <img
              src="/logopiako-light.png"
              alt="Piako Consult Ltd"
              className="h-14 w-auto object-contain mb-5"
            />
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              A multidisciplinary engineering and infrastructure consultancy
              delivering sustainable outcomes across Uganda, Malawi and Nigeria.
            </p>
            <div className="mt-6 text-sm font-display font-semibold text-olive tracking-wide">
              Engineering. Infrastructure. Development.
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <FooterTitle>Explore</FooterTitle>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <FooterTitle>Services</FooterTitle>
            <ul className="space-y-2.5 max-h-64 styled-scroll overflow-y-auto pr-2">
              {SERVICES.map((s) => (
                <li key={s.n}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <FooterTitle>Get in touch</FooterTitle>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/65">
                <Mail className="w-4 h-4 text-olive mt-0.5 shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <Phone className="w-4 h-4 text-olive mt-0.5 shrink-0" />
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <Linkedin className="w-4 h-4 text-olive mt-0.5 shrink-0" />
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="mt-4 text-xs text-white/55 leading-relaxed">
              <span className="font-semibold text-white/90">{CONTACT.building}</span>
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.landmark} | {CONTACT.country}
              <br />
              <span className="text-white/40 mt-1 inline-block">{CONTACT.hours}</span>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-mono text-white/50 space-y-0.5">
              <div><span className="text-white/35">Cert. No:</span> {CONTACT.certNo}</div>
              <div><span className="text-white/35">PPDA No.:</span> {CONTACT.ppdaNo}</div>
              <div><span className="text-white/35">TIN:</span> {CONTACT.tin}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/45 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; {year} Piako Consult Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span className="font-mono text-[11px] text-white/40">
              Cert: {CONTACT.certNo} · PPDA: {CONTACT.ppdaNo} · TIN: {CONTACT.tin}
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-white/45">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              Back to top
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow text-olive mb-4">{children}</div>
  );
}
