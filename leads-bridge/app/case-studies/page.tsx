import type { Metadata } from "next";
import { ContentCard } from "@/components/content-card";
import { HubHero } from "@/components/hub-hero";
import { CTASection } from "@/components/cta-section";
import { FadeUp } from "@/components/motion-wrappers";
import { caseStudies } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real B2B companies. Explore how The Leads Bridge Group has helped clients build qualified pipeline, accelerate revenue, and scale their business development operations.",
  openGraph: {
    title: "Case Studies | The Leads Bridge Group",
    description:
      "Real results from real B2B companies. Explore how The Leads Bridge Group has helped clients build qualified pipeline and accelerate revenue growth.",
  },
};

export default function CaseStudiesPage() {
  const industries = [...new Set(caseStudies.map((cs) => cs.industry))];

  return (
    <>
      <HubHero
        eyebrow="Client Results"
        title="Case Studies"
        description="Real results from real B2B companies. See how we've helped clients build qualified pipeline, accelerate revenue, and scale their business development operations."
        stats={[
          { value: "180+", label: "Engagements" },
          { value: "$240M+", label: "Pipeline Generated" },
          { value: "94%", label: "Retention Rate" },
        ]}
      />

      <section className="pb-8">
        <div className="container-wide">
          {/* Industry filter chips */}
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-10">
              <span
                className="px-3.5 py-1.5 text-xs font-semibold rounded-lg text-white"
                style={{
                  background: "rgba(18,65,211,0.2)",
                  border: "1px solid rgba(18,65,211,0.35)",
                }}
              >
                All Industries
              </span>
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-lg text-white/45 hover:text-white/70 cursor-default transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                >
                  {ind}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Featured case study */}
          <FadeUp delay={0.05}>
            <div
              className="mb-4 rounded-2xl p-7 md:p-10 card-premium"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="grid md:grid-cols-[1fr_280px] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="brand-dot" />
                    <span className="eyebrow">{caseStudies[0].industry} · Featured</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3">
                    {caseStudies[0].title}
                  </h2>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">
                    {caseStudies[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {caseStudies[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] rounded-md text-white/35"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/case-studies/${caseStudies[0].slug}/`}
                    className="btn-primary inline-flex text-xs py-2 px-4"
                  >
                    Read Full Case Study →
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {caseStudies[0].metrics.slice(0, 4).map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl p-4 text-center"
                      style={{
                        background: "rgba(18,65,211,0.08)",
                        border: "1px solid rgba(18,65,211,0.2)",
                      }}
                    >
                      <div className="text-xl font-bold text-gradient-brand">{m.value}</div>
                      <div className="text-[10px] text-white/35 mt-1 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseStudies.slice(1).map((cs, i) => (
              <ContentCard
                key={cs.slug}
                href={`/case-studies/${cs.slug}/`}
                eyebrow={cs.industry}
                title={cs.title}
                excerpt={cs.excerpt}
                tags={cs.tags}
                meta={new Date(cs.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                })}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Be Our Next Case Study?"
        description="Every case study started with a conversation. Tell us your goals and we'll show you exactly how we'd approach your market."
        primaryLabel="Book a Strategic Discussion"
        secondaryLabel="Explore Our Services"
        secondaryHref="/services/"
      />
    </>
  );
}
