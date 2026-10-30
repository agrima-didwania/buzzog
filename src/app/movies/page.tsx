import type { Metadata } from "next";
import MoviesView from "./MoviesView";

export const metadata: Metadata = {
  title: "Movies — Buzz Originals | Box Office, Reviews & Big Screen Clashes",
  description:
    "Movies coverage from Buzz Originals — raw, unfiltered, built for the group chat. Box office numbers, trailer breakdowns, clashes and spoiler-free verdicts.",
  keywords: [
    "Movies Buzz Originals",
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
    "Priyanka Chopra We Were Here",
    "We Were Here short film",
    "Oscar-qualified Indian short film",
    "Pranav Bhasin",
    "Andrew Scott executive producer",
    "Priyanka Chopra executive producer",
    "Oscars 2026",
    "Eetha trailer",
    "Shraddha Kapoor Eetha",
    "Vithabai Narayangaonkar",
    "Eetha release date",
    "Eetha cast",
    "Laxman Utekar",
    "Dinesh Vijan Maddock Films",
    "Patrick Stewart dies",
    "Patrick Stewart death",
    "Professor X actor dies",
    "Patrick Stewart last movie",
    "Avengers Doomsday Professor X",
    "Star Trek Picard actor dies",
    "King Shah Rukh Khan",
    "Siddharth Anand cryptic post",
    "SRK birthday surprise",
    "King release date",
    "Junglywood trailer",
    "Junglywood",
    "Shaan R Grover",
    "Chand Mohammad",
    "Bhumi Pednekar Akshay Kumar Priyadarshan film",
    "Bhumi Pednekar",
    "Akshay Kumar",
    "Priyadarshan",
    "Godzilla Minus Zero India release delayed",
    "Ramayana IMAX clash",
    "Ramayana LA Premiere",
    "Ranbir Kapoor",
    "Yash",
    "Sai Pallavi",
    "Box Office Clashes",
    "Movie trailers breakdown",
    "Movie reviews spoiler free",
  ],
  alternates: {
    canonical: "/movies",
  },
  openGraph: {
    title: "Movies — Buzz Originals | Box Office, Reviews & Big Screen Clashes",
    description:
      "Movies coverage from Buzz Originals — raw, unfiltered, built for the group chat. Box office numbers, trailer breakdowns, clashes and spoiler-free verdicts.",
    url: "https://www.buzzoriginals.com/movies",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg",
        width: 1024,
        height: 682,
        alt: "Parivarik ManuRanjan OTT Release Date: Sony LIV — Buzz Originals Movies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movies — Buzz Originals",
    description:
      "Raw, unfiltered movie coverage: box office clashes, trailer breakdowns & spoiler-free verdicts.",
    images: ["/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg"],
  },
};

export default function MoviesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Movies Coverage — Buzz Originals",
    description:
      "Trailers, box office, clashes and spoiler-free verdicts — raw, unfiltered movie coverage built for the group chat.",
    url: "https://www.buzzoriginals.com/movies",
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
          name: "Parivarik ManuRanjan Release Date: Pankaj Tripathi and Aditi Rao Hydari’s Film Is Coming to Sony LIV",
          url: "https://www.buzzoriginals.com/parivarik-manuranjan-ott-release-date-sony-liv",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Ramayana Advance Booking: US Sales Jump 27% After LA Premiere",
          url: "https://www.buzzoriginals.com/ramayana-advance-booking-us-jump-la-premiere",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here",
          url: "https://www.buzzoriginals.com/priyanka-chopra-we-were-here-executive-producer",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar",
          url: "https://www.buzzoriginals.com/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role",
          url: "https://www.buzzoriginals.com/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
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
          name: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
          url: "https://www.buzzoriginals.com/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Janhvi Kapoor Breaks Silence on Peddi Controversy",
          url: "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
        },
        {
          "@type": "ListItem",
          position: 9,
          name: "Ramayana LA Premiere: Actors Steal the Red Carpet",
          url: "https://www.buzzoriginals.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
        },
        {
          "@type": "ListItem",
          position: 10,
          name: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
          url: "https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana",
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
      <MoviesView />
    </>
  );
}
