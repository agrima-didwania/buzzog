import type { Metadata } from "next";
import RealityShowsView from "./RealityShowsView";

export const metadata: Metadata = {
  title: "Reality Shows — Buzz Originals | Bigg Boss, Splitsvilla, KKK & Rise and Fall",
  description:
    "Eliminations, fights, fan wars and dome drama — every Bigg Boss, Splitsvilla, Khatron Ke Khiladi and Rise and Fall moment, minus the filler.",
  keywords: [
    "Reality Shows Buzz Originals",
    "Bigg Boss latest news",
    "Bigg Boss eviction",
    "Splitsvilla dome drama",
    "Splitsvilla ideal match",
    "Khatron Ke Khiladi stunts",
    "Rise and Fall 2",
    "Shreya Kalra Karan Patel",
    "Indian Reality TV",
    "Housemate Heat Index",
  ],
  alternates: {
    canonical: "/reality-shows",
  },
  openGraph: {
    title: "Reality Shows — Buzz Originals | Raw, Unfiltered Coverage",
    description:
      "Eliminations, fights, fan wars and dome drama — every Bigg Boss, Splitsvilla, Khatron Ke Khiladi and Rise and Fall moment, minus the filler.",
    url: "https://www.buzzoriginals.com/reality-shows",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
        width: 1024,
        height: 682,
        alt: "Buzz Originals Reality Shows Coverage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Shows — Buzz Originals",
    description:
      "Raw, unfiltered entertainment coverage of Bigg Boss, Splitsvilla, Khatron Ke Khiladi & Rise and Fall.",
    images: ["/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"],
  },
};

export default function RealityShowsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Reality Shows Coverage — Buzz Originals",
    description:
      "Eliminations, fights, fan wars and dome drama — every Bigg Boss, Splitsvilla, Khatron Ke Khiladi and Rise and Fall moment.",
    url: "https://www.buzzoriginals.com/reality-shows",
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
          name: "Shreya Kalra Hits Back at Karan Patel Over His Reels Comment",
          url: "https://www.buzzoriginals.com/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
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
      <RealityShowsView />
    </>
  );
}
