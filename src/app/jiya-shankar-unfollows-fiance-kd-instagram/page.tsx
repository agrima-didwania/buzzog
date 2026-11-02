import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline",
  description:
    "Jiya Shankar is following fiancé Kaaran Dhanak (KD) again after breakup rumours, sharing a Game of Thrones Halloween photo. See the full timeline.",
  keywords: [
    "Jiya Shankar",
    "Jiya Shankar KD",
    "Kaaran Dhanak",
    "Jiya Shankar engagement",
    "Bigg Boss OTT 2",
    "Bigg Boss",
    "Jiya Shankar Halloween",
    "Jiya Shankar breakup rumours",
    "Jiya Shankar Instagram unfollow",
    "Jiya Shankar follows KD again",
    "Bollywood gossip",
    "Reality show news",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline",
    description:
      "Jiya Shankar is following fiancé Kaaran Dhanak (KD) again after breakup rumours, sharing a Game of Thrones Halloween photo. See the full timeline.",
    url: "https://www.buzzoriginals.com/jiya-shankar-unfollows-fiance-kd-instagram",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
        width: 1024,
        height: 576,
        alt: "Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T00:30:00.000Z",
    modifiedTime: "2026-11-02T13:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline",
    description:
      "Jiya Shankar is following fiancé Kaaran Dhanak (KD) again after breakup rumours, sharing a Game of Thrones Halloween photo. See the full timeline.",
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
    "Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
    ],
    datePublished: "2026-10-31T00:30:00+05:30",
    dateModified: "2026-11-02T13:30:00+05:30",
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
      "Jiya Shankar is following fiancé Kaaran Dhanak (KD) again after breakup rumours, sharing a Game of Thrones Halloween photo. See the full timeline.",
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
        name: "Jiya Shankar & KD Timeline",
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
          <span style={{ color: "var(--lavender)" }}>JIYA SHANKAR &amp; KD TIMELINE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🎃 Halloween Update</span>
            <span className="badge pink">Reconciliation Hint</span>
            <span className="badge">Bigg Boss OTT 2</span>
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
              <span>UPDATED: NOV 2, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg"
            alt="Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Bigg Boss OTT 2 star Jiya Shankar has followed fiancé Kaaran Dhanak (KD) back on Instagram and shared a Game of Thrones Halloween costume look together, easing breakup fears. (Photo: Instagram / Jiya Shankar)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Quick update:</strong> The breakup buzz around <strong>Jiya Shankar</strong> and <strong>Kaaran Dhanak (KD)</strong> has taken a new turn. Jiya is following KD on Instagram again, and she has shared a picture of the two of them in Halloween costumes.
          </p>
          <p>
            Here is everything that happened, in order.
          </p>

          <h2>What Is the Latest?</h2>
          <p>
            Jiya put a photo on her Instagram Story where she and KD are dressed as <em>Game of Thrones</em> characters for Halloween. Soon after, eagle-eyed fans noticed she had followed him again on the platform.
          </p>
          <p>
            This unexpected reconciliation hint came just days after the unfollow and the sad reposts that had worried everyone across social media.
          </p>
          <p>
            Neither of them has said anything official about the status of the engagement. So while this is a strong hint that things have smoothed over, it is not yet a formal confirmation.
          </p>

          <p>
            Check Out:{" "}
            <a
              href="https://www.instagram.com/p/DfNdUsgz3Dx/?obrf=b29yZGk2dTZvYXJt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              Jiya Shankar shares halloween look with Fiance after breakup rumours
            </a>
          </p>

          <h2>The Full Timeline</h2>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "20px",
              margin: "24px 0",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ paddingBottom: "14px", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ color: "var(--lime)", fontWeight: 700, fontFamily: "var(--font-space-mono)" }}>
                  OCT 29, 2026:
                </span>{" "}
                Fans see Jiya resharing posts about heartbreak, betrayal and tough times on her Instagram profile.
              </li>
              <li style={{ padding: "14px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ color: "var(--magenta)", fontWeight: 700, fontFamily: "var(--font-space-mono)" }}>
                  OCT 30, 2026:
                </span>{" "}
                People notice she has unfollowed KD on Instagram. Screenshots go viral and fans get deeply worried.
              </li>
              <li style={{ padding: "14px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span style={{ color: "var(--lime)", fontWeight: 700, fontFamily: "var(--font-space-mono)" }}>
                  OCT 31, 2026:
                </span>{" "}
                Jiya posts an official statement on her Story, asking people to stop guessing about her relationship and respect privacy.
              </li>
              <li style={{ paddingTop: "14px" }}>
                <span style={{ color: "var(--lime)", fontWeight: 700, fontFamily: "var(--font-space-mono)" }}>
                  NOV 1, 2026:
                </span>{" "}
                She follows KD again on Instagram and shares their joint Halloween costume photo in Game of Thrones outfits.
              </li>
            </ul>
          </div>

          <h2>What Did Jiya Say?</h2>
          <p>
            Her message on Instagram Stories was short and direct. She said people had assumed far more than she ever shared, and she asked fans not to spread rumours. She also emphasized that some matters are deeply personal and deserve respect:
          </p>

          <blockquote
            style={{
              borderLeft: "3px solid var(--lavender)",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "14px 18px",
              fontStyle: "italic",
              margin: "18px 0",
              color: "#fff",
            }}
          >
            &ldquo;I’d like to clarify something. Recent assumptions about my personal life have gone far beyond what I have actually shared.&rdquo;
          </blockquote>

          <blockquote
            style={{
              borderLeft: "3px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.03)",
              padding: "14px 18px",
              fontStyle: "italic",
              margin: "18px 0",
              color: "#fff",
            }}
          >
            &ldquo;Please don’t speculate about or spread rumors regarding my relationship. Some things are private, and I’d appreciate everyone respecting that.&rdquo;
          </blockquote>

          <p>
            Notably, she did not say if the engagement is on or off. She did not explain the cryptic reposts or the temporary unfollow either.
          </p>

          <h2>What We Don’t Know</h2>
          <p>
            Despite the positive Halloween update, several questions remain unanswered:
          </p>
          <ul>
            <li>Why she unfollowed KD in the first place</li>
            <li>What the emotional reposts about heartbreak and betrayal were originally about</li>
            <li>If the couple’s wedding plans have changed in any way</li>
          </ul>
          <p>
            Some fans online speculated that KD had cheated. However, there is zero evidence or confirmation to support this claim, and Jiya has never made any such statement. We strongly advise treating that talk purely as unverified social media gossip.
          </p>

          <h2>A Quick Look Back: Jiya and KD’s Engagement</h2>
          <p>
            Jiya announced her engagement on <strong>August 5, 2026</strong>, sharing romantic photos of a sunset proposal showing KD down on one knee with a diamond ring. KD (Kaaran Dhanak) is a US-based entrepreneur who manages web businesses and hospitality ventures.
          </p>
          <p>
            Her emotional caption at the time celebrated distance, patience and choosing each other every day. Notably, those sunset engagement photos stayed pinned on her Instagram profile throughout the entire rumour phase, which gave many fans hope.
          </p>

          <p>
            Also Check:{" "}
            <a
              href="https://www.instagram.com/reel/DfJsNFaT-pF/?psln=MTNydjQzZWR4ZDMxeg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              Jiya Shankar Unfollows KD on Instagram Reel
            </a>
          </p>

          <h2>Who Is Jiya Shankar?</h2>
          <p>
            Jiya Shankar is an actress and model who became a household sensation as one of the most popular contestants on <em>Bigg Boss OTT 2</em>. Backed by an enthusiastic and vocal fanbase, even minor shifts in her Instagram following list or cryptic quotes quickly generate viral headlines.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            For now, the unfollow is reversed, the Halloween costume photo is public, and Jiya has asked for privacy. We will continue updating this story if either Jiya Shankar or Kaaran Dhanak shares any further updates.
          </p>
          <p>
            Stay with <strong>Buzz Originals</strong> for more Bigg Boss scoops, reality TV updates, and Bollywood coverage.
          </p>

          {/* Quick Facts Table */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "20px",
              margin: "32px 0",
              overflowX: "auto",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--lime)",
                marginBottom: "16px",
                fontWeight: 700,
              }}
            >
              ⚡ Quick Summary: Jiya Shankar &amp; KD Breakup Buzz
            </h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)", width: "35%" }}>
                    <strong>Celebrity</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>Jiya Shankar (Bigg Boss OTT 2)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Fiancé</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>Kaaran Dhanak (KD) — US-based entrepreneur</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Engagement Date</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>August 5, 2026</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Initial Scare</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    Unfollowed KD on Oct 30 after cryptic heartbreak reposts
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Statement Issued</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    Oct 31, asking fans to respect privacy and stop speculating
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Latest Status</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "var(--lime)", fontWeight: 700 }}>
                    Following KD again; shared Game of Thrones Halloween photo on Nov 1
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Engagement Photos</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    Remained intact throughout on Jiya&apos;s Instagram profile
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Related Stories Links */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "6px",
              padding: "18px 22px",
              margin: "32px 0 24px 0",
            }}
          >
            <h4
              style={{
                color: "var(--lime)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Also Read on Buzz Originals
            </h4>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.8", fontSize: "15px" }}>
              <li>
                <Link
                  href="/orry-halloween-2026-janhvi-khushi-kapoor-competition"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Orry: Janhvi and Khushi Kapoor are His Halloween Competition
                </Link>
              </li>
              <li>
                <Link
                  href="/shah-rukh-khan-61st-birthday-mannat-handwritten-note"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note
                </Link>
              </li>
              <li>
                <Link
                  href="/bigg-boss-20-gullu-evicted-yung-dsa-fight"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?
                </Link>
              </li>
            </ul>
          </div>

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
              "JiyaShankar",
              "JiyaShankarKD",
              "KaaranDhanak",
              "JiyaShankarEngagement",
              "BiggBossOTT2",
              "BiggBoss",
              "Influencer",
              "BollywoodNews",
              "RealityTV",
              "Halloween2026",
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
