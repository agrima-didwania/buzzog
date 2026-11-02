import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Bigg Boss 20: Salman Khan Slams ScoutOP Over Love Gill",
  description:
    "Salman Khan came down hard on ScoutOP in Bigg Boss 20 Weekend Ka Vaar for not backing Love Gill. Here’s what he said and what led to it.",
  keywords: [
    "Bigg Boss 20",
    "Salman Khan",
    "ScoutOP",
    "Love Gill",
    "Weekend Ka Vaar",
    "Kaashvi Hiranandani",
    "Rohit Shetty",
    "Tanmay Singh",
    "Lovepreet Kaur Gill",
    "ScoutOP Love Gill",
    "Salman Khan slams ScoutOP",
    "Yung DSA",
    "Aasif Khan",
    "Bigg Boss 20 latest news",
    "Buzz Originals Reality Shows",
  ],
  openGraph: {
    title: "Bigg Boss 20: Salman Khan Slams ScoutOP Over Love Gill",
    description:
      "Salman Khan came down hard on ScoutOP in Bigg Boss 20 Weekend Ka Vaar for not backing Love Gill. Here’s what he said and what led to it.",
    url: "https://www.buzzoriginals.com/bigg-boss-20-salman-khan-slams-scoutop-love-gill",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/bigg-boss-20-salman-khan-slams-scoutop-love-gill.jpg",
        width: 1024,
        height: 576,
        alt: "Salman Slams ScoutOP Over Love Gill - Bigg Boss 20 Weekend Ka Vaar",
      },
    ],
    type: "article",
    publishedTime: "2026-11-02T15:15:00.000Z",
    authors: ["Buzz Originals Reality TV Bureau"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bigg Boss 20: Salman Khan Slams ScoutOP Over Love Gill",
    description:
      "Salman Khan came down hard on ScoutOP in Bigg Boss 20 Weekend Ka Vaar for not backing Love Gill. Here’s what he said and what led to it.",
    images: ["/images/bigg-boss-20-salman-khan-slams-scoutop-love-gill.jpg"],
  },
  alternates: {
    canonical: "/bigg-boss-20-salman-khan-slams-scoutop-love-gill",
  },
};

export default function BiggBoss20SalmanSlamsScoutOPPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/bigg-boss-20-salman-khan-slams-scoutop-love-gill";
  const pageTitle =
    "Bigg Boss 20: Salman Khan Slams ScoutOP for Not Standing Up for Love Gill";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/bigg-boss-20-salman-khan-slams-scoutop-love-gill.jpg",
    ],
    datePublished: "2026-11-02T15:15:00+05:30",
    dateModified: "2026-11-02T15:15:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Reality TV Bureau",
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
      "Salman Khan came down hard on ScoutOP in Bigg Boss 20 Weekend Ka Vaar for not backing Love Gill. Here’s what he said and what led to it.",
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
        name: "Salman Khan Slams ScoutOP Over Love Gill",
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
          <span style={{ color: "var(--lavender)" }}>WEEKEND KA VAAR</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Weekend Ka Vaar</span>
            <span className="badge lime">Salman Khan Return</span>
            <span className="badge">Bigg Boss 20</span>
          </div>

          <h1 className="article-title">
            Bigg Boss 20: Salman Khan Slams ScoutOP for Not Standing Up for Love Gill
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Reality TV Bureau</span>
            <span>·</span>
            <time dateTime="2026-11-02">November 2, 2026</time>
            <span>·</span>
            <span>3 MIN READ</span>
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
              src="/images/bigg-boss-20-salman-khan-slams-scoutop-love-gill.jpg"
              alt="Salman Slams ScoutOP Over Love Gill - Bigg Boss 20 Weekend Ka Vaar"
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
            Salman Khan pulled up ScoutOP on Weekend Ka Vaar over his mixed signals with Love Gill and failing to defend her during Kaashvi Hiranandani’s house visit. (Photo: JioHotstar / Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Bigg Boss 20: Salman Khan Slams ScoutOP for Not Standing Up for Love Gill"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Salman Khan was back on the <strong>Bigg Boss 20</strong> stage, and he did not hold back. In the latest <em>Weekend Ka Vaar</em>, the host called out ScoutOP over his bond with Love Gill and his deafening silence when she needed him most.
          </p>

          <h2>Salman Is Back, and He Is Angry</h2>
          <p>
            Salman Khan missed the previous Weekend Ka Vaar due to prior international work commitments, with filmmaker Rohit Shetty stepping in as special guest host. Returning to the stage on Monday night, Salman immediately dove into the most contentious issue dividing both the house and social media: the complicated dynamic between gaming creator <strong>ScoutOP (Tanmay Singh)</strong> and <strong>Love Gill (Lovepreet Kaur Gill)</strong>.
          </p>

          <p style={{ marginTop: "16px" }}>
            <strong>Also Read:</strong>{" "}
            <Link
              href="/bigg-boss-20-aasif-khan-evicted"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              Aasif Khan Evicted, Scout and Yung DSA Cry as He Leaves
            </Link>
          </p>

          <h2>What Led to This Moment?</h2>
          <p>
            The showdown followed days of escalating tension inside and outside the house. Here is a quick breakdown of what led to Salman’s explosive intervention:
          </p>

          {/* Timeline Summary Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderLeft: "4px solid var(--magenta)",
              borderRadius: "8px",
              padding: "20px 24px",
              margin: "24px 0",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                textTransform: "uppercase",
                color: "var(--magenta)",
                letterSpacing: "0.5px",
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              The Lead-Up to Weekend Ka Vaar
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                <span style={{ color: "var(--lime)", fontFamily: "var(--font-space-mono)", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>
                  CLOSE ALLIANCE:
                </span>
                <span style={{ fontSize: "14.5px", color: "#e4e4e7" }}>
                  ScoutOP and Love Gill grew exceptionally tight as core members of their group alongside Yung DSA, Aamrapali Dubey, and Aasif Khan.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                <span style={{ color: "var(--magenta)", fontFamily: "var(--font-space-mono)", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>
                  ROHIT SHETTY EPISODE:
                </span>
                <span style={{ fontSize: "14.5px", color: "#e4e4e7" }}>
                  Rohit Shetty first raised eyebrows over the pair’s intimacy, specifically pointing out blanket talks and frequent head-massages.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                <span style={{ color: "var(--lime)", fontFamily: "var(--font-space-mono)", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>
                  KAASHVI’S ENTRY:
                </span>
                <span style={{ fontSize: "14.5px", color: "#e4e4e7" }}>
                  ScoutOP’s girlfriend, Kaashvi Hiranandani, entered the house on Sunday, sharply questioning their equation and accusing Love of “emotionally manipulating” Scout.
                </span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "baseline" }}>
                <span style={{ color: "var(--lavender)", fontFamily: "var(--font-space-mono)", fontSize: "12px", fontWeight: 700, flexShrink: 0 }}>
                  ONLINE BACKLASH &amp; APOLOGY:
                </span>
                <span style={{ fontSize: "14.5px", color: "#e4e4e7" }}>
                  Kaashvi faced intense fan backlash online, which led her to issue a public apology to Love Gill on her Instagram Stories before the episode.
                </span>
              </div>
            </div>
          </div>

          <p>
            When Salman took the mic, viewers were eager to see whether he would hold Scout accountable for playing both sides.
          </p>

          <h2>“Aap Kisi Ke Saath Loyal Nahin”</h2>
          <p>
            Salman confronted Scout with a pointed query: if he genuinely regards Love as his sister, why did he stand mute while his girlfriend launched scathing personal attacks against her on national television?
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
            “Scout aap kisi ke saath loyal nahin... Jise aap behen-jaisi dost kehte hai, use girlfriend ke saamne defend nahi kar paye.”
          </blockquote>

          <p>
            Salman grilled Scout on whether Love had actually manipulated him as alleged, urging him to take full ownership of his own conduct rather than hiding behind excuses or letting Love take the fall.
          </p>

          <h2>The Line Everyone Is Talking About</h2>
          <p>
            Salman went on to deconstruct the ambiguous “sister” defense Scout had repeatedly offered to shield himself from scrutiny:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            “Rishta wahi par massage nahi... agar patane ke chakar mein aapne farzi commitment diya hai toh aapse ghatiya aadmi koi nahi.”
          </blockquote>

          <p>
            The unsparing remark instantly caught fire across social platforms, with hashtags around ScoutOP, Love Gill, and Weekend Ka Vaar dominating trending charts within minutes.
          </p>

          <h2>Salman Also Brought Up Yung DSA</h2>
          <p>
            Salman made it clear that Scout’s pattern of conditional loyalty extended beyond Love Gill. He referenced how Scout had treated fellow gamer and close friend <strong>Yung DSA</strong> during critical moments in the house, arguing that Scout repeatedly abandons his allies whenever the spotlight or pressure intensifies.
          </p>

          <h2>Kaashvi’s Apology and a Message for Scout</h2>
          <p>
            Addressing both Love and Scout directly, Salman informed the house that Kaashvi had already issued a public apology outside for her harsh words regarding Love. Salman instructed Scout to address the camera and send an unequivocal message to his girlfriend: that Love was completely blameless and never exerted emotional manipulation over him.
          </p>
          <p>
            Love Gill also addressed Kaashvi directly through the broadcast, firmly articulating her boundaries and expressing disappointment over having her character questioned over an alliance she believed was rooted in genuine mutual friendship.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            The Scout-Love-Kaashvi saga is far from settled. The dramatic confrontation has fractured equations inside the Bigg Boss 20 house, leaving Scout noticeably isolated. Meanwhile, fandoms remain fiercely divided: some applaud Salman for stripping away double standards, while others argue the host was excessively harsh on the streamer.
          </p>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bigg Boss 20 updates, Weekend Ka Vaar post-mortems, nomination alerts, and uncensored analysis.
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
                  href="/bigg-boss-20-aasif-khan-evicted"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bigg Boss 20: Aasif Khan Evicted, Scout and Yung DSA Cry as He Leaves
                </Link>
              </li>
              <li>
                <Link
                  href="/bigg-boss-20-uditi-singh-painful-breakup-scout-love"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory
                </Link>
              </li>
              <li>
                <Link
                  href="/bigg-boss-20-gullu-evicted-yung-dsa-fight"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?
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
              "BiggBoss20",
              "SalmanKhan",
              "ScoutOP",
              "LoveGill",
              "WeekendKaVaar",
              "KaashviHiranandani",
              "RohitShetty",
              "TanmaySingh",
              "LovepreetKaurGill",
              "YungDSA",
              "RealityTVNews",
              "BiggBossDrama",
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
              title="Bigg Boss 20: Salman Khan Slams ScoutOP for Not Standing Up for Love Gill"
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
              href="/reality-shows"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              ← Back to Reality Shows
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
              Home →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
