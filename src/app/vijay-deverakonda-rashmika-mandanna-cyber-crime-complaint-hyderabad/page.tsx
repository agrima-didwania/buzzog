import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Vijay Deverakonda & Rashmika Mandanna File Complaint | Buzz OG",
  description:
    "Vijay Deverakonda and Rashmika Mandanna’s team has filed a cyber crime complaint in Hyderabad over fake claims and online trolling after KWK 9.",
  keywords: [
    "Vijay Deverakonda",
    "Rashmika Mandanna",
    "cyber crime complaint",
    "Koffee With Karan 9",
    "Vijay Rashmika trolling",
    "Rashmika Mandanna marriage",
    "fake news complaint",
    "Hyderabad cyber crime",
  ],
  openGraph: {
    title: "Vijay Deverakonda & Rashmika Mandanna File Complaint",
    description:
      "Vijay Deverakonda and Rashmika Mandanna’s team has filed a cyber crime complaint in Hyderabad over fake claims and online trolling after KWK 9.",
    url: "https://buzzog.com/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/celebrity-cybercrime-complaint-thumbnail.jpg",
        width: 1024,
        height: 576,
        alt: "Vijay Deverakonda & Rashmika Mandanna File Cyber Crime Complaint",
      },
    ],
    type: "article",
    publishedTime: "2026-10-27T18:00:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vijay Deverakonda & Rashmika Mandanna File Complaint",
    description:
      "Vijay Deverakonda and Rashmika Mandanna’s team has filed a cyber crime complaint in Hyderabad over fake claims and online trolling after KWK 9.",
    images: ["/images/celebrity-cybercrime-complaint-thumbnail.jpg"],
  },
  alternates: {
    canonical: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
  },
};

export default function ArticlePage() {
  const pageUrl = "https://buzzog.com/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad";
  const pageTitle = "Vijay Deverakonda and Rashmika Mandanna Take Legal Action Against Fake News and Trolling";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://buzzog.com/images/celebrity-cybercrime-complaint-thumbnail.jpg",
      "https://buzzog.com/images/celebrity-couple-amid-cybercrime-buzz.jpg",
    ],
    datePublished: "2026-10-27T18:00:00+05:30",
    dateModified: "2026-10-28T01:00:00+05:30",
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
      "Vijay Deverakonda and Rashmika Mandanna’s team has filed a cyber crime complaint in Hyderabad over fake claims and online trolling after KWK 9.",
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
        name: "Bollywood",
        item: "https://buzzog.com/#bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Vijay & Rashmika Cyber Crime Complaint",
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
          <Link href="/#bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>LEGAL ACTION</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span className="badge pink">🔥 Breaking News</span>
            <span className="badge">Cyber Crime</span>
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
              <span>HYDERABAD BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 27, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/celebrity-cybercrime-complaint-thumbnail.jpg"
            alt="Vijay Deverakonda and Rashmika Mandanna file cyber crime complaint in Hyderabad"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Representational photo: Vijay Deverakonda and Rashmika Mandanna’s team took legal action on Monday over online trolling and morphed content.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Actor Vijay Deverakonda and Rashmika Mandanna have had enough of online trolling. On Monday, Vijay&apos;s team approached the Cyber Crime Police in Hyderabad to file a formal complaint over targeted harassment, morphed videos, and false rumours circulating on social media.
          </p>

          <p>
            The complaint comes shortly after Vijay&apos;s appearance on Koffee With Karan Season 9, where his comments on relationships and his equation with Rashmika triggered a fresh wave of memes, speculation, and abusive posts.
          </p>

          <h2>What the Cyber Crime Complaint Alleges</h2>
          <p>
            According to police sources, the complaint names several anonymous social media handles, YouTube channels, and meme pages. The actors&apos; representatives stated that some accounts were running coordinated campaigns, creating fake clips, and attributing statements to them that they never made.
          </p>

          <div
            style={{
              background: "var(--ink-2)",
              borderLeft: "4px solid var(--lime)",
              padding: "20px 24px",
              margin: "28px 0",
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p style={{ margin: 0, fontStyle: "italic", color: "#fff" }}>
              &ldquo;Constructive criticism and healthy humour are welcome. But coordinated slander, morphing private pictures, and spreading defamatory falsehoods about someone&apos;s personal life crosses legal lines,&rdquo;
            </p>
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontSize: "13px",
                color: "var(--muted)",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              — Statement from the actors&apos; legal team
            </span>
          </div>

          <h2>The Koffee With Karan 9 Context</h2>
          <p>
            During the latest episode of Koffee With Karan, host Karan Johar probed Vijay about his relationship status. Vijay maintained that he is focused on his upcoming pan-India projects, but added that when he does decide to marry, he will announce it proudly to his fans.
          </p>

          {/* Secondary In-Article Photo */}
          <div className="article-media-box" style={{ margin: "32px 0" }}>
            <Image
              src="/images/celebrity-couple-amid-cybercrime-buzz.jpg"
              alt="Celebrity couple amid cybercrime buzz in Hyderabad"
              width={1024}
              height={576}
              sizes="(max-width: 768px) 100vw, 840px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div className="article-media-caption">
              📸 The duo previously shared screen space in Geetha Govindam and Dear Comrade, forming one of Telugu cinema&apos;s most loved pairings.
            </div>
          </div>

          <p>
            That line went viral. Some people criticised their answers and even their body language. Old interviews and promo clips resurfaced, and even their social media activity became part of the debate.
          </p>
          <p>
            Rashmika later explained that Vijay’s remark was about the time they took to understand each other before committing. Vijay shared a note saying they are &ldquo;gloriously happy&rdquo; and said he was upset about the comments on their marriage.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            For now, this is only a complaint. The claims in it are still to be examined, and no one has been found guilty of anything. We’ll update this story when the police or the actors share more.
          </p>

          {/* Related Stories */}
          <div
            style={{
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "16px",
              padding: "24px",
              margin: "36px 0",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "11px",
                color: "var(--lime)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              More Entertainment Stories
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <Link
                href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
                style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}
              >
                Inside Ramayana’s LA Premiere: Jada Pinkett Smith & Hollywood stars attend →
              </Link>
              <Link
                href="/godzilla-minus-zero-india-release-delayed-ramayana"
                style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}
              >
                Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir&apos;s Ramayana →
              </Link>
            </div>
          </div>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#VijayDeverakonda</span>
            <span className="tag-badge">#RashmikaMandanna</span>
            <span className="tag-badge">#CyberCrimeComplaint</span>
            <span className="tag-badge">#KoffeeWithKaran9</span>
            <span className="tag-badge">#VijayRashmikaTrolling</span>
            <span className="tag-badge">#HyderabadCyberCrime</span>
            <span className="tag-badge">#BollywoodGossip</span>
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
