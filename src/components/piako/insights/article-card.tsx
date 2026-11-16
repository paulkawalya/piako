"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Article } from "@/lib/piako/insights-data";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article: a }: ArticleCardProps) {
  return (
    <article className="group bg-white border border-ink/10 hover:border-olive/60 rounded-3xl overflow-hidden card-lift transition-all flex flex-col justify-between shadow-sm">
      <div>
        {/* Thumbnail Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <img
            src={a.image}
            alt={a.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="text-[10px] uppercase font-mono tracking-wider bg-white/95 text-ink font-bold px-2.5 py-1 rounded-full shadow">
              {a.category}
            </span>
          </div>
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-olive" />
              {a.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-olive" />
              {a.readingTime}
            </span>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-ink leading-snug group-hover:text-olive transition-colors line-clamp-2">
            <Link href={`/insights/${a.slug}`}>
              {a.title}
            </Link>
          </h3>

          <p className="text-sm text-ink/70 leading-relaxed mt-3 line-clamp-3">
            {a.excerpt}
          </p>
        </div>
      </div>

      {/* Footer Byline & Read Link */}
      <div className="px-6 pb-6 pt-0 border-t border-ink/5 mt-2">
        <div className="flex items-center justify-between pt-4">
          <div className="text-xs text-ink/55 truncate max-w-[180px]">
            {a.authorRole}
          </div>
          <Link
            href={`/insights/${a.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-olive group-hover:text-olive-dark transition-colors"
          >
            Read article
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
