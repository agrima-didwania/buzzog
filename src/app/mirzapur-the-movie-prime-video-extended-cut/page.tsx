import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Mirzapur: The Movie Now Streaming on Prime With Extended Cut | Buzz Originals",
  description:
    "Mirzapur: The Movie is now on Prime Video with an extended cut and unseen scenes. Check the runtime, cast, language and how to watch.",
  keywords: [
    "Mirzapur The Movie OTT release",
    "Mirzapur The Movie extended cut",
    "Mirzapur The Movie Prime Video",
    "Pankaj Tripathi",
    "Ali Fazal",
    "Divyenndu Munna Tripathi",
    "Mirzapur movie runtime",
    "Mirzapur movie streaming date",
    "Kaleen Bhaiya",
    "Guddu Pandit",
    "Excel Entertainment",
    "Prime Video India",
    "Bollywood web series",
  ],
  openGraph: {
    title: "Mirzapur: The Movie Now Streaming on Prime With Extended Cut",
    description:
      "Mirzapur: The Movie is now on Prime Video with an extended cut and unseen scenes. Check the runtime, cast, language and how to watch.",
    url: "https://www.buzzoriginals.com/mirzapur-the-movie-prime-video-extended-cut",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/mirzapur-the-movie-prime-video-extended-cut.jpg",
        width: 1024,
        height: 682,
        alt: "Mirzapur: The Movie Now Streaming on Prime With Extended Cut",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T13:30:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirzapur: The Movie Now Streaming on Prime With Extended Cut",
    description:
      "Mirzapur: The Movie is now on Prime Video with an extended cut and unseen scenes. Check the runtime, cast, language and how to watch.",
    images: ["/images/mirzapur-the-movie-prime-video-extended-cut.jpg"],
  },
  alternates: {
    canonical: "/mirzapur-the-movie-prime-video-extended-cut",
  },
};

export default function MirzapurMovieArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/mirzapur-the-movie-prime-video-extended-cut";
  const pageTitle =
    "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/mirzapur-the-movie-prime-video-extended-cut.jpg",
    ],
    datePublished: "2026-10-30T13:35:00+05:30",
    dateModified: "2026-10-30T13:35:00+05:30",
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
      "Mirzapur: The Movie is now on Prime Video with an extended cut and unseen scenes. Check the runtime, cast, language and how to watch.",
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
        name: "Web Series",
        item: "https://www.buzzoriginals.com/web-series",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Mirzapur The Movie OTT",
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
      <Header activeNav="Web Series" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <Link href="/web-series">WEB SERIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>MIRZAPUR THE MOVIE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Cover Story</span>
            <span className="badge">Prime Video</span>
            <span className="badge lime">Extended Cut</span>
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
              <span>OTT &amp; CINEMA BUREAU</span>
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
            src="/images/mirzapur-the-movie-prime-video-extended-cut.jpg"
            alt="Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            💥 Kaleen Bhaiya, Guddu Pandit, and Munna Tripathi return in Mirzapur: The Movie — now streaming on Prime Video with an extended cut.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Missed Kaleen Bhaiya on the big screen? Now you can watch him at home. <strong>Mirzapur: The Movie</strong> is streaming on <strong>Prime Video</strong> from October 30, 2026, and it comes with an extended cut that has scenes you did not see in cinemas.
          </p>

          <div className="article-quote-box">
            <p>
              <strong>Quick Update:</strong> <em>Mirzapur: The Movie</em> is officially streaming on Prime Video starting October 30, 2026. The OTT edition features an extended cut running 3 hours 31 minutes — packing approximately 14 minutes of unseen footage.
            </p>
            <span style={{ fontSize: "12px", color: "var(--lavender)", marginTop: "8px", display: "block" }}>
              — Buzz Originals OTT Desk
            </span>
          </div>

          <h2>What Is New in the OTT Version?</h2>
          <p>
            The Prime Video version is not the same as the theatre one. It has extra scenes that were not part of the theatrical release.
          </p>
          <p>
            Prime Video shared the news on Instagram with this line:
          </p>
          <div className="article-quote-box">
            <p>
              &ldquo;Bhaukaal aa chuka hai #MirzapurTheMovieOnPrime, Watch Now.&rdquo;
            </p>
          </div>
          <p>
            <strong>Runtime:</strong> The theatre version was about 3 hours 17 minutes long. Some entertainment sites say the extended cut runs 3 hours 31 minutes, which is about 14 minutes more.
          </p>

          <h2>Where and How to Watch</h2>
          <ul>
            <li>
              <strong>Platform:</strong> Prime Video (you need an active subscription)
            </li>
            <li>
              <strong>Language:</strong> Hindi, with English subtitles
            </li>
            <li>
              <strong>Where:</strong> India and more than 240 countries and territories worldwide
            </li>
            <li>
              <strong>Date:</strong> October 30, 2026, exactly eight weeks after the film opened in cinemas on September 4, 2026
            </li>
          </ul>

          <p>
            Follow us on Instagram for the latest updates:{" "}
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Buzz Originals
            </a>
          </p>

          <h2>What Is the Story About?</h2>
          <p>
            The film is an interquel, which means it happens during the timeline of Season 1. So it does not continue after Season 3. It tells a new story from the early days of the Mirzapur world.
          </p>
          <p>
            The fight for the Mirzapur throne also moves out of the city and into the desert. If you have not watched the series, you can still enjoy the film. But if you want to know the characters better, all three seasons are also on Prime Video.
          </p>

          <h2>Who Is in the Cast?</h2>
          <p>The main faces are back:</p>
          <ul>
            <li>
              <strong>Pankaj Tripathi</strong> as Akhandanand &ldquo;Kaleen&rdquo; Tripathi
            </li>
            <li>
              <strong>Ali Fazal</strong> as Govind &ldquo;Guddu&rdquo; Pandit
            </li>
            <li>
              <strong>Divyenndu</strong> as Phoolchand &ldquo;Munna&rdquo; Tripathi
            </li>
          </ul>
          <p>
            The film also stars Jitendra Kumar, Ravi Kishan, Rasika Dugal, Shweta Tripathi, Shriya Pilgaonkar, Harshita Gaur, Sheeba Chadha, Rajesh Tailang and Abhishek Banerjee.
          </p>
          <p>
            It is directed by <strong>Gurmmeet Singh</strong> and produced by <strong>Ritesh Sidhwani</strong> and <strong>Farhan Akhtar</strong> under Excel Entertainment. The film has an &lsquo;A&rsquo; certificate from the CBFC.
          </p>

          <h2>How Did It Do in Theatres?</h2>
          <p>
            The film was a big hit. As per reports, it earned around <strong>₹336 crore</strong> worldwide. The long runtime did get some criticism. A few reviewers said it felt slow in the desert part.
          </p>

          <h2>Should You Watch It?</h2>
          <p>
            If you loved the series, yes. The extended cut gives fans a little more of the world they already love. And now you can pause and watch it in parts, which helps with a 3.5 hour film!
          </p>

          <h2>Quick Facts: Mirzapur: The Movie</h2>
          <ul>
            <li>
              <strong>Streaming from:</strong> October 30, 2026
            </li>
            <li>
              <strong>Platform:</strong> Prime Video
            </li>
            <li>
              <strong>Version:</strong> Extended cut (with unseen scenes)
            </li>
            <li>
              <strong>Theatrical release:</strong> September 4, 2026
            </li>
            <li>
              <strong>Language:</strong> Hindi (English subtitles)
            </li>
          </ul>

          <p>
            Stay tuned to Buzz Originals for more Bollywood and web series updates.
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
              "Mirzapur The Movie",
              "Mirzapur OTT Release",
              "Mirzapur Extended Cut",
              "Prime Video",
              "Pankaj Tripathi",
              "Ali Fazal",
              "Divyenndu",
              "Kaleen Bhaiya",
              "Guddu Pandit",
              "Munna Tripathi",
              "Web Series",
              "Bollywood",
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
              href="/web-series"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Browse All Web Series →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
