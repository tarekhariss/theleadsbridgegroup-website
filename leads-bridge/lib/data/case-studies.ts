export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  excerpt: string;
  challenge: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  publishedAt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "tech-startup-pipeline-300-percent-growth",
    title: "How We Grew a Tech Startup's Pipeline by 300% in 90 Days",
    client: "Nexus Analytics",
    industry: "Technology & SaaS",
    description:
      "A Series B SaaS company needed to scale their outbound motion fast. We built a precision outreach engine that tripled qualified pipeline in a single quarter.",
    excerpt:
      "A Series B SaaS company tripled qualified pipeline in 90 days through precision outbound and ABM.",
    challenge:
      "Nexus Analytics had strong product-market fit but their sales team was running on inbound alone. With a new funding round, they needed to activate outbound channels quickly without sacrificing quality.",
    solution:
      "We built a targeted account list of 1,200 ideal-fit companies, designed multi-touch outreach sequences, and trained their SDR team on advanced prospecting techniques. Our data enrichment process ensured every outreach was hyper-personalized.",
    results: [
      "Identified 1,200 high-fit target accounts in their ICP",
      "Launched multi-channel outreach across email and LinkedIn",
      "Trained and enabled internal SDR team of 4",
      "Integrated data into existing Salesforce CRM",
    ],
    metrics: [
      { label: "Pipeline Growth", value: "300%" },
      { label: "Qualified Meetings", value: "87" },
      { label: "Time to Results", value: "90 Days" },
      { label: "Conversion Rate", value: "18%" },
    ],
    tags: ["SaaS", "Outbound", "Pipeline", "ABM"],
    publishedAt: "2025-03-15",
  },
  {
    slug: "fortune-500-enterprise-expansion",
    title: "Enterprise Market Expansion: From 2 Verticals to 7",
    client: "Meridian Corp",
    industry: "Professional Services",
    description:
      "A Fortune 500 consulting firm needed to break into five new industry verticals simultaneously. Our market entry playbooks and executive outreach delivered.",
    excerpt:
      "Fortune 500 consulting firm expanded into 5 new verticals with 200+ senior executive meetings booked.",
    challenge:
      "Meridian had deep expertise in financial services and healthcare but wanted to expand into technology, manufacturing, retail, energy, and government sectors without diluting their brand positioning.",
    solution:
      "We developed vertical-specific value propositions, built executive contact databases, and ran coordinated outreach campaigns targeting C-suite and VP-level decision makers in each new vertical.",
    results: [
      "Developed 5 vertical-specific messaging frameworks",
      "Built databases of 3,000+ senior executives",
      "Ran coordinated campaigns across all 5 verticals simultaneously",
      "Delivered detailed market intelligence reports per vertical",
    ],
    metrics: [
      { label: "New Verticals Entered", value: "5" },
      { label: "Executive Meetings", value: "200+" },
      { label: "New Contracts Closed", value: "12" },
      { label: "Revenue Influence", value: "$8.4M" },
    ],
    tags: ["Enterprise", "Market Expansion", "Executive Outreach", "B2B"],
    publishedAt: "2025-02-20",
  },
  {
    slug: "saas-company-sales-acceleration",
    title: "From Stalled Growth to 2x ARR: A SaaS Turnaround Story",
    client: "Clearfield Systems",
    industry: "Technology & SaaS",
    description:
      "A mid-market SaaS company facing churn and stalled growth needed a complete revenue engine rebuild. We redesigned their go-to-market from the ground up.",
    excerpt:
      "Mid-market SaaS doubled ARR in 12 months through systematic GTM redesign and precision targeting.",
    challenge:
      "Clearfield was experiencing high churn in their SMB segment while struggling to break into enterprise. Their messaging was diluted, their ICP was too broad, and their sales cycle was too long.",
    solution:
      "We redefined their ICP with a focus on mid-market accounts (200-2000 employees), rebuilt their messaging architecture, implemented ABM campaigns for 50 top target accounts, and redesigned their entire outbound motion.",
    results: [
      "Redefined ICP from 10,000 companies to a focused list of 800",
      "Rebuilt entire outbound email and LinkedIn infrastructure",
      "Launched ABM campaigns for top 50 accounts",
      "Implemented CRM hygiene and pipeline management processes",
    ],
    metrics: [
      { label: "ARR Growth", value: "2x" },
      { label: "Sales Cycle Reduction", value: "40%" },
      { label: "Churn Reduction", value: "35%" },
      { label: "Pipeline Value Added", value: "$12M" },
    ],
    tags: ["SaaS", "ARR Growth", "GTM Strategy", "ICP"],
    publishedAt: "2025-01-10",
  },
  {
    slug: "professional-services-lead-generation",
    title: "Legal Tech Firm Generates 150 Qualified Leads Per Month",
    client: "Vantage Legal",
    industry: "Legal & Professional Services",
    description:
      "A growing legal technology company needed a predictable, scalable lead generation system. We built a complete demand generation engine from scratch.",
    excerpt:
      "Legal tech firm achieves 150 qualified leads/month through systematic demand gen and content-led outreach.",
    challenge:
      "Vantage Legal was relying entirely on referrals and had no repeatable outbound process. They needed to build a demand generation machine that could scale with their aggressive growth targets.",
    solution:
      "We built a content-led outbound strategy combining thought leadership content, targeted LinkedIn outreach, email nurture sequences, and strategic event partnerships to create multiple inbound and outbound channels.",
    results: [
      "Built thought leadership content program generating 8 pieces per month",
      "Launched LinkedIn outreach reaching 500+ decision makers weekly",
      "Implemented 5-touch email nurture sequences",
      "Established partnerships with 3 legal industry associations",
    ],
    metrics: [
      { label: "Monthly Qualified Leads", value: "150" },
      { label: "Cost Per Lead Reduction", value: "60%" },
      { label: "Conversion to Close", value: "22%" },
      { label: "Pipeline Growth", value: "450%" },
    ],
    tags: ["Legal Tech", "Demand Generation", "Content Strategy", "LinkedIn"],
    publishedAt: "2024-12-05",
  },
  {
    slug: "manufacturing-b2b-outreach",
    title: "Industrial Manufacturer Books 45 Distributor Meetings in 60 Days",
    client: "Atlas Manufacturing",
    industry: "Manufacturing & Industrial",
    description:
      "A specialty industrial manufacturer needed to expand their distribution network. Our targeted outreach campaign connected them with 45 qualified distributor partners.",
    excerpt:
      "Industrial manufacturer expanded distribution network with 45 qualified partner meetings in 60 days.",
    challenge:
      "Atlas Manufacturing had a superior product but limited distribution. They needed to rapidly identify and engage potential distribution partners across North America without a dedicated business development team.",
    solution:
      "We built a comprehensive database of industrial distributors, developed a partnership-focused outreach narrative, and ran a targeted campaign that highlighted margin potential and market exclusivity opportunities.",
    results: [
      "Identified 800 qualified industrial distribution companies",
      "Developed partnership-specific pitch materials and ROI models",
      "Ran email and phone outreach campaign over 60 days",
      "Facilitated introductions and supported deal structuring",
    ],
    metrics: [
      { label: "Distributor Meetings Booked", value: "45" },
      { label: "Partnership Agreements Signed", value: "8" },
      { label: "New Market Coverage", value: "12 States" },
      { label: "Distribution Revenue (Y1)", value: "$3.2M" },
    ],
    tags: ["Manufacturing", "Distribution", "Channel Sales", "Partnerships"],
    publishedAt: "2024-11-18",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
