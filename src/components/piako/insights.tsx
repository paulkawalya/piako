"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import { INSIGHTS } from "@/lib/piako/content";

export function Insights() {
  return (
    <section id="insights" className="bg-bone section-pad border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="olive-rule" />
              <span className="eyebrow text-olive">07 — Insights</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight text-ink">
              Engineering articles, project milestones and industry updates.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-base text-ink/65 leading-relaxed">
              Practical, plain-language writing from our engineers. Subscribe to
              receive new posts in your inbox.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {INSIGHTS.map((post, i) => (
            <article
              key={post.title}
              className={`group bg-white border border-ink/10 rounded-2xl overflow-hidden card-lift flex flex-col ${
                i === 0 ? "md:col-span-1" : ""
              }`}
            >
              {/* Visual header */}
              <div className="relative aspect-[16/9] bg-gradient-to-br from-ink to-ink-soft overflow-hidden">
                <div className="absolute inset-0 grid-overlay opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-7xl text-olive/30 font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-block text-[10px] uppercase tracking-wider bg-olive text-white font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <div className="text-xs text-ink/50 mb-3 font-mono">
                  {post.date}
                </div>
                <h3 className="font-display text-lg md:text-xl font-bold text-ink leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <a
                  href="#insights"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-olive transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe strip */}
        <div className="mt-12 md:mt-16 bg-ink text-white rounded-2xl p-7 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="eyebrow text-olive mb-2">Stay informed</div>
            <p className="font-display text-xl md:text-2xl max-w-2xl">
              Get notified when we publish new engineering articles, project
              milestones and tender updates.
            </p>
          </div>
          <form
            className="flex w-full md:w-auto items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@organisation.org"
              className="w-full md:w-72 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-olive"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white font-semibold px-5 py-3 rounded-full whitespace-nowrap transition-colors"
            >
              Subscribe
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
