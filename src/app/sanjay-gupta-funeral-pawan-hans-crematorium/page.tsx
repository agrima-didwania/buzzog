import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Sanjay Gupta Funeral: Last Rites Today, Mumbai",
  description:
    "Kaante director Sanjay Gupta’s last rites will be held today at Pawan Hans Crematorium, Vile Parle. Here is what we know and how Bollywood is reacting.",
  keywords: [
    "Sanjay Gupta funeral",
    "Sanjay Gupta death",
    "Sanjay Gupta last rites",
    "Kaante director dies",
    "Pawan Hans Crematorium",
    "Sanjay Dutt Kaante 2",
    "Ashoke Pandit Sanjay Gupta",
    "Hansal Mehta",
    "Bollywood funeral news",
    "Bollywood news today",
    "In Memoriam",
  ],
  openGraph: {
    title: "Sanjay Gupta Funeral: Last Rites Today, Mumbai",
    description:
      "Kaante director Sanjay Gupta’s last rites will be held today at Pawan Hans Crematorium, Vile Parle. Here is what we know and how Bollywood is reacting.",
    url: "https://www.buzzoriginals.com/sanjay-gupta-funeral-pawan-hans-crematorium",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sanjay-gupta-funeral-pawan-hans-crematorium.jpg",
        width: 1024,
        height: 576,
        alt: "Sanjay Gupta Funeral: Last Rites Today in Mumbai, Bollywood Mourns Kaante Director",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T17:30:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanjay Gupta Funeral: Last Rites Today, Mumbai",
    description:
      "Kaante director Sanjay Gupta’s last rites will be held today at Pawan Hans Crematorium, Vile Parle. Here is what we know and how Bollywood is reacting.",
    images: ["/images/sanjay-gupta-funeral-pawan-hans-crematorium.jpg"],
  },
  alternates: {
    canonical: "/sanjay-gupta-funeral-pawan-hans-crematorium",
  },
};

export default function SanjayGuptaFuneralPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/sanjay-gupta-funeral-pawan-hans-crematorium";
  const pageTitle =
    "Sanjay Gupta Funeral: Last Rites Today, Mumbai";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Sanjay Gupta Funeral: Last Rites Today in Mumbai, Bollywood Mourns Kaante Director",
    image: [
      "https://www.buzzoriginals.com/images/sanjay-gupta-funeral-pawan-hans-crematorium.jpg",
    ],
    datePublished: "2026-10-31T17:30:00+05:30",
    dateModified: "2026-10-31T17:30:00+05:30",
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
      "Kaante director Sanjay Gupta’s last rites will be held today at Pawan Hans Crematorium, Vile Parle. Here is what we know and how Bollywood is reacting.",
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
        name: "Sanjay Gupta Funeral",
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
          <span style={{ color: "var(--lavender)" }}>SANJAY GUPTA FUNERAL</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🕊️ In Memoriam</span>
            <span className="badge lime">Funeral Details</span>
            <span className="badge">Bollywood &amp; News</span>
          </div>

          <h1 className="article-title">
            Sanjay Gupta Funeral: Last Rites Today in Mumbai, Bollywood Mourns Kaante Director
          </h1>

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
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/sanjay-gupta-funeral-pawan-hans-crematorium.jpg"
            alt="Sanjay Gupta Funeral: Last Rites Today, Mumbai"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Filmmaker Sanjay Gupta’s last rites are scheduled today at Pawan Hans Crematorium in Vile Parle, as Bollywood colleagues gather to pay their final respects. (Photo: Buzz Originals Archive)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Bollywood woke up to sad news today. Filmmaker <strong>Sanjay Gupta</strong>, the director behind <em>Kaante</em> and <em>Kaabil</em>, has died after a fall at his home in Mumbai. His last rites will be held today, October 31, at Pawan Hans Crematorium in Vile Parle.
          </p>

          <h2>Sanjay Gupta Funeral Details</h2>
          <ul>
            <li>
              <strong>Date:</strong> Saturday, October 31
            </li>
            <li>
              <strong>Place:</strong> Pawan Hans Crematorium, Vile Parle, Mumbai
            </li>
          </ul>
          <p>
            Producer <strong>Ashoke Pandit</strong> shared the family’s message on Instagram. It read: <em>“We regret to inform you of the sad demise of our beloved Sanjay Gupta.”</em> The family also asked people to join them, saying, <em>“We request your presence and prayers as we bid final farewell.”</em>
          </p>
          <p>
            Many film industry members have already reached his home to meet the family. Reports name <strong>Fardeen Khan</strong>, <strong>Rakesh Roshan</strong> and <strong>Ronit Roy</strong> among them. More people from the industry are expected at the crematorium.
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/sanjay-gupta-passes-away-shootout-at-wadala-director"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala →
              </Link>
            </p>
          </div>

          <h2>What Happened to Sanjay Gupta?</h2>
          <p>
            According to reports, Gupta slipped at his home on Friday night. He suffered a serious head injury and did not survive. Ashoke Pandit, a close friend, told Outlook: <em>“I just spoke to his brother-in-law also, so he probably slipped at home and had a fatal head injury. He bled very profusely and expired.”</em> He added, <em>“It was not an age to go.”</em>
          </p>
          <p>
            Mumbai Police said the matter came to light early on Saturday morning. Versova Police have registered an Accidental Death Report and are looking into it. Police have said that no foul play has been found so far.
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

          <h2>Bollywood Pays Tribute</h2>
          <p>
            Tributes have poured in from across the industry.
          </p>
          <p>
            <strong>Sanjay Dutt</strong>, who worked with Gupta for over 30 years, wrote on X: <em>“We have shared so much together, so many memories and so many years of friendship. You have always been family to me, and that will never change.”</em> He also made a promise about the sequel Gupta dreamed of: <em>“I will make Kaante 2 your dream, in memory of you my brother.”</em>
          </p>
          <p>
            <strong>Hansal Mehta</strong> called Gupta <em>“My only boss in the film industry, perhaps. But more than that, a dear friend.”</em> He added: <em>“My first and only Rolex came from him. Today it’s the one memory of him I carry on my wrist, and I don’t think I’ll ever take it off.”</em>
          </p>
          <p>
            <strong>Neil Nitin Mukesh</strong> wrote that Gupta was <em>“a powerhouse filmmaker we all loved and respected. Gone far too soon.”</em>
          </p>
          <p>
            <strong>Tusshar Kapoor</strong> said: <em>“Life is so unpredictable, though this man was a lesson learned in living life to the fullest!”</em>
          </p>
          <p>
            <strong>Kunal Kohli</strong>, <strong>Dia Mirza</strong>, <strong>Madhur Bhandarkar</strong> and lyricist <strong>Manoj Muntashir</strong> also shared emotional posts.
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

          <h2>Sanjay Gupta’s Film Career</h2>
          <p>
            Gupta started his journey as a director with <em>Aatish: Feel the Fire</em> in 1994, with Sanjay Dutt in the lead. He became known for stylish action and crime thrillers with a dark, neo-noir look.
          </p>
          <p>
            His best-known films include:
          </p>
          <ul>
            <li>
              <strong>Kaante (2002)</strong>
            </li>
            <li>
              <strong>Shootout at Wadala (2013)</strong>
            </li>
            <li>
              <strong>Kaabil (2017)</strong>
            </li>
            <li>
              <strong>Jazbaa, Zinda and Mumbai Saga</strong>
            </li>
          </ul>
          <p>
            He also produced <em>Shootout at Lokhandwala</em> (2007), which was directed by Apoorva Lakhia. His work shaped a big part of commercial Hindi cinema over the years.
          </p>
          <p>
            Stay tuned to <strong>Buzz OG</strong> for more updates.
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
              "Sanjay Gupta funeral",
              "Sanjay Gupta death",
              "Sanjay Gupta last rites",
              "Kaante director dies",
              "Pawan Hans Crematorium",
              "Sanjay Dutt Kaante 2",
              "Ashoke Pandit",
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
              href="/reality-shows"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Reality Shows Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
