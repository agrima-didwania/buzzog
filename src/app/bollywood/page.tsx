import type { Metadata } from "next";
import BollywoodView from "./BollywoodView";

export const metadata: Metadata = {
  title: "Bollywood — Buzz Originals | Red Carpets, Gossip & Exclusive Scoops",
  description:
    "Bollywood coverage from Buzz Originals — raw, unfiltered, built for the group chat. Red carpets, rumours, airport looks and exclusives.",
  keywords: [
    "Bollywood Buzz Originals",
    "Bollywood news",
    "Ramayana LA Premiere",
    "Ranbir Kapoor",
    "Yash",
    "Sai Pallavi",
    "Vijay Deverakonda Rashmika Mandanna",
    "Janhvi Kapoor Peddi controversy",
    "Bollywood gossip",
    "Rumour Radar",
    "Bollywood red carpet",
  ],
  alternates: {
    canonical: "/bollywood",
  },
  openGraph: {
    title: "Bollywood — Buzz Originals | Red Carpets, Gossip & Exclusives",
    description:
      "Red carpets, rumours, airport looks and exclusives — raw, unfiltered Bollywood coverage built for the group chat.",
    url: "https://www.buzzoriginals.com/bollywood",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
        width: 1200,
        height: 675,
        alt: "Buzz Originals Bollywood Coverage",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bollywood — Buzz Originals",
    description:
      "Raw, unfiltered Bollywood coverage of red carpets, gossip, airport sightings & exclusives.",
    images: ["/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"],
  },
};

export default function BollywoodPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Bollywood Coverage — Buzz Originals",
    description:
      "Red carpets, rumours, airport looks and exclusives — raw, unfiltered Bollywood coverage built for the group chat.",
    url: "https://www.buzzoriginals.com/bollywood",
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
          name: "Ramayana LA Premiere: Actors Steal the Red Carpet",
          url: "https://www.buzzoriginals.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vijay & Rashmika team files cyber crime complaint over KWK 9 online trolling",
          url: "https://www.buzzoriginals.com/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Janhvi Kapoor Breaks Silence on Peddi Controversy",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
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
      <BollywoodView />
    </>
  );
}
