import type { Metadata } from "next";
import RealityShowsView from "./RealityShowsView";

export const metadata: Metadata = {
  title: "Reality Shows — Buzz Originals | Bigg Boss 20, KWK 9, KBC 18, Splitsvilla & KKK",
  description:
    "Eliminations, fights, weekly ration milestones, hot seat stories and dome drama — every Bigg Boss 20, Koffee With Karan, KBC 18 and Splitsvilla moment.",
  keywords: [
    "Reality Shows Buzz Originals",
    "Jiya Shankar",
    "Jiya Shankar KD",
    "Kaaran Dhanak",
    "Jiya Shankar engagement",
    "Bigg Boss OTT 2",
    "Bigg Boss 20",
    "Bigg Boss 20 Gullu eviction",
    "Gullu Yung DSA fight",
    "Gullu Kushal Tanwar",
    "Nakul Dhull eviction",
    "Bigg Boss 20 Weekend Ka Vaar",
    "Bigg Boss 20 promo",
    "Bigg Boss 20 captaincy task",
    "Salman Khan Weekend Ka Vaar",
    "Bigg Boss 20 ration",
    "Bigg Boss 20 100% ration",
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
    "Khatron Ke Khiladi stunts",
    "Rise and Fall 2",
    "Shreya Kalra Karan Patel",
    "Indian Reality TV",
  ],
  alternates: {
    canonical: "/reality-shows",
  },
  openGraph: {
    title: "Reality Shows — Buzz Originals | Raw, Unfiltered Coverage",
    description:
      "Eliminations, fights, weekly ration milestones, hot seat stories and dome drama — every Bigg Boss 20, Koffee With Karan, KBC 18 and Splitsvilla moment.",
    url: "https://www.buzzoriginals.com/reality-shows",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
        width: 1024,
        height: 576,
        alt: "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far — Buzz Originals Reality Shows",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reality Shows — Buzz Originals",
    description:
      "Raw, unfiltered entertainment coverage of Bigg Boss 20, Koffee With Karan, KBC 18, Splitsvilla & Rise and Fall.",
    images: ["/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg"],
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
          name: "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far",
          url: "https://www.buzzoriginals.com/jiya-shankar-unfollows-fiance-kd-instagram",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?",
          url: "https://www.buzzoriginals.com/bigg-boss-20-gullu-evicted-yung-dsa-fight",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating",
          url: "https://www.buzzoriginals.com/bigg-boss-20-100-per-cent-ration-housemates",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory",
          url: "https://www.buzzoriginals.com/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
          url: "https://www.buzzoriginals.com/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Janhvi Kapoor Breaks Silence on Peddi Controversy: “A Violating Experience”",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
        },
        {
          "@type": "ListItem",
          position: 7,
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
