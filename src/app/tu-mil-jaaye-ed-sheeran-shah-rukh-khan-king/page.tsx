import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Tu Mil Jaaye: How SRK Got Ed Sheeran for King",
  description:
    "Ed Sheeran shares how Shah Rukh Khan asked him to make a song for King. Read the story behind Tu Mil Jaaye, with Arijit Singh and Deepika Padukone.",
  keywords: [
    "Tu Mil Jaaye",
    "King first song",
    "Ed Sheeran Shah Rukh Khan",
    "Arijit Singh Ed Sheeran",
    "King release date",
    "Tu Mil Jaaye views",
    "Shah Rukh Khan",
    "Ed Sheeran",
    "Arijit Singh",
    "Deepika Padukone",
    "King movie",
    "King movie song",
    "Sachin-Jigar",
    "Kumaar",
    "Siddharth Anand",
    "Tu Mil Jaaye song record",
    "Tu Mil Jaaye YouTube record",
    "Bollywood music",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Tu Mil Jaaye: How SRK Got Ed Sheeran for King",
    description:
      "Ed Sheeran shares how Shah Rukh Khan asked him to make a song for King. Read the story behind Tu Mil Jaaye, with Arijit Singh and Deepika Padukone.",
    url: "https://www.buzzoriginals.com/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king.jpg",
        width: 1024,
        height: 576,
        alt: "Tu Mil Jaaye: How Shah Rukh Khan Got Ed Sheeran on King's First Song with Deepika Padukone",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T21:00:00.000Z",
    authors: ["Buzz Originals Music Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Mil Jaaye: How SRK Got Ed Sheeran for King",
    description:
      "Ed Sheeran shares how Shah Rukh Khan asked him to make a song for King. Read the story behind Tu Mil Jaaye, with Arijit Singh and Deepika Padukone.",
    images: ["/images/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king.jpg"],
  },
  alternates: {
    canonical: "/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king",
  },
};

export default function TuMilJaayeEdSheeranKingPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king";
  const pageTitle =
    "Tu Mil Jaaye: How Shah Rukh Khan Got Ed Sheeran on King's First Song";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king.jpg",
    ],
    datePublished: "2026-11-03T21:00:00+05:30",
    dateModified: "2026-11-03T21:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Music Desk",
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
      "Ed Sheeran shares how Shah Rukh Khan asked him to make a song for King. Read the story behind Tu Mil Jaaye, with Arijit Singh and Deepika Padukone.",
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
        name: "Tu Mil Jaaye: SRK & Ed Sheeran",
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
          <span style={{ color: "var(--lavender)" }}>TU MIL JAAYE: SRK &amp; ED SHEERAN</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Global Collab</span>
            <span className="badge lime">King First Song</span>
            <span className="badge">Ed Sheeran x SRK</span>
          </div>

          <h1 className="article-title">{pageTitle}</h1>

          <div className="article-meta">
            <span>By Buzz Originals Music Desk</span>
            <span>·</span>
            <time dateTime="2026-11-03">November 3, 2026</time>
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
              src="/images/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king.jpg"
              alt="Tu Mil Jaaye: How Shah Rukh Khan Got Ed Sheeran on King's First Song"
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
            Shah Rukh Khan and Deepika Padukone reunite in Tu Mil Jaaye from King, featuring a landmark collaboration with global superstar Ed Sheeran. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Tu Mil Jaaye: How SRK Got Ed Sheeran for King"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            <strong>Shah Rukh Khan</strong> gave his fans a big surprise on his 61st birthday, November 2. He released <strong>Tu Mil Jaaye</strong>, the first song from his upcoming film <strong>King</strong>. Now <strong>Ed Sheeran</strong> has told the story of how this song came to him. And it all began with one simple meeting.
          </p>

          {/* Quick Snapshot Card */}
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
              ⚡ Fast Snapshot: Tu Mil Jaaye Behind The Scenes
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>Song Title:</strong> <em>Tu Mil Jaaye</em> (First single from <em>King</em>).
              </li>
              <li>
                <strong>Global Debut:</strong> Marks four-time Grammy winner <strong>Ed Sheeran&apos;s</strong> very first Bollywood song.
              </li>
              <li>
                <strong>Recorded Overnight:</strong> SRK introduced Ed to composer duo <strong>Sachin-Jigar</strong> at Mannat, and Ed wrote and recorded his verse that same night.
              </li>
              <li>
                <strong>Mega Collab:</strong> Vocals by <strong>Arijit Singh</strong>, <strong>Madhubanti Bagchi</strong>, and <strong>Ed Sheeran</strong>.
              </li>
              <li>
                <strong>Massive Record:</strong> Surpassed 36.3 million YouTube views in its opening 24 hours.
              </li>
            </ul>
          </div>

          <h2>How Ed Sheeran Became Part of King</h2>
          <p>
            On Instagram, Ed shared a behind-the-scenes video of himself recording the song. He mixed it with small clips from the final track. In his caption, he explained how it all started.
          </p>
          <p>
            He said:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            &ldquo;When I first met Shah Rukh, he said I must make a song to be in his next movie and also be my first Bollywood song.&rdquo;
          </blockquote>

          <p>
            So yes, <strong>Tu Mil Jaaye</strong> is Ed Sheeran&apos;s first Bollywood song.
          </p>

          <p>
            Ed also said the two have become close over time. In his words: <em>&ldquo;We&apos;ve got to know each other over the years, and I love him.&rdquo;</em> On his last trip to India, he even went to SRK&apos;s house and asked him to do a cameo in the music video of <em>Sapphire</em>, a song he made with Arijit Singh.
          </p>

          <p>
            That same day, SRK introduced him to music director Sachin-Jigar. Ed wrote and recorded his part that very night. He wrote:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            &ldquo;He introduced me to @sachinjigar that day, and I wrote and recorded my verse for Tu Mil Jaaye for his movie King that night.&rdquo;
          </blockquote>

          <p>
            The best part? Ed is happy that Arijit is on the track too. <em>&ldquo;I love that Arijit is singing on it with me too, all my favourite people on one project.&rdquo;</em>
          </p>

          {/* Inline Contextual Read Link */}
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
            Also Read:{" "}
            <Link
              href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
            >
              King First Song ‘Tu Mil Jaaye’ Out: Shah Rukh Khan and Deepika Padukone Light Up 61st Birthday
            </Link>
          </div>

          <h2>Ed Sheeran Gave a Hint Earlier</h2>
          <p>
            Fans had a small clue back in mid-2025. Ed shared a video of himself rehearsing with <strong>Arijit Singh</strong> and said the song was for a Bollywood film that Shah Rukh Khan was going to do. At that time, no one knew it was <strong>King</strong>.
          </p>

          <h2>All About the Song Tu Mil Jaaye</h2>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px",
              margin: "24px 0",
            }}
          >
            <h4
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--lime)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              🎵 Official Song Credits
            </h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", fontSize: "14px" }}>
              <div>
                <strong style={{ color: "#fff" }}>Singers:</strong>
                <p style={{ margin: "4px 0 0", color: "var(--lavender)" }}>
                  Arijit Singh, Madhubanti Bagchi, with Ed Sheeran
                </p>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Music Directors:</strong>
                <p style={{ margin: "4px 0 0", color: "var(--lavender)" }}>
                  Sachin-Jigar
                </p>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Lyrics:</strong>
                <p style={{ margin: "4px 0 0", color: "var(--lavender)" }}>
                  Kumaar
                </p>
              </div>
              <div>
                <strong style={{ color: "#fff" }}>On Screen:</strong>
                <p style={{ margin: "4px 0 0", color: "var(--lavender)" }}>
                  Shah Rukh Khan and Deepika Padukone
                </p>
              </div>
            </div>
          </div>

          <p>
            The song is a love track built around the celebrated <strong>SRK-Deepika chemistry</strong>. But it is not only romance. There are quick glimpses of action and violence too, which hint at the secret mission that drives the film.
          </p>
          <p>
            The video has foreign locations and a hook step. This will remind many fans of the songs from <em>Pathaan</em> and <em>Jawan</em>, where the same pair also shared the screen.
          </p>

          <p>
            Before the couple appears, SRK makes a bold entry with this line:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--pink)",
              background: "rgba(255, 0, 128, 0.05)",
              padding: "16px 20px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "18px",
              lineHeight: "1.6",
              borderRadius: "0 8px 8px 0",
            }}
          >
            &ldquo;Main katil nahi, aashiq hoon, nishana meri masooqa, aur woh aashiqui kya jo dil cheer na de.&rdquo;
          </blockquote>

          <p>
            <strong>In simple words:</strong> <em>I am not a killer; I am a lover. The one I love is my target. And love is not real love if it does not break your heart.</em>
          </p>

          {/* Interactive Community Poll Plug */}
          <div
            style={{
              background: "linear-gradient(165deg, #181820 0%, #111116 100%)",
              border: "1.5px solid rgba(111, 207, 74, 0.35)",
              borderRadius: "12px",
              padding: "18px 22px",
              margin: "28px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <div>
              <span className="badge pink" style={{ fontSize: "11px", marginBottom: "6px", display: "inline-block" }}>
                🗳️ Have Your Say
              </span>
              <h4 style={{ margin: 0, fontSize: "16px", color: "#fff", fontWeight: 700 }}>
                What do you think of &lsquo;Tu Mil Jaaye&rsquo;?
              </h4>
              <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--muted)" }}>
                Cast your vote in our live community poll on the homepage!
              </p>
            </div>
            <Link
              href="/#polls"
              className="btn lime"
              style={{ padding: "8px 16px", fontSize: "13px", textDecoration: "none" }}
            >
              Vote in Live Poll →
            </Link>
          </div>

          <h2>Tu Mil Jaaye Breaks YouTube Records</h2>
          <p>
            The song was a hit from day one. Reports say it got more than <strong>36.3 million views</strong> and about <strong>430,000 likes</strong> on YouTube in the first 24 hours. This put it ahead of <em>Zinda Banda</em> from <em>Jawan</em>, which had 34.6 million views in its first 24 hours for the Hindi version.
          </p>

          {/* Record Comparison Table */}
          <div style={{ overflowX: "auto", margin: "24px 0" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.06)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#fff" }}>Song Track</th>
                  <th style={{ padding: "12px 16px", textAlign: "left", color: "#fff" }}>Film</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", color: "var(--lime)" }}>24-Hour Views</th>
                  <th style={{ padding: "12px 16px", textAlign: "right", color: "var(--pink)" }}>24-Hour Likes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)", background: "rgba(111, 207, 74, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Tu Mil Jaaye</td>
                  <td style={{ padding: "12px 16px" }}>King (2026)</td>
                  <td style={{ padding: "12px 16px", textAlign: "right", fontWeight: "bold", color: "var(--lime)" }}>36.3 Million</td>
                  <td style={{ padding: "12px 16px", textAlign: "right", color: "#fff" }}>~430,000</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Zinda Banda (Hindi)</td>
                  <td style={{ padding: "12px 16px" }}>Jawan (2023)</td>
                  <td style={{ padding: "12px 16px", textAlign: "right" }}>34.6 Million</td>
                  <td style={{ padding: "12px 16px", textAlign: "right" }}>~410,000</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Besharam Rang</td>
                  <td style={{ padding: "12px 16px" }}>Pathaan (2023)</td>
                  <td style={{ padding: "12px 16px", textAlign: "right" }}>32.1 Million</td>
                  <td style={{ padding: "12px 16px", textAlign: "right" }}>~390,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>What We Know About King</h2>
          <p>
            <strong>King</strong> brings Shah Rukh Khan back with director <strong>Siddharth Anand</strong>, who made <em>Pathaan</em>. It also marks the return of the SRK-Deepika Padukone pair after <em>Jawan</em>.
          </p>
          <p>
            The film has a big star cast, including <strong>Suhana Khan</strong>, <strong>Abhishek Bachchan</strong>, <strong>Anil Kapoor</strong>, <strong>Rani Mukerji</strong>, <strong>Jackie Shroff</strong>, <strong>Arshad Warsi</strong> and <strong>Abhay Verma</strong>. <strong>Kareena Kapoor</strong> is also part of the film for a special dance number.
          </p>
          <p>
            <strong>King will release in theatres on December 24.</strong>
          </p>

          {/* Also Read Box 2 */}
          <div
            style={{
              borderLeft: "3px solid var(--lime)",
              background: "rgba(111, 207, 74, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Also Read:{" "}
            <Link
              href="/shah-rukh-khan-61st-birthday-mannat-balcony"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Shah Rukh Khan 61st Birthday: SRK Greets Thousands of Fans at Mannat Balcony
            </Link>
          </div>

          <h2>Final Words</h2>
          <p>
            A birthday surprise, a global pop star, Arijit Singh&apos;s voice and the SRK-Deepika magic. <strong>Tu Mil Jaaye</strong> has everything fans were waiting for. With <strong>King</strong> now just weeks away, the excitement is only going up.
          </p>
          <p>
            Keep following <strong>Buzz OG</strong> for more Bollywood updates.
          </p>
        </div>

        {/* Editorial Signature & Disclaimer */}
        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "8px",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.6)",
            lineHeight: "1.6",
          }}
        >
          <p style={{ margin: 0 }}>
            <strong>Editorial Note:</strong> Buzz Originals brings you verified reporting across entertainment, music, and Bollywood exclusives. Stay tuned for real-time tracking of <em>King</em> box office advance bookings, music charts, and exclusive interviews.
          </p>
        </div>

        {/* Social Sharing Bar Bottom */}
        <div style={{ margin: "32px 0 24px" }}>
          <SocialShare
            title="Tu Mil Jaaye: How SRK Got Ed Sheeran for King"
            url={pageUrl}
          />
        </div>

        {/* Related Articles Section */}
        <section style={{ marginTop: "48px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontFamily: "var(--font-space-mono)",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "20px",
            }}
          >
            More Related Stories
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <Link
              href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
              className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card-media" style={{ position: "relative", aspectRatio: "16 / 9" }}>
                <Image
                  src="/images/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone.jpg"
                  alt="King First Song Tu Mil Jaaye Out"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <span className="badge pink">Music Alert</span>
              </div>
              <div className="card-body">
                <h3>King First Song ‘Tu Mil Jaaye’ Out: Shah Rukh Khan and Deepika Padukone Light Up 61st Birthday</h3>
                <p className="card-excerpt">
                  Arijit Singh and Ed Sheeran collab ignites YouTube with record views.
                </p>
                <div className="meta-row">
                  <span>BOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>4 MIN READ</span>
                </div>
              </div>
            </Link>

            <Link
              href="/siddharth-anand-time-for-the-world-king-srk-birthday"
              className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card-media" style={{ position: "relative", aspectRatio: "16 / 9" }}>
                <Image
                  src="/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg"
                  alt="Siddharth Anand King Birthday Post"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <span className="badge lime">Director Note</span>
              </div>
              <div className="card-body">
                <h3>&lsquo;Time for the World to Meet King&rsquo;: Director Siddharth Anand Wishes SRK</h3>
                <p className="card-excerpt">
                  Pathaan director promises an action spectacle for the ages this December.
                </p>
                <div className="meta-row">
                  <span>BOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>

            <Link
              href="/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser"
              className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card-media" style={{ position: "relative", aspectRatio: "16 / 9" }}>
                <Image
                  src="/images/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser.jpg"
                  alt="Kareena Kapoor and Saif Ali Khan KWK 9"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                <span className="badge pink">KWK 9 Scoop</span>
              </div>
              <div className="card-body">
                <h3>Koffee With Karan 9: Kareena Kapoor and Saif Ali Khan Light Up Season Premiere</h3>
                <p className="card-excerpt">
                  Kareena Kapoor discusses her dance number in King and dynamic with SRK.
                </p>
                <div className="meta-row">
                  <span>BOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
