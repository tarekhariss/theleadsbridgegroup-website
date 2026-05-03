import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HubHero } from "@/components/hub-hero";
import { CTASection } from "@/components/cta-section";
import { ContentCard } from "@/components/content-card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion-wrappers";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore The Leads Bridge Group's B2B business development services — from lead generation and ABM to sales pipeline management and revenue growth consulting.",
  openGraph: {
    title: "Services | The Leads Bridge Group",
    description:
      "B2B business development services including lead generation, ABM, pipeline management, and revenue growth consulting.",
  },
};

const processSteps = [
  { step: "01", title: "Discovery", desc: "We map your ICP, competitive landscape, and current revenue motion." },
  { step: "02", title: "Strategy", desc: "Build a bespoke outbound strategy, messaging framework, and target list." },
  { step: "03", title: "Execution", desc: "Launch multi-channel sequences with senior-led personalisation at scale." },
  { step: "04", title: "Optimise", desc: "Weekly reporting, A/B testing, and continuous pipeline refinement." },
];

export default function ServicesPage() {
  return (
    <>
      <HubHero
        eyebrow="What We Offer"
        title="Our Services"
        description="From building your first outbound motion to scaling a proven revenue engine, we have the expertise and process to accelerate your next phase of growth."
        stats={[
          { value: "5", label: "Core Services" },
          { value: "180+", label: "Clients Served" },
          { value: "12", label: "Industries" },
        ]}
      />

      {/* Process strip */}
      <section className="py-10 border-b border-white/[0.05]">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-center gap-2 mb-7">
              <div className="brand-dot" />
              <span className="eyebrow">How We Work</span>
            </div>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((s) => (
              <StaggerItem
                key={s.step}
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="text-xs font-bold mb-3"
                  style={{ color: "#1241d3" }}
                >
                  {s.step}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-xs text-white/35 leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide">
          <FadeUp>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="brand-dot" />
                <span className="eyebrow">Service Catalogue</span>
              </div>
              <h2 className="heading-1 text-white">All Services</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <ContentCard
                key={service.slug}
                href={`/services/${service.slug}/`}
                eyebrow="Service"
                title={service.title}
                excerpt={service.excerpt}
                variant="featured"
                index={i}
              />
            ))}
          </div>

          {/* Engagement models */}
          <FadeUp delay={0.1}>
            <div
              className="mt-10 rounded-2xl p-7 md:p-10"
              style={{
                background: "rgba(18,65,211,0.05)",
                border: "1px solid rgba(18,65,211,0.15)",
              }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-bold text-white mb-2">Engagement Models</h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    We adapt to your team, your timeline, and your growth stage.
                  </p>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { model: "Fully Managed", desc: "We own the entire pipeline build end-to-end." },
                    { model: "Embedded", desc: "We operate as an extension of your sales team." },
                    { model: "Advisory", desc: "Strategic guidance for your internal BD team." },
                  ].map((m) => (
                    <div key={m.model} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="text-sm font-semibold text-white mb-1.5">{m.model}</div>
                      <div className="text-xs text-white/35 leading-relaxed">{m.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service Fits?"
        description="We'll help you figure out the right engagement model. Book a call and we'll assess your current situation and recommend the highest-impact starting point."
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies/"
      />
    </>
  );
}
