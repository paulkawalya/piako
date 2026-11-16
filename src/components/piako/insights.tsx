"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { PageHeader } from "@/components/piako/page-header";
import { revealUp } from "@/components/piako/motion";
import { ARTICLES_DATA, Article } from "@/lib/piako/insights-data";
import { FeaturedArticle } from "@/components/piako/insights/featured-article";
import { ArticleCard } from "@/components/piako/insights/article-card";
import { NewsletterBox } from "@/components/piako/insights/newsletter-box";

export function Insights() {
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(ARTICLES_DATA.map((a) => a.category)))];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return ARTICLES_DATA.filter((a) => {
      const matchCategory =
        selectedCategory === "All" || a.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        a.title.toLowerCase().includes(query) ||
        a.excerpt.toLowerCase().includes(query) ||
        a.author.toLowerCase().includes(query) ||
        a.category.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is the first matching article or default featured
  const featured = filtered[0];
  const gridArticles = filtered.slice(1);

  return (
    <section id="insights" className="paper-bg section-pad min-h-screen">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        {/* Page Header */}
        <PageHeader
          eyebrow="Insights & Field Reports"
          title="Engineering Knowledge, Case Studies and Industry Analysis."
          intro={
            <p>
              Practical technical articles authored by Piako engineers, drawing directly from field experiences across hospital construction, urban water networks, and geotechnical investigations.
            </p>
          }
        />

        {/* Filter Bar & Search */}
        <motion.div {...revealUp(0.04)} className="bg-white border border-ink/10 rounded-3xl p-5 md:p-6 mb-10 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink/40 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles by topic, project, or keyword…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-bone rounded-full text-sm text-ink placeholder:text-ink/40 border border-ink/10 focus:outline-none focus:border-olive focus:ring-1 focus:ring-olive transition-all"
              />
            </div>
            <div className="text-xs font-mono text-ink/50 whitespace-nowrap self-end md:self-auto">
              {filtered.length} publication{filtered.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="h-px bg-ink/5" />

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-xs font-mono uppercase tracking-wider text-ink/50 mr-2">
              Topic:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-colors ${
                  selectedCategory === cat
                    ? "bg-ink text-white"
                    : "bg-bone text-ink/70 hover:text-ink hover:bg-ink/5 border border-ink/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Article */}
        {featured && (
          <motion.div {...revealUp(0.06)}>
            <FeaturedArticle article={featured} />
          </motion.div>
        )}

        {/* Grid of Remaining Articles */}
        {gridArticles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {gridArticles.map((article, i) => (
              <motion.div key={article.slug} {...revealUp(Math.min((i + 1) * 0.05, 0.25))}>
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-ink/10 p-8">
            <h3 className="font-display text-xl font-bold text-ink">
              No matching publications found
            </h3>
            <p className="text-sm text-ink/60 mt-1 max-w-md mx-auto">
              We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try selecting a different topic.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center gap-2 bg-ink text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-ink-soft transition-colors"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Newsletter Box */}
        <motion.div {...revealUp(0.1)}>
          <NewsletterBox />
        </motion.div>
      </div>
    </section>
  );
}
