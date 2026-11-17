import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Raghu Ram Returns to Roadies Rebirth After 12 Years | Buzz Originals",
  description:
    "Raghu Ram is back on Roadies after 12 years. Read his “be careful what you wish for” message, the OGs vs NewGs teams and what to expect.",
  keywords: [
    "Raghu Ram Roadies return",
    "Raghu Ram Roadies",
    "Raghu Ram returns to Roadies",
    "Roadies Rebirth",
    "Roadies Rebirth Raghu Ram",
    "Roadies season 21",
    "Roadies Rebirth gang leaders",
    "Roadies OGs vs NewGs",
    "Rannvijay Singha Roadies",
    "Raghu Ram comeback",
    "MTV Roadies 2026",
    "Nikhil Chinappa",
    "Neha Dhupia",
    "Prince Narula",
    "Abhishek Malhan",
    "Bani J",
    "Baseer Ali",
    "Reality TV News",
  ],
  alternates: {
    canonical: "/raghu-ram-returns-roadies-rebirth-12-years",
  },
  openGraph: {
    title: "Raghu Ram Returns to Roadies Rebirth After 12 Years | Buzz Originals",
    description:
      "Raghu Ram is back on Roadies after 12 years. Read his “be careful what you wish for” message, the OGs vs NewGs teams and what to expect.",
    url: "https://www.buzzoriginals.com/raghu-ram-returns-roadies-rebirth-12-years",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/raghu-ram-returns-roadies-rebirth-12-years.jpg",
        width: 1200,
        height: 675,
        alt: "Raghu Ram Returns to Roadies Rebirth After 12 Years",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghu Ram Returns to Roadies Rebirth After 12 Years",
    description:
      "Raghu Ram is back on Roadies after 12 years. Read his “be careful what you wish for” message, the OGs vs NewGs teams and what to expect.",
    images: ["/images/raghu-ram-returns-roadies-rebirth-12-years.jpg"],
  },
};

export default function RaghuRamRoadiesReturnPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Raghu Ram Returns to Roadies After 12 Years With a Warning: “Be Careful What You Wish For”",
    description:
      "Raghu Ram is back on Roadies after 12 years. Read his “be careful what you wish for” message, the OGs vs NewGs teams and what to expect.",
    image: [
      "https://www.buzzoriginals.com/images/raghu-ram-returns-roadies-rebirth-12-years.jpg",
    ],
    datePublished: "2026-11-17T06:30:00Z",
    dateModified: "2026-11-17T06:30:00Z",
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
      "@id": "https://www.buzzoriginals.com/raghu-ram-returns-roadies-rebirth-12-years",
    },
    keywords: [
      "Raghu Ram Roadies return",
      "Roadies Rebirth",
      "Raghu Ram comeback",
      "Rannvijay Singha Roadies",
      "Roadies season 21",
      "Reality TV News",
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
        name: "Reality Shows",
        item: "https://www.buzzoriginals.com/reality-shows",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Raghu Ram Roadies Return",
        item: "https://www.buzzoriginals.com/raghu-ram-returns-roadies-rebirth-12-years",
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

      <Header activeNav="Reality Shows" />

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
          <Link href="/reality-shows" className="hover:text-[var(--lime)] transition-colors">
            Reality Shows
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">Raghu Ram Roadies Return</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ ROADIES EXCLUSIVE</span>
          <span className="badge pink">12-Year Comeback</span>
          <span className="badge">Raghu Ram</span>
          <span className="badge">Roadies Rebirth</span>
          <span className="badge">OGs vs NewGs</span>
          <span className="badge">Rannvijay Singha</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Raghu Ram Returns to Roadies After 12 Years With a Warning: “Be Careful What You Wish For”
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-17">November 17, 2026</time>
          <span>◆</span>
          <span>4 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">ROADIES REBIRTH SCOOP</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/raghu-ram-returns-roadies-rebirth-12-years.jpg"
            alt="Raghu Ram Returns to Roadies Rebirth After 12 Years"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Raghu Ram returns in a hooded warrior avatar for Roadies Rebirth after 12 years away from the franchise. (Photo: Buzz Originals / MTV India)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Raghu%20Ram%20Returns%20to%20Roadies%20Rebirth%20After%2012%20Years%20-%20https://www.buzzoriginals.com/raghu-ram-returns-roadies-rebirth-12-years"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Raghu%20Ram%20Returns%20to%20Roadies%20Rebirth%20After%2012%20Years&url=https://www.buzzoriginals.com/raghu-ram-returns-roadies-rebirth-12-years"
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
            <span>Raghu Ram’s Roadies Comeback: Key Takeaways</span>
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
              <strong>12-Year Hiatus Ended:</strong> Raghu Ram officially returns to <em>MTV Roadies</em> after quitting in 2014, entering the franchise’s 21st season titled <em>Roadies Rebirth</em>.
            </li>
            <li>
              <strong>Stern Warning to Contestants:</strong> Raghu warned aspirants: <em>“Be careful what you wish for! Rebirth means the return of a forgotten fear. Their journey through this rebirth is going to be nothing short of hell.”</em>
            </li>
            <li>
              <strong>Host &amp; Teams:</strong> Rannvijay Singha returns as host with six gang leaders split into OGs (Nikhil Chinappa, Neha Dhupia, Prince Narula) and NewGs (Abhishek Malhan, Bani J, Baseer Ali).
            </li>
            <li>
              <strong>Third Decade Shakeup:</strong> Raghu highlighted that as Roadies steps into its 3rd decade, his comeback is designed to disrupt comfort zones and bring raw unpredictability back.
            </li>
            <li>
              <strong>Broadcast Details:</strong> Episodes air every Friday and Saturday at 7 PM on MTV and stream on JioHotstar.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            <strong>Raghu Ram</strong> is back on <strong>Roadies</strong> after 12 years, and he says it’s bad news for the contestants. At a recent press meet, the fan favourite spoke about his comeback in <em>Roadies Rebirth</em>, the 21st season of MTV’s long-running youth reality show.
          </p>

          {/* Social Reel Callout Box */}
          <div
            style={{
              margin: "28px 0",
              padding: "16px 20px",
              background: "rgba(255, 0, 110, 0.08)",
              border: "1px solid rgba(255, 0, 110, 0.3)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "20px" }}>📱</span>
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#fff" }}>
                Watch Official Announcement: OG Roadies Raghu Ram returns after 12 years
              </span>
            </div>
            <a
              href="https://www.instagram.com/reel/Dfz7HkLzO0N/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--pink)",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "12px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Watch Instagram Reel →
            </a>
          </div>

          <h2>What Raghu Ram Said About His Return</h2>
          <p>
            Raghu made it clear that he is not coming back to take it easy. Here is his full statement:
          </p>
          <blockquote>
            “A lot of people wanted me back on Roadies. Well, be careful what you wish for! Roadies is India’s longest-running reality show, and over the years, it has constantly evolved. For the first decade, the show followed a certain format, but for it to grow and stay relevant, that format had to evolve. Then came the Gang Leaders, and the show continued to grow in popularity. Now, as Roadies enters its third decade, it is time to shake things up all over again. And that is exactly what my return is about. This is my REBIRTH, and honestly, it is the worst news for the Roadies! Because their journey through this rebirth is going to be nothing short of hell. So, buckle up!”
          </blockquote>
          <p>
            He also explained what the word “Rebirth” really means for the contestants. According to ANI, he said:
          </p>
          <blockquote>
            “After hearing the name Rebirth, the Roadies must have thought, ‘This is a great thing! We’ll get a chance to come back into the game and play again.’ But they will soon realise that Rebirth means the return of a forgotten fear. They will understand very quickly that Rebirth means facing a fear they thought they had left behind.”
          </blockquote>

          <h2>Why This Comeback Is a Big Deal</h2>
          <p>
            Raghu Ram was one of the most recognisable faces of <em>Roadies</em> for years. He left the show in 2014, along with his twin brother Rajiv Ram. Reports say they quit because of interference from the network producers at the time.
          </p>
          <p>
            Now, 12 years later, he is back. For fans who grew up watching him during the iconic early seasons of the show, this is a massive nostalgic moment. For the current batch of contestants, it might just be their worst nightmare realized.
          </p>

          <h2>What Is Roadies Rebirth?</h2>
          <p>
            <em>Roadies Rebirth</em> marks the 21st season of the reality series. Here is what we know about the format so far:
          </p>
          <ul>
            <li>
              <strong>Host:</strong> <strong>Rannvijay Singha</strong>, one of the original Roadies and the franchise’s cornerstone, is back steering the journey as the main host.
            </li>
            <li>
              <strong>Six Gang Leaders:</strong> Split into two fiery camps:
              <ul>
                <li>
                  <strong>OG Team:</strong> Nikhil Chinappa, Neha Dhupia, and Prince Narula.
                </li>
                <li>
                  <strong>NewG Team:</strong> Abhishek Malhan (Fukra Insaan), Bani J, and Baseer Ali.
                </li>
              </ul>
            </li>
            <li>
              <strong>Where to Watch:</strong> The season premiered on October 16. New episodes air every Friday and Saturday at 7 PM on MTV and stream exclusively on JioHotstar.
            </li>
          </ul>
          <p>
            The showmakers say the season will feature physically punishing tasks, intense psychological strategy games, deep-rooted faction rivalries, and plenty of unscripted surprises. Raghu’s presence is expected to inject a much darker and more unpredictable dimension to the auditions and journey.
          </p>

          <h2>What Happened in the Last Season?</h2>
          <p>
            The previous season was <em>Roadies XX: Double Cross</em>. <strong>Kushal Tanwar</strong>, popularly known as <strong>Gullu</strong>, took home the coveted title as part of Elvish Yadav’s gang. <strong>Hartaaj Singh Gill</strong> from Prince Narula’s gang was the first runner-up.
          </p>
          <p>
            In that high-stakes final task, Gullu crossed the finish line in 1 minute 16 seconds, whereas Gill completed it in 1 minute 48 seconds, cementing one of the fastest finale showdowns in the show&apos;s history.
          </p>

          <h2>Raghu Ram vs Rannvijay: Not the First Time</h2>
          <p>
            Long-time viewers will recall that Raghu and Rannvijay have clashed before. In <em>Roadies Season 10</em> back in 2013, a battle-hardened team of ex-contestants spearheaded by Raghu Ram competed against a spirited roster of fresh aspirants mentored by Rannvijay Singha.
          </p>
          <p>
            With the high-voltage OGs vs NewGs dynamic in place this season, fans are eagerly anticipating vintage rivalries, unfiltered confrontation, and authentic survival television once again.
          </p>

          <p>
            Stay glued to <strong>Buzz OG</strong> for every task review, vote-out leak, and gang leader showdown from <em>Roadies Rebirth</em>.
          </p>

          {/* Related Stories */}
          <div
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--lime)",
                marginBottom: "16px",
                fontFamily: "var(--font-anton)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Related Reality Show Stories on Buzz Originals
            </h3>
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
                  href="/eisha-singh-unfollows-avinash-mishra"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Eisha Singh Unfollows Avinash Mishra on Instagram: Are Avisha Really Over?
                </Link>
              </li>
              <li>
                <Link
                  href="/yogesh-rawat-justin-dcruz-roadies-rebirth-pi"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Yogesh Rawat Takes a Dig at Justin D’Cruz After Roadies Rebirth PI Round
                </Link>
              </li>
              <li>
                <Link
                  href="/shilpa-shetty-host-pyaar-ka-pressure-cooker"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Shilpa Shetty to Host Pyaar Ka Pressure Cooker on Colors
                </Link>
              </li>
              <li>
                <Link
                  href="/rise-and-fall-2-winner-shehzad-poonawalla"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Rise and Fall 2 Winner: Shehzad Poonawalla Lifts the Trophy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Roadies",
            "RoadiesRebirth",
            "RaghuRam",
            "RannvijaySingha",
            "MTVRoadies",
            "RealityTV",
            "NikhilChinappa",
            "NehaDhupia",
            "PrinceNarula",
            "AbhishekMalhan",
            "BaniJ",
            "BaseerAli",
            "TVNews",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[var(--paper)] border border-white/[0.08]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
