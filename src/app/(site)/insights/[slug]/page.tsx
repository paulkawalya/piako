import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, CheckCircle2, UserCheck, Share2 } from "lucide-react";
import { Reveal } from "@/components/piako/motion";
import { ARTICLES_DATA, Article } from "@/lib/piako/insights-data";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return ARTICLES_DATA.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = ARTICLES_DATA.find((item) => item.slug === slug);

  if (!post) {
    return { title: "Insight not found" };
  }

  return {
    title: `${post.title} — Engineering Insights`,
    description: post.excerpt,
  };
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const post = ARTICLES_DATA.find((item) => item.slug === slug);

  if (!post) notFound();

  const related = ARTICLES_DATA.filter((item) => item.slug !== post.slug);

  return (
    <section className="paper-bg section-pad min-h-screen">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        {/* Navigation Breadcrumb */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 hover:text-olive transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all engineering insights
        </Link>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <Reveal className="lg:col-span-8" amount={0.05}>
            <article>
              {/* Category & Date Header */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs uppercase font-mono tracking-wider bg-olive text-white font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-ink/50 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-olive" />
                  {post.date}
                </span>
                <span className="text-xs text-ink/50 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-olive" />
                  {post.readingTime}
                </span>
              </div>

              {/* Title & Excerpt */}
              <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.12]">
                {post.title}
              </h1>

              <p className="mt-5 text-lg md:text-xl text-ink/75 leading-relaxed font-serif">
                {post.excerpt}
              </p>

              {/* Author Byline Bar */}
              <div className="mt-6 py-4 border-y border-ink/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-olive text-white flex items-center justify-center font-bold text-sm">
                    PC
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{post.author}</div>
                    <div className="text-xs text-ink/55">{post.authorRole}</div>
                  </div>
                </div>
                <div className="text-xs font-mono text-ink/40">
                  Piako Technical Publications
                </div>
              </div>

              {/* Featured Visual Image */}
              <div className="relative mt-8 aspect-[16/9] rounded-3xl overflow-hidden bg-ink shadow-lg border border-ink/10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-4 right-6 flex items-center justify-between text-white text-xs">
                  <span className="font-mono">Piako Consult Ltd · Technical Field Case Study</span>
                  <span className="font-mono">{post.category}</span>
                </div>
              </div>

              {/* Key Takeaways Callout Box */}
              {post.takeaways && post.takeaways.length > 0 && (
                <div className="my-8 p-6 md:p-8 rounded-3xl bg-bone border border-ink/10">
                  <div className="text-xs font-mono uppercase tracking-wider text-olive font-bold mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-olive" />
                    Key Engineering Takeaways for Practitioners
                  </div>
                  <ul className="space-y-2.5">
                    {post.takeaways.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm md:text-base text-ink/80">
                        <span className="text-olive font-bold mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Body Paragraphs */}
              <div className="mt-8 space-y-6">
                {post.body.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base md:text-[17px] text-ink/80 leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Article Footer & Consultation Link */}
              <div className="mt-12 pt-8 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 bg-white p-6 rounded-2xl border border-ink/5">
                <div>
                  <div className="font-display font-bold text-lg text-ink">
                    Planning a similar infrastructure assignment?
                  </div>
                  <p className="text-xs text-ink/60 mt-1">
                    Connect with Piako engineers to review technical requirements and tender documentation.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-olive hover:bg-olive-dark text-white text-sm font-bold px-6 py-3 rounded-full transition-colors shrink-0"
                >
                  Discuss project scope
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Right Sidebar: Related Publications */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="bg-white border border-ink/10 rounded-3xl p-6 md:p-7 shadow-sm">
                <div className="text-xs font-mono uppercase tracking-wider text-olive font-bold mb-4">
                  Related Publications
                </div>
                <div className="space-y-5">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/insights/${item.slug}`}
                      className="group block border-b border-ink/5 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="text-[10px] uppercase font-mono tracking-wider text-ink/50 font-bold">
                        {item.category}
                      </div>
                      <h4 className="mt-1.5 font-display text-sm font-bold text-ink leading-snug group-hover:text-olive transition-colors">
                        {item.title}
                      </h4>
                      <div className="mt-1.5 text-[11px] text-ink/40 font-mono flex items-center justify-between">
                        <span>{item.date}</span>
                        <span>{item.readingTime}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Statement of Qualifications Box */}
              <div className="bg-ink text-white rounded-3xl p-6 md:p-7 border border-white/10">
                <div className="text-xs font-mono text-olive uppercase tracking-wider mb-2">
                  Technical Pre-Qualification
                </div>
                <div className="font-display font-bold text-lg leading-snug">
                  PPDA Accredited Engineering Firm
                </div>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Certificate No. 80020000712953 | PPDA Reg: PRV/SRVCS/26072903/JUL26.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-olive hover:underline"
                >
                  Request company profile PDF &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
