import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry”",
  description:
    "Varun Dhawan meets Sidharth Malhotra and Kiara Advani in Mumbai. Read his Instagram post, Sidharth’s reply and Karan Johar’s reaction.",
  keywords: [
    "Varun Dhawan Sidharth Malhotra",
    "Varun Dhawan Kiara Advani",
    "Varun Dhawan Instagram post",
    "Sidharth Malhotra Kiara Advani",
    "Student of the Year reunion",
    "Varun Dhawan Sidharth Malhotra friendship",
    "Karan Johar Student of the Year",
    "Koffee With Karan Varun Dhawan",
    "Heated Rivalry Bollywood remake",
    "Bollywood news today",
    "SOTY",
    "Rohan and Abhimanyu",
    "Alia Bhatt",
    "Bollywood friendship",
    "Bollywood reunion",
  ],
  openGraph: {
    title: "Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry”",
    description:
      "Varun Dhawan meets Sidharth Malhotra and Kiara Advani in Mumbai. Read his Instagram post, Sidharth’s reply and Karan Johar’s reaction.",
    url: "https://www.buzzoriginals.com/varun-dhawan-sidharth-malhotra-kiara-advani-reunion",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/varun-dhawan-sidharth-malhotra-kiara-advani-reunion.jpg",
        width: 1024,
        height: 576,
        alt: "Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry” — Kiara Advani",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T12:05:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry”",
    description:
      "Varun Dhawan meets Sidharth Malhotra and Kiara Advani in Mumbai. Read his Instagram post, Sidharth’s reply and Karan Johar’s reaction.",
    images: ["/images/varun-dhawan-sidharth-malhotra-kiara-advani-reunion.jpg"],
  },
  alternates: {
    canonical: "/varun-dhawan-sidharth-malhotra-kiara-advani-reunion",
  },
};

export default function VarunSidharthReunionPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/varun-dhawan-sidharth-malhotra-kiara-advani-reunion";
  const pageTitle =
    "Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry”";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Varun Dhawan Meets Sidharth Malhotra and Kiara Advani, Fans Love the Bollywood Friendship",
    image: [
      "https://www.buzzoriginals.com/images/varun-dhawan-sidharth-malhotra-kiara-advani-reunion.jpg",
    ],
    datePublished: "2026-10-31T12:05:00+05:30",
    dateModified: "2026-10-31T12:05:00+05:30",
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
      "Varun Dhawan meets Sidharth Malhotra and Kiara Advani in Mumbai. Read his Instagram post, Sidharth’s reply and Karan Johar’s reaction.",
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
        name: "SOTY Reunion",
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
          <span style={{ color: "var(--lavender)" }}>VARUN &amp; SIDHARTH REUNION</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">✨ SOTY Reunion</span>
            <span className="badge">Bollywood Buzz</span>
            <span className="badge lime">Viral Bromance</span>
          </div>

          <h1 className="article-title">
            Varun Dhawan Meets Sidharth Malhotra and Kiara Advani, Fans Love the Bollywood Friendship
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
            src="/images/varun-dhawan-sidharth-malhotra-kiara-advani-reunion.jpg"
            alt="Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry” with Kiara Advani"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Varun Dhawan visits Sidharth Malhotra and Kiara Advani in Mumbai, sharing a viral selfie that has Student of the Year fans celebrating. (Photo: Instagram / @varundvn)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The bond between <strong>Varun Dhawan</strong> and <strong>Sidharth Malhotra</strong> is still going strong. The two <em>Student of the Year</em> stars recently met up, and their reunion has made fans very happy.
          </p>

          <h2>Varun Dhawan Meets Sidharth Malhotra and Kiara Advani</h2>
          <p>
            Varun visited Sidharth and his wife, <strong>Kiara Advani</strong>, at their home in Mumbai. After the visit, he shared a photo with the couple in a new Varun Dhawan Instagram post.
          </p>
          <p>
            His caption was short, funny and sweet: <em>“Heated yes but never a rivalry with my brother. Thank u for the hospitality bhabhi ji.”</em>
          </p>
          <p>
            So Varun Dhawan thanked bhabhi ji Kiara Advani for looking after him during the visit.
          </p>

          <h2>Sidharth Malhotra and Karan Johar React</h2>
          <p>
            Sidharth reshared the post on his page. His reply to Varun Dhawan’s post was just one line: <em>“Bro you will always be my first.”</em>
          </p>
          <p>
            Filmmaker <strong>Karan Johar</strong>, who introduced both actors to Bollywood in <em>Student of the Year</em>, also joined in. He wrote: <em>“Rohan and Abhimanyu! Heated rivalry? Solid lifelong bond.”</em>
          </p>
          <p>
            Rohan and Abhimanyu are the names of their characters in the 2012 hit film.
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

          <h2>What Is the “Heated Rivalry” Joke About?</h2>
          <p>
            The caption links to a recent episode of <strong>Koffee With Karan</strong>, where Varun was a guest.
          </p>
          <p>
            In the rapid-fire round, Karan asked Varun which male co-star he would pick for a <em>Heated Rivalry</em> Bollywood remake. <em>Heated Rivalry</em> is a Canadian romantic series. Varun answered at once and picked Sidharth Malhotra.
          </p>
          <p>
            Karan liked the idea and called them a <em>“sexy pairing”</em>.
          </p>
          <p>
            Varun then explained why he chose Sidharth: <em>“I think there was (se***al) tension between them even in SOTY.”</em>
          </p>
          <p>
            He also added: <em>“A lot of people were saying that me and Sid should end up together more than Alia.”</em>
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

          <h2>A Quick Look Back at Their Journey</h2>
          <p>
            Varun and Sidharth made their Bollywood debut together in 2012 with <strong>Student of the Year</strong>. The film was directed by Karan Johar, and <strong>Alia Bhatt</strong> also starred in it.
          </p>
          <p>
            Since then, both actors have built their own careers. Sidharth married Kiara Advani on February 7, 2023. Even though their paths have changed, this Varun Dhawan and Sidharth Malhotra friendship still looks strong.
          </p>

          <h2>Fans Want Another Film Together</h2>
          <p>
            Whenever the two actors appear together, fans ask for the same thing: a movie with both of them. The <em>Heated Rivalry</em> talk has made that wish even louder.
          </p>
          <p>
            For now, this warm Bollywood reunion is enough to make fans smile. It also shows that real friendships in the industry can last for years.
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
              "Varun Dhawan",
              "Sidharth Malhotra",
              "Kiara Advani",
              "Karan Johar",
              "Student of the Year",
              "SOTY",
              "Koffee With Karan",
              "Heated Rivalry",
              "Bollywood News",
              "Bollywood Reunion",
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
