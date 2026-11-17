import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eisha Singh Unfollows Avinash Mishra: What Fans Are Saying | Buzz Originals",
  description:
    "Eisha Singh has reportedly unfollowed Avinash Mishra on Instagram after their viral “I love you” moment. Here is what we know so far.",
  keywords: [
    "Eisha Singh unfollows Avinash Mishra",
    "Avinash Mishra Eisha Singh breakup",
    "Avinash Mishra Eisha Singh relationship",
    "Avinash Mishra I love you baby video",
    "Khatron Ke Khiladi 15 winner Avinash Mishra",
    "Eisha Singh Instagram unfollow",
    "Bigg Boss 18 Eisha Avinash",
    "Avisha fallout rumours",
    "Eisha Singh mother Instagram story",
    "Eisha Singh",
    "Avinash Mishra",
    "Avisha",
    "Bigg Boss 18",
    "Khatron Ke Khiladi 15",
    "Reality TV News",
  ],
  alternates: {
    canonical: "/eisha-singh-unfollows-avinash-mishra",
  },
  openGraph: {
    title: "Eisha Singh Unfollows Avinash Mishra: What Fans Are Saying | Buzz Originals",
    description:
      "Eisha Singh has reportedly unfollowed Avinash Mishra on Instagram after their viral “I love you” moment. Here is what we know so far.",
    url: "https://www.buzzoriginals.com/eisha-singh-unfollows-avinash-mishra",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/eisha-singh-unfollows-avinash-mishra.jpg",
        width: 1200,
        height: 675,
        alt: "Eisha Singh Unfollows Avinash Mishra on Instagram Are Avisha Really Over",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eisha Singh Unfollows Avinash Mishra: What Fans Are Saying",
    description:
      "Eisha Singh has reportedly unfollowed Avinash Mishra on Instagram after their viral “I love you” moment. Here is what we know so far.",
    images: ["/images/eisha-singh-unfollows-avinash-mishra.jpg"],
  },
};

export default function EishaAvinashUnfollowPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Eisha Singh Unfollows Avinash Mishra on Instagram: Are Avisha Really Over?",
    description:
      "Eisha Singh has reportedly unfollowed Avinash Mishra on Instagram after their viral “I love you” moment. Here is what we know so far.",
    image: [
      "https://www.buzzoriginals.com/images/eisha-singh-unfollows-avinash-mishra.jpg",
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
      "@id": "https://www.buzzoriginals.com/eisha-singh-unfollows-avinash-mishra",
    },
    keywords: [
      "Eisha Singh unfollows Avinash Mishra",
      "Avinash Mishra Eisha Singh breakup",
      "Avisha fallout rumours",
      "Bigg Boss 18",
      "Khatron Ke Khiladi 15",
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
        name: "Eisha Singh Unfollows Avinash Mishra",
        item: "https://www.buzzoriginals.com/eisha-singh-unfollows-avinash-mishra",
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
          <span className="text-[var(--lime)]">Avisha Unfollow Buzz</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ REALITY TV SCOOP</span>
          <span className="badge pink">Avisha</span>
          <span className="badge">Eisha Singh</span>
          <span className="badge">Avinash Mishra</span>
          <span className="badge">Bigg Boss 18</span>
          <span className="badge">KKK 15</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Eisha Singh Unfollows Avinash Mishra on Instagram: Are Avisha Really Over?
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-17">November 17, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">REALITY SHOWS SCOOP</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/eisha-singh-unfollows-avinash-mishra.jpg"
            alt="Eisha Singh Unfollows Avinash Mishra on Instagram Are Avisha Really Over"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Rumours swirl across social media after fans notice Eisha Singh is no longer following Avinash Mishra on Instagram, despite his ongoing follow. (Photo: Buzz Originals / Social Media)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Eisha%20Singh%20Unfollows%20Avinash%20Mishra%20-%20https://www.buzzoriginals.com/eisha-singh-unfollows-avinash-mishra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Eisha%20Singh%20Unfollows%20Avinash%20Mishra&url=https://www.buzzoriginals.com/eisha-singh-unfollows-avinash-mishra"
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
            <span>Avisha Fallout Buzz: Key Takeaways</span>
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
              <strong>Unfollow Spotted:</strong> Eisha Singh has unfollowed Avinash Mishra on Instagram, while Avinash continues to follow her profile.
            </li>
            <li>
              <strong>Viral “I Love You” Moment:</strong> The move comes right after their viral exchange at Avinash’s Khatron Ke Khiladi 15 success party, where he said “I love you, baby” and she replied “I love you too.”
            </li>
            <li>
              <strong>Cryptic Note by Eisha’s Mother:</strong> Rekha Singh reportedly shared a cryptic Instagram Story, further stoking fan theories regarding tension behind the scenes.
            </li>
            <li>
              <strong>Divided Fandom:</strong> While some fans fear a permanent breakup, others suggest it might just be a temporary disagreement or digital glitch.
            </li>
            <li>
              <strong>No Official Statement:</strong> Neither Eisha nor Avinash has addressed the unfollow, keeping the situation purely speculative at this stage.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Just when fans thought <strong>Avinash Mishra</strong> and <strong>Eisha Singh</strong> were finally getting closer, a new rumour has changed the mood online. Eisha has reportedly unfollowed Avinash on Instagram, and fans are asking if their friendship has hit a rough patch.
          </p>

          <h2>What Happened?</h2>
          <p>
            Fans noticed that Eisha no longer follows Avinash on Instagram. Avinash, however, is still following her. Neither of them has spoken about it publicly, so there is no official word yet.
          </p>
          <p>
            The talk got louder after a post by Eisha’s mother, Rekha Singh. She put up a cryptic note on her Instagram Story. We could not find what the note said, and she has not stated who it was meant for, so fans are only guessing.
          </p>

          <h2>The “I Love You” Video Everyone Is Talking About</h2>
          <p>
            This news comes right after a video from Avinash’s <em>Khatron Ke Khiladi 15</em> success party went viral. Avinash won the show, with Rithvik Dhanjani and Orry finishing as the first and second runners-up.
          </p>
          <p>
            In the clip, Avinash thanks Eisha for being there for him. He says:
          </p>
          <blockquote>
            “I am grateful and blessed that I have Eisha in my life.”
          </blockquote>
          <p>
            Eisha then nudges him to say more, and he adds:
          </p>
          <blockquote>
            “I love you, baby.”
          </blockquote>
          <p>
            She smiles warmly and replies:
          </p>
          <blockquote>
            “I love you too.”
          </blockquote>
          <p>
            Many fans took it as a clear sign that the two had finally made things official. That is why the sudden unfollow has come as such a shock across fandom circles.
          </p>

          <h2>Eisha’s Posts After His Win</h2>
          <p>
            Eisha was very emotional after Avinash lifted the KKK 15 trophy. She shared a heartfelt post that said:
          </p>
          <blockquote>
            “Trophy aa gayi ghar!!!!!! Some victories are way too personal... this one, exactly this one.”
          </blockquote>
          <p>
            She also posted a video of the two dancing together to celebrate his massive milestone.
          </p>

          <h2>How Fans Are Reacting</h2>
          <p>
            Social media is sharply divided over the development:
          </p>
          <ul>
            <li>
              <strong>Heartbroken Avisha Shippers:</strong> Some devoted fans are heartbroken, expressing sadness that their favourite pair might have fallen out and wishing both well.
            </li>
            <li>
              <strong>Calling Out Avinash:</strong> Other fans are blaming Avinash, bringing up the old Bhavika Sharma controversy and urging shippers not to over-invest emotionally in the duo.
            </li>
            <li>
              <strong>Hopeful for Reconciliation:</strong> A section of followers believes the unfollow is likely just a small lovers&apos; tiff or misunderstanding rather than a full-fledged breakup.
            </li>
          </ul>
          <p>
            <em>Please note that these are opinions expressed by social media users and not verified facts.</em>
          </p>

          <h2>Where Did Avisha’s Story Begin?</h2>
          <p>
            Eisha and Avinash became inseparable friends inside the <em>Bigg Boss 18</em> house, and their tight bond continued well after the cameras stopped rolling. For almost two years, fans have debated whether they were merely close friends or something deeper.
          </p>
          <p>
            Here is how the relationship timeline has unfolded:
          </p>
          <ul>
            <li>
              <strong>Inside Bigg Boss 18:</strong> Avinash openly confessed his feelings for Eisha, but she chose to keep their relationship strictly within the boundary of friendship.
            </li>
            <li>
              <strong>Frequent Public Outings:</strong> Following the show, the two were spotted together on numerous occasions, constantly keeping dating speculations alive.
            </li>
            <li>
              <strong>June 2026 Clarification:</strong> Avinash stated in an interview that he was single, referring to Eisha as a very dear and trusted friend.
            </li>
            <li>
              <strong>Post-KKK 15 Success:</strong> The viral “I love you” exchange at his victory party led fans to believe their dynamic had evolved into an official relationship.
            </li>
          </ul>

          <h2>So, Is It Really Over?</h2>
          <p>
            Nothing is confirmed. An unfollow on social media is a clue, not definitive proof. Many celebrities unfollow each other during minor disagreements or simply while decluttering their accounts. Until Eisha or Avinash makes an official statement, it is best to treat this as speculation.
          </p>

          <p>
            Stay with <strong>Buzz OG</strong> for the latest updates on Eisha Singh, Avinash Mishra, and your favourite reality stars.
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
              <li>
                <Link
                  href="/bigg-boss-20-salman-khan-slams-scoutop-love-gill"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Bigg Boss 20: Salman Khan Slams ScoutOP for Not Standing Up for Love Gill
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "EishaSingh",
            "AvinashMishra",
            "Avisha",
            "BiggBoss18",
            "KhatronKeKhiladi15",
            "KKK15",
            "TVGossip",
            "CelebrityGossip",
            "RealityTVNews",
            "InstagramUnfollow",
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
