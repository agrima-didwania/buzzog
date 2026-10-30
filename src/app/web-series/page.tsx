import type { Metadata } from "next";
import WebSeriesView from "./WebSeriesView";

export const metadata: Metadata = {
  title: "Web Series — Buzz Originals | OTT Binge Guides, Recaps & Streaming Reviews",
  description:
    "Web Series coverage from Buzz Originals — raw, unfiltered, built for the group chat. OTT binge guides, trailers, recaps and ending explainers across Netflix, Prime Video, JioHotstar, ZEE5 and SonyLIV.",
  keywords: [
    "Web Series Buzz Originals",
    "OTT binge guides",
    "Netflix web series hindi",
    "Prime Video originals",
    "JioHotstar web series",
    "SonyLIV web series",
    "ZEE5 originals",
    "Ending explained web series",
    "Season finale reviews",
    "Binge or Skip radar",
    "Hindi OTT series",
    "Indian web series 2026",
  ],
  alternates: {
    canonical: "/web-series",
  },
  openGraph: {
    title: "Web Series — Buzz Originals | OTT Binge Guides, Recaps & Streaming Reviews",
    description:
      "Web Series coverage from Buzz Originals — raw, unfiltered, built for the group chat. OTT binge guides, trailers, recaps and ending explainers across Netflix, Prime Video, JioHotstar, ZEE5 and SonyLIV.",
    url: "https://www.buzzoriginals.com/web-series",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/assets/buzzog-logo.png",
        width: 1200,
        height: 630,
        alt: "Web Series Coverage — Buzz Originals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Series — Buzz Originals",
    description:
      "OTT binge guides, trailers, recaps and ending explainers — Netflix, Prime Video, JioHotstar, ZEE5 and SonyLIV in one place.",
    images: ["/assets/buzzog-logo.png"],
  },
};

export default function WebSeriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Series Coverage — Buzz Originals",
    description:
      "OTT binge guides, trailers, recaps and ending explainers — Netflix, Prime Video, JioHotstar, ZEE5 and SonyLIV in one place.",
    url: "https://www.buzzoriginals.com/web-series",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Buzz Originals",
      url: "https://www.buzzoriginals.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/assets/buzzog-logo.png",
      },
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "New crime thriller has the timeline refusing to sleep — Netflix OTT Binge",
          url: "https://www.buzzoriginals.com/web-series#binge-buzz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The trailer for this college drama is already a meme template — Prime Video",
          url: "https://www.buzzoriginals.com/web-series#binge-buzz",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Season finale verdict: did it stick the landing? — JioHotstar",
          url: "https://www.buzzoriginals.com/web-series#binge-buzz",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Cast spills on the scene fans keep rewatching — ZEE5",
          url: "https://www.buzzoriginals.com/web-series#binge-buzz",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Episode 5 recap: the twist nobody saw coming — SonyLIV",
          url: "https://www.buzzoriginals.com/web-series#binge-buzz",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebSeriesView />
    </>
  );
}
