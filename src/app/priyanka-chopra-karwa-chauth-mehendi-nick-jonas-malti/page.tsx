import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Priyanka Chopra’s DIY Karwa Chauth Mehendi | Buzz Originals",
  description:
    "Priyanka Chopra made her own Karwa Chauth mehendi for Nick Jonas and added a sweet touch for daughter Malti Marie. See what she wrote.",
  keywords: [
    "Priyanka Chopra Karwa Chauth mehendi",
    "Priyanka Chopra mehendi",
    "Karwa Chauth 2026",
    "Priyanka Chopra DIY mehendi",
    "Nick Jonas Karwa Chauth",
    "Piya ke naam ki",
    "Karwa Chauth mehendi design",
    "Malti Marie",
    "Nick Jonas",
    "Priyanka Chopra",
    "Bollywood news",
  ],
  openGraph: {
    title: "Priyanka Chopra’s DIY Karwa Chauth Mehendi",
    description:
      "Priyanka Chopra made her own Karwa Chauth mehendi for Nick Jonas and added a sweet touch for daughter Malti Marie. See what she wrote.",
    url: "https://www.buzzoriginals.com/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg",
        width: 1024,
        height: 682,
        alt: "Priyanka Chopra DIY Karwa Chauth Mehendi for Nick Jonas and Malti Marie",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T11:00:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Chopra’s DIY Karwa Chauth Mehendi",
    description:
      "Priyanka Chopra made her own Karwa Chauth mehendi for Nick Jonas and added a sweet touch for daughter Malti Marie. See what she wrote.",
    images: ["/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"],
  },
  alternates: {
    canonical: "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
  },
};

export default function PriyankaMehendiArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti";
  const pageTitle =
    "Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg",
    ],
    datePublished: "2026-10-29T11:00:00+05:30",
    dateModified: "2026-10-29T11:00:00+05:30",
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
      "Priyanka Chopra made her own Karwa Chauth mehendi for Nick Jonas and added a sweet touch for daughter Malti Marie. See what she wrote.",
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
        name: "Priyanka Chopra Karwa Chauth Mehendi",
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
          <span style={{ color: "var(--lavender)" }}>KARWA CHAUTH 2026</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Trending Scoop</span>
            <span className="badge">Karwa Chauth 2026</span>
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
              <span>BOLLYWOOD BUREAU</span>
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
            src="/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
            alt="Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Priyanka Chopra shares glimpses of her personal DIY Karwa Chauth mehendi dedicated to husband Nick Jonas and daughter Malti Marie.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Priyanka Chopra Jonas is keeping her <strong>Karwa Chauth</strong> tradition alive again this year. This time, she did something very personal. She made her own mehendi.
          </p>

          <h2>What Priyanka Shared</h2>
          <p>
            On Thursday, 29 October 2026, Priyanka posted photos of her hands on Instagram. The mehendi design was made for her husband, <strong>Nick Jonas</strong>. It also had a special touch for their daughter, <strong>Malti Marie</strong>.
          </p>
          <p>
            Her caption was short and sweet: <em>&ldquo;DIY..Piya ke naam ki.. happy karwachauth to all those celebrating.&rdquo;</em>
          </p>
          <p>
            &ldquo;Piya ke naam ki&rdquo; means &ldquo;in the name of my husband.&rdquo; Fans loved the desi touch in the post.
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

          <h2>Priyanka Keeps Indian Traditions Alive for Malti</h2>
          <p>
            Priyanka lives abroad, but she often shows how she keeps Indian festivals close to her family. Just a few weeks ago, she shared Navratri moments from home. Her posts showed pooja, havan and Kanya Pujan. In one moment, Nick washed Malti’s feet during the ritual.
          </p>
          <p>
            She was also seen teaching little Malti a verse from the Durga Saptashati in an earlier video.
          </p>

          <h2>Quick Look at Priyanka and Nick</h2>
          <ul>
            <li>
              <strong>Priyanka and Nick got married</strong> on 1 and 2 December 2018 at Umaid Bhawan Palace, Jodhpur.
            </li>
            <li>
              <strong>They had both Hindu and Christian ceremonies</strong> celebrating both cultures.
            </li>
            <li>
              <strong>They welcomed their daughter</strong>, Malti Marie, in January 2022 through surrogacy.
            </li>
          </ul>

          <h2>What Is Karwa Chauth?</h2>
          <p>
            Karwa Chauth is a festival mainly celebrated by married Hindu women. They fast from sunrise to moonrise for their husband’s long life and health. Mehendi is a big part of the day. Many women apply it a day before or on the morning of the festival.
          </p>

          <h2>Final Take</h2>
          <p>
            Priyanka’s DIY mehendi shows that small, personal gestures often win the most hearts. Fans are already calling it a sweet family moment.
          </p>
          <p>
            Stay tuned to Buzz Originals for more Bollywood and celebrity updates.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#PriyankaChopra</span>
            <span className="tag-badge">#NickJonas</span>
            <span className="tag-badge">#KarwaChauth2026</span>
            <span className="tag-badge">#KarwaChauthMehendi</span>
            <span className="tag-badge">#MaltiMarie</span>
            <span className="tag-badge">#BollywoodNews</span>
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
