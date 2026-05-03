import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { ContentCard } from "@/components/content-card";
import { CommandCenter } from "@/components/command-center";
import { PipelineDiagram } from "@/components/pipeline-diagram";
import { AnimateIn, FadeUp, FadeIn, SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "@/components/motion-wrappers";
import { caseStudies } from "@/lib/data/case-studies";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "The Leads Bridge Group | Premium B2B Business Development",
  description:
    "The Leads Bridge Group builds qualified B2B pipeline, accelerates revenue growth, and scales sales operations for ambitious companies. Book your consultation today.",
};

const differentiators = [
  {
    title: "ICP Precision Targeting",
    description:
      "We spend more time identifying the right accounts than most firms spend on their entire campaign. Precision targeting multiplies every dollar you invest.",
  },
  {
    title: "Process-Driven Execution",
    description:
      "Every engagement runs on proven processes refined across 180+ B2B companies — adapted to your specific market and go-to-market motion.",
  },
  {
    title: "Senior Talent Only",
    description:
      "No junior resources learning on your budget. Every engagement is led by experienced B2B professionals with proven track records.",
  },
  {
    title: "Full Transparency",
    description:
      "Real-time pipeline dashboards, weekly reporting, and direct access to your team. No black boxes — you see exactly what's happening.",
  },
];

const globalMarkets = [
  { name: "North America", accounts: "320", top: "22%", left: "15%" },
  { name: "United Kingdom", accounts: "148", top: "18%", left: "43%" },
  { name: "DACH", accounts: "112", top: "22%", left: "49%" },
  { name: "GCC", accounts: "220", top: "35%", left: "58%" },
  { name: "UAE", accounts: "184", top: "38%", left: "60%" },
  { name: "India", accounts: "96", top: "40%", left: "67%" },
  { name: "Singapore", accounts: "74", top: "50%", left: "76%" },
  { name: "ANZ", accounts: "52", top: "62%", left: "82%" },
];

export default function HomePage() {
  const featuredCaseStudies = caseStudies.slice(0, 3);
  const featuredServices = services.slice(0, 4);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(18,65,211,0.16) 0%, transparent 60%)",
            }}
          />
          <div className="absolute inset-0 dot-grid opacity-30" />
          {/* Concentric rings */}
          {[600, 900, 1200].map((size) => (
            <div
              key={size}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                border: "1px solid rgba(18,65,211,0.05)",
              }}
            />
          ))}
        </div>

        <div className="container-wide relative z-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <div style={{ animation: "slide-in-up 0.7s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-7 text-xs font-semibold"
                style={{
                  border: "1px solid rgba(18,65,211,0.3)",
                  background: "rgba(18,65,211,0.08)",
                  color: "#4a7de8",
                }}
              >
                <div className="live-dot" style={{ background: "#1241d3", boxShadow: "0 0 8px rgba(18,65,211,0.5)" }} />
                Premium B2B Business Development
              </div>

              <h1 className="display-1 text-white">
                We Build Pipeline.
                <br />
                <span className="text-gradient-brand">You Close Deals.</span>
              </h1>

              <p className="mt-6 text-lg text-white/45 max-w-lg leading-relaxed">
                The Leads Bridge Group builds the strategy, infrastructure, and outbound execution
                needed to generate qualified B2B meetings across global markets.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/contact/" className="btn-primary">
                  Book a Strategic Discussion
                  <ArrowRight size={15} />
                </Link>
                <Link href="/case-studies/" className="btn-secondary">
                  View Case Studies
                </Link>
              </div>

              {/* Stats strip */}
              <div
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.07)",
                }}
              >
                {[
                  { value: "180+", label: "Companies Served" },
                  { value: "$240M+", label: "Pipeline Generated" },
                  { value: "94%", label: "Client Retention" },
                  { value: "4.2×", label: "Pipeline Multiple" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center py-5 px-4"
                    style={{ background: "#000" }}
                  >
                    <span
                      className="text-xl md:text-2xl font-bold"
                      style={{ color: "#4a7de8" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-white/35 mt-1 text-center">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column – Command center */}
            <div className="hidden lg:flex justify-end items-center">
              <CommandCenter />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── Outbound Pipeline System ──────────────────────────── */}
      <section className="section-padding border-t border-white/[0.05]">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-center gap-2 mb-3">
              <div className="brand-dot" />
              <span className="eyebrow">The System</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <h2 className="heading-1 text-white">
                The Outbound Engine
              </h2>
              <p className="text-sm text-white/40 max-w-sm leading-relaxed">
                A proven, data-driven pipeline that converts ICP accounts
                into qualified meetings — systematically, at scale.
              </p>
            </div>
          </FadeUp>

          <FadeIn delay={0.15}>
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <PipelineDiagram />
            </div>
          </FadeIn>

          {/* Stage descriptions */}
          <StaggerContainer className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { label: "Identify", desc: "Build precise ICP account lists from verified data sources" },
              { label: "Research", desc: "Enrich every account with buying signals and intent data" },
              { label: "Outreach", desc: "Personalised multi-channel sequences across email and LinkedIn" },
              { label: "Replies", desc: "Manage all replies and nurture interested prospects" },
              { label: "Meetings", desc: "Qualify and book meetings directly to your calendar" },
            ].map((s) => (
              <StaggerItem
                key={s.label}
                className="rounded-xl p-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-xs font-semibold text-white mb-1.5">{s.label}</p>
                <p className="text-xs text-white/35 leading-relaxed">{s.desc}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────── */}
      <section className="section-padding section-gradient border-t border-white/[0.05]">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="brand-dot" />
                  <span className="eyebrow">What We Do</span>
                </div>
                <h2 className="heading-1 text-white">Our Services</h2>
              </div>
              <Link
                href="/services/"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
              >
                All services <ArrowRight size={13} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredServices.map((service, i) => (
              <ContentCard
                key={service.slug}
                href={`/services/${service.slug}/`}
                eyebrow="Service"
                title={service.title}
                excerpt={service.excerpt}
                index={i}
                variant="featured"
              />
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/services/" className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#4a7de8" }}>
              View all services <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ────────────────────────────────────────────── */}
      <section className="section-padding border-t border-white/[0.05]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <SlideInLeft>
              <div className="flex items-center gap-2 mb-4">
                <div className="brand-dot" />
                <span className="eyebrow">Why The Leads Bridge Group</span>
              </div>
              <h2 className="heading-1 text-white leading-tight">
                The Standard for B2B Business Development
              </h2>
              <p className="mt-5 text-base text-white/45 leading-relaxed">
                Most B2B lead generation firms are running the same spray-and-pray playbooks that
                stopped working years ago. We built The Leads Bridge Group to do it differently —
                with data precision, senior talent, and a process obsession that shows in every
                engagement.
              </p>
              <div className="mt-7 space-y-3.5">
                {[
                  "180+ B2B companies served across 12 industries",
                  "Avg 4.2× pipeline multiple on engagement investment",
                  "94% client retention rate — our clients stay and grow",
                  "Senior practitioners, not junior coordinators",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: "#1241d3" }} />
                    <span className="text-sm text-white/55">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <Link href="/case-studies/" className="btn-primary">
                  See Our Results <ArrowRight size={14} />
                </Link>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="grid grid-cols-1 gap-3">
                {differentiators.map((d, i) => (
                  <div
                    key={d.title}
                    className="rounded-2xl p-5 card-premium"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <h3 className="text-sm font-semibold text-white mb-2">{d.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed">{d.description}</p>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* ── Case Studies ──────────────────────────────────────── */}
      <section className="section-padding section-gradient border-t border-white/[0.05]">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="brand-dot" />
                  <span className="eyebrow">Client Results</span>
                </div>
                <h2 className="heading-1 text-white">Case Studies</h2>
              </div>
              <Link
                href="/case-studies/"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
              >
                All case studies <ArrowRight size={13} />
              </Link>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredCaseStudies.map((cs, i) => (
              <ContentCard
                key={cs.slug}
                href={`/case-studies/${cs.slug}/`}
                eyebrow={cs.industry}
                title={cs.title}
                excerpt={cs.excerpt}
                tags={cs.tags}
                meta={new Date(cs.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Reach / Industries ─────────────────────────── */}
      <section className="section-padding border-t border-white/[0.05]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div className="flex items-center gap-2 mb-4">
                <div className="brand-dot" />
                <span className="eyebrow">Industries We Serve</span>
              </div>
              <h2 className="heading-1 text-white">
                Deep Expertise Across Key Markets
              </h2>
              <p className="mt-5 text-sm text-white/40 leading-relaxed">
                We bring domain expertise to every engagement. Our team understands the unique
                buying dynamics, compliance requirements, and growth opportunities in each market.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((ind, i) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}/`}
                    className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3 card-premium"
                  >
                    <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                      {ind.title}
                    </span>
                    <ArrowRight size={12} className="text-white/25 group-hover:text-white/60 transition-colors shrink-0" />
                  </Link>
                ))}
              </div>

              <div className="mt-7">
                <Link href="/industries/" className="btn-secondary">
                  Explore All Industries
                </Link>
              </div>
            </SlideInLeft>

            {/* Market nodes visual */}
            <SlideInRight>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  height: "420px",
                }}
              >
                <div className="absolute inset-0 dot-grid opacity-50" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 55% 40%, rgba(18,65,211,0.1) 0%, transparent 60%)",
                  }}
                />

                {/* Market nodes */}
                {globalMarkets.map((market) => (
                  <div
                    key={market.name}
                    className="absolute"
                    style={{ top: market.top, left: market.left }}
                  >
                    <div className="relative flex items-center gap-2">
                      <div className="world-node w-2.5 h-2.5" />
                      <div
                        className="rounded-lg px-2 py-1"
                        style={{
                          background: "rgba(0,0,0,0.7)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <p className="text-[10px] font-semibold text-white">{market.name}</p>
                        <p className="text-[9px] text-white/40">{market.accounts} accounts</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Center stat */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(0,0,0,0.8)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white">Active Markets</p>
                        <p className="text-[11px] text-white/40 mt-0.5">Global pipeline coverage</p>
                      </div>
                      <div className="text-2xl font-bold" style={{ color: "#4a7de8" }}>8</div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
