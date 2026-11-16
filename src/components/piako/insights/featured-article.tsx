"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, UserCheck } from "lucide-react";
import { Article } from "@/lib/piako/insights-data";

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article: a }: FeaturedArticleProps) {
  return (
    <article className="group relative bg-white border border-ink/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-12">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Image Banner */}
        <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden bg-ink">
          <img
            src={a.image}
            alt={a.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="text-xs uppercase font-mono tracking-wider bg-olive text-white font-bold px-3 py-1 rounded-full shadow-md">
              Featured Insight
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
            <span className="bg-ink/80 px-2.5 py-1 rounded-full font-mono">{a.category}</span>
            <span className="flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-olive" />
              {a.readingTime}
            </span>
          </div>
        </div>

        {/* Right Column: Article Details */}
        <div className="lg:col-span-6 p-6 lg:p-10 lg:pl-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-ink/50 font-mono mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-olive" />
                {a.date}
              </span>
              <span>·</span>
              <span className="text-olive font-semibold">{a.authorRole}</span>
            </div>

            <h3 className="font-display text-2xl md:text-3xl lg:text-[2rem] font-bold text-ink leading-tight group-hover:text-olive transition-colors">
              <Link href={`/insights/${a.slug}`}>
                {a.title}
              </Link>
            </h3>

            <p className="text-sm md:text-base text-ink/70 leading-relaxed mt-4 line-clamp-3">
              {a.excerpt}
            </p>

            {/* Quick Takeaway Teaser */}
            <div className="mt-5 p-3.5 rounded-2xl bg-bone border border-ink/5 text-xs text-ink/75 space-y-1.5">
              <span className="font-mono text-[10px] uppercase font-bold text-olive tracking-wider block">
                Key Engineering Takeaway:
              </span>
              <p className="italic">
                &ldquo;{a.takeaways[0]}&rdquo;
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-olive/15 text-olive flex items-center justify-center font-bold text-xs">
                PC
              </div>
              <div>
                <div className="text-xs font-semibold text-ink">{a.author}</div>
                <div className="text-[10px] text-ink/50">{a.authorRole}</div>
              </div>
            </div>

            <Link
              href={`/insights/${a.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-olive hover:text-olive-dark transition-colors"
            >
              Read full article
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
