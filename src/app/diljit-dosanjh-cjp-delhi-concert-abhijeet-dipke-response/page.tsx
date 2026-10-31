import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Diljit Dosanjh Hits Back at CJP at Delhi Concert",
  description:
    "Diljit Dosanjh told critics “don’t teach Punjabis how to fight” at his Delhi concert. Abhijeet Dipke replied with a heartfelt Instagram letter. Here’s the full story.",
  keywords: [
    "Diljit Dosanjh CJP",
    "Abhijeet Dipke",
    "Diljit Dosanjh Delhi concert",
    "Punjabian nu na sikhaao",
    "CJP",
    "Diljit Dosanjh",
    "Cockroach Janta Party",
    "Diljit Dosanjh concert controversy",
    "JLN Stadium Delhi concert",
    "Entertainment News",
    "Breaking News",
  ],
  openGraph: {
    title: "Diljit Dosanjh Hits Back at CJP at Delhi Concert",
    description:
      "Diljit Dosanjh told critics “don’t teach Punjabis how to fight” at his Delhi concert. Abhijeet Dipke replied with a heartfelt Instagram letter. Here’s the full story.",
    url: "https://www.buzzoriginals.com/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response.jpg",
        width: 1024,
        height: 614,
        alt: "Diljit Dosanjh Hits Back at CJP at Delhi Concert, Abhijeet Dipke Replies With Mitti Pao",
      },
    ],
    type: "article",
    publishedTime: "2026-10-31T16:50:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diljit Dosanjh Hits Back at CJP at Delhi Concert",
    description:
      "Diljit Dosanjh told critics “don’t teach Punjabis how to fight” at his Delhi concert. Abhijeet Dipke replied with a heartfelt Instagram letter. Here’s the full story.",
    images: ["/images/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response.jpg"],
  },
  alternates: {
    canonical: "/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response",
  },
};

export default function DiljitDosanjhCjpConcertPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response";
  const pageTitle =
    "Diljit Dosanjh Hits Back at CJP at Delhi Concert";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline:
      "Diljit Dosanjh Takes a Dig at CJP at Delhi Concert, Abhijeet Dipke Replies With “Mitti Pao”",
    image: [
      "https://www.buzzoriginals.com/images/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response.jpg",
    ],
    datePublished: "2026-10-31T16:50:00+05:30",
    dateModified: "2026-10-31T16:50:00+05:30",
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
      "Diljit Dosanjh told critics “don’t teach Punjabis how to fight” at his Delhi concert. Abhijeet Dipke replied with a heartfelt Instagram letter. Here’s the full story.",
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
        name: "News",
        item: "https://www.buzzoriginals.com/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Diljit Dosanjh CJP Row",
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
      <Header activeNav="News" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/news">NEWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>DILJIT DOSANJH CJP DELHI CONCERT</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">⚡ Concert Row</span>
            <span className="badge lime">Diljit Dosanjh</span>
            <span className="badge">Delhi Concert</span>
          </div>

          <h1 className="article-title">
            Diljit Dosanjh Takes a Dig at CJP at Delhi Concert, Abhijeet Dipke Replies With “Mitti Pao”
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
              <span>THE NEWS DESK</span>
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
            src="/images/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response.jpg"
            alt="Diljit Dosanjh Hits Back at CJP at Delhi Concert, Abhijeet Dipke Replies With Mitti Pao"
            width={1024}
            height={614}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Diljit Dosanjh addresses past criticism on stage at JLN Stadium in Delhi, while CJP founder Abhijeet Dipke extends an open olive branch asking to let the row go. (Photo: Instagram / @diljitdosanjh / @abhijeet_dipke)
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Diljit Dosanjh’s</strong> Delhi concert was not only about music. On Friday, October 30, the singer-actor also spoke about a row that has been going on for months. <strong>Abhijeet Dipke</strong>, the founder of the <strong>Cockroach Janta Party (CJP)</strong>, replied soon after. His reply was calm and friendly.
          </p>

          <h2>What Diljit Said on Stage</h2>
          <p>
            Diljit performed at Jawaharlal Nehru Stadium in Delhi. Without naming anyone, he spoke about the criticism he got after saying <em>“I am an artist”</em> earlier this year. Some reports say about 70,000 people were in the crowd.
          </p>
          <p>
            According to Devdiscourse, he said: <em>“I love all of you because I am an artist, bro. I am being quiet, so let me stay quiet. I support all of you. Punjabian nu na sikhaao ladaayia kida ladnaa. But don’t teach Punjabis how to fight.”</em>
          </p>
          <p>
            He also said his earlier silence did not mean he lacked courage. He said Punjabis are always ready to stand up for a cause.
          </p>
          <p>
            Outlook India reports that the show ended with laser displays reading <em>“Main Hoon Punjab”</em> and <em>“I’m an artist.”</em>
          </p>

          <div className="article-quote-box">
            <p style={{ margin: 0, fontSize: "15px" }}>
              <strong>Also Read:</strong>{" "}
              <Link
                href="/sara-ali-khan-fatwa-kedarnath-temple-visit"
                style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
              >
                Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit: What You Need to Know →
              </Link>
            </p>
          </div>

          <h2>How the Row Started</h2>
          <p>
            This goes back to the CJP protests at Jantar Mantar in Delhi:
          </p>
          <ul>
            <li>
              <strong>The Instagram Live:</strong> Diljit was asked about the protests during an Instagram Live. He said, <em>“Bro, keep me away from protests and such things. I am an artist. I am not a politician.”</em>
            </li>
            <li>
              <strong>The Reaction:</strong> Many fans were disappointed. Diljit often speaks on Punjab-related issues, so people expected him to say more.
            </li>
            <li>
              <strong>The Satluj Jibes:</strong> Siasat and IANS report that some people also mocked his film <em>Satluj</em> during the protests. Diljit’s concert reply was linked to this.
            </li>
            <li>
              <strong>The Shift:</strong> After the “Sansad Chalo” march on July 20, Diljit supported the students. He condemned the violence at Jantar Mantar and said he would probably be called “anti-national” again.
            </li>
          </ul>

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

          <h2>Abhijeet Dipke’s Reply</h2>
          <p>
            Dipke was at the concert too. Later he wrote an open letter on Instagram. In it he said he still admires Diljit and asked him to let the matter go, <em>“Mitti pao, chhota bhai samajh ke.”</em>
          </p>
          <p>
            He wrote that he was a little hurt by Diljit’s comment in June, because he has always seen Diljit as someone who speaks up for a cause. He added that he still listens to Diljit’s music. He also said he attended Diljit’s concert in Chicago in May, before returning to India.
          </p>
          <p>
            His message ended with this line: <em>“But one disagreement or misunderstanding doesn’t change the respect and admiration I have for you.”</em>
          </p>

          <h2>Why This Is Trending</h2>
          <ul>
            <li>
              <strong>Diljit’s Line:</strong> <em>“Punjabian nu na sikhaao ladaayia kida ladnaa”</em> is already being shared widely across social media.
            </li>
            <li>
              <strong>Dipke’s Tone:</strong> He did not fight back. He called Diljit “Paaji” and asked to move on, and many people appreciated the mature gesture.
            </li>
            <li>
              <strong>Two Big Names:</strong> Diljit is one of the most popular Indian artists globally, and CJP became a headline maker during the youth protests.
            </li>
          </ul>

          <h2>What Happens Next</h2>
          <p>
            Neither side has shown signs of a bigger fight. Dipke’s letter suggests he wants peace. Diljit has not replied to the letter yet.
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
              "Diljit Dosanjh",
              "Diljit Dosanjh CJP",
              "Abhijeet Dipke",
              "CJP",
              "Delhi Concert",
              "Cockroach Janta Party",
              "Punjabian Nu Na Sikhaao",
              "Entertainment News",
              "Delhi News",
              "JLN Stadium",
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
              href="/news"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to News Desk
            </Link>
            <Link
              href="/bollywood"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Bollywood Hub →
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
