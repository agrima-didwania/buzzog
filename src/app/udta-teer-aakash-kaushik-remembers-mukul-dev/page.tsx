import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Udta Teer Director Aakash Kaushik Remembers Mukul Dev",
  description:
    "Udta Teer director Aakash Kaushik opens up about late actor Mukul Dev, his midnight calls and his role as Azhar Maqsood. Read the full story here.",
  keywords: [
    "Udta Teer",
    "Mukul Dev",
    "Aakash Kaushik",
    "Udta Teer Mukul Dev",
    "Udta Teer director on Mukul Dev",
    "Mukul Dev last film",
    "Mukul Dev Azhar Maqsood",
    "Ayushmann Khurrana Udta Teer",
    "Sara Ali Khan Udta Teer",
    "Udta Teer cast",
    "Udta Teer box office collection",
    "Udta Teer release date",
    "Mukul Dev swan song",
    "Udta Teer spy comedy",
    "Udta Teer Operation Sindoor scene",
    "Bollywood news today",
    "Bollywood news",
    "Buzz Originals",
    "Rahul Dev",
    "Karan Johar Udta Teer",
  ],
  openGraph: {
    title: "Udta Teer Director Aakash Kaushik Remembers Mukul Dev",
    description:
      "Udta Teer director Aakash Kaushik opens up about late actor Mukul Dev, his midnight calls and his role as Azhar Maqsood. Read the full story here.",
    url: "https://www.buzzoriginals.com/udta-teer-aakash-kaushik-remembers-mukul-dev",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/udta-teer-aakash-kaushik-remembers-mukul-dev.jpg",
        width: 1024,
        height: 576,
        alt: "Udta Teer director Aakash Kaushik with late actor Mukul Dev",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T10:50:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udta Teer Director Aakash Kaushik Remembers Mukul Dev",
    description:
      "Udta Teer director Aakash Kaushik opens up about late actor Mukul Dev, his midnight calls and his role as Azhar Maqsood. Read the full story here.",
    images: ["/images/udta-teer-aakash-kaushik-remembers-mukul-dev.jpg"],
  },
  alternates: {
    canonical: "/udta-teer-aakash-kaushik-remembers-mukul-dev",
  },
};

export default function UdtaTeerAakashKaushikMukulDevPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/udta-teer-aakash-kaushik-remembers-mukul-dev";
  const pageTitle =
    "Udta Teer Director Aakash Kaushik Gets Emotional Remembering Mukul Dev";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/udta-teer-aakash-kaushik-remembers-mukul-dev.jpg",
    ],
    datePublished: "2026-11-03T10:50:00+05:30",
    dateModified: "2026-11-03T10:50:00+05:30",
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
      "Udta Teer director Aakash Kaushik opens up about late actor Mukul Dev, his midnight calls and his role as Azhar Maqsood. Read the full story here.",
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
        name: "Aakash Kaushik Remembers Mukul Dev",
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
          <span style={{ color: "var(--lavender)" }}>UDTA TEER MUKUL DEV TRIBUTE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🎬 Director Scoop</span>
            <span className="badge pink">Mukul Dev Tribute</span>
            <span className="badge">Udta Teer</span>
          </div>

          <h1 className="article-title">
            Udta Teer Director Aakash Kaushik Gets Emotional Remembering Mukul Dev
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
              src="/images/udta-teer-aakash-kaushik-remembers-mukul-dev.jpg"
              alt="Udta Teer director Aakash Kaushik with late actor Mukul Dev"
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
            Udta Teer director Aakash Kaushik shares heartfelt memories of working with late actor Mukul Dev on his final screen appearance as Azhar Maqsood. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Udta Teer Director Aakash Kaushik Gets Emotional Remembering Mukul Dev"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Ayushmann Khurrana and Sara Ali Khan’s <strong>Udta Teer</strong> is in theatres, and one name is being talked about as much as the leads: <strong>Mukul Dev</strong>. The late actor appears in the film as the terrorist <strong>Azhar Maqsood</strong>. Now director <strong>Aakash Kaushik</strong> has shared some warm and emotional memories of working with him.
          </p>

          <p>
            The spy comedy, which released in theatres worldwide on October 23, 2026, marks the final cinematic appearance of Mukul Dev, serving as an emotional swansong for the beloved versatile actor.
          </p>

          <h2>Who Is Aakash Kaushik?</h2>
          <p>
            <em>Udta Teer</em> is Aakash Kaushik’s first film as director. He began his career as a writer on <em>F.A.L.T.U</em> (2011). Over the past decade, he has established himself as one of Bollywood’s most successful writers of horror comedies, having penned blockbuster franchise entries including <em>Bhool Bhulaiyaa 2</em>, <em>Bhool Bhulaiyaa 3</em>, and the upcoming <em>Bhooth Bangla</em>.
          </p>

          <h2>How the Idea for Udta Teer Was Born</h2>
          <p>
            In an interview with <em>Free Press Journal</em>, Kaushik revealed that the core concept for the spy comedy sprang from his deep personal love for patriotic Hindi cinema. The film follows an intelligence operative who finds himself acting as an Indian spy in one half of the narrative and operating on the Pakistani side in the other.
          </p>
          <p>
            Kaushik specifically cited J.P. Dutta’s 1997 war classic <em>Border</em> as one of his all-time favourites:
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
            “Border is one of my favourites. We’ve always seen Sunny (Deol) paaji and all the heroes say ‘Bharat Mata Ki Jai’ and ‘Jai Hind’. Experiencing those moments brings us so much joy. That’s when I thought, what if I could get our neighbours to say these words? That’s when the idea popped into my head, and I was instantly very excited about it. I knew it was a very out-of-the-box idea and that it would work really well.”
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
              — Aakash Kaushik, Director of Udta Teer
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
              Check out our latest Bollywood scoop:{" "}
              <Link
                href="/shah-rukh-khan-61st-birthday-mannat-balcony"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
              >
                Shah Rukh Khan Skips Midnight Greeting, Then Appears at Mannat on His 61st Birthday
              </Link>
            </p>
          </div>

          <h2>“He Was Such a Sweetheart”: Kaushik on Mukul Dev</h2>
          <p>
            The most emotional segment of Kaushik’s conversation centered on Mukul Dev. Kaushik recounted how fully invested the late actor was in crafting his character and how many nuances he brought to the sets every day. He also highlighted a rare talent of Mukul’s that few fans knew about:
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
            “I had an absolute ball working with Mukul Sir. He was such a sweetheart and was very involved with his character. Very few people know this, but he had a great command over different languages and accents. His portrayal of terrorist Azhar Maqsood drew heavily from his own ideas and performance. It’s such a joy when what you write on paper is elevated by someone’s performance.”
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
              — Aakash Kaushik on Mukul Dev
            </span>
          </blockquote>

          <h2>The Midnight Calls: Laughing Over Scenes</h2>
          <p>
            Kaushik shared a particularly fond, touching anecdote from the film’s production schedule:
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
            “At night, he would suddenly call me at around 12:30 am, and I would wonder if everything was all right. He would then just start laughing. While I was confused about what was going on, he would tell me that he was remembering a particular scene we had shot and laughing about it. I really miss him, and I just pray that he were here to be a part of all the success we’re enjoying. But I know he’s smiling from above and feeling happy about all the love he’s receiving.”
          </blockquote>

          <h2>Voice Notes, Due Recognition &amp; AI Recreation</h2>
          <p>
            In additional interviews, Kaushik revealed several more intimate details about Mukul Dev’s hopes and the production work that followed his passing:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "16px 0", lineHeight: "1.9" }}>
            <li>
              <strong>Hopes for the Film:</strong> Mukul was deeply confident that <em>Udta Teer</em> would re-establish his standing in Hindi cinema. Kaushik recalled: <em>“He would always say that once the film releases, people will finally give me my due.”</em>
            </li>
            <li>
              <strong>WhatsApp Voice Notes:</strong> Kaushik revealed that Mukul frequently sent him voice notes on WhatsApp discussing line delivery, comic timing, and scene ideas. Kaushik shared that he still keeps those voice notes and listens to them with great affection.
            </li>
            <li>
              <strong>AI Voice Recreation for Operation Sindoor:</strong> The film reportedly utilised advanced AI voice reconstruction tools for a critical sequence revolving around <strong>Operation Sindoor</strong>. Kaushik reworked portions of the script following Mukul’s demise so that his character Azhar Maqsood could still deliver the pivotal dialogue seamlessly.
            </li>
          </ul>

          <h2>Ayushmann Khurrana’s Tribute: “A Swan Song”</h2>
          <p>
            During the official trailer launch of <em>Udta Teer</em>, lead actor <strong>Ayushmann Khurrana</strong> also paid an emotional tribute to the late co-star. Ayushmann reflected that the movie stands as <em>“like a swan song”</em> and <em>“a tribute to Mukul Dev.”</em> Ayushmann candidly admitted: <em>“We sadly underutilised him.”</em>
          </p>
          <p>
            Mukul Dev tragically passed away on May 23, 2025, at the age of 54, following a short illness. He is survived by his daughter Siya Dev and his brother, actor Rahul Dev. The majority of Mukul Dev’s scenes in <em>Udta Teer</em> were completed during primary filming throughout 2024. Rahul Dev has since mentioned how fondly Mukul spoke about working on this film and how enthusiastic he had been about the character.
          </p>

          <h2>Udta Teer: Full Cast, Crew &amp; Production Details</h2>
          <p>
            Directed by Aakash Kaushik, <em>Udta Teer</em> brings together a formidable ensemble cast of Bollywood comedy and action stalwarts:
          </p>

          {/* Cast Overview Table */}
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
                    Key Aspect
                  </th>
                  <th style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Title</td>
                  <td style={{ padding: "10px 16px" }}>Udta Teer</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Director</td>
                  <td style={{ padding: "10px 16px" }}>Aakash Kaushik (Directorial Debut)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Lead Stars</td>
                  <td style={{ padding: "10px 16px" }}>Ayushmann Khurrana, Sara Ali Khan</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Mukul Dev Role</td>
                  <td style={{ padding: "10px 16px" }}>Azhar Maqsood (Terrorist leader)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Supporting Cast</td>
                  <td style={{ padding: "10px 16px" }}>
                    Rahul Bose, Ram Kapoor, Gulshan Grover, Suhail Nayyar, Supriya Pilgaonkar, Brijendra Kala, Sandeep Anand
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Producers</td>
                  <td style={{ padding: "10px 16px" }}>
                    Karan Johar, Adar Poonawalla, Apoorva Mehta, Guneet Monga Kapoor, Achin Jain
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Theatrical Release</td>
                  <td style={{ padding: "10px 16px" }}>October 23, 2026</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 16px", fontWeight: "bold", color: "#fff" }}>Genre</td>
                  <td style={{ padding: "10px 16px" }}>Spy Action Comedy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Udta Teer Box Office Collection So Far</h2>
          <p>
            <em>Udta Teer</em> opened with strong word-of-mouth in theatres, particularly for its situational comedy and Mukul Dev’s spirited antagonist performance.
          </p>
          <p>
            According to trade figures reported by <em>Outlook India</em>, the film opened to approximately <strong>₹4.10 crore</strong> on day one (Friday), saw a solid 76% growth to <strong>₹7.25 crore</strong> on day two (Saturday), and closed its first weekend with nearly <strong>₹20 crore</strong> across India.
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
              Related Bollywood Coverage
            </h3>
            <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "1.9" }}>
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
                  href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday
                </Link>
              </li>
              <li>
                <Link
                  href="/drishyam-3-ott-release-date-netflix"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Drishyam 3 OTT Release Date: When Will Ajay Devgn’s Film Come to Netflix?
                </Link>
              </li>
              <li>
                <Link
                  href="/sara-ali-khan-fatwa-kedarnath-temple-visit"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Fatwa Issued Against Sara Ali Khan Over Kedarnath Temple Visit: All Details
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
              "UdtaTeer",
              "MukulDev",
              "AakashKaushik",
              "AyushmannKhurrana",
              "SaraAliKhan",
              "AzharMaqsood",
              "RahulDev",
              "KaranJohar",
              "BollywoodNews",
              "BhoolBhulaiyaa3",
              "SpyComedy",
              "BoxOffice",
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
              title="Udta Teer Director Aakash Kaushik Gets Emotional Remembering Mukul Dev"
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
