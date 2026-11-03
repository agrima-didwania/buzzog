import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Ramayana Advance Booking: Film Hits Rs 73.40 Crore",
  description:
    "Ramayana: Part One has earned Rs 73.40 crore in advance bookings in India. See ticket numbers, Hindi 3D sales, overseas numbers and release date.",
  keywords: [
    "Ramayana advance booking",
    "Ramayana advance booking collection",
    "Ranbir Kapoor Ramayana",
    "Ramayana Part One release date",
    "Ramayana box office prediction",
    "Ramayana day 1 box office collection",
    "Ramayana advance booking 73 crore",
    "Ramayana tickets sold",
    "Ramayana Hindi 3D advance booking",
    "Ramayana overseas advance booking",
    "Ramayana worldwide advance booking",
    "Ramayana release date 5 November",
    "Nitesh Tiwari Ramayana",
    "Yash Ravana",
    "Sai Pallavi Sita",
    "Sunny Deol Hanuman",
    "Bollywood box office news",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Ramayana Advance Booking: Film Hits Rs 73.40 Crore",
    description:
      "Ramayana: Part One has earned Rs 73.40 crore in advance bookings in India. See ticket numbers, Hindi 3D sales, overseas numbers and release date.",
    url: "https://www.buzzoriginals.com/ramayana-advance-booking-73-crore-ranbir-kapoor",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ramayana-advance-booking-73-crore-ranbir-kapoor.jpg",
        width: 1024,
        height: 576,
        alt: "Ramayana Advance Booking Crosses Rs 73.40 Crore - Ranbir Kapoor, Sai Pallavi, Ravie Dubey",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T12:45:00.000Z",
    authors: ["Buzz Originals Box Office Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramayana Advance Booking: Film Hits Rs 73.40 Crore",
    description:
      "Ramayana: Part One has earned Rs 73.40 crore in advance bookings in India. See ticket numbers, Hindi 3D sales, overseas numbers and release date.",
    images: ["/images/ramayana-advance-booking-73-crore-ranbir-kapoor.jpg"],
  },
  alternates: {
    canonical: "/ramayana-advance-booking-73-crore-ranbir-kapoor",
  },
};

export default function RamayanaAdvanceBooking73CrorePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/ramayana-advance-booking-73-crore-ranbir-kapoor";
  const pageTitle =
    "Ramayana Advance Booking: Ranbir Kapoor’s Film Crosses Rs 73.40 Crore Before Release";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/ramayana-advance-booking-73-crore-ranbir-kapoor.jpg",
    ],
    datePublished: "2026-11-03T12:45:00+05:30",
    dateModified: "2026-11-03T12:45:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Box Office Desk",
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
      "Ramayana: Part One has earned Rs 73.40 crore in advance bookings in India. See ticket numbers, Hindi 3D sales, overseas numbers and release date.",
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
        name: "Ramayana Advance Booking Rs 73.40 Crore",
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
          <span style={{ color: "var(--lavender)" }}>RAMAYANA ADVANCE BOOKING</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🎟️ ₹73.40 Cr Advance</span>
            <span className="badge pink">Box Office Record</span>
            <span className="badge">Ramayana</span>
          </div>

          <h1 className="article-title">
            Ramayana Advance Booking: Ranbir Kapoor’s Film Crosses Rs 73.40 Crore Before Release
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Box Office Desk</span>
            <span>·</span>
            <time dateTime="2026-11-03">November 3, 2026</time>
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
              src="/images/ramayana-advance-booking-73-crore-ranbir-kapoor.jpg"
              alt="Ramayana Advance Booking Crosses Rs 73.40 Crore - Ranbir Kapoor, Sai Pallavi, Ravie Dubey"
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
            Nitesh Tiwari’s mythological epic Ramayana: Part One starring Ranbir Kapoor, Sai Pallavi, and Ravie Dubey shatters advance booking records with ₹73.40 crore ahead of its 5 November release. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Ramayana Advance Booking: Ranbir Kapoor’s Film Crosses Rs 73.40 Crore Before Release"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Ranbir Kapoor’s <strong>Ramayana: Part One</strong> is already making seismic noise across the Indian box office, and the film has not even hit theatres yet. In India alone, advance bookings have crossed a staggering <strong>Rs 73.40 crore</strong> ahead of its grand worldwide release on <strong>5 November 2026</strong>.
          </p>

          <p>
            With massive national euphoria and unprecedented single-screen and multiplex demand across five Indian languages, the mythological spectacle is gearing up to challenge the highest opening-day records in Indian cinema history.
          </p>

          <h2>How Big Are the Numbers? A Complete Breakdown</h2>
          <p>
            The pan-India ticket pre-sales for Day 1 and opening weekend demonstrate an extraordinary wave of moviegoer excitement:
          </p>

          {/* Key Metrics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
              margin: "24px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)" }}>
                TOTAL PRE-SALES (INDIA)
              </span>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", marginTop: "4px" }}>
                ₹73.40 Crore
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--magenta)" }}>
                TICKETS SOLD
              </span>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", marginTop: "4px" }}>
                ~18.67 Lakh
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)" }}>
                SHOWS BOOKED
              </span>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", marginTop: "4px" }}>
                60,000+ Shows
              </div>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--magenta)" }}>
                LANGUAGES
              </span>
              <div style={{ fontSize: "24px", fontWeight: "bold", color: "#fff", marginTop: "4px" }}>
                5 Languages
              </div>
            </div>
          </div>

          <p>
            This <strong>Rs 73.40 crore</strong> figure includes block bookings—seats bought in bulk by corporate groups, devotee associations, and special community screenings. Even if block bookings are excluded, the organic pre-sales sit comfortably around <strong>Rs 58.57 crore</strong>. Both numbers represent historic pre-release milestones for any Indian cinematic project.
          </p>

          <h2>Hindi Version Is Leading the Charge: 3D Craze Unleashed</h2>
          <p>
            The Hindi version is doing the heavy lifting in national ticket reservations, contributing approximately <strong>78%</strong> of the total advance sales.
          </p>
          <p>
            Crucially, the <strong>Hindi 3D format</strong> alone has registered an astonishing <strong>Rs 14.47 crore</strong> in day-one pre-sales. Audiences are overwhelmingly opting for premium immersive formats including IMAX 3D, 4DX, and Dolby Cinema to witness Nitesh Tiwari’s visual grand scale.
          </p>

          {/* Quick Context Block */}
          <div
            style={{
              margin: "28px 0",
              padding: "20px 24px",
              background: "rgba(255, 46, 147, 0.06)",
              border: "1px solid rgba(255, 46, 147, 0.25)",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                margin: "0 0 10px 0",
                fontSize: "15px",
                fontFamily: "var(--font-space-mono)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "var(--magenta)",
              }}
            >
              Also Read on Buzz Originals
            </h3>
            <p style={{ margin: 0, fontSize: "15px" }}>
              Inside the global debut:{" "}
              <Link
                href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
              >
                Ramayana LA Premiere: Ranbir Kapoor, Yash &amp; Sai Pallavi Stun Hollywood
              </Link>{" "}
              and the{" "}
              <Link
                href="/ramayana-advance-booking-us-jump-la-premiere"
                style={{ color: "var(--lime)", textDecoration: "underline" }}
              >
                US Box Office Jump After Academy Museum Screening
              </Link>
              .
            </p>
          </div>

          <h2>What About Overseas? US Previews Surpass $1.5 Million</h2>
          <p>
            The international markets are echoing the same fervor:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li>Over <strong>51,000 tickets</strong> were sold across international territories specifically for paid preview screenings scheduled on <strong>4 November 2026</strong>.</li>
            <li>In North America (USA &amp; Canada), paid preview sales have officially crossed <strong>$1.5 million</strong> (~₹12.6 crore).</li>
            <li>Worldwide advance bookings—combining domestic India and international circuits—are now estimated at a staggering <strong>Rs 105 crore</strong>.</li>
          </ul>

          <h2>Which Cities and Circuits Are Booking the Most?</h2>
          <p>
            Regional tracking data reveals feverish booking patterns across major metropolitan centers:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li><strong>Delhi-NCR:</strong> Currently the top-performing circuit in the country, with multiple prime multiplexes reporting sold-out night shows for Day 1.</li>
            <li><strong>Mumbai &amp; Maharashtra:</strong> Maharashtra led initial booking phases and remains a powerhouse, with IMAX screens across Bandra, Lower Parel, and Thane running at near-total capacity.</li>
            <li><strong>South Territories:</strong> Bengaluru and Hyderabad are posting rapid sell-outs for Telugu and Kannada dubbed versions, supported by Yash’s tremendous star power.</li>
          </ul>

          <h2>Advance Bookings Had a Bumpy Start: The Standoff Resolved</h2>
          <p>
            While advance booking officially opened on <strong>20 October</strong>, the rollout was initially delayed. A revenue-sharing disagreement between film distributors and national multiplex chains slowed down showcase scheduling at several prominent theatre chains.
          </p>
          <p>
            However, distributors and exhibitors reached a swift consensus within 48 hours, unlocking over 60,000 shows nationwide and triggering the unprecedented buying rush seen today.
          </p>

          <h2>Cast, Crew &amp; Franchise Vision</h2>
          <p>
            Directed by National Award-winning filmmaker <strong>Nitesh Tiwari</strong> (<em>Dangal</em>, <em>Chhichhore</em>), the magnum opus features an ensemble of unprecedented scale:
          </p>

          {/* Cast Overview Table */}
          <div
            style={{
              margin: "24px 0",
              overflowX: "auto",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13.5px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.08)", color: "var(--lime)" }}>
                  <th style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Character
                  </th>
                  <th style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Cast Member
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Lord Rama</td>
                  <td style={{ padding: "10px 16px" }}>Ranbir Kapoor</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Lankesh / Ravana</td>
                  <td style={{ padding: "10px 16px" }}>Yash (K.G.F)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Mata Sita</td>
                  <td style={{ padding: "10px 16px" }}>Sai Pallavi</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Lord Lakshmana</td>
                  <td style={{ padding: "10px 16px" }}>Ravie Dubey</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Lord Hanuman</td>
                  <td style={{ padding: "10px 16px" }}>Sunny Deol</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Music &amp; Score</td>
                  <td style={{ padding: "10px 16px" }}>Hans Zimmer &amp; A.R. Rahman</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <em>Ramayana: Part One</em> is the opening chapter of a two-part cinematic saga mounted on an estimated budget exceeding ₹4,000 crore. The second installment is scheduled for a worldwide Diwali 2027 release.
          </p>

          <h2>Opening Day Box Office Predictions</h2>
          <p>
            With pre-sales already surpassing ₹73.40 crore in India and ₹105 crore worldwide, trade analysts are predicting historic opening day hauls:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17.5px",
              color: "#fff",
            }}
          >
            “Projections suggest the film could earn upwards of Rs 100 crore in India alone on Day 1, with worldwide day-one collections comfortably within reach of Rs 200 crore.”
            <br />
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontStyle: "normal",
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--lime)",
              }}
            >
              — Trade Box Office Forecast
            </span>
          </blockquote>

          <h2>A Quick Note on Dynamic Pre-Sale Figures</h2>
          <p>
            Different trade trackers show minor variations depending on reporting timestamps and whether corporate block bookings are tallied. The figures presented above reflect verified counts as of <strong>3 November 2026</strong>, and will continue climbing rapidly until theatrical curtains lift on Thursday, November 5.
          </p>

          {/* Related Articles Section */}
          <div
            style={{
              margin: "32px 0",
              padding: "20px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "16px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--lime)",
              }}
            >
              Related Bollywood &amp; Box Office Scoops
            </h3>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.9" }}>
              <li>
                <Link
                  href="/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Proposal Story
                </Link>
              </li>
              <li>
                <Link
                  href="/godzilla-minus-zero-india-release-delayed-ramayana"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Godzilla Minus Zero India Release Delayed in India Due to Ramayana IMAX Monopoly
                </Link>
              </li>
              <li>
                <Link
                  href="/tiger-shroff-firing-case-13th-arrest-karnal-woman"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Tiger Shroff Firing Case: 13th Arrest Made in Karnal
                </Link>
              </li>
              <li>
                <Link
                  href="/udta-teer-aakash-kaushik-remembers-mukul-dev"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Udta Teer Director Aakash Kaushik Gets Emotional Remembering Mukul Dev
                </Link>
              </li>
            </ul>
          </div>

          {/* Topic Tags */}
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
              "Ramayana",
              "RanbirKapoor",
              "RamayanaAdvanceBooking",
              "BoxOfficeIndia",
              "SaiPallavi",
              "Yash",
              "NiteshTiwari",
              "SunnyDeol",
              "RamayanaPartOne",
              "BollywoodNews",
              "IMAX3D",
              "DiwaliBlockbuster",
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
              title="Ramayana Advance Booking: Ranbir Kapoor’s Film Crosses Rs 73.40 Crore Before Release"
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
              Home →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
