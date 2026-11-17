import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Godzilla Minus Zero Release Date in India: Nov 20 (IMAX) | Buzz Originals",
  description:
    "Godzilla Minus Zero will release in Indian cinemas on November 20, including IMAX screens. Here’s what PVR INOX confirmed and why fans waited.",
  keywords: [
    "Godzilla Minus Zero India release date",
    "Godzilla Minus Zero delayed",
    "Ramayana IMAX",
    "Ramayana vs Godzilla",
    "Godzilla Minus Zero IMAX release date",
    "PVR INOX Pictures",
    "IMAX India",
    "The Hunger Games Sunrise on the Reaping IMAX",
    "Godzilla Minus One Oscar",
    "Bollywood News",
    "Cinema Box Office",
  ],
  alternates: {
    canonical: "/godzilla-minus-zero-india-release-delayed-ramayana",
  },
  openGraph: {
    title: "Godzilla Minus Zero Release Date in India: Nov 20 (IMAX) | Buzz Originals",
    description:
      "Godzilla Minus Zero will release in Indian cinemas on November 20, including IMAX screens. Here’s what PVR INOX confirmed and why fans waited.",
    url: "https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
        width: 1024,
        height: 576,
        alt: "Godzilla Minus Zero Release Date in India: Nov 20 (IMAX)",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Godzilla Minus Zero Release Date in India: Nov 20 (IMAX)",
    description:
      "Godzilla Minus Zero will release in Indian cinemas on November 20, including IMAX screens. Here’s what PVR INOX confirmed and why fans waited.",
    images: ["/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"],
  },
};

export default function GodzillaArticlePage() {
  const pageUrl = "https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana";
  const pageTitle = "Godzilla Minus Zero Finally Has an India Release Date: November 20, IMAX Confirmed";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    ],
    datePublished: "2026-10-27T21:00:00+05:30",
    dateModified: "2026-11-17T08:30:00+05:30",
    author: [
      {
        "@type": "Organization",
        name: "Buzz Originals Entertainment Desk",
        url: "https://www.buzzoriginals.com/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Buzz Originals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/images/logo.png",
      },
    },
    description:
      "Godzilla Minus Zero will release in Indian cinemas on November 20, including IMAX screens. Here’s what PVR INOX confirmed and why fans waited.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: [
      "Godzilla Minus Zero India release date",
      "Godzilla Minus Zero delayed",
      "Ramayana IMAX",
      "Ramayana vs Godzilla",
      "IMAX India",
      "PVR INOX Pictures",
      "Hunger Games",
      "Box Office",
    ],
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
        name: "Godzilla Minus Zero India Release Date",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-mono text-xs text-[var(--mist)] uppercase tracking-wider mb-6"
        >
          <Link href="/" className="hover:text-[var(--lime)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/movies" className="hover:text-[var(--lime)] transition-colors">
            Movies
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">Godzilla Minus Zero India Date</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ IMAX RELEASE CONFIRMED</span>
          <span className="badge pink">Nov 20 Premiere</span>
          <span className="badge">Godzilla Minus Zero</span>
          <span className="badge">PVR INOX</span>
          <span className="badge">IMAX India</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          {pageTitle}
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-17">Updated November 17, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">CINEMA &amp; IMAX SCOOP</span>
        </div>

        {/* Featured Hero Thumbnail */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
            alt="Godzilla Minus Zero Release Date in India: Nov 20 (IMAX)"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          PVR INOX Pictures confirms Godzilla Minus Zero will release in Indian cinemas and IMAX screens on November 20, 2026. (Photo: Buzz Originals / PVR INOX Pictures)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Godzilla%20Minus%20Zero%20India%20Release%20Date%20Confirmed%20-%20https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Godzilla%20Minus%20Zero%20India%20Release%20Date%20Confirmed&url=https://www.buzzoriginals.com/godzilla-minus-zero-india-release-delayed-ramayana"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            X Post
          </a>
        </div>

        {/* Key Takeaways Box */}
        <div
          style={{
            background: "rgba(223, 255, 0, 0.04)",
            border: "1px solid rgba(223, 255, 0, 0.25)",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>⚡</span>
            <span>Godzilla Minus Zero India Release: Key Takeaways</span>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            <li>
              <strong>Release Date Locked:</strong> PVR INOX Pictures has officially confirmed that <em>Godzilla Minus Zero</em> will hit Indian theatres on <strong>November 20, 2026</strong>.
            </li>
            <li>
              <strong>IMAX Experience Confirmed:</strong> Nayana Bijli of PVR INOX verified that the film—which was filmed for IMAX—will receive a dedicated IMAX rollout in India.
            </li>
            <li>
              <strong>Ramayana Window Completed:</strong> The film was held back to allow <em>Ramayana: Part 1</em> its full two-week exclusivity window across India&apos;s 35 IMAX auditoriums.
            </li>
            <li>
              <strong>November 20 IMAX Clash:</strong> The movie arrives on the same day as <em>The Hunger Games: Sunrise on the Reaping</em>, setting up a clash for premium screens.
            </li>
            <li>
              <strong>First Theatrical Run for the Franchise:</strong> Oscar-winning predecessor <em>Godzilla Minus One</em> skipped Indian cinemas, making this big-screen IMAX debut a monumental event for fans.
            </li>
          </ul>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The wait is over. <strong>Godzilla Minus Zero</strong> will release in India on <strong>November 20, 2026</strong>. PVR INOX Pictures, the film’s Indian distributor, has confirmed the date. It will also play in IMAX.
          </p>

          <h2>What’s Confirmed</h2>
          <p>
            Nayana Bijli, who leads distribution and content acquisition at PVR INOX Pictures, told <em>Bollywood Hungama</em> the film is set for November 20. She also confirmed it will get an IMAX release in India.
          </p>
          <p>
            This ends weeks of guessing. On October 27, PVR INOX Pictures shared the film’s Indian poster with a “Filmed for IMAX” tag but no date. Fans have been asking about the release on social media ever since. Bijli said the team had seen those comments, and her answer was that it’s “coming soon.”
          </p>

          <h2>Why the Earlier Delay?</h2>
          <p>
            We earlier reported that the film’s India release had moved back by about two weeks. The reason was IMAX screens. <strong>Ramayana: Part 1</strong>—starring Ranbir Kapoor, Sai Pallavi, Yash, and Ravi Dubey—has a two-week exclusive run across all 35 IMAX screens in India. That run ends right before November 20, which is why the date made sense.
          </p>
          <p>
            With Ramayana commanding 100% of the country’s premium large-format screens for Diwali, distributors opted to hold Godzilla until that exclusive window ended, ensuring the monster blockbuster can now enjoy proper IMAX showtimes.
          </p>

          <h2>Another Big IMAX Release the Same Day</h2>
          <p>
            Godzilla isn’t the only big film arriving on November 20. <strong>The Hunger Games: Sunrise on the Reaping</strong> also opens that day, and it will get an IMAX release too.
          </p>
          <p>
            Expect a tough fight for premium screens across India’s limited IMAX footprint. If watching Godzilla on the giant screen is your plan, booking early when advance tickets open will be essential.
          </p>

          <h2>Why Indian Fans Care So Much</h2>
          <p>
            The first film, <em>Godzilla Minus One</em>, won the Oscar for Best Visual Effects. Indian viewers never got it in theatres and had to watch it on OTT. This time the film is coming to the big screen, and it was shot for IMAX.
          </p>
          <p>
            Seeing the atomic breath and visceral destruction on a massive IMAX canvas is an experience Indian sci-fi enthusiasts have been waiting years to enjoy.
          </p>

          <h2>More from PVR INOX Pictures</h2>
          <p>
            Bijli said it’s a packed November and December for the distributor. Other releases include <em>I Play Rocky</em>, <em>Wildwood</em>, <em>Victorian Psycho</em>, <em>Above The Below</em>, and <em>Eetha</em>.
          </p>

          <p style={{ marginTop: "24px", fontStyle: "italic", color: "var(--mist)" }}>
            Source: Bollywood Hungama
          </p>

          {/* Related Stories */}
          <div
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--lime)",
                marginBottom: "16px",
                fontFamily: "var(--font-anton)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Related Cinema &amp; Box Office Stories on Buzz Originals
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "15px",
              }}
            >
              <li>
                <Link
                  href="/the-vvaan-2-announced-ektaa-kapoor-chhath"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → The Vvaan 2 Is Official: Ektaa Kapoor Announces Sequel on Chhath
                </Link>
              </li>
              <li>
                <Link
                  href="/ramayana-advance-booking-73-crore-ranbir-kapoor"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ramayana Part 1 Records Massive ₹73 Crore Advance Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sunny Deol’s Suryaa: Ant Se Aarambh Tak Postponed to 2027 After IMA Objection
                </Link>
              </li>
              <li>
                <Link
                  href="/drishyam-3-ott-release-date-netflix"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Drishyam 3 OTT Release Date: When Will Ajay Devgn’s Film Come to Netflix?
                </Link>
              </li>
            </ul>
          </div>

          {/* Tags & Keywords */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
            <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
            {[
              "GodzillaMinusZero",
              "IMAXIndia",
              "PVRINOXPictures",
              "HungerGames",
              "BoxOffice",
              "RamayanaMovie",
              "RanbirKapoor",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[var(--paper)] border border-white/[0.08]"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Navigation & Back to Home */}
          <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <Link
              href="/movies"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--lime)",
                textDecoration: "none",
              }}
            >
              ← Back to Movies Hub
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
