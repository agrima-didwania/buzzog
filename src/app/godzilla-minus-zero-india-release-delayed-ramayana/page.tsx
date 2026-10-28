import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Godzilla Minus Zero India Release Delayed | Buzz OG",
  description:
    "Godzilla Minus Zero’s India release is reportedly delayed by two weeks. Here is why IMAX screens are the reason and what it means for Ramayana.",
  keywords: [
    "Godzilla Minus Zero India release date",
    "Godzilla Minus Zero delayed",
    "Ramayana IMAX",
    "Ramayana vs Godzilla",
    "Godzilla Minus Zero",
    "Ramayana movie Ranbir Kapoor",
    "PVR INOX Pictures",
    "IMAX screens India",
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
    publishedTime: "2026-10-28T02:00:00.000Z",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Godzilla Minus Zero Skips the Ramayana Clash: India Release Delayed",
    image: [
      "https://buzzog.com/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    ],
    datePublished: "2026-10-28T02:00:00+05:30",
    dateModified: "2026-10-28T02:00:00+05:30",
    author: [
      {
        "@type": "Organization",
        name: "Buzz Originals Desk",
      },
    ],
    publisher: {
      "@type": "Organization",
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
      "@id":
        "https://buzzog.com/godzilla-minus-zero-india-release-delayed-ramayana",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Navigation */}
      <Header activeNav="Movies" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/#movies">MOVIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>BOX OFFICE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span className="badge pink">🔥 Box Office Scoop</span>
            <span className="badge">IMAX Clash</span>
          </div>

          <h1 className="article-title">
            Godzilla Minus Zero Skips the Ramayana Clash: India Release Delayed
          </h1>

          <div className="article-meta-bar">
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>BY <strong>BUZZ ORIGINALS DESK</strong></span>
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
            The Japanese monster film was set to release in India on November 6. The same week, <em>Ramayana: Part 1</em> is arriving for the Diwali season. Both films were made for big IMAX screens, and India does not have enough of them for two huge releases.
          </p>
          <p>
            Now, the film’s Indian distributor, <strong>PVR INOX Pictures</strong>, has put out a new poster. It only says the film is coming in November, with no exact date. That is why the two-week delay is still a report and not an official announcement.
          </p>

          <h2>Why Is the Delay Happening?</h2>
          <p>
            It comes down to IMAX screens. Cinemas have to choose which film gets the best screens, and with so much demand for <em>Ramayana</em>, the choice was easy. Reports say theatres and distributors backed the Indian epic. This means <em>Ramayana</em> can now enjoy a full IMAX rollout in India.
          </p>

          {/* Key Takeaway Highlight Box */}
          <div className="article-quote-box">
            <p>
              &ldquo;With limited IMAX auditoriums across major metros, exhibitors and distributors unanimously prioritized Ramayana for the high-stake Diwali festive window, paving the way for a solo mega-format run.&rdquo;
            </p>
          </div>

          <h2>What About Ramayana?</h2>
          <p>
            <em>Ramayana: Part 1</em> stars <strong>Ranbir Kapoor, Sai Pallavi, Ravi Dubey, and Yash</strong> alongside other actors, and is directed by <strong>Nitesh Tiwari</strong>. It releases in the first week of November, right around Dhanteras and Diwali.
          </p>
          <p>
            Without Godzilla in the way, it gets a solo run and more premium screens during the festival weekend, which is the most important time at the box office.
          </p>
          <p style={{ color: "var(--lime)", fontWeight: 600 }}>
            Part 2 is expected to arrive on Diwali 2028.
          </p>

          <h2>Will Godzilla Minus Zero Still Release Elsewhere?</h2>
          <p>
            Yes, nothing changes for other countries. The film opens in Japan on <strong>November 3</strong> and in North America on <strong>November 6</strong>.
          </p>
          <p>
            It is also the first Japanese film shot for IMAX, so the makers want audiences to see it on the biggest screen possible. Fans in India may actually benefit from the wait. If the film gets proper IMAX shows later in November, it will be worth it.
          </p>

          <h2>Why Are Indian Fans So Excited?</h2>
          <p>
            The first film, <em>Godzilla Minus One</em>, won the Oscar for Best Visual Effects. Many Indian fans were sad when it never came to Indian theatres and only showed up on OTT. So this time, a proper theatrical release in India is a big deal.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#GodzillaMinusZero</span>
            <span className="tag-badge">#RamayanaMovie</span>
            <span className="tag-badge">#RanbirKapoor</span>
            <span className="tag-badge">#IMAXIndia</span>
            <span className="tag-badge">#RamayanavsGodzilla</span>
            <span className="tag-badge">#PVRINOX</span>
            <span className="tag-badge">#BoxOfficeIndia</span>
            <span className="tag-badge">#Diwali2026</span>
          </div>

          {/* Related Articles Banner */}
          <div
            style={{
              marginTop: "36px",
              padding: "20px",
              background: "var(--ink-2)",
              borderRadius: "16px",
              border: "1px solid var(--line)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "11px",
                color: "var(--magenta)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Related Breaking Story
            </span>
            <Link
              href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
              style={{
                display: "block",
                marginTop: "8px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              Vijay Deverakonda and Rashmika Mandanna Take Legal Action Against Fake News and Trolling →
            </Link>
          </div>

          {/* Navigation & Share */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
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

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
              >
                SHARE THIS STORY:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Godzilla Minus Zero India Release Delayed | Buzz Originals"
                )}&url=https://buzzog.com/godzilla-minus-zero-india-release-delayed-ramayana`}
                target="_blank"
                rel="noreferrer"
                className="btn-follow"
                style={{ padding: "8px 16px", fontSize: "12px" }}
              >
                Share on X
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
