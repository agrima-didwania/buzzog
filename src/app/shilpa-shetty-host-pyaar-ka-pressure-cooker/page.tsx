import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shilpa Shetty to Host Pyaar Ka Pressure Cooker on Colors | Buzz Originals",
  description:
    "Shilpa Shetty will host Pyaar Ka Pressure Cooker, a new relationship reality show on Colors and JioHotstar. Here is what we know so far.",
  keywords: [
    "Pyaar Ka Pressure Cooker",
    "Shilpa Shetty new show",
    "Shilpa Shetty reality show",
    "Pyaar Ka Pressure Cooker Colors",
    "Pyaar Ka Pressure Cooker JioHotstar",
    "Pyaar Ka Pressure Cooker release date",
    "relationship reality show India",
    "Jodo Ya Todo",
    "Clarity Ki Seeti",
    "Bigg Boss time slot",
    "Colors TV new show",
    "situationship",
    "new reality shows 2026",
    "Shilpa Shetty",
    "Colors TV",
  ],
  alternates: {
    canonical: "/shilpa-shetty-host-pyaar-ka-pressure-cooker",
  },
  openGraph: {
    title: "Shilpa Shetty to Host Pyaar Ka Pressure Cooker on Colors | Buzz Originals",
    description:
      "Shilpa Shetty will host Pyaar Ka Pressure Cooker, a new relationship reality show on Colors and JioHotstar. Here is what we know so far.",
    url: "https://www.buzzoriginals.com/shilpa-shetty-host-pyaar-ka-pressure-cooker",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/shilpa-shetty-host-pyaar-ka-pressure-cooker.jpg",
        width: 1200,
        height: 675,
        alt: "Shilpa Shetty to Host Pyaar Ka Pressure Cooker Colors TV JioHotstar",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shilpa Shetty to Host Pyaar Ka Pressure Cooker on Colors",
    description:
      "Shilpa Shetty will host Pyaar Ka Pressure Cooker, a new relationship reality show on Colors and JioHotstar. Here is what we know so far.",
    images: ["/images/shilpa-shetty-host-pyaar-ka-pressure-cooker.jpg"],
  },
};

export default function PyaarKaPressureCookerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Shilpa Shetty to Host Pyaar Ka Pressure Cooker, a New Relationship Reality Show",
    description:
      "Shilpa Shetty will host Pyaar Ka Pressure Cooker, a new relationship reality show on Colors and JioHotstar. Here is what we know so far.",
    image: [
      "https://www.buzzoriginals.com/images/shilpa-shetty-host-pyaar-ka-pressure-cooker.jpg",
    ],
    datePublished: "2026-11-16T11:00:00Z",
    dateModified: "2026-11-16T11:00:00Z",
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
      "@id": "https://www.buzzoriginals.com/shilpa-shetty-host-pyaar-ka-pressure-cooker",
    },
    keywords: [
      "Pyaar Ka Pressure Cooker",
      "Shilpa Shetty new show",
      "Shilpa Shetty reality show",
      "Colors TV new show",
      "Bigg Boss time slot",
      "relationship reality show India",
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
        name: "Pyaar Ka Pressure Cooker",
        item: "https://www.buzzoriginals.com/shilpa-shetty-host-pyaar-ka-pressure-cooker",
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
          <span className="text-[var(--lime)]">Pyaar Ka Pressure Cooker</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ REALITY TV SCOOP</span>
          <span className="badge pink">Shilpa Shetty</span>
          <span className="badge">Colors TV</span>
          <span className="badge">JioHotstar</span>
          <span className="badge">Bigg Boss Slot</span>
          <span className="badge">Relationship Show</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Shilpa Shetty to Host Pyaar Ka Pressure Cooker, a New Relationship Reality Show
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">REALITY SHOWS SCOOP</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/shilpa-shetty-host-pyaar-ka-pressure-cooker.jpg"
            alt="Shilpa Shetty to Host Pyaar Ka Pressure Cooker Colors TV JioHotstar"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Bollywood icon Shilpa Shetty returns to television screens as the host of Colors TV’s high-stakes relationship reality format Pyaar Ka Pressure Cooker. (Photo: Buzz Originals / Colors TV)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Shilpa%20Shetty%20to%20Host%20Pyaar%20Ka%20Pressure%20Cooker%20on%20Colors%20-%20https://www.buzzoriginals.com/shilpa-shetty-host-pyaar-ka-pressure-cooker"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Shilpa%20Shetty%20to%20Host%20Pyaar%20Ka%20Pressure%20Cooker%20on%20Colors&url=https://www.buzzoriginals.com/shilpa-shetty-host-pyaar-ka-pressure-cooker"
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
            <span>Pyaar Ka Pressure Cooker: Key Highlights</span>
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
              <strong>Shilpa Shetty Returns as Host:</strong> Shilpa Shetty is set to headline *Pyaar Ka Pressure Cooker*, an upcoming relationship reality series airing on Colors TV and streaming on JioHotstar.
            </li>
            <li>
              <strong>Unique Parental Reality Check:</strong> Unlike typical dating shows, couples stuck in commitment doubts or situationships will live together alongside their parents, who deliver honest critiques.
            </li>
            <li>
              <strong>Key Segments Revealed:</strong> Features two core show mechanisms — <em>Jodo Ya Todo</em> (the ultimate stay-or-split verdict) and <em>Clarity Ki Seeti</em> (the dramatic whistle when unvarnished truth comes out).
            </li>
            <li>
              <strong>Bigg Boss Slot Contender:</strong> Trade reports suggest the show is currently being primed to take over the high-profile prime-time television slot currently occupied by Bigg Boss.
            </li>
            <li>
              <strong>Prolific TV Portfolio:</strong> Following her culinary show <em>Maa Hai Na</em>, this marks Shilpa’s second major hosting venture of 2026, complementing her acclaimed judging runs on <em>Super Dancer</em> and <em>Jhalak Dikhhla Jaa</em>.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            <strong>Shilpa Shetty</strong> is coming back to TV with a brand new reality show. It is called <strong>Pyaar Ka Pressure Cooker</strong>, and it is all about love, confusion, and honest talk. The show will air on <strong>Colors TV</strong> and stream digitally on <strong>JioHotstar</strong>.
          </p>

          <h2>What Is Pyaar Ka Pressure Cooker About?</h2>
          <p>
            The show brings couples together who are stuck in their relationships. Some may be unsure about long-term commitment. Some may be tangled in a modern “situationship”. Others may simply not know whether they should move forward together at all.
          </p>
          <p>
            The major twist is that <strong>parents are an active part of the show</strong>. They join the intense living quarters, sit in on vital conversations, and share their unfiltered views on their children’s relationships. Couples will also live together under one roof during the course of the season.
          </p>

          <h2>Jodo Ya Todo and Clarity Ki Seeti</h2>
          <p>
            The format is anchored by two signature conceptual pillars:
          </p>
          <ul>
            <li>
              <strong>Jodo Ya Todo (Pair or Break):</strong> At the end of their stay and trials, couples face a decisive crossroads where they must choose whether to stay together or part ways permanently.
            </li>
            <li>
              <strong>Clarity Ki Seeti:</strong> Like a classic kitchen pressure cooker whistle, this alarm blows dramatically whenever the concealed truth or hidden feelings finally burst into the open.
            </li>
          </ul>

          <h2>What Shilpa Shetty Said</h2>
          <p>
            Speaking about the show’s vision and how romance has transformed in contemporary times, Shilpa highlighted:
          </p>
          <blockquote>
            “Relationships today come with a whole new vocabulary — situationships, breadcrumbing, benching. Somewhere along the line, people have lost clarity. This is India’s first relationship show where parents deliver the reality check. It is fun for young couples and deeply eye-opening for parents wanting to understand their kids’ love lives.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Shilpa Shetty on hosting Pyaar Ka Pressure Cooker
            </footer>
          </blockquote>

          <h2>Will It Replace Bigg Boss?</h2>
          <p>
            According to trade reports by <em>Bollywood Hungama</em>, the high-octane relationship show is expected to take over the flagship late-evening time slot currently occupied by <em>Bigg Boss</em> once the ongoing season wraps up. While official broadcast schedules remain under wraps from Colors, the buzz around its prime placement has already sparked conversations across TV fandoms.
          </p>

          <h2>Shilpa Shetty’s Return as Host</h2>
          <p>
            This marks Shilpa’s second major hosting job this calendar year, following her heartfelt culinary series <em>Maa Hai Na</em>. Over the past two decades, the Bollywood actress has established herself as one of Indian reality television’s most dependable faces, having previously judged marquee formats like <em>Super Dancer</em>, <em>Jhalak Dikhhla Jaa</em>, and <em>India’s Got Talent</em>, along with her historic international win on the UK’s <em>Celebrity Big Brother 5</em>.
          </p>

          <h2>When Will It Premiere?</h2>
          <p>
            The showrunners and Colors TV have not yet revealed the official premiere date or unveiled the initial roster of participating couples. Pre-production and casting audits are reportedly nearing completion in Mumbai. We will update this post as soon as official broadcast dates are unveiled.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for more OTT reviews, reality show updates, and Bollywood scoops.
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
              Related Stories on Buzz Originals
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
                  href="/student-of-the-year-after-dark-review"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Student of the Year: After Dark Review – Shanaya Kapoor’s Dark Campus Thriller
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
              <li>
                <Link
                  href="/bigg-boss-20-salman-khan-slams-scoutop-love-gill"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Bigg Boss 20: Salman Khan Slams ScoutOP for Not Standing Up for Love Gill
                </Link>
              </li>
              <li>
                <Link
                  href="/amitabh-bachchan-jalsa-property-dispute"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Amitabh Bachchan’s Jalsa Property Dispute: What Is Going On?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "ShilpaShetty",
            "PyaarKaPressureCooker",
            "ColorsTV",
            "JioHotstar",
            "RelationshipRealityShow",
            "BiggBossSlot",
            "IndianRealityShows",
            "RealityTV",
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
