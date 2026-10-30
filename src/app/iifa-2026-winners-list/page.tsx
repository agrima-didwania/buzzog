import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards",
  description:
    "See the full IIFA 2026 winners list. Dhurandhar won 12 awards, Ranveer Singh and Aneet Padda won top acting prizes, and The Ba*ds of Bollywood won Best Series.",
  keywords: [
    "IIFA 2026 winners",
    "IIFA Awards 2026 full list",
    "Dhurandhar IIFA awards",
    "Ranveer Singh Best Actor",
    "Aneet Padda Best Actress",
    "The Ba***ds of Bollywood IIFA",
    "Ranveer Singh",
    "Aryan Khan",
    "Aditya Dhar",
    "Paatal Lok Season 2",
    "Baramulla",
    "Saiyaara",
    "Akshaye Khanna",
    "Sanjay Dutt",
    "IIFA Digital Awards 2026",
    "Bollywood news today",
  ],
  openGraph: {
    title: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards",
    description:
      "See the full IIFA 2026 winners list. Dhurandhar won 12 awards, Ranveer Singh and Aneet Padda won top acting prizes, and The Ba*ds of Bollywood won Best Series.",
    url: "https://www.buzzoriginals.com/iifa-2026-winners-list",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/iifa-2026-winners-list.jpg",
        width: 1024,
        height: 576,
        alt: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards — Ranveer Singh & Aneet Padda",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T01:05:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards",
    description:
      "See the full IIFA 2026 winners list. Dhurandhar won 12 awards, Ranveer Singh and Aneet Padda won top acting prizes, and The Ba*ds of Bollywood won Best Series.",
    images: ["/images/iifa-2026-winners-list.jpg"],
  },
  alternates: {
    canonical: "/iifa-2026-winners-list",
  },
};

export default function IIFA2026WinnersPage() {
  const pageUrl = "https://www.buzzoriginals.com/iifa-2026-winners-list";
  const pageTitle = "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/iifa-2026-winners-list.jpg",
    ],
    datePublished: "2026-10-31T01:05:00+05:30",
    dateModified: "2026-10-31T01:05:00+05:30",
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
      "See the full IIFA 2026 winners list. Dhurandhar won 12 awards, Ranveer Singh and Aneet Padda won top acting prizes, and The Ba*ds of Bollywood won Best Series.",
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
        name: "Web Series",
        item: "https://www.buzzoriginals.com/web-series",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "IIFA 2026 Winners List",
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
          <Link href="/web-series">WEB SERIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>IIFA 2026 WINNERS LIST</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🏆 26th IIFA Awards</span>
            <span className="badge">Bollywood &amp; Web Series</span>
            <span className="badge pink">Dhurandhar 12 Trophies</span>
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
              <span>BOLLYWOOD &amp; OTT BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 31, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>4 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/iifa-2026-winners-list.jpg"
            alt="IIFA 2026 Winners List: Dhurandhar Wins 12 Awards"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 The 26th IIFA Awards: Aditya Dhar&apos;s Dhurandhar sweeps 12 trophies, Ranveer Singh &amp; Aneet Padda win acting honors, while Aryan Khan bags Best Direction. (Photo: IIFA / Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The 26th IIFA Awards were announced on 30 October 2026, and one film took over the night. <strong>Dhurandhar</strong> won 12 awards, including Best Film, Best Director and Best Actor. On the OTT side, Aryan Khan’s <strong>The Ba***ds of Bollywood</strong> won Best Series.
          </p>
          <p>
            Here is the full IIFA 2026 winners list, in simple words.
          </p>

          <h2>Dhurandhar: The Big Winner of IIFA 2026</h2>
          <p>
            Aditya Dhar’s film won in 12 categories:
          </p>
          <ul>
            <li>
              <strong>Best Film:</strong> Jyoti Deshpande, Aditya Dhar, Lokesh Dhar
            </li>
            <li>
              <strong>Best Director:</strong> Aditya Dhar
            </li>
            <li>
              <strong>Best Actor:</strong> Ranveer Singh
            </li>
            <li>
              <strong>Best Supporting Actor:</strong> Sanjay Dutt
            </li>
            <li>
              <strong>Best Performance in a Negative Role:</strong> Akshaye Khanna
            </li>
            <li>
              <strong>Best Music Direction:</strong> Shashwat Sachdev
            </li>
            <li>
              <strong>Best Story (Original):</strong> Aditya Dhar
            </li>
            <li>
              <strong>Best Screenplay:</strong> Aditya Dhar
            </li>
            <li>
              <strong>Best Dialogues:</strong> Aditya Dhar
            </li>
            <li>
              <strong>Best Cinematography:</strong> Vikash Nowlakha
            </li>
            <li>
              <strong>Best Editing:</strong> Shivkumar V. Panicker
            </li>
            <li>
              <strong>Best Sound Design:</strong> Bishwadeep Chatterjee
            </li>
          </ul>

          <p>
            Aditya Dhar alone took home five awards: Director, Story, Screenplay, Dialogues and Film (as producer).
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

          <h2>Best Actor and Best Actress at IIFA 2026</h2>
          <div
            style={{
              overflowX: "auto",
              margin: "22px 0 28px",
              borderRadius: "12px",
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
                    }}
                  >
                    Award
                  </th>
                  <th
                    style={{
                      padding: "14px 18px",
                      color: "var(--lime)",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Winner
                  </th>
                  <th
                    style={{
                      padding: "14px 18px",
                      color: "var(--lime)",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Film
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "#fff" }}>
                    Best Actor
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lavender)" }}>
                    Ranveer Singh
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--magenta)", fontWeight: 600 }}>
                    Dhurandhar
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)", background: "rgba(255, 255, 255, 0.02)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "#fff" }}>
                    Best Actress
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lavender)" }}>
                    Aneet Padda
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--magenta)", fontWeight: 600 }}>
                    Saiyaara
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "#fff" }}>
                    Best Supporting Actor
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lavender)" }}>
                    Sanjay Dutt
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--magenta)", fontWeight: 600 }}>
                    Dhurandhar
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)", background: "rgba(255, 255, 255, 0.02)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "#fff" }}>
                    Best Supporting Actress
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lavender)" }}>
                    Huma Qureshi
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--magenta)", fontWeight: 600 }}>
                    Jolly LLB 3
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "#fff" }}>
                    Best Negative Role
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lavender)" }}>
                    Akshaye Khanna
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--magenta)", fontWeight: 600 }}>
                    Dhurandhar
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Saiyaara Wins Big in Music and Debut Awards</h2>
          <p>
            Saiyaara may not have won Best Film, but it did very well in music and new talent:
          </p>
          <ul>
            <li>
              <strong>Best Lyrics:</strong> Irshad Kamil (title song)
            </li>
            <li>
              <strong>Best Male Singer:</strong> Faheem Abdullah (title song)
            </li>
            <li>
              <strong>Best Female Singer:</strong> Shreya Ghoshal (Saiyaara Reprise)
            </li>
            <li>
              <strong>Best Male Debut:</strong> Ahaan Panday
            </li>
            <li>
              <strong>Best Female Debut:</strong> Rasha Thadani won this for Azaad
            </li>
          </ul>

          <h2>Other Film Winners</h2>
          <ul>
            <li>
              <strong>Best International Film:</strong> Avatar: Fire &amp; Ash
            </li>
            <li>
              <strong>Best Story (Adapted):</strong> Basharat Peer, Sumit Roy and Neeraj Ghaywan for Homebound
            </li>
            <li>
              <strong>Best Choreography:</strong> Bosco Leslie Martis for Aavan Jaavan (War 2)
            </li>
          </ul>

          <p>
            Chhaava won most of the technical awards outside Dhurandhar’s sweep:
          </p>
          <ul>
            <li>
              <strong>Best Background Score:</strong> A.R. Rahman
            </li>
            <li>
              <strong>Best Sound Mixing:</strong> Alok De
            </li>
            <li>
              <strong>Best Special Effects:</strong> Assemblage Entertainment and Redefine
            </li>
          </ul>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/parivarik-manuranjan-ott-release-date-sony-liv"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Parivarik ManuRanjan: Pankaj Tripathi &amp; Aditi Rao Hydari Rom-Com Sets Sony LIV Date →
              </Link>
            </p>
          </div>

          <h2>IIFA Digital Awards 2026 Winners</h2>

          <h3 style={{ fontSize: "20px", fontWeight: 700, fontStyle: "italic", color: "#ffffff", margin: "28px 0 12px" }}>
            <strong><em>Series</em></strong>
          </h3>
          <p>
            The Ba***ds of Bollywood was the star of the OTT side.
          </p>
          <ul>
            <li>
              <strong>Best Series:</strong> The Ba***ds of Bollywood (Red Chillies Entertainment)
            </li>
            <li>
              <strong>Best Direction:</strong> Aryan Khan
            </li>
            <li>
              <strong>Best Supporting Actress:</strong> Anya Singh
            </li>
            <li>
              <strong>Best Supporting Actor:</strong> Raghav Juyal
            </li>
            <li>
              <strong>Best Title Track:</strong> Ujwal Gupta, for Number 1
            </li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, fontStyle: "italic", color: "#ffffff", margin: "28px 0 12px" }}>
            <strong><em>Paatal Lok Season 2</em></strong>
          </h3>
          <p>
            Paatal Lok Season 2 also won big:
          </p>
          <ul>
            <li>
              <strong>Best Actor:</strong> Jaideep Ahlawat
            </li>
            <li>
              <strong>Best Actress:</strong> Tillotama Shome
            </li>
            <li>
              <strong>Best Original Story:</strong> Sudip Sharma, Tamal Sen, Rahul Kanojia and Abhishek Banerjee
            </li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, fontStyle: "italic", color: "#ffffff", margin: "28px 0 12px" }}>
            <strong><em>Digital Films</em></strong>
          </h3>
          <ul>
            <li>
              <strong>Best Picture:</strong> Baramulla
            </li>
            <li>
              <strong>Best Story:</strong> Aditya Dhar, Monal Thakkar and Aditya Suhas Jambhale (Baramulla)
            </li>
            <li>
              <strong>Best Direction:</strong> Karan Tejpal (Stolen)
            </li>
            <li>
              <strong>Best Actor:</strong> Abhishek Banerjee (Stolen)
            </li>
            <li>
              <strong>Best Actress:</strong> Sanya Malhotra (Mrs.)
            </li>
            <li>
              <strong>Best Supporting Actor:</strong> Avinash Tiwary (The Mehta Boys)
            </li>
            <li>
              <strong>Best Supporting Actress:</strong> Monika Panwar (Nishanchi 2)
            </li>
          </ul>

          <h3 style={{ fontSize: "20px", fontWeight: 700, fontStyle: "italic", color: "#ffffff", margin: "28px 0 12px" }}>
            <strong><em>Docuseries and Reality</em></strong>
          </h3>
          <ul>
            <li>
              <strong>Best Docuseries/Docufilm:</strong> The Roshans
            </li>
            <li>
              <strong>Best Reality/Non-Scripted Show:</strong> The Traitors
            </li>
          </ul>

          <h2>Quick Takeaways</h2>
          <ul>
            <li>
              <strong>Dominant Sweep:</strong> Dhurandhar won 12 awards and dominated the night.
            </li>
            <li>
              <strong>Top Acting Honors:</strong> Ranveer Singh won Best Actor and Aneet Padda won Best Actress.
            </li>
            <li>
              <strong>Aryan Khan Triumph:</strong> Aryan Khan won Best Direction for his very first series.
            </li>
            <li>
              <strong>Aditya Dhar Double Hit:</strong> Aditya Dhar also had a hit on OTT, as Baramulla won Best Picture in the digital category.
            </li>
          </ul>

          <p>
            Follow <strong>Buzz OG</strong> for more Bollywood and OTT updates.
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
              "IIFA 2026 winners",
              "IIFA Awards 2026 full list",
              "Dhurandhar IIFA awards",
              "Ranveer Singh Best Actor",
              "Aneet Padda Best Actress",
              "The Ba***ds of Bollywood IIFA",
              "Ranveer Singh",
              "Aryan Khan",
              "Aditya Dhar",
              "Bollywood News",
              "Web Series",
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
              href="/web-series"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Web Series &amp; OTT Hub →
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
