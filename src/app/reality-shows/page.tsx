import type { Metadata } from "next";
import RealityShowsView from "./RealityShowsView";

export const metadata: Metadata = {
  title: "Reality Shows — Buzz Originals | KBC 18, Bigg Boss, Splitsvilla, KKK & Rise and Fall",
  description:
    "Eliminations, fights, hot seat stories and dome drama — every KBC 18, Bigg Boss, Splitsvilla, Khatron Ke Khiladi and Rise and Fall moment, minus the filler.",
  keywords: [
    "Reality Shows Buzz Originals",
    "KBC 18 Diwali special",
    "Ranbir Kapoor KBC 18",
    "Kaun Banega Crorepati 18",
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
      "Eliminations, fights, hot seat stories and dome drama — every KBC 18, Bigg Boss, Splitsvilla, Khatron Ke Khiladi and Rise and Fall moment.",
    url: "https://www.buzzoriginals.com/reality-shows",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg",
        width: 1024,
        height: 576,
        alt: "KBC 18 Diwali Special: Ramayana Cast Joins Big B — Buzz Originals Reality Shows",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Shows — Buzz Originals",
    description:
      "Raw, unfiltered entertainment coverage of KBC 18, Bigg Boss, Splitsvilla, Khatron Ke Khiladi & Rise and Fall.",
    images: ["/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"],
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
          name: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
          url: "https://www.buzzoriginals.com/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
        },
        {
          "@type": "ListItem",
          position: 2,
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
