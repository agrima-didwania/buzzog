import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most",
  description:
    "Orry says Sara Ali Khan was not there in his worst phase and he never got an apology. Here is what he said on Double Date and how the feud began.",
  keywords: [
    "Orry Sara Ali Khan",
    "Orry Sara Ali Khan fallout",
    "Orry Sara Ali Khan friendship",
    "Orry Amrita Singh",
    "Orry Double Date",
    "Orry Sara Ali Khan Double Date",
    "Sara Ali Khan Orry controversy",
    "Orry latest news",
    "Sara Ali Khan Orry feud",
    "Bollywood gossip",
    "Bollywood news today",
    "celebrity friendship fallout",
    "Neha Dhupia Angad Bedi show",
    "Ibrahim Ali Khan unfollow Orry",
    "Palak Tiwari Orry",
    "Sara Ali Khan NCB 2020",
    "Orry",
    "Sara Ali Khan",
    "Amrita Singh",
    "Double Date",
    "Neha Dhupia",
    "Angad Bedi",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most",
    description:
      "Orry says Sara Ali Khan was not there in his worst phase and he never got an apology. Here is what he said on Double Date and how the feud began.",
    url: "https://www.buzzoriginals.com/orry-sara-ali-khan-disappeared-friendship-fallout",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/orry-sara-ali-khan-disappeared-friendship-fallout.jpg",
        width: 1024,
        height: 576,
        alt: "Orry Says Sara Ali Khan Disappeared When He Needed Her Most — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T13:10:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most",
    description:
      "Orry says Sara Ali Khan was not there in his worst phase and he never got an apology. Here is what he said on Double Date and how the feud began.",
    images: ["/images/orry-sara-ali-khan-disappeared-friendship-fallout.jpg"],
  },
  alternates: {
    canonical: "/orry-sara-ali-khan-disappeared-friendship-fallout",
  },
};

export default function OrrySaraAliKhanFalloutPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/orry-sara-ali-khan-disappeared-friendship-fallout";
  const pageTitle =
    "Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/orry-sara-ali-khan-disappeared-friendship-fallout.jpg",
    ],
    datePublished: "2026-11-03T13:10:00+05:30",
    dateModified: "2026-11-03T13:10:00+05:30",
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
      "Orry says Sara Ali Khan was not there in his worst phase and he never got an apology. Here is what he said on Double Date and how the feud began.",
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
        name: "Orry & Sara Ali Khan Friendship Fallout",
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
          <span style={{ color: "var(--lavender)" }}>ORRY &amp; SARA ALI KHAN FALLOUT</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">💔 Celebrity Fallout</span>
            <span className="badge lime">Double Date Scoop</span>
            <span className="badge">Bollywood Gossip</span>
          </div>

          <h1 className="article-title">
            Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment Desk</span>
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
              src="/images/orry-sara-ali-khan-disappeared-friendship-fallout.jpg"
              alt="Orry & Sara Ali Khan Friendship Over? He Says She Disappeared"
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
            Orry opens up on his bitter fallout with former best friend Sara Ali Khan and her mother Amrita Singh on Neha Dhupia’s talk show Double Date. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Bollywood’s internet favourite socialite <strong>Orry</strong> (Orhan Awatramani) is talking about his fractured bond with actress <strong>Sara Ali Khan</strong> again, and this time he has laid bare the full, unfiltered story from his perspective. Speaking candidly on a popular talk show, Orry revealed that while he stood like a rock by Sara during her most turbulent personal and legal crises, she was nowhere to be found when his own life hit rock bottom.
          </p>

          <p>
            The revelation has set the Bollywood rumour mill spinning, offering a rare, raw glimpse behind the glossy red-carpet camaraderie into one of Mumbai’s most high-profile friendship collapses.
          </p>

          {/* Key Facts Summary Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px",
              margin: "28px 0",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                color: "var(--lime)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              ⚡ Fast Breakdown: Orry &amp; Sara Ali Khan Feud
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>The Show:</strong> Orry appeared on <em>Double Date</em>, hosted by Neha Dhupia and Angad Bedi.
              </li>
              <li>
                <strong>The Block List:</strong> Named Sara Ali Khan and veteran actress Amrita Singh as the top celebrities he has unfollowed and muted.
              </li>
              <li>
                <strong>The Core Grievance:</strong> Claims he stood by Sara during the 2020 NCB investigation in Goa, but she “disappeared” when he needed support.
              </li>
              <li>
                <strong>Status:</strong> Friendship officially called off earlier this year; Orry insists he “never got an apology.”
              </li>
            </ul>
          </div>

          <h2>What Happened on <em>Double Date</em>?</h2>
          <p>
            The revelation unfolded when Orry appeared as a guest on <em>Double Date</em>, the candid digital talk show hosted by power couple <strong>Neha Dhupia</strong> and <strong>Angad Bedi</strong>. In a rapid-fire segment, the hosts put Orry on the spot, asking him to name the most famous person in his circle that he has actively blocked, unfollowed, or muted across social media.
          </p>

          <p>
            Without taking a single second to ponder, Orry named Sara Ali Khan and her mother, veteran star <strong>Amrita Singh</strong>. Opening up about his equation with Amrita, Orry was typically candid:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17.5px",
              color: "#fff",
            }}
          >
            “Uski maa ne mujhe bahot daanta, so I unfollowed her too.”
            <br />
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontStyle: "normal",
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--magenta)",
              }}
            >
              — Orry on Neha Dhupia &amp; Angad Bedi’s show Double Date
            </span>
          </blockquote>

          <p>
            In simple words, Orry claims Amrita Singh had given him an intense earful in the past, prompting him to cut digital ties with both mother and daughter simultaneously.
          </p>

          {/* Contextual Link */}
          <div
            style={{
              margin: "24px 0",
              padding: "14px 18px",
              background: "rgba(255, 218, 0, 0.06)",
              borderLeft: "3px solid var(--lime)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
              Also Read
            </span>
            <Link
              href="/ibrahim-ali-khan-palak-tiwari-breakup"
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years →
            </Link>
          </div>

          <h2>“I Was There for Her”: The 2020 Goa &amp; NCB Chapter</h2>
          <p>
            Recounting the origins of their deep bond, Orry explained that he and Sara were not just casual party acquaintances—their relationship stretched back to their college days, spanning more than a decade of shared secrets and tight-knit memories.
          </p>
          <p>
            He then pointedly revisited the turbulent autumn of <strong>September 2020</strong>, when the Narcotics Control Bureau (NCB) summoned Sara during the high-profile Bollywood investigation linked to the demise of Sushant Singh Rajput. Orry revealed that he was staying with Sara in Goa at the exact moment the summons arrived and media helicopters and vans swarmed.
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
            “Everyone told me to keep my distance, stay away, and protect my own name. But I didn&apos;t listen to anyone. Uska side kabhi nahi choda.”
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
              — Orry on standing by Sara Ali Khan in 2020
            </span>
          </blockquote>

          <p>
            According to Orry, he refused to abandon his friend despite immense external pressure from advisors and well-wishers to stay out of the legal controversy.
          </p>

          <h2>Why He Ended the 10-Year Friendship: “She Disappeared”</h2>
          <p>
            The turning point came when the tables turned. Orry explained that when he subsequently entered a deeply challenging and emotionally draining phase of his own personal life, the support he had unconditionally offered was not reciprocated.
          </p>
          <p>
            He claims Sara did not make a single phone call or make any effort to check on his well-being. Using the stark word <strong>“disappeared”</strong> to characterize her absence, Orry stated that the realization broke his trust beyond repair.
          </p>
          <p>
            He told Neha Dhupia that he personally informed Sara earlier this year that their friendship could no longer continue. His most lingering hurt stems from the lack of remorse:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17.5px",
              color: "#fff",
            }}
          >
            “I never got an apology. Not even a single sorry for what happened.”
            <br />
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontStyle: "normal",
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--magenta)",
              }}
            >
              — Orry on closing the door on reconciliation
            </span>
          </blockquote>

          <p>
            Insiders close to the influencer confirm that he has closed the door entirely on reconciliation, making it clear that a path to friendship is permanently off the table without sincere accountability.
          </p>

          {/* Contextual Link */}
          <div
            style={{
              margin: "24px 0",
              padding: "14px 18px",
              background: "rgba(255, 218, 0, 0.06)",
              borderLeft: "3px solid var(--lime)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
              Also Read
            </span>
            <Link
              href="/orry-halloween-2026-janhvi-khushi-kapoor-competition"
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              Orry Names Janhvi and Khushi Kapoor as His Biggest Halloween Competition →
            </Link>
          </div>

          <h2>How Did This Feud Start? The Complete Timeline</h2>
          <p>
            While Orry&apos;s comments on <em>Double Date</em> are the most explicit confirmation yet of the split, signs of bad blood between the Pataudi household and the influencer have been bubbling across 2026:
          </p>

          {/* Timeline Table */}
          <div style={{ overflowX: "auto", margin: "24px 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13.5px",
                lineHeight: "1.6",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.06)", borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--lime)" }}>TIMELINE</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--lime)" }}>INCIDENT</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--lime)" }}>DETAILS &amp; AFTERMATH</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>January 2026</td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>“3 Worst Names” Reel</td>
                  <td style={{ padding: "12px 16px" }}>
                    Orry shared a cryptic reel naming “Sara, Amrita and Palak”. Social media immediately connected it to Sara Ali Khan, Amrita Singh, and Palak Tiwari. The video was quickly taken down.
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Early 2026</td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>Instagram Fallout</td>
                  <td style={{ padding: "12px 16px" }}>
                    Sara Ali Khan and her brother <strong>Ibrahim Ali Khan</strong> unfollowed Orry on Instagram. Orry hit back by asserting that he had already severed social ties first.
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Mid 2026</td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>Amrita Singh Trauma Claim</td>
                  <td style={{ padding: "12px 16px" }}>
                    In an interview with <em>Hindustan Times</em>, Orry stated he could only forgive the past if Amrita Singh tendered a sincere apology, hinting that she caused him deep mental distress in 2021.
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Summer 2026</td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>Career Dig Goes Viral</td>
                  <td style={{ padding: "12px 16px" }}>
                    A playful yet biting joke made by Orry on a podcast about Sara’s recent box-office track record went viral, reportedly causing significant offense to the Pataudi family.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>September 2026</td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>Party Chair Incident</td>
                  <td style={{ padding: "12px 16px" }}>
                    Orry alleged during a live stream that Sara had once pushed an acquaintance off a chair at a private gathering, and he was unfairly coerced into taking the rap to safeguard her image.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Has Sara Ali Khan or Amrita Singh Reacted?</h2>
          <p>
            As of now, neither Sara Ali Khan nor her mother Amrita Singh has issued any official statement or public comment regarding Orry’s remarks on <em>Double Date</em>. Sara is currently occupied with the release and promotional duties for her upcoming spy thriller <em>Udta Teer</em> alongside Ayushmann Khurrana, maintaining radio silence on her private social dynamics.
          </p>
          <p>
            Industry insiders note that the Pataudi family traditionally refrains from engaging in public spats on social media platforms, preferring to let digital storms blow over quietly.
          </p>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for the freshest, unfiltered entertainment scoops, red carpet dispatches, and exclusive celebrity updates.
          </p>

          {/* Tags Section */}
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
              "Orry",
              "SaraAliKhan",
              "AmritaSingh",
              "DoubleDate",
              "NehaDhupia",
              "AngadBedi",
              "BollywoodGossip",
              "BollywoodNews",
              "IbrahimAliKhan",
              "PalakTiwari",
              "CelebrityFeud",
              "BuzzOriginals",
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
              title="Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most"
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
              Back to Home →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
