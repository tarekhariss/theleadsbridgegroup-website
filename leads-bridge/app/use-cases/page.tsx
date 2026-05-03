import type { Metadata } from "next";
import { HubHero } from "@/components/hub-hero";
import { CTASection } from "@/components/cta-section";
import { ContentCard } from "@/components/content-card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion-wrappers";
import { useCases } from "@/lib/data/use-cases";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Explore how The Leads Bridge Group solves specific B2B growth challenges — from enterprise pipeline building and ABM campaigns to market expansion and lead qualification.",
  openGraph: {
    title: "Use Cases | The Leads Bridge Group",
    description:
      "Specific B2B growth challenges we solve — enterprise pipeline, ABM campaigns, cold outreach, lead qualification, and market expansion.",
  },
};

const symptoms = [
  { icon: "⬇", label: "Pipeline has dried up", desc: "Your inbound is slowing and there's no predictable outbound motion." },
  { icon: "🎯", label: "Targeting the wrong ICPs", desc: "Your team is chasing accounts that never close or churn quickly." },
  { icon: "⏱", label: "Sales cycle is too long", desc: "Deals are getting stuck in qualification and early stages." },
  { icon: "🌍", label: "Entering a new market", desc: "You need a foothold in a geography or segment you haven't penetrated." },
  { icon: "📊", label: "No visibility on BD activity", desc: "Leadership has no real-time view of pipeline health or activity." },
  { icon: "⚡", label: "Need to scale fast", desc: "A funding round or product launch needs pipeline built yesterday." },
];

export default function UseCasesPage() {
  return (
    <>
      <HubHero
        eyebrow="How We Help"
        title="Use Cases"
        description="Every business development challenge is different. Explore how we tackle the specific growth problems our clients face — and how we solve them."
        stats={[
          { value: "5", label: "Core Use Cases" },
          { value: "94%", label: "Problem Solved" },
          { value: "30", label: "Days to Pipeline" },
        ]}
      />

      {/* Pain points */}
      <section className="py-10 border-b border-white/[0.05]">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-center gap-2 mb-6">
              <div className="brand-dot" />
              <span className="eyebrow">Common Challenges We Solve</span>
            </div>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {symptoms.map((s) => (
              <StaggerItem
                key={s.label}
                className="flex gap-4 items-start rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                  style={{ background: "rgba(18,65,211,0.12)", border: "1px solid rgba(18,65,211,0.2)" }}
                >
                  {s.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{s.label}</h4>
                  <p className="text-xs text-white/35 leading-relaxed">{s.desc}</p>
                </div>
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
                <span className="eyebrow">Solutions</span>
              </div>
              <h2 className="heading-1 text-white">All Use Cases</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <ContentCard
                key={uc.slug}
                href={`/use-cases/${uc.slug}/`}
                eyebrow="Use Case"
                title={uc.title}
                excerpt={uc.excerpt}
                variant="featured"
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Specific Challenge?"
        description="If your use case isn't listed, get in touch. We solve a wide range of B2B business development problems and are happy to discuss your specific situation."
        primaryLabel="Talk to Our Team"
        primaryHref="/contact/"
        secondaryLabel="View Our Services"
        secondaryHref="/services/"
      />
    </>
  );
}
