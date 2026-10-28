"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface RealityArticle {
  id: string;
  show: "Bigg Boss" | "Splitsvilla" | "Khatron Ke Khiladi" | "Rise and Fall";
  title: string;
  excerpt: string;
  badge: string;
  badgeType?: "pink" | "lime" | "default";
  mediaClass?: string;
  image?: string;
  href: string;
  readTime: string;
  timeAgo: string;
}

const realityArticles: RealityArticle[] = [
  {
    id: "shreya-karan-rise-and-fall",
    show: "Rise and Fall",
    title: "Shreya Kalra Hits Back at Karan Patel Over His Reels Comment",
    excerpt:
      "Karan Patel questioned how long digital creators will stay in reels. Shreya fires back: 'Stop demeaning people from reality TV.' The clash that shook the set.",
    badge: "Exclusive",
    badgeType: "pink",
    image: "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "3 MIN READ",
    timeAgo: "1H AGO",
  },
  {
    id: "bb-diary-room-leak",
    show: "Bigg Boss",
    title: "Housemate’s diary room confession leaks — and it’s messier than expected",
    excerpt:
      "An unedited clip from the Bigg Boss confession room surfaced online, revealing secret pacts and broken alliances.",
    badge: "New",
    badgeType: "lime",
    mediaClass: "m1",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "4 MIN READ",
    timeAgo: "2H AGO",
  },
  {
    id: "splitsvilla-insider-spill",
    show: "Splitsvilla",
    title: "Splitsvilla insider spills who’s actually calling the shots this season",
    excerpt:
      "Behind the tasks and connection dates, villa insiders reveal the masterminds orchestrating power shifts at the dome.",
    badge: "Exclusive",
    badgeType: "pink",
    mediaClass: "m2",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "5 MIN READ",
    timeAgo: "3H AGO",
  },
  {
    id: "bb-12-sec-clip",
    show: "Bigg Boss",
    title: "Watch: the 12-second clip everyone’s replaying from last night’s episode",
    excerpt:
      "A heated morning confrontation over duties turned personal when an unspoken past rival was brought up on camera.",
    badge: "Video",
    badgeType: "lime",
    mediaClass: "m3",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "2 MIN READ",
    timeAgo: "4H AGO",
  },
  {
    id: "kkk-scariest-stunt",
    show: "Khatron Ke Khiladi",
    title: "KKK’s scariest stunt this season made two contestants tap out instantly",
    excerpt:
      "Suspended 150 feet in the air, sudden wind gusts led to pure panic on set before the safety crew stepped in.",
    badge: "Trending",
    badgeType: "default",
    mediaClass: "m4",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "4 MIN READ",
    timeAgo: "5H AGO",
  },
  {
    id: "splitsvilla-dome-session",
    show: "Splitsvilla",
    title: "Splitsvilla dome session breakdown: ideal match broken and power shifted",
    excerpt:
      "The Oracle delivered a shock verdict that shattered the villa's top alliance and triggered a 40-minute shouting match.",
    badge: "Unfiltered",
    badgeType: "lime",
    mediaClass: "m5",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "3 MIN READ",
    timeAgo: "6H AGO",
  },
  {
    id: "bb-villain-edit",
    show: "Bigg Boss",
    title: "Unpopular opinion: this “villain” edit might be the most unfair one yet",
    excerpt:
      "Netizens react as 24/7 live-feed clips suggest crucial context was trimmed out before the prime-time telecast.",
    badge: "Hot Take",
    badgeType: "pink",
    mediaClass: "m6",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "4 MIN READ",
    timeAgo: "7H AGO",
  },
  {
    id: "kkk-episode-recap",
    show: "Khatron Ke Khiladi",
    title: "KKK episode recap: the stunt that split the cast down the middle",
    excerpt:
      "A captain's controversial decision to sacrifice immunity put an underdog straight into the elimination round.",
    badge: "Recap",
    badgeType: "lime",
    mediaClass: "m1",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "5 MIN READ",
    timeAgo: "9H AGO",
  },
  {
    id: "bb-weekend-ka-vaar",
    show: "Bigg Boss",
    title: "Weekend ka Vaar recap: who got called out and who got off easy",
    excerpt:
      "The host addressed the hallway bullying head-on, but fans claim a favored housemate escaped without scrutiny.",
    badge: "Recap",
    badgeType: "lime",
    mediaClass: "m2",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "6 MIN READ",
    timeAgo: "12H AGO",
  },
  {
    id: "splitsvilla-finale-ticket",
    show: "Splitsvilla",
    title: "Fans pick: the couple that deserves the finale ticket",
    excerpt:
      "Over 50,000 votes poured in across our reader poll. Here is which wildcard connection is currently leading.",
    badge: "Poll",
    badgeType: "pink",
    mediaClass: "m3",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "3 MIN READ",
    timeAgo: "1D AGO",
  },
  {
    id: "rise-fall-divide",
    show: "Rise and Fall",
    title: "Rise and Fall 2: Behind-the-scenes tensions between TV veterans & digital stars",
    excerpt:
      "Following Shreya Kalra’s clapback, insider reports confirm the divide between TV actors and content creators is deepening.",
    badge: "Exclusive",
    badgeType: "pink",
    image: "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readTime: "4 MIN READ",
    timeAgo: "1D AGO",
  },
];

const heatIndex = [
  { name: "Aariv", show: "Bigg Boss", score: 92, bg: "var(--lime)", textColor: "var(--ink)" },
  { name: "Shreya Kalra", show: "Rise and Fall 2", score: 88, bg: "var(--magenta)", textColor: "#fff" },
  { name: "Ritika", show: "Splitsvilla", score: 81, bg: "var(--magenta)", textColor: "#fff" },
  { name: "Karan Patel", show: "Rise and Fall 2", score: 79, bg: "#e08b6f", textColor: "var(--ink)" },
  { name: "Kabir", show: "KKK", score: 74, bg: "#d9d9d9", textColor: "var(--ink)" },
  { name: "Meher", show: "Bigg Boss", score: 58, bg: "#e08b6f", textColor: "var(--ink)" },
  { name: "Zeeshan", show: "Splitsvilla", score: 41, bg: "#6fd0e0", textColor: "var(--ink)" },
];

export default function RealityShowsView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [email, setEmail] = useState("");
  const [ctaStatus, setCtaStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const filterOptions = [
    { label: "🔥 All", value: "all" },
    { label: "Bigg Boss", value: "Bigg Boss" },
    { label: "Splitsvilla", value: "Splitsvilla" },
    { label: "Khatron Ke Khiladi", value: "Khatron Ke Khiladi" },
    { label: "Rise and Fall", value: "Rise and Fall" },
  ];

  const filteredArticles =
    activeFilter === "all"
      ? realityArticles
      : realityArticles.filter((art) => art.show === activeFilter);

  const handleTileClick = (showName: string) => {
    setActiveFilter(showName);
    const gridElem = document.getElementById("reality-grid");
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    setCtaStatus(null);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setCtaStatus("YOU’RE IN. WELCOME TO THE BUZZ SQUAD 🎉");
        setEmail("");
      } else {
        const data = await res.json();
        setCtaStatus(data.error || "YOU’RE ALREADY ON THE VIP LIST! 🎉");
      }
    } catch {
      setCtaStatus("YOU’RE IN. WELCOME TO THE BUZZ SQUAD 🎉");
      setEmail("");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Top Reality TV Ticker */}
      <div className="ticker-bar" role="region" aria-label="Reality TV Live Wire">
        <div className="ticker-track">
          <span>BIGG BOSS: WEEKEND NOMINATIONS SPLIT THE HOUSE</span>
          <span>SPLITSVILLA: DOME DRAMA SHIFTS THE POWER</span>
          <span>KHATRON KE KHILADI: THE STUNT THAT MADE TWO CONTESTANTS TAP OUT</span>
          <span>RISE AND FALL 2: SHREYA KALRA FIRES BACK AT KARAN PATEL</span>
          <span>BIGG BOSS: WEEKEND NOMINATIONS SPLIT THE HOUSE</span>
          <span>SPLITSVILLA: DOME DRAMA SHIFTS THE POWER</span>
          <span>KHATRON KE KHILADI: THE STUNT THAT MADE TWO CONTESTANTS TAP OUT</span>
          <span>RISE AND FALL 2: SHREYA KALRA FIRES BACK AT KARAN PATEL</span>
        </div>
      </div>

      {/* Main Navigation Header with Reality Shows Marked Active */}
      <Header activeNav="Reality Shows" />

      <main className="min-h-screen bg-[var(--ink)]">
        {/* Page Hero Header Banner */}
        <section className="ph-wrap">
          <div className="ph">
            <div className="crumb">
              <Link href="/">HOME</Link> / REALITY SHOWS
            </div>
            <h1 className="disp">
              Reality <em>Shows</em>
            </h1>
            <p>
              Eliminations, fights, fan wars and dome drama — every Bigg Boss, Splitsvilla,
              Khatron Ke Khiladi and Rise and Fall moment, minus the filler.
            </p>
          </div>
        </section>

        {/* Filter Chips Bar */}
        <div
          className="cat-strip"
          id="reality-categories"
          role="tablist"
          aria-label="Filter Reality Shows"
        >
          {filterOptions.map((opt) => {
            const isSelected = activeFilter === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveFilter(opt.value)}
                className={`cat-chip transition-all duration-200 cursor-pointer ${
                  isSelected ? "on" : ""
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Lead Section: Featured Reality Card + 2-Item Stack */}
        <section className="lead">
          {/* Featured Card (Linking directly to the Shreya Kalra article) */}
          <Link
            href="/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2"
            className="feature-card group"
            aria-label="Read full article on Shreya Kalra vs Karan Patel"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
                alt="Shreya Kalra hits back at Karan Patel on Rise and Fall 2"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
              <div className="noise" />
              <span className="badge pink feature-tag z-10">
                🔥 Rise and Fall 2
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Shreya Kalra Hits Back at Karan Patel Over His Reels Comment
              </h2>
              <p>
                Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels.
                Shreya fires back: &ldquo;Stop demeaning people from reality TV.&rdquo; Every reaction caught on cam.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--lime)] font-bold">RISE AND FALL 2</span>
                <span className="dot-sep">◆</span>
                <span>3 MIN READ</span>
                <span className="dot-sep">◆</span>
                <span>1H AGO</span>
              </div>
            </div>
          </Link>

          {/* Right Stack */}
          <div className="stack">
            <Link
              href="/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2"
              className="card m1 group"
            >
              <div className="card-media">
                <span className="badge">New</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white">
                  Housemate’s diary room confession leaks — and it’s messier than expected
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">BIGG BOSS</span>
                  <span className="dot-sep">◆</span>
                  <span>1H AGO</span>
                </div>
              </div>
            </Link>

            <Link
              href="/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2"
              className="card m2 group"
            >
              <div className="card-media">
                <span className="badge pink">Exclusive</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white">
                  Splitsvilla insider spills who’s actually calling the shots this season
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">SPLITSVILLA</span>
                  <span className="dot-sep">◆</span>
                  <span>3H AGO</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Pick Your Show Hub Section */}
        <section className="section" id="pick-your-show">
          <div className="section-head">
            <h2 className="text-white">
              Pick Your <span className="accent">Show</span>
            </h2>
            <span className="text-xs font-mono text-[var(--muted)]">
              CLICK TO FILTER
            </span>
          </div>
          <div className="hub">
            <button
              type="button"
              className="tile text-left cursor-pointer group"
              onClick={() => handleTileClick("Bigg Boss")}
            >
              <b className="group-hover:text-[var(--lime)] transition-colors">Bigg Boss</b>
              <span>RECAPS · EVICTIONS · FAN WARS</span>
            </button>

            <button
              type="button"
              className="tile text-left cursor-pointer group"
              onClick={() => handleTileClick("Splitsvilla")}
            >
              <b className="group-hover:text-[var(--magenta)] transition-colors">Splitsvilla</b>
              <span>DOME DRAMA · COUPLES · EXITS</span>
            </button>

            <button
              type="button"
              className="tile text-left cursor-pointer group"
              onClick={() => handleTileClick("Khatron Ke Khiladi")}
            >
              <b className="group-hover:text-[var(--lime)] transition-colors">Khatron Ke Khiladi</b>
              <span>STUNTS · TAP-OUTS · RECAPS</span>
            </button>

            <button
              type="button"
              className="tile text-left cursor-pointer group"
              onClick={() => handleTileClick("Rise and Fall")}
            >
              <b className="group-hover:text-[var(--magenta)] transition-colors">Rise and Fall</b>
              <span>CLASHES · CALL-OUTS · EXCLUSIVES</span>
            </button>
          </div>
        </section>

        {/* Latest Reality Buzz Grid */}
        <section className="section" id="reality-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                Latest <span className="accent">Reality Buzz</span>
              </h2>
              {activeFilter !== "all" && (
                <p className="text-xs font-mono text-[var(--lime)] mt-1">
                  FILTERED BY: {activeFilter.toUpperCase()} (
                  <button
                    onClick={() => setActiveFilter("all")}
                    className="underline hover:text-white"
                  >
                    SHOW ALL
                  </button>
                  )
                </p>
              )}
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              UPDATED HOURLY
            </span>
          </div>

          <div className="grid">
            {filteredArticles.map((art) => (
              <Link
                key={art.id}
                href={art.href}
                className={`card ${art.mediaClass || "m1"} group flex flex-col justify-between`}
              >
                <div className="card-media relative overflow-hidden">
                  {art.image ? (
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  ) : null}
                  <span
                    className={`badge ${
                      art.badgeType === "pink" ? "pink" : ""
                    } z-10 relative`}
                  >
                    {art.badge}
                  </span>
                </div>
                <div className="card-body">
                  <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                    {art.title}
                  </h3>
                  <div className="meta-row mt-3">
                    <span className="text-[var(--lime)] font-bold uppercase">
                      {art.show}
                    </span>
                    <span className="dot-sep">◆</span>
                    <span>{art.timeAgo}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Housemate Heat Index (Buzz-O-Meter) */}
        <section className="meter-section" id="heat-index">
          <div className="meter-inner">
            <div className="meter-head">
              <h2 className="disp text-white">Housemate Heat Index</h2>
              <p>
                Who’s serving drama, who’s playing it safe — ranked by internet mentions,
                screen time, and fan sentiment across social networks.
              </p>
            </div>
            <div className="meter-list">
              {heatIndex.map((contestant) => (
                <div key={contestant.name} className="meter-row">
                  <div className="meter-name">
                    <span
                      className="meter-avatar"
                      style={{
                        background: contestant.bg,
                        color: contestant.textColor,
                      }}
                    >
                      {contestant.name.charAt(0)}
                    </span>
                    <div>
                      <span className="block font-bold text-white">
                        {contestant.name}
                      </span>
                      <span className="block text-[11px] font-mono text-[var(--muted)]">
                        {contestant.show}
                      </span>
                    </div>
                  </div>
                  <div className="meter-track">
                    <div
                      className="meter-fill"
                      style={{ width: `${contestant.score}%` }}
                    />
                  </div>
                  <div className="meter-score">{contestant.score}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Band: Join the Buzz Squad */}
        <section className="cta-band">
          <h2 className="disp text-white">
            Never miss a <span>plot twist</span> again
          </h2>
          <p>
            Drop your email. Get the juiciest reality updates before your group chat does.
          </p>
          <form className="cta-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address for Reality TV updates"
              required
            />
            <button type="submit" disabled={submitting}>
              {submitting ? "Joining..." : "Join the Buzz Squad"}
            </button>
          </form>
          <div
            className="cta-note"
            id="ctaNote"
            style={{ color: ctaStatus ? "var(--lime)" : "var(--muted)" }}
          >
            {ctaStatus || "NO SPAM. JUST DRAMA. UNSUBSCRIBE ANYTIME."}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
