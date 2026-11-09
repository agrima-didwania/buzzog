import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Farah Khan Reacts to Fake House Fire Videos | Buzz Originals",
  description:
    "Farah Khan has reacted to viral videos that claimed her Mumbai home caught fire. She says the building in the video is under construction. Here is the full story.",
  keywords: [
    "Farah Khan fire video",
    "Farah Khan house fire",
    "Farah Khan fake news",
    "Farah Khan Instagram story",
    "Farah Khan clickbait",
    "Farah Khan Mumbai home",
    "Did Farah Khan’s house catch fire",
    "Where does Farah Khan live",
    "Farah Khan fire video fact check",
    "Farah Khan Oberoi Sky Heights",
  ],
  alternates: {
    canonical: "/farah-khan-fake-fire-video-clickbait",
  },
  openGraph: {
    title: "Farah Khan Reacts to Fake House Fire Videos | Buzz Originals",
    description:
      "Farah Khan has reacted to viral videos that claimed her Mumbai home caught fire. She says the building in the video is under construction. Here is the full story.",
    url: "https://www.buzzoriginals.com/farah-khan-fake-fire-video-clickbait",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/farah-khan-fake-fire-video-clickbait.jpg",
        width: 1200,
        height: 675,
        alt: "Farah Khan Reacts to Fake Fire Videos: Clickbait Can’t Be Everything",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farah Khan Reacts to Fake House Fire Videos",
    description:
      "Farah Khan has reacted to viral videos that claimed her Mumbai home caught fire. She says the building in the video is under construction. Here is the full story.",
    images: ["/images/farah-khan-fake-fire-video-clickbait.jpg"],
  },
};

export default function FarahKhanFakeFireVideoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Farah Khan Reacts to Fake House Fire Videos",
    description:
      "Farah Khan has reacted to viral videos that claimed her Mumbai home caught fire. She says the building in the video is under construction. Here is the full story.",
    image: [
      "https://www.buzzoriginals.com/images/farah-khan-fake-fire-video-clickbait.jpg",
    ],
    datePublished: "2026-11-09T17:15:00Z",
    dateModified: "2026-11-09T17:15:00Z",
    author: {
      "@type": "Organization",
      name: "Buzz Originals Entertainment Desk",
      url: "https://www.buzzoriginals.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Buzz Originals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.buzzoriginals.com/farah-khan-fake-fire-video-clickbait",
    },
    keywords: [
      "Farah Khan fire video",
      "Farah Khan house fire",
      "Farah Khan fake news",
      "Farah Khan Instagram story",
      "Farah Khan clickbait",
    ],
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
        name: "Farah Khan Fake Fire Video",
        item: "https://www.buzzoriginals.com/farah-khan-fake-fire-video-clickbait",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeNav="Bollywood" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-mono text-xs text-[var(--mist)] uppercase tracking-wider mb-6"
        >
          <Link href="/" className="hover:text-[var(--lime)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/bollywood" className="hover:text-[var(--lime)] transition-colors">
            Bollywood
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">Farah Khan Fake Fire Video</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Fact Check Alert</span>
          <span className="badge pink">Fake News Debunked</span>
          <span className="badge">Farah Khan</span>
          <span className="badge">Clickbait Row</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Farah Khan Reacts to Fake Fire Videos: “Clickbait Can’t Be Everything”
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-09">November 9, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">FACT CHECK VERIFIED</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/farah-khan-fake-fire-video-clickbait.jpg"
            alt="Farah Khan Reacts to Fake Fire Videos: Clickbait Can’t Be Everything"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Farah Khan called out sensationalist social media pages for falsely claiming her Lokhandwala residence caught fire, clarifying the viral clip depicted an under-construction site. (Photo: Buzz Originals / Instagram)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Farah%20Khan%20Reacts%20to%20Fake%20House%20Fire%20Videos%20-%20https://www.buzzoriginals.com/farah-khan-fake-fire-video-clickbait"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Farah%20Khan%20Reacts%20to%20Fake%20House%20Fire%20Videos&url=https://www.buzzoriginals.com/farah-khan-fake-fire-video-clickbait"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            X Post
          </a>
        </div>

        {/* Key Takeaways Box */}
        <div
          style={{
            background: "rgba(223, 255, 0, 0.04)",
            border: "1px solid rgba(223, 255, 0, 0.25)",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>⚡</span>
            <span>Farah Khan House Fire Fact Check: Fast Breakdown</span>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            <li>
              <strong>Viral Claim Debunked:</strong> Sensational clips circulated across Instagram claiming Farah Khan’s Mumbai home had erupted in flames over Diwali weekend.
            </li>
            <li>
              <strong>Farah’s Fiery Response:</strong> Took directly to her Instagram Stories to lambast irresponsible portals: <em>“Online portals plss BE RESPONSIBLE!! This is an under construction building!! Clickbait can’t be everything!”</em>
            </li>
            <li>
              <strong>What Actually Caught Fire:</strong> According to reports, a minor blaze was limited strictly to scaffolding and green safety netting on a nearby building under active construction.
            </li>
            <li>
              <strong>Safe and Unaffected:</strong> Farah resides safely at Oberoi Sky Heights in Lokhandwala, Mumbai. No structural damage or injuries occurred.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            A dramatic fire video went viral on Diwali weekend with a terrifying claim: choreographer and filmmaker Farah Khan’s Mumbai home was reportedly engulfed in flames. As anxious messages poured in from concerned fans and friends, Farah swiftly cleared the air—and she made no effort to hide her disgust at the clickbait handles that weaponized panic for cheap engagement.
          </p>

          <p>
            Here is the complete, verified breakdown of what actually occurred.
          </p>

          <h2>What Was the Viral Video?</h2>
          <p>
            On Sunday, November 8, alarming video clips began proliferating across social media platforms. The footage showed towering flames and plumes of black smoke rising from an urban high-rise structure, with sensational overlays asserting that the building was Farah Khan’s personal residence.
          </p>

          <p>
            Multiple viral Instagram aggregator pages picked up the footage without verification. One prominent post featured bold text emblazoned across the screen reading: <em>“Farah Khan’s apartment catches fire.”</em> Within minutes, the clip was shared thousands of times, triggering widespread concern regarding the safety of the director and her family.
          </p>

          <h2>What Did Farah Khan Say?</h2>
          <p>
            Rather than remaining silent, Farah took the sensationalism head-on. She shared a screenshot of the misleading video directly onto her official Instagram Story, issuing a stern rebuke to digital publishers who sacrifice basic journalistic ethics for clicks:
          </p>

          <blockquote>
            “Online portals plss BE RESPONSIBLE!! This is an under construction building!! Clickbait can’t be everything!”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Farah Khan on her Instagram Story
            </footer>
          </blockquote>

          <p>
            Farah clarified in plain terms that the structure in the video was an unoccupied construction site, completely separate from her home.
          </p>

          <h2>So, What Really Happened?</h2>
          <p>
            According to an investigative report by <em>India Today</em>, the incident was a relatively minor, localized blaze. The fire ignited only along the external scaffolding and safety netting of an under-construction project before being brought under control by local authorities.
          </p>

          <p>
            Farah Khan resides at <strong>Oberoi Sky Heights</strong> in Lokhandwala, Andheri West—a prestigious residential tower that was entirely untouched by the incident. Official municipal and fire department reports confirmed that no damage was sustained by any residential apartments, and zero injuries were recorded.
          </p>

          <h2>Why This Matters: The Threat of Festival Clickbait</h2>
          <p>
            The incident underscores an escalating epidemic of misinformation across social media, particularly during major festive periods like Diwali when audiences are primed for breaking news. One inflammatory thumbnail or inaccurate caption can amass hundreds of thousands of impressions before a correction can catch up.
          </p>

          <p>
            Farah’s public calling out of these portals serves as an essential reminder for digital creators: alarming headlines don&apos;t just fetch views—they cause acute emotional distress to family members, friends, and fans. Fact-checking must take precedence over sensational algorithms.
          </p>

          <h2>Farah Khan’s Next Directorial Feature</h2>
          <p>
            Beyond combating social media hoaxes, Farah has been actively advancing her cinema slate. She recently revealed that she has finalized the screenplay for her next big-screen directorial feature.
          </p>

          <p>
            Farah plans to commence production in December 2026, aiming to reunite once again with longtime collaborator and close friend <strong>Shah Rukh Khan</strong>. She stated she is more than willing to align her filming schedule with his availability:
          </p>

          <div
            style={{
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              padding: "20px",
              margin: "24px 0",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "12px",
                color: "var(--lime)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              Farah Khan &amp; Shah Rukh Khan Box Office Trilogy
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "14px",
              }}
            >
              <li>✦ <strong>Main Hoon Na (2004):</strong> Blockbuster directorial debut celebrating 22 years of cult pop status.</li>
              <li>✦ <strong>Om Shanti Om (2007):</strong> Historic worldwide smash that introduced Deepika Padukone to Indian cinema.</li>
              <li>✦ <strong>Happy New Year (2014):</strong> Multi-starrer heist comedy that smashed day-one Indian box office records.</li>
            </ul>
          </div>

          <h2>Buzz Originals Verdict</h2>
          <p>
            The fire was genuine, but its connection to Farah Khan’s residence was 100% fabricated. What began as a minor construction mishap was opportunistically warped into a celebrity disaster narrative. Farah’s rapid, public debunking is a necessary reality check for sensationalist pages that treat celebrity safety as disposable clickbait fodder.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for verified scoops, factual entertainment journalism, and zero-clickbait Bollywood coverage.
          </p>

          {/* Related Articles Box */}
          <div
            style={{
              marginTop: "40px",
              padding: "24px",
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "14px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "12px",
                color: "var(--lime)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "14px",
                fontWeight: "bold",
              }}
            >
              Related Bollywood &amp; Fact Check Coverage
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "15px",
              }}
            >
              <li>
                <Link
                  href="/farah-khan-bollywood-insecure-youtube-channel-dilip"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Farah Khan Says Bollywood Makes People Insecure, Reveals Why She Started Her YouTube Channel
                </Link>
              </li>
              <li>
                <Link
                  href="/ranbir-kapoor-directorial-debut-last-decade-as-actor"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away and What He Meant by “Last Decade as an Actor”
                </Link>
              </li>
              <li>
                <Link
                  href="/tusshar-kapoor-extortion-call-bishnoi-gang-fake"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Tusshar Kapoor Gets Rs 5 Crore Extortion Call in Bishnoi Gang’s Name: Police Suspect Hoax
                </Link>
              </li>
              <li>
                <Link
                  href="/dia-mirza-diwali-video-bmc-bombay-high-court"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Dia Mirza Diwali Video Row: Court Says Put It Back, BMC Still Hasn’t
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Farah Khan",
            "Farah Khan Fire Video",
            "Fact Check",
            "Fake News",
            "Clickbait",
            "Oberoi Sky Heights",
            "Bollywood News",
            "Shah Rukh Khan",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[var(--paper)] border border-white/[0.08]"
            >
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
