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
  { path: "/reality-shows", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-11-04T07:45:00Z" },
  { path: "/bollywood", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-11-05T07:00:00Z" },
  { path: "/movies", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-11-02T13:45:00Z" },
  { path: "/web-series", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-11-04T09:30:00Z" },
  { path: "/news", priority: 0.95, changeFrequency: "daily", defaultDate: "2026-11-03T10:55:00Z" },
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
  // Determine canonical domain dynamically based on incoming request host
  let baseUrl = "https://www.buzzoriginals.in";
  try {
    const reqHeaders = await headers();
    const host = reqHeaders.get("x-forwarded-host") || reqHeaders.get("host") || "";
    if (host.includes("buzzoriginals.com")) {
      baseUrl = "https://www.buzzoriginals.com";
    } else if (host.includes("buzzoriginals.in")) {
      baseUrl = "https://www.buzzoriginals.in";
    }
  } catch {
    // Fallback to https://www.buzzoriginals.in
  }

  const articleEntries: MetadataRoute.Sitemap = [];
  const articleDateMap = new Map<string, Date>();
  let latestDate = new Date("2026-10-28T16:45:00Z");

  const appDir = path.join(process.cwd(), "src", "app");

  // Dynamic discovery of all published articles in src/app
  try {
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

          // Comprehensive date matching for dateModified, modifiedTime, datePublished, publishedTime
          const modMatch =
            content.match(/["']?dateModified["']?\s*:\s*["']([^"']+)["']/i) ||
            content.match(/["']?modifiedTime["']?\s*:\s*["']([^"']+)["']/i);
          const pubMatch =
            content.match(/["']?datePublished["']?\s*:\s*["']([^"']+)["']/i) ||
            content.match(/["']?publishedTime["']?\s*:\s*["']([^"']+)["']/i);
          const rawDate = modMatch?.[1] || pubMatch?.[1];

          if (rawDate) {
            const parsed = new Date(rawDate);
            if (!isNaN(parsed.getTime())) {
              articleModifiedDate = parsed;
            }
          }

          if (!articleModifiedDate) {
            const stat = fs.statSync(pageFile);
            articleModifiedDate = stat.mtime;
          }

          if (entry.name.includes("cyber-crime")) {
            changeFreq = "weekly";
          }
        } catch {
          try {
            const stat = fs.statSync(pageFile);
            articleModifiedDate = stat.mtime;
          } catch {
            articleModifiedDate = new Date();
          }
        }

        if (articleModifiedDate && !isNaN(articleModifiedDate.getTime())) {
          if (articleModifiedDate > latestDate) {
            latestDate = articleModifiedDate;
          }
          articleDateMap.set(entry.name, articleModifiedDate);
        } else {
          articleModifiedDate = new Date();
          articleDateMap.set(entry.name, articleModifiedDate);
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

  // Dynamic helper to resolve the newest lastmod date for category hubs
  const resolveCategoryDate = (catPath: string, fallbackDateStr?: string): Date => {
    const catSlug = catPath.replace(/^\//, "");
    const catDir = path.join(appDir, catSlug);
    let catLatest: Date | null = null;

    try {
      if (fs.existsSync(catDir)) {
        const catFiles = fs.readdirSync(catDir);
        for (const file of catFiles) {
          if (!file.endsWith(".tsx")) continue;
          const filePath = path.join(catDir, file);
          const content = fs.readFileSync(filePath, "utf8");
          const matches = content.matchAll(/href:\s*["']\/([a-z0-9-]+)["']/g);
          for (const match of matches) {
            const slug = match[1];
            const d = articleDateMap.get(slug);
            if (d && (!catLatest || d > catLatest)) {
              catLatest = d;
            }
          }
        }
      }
    } catch {}

    if (catLatest) return catLatest;
    if (fallbackDateStr) {
      const parsed = new Date(fallbackDateStr);
      if (!isNaN(parsed.getTime())) return parsed;
    }
    return latestDate;
  };

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
      lastModified: resolveCategoryDate(realityPage.path, realityPage.defaultDate),
      changeFrequency: realityPage.changeFrequency,
      priority: realityPage.priority,
    });
  }

  // Add all dynamically discovered articles
  finalSitemap.push(...articleEntries);

  // Add remaining category, trust and legal pages
  for (const staticPage of STATIC_PAGES) {
    if (staticPage.path === "/reality-shows") continue;

    const isCategory = ["/bollywood", "/movies", "/web-series", "/news"].includes(staticPage.path);
    const pageDate = isCategory
      ? resolveCategoryDate(staticPage.path, staticPage.defaultDate)
      : new Date(staticPage.defaultDate || "2026-10-28T12:00:00Z");

    finalSitemap.push({
      url: `${baseUrl}${staticPage.path}`,
      lastModified: pageDate,
      changeFrequency: staticPage.changeFrequency,
      priority: staticPage.priority,
    });
  }

  return finalSitemap;
}
