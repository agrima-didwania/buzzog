import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Parivarik ManuRanjan OTT Release Date: Sony LIV",
  description:
    "Parivarik ManuRanjan starring Pankaj Tripathi and Aditi Rao Hydari premieres on Sony LIV on November 13. Know the story, cast, director and more.",
  keywords: [
    "Parivarik ManuRanjan OTT release date",
    "Parivarik ManuRanjan Sony LIV",
    "Parivarik ManuRanjan cast",
    "Parivarik ManuRanjan story",
    "Parivarik ManuRanjan teaser",
    "Pankaj Tripathi new movie",
    "Aditi Rao Hydari new movie",
    "Varun V Sharma",
    "Bhanushali Studios",
    "AAZ Films",
    "Bollywood OTT release",
    "Sony LIV original film",
  ],
  openGraph: {
    title: "Parivarik ManuRanjan OTT Release Date: Sony LIV",
    description:
      "Parivarik ManuRanjan starring Pankaj Tripathi and Aditi Rao Hydari premieres on Sony LIV on November 13. Know the story, cast, director and more.",
    url: "https://www.buzzoriginals.com/parivarik-manuranjan-ott-release-date-sony-liv",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg",
        width: 1024,
        height: 682,
        alt: "Parivarik ManuRanjan OTT Release Date on Sony LIV",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T20:05:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parivarik ManuRanjan OTT Release Date: Sony LIV",
    description:
      "Parivarik ManuRanjan starring Pankaj Tripathi and Aditi Rao Hydari premieres on Sony LIV on November 13. Know the story, cast, director and more.",
    images: ["/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg"],
  },
  alternates: {
    canonical: "/parivarik-manuranjan-ott-release-date-sony-liv",
  },
};

export default function ParivarikManuranjanPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/parivarik-manuranjan-ott-release-date-sony-liv";
  const pageTitle =
    "Parivarik ManuRanjan Release Date: Pankaj Tripathi and Aditi Rao Hydari’s Film Is Coming to Sony LIV";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg",
    ],
    datePublished: "2026-10-30T20:05:00+05:30",
    dateModified: "2026-10-30T20:05:00+05:30",
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
      "Parivarik ManuRanjan starring Pankaj Tripathi and Aditi Rao Hydari premieres on Sony LIV on November 13. Know the story, cast, director and more.",
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
        name: "Movies",
        item: "https://www.buzzoriginals.com/movies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Parivarik ManuRanjan OTT Release Date",
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
      <Header activeNav="Movies" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/movies">MOVIES</Link>
          <span>/</span>
          <Link href="/bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>PARIVARIK MANURANJAN OTT</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">📺 OTT Premiere</span>
            <span className="badge pink">Movies &amp; Bollywood</span>
            <span className="badge">Sony LIV Original</span>
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
              <span>OTT &amp; RELEASES BUREAU</span>
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
            src="/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg"
            alt="Parivarik ManuRanjan OTT Release Date on Sony LIV starring Pankaj Tripathi and Aditi Rao Hydari"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Pankaj Tripathi and Aditi Rao Hydari star together for the first time in &apos;Parivarik ManuRanjan&apos;, premiering November 13 on Sony LIV. (Photo: Sony LIV / Bhanushali Studios)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Pankaj Tripathi</strong> and <strong>Aditi Rao Hydari</strong> are coming together for the first time, and the wait is almost over. Their film <em>Parivarik ManuRanjan</em> will premiere on <strong>Sony LIV</strong> on <strong>November 13</strong>. It will not release in theatres. It goes straight to OTT.
          </p>

          <h2>When and Where to Watch Parivarik ManuRanjan</h2>
          <ul>
            <li>
              <strong>Release date:</strong> November 13, 2026
            </li>
            <li>
              <strong>Platform:</strong> Sony LIV
            </li>
            <li>
              <strong>Type:</strong> Sony LIV original film (Direct-to-digital release)
            </li>
            <li>
              <strong>Genre:</strong> Family romantic comedy
            </li>
          </ul>

          <p>
            Earlier, the makers had only said the film would come in November. Now the exact premiere date is officially confirmed.
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

          <h2>What Is Parivarik ManuRanjan About?</h2>
          <p>
            The film is a light and warm family love story. The makers describe it as a mix of romance, humour and family drama.
          </p>
          <p>
            The teaser gives us a small peek into the premise. <strong>Aditi Rao Hydari</strong> plays Helen, who comes from Delhi to Ranjan Dubey’s home to work as a property manager and housekeeper. <strong>Pankaj Tripathi</strong> plays Ranjan Dubey, who is unmarried and lives alone. From here, an unusual and delightful love story begins.
          </p>
          <p>
            Sony LIV shared the teaser with a fun tagline: <em>“Pyaar Manu aur Ranjan ka, bana manuranjan sabhi ka.”</em>
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/mirzapur-the-movie-prime-video-extended-cut"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Mirzapur: The Movie Now Streaming on Prime Video With Extended Cut →
              </Link>
            </p>
          </div>

          <h2>Cast and Crew</h2>
          <ul>
            <li>
              <strong>Lead actors:</strong> Pankaj Tripathi and Aditi Rao Hydari
            </li>
            <li>
              <strong>Director:</strong> Varun V. Sharma, who earlier directed <em>Bunty Aur Babli 2</em>
            </li>
            <li>
              <strong>Producers:</strong> Vinod Bhanushali, Himanshu Kishan Mehra, Kamlesh Bhanushali and Alicia Zafar
            </li>
            <li>
              <strong>Production houses:</strong> Bhanushali Studios and AAZ Films
            </li>
          </ul>
          <p>
            This film also marks the first joint collaboration between Bhanushali Studios and AAZ Films.
          </p>

          <h2>Shooting Details</h2>
          <p>
            Filming began in Lucknow in June 2025. The story is firmly set in the Hindi heartland, and the creative team wanted the film to feel authentic, grounded, and close to home.
          </p>

          <h2>What the Stars Said</h2>
          <p>
            Aditi Rao Hydari recently spoke about sharing screen space with Pankaj Tripathi. She called his sense of humour <em>“effortless &amp; natural.”</em>
          </p>
          <p>
            Pankaj had earlier praised the script, describing it as a <em>“very beautiful story.”</em> He warmly compared its narrative style to the gentle, family-friendly cinema of legendary filmmaker Hrishikesh Mukherjee.
          </p>
          <p>
            Director Varun V. Sharma has also voiced his affection for the project, noting that the film is <em>“close to my heart.”</em>
          </p>

          <h2>Why This Film Is Getting Attention</h2>
          <ul>
            <li>
              <strong>A fresh pairing:</strong> Pankaj Tripathi and Aditi Rao Hydari have never worked together before, making their chemistry an exciting prospect for fans.
            </li>
            <li>
              <strong>A family-friendly story:</strong> Clean, funny films that the whole family can sit together and watch are rare in today&apos;s OTT space.
            </li>
            <li>
              <strong>Pankaj’s impeccable comic timing:</strong> Audiences love seeing Pankaj in warm, humorous, and relatable roles.
            </li>
          </ul>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for upcoming trailers, soundtrack drops, and more OTT release updates.
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
              "Pankaj Tripathi",
              "Aditi Rao Hydari",
              "Sony LIV",
              "OTT Releases",
              "Bollywood News",
              "Parivarik ManuRanjan",
              "Movies",
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
              href="/movies"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to All Movies
            </Link>
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
              Browse All Bollywood Buzz →
            </Link>
            <Link
              href="/news"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              The News Desk →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
