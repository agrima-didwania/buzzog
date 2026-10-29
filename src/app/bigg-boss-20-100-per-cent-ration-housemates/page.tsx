import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Bigg Boss 20: Housemates Get 100% Ration for the First Time | Buzz Originals",
  description:
    "Bigg Boss 20 housemates have got the full 100% ration this week. Here is what happened, why ration is such a big issue, and what comes next.",
  keywords: [
    "Bigg Boss 20",
    "Bigg Boss 20 ration",
    "Bigg Boss 20 100% ration",
    "Bigg Boss 20 latest news",
    "Bigg Boss 20 housemates",
    "Bigg Boss 20 ration task",
    "Bigg Boss 20 today update",
    "Bigg Boss 20 news today",
    "Bigg Boss 20 housemates get full ration",
    "Why is ration important in Bigg Boss",
    "Bigg Boss 20 ration task kya hai",
    "Bigg Boss 20 weekly ration news",
    "Bigg Boss 20 ration drama",
    "Bigg Boss 20 episode 54",
    "Reality TV News",
    "Salman Khan",
  ],
  openGraph: {
    title: "Bigg Boss 20: Housemates Get 100% Ration for the First Time",
    description:
      "Bigg Boss 20 housemates have got the full 100% ration this week. Here is what happened, why ration is such a big issue, and what comes next.",
    url: "https://www.buzzoriginals.com/bigg-boss-20-100-per-cent-ration-housemates",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg",
        width: 1024,
        height: 576,
        alt: "Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T20:00:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bigg Boss 20: Housemates Get 100% Ration for the First Time",
    description:
      "Bigg Boss 20 housemates have got the full 100% ration this week. Here is what happened, why ration is such a big issue, and what comes next.",
    images: [
      "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg",
    ],
  },
  alternates: {
    canonical: "/bigg-boss-20-100-per-cent-ration-housemates",
  },
};

export default function BiggBoss100PercentRationPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/bigg-boss-20-100-per-cent-ration-housemates";
  const pageTitle =
    "Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/bigg-boss-20-100-per-cent-ration-housemates.jpg",
    ],
    datePublished: "2026-10-29T20:00:00+05:30",
    dateModified: "2026-10-29T20:00:00+05:30",
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
      "Bigg Boss 20 housemates have got the full 100% ration this week. Here is what happened, why ration is such a big issue, and what comes next.",
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
        name: "Reality Shows",
        item: "https://www.buzzoriginals.com/reality-shows",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Bigg Boss 20: 100% Ration",
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
          <Link href="/reality-shows">REALITY SHOWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>BIGG BOSS 20</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Milestone Task</span>
            <span className="badge">Bigg Boss 20</span>
            <span className="badge lime">100% Ration</span>
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
              <span>OCT 29, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
            alt="Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Bigg Boss 20: Housemates achieve 100% full weekly ration for the first time this season, triggering celebrations across the house.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Good news has finally come to the <strong>Bigg Boss 20</strong> house. The housemates have got <strong>100% ration</strong> this week, and everyone inside is happy about it.
          </p>

          <h2>What Happened in Bigg Boss 20?</h2>
          <p>
            Food has been one of the biggest worries for the contestants this season. Every week, they have to win tasks to earn their ration. This week, the house has got the full amount, which is rare. The news comes around the halfway point of the show.
          </p>

          <h2>Why Does Ration Matter So Much in Bigg Boss?</h2>
          <p>
            In Bigg Boss, ration is not just food. It is a game tool. The housemates have to work as a team in these tasks. They also have to make smart choices and think about the group, not only themselves. This is why ration tasks often lead to fights.
          </p>

          <h2>How Were the Earlier Weeks?</h2>
          <p>
            This season, the ration story has been full of ups and downs:
          </p>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px", margin: "16px 0", lineHeight: "1.8" }}>
            <li>
              In an earlier week, captain <strong>Gullu</strong> chose 80% ration for the house and got back the lifelines of <strong>Uditi Singh</strong> and <strong>Kanika Mann</strong>.
            </li>
            <li>
              During a captaincy task on Day 32, <strong>Love Gill</strong> took away 33 items, almost all of the ration, and the housemates were left with zero weekly ration.
            </li>
          </ul>
          <p>
            So after weeks of low ration and angry arguments, getting 100% is a big relief for everyone.
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

          <h2>What Is Next for the Housemates?</h2>
          <p>
            The happy mood may not last long. New tasks, changing friendships and tough competition are expected as the housemates fight to reach the finale. Bigg Boss 20 streams on <strong>JioHotstar</strong> at 9 PM every day.
          </p>

          <h2>About Bigg Boss 20</h2>
          <p>
            Bigg Boss 20 began on September 6, 2026, with <strong>Salman Khan</strong> hosting for the seventeenth season in a row. The show airs on <strong>Colors TV</strong> and <strong>JioHotstar</strong>.
          </p>
          <p>
            Stay with <strong>Buzz OG</strong> for more Bigg Boss 20 updates, news and gossip.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#BiggBoss20</span>
            <span className="tag-badge">#BB20</span>
            <span className="tag-badge">#BiggBoss20Ration</span>
            <span className="tag-badge">#SalmanKhan</span>
            <span className="tag-badge">#JioHotstar</span>
            <span className="tag-badge">#ColorsTV</span>
            <span className="tag-badge">#Gullu</span>
            <span className="tag-badge">#UditiSingh</span>
            <span className="tag-badge">#KanikaMann</span>
            <span className="tag-badge">#LoveGill</span>
            <span className="tag-badge">#BiggBossUpdates</span>
            <span className="tag-badge">#RealityTV</span>
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
