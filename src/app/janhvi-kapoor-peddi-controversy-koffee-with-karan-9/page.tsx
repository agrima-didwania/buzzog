import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Janhvi Kapoor Breaks Silence on Peddi Controversy | Buzz Originals",
  description:
    "Janhvi Kapoor opens up on the Peddi objectification row on KWK 9. Read what she said, the director’s apology and reactions from Rashmika, Vijay and others.",
  keywords: [
    "Janhvi Kapoor Peddi controversy",
    "Janhvi Kapoor",
    "Ram Charan",
    "Buchi Babu Sana",
    "Karan Johar",
    "Rashmika Mandanna",
    "Vijay Deverakonda",
    "Jaya Bachchan",
    "Kareena Kapoor",
    "Anantha Sriram",
    "Achiyyamma",
    "Peddi",
    "Koffee With Karan 9",
    "Netflix",
    "objectification",
    "violating experience",
    "Peddi director apology",
    "Peddi objectification row",
    "Bollywood news",
  ],
  openGraph: {
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy",
    description:
      "Janhvi Kapoor opens up on the Peddi objectification row on KWK 9. Read what she said, the director’s apology and reactions from Rashmika, Vijay and others.",
    url: "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
        width: 819,
        height: 1024,
        alt: "Janhvi Kapoor Breaks Silence on Peddi Controversy on Koffee With Karan 9",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T01:00:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy",
    description:
      "Janhvi Kapoor opens up on the Peddi objectification row on KWK 9. Read what she said, the director’s apology and reactions from Rashmika, Vijay and others.",
    images: ["/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"],
  },
  alternates: {
    canonical: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
  },
};

export default function JanhviArticlePage() {
  const pageUrl = "https://www.buzzoriginals.com/janhvi-kapoor-peddi-controversy-koffee-with-karan-9";
  const pageTitle = "Janhvi Kapoor Breaks Silence on Peddi Controversy: \u201CA Violating Experience\u201D";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
    ],
    datePublished: "2026-10-29T01:00:00+05:30",
    dateModified: "2026-10-29T01:00:00+05:30",
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
      "Janhvi Kapoor opens up on the Peddi objectification row on KWK 9. Read what she said, the director’s apology and reactions from Rashmika, Vijay and others.",
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
        item: "https://www.buzzoriginals.com/#bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Janhvi Kapoor Peddi Controversy",
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
          <Link href="/#bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>PEDDI CONTROVERSY</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Exclusive Scoop</span>
            <span className="badge">Koffee With Karan 9</span>
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
              <span>BOLLYWOOD BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 29, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>4 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
            alt="Janhvi Kapoor Breaks Silence on Peddi Controversy on Koffee With Karan 9"
            width={819}
            height={1024}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Koffee With Karan 9: Janhvi Kapoor addresses the Peddi objectification row and reflects on agency, family privilege, and setting boundaries on set.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Janhvi Kapoor has ended her silence. In her <em>Koffee With Karan Season 9</em> episode, she spoke openly about the <strong>Peddi controversy</strong> for the first time.
          </p>
          <p>
            She did not hide behind big words. She said how the experience felt, admitted her own mistakes and shared what she has learned from it.
          </p>

          <h2>What Is the Peddi Controversy?</h2>
          <p>
            <em>Peddi</em> is a rural sports action drama starring Ram Charan, with Janhvi Kapoor playing the female lead, Achiyyamma. The film hit screens on June 4, and soon after, audiences and critics criticised how the heroine was shown.
          </p>
          <p>
            Viewers pointed to camera angles that focused on her body. There was also a scene where Ram Charan’s character uses a power cut to kiss her, and many people said it showed no consent. The talk quickly became bigger than one film. People started asking how women are shown in commercial cinema.
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

          <h2>What Did the Peddi Director Say?</h2>
          <p>
            Director Buchi Babu Sana apologised on X on June 6 and said the team would change the disputed portions after reviewing the feedback.
          </p>
          <p>
            In his statement, he said it <em>&ldquo;was never our intention to objectify or disrespect any female character.&rdquo;</em> He also said the team had <em>&ldquo;taken it seriously.&rdquo;</em>
          </p>
          <p>
            Later, he told Indian Express: <em>&ldquo;I had not anticipated that the scenes would be perceived so negatively by audiences.&rdquo;</em>
          </p>

          <h2>What Janhvi Kapoor Said on Koffee With Karan 9</h2>
          <p>
            Karan Johar asked her about the gap between looking sexy and being sexualised. That question got Janhvi talking.
          </p>
          <p>
            She did not play the victim, but she did not soften it either.
          </p>
          <ul>
            <li><strong>She called the whole thing a &ldquo;violating experience.&rdquo;</strong></li>
            <li>
              <strong>She feels guilty about staying quiet:</strong> Janhvi said she wishes she had raised her voice more. She also admitted, <em>&ldquo;that shame I’ll always carry with me.&rdquo;</em>
            </li>
            <li>
              <strong>She blamed herself too, not just others:</strong> Janhvi said her family name gave her a stronger voice than most actors have, and she did not use it enough. She added that she needs to <em>&ldquo;take responsibility of my half of it.&rdquo;</em>
            </li>
            <li>
              <strong>She explained why she waited so long:</strong> She had held back because so many people had put hard work into the film. She felt unsure how to speak without hurting them.
            </li>
            <li>
              <strong>She wants a different future:</strong> Janhvi said she will speak up if she ever faces this again. She also hopes directors will pause before presenting a heroine in this way.
            </li>
          </ul>

          <div
            style={{
              margin: "32px 0",
              padding: "20px 24px",
              background: "rgba(255, 45, 120, 0.08)",
              borderLeft: "4px solid var(--magenta)",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <div style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--magenta)", fontWeight: 700, textTransform: "uppercase", marginBottom: "6px" }}>
              Related Coverage on Buzz Originals
            </div>
            <Link
              href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
              style={{ color: "#fff", textDecoration: "none", fontSize: "16px", fontWeight: 700 }}
              className="hover:text-[var(--lime)] transition-colors"
            >
              Vijay & Rashmika Team Files Cyber Crime Complaint Over KWK 9 Online Trolling →
            </Link>
          </div>

          <h2>Rashmika and Vijay Spoke on It a Week Earlier</h2>
          <p>
            The same topic had already come up in another episode. Rashmika Mandanna and Vijay Deverakonda were on the couch, and Karan Johar brought up what happened to Janhvi.
          </p>
          <p>
            Rashmika said she keeps strict limits on what she wears on screen. She said she is &ldquo;not that kind of person&rdquo; who is comfortable with skin show, and she likes working with directors who respect that. But she agreed that actors often find it hard to say no.
          </p>
          <p>
            Vijay added that such talks are never easy. Both of them felt actors should be able to refuse a scene without being labelled difficult.
          </p>

          <h2>Other Celebs Who Reacted</h2>
          <ul>
            <li>
              <strong>Jaya Bachchan</strong> spoke against objectification of women in films. She said, <em>&ldquo;I had only one unpleasant experience of being objectified by the director.&rdquo;</em>
            </li>
            <li>
              <strong>Kareena Kapoor</strong> reportedly said that stars like Kajol and Sridevi made a big impact in iconic songs without any skin show.
            </li>
            <li>
              <strong>Lyricist Anantha Sriram</strong> said he did not agree with the director’s apology.
            </li>
          </ul>

          <h2>Why This Story Matters</h2>
          <p>
            This is bigger than one film. Janhvi’s interview raises a hard question: can actors, especially women, say no on set without fear of losing work or trust?
          </p>
          <p>
            Her honest words have restarted the debate online. Some fans stand with her, and some feel the blame should rest with the makers. Either way, the talk is not going away soon.
          </p>
          <p>
            <em>Peddi</em> is currently streaming on{" "}
            <a
              href="https://www.netflix.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline" }}
            >
              Netflix
            </a>.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#JanhviKapoor</span>
            <span className="tag-badge">#Peddi</span>
            <span className="tag-badge">#KoffeeWithKaran9</span>
            <span className="tag-badge">#RashmikaMandanna</span>
            <span className="tag-badge">#VijayDeverakonda</span>
            <span className="tag-badge">#BuchiBabuSana</span>
            <span className="tag-badge">#BollywoodNews</span>
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
