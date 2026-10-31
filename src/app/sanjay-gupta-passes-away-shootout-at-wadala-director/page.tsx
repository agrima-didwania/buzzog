import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Sanjay Gupta Passes Away",
  description:
    "Filmmaker Sanjay Gupta, director of Kaante, Shootout at Wadala and Kaabil, has passed away. Read the latest updates on his funeral at Pawan Hans Crematorium, police report, and tributes from Sanjay Dutt and Hansal Mehta.",
  keywords: [
    "Sanjay Gupta death",
    "Sanjay Gupta passes away",
    "Shootout at Wadala director",
    "Kaante director dies",
    "Sanjay Gupta",
    "Sanjay Gupta funeral",
    "Pawan Hans Crematorium",
    "Ashoke Pandit Sanjay Gupta",
    "Sanjay Dutt Kaante 2",
    "Hansal Mehta Sanjay Gupta",
    "Bollywood news today",
    "In Memoriam",
  ],
  openGraph: {
    title: "Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala",
    description:
      "Filmmaker Sanjay Gupta has passed away. Read latest funeral details at Pawan Hans Crematorium, Mumbai Police ADR report, and tributes from Sanjay Dutt, Hansal Mehta and Bollywood.",
    url: "https://www.buzzoriginals.com/sanjay-gupta-passes-away-shootout-at-wadala-director",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg",
        width: 1024,
        height: 576,
        alt: "Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T11:50:00.000Z",
    modifiedTime: "2026-10-31T17:25:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Gupta Passes Away",
    description:
      "Filmmaker Sanjay Gupta has passed away. Read latest funeral details, Mumbai Police report, and industry tributes.",
    images: ["/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg"],
  },
  alternates: {
    canonical: "/sanjay-gupta-passes-away-shootout-at-wadala-director",
  },
};

export default function SanjayGuptaPassesAwayPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/sanjay-gupta-passes-away-shootout-at-wadala-director";
  const pageTitle =
    "Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg",
    ],
    datePublished: "2026-10-31T11:50:00+05:30",
    dateModified: "2026-10-31T17:25:00+05:30",
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
      "Filmmaker Sanjay Gupta, director of Kaante, Shootout at Wadala and Kaabil, has passed away. Latest updates on his funeral at Pawan Hans Crematorium, Mumbai Police ADR, and Bollywood tributes.",
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
        name: "News",
        item: "https://www.buzzoriginals.com/news",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Sanjay Gupta Passes Away",
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
          <Link href="/news">NEWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>SANJAY GUPTA PASSES AWAY</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🕊️ In Memoriam</span>
            <span className="badge">Bollywood &amp; News</span>
            <span className="badge lime">Latest Update</span>
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
              <span>BOLLYWOOD &amp; NEWS BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 31, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>UPDATED</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg"
            alt="Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Filmmaker Sanjay Gupta, known for stylish blockbusters like Kaante, Shootout at Wadala and Kaabil, has passed away. (Photo: Buzz Originals Archive)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Bollywood woke up to sad news on Saturday, 31 October 2026. Filmmaker <strong>Sanjay Gupta</strong>, known for stylish action and crime films, has died. His last rites will be held today at Pawan Hans Crematorium in Vile Parle, Mumbai.
          </p>

          <h2>What Happened to Sanjay Gupta?</h2>
          <p>
            Reports say Gupta slipped and fell at his Mumbai home on the night of 30 October and suffered a serious head injury. The news came out early on Saturday morning.
          </p>
          <p>
            His close friend, producer <strong>Ashoke Pandit</strong>, told Outlook: <em>“I just spoke to his brother-in-law also, so he probably slipped at home and had a fatal head injury. He bled very profusely and expired.”</em> He added, <em>“It was not an age to go.”</em>
          </p>
          <p>
            Mumbai Police have said that Versova Police registered an Accidental Death Report and are looking into the matter. Police have said that no foul play has been found so far.
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/sanjay-dutt-kaante-2-promise-sanjay-gupta-death"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Sanjay Dutt Promises to Make Kaante 2 in Memory of Sanjay Gupta →
              </Link>
            </p>
          </div>

          <h2>Sanjay Gupta Funeral Details</h2>
          <ul>
            <li>
              <strong>Date:</strong> Saturday, 31 October
            </li>
            <li>
              <strong>Place:</strong> Pawan Hans Crematorium, Vile Parle, Mumbai
            </li>
          </ul>
          <p>
            Ashoke Pandit shared the family’s message on Instagram. It read: <em>“We regret to inform you of the sad demise of our beloved Sanjay Gupta.”</em> The family also requested, <em>“We request your presence and prayers as we bid final farewell.”</em>
          </p>
          <p>
            Several people from the film industry have already reached his home to meet the family, and more are expected at the funeral.
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
              Follow us on Instagram for the latest updates:{" "}
              <a
                href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Buzz Originals
              </a>
            </span>
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "6px 16px", fontSize: "12px", textTransform: "uppercase" }}
            >
              Follow @buzzoriginals
            </a>
          </div>

          <h2>Who Was Sanjay Gupta?</h2>
          <p>
            Sanjay Gupta was a director, producer and writer in Hindi cinema. He started his directing career with <em>Aatish: Feel the Fire</em> in 1994, starring Sanjay Dutt. After films like <em>Khauff</em> and <em>Jung</em>, he made <strong>Kaante</strong> in 2002, which became one of his best-known films.
          </p>
          <p>
            He was known for dark lighting, sharp dialogues, big action scenes and a stylish, neo-noir look. He worked with Sanjay Dutt many times, and also with John Abraham on films like <em>Shootout at Wadala</em> and <em>Mumbai Saga</em>.
          </p>

          <h2>Sanjay Gupta’s Best-Known Films</h2>
          <ul>
            <li>
              <strong>Kaante (2002)</strong>
            </li>
            <li>
              <strong>Zinda (2006)</strong>
            </li>
            <li>
              <strong>Shootout at Lokhandwala (2007)</strong>, which he produced and Apoorva Lakhia directed
            </li>
            <li>
              <strong>Shootout at Wadala (2013)</strong>
            </li>
            <li>
              <strong>Jazbaa (2015)</strong>
            </li>
            <li>
              <strong>Kaabil (2017)</strong>
            </li>
            <li>
              <strong>Mumbai Saga (2021)</strong>
            </li>
          </ul>

          <h2>Bollywood Reacts</h2>
          <p>
            The film industry is in shock, and tributes are pouring in on social media.
          </p>
          <p>
            <strong>Sanjay Dutt</strong> wrote on X: <em>“We have shared so much together, so many memories and so many years of friendship. You have always been family to me, and that will never change.”</em> He also made a promise: <em>“I will make Kaante 2 your dream, in memory of you my brother.”</em>
          </p>
          <p>
            <strong>Hansal Mehta</strong> called him <em>“My only boss in the film industry, perhaps. But more than that, a dear friend.”</em> He added: <em>“My first and only Rolex came from him. Today it’s the one memory of him I carry on my wrist, and I don’t think I’ll ever take it off.”</em>
          </p>
          <p>
            <strong>Neil Nitin Mukesh</strong> wrote that Gupta was <em>“a powerhouse filmmaker we all loved and respected. Gone far too soon.”</em>
          </p>
          <p>
            <strong>Tusshar Kapoor</strong> said: <em>“Life is so unpredictable, though this man was a lesson learned in living life to the fullest!”</em>
          </p>
          <p>
            <strong>Kunal Kohli</strong>, <strong>Dia Mirza</strong>, <strong>Madhur Bhandarkar</strong> and lyricist <strong>Manoj Muntashir</strong> also paid tribute. Many people are remembering him as a passionate filmmaker with a big heart.
          </p>
          <p>
            Follow <strong>Buzz OG</strong> for more updates.
          </p>

          {/* Tags & Keywords */}
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
              "Sanjay Gupta death",
              "Sanjay Gupta passes away",
              "Shootout at Wadala director",
              "Kaante director dies",
              "Sanjay Gupta",
              "Sanjay Gupta funeral",
              "Pawan Hans Crematorium",
              "Sanjay Dutt Kaante 2",
              "Hansal Mehta",
              "Bollywood News",
              "In Memoriam",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "6px 14px",
                  borderRadius: "20px",
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
              href="/news"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              The News Desk →
            </Link>
            <Link
              href="/movies"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Movies Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
