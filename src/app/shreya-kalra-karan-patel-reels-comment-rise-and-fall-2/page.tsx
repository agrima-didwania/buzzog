import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Shreya Kalra Hits Back at Karan Patel | Rise and Fall 2 | Buzz Originals",
  description:
    "Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya has replied. Read what happened on Rise and Fall 2.",
  keywords: [
    "Shreya Kalra Karan Patel",
    "Karan Patel reels remark",
    "Rishabh Jaiswal Rise and Fall 2",
    "Rise and Fall 2 controversy",
    "Rise and Fall 2 latest news",
    "Karan Patel Rise and Fall 2",
    "Shreya Kalra reply",
    "Shreya Kalra and Rishabh Jaiswal",
    "Shreya Kalra news",
    "reality TV contestants respect",
    "Kab tak reels mein rahoge",
  ],
  openGraph: {
    title: "Shreya Kalra Hits Back at Karan Patel | Rise and Fall 2",
    description:
      "Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya has replied. Read what happened on Rise and Fall 2.",
    url: "https://buzzog.com/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
        width: 1024,
        height: 682,
        alt: "Shreya Kalra hits back at Karan Patel over reels comment on Rise and Fall 2",
      },
    ],
    type: "article",
    publishedTime: "2026-10-28T11:15:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Kalra Hits Back at Karan Patel | Rise and Fall 2",
    description:
      "Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya has replied. Read what happened on Rise and Fall 2.",
    images: ["/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"],
  },
  alternates: {
    canonical: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
  },
};

export default function ShreyaArticlePage() {
  const pageUrl = "https://buzzog.com/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2";
  const pageTitle = "Shreya Kalra Hits Back at Karan Patel Over His Reels Comment";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://buzzog.com/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
    ],
    datePublished: "2026-10-28T11:15:00+05:30",
    dateModified: "2026-10-28T16:45:00+05:30",
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
      "Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya has replied. Read what happened on Rise and Fall 2.",
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
        name: "Reality TV Updates",
        item: "https://buzzog.com/#reality-shows",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Shreya Kalra vs Karan Patel",
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
      <Header activeNav="Reality Shows" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/#reality-shows">REALITY SHOWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>RISE AND FALL 2</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Reality TV Updates</span>
            <span className="badge">Rise and Fall 2</span>
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
              <span>REALITY TV BUREAU</span>
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
            src="/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
            alt="Shreya Kalra hits back at Karan Patel over reels comment on Rise and Fall 2"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Rise and Fall 2: Shreya Kalra issues strong statement addressing Karan Patel&apos;s &ldquo;Kab tak reels mein rahoge&rdquo; remark.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            One small comment on <strong>Rise and Fall 2</strong> has started a big online talk. Actor Karan Patel remarked on reels. Influencer Shreya Kalra did not stay quiet. Here is the full story in simple words.
          </p>

          <h2>What Happened on Rise and Fall 2?</h2>
          <p>
            In the latest episode, Karan Patel spoke about the social media habits of Rishabh Jaiswal. Rishabh is a contestant on the show. Shreya Kalra is his girlfriend.
          </p>
          <p>
            Shreya told Rishabh that his comments were going viral online. Karan then said: <em>&ldquo;Kab tak reels mein rahoge? Kabhi real life mein bhi aao.&rdquo;</em>
          </p>
          <p>
            His words seemed to point at the couple’s love for social media content.
          </p>

          <h2>How Did Shreya Kalra Reply?</h2>
          <p>
            Shreya shared her reply in a written note on an Instagram story. She said Karan had put down reality show contestants by suggesting they join such shows only for footage.
          </p>
          <p>
            Her message was clear: <strong>&ldquo;stop demeaning people just because they come from reality TV.&rdquo;</strong>
          </p>
          <p>She also made these points:</p>
          <ul>
            <li>Reality show contestants have careers, projects and businesses outside the show.</li>
            <li>People should respect every profession if they want respect for their own.</li>
            <li>Karan Patel is also part of a reality show, so putting down the platform makes little sense.</li>
            <li>It is not wrong to be a reality TV contestant. The problem is looking down on someone else’s work.</li>
          </ul>

          <div
            style={{
              margin: "32px 0",
              padding: "20px 24px",
              background: "rgba(255, 45, 120, 0.08)",
              borderLeft: "4px solid var(--magenta)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <div style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--magenta)", fontWeight: 700, textTransform: "uppercase", marginBottom: "6px" }}>
              Also Read on Buzz Originals
            </div>
            <Link
              href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
              style={{ color: "#fff", textDecoration: "none", fontSize: "16px", fontWeight: 700 }}
              className="hover:text-[var(--lime)] transition-colors"
            >
              Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi Steal the Red Carpet →
            </Link>
          </div>

          <h2>The &ldquo;Trending&rdquo; Twist</h2>
          <p>
            Shreya also pointed out an irony. According to her, the show Karan is part of is now trending at number one. That is the same type of platform he was speaking about.
          </p>

          <h2>Why Is This Story Getting Attention?</h2>
          <ul>
            <li><strong>Reels vs. TV:</strong> The talk of who counts as a &ldquo;real&rdquo; star never gets old.</li>
            <li><strong>A famous face:</strong> Karan Patel is a well-known TV name, so his words travel fast.</li>
            <li><strong>A trending show:</strong> Rise and Fall 2 is already getting a lot of buzz, and this clash adds more.</li>
          </ul>

          <h2>What Next?</h2>
          <p>
            Karan Patel has not replied to Shreya’s note yet, as per the latest reports. He may speak about it in a coming episode. We will update this story if anything new comes up.
          </p>

          <h2>Final Words</h2>
          <p>
            Reality shows are full of drama, and this clash proves it. One line about reels has started a bigger talk about respect for creators and reality TV stars. Stay tuned to Buzz Originals for more updates on Rise and Fall 2 and other reality shows.
          </p>
        </article>

        {/* Social Share Component */}
        <SocialShare url={pageUrl} title={pageTitle} />

        {/* Author Bio Card */}
        <div className="author-card">
          <div className="author-avatar" aria-hidden="true">
            BO
          </div>
          <div>
            <div className="author-name">Buzz Originals Desk</div>
            <div className="author-role">Reality TV & Pop Culture Desk</div>
            <p className="author-desc">
              Delivering verified scoops, inside house reports, and unfiltered breakdowns from India&apos;s biggest reality franchises and social media creator clashes.
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div style={{ marginTop: "32px", textAlign: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-space-mono)",
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--lime)",
              textDecoration: "none",
              padding: "10px 20px",
              border: "1px solid rgba(200, 255, 0, 0.3)",
              borderRadius: "999px",
              background: "rgba(200, 255, 0, 0.05)",
            }}
            className="hover:bg-[rgba(200,255,0,0.15)] transition-colors"
          >
            ← Back to All Buzz Originals News
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
