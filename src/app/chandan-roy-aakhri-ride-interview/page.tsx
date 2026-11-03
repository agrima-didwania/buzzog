import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Chandan Roy on Aakhri Ride: Nine Years in Mumbai",
  description:
    "Panchayat actor Chandan Roy talks about his Bihar roots, nine years in Mumbai and why he said yes to Aakhri Ride, presented by Anurag Kashyap.",
  keywords: [
    "Chandan Roy Aakhri Ride",
    "Chandan Roy",
    "Aakhri Ride",
    "Chandan Roy interview",
    "Panchayat actor Chandan Roy",
    "Anurag Kashyap Vasan Bala short film",
    "Aakhri Ride short film",
    "Aakhri Ride cast",
    "Aakhri Ride story",
    "Aakhri Ride review",
    "Aakhri Ride YouTube",
    "Chandan Roy new film",
    "Chandan Roy Mumbai struggle",
    "Chandan Roy Bihar",
    "Vikas Panchayat actor",
    "Where to watch Aakhri Ride",
    "Who is the director of Aakhri Ride",
    "Chandan Roy cab driver role",
    "Chandan Roy Anurag Kashyap",
    "Aakhri Ride release date",
    "Aakhri Ride Oh Short Flips",
    "Bollywood news today",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Chandan Roy on Aakhri Ride: Nine Years in Mumbai",
    description:
      "Panchayat actor Chandan Roy talks about his Bihar roots, nine years in Mumbai and why he said yes to Aakhri Ride, presented by Anurag Kashyap.",
    url: "https://www.buzzoriginals.com/chandan-roy-aakhri-ride-interview",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/chandan-roy-aakhri-ride-interview.jpg",
        width: 1024,
        height: 576,
        alt: "Chandan Roy Aakhri Ride — Panchayat actor Chandan Roy as cab driver Aman Yadav",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T15:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan Roy on Aakhri Ride: Nine Years in Mumbai",
    description:
      "Panchayat actor Chandan Roy talks about his Bihar roots, nine years in Mumbai and why he said yes to Aakhri Ride, presented by Anurag Kashyap.",
    images: ["/images/chandan-roy-aakhri-ride-interview.jpg"],
  },
  alternates: {
    canonical: "/chandan-roy-aakhri-ride-interview",
  },
};

export default function ChandanRoyAakhriRidePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/chandan-roy-aakhri-ride-interview";
  const pageTitle =
    "Chandan Roy Says His Mumbai Struggles Helped Him Play a Desperate Cab Driver in Aakhri Ride";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/chandan-roy-aakhri-ride-interview.jpg",
    ],
    datePublished: "2026-11-03T15:45:00+05:30",
    dateModified: "2026-11-03T15:45:00+05:30",
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
      "Panchayat actor Chandan Roy talks about his Bihar roots, nine years in Mumbai and why he said yes to Aakhri Ride, presented by Anurag Kashyap.",
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
        name: "Chandan Roy Aakhri Ride Interview",
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
          <span style={{ color: "var(--lavender)" }}>CHANDAN ROY AAKHRI RIDE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">⚡ Exclusive Interview</span>
            <span className="badge lime">Aakhri Ride</span>
            <span className="badge">Panchayat Star</span>
          </div>

          <h1 className="article-title">
            Chandan Roy Says His Mumbai Struggles Helped Him Play a Desperate Cab Driver in Aakhri Ride
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
              src="/images/chandan-roy-aakhri-ride-interview.jpg"
              alt="Chandan Roy Aakhri Ride — Panchayat actor Chandan Roy as cab driver Aman Yadav"
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
            Chandan Roy channels nine years of Mumbai grit to portray cab driver Aman Yadav in Aakhri Ride, presented by Anurag Kashyap and Vasan Bala. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Chandan Roy on Aakhri Ride: Nine Years in Mumbai"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            <em>Panchayat</em> star <strong>Chandan Roy</strong> is receiving widespread acclaim for his gripping new short film, <em>Aakhri Ride</em>. In this high-tension <strong>Chandan Roy Aakhri Ride</strong> venture presented by celebrated indie stalwarts <strong>Anurag Kashyap</strong> and <strong>Vasan Bala</strong>, Chandan portrays a beleaguered migrant cab driver pushed to the absolute edge by Mumbai’s unforgiving pace. In an exclusive conversation with <em>Hindustan Times</em>, the actor opened up about his arduous journey from a humble village in Bihar to Bollywood, and why this raw story hit close to home.
          </p>

          <p>
            Beloved across households as the endearing Vikas in Prime Video’s rural comedy-drama <em>Panchayat</em>, Roy sheds his lovable rustic charm in <em>Aakhri Ride</em> to inhabit Aman Yadav — a cab driver trapped in a terrifying spiral during one fateful night on the streets of Mumbai.
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
              ⚡ Fast Snapshot: Chandan Roy on Aakhri Ride
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>The Film:</strong> <em>Aakhri Ride</em> (23 minutes) — a dark thriller-comedy hybrid exploring urban desperation and fear.
              </li>
              <li>
                <strong>Presented By:</strong> Maverick directors Anurag Kashyap and Vasan Bala.
              </li>
              <li>
                <strong>The Milestone:</strong> Chandan marks nine completed years in Mumbai, maintaining the same beginner’s hunger as day one.
              </li>
              <li>
                <strong>Platform:</strong> Streaming free worldwide on the <em>Oh Short Flips</em> YouTube channel.
              </li>
            </ul>
          </div>

          <h2>What is Aakhri Ride About?</h2>
          <p>
            In <em>Aakhri Ride</em>, Chandan Roy plays <strong>Aman Yadav</strong>, a migrant cab driver hailing from Bihar who arrived in Mumbai dreaming of creating a dignified life for his family. Reality, however, offers little romanticism. Aman barely manages to scrape together daily expenses, while shielding his elderly parents and relatives back home from the harrowing truth of his financial struggle.
          </p>
          <p>
            The plot follows Aman through one nerve-racking night that pushes his patience, ethics, and survival instincts to the extreme. Blending pulse-pounding thriller elements with eerie horror beats and razor-sharp dark humour, the 23-minute short captures the haunting claustrophobia of nighttime Mumbai cabs.
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
              href="/honey-trehan-slams-new-cbfc-advisory-satluj"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Satluj Director Honey Trehan Slams New CBFC Advisory: “Cowardice and Dictatorship”
            </Link>
          </div>

          <h2>From a Small Village in Bihar to Journalism</h2>
          <p>
            Chandan’s real-life trajectory mirrors the gritty resilience of the characters he embodies. Born and raised in <strong>Mahnar</strong>, a small village nestled in Bihar, Roy harboured acting ambitions since his early school days. Yet without internet connectivity, mentorship, or institutional support, making inroads into the film fraternity felt like chasing a mirage.
          </p>
          <p>
            Determined to find an entry point, he chose to study mass communication — a strategic compromise that positioned him near cameras, studio lighting, and industry professionals. Recalling his calculation, Chandan told <em>Hindustan Times</em>:
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
            “I had no money, and one has to do a lot of buttering to the bosses, and I just couldn’t do that.”
          </blockquote>

          <p>
            Chandan reflected on how people in remote villages had to make life-altering decisions based solely on newspaper clippings pasted on village tea stalls. Looking back across the decade, he considers that courageous leap the smartest choice that small-town boy could have ever made.
          </p>

          <h2>Nine Years in Mumbai, Same Energy</h2>
          <p>
            Marking an emotional career milestone, Chandan revealed that he has now lived in Mumbai for nine years. While the metropolis has become his second home, his hunger and discipline remain completely untouched by fame.
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--pink)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            “Today marks nine years of my time in Mumbai. Believe me, the boy who arrived nine years ago with a small suitcase, I still feel the exact same way today.”
          </blockquote>

          <p>
            Roy credits his Bihari roots for instilling an unshakeable work ethic. Every morning, he wakes up with the exact same mental clarity: he came to Mumbai to grind, earn his living with honesty, and craft a lasting legacy on screen.
          </p>

          <h2>Why Did Chandan Say Yes to Aakhri Ride?</h2>
          <p>
            When directors <strong>Vijesh Rajan</strong> and <strong>Yashoda Parthasarthy</strong> pitched <em>Aakhri Ride</em>, Chandan was convinced by three factors: the strength of the script, the visionary young directing team, and, above all, the name attached to the project — <strong>Anurag Kashyap</strong>.
          </p>
          <p>
            Roy explained his immediate excitement:
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
            “I have been a long-time fan of Anurag sir. So for someone who learned so much from his cinema, if his name gets attached to a film, it’s a huge deal for me.”
          </blockquote>

          {/* Another Internal Link */}
          <div
            style={{
              borderLeft: "3px solid var(--lime)",
              background: "rgba(0, 255, 128, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Also Read:{" "}
            <Link
              href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
              style={{ color: "var(--pink)", textDecoration: "underline", fontWeight: "bold" }}
            >
              King First Song ‘Tu Mil Jaaye’ Is Out: Shah Rukh Khan &amp; Deepika Padukone Dazzle
            </Link>
          </div>

          <h2>The Anurag Kashyap Elevator Moment</h2>
          <p>
            During the conversation, Chandan shared a touching memory from his early days of struggling through auditions in Mumbai. Leaving a production office after a gruelling audition, he suddenly spotted Anurag Kashyap waiting for the elevator. At the time, Roy was too overwhelmed and timid to approach him directly.
          </p>
          <p>
            “He waved his hand. I also said ‘hi’ to him from a distance. I still remember that till today,” Chandan smiled. Years later, life came full circle as the very same indie cinema icon is now backing and presenting his headline film.
          </p>

          <h2>Aakhri Ride: Quick Facts Table</h2>
          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.05)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Detail</th>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Information</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Lead Actor</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Chandan Roy (as Aman Yadav)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Supporting Cast</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Aamir Dalvi (<em>Kennedy</em>), Faisal Malik (<em>Panchayat</em>), Dheer Hira</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Directors</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Vijesh Rajan &amp; Yashoda Parthasarthy (Directorial Debut)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Presented By</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Anurag Kashyap &amp; Vasan Bala</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Producers</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Ranjan Singh, Vishesh Agrawal, Rajan EPK &amp; Anurag Kashyap</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Production Banners</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Navaras Pictures, Plexus Motion Pictures &amp; Flip Films</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Release Date &amp; Platform</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>31 October 2026 on Oh Short Flips (YouTube)</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Runtime</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Approximately 23 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Festival Journey and Critical Reception</h2>
          <p>
            Prior to its digital premiere, <em>Aakhri Ride</em> earned international festival acclaim. It was officially selected as a market pick at the prestigious <strong>Clermont-Ferrand Short Film Market</strong> in France, and was later screened to packed audiences at Montreal’s renowned <strong>Fantasia International Film Festival</strong>.
          </p>
          <p>
            Critical reception in India has recognized the distinct tonal ambition. <em>Outlook</em> awarded the film a 2 out of 5 rating while singling out Chandan Roy’s earnest, emotionally anchored lead performance as the film’s standout triumph. Meanwhile, <em>ETV Bharat</em> lauded the film for transcending superficial jump-scares to deliver psychological depth and societal insight.
          </p>

          <h2>Where to Watch Aakhri Ride</h2>
          <p>
            Audiences can stream the full 23-minute short film <strong>Aakhri Ride</strong> for free on YouTube via the official <strong>Oh Short Flips</strong> channel.
          </p>
          <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)", marginTop: "16px" }}>
            <em>Source: Hindustan Times interview with Chandan Roy, November 3, 2026.</em>
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for exclusive actor interviews, streaming premieres, and breaking Bollywood scoops.
          </p>

          {/* Tags List */}
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
              "ChandanRoy",
              "AakhriRide",
              "Panchayat",
              "AnuragKashyap",
              "VasanBala",
              "FaisalMalik",
              "AamirDalvi",
              "ShortFilm",
              "BollywoodInterview",
              "OhShortFlips",
              "BiharToMumbai",
              "BuzzOriginals",
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
              title="Chandan Roy on Aakhri Ride: Nine Years in Mumbai"
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
              Homepage Hero →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
