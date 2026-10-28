import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buzzog.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date("2026-10-28T16:45:00Z"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/reality-shows`,
      lastModified: new Date("2026-10-28T17:00:00Z"),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2`,
      lastModified: new Date("2026-10-28T16:45:00Z"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi`,
      lastModified: new Date("2026-10-28T07:00:00Z"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/godzilla-minus-zero-india-release-delayed-ramayana`,
      lastModified: new Date("2026-10-27T21:00:00Z"),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad`,
      lastModified: new Date("2026-10-27T18:00:00Z"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-10-28T12:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-10-28T12:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/editorial-policy`,
      lastModified: new Date("2026-10-28T12:00:00Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date("2026-10-28T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date("2026-10-28T12:00:00Z"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
