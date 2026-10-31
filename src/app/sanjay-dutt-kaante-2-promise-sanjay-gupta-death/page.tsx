import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Sanjay Dutt Promises Kaante 2 After Sanjay Gupta’s Death",
  description:
    "Sanjay Dutt has shared an emotional note after filmmaker Sanjay Gupta’s death. He has promised to make Kaante 2 in memory of his close friend.",
  keywords: [
    "Sanjay Dutt",
    "Sanjay Gupta death",
    "Kaante 2",
    "Sanjay Gupta passes away",
    "Kaante sequel",
    "Kaante 2 promise",
    "Sanjay Dutt emotional post",
    "Sanjay Dutt Instagram post",
    "Amitabh Bachchan Kaante",
    "Shootout at Wadala director",
    "Bollywood news today",
    "In Memoriam",
  ],
  openGraph: {
    title: "Sanjay Dutt Promises Kaante 2 After Sanjay Gupta’s Death",
    description:
      "Sanjay Dutt has shared an emotional note after filmmaker Sanjay Gupta’s death. He has promised to make Kaante 2 in memory of his close friend.",
    url: "https://www.buzzoriginals.com/sanjay-dutt-kaante-2-promise-sanjay-gupta-death",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sanjay-dutt-kaante-2-promise-sanjay-gupta-death.jpg",
        width: 1024,
        height: 576,
        alt: "Sanjay Dutt Promises Kaante 2 After Sanjay Gupta’s Death",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T15:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Dutt Promises Kaante 2 After Sanjay Gupta’s Death",
    description:
      "Sanjay Dutt has shared an emotional note after filmmaker Sanjay Gupta’s death. He has promised to make Kaante 2 in memory of his close friend.",
    images: ["/images/sanjay-dutt-kaante-2-promise-sanjay-gupta-death.jpg"],
  },
  alternates: {
    canonical: "/sanjay-dutt-kaante-2-promise-sanjay-gupta-death",
  },
};

export default function SanjayDuttKaante2PromisePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/sanjay-dutt-kaante-2-promise-sanjay-gupta-death";
  const pageTitle =
    "Sanjay Dutt Promises Kaante 2 After Sanjay Gupta’s Death";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Sanjay Dutt Promises to Make Kaante 2 in Memory of Sanjay Gupta",
    image: [
      "https://www.buzzoriginals.com/images/sanjay-dutt-kaante-2-promise-sanjay-gupta-death.jpg",
    ],
    datePublished: "2026-10-31T15:30:00+05:30",
    dateModified: "2026-10-31T15:30:00+05:30",
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
      "Sanjay Dutt has shared an emotional note after filmmaker Sanjay Gupta’s death. He has promised to make Kaante 2 in memory of his close friend.",
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
        name: "Sanjay Dutt Kaante 2",
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
          <span style={{ color: "var(--lavender)" }}>SANJAY DUTT KAANTE 2</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">💔 In Memoriam</span>
            <span className="badge lime">Kaante 2</span>
            <span className="badge">Bollywood Tribute</span>
          </div>

          <h1 className="article-title">
            Sanjay Dutt Promises to Make Kaante 2 in Memory of Sanjay Gupta
          </h1>

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
            src="/images/sanjay-dutt-kaante-2-promise-sanjay-gupta-death.jpg"
            alt="Sanjay Dutt Promises Kaante 2 After Sanjay Gupta’s Death"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Sanjay Dutt pays a heartfelt emotional tribute to late filmmaker Sanjay Gupta, promising to bring his dream project &apos;Kaante 2&apos; to life. (Photo: Instagram / @duttsanjay)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Bollywood is mourning the loss of filmmaker <strong>Sanjay Gupta</strong>. Now his close friend <strong>Sanjay Dutt</strong> has made a big promise. He says he will make <em>Kaante 2</em> for his late friend.
          </p>

          <h2>What Happened?</h2>
          <p>
            Sanjay Gupta, the director of <em>Kaante</em>, <em>Shootout at Lokhandwala</em> and <em>Kaabil</em>, passed away on the night of 30 October. As per reports, he slipped in the bathroom of his Mumbai home and suffered a head injury. His family was reportedly at home but did not know about the fall at that time.
          </p>
          <p>
            The news shocked the film industry. Many celebrities shared their sadness on social media.
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/sanjay-gupta-passes-away-shootout-at-wadala-director"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala →
              </Link>
            </p>
          </div>

          <h2>Sanjay Dutt’s Emotional Note</h2>
          <p>
            Sanjay Dutt shared a set of old pictures with Gupta and wrote a heartfelt message. He began by calling him <em>“Gupts, my brother.”</em>
          </p>
          <p>
            He also wrote: <em>“I will miss you, our conversations and all the times we spent together.”</em>
          </p>
          <p>
            Then came the promise that fans are talking about: <em>“We were just discussing Kante 2 recently, I will make Kaante 2 your dream, in memory of you my brother, I will do everything for this dream of yours to come true, love you forever and always. May God bless your soul.”</em>
          </p>
          <p>
            One photo is a throwback from a celebration. In it, Dutt feeds cake to Gupta, and <strong>Amitabh Bachchan</strong> stands next to them.
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

          <h2>A Friendship of Many Years</h2>
          <p>
            Sanjay Dutt and Sanjay Gupta worked together on many films. These include <em>Aatish: Feel the Fire</em>, <em>Jung</em>, <em>Khauff</em>, <em>Kaante</em>, <em>Plan</em>, <em>Musafir</em>, <em>Zinda</em> and <em>Shootout at Lokhandwala</em>.
          </p>

          <h2>Why Kaante Matters</h2>
          <p>
            <em>Kaante</em> came out in 2002. It is a heist thriller about six men who rob a bank in Los Angeles. The film is inspired by Quentin Tarantino’s <em>Reservoir Dogs</em>. It starred <strong>Amitabh Bachchan</strong>, <strong>Sanjay Dutt</strong>, <strong>Suniel Shetty</strong>, <strong>Mahesh Manjrekar</strong>, <strong>Lucky Ali</strong> and <strong>Kumar Gaurav</strong>. Many fans still call it a cult favourite.
          </p>

          <h2>Other Stars Pay Tribute</h2>
          <p>
            Singer <strong>Mika Singh</strong> also remembered Gupta. He said the filmmaker gave him his first break in Bollywood. Actor <strong>Harshvardhan Rane</strong> was among the others who shared their grief.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            There is no official announcement yet about the cast, team or release date of <em>Kaante 2</em>. For now, Sanjay Dutt has only made a personal promise.
          </p>
          <p>
            Stay tuned to <strong>Buzz OG</strong> for more Bollywood updates.
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
              "Sanjay Dutt",
              "Sanjay Gupta death",
              "Kaante 2",
              "Sanjay Gupta",
              "Kaante",
              "Bollywood Tribute",
              "Amitabh Bachchan",
              "Bollywood News",
              "Mika Singh",
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
              href="/reality-shows"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Reality Shows Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
