import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Manoj Bajpayee on Women in Cinema: Vidya Balan, Kajol",
  description:
    "Manoj Bajpayee says heroines have been leading films for a long time. He names Vidya Balan and Kajol, and talks about how OTT is changing things.",
  keywords: [
    "Manoj Bajpayee on women in cinema",
    "Manoj Bajpayee Vidya Balan Kajol",
    "women-led films Bollywood",
    "Manoj Bajpayee latest news",
    "Manoj Bajpayee Gajab Raat",
    "OTT women-led stories",
    "Vidya Balan films",
    "Kajol movies",
    "Bollywood news",
  ],
  openGraph: {
    title: "Manoj Bajpayee on Women in Cinema: Vidya Balan, Kajol",
    description:
      "Manoj Bajpayee says heroines have been leading films for a long time. He names Vidya Balan and Kajol, and talks about how OTT is changing things.",
    url: "https://www.buzzoriginals.com/manoj-bajpayee-vidya-balan-kajol-women-in-cinema",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/manoj-bajpayee-vidya-balan-kajol-women-in-cinema.jpg",
        width: 1024,
        height: 576,
        alt: "Manoj Bajpayee on Women in Cinema: Vidya Balan, Kajol — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T22:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Bajpayee on Women in Cinema: Vidya Balan, Kajol",
    description:
      "Manoj Bajpayee says heroines have been leading films for a long time. He names Vidya Balan and Kajol, and talks about how OTT is changing things.",
    images: ["/images/manoj-bajpayee-vidya-balan-kajol-women-in-cinema.jpg"],
  },
  alternates: {
    canonical: "/manoj-bajpayee-vidya-balan-kajol-women-in-cinema",
  },
};

export default function ManojBajpayeeWomenInCinemaPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/manoj-bajpayee-vidya-balan-kajol-women-in-cinema";
  const pageTitle =
    "Manoj Bajpayee Says Women Have Been Leading Bollywood for Years";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/manoj-bajpayee-vidya-balan-kajol-women-in-cinema.jpg",
    ],
    datePublished: "2026-10-31T22:30:00+05:30",
    dateModified: "2026-10-31T22:30:00+05:30",
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
      "Manoj Bajpayee says heroines have been leading films for a long time. He names Vidya Balan and Kajol, and talks about how OTT is changing things.",
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
        name: "Manoj Bajpayee Women In Cinema",
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
          <span style={{ color: "var(--lavender)" }}>MANOJ BAJPAYEE WOMEN IN CINEMA</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🎬 Cinema &amp; Culture</span>
            <span className="badge lime">Women in Cinema</span>
            <span className="badge">Bollywood Exclusive</span>
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
              <span>BOLLYWOOD BUREAU</span>
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
            src="/images/manoj-bajpayee-vidya-balan-kajol-women-in-cinema.jpg"
            alt="Manoj Bajpayee Says Women Have Been Leading Bollywood for Years with Vidya Balan and Kajol"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Manoj Bajpayee credits Vidya Balan and Kajol for paving the path for female-led cinema and discusses how OTT platforms have democratised the hero narrative. (Photo: Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Is Bollywood still a man’s world? <strong>Manoj Bajpayee</strong> says the answer is not that simple. In a recent chat, the actor said actresses have been carrying films as heroes for a long time. He also named two stars who, in his view, led the way: <strong>Vidya Balan</strong> and <strong>Kajol</strong>.
          </p>

          {/* Quick Summary Box */}
          <div
            style={{
              margin: "28px 0",
              padding: "20px 24px",
              background: "rgba(200, 255, 0, 0.05)",
              borderLeft: "4px solid var(--lime)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <h3
              style={{
                margin: "0 0 12px 0",
                fontSize: "18px",
                fontFamily: "var(--font-space-grotesk)",
                color: "var(--lime)",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
              }}
            >
              ⚡ Quick Summary
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "1.7", color: "#fff" }}>
              <li>Manoj Bajpayee says women-led films are not new. They have been coming for years.</li>
              <li>He named Vidya Balan and Kajol as prime examples of leading heroes.</li>
              <li>He says OTT is making these stories more common because the financial risk is lower.</li>
              <li>He also pointed out that OTT is giving long-overdue respect to male actors whom mainstream cinema underutilised.</li>
              <li>His latest film, <em>Gajab Raat</em>, is currently streaming on Netflix.</li>
            </ul>
          </div>

          <h2>What Did Manoj Bajpayee Say?</h2>
          <p>
            The conversation revolved around a recurring question: Is the big screen still ruled exclusively by men? And will actresses need a lot more time before audiences accept them as the main lead, the way they accept male stars?
          </p>
          <p>
            Manoj does not think the shift is just starting. He feels it has been happening slowly, but surely. Here is what he said:
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
            “The heroine has been coming as a hero for a long time. I remember so many films of Vidya Balan. I remember Kajol’s movies too. It is taking its time, but it’s happening. What is good that is happening. And it has been happening for a long time, right?”
          </blockquote>

          <h2>Why Does He Think OTT Is Helping?</h2>
          <p>
            According to Manoj, OTT platforms are a major reason why women-led stories now appear much more frequently. Producing a film for traditional theatres requires heavy capital investment and carries immense commercial risk. On OTT, that pressure is mitigated, allowing filmmakers to experiment with daring narratives:
          </p>

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
            “And with OTT, it’s happening more frequently because the stake is not that high.”
          </blockquote>
          <p>That is how he explained the industry&apos;s changing economics.</p>

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
                href="/radhika-apte-rudra-akka-netflix"
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "16px",
                  textDecoration: "underline",
                }}
              >
                Radhika Apte on Playing Rudra in Netflix’s Akka: Why This Role Is Different →
              </Link>
            </div>
          </div>

          <h2>OTT Is Good for Male Actors Too</h2>
          <p>
            Manoj did not stop at actresses. He highlighted that OTT platforms have simultaneously provided a lifeline to character actors and versatile male performers who were routinely sidelined by mainstream Bollywood box-office formulas:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lavender)",
              padding: "16px 20px",
              margin: "24px 0",
              background: "rgba(184, 192, 219, 0.05)",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              color: "#fff",
              fontSize: "17px",
              lineHeight: 1.6,
            }}
          >
            “Look at the actors who could not even get rightly consumed earlier. Male actors could not even get consumed by mainstream cinema. They are getting so much respect on OTT.”
          </blockquote>
          <p>
            He further elaborated on their career stability: “And their lifestyle is maintained. They are finding some kind of comfort in their life because of all those roles that they have been getting.”
          </p>

          <h2>Why Did He Pick Vidya Balan and Kajol?</h2>
          <p>
            Both actresses have built substantial filmographies centered around fierce, independent, and commanding female leads that changed industry paradigms.
          </p>
          <p><strong>Vidya Balan is celebrated for trailblazing cinema including:</strong></p>
          <ul>
            <li><em>The Dirty Picture</em></li>
            <li><em>Kahaani</em></li>
            <li><em>No One Killed Jessica</em></li>
            <li><em>Tumhari Sulu</em></li>
            <li><em>Sherni</em></li>
          </ul>

          <p><strong>Kajol has headlined films and web shows with deep, layered female protagonists such as:</strong></p>
          <ul>
            <li><em>Dushman</em></li>
            <li><em>Helicopter Eela</em></li>
            <li><em>The Trial</em></li>
            <li><em>The Good Wife</em></li>
          </ul>

          <h2>What Does Vidya Balan Think?</h2>
          <p>
            Vidya has addressed this evolving landscape on multiple occasions. In 2024, she observed: <em>“Female-led cinema is still in its nascent stage.”</em> However, she also noted that over the past 15 to 16 years, the volume and acceptance of women-led stories has risen significantly. Both Manoj and Vidya agree that while momentum is undeniable, the film industry still has significant ground to cover toward true equity.
          </p>

          <h2>What Is Manoj Bajpayee Doing Now?</h2>
          <p>
            Manoj was last seen headlining <em>Gajab Raat</em>, a gripping suspense thriller co-starring Divya Dutta and helmed by director Ritesh Shah. The critically-praised project premiered on Netflix on <strong>October 23</strong>.
          </p>

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
              Follow us on Instagram for Bollywood scoops &amp; unfiltered opinions:{" "}
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

          <h2>Our Take</h2>
          <p>
            It is refreshing to witness an acclaimed veteran actor articulate what discerning audiences have known for years: women have shouldered Bollywood narratives with exceptional box-office and critical power, and commercial producers are only now formalising that reality. For admirers of Vidya Balan and Kajol, Manoj&apos;s recognition is a testament to their enduring legacy. For streaming audiences, it confirms that digital storytelling is fundamentally reshaping who gets to be the hero.
          </p>
          <p>
            Stay tuned to <strong>Buzz OG</strong> for more Bollywood insights and exclusive cinema coverage.
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
              "ManojBajpayee",
              "VidyaBalan",
              "Kajol",
              "WomenInCinema",
              "BollywoodNews",
              "OTTReleases",
              "GajabRaat",
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
              href="/web-series"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Web Series Hub →
            </Link>
            <Link
              href="/news"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              The News Desk →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
