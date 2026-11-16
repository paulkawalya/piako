import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/piako/navbar";
import { Footer } from "@/components/piako/footer";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you are looking for could not be found on the Piako Consult website.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="paper-bg section-pad">
          <div className="mx-auto max-w-[860px] px-5 md:px-8">
            <div className="flex items-center gap-3 animate-rise" style={{ animationDelay: "0.05s" }}>
              <span className="olive-rule origin-left animate-draw" />
              <span className="eyebrow text-olive">404 &mdash; Page not found</span>
            </div>
            <h1
              className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink animate-rise"
              style={{ animationDelay: "0.12s" }}
            >
              We couldn&apos;t find that page.
            </h1>
            <p
              className="mt-5 text-lg text-ink/65 leading-relaxed animate-rise"
              style={{ animationDelay: "0.2s" }}
            >
              The link may be out of date, or the page may have moved. Use the
              navigation above, or start again from one of the links below.
            </p>
            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-rise"
              style={{ animationDelay: "0.28s" }}
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-ink text-sm font-bold pl-5 pr-1.5 py-1.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to home
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 border border-ink/15 hover:border-ink/30 text-ink text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
              >
                Contact us
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
