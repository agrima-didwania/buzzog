import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film | Buzz Originals",
  description:
    "Bhumi Pednekar is set to star opposite Akshay Kumar in Priyadarshan’s next film. Know the cast, genre, shoot plan and what we know so far.",
  keywords: [
    "Bhumi Pednekar Akshay Kumar Priyadarshan film",
    "Bhumi Pednekar new movie",
    "Akshay Kumar new movie 2026",
    "Akshay Kumar Bhumi Pednekar reunite",
    "Akshay Kumar Bhumi Pednekar third film",
    "Priyadarshan new film",
    "Priyadarshan Akshay Kumar ninth film",
    "Priyadarshan comedy thriller",
    "Akshay Kumar upcoming movies",
    "Bhumi Pednekar upcoming movies",
    "Bhumi Pednekar female lead",
    "Toilet Ek Prem Katha jodi",
    "Raksha Bandhan jodi",
    "Bollywood casting news",
    "Bollywood movie updates",
    "Bollywood latest news",
    "Akshay Kumar Priyadarshan reunion",
    "Tips Films upcoming movie",
    "Bhumi Pednekar",
    "Akshay Kumar",
    "Priyadarshan",
    "Bollywood news",
  ],
  openGraph: {
    title: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
    description:
      "Bhumi Pednekar is set to star opposite Akshay Kumar in Priyadarshan’s next film. Know the cast, genre, shoot plan and what we know so far.",
    url: "https://www.buzzoriginals.com/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg",
        width: 1024,
        height: 576,
        alt: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T11:45:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
    description:
      "Bhumi Pednekar is set to star opposite Akshay Kumar in Priyadarshan’s next film. Know the cast, genre, shoot plan and what we know so far.",
    images: ["/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"],
  },
  alternates: {
    canonical: "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
  },
};

export default function BhumiAkshayArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/bhumi-pednekar-akshay-kumar-priyadarshan-next-film";
  const pageTitle = "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg",
    ],
    datePublished: "2026-10-29T11:45:00+05:30",
    dateModified: "2026-10-29T11:45:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Desk",
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
      "Bhumi Pednekar is set to star opposite Akshay Kumar in Priyadarshan’s next film. Know the cast, genre, shoot plan and what we know so far.",
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
        name: "Bhumi Pednekar Joins Akshay Kumar",
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
          <span style={{ color: "var(--lavender)" }}>CASTING NEWS</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Exclusive Scoop</span>
            <span className="badge">Casting Exclusive</span>
          </div>

          <h1 className="article-title">{pageTitle}</h1>

          <div className="article-meta-bar">
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>
                BY{" "}
                <Link href="/about" style={{ textDecoration: "underline", color: "inherit" }}>
                  BUZZ ORIGINALS DESK
                </Link>
              </span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span>CINEMA BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 29, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
            alt="Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Akshay Kumar and Bhumi Pednekar reunite for director Priyadarshan’s upcoming comedy thriller produced by Tips Films.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Good news for Bollywood fans! <strong>Bhumi Pednekar</strong> is now part of <strong>Priyadarshan’s</strong> upcoming film with <strong>Akshay Kumar</strong>. She will play the female lead.
          </p>

          <h2>What Is the News?</h2>
          <p>
            Bhumi has been signed as the leading lady of the film. The news first came out as an exclusive from HT City. Director Priyadarshan himself has confirmed it.
          </p>
          <p>
            His words were short and clear: <em>&ldquo;Bhumi Pednekar has agreed to do the film.&rdquo;</em>
          </p>
          <p>
            Follow us on Instagram for the latest updates:{" "}
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Buzz Originals
            </a>
          </p>

          <h2>Akshay and Bhumi Are Back Together</h2>
          <p>
            This is not their first film together. Fans loved them in <em>Toilet: Ek Prem Katha</em> (2017). They came together again in <em>Raksha Bandhan</em> (2022). Now, four years later, they are reuniting for a third time on screen.
          </p>

          <h2>About the Film</h2>
          <ul>
            <li>
              <strong>Director:</strong> Priyadarshan
            </li>
            <li>
              <strong>Lead actors:</strong> Akshay Kumar and Bhumi Pednekar
            </li>
            <li>
              <strong>Producer:</strong> Tips Films
            </li>
            <li>
              <strong>Genre:</strong> Comedy thriller (as per reports)
            </li>
            <li>
              <strong>Shoot:</strong> Likely to start in December (as per reports)
            </li>
            <li>
              <strong>Title:</strong> Not announced yet
            </li>
          </ul>
          <p>
            This will be the <strong>ninth film</strong> of Akshay and Priyadarshan together. Their earlier hits include <em>Hera Pheri</em>, <em>Bhagam Bhag</em> and <em>Bhool Bhulaiyaa</em>. The duo is still loved for its comedy.
          </p>

          <h2>Why Fans Are Excited</h2>
          <p>
            Priyadarshan is known for funny, fast-paced films. Akshay Kumar has done some of his best comedy work with him. Adding Bhumi, whom the audience already likes alongside Akshay, gives the film a fresh and familiar mix.
          </p>

          <h2>What Next?</h2>
          <p>
            The makers have not shared the title, release date or the rest of the cast. Stay tuned to Buzz Originals for every update.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#BhumiPednekar</span>
            <span className="tag-badge">#AkshayKumar</span>
            <span className="tag-badge">#Priyadarshan</span>
            <span className="tag-badge">#BollywoodNews</span>
            <span className="tag-badge">#TipsFilms</span>
            <span className="tag-badge">#UpcomingBollywoodMovies</span>
          </div>

          {/* Accessible Social Share Component */}
          <SocialShare title={pageTitle} url={pageUrl} />

          {/* Back to Home */}
          <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid var(--line)" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--lime)",
              }}
            >
              ← Back to All Buzz
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
