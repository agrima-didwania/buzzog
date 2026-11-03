import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Tusshar Kapoor Extortion Call: Police Suspect Hoax",
  description:
    "Tusshar Kapoor got a Rs 5 crore extortion call in the Lawrence Bishnoi gang’s name. Mumbai Police say the voice doesn’t match. Read what we know.",
  keywords: [
    "Tusshar Kapoor extortion call",
    "Tusshar Kapoor threat call",
    "Lawrence Bishnoi gang",
    "Harry Boxer",
    "Tusshar Kapoor Rs 5 crore",
    "Bollywood extortion news",
    "Mumbai Crime Branch",
    "Is Tusshar Kapoor’s threat call fake",
    "Who is Harry Boxer",
    "Why do police suspect the Tusshar Kapoor call is fake",
    "Bishnoi gang Bollywood threats 2026",
    "Tiger Shroff firing case latest update",
    "Tusshar Kapoor",
    "Lawrence Bishnoi",
    "Tiger Shroff",
    "Celebrity Threat",
    "Mumbai Police",
    "Anti-Extortion Cell",
    "Golmaal 5",
    "Rohit Shetty",
    "Bollywood news today",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Tusshar Kapoor Extortion Call: Police Suspect Hoax",
    description:
      "Tusshar Kapoor got a Rs 5 crore extortion call in the Lawrence Bishnoi gang’s name. Mumbai Police say the voice doesn’t match. Read what we know.",
    url: "https://www.buzzoriginals.com/tusshar-kapoor-extortion-call-bishnoi-gang-fake",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/tusshar-kapoor-extortion-call-bishnoi-gang-fake.jpg",
        width: 1024,
        height: 576,
        alt: "Tusshar Kapoor Extortion Call: Mumbai Police Suspect Rs 5 Crore Threat in Bishnoi Gang Name Is a Hoax",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T16:20:00.000Z",
    authors: ["Buzz Originals Crime & Bollywood Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tusshar Kapoor Extortion Call: Police Suspect Hoax",
    description:
      "Tusshar Kapoor got a Rs 5 crore extortion call in the Lawrence Bishnoi gang’s name. Mumbai Police say the voice doesn’t match. Read what we know.",
    images: ["/images/tusshar-kapoor-extortion-call-bishnoi-gang-fake.jpg"],
  },
  alternates: {
    canonical: "/tusshar-kapoor-extortion-call-bishnoi-gang-fake",
  },
};

export default function TussharKapoorExtortionCallPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/tusshar-kapoor-extortion-call-bishnoi-gang-fake";
  const pageTitle =
    "Tusshar Kapoor Gets Rs 5 Crore Extortion Call in Bishnoi Gang’s Name, But Police Say It May Be Fake";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/tusshar-kapoor-extortion-call-bishnoi-gang-fake.jpg",
    ],
    datePublished: "2026-11-03T16:20:00+05:30",
    dateModified: "2026-11-03T16:20:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Crime & Bollywood Desk",
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
      "Tusshar Kapoor got a Rs 5 crore extortion call in the Lawrence Bishnoi gang’s name. Mumbai Police say the voice doesn’t match. Read what we know.",
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
        name: "Tusshar Kapoor Extortion Call",
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
          <span style={{ color: "var(--lavender)" }}>TUSSHAR KAPOOR EXTORTION CALL</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🚨 Crime Alert</span>
            <span className="badge lime">₹5 Crore Threat</span>
            <span className="badge">Mumbai Police Probe</span>
          </div>

          <h1 className="article-title">
            Tusshar Kapoor Gets Rs 5 Crore Extortion Call in Bishnoi Gang’s Name, But Police Say It May Be Fake
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Crime &amp; Bollywood Desk</span>
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
              src="/images/tusshar-kapoor-extortion-call-bishnoi-gang-fake.jpg"
              alt="Tusshar Kapoor Extortion Call: Mumbai Police Suspect Rs 5 Crore Threat in Bishnoi Gang Name Is a Hoax"
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
            Mumbai Crime Branch and Anti-Extortion Cell investigate ₹5 crore threat issued to Tusshar Kapoor using Lawrence Bishnoi aide Harry Boxer’s alias. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Tusshar Kapoor Extortion Call: Police Suspect Hoax"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Bollywood actor <strong>Tusshar Kapoor</strong> has reportedly received a chilling extortion call demanding ₹5 crore in the name of the notorious <strong>Lawrence Bishnoi gang</strong>. The caller claimed to be gang operative <strong>Harry Boxer</strong>. However, in a major twist to the high-profile probe, <strong>Mumbai Police</strong> now suspect that the <strong>Tusshar Kapoor extortion call</strong> may be an elaborate hoax engineered to intimidate the actor.
          </p>

          <p>
            The frightening communication sent shockwaves through Mumbai’s film fraternity, coming on the heels of the recent brazen firing outside Tiger Shroff’s Juhu residence. Tusshar acted promptly without succumbing to panic and lodged an immediate complaint with law enforcement.
          </p>

          {/* Fast Breakdown Summary Box */}
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
              ⚡ Fast Breakdown: Tusshar Kapoor Extortion Threat
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>The Extortion Demand:</strong> Caller demanded ₹5 crore using the name of Lawrence Bishnoi gang member Harry Boxer.
              </li>
              <li>
                <strong>The Forensic Twist:</strong> Mumbai Police Crime Branch compared voice samples with Harry Boxer’s authentic recordings — the voice samples did not match.
              </li>
              <li>
                <strong>Joint Investigation:</strong> Anti-Extortion Cell (AEC) and Crime Branch technical units are actively tracing the IP and telecommunication origin.
              </li>
              <li>
                <strong>Current Status:</strong> Police suspect an opportunist caller used the syndicate’s notorious brand value for extortion, but probe remains active.
              </li>
            </ul>
          </div>

          <h2>What Happened?</h2>
          <p>
            According to reports surfacing on <strong>November 3, 2026</strong>, Tusshar Kapoor received a voice message and follow-up call from an unidentified international virtual number. The caller introduced himself as Harry Boxer, an overseas associate affiliated with the syndicate led by jailed gangster Lawrence Bishnoi and fugitive handler Goldy Brar.
          </p>
          <p>
            The caller issued explicit threats of bodily harm and demanded a sum of <strong>₹5 crore</strong> to be routed through illicit channels. Recognizing the gravity of extortion threats involving syndicate names, Tusshar immediately alerted senior police officials.
          </p>

          <h2>Who Is Investigating?</h2>
          <p>
            Taking no chances given recent underworld flare-ups in the suburbs, the Mumbai Police Commissionerate swiftly assigned the complaint to two premier investigative wings:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li>
              <strong>The Anti-Extortion Cell (AEC):</strong> The specialized unit tasked with monitoring organized underworld syndicates, extortion syndicates, and hawala conduits.
            </li>
            <li>
              <strong>The Mumbai Crime Branch:</strong> Utilizing cyber surveillance and cyber intelligence teams to trace the origin of the virtual VoIP router used to place the call.
            </li>
          </ul>

          {/* Contextual Internal Link */}
          <div
            style={{
              borderLeft: "3px solid var(--pink)",
              background: "rgba(255, 0, 128, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Related Investigation:{" "}
            <Link
              href="/tiger-shroff-firing-case-13th-arrest-karnal-woman"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Tiger Shroff Firing Case: 13th Arrest Made as 22-Year-Old Woman Held in Karnal
            </Link>
          </div>

          <h2>Why Do Police Think the Call Is Fake?</h2>
          <p>
            The Crime Branch’s technical analysis wing performed audio forensic testing on the voice recording delivered to Kapoor. State forensic labs compared the pitch, acoustic signature, and dialect markers against official authenticated voice samples of <strong>Harry Boxer</strong> that intelligence agencies already possess in their database.
          </p>
          <p>
            The preliminary acoustic comparison indicated that <strong>the voices do not match</strong>.
          </p>
          <p>
            Investigators now believe that an opportunistic fraudster or local gang sympathizer may have deliberately exploited the Lawrence Bishnoi moniker to create terror and coerce quick payment from the actor. Police are now working with telecom carriers and cyber cells to determine the digital footprint of the sender.
          </p>

          <h2>Why Is This News Getting Attention?</h2>
          <p>
            The scare surrounding Tusshar Kapoor arrives during a period of intense public anxiety over celebrity security in Mumbai. Underworld threats toward prominent entertainment personalities have escalated drastically in 2026:
          </p>

          {/* Key Parallel Incidents */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "18px",
              margin: "20px 0",
            }}
          >
            <h3 style={{ color: "#fff", fontSize: "16px", marginBottom: "10px" }}>
              The Tiger Shroff Firing Precedent:
            </h3>
            <ul style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px", color: "var(--lavender)" }}>
              <li>
                <strong>October 18 Attack:</strong> Two motorcycle-borne assailants fired five rounds at Tiger Shroff’s luxury SUV outside his Juhu residence.
              </li>
              <li>
                <strong>Casualties:</strong> While Tiger escaped unhurt, his personal chauffeur and an innocent vlogger bystander sustained bullet injuries.
              </li>
              <li>
                <strong>Bishnoi Link:</strong> Gang operatives claimed responsibility online, prompting police to declare Bishnoi aide Anil Pandit a wanted mastermind.
              </li>
              <li>
                <strong>13 Arrests:</strong> Law enforcement teams from Rajasthan, Delhi Special Cell, and Haryana have rounded up 13 suspects so far.
              </li>
              <li>
                <strong>MCOCA Invoked:</strong> On October 27, Mumbai Police invoked the stringent Maharashtra Control of Organised Crime Act (MCOCA) against the syndicate.
              </li>
            </ul>
          </div>

          <p>
            With other leading Bollywood figures—including <strong>Salman Khan</strong>, filmmaker <strong>Rohit Shetty</strong>, and <strong>Ranveer Singh</strong>—having received security upgrades or threats linked to the Bishnoi gang network, police treated Tusshar’s complaint with immediate tactical urgency.
          </p>

          {/* Another Internal Link */}
          <div
            style={{
              borderLeft: "3px solid var(--lime)",
              background: "rgba(0, 255, 128, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Also Read:{" "}
            <Link
              href="/chandan-roy-aakhri-ride-interview"
              style={{ color: "var(--pink)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Chandan Roy on Aakhri Ride: Nine Years in Mumbai &amp; Anurag Kashyap’s Support
            </Link>
          </div>

          <h2>What Is Tusshar Kapoor Working On?</h2>
          <p>
            On the professional front, Tusshar Kapoor is gearing up for the shoot of <strong>Golmaal 5</strong>, the eagerly anticipated fifth installment of the blockbuster comedy franchise directed by <strong>Rohit Shetty</strong>.
          </p>
          <p>
            Kapoor has been an indispensable pillar of the ensemble since the inception of <em>Golmaal: Fun Unlimited</em> in 2006, creating one of Indian cinema’s most beloved comedy characters with his iconic portrayal of the mute, expressive Lucky.
          </p>

          <h2>Is the Threat Real or Fake? Current Case Status</h2>
          <p>
            While initial forensic voice analysis indicates a mismatch with known gangster recordings, Mumbai Police maintain that the investigation is far from concluded.
          </p>

          {/* Status Matrix Table */}
          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.05)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Investigation Parameter</th>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Official Status / Police Finding</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Extortion Amount</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>₹5 Crore demanded from actor</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Claimed Caller Identity</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Harry Boxer (Lawrence Bishnoi Syndicate)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Voice Forensic Check</td>
                  <td style={{ padding: "12px 16px", color: "var(--lime)" }}>Mismatch detected against police voice repository</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Probable Modus Operandi</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Hoax or rogue opportunist leveraging Bishnoi syndicate terror</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Investigating Units</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Anti-Extortion Cell (AEC) &amp; Mumbai Crime Branch</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Arrests Made So Far</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Zero in Kapoor case; IP/VoIP tracking in progress</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Law enforcement officials have advised Bollywood production houses and actors to remain vigilant and report any suspicious virtual numbers immediately. Security patrols around Kapoor’s Juhu vicinity have been reinforced as a precautionary measure while cyber forensics trace the caller.
          </p>

          <p>
            Buzz Originals will continue to provide live updates as the Crime Branch reveals the identity behind the caller.
          </p>

          {/* Tags List */}
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
              "TussharKapoor",
              "LawrenceBishnoi",
              "HarryBoxer",
              "TigerShroff",
              "BollywoodNews",
              "CelebrityThreat",
              "MumbaiPolice",
              "CrimeBranch",
              "AntiExtortionCell",
              "Golmaal5",
              "RohitShetty",
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
              title="Tusshar Kapoor Extortion Call: Police Suspect Hoax"
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
              href="/news"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              News Desk →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
