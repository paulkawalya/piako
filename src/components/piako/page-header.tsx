import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  tone?: "light" | "dark";
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  eyebrow,
  title,
  intro,
  tone = "light",
  actions,
  className = "",
}: PageHeaderProps) {
  const dark = tone === "dark";

  return (
    <header className={`grid lg:grid-cols-12 gap-10 mb-12 md:mb-16 ${className}`}>
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3 mb-5">
          <span className="olive-rule origin-left animate-draw" />
          <span className="eyebrow text-olive">{eyebrow}</span>
        </div>
        <h1
          className={`font-display text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] font-bold tracking-tight ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h1>
        {actions ? <div className="mt-8">{actions}</div> : null}
      </div>
      <div
        className={`lg:col-span-4 lg:col-start-9 flex items-end ${
          dark ? "text-white/65" : "text-ink/65"
        }`}
      >
        <div className="text-base leading-relaxed space-y-5">{intro}</div>
      </div>
    </header>
  );
}
