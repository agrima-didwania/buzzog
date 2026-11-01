import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Ram Gopal Varma Gets ₹29.67 Crore Legal Notice",
  description:
    "Eclatant Films has reportedly sent Ram Gopal Varma a ₹29.67 crore legal notice over a 2010 deal. Here is what the case is about.",
  keywords: [
    "Ram Gopal Varma legal notice",
    "Ram Gopal Varma Eclatant Films",
    "RGV legal notice 29.67 crore",
    "Ram Gopal Varma 29.67 crore case",
    "Eclatant Films legal notice",
    "Ram Gopal Varma news today",
    "RGV Eclatant Films dispute",
    "Ram Gopal Varma",
    "Eclatant Films",
    "Complete Cinema",
    "Police Company",
    "Harshvardhan Rane",
    "Manoj Bajpayee",
    "Bollywood news",
    "Entertainment legal news",
  ],
  openGraph: {
    title: "Ram Gopal Varma Gets ₹29.67 Crore Legal Notice",
    description:
      "Eclatant Films has reportedly sent Ram Gopal Varma a ₹29.67 crore legal notice over a 2010 deal. Here is what the case is about.",
    url: "https://www.buzzoriginals.com/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore.jpg",
        width: 1024,
        height: 576,
        alt: "Ram Gopal Varma in Legal Trouble Over ₹29.67 Crore — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-11-01T16:55:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram Gopal Varma Gets ₹29.67 Crore Legal Notice",
    description:
      "Eclatant Films has reportedly sent Ram Gopal Varma a ₹29.67 crore legal notice over a 2010 deal. Here is what the case is about.",
    images: [
      "/images/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore.jpg",
    ],
  },
  alternates: {
    canonical:
      "/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore",
  },
};

export default function RGVLegalNoticePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore";
  const pageTitle = "Ram Gopal Varma in Legal Trouble Over ₹29.67 Crore";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore.jpg",
    ],
    datePublished: "2026-11-01T16:55:00+05:30",
    dateModified: "2026-11-01T16:55:00+05:30",
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
      "Eclatant Films has reportedly sent Ram Gopal Varma a ₹29.67 crore legal notice over a 2010 deal. Here is what the case is about.",
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
        name: "News",
        item: "https://www.buzzoriginals.com/news",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Ram Gopal Varma Legal Notice ₹29.67 Crore",
        item: pageUrl,
      },
    ],
  };

  return (
    <div
      style={{
        background: "var(--ink)",
        minHeight: "100vh",
        color: "var(--lavender)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <Header activeNav="News" />

      {/* Main Content Area */}
      <main
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "32px 16px 64px 16px",
        }}
      >
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "var(--muted-lavender)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{ color: "var(--muted-lavender)", textDecoration: "none" }}
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/bollywood"
            style={{ color: "var(--muted-lavender)", textDecoration: "none" }}
          >
            Bollywood
          </Link>
          <span>/</span>
          <Link
            href="/news"
            style={{ color: "var(--lime)", textDecoration: "none" }}
          >
            News
          </Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>
            Ram Gopal Varma Legal Notice
          </span>
        </nav>

        <article>
          {/* Category Badges */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "var(--magenta)",
                color: "#000",
                fontSize: "11px",
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: "3px",
                fontFamily: "var(--font-space-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              🚨 Legal Dispute
            </span>
            <span
              style={{
                background: "var(--lime)",
                color: "#000",
                fontSize: "11px",
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: "3px",
                fontFamily: "var(--font-space-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Ram Gopal Varma
            </span>
            <span
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "var(--lavender)",
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "3px",
                fontFamily: "var(--font-space-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Bollywood &amp; News
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 1.05,
              color: "#fff",
              letterSpacing: "0.5px",
              marginBottom: "18px",
            }}
          >
            Ram Gopal Varma in Legal Trouble Over ₹29.67 Crore
          </h1>

          {/* Subtitle / Excerpt */}
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              lineHeight: 1.5,
              color: "var(--muted-lavender)",
              marginBottom: "24px",
              fontWeight: 400,
            }}
          >
            Filmmaker Ram Gopal Varma is embroiled in a massive financial dispute after production house Eclatant Films Private Limited demanded ₹29.67 crore under a 2010 pact, issuing warnings across Bollywood producers, distributors, and OTT platforms.
          </p>

          {/* Author & Dateline Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "12px 0",
              marginBottom: "28px",
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              color: "var(--muted-lavender)",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>
                BY{" "}
                <strong style={{ color: "#fff" }}>
                  BUZZ ORIGINALS ENTERTAINMENT DESK
                </strong>
              </span>
              <span>◆</span>
              <span style={{ color: "var(--magenta)" }}>
                LEGAL &amp; INDUSTRY DESK
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>NOV 1, 2026</span>
              <span>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>

          {/* Cover Image (16:9 Aspect Ratio) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "32px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "#111",
            }}
          >
            <Image
              src="/images/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore.jpg"
              alt="Ram Gopal Varma in Legal Trouble Over ₹29.67 Crore — Buzz Originals"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 860px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                padding: "20px 16px 12px 16px",
                fontSize: "13px",
                color: "var(--muted-lavender)",
                fontFamily: "var(--font-space-mono)",
              }}
            >
              ⚖️ Eclatant Films Private Limited slaps filmmaker Ram Gopal Varma with a ₹29.67 crore demand notice over an unfulfilled 2010 agreement. (Photo: Buzz Originals)
            </div>
          </div>

          {/* Key Points at a Glance Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              borderLeft: "4px solid var(--lime)",
              padding: "20px 24px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "36px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "22px",
                color: "var(--lime)",
                letterSpacing: "0.5px",
                marginBottom: "12px",
              }}
            >
              Key Points at a Glance
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "12px",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
              }}
            >
              <div>
                <span style={{ color: "var(--muted-lavender)" }}>Who sent notice:</span>
                <p style={{ color: "#fff", fontWeight: 700, margin: "2px 0 0 0" }}>
                  Eclatant Films Private Limited
                </p>
              </div>
              <div>
                <span style={{ color: "var(--muted-lavender)" }}>Amount demanded:</span>
                <p style={{ color: "var(--magenta)", fontWeight: 700, margin: "2px 0 0 0" }}>
                  ₹29.67 Crore (₹29,67,64,000)
                </p>
              </div>
              <div>
                <span style={{ color: "var(--muted-lavender)" }}>Interest included:</span>
                <p style={{ color: "var(--lavender)", fontWeight: 700, margin: "2px 0 0 0" }}>
                  Approx. ₹11.38 Crore
                </p>
              </div>
              <div>
                <span style={{ color: "var(--muted-lavender)" }}>Notice date:</span>
                <p style={{ color: "#fff", fontWeight: 700, margin: "2px 0 0 0" }}>
                  October 15, 2026
                </p>
              </div>
              <div>
                <span style={{ color: "var(--muted-lavender)" }}>Payment deadline:</span>
                <p style={{ color: "var(--lime)", fontWeight: 700, margin: "2px 0 0 0" }}>
                  October 30, 2026 (Passed)
                </p>
              </div>
              <div>
                <span style={{ color: "var(--muted-lavender)" }}>RGV’s response:</span>
                <p style={{ color: "#fff", fontWeight: 700, margin: "2px 0 0 0" }}>
                  None made public so far
                </p>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#e0e0e0",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <p>
              Veteran filmmaker <strong>Ram Gopal Varma (RGV)</strong> is facing serious legal heat over a high-stakes monetary dispute. Production house <strong>Eclatant Films Private Limited</strong> has reportedly served the director a legal demand notice for a staggering <strong>₹29.67 crore</strong> (exact figure: ₹29,67,64,000). According to the production banner, this substantial sum remains unpaid under the terms of a commercial pact signed between both parties way back in 2010.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              What Is the 2010 Agreement?
            </h2>

            <p>
              The root of the conflict traces back to an agreement executed on <strong>April 10, 2010</strong>. The legal validity of this contract was subsequently affirmed and upheld by the <strong>Bombay High Court</strong> in an order dated <strong>April 17, 2013</strong>.
            </p>

            <p>
              Eclatant Films states that the pact contained a binding and unambiguous covenant: Ram Gopal Varma was contractually required to obtain a prior written <strong>No Objection Certificate (NOC)</strong> from Eclatant Films before undertaking any work on designated film projects. This stipulation covered his involvement in virtually any key creative or executive capacity — including work as a director, producer, writer, or co-producer.
            </p>

            <p>
              The production company alleges that RGV failed to adhere to this mandatory clause and breached his contractual obligations. Consequently, it has calculated the outstanding debt at ₹29,67,64,000, which includes accumulated interest of approximately <strong>₹11.38 crore</strong>.
            </p>

            {/* Also Read Box */}
            <div
              style={{
                background: "rgba(184, 255, 44, 0.06)",
                border: "1px solid rgba(184, 255, 44, 0.2)",
                padding: "16px 20px",
                borderRadius: "6px",
                margin: "12px 0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "12px",
                  color: "var(--lime)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Also Read on Buzz Originals
              </span>
              <Link
                href="/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "underline",
                  lineHeight: 1.5,
                }}
              >
                Himesh Reshammiya Calls Deepika Padukone “Irreplaceable,” Picks Sandeep Reddy Vanga →
              </Link>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              Public Notice Also Printed in Trade Magazine
            </h2>

            <p>
              Rather than confining the matter to private correspondence, Eclatant Films escalated the issue publicly. The company took out public notices in the trade circuit, publishing announcements in the <strong>October 24 and October 31 issues</strong> of the trade magazine <em>Complete Cinema</em>.
            </p>

            <p>
              The notices set a firm deadline of <strong>October 30, 2026</strong>, for Ram Gopal Varma to clear the entire ₹29.67 crore dues.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              Warning for Producers, Studios, and OTT Platforms
            </h2>

            <p>
              The move that has triggered alarm bells across the film trade is the warning addressed directly to industry stakeholders. Eclatant Films has reportedly dispatched formal notices to Bollywood film producers, theatrical distributors, television broadcasters, and major OTT streaming platforms.
            </p>

            <blockquote
              style={{
                background: "rgba(255, 0, 110, 0.08)",
                borderLeft: "4px solid var(--magenta)",
                padding: "16px 20px",
                margin: "8px 0",
                borderRadius: "0 6px 6px 0",
                fontStyle: "italic",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              The notice cautioned companies against entering into commercial pacts with Ram Gopal Varma, warning that anyone acquiring, streaming, or exploiting films linked to him does so at their own legal and financial peril.
            </blockquote>

            <p>
              The company emphasized that it reserves the right to initiate strict civil and criminal proceedings against third parties that collaborate with RGV without resolving Eclatant’s claims.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              What Could Happen Next? The “Contractual Lien” Threat
            </h2>

            <p>
              If the demanded amount remains unpaid, Eclatant Films has hinted at enforcing a <strong>“contractual lien.”</strong>
            </p>

            <p>
              In legal practice, a contractual lien grants a creditor the authority to claim rights over monies, shares, copyright interests, or revenue receivables generated from projects governed by the underlying agreement. With the October 30 deadline having lapsed, all eyes are on whether Eclatant Films will now approach the High Court to seek injunctions against RGV’s upcoming ventures.
            </p>

            <p>
              As of now, Ram Gopal Varma has not issued any public clarification or formal response regarding the notice.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              RGV’s Upcoming Projects: Will They Face Impact?
            </h2>

            <p>
              Despite the mounting legal dispute, Varma has major theatrical and streaming projects lined up:
            </p>

            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <li>
                <strong>Police Company:</strong> A gritty crime action drama headlined by Harshvardhan Rane, scheduled for a grand theatrical release on <strong>June 4, 2027</strong>. The high-profile ensemble cast features Fardeen Khan, Fatima Sana Shaikh, Paresh Rawal, Saurabh Shukla, Makarand Deshpande, and Ashwini Kalsekar.
              </li>
              <li>
                <strong>Police Station Mein Bhoot:</strong> A horror-comedy project starring long-time collaborator{" "}
                <Link
                  href="/manoj-bajpayee-vidya-balan-kajol-women-in-cinema"
                  style={{ color: "var(--lime)", textDecoration: "underline" }}
                >
                  Manoj Bajpayee
                </Link>
                , with whom RGV famously revolutionized Indian gangster cinema in <em>Satya</em> (1998) and <em>Kaun?</em> (1999).
              </li>
            </ul>

            <p>
              Whether Eclatant Films’ warnings to buyers and platforms will create hurdles for the financing or exhibition of these upcoming titles remains to be seen.
            </p>
          </div>

          <p
            style={{
              marginTop: "32px",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--muted-lavender)",
            }}
          >
            Stay tuned to <strong>Buzz Originals</strong> for more live updates on this developing legal story and breaking entertainment reports.
          </p>

          {/* Tags */}
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
              "RamGopalVarma",
              "RGV",
              "EclatantFilms",
              "LegalNotice",
              "BollywoodNews",
              "CompleteCinema",
              "PoliceCompany",
              "HarshvardhanRane",
              "ManojBajpayee",
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
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
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
              ← The News Desk
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
              Bollywood Hub →
            </Link>
            <Link
              href="/movies"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Movies Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
