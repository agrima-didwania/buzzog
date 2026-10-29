import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Bigg Boss 20: Uditi Singh Opens Up About Painful Breakup | Buzz Originals",
  description:
    "Scout OP spoke to Love Gill in Bigg Boss 20, and Uditi Singh shared her own heartbreak story with Arishfa Khan. Here’s what happened.",
  keywords: [
    "Bigg Boss 20 Uditi Singh",
    "Uditi Singh Karan Wahi",
    "Uditi Singh breakup",
    "Scout OP Love Gill",
    "Scout OP Kashvi Hiranandani",
    "Bigg Boss 20 latest episode",
    "Bigg Boss 20 news",
    "Bigg Boss 20 Uditi Singh ex boyfriend",
    "Uditi Singh Arishfa Khan",
    "Uditi Singh painful breakup Bigg Boss 20",
    "Did Uditi Singh talk about Karan Wahi in Bigg Boss 20",
    "Uditi Singh and Karan Wahi relationship timeline",
    "Scout OP Love Gill controversy Bigg Boss 20",
    "Why Kashvi is upset with Scout OP",
    "Uditi Singh reaction on Scout Love Kashvi",
    "Bigg Boss 20 Scout Love Kashvi drama explained",
    "Uditi Singh ex boyfriend started dating someone else",
    "Bigg Boss 20",
    "Reality TV News",
  ],
  openGraph: {
    title: "Bigg Boss 20: Uditi Singh Opens Up About Painful Breakup",
    description:
      "Scout OP spoke to Love Gill in Bigg Boss 20, and Uditi Singh shared her own heartbreak story with Arishfa Khan. Here’s what happened.",
    url: "https://www.buzzoriginals.com/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg",
        width: 1024,
        height: 576,
        alt: "Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T15:25:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bigg Boss 20: Uditi Singh Opens Up About Painful Breakup",
    description:
      "Scout OP spoke to Love Gill in Bigg Boss 20, and Uditi Singh shared her own heartbreak story with Arishfa Khan. Here’s what happened.",
    images: [
      "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg",
    ],
  },
  alternates: {
    canonical: "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
  },
};

export default function BiggBossUditiBreakupArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/bigg-boss-20-uditi-singh-painful-breakup-scout-love";
  const pageTitle =
    "Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg",
    ],
    datePublished: "2026-10-29T15:25:00+05:30",
    dateModified: "2026-10-29T15:25:00+05:30",
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
      "Scout OP spoke to Love Gill in Bigg Boss 20, and Uditi Singh shared her own heartbreak story with Arishfa Khan. Here’s what happened.",
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
        name: "Bigg Boss 20: Uditi Singh Breakup",
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
            <span className="badge pink">🔥 Hot Drama</span>
            <span className="badge">Bigg Boss 20</span>
            <span className="badge lime">Heartbreak Confession</span>
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
            src="/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
            alt="Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Bigg Boss 20: Scout OP’s conversation with Love Gill sparks Kashvi drama as Uditi Singh opens up to Arishfa Khan about her own painful past breakup.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The <strong>Scout OP</strong>, <strong>Love Gill</strong> and <strong>Kashvi Hiranandani</strong> drama is still the hottest topic in the <strong>Bigg Boss 20</strong> house. This time, one conversation took a very emotional turn. <strong>Uditi Singh</strong> opened up about a heartbreak from her own life.
          </p>

          <h2>What Happened in the Latest Episode?</h2>
          <p>
            Scout OP was seen going up to Love Gill and talking to her. This was big news inside the house. Kashvi had earlier shared her unhappiness about Scout’s bond with Love and had warned him about it. So when Scout spoke to Love anyway, people started asking questions.
          </p>
          <p>
            Uditi Singh and Arishfa Khan noticed it too. They sat together and talked about whether Scout was really listening to Kashvi’s concerns.
          </p>

          <h2>Uditi Singh Gets Personal</h2>
          <p>
            Then the talk became personal. Uditi said that if she saw her own partner talking to someone in a similar situation, she would feel heartbroken.
          </p>
          <p>
            She explained why. In the past, her ex-boyfriend broke up with her and then started dating someone else. Uditi said it was very painful to watch, and it took her a long time to deal with those feelings.
          </p>
          <p>
            <strong>Check Out:</strong>{" "}
            <a
              href="https://www.instagram.com/reel/Dd1w9sDT_JO/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Uditi reveals the reason behind breakup with Karan Wahi
            </a>
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

          <h2>Did Uditi Name Karan Wahi?</h2>
          <p>
            This is the question everyone is asking. As per the episode reports, Uditi did not clearly take Karan Wahi’s name in this talk. Fans are connecting the dots because of her known past with him.
          </p>
          <p>Here is what is already public:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px", margin: "16px 0", lineHeight: "1.8" }}>
            <li>Uditi and Karan reportedly started dating in 2019.</li>
            <li>Their relationship became public in January 2020.</li>
            <li>They reportedly broke up in 2022.</li>
          </ul>
          <p>
            Uditi has spoken about this relationship inside the house before. She once called the breakup a &ldquo;blessing in disguise.&rdquo;
          </p>
          <p>
            Uditi’s story has also put the spotlight back on her past with actor Karan Wahi. The two were reportedly in a relationship before they went their separate ways. Many viewers feel her own heartbreak is the reason she understands what Kashvi may be going through right now.
          </p>

          <h2>Why This Moment Matters</h2>
          <p>
            Uditi used her own life to explain how she sees the situation. Her talk with Arishfa showed how confusing and uneasy things can feel when your partner’s actions make you uncomfortable.
          </p>
          <p>
            Her words also changed the mood of the discussion. Until then, everyone was focused on Scout and Love talking. After Uditi spoke, the question became how Kashvi might be feeling in all this.
          </p>

          <h2>What’s Next?</h2>
          <p>
            Scout and Love are speaking to each other again, and the housemates are still talking about it. Kashvi’s earlier warning and Scout’s decision to go and talk to Love have kept their equation under a lot of attention. On top of that, Uditi’s honest story about her past heartbreak has added a very personal angle to the whole drama.
          </p>
          <p>
            Stay with <strong>Buzz OG</strong> for more Bigg Boss 20 updates, gossip and episode breakdowns.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#BiggBoss20</span>
            <span className="tag-badge">#UditiSingh</span>
            <span className="tag-badge">#ScoutOP</span>
            <span className="tag-badge">#LoveGill</span>
            <span className="tag-badge">#KashviHiranandani</span>
            <span className="tag-badge">#KaranWahi</span>
            <span className="tag-badge">#ArishfaKhan</span>
            <span className="tag-badge">#BiggBossUpdates</span>
            <span className="tag-badge">#RealityTV</span>
            <span className="tag-badge">#BB20</span>
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
