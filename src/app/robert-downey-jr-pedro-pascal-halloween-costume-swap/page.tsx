import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Robert Downey Jr. and Pedro Pascal Swap Marvel Costumes",
  description:
    "Robert Downey Jr. dressed as Mister Fantastic and Pedro Pascal as Doctor Doom for Halloween. See what happened and when Avengers: Doomsday releases.",
  keywords: [
    "Robert Downey Jr Halloween",
    "Pedro Pascal Doctor Doom",
    "Avengers Doomsday",
    "Marvel costume swap",
    "Mister Fantastic",
    "Reed Richards",
    "Doctor Doom",
    "Fantastic Four",
    "Marvel Studios",
    "Avengers Doomsday release date",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Robert Downey Jr. and Pedro Pascal Swap Marvel Costumes",
    description:
      "Robert Downey Jr. dressed as Mister Fantastic and Pedro Pascal as Doctor Doom for Halloween. See what happened and when Avengers: Doomsday releases.",
    url: "https://www.buzzoriginals.com/robert-downey-jr-pedro-pascal-halloween-costume-swap",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/robert-downey-jr-pedro-pascal-halloween-costume-swap.jpg",
        width: 1024,
        height: 576,
        alt: "Robert Downey Jr. and Pedro Pascal Swap Marvel Costumes for Halloween",
      },
    ],
    type: "article",
    publishedTime: "2026-11-02T11:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Robert Downey Jr. and Pedro Pascal Swap Marvel Costumes",
    description:
      "Robert Downey Jr. dressed as Mister Fantastic and Pedro Pascal as Doctor Doom for Halloween. See what happened and when Avengers: Doomsday releases.",
    images: ["/images/robert-downey-jr-pedro-pascal-halloween-costume-swap.jpg"],
  },
  alternates: {
    canonical: "/robert-downey-jr-pedro-pascal-halloween-costume-swap",
  },
};

export default function RobertDowneyPedroPascalHalloweenSwapPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/robert-downey-jr-pedro-pascal-halloween-costume-swap";
  const pageTitle =
    "Robert Downey Jr. and Pedro Pascal Swap Marvel Roles for Halloween";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/robert-downey-jr-pedro-pascal-halloween-costume-swap.jpg",
    ],
    datePublished: "2026-11-02T11:30:00+05:30",
    dateModified: "2026-11-02T11:30:00+05:30",
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
      "Robert Downey Jr. dressed as Mister Fantastic and Pedro Pascal as Doctor Doom for Halloween. See what happened and when Avengers: Doomsday releases.",
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
        name: "Robert Downey Jr. Pedro Pascal Marvel Costume Swap",
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
          <span style={{ color: "var(--lavender)" }}>MARVEL COSTUME SWAP</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🎃 Halloween Viral</span>
            <span className="badge pink">Marvel Studios</span>
            <span className="badge">Movies</span>
          </div>

          <h1 className="article-title">
            Robert Downey Jr. and Pedro Pascal Swap Marvel Roles for Halloween
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment Desk</span>
            <span className="dot-sep">◆</span>
            <span>Published: November 2, 2026</span>
            <span className="dot-sep">◆</span>
            <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-featured-image">
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px" }}>
            <Image
              src="/images/robert-downey-jr-pedro-pascal-halloween-costume-swap.jpg"
              alt="Robert Downey Jr. and Pedro Pascal Swap Marvel Costumes for Halloween"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 860px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "8px",
              fontFamily: "var(--font-space-mono)",
            }}
          >
            Robert Downey Jr. in the Fantastic Four suit and Pedro Pascal in Doctor Doom’s cloak for Halloween 2026.
          </p>
        </div>

        {/* Article Content */}
        <article className="article-content">
          <p className="article-lead">
            Marvel fans got a fun surprise this Halloween. <strong>Robert Downey Jr.</strong> and <strong>Pedro Pascal</strong> swapped their iconic movie characters for one day, and the resulting video is now going completely viral across social media.
          </p>

          {/* Quick Highlights Callout */}
          <div
            style={{
              background: "rgba(195, 255, 0, 0.05)",
              border: "1px solid var(--lime)",
              borderLeft: "4px solid var(--lime)",
              padding: "16px 20px",
              borderRadius: "4px",
              margin: "24px 0",
            }}
          >
            <h3
              style={{
                color: "var(--lime)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              ⚡ Fast Facts: The Marvel Costume Swap
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                fontSize: "15px",
                lineHeight: "1.7",
                color: "var(--lavender)",
              }}
            >
              <li><strong>The Swap:</strong> Robert Downey Jr. wore Mister Fantastic&apos;s blue &ldquo;4&rdquo; suit, while Pedro Pascal donned Doctor Doom&apos;s green cloak and hood.</li>
              <li><strong>The Caption:</strong> &ldquo;Victor. Richard. Costume swap!&rdquo; poking fun at their character names Victor von Doom and Reed Richards.</li>
              <li><strong>The Upcoming Film:</strong> <em>Avengers: Doomsday</em>, arriving in theaters on <strong>December 18, 2026</strong>.</li>
              <li><strong>Diwali Message:</strong> Downey and Chris Evans recently wished Indian fans with a special &ldquo;Namaste India&rdquo; greeting.</li>
            </ul>
          </div>

          <h2>What Happened?</h2>
          <p>
            Robert Downey Jr. posted a short, candid video on Instagram alongside his <em>Avengers: Doomsday</em> co-star Pedro Pascal. In the upcoming Marvel blockbuster, Downey portrays the formidable antagonist <strong>Doctor Doom (Victor von Doom)</strong>, while Pascal steps into the shoes of <strong>Reed Richards (Mister Fantastic)</strong>, leader of the Fantastic Four.
          </p>
          <p>
            For Halloween, the two A-listers decided to switch places entirely:
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "18px 0 24px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "12px 16px",
              }}
            >
              <span style={{ color: "var(--lime)", fontWeight: 700 }}>• Robert Downey Jr.: </span>
              <span>Wore the signature retro-futuristic blue Fantastic Four suit proudly displaying the classic &ldquo;4&rdquo; emblem across his chest.</span>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "12px 16px",
              }}
            >
              <span style={{ color: "var(--magenta)", fontWeight: 700 }}>• Pedro Pascal: </span>
              <span>Dressed as Doctor Doom, draped in the villain&apos;s deep emerald-green hood and sweeping Latverian cloak with metal mask accessories.</span>
            </div>
          </div>

          <p>
            The video caption was delightfully simple: <em>&ldquo;Victor. Richard. Costume swap!&rdquo;</em> Victor is Doctor Doom’s first name, and Richard refers to Reed Richards’ surname.
          </p>

          {/* Quote Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderLeft: "4px solid var(--lime)",
              padding: "16px 20px",
              borderRadius: "6px",
              margin: "20px 0",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "17px",
                color: "var(--lime)",
                margin: "0 0 6px 0",
                lineHeight: "1.5",
              }}
            >
              &ldquo;Victor. Richard. Costume swap!&rdquo;
            </p>
            <span
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              — Robert Downey Jr. on Instagram (Halloween 2026)
            </span>
          </div>

          <h2>How Did Fans React?</h2>
          <p>
            Fans around the world immediately embraced the playful moment. The clip racked up millions of likes, comments, and shares within hours of going live.
          </p>
          <p>
            In the comment section, fans unleashed a flurry of multiverse and alternate timeline jokes, with several enthusiasts cheekily dubbing this swapped reality as a sneak peek into <em>&ldquo;Earth 420&rdquo;</em> or an alternate universe where Reed Richards is ruthless and Doctor Doom is the hero of the Fantastic Four.
          </p>

          <h2>Why Is This Costume Swap Special?</h2>
          <p>
            The exchange serves as a brilliant meta-joke on the real-world casting dynamics of the Marvel Cinematic Universe. Downey, who spent over a decade defining modern cinematic heroism as Tony Stark / Iron Man, is now returning as the ultimate Marvel supervillain. Conversely, Pascal, who has stepped in as the patriarch of Marvel&apos;s First Family, got a test drive in Doom&apos;s menacing cloak.
          </p>
          <p>
            The fun stunt has reignited fan excitement ahead of the movie. While Marvel Studios has kept the principal storyline guarded in utmost secrecy, the second official trailer confirms that Doctor Doom will clash directly with the Fantastic Four, the Earth&apos;s Mightiest Avengers, and the X-Men.
          </p>
          <p>
            Also Read:{" "}
            <Link
              href="/patrick-stewart-dies-at-86-avengers-doomsday-final-role"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role
            </Link>
          </p>

          <h2>Downey’s Diwali Wish for Indian Fans</h2>
          <p>
            The Halloween video follows another heartwarming global outreach from the Marvel stars. Just days earlier during Diwali, Robert Downey Jr. teamed up with Chris Evans to release a dedicated holiday greeting for fans in India.
          </p>
          <p>
            Greeting viewers with an affectionate <em>&ldquo;Namaste India,&rdquo;</em> the duo reflected on how Diwali celebrates one chapter concluding and a luminous new journey beginning. They playfully joked that for their cinematic characters, however, things might be moving in reverse—from the light into the darkness—before signing off with a promise to see fans in theaters for <em>Avengers: Doomsday</em>.
          </p>

          <h2>When Does Avengers: Doomsday Release?</h2>
          <p>
            <em>Avengers: Doomsday</em> is scheduled for a worldwide theatrical release on <strong>December 18, 2026</strong>.
          </p>

          {/* Quick Facts Table */}
          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              borderRadius: "8px",
              border: "1px solid var(--line)",
              background: "var(--ink-2)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "15px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <th
                    style={{
                      padding: "14px 18px",
                      color: "var(--lime)",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      width: "35%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      padding: "14px 18px",
                      color: "var(--lime)",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      width: "65%",
                    }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Lead Stars
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Robert Downey Jr. (Doctor Doom) &amp; Pedro Pascal (Reed Richards / Mister Fantastic)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Halloween Swap
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lime)", fontWeight: 700 }}>
                    RDJ in blue Fantastic Four suit; Pedro Pascal in Doctor Doom cloak &amp; hood
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Upcoming Movie
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    <em>Avengers: Doomsday</em> (Marvel Studios)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Theatrical Premiere
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lime)", fontWeight: 700 }}>
                    December 18, 2026
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Key Factions Clashing
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Doctor Doom vs. Fantastic Four, Avengers &amp; X-Men
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Final Thoughts</h2>
          <p>
            This viral Halloween swap underscores the camaraderie and sheer fun the star-studded cast is having as promotional engines rev up. With <em>Avengers: Doomsday</em> just weeks away from dominating global box offices, fans can expect even more iconic moments from the Marvel ensemble.
          </p>
          <p style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.7)" }}>
            Stay tuned to <strong>Buzz Originals</strong> for more Marvel scoops, box office trackers, and cinema updates.
          </p>

          {/* Related Stories Links */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "6px",
              padding: "18px 22px",
              margin: "32px 0 24px 0",
            }}
          >
            <h4
              style={{
                color: "var(--lime)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Related Cinema &amp; Marvel Reads
            </h4>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.8", fontSize: "15px" }}>
              <li>
                <Link
                  href="/patrick-stewart-dies-at-86-avengers-doomsday-final-role"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role
                </Link>
              </li>
              <li>
                <Link
                  href="/godzilla-minus-zero-india-release-delayed-ramayana"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle
                </Link>
              </li>
              <li>
                <Link
                  href="/ramayana-advance-booking-us-jump-la-premiere"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Ramayana Advance Booking: US Sales Jump 27% After LA Premiere
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
              "RobertDowneyJr",
              "PedroPascal",
              "AvengersDoomsday",
              "MarvelCostumeSwap",
              "MisterFantastic",
              "DoctorDoom",
              "FantasticFour",
              "MarvelStudios",
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

          {/* Social Share Component */}
          <SocialShare url={pageUrl} title={pageTitle} />

          {/* Back to Hubs Navigation */}
          <div style={{ marginTop: "32px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/movies"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to Movies Hub
            </Link>
            <Link
              href="/bollywood"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Bollywood Hub →
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
