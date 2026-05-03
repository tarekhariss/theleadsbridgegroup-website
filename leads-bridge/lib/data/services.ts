export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  excerpt: string;
  features: string[];
  deliverables: string[];
  ideal_for: string[];
  process: { step: string; description: string }[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: "lead-generation",
    title: "B2B Lead Generation",
    tagline: "A consistent pipeline of qualified prospects, engineered for your ICP.",
    description:
      "We build and operate data-driven outbound systems that identify, engage, and convert your ideal customers — at scale, without the guesswork.",
    excerpt:
      "Systematic outbound lead generation engineered for your ICP, delivering qualified pipeline on demand.",
    features: [
      "ICP definition and total addressable market mapping",
      "Multi-channel outreach across email, LinkedIn, and phone",
      "Data enrichment and contact research",
      "Personalized messaging at scale",
      "Real-time pipeline reporting and analytics",
      "CRM integration and hygiene management",
    ],
    deliverables: [
      "Weekly qualified meeting reports",
      "Target account database",
      "Outreach sequence library",
      "Pipeline health dashboard",
      "Monthly performance reviews",
    ],
    ideal_for: [
      "Companies scaling from $1M to $10M ARR",
      "Teams without a dedicated outbound function",
      "Businesses entering new markets",
      "Companies that need pipeline predictability",
    ],
    process: [
      { step: "Discovery", description: "Deep dive into your product, ICP, and current GTM motion to build a precision targeting strategy." },
      { step: "Build", description: "We construct your target account list, messaging architecture, and outreach infrastructure." },
      { step: "Launch", description: "Multi-channel campaigns go live with rigorous A/B testing and optimization from day one." },
      { step: "Optimize", description: "Weekly data reviews drive continuous improvement in targeting, messaging, and conversion rates." },
    ],
    icon: "Target",
  },
  {
    slug: "business-development-strategy",
    title: "Business Development Strategy",
    tagline: "A go-to-market blueprint built to win in your specific market.",
    description:
      "We design comprehensive business development strategies that align your team, focus your resources, and create a clear path to revenue growth.",
    excerpt:
      "Comprehensive GTM strategies that align teams, focus resources, and create clear paths to revenue.",
    features: [
      "Market sizing and opportunity analysis",
      "Competitive positioning and differentiation",
      "ICP and buyer persona development",
      "Revenue model and pricing strategy",
      "Sales process design and optimization",
      "Team structure and hiring recommendations",
    ],
    deliverables: [
      "90-day GTM execution roadmap",
      "ICP and persona documentation",
      "Competitive analysis report",
      "Sales playbook and battlecards",
      "Revenue forecasting model",
    ],
    ideal_for: [
      "Early-stage companies building their first sales motion",
      "Growth-stage companies optimizing their GTM",
      "Companies entering new markets or verticals",
      "Organizations preparing for fundraising",
    ],
    process: [
      { step: "Audit", description: "Comprehensive review of current GTM motion, competitive landscape, and market positioning." },
      { step: "Strategy", description: "Development of a data-backed strategy with clear prioritization and resource allocation." },
      { step: "Roadmap", description: "Creation of a 90-day execution plan with defined milestones, KPIs, and accountability structures." },
      { step: "Enablement", description: "Team training and change management support to ensure successful strategy adoption." },
    ],
    icon: "Map",
  },
  {
    slug: "sales-pipeline-management",
    title: "Sales Pipeline Management",
    tagline: "Complete visibility and control over every deal in your pipeline.",
    description:
      "We implement and manage robust pipeline systems that give your team clarity, accelerate deal velocity, and eliminate revenue surprises.",
    excerpt:
      "Robust pipeline systems delivering complete visibility, deal acceleration, and revenue predictability.",
    features: [
      "CRM architecture design and implementation",
      "Pipeline stage definition and criteria",
      "Deal velocity optimization",
      "Forecasting model development",
      "Win/loss analysis framework",
      "Sales team performance analytics",
    ],
    deliverables: [
      "CRM setup and configuration",
      "Pipeline management playbook",
      "Forecasting templates and models",
      "Weekly pipeline review framework",
      "Win/loss analysis reports",
    ],
    ideal_for: [
      "Sales teams with inconsistent close rates",
      "Companies struggling with revenue predictability",
      "Organizations with manual, spreadsheet-based tracking",
      "Teams scaling their sales capacity",
    ],
    process: [
      { step: "Assessment", description: "Full audit of existing pipeline, CRM state, and sales process to identify gaps and bottlenecks." },
      { step: "Design", description: "Build a pipeline architecture matched to your sales motion, deal complexity, and buyer journey." },
      { step: "Implementation", description: "CRM configuration, data migration, team training, and process documentation." },
      { step: "Management", description: "Ongoing pipeline reviews, deal coaching, and continuous process refinement." },
    ],
    icon: "TrendingUp",
  },
  {
    slug: "account-based-marketing",
    title: "Account-Based Marketing",
    tagline: "Precision targeting for the accounts that matter most to your business.",
    description:
      "We design and execute ABM programs that concentrate your resources on the highest-value accounts, driving deeper engagement and faster close rates.",
    excerpt:
      "Precision ABM programs concentrating resources on highest-value accounts for faster close rates.",
    features: [
      "Tiered account selection and prioritization",
      "Custom research and account intelligence",
      "Multi-stakeholder engagement strategies",
      "Personalized content and outreach at account level",
      "Sales and marketing alignment frameworks",
      "ABM program measurement and attribution",
    ],
    deliverables: [
      "Target account list (Tier 1, 2, 3)",
      "Account intelligence profiles",
      "Multi-stakeholder outreach sequences",
      "Personalized content assets",
      "ABM performance dashboard",
    ],
    ideal_for: [
      "Companies with ACV above $50K",
      "Teams with defined enterprise target accounts",
      "Organizations with complex, multi-stakeholder sales cycles",
      "Businesses with strong sales and marketing alignment",
    ],
    process: [
      { step: "Account Selection", description: "Data-driven identification and tiering of target accounts based on fit score, intent signals, and strategic value." },
      { step: "Intelligence", description: "Deep research on each account: org charts, initiatives, challenges, and buying signals." },
      { step: "Orchestration", description: "Coordinated multi-channel engagement across all relevant stakeholders at each account." },
      { step: "Measurement", description: "Account-level tracking of engagement, pipeline influence, and revenue attribution." },
    ],
    icon: "Crosshair",
  },
  {
    slug: "revenue-growth-consulting",
    title: "Revenue Growth Consulting",
    tagline: "Expert guidance to unlock your next phase of growth.",
    description:
      "Our senior revenue leaders work alongside your team to identify growth levers, remove blockers, and accelerate your path to the next revenue milestone.",
    excerpt:
      "Senior revenue advisors working alongside your team to unlock growth levers and accelerate milestones.",
    features: [
      "Fractional CRO and VP Sales engagement",
      "Revenue audit and gap analysis",
      "Sales team assessment and coaching",
      "Pricing and packaging optimization",
      "Channel and partnership strategy",
      "Board and investor reporting support",
    ],
    deliverables: [
      "Revenue audit report and recommendations",
      "Sales team assessment results",
      "Growth roadmap with prioritized initiatives",
      "Weekly advisory sessions and check-ins",
      "Board-ready revenue reporting",
    ],
    ideal_for: [
      "Founders without a senior sales leader",
      "Companies preparing for Series A or B fundraising",
      "Teams stalled between revenue milestones",
      "Organizations post-acquisition or in transition",
    ],
    process: [
      { step: "Audit", description: "Comprehensive analysis of revenue metrics, team performance, market position, and growth constraints." },
      { step: "Prioritize", description: "Identification and ranking of the highest-leverage growth initiatives available to your business." },
      { step: "Execute", description: "Hands-on support executing the most critical initiatives alongside your internal team." },
      { step: "Scale", description: "Building sustainable systems and team capabilities to sustain growth beyond the engagement." },
    ],
    icon: "BarChart3",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
