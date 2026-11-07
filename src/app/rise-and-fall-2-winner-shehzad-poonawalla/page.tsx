import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rise and Fall 2 Winner: Shehzad Poonawalla Wins ₹35 Lakh | Buzz Originals",
  description:
    "Shehzad Poonawalla is the Rise and Fall 2 winner! Priyanka Chahar Choudhary is first runner-up, Gautam Gulati is third. Read the finale details and prize money.",
  keywords: [
    "Rise and Fall 2 winner",
    "Shehzad Poonawalla Rise and Fall 2",
    "Rise and Fall season 2 winner",
    "Rise and Fall 2 grand finale",
    "Rise and Fall 2 prize money",
    "Rise and Fall 2 final result",
    "Rise and Fall 2 top 6",
    "Who won Rise and Fall 2",
    "Rise and Fall 2 first runner-up",
    "Priyanka Chahar Choudhary Rise and Fall 2",
    "Gautam Gulati Rise and Fall 2 position",
    "Rise and Fall 2 finale where to watch",
    "Shehzad Poonawalla prize money donation",
    "Virender Sehwag Rise and Fall 2",
    "Banijay Asia Rise and Fall 2",
  ],
  alternates: {
    canonical: "/rise-and-fall-2-winner-shehzad-poonawalla",
  },
  openGraph: {
    title: "Rise and Fall 2 Winner: Shehzad Poonawalla Wins ₹35 Lakh | Buzz Originals",
    description:
      "Shehzad Poonawalla is the Rise and Fall 2 winner! Priyanka Chahar Choudhary is first runner-up, Gautam Gulati is third. Read the finale details and prize money.",
    url: "https://www.buzzoriginals.com/rise-and-fall-2-winner-shehzad-poonawalla",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/rise-and-fall-2-winner-shehzad-poonawalla.jpg",
        width: 1200,
        height: 675,
        alt: "Rise and Fall 2 Winner: Shehzad Poonawalla Lifts the Trophy with Virender Sehwag, Priyanka Chahar Choudhary & Gautam Gulati",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise and Fall 2 Winner: Shehzad Poonawalla Wins ₹35 Lakh",
    description:
      "Shehzad Poonawalla is the Rise and Fall 2 winner! Priyanka Chahar Choudhary is first runner-up, Gautam Gulati is third. Read the finale details and prize money.",
    images: ["/images/rise-and-fall-2-winner-shehzad-poonawalla.jpg"],
  },
};

export default function RiseAndFall2WinnerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Rise and Fall 2 Winner: Shehzad Poonawalla Wins ₹35 Lakh",
    description:
      "Shehzad Poonawalla is the Rise and Fall 2 winner! Priyanka Chahar Choudhary is first runner-up, Gautam Gulati is third. Read the finale details and prize money.",
    image: [
      "https://www.buzzoriginals.com/images/rise-and-fall-2-winner-shehzad-poonawalla.jpg",
    ],
    datePublished: "2026-11-06T18:00:00Z",
    dateModified: "2026-11-07T08:00:00Z",
    author: {
      "@type": "Organization",
      name: "Buzz Originals Reality TV Desk",
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
      "@id": "https://www.buzzoriginals.com/rise-and-fall-2-winner-shehzad-poonawalla",
    },
    keywords: [
      "Rise and Fall 2 winner",
      "Shehzad Poonawalla Rise and Fall 2",
      "Priyanka Chahar Choudhary Rise and Fall 2",
      "Gautam Gulati Rise and Fall 2",
      "Virender Sehwag",
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
        name: "Rise and Fall 2 Winner",
        item: "https://www.buzzoriginals.com/rise-and-fall-2-winner-shehzad-poonawalla",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink-0)] text-[var(--paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-[var(--mist)] mb-6 uppercase tracking-wider"
        >
          <Link href="/" className="hover:text-[var(--lime)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/reality-shows"
            className="hover:text-[var(--lime)] transition-colors"
          >
            Reality Shows
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">Rise &amp; Fall 2 Finale</span>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Grand Finale Winner</span>
          <span className="badge pink">Rise and Fall Season 2</span>
          <span className="badge">Shehzad Poonawalla</span>
          <span className="badge">₹35 Lakh Prize</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp font-black uppercase tracking-tight text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.15 }}
        >
          Rise and Fall 2 Winner: Shehzad Poonawalla Lifts the Trophy, Priyanka Chahar Choudhary Misses Out
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--mist)] border-y border-white/[0.08] py-3 mb-6">
          <span className="text-white font-medium">By Buzz Originals Reality TV Desk</span>
          <span className="dot-sep">◆</span>
          <time dateTime="2026-11-06">November 6, 2026</time>
          <span className="dot-sep">◆</span>
          <span>4 MIN READ</span>
          <span className="dot-sep">◆</span>
          <span className="text-[var(--lime)]">FINALE VERDICT</span>
        </div>

        {/* Hero Cover Image */}
        <figure className="mb-8">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          >
            <Image
              src="/images/rise-and-fall-2-winner-shehzad-poonawalla.jpg"
              alt="Rise and Fall 2 Winner: Shehzad Poonawalla Lifts the Trophy with Virender Sehwag, Priyanka Chahar Choudhary & Gautam Gulati"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <figcaption className="text-xs font-mono text-[var(--mist)] text-center mt-2">
            Host Virender Sehwag presents the glittering golden trophy to Shehzad Poonawalla alongside first runner-up Priyanka Chahar Choudhary and second runner-up Gautam Gulati on the Rise and Fall Season 2 Grand Finale stage. (Photo: MX Player / Prime Video / Banijay Asia)
          </figcaption>
        </figure>

        {/* Social Share Bar */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/[0.06] text-xs font-mono">
          <span className="text-[var(--mist)] uppercase tracking-wider">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Rise%20and%20Fall%202%20Winner%20Shehzad%20Poonawalla%20Lifts%20Trophy%20https://www.buzzoriginals.com/rise-and-fall-2-winner-shehzad-poonawalla"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Rise%20and%20Fall%202%20Winner%3A%20Shehzad%20Poonawalla%20Lifts%20the%20Trophy&url=https://www.buzzoriginals.com/rise-and-fall-2-winner-shehzad-poonawalla"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
          >
            X Post
          </a>
        </div>

        {/* Key Takeaways Box */}
        <div
          style={{
            background: "rgba(195, 255, 0, 0.05)",
            border: "1px solid var(--lime)",
            borderRadius: "12px",
            padding: "22px",
            margin: "28px 0 32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "13px",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            ⚡ Rise &amp; Fall Season 2 Grand Finale: Fast Breakdown
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              fontSize: "15px",
              lineHeight: "1.7",
              color: "rgba(255, 255, 255, 0.9)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li>
              <strong>The Champion:</strong> Political leader <strong>Shehzad Poonawalla</strong> won the title after six intense weeks of strategy and mind games.
            </li>
            <li>
              <strong>Prize Money &amp; Noble Gesture:</strong> Took home a shining golden trophy and <strong>₹35 lakh</strong> in cash, and announced that 100% of the prize money will be donated to flood relief in Bihar and Assam.
            </li>
            <li>
              <strong>The Runners-Up:</strong> Fan-favourite actress <strong>Priyanka Chahar Choudhary</strong> secured 1st runner-up, while Bigg Boss 8 winner <strong>Gautam Gulati</strong> took 2nd runner-up (3rd place).
            </li>
            <li>
              <strong>Host &amp; Platform:</strong> Hosted by cricket legend <strong>Virender Sehwag</strong>; streaming on MX Player and Prime Video.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            The wait is officially over. <strong>Shehzad Poonawalla</strong> is the undisputed champion of <em>Rise and Fall Season 2</em>. After six grueling weeks packed with dramatic physical showdowns, alliance shifts, basement betrayals, and high-stakes power plays, he edged out fan-favourite Priyanka Chahar Choudhary in a nail-biting grand finale to lift the golden trophy.
          </p>

          <p>
            Hosted with trademark wit and sportsmanship by cricket icon <strong>Virender Sehwag</strong>, the blockbuster finale premiered on Friday, November 6, 2026, streaming exclusively across MX Player and Prime Video.
          </p>

          <h2>Rise and Fall 2 Final Result: The Official Top 6</h2>
          <p>
            Here is how the high-stakes final leaderboard concluded after a thrilling elimination night:
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
            <ol
              style={{
                listStyle: "none",
                counterReset: "rank-counter",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "15.5px",
              }}
            >
              <li>
                <strong>Shehzad Poonawalla</strong> — <span style={{ color: "var(--lime)" }}>WINNER (Lifts Trophy + ₹35 Lakh)</span>
              </li>
              <li>
                <strong>Priyanka Chahar Choudhary</strong> — First Runner-Up
              </li>
              <li>
                <strong>Gautam Gulati</strong> — Second Runner-Up (3rd Place)
              </li>
              <li>
                <strong>Swara Bhasker</strong> — 4th Place
              </li>
              <li>
                <strong>Karan Patel</strong> — 5th Place
              </li>
              <li>
                <strong>Niharika Tiwari</strong> — 6th Place
              </li>
            </ol>
          </div>

          <div
            style={{
              background: "rgba(255, 0, 128, 0.08)",
              border: "1px solid var(--magenta)",
              borderRadius: "10px",
              padding: "16px 20px",
              margin: "24px 0",
              fontSize: "14.5px",
            }}
          >
            <strong>Trending Video:</strong>{" "}
            <a
              href="https://www.instagram.com/reel/DfblWBWtKuB/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Did Shehzad Poonawalla steal votes to win Rise and Fall 2? Watch the viral Instagram breakdown →
            </a>
          </div>

          <h2>How the Grand Finale Went Down</h2>
          <p>
            The final evening kicked off with pulsating musical and dance performances by the Top 6 finalists, followed by an emotional reunion with previously evicted contestants who returned to the arena to settle old scores.
          </p>

          <p>
            The tension escalated immediately as the elimination rounds got underway:
          </p>

          <ul>
            <li>
              <strong>Fortune Floor Pyramid Stage:</strong> Digital creator <strong>Niharika Tiwari</strong> was the first finalist to be sent packing after falling behind in the high-pressure pyramid challenge.
            </li>
            <li>
              <strong>The Tower Showdown:</strong> Television heavyweights <strong>Karan Patel</strong> and Bollywood actress <strong>Swara Bhasker</strong> faced elimination next, bowing out at 5th and 4th positions respectively.
            </li>
            <li>
              <strong>The Top 3 Deadlock:</strong> That left Shehzad Poonawalla, Priyanka Chahar Choudhary, and Gautam Gulati in the ultimate face-off. With the final jury votes deadlocked among the remaining trio, the decisive tie-breaking ballots were handed to the jury of eliminated contestants. They cast their collective support behind Shehzad, crowning him the winner.
            </li>
          </ul>

          <p>
            Stand-up sensation Harsh Gujral injected hilarious comedic relief during intervals, while heartfelt video messages from family members left both finalists and viewers teary-eyed.
          </p>

          <h2>How Much Prize Money Did Shehzad Win?</h2>
          <p>
            Alongside the coveted golden <em>Rise and Fall</em> trophy, Shehzad took home a cash prize of <strong>₹35 lakh</strong>.
          </p>

          <p>
            In a moment that garnered immense respect across the studio and online communities, Shehzad immediately pledged to donate the entire ₹35 lakh prize purse toward ongoing flood relief operations in <strong>Bihar and Assam</strong>. The philanthropic gesture sparked widespread praise across social media feeds within minutes of the telecast.
          </p>

          <blockquote>
            “Winning Rise and Fall Season 2 is a feeling I simply cannot put into words. From the heights of the Penthouse Tower to the harsh uncertainty of the Basement, there were moments of self-doubt. But I always believed in staying true to my strategy. I want to thank Virender Sehwag sir, Banijay Asia, and the entire team at MX Player and Prime Video for this unforgettable platform.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Shehzad Poonawalla’s Victory Speech
            </footer>
          </blockquote>

          <h2>Shehzad’s Journey: From Political Spokesperson to Reality Champion</h2>
          <p>
            Known primarily as a sharp political debater and advocate, this marked Shehzad’s debut foray into reality entertainment. Despite competing against seasoned reality TV veterans like Gautam Gulati (who conquered <em>Bigg Boss 8</em>) and Priyanka Chahar Choudhary (fan-favourite from <em>Bigg Boss 16</em>), Shehzad demonstrated remarkable composure.
          </p>

          <p>
            His pivotal breakthrough arrived during the rigorous <strong>Ticket to Finale</strong> task, where his tactical game-plan earned him direct entry into the final week, bypassing multiple nerve-wracking nomination cycles.
          </p>

          <p>
            The second season premiered on September 26, 2026, running for six eventful weeks and generating millions of streams and social media conversations across India.
          </p>

          <h2>What About Priyanka and Gautam?</h2>
          <p>
            Priyanka Chahar Choudhary once again proved her colossal fan base and staying power. Dominating voting polls throughout the season, she fought tenaciously through basement punishments and came agonizingly close before finishing as the first runner-up.
          </p>

          <p>
            Meanwhile, Gautam Gulati showcased his trademark charm and psychological endurance to secure third place, solidifying his reputation as one of Indian reality television’s most dependable performers.
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
              Related Reality Shows &amp; Entertainment Coverage
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
                  href="/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Shreya Kalra Reacts to Karan Patel’s Reels Comment on Rise and Fall 2
                </Link>
              </li>
              <li>
                <Link
                  href="/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Saif Ali Khan Stabbing Night: Kareena Kapoor’s Emotional Confession on Koffee With Karan 9
                </Link>
              </li>
              <li>
                <Link
                  href="/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Mira Rajput Says Shahid Kapoor Loves Gossip: Unseen Great Indian Kapil Show Clip
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
            "Rise and Fall 2",
            "Rise and Fall 2 winner",
            "Shehzad Poonawalla",
            "Priyanka Chahar Choudhary",
            "Gautam Gulati",
            "Virender Sehwag",
            "Rise and Fall finale",
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
