import type { Metadata } from "next";
import { HubHero } from "@/components/hub-hero";
import { CTASection } from "@/components/cta-section";
import { ContentCard } from "@/components/content-card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion-wrappers";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "The Leads Bridge Group serves B2B companies across technology, financial services, healthcare, professional services, and manufacturing. Explore our industry expertise.",
  openGraph: {
    title: "Industries | The Leads Bridge Group",
    description:
      "Deep B2B business development expertise across technology, financial services, healthcare, professional services, and manufacturing.",
  },
};

const industryCapabilities = [
  { label: "Enterprise Sales Cycles", desc: "6–18 month complex deals with multi-stakeholder buying committees" },
  { label: "Compliance-Aware Outreach", desc: "GDPR, CCPA, FCA-compliant outreach frameworks across all markets" },
  { label: "Localised Messaging", desc: "Region-specific copywriting and cultural nuance for global markets" },
  { label: "Regulatory Intelligence", desc: "Deep understanding of sector regulations that affect buying decisions" },
];

const globalMarkets = [
  {
    region: "North America",
    cities: ["New York", "San Francisco", "Toronto"],
    active: 320,
    color: "#22c55e",
    top: "30%",
    left: "16%",
  },
  {
    region: "United Kingdom",
    cities: ["London", "Manchester", "Edinburgh"],
    active: 148,
    color: "#4a7de8",
    top: "23%",
    left: "42%",
  },
  {
    region: "DACH & Europe",
    cities: ["Frankfurt", "Zurich", "Amsterdam"],
    active: 112,
    color: "#4a7de8",
    top: "25%",
    left: "51%",
  },
  {
    region: "GCC",
    cities: ["Dubai", "Riyadh", "Abu Dhabi"],
    active: 220,
    color: "#f59e0b",
    top: "38%",
    left: "61%",
  },
  {
    region: "South Asia",
    cities: ["Mumbai", "Bangalore", "Delhi"],
    active: 96,
    color: "#a78bfa",
    top: "41%",
    left: "68%",
  },
  {
    region: "APAC",
    cities: ["Singapore", "Sydney", "Tokyo"],
    active: 74,
    color: "#22c55e",
    top: "54%",
    left: "78%",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <HubHero
        eyebrow="Sectors We Serve"
        title="Industries"
        description="We bring deep domain expertise to every engagement. Our team understands the unique buying dynamics, compliance requirements, and growth opportunities in the markets we serve."
        stats={[
          { value: "12+", label: "Industries Served" },
          { value: "8", label: "Global Markets" },
          { value: "180+", label: "Engagements" },
        ]}
      />

      {/* ── Global Market Coverage ── */}
      <section className="py-10 border-b border-white/[0.05]">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-center gap-2 mb-6">
              <div className="brand-dot" />
              <span className="eyebrow">Global Reach</span>
            </div>
          </FadeUp>

          {/* Map panel */}
          <FadeUp delay={0.05}>
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                background: "rgba(6,6,6,0.95)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 0 1px rgba(18,65,211,0.08), 0 24px 60px rgba(0,0,0,0.5)",
              }}
            >
              {/* Top bar */}
              <div
                className="px-6 py-3 flex items-center justify-between"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="live-dot" />
                  <span className="text-xs font-semibold text-white/50 tracking-wide">
                    Active Outreach Coverage — 6 Regions
                  </span>
                </div>
                <div className="text-xs text-white/20">Worldwide</div>
              </div>

              {/* Map canvas */}
              <div
                className="relative w-full"
                style={{ height: 260, background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(18,65,211,0.06) 0%, transparent 70%)" }}
              >
                {/* Grid lines */}
                {[20, 40, 60, 80].map((t) => (
                  <div
                    key={`h${t}`}
                    className="absolute left-0 right-0 h-px"
                    style={{ top: `${t}%`, background: "rgba(255,255,255,0.035)" }}
                  />
                ))}
                {[15, 30, 45, 60, 75, 90].map((l) => (
                  <div
                    key={`v${l}`}
                    className="absolute top-0 bottom-0 w-px"
                    style={{ left: `${l}%`, background: "rgba(255,255,255,0.025)" }}
                  />
                ))}

                {/* SVG connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                  <line x1="16%" y1="30%" x2="42%" y2="23%" stroke="#1241d3" strokeWidth="1" strokeDasharray="4 5" />
                  <line x1="42%" y1="23%" x2="51%" y2="25%" stroke="#1241d3" strokeWidth="1" strokeDasharray="4 5" />
                  <line x1="51%" y1="25%" x2="61%" y2="38%" stroke="#1241d3" strokeWidth="1" strokeDasharray="4 5" />
                  <line x1="61%" y1="38%" x2="68%" y2="41%" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 6" />
                  <line x1="68%" y1="41%" x2="78%" y2="54%" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 6" />
                  <line x1="42%" y1="23%" x2="61%" y2="38%" stroke="#4a7de8" strokeWidth="0.7" strokeDasharray="2 7" />
                </svg>

                {/* Market nodes */}
                {globalMarkets.map((m) => (
                  <div
                    key={m.region}
                    className="absolute"
                    style={{
                      top: m.top,
                      left: m.left,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Outer pulse ring */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 28,
                        height: 28,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: m.color,
                        opacity: 0.08,
                        animation: "pulse-ring 2.2s ease-out infinite",
                      }}
                    />
                    {/* Mid ring */}
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: 14,
                        height: 14,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: m.color,
                        opacity: 0.14,
                      }}
                    />
                    {/* Core dot */}
                    <div
                      className="relative z-10 w-3 h-3 rounded-full"
                      style={{
                        background: m.color,
                        boxShadow: `0 0 8px ${m.color}, 0 0 16px ${m.color}40`,
                      }}
                    />
                    {/* Label */}
                    <div
                      className="absolute z-20 whitespace-nowrap"
                      style={{ top: 14, left: 6 }}
                    >
                      <div className="text-[10px] font-semibold text-white/55 leading-tight">
                        {m.region}
                      </div>
                      <div className="text-[9px] mt-0.5" style={{ color: m.color, opacity: 0.8 }}>
                        {m.active} accounts
                      </div>
                    </div>
                  </div>
                ))}

                {/* Coverage label */}
                <div
                  className="absolute bottom-4 left-6 text-xs text-white/20"
                >
                  Outbound campaigns active across all regions
                </div>
                <div
                  className="absolute bottom-4 right-6 flex items-center gap-1.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px #22c55e" }} />
                  <span className="text-[10px] text-white/30">Live</span>
                </div>
              </div>

              {/* Region stats row */}
              <div
                className="grid grid-cols-3 md:grid-cols-6 gap-px"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.04)" }}
              >
                {globalMarkets.map((m) => (
                  <div
                    key={m.region}
                    className="py-4 px-4 text-center"
                    style={{ background: "#060606" }}
                  >
                    <div className="text-sm font-bold" style={{ color: m.color }}>
                      {m.active}
                    </div>
                    <div className="text-[9px] text-white/25 mt-0.5 leading-tight">{m.region}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Capabilities strip */}
      <section className="py-10 border-b border-white/[0.05]">
        <div className="container-wide">
          <FadeUp>
            <div className="flex items-center gap-2 mb-6">
              <div className="brand-dot" />
              <span className="eyebrow">Cross-Industry Capabilities</span>
            </div>
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {industryCapabilities.map((cap) => (
              <StaggerItem
                key={cap.label}
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <h4 className="text-sm font-semibold text-white mb-2">{cap.label}</h4>
                <p className="text-xs text-white/35 leading-relaxed">{cap.desc}</p>
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
                <span className="eyebrow">Industry Coverage</span>
              </div>
              <h2 className="heading-1 text-white">All Industries</h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <ContentCard
                key={industry.slug}
                href={`/industries/${industry.slug}/`}
                eyebrow="Industry"
                title={industry.title}
                excerpt={industry.excerpt}
                variant="featured"
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't See Your Industry?"
        description="We've worked across many more sectors than those listed here. If you don't see your industry, get in touch — we likely have relevant experience."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="View Case Studies"
        secondaryHref="/case-studies/"
      />
    </>
  );
}
