import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Bhansali Trolled for Gangubai Post on Eetha Trailer Day",
  description:
    "Bhansali Productions posted about Gangubai Kathiawadi the same day Shraddha Kapoor’s Eetha trailer dropped. Here is why people are upset.",
  keywords: [
    "Bhansali Productions Gangubai post",
    "Eetha trailer",
    "Gangubai Kathiawadi",
    "Shraddha Kapoor Eetha",
    "Alia Bhatt vs Shraddha Kapoor",
    "Bhansali Productions trolled",
    "Sanjay Leela Bhansali",
    "Vithabai Narayangaonkar",
    "Laxman Utekar",
    "Bollywood social media backlash",
    "Bollywood news",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Bhansali Trolled for Gangubai Post on Eetha Trailer Day",
    description:
      "Bhansali Productions posted about Gangubai Kathiawadi the same day Shraddha Kapoor’s Eetha trailer dropped. Here is why people are upset.",
    url: "https://www.buzzoriginals.com/bhansali-productions-gangubai-post-eetha-trailer-backlash",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/bhansali-productions-gangubai-post-eetha-trailer-backlash.jpg",
        width: 1024,
        height: 576,
        alt: "Bhansali Productions Trolled for Gangubai Kathiawadi Post on Eetha Trailer Day",
      },
    ],
    type: "article",
    publishedTime: "2026-11-01T22:20:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhansali Trolled for Gangubai Post on Eetha Trailer Day",
    description:
      "Bhansali Productions posted about Gangubai Kathiawadi the same day Shraddha Kapoor’s Eetha trailer dropped. Here is why people are upset.",
    images: ["/images/bhansali-productions-gangubai-post-eetha-trailer-backlash.jpg"],
  },
  alternates: {
    canonical: "/bhansali-productions-gangubai-post-eetha-trailer-backlash",
  },
};

export default function BhansaliGangubaiEethaBacklashPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/bhansali-productions-gangubai-post-eetha-trailer-backlash";
  const pageTitle =
    "Bhansali Productions Trolled for Gangubai Kathiawadi Post on Eetha Trailer Day";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/bhansali-productions-gangubai-post-eetha-trailer-backlash.jpg",
    ],
    datePublished: "2026-11-01T22:20:00+05:30",
    dateModified: "2026-11-01T22:20:00+05:30",
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
      "Bhansali Productions posted about Gangubai Kathiawadi the same day Shraddha Kapoor’s Eetha trailer dropped. Here is why people are upset.",
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
        name: "Bhansali Productions Gangubai Eetha Backlash",
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
          <span style={{ color: "var(--lavender)" }}>BHANSALI PRODUCTIONS GANGUBAI POST BACKLASH</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Social Media Backlash</span>
            <span className="badge lime">Alia vs Shraddha</span>
            <span className="badge">Bollywood</span>
          </div>

          <h1 className="article-title">
            Bhansali Productions Trolled for Gangubai Kathiawadi Post on Eetha Trailer Day
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment Desk</span>
            <span className="dot-sep">◆</span>
            <span>Published: November 1, 2026</span>
            <span className="dot-sep">◆</span>
            <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-featured-image">
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px" }}>
            <Image
              src="/images/bhansali-productions-gangubai-post-eetha-trailer-backlash.jpg"
              alt="Bhansali Productions Trolled for Gangubai Kathiawadi Post on Eetha Trailer Day"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 860px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <p
            style={{
              fontSize: "12px",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "8px",
              fontFamily: "var(--font-space-mono)",
            }}
          >
            Bhansali Productions faces social media backlash for sharing a Gangubai Kathiawadi post on the day Shraddha Kapoor’s Eetha trailer dropped.
          </p>
        </div>

        {/* Article Content */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Bhansali Productions</strong> is facing heat on social media. The reason is a post about <strong>Alia Bhatt’s Gangubai Kathiawadi</strong>. It went up on the exact same day the trailer of <strong>Shraddha Kapoor’s Eetha</strong> was released.
          </p>

          {/* Key Incident Callout Box */}
          <div
            style={{
              background: "rgba(255, 46, 147, 0.05)",
              border: "1px solid var(--magenta)",
              borderLeft: "4px solid var(--magenta)",
              padding: "16px 20px",
              borderRadius: "4px",
              margin: "24px 0",
            }}
          >
            <h3
              style={{
                color: "var(--magenta)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "8px",
                fontWeight: 700,
              }}
            >
              ⚡ The Controversy at a Glance
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                fontSize: "15px",
                lineHeight: "1.7",
                color: "var(--lavender)",
              }}
            >
              <li><strong>The Trigger:</strong> Bhansali Productions posted an Alia Bhatt dialogue from <em>Gangubai Kathiawadi</em> on October 30.</li>
              <li><strong>The Timing:</strong> The post went live just hours after Shraddha Kapoor’s <em>Eetha</em> trailer launch.</li>
              <li><strong>The Backlash:</strong> Fans called the move insecure and an attempt to overshadow another female-led film.</li>
              <li><strong>Recent Pattern:</strong> The account was also called out on Karwa Chauth for posting Salman-Aishwarya pictures from <em>Hum Dil De Chuke Sanam</em>.</li>
            </ul>
          </div>

          <h2>What Did Bhansali Productions Post?</h2>
          <p>
            On Friday, October 30, 2026, the production house’s official X (formerly Twitter) account shared a post commemorating <em>Gangubai Kathiawadi</em>. The post tagged Alia Bhatt and highlighted this iconic line:
          </p>

          {/* Quote Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderLeft: "4px solid var(--lime)",
              padding: "16px 20px",
              borderRadius: "6px",
              margin: "20px 0",
            }}
          >
            <p
              style={{
                fontStyle: "italic",
                fontSize: "17px",
                color: "var(--lime)",
                margin: "0 0 6px 0",
                lineHeight: "1.5",
              }}
            >
              &ldquo;Duniya uski kahaani likh rahi thi, Gangubai ne kalam apne haath mein le li.&rdquo;
            </p>
            <span
              style={{
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "rgba(255, 255, 255, 0.6)",
              }}
            >
              — Bhansali Productions on X (October 30, 2026)
            </span>
          </div>

          <p>
            In simple words: the world was busy writing her story, but Gangubai picked up the pen herself.
          </p>

          <p>
            Also Read:{" "}
            <Link
              href="/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar
            </Link>
          </p>

          <h2>Why Are People Upset?</h2>
          <p>
            The main issue is the suspicious timing. The post came just hours after the <em>Eetha</em> trailer was out and generating viral buzz across the internet. Many users felt it was a calculated attempt to divert attention away from Shraddha Kapoor’s high-octane biographical drama.
          </p>
          <p>Here is what people said online:</p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "18px 0 24px 0",
            }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "12px 16px",
              }}
            >
              <span style={{ color: "var(--magenta)", fontWeight: 700 }}>• Insecurity Allegations: </span>
              <span>Some users directly called it a sign of insecurity from the studio and its marketing team.</span>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "12px 16px",
              }}
            >
              <span style={{ color: "var(--magenta)", fontWeight: 700 }}>• Unfair Spotlight Theft: </span>
              <span>Many felt it was unfair to push a four-year-old film on the very morning another top actress’s career-defining trailer dropped.</span>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "12px 16px",
              }}
            >
              <span style={{ color: "var(--magenta)", fontWeight: 700 }}>• Studio vs Fan Wars: </span>
              <span>Several netizens noted that while rival fanclubs behave like this, an esteemed, prestigious production house should maintain dignity.</span>
            </div>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "6px",
                padding: "12px 16px",
              }}
            >
              <span style={{ color: "var(--magenta)", fontWeight: 700 }}>• Bad PR Timing: </span>
              <span>Others simply deemed it an amateur, badly timed PR blunder that unnecessarily invited negativity.</span>
            </div>
          </div>

          <h2>Not the First Trolling This Week</h2>
          <p>
            This is not the first time the official handle has been heavily criticised in recent days. Just a couple of days earlier, on <strong>Karwa Chauth</strong>, the page posted pictures of Salman Khan and Aishwarya Rai Bachchan from <em>Hum Dil De Chuke Sanam</em>.
          </p>
          <p>
            Social media users immediately dragged the account for raking up sensitive personal histories on an auspicious couple festival, leading to massive online backlash.
          </p>

          <h2>Alia Bhatt vs Shraddha Kapoor: The Fan War</h2>
          <p>
            Fans of Alia Bhatt and Shraddha Kapoor frequently clash across social platforms, so this incident caught fire almost instantaneously. Both <em>Gangubai Kathiawadi</em> and <em>Eetha</em> are fiercely rooted, female-led biopics revolving around legendary women who defied societal norms to conquer male-dominated spheres.
          </p>
          <p>
            Because of that thematic similarity, users keep drawing comparisons between Alia’s National Award-winning portrayal of Gangubai and Shraddha’s upcoming transformative turn as Vithabai. However, the two films have no direct connection or overlap.
          </p>

          <h2>What Is Eetha About?</h2>
          <p>
            For audiences unfamiliar with Shraddha Kapoor’s much-anticipated December theatrical outing, here is what the film brings to the screen:
          </p>

          {/* Responsive Eetha Info Table */}
          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              borderRadius: "8px",
              border: "1px solid var(--line)",
              background: "var(--ink-2)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "15px",
              }}
            >
              <thead>
                <tr
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <th
                    style={{
                      padding: "14px 18px",
                      color: "var(--lime)",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      width: "35%",
                    }}
                  >
                    Aspect
                  </th>
                  <th
                    style={{
                      padding: "14px 18px",
                      color: "var(--lime)",
                      fontFamily: "var(--font-space-mono)",
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      width: "65%",
                    }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Story &amp; Subject
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Biopic inspired by Lavani legend Vithabai Bhau Mang Narayangaonkar, featuring Shraddha Kapoor in the titular role
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Director
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Laxman Utekar (<em>Mimi</em>, <em>Zara Hatke Zara Bachke</em>)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Ensemble Cast
                  </td>
                  <td style={{ padding: "14px 18px", color: "rgba(255, 255, 255, 0.85)" }}>
                    Shraddha Kapoor, Randeep Hooda, and Mohammed Zeeshan Ayyub
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Trailer Launch
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lime)", fontWeight: 700 }}>
                    October 30, 2026
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "14px 18px", fontWeight: 700, color: "var(--lavender)" }}>
                    Theatrical Release Date
                  </td>
                  <td style={{ padding: "14px 18px", color: "var(--lime)", fontWeight: 700 }}>
                    December 4, 2026 (initially scheduled for August)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Final Take</h2>
          <p>
            Whether the timing was a pre-planned promotional flex or an unfortunate social media coincidence, the post has undeniably poured high-octane fuel onto the ongoing Alia vs Shraddha fan debate.
          </p>
          <p>
            With the trailer generating glowing responses across film trade circles and general audiences, all eyes are now trained on how <em>Eetha</em> will perform at the domestic and international box office when it arrives on the big screen on <strong>December 4, 2026</strong>.
          </p>
          <p style={{ fontStyle: "italic", color: "rgba(255, 255, 255, 0.7)" }}>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood updates, box office scoops, and trade insights.
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
              Related Bollywood Reads
            </h4>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.8", fontSize: "15px" }}>
              <li>
                <Link
                  href="/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar
                </Link>
              </li>
              <li>
                <Link
                  href="/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Himesh Reshammiya Calls Deepika Padukone “Irreplaceable”
                </Link>
              </li>
              <li>
                <Link
                  href="/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Ram Gopal Varma Gets ₹29.67 Crore Legal Notice from Eclatant Films
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
              "BhansaliProductions",
              "GangubaiKathiawadi",
              "Eetha",
              "ShraddhaKapoor",
              "AliaBhatt",
              "BollywoodNews",
              "LaxmanUtekar",
              "SanjayLeelaBhansali",
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
