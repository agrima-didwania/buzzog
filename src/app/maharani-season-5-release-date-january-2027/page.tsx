import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Maharani Season 5 Release Date: Jan 2027 Expected",
  description:
    "Maharani Season 5 may release in January 2027 on SonyLIV. Filming is done and a teaser is expected soon. Here is everything we know so far.",
  keywords: [
    "Maharani Season 5 release date",
    "Maharani 5",
    "Huma Qureshi Rani Bharti",
    "Maharani Season 5 teaser",
    "Maharani SonyLIV",
    "Maharani new season",
    "Subhash Kapoor",
    "SonyLIV web series",
    "Bihar politics drama",
    "Web series news",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Maharani Season 5 Release Date: Jan 2027 Expected",
    description:
      "Maharani Season 5 may release in January 2027 on SonyLIV. Filming is done and a teaser is expected soon. Here is everything we know so far.",
    url: "https://www.buzzoriginals.com/maharani-season-5-release-date-january-2027",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/maharani-season-5-release-date-january-2027.jpg",
        width: 1024,
        height: 576,
        alt: "Maharani Season 5 Release Date: Huma Qureshi’s Political Drama May Return in January 2027",
      },
    ],
    type: "article",
    publishedTime: "2026-11-01T19:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharani Season 5 Release Date: Jan 2027 Expected",
    description:
      "Maharani Season 5 may release in January 2027 on SonyLIV. Filming is done and a teaser is expected soon. Here is everything we know so far.",
    images: ["/images/maharani-season-5-release-date-january-2027.jpg"],
  },
  alternates: {
    canonical: "/maharani-season-5-release-date-january-2027",
  },
};

export default function MaharaniSeason5ReleaseDatePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/maharani-season-5-release-date-january-2027";
  const pageTitle =
    "Maharani Season 5 Release Date: Huma Qureshi’s Political Drama May Return in January 2027";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/maharani-season-5-release-date-january-2027.jpg",
    ],
    datePublished: "2026-11-01T19:45:00+05:30",
    dateModified: "2026-11-01T19:45:00+05:30",
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
      "Maharani Season 5 may release in January 2027 on SonyLIV. Filming is done and a teaser is expected soon. Here is everything we know so far.",
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
        name: "Maharani Season 5 Release Date",
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
          <Link href="/web-series">WEB SERIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>MAHARANI SEASON 5 RELEASE DATE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">👑 Season 5 Scoop</span>
            <span className="badge pink">📺 SonyLIV Original</span>
            <span className="badge">Web Series</span>
          </div>

          <h1 className="article-title">
            Maharani Season 5 Release Date: Huma Qureshi’s Political Drama May Return in January 2027
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment Desk</span>
            <span className="dot-sep">◆</span>
            <span>Published: November 1, 2026</span>
            <span className="dot-sep">◆</span>
            <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-featured-image">
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px" }}>
            <Image
              src="/images/maharani-season-5-release-date-january-2027.jpg"
              alt="Maharani Season 5 Release Date: Huma Qureshi’s Political Drama May Return in January 2027"
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
            Huma Qureshi returns as Rani Bharti for Maharani Season 5, eyeing a January 2027 premiere on SonyLIV.
          </p>
        </div>

        {/* Article Content */}
        <article className="article-content">
          <p className="article-lead">
            Good news for <strong>Maharani</strong> fans. <strong>Rani Bharti</strong> is coming back. Reports say <em>Maharani Season 5</em> is planned for <strong>January 2027</strong>, and the filming is already over.
          </p>

          {/* Quick Scoop Callout */}
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
              ⚡ Fast Facts: Maharani 5 at a Glance
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
              <li><strong>Expected Release:</strong> Tentatively January 2027 on SonyLIV.</li>
              <li><strong>Filming Status:</strong> 100% completed across Delhi, Bhopal, and Ladakh.</li>
              <li><strong>Current Stage:</strong> Post-production (editing, sound design, grading).</li>
              <li><strong>Core Team:</strong> Huma Qureshi and creator Subhash Kapoor return.</li>
            </ul>
          </div>

          <h2>What Is the Latest on Maharani Season 5?</h2>
          <p>
            According to a report by <em>Variety India</em>, the makers are aiming for a <strong>January 2027 release</strong>. The word to notice here is <em>tentatively</em>. There is no official premiere date announced by SonyLIV yet.
          </p>
          <p>
            The report also reveals that the team has completely finished shooting, and the show is now in post-production. This is the crucial stage where editing, sound mixing, background score, and final visual touches are completed before the episodes go live.
          </p>

          <h2>Maharani 5 Teaser: When Is It Coming?</h2>
          <p>
            <em>Variety India</em> also reported that the first teaser was expected on <strong>November 1</strong>. But as of Sunday afternoon, the makers and platform had not shared any official video update. So for now, fans will have to wait just a little longer.
          </p>
          <p>
            We will update this post with the official video and release date confirmation the moment the teaser is out.
          </p>

          <h2>Where Was Maharani Season 5 Shot?</h2>
          <p>
            Reports say the new season was filmed across <strong>Delhi, Bhopal and Ladakh</strong>.
          </p>
          <p>
            That is a big geographic shift for a show that began in the rustic corridors of Bihar politics. Moving from state-level drama to national power centres in Delhi and the high-altitude terrain of Ladakh has made fans even more curious about where Rani Bharti&apos;s journey is heading next.
          </p>

          <h2>Will Huma Qureshi Return as Rani Bharti?</h2>
          <p>
            Yes, <strong>Huma Qureshi</strong> is back as Rani Bharti. She is the undeniable heart of the show, and the story has followed her evolution from an unassuming rural homemaker to an iron-willed Chief Minister since Season 1. <em>Variety India</em> also reported that the core creative team is returning with her.
          </p>
          <p>
            Back in July, Huma gave fans the first hint on Instagram. She shared a story of herself wearing a <em>Maharani</em> sweatshirt with the message, <em>&ldquo;Season 5 begins.&rdquo;</em> As per <em>Variety India</em>, production officially started on August 6 and wrapped after an intensive multi-city filming schedule.
          </p>

          <h2>What Will the Story Be About?</h2>
          <p>
            The makers have kept the plot tightly guarded under wraps. All we know so far is that it will continue directly from where Season 4 ended, raising the political stakes even higher as Rani Bharti navigates national-level power dynamics.
          </p>

          <h2>A Quick Look at the Maharani Journey So Far</h2>
          <p>
            For viewers catching up or refreshing their memory, here is how Rani Bharti&apos;s story unfolded across each chapter:
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              margin: "20px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "14px 18px",
              }}
            >
              <h4 style={{ color: "var(--lime)", margin: "0 0 6px 0", fontSize: "16px" }}>
                Season 1 (2021)
              </h4>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
                Rani Bharti, an illiterate homemaker, is unexpectedly thrust into Bihar politics and made Chief Minister after an assassination attempt on her husband, Bheema Bharti.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "14px 18px",
              }}
            >
              <h4 style={{ color: "var(--lime)", margin: "0 0 6px 0", fontSize: "16px" }}>
                Season 2 (2022)
              </h4>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
                Now familiar with governance, Rani faces fierce opposition, fresh rivals, and betrayal from within her own camp as she battles systemic corruption.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "14px 18px",
              }}
            >
              <h4 style={{ color: "var(--lime)", margin: "0 0 6px 0", fontSize: "16px" }}>
                Season 3 (2024)
              </h4>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
                Framed and imprisoned, Rani wages an intense war from behind bars to clear her name, take back her power, and bring the real conspirators to justice.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "14px 18px",
              }}
            >
              <h4 style={{ color: "var(--lime)", margin: "0 0 6px 0", fontSize: "16px" }}>
                Season 4 (2025)
              </h4>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
                The story moves ahead by several years. Rani serves as Bihar’s Chief Minister for the second time and faces high-stakes national-level politics with seasoned central power brokers.
              </p>
            </div>
          </div>

          <p>
            The series was created by <strong>Subhash Kapoor</strong>. All four seasons are currently streaming on{" "}
            <Link
              href="/web-series"
              style={{ color: "var(--lime)", textDecoration: "underline" }}
            >
              SonyLIV
            </Link>
            , and Season 5 will also premiere exclusively on the same platform.
          </p>

          <h2>Maharani Season 5: Quick Facts</h2>

          {/* Quick Facts Responsive Table */}
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
                    Detail
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
                    Info
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Lead Actor
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Huma Qureshi as Rani Bharti
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Created by
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Subhash Kapoor
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Platform
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    SonyLIV
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Expected Release
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lime)", fontWeight: 700 }}>
                    January 2027 (Tentative)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Filming Status
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Completed (Delhi, Bhopal &amp; Ladakh)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Teaser
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Expected soon (not out yet)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
              Also Read on Buzz Originals
            </h4>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.8", fontSize: "15px" }}>
              <li>
                <Link
                  href="/radhika-apte-rudra-akka-netflix"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Radhika Apte on Her Akka Role Rudra: “A Character I Had Never Played Before”
                </Link>
              </li>
              <li>
                <Link
                  href="/parivarik-manuranjan-ott-release-date-sony-liv"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Parivarik ManuRanjan: Pankaj Tripathi &amp; Aditi Rao Hydari’s Rom-Com Sets Sony LIV Date
                </Link>
              </li>
              <li>
                <Link
                  href="/iifa-2026-winners-list"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  IIFA 2026 Winners List: Aryan Khan’s The Ba***ds of Bollywood Wins Best Series
                </Link>
              </li>
            </ul>
          </div>

          <p style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.7)" }}>
            Follow <strong>Buzz Originals</strong> for more Bollywood and Web Series updates as they break.
          </p>

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
              "MaharaniSeason5",
              "HumaQureshi",
              "RaniBharti",
              "SonyLIV",
              "SubhashKapoor",
              "WebSeries",
              "OTTRelease",
              "BiharPolitics",
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
              href="/web-series"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to Web Series Hub
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
