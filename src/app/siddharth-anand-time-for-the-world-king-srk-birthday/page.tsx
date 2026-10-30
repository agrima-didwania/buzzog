import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "SRK’s King Update? Siddharth Anand’s Cryptic Post Explained | Buzz Originals",
  description:
    "Siddharth Anand posted “It’s” and then “Time For The World” about King. Is a surprise coming on Shah Rukh Khan’s 61st birthday? Here’s what we know.",
  keywords: [
    "King Shah Rukh Khan",
    "Siddharth Anand cryptic post",
    "SRK birthday surprise",
    "King release date",
    "Shah Rukh Khan King",
    "Siddharth Anand King",
    "SRK 61st birthday",
    "King movie teaser",
    "Suhana Khan King",
    "Abhishek Bachchan King",
    "Pathaan Siddharth Anand SRK",
    "Bollywood movies 2026",
    "Red Chillies Entertainment",
  ],
  openGraph: {
    title: "SRK’s King Update? Siddharth Anand’s Cryptic Post Explained",
    description:
      "Siddharth Anand posted “It’s” and then “Time For The World” about King. Is a surprise coming on Shah Rukh Khan’s 61st birthday? Here’s what we know.",
    url: "https://www.buzzoriginals.com/siddharth-anand-time-for-the-world-king-srk-birthday",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg",
        width: 1024,
        height: 682,
        alt: "SRK’s King Update? Siddharth Anand’s Cryptic Post Explained",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T12:00:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRK’s King Update? Siddharth Anand’s Cryptic Post Explained",
    description:
      "Siddharth Anand posted “It’s” and then “Time For The World” about King. Is a surprise coming on Shah Rukh Khan’s 61st birthday? Here’s what we know.",
    images: ["/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg"],
  },
  alternates: {
    canonical: "/siddharth-anand-time-for-the-world-king-srk-birthday",
  },
};

export default function KingArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/siddharth-anand-time-for-the-world-king-srk-birthday";
  const pageTitle =
    "Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg",
    ],
    datePublished: "2026-10-30T12:05:00+05:30",
    dateModified: "2026-10-30T12:05:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Desk",
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
      "Siddharth Anand posted “It’s” and then “Time For The World” about King. Is a surprise coming on Shah Rukh Khan’s 61st birthday? Here’s what we know.",
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
        name: "King SRK Birthday Update",
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
          <span style={{ color: "var(--lavender)" }}>KING SRK UPDATE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Cover Story</span>
            <span className="badge">SRK Birthday Scoop</span>
            <span className="badge lime">King</span>
          </div>

          <h1 className="article-title">{pageTitle}</h1>

          <div className="article-meta-bar">
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>
                BY{" "}
                <Link href="/about" style={{ textDecoration: "underline", color: "inherit" }}>
                  BUZZ ORIGINALS DESK
                </Link>
              </span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span>CINEMA BUREAU</span>
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
            src="/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg"
            alt="Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?"
            width={1024}
            height={682}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            👑 Shah Rukh Khan stars in Siddharth Anand&apos;s King — cryptic posts on X ignite speculation ahead of SRK&apos;s 61st birthday.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Shah Rukh Khan fans have a new mystery to solve. Director <strong>Siddharth Anand</strong> has posted two cryptic messages on X, and both seem to point to <strong>King</strong>. With SRK&apos;s birthday just days away, the internet is buzzing.
          </p>

          <div className="article-quote-box">
            <p>
              <strong>Quick Update:</strong> Siddharth Anand posted two cryptic words on X: &ldquo;It’s&rdquo; followed by &ldquo;Time For The World&rdquo;. With Shah Rukh Khan turning 61 on November 2, fans are anticipating a major <em>King</em> announcement or teaser drop.
            </p>
            <span style={{ fontSize: "12px", color: "var(--lavender)", marginTop: "8px", display: "block" }}>
              — Buzz Originals Cinema Desk
            </span>
          </div>

          <h2>What Did Siddharth Anand Post?</h2>
          <p>
            It started on Thursday, October 29, when Siddharth Anand posted just one word: <strong>&ldquo;It’s&rdquo;</strong>
          </p>

          {/* Screenshot 1: "It's" */}
          <div
            style={{
              margin: "24px 0",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "#000",
            }}
          >
            <Image
              src="/images/siddharth-anand-its-tweet.png"
              alt="Siddharth Anand cryptic tweet on X: It's"
              width={1024}
              height={174}
              sizes="(max-width: 768px) 100vw, 840px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <p>
            A few hours later, in the early hours of Friday, he followed it up with: <strong>&ldquo;Time For The World&rdquo;</strong>
          </p>

          {/* Screenshot 2: "Time For The World" */}
          <div
            style={{
              margin: "24px 0",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              background: "#000",
            }}
          >
            <Image
              src="/images/siddharth-anand-time-for-the-world-tweet.png"
              alt="Siddharth Anand second cryptic tweet on X: Time For The World"
              width={1024}
              height={180}
              sizes="(max-width: 768px) 100vw, 840px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <p>
            Put together, the two posts read like the start of a sentence. That is why fans think a big reveal is coming. He did not mention <em>King</em> by name, but fans quickly connected the dots.
          </p>

          <p>
            Follow us on Instagram for the latest updates:{" "}
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Buzz Originals
            </a>
          </p>

          <h2>Why Are Fans Expecting a Surprise?</h2>
          <p>
            The timing is the main reason. Shah Rukh Khan turns 61 on November 2, and fans believe the team may share a <strong>King</strong> update that day.
          </p>
          <p>
            There is also a pattern. On SRK&apos;s 60th birthday last year, the <em>King</em> title reveal video was released. Fans are hoping for another birthday gift this time.
          </p>

          <h2>Has Anything Been Confirmed?</h2>
          <p>
            No, Siddharth Anand has not said what the posts mean, and the makers have not announced anything yet. For now, it is all speculation. It could be a teaser, a first look, a release update, or something else.
          </p>

          <h2>What Is King About?</h2>
          <p>Here is a quick refresher on the film:</p>
          <ul>
            <li>
              <strong>Story:</strong> SRK plays a deadly assassin. His dark underworld life crosses paths with emotional conflicts and a love story.
            </li>
            <li>
              <strong>Tagline:</strong> &ldquo;Qaatil Nahi.. Aashiq Hoon…&rdquo;
            </li>
            <li>
              <strong>Director:</strong> Siddharth Anand
            </li>
            <li>
              <strong>Producers:</strong> Gauri Khan (Red Chillies Entertainment) and Marflix Pictures
            </li>
            <li>
              <strong>Cast:</strong> Shah Rukh Khan, Suhana Khan in a key lead role, and Abhishek Bachchan as the main villain. Deepika Padukone, Rani Mukerji, Jaideep Ahlawat and Raghav Juyal also appear in supporting roles and special appearances.
            </li>
            <li>
              <strong>Scale:</strong> The film has international stunt choreography, and Red Chillies VFX is handling the visual effects.
            </li>
            <li>
              <strong>Release date:</strong> December 24, 2026, in cinemas worldwide during the Christmas holidays. The date was officially announced in January 2026.
            </li>
          </ul>

          <h2>Why This Film Is a Big Deal</h2>
          <p>
            <em>King</em> brings SRK and Siddharth Anand together again after <em>Pathaan</em>, which came out in January 2023. <em>Pathaan</em> earned around Rs 1,050 crore worldwide and is one of the biggest Hindi hits ever. Fans naturally expect another blockbuster from this team.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            We will know soon. If Siddharth Anand is planning a surprise, it will most likely drop around November 2. Stay tuned to Buzz Originals for every <em>King</em> update.
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
              "King Shah Rukh Khan",
              "Siddharth Anand Cryptic Post",
              "SRK Birthday Surprise",
              "King Release Date",
              "Shah Rukh Khan",
              "Siddharth Anand",
              "Pathaan",
              "Bollywood Movies",
              "Suhana Khan",
              "Abhishek Bachchan",
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
          <div style={{ marginTop: "32px", textAlign: "center" }}>
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
              ← Back to All Bollywood Buzz
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
