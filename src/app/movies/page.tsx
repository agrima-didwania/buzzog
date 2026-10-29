import type { Metadata } from "next";
import MoviesView from "./MoviesView";

export const metadata: Metadata = {
  title: "Movies — Buzz Originals | Box Office, Reviews & Big Screen Clashes",
  description:
    "Movies coverage from Buzz Originals — raw, unfiltered, built for the group chat. Box office numbers, trailer breakdowns, clashes and spoiler-free verdicts.",
  keywords: [
    "Movies Buzz Originals",
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
        url: "/images/junglywood-trailer-shaan-r-grover.jpg",
        width: 1024,
        height: 576,
        alt: "Junglywood Trailer Out: Shaan R Grover's Bollywood Thriller — Buzz Originals Movies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Movies — Buzz Originals",
    description:
      "Raw, unfiltered movie coverage: box office clashes, trailer breakdowns & spoiler-free verdicts.",
    images: ["/images/junglywood-trailer-shaan-r-grover.jpg"],
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
          name: "Junglywood Trailer Out: Shaan R Grover Takes On Bollywood's Insider vs Outsider Debate",
          url: "https://www.buzzoriginals.com/junglywood-trailer-shaan-r-grover",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
          url: "https://www.buzzoriginals.com/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
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
