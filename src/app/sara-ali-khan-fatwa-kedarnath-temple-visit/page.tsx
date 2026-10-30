import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Sara Ali Khan Fatwa: Cleric Reacts to Her Kedarnath Visit",
  description:
    "A UP cleric has issued a fatwa against Sara Ali Khan after her Kedarnath visit. Here is what he said, what happened at the temple, and the affidavit rule.",
  keywords: [
    "Sara Ali Khan fatwa",
    "Sara Ali Khan Kedarnath",
    "Sara Ali Khan Kedarnath temple visit",
    "Sara Ali Khan controversy",
    "Sara Ali Khan news today",
    "Maulana Shahabuddin Razvi Barelvi",
    "Sara Ali Khan Kedarnath fatwa",
    "fatwa against Sara Ali Khan",
    "Sara Ali Khan temple visit controversy",
    "Bollywood news today",
    "Bollywood controversy",
    "Sara Ali Khan latest news",
    "Udta Teer Sara Ali Khan",
    "All India Muslim Jamaat",
    "Kedarnath Temple",
    "BKTC affidavit rule",
  ],
  openGraph: {
    title: "Sara Ali Khan Fatwa: Cleric Reacts to Her Kedarnath Visit",
    description:
      "A UP cleric has issued a fatwa against Sara Ali Khan after her Kedarnath visit. Here is what he said, what happened at the temple, and the affidavit rule.",
    url: "https://www.buzzoriginals.com/sara-ali-khan-fatwa-kedarnath-temple-visit",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg",
        width: 1024,
        height: 682,
        alt: "Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T16:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sara Ali Khan Fatwa: Cleric Reacts to Her Kedarnath Visit",
    description:
      "A UP cleric has issued a fatwa against Sara Ali Khan after her Kedarnath visit. Here is what he said, what happened at the temple, and the affidavit rule.",
    images: ["/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg"],
  },
  alternates: {
    canonical: "/sara-ali-khan-fatwa-kedarnath-temple-visit",
  },
};

export default function SaraAliKhanFatwaPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/sara-ali-khan-fatwa-kedarnath-temple-visit";
  const pageTitle =
    "Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg",
    ],
    datePublished: "2026-10-30T16:30:00+05:30",
    dateModified: "2026-10-30T16:30:00+05:30",
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
      "A UP cleric has issued a fatwa against Sara Ali Khan after her Kedarnath visit. Here is what he said, what happened at the temple, and the affidavit rule.",
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
        name: "Sara Ali Khan Fatwa",
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
          <span style={{ color: "var(--lavender)" }}>SARA ALI KHAN FATWA</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Controversy</span>
            <span className="badge">Bollywood News</span>
            <span className="badge lime">Kedarnath Visit</span>
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
              <span>BOLLYWOOD BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 30, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg"
            alt="Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Actor Sara Ali Khan faces a fatwa issued by Bareilly cleric Maulana Mufti Shahabuddin Razvi Barelvi after offering prayers at Kedarnath Temple. (Photo: Social Media / Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Sara Ali Khan</strong> is in the news again, and this time it is not about a film. A <strong>fatwa</strong> has been issued against her after her recent trip to <strong>Kedarnath Temple</strong>.
          </p>

          <h2>Who Issued the Fatwa?</h2>
          <p>
            The fatwa came from <strong>Maulana Mufti Shahabuddin Razvi Barelvi</strong>. He is a Bareilly-based cleric and the National President of the <strong>All India Muslim Jamaat</strong>. He spoke to ANI and also shared a video statement.
          </p>
          <p>
            He said many young Muslims had asked him if it is right for a Muslim to pray at a temple, so he gave his answer.
          </p>

          <div className="article-quote-box">
            <p>
              &ldquo;Islamic Sharia does not permit its followers to engage in shirk.&rdquo;
            </p>
            <span style={{ fontSize: "12px", color: "var(--lavender)", marginTop: "8px", display: "block" }}>
              — Maulana Mufti Shahabuddin Razvi Barelvi, National President, All India Muslim Jamaat
            </span>
          </div>

          <p>
            He called Sara’s visit <em>&ldquo;impermissible&rdquo;</em> (najayaz) and <em>&ldquo;haram&rdquo;</em> under Sharia. He asked her to seek forgiveness from Allah.
          </p>
          <p>
            He also added a condition. He said that if Sara did all this <em>&ldquo;of her own free will and volition,&rdquo;</em> then she has sinned.
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

          <h2>What Happened at Kedarnath?</h2>
          <p>
            Sara visited Kedarnath on <strong>October 25</strong>. She reportedly went by helicopter and then stood in the queue with other devotees for darshan.
          </p>
          <p>
            According to reports, she took part in the puja and aarti. She also visited the <strong>Bhukunt Bhairav Temple</strong> nearby. Some reports say the weather was very cold and women devotees offered her a shawl.
          </p>

          <h2>Sara’s Connection With Kedarnath</h2>
          <p>
            This is not her first visit. Sara made her Bollywood debut with the 2018 film <em>Kedarnath</em>, opposite the late Sushant Singh Rajput. She has gone back to the temple several times since then and often shares photos from her trips.
          </p>
          <p>
            Her visits have drawn debate before. When <em>Kedarnath</em> released in 2018, some right-wing groups protested against the film.
          </p>

          <h2>The Temple Committee’s Affidavit Rule</h2>
          <p>
            The controversy has also brought back attention to a rule from the <strong>Badrinath-Kedarnath Temple Committee (BKTC)</strong>. In March 2026, the committee said non-Hindu devotees must submit an affidavit before entering the shrines.
          </p>
          <p>
            BKTC CEO Sohan Singh Rangar reportedly told News18 that Sara’s team had already submitted this affidavit before her visit.
          </p>

          <h2>An Old Statement Is Going Viral</h2>
          <p>
            An older statement by Sara is also doing the rounds online. In it, she says she visits places like Ajmer Sharif, Bangla Sahib and Mahakal with the same faith, and that she believes in the energy of a place.
          </p>
          <p>
            Please note this is an old clip. It is not a reply to this fatwa. Sara has not publicly responded to the fatwa so far.
          </p>

          <h2>What Does a Fatwa Mean?</h2>
          <p>
            A fatwa is a religious opinion given by an Islamic scholar on a question of Islamic law. It is not a court order. This fatwa reflects the view of one cleric and not the opinion of all Muslims or all Islamic scholars.
          </p>

          <h2>Sara’s Latest Work</h2>
          <p>
            Sara was recently seen in <em>Udta Teer</em> alongside Ayushmann Khurrana.
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood updates.
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
              "Sara Ali Khan",
              "Kedarnath Temple",
              "Fatwa",
              "Bollywood News",
              "Maulana Shahabuddin Razvi Barelvi",
              "Sara Ali Khan Controversy",
              "Kedarnath Darshan",
              "BKTC Affidavit",
              "Bollywood",
              "News",
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
              href="/"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Browse Home News →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
