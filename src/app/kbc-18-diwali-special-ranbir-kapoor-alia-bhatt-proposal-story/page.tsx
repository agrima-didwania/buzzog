import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "KBC 18 Diwali Special: Ranbir Kapoor’s Proposal Story | Buzz Originals",
  description:
    "The KBC 18 Diwali special has the Ramayana cast on the hot seat. Ranbir Kapoor shared how he proposed to Alia Bhatt with lions 100 meters away.",
  keywords: [
    "KBC 18 Diwali special",
    "Ramayana cast KBC",
    "Ranbir Kapoor Alia Bhatt proposal",
    "Ranbir Kapoor",
    "Alia Bhatt",
    "Sai Pallavi",
    "Ranbir Kapoor KBC 18",
    "Ramayana cast on KBC",
    "Amitabh Bachchan Ranbir Kapoor",
    "Ranbir Kapoor proposal story",
    "Alia Bhatt proposal Masai Mara",
    "Masai Mara proposal lions",
    "Sai Pallavi KBC 18",
    "Ravie Dubey KBC 18",
    "Kaun Banega Crorepati 18 Diwali episode",
    "Ranbir Kapoor Alia Bhatt engagement Kenya",
    "Meri sherni mere aage khadi thi",
    "Bollywood News",
    "TV News",
  ],
  openGraph: {
    title: "KBC 18 Diwali Special: Ranbir Kapoor’s Proposal Story",
    description:
      "The KBC 18 Diwali special has the Ramayana cast on the hot seat. Ranbir Kapoor shared how he proposed to Alia Bhatt with lions 100 meters away.",
    url: "https://www.buzzoriginals.com/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg",
        width: 1024,
        height: 576,
        alt: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T12:30:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KBC 18 Diwali Special: Ranbir Kapoor’s Proposal Story",
    description:
      "The KBC 18 Diwali special has the Ramayana cast on the hot seat. Ranbir Kapoor shared how he proposed to Alia Bhatt with lions 100 meters away.",
    images: [
      "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg",
    ],
  },
  alternates: {
    canonical: "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
  },
};

export default function KbcRanbirAliaProposalArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story";
  const pageTitle =
    "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg",
    ],
    datePublished: "2026-10-29T12:30:00+05:30",
    dateModified: "2026-10-29T12:30:00+05:30",
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
      "The KBC 18 Diwali special has the Ramayana cast on the hot seat. Ranbir Kapoor shared how he proposed to Alia Bhatt with lions 100 meters away.",
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
        name: "KBC 18 Diwali Special",
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
          <span style={{ color: "var(--lavender)" }}>KBC 18 DIWALI SPECIAL</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Trending Scoop</span>
            <span className="badge">KBC 18 Diwali Special</span>
            <span className="badge lime">Ramayana Cast</span>
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
              <span>OCT 29, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
            alt="KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 KBC 18 Diwali Special: Ranbir Kapoor reveals the wild story behind proposing to Alia Bhatt in Masai Mara with lions barely 100 meters away.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The Diwali special episode of <strong>Kaun Banega Crorepati 18</strong> is going to be a treat for fans. The cast of <em>Ramayana</em> is coming to the show. <strong>Ranbir Kapoor</strong>, <strong>Sai Pallavi</strong> and <strong>Ravie Dubey</strong> will sit on the hot seat with host <strong>Amitabh Bachchan</strong>.
          </p>
          <p>
            During the episode, Ranbir shared a very filmy story from his personal life: the day he proposed to <strong>Alia Bhatt</strong> in the wild, with real lions close by.
          </p>

          <h2>What Happened on KBC 18?</h2>
          <p>
            Ranbir told Big B how he planned his proposal in Masai Mara, Kenya. The couple was on a holiday there, and he wanted the moment to be special.
          </p>

          <h2>The Secret Plan Behind the Proposal</h2>
          <p>
            Ranbir did not leave anything to chance. He took the ring with him and made a plan with the people helping on the trip. He gave a tip to his guide and driver so they would stop the vehicle in the middle of the jungle.
          </p>
          <p>
            He also wanted the moment captured. Here is how he explained it:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--lime)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;Maine pehle se hi apna jo guide hai, jo driver hai, unko ek tip de di thi ki aap kahin rok dena jaake beech jungle mein. Main anguthi laya tha ki main ghutnon pe jaunga aur aap door se photographs khichna.&rdquo;
          </blockquote>
          <p>
            He also said why he wanted photos: <em>&ldquo;Kyunki ladkiyon ko photographs ka bahut shaukh hai, Instagram pe daalne ka.&rdquo;</em>
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

          <h2>Amitabh Bachchan’s Funny Reaction</h2>
          <p>
            When Ranbir spoke about the lions, Big B had a quick reply for him: <strong>&ldquo;Proof to hona chahiye.&rdquo;</strong>
          </p>

          <h2>“Meri Sherni Mere Aage Khadi Thi”</h2>
          <p>
            This was the best part of the story. Ranbir said that while he was down on one knee, three lions were sitting not far away. He said:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--magenta)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;Teen babbar sher is taraf the, kuch 100 meter par, aur meri sherni mere aage khadi thi aur main chuha ban kar apne ghutnon par khada tha ki baby, &lsquo;Will you marry me?&rsquo;&rdquo;
          </blockquote>
          <p>
            He also called it an <em>&ldquo;adbhut moment&rdquo;</em> of his life, one he will remember forever.
          </p>

          <h2>A Quick Look Back at Ranbir and Alia’s Engagement</h2>
          <p>
            The couple got engaged in the Masai Mara reserve in Kenya. Alia has spoken about the proposal before, including on <em>Koffee With Karan</em>, where she said she was surprised by how well Ranbir had planned it. Lions have also been a big part of the couple’s social media story, as fans noticed a lion family picture in Alia’s pregnancy announcement post.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#KBC18</span>
            <span className="tag-badge">#KaunBanegaCrorepati</span>
            <span className="tag-badge">#KBCDiwaliSpecial</span>
            <span className="tag-badge">#RanbirKapoor</span>
            <span className="tag-badge">#AliaBhatt</span>
            <span className="tag-badge">#SaiPallavi</span>
            <span className="tag-badge">#RavieDubey</span>
            <span className="tag-badge">#AmitabhBachchan</span>
            <span className="tag-badge">#Ramayana</span>
            <span className="tag-badge">#BollywoodNews</span>
            <span className="tag-badge">#TVNews</span>
            <span className="tag-badge">#MasaiMara</span>
            <span className="tag-badge">#RanbirAlia</span>
            <span className="tag-badge">#CelebrityProposal</span>
            <span className="tag-badge">#SonyTV</span>
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
