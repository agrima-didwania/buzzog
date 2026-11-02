import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Bigg Boss 20: Aasif Khan Evicted, Scout & Yung Cry",
  description:
    "Aasif Khan is out of Bigg Boss 20. Salman Khan announced the eviction on Weekend Ka Vaar, and Scout and Yung DSA cried as he left. Read the full story.",
  keywords: [
    "Aasif Khan evicted Bigg Boss 20",
    "Bigg Boss 20 eviction",
    "Weekend Ka Vaar",
    "Scout",
    "Yung DSA",
    "Elvish Yadav",
    "Bigg Boss 20 latest news",
    "Aasif Khan",
    "Salman Khan Weekend Ka Vaar",
    "Bigg Boss 20",
    "Qazi Touqeer",
    "Love Gill",
    "Aamrapali Dubey",
    "Arishfa Khan",
    "Kanika Mann",
    "JioHotstar Bigg Boss 20",
    "Buzz Originals Reality Shows",
  ],
  openGraph: {
    title: "Bigg Boss 20: Aasif Khan Evicted, Scout & Yung Cry",
    description:
      "Aasif Khan is out of Bigg Boss 20. Salman Khan announced the eviction on Weekend Ka Vaar, and Scout and Yung DSA cried as he left. Read the full story.",
    url: "https://www.buzzoriginals.com/bigg-boss-20-aasif-khan-evicted",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/bigg-boss-20-aasif-khan-evicted.jpg",
        width: 1024,
        height: 576,
        alt: "Aasif Khan Evicted Bigg Boss 20 - Scout & Yung DSA Break Down",
      },
    ],
    type: "article",
    publishedTime: "2026-11-02T14:10:00.000Z",
    authors: ["Buzz Originals Reality TV Bureau"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bigg Boss 20: Aasif Khan Evicted, Scout & Yung Cry",
    description:
      "Aasif Khan is out of Bigg Boss 20. Salman Khan announced the eviction on Weekend Ka Vaar, and Scout and Yung DSA cried as he left. Read the full story.",
    images: ["/images/bigg-boss-20-aasif-khan-evicted.jpg"],
  },
  alternates: {
    canonical: "/bigg-boss-20-aasif-khan-evicted",
  },
};

export default function BiggBoss20AasifKhanEvictedPage() {
  const pageUrl = "https://www.buzzoriginals.com/bigg-boss-20-aasif-khan-evicted";
  const pageTitle =
    "Bigg Boss 20: Aasif Khan Evicted, Scout and Yung DSA Cry as He Leaves";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/bigg-boss-20-aasif-khan-evicted.jpg",
    ],
    datePublished: "2026-11-02T14:10:00+05:30",
    dateModified: "2026-11-02T14:10:00+05:30",
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
      "Aasif Khan is out of Bigg Boss 20. Salman Khan announced the eviction on Weekend Ka Vaar, and Scout and Yung DSA cried as he left. Read the full story.",
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
        name: "Aasif Khan Evicted Bigg Boss 20",
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
          <span style={{ color: "var(--lavender)" }}>BIGG BOSS 20 EVICTION</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">⚡ Eviction Confirmed</span>
            <span className="badge lime">Weekend Ka Vaar</span>
            <span className="badge">Bigg Boss 20</span>
          </div>

          <h1 className="article-title">
            Bigg Boss 20: Aasif Khan Evicted, Scout and Yung DSA Cry as He Leaves
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
              src="/images/bigg-boss-20-aasif-khan-evicted.jpg"
              alt="Aasif Khan Evicted Bigg Boss 20 - Scout & Yung DSA Break Down"
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
            Aasif Khan’s journey comes to an emotional end on Bigg Boss 20 Weekend Ka Vaar, leaving close friends Scout and Yung DSA in tears. (Photo: JioHotstar / Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Bigg Boss 20: Aasif Khan Evicted, Scout and Yung DSA Cry as He Leaves"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Aasif Khan’s journey in <strong>Bigg Boss 20</strong> has come to an end. Host Salman Khan announced his eviction on the latest <em>Weekend Ka Vaar</em> episode, and the house turned emotional right away as close friends broke down in tears.
          </p>

          <p>
            The news of the <strong>Aasif Khan evicted Bigg Boss 20</strong> shocker quickly sparked intense debates among reality TV viewers, with fans reflecting on his witty humour, his signature “BB News” segments, and his fiery clashes with fellow housemates.
          </p>

          <h2>What Happened on Weekend Ka Vaar?</h2>
          <p>
            Aasif was one of the nominated contestants this week alongside heavy contenders. When Salman Khan took the stage and announced his name for elimination, the mood inside the living room plummeted instantly. Salman took a moment to warmly praise the dignified and authentic manner in which Aasif played the game throughout his stint.
          </p>
          <p>
            Speculation and reports about his exit had already been circulating heavily on social media before the telecast. With the broadcast of the episode, the exit was officially sealed.
          </p>
          <p>
            Housemates <strong>Scout</strong> and <strong>Yung DSA</strong> were hit the hardest by the decision. Both broke down in inconsolable tears and struggled to bid him farewell at the main gate. Fellow contestants Love Gill, Aamrapali Dubey, and Arishfa Khan were visibly emotional, while Kanika Mann appeared visibly stunned by the announcement.
          </p>
          <p>
            Aasif had tears in his eyes as he walked towards the exit door. Showing his quintessential spirit, he performed his popular <strong>BB News</strong> parody bulletin one last time for his housemates, drawing bittersweet smiles and tears from everyone.
          </p>

          {/* Quick Recap Card */}
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
              Key Details at a Glance
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  EVICTED CONTESTANT
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                  Aasif Khan
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  EPISODE
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--lime)" }}>
                  Weekend Ka Vaar (Salman Khan)
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  MOST IMPACTED
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                  Scout &amp; Yung DSA (in tears)
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  SPECIAL GUEST
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                  Elvish Yadav (Bigg Boss OTT 2 Winner)
                </span>
              </div>
            </div>
          </div>

          <h2>Aasif’s Bond With His Housemates</h2>
          <p>
            During the opening weeks of Bigg Boss 20, Aasif formed an organic alliance with Scout, Yung DSA, Love Gill, and Aamrapali Dubey. While he gradually drifted away from group politics in later weeks to play a more independent game, his personal bond with Scout and Yung DSA remained unwavering. Their overwhelming grief on eviction night proved how genuine their friendship was beyond the cameras.
          </p>
          <p>
            Aasif also shared a complex love-hate equation with <strong>Qazi Touqeer</strong>. While the two locked horns in fierce arguments over house duties and nominations, they also shared lighthearted moments and banter that entertained audiences.
          </p>

          <p style={{ marginTop: "16px" }}>
            <strong>Also Read:</strong>{" "}
            <Link
              href="/bigg-boss-20-gullu-evicted-yung-dsa-fight"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?
            </Link>
          </p>

          <h2>Did Aasif Say the Show Was Biased?</h2>
          <p>
            Yes, and it was not the first time Aasif raised his voice against perceived favouritism. Inside the house, Aasif openly alleged that the makers appeared biased towards Qazi Touqeer, claiming the format constantly shielded and promoted Qazi at the expense of others.
          </p>
          <p>
            Earlier this season, Aasif was directly nominated after Bigg Boss penalised him, Scout, and Rohed Khan for discussing the confidential nomination procedure. Aasif had expressed immense frustration over the penalty, fearlessly declaring to the house:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#fff",
            }}
          >
            “If I have to fight Bigg Boss, I will.”
          </blockquote>

          <h2>Aasif Stood by Scout Before He Left</h2>
          <p>
            One of the most intense blowups of the week occurred between Scout and Arishfa Khan. The conflict erupted when Uditi Singh unexpectedly brought up Scout’s girlfriend, popular creator Kaashvi, during a heated exchange.
          </p>
          <p>
            While several housemates stayed on the fence, Aasif stepped forward and staunchly defended Scout. This loyalty demonstrated how deeply he valued his friends, choosing to protect Scout even when doing so invited friction with other housemates.
          </p>

          <p style={{ marginTop: "16px" }}>
            <strong>Also Read:</strong>{" "}
            <Link
              href="/bigg-boss-20-uditi-singh-painful-breakup-scout-love"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory
            </Link>
          </p>

          <h2>Elvish Yadav Joins Salman on the Stage</h2>
          <p>
            It was not all tears on <em>Weekend Ka Vaar</em>. Bigg Boss OTT 2 champion <strong>Elvish Yadav</strong> made a grand guest appearance, joining superstar host Salman Khan on stage to inject high-energy banter and humor into the night.
          </p>
          <p>
            Elvish had hilarious interactions with Scout and Love Gill, playfully roasting them throughout his segment. He declared that Love Gill is his favourite contestant this season. Salman joined in the fun, and the duo had hearty laughs at Scout and Love’s expense.
          </p>
          <p>
            Elvish also hosted an entertaining “rizz” task inside the house, challenging Yung DSA and Gullu to an impromptu push-up showdown. Elvish appeared on the episode to promote his upcoming dating reality show, <em>Ritz</em>.
          </p>

          <h2>What Next for the Bigg Boss 20 House?</h2>
          <p>
            With Aasif Khan’s departure, the dynamics inside the Bigg Boss 20 house will inevitably undergo a major shift. Scout and Yung DSA have lost their most trusted confidant, which could alter how they navigate group alliances and future nomination tasks. As equations realign and competition stiffens, fans can expect even more drama in the days ahead.
          </p>

          <h2>Where to Watch Bigg Boss 20</h2>
          <p>
            Viewers can stream fresh episodes of <strong>Bigg Boss 20</strong> on <strong>JioHotstar</strong> daily at 9:00 PM, with 24-hour live channel access available for VIP subscribers.
          </p>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for real-time reality TV updates, Weekend Ka Vaar recaps, voting analysis, and exclusive backstage scoops.
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
                  href="/bigg-boss-20-100-per-cent-ration-housemates"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bigg Boss 20: Housemates Get 100% Ration for the First Time
                </Link>
              </li>
              <li>
                <Link
                  href="/jiya-shankar-unfollows-fiance-kd-instagram"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline
                </Link>
              </li>
              <li>
                <Link
                  href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday
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
              "AasifKhan",
              "AasifKhanEviction",
              "ScoutOP",
              "YungDSA",
              "WeekendKaVaar",
              "SalmanKhan",
              "ElvishYadav",
              "LoveGill",
              "QaziTouqeer",
              "BiggBossEviction",
              "RealityTVNews",
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
              title="Bigg Boss 20: Aasif Khan Evicted, Scout and Yung DSA Cry as He Leaves"
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
