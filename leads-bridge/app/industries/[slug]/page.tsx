import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTASection } from "@/components/cta-section";
import { industries, getIndustryBySlug } from "@/lib/data/industries";
import { ContentCard } from "@/components/content-card";
import { caseStudies } from "@/lib/data/case-studies";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motion-wrappers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Not Found" };

  return {
    title: industry.title,
    description: industry.description,
    openGraph: {
      title: `${industry.title} | The Leads Bridge Group`,
      description: industry.description,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const relatedCaseStudies = caseStudies
    .filter((cs) => cs.industry.toLowerCase().includes(slug.replace("-", " ").split("-")[0]))
    .slice(0, 3);

  const fallbackCaseStudies = relatedCaseStudies.length === 0
    ? caseStudies.slice(0, 3)
    : relatedCaseStudies;

  const otherIndustries = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

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
                  { label: "Industries", href: "/industries/" },
                  { label: industry.title },
                ]}
              />

              <div className="mt-6">
                <span
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-lg mb-4"
                  style={{ background: "rgba(18,65,211,0.15)", color: "#4a7de8", border: "1px solid rgba(18,65,211,0.25)" }}
                >
                  Industry
                </span>
              </div>

              <h1 className="display-2 text-white max-w-3xl">{industry.title}</h1>

              <p className="mt-3 text-base font-medium max-w-2xl" style={{ color: "#4a7de8" }}>
                {industry.tagline}
              </p>

              <p className="mt-4 text-base text-white/45 max-w-2xl leading-relaxed">{industry.description}</p>
            </FadeUp>

            {/* Stats */}
            <FadeUp delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-3">
                {industry.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl px-6 py-4 text-center"
                    style={{ background: "rgba(18,65,211,0.07)", border: "1px solid rgba(18,65,211,0.18)" }}
                  >
                    <div className="text-xl font-bold text-gradient-brand mb-0.5">{stat.value}</div>
                    <div className="text-xs text-white/35">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Challenges & Solutions ────────────────────────── */}
        <section className="py-14 border-t border-white/[0.05]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-10 max-w-5xl">
              <SlideInLeft>
                <h2 className="text-xl font-bold text-white mb-6">Key Challenges We Solve</h2>
                <div className="space-y-3">
                  {industry.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl p-4"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center text-xs shrink-0 mt-0.5"
                        style={{ background: "rgba(255,100,100,0.12)", color: "#f87171" }}
                      >
                        ✕
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed">{c}</p>
                    </div>
                  ))}
                </div>
              </SlideInLeft>

              <SlideInRight>
                <h2 className="text-xl font-bold text-white mb-6">How We Help</h2>
                <div className="space-y-3">
                  {industry.solutions.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl p-4"
                      style={{ background: "rgba(18,65,211,0.05)", border: "1px solid rgba(18,65,211,0.15)" }}
                    >
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "#1241d3" }} />
                      <p className="text-sm text-white/50 leading-relaxed">{s}</p>
                    </div>
                  ))}
                </div>
              </SlideInRight>
            </div>

            {/* Common engagements */}
            {industry.use_cases.length > 0 && (
              <FadeUp>
                <div className="mt-12 pt-12 border-t border-white/[0.05]">
                  <h2 className="text-xl font-bold text-white mb-5">Common Engagements</h2>
                  <div className="flex flex-wrap gap-2">
                    {industry.use_cases.map((uc) => (
                      <span
                        key={uc}
                        className="px-3.5 py-1.5 text-sm rounded-xl text-white/45"
                        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)" }}
                      >
                        {uc}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="py-14 border-t border-white/[0.05]">
          <div className="container-wide">
            <FadeUp>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">Related Case Studies</h2>
                <Link href="/case-studies/" className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors">
                  All <ArrowRight size={13} />
                </Link>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {fallbackCaseStudies.map((cs, i) => (
                <ContentCard
                  key={cs.slug}
                  href={`/case-studies/${cs.slug}/`}
                  eyebrow={cs.industry}
                  title={cs.title}
                  excerpt={cs.excerpt}
                  tags={cs.tags}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Other Industries */}
        {otherIndustries.length > 0 && (
          <section className="py-14 border-t border-white/[0.05]">
            <div className="container-wide">
              <FadeUp>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Other Industries</h2>
                  <Link href="/industries/" className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors">
                    All <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherIndustries.map((ind, i) => (
                  <ContentCard
                    key={ind.slug}
                    href={`/industries/${ind.slug}/`}
                    eyebrow="Industry"
                    title={ind.title}
                    excerpt={ind.excerpt}
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
