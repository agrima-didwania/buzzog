import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Tiger Shroff to Make First Appearance After Firing Incident",
  description:
    "Tiger Shroff will reportedly make his first public appearance since the firing incident at Claudia Ciesla’s book launch in Mumbai on November 3.",
  keywords: [
    "Tiger Shroff",
    "Tiger Shroff first public appearance",
    "Tiger Shroff firing incident",
    "Tiger Shroff latest news",
    "Claudia Ciesla book launch",
    "Mumbai Crime Branch MCOCA",
    "Juhu firing case",
    "Eknath Shinde Tiger Shroff",
    "Bollywood breaking news",
    "Entertainment news",
  ],
  openGraph: {
    title: "Tiger Shroff to Make First Appearance After Firing Incident",
    description:
      "Tiger Shroff will reportedly make his first public appearance since the firing incident at Claudia Ciesla’s book launch in Mumbai on November 3.",
    url: "https://www.buzzoriginals.com/tiger-shroff-first-public-appearance-after-firing-incident",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/tiger-shroff-first-public-appearance-after-firing-incident.jpg",
        width: 1024,
        height: 576,
        alt: "Tiger Shroff Is Back: First Public Appearance After Firing Incident — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T23:00:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiger Shroff to Make First Appearance After Firing Incident",
    description:
      "Tiger Shroff will reportedly make his first public appearance since the firing incident at Claudia Ciesla’s book launch in Mumbai on November 3.",
    images: ["/images/tiger-shroff-first-public-appearance-after-firing-incident.jpg"],
  },
  alternates: {
    canonical: "/tiger-shroff-first-public-appearance-after-firing-incident",
  },
};

export default function TigerShroffPublicAppearancePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/tiger-shroff-first-public-appearance-after-firing-incident";
  const pageTitle =
    "Tiger Shroff Is Back: Here’s Where He Will Be Seen First After the Firing Incident";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/tiger-shroff-first-public-appearance-after-firing-incident.jpg",
    ],
    datePublished: "2026-10-31T23:00:00+05:30",
    dateModified: "2026-10-31T23:00:00+05:30",
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
      "Tiger Shroff will reportedly make his first public appearance since the firing incident at Claudia Ciesla’s book launch in Mumbai on November 3.",
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
        name: "Tiger Shroff First Appearance",
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
          <span style={{ color: "var(--lavender)" }}>TIGER SHROFF FIRST APPEARANCE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🚨 Exclusive Scoop</span>
            <span className="badge lime">Tiger Shroff</span>
            <span className="badge">Bollywood &amp; News</span>
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
              <span>SPECIAL INVESTIGATIONS BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 31, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/tiger-shroff-first-public-appearance-after-firing-incident.jpg"
            alt="Tiger Shroff Is Back: First Public Appearance After Firing Incident at Claudia Ciesla Book Launch"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🚨 Tiger Shroff steps back into the public eye on November 3 in Mumbai following the high-profile Juhu firing incident. (Photo: Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Tiger Shroff</strong> is getting ready to step out in public again. A few weeks after the scary firing incident in Mumbai, the actor is set to return to events, and fans have a date to look forward to.
          </p>

          <h2>Where will Tiger Shroff appear first?</h2>
          <p>
            Tiger is expected to attend a book launch in Mumbai on <strong>November 3</strong>. It will mark his first official public appearance since the alarming attack outside his vehicle.
          </p>
          <p>
            The book is <em>“Beyond Weight Loss: Eating, Healing &amp; Ageing with Claudia’s Concept”</em> by actor and wellness author <strong>Claudia Ciesla</strong>.
          </p>

          <h2>Claudia confirms, and Tiger wrote the foreword</h2>
          <p>
            Claudia has herself confirmed that Tiger will be present at the launch. She also revealed that Tiger personally wrote the opening note (foreword) for her book, sharing how deeply she respects him for his unwavering work ethic, discipline, and uncompromising focus on holistic fitness.
          </p>
          <p>
            When she approached him with the core philosophy behind the wellness guide, he resonated strongly with the message and readily agreed to back the project and headline the official launch ceremony.
          </p>

          <h2>Why did he take time to decide?</h2>
          <p>
            Reports indicate that his decision to attend the launch was vetted extensively before confirmation. While he took necessary time to recuperate from the emotional shock, the actor is eager to resume his everyday routine and is also expected to attend selected Diwali festivities.
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              padding: "16px 20px",
              margin: "24px 0",
              background: "rgba(200, 255, 0, 0.05)",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              color: "#fff",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            “Time has helped him recover and regain his confidence. He is keen to get back to his routine. He is looking forward to getting back on set.”
          </blockquote>

          <p>A source close to the developments informed <em>Mid-Day</em>:</p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              padding: "16px 20px",
              margin: "24px 0",
              background: "rgba(230, 0, 106, 0.05)",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              color: "#fff",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            “His appearance at Claudia’s book launch was discussed at length, given the circumstances, but he is keen to resume his public engagements. Security has been significantly stepped up.”
          </blockquote>

          {/* Also Read Internal Link Box */}
          <div
            style={{
              margin: "24px 0",
              padding: "16px 20px",
              background: "rgba(255, 255, 255, 0.03)",
              borderLeft: "4px solid var(--lime)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              Also Read
            </span>
            <div style={{ marginTop: "4px" }}>
              <Link
                href="/manoj-bajpayee-vidya-balan-kajol-women-in-cinema"
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "underline",
                }}
              >
                Manoj Bajpayee Says Women Have Been Leading Bollywood for Years with Vidya Balan &amp; Kajol →
              </Link>
            </div>
          </div>

          <h2>A quick recap of the incident</h2>
          <p>
            On <strong>October 18</strong>, armed assailants on a motorcycle opened gunfire on Tiger’s SUV in Juhu, Mumbai, shortly after he concluded a football session with friends.
          </p>
          <ul>
            <li>Tiger fortunately escaped unharmed and was not struck by any bullets.</li>
            <li>His trusted driver and an innocent pedestrian sustained injuries during the shootout.</li>
            <li>Fans and authorities lauded Tiger for maintaining composure under fire and rushing his injured driver directly to the hospital for emergency care.</li>
            <li>Maharashtra Deputy Chief Minister <strong>Eknath Shinde</strong> personally visited the actor, stating that Tiger and his mother Ayesha Shroff were “quite shaken,” while issuing a stern warning: <em>“No form of threat will be tolerated.”</em></li>
          </ul>

          <h2>Latest on the case</h2>
          <p>
            Mumbai Police have invoked stringent provisions under the <strong>MCOCA</strong> (Maharashtra Control of Organised Crime Act) against the criminal syndicate involved in the assault.
          </p>
          <ul>
            <li>All 11 suspects arrested earlier were remanded to police custody until <strong>November 6</strong>.</li>
            <li>On <strong>October 29</strong>, the Mumbai Crime Branch apprehended a 12th accused from Haryana.</li>
            <li>Several intelligence reports have linked the conspiracy to the notorious Lawrence Bishnoi gang, though official investigations are ongoing to conclusively establish the motive.</li>
          </ul>

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
              Follow us on Instagram for breaking Bollywood scoops and crime coverage:{" "}
              <a
                href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                @buzzoriginals
              </a>
            </span>
          </div>

          <h2>Who is Claudia Ciesla?</h2>
          <p>
            Prior to establishing herself as a certified celebrity nutritionist and lifestyle coach, Claudia Ciesla made prominent waves in Bollywood. She was a celebrated contestant on <em>Bigg Boss</em> and achieved widespread fame for her chartbusting dance track <em>“Balma”</em> opposite Akshay Kumar in <em>Khiladi 786</em>. She also delivered a high-voltage performance at the Filmfare Awards 2025.
          </p>

          <h2>What’s next for Tiger?</h2>
          <p>
            Tiger was last seen on the big screen in <em>Baaghi 4</em> alongside Sanjay Dutt, Harnaaz Sandhu, and Sonam Bajwa. The action star is slated to headline Dharma Productions’ upcoming romance-thriller <em>Lagja Gale</em>, directed by Raj Mehta.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for verified Bollywood developments and entertainment exclusives.
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
              "TigerShroff",
              "TigerShroffFiring",
              "ClaudiaCiesla",
              "BollywoodNews",
              "CrimeBranch",
              "MCOCA",
              "Baaghi4",
              "LagjaGale",
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
