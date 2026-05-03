import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTASection } from "@/components/cta-section";
import { useCases, getUseCaseBySlug } from "@/lib/data/use-cases";
import { ContentCard } from "@/components/content-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);
  if (!uc) return { title: "Not Found" };

  return {
    title: uc.title,
    description: uc.description,
    openGraph: {
      title: `${uc.title} | The Leads Bridge Group`,
      description: uc.description,
    },
  };
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const uc = getUseCaseBySlug(slug);

  if (!uc) notFound();

  const otherUseCases = useCases.filter((u) => u.slug !== uc.slug).slice(0, 3);

  return (
    <>
      <article>
        <section
          className="relative pt-28 pb-16 overflow-hidden"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(18,65,211,0.10) 0%, transparent 70%)",
          }}
        >
          <div className="container-wide">
            <Breadcrumb
              items={[
                { label: "Use Cases", href: "/use-cases/" },
                { label: uc.title },
              ]}
            />

            <div className="mt-6">
              <span
                className="inline-block px-2.5 py-1 text-xs font-medium rounded mb-4"
                style={{ background: "rgba(18,65,211,0.15)", color: "#4a7de8" }}
              >
                Use Case
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
              {uc.title}
            </h1>

            <p className="mt-3 text-base font-medium max-w-2xl" style={{ color: "#4a7de8" }}>
              {uc.tagline}
            </p>

            <p className="mt-4 text-base text-white/50 max-w-2xl leading-relaxed">
              {uc.description}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-12">
                {/* How It Works */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6">How It Works</h2>
                  <div className="space-y-4">
                    {uc.how_it_works.map((step, i) => (
                      <div
                        key={step.title}
                        className="flex gap-4 rounded-xl p-5"
                        style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        <div
                          className="w-7 h-7 rounded-full text-xs font-bold text-white flex items-center justify-center shrink-0"
                          style={{ background: "#1241d3" }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">{step.title}</h3>
                          <p className="text-sm text-white/45 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h2 className="text-xl font-bold text-white mb-6">Expected Outcomes</h2>
                  <div className="space-y-3">
                    {uc.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: "#1241d3" }} />
                        <p className="text-sm text-white/55 leading-relaxed">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                {/* Who It's For */}
                <div
                  className="rounded-xl p-6"
                  style={{ background: "rgba(18,65,211,0.08)", border: "1px solid rgba(18,65,211,0.2)" }}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#4a7de8" }}>
                    Who This Is For
                  </h3>
                  <ul className="space-y-2.5">
                    {uc.who_its_for.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#1241d3" }} />
                        <span className="text-sm text-white/55">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Related Services */}
                <div
                  className="rounded-xl p-6"
                  style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-white/35 mb-4">
                    Related Services
                  </h3>
                  <div className="space-y-2">
                    {uc.related_services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-sm text-white/50"
                      >
                        <ArrowRight size={12} style={{ color: "#1241d3" }} />
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact/"
                  className="block w-full py-3 text-sm font-semibold text-white rounded-lg text-center transition-opacity hover:opacity-90"
                  style={{ background: "#1241d3" }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {otherUseCases.length > 0 && (
          <section className="py-16 border-t border-white/[0.05]">
            <div className="container-wide">
              <h2 className="text-xl font-bold text-white mb-8">More Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherUseCases.map((u) => (
                  <ContentCard
                    key={u.slug}
                    href={`/use-cases/${u.slug}/`}
                    eyebrow="Use Case"
                    title={u.title}
                    excerpt={u.excerpt}
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
