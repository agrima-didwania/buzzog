import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Junglywood Trailer Out: Shaan R Grover's Bollywood Thriller | Buzz Originals",
  description:
    "The Junglywood trailer is out. See the cast, story, no-VFX claim and what the film says about Bollywood's insider vs outsider debate.",
  keywords: [
    "Junglywood trailer",
    "Junglywood",
    "Shaan R Grover",
    "Chand Mohammad",
    "Junglywood cast",
    "Junglywood release date",
    "Bollywood nepotism film",
    "Saiyaara actor new film",
    "Bollywood movies",
    "Reliance Entertainment",
    "Bollywood thriller trailer",
    "insider vs outsider debate",
  ],
  openGraph: {
    title: "Junglywood Trailer Out: Shaan R Grover's Bollywood Thriller",
    description:
      "The Junglywood trailer is out. See the cast, story, no-VFX claim and what the film says about Bollywood's insider vs outsider debate.",
    url: "https://www.buzzoriginals.com/junglywood-trailer-shaan-r-grover",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/junglywood-trailer-shaan-r-grover.jpg",
        width: 1024,
        height: 576,
        alt: "Junglywood Trailer Out: Shaan R Grover's Bollywood Thriller",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T20:10:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junglywood Trailer Out: Shaan R Grover's Bollywood Thriller",
    description:
      "The Junglywood trailer is out. See the cast, story, no-VFX claim and what the film says about Bollywood's insider vs outsider debate.",
    images: ["/images/junglywood-trailer-shaan-r-grover.jpg"],
  },
  alternates: {
    canonical: "/junglywood-trailer-shaan-r-grover",
  },
};

export default function JunglywoodArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/junglywood-trailer-shaan-r-grover";
  const pageTitle =
    "Junglywood Trailer Out: Shaan R Grover Takes On Bollywood's Insider vs Outsider Debate";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/junglywood-trailer-shaan-r-grover.jpg",
    ],
    datePublished: "2026-10-30T01:40:00+05:30",
    dateModified: "2026-10-30T01:40:00+05:30",
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
      "The Junglywood trailer is out. See the cast, story, no-VFX claim and what the film says about Bollywood's insider vs outsider debate.",
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
        name: "Junglywood Trailer",
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
          <span style={{ color: "var(--lavender)" }}>JUNGLYWOOD TRAILER</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🎬 Trailer Out</span>
            <span className="badge">Bollywood</span>
            <span className="badge lime">Psychological Thriller</span>
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
            src="/images/junglywood-trailer-shaan-r-grover.jpg"
            alt="Junglywood Trailer Out: Shaan R Grover Headlines Bollywood Psychological Thriller"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Shaan R Grover stars in Chand Mohammad’s Junglywood: a raw, zero-VFX dark comedy thriller exploring Bollywood power dynamics.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            The <strong>Junglywood</strong> trailer is finally here, and it takes you straight into a dark party where nothing is what it seems. The film stars <strong>Shaan R Grover</strong>, who many people know from <em>Saiyaara</em>, and it is directed by <strong>Chand Mohammad</strong>. It mixes dark comedy, mystery and thrills, and it asks one big question: what really happens behind Bollywood&apos;s shiny image?
          </p>
          <p>
            Here is everything we know about the film so far.
          </p>

          <h2>What Is Junglywood About?</h2>
          <p>
            <strong>Junglywood</strong> is a fictional story set inside the Hindi film industry. It is a dark comedy and a psychological thriller. The story shows the power games, big dreams and fights for space that happen behind the camera.
          </p>
          <p>
            The makers say the film uses a made-up story to show behind-the-scenes situations of the industry. So this is not a real-life story. It is a fun and edgy take on a topic people talk about all the time.
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

          <h2>What Happens in the Junglywood Trailer?</h2>
          <p>
            The trailer opens at a secret party full of young people. At first it looks like a normal night out. Soon, the mood changes and the party turns dark and dangerous.
          </p>
          <p>
            The fight between industry insiders and outsiders sits at the heart of the story. Different people, with different goals, are in the same room, and tension keeps rising. Expect twists, surprises and a lot of drama.
          </p>

          <h2>Why Is Everyone Talking About Nepotism Here?</h2>
          <p>
            The nepotism debate has been a hot topic in Bollywood for years. People often ask how hard it is for newcomers without film family or contacts to get a chance.
          </p>
          <p>
            According to the makers, many films have shown how this affects outsiders. <strong>Junglywood</strong> wants to show what outsiders can do if they set their mind to it. In simple words, the film is told from the outsider&apos;s side.
          </p>

          <h2>Shaan R Grover Gets His Big Lead Role</h2>
          <p>
            Shaan R Grover became a well-known face after <em>Saiyaara</em>, the Mohit Suri film that came out in 2025. Reports say he does not come from a film background, which makes him a fitting face for a story about outsiders. He was also seen recently in <em>Tum Mere Ho</em>.
          </p>
          <p>
            Talking about Junglywood, Shaan said, <em>&ldquo;Every actor dreams to headline their own film.&rdquo;</em> Now he gets that chance.
          </p>

          <h2>Director Chand Mohammad: No VFX, Only Real Filmmaking</h2>
          <p>
            One of the most interesting facts about the film is that it has no visual effects. Director <strong>Chand Mohammad</strong> wants the film to feel like old-school cinema told in a modern way. He relies on real sets, strong acting and mood instead of computer graphics.
          </p>
          <div className="article-quote-box">
            <p>
              &ldquo;There is no VFX in the film, and that was a conscious creative choice.&rdquo;
            </p>
          </div>
          <p>
            Why did he pick Bollywood as the setting? He feels the stories behind the glamour are as interesting as the films we see on screen, and that people are curious about the industry and the personalities in it. He also calls the film a <em>&ldquo;fun, edgy, and thrilling cinematic experience&rdquo;</em>, full of unexpected turns.
          </p>

          <h2>Junglywood Cast</h2>
          <p>Here are the actors named in the reports:</p>
          <ul>
            <li><strong>Shaan R Grover</strong> in the lead role</li>
            <li><strong>Irina Rudakova</strong> in a key role</li>
            <li><strong>Deepak Kalra</strong> in a key role</li>
            <li><strong>Akash Jagga</strong></li>
            <li><strong>Dia Singh</strong></li>
            <li><strong>Niya Bapalawat</strong></li>
            <li><strong>Anoushka Chauhan</strong> and <strong>Twinkle Arora</strong> among the newcomers</li>
          </ul>
          <p>The film also features several other fresh faces.</p>

          <h2>Who Is Backing the Film?</h2>
          <p>
            <strong>Junglywood</strong> is backed by <strong>Reliance Entertainment</strong> and <strong>Moon Side Films</strong>. Chand Mohammad is the director.
          </p>

          <h2>Junglywood Release Date</h2>
          <p>
            The makers have not announced the release date yet. The trailer came out on October 29, 2026, just before Halloween, as planned. We will update this page as soon as an official date is shared.
          </p>

          <h2>Quick Facts: Junglywood</h2>
          <ul>
            <li><strong>Film:</strong> Junglywood</li>
            <li><strong>Director:</strong> Chand Mohammad</li>
            <li><strong>Lead actor:</strong> Shaan R Grover</li>
            <li><strong>Genre:</strong> Dark comedy and psychological thriller</li>
            <li><strong>Backed by:</strong> Reliance Entertainment and Moon Side Films</li>
            <li><strong>Language:</strong> Hindi</li>
            <li><strong>Trailer out:</strong> October 29, 2026</li>
            <li><strong>Release date:</strong> Not announced yet</li>
          </ul>

          <h2>What Do You Think?</h2>
          <p>
            Will <strong>Junglywood</strong> pull off a fresh take on the nepotism debate, or is it just another film on a familiar topic? Tell us in the comments, and follow <strong>Buzz Originals</strong> for more Bollywood and entertainment updates.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#Junglywood</span>
            <span className="tag-badge">#ShaanRGrover</span>
            <span className="tag-badge">#ChandMohammad</span>
            <span className="tag-badge">#JunglywoodTrailer</span>
            <span className="tag-badge">#BollywoodNepotism</span>
            <span className="tag-badge">#BollywoodMovies</span>
            <span className="tag-badge">#RelianceEntertainment</span>
            <span className="tag-badge">#Saiyaara</span>
          </div>

          {/* Accessible Social Share Component */}
          <SocialShare title={pageTitle} url={pageUrl} />

          {/* Back to Home */}
          <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid var(--line)" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--lime)",
              }}
            >
              ← Back to All Buzz
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
