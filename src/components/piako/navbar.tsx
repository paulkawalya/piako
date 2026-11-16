"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  ChevronDown,
  ClipboardCheck,
  Compass,
  Droplets,
  FileText,
  HeartPulse,
  Layers,
  Leaf,
  Mail,
  Menu,
  Newspaper,
  PencilRuler,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { EASE } from "@/components/piako/motion";

type MenuLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

type MenuGroup = {
  title: string;
  links: MenuLink[];
};

type MenuItem = {
  label: string;
  href?: string;
  groups?: MenuGroup[];
  width?: string;
  cta?: { label: string; href: string };
};

const MENU: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "/about",
    width: "w-[560px]",
    groups: [
      {
        title: "The company",
        links: [
          {
            label: "About Piako",
            href: "/about",
            description: "Vision, mission and credentials",
            icon: Building2,
          },
          {
            label: "Our Expertise",
            href: "/expertise",
            description: "Capabilities and track record",
            icon: Compass,
          },
          {
            label: "Careers",
            href: "/careers",
            description: "Roles and professional growth",
            icon: Briefcase,
          },
        ],
      },
      {
        title: "Explore",
        links: [
          {
            label: "Core values",
            href: "/about#values",
            description: "What we hold ourselves to",
            icon: Sparkles,
          },
          {
            label: "Accreditation",
            href: "/about#accreditation",
            description: "Certificates & statutory compliance",
            icon: ShieldCheck,
          },
          {
            label: "Contact us",
            href: "/contact",
            description: "Start a conversation",
            icon: Phone,
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    width: "w-[700px]",
    groups: [
      {
        title: "Design & engineering",
        links: [
          {
            label: "All 16 services",
            href: "/services",
            description: "The full capability list",
            icon: Layers,
          },
          {
            label: "Engineering Design",
            href: "/services#service-02",
            description: "Structural, civil and MEP design",
            icon: PencilRuler,
          },
          {
            label: "Water & Sanitation",
            href: "/services#service-05",
            description: "Resilient supply and sanitation",
            icon: Droplets,
          },
          {
            label: "Healthcare Facilities",
            href: "/services#service-06",
            description: "Hospitals and clinical infrastructure",
            icon: HeartPulse,
          },
        ],
      },
      {
        title: "Delivery & advisory",
        links: [
          {
            label: "Energy & Power",
            href: "/services#service-07",
            description: "Generation, grid and off-grid systems",
            icon: Zap,
          },
          {
            label: "Highways & Transportation",
            href: "/services#service-09",
            description: "Roads, bridges and transport assets",
            icon: Route,
          },
          {
            label: "Programme Management",
            href: "/services#service-12",
            description: "Multi-project delivery leadership",
            icon: ClipboardCheck,
          },
          {
            label: "Environmental Services",
            href: "/services#service-11",
            description: "Impact assessment and safeguards",
            icon: Leaf,
          },
        ],
      },
    ],
    cta: { label: "Discuss your service brief", href: "/contact" },
  },
  {
    label: "Projects",
    href: "/projects",
    width: "w-[660px]",
    groups: [
      {
        title: "By infrastructure sector",
        links: [
          {
            label: "Healthcare Infrastructure",
            href: "/projects#healthcare",
            description: "AMCE Abuja, Mulago, Masaka & Iganga",
            icon: HeartPulse,
          },
          {
            label: "Water & Sanitation",
            href: "/projects#water",
            description: "Nkoni, Namwiwa, SACRiAC & Kazuru schemes",
            icon: Droplets,
          },
          {
            label: "Surveys & Geotechnical",
            href: "/projects#surveys",
            description: "Ala Ora river intakes & Eastern cadastral",
            icon: Compass,
          },
          {
            label: "Hospitality & Commercial",
            href: "/projects#hospitality",
            description: "5-Star Pyramid & Mbale Courts View Hotels",
            icon: Building2,
          },
        ],
      },
      {
        title: "Portfolio highlights",
        links: [
          {
            label: "All 13 Landmark Projects",
            href: "/projects",
            description: "Explore complete portfolio & case studies",
            icon: Layers,
          },
          {
            label: "Portfolio Statistics",
            href: "/projects#stats",
            description: "USD 120M+ cumulative capital value",
            icon: ClipboardCheck,
          },
          {
            label: "Regional Footprint",
            href: "/projects#footprint",
            description: "Active delivery across Uganda, Malawi & Nigeria",
            icon: Route,
          },
        ],
      },
    ],
    cta: { label: "Explore full projects register", href: "/projects" },
  },
  {
    label: "Industries",
    href: "/industries",
    width: "w-[660px]",
    groups: [
      {
        title: "Public & clinical sectors",
        links: [
          {
            label: "Public & Municipal Infrastructure",
            href: "/industries#public-infrastructure",
            description: "Government ministries & local authorities",
            icon: Building2,
          },
          {
            label: "Healthcare & Clinical Facilities",
            href: "/industries#healthcare",
            description: "Referral hospitals & diagnostic labs",
            icon: HeartPulse,
          },
          {
            label: "Water Resources & Sanitation",
            href: "/industries#water-sanitation",
            description: "Town networks, treatment & intakes",
            icon: Droplets,
          },
          {
            label: "Energy, Oil & Gas",
            href: "/industries#energy-power",
            description: "Power substations & midstream facilities",
            icon: Zap,
          },
        ],
      },
      {
        title: "Economic & commercial sectors",
        links: [
          {
            label: "Highways & Transportation",
            href: "/industries#transportation",
            description: "National roads, bridges & corridors",
            icon: Route,
          },
          {
            label: "Commercial & Hospitality",
            href: "/industries#commercial",
            description: "Mixed-use developments & 5-star hotels",
            icon: Sparkles,
          },
          {
            label: "All 8 Industry Sectors",
            href: "/industries",
            description: "Full sectoral capabilities matrix",
            icon: Layers,
          },
        ],
      },
    ],
    cta: { label: "View all 8 industry sectors", href: "/industries" },
  },
  {
    label: "Insights",
    href: "/insights",
    width: "w-[640px]",
    groups: [
      {
        title: "Browse & subscribe",
        links: [
          {
            label: "All Engineering Insights",
            href: "/insights",
            description: "Technical publications & case studies",
            icon: Newspaper,
          },
          {
            label: "Newsletter Briefs",
            href: "/insights#subscribe",
            description: "Quarterly field updates directly to inbox",
            icon: Mail,
          },
        ],
      },
      {
        title: "Featured field reports",
        links: [
          {
            label: "120 km Network Milestone",
            href: "/insights/supervision-of-120km-distribution-network",
            description: "Town water network delivery in Uganda",
            icon: ClipboardCheck,
          },
          {
            label: "Road Supervision Explained",
            href: "/insights/what-a-supervision-consultant-does-on-a-road-project",
            description: "Consultant engineer's role on site",
            icon: FileText,
          },
          {
            label: "Healthcare Engineering (AMCE)",
            href: "/insights/delivering-complex-healthcare-infrastructure-amce-mulago",
            description: "Clinical layout & sterile HVAC design",
            icon: HeartPulse,
          },
          {
            label: "Resilient Water Systems",
            href: "/insights/designing-water-supply-systems-that-last",
            description: "Five critical lessons from the field",
            icon: Droplets,
          },
        ],
      },
    ],
    cta: { label: "Read all engineering publications", href: "/insights" },
  },
];

function linkIsActive(href: string, pathname: string | null) {
  if (!pathname) return false;
  const cleanPath = href.split("#")[0].replace(/\/+$/, "") || "/";
  const cleanCurrent = pathname.split("#")[0].replace(/\/+$/, "") || "/";
  if (cleanPath === "/") return cleanCurrent === "/";
  return cleanCurrent === cleanPath || cleanCurrent.startsWith(`${cleanPath}/`);
}

function itemIsActive(item: MenuItem, pathname: string) {
  if (item.href && linkIsActive(item.href, pathname)) {
    return true;
  }
  return Boolean(
    item.groups?.some((group) =>
      group.links.some((link) => linkIsActive(link.href, pathname))
    )
  );
}

export function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<{
    label: string;
    path: string;
  } | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDropdown = (label: string) => {
    clearCloseTimer();
    setOpenMenu({ label, path: pathname });
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

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

  useEffect(() => {
    if (!openMenu) return;

    const onPointerDown = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenMenu(null);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b transition-[border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-ink/10 shadow-[0_16px_50px_-38px_rgba(14,34,51,0.55)]"
          : "border-ink/5"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Piako Consult Ltd home"
          >
            <img
              src="/logopiako.png"
              alt="Piako Consult Ltd"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav
            ref={navRef}
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 absolute left-1/2 -translate-x-1/2"
          >
            {MENU.map((item) => {
              const active = itemIsActive(item, pathname);
              const isOpen =
                openMenu?.label === item.label && openMenu.path === pathname;

              if (!item.groups) {
                return (
                  <Link
                    key={item.label}
                    href={item.href ?? "/"}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] tracking-wide transition-all duration-200 ${
                      active
                        ? "bg-ink text-white font-semibold shadow-sm ring-1 ring-ink/20"
                        : "font-medium text-ink/75 hover:bg-bone hover:text-ink"
                    }`}
                  >
                    {active && (
                      <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={scheduleClose}
                >
                  <div
                    className={`inline-flex items-center rounded-full transition-all duration-200 ${
                      active
                        ? "bg-ink text-white shadow-sm ring-1 ring-ink/20"
                        : isOpen
                        ? "bg-bone text-ink"
                        : "text-ink/75 hover:bg-bone hover:text-ink"
                    }`}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className="inline-flex items-center gap-1.5 pl-3.5 pr-1.5 py-2 text-[13px] font-semibold tracking-wide"
                      >
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse shrink-0" />
                        )}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 pl-3.5 pr-1.5 py-2 text-[13px] font-semibold tracking-wide">
                        {active && (
                          <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse shrink-0" />
                        )}
                        <span>{item.label}</span>
                      </span>
                    )}
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={isOpen}
                      aria-label={`${item.label} menu`}
                      onClick={() =>
                        isOpen ? setOpenMenu(null) : openDropdown(item.label)
                      }
                      className="pr-3 pl-1 py-2 inline-flex items-center justify-center hover:text-olive transition-colors"
                    >
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-olive"
                            : active
                            ? "text-olive"
                            : "text-ink/40"
                        }`}
                      />
                    </button>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key={`${item.label}-panel`}
                        initial={
                          reduceMotion
                            ? false
                            : { opacity: 0, y: 8, scale: 0.985 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{
                          opacity: 0,
                          y: 6,
                          scale: 0.99,
                          transition: { duration: 0.14, ease: EASE },
                        }}
                        transition={{ duration: 0.24, ease: EASE }}
                        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${
                          item.width ?? "w-[540px]"
                        }`}
                      >
                        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_30px_70px_-32px_rgba(14,34,51,0.38)]">
                          <div
                            className={`grid gap-1 p-3 ${
                              (item.groups?.length ?? 0) > 1
                                ? "grid-cols-2"
                                : "grid-cols-1"
                            }`}
                          >
                            {item.groups?.map((group) => (
                              <div key={group.title} className="p-1">
                                <div className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35">
                                  {group.title}
                                </div>
                                <div className="space-y-0.5">
                                  {group.links.map((link) => {
                                    const Icon = link.icon;
                                    return (
                                      <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpenMenu(null)}
                                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-bone"
                                      >
                                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-olive transition-transform duration-300 group-hover:-rotate-3">
                                          <Icon className="h-4 w-4" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                          <span className="block text-[13px] font-semibold text-ink">
                                            {link.label}
                                          </span>
                                          <span className="mt-0.5 block text-[11px] leading-snug text-ink/50">
                                            {link.description}
                                          </span>
                                        </span>
                                        <ArrowUpRight className="mt-2 h-3.5 w-3.5 shrink-0 text-ink/20 opacity-0 transition-all duration-300 group-hover:text-olive group-hover:opacity-100" />
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            ))}
                          </div>
                          {item.cta && (
                            <div className="mx-3 mb-3 flex items-center justify-between gap-4 rounded-xl bg-ink px-4 py-3">
                              <span className="text-xs text-white/55">
                                Need a tailored scope?
                              </span>
                              <Link
                                href={item.cta.href}
                                onClick={() => setOpenMenu(null)}
                                className="group inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-olive transition-colors hover:text-white"
                              >
                                {item.cta.label}
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                              </Link>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="group hidden sm:inline-flex items-center gap-2.5 bg-olive hover:bg-olive-dark text-ink text-[13px] font-bold tracking-wide pl-5 pr-1.5 py-1.5 rounded-full transition-colors"
            >
              Contact
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/80 group-hover:bg-white transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => {
                setOpen(true);
                setOpenMobileGroup(null);
              }}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink/10 text-ink hover:bg-bone active:scale-95 transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="lg:hidden fixed inset-0 z-50 bg-white"
          >
            <motion.div
              initial={reduceMotion ? false : { y: -12 }}
              animate={{ y: 0 }}
              className="flex items-center justify-between h-20 px-5 border-b border-ink/10 bg-white"
            >
              <img
                src="/logopiako.png"
                alt="Piako Consult Ltd"
                className="h-12 w-auto object-contain"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-ink/10 text-ink hover:bg-bone active:scale-95 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
            <div className="h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain px-5 pb-10">
              <nav aria-label="Mobile" className="py-2 flex flex-col">
                {MENU.map((item, i) => {
                  const active = itemIsActive(item, pathname);
                  const expanded = openMobileGroup === item.label;

                  return (
                    <motion.div
                      key={item.label}
                      initial={reduceMotion ? false : { opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: reduceMotion ? 0 : 0.06 + i * 0.04,
                        ease: EASE,
                      }}
                      className="border-b border-ink/10"
                    >
                      {item.href && !item.groups ? (
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center justify-between py-4 text-xl font-display font-semibold transition-colors ${
                            active ? "text-olive font-bold" : "text-ink"
                          }`}
                        >
                          <span className="flex items-center gap-2.5">
                            {active && (
                              <span className="w-2 h-2 rounded-full bg-olive" />
                            )}
                            {item.label}
                          </span>
                          <ArrowUpRight className="h-4 w-4 text-ink/25" />
                        </Link>
                      ) : (
                        <div>
                          <div className="flex items-center justify-between py-4">
                            {item.href ? (
                              <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`text-xl font-display font-semibold transition-colors flex items-center gap-2.5 ${
                                  active ? "text-olive font-bold" : "text-ink"
                                }`}
                              >
                                {active && (
                                  <span className="w-2 h-2 rounded-full bg-olive" />
                                )}
                                {item.label}
                              </Link>
                            ) : (
                              <span
                                className={`text-xl font-display font-semibold flex items-center gap-2.5 ${
                                  active ? "text-olive font-bold" : "text-ink"
                                }`}
                              >
                                {active && (
                                  <span className="w-2 h-2 rounded-full bg-olive" />
                                )}
                                {item.label}
                              </span>
                            )}
                            <button
                              type="button"
                              aria-expanded={expanded}
                              aria-controls={`mobile-group-${i}`}
                              onClick={() =>
                                setOpenMobileGroup((current) =>
                                  current === item.label ? null : item.label
                                )
                              }
                              className="p-2 -mr-2 text-ink/40 hover:text-ink transition-colors"
                              aria-label={`Toggle ${item.label} sub-menu`}
                            >
                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  expanded ? "rotate-180 text-olive" : ""
                                }`}
                              />
                            </button>
                          </div>

                          <AnimatePresence>
                            {expanded && (
                              <motion.div
                                id={`mobile-group-${i}`}
                                initial={
                                  reduceMotion
                                    ? false
                                    : { height: 0, opacity: 0 }
                                }
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: reduceMotion ? 0 : 0.3,
                                  ease: EASE,
                                }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-4 pb-5">
                                  {item.groups?.map((group) => (
                                    <div key={group.title}>
                                      <div className="mb-1.5 px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/35">
                                        {group.title}
                                      </div>
                                      <div className="space-y-0.5">
                                        {group.links.map((link) => {
                                          const Icon = link.icon;
                                          return (
                                            <Link
                                              key={link.href}
                                              href={link.href}
                                              onClick={() => setOpen(false)}
                                              className="group flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-bone"
                                            >
                                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-olive">
                                                <Icon className="h-3.5 w-3.5" />
                                              </span>
                                              <span className="min-w-0 flex-1">
                                                <span className="block text-sm font-semibold text-ink">
                                                  {link.label}
                                                </span>
                                                <span className="mt-0.5 block text-[11px] leading-snug text-ink/50">
                                                  {link.description}
                                                </span>
                                              </span>
                                              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-ink/20 transition-colors group-hover:text-olive" />
                                            </Link>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ))}
                                  {item.href && (
                                    <Link
                                      href={item.href}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center justify-between rounded-xl bg-ink text-white px-4 py-3 text-xs font-bold"
                                    >
                                      <span>Explore all {item.label}</span>
                                      <ArrowUpRight className="w-3.5 h-3.5 text-olive" />
                                    </Link>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: reduceMotion ? 0 : 0.36,
                    ease: EASE,
                  }}
                  className="mt-8 rounded-2xl bg-bone p-5"
                >
                  <div className="eyebrow text-olive mb-1.5">
                    Start a conversation
                  </div>
                  <p className="font-display text-xl font-semibold text-ink">
                    Tell us about your project.
                  </p>
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group mt-4 inline-flex items-center gap-2.5 bg-ink hover:bg-ink-soft text-white text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-colors"
                  >
                    Contact our team
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-olive text-ink">
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
