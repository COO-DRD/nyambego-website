import { MetadataRoute } from "next";

const SITE = "https://briannyambego.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: SITE,               priority: 1.0,  changeFrequency: "weekly"  as const },
    { url: `${SITE}/about`,    priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${SITE}/books`,    priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${SITE}/cohorts`,  priority: 0.9,  changeFrequency: "weekly"  as const },
    { url: `${SITE}/coaching`, priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${SITE}/events`,   priority: 0.75, changeFrequency: "weekly"  as const },
    { url: `${SITE}/webinars`, priority: 0.7,  changeFrequency: "weekly"  as const },
    { url: `${SITE}/blog`,     priority: 0.7,  changeFrequency: "daily"   as const },
    { url: `${SITE}/contact`,  priority: 0.6,  changeFrequency: "yearly"  as const },
  ];

  return staticRoutes.map((r) => ({
    ...r,
    lastModified: new Date(),
  }));
}
