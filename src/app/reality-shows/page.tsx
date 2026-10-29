import type { Metadata } from "next";
import RealityShowsView from "./RealityShowsView";

export const metadata: Metadata = {
  title: "Reality Shows — Buzz Originals | KWK 9, Bigg Boss 20, KBC 18, Splitsvilla & KKK",
  description:
    "Eliminations, fights, hot seat stories, couch gossip and dome drama — every Koffee With Karan, Bigg Boss 20, KBC 18, Splitsvilla and Rise and Fall moment.",
  keywords: [
    "Reality Shows Buzz Originals",
    "Janhvi Kapoor Veer Pahariya",
    "Janhvi Kapoor Koffee With Karan",
    "Koffee With Karan Season 9",
    "Bigg Boss 20 Uditi Singh",
    "Uditi Singh Karan Wahi",
    "Uditi Singh breakup",
    "Scout OP Love Gill",
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
      "Eliminations, fights, hot seat stories, couch gossip and dome drama — every Koffee With Karan, Bigg Boss 20, KBC 18, Splitsvilla and Rise and Fall moment.",
    url: "https://www.buzzoriginals.com/reality-shows",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
        width: 1024,
        height: 576,
        alt: "Janhvi Kapoor's Concert Advice for Veer Pahariya on Koffee With Karan — Buzz Originals Reality Shows",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Shows — Buzz Originals",
    description:
      "Raw, unfiltered entertainment coverage of Koffee With Karan, Bigg Boss 20, KBC 18, Splitsvilla & Rise and Fall.",
    images: ["/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"],
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
          name: "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory",
          url: "https://www.buzzoriginals.com/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
          url: "https://www.buzzoriginals.com/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
        },
        {
          "@type": "ListItem",
          position: 4,
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
