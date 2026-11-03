import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Tiger Shroff Firing Case: 13th Arrest Made",
  description:
    "Mumbai Crime Branch has arrested a 22-year-old woman from Karnal in the Tiger Shroff firing case. Total arrests are now 13. Here is everything we know so far.",
  keywords: [
    "Tiger Shroff firing case",
    "Tiger Shroff firing case latest update",
    "Tiger Shroff firing case news",
    "Tiger Shroff firing incident Juhu",
    "Tiger Shroff firing case arrest",
    "Mumbai Crime Branch Tiger Shroff",
    "Tiger Shroff firing case 13 accused",
    "Tiger Shroff firing case MCOCA",
    "Tiger Shroff firing case Karnal woman arrested",
    "Bollywood celebrity firing case",
    "Lawrence Bishnoi gang Bollywood",
    "Salman Khan firing case 2024",
    "Rohit Shetty house firing",
    "Juhu firing incident",
    "Haryana Police Mumbai Crime Branch",
    "Delhi Police Special Cell arrest",
    "Tiger Shroff news",
    "Buzz Originals",
    "Subeha Pandit",
    "Anil Pandit gangster",
  ],
  openGraph: {
    title: "Tiger Shroff Firing Case: 13th Arrest Made",
    description:
      "Mumbai Crime Branch has arrested a 22-year-old woman from Karnal in the Tiger Shroff firing case. Total arrests are now 13. Here is everything we know so far.",
    url: "https://www.buzzoriginals.com/tiger-shroff-firing-case-13th-arrest-karnal-woman",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/tiger-shroff-firing-case-13th-arrest-karnal-woman.jpg",
        width: 1024,
        height: 576,
        alt: "Tiger Shroff Firing Case: 13th Arrest Made - Woman Arrested From Karnal — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T11:00:00.000Z",
    authors: ["Buzz Originals Crime & Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiger Shroff Firing Case: 13th Arrest Made",
    description:
      "Mumbai Crime Branch has arrested a 22-year-old woman from Karnal in the Tiger Shroff firing case. Total arrests are now 13. Here is everything we know so far.",
    images: ["/images/tiger-shroff-firing-case-13th-arrest-karnal-woman.jpg"],
  },
  alternates: {
    canonical: "/tiger-shroff-firing-case-13th-arrest-karnal-woman",
  },
};

export default function TigerShroffFiringCase13thArrestPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/tiger-shroff-firing-case-13th-arrest-karnal-woman";
  const pageTitle =
    "Tiger Shroff Firing Case: Woman Arrested From Karnal, 13 Accused Now in Custody";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/tiger-shroff-firing-case-13th-arrest-karnal-woman.jpg",
    ],
    datePublished: "2026-11-03T11:00:00+05:30",
    dateModified: "2026-11-03T11:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Crime & Entertainment Desk",
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
      "Mumbai Crime Branch has arrested a 22-year-old woman from Karnal in the Tiger Shroff firing case. Total arrests are now 13. Here is everything we know so far.",
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
        name: "News",
        item: "https://www.buzzoriginals.com/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tiger Shroff Firing 13th Arrest",
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
      <Header activeNav="News" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/news">NEWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>TIGER SHROFF FIRING CASE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🚨 Crime Breaking</span>
            <span className="badge lime">13th Arrest Made</span>
            <span className="badge">Bollywood Crime</span>
          </div>

          <h1 className="article-title">
            Tiger Shroff Firing Case: Woman Arrested From Karnal, 13 Accused Now in Custody
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Crime &amp; Entertainment Desk</span>
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
              src="/images/tiger-shroff-firing-case-13th-arrest-karnal-woman.jpg"
              alt="Tiger Shroff Firing Case: 13th Arrest Made - Woman Arrested From Karnal"
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
            Mumbai Crime Branch and Haryana Police apprehended a 22-year-old woman in Karnal, taking the total custody count in the Tiger Shroff Juhu firing investigation to 13. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Tiger Shroff Firing Case: Woman Arrested From Karnal, 13 Accused Now in Custody"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            The <strong>Tiger Shroff firing case</strong> has seen another major development. The <strong>Mumbai Crime Branch</strong> has arrested a 22-year-old woman from Karnal in Haryana, taking the total number of people arrested in the high-profile shootout investigation to <strong>13</strong>.
          </p>

          <p>
            The arrest highlights the sprawling interstate tentacles of the underworld syndicate that orchestrated the gun attack outside the Bollywood action star’s Juhu neighborhood on October 18, 2026.
          </p>

          <h2>What Happened in the Latest Arrest?</h2>
          <p>
            According to Mumbai Police, the 22-year-old suspect was taken into custody on <strong>November 1, 2026</strong>, following a joint raid executed by the Mumbai Crime Branch with operational assistance from the <strong>Haryana Police</strong>.
          </p>
          <p>
            Official sources name the arrested woman as <strong>Subeha Pandit</strong>. Investigators allege that she was directly linked to the logistical and financial machinery of the criminal syndicate executing the hit.
          </p>

          <h2>Who Is She Allegedly Linked To?</h2>
          <p>
            According to a report by the <em>Free Press Journal</em>, Subeha Pandit is the sister-in-law of <strong>Anil Pandit</strong>, the gangster whom Mumbai Police consider the primary mastermind behind the operation.
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li>
              <strong>The Money Trail:</strong> Sources indicate that Subeha allegedly handled bank transfers and cash distributions used to fund shelter, transit, and mobile devices for the shooters. Crime Branch cyber and financial forensics teams are currently auditing bank statements and UPI records to establish who received payments and in what amounts.
            </li>
            <li>
              <strong>Narrow Escape:</strong> In the same police action in Karnal, Anil Pandit’s brother reportedly managed to evade the dragnet and fled before the perimeter was locked down.
            </li>
            <li>
              <strong>MCOCA Court Custody:</strong> She is scheduled to be produced before the special MCOCA court in Mumbai on November 3, where police will seek extended police custody remand for interrogation.
            </li>
          </ul>

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
            “Investigators believe the syndicate utilized female associates intentionally to bypass inter-state police check-posts and manage bank accounts without raising red flags.”
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
              — Mumbai Crime Branch Investigation Source
            </span>
          </blockquote>

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
              Related Tiger Shroff coverage:{" "}
              <Link
                href="/tiger-shroff-first-public-appearance-after-firing-incident"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
              >
                Tiger Shroff to Make First Public Appearance After Firing Incident in Mumbai
              </Link>
            </p>
          </div>

          <h2>What Happened on 18 October?</h2>
          <p>
            The brazen firing took place around 7:00 PM on <strong>October 18, 2026</strong>, near Tiger Shroff’s residential enclave in Juhu. Two unidentified assailants on a motorcycle discharged multiple rounds toward the actor’s premises before fleeing into evening traffic.
          </p>
          <p>
            Local units at Juhu Police Station registered the initial FIR under attempt to murder and Arms Act charges. Recognizing the hallmark of an organized syndicate, the case was swiftly handed over to the Crime Branch.
          </p>

          <h2>Who Is Anil Pandit? The US-Based Hand</h2>
          <p>
            Anil Pandit is an Indian gangster currently believed to be operating from safe havens in the United States. Mumbai Police have named him as the primary wanted conspirator, informing the court that the shooters acted strictly under his remote instructions.
          </p>
          <p>
            Following the incident, an unverified audio clip surfaced online in which an individual claiming to be Pandit asserted that Tiger Shroff was targeted because he disregarded underworld warnings regarding his association and work with superstar Salman Khan. Police have treated the audio as unverified while cyber specialists analyze the voice signature.
          </p>

          <h2>Summary of All 13 Arrests So Far</h2>
          <p>
            With Subeha Pandit’s capture, the investigation has rounded up 13 individuals across four different states:
          </p>

          {/* Breakdown Table */}
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
                    Phase / Unit
                  </th>
                  <th style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Arrests &amp; Details
                  </th>
                  <th style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Shooters Caught</td>
                  <td style={{ padding: "10px 16px" }}>3 shooters nabbed (2 from Haryana, 1 from Bihar)</td>
                  <td style={{ padding: "10px 16px" }}>Kota, Rajasthan</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Arms Handlers</td>
                  <td style={{ padding: "10px 16px" }}>4 accused arrested, including women handlers Radha &amp; Babita who delivered weapons</td>
                  <td style={{ padding: "10px 16px" }}>Delhi Special Cell</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Logistics Network</td>
                  <td style={{ padding: "10px 16px" }}>5 additional gang operatives arrested for recce &amp; hideout support</td>
                  <td style={{ padding: "10px 16px" }}>Delhi &amp; Sonipat, Haryana</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>13th Accused</td>
                  <td style={{ padding: "10px 16px" }}>22-year-old Subeha Pandit (Anil Pandit&apos;s sister-in-law, alleged money trail)</td>
                  <td style={{ padding: "10px 16px" }}>Karnal, Haryana</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Strict MCOCA Charges Invoked</h2>
          <p>
            On <strong>October 27, 2026</strong>, the Crime Branch invoked the stringent provisions of the <strong>Maharashtra Control of Organised Crime Act (MCOCA), 1999</strong> against all members of the syndicate. Under MCOCA:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li>Confessions recorded before a senior police officer (DCP rank or above) become admissible as legal evidence.</li>
            <li>Securing bail is exceptionally stringent, with police entitled to retain accused in custody for extended durations to unpack organizational hierarchies.</li>
            <li>All assets and properties accrued via organized syndicate proceeds are liable to formal attachment.</li>
          </ul>

          <h2>Underworld Gangs Recruiting Vulnerable Youth Online</h2>
          <p>
            A troubling finding highlighted by investigators is that most of the 13 arrested accused are young adults aged between <strong>18 and 24 years</strong>.
          </p>
          <p>
            Police note that overseas gangs increasingly exploit social media algorithms—sharing slick reels featuring firearms, fast cars, and false assurances of visas or high-paying security jobs abroad. Several arrested suspects confessed during debriefings that they received little to no actual money, having fallen prey to online recruiters while their families faced acute financial strain.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            With Subeha Pandit being presented before the Mumbai MCOCA court on November 3, investigators are intensifying efforts to locate Anil Pandit’s brother and intercept financial conduits funding the interstate gang.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)", fontStyle: "italic" }}>
            Disclaimer: All individuals named are accused under the law and presumed innocent until proven guilty. The investigation remains active and subject to formal court proceedings.
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
              Related Crime &amp; Entertainment Coverage
            </h3>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.9" }}>
              <li>
                <Link
                  href="/tiger-shroff-first-public-appearance-after-firing-incident"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Tiger Shroff to Make First Public Appearance After Firing Incident
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
              <li>
                <Link
                  href="/shah-rukh-khan-61st-birthday-mannat-balcony"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Shah Rukh Khan Skips Midnight Greeting, Then Appears at Mannat on His 61st Birthday
                </Link>
              </li>
              <li>
                <Link
                  href="/bigg-boss-20-salman-khan-slams-scoutop-love-gill"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bigg Boss 20: Salman Khan Slams ScoutOP Over Love Gill: “Aap Kisi Ke Saath Loyal Nahin”
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
              "TigerShroff",
              "TigerShroffFiring",
              "MumbaiCrimeBranch",
              "MCOCA",
              "KarnalArrest",
              "AnilPandit",
              "HaryanaPolice",
              "JuhuFiring",
              "BollywoodCrime",
              "SalmanKhanWarning",
              "DelhiSpecialCell",
              "BreakingNews",
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
              title="Tiger Shroff Firing Case: Woman Arrested From Karnal, 13 Accused Now in Custody"
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
              href="/news"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              ← Back to News
            </Link>
            <Link
              href="/bollywood"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              Bollywood Hub →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
