import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Sanjay Gupta Passes Away",
  description:
    "Filmmaker Sanjay Gupta, director of Kaante, Shootout at Wadala and Kaabil, has passed away. Here is what we know so far and a look at his film journey.",
  keywords: [
    "Sanjay Gupta death",
    "Sanjay Gupta passes away",
    "Shootout at Wadala director",
    "Kaante director dies",
    "Sanjay Gupta",
    "Bollywood director death",
    "Kaabil director",
    "Sanjay Gupta films",
    "Bollywood news today",
    "In Memoriam",
  ],
  openGraph: {
    title: "Sanjay Gupta Passes Away",
    description:
      "Filmmaker Sanjay Gupta, director of Kaante, Shootout at Wadala and Kaabil, has passed away. Here is what we know so far and a look at his film journey.",
    url: "https://www.buzzoriginals.com/sanjay-gupta-passes-away-shootout-at-wadala-director",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg",
        width: 1024,
        height: 576,
        alt: "Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T11:50:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Gupta Passes Away",
    description:
      "Filmmaker Sanjay Gupta, director of Kaante, Shootout at Wadala and Kaabil, has passed away. Here is what we know so far and a look at his film journey.",
    images: ["/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg"],
  },
  alternates: {
    canonical: "/sanjay-gupta-passes-away-shootout-at-wadala-director",
  },
};

export default function SanjayGuptaPassesAwayPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/sanjay-gupta-passes-away-shootout-at-wadala-director";
  const pageTitle =
    "Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg",
    ],
    datePublished: "2026-10-31T11:50:00+05:30",
    dateModified: "2026-10-31T11:50:00+05:30",
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
      "Filmmaker Sanjay Gupta, director of Kaante, Shootout at Wadala and Kaabil, has passed away. Here is what we know so far and a look at his film journey.",
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
        name: "Bollywood",
        item: "https://www.buzzoriginals.com/bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "News",
        item: "https://www.buzzoriginals.com/news",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Sanjay Gupta Passes Away",
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
      <Header activeNav="Bollywood" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <Link href="/news">NEWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>SANJAY GUPTA PASSES AWAY</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🕊️ In Memoriam</span>
            <span className="badge">Bollywood &amp; News</span>
            <span className="badge lime">Breaking News</span>
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
              <span>BOLLYWOOD &amp; NEWS BUREAU</span>
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
            src="/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg"
            alt="Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Filmmaker Sanjay Gupta, known for stylish blockbusters like Kaante, Shootout at Wadala and Kaabil, has passed away. (Photo: Buzz Originals Archive)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Bollywood woke up to sad news on Saturday, 31 October 2026. Filmmaker <strong>Sanjay Gupta</strong>, known for stylish action and crime films, has died.
          </p>

          <h2>What Happened to Sanjay Gupta?</h2>
          <p>
            Reports say he passed away on the night of 30 October. Early reports say he fell in his bathroom at night. Nobody realised it until the next morning, when it came out that he had died.
          </p>
          <p>
            The exact cause of death has not been officially confirmed. Details from his family are still awaited.
          </p>

          <h2>Who Was Sanjay Gupta?</h2>
          <p>
            Sanjay Gupta was a director, producer and writer in Hindi cinema. Before directing, he worked in post-production and sound design. He also assisted filmmaker Pankaj Parashar.
          </p>
          <p>
            He started his directing career with <em>Aatish: Feel the Fire</em> in 1994. After films like <em>Khauff</em> and <em>Jung</em>, he made <strong>Kaante</strong> in 2002, which became one of his best-known films.
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
              Follow us on Instagram for the latest updates:{" "}
              <a
                href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Buzz Originals
              </a>
            </span>
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "6px 16px", fontSize: "12px", textTransform: "uppercase" }}
            >
              Follow @buzzoriginals
            </a>
          </div>

          <h2>Sanjay Gupta’s Best-Known Films</h2>
          <ul>
            <li>
              <strong>Kaante (2002)</strong> – Groundbreaking multi-starrer heist thriller shot in Los Angeles
            </li>
            <li>
              <strong>Zinda (2006)</strong> – Gritty, psychological neo-noir thriller starring Sanjay Dutt and John Abraham
            </li>
            <li>
              <strong>Shootout at Lokhandwala (2007)</strong> – Produced by Gupta, chronicling Mumbai Police’s real encounter
            </li>
            <li>
              <strong>Shootout at Wadala (2013)</strong> – Action crime drama dramatizing the first recorded encounter of Manya Surve
            </li>
            <li>
              <strong>Jazbaa (2015)</strong> – Aishwarya Rai Bachchan and Irrfan Khan legal crime thriller
            </li>
            <li>
              <strong>Kaabil (2017)</strong> – High-octane revenge drama starring Hrithik Roshan and Yami Gautam
            </li>
            <li>
              <strong>Mumbai Saga (2021)</strong> – Period underworld saga set across the 1980s and 1990s Mumbai
            </li>
          </ul>

          <p>
            He was known for dark lighting, sharp dialogues and big action scenes. He often worked with actors like <strong>Sanjay Dutt</strong> and <strong>John Abraham</strong>.
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/iifa-2026-winners-list"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                IIFA 2026 Winners List: Dhurandhar Wins 12 Awards, Ranveer Singh &amp; Aneet Padda Top Acting Honors →
              </Link>
            </p>
          </div>

          <h2>A Life With Ups and Downs</h2>
          <p>
            Gupta’s life was not always easy. Years ago, he survived a serious car accident while driving from Pune to Mumbai. He was also known to have heated fights with producers, yet he stayed a popular name in the industry. In his personal life, he divorced his wife and then remarried her a few years later.
          </p>
          <p>
            Many people who knew him remember his big smile and boyish charm.
          </p>

          <h2>Bollywood Reacts</h2>
          <p>
            The film industry is in shock. Colleagues and fans are sharing tributes on social media, and many are remembering him as a passionate filmmaker.
          </p>
          <p>
            Follow <strong>Buzz OG</strong> for more updates.
          </p>

          {/* Tags & Keywords */}
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
              "Sanjay Gupta death",
              "Sanjay Gupta passes away",
              "Shootout at Wadala director",
              "Kaante director dies",
              "Sanjay Gupta",
              "Bollywood News",
              "In Memoriam",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "6px 14px",
                  borderRadius: "20px",
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
              href="/bollywood"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to Bollywood Hub
            </Link>
            <Link
              href="/news"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              The News Desk →
            </Link>
            <Link
              href="/movies"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Movies Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
