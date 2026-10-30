import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import fs from "fs";
import path from "path";

interface StaticPageConfig {
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  defaultDate?: string;
}

const STATIC_PAGES: StaticPageConfig[] = [
  { path: "/reality-shows", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-10-30T00:45:00Z" },
  { path: "/bollywood", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-10-30T19:45:00Z" },
  { path: "/movies", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-10-30T19:45:00Z" },
  { path: "/web-series", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-10-30T13:45:00Z" },
  { path: "/news", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-10-30T19:45:00Z" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly", defaultDate: "2026-10-28T12:00:00Z" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly", defaultDate: "2026-10-28T12:00:00Z" },
  { path: "/editorial-policy", priority: 0.7, changeFrequency: "monthly", defaultDate: "2026-10-28T12:00:00Z" },
  { path: "/privacy", priority: 0.5, changeFrequency: "yearly", defaultDate: "2026-10-28T12:00:00Z" },
  { path: "/terms", priority: 0.5, changeFrequency: "yearly", defaultDate: "2026-10-28T12:00:00Z" },
];

const EXCLUDED_DIRS = new Set([
  "api",
  "about",
  "contact",
  "editorial-policy",
  "privacy",
  "terms",
  "reality-shows",
  "bollywood",
  "movies",
  "web-series",
  "news",
  "_not-found",
  "bigg-boss-20-100-percent-ration-housemates",
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Access headers to ensure dynamic evaluation on request
  try {
    await headers();
  } catch {}

  const baseUrl = "https://www.buzzoriginals.com";
  const articleEntries: MetadataRoute.Sitemap = [];

  let latestDate = new Date("2026-10-28T16:45:00Z");

  // Dynamic discovery of all published articles in src/app
  try {
    const appDir = path.join(process.cwd(), "src", "app");
    if (fs.existsSync(appDir)) {
      const entries = fs.readdirSync(appDir, { withFileTypes: true });

      for (const entry of entries) {
        if (!entry.isDirectory() || EXCLUDED_DIRS.has(entry.name) || entry.name.startsWith(".") || entry.name.startsWith("_")) {
          continue;
        }

        const pageFile = path.join(appDir, entry.name, "page.tsx");
        if (!fs.existsSync(pageFile)) {
          continue;
        }

        let articleModifiedDate: Date | null = null;
        let changeFreq: "daily" | "weekly" = "daily";

        try {
          const content = fs.readFileSync(pageFile, "utf8");
          const modMatch = content.match(/dateModified:\s*["']([^"']+)["']/);
          const pubMatch = content.match(/publishedTime:\s*["']([^"']+)["']/);
          const rawDate = modMatch?.[1] || pubMatch?.[1];

          if (rawDate) {
            articleModifiedDate = new Date(rawDate);
          } else {
            const stat = fs.statSync(pageFile);
            articleModifiedDate = stat.mtime;
          }

          if (entry.name.includes("cyber-crime")) {
            changeFreq = "weekly";
          }
        } catch {
          const stat = fs.statSync(pageFile);
          articleModifiedDate = stat.mtime;
        }

        if (articleModifiedDate && !isNaN(articleModifiedDate.getTime())) {
          if (articleModifiedDate > latestDate) {
            latestDate = articleModifiedDate;
          }
        } else {
          articleModifiedDate = new Date();
        }

        articleEntries.push({
          url: `${baseUrl}/${entry.name}`,
          lastModified: articleModifiedDate,
          changeFrequency: changeFreq,
          priority: 0.9,
        });
      }
    }
  } catch (err) {
    console.error("Error dynamically scanning articles for sitemap:", err);
  }

  // Sort articles by lastModified descending so newest published/updated articles appear first
  articleEntries.sort((a, b) => {
    const timeA = a.lastModified ? new Date(a.lastModified).getTime() : 0;
    const timeB = b.lastModified ? new Date(b.lastModified).getTime() : 0;
    return timeB - timeA;
  });

  const finalSitemap: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: latestDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  // Add category hub (reality-shows) right under homepage
  const realityPage = STATIC_PAGES.find((p) => p.path === "/reality-shows");
  if (realityPage) {
    finalSitemap.push({
      url: `${baseUrl}${realityPage.path}`,
      lastModified: new Date(realityPage.defaultDate || "2026-10-28T17:00:00Z"),
      changeFrequency: realityPage.changeFrequency,
      priority: realityPage.priority,
    });
  }

  // Add all dynamically discovered articles
  finalSitemap.push(...articleEntries);

  // Add remaining trust and legal pages
  for (const staticPage of STATIC_PAGES) {
    if (staticPage.path === "/reality-shows") continue;

    finalSitemap.push({
      url: `${baseUrl}${staticPage.path}`,
      lastModified: new Date(staticPage.defaultDate || "2026-10-28T12:00:00Z"),
      changeFrequency: staticPage.changeFrequency,
      priority: staticPage.priority,
    });
  }

  return finalSitemap;
}
