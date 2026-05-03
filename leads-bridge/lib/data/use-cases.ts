export interface UseCase {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  excerpt: string;
  how_it_works: { title: string; description: string }[];
  outcomes: string[];
  who_its_for: string[];
  related_services: string[];
}

export const useCases: UseCase[] = [
  {
    slug: "enterprise-sales-pipeline",
    title: "Enterprise Sales Pipeline Building",
    tagline: "Build a repeatable, scalable pipeline into enterprise accounts.",
    description:
      "Enterprise sales pipelines don't build themselves. We design and operate the systems, processes, and outreach that fill your enterprise pipeline with high-quality opportunities.",
    excerpt:
      "Build repeatable enterprise pipeline with systematic outreach, account research, and multi-stakeholder engagement.",
    how_it_works: [
      { title: "Enterprise Account Selection", description: "We identify your highest-fit enterprise accounts using firmographic data, technographic signals, and intent data." },
      { title: "Stakeholder Mapping", description: "Multi-contact mapping of the full buying committee — champion, economic buyer, influencers, and blockers." },
      { title: "Executive Outreach", description: "Coordinated outreach to all key stakeholders with account-specific messaging and business case framing." },
      { title: "Opportunity Development", description: "Active deal support including discovery facilitation, POC strategy, and procurement navigation." },
    ],
    outcomes: [
      "Consistent flow of qualified enterprise meetings",
      "Multi-stakeholder engagement in target accounts",
      "Shortened time to first meaningful conversation",
      "Increased win rates through better account intelligence",
    ],
    who_its_for: [
      "SaaS companies with ACV above $75K",
      "Technology firms pursuing Fortune 1000 accounts",
      "Professional services firms targeting enterprise clients",
      "Firms with under-resourced enterprise sales teams",
    ],
    related_services: ["Lead Generation", "Account-Based Marketing", "Business Development Strategy"],
  },
  {
    slug: "account-based-marketing-campaigns",
    title: "Account-Based Marketing Campaigns",
    tagline: "Focus your entire GTM on the accounts most likely to close.",
    description:
      "ABM flips the funnel — instead of casting wide, you go deep on the accounts that matter. We design and run ABM campaigns that create real engagement in your highest-value accounts.",
    excerpt:
      "Flip the funnel with precision ABM campaigns targeting your highest-value accounts across all channels.",
    how_it_works: [
      { title: "Account Scoring & Tiering", description: "We score your addressable market and identify Tier 1, 2, and 3 accounts based on fit, intent, and strategic value." },
      { title: "Deep Account Research", description: "For Tier 1 accounts, we develop complete intelligence profiles: org structure, key initiatives, and likely objections." },
      { title: "Personalized Engagement", description: "Account-specific outreach sequences, custom content, and coordinated multi-channel touchpoints." },
      { title: "Pipeline Attribution", description: "Account-level tracking that ties every touchpoint to pipeline and revenue outcomes." },
    ],
    outcomes: [
      "Higher meeting-to-opportunity rates from target accounts",
      "Deeper multi-stakeholder engagement in priority accounts",
      "Faster deal velocity in ABM-touched opportunities",
      "Clear ROI attribution at the account level",
    ],
    who_its_for: [
      "B2B companies with defined target account lists",
      "Organizations selling to complex buying committees",
      "Companies with strong sales and marketing alignment",
      "Businesses with ACV above $50K",
    ],
    related_services: ["Account-Based Marketing", "Lead Generation", "Revenue Growth Consulting"],
  },
  {
    slug: "cold-outreach-automation",
    title: "Cold Outreach & Prospecting Automation",
    tagline: "Scale your prospecting without sacrificing quality or personalization.",
    description:
      "Cold outreach at scale doesn't have to feel cold. We build intelligent outreach systems that deliver personalized, relevant messages to hundreds of prospects while maintaining a human touch.",
    excerpt:
      "Intelligent outreach systems delivering personalized, relevant messages to hundreds of prospects at scale.",
    how_it_works: [
      { title: "List Building & Enrichment", description: "We build laser-targeted prospect lists using verified data, enriched with firmographic, technographic, and intent signals." },
      { title: "Sequence Design", description: "Multi-touch email, LinkedIn, and phone sequences crafted for your ICP with strong personalization at each step." },
      { title: "Technical Infrastructure", description: "Domain warming, deliverability optimization, and sending infrastructure that keeps you out of spam." },
      { title: "Response Handling", description: "We manage initial responses, qualify interest, and book meetings directly onto your sales team's calendar." },
    ],
    outcomes: [
      "Consistent flow of booked meetings with qualified prospects",
      "High deliverability and response rates",
      "Fully managed outreach requiring minimal internal resources",
      "Transparent reporting on every metric in the funnel",
    ],
    who_its_for: [
      "Companies building their first outbound function",
      "Sales teams needing to scale without adding headcount",
      "Businesses entering new markets or verticals",
      "Organizations with inconsistent or unpredictable pipeline",
    ],
    related_services: ["Lead Generation", "Sales Pipeline Management", "Business Development Strategy"],
  },
  {
    slug: "lead-qualification-scoring",
    title: "Lead Qualification & Scoring",
    tagline: "Stop wasting your sales team's time on the wrong leads.",
    description:
      "A well-designed qualification and scoring system is the difference between a productive sales team and a frustrated one. We build frameworks that ensure every lead your team works is worth their time.",
    excerpt:
      "Systematic lead qualification frameworks ensuring your sales team only works high-fit, high-intent opportunities.",
    how_it_works: [
      { title: "Ideal Customer Profile Refinement", description: "We audit your existing ICP and sharpen it based on win data, lost deal analysis, and market intelligence." },
      { title: "Scoring Model Development", description: "Build a multi-dimensional scoring model incorporating firmographic fit, behavioral signals, and intent data." },
      { title: "Qualification Framework", description: "Design a structured discovery framework (MEDDIC, SPICED, or custom) tailored to your sales motion." },
      { title: "CRM Implementation", description: "Integrate scoring and qualification into your CRM so data flows automatically and reps work prioritized queues." },
    ],
    outcomes: [
      "Higher conversion rates at every stage",
      "Reduced time wasted on low-quality leads",
      "Faster ramp time for new sales hires",
      "Improved forecast accuracy and revenue predictability",
    ],
    who_its_for: [
      "Sales teams with low conversion rates from MQL to SQL",
      "Companies with high pipeline volume but low win rates",
      "Organizations rebuilding or optimizing their sales process",
      "Businesses scaling a sales team and needing consistency",
    ],
    related_services: ["Sales Pipeline Management", "Business Development Strategy", "Revenue Growth Consulting"],
  },
  {
    slug: "market-expansion",
    title: "B2B Market Expansion",
    tagline: "Enter new markets with precision, speed, and confidence.",
    description:
      "Expanding into a new market is one of the highest-risk, highest-reward moves a B2B company can make. We de-risk market entry with systematic research, targeted outreach, and market validation.",
    excerpt:
      "De-risk new market entry with systematic research, targeted outreach, and rapid market validation.",
    how_it_works: [
      { title: "Market Sizing & Opportunity Assessment", description: "Rigorous analysis of the target market's size, competitive dynamics, buyer behaviors, and growth potential." },
      { title: "Positioning & Messaging Development", description: "New market-specific positioning that speaks to the unique language, pain points, and value drivers of the new segment." },
      { title: "Target Account Identification", description: "Build the initial prospect database for the new market, prioritized by fit, reachability, and strategic value." },
      { title: "Pilot Campaign Execution", description: "Run a targeted pilot outreach campaign to validate market receptivity and gather real buyer feedback before full investment." },
    ],
    outcomes: [
      "Validated market entry strategy backed by real buyer data",
      "First pipeline in new market within 90 days",
      "Clear go/no-go decision framework based on pilot results",
      "Repeatable playbook for future market expansions",
    ],
    who_its_for: [
      "Companies with proven product-market fit expanding to new segments",
      "Businesses entering new geographies",
      "Organizations adding new verticals to their GTM",
      "Post-acquisition companies integrating new markets",
    ],
    related_services: ["Business Development Strategy", "Lead Generation", "Revenue Growth Consulting"],
  },
];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
