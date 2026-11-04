import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms",
  description:
    "Ramayana Part 2 will now release in 2028, not 2027. Producer Namit Malhotra explains the delay and hints that the film could become a trilogy.",
  keywords: [
    "Ramayana Part 2 release date",
    "Ramayana 2028",
    "Ramayana trilogy",
    "Namit Malhotra",
    "Ranbir Kapoor Ramayana",
    "Ramayana Part 1 release date",
    "Nitesh Tiwari Ramayana",
    "Ramayana budget 4000 crore",
    "Sunny Deol Lord Hanuman",
    "Sai Pallavi Sita",
    "Yash Ravana",
    "Ravie Dubey Lakshman",
    "Ramayana Part 1 two versions",
    "Bollywood box office",
    "Bollywood news today",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms",
    description:
      "Ramayana Part 2 will now release in 2028, not 2027. Producer Namit Malhotra explains the delay and hints that the film could become a trilogy.",
    url: "https://www.buzzoriginals.com/ramayana-part-2-postponed-2028-namit-malhotra-trilogy",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ramayana-part-2-postponed-2028-namit-malhotra-trilogy.jpg",
        width: 1024,
        height: 576,
        alt: "Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms Delay and Hints at Trilogy",
      },
    ],
    type: "article",
    publishedTime: "2026-11-04T12:00:00.000Z",
    authors: ["Buzz Originals Cinema & Box Office Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms",
    description:
      "Ramayana Part 2 will now release in 2028, not 2027. Producer Namit Malhotra explains the delay and hints that the film could become a trilogy.",
    images: ["/images/ramayana-part-2-postponed-2028-namit-malhotra-trilogy.jpg"],
  },
  alternates: {
    canonical: "/ramayana-part-2-postponed-2028-namit-malhotra-trilogy",
  },
};

export default function RamayanaPart2PostponedPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/ramayana-part-2-postponed-2028-namit-malhotra-trilogy";
  const pageTitle =
    "Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms, Hints at a Trilogy";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/ramayana-part-2-postponed-2028-namit-malhotra-trilogy.jpg",
    ],
    datePublished: "2026-11-04T12:00:00+05:30",
    dateModified: "2026-11-04T12:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Cinema & Box Office Desk",
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
      "Ramayana Part 2 will now release in 2028, not 2027. Producer Namit Malhotra explains the delay and hints that the film could become a trilogy.",
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
        name: "Ramayana Part 2 Postponed to 2028",
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
          <span style={{ color: "var(--lavender)" }}>RAMAYANA PART 2 RELEASE DATE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">⚡ Big Release Update</span>
            <span className="badge lime">Ramayana 2028</span>
            <span className="badge">Trilogy Rumours</span>
          </div>

          <h1 className="article-title">
            Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms, Hints at a Trilogy
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Cinema &amp; Box Office Desk</span>
            <span>·</span>
            <time dateTime="2026-11-04">November 4, 2026</time>
            <span>·</span>
            <span>4 MIN READ</span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <figure className="article-hero-media">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/ramayana-part-2-postponed-2028-namit-malhotra-trilogy.jpg"
              alt="Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms Delay and Hints at Trilogy"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 900px"
            />
          </div>
          <figcaption
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-space-mono)",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            Producer Namit Malhotra confirms Ramayana Part 2 moves from Diwali 2027 to 2028, teasing a potential three-part epic franchise. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Fans eagerly counting down the hours to Ranbir Kapoor’s mythological magnum opus will have to endure a longer wait for the epic saga’s continuation. Producer <strong>Namit Malhotra</strong> has officially confirmed that the official <strong>Ramayana Part 2 release date</strong> has been pushed back to <strong>2028</strong>, shifting away from its initially projected Diwali 2027 release window.
          </p>

          <p>
            In an even more intriguing revelation that has sent cinephiles buzzing, Malhotra hinted that the creative team might return to the drawing board and expand the monumental narrative into an expansive <strong>trilogy</strong>, depending upon how global audiences respond to the first installment.
          </p>

          {/* Fast Breakdown Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px",
              margin: "28px 0",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                color: "var(--lime)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              ⚡ Fast Breakdown: Ramayana Part 2 &amp; Trilogy Plans
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>New Release Window:</strong> <em>Ramayana: Part 2</em> officially moves to 2028 (previously slated for Diwali 2027).
              </li>
              <li>
                <strong>Why the Extra Year?</strong> Producer Namit Malhotra stated the team refused to do a “rush job” on the grand finale battle sequences.
              </li>
              <li>
                <strong>Possible Trilogy:</strong> The saga was originally conceived across three parts; makers are open to revisiting a three-film structure based on Part 1 reception.
              </li>
              <li>
                <strong>Two Cuts of Part 1:</strong> Part 1 has two separate master edits — a distinct Indian edition and a re-edited, English-adapted cut for international audiences.
              </li>
            </ul>
          </div>

          <h2>Ramayana Part 2 Release Date: What Changed?</h2>
          <p>
            <em>Ramayana: Part One</em> arrives in worldwide theatres on <strong>November 5, 2026</strong>, leading into the massive Diwali festival corridor. The producers initially mapped out a tight back-to-back delivery calendar, intending to unveil Part 2 exactly twelve months later during Diwali 2027.
          </p>
          <p>
            Whispers regarding a schedule shift began circulating through industry trade circles in late October, pointing toward extensive scale requirements for the War of Lanka and complex motion-capture visual effects handled by DNEG. Now, Malhotra has put all speculation to rest by formally confirming the one-year delay.
          </p>

          {/* Contextual Internal Link */}
          <div
            style={{
              borderLeft: "3px solid var(--pink)",
              background: "rgba(255, 0, 128, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Related Box Office Surge:{" "}
            <Link
              href="/ramayana-advance-booking-73-crore-ranbir-kapoor"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Ramayana Advance Booking: Ranbir Kapoor’s Film Crosses Rs 73.40 Crore in India
            </Link>
          </div>

          <h2>Why Was Ramayana Part 2 Delayed?</h2>
          <p>
            Addressing the postponement during an exclusive interaction with <em>E! News</em>, Namit Malhotra explained that the tremendous excitement greeting the project worldwide encouraged the team to grant the finale the time and technical precision it commands:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            “So the idea was now that we’ve got so much excitement that the world has had, we want to take a little bit more time to make sure that when we present the grand finale, we have a little bit more time to do what we did on Part One. That extra year is what I genuinely believe we need to do justice for a film of this size. When you see part 2 coming in, that will be a whole other story. We didn’t want to do a rush job or get ahead of ourselves. We want to deliver the finale in the most grand way that it deserves.”
          </blockquote>

          <p>
            Unverified reports also claim that an official announcement teaser or updated release date slate for Part 2 might be strategically embedded within the post-credits sequence of <em>Ramayana: Part One</em> when it hits cinemas this Thursday.
          </p>

          <h2>Will Ramayana Become a Trilogy?</h2>
          <p>
            Beyond the release delay, Malhotra dropped another major narrative teaser. In a comprehensive conversation with <em>Review Nation</em>, the producer disclosed that <em>Ramayana</em> was originally structured as a three-part cinematic saga before the creative heads condensed it into a two-film arc.
          </p>
          <p>
            With production ongoing and international expectations mounting, Malhotra conceded that the franchise roadmap remains fluid:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--pink)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            “I feel like we may sit back on the drawing board and see if there’s anything else that we want to add or subtract, depending on how the world has received it. Because, you know, while we say that, we also have two different versions of the same film, with two different runtimes on part one itself. So, depending on which way the next round of feedback goes, I’d love to not have to make two different versions. I’m sure Nitesh would also like to stick to one version.”
          </blockquote>

          {/* Another Internal Link */}
          <div
            style={{
              borderLeft: "3px solid var(--lime)",
              background: "rgba(0, 255, 128, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Inside Hollywood Premiere:{" "}
            <Link
              href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
              style={{ color: "var(--pink)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Inside Ramayana’s LA Premiere: Ranbir Kapoor, Yash &amp; Sai Pallavi Stun Hollywood
            </Link>
          </div>

          <h2>Two Distinct Versions of Ramayana Part 1</h2>
          <p>
            Namit revealed that what began as an Indian cinematic venture has evolved into a global production of historic proportions. To respect varying cultural pacing expectations, director <strong>Nitesh Tiwari</strong> has assembled two separate master cuts of Part 1.
          </p>
          <p>
            The international English edition features an altered runtime, modified pacing, and a rewritten narrative script designed to introduce global viewers to the foundational mythology without compromising sacred thematic depth.
          </p>

          <h2>About Ramayana: Cast, Budget, and Global Release</h2>
          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.05)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Production Aspect</th>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Official Details</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Director</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Nitesh Tiwari (<em>Dangal</em>, <em>Chhichhore</em>)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Primary Cast</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>
                    Ranbir Kapoor (Lord Rama), Sai Pallavi (Mata Sita), Sunny Deol (Lord Hanuman), Ravie Dubey (Lakshman) &amp; Yash (Ravana)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Producers</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Namit Malhotra (Prime Focus/DNEG) &amp; Yash (Monster Mind Creations)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Estimated Budget</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Reported ₹4,000 Crore combined budget (India’s most expensive cinematic production)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Global Distribution</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Sony Pictures Entertainment</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Part 1 Release Date</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>November 5, 2026 (Diwali Week)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Part 2 Release Window</td>
                  <td style={{ padding: "12px 16px", color: "var(--lime)" }}>2028 (Confirmed Postponement)</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Theatrical Languages</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Hindi, Tamil, Telugu, Kannada, Malayalam &amp; Global English Edition</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Following its star-studded Hollywood premiere at the Academy Museum in Los Angeles on October 28—where international film critics drew comparisons to <em>Avatar</em> and Peter Jackson’s <em>The Lord of the Rings</em>—enthusiasm in domestic and overseas ticket windows has reached historic levels.
          </p>

          <p>
            With Part 1 poised to conquer Diwali box office records this week, all eyes will be glued to the screen to see what hints Nitesh Tiwari drops for the 2028 finale.
          </p>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for real-time box office collections, opening day reactions, and exclusive trade analysis.
          </p>

          {/* Tags List */}
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
              "RamayanaPart2",
              "RanbirKapoor",
              "NamitMalhotra",
              "NiteshTiwari",
              "Yash",
              "SaiPallavi",
              "SunnyDeol",
              "RamayanaTrilogy",
              "Ramayana2028",
              "BollywoodNews",
              "BuzzOriginals",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "4px 10px",
                  borderRadius: "4px",
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

          {/* Social Sharing Bar Bottom */}
          <div style={{ marginTop: "32px" }}>
            <SocialShare
              title="Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms"
              url={pageUrl}
            />
          </div>

          {/* Navigation Back Links */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Link
              href="/bollywood"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              ← Back to Bollywood
            </Link>
            <Link
              href="/"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              Homepage Hero →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
