import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Jiya Shankar Unfollows Fiancé KD on Instagram",
  description:
    "Jiya Shankar has unfollowed fiancé Kaaran Dhanak (KD) and shared emotional reposts. Here is what fans noticed and what she said in her statement.",
  keywords: [
    "Jiya Shankar",
    "Jiya Shankar KD",
    "Kaaran Dhanak",
    "Jiya Shankar engagement",
    "Bigg Boss OTT 2",
    "Bigg Boss",
    "Influencer",
    "Jiya Shankar breakup rumours",
    "Jiya Shankar Instagram unfollow",
    "Bollywood gossip",
    "Reality show news",
  ],
  openGraph: {
    title: "Jiya Shankar Unfollows Fiancé KD on Instagram",
    description:
      "Jiya Shankar has unfollowed fiancé Kaaran Dhanak (KD) and shared emotional reposts. Here is what fans noticed and what she said in her statement.",
    url: "https://www.buzzoriginals.com/jiya-shankar-unfollows-fiance-kd-instagram",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
        width: 1024,
        height: 576,
        alt: "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T00:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiya Shankar Unfollows Fiancé KD on Instagram",
    description:
      "Jiya Shankar has unfollowed fiancé Kaaran Dhanak (KD) and shared emotional reposts. Here is what fans noticed and what she said in her statement.",
    images: ["/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg"],
  },
  alternates: {
    canonical: "/jiya-shankar-unfollows-fiance-kd-instagram",
  },
};

export default function JiyaShankarUnfollowsKDPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/jiya-shankar-unfollows-fiance-kd-instagram";
  const pageTitle =
    "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
    ],
    datePublished: "2026-10-31T00:30:00+05:30",
    dateModified: "2026-10-31T00:30:00+05:30",
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
      "Jiya Shankar has unfollowed fiancé Kaaran Dhanak (KD) and shared emotional reposts. Here is what fans noticed and what she said in her statement.",
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
        name: "Reality Shows",
        item: "https://www.buzzoriginals.com/reality-shows",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Jiya Shankar Unfollows KD",
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
          <Link href="/reality-shows">REALITY SHOWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>JIYA SHANKAR UNFOLLOWS KD</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">💔 Breakup Rumours</span>
            <span className="badge lime">Bigg Boss OTT 2</span>
            <span className="badge">Bollywood &amp; Reality</span>
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
              <span>REALITY &amp; CELEB BUREAU</span>
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
            src="/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg"
            alt="Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Bigg Boss OTT 2 star Jiya Shankar sparks breakup speculation after unfollowing fiancé Kaaran Dhanak (KD) and sharing emotional notes on Instagram. (Photo: Instagram / Jiya Shankar)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Fans of <em>Bigg Boss OTT 2</em> fame <strong>Jiya Shankar</strong> are worried. Her Instagram activity has changed suddenly, and people are asking one big question: is everything okay between her and her fiancé, <strong>Kaaran Dhanak</strong>, also known as <strong>KD</strong>?
          </p>
          <p>
            Here is the full story in simple words.
          </p>

          <h2>What Made Fans Notice?</h2>
          <p>
            It began on October 29, 2026. Fans saw that Jiya was resharing emotional posts and reels. Many of them were about heartbreak, betrayal and tough times.
          </p>
          <p>
            Two of the reposts got a lot of attention:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--magenta)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;Two things I know for sure: Prayers work and tables eventually turn.&rdquo;
          </blockquote>
          <blockquote style={{ borderLeft: "3px solid var(--lime)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;Some nights I don’t want healing. I want the universe to admit that what happened was cruel.&rdquo;
          </blockquote>
          <p>
            Then came the biggest clue. Followers noticed that Jiya no longer follows KD on Instagram. On October 30, screenshots of her reposts spread across social media, and many fans said they were worried about her.
          </p>
          <p>
            One key detail to note: her engagement photos are still intact on her profile.
          </p>

          <h2>What Did Jiya Shankar Say?</h2>
          <p>
            Jiya has now spoken up, but she did not say whether the engagement is still on. She asked people to stop guessing.
          </p>
          <p>
            In her official statement, she wrote:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--lavender)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;I’d like to clarify something. Recent assumptions about my personal life have gone far beyond what I have actually shared.&rdquo;
          </blockquote>
          <p>
            She also asked fans not to spread rumours:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--magenta)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;Please don’t speculate about or spread rumors regarding my relationship.&rdquo;
          </blockquote>
          <p>
            She ended her message with:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--lime)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;Some things are private, and I’d appreciate everyone respecting that.&rdquo;
          </blockquote>
          <p>
            So for now, there is no official confirmation of a breakup, and no confirmation that they are still together.
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

          <h2>A Quick Look Back: Jiya and KD’s Engagement</h2>
          <p>
            Jiya announced her engagement on August 5, 2026. She shared photos from a sunset proposal, showing KD down on one knee and her diamond ring. Her long, emotional caption spoke about distance, patience and choosing each other every day.
          </p>
          <ul>
            <li>
              <strong>Engagement announcement:</strong> August 5, 2026, via sunset proposal photos
            </li>
            <li>
              <strong>Fiancé profile:</strong> Kaaran Dhanak (KD) is a US-based entrepreneur working in web businesses and hospitality
            </li>
            <li>
              <strong>Timeline:</strong> Speculation surfaces less than three months after the engagement
            </li>
            <li>
              <strong>Current status:</strong> Unfollowed on Instagram; engagement posts remain visible
            </li>
          </ul>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/bigg-boss-20-gullu-evicted-yung-dsa-fight"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight? →
              </Link>
            </p>
          </div>

          <h2>Who Is Jiya Shankar?</h2>
          <p>
            Jiya Shankar is an actress and model. She became widely known across the country as a standout contestant on <em>Bigg Boss OTT 2</em>. With a loyal and massive fan following across social media, her personal life and career milestones frequently make headlines and trend online.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            For now, all fans have to go on is her unfollow, her cryptic reposts and her short statement asking for privacy. Neither Jiya nor KD has shared a definitive statement regarding their future plans or marital commitments. We will update this story if either of them shares more.
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more updates on Bigg Boss, reality TV buzz and Bollywood scoops.
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
              "Jiya Shankar",
              "Jiya Shankar KD",
              "Kaaran Dhanak",
              "Jiya Shankar Engagement",
              "Bigg Boss OTT 2",
              "Bigg Boss",
              "Influencer",
              "Bollywood News",
              "Reality TV",
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

          {/* Back to All Buzz Navigation */}
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
              ← Back to All Bollywood Buzz
            </Link>
            <Link
              href="/reality-shows"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Browse Reality Shows →
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
