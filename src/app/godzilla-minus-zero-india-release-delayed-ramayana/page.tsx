import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Godzilla Minus Zero India Release Delayed | Buzz Originals",
  description:
    "Godzilla Minus Zero’s India release is reportedly delayed by two weeks. Here is why IMAX screens are the reason and what it means for Ramayana.",
  keywords: [
    "Godzilla Minus Zero India release date",
    "Godzilla Minus Zero delayed",
    "Ramayana IMAX",
    "Ramayana vs Godzilla",
    "IMAX India",
    "Godzilla release India",
    "Ranbir Kapoor Ramayana",
  ],
  openGraph: {
    title: "Godzilla Minus Zero India Release Delayed",
    description:
      "Godzilla Minus Zero’s India release is reportedly delayed by two weeks. Here is why IMAX screens are the reason and what it means for Ramayana.",
    url: "https://buzzog.com/godzilla-minus-zero-india-release-delayed-ramayana",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
        width: 1024,
        height: 576,
        alt: "Godzilla Minus Zero India Release Delayed vs Ramayana IMAX Clash",
      },
    ],
    type: "article",
    publishedTime: "2026-10-27T21:00:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Godzilla Minus Zero India Release Delayed",
    description:
      "Godzilla Minus Zero’s India release is reportedly delayed by two weeks. Here is why IMAX screens are the reason and what it means for Ramayana.",
    images: ["/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"],
  },
  alternates: {
    canonical: "/godzilla-minus-zero-india-release-delayed-ramayana",
  },
};

export default function GodzillaArticlePage() {
  const pageUrl = "https://buzzog.com/godzilla-minus-zero-india-release-delayed-ramayana";
  const pageTitle = "Godzilla Minus Zero Skips the Ramayana Clash: India Release Delayed";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://buzzog.com/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    ],
    datePublished: "2026-10-27T21:00:00+05:30",
    dateModified: "2026-10-28T02:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Desk",
        url: "https://buzzog.com/about",
      },
    ],
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Buzz Originals",
      logo: {
        "@type": "ImageObject",
        url: "https://buzzog.com/assets/buzzog-logo.png",
      },
    },
    description:
      "Godzilla Minus Zero’s India release is reportedly delayed by two weeks. Here is why IMAX screens are the reason and what it means for Ramayana.",
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
        item: "https://buzzog.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Cinema",
        item: "https://buzzog.com/#bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Godzilla Minus Zero India Release Delayed",
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
          <Link href="/#bollywood">CINEMA</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>BOX OFFICE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span className="badge pink">🔥 Box Office Scoop</span>
            <span className="badge">IMAX Clash</span>
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
              <span>ENTERTAINMENT BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 28, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
            alt="Godzilla Minus Zero India Release Delayed vs Ramayana IMAX Clash"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 IMAX showdown: Godzilla Minus Zero reportedly avoids a direct box office battle with Nitesh Tiwari&apos;s Ramayana in India.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Big news for movie fans. <strong>Godzilla Minus Zero</strong> will not hit Indian theatres on November 6 as planned. The film’s India release has reportedly been pushed back by around two weeks. The reason is simple: not enough IMAX screens.
          </p>

          <h2>What Happened?</h2>
          <p>
            The Japanese monster film was set to release in India on November 6. The same week, <strong>Ramayana: Part 1</strong> is arriving for the Diwali season. Both films were made for big IMAX screens, and India does not have enough of them for two huge releases.
          </p>
          <p>
            Now, the film’s Indian distributor, PVR INOX Pictures, has put out a new poster. It only says the film is coming in November, with no exact date. That is why the two-week delay is still a report and not an official announcement.
          </p>

          <h2>Why Is the Delay Happening?</h2>
          <p>
            It comes down to IMAX screens. Cinemas have to choose which film gets the best screens, and with so much demand for Ramayana, the choice was easy. Reports say theatres and distributors backed the Indian epic. This means Ramayana can now enjoy a full IMAX rollout in India.
          </p>

          <h2>What About Ramayana?</h2>
          <p>
            Ramayana: Part 1 stars Ranbir Kapoor, Sai Pallavi, Ravi Dubey, and Yash alongside other actors, and is directed by Nitesh Tiwari. It releases in the first week of November, right around Dhanteras and Diwali. Without Godzilla in the way, it gets a solo run and more premium screens during the festival weekend, which is the most important time at the box office.
          </p>
          <p>
            Part 2 is expected to arrive on Diwali 2028.
          </p>

          <h2>Will Godzilla Minus Zero Still Release Elsewhere?</h2>
          <p>
            Yes, nothing changes for other countries. The film opens in Japan on November 3 and in North America on November 6.
          </p>
          <p>
            It is also the first Japanese film shot for IMAX, so the makers want audiences to see it on the biggest screen possible. Fans in India may actually benefit from the wait. If the film gets proper IMAX shows later in November, it will be worth it.
          </p>

          <h2>Why Are Indian Fans So Excited?</h2>
          <p>
            The first film, <em>Godzilla Minus One</em>, won the Oscar for Best Visual Effects. Many Indian fans were sad when it never came to Indian theatres and only showed up on OTT. So this time, a proper theatrical release in India is a big deal.
          </p>

          {/* Related Stories */}
          <div className="article-related-box">
            <span className="kicker">Related Breaking Story</span>
            <Link href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi">
              Inside Ramayana’s LA Premiere: Ranbir Kapoor, Yash & Sai Pallavi Steal the Red Carpet →
            </Link>
            <Link href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad">
              Vijay Deverakonda and Rashmika Mandanna Take Legal Action Against Cyber Trolls →
            </Link>
          </div>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#GodzillaMinusZero</span>
            <span className="tag-badge">#RamayanaMovie</span>
            <span className="tag-badge">#RanbirKapoor</span>
            <span className="tag-badge">#IMAXIndia</span>
            <span className="tag-badge">#BoxOffice</span>
            <span className="tag-badge">#NiteshTiwari</span>
          </div>

          {/* Accessible Social Share Component */}
          <SocialShare title={pageTitle} url={pageUrl} />

          {/* Navigation & Back to Home */}
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
