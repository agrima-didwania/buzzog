import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles",
  description:
    "After his Delhi concert, Diljit Dosanjh spoke about negativity and attempts to stop his Aura India Tour. Here is everything he said.",
  keywords: [
    "Diljit Dosanjh Aura India Tour",
    "Diljit Dosanjh breaks silence",
    "Diljit Dosanjh Delhi concert",
    "Diljit Dosanjh India tour 2026",
    "Diljit Dosanjh Instagram Live",
    "Diljit Dosanjh JLN Stadium",
    "Diljit Dosanjh concert",
    "BookMyShow Live",
    "Delhi Police",
    "Punjabi music",
    "Bollywood news",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles",
    description:
      "After his Delhi concert, Diljit Dosanjh spoke about negativity and attempts to stop his Aura India Tour. Here is everything he said.",
    url: "https://www.buzzoriginals.com/diljit-dosanjh-aura-india-tour-hurdles",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/diljit-dosanjh-aura-india-tour-hurdles.jpg",
        width: 1024,
        height: 576,
        alt: "Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles",
      },
    ],
    type: "article",
    publishedTime: "2026-11-01T22:40:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles",
    description:
      "After his Delhi concert, Diljit Dosanjh spoke about negativity and attempts to stop his Aura India Tour. Here is everything he said.",
    images: ["/images/diljit-dosanjh-aura-india-tour-hurdles.jpg"],
  },
  alternates: {
    canonical: "/diljit-dosanjh-aura-india-tour-hurdles",
  },
};

export default function DiljitAuraTourHurdlesPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/diljit-dosanjh-aura-india-tour-hurdles";
  const pageTitle =
    "Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/diljit-dosanjh-aura-india-tour-hurdles.jpg",
    ],
    datePublished: "2026-11-01T22:40:00+05:30",
    dateModified: "2026-11-01T22:40:00+05:30",
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
      "After his Delhi concert, Diljit Dosanjh spoke about negativity and attempts to stop his Aura India Tour. Here is everything he said.",
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
        name: "Diljit Dosanjh Aura Tour Hurdles",
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
          <Link href="/news">NEWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>DILJIT DOSANJH AURA TOUR HURDLES</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🎤 Aura Tour 2026</span>
            <span className="badge pink">Exclusive Statement</span>
            <span className="badge">Bollywood &amp; News</span>
          </div>

          <h1 className="article-title">
            Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles
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
              src="/images/diljit-dosanjh-aura-india-tour-hurdles.jpg"
              alt="Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles"
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
            Diljit Dosanjh addressed fans on Instagram Live following his blockbuster Delhi concert at JLN Stadium.
          </p>
        </div>

        {/* Article Content */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Diljit Dosanjh</strong> has finally spoken up about the obstacles and controversies surrounding his highly anticipated India tour. Following his electric Delhi show, the global music icon went live on Instagram to confront the &ldquo;negative energy&rdquo; around him and answer critics head-on. His resounding message to fans was simple: <strong>the tour will go on.</strong>
          </p>

          {/* Key Quotes Callout Box */}
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
              ⚡ Key Highlights from Diljit’s Statement
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
              <li><strong>Unstoppable Energy:</strong> Diljit confirmed he is staying in India until <strong>December 20, 2026</strong> to complete every scheduled show.</li>
              <li><strong>Addressing Attempts to Block the Tour:</strong> Claimed multiple calculated efforts were made to halt his performances.</li>
              <li><strong>Silence Isn’t Fear:</strong> Clarified that choosing not to respond does not mean he is intimidated by critics or media negativity.</li>
              <li><strong>Gratitude:</strong> Officially praised the Delhi Police and CRPF personnel for ensuring tight security for 70,000 fans.</li>
            </ul>
          </div>

          <h2>What Happened After the Delhi Concert</h2>
          <p>
            Diljit officially kicked off his mammoth <strong>Aura India Tour</strong> with a jam-packed, 70,000-strong spectacle at the iconic <strong>Jawaharlal Nehru (JLN) Stadium</strong> in New Delhi on Friday, October 30, 2026.
          </p>
          <p>
            Once the euphoric show concluded and he returned to his room, he went on Instagram Live to speak candidly to his worldwide fanbase. Diljit acknowledged that he anticipates people and certain news channels making fun of him or attempting to manufacture controversy. However, he made it abundantly clear that he refuses to be rattled by negative commentary.
          </p>

          {/* Styled Quote Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderLeft: "4px solid var(--magenta)",
              padding: "18px 22px",
              borderRadius: "6px",
              margin: "24px 0",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "17px",
                color: "var(--magenta)",
                margin: "0 0 6px 0",
                lineHeight: "1.5",
              }}
            >
              &ldquo;When the India show starts, problems start, especially for me. I don&apos;t know why. But staying quiet does not give anyone the power to stop my work.&rdquo;
            </p>
            <span
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              — Diljit Dosanjh on Instagram Live (October 30, 2026)
            </span>
          </div>

          <h2>Was Diljit Really Stopped?</h2>
          <p>
            During the Live session, Diljit revealed that several deliberate attempts were made to stop his tour from taking place. While he deliberately refrained from naming specific individuals, political groups, or organisations, he asserted that staying silent did not equate to fear.
          </p>
          <p>
            He explained that his restraint is often misunderstood. He emphasised that not engaging in verbal spats or answering hostile questions does not mean he is afraid of anyone, nor does it give critics the authority to derail his artistry.
          </p>

          <h2>“I’m Not Going Anywhere”</h2>
          <p>
            Diljit concluded his address with an emphatic statement on his longevity and dedication to his craft:
          </p>

          {/* Second Quote Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderLeft: "4px solid var(--lime)",
              padding: "18px 22px",
              borderRadius: "6px",
              margin: "24px 0",
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
              &ldquo;I’m not going anywhere. I’ve been working here for 25 years. I will stop only when I decide to stop.&rdquo;
            </p>
            <span
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              — Diljit Dosanjh
            </span>
          </div>

          <p>
            He assured concertgoers across the subcontinent that he will remain in India through <strong>December 20, 2026</strong>, confirming that all remaining stadium gigs will proceed smoothly as originally scheduled.
          </p>

          <h2>Why Was the Delhi Show in Doubt?</h2>
          <p>
            Fans faced a tense week leading up to the capital concert. On October 22, reports emerged indicating that the Delhi Police had initially denied permissions, citing security considerations, intelligence threat inputs, and festive-season law enforcement deployment. Tension also escalated following reports of a hoax bomb email sent to six Delhi schools.
          </p>
          <p>
            However, the logistical deadlock was swiftly resolved. Official ticketing and production partner <strong>BookMyShow Live</strong> clarified that permission had merely been &ldquo;temporarily withheld&rdquo; while comprehensive traffic, crowd-control, and security plans were upgraded. The green light was promptly issued after multi-agency coordination meetings.
          </p>

          <h2>Why Diljit Never Performed in Bihar</h2>
          <p>
            During the interactive Instagram Live session, a fan from Bihar asked why the singer has not scheduled a stop in Patna. Diljit revealed that serious attempts were made to organise a concert in Bihar last year. However, local event organizers insisted that Diljit personally take full legal and physical responsibility for general crowd safety—an unprecedented demand that made hosting the concert untenable.
          </p>

          <h2>A Heartfelt Thank You to the Police</h2>
          <p>
            Far from holding any resentment, Diljit made sure to express immense gratitude towards the law enforcement agencies that protected the venue. He warmly thanked the <strong>Delhi Police</strong> and the <strong>Central Reserve Police Force (CRPF)</strong> for their tireless efforts in managing the record-breaking turnout of over 70,000 attendees safely.
          </p>

          <h2>Aura India Tour 2026: Fast Facts &amp; Schedule</h2>

          {/* Responsive Tour Details Table */}
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
                    Information
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Concert Tour
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Diljit Dosanjh Aura India Tour 2026
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Opening Concert
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    JLN Stadium, New Delhi (October 30, 2026 · 70,000+ Fans)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Next Tour Stop
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lime)", fontWeight: 700 }}>
                    Indore, Madhya Pradesh (November 15, 2026)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    India Tour Window
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    October 30 – December 20, 2026
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Ticketing &amp; Promoters
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    BookMyShow Live
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Key Statement
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--magenta)", fontWeight: 700 }}>
                    “I’m not going anywhere. The tour will continue as planned.”
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What’s Next on the Aura India Tour?</h2>
          <p>
            The next confirmed stop on the tour itinerary is <strong>Indore on November 15, 2026</strong>. From there, the roadshow will travel across major metropolitan centers and regional arenas nationwide. Fans are advised to monitor official ticketing portals for verified schedule updates.
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
              Also Read on Buzz Originals
            </h4>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.8", fontSize: "15px" }}>
              <li>
                <Link
                  href="/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Diljit Dosanjh Takes a Dig at CJP at Delhi Concert, Abhijeet Dipke Replies With “Mitti Pao”
                </Link>
              </li>
              <li>
                <Link
                  href="/bhansali-productions-gangubai-post-eetha-trailer-backlash"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bhansali Productions Trolled for Gangubai Kathiawadi Post on Eetha Trailer Day
                </Link>
              </li>
              <li>
                <Link
                  href="/honey-singh-nephew-vidit-olak-dies-jalandhar-accident"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Honey Singh’s Nephew Vidit Olak Dies in Jalandhar Car Accident
                </Link>
              </li>
            </ul>
          </div>

          <p style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.7)" }}>
            Follow <strong>Buzz Originals</strong> for more live coverage, concert reviews, and Bollywood breaking stories.
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
              "DiljitDosanjh",
              "AuraIndiaTour",
              "DiljitConcert",
              "DiljitInstagramLive",
              "JLNStadium",
              "DelhiConcert",
              "BollywoodNews",
              "PunjabiMusic",
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
              href="/news"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              The News Desk →
            </Link>
            <Link
              href="/web-series"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Web Series Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
