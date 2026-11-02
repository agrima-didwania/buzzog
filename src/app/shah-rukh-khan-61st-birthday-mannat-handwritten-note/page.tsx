import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "SRK Skips Mannat Balcony on 61st Birthday, Sends Note",
  description:
    "Shah Rukh Khan skipped the Mannat balcony on his 61st birthday but thanked fans with a handwritten note. King’s first song Tu Mil Jaaye is out too.",
  keywords: [
    "Shah Rukh Khan birthday",
    "SRK 61st birthday",
    "Mannat",
    "King first song",
    "Tu Mil Jaaye",
    "SRK birthday Mannat",
    "Shah Rukh Khan handwritten note",
    "Mannat balcony",
    "King first song Tu Mil Jaaye",
    "King release date 24 December 2026",
    "Shah Rukh Khan birthday 2026",
    "Buzz Originals",
    "Red Chillies Entertainment",
    "Deepika Padukone",
    "Arijit Singh",
    "Ed Sheeran",
    "Siddharth Anand",
  ],
  openGraph: {
    title: "SRK Skips Mannat Balcony on 61st Birthday, Sends Note",
    description:
      "Shah Rukh Khan skipped the Mannat balcony on his 61st birthday but thanked fans with a handwritten note. King’s first song Tu Mil Jaaye is out too.",
    url: "https://www.buzzoriginals.com/shah-rukh-khan-61st-birthday-mannat-handwritten-note",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/shah-rukh-khan-61st-birthday-mannat-handwritten-note.jpg",
        width: 1024,
        height: 576,
        alt: "Shah Rukh Khan Skips Mannat Balcony on 61st Birthday, Sends Handwritten Note",
      },
    ],
    type: "article",
    publishedTime: "2026-11-02T12:00:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRK Skips Mannat Balcony on 61st Birthday, Sends Note",
    description:
      "Shah Rukh Khan skipped the Mannat balcony on his 61st birthday but thanked fans with a handwritten note. King’s first song Tu Mil Jaaye is out too.",
    images: ["/images/shah-rukh-khan-61st-birthday-mannat-handwritten-note.jpg"],
  },
  alternates: {
    canonical: "/shah-rukh-khan-61st-birthday-mannat-handwritten-note",
  },
};

export default function ShahRukhKhan61stBirthdayMannatNotePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/shah-rukh-khan-61st-birthday-mannat-handwritten-note";
  const pageTitle =
    "Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/shah-rukh-khan-61st-birthday-mannat-handwritten-note.jpg",
    ],
    datePublished: "2026-11-02T12:00:00+05:30",
    dateModified: "2026-11-02T12:00:00+05:30",
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
      "Shah Rukh Khan skipped the Mannat balcony on his 61st birthday but thanked fans with a handwritten note. King’s first song Tu Mil Jaaye is out too.",
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
        name: "SRK 61st Birthday Mannat Note",
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
          <span style={{ color: "var(--lavender)" }}>SRK 61ST BIRTHDAY</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🎂 61st Birthday</span>
            <span className="badge pink">Mannat Note</span>
            <span className="badge">Bollywood</span>
          </div>

          <h1 className="article-title">
            Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment Desk</span>
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
              src="/images/shah-rukh-khan-61st-birthday-mannat-handwritten-note.jpg"
              alt="Shah Rukh Khan Skips Mannat Balcony on 61st Birthday, Sends Handwritten Note"
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
            Shah Rukh Khan celebrated his 61st birthday away from Mannat during ongoing renovations, surprising thousands of gathered fans with a handwritten note and the release of King’s first song “Tu Mil Jaaye”.
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Every 2 November, fans gather outside Mannat in Bandra, Mumbai, hoping to see Shah Rukh Khan wave from his famous balcony. This year, the balcony stayed empty. But SRK still found a lovely way to say thank you.
          </p>

          <h2>Why the Balcony Stayed Empty</h2>
          <p>
            Shah Rukh Khan turned 61 on Monday, 2 November 2026. Fans reached Mannat around midnight, just like every year, filling the streets outside Bandstand with banners, whistles, and birthday cheers. But SRK did not come out this time.
          </p>
          <p>
            Mannat is currently undergoing major reconstruction and expansion work, and SRK is living away from the house temporarily while renovations are completed. Because of the heavy ongoing structural work on the premises, the usual birthday balcony wave was not possible for safety reasons.
          </p>

          <h2>SRK’s Handwritten Note for Fans</h2>
          <p>
            Fans did not go home disappointed. A large display outside Mannat lit up with a personal, handwritten note penned by Shah Rukh Khan himself, projected prominently for the massive crowd gathered on the street.
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "24px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#fff",
            }}
          >
            “Thank you all for your wishes and love. Sending mine right back to you all. Lots of love and a big hug”
            <br />
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontStyle: "normal",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--lime)",
              }}
            >
              — Shah Rukh Khan
            </span>
          </blockquote>

          <p>
            Red Chillies Entertainment also shared the note on X with this message: <strong>“To the hearts that made him KING, a lot of love in return #LoveLikeAKING”</strong>
          </p>

          {/* Red Chillies Entertainment Screenshot on X */}
          <figure
            style={{
              margin: "32px 0",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "rgba(255, 255, 255, 0.02)",
              padding: "16px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "520px",
                aspectRatio: "890 / 1024",
                margin: "0 auto",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/red-chillies-srk-mannat-note-x-post.png"
                alt="Red Chillies Entertainment post on X featuring Shah Rukh Khan's handwritten note projected at Mannat"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100vw, 520px"
              />
            </div>
            <figcaption
              style={{
                fontSize: "12px",
                fontFamily: "var(--font-space-mono)",
                color: "rgba(255, 255, 255, 0.6)",
                marginTop: "12px",
                textAlign: "center",
              }}
            >
              Red Chillies Entertainment shared the massive handwritten note projected outside Mannat for SRK’s 61st birthday on X.
            </figcaption>
          </figure>

          <h2>Mannat Gets a King Makeover</h2>
          <p>
            The house was also lit up with big visuals from his upcoming film <em>King</em>. Two punchy dialogues from the action thriller were on display as well:
          </p>
          <ul>
            <li><strong>“King Akela Kaafi Hai”</strong></li>
            <li><strong>“Darr Nahi, Dehshat Hoon”</strong></li>
          </ul>
          <p>
            Posters and themed branding of the film were also seen outside the bungalow, turning the legendary Bandra landmark into an interactive teaser zone for his next big-screen venture.
          </p>

          <p>
            Also Read:{" "}
            <Link
              href="/siddharth-anand-time-for-the-world-king-srk-birthday"
              style={{ color: "var(--lime)", textDecoration: "underline" }}
            >
              Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?
            </Link>
          </p>

          <h2>First Song From King: Tu Mil Jaaye</h2>
          <p>
            At midnight on 2 November, the makers delivered the biggest gift of the night, releasing the first song from <em>King</em>, titled <strong>“Tu Mil Jaaye”</strong>.
          </p>
          <p>
            The track brings together an extraordinary combination of talent:
          </p>
          <ul>
            <li>
              <strong>Sensational Reunion:</strong> It is a romantic track featuring Shah Rukh Khan and Deepika Padukone sharing the screen once again following their blockbuster pairings in <em>Om Shanti Om</em>, <em>Chennai Express</em>, <em>Happy New Year</em>, and <em>Pathaan</em>.
            </li>
            <li>
              <strong>Vocals by Arijit Singh:</strong> Bollywood’s reigning playback singer delivers another soulful melody.
            </li>
            <li>
              <strong>Global Feature:</strong> The song features an English rap verse by global pop superstar <strong>Ed Sheeran</strong>.
            </li>
            <li>
              <strong>Platforms:</strong> The song is officially streaming on the Zee Music Company and T-Series YouTube channels.
            </li>
          </ul>

          <p>
            Social media erupted within minutes of the song’s debut. Fans are widely praising Shah Rukh Khan’s ultra-fit, sharp new look in the video alongside Deepika Padukone’s stunning saffron ensemble, igniting massive buzz across Instagram and X.
          </p>

          <p>
            Also Read:{" "}
            <Link
              href="/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga"
              style={{ color: "var(--lime)", textDecoration: "underline" }}
            >
              Himesh Reshammiya Calls Deepika Padukone “Irreplaceable” in Rapid Fire Round
            </Link>
          </p>

          <h2>King Release Date</h2>
          <p>
            <em>King</em> is directed by <strong>Siddharth Anand</strong> and is officially scheduled to release in cinemas on <strong>24 December 2026</strong>, positioning the action spectacle as the definitive Christmas holiday blockbuster of the year.
          </p>

          {/* Quick Facts Table */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "20px",
              margin: "32px 0",
              overflowX: "auto",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--lime)",
                marginBottom: "16px",
                fontWeight: 700,
              }}
            >
              ⚡ Quick Facts: SRK 61st Birthday &amp; King Song Drop
            </h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)", width: "35%" }}>
                    <strong>Celebrity</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>Shah Rukh Khan (SRK)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Occasion &amp; Age</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>61st Birthday (2 November 2026)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Location</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>Mannat, Bandra West, Mumbai</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Why Balcony Wave Missed</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>Mannat is undergoing extensive reconstruction; SRK temporarily residing away</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>SRK’s Message</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    “Thank you all for your wishes and love. Sending mine right back to you all. Lots of love and a big hug”
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Red Chillies Caption</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    “To the hearts that made him KING, a lot of love in return #LoveLikeAKING”
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Dialogues Displayed</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    “King Akela Kaafi Hai” &amp; “Darr Nahi, Dehshat Hoon”
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>King Song Released</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    “Tu Mil Jaaye” (featuring Shah Rukh Khan &amp; Deepika Padukone)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Singers &amp; Rap</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    Arijit Singh (Vocals), Ed Sheeran (English Rap)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>King Release Date</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "var(--lime)", fontWeight: 700 }}>
                    24 December 2026 (Directed by Siddharth Anand)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Final Word</h2>
          <p>
            SRK may have missed his balcony wave, but he did not miss his fans. A heartfelt note, a <em>King</em> makeover and a brand-new song made his 61st birthday a big celebration anyway.
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood updates, music reviews, and box office coverage.
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
                  href="/diljit-dosanjh-aura-india-tour-hurdles"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles
                </Link>
              </li>
              <li>
                <Link
                  href="/bhansali-productions-gangubai-post-eetha-trailer-backlash"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Bhansali Productions Trolled for Gangubai Kathiawadi Post on Eetha Trailer Day
                </Link>
              </li>
              <li>
                <Link
                  href="/robert-downey-jr-pedro-pascal-halloween-costume-swap"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Robert Downey Jr. and Pedro Pascal Swap Marvel Roles for Halloween
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
              "ShahRukhKhan",
              "SRK61stBirthday",
              "Mannat",
              "MannatBalcony",
              "King",
              "TuMilJaaye",
              "DeepikaPadukone",
              "ArijitSingh",
              "EdSheeran",
              "SiddharthAnand",
              "RedChilliesEntertainment",
              "BollywoodNews",
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
              title="Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note"
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
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ← Back to Bollywood
            </Link>
            <Link
              href="/movies"
              style={{
                color: "var(--lavender)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              View Movies Hub →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
