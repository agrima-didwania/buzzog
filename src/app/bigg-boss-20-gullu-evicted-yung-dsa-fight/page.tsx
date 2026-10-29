import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight? | Buzz Originals",
  description:
    "Gullu and Yung DSA’s captaincy task fight has fans demanding eviction, just like Nakul Dhull’s exit. Here’s what we know about Bigg Boss 20 so far.",
  keywords: [
    "Bigg Boss 20 Gullu eviction",
    "Gullu Yung DSA fight",
    "Gullu Kushal Tanwar",
    "Nakul Dhull eviction",
    "Bigg Boss 20 Weekend Ka Vaar",
    "Bigg Boss 20 latest news",
    "Bigg Boss 20 promo",
    "Bigg Boss 20 captaincy task",
    "Salman Khan Weekend Ka Vaar",
    "Bigg Boss 20",
    "Gullu",
    "Yung DSA",
    "Nakul Dhull",
    "Scout OP",
    "Bigg Boss Eviction",
  ],
  openGraph: {
    title: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?",
    description:
      "Gullu and Yung DSA’s captaincy task fight has fans demanding eviction, just like Nakul Dhull’s exit. Here’s what we know about Bigg Boss 20 so far.",
    url: "https://www.buzzoriginals.com/bigg-boss-20-gullu-evicted-yung-dsa-fight",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg",
        width: 1024,
        height: 576,
        alt: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T19:15:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?",
    description:
      "Gullu and Yung DSA’s captaincy task fight has fans demanding eviction, just like Nakul Dhull’s exit. Here’s what we know about Bigg Boss 20 so far.",
    images: ["/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg"],
  },
  alternates: {
    canonical: "/bigg-boss-20-gullu-evicted-yung-dsa-fight",
  },
};

export default function GulluEvictionArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/bigg-boss-20-gullu-evicted-yung-dsa-fight";
  const pageTitle =
    "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg",
    ],
    datePublished: "2026-10-30T00:45:00+05:30",
    dateModified: "2026-10-30T00:45:00+05:30",
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
      "Gullu and Yung DSA’s captaincy task fight has fans demanding eviction, just like Nakul Dhull’s exit. Here’s what we know about Bigg Boss 20 so far.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const breadcrumbJsonLd = {
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
        name: "Bigg Boss 20 Gullu Eviction",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Main Header */}
      <Header activeNav="Reality Shows" />

      {/* Article Content Container */}
      <main className="article-container">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span className="breadcrumb-separator">/</span>
          <Link href="/reality-shows">REALITY SHOWS</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">BIGG BOSS 20 GULLU EVICTION</span>
        </nav>

        <article>
          {/* Article Header */}
          <header className="article-header">
            <div className="flex items-center gap-2 mb-3">
              <span className="badge pink">🔥 Eviction Row</span>
              <span className="badge">Bigg Boss 20</span>
              <span className="badge lime">Captaincy Clash</span>
            </div>

            <h1 className="article-title">
              Bigg Boss 20: Gullu vs Yung DSA Fight Has Fans Asking, &ldquo;Will He Be Evicted Like Nakul Dhull?&rdquo;
            </h1>

            <div className="article-meta">
              <span className="font-bold text-[var(--magenta)]">
                BY BUZZ ORIGINALS DESK
              </span>
              <span className="dot-sep">◆</span>
              <span>REALITY TV BUREAU</span>
              <span className="dot-sep">◆</span>
              <time dateTime="2026-10-30">OCT 30, 2026</time>
              <span className="dot-sep">◆</span>
              <span className="text-[var(--lime)] font-bold">3 MIN READ</span>
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="article-featured-image relative overflow-hidden rounded-2xl border border-[var(--line)]">
            <Image
              src="/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg"
              alt="Bigg Boss 20: Will Gullu Be Evicted After Violent Captaincy Task Fight With Yung DSA?"
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
            />
          </div>
          <p className="image-caption">
            📸 Bigg Boss 20 high drama: Gullu charges towards Yung DSA during captaincy task, sparking fan debates over strict eviction rules.
          </p>

          {/* Article Body */}
          <div className="article-content">
            <p>
              Another day, another fight in the Bigg Boss 20 house. This time, <strong>Gullu</strong> and <strong>Yung DSA</strong> are at the centre of it. Fans are now asking one big thing: if <strong>Nakul Dhull</strong> was sent out for a physical fight, why not Gullu?
            </p>

            <h2>What Happened Between Gullu and Yung DSA?</h2>
            <p>
              The trouble began during a captaincy task. Gullu and Yung DSA got into an argument, and it quickly turned heated. In the promo, Gullu is seen charging towards Yung, and the two end up pushing each other. Other housemates rushed in to separate them. Some reports say the contact may not have been deliberate, so fans are divided on who was at fault.
            </p>

            <h2>Why Is Everyone Talking About Nakul Dhull?</h2>
            <p>
              This is not Gullu’s first fight on the show. Earlier, wildcard contestant <strong>Nakul Dhull</strong> got into a physical fight with him. Bigg Boss called it a serious rule violation and sent Nakul out of the house. Now fans are asking for the same rule for everyone.
            </p>

            <h2>What Are Fans Saying?</h2>
            <p>
              Social media is split. One side wants Gullu evicted, saying physical fights should get the same punishment every time. The other side feels the clash was not as serious and says the full episode should be seen before anyone judges. Some users have also called for action against both contestants.
            </p>

            <h2>Will Salman Khan Talk About It in Weekend Ka Vaar?</h2>
            <p>
              Many fans expect <strong>Salman Khan</strong> to bring up the fight in the upcoming <em>Weekend Ka Vaar</em>. Some spoilers online also hint at action against Gullu. None of this is confirmed, so treat it as speculation for now.
            </p>

            <h2>Is Gullu Being Evicted from the Bigg Boss 20 House? (Quick Answer)</h2>
            <div className="article-quote-box">
              <p>
                <strong>No.</strong> There is currently no official confirmation that Gullu has been evicted or will be. Bigg Boss has not announced any punishment yet.
              </p>
            </div>

            <h2>What Next?</h2>
            <p>
              All eyes are on how the makers handle this, and whether the rule that sent Nakul out will apply here too.
            </p>
            <p>
              Follow <strong>Buzz OG</strong> for Bigg Boss 20 news, eviction updates and Weekend Ka Vaar highlights.
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

            <p style={{ fontSize: "13.5px", color: "var(--muted)", fontStyle: "italic", marginTop: "24px" }}>
              <strong>Disclaimer:</strong> Details about a possible eviction or Weekend Ka Vaar action are based on promos, social media reactions and unconfirmed spoilers. The makers have not officially confirmed any action against Gullu.
            </p>

            {/* Tags & Keywords */}
            <div className="tags-cluster">
              <span className="tag-badge">#BiggBoss20</span>
              <span className="tag-badge">#Gullu</span>
              <span className="tag-badge">#YungDSA</span>
              <span className="tag-badge">#NakulDhull</span>
              <span className="tag-badge">#ScoutOP</span>
              <span className="tag-badge">#WeekendKaVaar</span>
              <span className="tag-badge">#BiggBossEviction</span>
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
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
