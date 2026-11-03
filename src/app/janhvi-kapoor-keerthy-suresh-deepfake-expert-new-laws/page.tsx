import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Janhvi Kapoor Deepfake: Expert Demands Strict AI Laws",
  description:
    "Janhvi Kapoor and Keerthy Suresh were hit by deepfakes. A VFX expert wants bold AI labels by law. Read what happened.",
  keywords: [
    "Janhvi Kapoor deepfake",
    "Keerthy Suresh deepfake",
    "Janhvi Kapoor AI video",
    "deepfake laws in India",
    "AI content labelling",
    "Jr NTR Chuttamalle deepfake",
    "Bollywood deepfake news",
    "Janhvi Kapoor",
    "Keerthy Suresh",
    "Deepfake",
    "AI Misuse",
    "Jr NTR",
    "Bollywood News",
    "Buzz Originals",
    "CB Arun Kumar",
    "Cyber crime India",
  ],
  openGraph: {
    title: "Janhvi Kapoor Deepfake: Expert Demands Strict AI Laws",
    description:
      "Janhvi Kapoor and Keerthy Suresh were hit by deepfakes. A VFX expert wants bold AI labels by law. Read what happened.",
    url: "https://www.buzzoriginals.com/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws.jpg",
        width: 1024,
        height: 576,
        alt: "Janhvi Kapoor and Keerthy Suresh Deepfake: Expert Demands Strict AI Laws",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T13:00:00.000Z",
    authors: ["Buzz Originals Entertainment & Tech Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janhvi Kapoor Deepfake: Expert Demands Strict AI Laws",
    description:
      "Janhvi Kapoor and Keerthy Suresh were hit by deepfakes. A VFX expert wants bold AI labels by law. Read what happened.",
    images: ["/images/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws.jpg"],
  },
  alternates: {
    canonical: "/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws",
  },
};

export default function JanhviKeerthyDeepfakeExpertPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws";
  const pageTitle =
    "Janhvi Kapoor and Keerthy Suresh Hit by Deepfakes: Expert Demands Strict AI Laws";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws.jpg",
    ],
    datePublished: "2026-11-03T13:00:00+05:30",
    dateModified: "2026-11-03T13:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Entertainment & Tech Desk",
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
      "Janhvi Kapoor and Keerthy Suresh were hit by deepfakes. A VFX expert wants bold AI labels by law. Read what happened.",
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
        name: "Janhvi Kapoor Deepfake Row",
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
          <span style={{ color: "var(--lavender)" }}>JANHVI &amp; KEERTHY DEEPFAKE ROW</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">⚠️ Cyber Controversy</span>
            <span className="badge lime">Strict AI Laws Demanded</span>
            <span className="badge">Bollywood &amp; Tech</span>
          </div>

          <h1 className="article-title">
            Janhvi Kapoor and Keerthy Suresh Hit by Deepfakes: Expert Demands Strict AI Laws
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment &amp; Tech Desk</span>
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
              src="/images/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws.jpg"
              alt="Janhvi Kapoor and Keerthy Suresh Deepfake: Expert Demands Strict AI Laws"
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
            Janhvi Kapoor and Keerthy Suresh targeted by manipulated AI content, prompting industry experts and legal authorities to demand strict statutory AI watermarking in India. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Janhvi Kapoor and Keerthy Suresh Hit by Deepfakes: Expert Demands Strict AI Laws"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Artificial intelligence misuse in the Indian entertainment industry has escalated dramatically, with leading stars <strong>Janhvi Kapoor</strong> and National Award-winner <strong>Keerthy Suresh</strong> emerging as the latest targets of sexually explicit and non-consensual AI-manipulated media. In the wake of intense outrage, leading industry professionals are now urging the central government to enforce strict, mandatory statutory labelling laws on synthetic content.
          </p>

          <p>
            The rapid proliferation of sophisticated deepfake generators has highlighted severe vulnerabilities in digital consent, sparking fierce debates across Bollywood and regional film industries on how to protect privacy and personality rights in the age of generative tech.
          </p>

          <h2>What Happened to Janhvi Kapoor?</h2>
          <p>
            A fabricated, sexually explicit video featuring Janhvi Kapoor surfaced across social media platforms and encrypted messaging groups in early October 2026. The creators extracted visual sequences from <em>Chuttamalle</em>, her chartbuster song alongside <strong>Jr NTR</strong> from Koratala Siva’s blockbuster <em>Devara: Part 1</em> (2024), and digitally superimposed her face and likeness into explicit adult content.
          </p>
          <p>
            Co-star <strong>Jr NTR</strong> was among the first prominent figures to react, condemning the malicious clip and calling for prompt criminal prosecution while urging netizens to refrain from viewing, forwarding, or hosting the synthetic footage. Veteran actor and politician <strong>Khushbu Sundar</strong> likewise censured the malicious act, calling it a gross violation of female dignity.
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
            “The weaponisation of this technology is deeply violating, bordering on sexual assault. Almost every woman in my industry has faced some version of this, and the normalization of digital harassment cannot be tolerated.”
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
              — Janhvi Kapoor on Instagram
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
              Related Janhvi Kapoor coverage:{" "}
              <Link
                href="/janhvi-kapoor-peddi-controversy-koffee-with-karan-9"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
              >
                Janhvi Kapoor Breaks Silence on Peddi Controversy: “A Violating Experience”
              </Link>{" "}
              and{" "}
              <Link
                href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
                style={{ color: "var(--lime)", textDecoration: "underline" }}
              >
                Cyber Crime Complaint Filed in Hyderabad Over Leaked Celebrity Materials
              </Link>
              .
            </p>
          </div>

          <h2>What About Keerthy Suresh &amp; Widespread Industry Targets?</h2>
          <p>
            Acclaimed actress <strong>Keerthy Suresh</strong> voiced profound shock after discovering synthetic, AI-manipulated photographs of herself circulating on Reddit and X (formerly Twitter). She highlighted the sinister threat posed by freely accessible generative AI suites, noting that actresses are repeatedly targeted without consent.
          </p>
          <p>
            She joins a growing roster of female artists who have taken a stand:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li><strong>Sunainaa:</strong> Warned malicious handles of severe legal repercussions after synthetic clips surfaced online.</li>
            <li><strong>Rashmika Mandanna:</strong> Whose viral November 2023 elevator deepfake triggered national outcry and initial IT rule advisories.</li>
            <li><strong>Katrina Kaif, Alia Bhatt &amp; Samantha Ruth Prabhu:</strong> Who have all been targeted by hyper-realistic cloned imagery and voice-cloning software in recent months.</li>
          </ul>

          <h2>What Does the VFX &amp; Tech Expert Say?</h2>
          <p>
            Prominent VFX veteran <strong>CB Arun Kumar</strong>, Dean of Communications, Film and Gaming at Pearl Academy, broke down the technical, cultural, and legal remedies urgently required:
          </p>

          {/* Expert Recommendations Table */}
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
                    Key Recommendation
                  </th>
                  <th style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Expert Rationale
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Compulsory AI Watermarking</td>
                  <td style={{ padding: "10px 16px" }}>Enact statutory legislation mandating bold, indelible, visual and cryptographic metadata labels identifying synthetic media.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Platform Algorithmic Responsibility</td>
                  <td style={{ padding: "10px 16px" }}>Social networks must deploy AI classifiers at ingest to flag and label manipulated videos before algorithmic amplification.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Speed vs Historical Tooling</td>
                  <td style={{ padding: "10px 16px" }}>Image manipulation existed during the Photoshop era, but generative diffusion models allow instant creation and frictionless virality.</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Artist Empowerment</td>
                  <td style={{ padding: "10px 16px" }}>Digital creators and animators should master AI tooling responsibly rather than fear it, establishing ethical industry benchmarks.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What Is the Legal Situation in India?</h2>
          <p>
            While India’s Ministry of Electronics and Information Technology (MeitY) has issued recurring advisories under the IT Act, 2000, and the IT Rules, 2021, regulatory enforcement continues to evolve:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li><strong>Personality Rights Protection:</strong> In August 2026, the <strong>Delhi High Court</strong> passed an omnibus interim order protecting the personality, image, and publicity rights of Janhvi Kapoor and her sister Khushi Kapoor, restraining unauthorized commercial or derogatory use of their likeness.</li>
            <li><strong>Digital Takedowns:</strong> While links on major cloud platforms including Google Drive were swiftly taken down following infringement notices, investigative reports note that persistent mirrors remain on unregulated offshore adult domains.</li>
            <li><strong>Proposed IT Legislation:</strong> Reuters reports that the central government is currently finalizing stringent IT rule amendments that will penalize intermediaries and generative AI platforms that fail to watermark or identify synthetic content.</li>
          </ul>

          <h2>Why This Matters: Preserving Digital Dignity</h2>
          <p>
            Deepfakes are not victimless technological novelties. In a matter of minutes, an AI-generated clip can inflict severe reputational damage, psychological trauma, and personal distress. Because synthetic media persists across fragmented server mirrors, preventative labelling and aggressive criminal liability are essential to safeguarding women across society.
          </p>

          <h2>How You Can Help Prevent Deepfake Spread</h2>
          <p>
            Cyber experts urge citizens and internet users to maintain vigilant digital hygiene:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li><strong>Do Not Share:</strong> Never forward, retweet, or amplify suspicious media, even out of curiosity or as satire.</li>
            <li><strong>Spot the Artifacts:</strong> Look for visual giveaways such as mismatched audio-lip synchronisation, flickering hairline borders, abnormal blink frequencies, and inconsistent lighting shadows.</li>
            <li><strong>Report Immediately:</strong> Utilize in-app reporting tools on platforms to flag synthetic non-consensual media.</li>
            <li><strong>Cybercrime Grievance:</strong> If you or anyone you know is targeted, lodge a formal report at <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime)", textDecoration: "underline" }}>cybercrime.gov.in</a> or call the National Cyber Crime Helpline at <strong>1930</strong>.</li>
          </ul>

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
              Related Bollywood &amp; News Coverage
            </h3>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.9" }}>
              <li>
                <Link
                  href="/ramayana-advance-booking-73-crore-ranbir-kapoor"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Ramayana Advance Booking: Ranbir Kapoor’s Film Crosses Rs 73.40 Crore Before Release
                </Link>
              </li>
              <li>
                <Link
                  href="/tiger-shroff-firing-case-13th-arrest-karnal-woman"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Tiger Shroff Firing Case: 13th Arrest Made in Karnal
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
                  href="/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Janhvi Kapoor’s “Concert” Advice for Veer Pahariya on Koffee With Karan
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
              "JanhviKapoor",
              "KeerthySuresh",
              "Deepfake",
              "AIMisuse",
              "JrNTR",
              "BollywoodNews",
              "CyberCrime",
              "AILaws",
              "PersonalityRights",
              "Devara",
              "TechPolicy",
              "Chuttamalle",
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
              title="Janhvi Kapoor and Keerthy Suresh Hit by Deepfakes: Expert Demands Strict AI Laws"
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
