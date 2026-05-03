import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data/case-studies";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { useCases } from "@/lib/data/use-cases";
import { resources } from "@/lib/data/resources";

const BASE_URL = "https://theleadsbridgegroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/contact/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/case-studies/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/industries/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/use-cases/`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/resources/`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
  ];

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${BASE_URL}/case-studies/${cs.slug}/`,
    lastModified: new Date(cs.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const industryPages = industries.map((i) => ({
    url: `${BASE_URL}/industries/${i.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const useCasePages = useCases.map((u) => ({
    url: `${BASE_URL}/use-cases/${u.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const resourcePages = resources.map((r) => ({
    url: `${BASE_URL}/resources/${r.slug}/`,
    lastModified: new Date(r.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...caseStudyPages,
    ...servicePages,
    ...industryPages,
    ...useCasePages,
    ...resourcePages,
  ];
}
