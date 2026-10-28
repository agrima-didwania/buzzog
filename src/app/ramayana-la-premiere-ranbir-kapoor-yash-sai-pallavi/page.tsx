import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

export const metadata: Metadata = {
  title: "Ramayana LA Premiere: Actors Steal the Red Carpet | Buzz OG",
  description:
    "Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Ramayana LA premiere. See who attended, what they wore, and the release date.",
  keywords: [
    "Ramayana LA premiere",
    "Ramayana Los Angeles premiere",
    "Ranbir Kapoor Ramayana premiere",
    "Yash Ramayana premiere",
    "Sai Pallavi Ramayana premiere",
    "Ramayana Rise of a Legend",
    "Ramayana red carpet",
    "Ramayana release date",
    "Ramayana November 5",
    "Ramayana cast",
    "Nitesh Tiwari Ramayana",
    "Namit Malhotra Ramayana",
    "Jada Pinkett Smith Ramayana premiere",
    "Ranbir Kapoor Yash hug",
    "Ramayana Part 1",
  ],
  openGraph: {
    title: "Ramayana LA Premiere: Actors Steal the Red Carpet",
    description:
      "Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Ramayana LA premiere. See who attended, what they wore, and the release date.",
    url: "https://buzzog.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
        width: 1024,
        height: 682,
        alt: "Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi on the Red Carpet",
      },
    ],
    type: "article",
    publishedTime: "2026-10-28T06:30:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramayana LA Premiere: Actors Steal the Red Carpet",
    description:
      "Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Ramayana LA premiere. See who attended, what they wore, and the release date.",
    images: ["/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"],
  },
  alternates: {
    canonical: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
  },
};

export default function RamayanaArticlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi Steal the Red Carpet",
    image: [
      "https://buzzog.com/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
    ],
    datePublished: "2026-10-28T06:30:00+05:30",
    dateModified: "2026-10-28T12:00:00+05:30",
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
      "Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Ramayana LA premiere. See who attended, what they wore, and the release date.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://buzzog.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
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
      <Header activeNav="Movies" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/#movies">MOVIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>RED CARPET</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span className="badge pink">🔥 Global Premiere</span>
            <span className="badge">Hollywood Gala</span>
          </div>

          <h1 className="article-title">
            Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi Steal the Red Carpet
          </h1>

          <div className="article-meta-bar">
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>BY <strong>BUZZ ORIGINALS DESK</strong></span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span>LOS ANGELES</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 28, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>4 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
            alt="Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi on the Red Carpet"
            width={1024}
            height={682}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Star power in Hollywood: Ranbir Kapoor, Sai Pallavi, and Yash at the David Geffen Theatre in Los Angeles.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The <strong>Ramayana Los Angeles premiere</strong> was one of the biggest red carpet moments of the week. The film’s team flew to Los Angeles on October 27 for a special screening, and fans online are still talking about it.
          </p>

          <h2>Where Was the Ramayana Premiere Held?</h2>
          <p>
            The event took place at the <strong>David Geffen Theatre</strong> inside the Academy Museum of Motion Pictures. It was an invite-only 3D screening, and the hall has around 945 seats.
          </p>
          <p>
            Director <strong>Nitesh Tiwari</strong> and producer <strong>Namit Malhotra</strong> were there with the three lead stars: <strong>Ranbir Kapoor, Yash and Sai Pallavi</strong>.
          </p>

          <h2>Who Wore What?</h2>
          <p>The cast chose stunning traditional looks:</p>
          <ul>
            <li>
              <strong>Ranbir Kapoor</strong> wore an intricately crafted silver bandhgala.
            </li>
            <li>
              <strong>Yash</strong> wore all black with a sharp modern edge. His wife, <strong>Radhika Pandit</strong>, joined him in an elegant green and gold outfit.
            </li>
            <li>
              <strong>Sai Pallavi</strong> turned heads in a classic pink outfit adorned with exquisite zardozi embroidery work.
            </li>
          </ul>

          <p>
            Fans outside chanted &ldquo;Jai Shri Ram&rdquo; and &ldquo;Ravana, Ravana&rdquo; as the stars arrived. Reports also say a warm, emotional hug between Ranbir and Yash caught everyone’s eye and quickly went viral across fan clubs.
          </p>

          <h2>Hollywood Guests at the Premiere</h2>
          <p>
            Many prominent Hollywood names attended the screening. <strong>Jada Pinkett Smith</strong> wore a dramatic royal blue velvet gown. <em>Property Brothers</em> star <strong>Jonathan Scott</strong> turned up in a tailored black bandhgala. Other notable guests included actors <strong>Korbin Miles</strong> and <strong>Karen Fukuhara</strong>, widely known for <em>The Boys</em>.
          </p>

          {/* Internal Cross Link Callout */}
          <div
            style={{
              margin: "24px 0",
              padding: "16px 20px",
              background: "linear-gradient(135deg, rgba(228, 34, 46, 0.15), var(--ink-2))",
              border: "1px solid var(--line)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span style={{ fontSize: "20px" }}>⚡</span>
            <div style={{ fontSize: "14px" }}>
              <strong>Also check:</strong>{" "}
              <Link
                href="/godzilla-minus-zero-india-release-delayed-ramayana"
                style={{ color: "var(--lime)", textDecoration: "underline" }}
              >
                Godzilla Minus Zero Skips the Ramayana Clash: India Release Delayed →
              </Link>
            </div>
          </div>

          <h2>Why Did the Makers Choose Los Angeles?</h2>
          <p>
            Namit Malhotra explained that the event was meant to introduce the film to a mainstream Western audience, not only Indians living in the US. He said that showing the film to Indian viewers is something they would rather do in India.
          </p>
          <div className="article-quote-box">
            <p>
              &ldquo;The two-part Indian mythological epic is reportedly made on a staggering budget of around ₹4,000 crore, making it one of the most expensive cinematic productions ever mounted.&rdquo;
            </p>
          </div>

          <h2>Ramayana Cast and Release Date</h2>
          <p>
            <em>Ramayana</em> is produced by Namit Malhotra’s Prime Focus Studios and Yash’s Monster Mind Creations. Here is the star-studded main cast:
          </p>
          <ul>
            <li><strong>Ranbir Kapoor</strong> as Lord Rama</li>
            <li><strong>Sai Pallavi</strong> as Sita</li>
            <li><strong>Yash</strong> as Ravana</li>
            <li>
              <strong>Sunny Deol, Ravie Dubey, Anupam Kher, Kajal Aggarwal, Rakul Preet Singh, Vivek Oberoi, Kunal Kapoor, Arun Govil, and Lara Dutta</strong> in pivotal supporting roles
            </li>
          </ul>

          <p>
            Part One runs for approximately <strong>3 hours and 15 minutes</strong>. It releases worldwide on <strong>November 5, 2026</strong>, in Hindi, Tamil, Telugu, Kannada, and Malayalam.
          </p>
          <p style={{ color: "var(--lime)", fontWeight: 700 }}>
            Part 2 is expected to arrive on Diwali 2028.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            With a massive LA premiere and tremendous fan love across continents, the buzz around <em>Ramayana</em> keeps soaring. Will it live up to the unprecedented hype on November 5?
          </p>

          <p style={{ fontSize: "13px", color: "var(--muted)", fontStyle: "italic", marginTop: "24px" }}>
            Source: Based on reports from Outlook India, Free Press Journal and India.com.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#RamayanaLAPremiere</span>
            <span className="tag-badge">#RanbirKapoor</span>
            <span className="tag-badge">#Yash</span>
            <span className="tag-badge">#SaiPallavi</span>
            <span className="tag-badge">#NiteshTiwari</span>
            <span className="tag-badge">#NamitMalhotra</span>
            <span className="tag-badge">#RamayanaMovie</span>
            <span className="tag-badge">#JadaPinkettSmith</span>
            <span className="tag-badge">#HollywoodPremiere</span>
            <span className="tag-badge">#Diwali2026</span>
          </div>

          {/* Related Articles Strip */}
          <div
            style={{
              marginTop: "36px",
              padding: "20px",
              background: "var(--ink-2)",
              borderRadius: "16px",
              border: "1px solid var(--line)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "11px",
                color: "var(--magenta)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Trending Stories On Buzz OG
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "12px" }}>
              <Link
                href="/godzilla-minus-zero-india-release-delayed-ramayana"
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Godzilla Minus Zero Skips Ramayana Clash: India Release Delayed</span>
                <span style={{ color: "var(--lime)" }}>→</span>
              </Link>
              <Link
                href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>Vijay Deverakonda & Rashmika Mandanna File Cyber Crime Complaint</span>
                <span style={{ color: "var(--lime)" }}>→</span>
              </Link>
            </div>
          </div>

          {/* Navigation & Share */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
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
              <span
                style={{
                  fontSize: "12px",
                  color: "var(--muted)",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
              >
                SHARE THIS STORY:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Ramayana LA Premiere: Actors Steal the Red Carpet | Buzz Originals"
                )}&url=https://buzzog.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi`}
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
