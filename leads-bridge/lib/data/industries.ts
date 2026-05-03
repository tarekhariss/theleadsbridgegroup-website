export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  excerpt: string;
  challenges: string[];
  solutions: string[];
  stats: { label: string; value: string }[];
  use_cases: string[];
}

export const industries: Industry[] = [
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    tagline: "Pipeline precision for the most competitive sales environment in B2B.",
    description:
      "We help technology companies cut through the noise and reach the buyers who matter. From early-stage startups to enterprise software companies, we understand the nuances of tech sales.",
    excerpt:
      "Specialized B2B development for SaaS and technology companies competing in crowded markets.",
    challenges: [
      "Saturated inboxes and sky-high outreach fatigue",
      "Long and complex multi-stakeholder sales cycles",
      "Rapidly evolving competitive landscape",
      "Tight correlation between product fit and conversion",
    ],
    solutions: [
      "Intent-data driven account targeting to reach in-market buyers",
      "Technical and business buyer outreach tailored by persona",
      "Competitive displacement campaigns for competitor accounts",
      "Product-led growth to sales bridge strategies",
    ],
    stats: [
      { label: "Average Pipeline Multiple", value: "4.2x" },
      { label: "Tech Clients Served", value: "60+" },
      { label: "Avg Meeting Show Rate", value: "76%" },
    ],
    use_cases: ["Lead Generation", "ABM", "Competitive Displacement", "Enterprise Expansion"],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    tagline: "Compliant, sophisticated outreach for regulated industries.",
    description:
      "Financial services demand a higher standard of professionalism and compliance awareness. We bring deep domain expertise to every engagement in banking, fintech, insurance, and wealth management.",
    excerpt:
      "Compliant B2B development for banks, fintechs, insurers, and wealth management firms.",
    challenges: [
      "Strict regulatory constraints on marketing and outreach",
      "Highly conservative buying committees",
      "Long procurement cycles with extensive due diligence",
      "Reputational risk sensitivity",
    ],
    solutions: [
      "Compliance-reviewed outreach messaging and legal alignment",
      "Executive and board-level relationship development",
      "Risk-focused value proposition frameworks",
      "Strategic partnership and channel development",
    ],
    stats: [
      { label: "Financial Services Clients", value: "35+" },
      { label: "Compliance Rate", value: "100%" },
      { label: "C-Suite Meeting Rate", value: "42%" },
    ],
    use_cases: ["Executive Outreach", "Partnership Development", "Market Expansion", "Fintech Sales"],
  },
  {
    slug: "healthcare-life-sciences",
    title: "Healthcare & Life Sciences",
    tagline: "Trusted outreach in an industry where credibility is everything.",
    description:
      "Healthcare sales requires patience, deep knowledge, and an impeccable reputation. We help medical device, healthtech, pharma, and life sciences companies connect with the right stakeholders.",
    excerpt:
      "Expert B2B outreach for healthtech, medical devices, pharma, and life sciences organizations.",
    challenges: [
      "Gatekeeping by procurement and clinical committees",
      "Long, budget-cycle-dependent sales processes",
      "Complex stakeholder maps including clinical, IT, and administrative buyers",
      "Stringent regulatory environment",
    ],
    solutions: [
      "Multi-stakeholder engagement strategies mapping full buying committees",
      "Clinical and business ROI messaging tailored by buyer persona",
      "Healthcare-specific conference and event strategies",
      "GPO and health system navigation expertise",
    ],
    stats: [
      { label: "Healthcare Clients", value: "28+" },
      { label: "Avg Deal Size Influenced", value: "$420K" },
      { label: "Meeting-to-Opportunity Rate", value: "34%" },
    ],
    use_cases: ["Health System Sales", "Clinical Outreach", "GPO Navigation", "Healthtech Pipeline"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    tagline: "Relationship-driven growth for firms that compete on expertise.",
    description:
      "Consulting, legal, accounting, and advisory firms win on trust and reputation. We help professional services organizations build systematic business development without sacrificing the relationship-first nature of their business.",
    excerpt:
      "Systematic business development for consulting, legal, accounting, and advisory firms.",
    challenges: [
      "Business development culture resistance from billable partners",
      "Referral dependency and unpredictable pipeline",
      "Long relationship development cycles",
      "Differentiation in a crowded market",
    ],
    solutions: [
      "Thought leadership content and outreach integration",
      "Targeted outreach to ideal-fit company profiles",
      "Partner-level relationship development programs",
      "Event and speaking opportunity cultivation",
    ],
    stats: [
      { label: "Professional Services Clients", value: "40+" },
      { label: "Avg Client Revenue Growth", value: "65%" },
      { label: "Referral Network Expansion", value: "3x" },
    ],
    use_cases: ["Consulting Sales", "Legal Business Development", "Advisory Firm Growth", "RFP Pipeline"],
  },
  {
    slug: "manufacturing-industrial",
    title: "Manufacturing & Industrial",
    tagline: "Modern B2B methods for industries built on relationships.",
    description:
      "Manufacturing and industrial companies have traditionally relied on trade shows and distributors. We bring modern B2B development infrastructure to sectors ready for a smarter approach.",
    excerpt:
      "Modern B2B development for manufacturers, distributors, and industrial companies.",
    challenges: [
      "Over-reliance on trade shows and legacy distributor channels",
      "Limited digital sales and marketing infrastructure",
      "Long specification and procurement cycles",
      "Fragmented buyer base across geography",
    ],
    solutions: [
      "Digital-first prospecting to complement trade show activity",
      "Distributor and channel partner recruitment programs",
      "OEM and specification selling strategies",
      "Regional market penetration campaigns",
    ],
    stats: [
      { label: "Manufacturing Clients", value: "22+" },
      { label: "Avg Distribution Partners Added", value: "8/engagement" },
      { label: "Trade Show Lead Conversion Lift", value: "55%" },
    ],
    use_cases: ["Distribution Network Growth", "OEM Sales", "Channel Development", "Regional Expansion"],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
