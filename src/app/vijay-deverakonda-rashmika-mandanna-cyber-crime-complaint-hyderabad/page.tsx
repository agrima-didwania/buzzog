import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

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
    canonical:
      "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
  },
};

export default function ArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Vijay Deverakonda and Rashmika Mandanna Take Legal Action Against Fake News and Trolling",
    image: [
      "https://buzzog.com/images/celebrity-cybercrime-complaint-thumbnail.jpg",
      "https://buzzog.com/images/celebrity-couple-amid-cybercrime-buzz.jpg",
    ],
    datePublished: "2026-10-27T18:00:00+05:30",
    dateModified: "2026-10-28T01:00:00+05:30",
    author: [
      {
        "@type": "Organization",
        name: "Buzz Originals Desk",
      },
    ],
    publisher: {
      "@type": "Organization",
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
      "@id":
        "https://buzzog.com/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
    },
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Ticker */}
      <Ticker />

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

          <h1 className="article-title">
            Vijay Deverakonda and Rashmika Mandanna Take Legal Action Against Fake News and Trolling
          </h1>

          <div className="article-meta-bar">
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>BY <strong>BUZZ ORIGINALS DESK</strong></span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span>HYDERABAD</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 27, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>4 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/celebrity-cybercrime-complaint-thumbnail.jpg"
            alt="Vijay Deverakonda and Rashmika Mandanna File Cyber Crime Complaint in Hyderabad"
            width={1024}
            height={576}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Team Virosh lodges formal complaint with Hyderabad Cyber Crime police over targeted online harassment.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Vijay Deverakonda and Rashmika Mandanna are done with the online noise. Their team has gone to the Hyderabad Cyber Crime police with a formal complaint about fake posts, edited screenshots and targeted trolling.
          </p>

          <h2>What Happened?</h2>
          <p>
            The complaint was filed by P. Nishanth Kumar, who manages both actors. The team behind the filing, called Virosh, says he handed it over in person. He also submitted links and proof for the police to check.
          </p>
          <p>
            According to the complaint, the problem started after the couple appeared on Koffee With Karan Season 9. Since then, the team says, social media has been full of:
          </p>

          <ul>
            <li>Made-up claims and baseless relationship rumours</li>
            <li>Edited or manipulated screenshots and altered videos</li>
            <li>Fake quotes attributed to both Vijay and Rashmika</li>
            <li>Fake accounts pretending to be someone else to mislead followers</li>
            <li>Targeted, continuous online harassment and hate campaigns</li>
          </ul>

          {/* Instagram Reel Callout Card */}
          <div className="instagram-reel-box">
            <div className="instagram-reel-info">
              <div className="instagram-reel-icon">▶️</div>
              <div>
                <div className="instagram-reel-title">
                  Check Out The Video: Vijay Rashmika getting Divorced?
                </div>
                <div className="instagram-reel-sub">
                  Watch the viral reel and online reactions on Instagram
                </div>
              </div>
            </div>
            <a
              href="https://www.instagram.com/reel/De_SmxvztBK/?obrf=a3RkaXJ4c204endh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-instagram"
            >
              <span>Watch on Instagram</span>
              <span>↗</span>
            </a>
          </div>

          <h2>What Does the Complaint Ask For?</h2>
          <p>
            The team wants the police to look into specific posts and check whether they are fake or misleading. It also asks the police to look at claims about:
          </p>

          <ul>
            <li>What allegedly happened during the KWK 9 show behind closed doors</li>
            <li>Severe emotional distress and targeted harassment caused to the actors</li>
            <li>Unsubstantiated speculation surrounding changes in the couple’s social media activity</li>
            <li>Sensationalized posts that present a breakup, separation or divorce as a confirmed fact</li>
          </ul>

          <p>
            The team also says clearly that nobody should assume anything is false or illegal before the investigation. Every post, it says, should be checked against the original source and its context.
          </p>

          {/* Mid-Article Image */}
          <div className="article-media-box">
            <Image
              src="/images/celebrity-couple-amid-cybercrime-buzz.jpg"
              alt="Vijay Deverakonda and Rashmika Mandanna during Koffee With Karan 9 amid cyber crime buzz"
              width={1024}
              height={577}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <div className="article-media-caption">
              📸 Vijay Deverakonda and Rashmika Mandanna during their appearance on Koffee With Karan Season 9 amid the recent cyber crime buzz.
            </div>
          </div>

          <h2>&ldquo;This Is Not About Silencing Criticism&rdquo;</h2>
          <div className="article-quote-box">
            <p>
              &ldquo;The Virosh team made one thing clear. This is not an attempt to stop free speech or honest opinions. The goal is to hold people responsible when posts are false or break the law.&rdquo;
            </p>
          </div>
          <p>
            The team also said that anyone who posts, reposts or spreads such content could be examined one case at a time. It plans to take legal action where needed, following the proper process. It also asked people to be careful about sharing unverified claims and not to treat guesses as facts.
          </p>

          <h2>Why Is Everyone Talking About Vijay and Rashmika?</h2>
          <p>
            On KWK 9, the couple spoke about their relationship and their journey to marriage. Vijay said Rashmika expressed her feelings first. He also joked that he made her ask him &ldquo;100 times&rdquo; before he said yes.
          </p>
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

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#VijayDeverakonda</span>
            <span className="tag-badge">#RashmikaMandanna</span>
            <span className="tag-badge">#CyberCrimeComplaint</span>
            <span className="tag-badge">#KoffeeWithKaran9</span>
            <span className="tag-badge">#VijayRashmikaTrolling</span>
            <span className="tag-badge">#RashmikaMandannaMarriage</span>
            <span className="tag-badge">#HyderabadCyberCrime</span>
            <span className="tag-badge">#BollywoodGossip</span>
          </div>

          {/* Back to Home & Share */}
          <div style={{ marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
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

            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--muted)", fontFamily: "var(--font-space-mono), monospace" }}>
                SHARE THIS STORY:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Vijay Deverakonda & Rashmika Mandanna File Complaint | Buzz Originals"
                )}&url=https://buzzog.com/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad`}
                target="_blank"
                rel="noreferrer"
                className="btn-follow"
                style={{ padding: "8px 16px", fontSize: "12px" }}
              >
                Share on X
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
