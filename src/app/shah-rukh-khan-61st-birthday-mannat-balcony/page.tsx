import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Shah Rukh Khan 61st Birthday: SRK Greets Fans at Mannat",
  description:
    "Shah Rukh Khan skipped his midnight Mannat greeting on his 61st birthday, then surprised fans in the evening. Read the note, King song and wishes.",
  keywords: [
    "Shah Rukh Khan 61st birthday",
    "SRK birthday 2026",
    "Shah Rukh Khan Mannat balcony",
    "SRK Mannat birthday",
    "Shah Rukh Khan birthday celebration",
    "Shah Rukh Khan handwritten note",
    "Mannat renovation",
    "King movie release date",
    "Tu Mil Jaaye song",
    "King Shah Rukh Khan Deepika Padukone",
    "Shah Rukh Khan Suhana Khan King",
    "SRK fans outside Mannat",
    "Bollywood news today",
    "Buzz Originals",
    "Siddharth Anand",
  ],
  openGraph: {
    title: "Shah Rukh Khan 61st Birthday: SRK Greets Fans at Mannat",
    description:
      "Shah Rukh Khan skipped his midnight Mannat greeting on his 61st birthday, then surprised fans in the evening. Read the note, King song and wishes.",
    url: "https://www.buzzoriginals.com/shah-rukh-khan-61st-birthday-mannat-balcony",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/shah-rukh-khan-61st-birthday-mannat-balcony.jpg",
        width: 1024,
        height: 576,
        alt: "Shah Rukh Khan 61st Birthday - SRK Greets Fans at Mannat Platform",
      },
    ],
    type: "article",
    publishedTime: "2026-11-02T16:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shah Rukh Khan 61st Birthday: SRK Greets Fans at Mannat",
    description:
      "Shah Rukh Khan skipped his midnight Mannat greeting on his 61st birthday, then surprised fans in the evening. Read the note, King song and wishes.",
    images: ["/images/shah-rukh-khan-61st-birthday-mannat-balcony.jpg"],
  },
  alternates: {
    canonical: "/shah-rukh-khan-61st-birthday-mannat-balcony",
  },
};

export default function ShahRukhKhan61stBirthdayMannatBalconyPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/shah-rukh-khan-61st-birthday-mannat-balcony";
  const pageTitle =
    "Shah Rukh Khan Skips Midnight Greeting, Then Appears at Mannat on His 61st Birthday";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/shah-rukh-khan-61st-birthday-mannat-balcony.jpg",
    ],
    datePublished: "2026-11-02T16:30:00+05:30",
    dateModified: "2026-11-02T16:30:00+05:30",
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
      "Shah Rukh Khan skipped his midnight Mannat greeting on his 61st birthday, then surprised fans in the evening. Read the note, King song and wishes.",
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
        name: "SRK Greets Fans at Mannat",
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
          <span style={{ color: "var(--lavender)" }}>SRK 61ST BIRTHDAY GREETING</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">👑 61st Birthday</span>
            <span className="badge pink">Mannat Fan Wave</span>
            <span className="badge">Bollywood</span>
          </div>

          <h1 className="article-title">
            Shah Rukh Khan Skips Midnight Greeting, Then Appears at Mannat on His 61st Birthday
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
              src="/images/shah-rukh-khan-61st-birthday-mannat-balcony.jpg"
              alt="Shah Rukh Khan 61st Birthday - SRK Greets Fans at Mannat Platform"
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
            Shah Rukh Khan greeted thousands of cheering fans from a custom platform at Mannat on the evening of his 61st birthday, striking his signature open-arms pose in a white T-shirt and denim. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Shah Rukh Khan Skips Midnight Greeting, Then Appears at Mannat on His 61st Birthday"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            For years, fans have gathered outside Mannat at midnight on 2 November to see Shah Rukh Khan wave. This year, SRK’s <strong>61st birthday</strong> made them wait much longer. He did not come out at midnight. But when he finally appeared in the evening, the crowd got the moment they had been waiting for.
          </p>

          <p>
            The arrival of Shah Rukh Khan on his special Mannat deck sent the sea of fans into a frenzy, capping off an emotional day that began with midnight prayers, handwritten notes, and the blockbuster drop of <em>King’s</em> first song.
          </p>

          <h2>No Midnight Greeting, but a Note From SRK</h2>
          <p>
            Fans reached Mannat at midnight as usual, but the actor was not at home. The iconic Bandra bungalow is currently undergoing extensive structural renovation and expansion work. To make up for his absence, a large digital screen outside Mannat lit up with a personal handwritten message from the superstar:
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
            “Thank you all for your wishes and love. Sending mine right back to you all. Lots of love and a big hug”
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
              — Shah Rukh Khan
            </span>
          </blockquote>

          <p>
            The digital display also showcased high-voltage scenes and punchy dialogues from his upcoming movie <em>King</em>, including <em>“King Akela Kaafi Hai”</em> and <em>“Darr Nahi, Dehshat Hoon.”</em> A day earlier, the iconic Bandra-Worli Sea Link was bathed in lights, displaying special visual projections in honour of his birthday.
          </p>

          <p style={{ marginTop: "16px" }}>
            <strong>Also Read:</strong>{" "}
            <Link
              href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday
            </Link>
          </p>

          <h2>SRK Finally Steps Out in the Evening</h2>
          <p>
            Tens of thousands of fans waited patiently outside the gates throughout the day, braving the heat and crowd. As evening set in, some were beginning to lose hope—until a high-security convoy of luxury SUVs was spotted making its way down Bandstand towards Mannat. Mumbai Police had fortified the entire area with heavy barricades to manage the surging crowd.
          </p>
          <p>
            Moments later, the moment arrived. Because the main residence and famous balcony are under structural overhaul, Shah Rukh Khan emerged onto an elevated platform custom-built near the perimeter of Mannat.
          </p>

          {/* Appearance Highlights Card */}
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
              Mannat Evening Appearance Highlights
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  THE LOOK
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                  Classic White T-Shirt &amp; Blue Denim
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  SIGNATURE MOVES
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "var(--lime)" }}>
                  Open-Arms Pose, Flying Kisses &amp; Salaam-Namaste
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  VENUE
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                  Special Elevated Platform at Mannat
                </span>
              </div>
              <div>
                <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "rgba(255, 255, 255, 0.5)", display: "block" }}>
                  PRIOR CELEBRATION
                </span>
                <span style={{ fontSize: "15px", fontWeight: 700, color: "#fff" }}>
                  Private Lunch with Family at Taj Hotel
                </span>
              </div>
            </div>
          </div>

          <p>
            Dressed in an effortlessly stylish white tee, denim jeans, and dark shades, SRK waved passionately, blew kisses in all directions, greeted the ocean of admirers with both a <em>salaam</em> and a <em>namaste</em>, and finally delivered his immortal open-arms pose to deafening roars.
          </p>
          <p>
            Just before heading to Mannat, SRK reportedly celebrated an intimate lunch with his family and close friends at Mumbai’s Taj Mahal Palace Hotel. A viral video captured by a fan showed him waving warmly from his vehicle as he departed the hotel.
          </p>

          <p style={{ marginTop: "16px" }}>
            <strong>Also Read:</strong>{" "}
            <Link
              href="/shah-rukh-khan-61st-birthday-mannat-handwritten-note"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 600 }}
            >
              Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note
            </Link>
          </p>

          <h2>How Fans Celebrated Across the City</h2>
          <p>
            The birthday euphoria took over Mumbai and cities across India with non-stop festivities:
          </p>

          <div style={{ margin: "20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              {
                title: "Grand Cake Cutting in Juhu",
                desc: "Several prominent SRK fan clubs organized a massive birthday cake cutting celebration at a popular lounge in Juhu, with hundreds of members singing classic SRK anthems.",
                accent: "var(--lime)",
              },
              {
                title: "Banners & Posters on Bandstand",
                desc: "Supporters lined the streets near Mannat carrying life-sized cutouts, 61-foot banners, and handwritten signs professing their lifelong devotion to King Khan.",
                accent: "var(--magenta)",
              },
              {
                title: "Dancing to ‘Tu Mil Jaaye’",
                desc: "Crowds gathered on portable speakers and phone screens to dance, sing, and celebrate the midnight release of King's first romantic song.",
                accent: "var(--lime)",
              },
            ].map((event, i) => (
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
                <span style={{ fontSize: "15px", fontWeight: 700, color: event.accent }}>
                  {event.title}
                </span>
                <span style={{ fontSize: "14.5px", color: "#e4e4e7", lineHeight: "1.6" }}>
                  {event.desc}
                </span>
              </div>
            ))}
          </div>

          <h2>Tu Mil Jaaye: First Song From King</h2>
          <p>
            To mark his 61st birthday, Shah Rukh Khan surprised fans at midnight by officially launching <strong>‘Tu Mil Jaaye’</strong>, the opening track from <em>King</em>. The romantic track reunites SRK and Deepika Padukone against scenic coastlines, powered by vocals from Arijit Singh and a surprise English rap verse penned and performed by Ed Sheeran.
          </p>
          <p>
            Just days earlier, SRK had teased the movie with a brooding, bloodied poster alongside the iconic dialogue: <em>“Aaj phir yaad aaya... Qaatil nahi… Aashiq hoon… #KING”</em>.
          </p>

          <h2>Wishes From the Film Industry</h2>
          <p>
            Warm birthday tributes flooded social media throughout the day from across the film fraternity. Top industry stalwarts including <strong>Kareena Kapoor Khan</strong>, <strong>Kajol</strong>, <strong>Ajay Devgn</strong>, <em>Jawan</em> director <strong>Atlee</strong>, <strong>Riteish Deshmukh</strong>, <strong>Farah Khan</strong>, and <strong>Shilpa Shetty</strong> took to Instagram and X to send heartfelt wishes, celebrating his peerless contributions to Indian cinema.
          </p>

          <h2>About the Film King</h2>
          <p>
            <em>King</em> is an upcoming mega-budget action thriller directed by <strong>Siddharth Anand</strong>, marking his second collaboration with Shah Rukh Khan following the record-breaking blockbuster <em>Pathaan</em>.
          </p>

          {/* King Quick Facts */}
          <div
            style={{
              margin: "24px 0",
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
                    <strong>Director</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "#fff" }}>
                    Siddharth Anand (Pathaan, War)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Starring Cast</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "#fff" }}>
                    Shah Rukh Khan, Deepika Padukone, Suhana Khan, Abhishek Bachchan, Rani Mukerji, and others
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Special Milestone</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "var(--lime)", fontWeight: 700 }}>
                    First film where SRK and his daughter Suhana share the screen
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 14px", color: "var(--lavender)" }}>
                    <strong>Theatrical Release Date</strong>
                  </td>
                  <td style={{ padding: "10px 14px", color: "var(--lime)", fontWeight: 700 }}>
                    24 December 2026 (Worldwide Theatres)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood updates, birthday coverage, and box office scoops.
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
                  href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday
                </Link>
              </li>
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
              "MannatBalcony",
              "SRKMannat",
              "KingMovie",
              "TuMilJaaye",
              "SuhanaKhan",
              "DeepikaPadukone",
              "SiddharthAnand",
              "BollywoodNews",
              "MannatRenovation",
              "HappyBirthdaySRK",
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
              title="Shah Rukh Khan Skips Midnight Greeting, Then Appears at Mannat on His 61st Birthday"
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
