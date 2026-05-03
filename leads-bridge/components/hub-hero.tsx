"use client";

import { cn } from "@/lib/utils";

interface HubHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  stats?: { value: string; label: string }[];
}

export function HubHero({ eyebrow, title, description, className, stats }: HubHeroProps) {
  return (
    <section className={cn("relative pt-32 pb-16 overflow-hidden", className)}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(18,65,211,0.14) 0%, transparent 65%)",
        }}
      />
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Vertical accent line */}
      <div
        className="absolute left-1/2 top-0 w-px -translate-x-1/2 pointer-events-none"
        style={{
          height: "160px",
          background: "linear-gradient(to bottom, transparent, rgba(18,65,211,0.5), transparent)",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Text block — CSS animated so it's visible on first paint */}
        <div style={{ animation: "slide-in-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
          {eyebrow && (
            <div className="flex items-center gap-2 mb-4">
              <div className="brand-dot" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          )}

          <h1 className="display-2 text-white max-w-3xl">{title}</h1>

          <p className="mt-5 text-base md:text-lg text-white/45 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div
            className="mt-7 h-px w-14"
            style={{ background: "linear-gradient(90deg, #1241d3, transparent)" }}
          />
        </div>

        {stats && stats.length > 0 && (
          <div
            className="mt-12 flex flex-wrap gap-8 md:gap-14"
            style={{ animation: "slide-in-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-gradient-brand">{s.value}</div>
                <div className="text-xs text-white/35 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
