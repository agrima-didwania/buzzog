import type { Metadata } from "next";
import NewsView from "./NewsView";

export const metadata: Metadata = {
  title: "News — Buzz Originals | Breaking Entertainment Scoops, Reality TV & Bollywood Updates",
  description:
    "News coverage from Buzz Originals — raw, unfiltered, built for the group chat. Everything breaking across reality TV, Bollywood, movies and OTT — newest first, updated hourly.",
  keywords: [
    "Entertainment News Buzz Originals",
    "Bollywood breaking news",
    "Ibrahim Ali Khan Palak Tiwari breakup",
    "Palak Tiwari Ibrahim Ali Khan",
    "Palak Tiwari",
    "Ibrahim Ali Khan",
    "Bollywood breakup news",
    "Reality TV scoops",
    "Bigg Boss 20 latest news",
    "Koffee With Karan updates",
    "OTT release news",
    "Ramayana advance booking",
    "Ramayana Part One box office",
    "Celebrity scoops India",
    "Ramayana movie premiere",
    "Patrick Stewart final role",
    "Priyanka Chopra We Were Here",
    "We Were Here short film",
    "Oscar-qualified Indian short film",
    "Sara Ali Khan news",
  ],
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "News — Buzz Originals | Breaking Entertainment Scoops & Bollywood Updates",
    description:
      "News coverage from Buzz Originals — raw, unfiltered, built for the group chat. Everything breaking across reality TV, Bollywood, movies and OTT — newest first, updated hourly.",
    url: "https://www.buzzoriginals.com/news",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg",
        width: 1024,
        height: 576,
        alt: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years — Buzz Originals News",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News — Buzz Originals",
    description:
      "Raw, unfiltered entertainment news across reality TV, Bollywood, movies and OTT.",
    images: ["/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg"],
  },
};

export default function NewsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Entertainment News Desk — Buzz Originals",
    description:
      "Everything breaking across reality TV, Bollywood, movies and OTT — raw, unfiltered entertainment coverage built for the group chat.",
    url: "https://www.buzzoriginals.com/news",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Buzz Originals",
      url: "https://www.buzzoriginals.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/assets/buzzog-logo.png",
      },
    },
    about: [
      { "@type": "Thing", name: "Bollywood News" },
      { "@type": "Thing", name: "Reality TV" },
      { "@type": "Thing", name: "Cinema & Movies" },
      { "@type": "Thing", name: "Web Series & OTT" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsView />
    </>
  );
}
