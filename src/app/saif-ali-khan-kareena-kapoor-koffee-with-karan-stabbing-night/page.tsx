import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Saif Ali Khan Stabbing: Kareena Opens Up on KWK 9",
  description:
    "Saif Ali Khan and Kareena Kapoor talk about the night he was stabbed on Koffee With Karan 9. Read what they said, what happened, and the latest on the case.",
  keywords: [
    "Saif Ali Khan stabbing",
    "Kareena Kapoor Koffee With Karan",
    "Koffee With Karan season 9",
    "Saif Ali Khan Kareena Kapoor",
    "Koffee With Karan episode 4",
    "Saif Ali Khan worst night",
    "Kareena Kapoor Saif stabbing interview",
    "Saif Ali Khan stabbing case update",
    "Koffee With Karan 9 Saif Kareena episode",
    "Kareena Kapoor Ruko ruko",
    "Mohammad Shariful Islam",
    "Lilavati Hospital",
    "Karan Johar",
    "The Peacock Hub",
    "JioHotstar",
    "Bollywood news today",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Saif Ali Khan Stabbing: Kareena Opens Up on KWK 9",
    description:
      "Saif Ali Khan and Kareena Kapoor talk about the night he was stabbed on Koffee With Karan 9. Read what they said, what happened, and the latest on the case.",
    url: "https://www.buzzoriginals.com/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night.jpg",
        width: 1024,
        height: 576,
        alt: "Saif Ali Khan Stabbing: Kareena Kapoor and Saif Ali Khan Open Up on Koffee With Karan Season 9",
      },
    ],
    type: "article",
    publishedTime: "2026-11-04T13:00:00.000Z",
    authors: ["Buzz Originals Reality TV & Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saif Ali Khan Stabbing: Kareena Opens Up on KWK 9",
    description:
      "Saif Ali Khan and Kareena Kapoor talk about the night he was stabbed on Koffee With Karan 9. Read what they said, what happened, and the latest on the case.",
    images: ["/images/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night.jpg"],
  },
  alternates: {
    canonical: "/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night",
  },
};

export default function SaifAliKhanStabbingKWK9Page() {
  const pageUrl =
    "https://www.buzzoriginals.com/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night";
  const pageTitle =
    "Saif Ali Khan Calls Stabbing Night “Worst Night”: Kareena Kapoor’s Emotional Confession on Koffee With Karan";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night.jpg",
    ],
    datePublished: "2026-11-04T13:00:00+05:30",
    dateModified: "2026-11-04T13:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Reality TV & Entertainment Desk",
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
      "Saif Ali Khan and Kareena Kapoor talk about the night he was stabbed on Koffee With Karan 9. Read what they said, what happened, and the latest on the case.",
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
        name: "Reality Shows",
        item: "https://www.buzzoriginals.com/reality-shows",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Saif Ali Khan Stabbing: Kareena on KWK 9",
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
      <Header activeNav="Reality Shows" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/reality-shows">REALITY SHOWS</Link>
          <span>/</span>
          <Link href="/bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>SAIF ALI KHAN STABBING KWK 9</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">⚡ Koffee With Karan 9</span>
            <span className="badge lime">Emotional Tell-All</span>
            <span className="badge">Episode 4 Special</span>
          </div>

          <h1 className="article-title">
            Saif Ali Khan Calls Stabbing Night “Worst Night”: Kareena Kapoor’s Emotional Confession on Koffee With Karan
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Reality TV &amp; Entertainment Desk</span>
            <span>·</span>
            <time dateTime="2026-11-04">November 4, 2026</time>
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
              src="/images/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night.jpg"
              alt="Saif Ali Khan Stabbing: Kareena Opens Up on KWK 9 with Karan Johar"
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
            Kareena Kapoor Khan and Saif Ali Khan sit down with Karan Johar on Koffee With Karan Season 9 Episode 4 to reflect on the January 2025 stabbing incident. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Share Toolbar */}
        <SocialShare url={pageUrl} title={pageTitle} />

        {/* Quick Facts Callout Box */}
        <div
          style={{
            background: "rgba(255, 0, 128, 0.05)",
            border: "1px solid rgba(255, 0, 128, 0.25)",
            borderRadius: "8px",
            padding: "20px",
            margin: "24px 0 32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            ⚡ Key Episode &amp; Case Facts
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              fontSize: "14px",
              lineHeight: "1.7",
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            <li>
              <strong>Show &amp; Episode:</strong> Koffee With Karan Season 9, Episode 4 (Streaming November 4 at 7 PM IST on The Peacock Hub, JioHotstar).
            </li>
            <li>
              <strong>First Joint Appearance in 16 Years:</strong> Their last joint KWK couch appearance was in Season 3 (2010), when they were dating.
            </li>
            <li>
              <strong>The Stabbing Incident:</strong> Took place on January 16, 2025, at Saif and Kareena’s Bandra residence when an armed intruder broke in.
            </li>
            <li>
              <strong>Medical Details:</strong> Saif suffered six stab wounds defending his family and household staff; underwent six-hour emergency surgery at Lilavati Hospital.
            </li>
            <li>
              <strong>Case Status:</strong> Accused Mohammad Shariful Islam (Bangladeshi national) is on trial; household staff testified identifying him and alleging a ₹1 crore extortion demand.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph">
            <strong>Saif Ali Khan and Kareena Kapoor Khan</strong> are back on Karan Johar’s famous couch, and while Koffee With Karan is known for razor-sharp gossip and playful glamour, this time the mood took a deeply serious turn. In Episode 4 of <em>Koffee With Karan Season 9</em>, the power couple spoke candidly for the first time on screen about the harrowing night Saif was stabbed at their Mumbai residence.
          </p>

          <p>
            Between candid quips about Bollywood stardom and teasing each other over old habits, the conversation steered toward the terrifying incident that shook the Hindi film industry in early 2025. Both opened up with raw vulnerability about the trauma, the emergency medical ordeal, and how their family rallied together to heal.
          </p>

          <h2>Saif and Kareena Return After 16 Years</h2>
          <p>
            This much-anticipated episode marks <strong>Episode 4 of the final season</strong> of Karan Johar’s marquee talk show, which began streaming on November 4, 2026, at 7 PM IST on The Peacock Hub via JioHotstar.
          </p>
          <p>
            It is also a landmark reunion. Saif and Kareena last sat together on the Koffee couch in <strong>Season 3 back in 2010</strong>, when they were still dating. That makes this their first joint interview on the show in 16 years.
          </p>
          <p>
            The initial teaser showcased their signature banter. In earlier snippets,{" "}
            <Link
              href="/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser"
              className="text-[var(--lime)] hover:underline font-bold"
            >
              Kareena humorously declared she was “happy and relieved” that the show was ending
            </Link>
            , while Saif self-deprecatingly claimed he felt “miscast” for rapid-fire games. However, when Karan Johar asked about the January 2025 attack, the laughter ceased, making way for one of the most poignant interviews in the show’s 22-year history.
          </p>

          <h2>What Kareena Said About That Night</h2>
          <p>
            Kareena Kapoor Khan shared the psychological aftershocks of the invasion, revealing how deeply the life-threatening attack unsettled her sense of safety. She confessed that she was unable to sleep properly for six months following the incident.
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 0, 128, 0.06)",
              padding: "16px 20px",
              margin: "24px 0",
              fontStyle: "italic",
              color: "#fff",
              borderRadius: "0 8px 8px 0",
            }}
          >
            “I was screaming on the road, ‘Ruko, ruko’. It was like a movie scene.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Kareena Kapoor Khan on Koffee With Karan Season 9
            </footer>
          </blockquote>

          <p>
            Kareena recalled the utter chaos and adrenaline rush of rushing Saif to medical care, running out to hail assistance while trying to shield their household from further danger. The emotional scars, she noted, took months of patience, support, and therapy to process.
          </p>

          <h2>What Saif Said: “The Worst Night in the History of Nights”</h2>
          <p>
            Saif Ali Khan, known for his stoic eloquence, did not sugarcoat the gravity of the assault. When reflecting on the altercation, the actor described the attack in stark terms:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              background: "rgba(182, 255, 0, 0.06)",
              padding: "16px 20px",
              margin: "24px 0",
              fontStyle: "italic",
              color: "#fff",
              borderRadius: "0 8px 8px 0",
            }}
          >
            “It was the worst night in the history of nights.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--magenta)", fontStyle: "normal" }}>
              — Saif Ali Khan on the January 2025 intruder attack
            </footer>
          </blockquote>

          <p>
            Saif explained that what made the situation exceptionally agonizing was maintaining composure while their young children were present in the house and witnessed the unfolding crisis. Staying composed, de-escalating the physical threat, and protecting everyone under his roof required sheer resolve.
          </p>
          <p>
            Both Saif and Kareena also expressed profound gratitude for their extended family, close friends, and well-wishers who dropped everything to stand vigil at the hospital and support them through the recovery period.
          </p>

          <h2>What Happened on January 16, 2025: A Timeline Recap</h2>
          <p>
            For audiences looking to understand the full chronology of the incident, here is a detailed breakdown of what unfolded on the night of January 16, 2025:
          </p>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px",
              margin: "20px 0 28px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--lime)", fontWeight: "bold", fontFamily: "var(--font-space-mono)" }}>01</span>
                <div>
                  <strong style={{ color: "#fff" }}>Late-Night Breach:</strong> An intruder gained unauthorized access to Saif and Kareena’s high-security apartment building in Bandra, Mumbai, in the late hours of January 16, 2025.
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--lime)", fontWeight: "bold", fontFamily: "var(--font-space-mono)" }}>02</span>
                <div>
                  <strong style={{ color: "#fff" }}>Confrontation:</strong> The intruder confronted a member of the domestic household staff, leading to a heated and threatening argument.
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--lime)", fontWeight: "bold", fontFamily: "var(--font-space-mono)" }}>03</span>
                <div>
                  <strong style={{ color: "#fff" }}>Saif’s Intervention:</strong> Hearing the altercation, Saif immediately intervened to shield his family and staff. The confrontation turned violently physical.
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--lime)", fontWeight: "bold", fontFamily: "var(--font-space-mono)" }}>04</span>
                <div>
                  <strong style={{ color: "#fff" }}>Multiple Knife Wounds:</strong> The attacker, who was armed with two knives, stabbed Saif multiple times. Medical records indicated six separate stab wounds.
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--lime)", fontWeight: "bold", fontFamily: "var(--font-space-mono)" }}>05</span>
                <div>
                  <strong style={{ color: "#fff" }}>Emergency Surgery:</strong> Saif was rushed to Lilavati Hospital in Bandra, where an expert surgical team performed an intensive six-hour surgery to stabilize him and prevent vital organ damage.
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--lime)", fontWeight: "bold", fontFamily: "var(--font-space-mono)" }}>06</span>
                <div>
                  <strong style={{ color: "#fff" }}>Discharge &amp; Recovery:</strong> After days of intensive monitoring, Saif was discharged on January 21, 2025, to continue rehabilitation at home under heightened security.
                </div>
              </div>
            </div>
          </div>

          <h2>Where the Case Stands Now: Courtroom Updates</h2>
          <p>
            Following the violent assault, Mumbai Police launched a swift multi-team manhunt and arrested the prime accused within days. He has been identified in legal filings as <strong>Mohammad Shariful Islam</strong> (also documented as Shariful Fakir), an alleged Bangladeshi national.
          </p>
          <p>
            Legal proceedings in the case have seen notable procedural turns over recent months:
          </p>
          <ul>
            <li>
              <strong>Initial Plea:</strong> Charges including attempted murder and trespass were formally framed against the accused, to which he initially pleaded not guilty.
            </li>
            <li>
              <strong>Plea Rejection:</strong> Later in the proceedings, the accused submitted a formal plea asking the court to permit him to plead guilty. On September 11, the court rejected this request, directing that the full trial must continue to examine all forensic evidence and witnesses.
            </li>
            <li>
              <strong>Fresh Application:</strong> On October 8, the accused filed a renewed application seeking to plead guilty, which remains part of the judicial record.
            </li>
            <li>
              <strong>Trial Testimony:</strong> The trial has actively commenced. During the initial hearings, a key witness from Saif and Kareena’s domestic household staff took the stand, definitively identified the accused in the courtroom, and testified that the intruder demanded an extortion sum of ₹1 crore before the violent brawl broke out.
            </li>
          </ul>

          <h2>About Koffee With Karan Season 9: The Final Bow</h2>
          <p>
            This emotional episode arrives amidst the historic conclusion of the chat show itself. Earlier this year, creator and host Karan Johar announced that <strong>Season 9 is the final season</strong> of <em>Koffee With Karan</em>, bringing down the curtain on 22 years of pop-culture moments, high-profile controversies, and celebrity confessionals since its debut in 2004.
          </p>
          <p>
            The farewell season kicked off on October 14, 2026, with superstar Salman Khan gracing the couch as the premiere guest. Saif and Kareena’s appearance in Episode 4 anchors the season’s mid-point, balancing nostalgic humour with rare, vulnerable candour that fans seldom witness on entertainment broadcasts.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Bollywood aficionados have always admired Saif Ali Khan and Kareena Kapoor Khan for their poise, intellectual sharpness, and effortless screen chemistry. While Episode 4 delivers its share of witty one-liners and rapid-fire revelations, its true staying power lies in how transparently the couple addressed real-life terror.
          </p>
          <p>
            By sharing their vulnerability, their panic, and their gratitude, Saif and Kareena remind audiences that behind the high gates and stardom, survival and family protection come before everything else.
          </p>

          <p>
            <em>
              Stay tuned to Buzz Originals for comprehensive post-episode breakdowns, legal updates on the Saif Ali Khan stabbing trial, and exclusive scoops across Bollywood and Indian reality television.
            </em>
          </p>
        </div>

        {/* Contextual Read Next Section */}
        <section
          style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "24px",
              color: "#fff",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Read Next on Buzz Originals
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <Link
              href="/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "16px",
                display: "block",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "var(--magenta)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                KWK 9 TEASER
              </span>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "8px 0 0",
                  lineHeight: "1.4",
                }}
              >
                Koffee With Karan 9: Kareena Kapoor Calls Herself No. 1, Saif Says He Is “Miscast” →
              </h4>
            </Link>

            <Link
              href="/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "16px",
                display: "block",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "var(--lime)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                REALITY &amp; GOSSIP
              </span>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "8px 0 0",
                  lineHeight: "1.4",
                }}
              >
                Mira Rajput Says Shahid Kapoor Loves Gossip: Kapil Sharma Show Unseen Clip →
              </h4>
            </Link>

            <Link
              href="/ramayana-part-2-postponed-2028-namit-malhotra-trilogy"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "16px",
                display: "block",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "var(--magenta)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                CINEMA SCOOP
              </span>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "8px 0 0",
                  lineHeight: "1.4",
                }}
              >
                Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms, Hints at Trilogy →
              </h4>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
