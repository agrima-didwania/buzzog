import type { Metadata } from "next";
import BollywoodView from "./BollywoodView";

export const metadata: Metadata = {
  title: "Bollywood — Buzz Originals | Red Carpets, Gossip & Exclusive Scoops",
  description:
    "Bollywood coverage from Buzz Originals — raw, unfiltered, built for the group chat. Red carpets, rumours, airport looks and exclusives.",
  keywords: [
    "Bollywood Buzz Originals",
    "Bollywood news",
    "Bhumi Pednekar Akshay Kumar Priyadarshan film",
    "Bhumi Pednekar",
    "Akshay Kumar",
    "Priyadarshan",
    "Priyanka Chopra Karwa Chauth mehendi",
    "Janhvi Kapoor Peddi controversy",
    "Ramayana LA Premiere",
    "Ranbir Kapoor",
    "Yash",
    "Sai Pallavi",
    "Vijay Deverakonda Rashmika Mandanna",
    "Bollywood gossip",
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
        url: "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg",
        width: 1024,
        height: 576,
        alt: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film — Buzz Originals Bollywood",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bollywood — Buzz Originals",
    description:
      "Raw, unfiltered Bollywood coverage of red carpets, gossip, airport sightings & exclusives.",
    images: ["/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"],
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
          name: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
          url: "https://www.buzzoriginals.com/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too",
          url: "https://www.buzzoriginals.com/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Janhvi Kapoor Breaks Silence on Peddi Controversy",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Ramayana LA Premiere: Actors Steal the Red Carpet",
          url: "https://www.buzzoriginals.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
          url: "https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Vijay & Rashmika team files cyber crime complaint over KWK 9 online trolling",
          url: "https://www.buzzoriginals.com/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
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
