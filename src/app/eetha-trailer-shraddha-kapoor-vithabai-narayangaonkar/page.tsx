import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Eetha Trailer Out: Shraddha Kapoor as Vithabai",
  description:
    "The Eetha trailer is out! See Shraddha Kapoor as Lavani legend Vithabai Narayangaonkar, plus cast, director, new release date and what to expect.",
  keywords: [
    "Eetha trailer",
    "Shraddha Kapoor Eetha",
    "Vithabai Narayangaonkar",
    "Eetha release date",
    "Eetha cast",
    "Laxman Utekar",
    "Dinesh Vijan",
    "Maddock Films",
    "Kathputli Creations",
    "Ajay Atul",
    "Randeep Hooda",
    "Mohd Zeeshan Ayyub",
    "Siddharth Jadhav",
    "Tamasha Queen",
    "Lavani legend",
    "Bollywood movies 2026",
    "Shraddha Kapoor new movie",
  ],
  openGraph: {
    title: "Eetha Trailer Out: Shraddha Kapoor as Vithabai",
    description:
      "The Eetha trailer is out! See Shraddha Kapoor as Lavani legend Vithabai Narayangaonkar, plus cast, director, new release date and what to expect.",
    url: "https://www.buzzoriginals.com/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg",
        width: 1024,
        height: 576,
        alt: "Eetha Trailer Out: Shraddha Kapoor as Vithabai Narayangaonkar",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T15:55:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eetha Trailer Out: Shraddha Kapoor as Vithabai",
    description:
      "The Eetha trailer is out! See Shraddha Kapoor as Lavani legend Vithabai Narayangaonkar, plus cast, director, new release date and what to expect.",
    images: ["/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg"],
  },
  alternates: {
    canonical: "/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
  },
};

export default function EethaTrailerArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar";
  const pageTitle =
    "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg",
    ],
    datePublished: "2026-10-30T15:55:00+05:30",
    dateModified: "2026-10-30T15:55:00+05:30",
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
      "The Eetha trailer is out! See Shraddha Kapoor as Lavani legend Vithabai Narayangaonkar, plus cast, director, new release date and what to expect.",
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
        name: "Eetha Trailer",
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
          <span style={{ color: "var(--lavender)" }}>EETHA TRAILER</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Trailer Out</span>
            <span className="badge">Bollywood &amp; Movies</span>
            <span className="badge lime">Shraddha Kapoor</span>
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
              <span>CINEMA BUREAU</span>
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
            src="/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg"
            alt="Eetha Trailer Out: Shraddha Kapoor as Vithabai Narayangaonkar"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎭 Shraddha Kapoor embodies Lavani legend Vithabai Narayangaonkar in Laxman Utekar&apos;s upcoming folk musical drama &apos;Eetha&apos;, releasing December 4, 2026. (Photo: Maddock Films / Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Shraddha Kapoor</strong> is back on the big screen, and this time she looks completely different. The <strong>Eetha trailer</strong> dropped on <strong>30 October 2026</strong>, and it gives us a proper look at her as Maharashtra’s folk legend, <strong>Vithabai Narayangaonkar</strong>.
          </p>

          <h2>What the Eetha trailer shows</h2>
          <p>
            The trailer takes us into the world of <strong>Tamasha</strong> and <strong>Lavani</strong>. These are traditional Maharashtrian art forms that mix music, dance and drama. You see loud performances, emotional moments and a Shraddha who looks very far from her usual screen image.
          </p>

          <div className="article-quote-box">
            <p>
              &ldquo;Aankhon mein aandhi, Pairon mein toofaan, Tamasha ki shaan aur hamara abhimaan!&rdquo;
            </p>
            <span style={{ fontSize: "12px", color: "var(--lavender)", marginTop: "8px", display: "block" }}>
              — The defining line from the Eetha trailer
            </span>
          </div>

          <p>
            The makers also posted two lines in Hindi before the trailer launch:
          </p>

          <div className="article-quote-box">
            <p style={{ fontSize: "17px", lineHeight: "1.6", fontWeight: 600 }}>
              &ldquo;नाच नहीं, राज करने आ रही है ईठा!&rdquo;
            </p>
            <p style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "8px" }}>
              &ldquo;घुंघरू जिसकी पूजा और माय-बाप जिसके भगवान, ईठा! उस तूफ़ान का नाम!&rdquo;
            </p>
            <span style={{ fontSize: "12px", color: "var(--lime)", marginTop: "8px", display: "block" }}>
              — Maddock Films Official Announcement
            </span>
          </div>

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

          <h2>Who was Vithabai Narayangaonkar?</h2>
          <p>
            <strong>Vithabai Bhau Mang Narayangaonkar</strong> was one of the best-known Tamasha and Lavani artists in Maharashtra. She is often called the <em>&ldquo;Queen of Lavani&rdquo;</em>. Reports say the film follows her life from 1940 to 1990, covering her rise to fame and the struggles she faced along the way.
          </p>

          <h2>Eetha release date: pushed to December 4</h2>
          <p>
            The film was first planned for 28 August 2026. It has now moved to <strong>4 December 2026</strong>, and the makers confirmed this while announcing the trailer date.
          </p>

          <h2>Eetha cast and crew</h2>
          <ul>
            <li>
              <strong>Lead:</strong> Shraddha Kapoor as Vithabai
            </li>
            <li>
              <strong>Also starring:</strong> Randeep Hooda, Mohd. Zeeshan Ayyub, Siddharth Jadhav, Ishtiyak Khan and Anant Joshi
            </li>
            <li>
              <strong>Director:</strong> Laxman Utekar, who also co-wrote the story and screenplay with Kshitij Patwardhan
            </li>
            <li>
              <strong>Dialogues:</strong> Kshitij Patwardhan
            </li>
            <li>
              <strong>Presented by:</strong> Dinesh Vijan
            </li>
            <li>
              <strong>Produced by:</strong> Dinesh Vijan, Laxman Utekar and Karishma Sharma, under Maddock Films and Kathputli Creations
            </li>
            <li>
              <strong>Music:</strong> Ajay–Atul
            </li>
          </ul>

          <h2>How we got here: teaser, leak and a long wait</h2>
          <p>
            The first teaser came out on <strong>23 June 2026</strong>. It was reported to be around two minutes long and showed Shraddha as Vithabai. It also reached the internet early: reports said it was shown in theatres before a film screening and then leaked online, after which the makers released it officially.
          </p>
          <p>
            Fans were also talking about a teaser moment linked to Vithabai performing while nine months pregnant. Shraddha’s last big-screen release was <em>Stree 2</em> in 2024, so this is her comeback to cinemas, and she is working with Dinesh Vijan again after the <em>Stree</em> films.
          </p>

          <h2>What to expect</h2>
          <p>
            <em>Eetha</em> looks like a big, colourful period drama that puts Maharashtra’s folk art front and centre. With Utekar directing and Ajay-Atul on music, the Lavani numbers could be a major highlight. We will find out on <strong>4 December 2026</strong>.
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
              "Eetha Trailer",
              "Shraddha Kapoor",
              "Vithabai Narayangaonkar",
              "Eetha Release Date",
              "Eetha Cast",
              "Laxman Utekar",
              "Dinesh Vijan",
              "Maddock Films",
              "Ajay Atul",
              "Randeep Hooda",
              "Lavani",
              "Tamasha",
              "Bollywood",
              "Movies",
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
              href="/movies"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Browse All Movies →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
