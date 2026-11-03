import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Honey Trehan Slams New CBFC Advisory: Satluj Row",
  description:
    "Honey Trehan, director of Satluj, has reacted strongly to CBFC’s new advisory for filmmakers. Here’s what the rules say and why he is angry.",
  keywords: [
    "Honey Trehan",
    "CBFC new advisory",
    "CBFC new guidelines",
    "Satluj",
    "Satluj ZEE5",
    "Diljit Dosanjh",
    "Punjab 95",
    "Jaswant Singh Khalra",
    "CBFC guidelines for filmmakers",
    "film censorship India",
    "CBFC new board",
    "Honey Trehan Instagram story",
    "Suryaa Delhi High Court",
    "Shashi Shekhar Vempati",
    "Rajendra Singh CBFC",
    "Bollywood censorship",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Honey Trehan Slams New CBFC Advisory: Satluj Row",
    description:
      "Honey Trehan, director of Satluj, has reacted strongly to CBFC’s new advisory for filmmakers. Here’s what the rules say and why he is angry.",
    url: "https://www.buzzoriginals.com/honey-trehan-slams-new-cbfc-advisory-satluj",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/honey-trehan-slams-new-cbfc-advisory-satluj.jpg",
        width: 1024,
        height: 576,
        alt: "Honey Trehan Slams New CBFC Advisory: Satluj Director Calls Guidelines Dictatorship",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T14:22:00.000Z",
    authors: ["Buzz Originals Entertainment & Cinema Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Trehan Slams New CBFC Advisory: Satluj Row",
    description:
      "Honey Trehan, director of Satluj, has reacted strongly to CBFC’s new advisory for filmmakers. Here’s what the rules say and why he is angry.",
    images: ["/images/honey-trehan-slams-new-cbfc-advisory-satluj.jpg"],
  },
  alternates: {
    canonical: "/honey-trehan-slams-new-cbfc-advisory-satluj",
  },
};

export default function HoneyTrehanCbfcAdvisoryPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/honey-trehan-slams-new-cbfc-advisory-satluj";
  const pageTitle =
    "Satluj Director Honey Trehan Slams CBFC’s New Advisory: “Cowardice and Dictatorship”";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/honey-trehan-slams-new-cbfc-advisory-satluj.jpg",
    ],
    datePublished: "2026-11-03T14:22:00+05:30",
    dateModified: "2026-11-03T14:22:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Entertainment & Cinema Desk",
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
      "Honey Trehan, director of Satluj, has reacted strongly to CBFC’s new advisory for filmmakers. Here’s what the rules say and why he is angry.",
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
        name: "Honey Trehan Slams CBFC Advisory",
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
          <span style={{ color: "var(--lavender)" }}>HONEY TREHAN VS CBFC</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">⚡ Censorship Clash</span>
            <span className="badge lime">CBFC Advisory Row</span>
            <span className="badge">Bollywood &amp; Legal</span>
          </div>

          <h1 className="article-title">
            Satluj Director Honey Trehan Slams CBFC’s New Advisory: “Cowardice and Dictatorship”
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment &amp; Cinema Desk</span>
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
              src="/images/honey-trehan-slams-new-cbfc-advisory-satluj.jpg"
              alt="Honey Trehan Slams New CBFC Advisory: Satluj Director Calls Guidelines Dictatorship"
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
            Honey Trehan, director of Diljit Dosanjh’s Satluj (formerly Punjab ‘95), calls the new CBFC guidelines an attack on creative democracy. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Honey Trehan Slams New CBFC Advisory: Satluj Row"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Film director and acclaimed casting director <strong>Honey Trehan</strong>, known for helming Diljit Dosanjh’s unreleased biographical drama <em>Satluj</em>, has launched a blistering attack on the Central Board of Film Certification (CBFC) following its contentious new advisory issued to Indian filmmakers. Taking to his official Instagram Story, Trehan labeled the latest strictures as an exercise in cowardice and administrative overreach.
          </p>

          <p>
            Trehan’s outspoken condemnation arrives amidst heightened anxiety across the Hindi and regional film industries, where directors and independent studios fear that the reconstituted censor board is systematically tightening creative control under the guise of procedural discipline.
          </p>

          {/* Key Facts Summary Box */}
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
              ⚡ Fast Breakdown: Honey Trehan vs CBFC
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>The Outburst:</strong> Honey Trehan calls CBFC&apos;s new advisory “cowardice and dictatorship in the country.”
              </li>
              <li>
                <strong>The Advisory:</strong> Signed by CBFC CEO Rajendra Singh on Oct 26, 2026; mandates only 100% finished films with final score/VFX will be examined.
              </li>
              <li>
                <strong>Title Scrutiny:</strong> CBFC can check and alter promotional titles even after marketing campaigns launch.
              </li>
              <li>
                <strong>Trehan’s History:</strong> His film <em>Punjab ‘95</em> / <em>Satluj</em> faced 127 proposed cuts before being pulled from ZEE5 within 48 hours.
              </li>
            </ul>
          </div>

          <h2>What Did Honey Trehan Say on Instagram?</h2>
          <p>
            Shortly after details of the CBFC&apos;s new regulatory circular became public on November 2, Trehan shared a direct, strongly worded rebuke on his Instagram Story:
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
            “These new guidelines show cowardice and dictatorship in the country, not a democratic approach to freedom of expression.”
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
              — Honey Trehan on Instagram Story
            </span>
          </blockquote>

          <p>
            His words carry significant emotional weight across Mumbai’s film circles because few contemporary directors have fought as protracted and exhausting a censorship battle as Trehan has over the last three years.
          </p>

          <h2>What Is Inside the New CBFC Advisory for Filmmakers?</h2>
          <p>
            The official advisory is signed by CBFC Chief Executive Officer <strong>Rajendra Singh</strong>. Issued formally on <strong>October 26, 2026</strong>, and circulated widely to production guilds and studios in early November, it constitutes the first major policy mandate since the central certification body was reconstituted.
          </p>
          <p>
            The notice lays down rigid prerequisites for film certification:
          </p>

          {/* Rules Breakdown Table */}
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
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--lime)" }}>RULE MANDATE</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--lime)" }}>CBFC SPECIFICATION</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "var(--lime)" }}>INDUSTRY IMPACT</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Only 100% Finished Cuts</td>
                  <td style={{ padding: "12px 16px" }}>
                    Submissions must include completed visual effects, complete final background score, mixed audio, and full accessibility features (audio descriptions &amp; closed captions).
                  </td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>
                    Eliminates rough-cut preview screenings, delaying early advance booking approvals.
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Rejection of Incomplete Work</td>
                  <td style={{ padding: "12px 16px" }}>
                    Placeholder graphics, temporary voiceovers, or unfinalized CGI render passes will be treated as non-compliant and rejected outright without review.
                  </td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>
                    Producers face cancellation of scheduled committee slots and financial losses.
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Promotional Titles Subject to Change</td>
                  <td style={{ padding: "12px 16px" }}>
                    Announced titles used in marketing campaigns remain provisional. The Examining or Revising Committee retains statutory power to alter the title.
                  </td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>
                    Direct echo of <em>Punjab &apos;95</em> to <em>Satluj</em>, and <em>Padmavati</em> to <em>Padmaavat</em>.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Disregard for Release Dates</td>
                  <td style={{ padding: "12px 16px" }}>
                    CBFC explicitly disclaims liability for commercial release calendar deadlines. Certification will strictly proceed on the board&apos;s internal calendar.
                  </td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)" }}>
                    Distributors cannot compel emergency weekend screenings by citing release dates.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
              href="/diljit-dosanjh-aura-india-tour-hurdles"
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles: “I’m Not Going Anywhere” →
            </Link>
          </div>

          <h2>Who Sits on the Newly Reconstituted CBFC Board?</h2>
          <p>
            The Union Ministry of Information and Broadcasting recently notified an 18-member reconstituted board—the first foundational overhaul of the film certification governing body since 2017.
          </p>
          <p>
            Chaired by former Prasar Bharati CEO <strong>Shashi Shekhar Vempati</strong>, the board includes a mix of prominent cinematic personalities, cultural figures, and industry stalwarts:
          </p>
          <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", color: "var(--lavender)" }}>
            <li><strong>Preity Zinta</strong> (Actor &amp; Producer)</li>
            <li><strong>Pankaj Tripathi</strong> (National Award-winning Actor)</li>
            <li><strong>Suniel Shetty</strong> (Actor &amp; Investor)</li>
            <li><strong>Pallavi Joshi</strong> (National Award-winning Actor &amp; Producer)</li>
            <li><strong>Priyadarshan</strong> (Veteran Filmmaker &amp; Director)</li>
            <li><strong>Ricky Kej</strong> (Three-time Grammy Award-winning Musician)</li>
          </ul>

          <h2>Why Is Trehan So Furious? The Painful Saga of <em>Satluj</em></h2>
          <p>
            Honey Trehan’s indignation is deeply rooted in personal history. His biographical feature was originally titled <strong>Punjab &apos;95</strong>, chronicling the courageous life and tragic disappearance of renowned human rights activist <strong>Jaswant Singh Khalra</strong>, portrayed on screen by superstar <strong>Diljit Dosanjh</strong>.
          </p>
          <p>
            When submitted for theatrical certification, the CBFC initially recommended 21 cuts. However, upon multiple revising committee reviews, the list of demanded modifications ballooned to a staggering <strong>127 cuts</strong>, alongside a mandate to purge Jaswant Singh Khalra’s name entirely from the film.
          </p>
          <p>
            Unwilling to mutilate the historical authenticity of the subject, the producers withdrew the film from theatrical release channels. They rebranded the drama as <em>Satluj</em> and released the uncut version directly on streaming platform <strong>ZEE5</strong>—taking advantage of the legal framework wherein digital OTT streaming currently bypasses prior CBFC certification.
          </p>
          <p>
            Yet, in a shocking twist, within roughly 48 hours of its digital debut, <em>Satluj</em> was abruptly stripped down from ZEE5’s servers following sudden governmental notices citing national security sensitivities and IT Rules compliance. The producers have consistently maintained that the film is a patriotic tribute to justice and constitutional rights.
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
              href="/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore"
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              Ram Gopal Varma in Legal Trouble Over ₹29.67 Crore: Notice to OTTs and Producers →
            </Link>
          </div>

          <h2>Another Film Caught in the Crosshairs: Sunny Deol’s <em>Suryaa</em></h2>
          <p>
            The advisory lands at a time of escalating judicial friction over cinema content. Just this week, the <strong>Delhi High Court</strong> issued formal notices to the Ministry of Information and Broadcasting, the CBFC, and the producers of Sunny Deol’s upcoming action drama <strong>Suryaa: Ant Se Aarambh Tak</strong>.
          </p>
          <p>
            A collective of medical practitioners and healthcare associations moved the High Court, contending that the promotional teaser depicts private hospital doctors as corrupt and predatory, potentially inciting real-world hostility and violence against medical professionals. With <em>Suryaa</em> slated for theatrical release on <strong>November 20, 2026</strong>, and the next judicial hearing set for <strong>November 16</strong>, the CBFC finds itself squeezed between judicial scrutiny and accusations of heavy-handed censorship.
          </p>

          <h2>What Happens Next for Indian Filmmakers?</h2>
          <p>
            With CEO Rajendra Singh’s circular taking immediate effect, Indian producers will be forced to drastically rethink post-production schedules. Gone are the days when rough edits could be certified weeks in advance while visual effects artists raced to complete finals days before release.
          </p>
          <p>
            Whether these guidelines streamline the certification process or represent another layer of bureaucratic chokehold remains the burning question rattling Indian cinema today.
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for deeper investigations, insider perspectives, and breaking updates on India’s biggest cinema battles.
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
              "HoneyTrehan",
              "CBFC",
              "Satluj",
              "DiljitDosanjh",
              "Punjab95",
              "JaswantSinghKhalra",
              "FilmCensorship",
              "BollywoodNews",
              "Suryaa",
              "SunnyDeol",
              "FreedomOfExpression",
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
              title="Honey Trehan Slams New CBFC Advisory: Satluj Row"
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
