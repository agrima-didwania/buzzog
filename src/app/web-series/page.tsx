import type { Metadata } from "next";
import WebSeriesView from "./WebSeriesView";

export const metadata: Metadata = {
  title: "Web Series — Buzz Originals | OTT Binge Guides, Recaps & Streaming Reviews",
  description:
    "Web Series coverage from Buzz Originals — raw, unfiltered, built for the group chat. OTT releases, streaming scoops, recaps and verdicts across Prime Video, Netflix, JioHotstar, ZEE5 and SonyLIV.",
  keywords: [
    "Web Series Buzz Originals",
    "Mirzapur The Movie OTT release",
    "Mirzapur The Movie extended cut",
    "Mirzapur The Movie Prime Video",
    "Pankaj Tripathi",
    "Ali Fazal",
    "OTT binge guides",
    "Prime Video originals",
    "Netflix web series hindi",
    "JioHotstar web series",
    "SonyLIV web series",
    "ZEE5 originals",
  ],
  alternates: {
    canonical: "/web-series",
  },
  openGraph: {
    title: "Web Series — Buzz Originals | OTT Binge Guides, Recaps & Streaming Reviews",
    description:
      "Web Series coverage from Buzz Originals — raw, unfiltered, built for the group chat. OTT releases, streaming scoops, recaps and verdicts across Prime Video, Netflix, JioHotstar, ZEE5 and SonyLIV.",
    url: "https://www.buzzoriginals.com/web-series",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/mirzapur-the-movie-prime-video-extended-cut.jpg",
        width: 1024,
        height: 682,
        alt: "Mirzapur: The Movie Now Streaming on Prime With Extended Cut — Buzz Originals Web Series",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Series — Buzz Originals",
    description:
      "Raw, unfiltered Web Series coverage of OTT releases, streaming scoops, recaps and verdicts.",
    images: ["/images/mirzapur-the-movie-prime-video-extended-cut.jpg"],
  },
};

export default function WebSeriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Series Coverage — Buzz Originals",
    description:
      "OTT releases, streaming scoops, recaps and verdicts — raw, unfiltered Web Series coverage built for the group chat.",
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
          name: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
          url: "https://www.buzzoriginals.com/mirzapur-the-movie-prime-video-extended-cut",
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
