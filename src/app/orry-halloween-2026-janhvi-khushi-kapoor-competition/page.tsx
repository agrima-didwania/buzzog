import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Orry: Janhvi and Khushi Kapoor are His Halloween Competition",
  description:
    "Orry plans 17 to 18 Halloween looks this year and says only Janhvi and Khushi Kapoor can compete with him. Read what he shared.",
  keywords: [
    "Orry Halloween 2026",
    "Orry Halloween looks",
    "Janhvi Kapoor",
    "Khushi Kapoor",
    "Bollywood Halloween",
    "Orry",
    "Celebrity Halloween costumes",
    "Kapoor sisters",
    "Bollywood gossip",
    "HT City Orry",
    "Bollywood news today",
  ],
  openGraph: {
    title: "Orry: Janhvi and Khushi Kapoor are His Halloween Competition",
    description:
      "Orry plans 17 to 18 Halloween looks this year and says only Janhvi and Khushi Kapoor can compete with him. Read what he shared.",
    url: "https://www.buzzoriginals.com/orry-halloween-2026-janhvi-khushi-kapoor-competition",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/orry-halloween-2026-janhvi-khushi-kapoor-competition.jpg",
        width: 1024,
        height: 576,
        alt: "Orry Names Janhvi and Khushi Kapoor as His Biggest Halloween Competition",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T15:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orry: Janhvi and Khushi Kapoor are His Halloween Competition",
    description:
      "Orry plans 17 to 18 Halloween looks this year and says only Janhvi and Khushi Kapoor can compete with him. Read what he shared.",
    images: ["/images/orry-halloween-2026-janhvi-khushi-kapoor-competition.jpg"],
  },
  alternates: {
    canonical: "/orry-halloween-2026-janhvi-khushi-kapoor-competition",
  },
};

export default function OrryHalloweenCompetitionPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/orry-halloween-2026-janhvi-khushi-kapoor-competition";
  const pageTitle =
    "Orry: Janhvi and Khushi Kapoor are His Halloween Competition";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Orry Names Janhvi and Khushi Kapoor as His Biggest Halloween Competition",
    image: [
      "https://www.buzzoriginals.com/images/orry-halloween-2026-janhvi-khushi-kapoor-competition.jpg",
    ],
    datePublished: "2026-10-31T15:45:00+05:30",
    dateModified: "2026-10-31T15:45:00+05:30",
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
      "Orry plans 17 to 18 Halloween looks this year and says only Janhvi and Khushi Kapoor can compete with him. Read what he shared.",
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
        name: "Orry Halloween",
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
          <span style={{ color: "var(--lavender)" }}>ORRY HALLOWEEN 2026</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🎃 Halloween 2026</span>
            <span className="badge lime">Viral Scoop</span>
            <span className="badge">Bollywood Buzz</span>
          </div>

          <h1 className="article-title">
            Orry Names Janhvi and Khushi Kapoor as His Biggest Halloween Competition
          </h1>

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
              <span>OCT 31, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/orry-halloween-2026-janhvi-khushi-kapoor-competition.jpg"
            alt="Orry Names Janhvi and Khushi Kapoor as His Biggest Halloween Competition"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Orry goes all out for Halloween 2026 with a bold red devil avatar, naming close friends Janhvi Kapoor and Khushi Kapoor as his only real competition. (Photo: Instagram / @orry)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Halloween is <strong>Orry’s</strong> favourite time of the year. This season, he is going all out. In a chat with <em>HT City</em>, he said the Kapoor sisters, <strong>Janhvi Kapoor</strong> and <strong>Khushi Kapoor</strong>, are the only ones who can give him real competition.
          </p>

          <h2>17 to 18 Halloween Looks This Year</h2>
          <p>
            Orry plans to wear 17 to 18 different looks this Halloween. Some will be cute, some will be princess-style, and some will be dark and scary.
          </p>
          <p>
            <em>“Honestly, why serve one when you can serve eighteen? We’re talking everything from cutesy, coquette, princess vibes to dark, spooky, slightly psychotic energy. One look might make you want to adopt me, and the next might make you want to call an exorcist!”</em>
          </p>
          <p>
            He also said he has loved dressing up for years. <em>“I’ve always loved experimenting, being extra, and giving people something to look forward to every Halloween!”</em>
          </p>

          <h2>“I’m Basically a Travelling Circus With a Glam Team”</h2>
          <p>
            For Orry, Halloween means running from one party to another. He says he changes outfits in the car, in bathrooms and <em>“sometimes God knows where.”</em>
          </p>
          <p>
            <em>“Oh, there are uncountable parties this year that I’ve already attended and will continue attending! Halloween is literally a marathon for me. I’m running from one party to another, changing looks in the car, in a bathroom, sometimes God knows where! Hahahah....It’s a full-blown production. I’m basically a travelling circus with a glam team!”</em>
          </p>
          <p>
            His dream superpower is teleportation. It would save him from traffic and from doing makeup <em>“in somebody’s bathroom.”</em>
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

          <h2>How Halloween Has Changed</h2>
          <p>
            Orry feels social media has changed how people celebrate. <em>“The only difference is that earlier, there was less content, whereas now, the look, the pictures, the reels, the parties....everything becomes part of the experience. It’s not just about dressing up anymore; it’s about creating a whole moment out of it.”</em>
          </p>

          <h2>His Dream Halloween Party</h2>
          <p>
            Orry’s idea of a party is as dramatic as his costumes. <em>“The venue would look like Dracula inherited a palace and hired a celebrity stylist. There would be a best-dressed competition, but honestly, I would probably be the judge, the host, and one of the contestants. A little conflict of interest never hurt anybody!”</em>
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Janhvi Kapoor’s “Concert” Advice for Veer Pahariya on Koffee With Karan Is Going Viral →
              </Link>
            </p>
          </div>

          <h2>Why the Kapoor Sisters?</h2>
          <p>
            When asked about his biggest competition this Halloween, Orry named <strong>Janhvi Kapoor</strong> and <strong>Khushi Kapoor</strong>.
          </p>
          <p>
            He also called them his picks for the King and Queen of Halloween, after crowning himself first. <em>“I’m the King of Halloween. A psycho invented Halloween. But if it had to be someone other than me, I’d say the Kapoor sisters, (actor) Janhvi Kapoor and (actor) Khushi Kapoor. One will be a superhero and another a pop star.”</em>
          </p>
          <p>
            Orry has always been close to the sisters. In a 2023 chat with <em>MensXP</em>, he said, <em>“I am very close to Nysa, I’m very close to the Kapoor sisters.”</em>
          </p>

          <h2>Orry’s Quick Halloween Answers</h2>
          <ul>
            <li>
              <strong>Vampire, witch or ghost?</strong> <em>“I’d rather be burnt as a witch than never be burnt at all.”</em>
            </li>
            <li>
              <strong>Most overrated Halloween trend?</strong> <em>“Some random Bollywood character. Although, today, I painted my whole body red, and I spent more time getting out of the red paint than being in it.”</em>
            </li>
            <li>
              <strong>Ideal Halloween party?</strong> <em>“An extravagant party where I can trick people and give them treats.”</em>
            </li>
          </ul>

          <h2>Last Year’s Halloween Buzz</h2>
          <p>
            Orry also made headlines last Halloween. In 2025, he shared a video from a star-studded Bollywood Halloween bash, featuring <strong>Alia Bhatt</strong>, <strong>Deepika Padukone</strong>, <strong>Aryan Khan</strong>, Janhvi Kapoor and others. He captioned it <em>“Pick a winner.”</em> Janhvi commented, <em>“Nita aunty committed (sic),”</em> about Nita Ambani’s Audrey Hepburn look. Khushi Kapoor wrote, <em>“Nita aunty for the win.”</em>
          </p>

          <h2>Final Take</h2>
          <p>
            Between 17 looks, back-to-back parties and a little bit of chaos, Orry is clearly the one to watch this Halloween. Will Janhvi and Khushi take up the challenge? We’ll find out soon.
          </p>
          <p>
            <em>Source: HT City interview with Orry.</em>
          </p>
          <p>
            Stay tuned to <strong>Buzz OG</strong> for more Bollywood updates.
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
              "Orry",
              "Halloween 2026",
              "Janhvi Kapoor",
              "Khushi Kapoor",
              "Bollywood Halloween",
              "Orry Halloween looks",
              "Celebrity Costumes",
              "HT City",
              "Nysa Devgan",
              "Bollywood Gossip",
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

          {/* Back to Hubs Navigation */}
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
              ← Back to Bollywood Hub
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
