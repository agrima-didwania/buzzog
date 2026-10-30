import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years",
  description:
    "Ibrahim Ali Khan and Palak Tiwari have reportedly parted ways after 3 years. Know who ended it, the shoot cancellations, and what we know so far.",
  keywords: [
    "Ibrahim Ali Khan Palak Tiwari breakup",
    "Palak Tiwari Ibrahim Ali Khan",
    "Bollywood breakup news",
    "Palak Tiwari",
    "Ibrahim Ali Khan",
    "Saif Ali Khan son",
    "Shweta Tiwari daughter",
    "Bollywood gossip today",
    "Koffee With Karan Season 9",
    "Bollywood news",
  ],
  openGraph: {
    title: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years",
    description:
      "Ibrahim Ali Khan and Palak Tiwari have reportedly parted ways after 3 years. Know who ended it, the shoot cancellations, and what we know so far.",
    url: "https://www.buzzoriginals.com/ibrahim-ali-khan-palak-tiwari-breakup",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg",
        width: 1024,
        height: 576,
        alt: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T00:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years",
    description:
      "Ibrahim Ali Khan and Palak Tiwari have reportedly parted ways after 3 years. Know who ended it, the shoot cancellations, and what we know so far.",
    images: ["/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg"],
  },
  alternates: {
    canonical: "/ibrahim-ali-khan-palak-tiwari-breakup",
  },
};

export default function IbrahimPalakBreakupPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/ibrahim-ali-khan-palak-tiwari-breakup";
  const pageTitle =
    "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg",
    ],
    datePublished: "2026-10-31T00:45:00+05:30",
    dateModified: "2026-10-31T00:45:00+05:30",
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
      "Ibrahim Ali Khan and Palak Tiwari have reportedly parted ways after 3 years. Know who ended it, the shoot cancellations, and what we know so far.",
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
        name: "Ibrahim & Palak Breakup",
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
          <span style={{ color: "var(--lavender)" }}>IBRAHIM &amp; PALAK BREAKUP</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">💔 Breakup Scoop</span>
            <span className="badge">Bollywood &amp; News</span>
            <span className="badge lime">Exclusive Report</span>
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
              <span>BOLLYWOOD &amp; NEWS BUREAU</span>
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
            src="/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg"
            alt="Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Ibrahim Ali Khan and Palak Tiwari have reportedly decided to part ways after dating for over three years. (Photo: Instagram / Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Bollywood’s much-talked-about young pair may have called it quits. A new report says <strong>Ibrahim Ali Khan</strong> and <strong>Palak Tiwari</strong> have ended their relationship after more than three years together.
          </p>
          <p>
            Neither of them has said anything publicly yet. So for now, this is a report and not a confirmation.
          </p>

          <h2>What the Report Says</h2>
          <p>
            The news first came from <em>Hindustan Times</em>, dated October 30. According to it, the two have decided to go their separate ways. Other outlets say the split was calm and without drama.
          </p>
          <p>
            The report also says Ibrahim was the one who ended the relationship.
          </p>

          <h2>Who Are Ibrahim and Palak?</h2>
          <p>
            <strong>Ibrahim Ali Khan</strong> is the son of Bollywood stars <strong>Saif Ali Khan</strong> and <strong>Amrita Singh</strong>, and brother to actress <strong>Sara Ali Khan</strong>. <strong>Palak Tiwari</strong> is the daughter of popular television and film actress <strong>Shweta Tiwari</strong>.
          </p>
          <p>
            Dating rumours about them began in January 2022. Palak was seen covering her face from the paparazzi as she left a Mumbai restaurant in a car with Ibrahim. After that, they were often spotted together at outings, concerts and private parties, though they never officially confirmed they were a couple.
          </p>
          <p>
            Palak once described their bond in an interview, insisting they were <em>“just good friends.”</em>
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/sara-ali-khan-fatwa-kedarnath-temple-visit"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit: Cleric Calls It Impermissible →
              </Link>
            </p>
          </div>

          <h2>Joint Shoots Reportedly Cancelled</h2>
          <p>
            The report also claims that some planned joint shoots featuring Ibrahim and Palak together have either been cancelled or put on hold indefinitely. Insiders view this as another key sign that things have shifted between them.
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

          <h2>Spotted Together Just Weeks Ago</h2>
          <p>
            What makes this news surprising to fans is the recent timing. Earlier this month, the two were spotted enjoying a wildlife safari together in Ranthambore. Fans had taken those viral pictures as proof that their relationship was going strong.
          </p>

          <h2>Still Following Each Other on Instagram</h2>
          <p>
            Despite the breakup reports, Ibrahim and Palak reportedly still follow each other on Instagram. So there is no apparent sign of online bitterness or a hostile fallout.
          </p>

          <h2>Why Is the News Coming Out Now?</h2>
          <p>
            According to an industry source, Ibrahim has an episode of a high-profile celebrity talk show lined up. He reportedly does not want his appearance to be overshadowed by relationship and breakup chatter.
          </p>
          <p>
            This has sparked speculation that he might be appearing on <strong>Karan Johar’s Koffee With Karan Season 9</strong>. However, neither the show makers nor Ibrahim’s representatives have made an official announcement.
          </p>

          <h2>What We Know and What We Don’t</h2>
          <p>
            <strong>What’s reported:</strong>
          </p>
          <ul>
            <li>
              <strong>Relationship duration:</strong> They dated for over three years starting in early 2022
            </li>
            <li>
              <strong>Who ended it:</strong> Reports indicate Ibrahim made the decision to call it off
            </li>
            <li>
              <strong>Tone of the split:</strong> Sources say the parting was calm and amicable without major drama
            </li>
            <li>
              <strong>Professional impact:</strong> Planned joint commercial shoots were cancelled or placed on hold
            </li>
            <li>
              <strong>Social media status:</strong> They continue to follow each other on Instagram
            </li>
          </ul>

          <p>
            <strong>What’s not confirmed:</strong>
          </p>
          <ul>
            <li>
              <strong>Official word:</strong> Neither Ibrahim nor Palak has officially confirmed the relationship or the breakup
            </li>
            <li>
              <strong>Talk show speculation:</strong> The Koffee With Karan link remains an unconfirmed industry rumour
            </li>
          </ul>

          <p>
            We will update this story as soon as either Ibrahim or Palak addresses the reports.
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood updates, relationship scoops and celebrity news.
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
              "Ibrahim Ali Khan Palak Tiwari breakup",
              "Palak Tiwari Ibrahim Ali Khan",
              "Bollywood breakup news",
              "Palak Tiwari",
              "Ibrahim Ali Khan",
              "Bollywood News",
              "Celebrity Gossip",
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
              href="/reality-shows"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Reality Shows Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
