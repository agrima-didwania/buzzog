import type { Metadata } from "next";
import WebSeriesView from "./WebSeriesView";

export const metadata: Metadata = {
  title: "Web Series — Buzz Originals | OTT Binge Guides, Recaps & Streaming Reviews",
  description:
    "Web Series coverage from Buzz Originals — raw, unfiltered, built for the group chat. OTT releases, streaming scoops, recaps and verdicts across Prime Video, Netflix, JioHotstar, ZEE5 and SonyLIV.",
  keywords: [
    "Web Series Buzz Originals",
    "Radhika Apte",
    "Akka Netflix",
    "Rudra character",
    "Keerthy Suresh",
    "Akka web series",
    "Akka cast",
    "IIFA 2026 winners",
    "The Ba***ds of Bollywood IIFA",
    "Aryan Khan Best Direction",
    "Paatal Lok Season 2 IIFA",
    "Baramulla IIFA",
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
        url: "/images/radhika-apte-rudra-akka-netflix.jpg",
        width: 1024,
        height: 576,
        alt: "Radhika Apte on Playing Rudra in Netflix’s Akka — Buzz Originals Web Series",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Series — Buzz Originals",
    description:
      "Raw, unfiltered Web Series coverage of OTT releases, streaming scoops, recaps and verdicts.",
    images: ["/images/radhika-apte-rudra-akka-netflix.jpg"],
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
          name: "Radhika Apte on Her Akka Role Rudra: Never Played Before",
          url: "https://www.buzzoriginals.com/radhika-apte-rudra-akka-netflix",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards, The Ba***ds of Bollywood Best Series",
          url: "https://www.buzzoriginals.com/iifa-2026-winners-list",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Parivarik ManuRanjan: Pankaj Tripathi & Aditi Rao Hydari's Rom-Com Sets Sony LIV Date",
          url: "https://www.buzzoriginals.com/parivarik-manuranjan-ott-release-date-sony-liv",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
          url: "https://www.buzzoriginals.com/mirzapur-the-movie-prime-video-extended-cut",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here",
          url: "https://www.buzzoriginals.com/priyanka-chopra-we-were-here-executive-producer",
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
