import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Prakash Raj’s Wife Reveals He Lost Films and Ads",
  description:
    "Pony Varma says Prakash Raj lost films and ad deals over his political views. She also explains how Gauri Lankesh’s murder changed him forever.",
  keywords: [
    "Prakash Raj",
    "Pony Varma",
    "Prakash Raj wife",
    "Gauri Lankesh",
    "Prakash Raj lost films",
    "Prakash Raj political views",
    "Pony Varma interview",
    "Gauri Lankesh murder",
    "JustAsking",
    "NaanuGauri",
    "Prakash Raj news",
    "Bollywood news",
  ],
  openGraph: {
    title: "Prakash Raj’s Wife Reveals He Lost Films and Ads",
    description:
      "Pony Varma says Prakash Raj lost films and ad deals over his political views. She also explains how Gauri Lankesh’s murder changed him forever.",
    url: "https://www.buzzoriginals.com/prakash-raj-wife-pony-varma-lost-films-ads",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/prakash-raj-wife-pony-varma-lost-films-ads.jpg",
        width: 1024,
        height: 576,
        alt: "Prakash Raj Lost Films and Ad Deals for Speaking Out, Says Wife Pony Varma — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-11-01T14:15:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash Raj’s Wife Reveals He Lost Films and Ads",
    description:
      "Pony Varma says Prakash Raj lost films and ad deals over his political views. She also explains how Gauri Lankesh’s murder changed him forever.",
    images: ["/images/prakash-raj-wife-pony-varma-lost-films-ads.jpg"],
  },
  alternates: {
    canonical: "/prakash-raj-wife-pony-varma-lost-films-ads",
  },
};

export default function PrakashRajPonyVarmaPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/prakash-raj-wife-pony-varma-lost-films-ads";
  const pageTitle =
    "Prakash Raj Lost Films and Ad Deals for Speaking Out, Says Wife Pony Varma";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/prakash-raj-wife-pony-varma-lost-films-ads.jpg",
    ],
    datePublished: "2026-11-01T14:15:00+05:30",
    dateModified: "2026-11-01T14:15:00+05:30",
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
      "Pony Varma says Prakash Raj lost films and ad deals over his political views. She also explains how Gauri Lankesh’s murder changed him forever.",
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
        name: "Prakash Raj Pony Varma Interview",
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
          <span style={{ color: "var(--lavender)" }}>PRAKASH RAJ PONY VARMA</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🎙️ Exclusive Interview</span>
            <span className="badge lime">Prakash Raj</span>
            <span className="badge">Bollywood &amp; News</span>
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
              <span>SPECIAL INTERVIEWS DESK</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>NOV 1, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/prakash-raj-wife-pony-varma-lost-films-ads.jpg"
            alt="Prakash Raj Lost Films and Ad Deals for Speaking Out, Says Wife Pony Varma"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎙️ Choreographer Pony Varma opens up about the professional and personal price husband Prakash Raj paid for vocal political stances and how Gauri Lankesh&apos;s assassination transformed him. (Photo: Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Speaking up has a price. <strong>Prakash Raj’s</strong> wife, <strong>Pony Varma</strong>, says he has paid it, in his career. In a new interview, she opened up about what her husband has lost because of his political views and shared the defining moment that changed him forever: the murder of his close friend, <strong>Gauri Lankesh</strong>.
          </p>

          <h2>What Did Pony Varma Say?</h2>
          <p>
            Pony, an accomplished choreographer in the film industry, spoke candidly on Prema’s YouTube channel on <strong>30 October 2026</strong>.
          </p>
          <p>
            During the conversation, she was asked if she ever advised Prakash to tone down his outspoken views or exercise caution with his statements. She admitted that she was terrified during the initial years:
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
            “I was very scared at the start. I worried about our family&apos;s safety.”
          </blockquote>

          <p>
            However, Prakash approached the dilemma from a completely different perspective. He kept reminding her and questioning: <em>how long could they live in perpetual fear of speaking the truth?</em>
          </p>

          <h2>Prakash Raj Reportedly Lost Films and Ads</h2>
          <p>
            Pony revealed that the professional toll on his career has been monumental. Endorsement deals were unilaterally pulled, brand commercial contracts were cancelled, and film offers were rescinded. She also noted that certain peers and co-actors began maintaining distance, feeling visibly uncomfortable around him on sets.
          </p>
          <p>
            She observed that while most industry personalities choose calculated silence to protect their commercial interests, Prakash took the hard road:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              padding: "16px 20px",
              margin: "24px 0",
              background: "rgba(230, 0, 106, 0.05)",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              color: "#fff",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            “He has suffered immensely in his profession. But my conscience says what is happening is wrong, so I should not accept this.”
          </blockquote>

          {/* Also Read Internal Link Box */}
          <div
            style={{
              margin: "24px 0",
              padding: "16px 20px",
              background: "rgba(255, 255, 255, 0.03)",
              borderLeft: "4px solid var(--lime)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              Also Read
            </span>
            <div style={{ marginTop: "4px" }}>
              <Link
                href="/tiger-shroff-first-public-appearance-after-firing-incident"
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "underline",
                }}
              >
                Tiger Shroff to Make First Appearance After Firing Incident at Claudia Ciesla’s Book Launch →
              </Link>
            </div>
          </div>

          <h2>How Gauri Lankesh’s Murder Changed Prakash Raj</h2>
          <p>
            The profound turning point occurred in <strong>2017</strong>. Renowned journalist and outspoken activist <strong>Gauri Lankesh</strong> was assassinated outside her residence in Bengaluru. She and Prakash Raj had shared a deep bond of friendship spanning over 35 years.
          </p>
          <p>
            Pony recounted watching Prakash shatter emotionally when the tragic news broke. He had constantly harboured concerns for Gauri’s safety, just as she had looked out for him. That brutal incident triggered an irrepressible resolve within him. In Pony’s words:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lavender)",
              padding: "16px 20px",
              margin: "24px 0",
              background: "rgba(184, 192, 219, 0.05)",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              color: "#fff",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            “I will talk. As a woman, she stood; she spoke.”
          </blockquote>

          <p>
            Following her tragic demise, Prakash launched the nationwide <strong>#JustAsking</strong> movement across social media platforms, holding those in authority accountable. On every anniversary of her martyrdom, he continues to amplify the <strong>#NaanuGauri</strong> (“I am Gauri”) campaign in her memory.
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
              Follow us on Instagram for unfiltered cinema stories &amp; breaking exclusives:{" "}
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

          <h2>This Is Not the First Time He Has Said It</h2>
          <p>
            Prakash Raj has never shied away from acknowledging the professional repercussions of his outspokenness. In a past interaction, he famously remarked that dissent <em>“comes with a cost, and I can afford it.”</em>
          </p>
          <p>
            As early as 2018, the veteran National Award-winning actor disclosed that mainstream Hindi cinema had noticeably reduced casting offers after he began vocalising political dissent. Yet, his resolve across South Indian and pan-Indian cinema remains undiminished.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for more updates across Bollywood, South cinema, and entertainment exclusives.
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
              "PrakashRaj",
              "PonyVarma",
              "GauriLankesh",
              "BollywoodNews",
              "SouthCinema",
              "CelebrityNews",
              "JustAsking",
              "NaanuGauri",
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
              href="/web-series"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Web Series Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
