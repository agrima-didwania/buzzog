import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yogesh Rawat Takes a Dig at Justin D’Cruz | Roadies Rebirth",
  description:
    "Yogesh Rawat reacts to Justin D’Cruz mentioning his name in the Roadies Rebirth PI round. Read what he said in his Instagram video.",
  keywords: [
    "Yogesh Rawat Justin D’Cruz",
    "Roadies Rebirth",
    "Roadies Rebirth PI round",
    "Yogesh Rawat Instagram video",
    "Yogesh Rawat reaction",
    "Justin D’Cruz Roadies Rebirth",
    "MTV Roadies Rebirth latest news",
    "Why is Yogesh Rawat upset with Justin D’Cruz",
    "Yogesh Rawat dig at Justin D’Cruz",
    "Roadies Rebirth controversy",
    "Roadies Rebirth where to watch",
    "Who is Yogesh Rawat",
    "MTV Roadies",
    "Reality TV News",
  ],
  alternates: {
    canonical: "/yogesh-rawat-justin-dcruz-roadies-rebirth-pi",
  },
  openGraph: {
    title: "Yogesh Rawat Takes a Dig at Justin D’Cruz | Roadies Rebirth",
    description:
      "Yogesh Rawat reacts to Justin D’Cruz mentioning his name in the Roadies Rebirth PI round. Read what he said in his Instagram video.",
    url: "https://www.buzzoriginals.com/yogesh-rawat-justin-dcruz-roadies-rebirth-pi",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/yogesh-rawat-justin-dcruz-roadies-rebirth-pi.jpg",
        width: 1200,
        height: 675,
        alt: "Yogesh Rawat Takes a Dig at Justin D’Cruz After Roadies Rebirth PI Round",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Rawat Takes a Dig at Justin D’Cruz | Roadies Rebirth",
    description:
      "Yogesh Rawat reacts to Justin D’Cruz mentioning his name in the Roadies Rebirth PI round. Read what he said in his Instagram video.",
    images: ["/images/yogesh-rawat-justin-dcruz-roadies-rebirth-pi.jpg"],
  },
};

export default function YogeshRawatRoadiesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Yogesh Rawat Takes a Dig at Justin D’Cruz After Roadies Rebirth PI Round",
    description:
      "Yogesh Rawat reacts to Justin D’Cruz mentioning his name in the Roadies Rebirth PI round. Read what he said in his Instagram video.",
    image: [
      "https://www.buzzoriginals.com/images/yogesh-rawat-justin-dcruz-roadies-rebirth-pi.jpg",
    ],
    datePublished: "2026-11-16T11:30:00Z",
    dateModified: "2026-11-16T11:30:00Z",
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
      "@id": "https://www.buzzoriginals.com/yogesh-rawat-justin-dcruz-roadies-rebirth-pi",
    },
    keywords: [
      "Yogesh Rawat Justin D’Cruz",
      "Roadies Rebirth",
      "Roadies Rebirth PI round",
      "Yogesh Rawat reaction",
      "MTV Roadies",
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
        name: "Yogesh Rawat Justin D’Cruz Feud",
        item: "https://www.buzzoriginals.com/yogesh-rawat-justin-dcruz-roadies-rebirth-pi",
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
          <span className="text-[var(--lime)]">Roadies Rebirth PI</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ REALITY TV SCOOP</span>
          <span className="badge pink">Roadies Rebirth</span>
          <span className="badge">Yogesh Rawat</span>
          <span className="badge">Justin D’Cruz</span>
          <span className="badge">MTV India</span>
          <span className="badge">PI Controversy</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Yogesh Rawat Takes a Dig at Justin D’Cruz After Roadies Rebirth PI Round
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
            src="/images/yogesh-rawat-justin-dcruz-roadies-rebirth-pi.jpg"
            alt="Yogesh Rawat Takes a Dig at Justin D’Cruz After Roadies Rebirth PI Round"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Yogesh Rawat responds fiercely after Justin D’Cruz reportedly brought up his name during the MTV Roadies Rebirth Personal Interview auditions. (Photo: Buzz Originals / MTV India)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Yogesh%20Rawat%20Takes%20a%20Dig%20at%20Justin%20D’Cruz%20%7C%20Roadies%20Rebirth%20-%20https://www.buzzoriginals.com/yogesh-rawat-justin-dcruz-roadies-rebirth-pi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Yogesh%20Rawat%20Takes%20a%20Dig%20at%20Justin%20D’Cruz%20%7C%20Roadies%20Rebirth&url=https://www.buzzoriginals.com/yogesh-rawat-justin-dcruz-roadies-rebirth-pi"
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
            <span>Roadies Rebirth Feud: Key Highlights</span>
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
              <strong>Justin D’Cruz Drops Yogesh’s Name:</strong> In his Personal Interview (PI) round on Roadies Rebirth, Justin reportedly dedicated significant time discussing former contestant Yogesh Rawat.
            </li>
            <li>
              <strong>Yogesh Fires Back on Instagram:</strong> Yogesh shared a fiery video mocking contestants for burning with jealousy, remarking that their “souls have turned black” from envy.
            </li>
            <li>
              <strong>“My Name Is Immortal on the Show”:</strong> Yogesh emphasized that despite no longer being part of the cast, his legacy and impact remain unavoidable in current conversations.
            </li>
            <li>
              <strong>Broadcast Channel Cryptic Clue:</strong> Fans linked Yogesh’s “kaali rooh” remark to an earlier November 7 post on his broadcast channel featuring a black cat emoji following a promo mention.
            </li>
            <li>
              <strong>Roadies Rebirth Season 21:</strong> Hosted by Rannvijay Singha, the season streams on Netflix, JioHotstar, and airs on MTV India every Friday and Saturday at 7 PM.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            <strong>Roadies Rebirth</strong> has not even reached its big tasks yet, and the drama has already started. This time, <strong>Yogesh Rawat</strong> is reacting to <strong>Justin D’Cruz</strong>, who reportedly took Yogesh’s name during his Personal Interview (PI) round.
          </p>

          <h2>What Happened?</h2>
          <p>
            Justin D’Cruz reportedly spoke about Yogesh Rawat during his audition on Roadies Rebirth. Yogesh saw it and did not stay quiet. He shared a video on Instagram and said Justin should have talked about himself instead.
          </p>

          {/* Social Video Callout */}
          <div
            style={{
              margin: "24px 0",
              padding: "18px 20px",
              background: "rgba(255, 45, 85, 0.08)",
              borderLeft: "4px solid var(--pink)",
              borderRadius: "0 10px 10px 0",
            }}
          >
            <p style={{ margin: 0, fontSize: "15px", fontWeight: "600" }}>
              Check Out:{" "}
              <a
                href="https://www.instagram.com/reel/DfxQqYZTyQ4/?dlrf=MThqNDY5M240Ynk5YQ=="
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--lime)", textDecoration: "underline" }}
                className="hover:opacity-80 transition-opacity"
              >
                Yogesh Rawat takes a dig at Justin D&apos;Cruz for his Roadies audition!!
              </a>
            </p>
          </div>

          <h2>What Did Yogesh Rawat Say?</h2>
          <p>
            Yogesh began by saying he was watching the Roadies PI, and some people seem to be burning with jealousy. In his words:
          </p>
          <blockquote>
            “Roadies ka PI dekh raha tha aur maine dekha yaar log itne jalte hain ki matlab jal-jal ke unki rooh bhi kaali ho chuki hai.”
          </blockquote>
          <p>
            He then said he has no problem with people being jealous:
          </p>
          <blockquote>
            “Matlab main toh bolunga bhai tum jalte raho hum jalate rahenge. Hum apna jalwa barkaraar rakhenge, aise jalte raho tum.”
          </blockquote>
          <p>
            Next, he pointed out how much of Justin’s PI was about him:
          </p>
          <blockquote>
            “Baaki jal-jal ke apne PI mein bhi mera naam likhe. Aadha PI mere naam se nikaala hai.”
          </blockquote>
          <p>
            He also asked a simple question. If someone keeps using your name, why wouldn’t others get jealous?
          </p>
          <blockquote>
            “Matlab ab agar log aise karenge toh phir doosre bande jalenge kyun nahi na?”
          </blockquote>

          <h2>“Still Talked About, Even Though I’m Not on the Show”</h2>
          <p>
            Yogesh is no longer part of the show, but he says people there still talk about him:
          </p>
          <blockquote>
            “Jo banda show pe hai bhi nahi, karke ja chuke, uski charcha abhi tak wahan amar hai. Show pe bhi chal hi rahe honge, amar hai.”
          </blockquote>
          <p>
            He ended the video by saying this was never about switching sides. It was about the name and recognition he has earned:
          </p>
          <blockquote>
            “Baat flip maarne ki nahi thi, baat ye kamaane ki thi ki jo ho raha hai. Aur meri success ka jawab tum khud hi de rahe ho. Toh keep trying.”
          </blockquote>

          <h2>Did Yogesh Hint at This Before?</h2>
          <p>
            Maybe. On November 7, Business Upturn reported that Yogesh posted a black cat emoji on his Instagram broadcast channel. This came soon after Justin made a remark about him in a Roadies Rebirth promo. Fans guessed it was a hidden message. Yogesh never explained the emoji, so this is only speculation. Still, his new line about “kaali rooh” has fans connecting the dots.
          </p>

          {/* Broadcast Screenshot Attachment */}
          <div
            style={{
              margin: "28px 0",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full max-w-2xl mx-auto overflow-hidden">
              <Image
                src="/images/yogesh-rawat-instagram-broadcast-black-cat-emoji.jpg"
                alt="Yogesh Rawat Instagram Broadcast Channel YOGESHIANS Cat Emoji Reaction"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain"
              />
            </div>
            <p
              style={{
                padding: "12px 16px",
                margin: 0,
                fontSize: "13px",
                color: "var(--mist)",
                fontFamily: "var(--font-space-mono)",
                textAlign: "center",
                borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                background: "rgba(255, 255, 255, 0.02)",
              }}
            >
              Screenshot from Yogesh Rawat’s official Instagram broadcast channel ‘YOGESHIANS 🔱⭐️’ showing the cryptic black cat emoji reaction. (Photo: Instagram / Yogesh Rawat)
            </p>
          </div>

          <h2>About Roadies Rebirth</h2>
          <p>
            <strong>Roadies Rebirth</strong> is the 21st season of MTV Roadies. <strong>Rannvijay Singha</strong> is the host, and the season premiered on October 16, 2026. New episodes come out every Friday and Saturday at 7 PM on MTV India, Netflix and JioHotstar.
          </p>

          <h2>About Yogesh Rawat</h2>
          <p>
            Yogesh Rawat is a reality TV star from Uttarakhand. Fans know him from <em>Roadies XX: Double Cross</em>, <em>Splitsvilla 16</em> and <em>Lock Upp Season 2</em>. He has over 2 million followers on Instagram.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for more OTT reviews, reality show updates and Bollywood gossip.
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
                  href="/shilpa-shetty-host-pyaar-ka-pressure-cooker"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Shilpa Shetty to Host Pyaar Ka Pressure Cooker, a New Relationship Reality Show on Colors
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
                  href="/student-of-the-year-after-dark-review"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Student of the Year: After Dark Review – Shanaya Kapoor’s Dark Campus Thriller
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "RoadiesRebirth",
            "YogeshRawat",
            "JustinDCruz",
            "MTVRoadies",
            "RealityTVNews",
            "RannvijaySingha",
            "RoadiesAuditions",
            "Splitsvilla",
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
