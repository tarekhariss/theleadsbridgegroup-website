import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, User } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTASection } from "@/components/cta-section";
import { resources, getResourceBySlug } from "@/lib/data/resources";
import { ContentCard } from "@/components/content-card";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) return { title: "Not Found" };

  return {
    title: resource.title,
    description: resource.excerpt,
    openGraph: {
      title: `${resource.title} | The Leads Bridge Group`,
      description: resource.excerpt,
      type: "article",
      publishedTime: resource.publishedAt,
      authors: [resource.author],
    },
  };
}

function renderMarkdown(body: string): string {
  return body
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold text-white mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-base font-semibold text-white mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/^- (.+)$/gm, '<li class="text-white/55 text-sm leading-relaxed ml-4 list-disc">$1</li>')
    .replace(/^([^<\n].+)$/gm, '<p class="text-white/55 text-sm leading-relaxed mb-4">$1</p>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-2 mb-6">$&</ul>');
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) notFound();

  const relatedResources = resources
    .filter((r) => r.slug !== resource.slug && (r.category === resource.category || r.tags.some((t) => resource.tags.includes(t))))
    .slice(0, 3);

  const fallback = relatedResources.length === 0
    ? resources.filter((r) => r.slug !== resource.slug).slice(0, 3)
    : relatedResources;

  return (
    <>
      <article>
        <section
          className="relative pt-28 pb-10 overflow-hidden"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(18,65,211,0.10) 0%, transparent 70%)",
          }}
        >
          <div className="container-wide">
            <Breadcrumb
              items={[
                { label: "Resources", href: "/resources/" },
                { label: resource.title },
              ]}
            />

            <div className="mt-6">
              <span
                className="inline-block px-2.5 py-1 text-xs font-medium rounded mb-4"
                style={{ background: "rgba(18,65,211,0.15)", color: "#4a7de8" }}
              >
                {resource.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
              {resource.title}
            </h1>

            <p className="mt-4 text-base text-white/50 max-w-2xl leading-relaxed">
              {resource.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/35">
              <span className="flex items-center gap-1.5">
                <User size={12} />
                {resource.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {resource.readTime}
              </span>
              <span>{formatDate(resource.publishedAt)}</span>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-wide">
            <div className="max-w-3xl">
              <div
                className="rounded-2xl p-8 md:p-10"
                style={{ background: "#080808", border: "1px solid rgba(255,255,255,0.06)" }}
                dangerouslySetInnerHTML={{ __html: renderMarkdown(resource.body) }}
              />

              {resource.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="text-xs text-white/30 mr-1 mt-0.5">Tags:</span>
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded text-white/40"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {fallback.length > 0 && (
          <section className="py-16 border-t border-white/[0.05]">
            <div className="container-wide">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-white">More Resources</h2>
                <Link
                  href="/resources/"
                  className="flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: "#4a7de8" }}
                >
                  All resources <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fallback.map((r) => (
                  <ContentCard
                    key={r.slug}
                    href={`/resources/${r.slug}/`}
                    eyebrow={r.category}
                    title={r.title}
                    excerpt={r.excerpt}
                    tags={r.tags}
                    meta={`${formatDate(r.publishedAt)} · ${r.readTime}`}
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
