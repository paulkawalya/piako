import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="paper-bg section-pad">
      <div className="mx-auto max-w-[860px] px-5 md:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-ink transition-colors animate-rise"
          style={{ animationDelay: "0.04s" }}
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
          Back to home
        </Link>

        <div className="mt-8 flex items-center gap-3 animate-rise" style={{ animationDelay: "0.08s" }}>
          <span className="olive-rule origin-left animate-draw" />
          <span className="eyebrow text-olive">{eyebrow}</span>
        </div>
        <h1
          className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink animate-rise"
          style={{ animationDelay: "0.14s" }}
        >
          {title}
        </h1>
        <p
          className="mt-5 text-lg text-ink/65 leading-relaxed animate-rise"
          style={{ animationDelay: "0.22s" }}
        >
          {intro}
        </p>

        <div className="mt-10 pt-8 border-t border-ink/10 space-y-9">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl md:text-2xl font-bold text-ink">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm md:text-base text-ink/65 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-ink/10 text-xs text-ink/45">
          Last updated {updated}. Questions about this page?{" "}
          <Link href="/contact" className="text-ink font-semibold hover:underline">
            Contact us
          </Link>
          .
        </div>
      </div>
    </section>
  );
}
