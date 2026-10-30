import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Ramayana Advance Booking: US Sales Jump 27%",
  description:
    "Ramayana Part One is getting stronger bookings in the US after its LA premiere. Here are the booking numbers, the early reactions and the release date.",
  keywords: [
    "Ramayana advance booking",
    "Ramayana Part One",
    "Ranbir Kapoor Ramayana",
    "Ramayana box office",
    "Ramayana US premiere",
    "Yash Ravana",
    "Sai Pallavi Sita",
    "Nitesh Tiwari",
    "Ramayana ticket sales",
    "Animal US premiere box office",
    "Dhurandhar The Revenge record",
    "IMAX Ramayana",
    "Bollywood box office 2026",
  ],
  openGraph: {
    title: "Ramayana Advance Booking: US Sales Jump 27%",
    description:
      "Ramayana Part One is getting stronger bookings in the US after its LA premiere. Here are the booking numbers, the early reactions and the release date.",
    url: "https://www.buzzoriginals.com/ramayana-advance-booking-us-jump-la-premiere",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ramayana-advance-booking-us-jump-la-premiere.jpg",
        width: 1024,
        height: 576,
        alt: "Ramayana Advance Booking: US Sales Jump 27% After LA Premiere",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T19:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramayana Advance Booking: US Sales Jump 27%",
    description:
      "Ramayana Part One is getting stronger bookings in the US after its LA premiere. Here are the booking numbers, the early reactions and the release date.",
    images: ["/images/ramayana-advance-booking-us-jump-la-premiere.jpg"],
  },
  alternates: {
    canonical: "/ramayana-advance-booking-us-jump-la-premiere",
  },
};

export default function RamayanaAdvanceBookingPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/ramayana-advance-booking-us-jump-la-premiere";
  const pageTitle =
    "Ramayana Advance Booking: US Sales Jump 27% After LA Premiere";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/ramayana-advance-booking-us-jump-la-premiere.jpg",
    ],
    datePublished: "2026-10-30T19:45:00+05:30",
    dateModified: "2026-10-30T19:45:00+05:30",
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
      "Ramayana Part One is getting stronger bookings in the US after its LA premiere. Here are the booking numbers, the early reactions and the release date.",
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
        name: "Ramayana Advance Booking",
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
          <span style={{ color: "var(--lavender)" }}>RAMAYANA BOX OFFICE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">📈 Box Office Spike</span>
            <span className="badge pink">Bollywood &amp; Movies</span>
            <span className="badge">Ranbir Kapoor &amp; Yash</span>
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
              <span>BOX OFFICE BUREAU</span>
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
            src="/images/ramayana-advance-booking-us-jump-la-premiere.jpg"
            alt="Ramayana Advance Booking: US Sales Jump 27% After LA Premiere"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Nitesh Tiwari&apos;s &apos;Ramayana: Part One&apos; witnesses a massive 27% spike in US advance ticket sales following its starry Los Angeles world premiere. (Photo: Red Carpet / Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Ramayana: Part One</strong> is picking up speed before release. After the film’s world premiere in Los Angeles, US ticket sales jumped sharply. At home, advance bookings in India have also crossed <strong>₹15 crore</strong>.
          </p>

          <h2>Quick Look</h2>
          <ul>
            <li>
              <strong>Film:</strong> Ramayana: Part One
            </li>
            <li>
              <strong>Cast:</strong> Ranbir Kapoor, Yash, Sai Pallavi
            </li>
            <li>
              <strong>Director:</strong> Nitesh Tiwari
            </li>
            <li>
              <strong>Release date:</strong> November 5, 2026
            </li>
            <li>
              <strong>US advance booking:</strong> Around $800,000 for premiere shows
            </li>
            <li>
              <strong>India advance booking:</strong> Over ₹15 crore
            </li>
          </ul>

          <h2>US Bookings Rise 27% in One Day</h2>
          <p>
            US premiere sales reportedly went from about $631,000 to $800,000 in just 24 hours, a rise of nearly <strong>27%</strong>. The jump came right after the film’s premiere in Los Angeles on October 27. The premiere was held at the Academy Museum of Motion Pictures. Ranbir Kapoor, Yash and Sai Pallavi were there, and good reactions from viewers spread online soon after.
          </p>
          <p>
            This also puts the film close to a big Hindi film milestone. <em>Animal</em> earned about $1 million from US premiere shows, and <em>Ramayana</em> is now not far from that number.
          </p>

          <h2>What Viewers Are Saying After the LA Screening</h2>
          <p>
            Early reactions have been mostly positive. Viewers praised the film’s grounded storytelling and the huge scale of its visual effects. Yash’s look and performance as Ravana have got a lot of attention too. Reports from the event also mention a strong music score and big world-building.
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi Steal the Red Carpet →
              </Link>
            </p>
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

          <h2>India Booking Crosses ₹15 Crore</h2>
          <p>
            In India, the film has built its numbers slowly and steadily. It has 6,472 shows listed, and bookings are growing in Hindi, Kannada and Telugu. Bookings in India opened on Dussehra, October 20.
          </p>
          <p>
            Premium screens are helping a lot. IMAX, 4DX, Dolby and other premium formats make up around <strong>27%</strong> of the earnings, even though they have only a small share of total shows.
          </p>

          <h2>Overseas Numbers Are Also Growing</h2>
          <p>
            Overseas bookings have reportedly gone above <strong>$2.5 million</strong> after the LA premiere. The film is trying to beat the North American advance sales record held by <em>Dhurandhar: The Revenge</em>, at $4 million. Trackers say it is not there yet, so this is something to watch.
          </p>

          <h2>Release Date and Part 2</h2>
          <p>
            <em>Ramayana: Part One</em> releases worldwide on <strong>November 5, 2026</strong>. Part Two is planned for Diwali 2027. Paid premiere shows in India are planned for November 4, one day before release.
          </p>

          <h2>Will It Open Big?</h2>
          <p>
            Booking is a good sign, but it does not tell us the final box office. Numbers can change fast in the last few days before release, and word of mouth will matter. For now, the film has strong buzz, good early reactions and rising ticket sales on both sides of the world.
          </p>
          <p>
            Stay with <strong>Buzz Originals</strong> for more Ramayana updates, box office numbers and Bollywood news.
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
              "Ramayana Advance Booking",
              "Ramayana Part One",
              "Ranbir Kapoor",
              "Yash",
              "Sai Pallavi",
              "Nitesh Tiwari",
              "Ramayana Box Office",
              "Ramayana US Premiere",
              "IMAX Ramayana",
              "Bollywood",
              "Movies",
              "News",
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
