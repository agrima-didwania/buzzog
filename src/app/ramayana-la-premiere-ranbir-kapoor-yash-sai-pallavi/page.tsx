import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Ramayana LA Premiere: Actors Steal the Red Carpet | Buzz Originals",
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
    url: "https://www.buzzoriginals.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
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
  const pageUrl = "https://www.buzzoriginals.com/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi";
  const pageTitle = "Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi Steal the Red Carpet";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
    ],
    datePublished: "2026-10-28T06:30:00+05:30",
    dateModified: "2026-10-28T12:00:00+05:30",
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
      "Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Ramayana LA premiere. See who attended, what they wore, and the release date.",
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
        name: "Bollywood & Hollywood",
        item: "https://www.buzzoriginals.com/#bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ramayana LA Premiere",
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
          <Link href="/bollywood">BOLLYWOOD & HOLLYWOOD</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>RED CARPET</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Bollywood & Hollywood Gala</span>
            <span className="badge">World Premiere</span>
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
              <span>BOLLYWOOD & HOLLYWOOD BUREAU</span>
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
            alt="Ranbir Kapoor, Yash and Sai Pallavi at Ramayana LA premiere red carpet"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Academy Museum in Los Angeles: The lead trio of Nitesh Tiwari&apos;s Ramayana made a global statement on the red carpet.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The <strong>Ramayana Los Angeles premiere</strong> was one of the biggest red carpet moments of the week. The film’s team flew to Los Angeles on October 27 for a special screening, and fans online are still talking about it.
          </p>

          <h2>Where Was the Ramayana Premiere Held?</h2>
          <p>
            The event took place at the David Geffen Theatre inside the Academy Museum of Motion Pictures. It was an invite-only 3D screening, and the hall has around 945 seats.
          </p>
          <p>
            Director Nitesh Tiwari and producer Namit Malhotra were there with the three lead stars: <strong>Ranbir Kapoor</strong>, <strong>Yash</strong> and <strong>Sai Pallavi</strong>.
          </p>

          <h2>Who Wore What?</h2>
          <p>The cast chose traditional looks:</p>
          <ul>
            <li><strong>Ranbir Kapoor</strong> wore a silver bandhgala.</li>
            <li><strong>Yash</strong> wore all black. His wife, Radhika Pandit, joined him in a green and gold outfit.</li>
            <li><strong>Sai Pallavi</strong> wore a pink outfit with intricate zardozi work.</li>
          </ul>
          <p>
            Fans chanted &ldquo;Jai Shri Ram&rdquo; and &ldquo;Ravana, Ravana&rdquo; as the stars arrived. Reports also say a warm hug between Ranbir and Yash caught everyone’s eye.
          </p>

          <h2>Hollywood Guests at the Premiere</h2>
          <p>
            Many Hollywood names came too. <strong>Jada Pinkett Smith</strong> wore a long royal blue velvet gown. <em>Property Brothers</em> star <strong>Jonathan Scott</strong> wore a black bandhgala. Other guests included actors Korbin Miles and Karen Fukuhara, known for <em>The Boys</em>.
          </p>

          <p>
            Also check:{" "}
            <Link
              href="/godzilla-minus-zero-india-release-delayed-ramayana"
              style={{ color: "var(--lime)", fontWeight: 700, textDecoration: "underline" }}
            >
              Godzilla Minus Zero Skips the Ramayana Clash in India
            </Link>
          </p>

          <h2>Why Did the Makers Choose Los Angeles?</h2>
          <p>
            Namit Malhotra explained that the event was meant to introduce the film to a mainstream Western audience, not only Indians living in the US. He said that showing the film to Indian viewers is something they would rather do in India.
          </p>
          <p>
            The two-part film is reportedly made on a budget of around ₹4,000 crore.
          </p>

          <h2>Ramayana Cast and Release Date</h2>
          <p>
            Ramayana is made by Namit Malhotra’s Prime Focus Studios and Yash’s Monster Mind Creations. Here is the main cast:
          </p>
          <ul>
            <li><strong>Ranbir Kapoor</strong> as Lord Rama</li>
            <li><strong>Sai Pallavi</strong> as Sita</li>
            <li><strong>Yash</strong> as Ravana</li>
            <li>Sunny Deol, Ravie Dubey, Anupam Kher, Kajal Aggarwal, Rakul Preet Singh, Vivek Oberoi, Kunal Kapoor, Arun Govil and Lara Dutta in supporting roles.</li>
          </ul>
          <p>
            Part One runs for about 3 hours and 15 minutes. It releases worldwide on November 5, 2026, in Hindi, Tamil, Telugu, Kannada and Malayalam.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            With a big LA premiere and strong fan love, the buzz around Ramayana keeps growing. Will it live up to the hype on November 5? Tell us in the comments.
          </p>
          <p style={{ fontSize: "13px", color: "var(--muted)", fontStyle: "italic", marginTop: "16px" }}>
            Source: Based on reports from Outlook India, Free Press Journal and India.com.
          </p>

          {/* Related Stories */}
          <div className="article-related-box">
            <span className="kicker">Related Coverage</span>
            <Link href="/godzilla-minus-zero-india-release-delayed-ramayana">
              Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir&apos;s Ramayana →
            </Link>
            <Link href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad">
              Vijay & Rashmika team takes legal action against fake posts & KWK 9 trolling →
            </Link>
          </div>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#RamayanaLAPremiere</span>
            <span className="tag-badge">#RanbirKapoor</span>
            <span className="tag-badge">#Yash</span>
            <span className="tag-badge">#SaiPallavi</span>
            <span className="tag-badge">#NiteshTiwari</span>
            <span className="tag-badge">#NamitMalhotra</span>
            <span className="tag-badge">#JadaPinkettSmith</span>
          </div>

          {/* Accessible Social Share Component */}
          <SocialShare title={pageTitle} url={pageUrl} />

          {/* Navigation & Back to Home */}
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
