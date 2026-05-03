import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTASection } from "@/components/cta-section";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies";
import { ContentCard } from "@/components/content-card";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motion-wrappers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Not Found" };

  return {
    title: cs.title,
    description: cs.description,
    openGraph: {
      title: `${cs.title} | The Leads Bridge Group`,
      description: cs.description,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);

  if (!cs) notFound();

  const relatedCaseStudies = caseStudies
    .filter((c) => c.slug !== cs.slug && (c.industry === cs.industry || c.tags.some((t) => cs.tags.includes(t))))
    .slice(0, 3);

  const otherCaseStudies = relatedCaseStudies.length < 3
    ? [...relatedCaseStudies, ...caseStudies.filter((c) => c.slug !== cs.slug && !relatedCaseStudies.includes(c))].slice(0, 3)
    : relatedCaseStudies;

  return (
    <>
      <article>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative pt-28 pb-12 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(18,65,211,0.13) 0%, transparent 65%)",
            }}
          />
          <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

          <div className="container-wide relative z-10">
            <FadeUp>
              <Breadcrumb
                items={[
                  { label: "Case Studies", href: "/case-studies/" },
                  { label: cs.title },
                ]}
              />

              <div className="mt-6 flex flex-wrap gap-2">
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-lg"
                  style={{ background: "rgba(18,65,211,0.15)", color: "#4a7de8", border: "1px solid rgba(18,65,211,0.25)" }}
                >
                  {cs.industry}
                </span>
                <span
                  className="px-3 py-1 text-xs font-medium rounded-lg text-white/45"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}
                >
                  {cs.client}
                </span>
                <span
                  className="px-3 py-1 text-xs font-medium rounded-lg text-white/35"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {new Date(cs.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
                </span>
              </div>

              <h1 className="mt-5 display-2 text-white max-w-3xl">{cs.title}</h1>

              <p className="mt-4 text-lg text-white/45 max-w-2xl leading-relaxed">{cs.description}</p>
            </FadeUp>

            {/* KPI metrics */}
            <FadeUp delay={0.1}>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
                {cs.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl p-5 text-center card-premium"
                    style={{ background: "rgba(18,65,211,0.06)" }}
                  >
                    <div className="text-2xl md:text-3xl font-bold text-gradient-brand mb-1.5">{m.value}</div>
                    <div className="text-xs text-white/35 leading-tight">{m.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────── */}
        <section className="py-14 border-t border-white/[0.05]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10">
              {/* Main content */}
              <div className="space-y-10">
                {/* Challenge vs Solution */}
                <div className="grid md:grid-cols-2 gap-4">
                  <SlideInLeft>
                    <div
                      className="h-full rounded-2xl p-6"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: "rgba(255,100,100,0.12)", color: "#f87171" }}>✕</div>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/35">The Challenge</span>
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed">{cs.challenge}</p>
                    </div>
                  </SlideInLeft>

                  <SlideInRight>
                    <div
                      className="h-full rounded-2xl p-6"
                      style={{ background: "rgba(18,65,211,0.07)", border: "1px solid rgba(18,65,211,0.2)" }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-xs" style={{ background: "rgba(18,65,211,0.2)", color: "#4a7de8" }}>✓</div>
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#4a7de8" }}>Our Solution</span>
                      </div>
                      <p className="text-sm text-white/55 leading-relaxed">{cs.solution}</p>
                    </div>
                  </SlideInRight>
                </div>

                {/* What We Delivered */}
                <FadeUp>
                  <h2 className="heading-1 text-white mb-6 text-xl">What We Delivered</h2>
                  <StaggerContainer className="space-y-3">
                    {cs.results.map((result, i) => (
                      <StaggerItem
                        key={i}
                        className="flex items-start gap-4 rounded-xl p-4"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                          style={{ background: "rgba(18,65,211,0.15)", color: "#4a7de8" }}
                        >
                          {i + 1}
                        </div>
                        <p className="text-sm text-white/55 leading-relaxed">{result}</p>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </FadeUp>

                {/* Tags */}
                {cs.tags.length > 0 && (
                  <FadeUp>
                    <div className="flex flex-wrap gap-2 pt-8 border-t border-white/[0.06]">
                      <span className="text-xs text-white/25 mr-1 self-center">Tags:</span>
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs rounded-lg text-white/40"
                          style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </FadeUp>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Engagement info */}
                <FadeUp delay={0.1}>
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "rgba(18,65,211,0.06)", border: "1px solid rgba(18,65,211,0.18)" }}
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#4a7de8" }}>
                      Engagement Details
                    </h3>
                    <div className="space-y-4">
                      {[
                        { label: "Client", value: cs.client },
                        { label: "Industry", value: cs.industry },
                        { label: "Published", value: new Date(cs.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long" }) },
                      ].map((row) => (
                        <div key={row.label} className="flex flex-col gap-0.5">
                          <span className="text-[10px] text-white/30 uppercase tracking-wider">{row.label}</span>
                          <span className="text-sm font-medium text-white/70">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* KPI snapshot */}
                <FadeUp delay={0.15}>
                  <div
                    className="rounded-2xl p-5"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
                      Key Results
                    </h3>
                    <div className="space-y-4">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="flex items-center justify-between gap-3">
                          <span className="text-xs text-white/40 leading-tight">{m.label}</span>
                          <span className="text-sm font-bold text-gradient-brand shrink-0">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeUp>

                {/* CTA card */}
                <FadeUp delay={0.2}>
                  <div
                    className="rounded-2xl p-5 text-center"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <p className="text-xs text-white/40 leading-relaxed mb-4">
                      Get similar results for your business.
                    </p>
                    <Link href="/contact/" className="btn-primary w-full justify-center text-xs py-2.5">
                    Book a Strategic Discussion <ArrowRight size={12} />
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        {otherCaseStudies.length > 0 && (
          <section className="py-14 border-t border-white/[0.05]">
            <div className="container-wide">
              <FadeUp>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">More Case Studies</h2>
                  <Link href="/case-studies/" className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors">
                    All <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherCaseStudies.map((c, i) => (
                  <ContentCard
                    key={c.slug}
                    href={`/case-studies/${c.slug}/`}
                    eyebrow={c.industry}
                    title={c.title}
                    excerpt={c.excerpt}
                    tags={c.tags}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTASection />
    </>
  );
}
