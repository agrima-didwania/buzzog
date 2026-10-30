import type { Metadata } from "next";
import BollywoodView from "./BollywoodView";

export const metadata: Metadata = {
  title: "Bollywood — Buzz Originals | Red Carpets, Gossip & Exclusive Scoops",
  description:
    "Bollywood coverage from Buzz Originals — raw, unfiltered, built for the group chat. Red carpets, rumours, airport looks and exclusives.",
  keywords: [
    "Bollywood Buzz Originals",
    "Bollywood news",
    "Jiya Shankar",
    "Jiya Shankar KD",
    "Kaaran Dhanak",
    "Jiya Shankar engagement",
    "Bigg Boss OTT 2",
    "Parivarik ManuRanjan OTT release date",
    "Parivarik ManuRanjan Sony LIV",
    "Parivarik ManuRanjan cast",
    "Parivarik ManuRanjan story",
    "Pankaj Tripathi new movie",
    "Aditi Rao Hydari new movie",
    "Ramayana advance booking",
    "Ramayana Part One",
    "Ranbir Kapoor Ramayana",
    "Ramayana box office",
    "Ramayana US premiere",
    "Sara Ali Khan fatwa",
    "Sara Ali Khan Kedarnath",
    "Sara Ali Khan Kedarnath temple visit",
    "Sara Ali Khan controversy",
    "Sara Ali Khan news today",
    "Maulana Shahabuddin Razvi Barelvi",
    "Sara Ali Khan Kedarnath fatwa",
    "fatwa against Sara Ali Khan",
    "Sara Ali Khan temple visit controversy",
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
        url: "/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
        width: 1024,
        height: 576,
        alt: "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far — Buzz Originals Bollywood",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bollywood — Buzz Originals",
    description:
      "Raw, unfiltered Bollywood coverage of red carpets, gossip, airport sightings & exclusives.",
    images: ["/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg"],
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
          name: "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far",
          url: "https://www.buzzoriginals.com/jiya-shankar-unfollows-fiance-kd-instagram",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Parivarik ManuRanjan Release Date: Pankaj Tripathi and Aditi Rao Hydari’s Film Is Coming to Sony LIV",
          url: "https://www.buzzoriginals.com/parivarik-manuranjan-ott-release-date-sony-liv",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Ramayana Advance Booking: US Sales Jump 27% After LA Premiere",
          url: "https://www.buzzoriginals.com/ramayana-advance-booking-us-jump-la-premiere",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit",
          url: "https://www.buzzoriginals.com/sara-ali-khan-fatwa-kedarnath-temple-visit",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar",
          url: "https://www.buzzoriginals.com/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
          url: "https://www.buzzoriginals.com/mirzapur-the-movie-prime-video-extended-cut",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?",
          url: "https://www.buzzoriginals.com/siddharth-anand-time-for-the-world-king-srk-birthday",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Junglywood Trailer Out: Shaan R Grover Takes On Bollywood's Insider vs Outsider Debate",
          url: "https://www.buzzoriginals.com/junglywood-trailer-shaan-r-grover",
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Disha Patani Launches Her Own Clothing Brand DZ",
          url: "https://www.buzzoriginals.com/disha-patani-launches-clothing-brand-dz",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
          url: "https://www.buzzoriginals.com/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
          url: "https://www.buzzoriginals.com/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
        },
        {
          "@type": "ListItem",
          position: 11,
          name: "Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too",
          url: "https://www.buzzoriginals.com/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
        },
        {
          "@type": "ListItem",
          position: 12,
          name: "Janhvi Kapoor Breaks Silence on Peddi Controversy",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
        },
        {
          "@type": "ListItem",
          position: 13,
          name: "Ramayana LA Premiere: Actors Steal the Red Carpet",
          url: "https://www.buzzoriginals.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
        },
        {
          "@type": "ListItem",
          position: 14,
          name: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
          url: "https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana",
        },
        {
          "@type": "ListItem",
          position: 15,
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
