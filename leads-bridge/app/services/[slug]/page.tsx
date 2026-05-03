import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTASection } from "@/components/cta-section";
import { services, getServiceBySlug } from "@/lib/data/services";
import { ContentCard } from "@/components/content-card";
import { FadeUp, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motion-wrappers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | The Leads Bridge Group`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
                  { label: "Services", href: "/services/" },
                  { label: service.title },
                ]}
              />

              <div className="mt-6">
                <span
                  className="inline-block px-3 py-1 text-xs font-semibold rounded-lg mb-4"
                  style={{ background: "rgba(18,65,211,0.15)", color: "#4a7de8", border: "1px solid rgba(18,65,211,0.25)" }}
                >
                  Service
                </span>
              </div>

              <h1 className="display-2 text-white max-w-3xl">{service.title}</h1>

              <p className="mt-3 text-lg font-medium max-w-2xl" style={{ color: "#4a7de8" }}>
                {service.tagline}
              </p>

              <p className="mt-4 text-base text-white/45 max-w-2xl leading-relaxed">{service.description}</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact/" className="btn-primary">
                  Get Started <ArrowRight size={14} />
                </Link>
                <Link href="/case-studies/" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────── */}
        <section className="py-14 border-t border-white/[0.05]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-[1fr_280px] gap-10">
              {/* Main content */}
              <div className="space-y-12">
                {/* Process steps */}
                <SlideInLeft>
                  <h2 className="text-xl font-bold text-white mb-6">How It Works</h2>
                  <div className="space-y-3">
                    {service.process.map((step, i) => (
                      <div
                        key={step.step}
                        className="flex gap-4 rounded-2xl p-5"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        <div
                          className="w-8 h-8 rounded-xl text-xs font-bold text-white flex items-center justify-center shrink-0"
                          style={{
                            background: "linear-gradient(135deg, #1241d3, #1a50e8)",
                            boxShadow: "0 0 16px rgba(18,65,211,0.3)",
                          }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1.5">{step.step}</h3>
                          <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </SlideInLeft>

                {/* Features */}
                <FadeUp>
                  <h2 className="text-xl font-bold text-white mb-6">What&apos;s Included</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 rounded-xl p-4"
                        style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: "#1241d3" }} />
                        <span className="text-sm text-white/50 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                {/* Deliverables */}
                <SlideInRight>
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "rgba(18,65,211,0.06)", border: "1px solid rgba(18,65,211,0.2)" }}
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#4a7de8" }}>
                      Deliverables
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <div className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: "#1241d3" }} />
                          <span className="text-sm text-white/50">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SlideInRight>

                {/* Ideal For */}
                <FadeUp delay={0.1}>
                  <div
                    className="rounded-2xl p-6"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
                      Ideal For
                    </h3>
                    <ul className="space-y-2.5">
                      {service.ideal_for.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div className="mt-2 w-1 h-1 rounded-full shrink-0 opacity-40" style={{ background: "white" }} />
                          <span className="text-sm text-white/40">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>

                {/* CTA card */}
                <FadeUp delay={0.15}>
                  <div
                    className="rounded-2xl p-5 text-center"
                    style={{
                      background: "rgba(18,65,211,0.06)",
                      border: "1px solid rgba(18,65,211,0.2)",
                    }}
                  >
                    <p className="text-xs text-white/40 leading-relaxed mb-4">
                      Ready to get started with {service.title}?
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

        {/* Other Services */}
        {otherServices.length > 0 && (
          <section className="py-14 border-t border-white/[0.05]">
            <div className="container-wide">
              <FadeUp>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-white">Other Services</h2>
                  <Link href="/services/" className="flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors">
                    All <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherServices.map((s, i) => (
                  <ContentCard
                    key={s.slug}
                    href={`/services/${s.slug}/`}
                    eyebrow="Service"
                    title={s.title}
                    excerpt={s.excerpt}
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
