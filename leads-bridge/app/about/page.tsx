import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Leads Bridge Group is a premium B2B business development firm. We help ambitious companies build qualified pipeline, accelerate revenue, and scale their sales operations.",
  openGraph: {
    title: "About Us | The Leads Bridge Group",
    description:
      "The Leads Bridge Group is a premium B2B business development firm helping ambitious companies build qualified pipeline and accelerate revenue.",
  },
};

const values = [
  {
    title: "Precision Over Volume",
    description:
      "We believe targeted, intelligent outreach will always outperform mass spray-and-pray tactics. We invest heavily in ICP definition and account research before we reach out to anyone.",
  },
  {
    title: "Senior Talent, Always",
    description:
      "We don't use junior resources learning on your budget. Every client engagement is led by practitioners with years of real B2B experience across the industries we serve.",
  },
  {
    title: "Process Obsession",
    description:
      "Great results don't happen by accident. We've built and refined processes across 180+ engagements that we continue to optimize — so every client benefits from what we've learned.",
  },
  {
    title: "Radical Transparency",
    description:
      "You'll always know exactly what we're doing, why we're doing it, and how it's performing. No black boxes, no vague reports — full visibility into every metric that matters.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(18,65,211,0.12) 0%, transparent 70%)",
        }}
      >
        <div className="container-wide">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full" style={{ background: "#1241d3" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a7de8" }}>
              Our Story
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            Built by B2B Practitioners for B2B Companies
          </h1>
          <p className="mt-6 text-lg text-white/45 max-w-2xl leading-relaxed">
            The Leads Bridge Group was founded on a simple belief: most B2B lead generation is broken because it&apos;s done by people who have never sold anything. We built a different kind of firm.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-white/[0.05]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-5">Who We Are</h2>
              <div className="space-y-4 text-white/50 text-sm leading-relaxed">
                <p>
                  The Leads Bridge Group is a premium B2B business development firm that works with companies across technology, financial services, healthcare, professional services, and manufacturing.
                </p>
                <p>
                  We&apos;re practitioners first. Our team has built sales teams, carried quotas, and grown businesses. We bring that operator mindset to every client engagement — we think about your pipeline the way we&apos;d think about our own.
                </p>
                <p>
                  Since our founding, we&apos;ve served over 180 B2B companies, generated more than $240M in pipeline, and maintained a 94% client retention rate. We&apos;re proud of those numbers, but we&apos;re prouder of the relationships behind them.
                </p>
                <p>
                  We work with a select number of clients at any given time, which means every engagement gets real attention from senior people. We&apos;re not the right fit for everyone — but for the companies we work with, we&apos;re usually the last BD firm they ever need.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg"
                  style={{ background: "#1241d3" }}
                >
                  Work With Us
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "180+", label: "Companies Served" },
                { value: "$240M+", label: "Pipeline Generated" },
                { value: "94%", label: "Client Retention" },
                { value: "12", label: "Industries Served" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-6 text-center card-surface"
                >
                  <div
                    className="text-3xl font-bold mb-1"
                    style={{
                      background: "linear-gradient(135deg, #1241d3, #4a7de8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/35">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/[0.05]">
        <div className="container-wide">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl p-6 card-surface"
              >
                <CheckCircle2 size={18} className="mb-3" style={{ color: "#1241d3" }} />
                <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work Together?"
        description="We take on a limited number of new clients each quarter. If you&apos;re interested in working with us, let&apos;s start with a conversation."
        primaryLabel="Book a Strategic Discussion"
        primaryHref="/contact/"
        secondaryLabel="View Our Results"
        secondaryHref="/case-studies/"
      />
    </>
  );
}
