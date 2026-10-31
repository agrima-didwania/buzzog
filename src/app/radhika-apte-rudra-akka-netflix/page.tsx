import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Radhika Apte on Her Akka Role Rudra: Never Played Before",
  description:
    "Radhika Apte shares why Rudra in Netflix’s Akka is unlike any role she has played. Here is the cast, plot, and everything we know.",
  keywords: [
    "Radhika Apte",
    "Akka Netflix",
    "Rudra character",
    "Keerthy Suresh",
    "Akka web series",
    "Akka cast",
    "Netflix India",
    "YRF Entertainment",
    "Dharmaraj Shetty",
    "Zeenat Aman style",
    "Web series news",
  ],
  openGraph: {
    title: "Radhika Apte on Her Akka Role Rudra: Never Played Before",
    description:
      "Radhika Apte shares why Rudra in Netflix’s Akka is unlike any role she has played. Here is the cast, plot, and everything we know.",
    url: "https://www.buzzoriginals.com/radhika-apte-rudra-akka-netflix",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/radhika-apte-rudra-akka-netflix.jpg",
        width: 1024,
        height: 576,
        alt: "Radhika Apte on Playing Rudra in Netflix’s Akka: Why This Role Is Different",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T22:00:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhika Apte on Her Akka Role Rudra: Never Played Before",
    description:
      "Radhika Apte shares why Rudra in Netflix’s Akka is unlike any role she has played. Here is the cast, plot, and everything we know.",
    images: ["/images/radhika-apte-rudra-akka-netflix.jpg"],
  },
  alternates: {
    canonical: "/radhika-apte-rudra-akka-netflix",
  },
};

export default function RadhikaApteAkkaPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/radhika-apte-rudra-akka-netflix";
  const pageTitle =
    "Radhika Apte on Playing Rudra in Netflix’s Akka: Why This Role Is Different";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/radhika-apte-rudra-akka-netflix.jpg",
    ],
    datePublished: "2026-10-31T22:00:00+05:30",
    dateModified: "2026-10-31T22:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Entertainment Desk",
        url: "https://www.buzzoriginals.com/about",
      },
    ],
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Buzz Originals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/assets/buzzog-logo.png",
      },
    },
    description:
      "Radhika Apte shares why Rudra in Netflix’s Akka is unlike any role she has played. Here is the cast, plot, and everything we know.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.buzzoriginals.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web Series",
        item: "https://www.buzzoriginals.com/web-series",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Radhika Apte Akka Rudra",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Navigation */}
      <Header activeNav="Web Series" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/web-series">WEB SERIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>RADHIKA APTE AKKA</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">📺 Netflix Original</span>
            <span className="badge pink">💥 Gangster Drama</span>
            <span className="badge">Web Series</span>
          </div>

          <h1 className="article-title">{pageTitle}</h1>

          <div className="article-meta-bar">
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>
                BY{" "}
                <Link href="/about" style={{ textDecoration: "underline", color: "inherit" }}>
                  BUZZ ORIGINALS ENTERTAINMENT DESK
                </Link>
              </span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span>OTT &amp; WEB SERIES BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 31, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/radhika-apte-rudra-akka-netflix.jpg"
            alt="Radhika Apte on Playing Rudra in Netflix’s Akka: Why This Role Is Different"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Radhika Apte stars as Rudra alongside Keerthy Suresh in Netflix and YRF Entertainment&apos;s 1980s retro gangster series &apos;Akka&apos;. (Photo: Netflix / YRF Entertainment)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Radhika Apte</strong> is back with something new, and she says it herself: this is not her usual kind of role. In Netflix’s <em>Akka</em>, she plays <strong>Rudra</strong>, a strong woman at the centre of a deadly power game.
          </p>

          <p>
            The series premiered on Netflix on <strong>30 October 2026</strong>. Here is what Radhika has said about her character, and what the show is about.
          </p>

          <h2>What Is Akka About?</h2>
          <p>
            <em>Akka</em> is a gangster drama set in the 1980s. The story takes place in <strong>Pernuru</strong>, a made-up kingdom that has been built and ruled by women for generations.
          </p>
          <p>
            Two women stand on opposite sides: <strong>Bhavani</strong>, played by Keerthy Suresh, and <strong>Rudra</strong>, played by Radhika Apte. They have different goals and different beliefs. That clash becomes a fierce rivalry, and the show is about power, legacy, and revenge.
          </p>

          <h2>Why Radhika Apte Said Yes to Rudra</h2>
          <p>
            Radhika says what pulled her in was how layered the characters are. On the surface, Rudra looks dramatic and stylish. Underneath, there is much more going on.
          </p>
          <p>
            Radhika explained that there’s “a lot of complexity to her”. She also said Rudra is the kind of role she had not done before. In her own words:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              padding: "16px 20px",
              margin: "24px 0",
              background: "rgba(200, 255, 0, 0.05)",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              color: "#fff",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            “Rudra was a character that I had never played before.”
          </blockquote>

          <p>
            Rudra could easily have been written as a simple villain. But the makers gave her many shades, and that is what made the role exciting for Radhika. She also called Rudra “a fascinating character”, driven by her own beliefs and a need to challenge the world around her.
          </p>

          {/* Also Read Internal Link Box */}
          <div
            style={{
              margin: "24px 0",
              padding: "16px 20px",
              background: "rgba(255, 255, 255, 0.03)",
              borderLeft: "4px solid var(--magenta)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--magenta)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              Also Read
            </span>
            <div style={{ marginTop: "4px" }}>
              <Link
                href="/iifa-2026-winners-list"
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "underline",
                }}
              >
                IIFA 2026 Winners List: The Ba***ds of Bollywood Wins Best Series, Paatal Lok 2 Wins Big →
              </Link>
            </div>
          </div>

          <h2>The Zeenat Aman Connection</h2>
          <p>
            Radhika also shared that she looked at veteran star <strong>Zeenat Aman</strong> for Rudra’s look. Zeenat’s on-screen style became a reference for how Rudra is dressed and presented. That fits the retro, glamorous 80s mood of the show.
          </p>

          <h2>Keerthy Suresh as Bhavani</h2>
          <p>
            Keerthy plays the other side of the rivalry. She described Bhavani as strong but quiet in her own way. The show sets her against Radhika’s Rudra, and their face-off is the main hook of the story.
          </p>

          {/* Instagram Follow CTA */}
          <div
            style={{
              margin: "28px 0",
              padding: "16px 20px",
              background:
                "linear-gradient(135deg, rgba(230, 0, 106, 0.12) 0%, rgba(200, 255, 0, 0.06) 100%)",
              border: "1px solid rgba(230, 0, 106, 0.35)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>
              Follow us on Instagram for the latest OTT updates:{" "}
              <a
                href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                @buzzoriginals
              </a>
            </span>
          </div>

          <h2>Cast and Crew</h2>
          <ul>
            <li>
              <strong>Lead cast:</strong> Radhika Apte, Keerthy Suresh
            </li>
            <li>
              <strong>Also starring:</strong> Tanvi Azmi, Mahesh Manjrekar
            </li>
            <li>
              <strong>Director and writer:</strong> Dharmaraj Shetty (his directorial debut)
            </li>
            <li>
              <strong>Produced by:</strong> YRF Entertainment
            </li>
            <li>
              <strong>Executive producers:</strong> Aditya Chopra, Yogendra Mogre, Akshaye Widhani
            </li>
            <li>
              <strong>Streaming on:</strong> Netflix
            </li>
          </ul>

          <h2>A Quick Timeline</h2>
          <ul>
            <li>
              <strong>November 2023:</strong> The series was first announced as a revenge thriller from YRF.
            </li>
            <li>
              <strong>17 October 2026:</strong> The teaser dropped and the 30 October date was confirmed. It also landed on Keerthy Suresh’s birthday.
            </li>
            <li>
              <strong>22 October 2026:</strong> Netflix released the trailer.
            </li>
            <li>
              <strong>30 October 2026:</strong> <em>Akka</em> premiered on Netflix.
            </li>
          </ul>

          <h2>Final Word</h2>
          <p>
            With <em>Akka</em>, Radhika Apte steps into a role that is bold, stylish, and full of shades. If you like gangster stories with strong women at the centre, this one is worth a watch.
          </p>
          <p>
            Stay tuned to <strong>Buzz OG</strong> for more Bollywood and web series updates.
          </p>

          {/* Tags */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {[
              "RadhikaApte",
              "AkkaNetflix",
              "KeerthySuresh",
              "WebSeries",
              "NetflixIndia",
              "YRFEntertainment",
              "ZeenatAman",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--lavender)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Share Component */}
          <SocialShare url={pageUrl} title={pageTitle} />

          {/* Back to Hubs Navigation */}
          <div style={{ marginTop: "32px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/web-series"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to Web Series Hub
            </Link>
            <Link
              href="/bollywood"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Bollywood Hub →
            </Link>
            <Link
              href="/news"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              The News Desk →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
