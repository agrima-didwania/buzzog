import type { Metadata } from "next";
import BollywoodView from "./BollywoodView";

export const metadata: Metadata = {
  title: "Bollywood — Buzz Originals | Red Carpets, Gossip & Exclusive Scoops",
  description:
    "Bollywood coverage from Buzz Originals — raw, unfiltered, built for the group chat. Red carpets, rumours, airport looks and exclusives.",
  keywords: [
    "Bollywood Buzz Originals",
    "Bollywood news",
    "Eetha trailer",
    "Shraddha Kapoor Eetha",
    "Vithabai Narayangaonkar",
    "Eetha release date",
    "Eetha cast",
    "Laxman Utekar",
    "Dinesh Vijan Maddock Films",
    "Mirzapur The Movie OTT release",
    "Mirzapur The Movie extended cut",
    "Mirzapur The Movie Prime Video",
    "Pankaj Tripathi",
    "Ali Fazal",
    "King Shah Rukh Khan",
    "Siddharth Anand cryptic post",
    "SRK birthday surprise",
    "King release date",
    "Junglywood trailer",
    "Junglywood",
    "Shaan R Grover",
    "Chand Mohammad",
    "Disha Patani clothing brand DZ",
    "Disha Patani DZ",
    "Disha Patani new look",
    "Janhvi Kapoor Veer Pahariya",
    "Janhvi Kapoor Koffee With Karan",
    "KBC 18 Diwali special",
    "Ranbir Kapoor Alia Bhatt proposal",
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
        url: "/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg",
        width: 1024,
        height: 576,
        alt: "Eetha Trailer Out: Shraddha Kapoor as Vithabai Narayangaonkar — Buzz Originals Bollywood",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bollywood — Buzz Originals",
    description:
      "Raw, unfiltered Bollywood coverage of red carpets, gossip, airport sightings & exclusives.",
    images: ["/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg"],
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
          name: "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar",
          url: "https://www.buzzoriginals.com/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
          url: "https://www.buzzoriginals.com/mirzapur-the-movie-prime-video-extended-cut",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?",
          url: "https://www.buzzoriginals.com/siddharth-anand-time-for-the-world-king-srk-birthday",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Junglywood Trailer Out: Shaan R Grover Takes On Bollywood's Insider vs Outsider Debate",
          url: "https://www.buzzoriginals.com/junglywood-trailer-shaan-r-grover",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Disha Patani Launches Her Own Clothing Brand DZ",
          url: "https://www.buzzoriginals.com/disha-patani-launches-clothing-brand-dz",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
          url: "https://www.buzzoriginals.com/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
          url: "https://www.buzzoriginals.com/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too",
          url: "https://www.buzzoriginals.com/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Janhvi Kapoor Breaks Silence on Peddi Controversy",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Ramayana LA Premiere: Actors Steal the Red Carpet",
          url: "https://www.buzzoriginals.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
          url: "https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana",
        },
        {
          "@type": "ListItem",
          position: 13,
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
