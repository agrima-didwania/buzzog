import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Priyanka Chopra Joins Oscar-Qualified Film We Were Here",
  description:
    "Priyanka Chopra Jonas is now an executive producer on “We Were Here,” an Indian short film that has qualified for the Oscars.",
  keywords: [
    "Priyanka Chopra We Were Here",
    "We Were Here short film",
    "Oscar-qualified Indian short film",
    "Pranav Bhasin",
    "Andrew Scott executive producer",
    "Priyanka Chopra executive producer",
    "Oscars 2026",
    "Indian cinema",
    "Palm Springs ShortFest",
    "SXSW Audience Award",
    "The New Yorker short films",
    "Academy Awards consideration",
  ],
  openGraph: {
    title: "Priyanka Chopra Joins Oscar-Qualified Film We Were Here",
    description:
      "Priyanka Chopra Jonas is now an executive producer on “We Were Here,” an Indian short film that has qualified for the Oscars.",
    url: "https://www.buzzoriginals.com/priyanka-chopra-we-were-here-executive-producer",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/priyanka-chopra-we-were-here-executive-producer.jpg",
        width: 1024,
        height: 682,
        alt: "Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T18:15:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Chopra Joins Oscar-Qualified Film We Were Here",
    description:
      "Priyanka Chopra Jonas is now an executive producer on “We Were Here,” an Indian short film that has qualified for the Oscars.",
    images: ["/images/priyanka-chopra-we-were-here-executive-producer.jpg"],
  },
  alternates: {
    canonical: "/priyanka-chopra-we-were-here-executive-producer",
  },
};

export default function PriyankaChopraWeWereHerePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/priyanka-chopra-we-were-here-executive-producer";
  const pageTitle =
    "Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/priyanka-chopra-we-were-here-executive-producer.jpg",
    ],
    datePublished: "2026-10-30T18:15:00+05:30",
    dateModified: "2026-10-30T18:15:00+05:30",
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
      "Priyanka Chopra Jonas is now an executive producer on “We Were Here,” an Indian short film that has qualified for the Oscars.",
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
        name: "Movies",
        item: "https://www.buzzoriginals.com/movies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Priyanka Chopra We Were Here",
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
      <Header activeNav="Movies" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/movies">MOVIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>PRIYANKA CHOPRA</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">🏆 Oscar Qualified</span>
            <span className="badge pink">Cinema Bureau</span>
            <span className="badge">Priyanka Chopra Jonas</span>
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
              <span>FILM &amp; FESTIVALS BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 30, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/priyanka-chopra-we-were-here-executive-producer.jpg"
            alt="Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Global star Priyanka Chopra Jonas joins Pranav Bhasin&apos;s Oscar-qualified mockumentary &apos;We Were Here&apos; alongside Andrew Scott as executive producer. (Photo: SPLF Media / Buzz Originals)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Priyanka Chopra Jonas</strong> has joined the Indian short film <strong>&ldquo;We Were Here&rdquo;</strong> as an executive producer. The Oscar-qualified film has already played at over 80 festivals and won more than 20 awards worldwide.
          </p>

          <p>
            Directed by <strong>Pranav Bhasin</strong>, it is a sharp comedy about three retired uncles who protest against machines by pretending to be household appliances. Renowned actor <strong>Andrew Scott</strong> and playwright <strong>V</strong> are also on board as executive producers. Here is everything you need to know about the story, the awards and where to watch it.
          </p>

          <h2>We Were Here Short Film: Story and Plot</h2>
          <p>
            It&apos;s a comedy made in the mockumentary style. The story follows three retired men in a small Indian town. They are convinced that machines are taking over human jobs, so they stage a quirky protest by pretending to be household appliances. Things take an unexpected turn when one of their children joins an artificial intelligence company.
          </p>
          <p>
            The film is written and directed by Pranav Bhasin. It takes an entertaining look at how people feel about rapidly advancing technology, jobs, and the genuine fear of being left behind in modern society.
          </p>

          <h2>Why Priyanka Chopra Joined as Executive Producer</h2>
          <div className="article-quote-box">
            <p>
              &ldquo;A refreshing, witty take on a subject that feels very timely.&rdquo;
            </p>
            <span style={{ fontSize: "12px", color: "var(--lavender)", marginTop: "8px", display: "block" }}>
              — Priyanka Chopra Jonas on backing &lsquo;We Were Here&rsquo;
            </span>
          </div>

          <p>
            Priyanka shared that she wanted to help the team&apos;s original vision receive the widespread international attention it deserves as it heads into awards season.
          </p>
          <p>
            Director Pranav Bhasin revealed that the film began as <em>&ldquo;a small, silly idea about three uncles trying to stop the spread of AI.&rdquo;</em> He added that adopting the mockumentary format helped him keep the narrative intimate, relatable, and deeply rooted in real people and everyday spaces.
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

          <h2>Who Else Is Backing the Film?</h2>
          <p>
            Priyanka is not the only high-profile name in the corner of this indie gem. Emmy-nominated actor <strong>Andrew Scott</strong> and Tony Award-winning playwright and activist <strong>V</strong> (formerly Eve Ensler) are also executive producers on the project.
          </p>
          <p>
            The film is produced by Yash Gonsai, Dheer Momaya and Dar Gai, and presented by SPLF Media alongside Aarti Lohia.
          </p>

          <h2>We Were Here Awards: Oscar Qualification and Festival Wins</h2>
          <p>
            &ldquo;We Were Here&rdquo; has enjoyed an extraordinarily decorated run across the global circuit:
          </p>
          <ul>
            <li>
              <strong>80+ Festivals &amp; 20+ Awards:</strong> Screened internationally to widespread acclaim and festival praise.
            </li>
            <li>
              <strong>SXSW Film Festival:</strong> Won the prestigious Audience Award for Best Narrative Short and the Redbreast Unhidden Award.
            </li>
            <li>
              <strong>Palm Springs International ShortFest:</strong> Clinched Best Live-Action Short Film Under 15 Minutes and Best Comedy Short, officially making the film eligible for Academy Award consideration.
            </li>
            <li>
              <strong>Clermont-Ferrand International Short Film Festival:</strong> Won the Canal+ Prize following its world premiere.
            </li>
          </ul>

          <h2>Where to Watch We Were Here</h2>
          <p>
            <strong>The New Yorker</strong> has acquired the film and plans to premiere it on its official YouTube channels. While the exact streaming release date has not been officially locked yet, viewers can watch out for the upcoming drop on the magazine’s digital platforms.
          </p>

          <h2>Priyanka’s Journey as a Producer</h2>
          <p>
            This is far from Priyanka’s first foray into the Academy Awards conversation. She previously served as an executive producer on the Oscar-nominated documentary <em>&ldquo;To Kill a Tiger&rdquo;</em> and starred in and executive-produced Netflix’s Oscar-nominated feature <em>&ldquo;The White Tiger.&rdquo;</em> In January 2025, she also came aboard the Oscar-shortlisted short film <em>&ldquo;Anuja.&rdquo;</em>
          </p>

          <h2>Final Word</h2>
          <p>
            With Priyanka Chopra Jonas, Andrew Scott, and V lending their substantial creative weight, &ldquo;We Were Here&rdquo; enters the awards corridor with formidable momentum. A hilarious, heart-warming mockumentary about three uncles pretending to be appliances might just be India’s most delightful and unexpected Academy Award contender this year.
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more cinema scoops and awards season updates.
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
              "Priyanka Chopra",
              "We Were Here",
              "Oscar Qualified",
              "Pranav Bhasin",
              "Andrew Scott",
              "Short Film",
              "Academy Awards",
              "Mockumentary",
              "The New Yorker",
              "Movies",
              "News",
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

          {/* Back to All Buzz Navigation */}
          <div style={{ marginTop: "32px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/movies"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to All Movies
            </Link>
            <Link
              href="/"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Browse Home News →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
