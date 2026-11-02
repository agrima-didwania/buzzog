import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "King First Song ‘Tu Mil Jaaye’ Out",
  description:
    "Shah Rukh Khan’s King first song ‘Tu Mil Jaaye’ is out! See the Arijit Singh and Ed Sheeran collab, SRK-Deepika chemistry, and fan reactions.",
  keywords: [
    "King first song",
    "Tu Mil Jaaye",
    "Tu Mil Jaaye song",
    "Shah Rukh Khan King song",
    "Shah Rukh Khan birthday 2026",
    "SRK 61st birthday",
    "Arijit Singh Ed Sheeran song",
    "Ed Sheeran Bollywood song",
    "SRK Deepika Padukone song",
    "King movie first song release",
    "King movie release date",
    "King movie cast",
    "Sachin-Jigar new song",
    "Tu Mil Jaye",
    "Tum Mil Jaye",
    "Shahrukh Khan",
    "Shah Rukh Khan",
    "Arijit Singh",
    "Arjit Singh",
    "King SRK",
    "King first song lyrics",
    "King song download",
    "Tu Mil Jaaye YouTube",
    "King Siddharth Anand",
    "Buzz Originals",
  ],
  openGraph: {
    title: "King First Song ‘Tu Mil Jaaye’ Out",
    description:
      "Shah Rukh Khan’s King first song ‘Tu Mil Jaaye’ is out! See the Arijit Singh and Ed Sheeran collab, SRK-Deepika chemistry, and fan reactions.",
    url: "https://www.buzzoriginals.com/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone.jpg",
        width: 1024,
        height: 576,
        alt: "King First Song Tu Mil Jaaye Out Now - Shah Rukh Khan and Deepika Padukone",
      },
    ],
    type: "article",
    publishedTime: "2026-11-02T13:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "King First Song ‘Tu Mil Jaaye’ Out",
    description:
      "Shah Rukh Khan’s King first song ‘Tu Mil Jaaye’ is out! See the Arijit Singh and Ed Sheeran collab, SRK-Deepika chemistry, and fan reactions.",
    images: ["/images/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone.jpg"],
  },
  alternates: {
    canonical: "/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone",
  },
};

export default function KingFirstSongTuMilJaayePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone";
  const pageTitle =
    "King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone.jpg",
    ],
    datePublished: "2026-11-02T13:45:00+05:30",
    dateModified: "2026-11-02T13:45:00+05:30",
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
      "Shah Rukh Khan’s King first song ‘Tu Mil Jaaye’ is out! See the Arijit Singh and Ed Sheeran collab, SRK-Deepika chemistry, and fan reactions.",
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
        name: "King First Song Tu Mil Jaaye",
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
          <Link href="/movies">MOVIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>KING FIRST SONG</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🎵 Song Out Now</span>
            <span className="badge pink">Ed Sheeran Collab</span>
            <span className="badge">King</span>
          </div>

          <h1 className="article-title">
            King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday
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
              src="/images/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone.jpg"
              alt="King First Song Tu Mil Jaaye Out Now - Shah Rukh Khan and Deepika Padukone"
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
            Shah Rukh Khan and Deepika Padukone reunite for “Tu Mil Jaaye”, the first song from Siddharth Anand’s King, featuring a mega-collab between Arijit Singh and Ed Sheeran. (Photo: Red Chillies Entertainment / Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Shah Rukh Khan turned 61 on November 2, 2026. His fans got a big gift: the first song from his upcoming film <em>King</em>. The song is called <strong>‘Tu Mil Jaaye’</strong>. It is already trending online, and fans can’t stop talking about it.
          </p>

          <p>
            The arrival of the <strong>King first song</strong> has sent shockwaves across social media, combining an infectious international pop hook with Bollywood romance. The track marks the grand musical launch for Siddharth Anand’s mega action entertainer ahead of its December theatrical release.
          </p>

          <h2>Who Is Behind ‘Tu Mil Jaaye’?</h2>
          <p>
            The music team is a big reason for the buzz. The track brings together powerhouse musical talent from Bollywood and global pop charts:
          </p>

          {/* Credits Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderLeft: "4px solid var(--lime)",
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
                color: "var(--lime)",
                letterSpacing: "0.5px",
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              ‘Tu Mil Jaaye’ Music Credits
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  SINGERS
                </span>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>
                  Arijit Singh &amp; Madhubanti Bagchi
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  ENGLISH RAP &amp; LYRICS
                </span>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "var(--magenta)" }}>
                  Ed Sheeran
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  MUSIC COMPOSERS
                </span>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>
                  Sachin-Jigar
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  HINDI LYRICS
                </span>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>
                  Kumaar
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  CHOREOGRAPHY
                </span>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#fff" }}>
                  Piyush-Shazia
                </span>
              </div>
            </div>
          </div>

          <p>
            An <strong>Arijit Singh and Ed Sheeran</strong> team-up is not something fans expected. Many are calling it one of the most surprising Bollywood music collabs this year. With Sachin-Jigar handling composition and Ed Sheeran delivering verses he wrote personally for this track, the song bridges two distinct musical worlds seamlessly.
          </p>

          <p style={{ marginTop: "16px" }}>
            <strong>Also Read:</strong>{" "}
            <Link
              href="/shah-rukh-khan-61st-birthday-mannat-handwritten-note"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Sends Handwritten Note
            </Link>
          </p>

          <h2>What Is in the Video?</h2>
          <p>
            The video opens with a gritty, intense dialogue from SRK. He says:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            “Main kaatil nai aashiq hu.”
          </blockquote>

          <p>
            After that opening punch, the track transitions into an upbeat romantic dance anthem. Shah Rukh Khan and Deepika Padukone share many sweet, electric moments against a breathtaking seaside backdrop. Fans are also raving about SRK’s remarkably fit, shirtless look in the music video, showing the superstar in peak physical shape for his 61st birthday.
          </p>

          <p>
            The song is not only about romance, though. There are also high-octane action shots and a few dramatic, moody moments intercut throughout. These brief glimpses offer an early look at the contrasting shades of the film, proving that <em>King</em> balances raw stylized action with intense emotion.
          </p>

          <p>
            The video concludes with another powerful SRK dialogue that sets up the emotional stakes of the movie:
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
            “Iss baar dil mein aag lagi hai, ab duniya jalaye bina manega nahi.”
          </blockquote>

          <p>
            Many fans noted that the magnetic chemistry between Shah Rukh and Deepika evokes memories of their classic pairings in <em>Om Shanti Om</em>, <em>Chennai Express</em>, and <em>Pathaan</em>.
          </p>

          <h2>Did You Spot Suhana Khan?</h2>
          <p>
            Sharp-eyed viewers noticed a quick shot in the video of a girl standing outside a burning hut. She looks strikingly like Suhana Khan, though the cut is exceptionally brief and nothing has been officially confirmed yet.
          </p>
          <p>
            Suhana is making her much-anticipated theatrical big-screen debut alongside her father in <em>King</em>, and fans are speculating whether this fleeting teaser shot hints at her character’s dramatic arc in the narrative.
          </p>

          <h2>How Did Fans React?</h2>
          <p>
            Social media erupted in celebration immediately after the song hit streaming channels and YouTube. Reactions poured in from music lovers and moviegoers worldwide:
          </p>

          <div style={{ margin: "20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              {
                text: "“NO WAY!! SRK x Arijit Singh x Ed Sheeran!!?!”",
                source: "Fan on X",
                accent: "var(--lime)",
              },
              {
                text: "“Arijit singh ed sheeran.🎧 This Collab is crazyy 📈📈 and SRK is always fire🔥”",
                source: "Fan Reaction on Instagram",
                accent: "var(--magenta)",
              },
              {
                text: "“Kya gana hai Dil fida hogaya king saab❤🎉”",
                source: "YouTube Comment",
                accent: "var(--lime)",
              },
              {
                text: "“Birthday King ka aur taufa hamare liye.”",
                source: "Fan Comment on X",
                accent: "var(--lavender)",
              },
            ].map((quote, i) => (
              <div
                key={i}
                style={{
                  background: "var(--ink-2)",
                  border: "1px solid var(--line)",
                  borderRadius: "8px",
                  padding: "14px 18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span style={{ fontSize: "16px", color: "#fff", fontStyle: "italic" }}>
                  {quote.text}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "var(--font-space-mono)",
                    color: quote.accent,
                    fontWeight: 600,
                  }}
                >
                  — {quote.source}
                </span>
              </div>
            ))}
          </div>

          <p>
            Countless fans also used the release as an opportunity to flood the comments with heartfelt 61st birthday wishes for Shah Rukh Khan, celebrating his timeless charm and dedication to cinema.
          </p>

          <h2>SRK’s Birthday Sea Link Surprise</h2>
          <p>
            The birthday festivities did not end with the song release. A spectacular special <em>King</em> projection tribute illuminated the iconic <strong>Bandra-Worli Sea Link</strong> in Mumbai, painting the sea bridge in majestic colors.
          </p>
          <p>
            Despite staying away from the Mannat balcony due to ongoing renovations, SRK secretly went out for a late-night drive across the city just to click a photo of the illuminated landmark.
          </p>
          <p>
            He shared the photos on X (formerly Twitter) and thanked Google Gemini for orchestrating the awe-inspiring visual tribute, writing:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#fff",
            }}
          >
            “Dost ho toh Google Gemini jaisa (A friend should be like Google Gemini). Thank you for the KING-sized love always. I had to sneak out for a drive to get this photo, ha ha.”
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
              — Shah Rukh Khan (@iamsrk on X)
            </span>
          </blockquote>

          <h2>About the Film King</h2>
          <p>
            <em>King</em> is directed by Siddharth Anand, who previously delivered the blockbuster <em>Pathaan</em> with SRK. The high-budget spectacle is produced by Gauri Khan, Mamta Anand, and Siddharth Anand under <strong>Red Chillies Entertainment</strong> and <strong>Marflix Pictures</strong>.
          </p>

          {/* Key Facts Summary Table */}
          <div
            style={{
              margin: "28px 0",
              overflowX: "auto",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)", width: "35%" }}>
                    <strong>Movie Title</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "#fff", fontWeight: 700 }}>
                    King
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>First Song</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "var(--lime)", fontWeight: 700 }}>
                    ‘Tu Mil Jaaye’
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Director</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "#fff" }}>
                    Siddharth Anand
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Producers</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "#fff" }}>
                    Gauri Khan, Mamta Anand, Siddharth Anand
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Star Cast</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "#fff" }}>
                    Shah Rukh Khan, Deepika Padukone, Suhana Khan, Abhishek Bachchan, Rani Mukerji, Anil Kapoor, Jaideep Ahlawat, Raghav Juyal, and Abhay Verma
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Release Date</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "var(--lime)", fontWeight: 700 }}>
                    December 24, 2026 (Cinemas Worldwide)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Where to Listen / Watch</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "#fff" }}>
                    Streaming on Spotify, Apple Music, JioSaavn; official video on Zee Music Company &amp; T-Series YouTube channels
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Where to Listen to ‘Tu Mil Jaaye’</h2>
          <p>
            The audio track of <strong>‘Tu Mil Jaaye’</strong> is currently streaming on all leading music platforms including Spotify, Apple Music, Amazon Music, and JioSaavn. The official music video featuring Shah Rukh Khan, Deepika Padukone, and Ed Sheeran’s animated and live cameos can be watched on the official YouTube channels of Zee Music Company and T-Series.
          </p>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood updates, music releases, box office breakdowns, and insider scoops.
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
                  href="/shah-rukh-khan-61st-birthday-mannat-handwritten-note"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note
                </Link>
              </li>
              <li>
                <Link
                  href="/siddharth-anand-time-for-the-world-king-srk-birthday"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?
                </Link>
              </li>
              <li>
                <Link
                  href="/drishyam-3-ott-release-date-netflix"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Drishyam 3 OTT Release Date: When and Where to Watch on Netflix
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
              "KingFirstSong",
              "TuMilJaaye",
              "ShahRukhKhan",
              "DeepikaPadukone",
              "ArijitSingh",
              "EdSheeran",
              "SachinJigar",
              "SiddharthAnand",
              "KingMovie",
              "SRK61stBirthday",
              "RedChilliesEntertainment",
              "BollywoodMusic",
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
              title="King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday"
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
              href="/movies"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              Explore Movies →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
