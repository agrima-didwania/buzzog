import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Janhvi Kapoor’s Concert Advice for Veer Pahariya | Buzz Originals",
  description:
    "Janhvi Kapoor told Veer Pahariya never to take his date to a concert on Koffee With Karan. Here is why fans are linking it to Tara Sutaria.",
  keywords: [
    "Janhvi Kapoor Veer Pahariya",
    "Janhvi Kapoor Koffee With Karan",
    "Koffee With Karan Season 9",
    "Veer Pahariya Tara Sutaria breakup",
    "Janhvi Kapoor dig at Tara Sutaria",
    "Janhvi Kapoor dating advice",
    "Janhvi Kapoor Varun Dhawan Koffee With Karan",
    "Koffee With Karan rapid fire",
    "Tara Sutaria AP Dhillon concert",
    "AP Dhillon concert controversy",
    "Tara Sutaria Veer Pahariya news",
    "Janhvi Kapoor Shikhar Pahariya marriage",
    "Janhvi Kapoor Peddi controversy",
    "Bollywood gossip today",
    "What did Janhvi Kapoor say about Veer Pahariya?",
    "Why did Janhvi Kapoor say don’t take him to a concert?",
    "Did Tara Sutaria and Veer Pahariya break up?",
    "What happened at AP Dhillon’s concert with Tara Sutaria?",
    "Who was on Koffee With Karan with Janhvi Kapoor?",
    "When did Tara Sutaria and Veer Pahariya start dating?",
  ],
  openGraph: {
    title: "Janhvi Kapoor’s Concert Advice for Veer Pahariya",
    description:
      "Janhvi Kapoor told Veer Pahariya never to take his date to a concert on Koffee With Karan. Here is why fans are linking it to Tara Sutaria.",
    url: "https://www.buzzoriginals.com/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
        width: 1024,
        height: 576,
        alt: "Janhvi Kapoor's Concert Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T16:00:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janhvi Kapoor’s Concert Advice for Veer Pahariya",
    description:
      "Janhvi Kapoor told Veer Pahariya never to take his date to a concert on Koffee With Karan. Here is why fans are linking it to Tara Sutaria.",
    images: [
      "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
    ],
  },
  alternates: {
    canonical: "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
  },
};

export default function JanhviVeerConcertAdviceArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan";
  const pageTitle =
    "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
    ],
    datePublished: "2026-10-29T16:00:00+05:30",
    dateModified: "2026-10-29T16:00:00+05:30",
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
      "Janhvi Kapoor told Veer Pahariya never to take his date to a concert on Koffee With Karan. Here is why fans are linking it to Tara Sutaria.",
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
        name: "Reality Shows",
        item: "https://www.buzzoriginals.com/reality-shows",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Janhvi Kapoor Veer Pahariya Concert Advice",
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
          <Link href="/reality-shows">REALITY SHOWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>KWK 9 SCOOP</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 KWK 9 Viral</span>
            <span className="badge">Bollywood &amp; Reality</span>
            <span className="badge lime">Rapid Fire Scoop</span>
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
              <span>ENTERTAINMENT BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 29, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
            alt="Janhvi Kapoor's Concert Advice for Veer Pahariya on Koffee With Karan Is Going Viral"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Janhvi Kapoor drops witty dating advice for Veer Pahariya on Koffee With Karan Season 9: &ldquo;उसे कभी किसी कॉन्सर्ट में मत ले जाना!&rdquo;
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            <strong>Janhvi Kapoor</strong>&apos;s one-line dating advice for <strong>Veer Pahariya</strong> on <em>Koffee With Karan Season 9</em> has got the internet talking. Many fans feel it is a hint at Veer&apos;s reported breakup with <strong>Tara Sutaria</strong>. But there is a catch. Janhvi did not take Tara&apos;s name, and neither Veer nor Tara has officially confirmed a split. Here is the full story in simple words.
          </p>

          <h2>What Did Janhvi Kapoor Say About Veer Pahariya?</h2>
          <p>
            Janhvi came on the show with <strong>Varun Dhawan</strong>. During the rapid-fire round, host <strong>Karan Johar</strong> asked what dating advice she would give Veer Pahariya. She smiled and answered:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--magenta)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;उसे कभी किसी कॉन्सर्ट में मत ले जाना।&rdquo;
          </blockquote>
          <p>
            That was all. She gave no name and no long explanation. But the short clip spread fast on social media.
          </p>

          <h2>Why Are Fans Linking This to Tara Sutaria?</h2>
          <p>
            The link comes from <strong>AP Dhillon</strong>&apos;s Mumbai concert in December 2025. Tara went on stage with the singer. They shared a hug, and he gave her a peck on the cheek. A video of the moment went viral.
          </p>
          <p>
            Soon after, some clips online made it look like Veer was uncomfortable in the audience. Veer said the clip had been edited in a misleading way. Tara also hit back on Instagram, writing:
          </p>
          <blockquote style={{ borderLeft: "3px solid var(--lime)", paddingLeft: "16px", fontStyle: "italic", margin: "20px 0" }}>
            &ldquo;We won’t be shaken by false narratives, ‘clever editing,’ or expensive PR operations!&rdquo;
          </blockquote>
          <p>
            On 30 December 2025, content creator <strong>Orry</strong> shared a longer video. In it, Veer was clapping and cheering for Tara&apos;s performance. So the story had many sides even back then.
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

          <h2>Did Tara Sutaria and Veer Pahariya Break Up?</h2>
          <p>
            In January 2026, <em>Filmfare</em> reported that the two had parted ways. Other news sites picked up the story.
          </p>
          <p>But here is what is still true today:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px", margin: "16px 0", lineHeight: "1.8" }}>
            <li>Neither Tara nor Veer has made an official statement about a breakup.</li>
            <li>No reason for the split has ever been shared.</li>
            <li>The concert link is a fan theory. It is not a confirmed fact.</li>
          </ul>
          <p>
            So Janhvi&apos;s joke is fun gossip, but it does not prove why the two may have separated.
          </p>

          <h2>Tara Sutaria and Veer Pahariya: Quick Timeline</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px", margin: "16px 0", lineHeight: "1.8" }}>
            <li><strong>Early 2025:</strong> The two reportedly started dating.</li>
            <li><strong>Mid-2025:</strong> Their relationship became public.</li>
            <li><strong>December 2025:</strong> The AP Dhillon concert video goes viral.</li>
            <li><strong>30 December 2025:</strong> Orry shares a longer video from the concert.</li>
            <li><strong>January 2026:</strong> Reports say they have parted ways. No official word from either star.</li>
            <li><strong>October 2026:</strong> Janhvi&apos;s concert advice on Koffee With Karan brings the topic back.</li>
          </ul>
          <p>
            Before Veer, Tara was in a long relationship with actor <strong>Aadar Jain</strong>. She confirmed that breakup in November 2023.
          </p>

          <h2>What Else Did Janhvi Share on the Episode?</h2>
          <p>The rapid-fire joke was not the only talking point. Janhvi also spoke about:</p>
          <ul style={{ listStyleType: "disc", paddingLeft: "24px", margin: "16px 0", lineHeight: "1.8" }}>
            <li><strong>Marriage plans:</strong> She said she does not plan to get married to Shikhar Pahariya in the next two to three years.</li>
            <li><strong>Support after Sridevi&apos;s death:</strong> She remembered how Shikhar took a break from his studies in London and came to Mumbai to stay close to her.</li>
            <li><strong>Her film Peddi:</strong> She admitted she should have raised her objections more strongly during the controversy around the film.</li>
          </ul>
          <p>
            <strong>Check Out:</strong>{" "}
            <Link
              href="/janhvi-kapoor-peddi-controversy-koffee-with-karan-9"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Janhvi Kapoor Breaks Silence on Peddi Controversy
            </Link>
          </p>

          <h2>Final Take</h2>
          <p>
            Janhvi&apos;s one-liner was short, but it was enough to bring the AP Dhillon concert drama back into the spotlight. Until Tara or Veer speak up, it remains just that: a hint that fans are reading their own way.
          </p>
          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood and reality show updates.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#JanhviKapoor</span>
            <span className="tag-badge">#VeerPahariya</span>
            <span className="tag-badge">#TaraSutaria</span>
            <span className="tag-badge">#KoffeeWithKaran</span>
            <span className="tag-badge">#APDhillon</span>
            <span className="tag-badge">#BollywoodNews</span>
            <span className="tag-badge">#KaranJohar</span>
            <span className="tag-badge">#Orry</span>
            <span className="tag-badge">#AadarJain</span>
            <span className="tag-badge">#Sridevi</span>
            <span className="tag-badge">#KhushiKapoor</span>
            <span className="tag-badge">#JioHotstar</span>
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
