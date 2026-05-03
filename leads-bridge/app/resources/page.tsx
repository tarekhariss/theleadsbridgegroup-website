import type { Metadata } from "next";
import { HubHero } from "@/components/hub-hero";
import { CTASection } from "@/components/cta-section";
import { ContentCard } from "@/components/content-card";
import { FadeUp } from "@/components/motion-wrappers";
import { resources } from "@/lib/data/resources";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "B2B business development guides, playbooks, and insights from The Leads Bridge Group — covering lead generation, ABM, outreach strategy, and revenue growth.",
  openGraph: {
    title: "Resources | The Leads Bridge Group",
    description:
      "B2B business development guides, playbooks, and insights covering lead generation, ABM, outreach, and revenue growth.",
  },
};

const categories = ["All", ...Array.from(new Set(resources.map((r) => r.category)))];

export default function ResourcesPage() {
  return (
    <>
      <HubHero
        eyebrow="Insights & Guides"
        title="Resources"
        description="Practical B2B business development insights, playbooks, and frameworks from practitioners who do this work every day."
        stats={[
          { value: `${resources.length}+`, label: "Resources" },
          { value: `${categories.length - 1}`, label: "Categories" },
          { value: "Weekly", label: "New Content" },
        ]}
      />

      <section className="pb-20">
        <div className="container-wide">
          {/* Category chips */}
          <FadeUp>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className="px-3.5 py-1.5 text-xs font-medium rounded-lg cursor-default transition-all"
                  style={
                    i === 0
                      ? {
                          background: "rgba(18,65,211,0.2)",
                          border: "1px solid rgba(18,65,211,0.35)",
                          color: "#4a7de8",
                          fontWeight: 600,
                        }
                      : {
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.02)",
                          color: "rgba(255,255,255,0.45)",
                        }
                  }
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* Featured resource */}
          <FadeUp delay={0.05}>
            <div
              className="mb-6 rounded-2xl p-7 md:p-10 card-premium"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="brand-dot" />
                    <span className="eyebrow">{resources[0].category} · Featured</span>
                    <span className="text-xs text-white/30">{resources[0].readTime}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-3">
                    {resources[0].title}
                  </h2>
                  <p className="text-sm text-white/40 leading-relaxed mb-5">
                    {resources[0].excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {resources[0].tags.map((tag) => (
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
                    href={`/resources/${resources[0].slug}/`}
                    className="btn-primary inline-flex text-xs py-2 px-4"
                  >
                    Read Article →
                  </a>
                </div>
                <div
                  className="rounded-xl p-5 text-center"
                  style={{
                    background: "rgba(18,65,211,0.08)",
                    border: "1px solid rgba(18,65,211,0.18)",
                  }}
                >
                  <div className="text-3xl font-bold text-gradient-brand mb-1">
                    {resources[0].readTime.replace(" min read", "")}
                  </div>
                  <div className="text-xs text-white/35">min read</div>
                  <div className="mt-4 pt-4 border-t border-white/[0.06]">
                    <div className="text-xs text-white/30">{formatDate(resources[0].publishedAt)}</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.slice(1).map((resource, i) => (
              <ContentCard
                key={resource.slug}
                href={`/resources/${resource.slug}/`}
                eyebrow={resource.category}
                title={resource.title}
                excerpt={resource.excerpt}
                tags={resource.tags}
                meta={`${formatDate(resource.publishedAt)} · ${resource.readTime}`}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Our Insights in Your Inbox?"
        description="Join 2,000+ B2B professionals who get our latest research, playbooks, and frameworks delivered weekly."
        primaryLabel="Get in Touch"
        primaryHref="/contact/"
        secondaryLabel="View All Services"
        secondaryHref="/services/"
      />
    </>
  );
}
