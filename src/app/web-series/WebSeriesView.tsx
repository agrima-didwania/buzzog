"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface WebSeriesArticle {
  id: string;
  platform: "Netflix" | "Prime Video" | "JioHotstar" | "ZEE5" | "SonyLIV";
  category: string;
  title: string;
  badge: string;
  badgeType?: "pink" | "lime" | "default";
  mediaClass?: string;
  image?: string;
  href: string;
  time: string;
  readOrTime?: string;
  excerpt?: string;
}

const filterCategories = [
  { id: "all", label: "🔥 All" },
  { id: "Netflix", label: "Netflix" },
  { id: "Prime Video", label: "Prime Video" },
  { id: "JioHotstar", label: "JioHotstar" },
  { id: "ZEE5", label: "ZEE5" },
  { id: "SonyLIV", label: "SonyLIV" },
];

const webSeriesArticles: WebSeriesArticle[] = [
  {
    id: "crime-thriller-timeline",
    platform: "Netflix",
    category: "Crime & Suspense",
    title: "New crime thriller has the timeline refusing to sleep",
    badge: "Binge",
    badgeType: "default",
    mediaClass: "m1",
    time: "2H AGO",
    readOrTime: "3 MIN READ",
    href: "#",
    excerpt: "Tight episodes, a cliffhanger every 40 minutes and a twist your group chat will argue about all week.",
  },
  {
    id: "janhvi-peddi-koffee",
    platform: "JioHotstar",
    category: "Talk Show & OTT",
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy: “A Violating Experience” on Koffee With Karan 9",
    badge: "Exclusive Scoop",
    badgeType: "pink",
    mediaClass: "m3",
    image: "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
    time: "HOTSTAR OTT",
    readOrTime: "4 MIN READ",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    excerpt: "From digital invasion to setting boundaries, Janhvi unpacks the intense online debates surrounding Peddi.",
  },
  {
    id: "cast-spills-zee5",
    platform: "ZEE5",
    category: "Cast Scoop",
    title: "Cast spills on the scene fans keep rewatching",
    badge: "Exclusive",
    badgeType: "pink",
    mediaClass: "m4",
    time: "8H AGO",
    readOrTime: "3 MIN READ",
    href: "#",
  },
  {
    id: "episode-5-recap-sonyliv",
    platform: "SonyLIV",
    category: "Recap & Clues",
    title: "Episode 5 recap: the twist nobody saw coming",
    badge: "Recap",
    badgeType: "default",
    mediaClass: "m5",
    time: "10H AGO",
    readOrTime: "4 MIN READ",
    href: "#",
  },
  {
    id: "slow-burn-netflix",
    platform: "Netflix",
    category: "Slow Burn Drama",
    title: "Why this slow-burn series deserves a second look",
    badge: "Hot Take",
    badgeType: "default",
    mediaClass: "m6",
    time: "1D AGO",
    readOrTime: "3 MIN READ",
    href: "#",
  },
  {
    id: "ending-explained-prime",
    platform: "Prime Video",
    category: "Ending Explained",
    title: "Ending explained: what that last scene really means",
    badge: "Explained",
    badgeType: "default",
    mediaClass: "m2",
    time: "1D AGO",
    readOrTime: "5 MIN READ",
    href: "#",
  },
  {
    id: "cliffhanger-finales-jiohotstar",
    platform: "JioHotstar",
    category: "Ranked",
    title: "Cliffhanger season finales, ranked",
    badge: "Trending",
    badgeType: "default",
    mediaClass: "m3",
    time: "2D AGO",
    readOrTime: "3 MIN READ",
    href: "#",
  },
  {
    id: "janhvi-veer-koffee",
    platform: "JioHotstar",
    category: "Hotstar Originals",
    title: "Janhvi Kapoor Drops Veer Pahariya's Unfiltered Concert Advice on Koffee With Karan 9",
    badge: "Season 9",
    badgeType: "pink",
    mediaClass: "m2",
    image: "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
    time: "HOTSTAR OTT",
    readOrTime: "3 MIN READ",
    href: "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
  },
  {
    id: "college-drama-meme-prime",
    platform: "Prime Video",
    category: "Youth Drama",
    title: "The trailer for this college drama is already a meme template",
    badge: "Trailer",
    badgeType: "pink",
    mediaClass: "m2",
    time: "4H AGO",
    readOrTime: "2 MIN READ",
    href: "#",
  },
  {
    id: "season-finale-verdict-hotstar",
    platform: "JioHotstar",
    category: "Series Finale",
    title: "Season finale verdict: did it stick the landing?",
    badge: "Review",
    badgeType: "default",
    mediaClass: "m3",
    time: "6H AGO",
    readOrTime: "4 MIN READ",
    href: "#",
  },
];

export default function WebSeriesView() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [email, setEmail] = useState("");
  const [ctaStatus, setCtaStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

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

  const filteredArticles =
    activeFilter === "all"
      ? webSeriesArticles
      : webSeriesArticles.filter((art) => art.platform === activeFilter);

  return (
    <>
      {/* Main Navigation Header with Web Series Marked Active */}
      <Header activeNav="Web Series" />

      <main className="min-h-screen bg-[var(--ink)]">
        {/* Page Hero Header Banner */}
        <section className="ph-wrap">
          <div className="ph">
            <div className="crumb">
              <Link href="/">HOME</Link> / WEB SERIES
            </div>
            <h1 className="disp">
              Web <em>Series</em>
            </h1>
            <p>
              OTT binge guides, trailers, recaps and ending explainers — Netflix, Prime Video, JioHotstar, ZEE5 and SonyLIV in one place.
            </p>
          </div>
        </section>

        {/* Platform Category Filter Strip */}
        <div className="cat-strip max-w-[1240px] mx-auto px-6 pt-4 pb-2">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`cat-chip magenta-active ${
                activeFilter === cat.id ? "on" : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Lead Section: Featured Crime Thriller + 2 Card Stack */}
        <section className="lead">
          {/* Featured Card */}
          <Link
            href="/janhvi-kapoor-peddi-controversy-koffee-with-karan-9"
            className="feature-card group block"
            aria-label="Read featured story: New crime thriller has the timeline refusing to sleep"
          >
            <div className="feature-media relative overflow-hidden">
              <div className="noise" />
              <span className="badge pink feature-tag z-10">
                📺 Binge Alert
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                New crime thriller has the timeline refusing to sleep
              </h2>
              <p>
                Tight episodes, a cliffhanger every 40 minutes and a twist your group chat will argue about all week.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--magenta)] font-bold">NETFLIX</span>
                <span className="dot-sep">·</span>
                <span>3 MIN READ</span>
                <span className="dot-sep">·</span>
                <span className="text-[var(--lime)] font-bold">STREAMING NOW</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: 2 OTT Highlights */}
          <div className="stack">
            {/* Card 1: College Drama Meme Template */}
            <div className="card m2 group block cursor-pointer">
              <div className="card-media relative overflow-hidden">
                <span className="badge pink z-10 relative">Trailer</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  The trailer for this college drama is already a meme template
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">PRIME VIDEO</span>
                  <span className="dot-sep">◆</span>
                  <span>4H AGO</span>
                </div>
              </div>
            </div>

            {/* Card 2: Koffee With Karan 9 JioHotstar / Season Finale */}
            <Link
              href="/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan"
              className="card m3 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
                  alt="Janhvi Kapoor Drops Veer Pahariya's Unfiltered Concert Advice on Koffee With Karan 9"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge pink z-10 relative">Season 9</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Season finale verdict: did it stick the landing? Inside Koffee With Karan 9
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">JIOHOTSTAR</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Binge Buzz Grid */}
        <section className="section" id="binge-buzz">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                Latest <span className="accent">Binge Buzz</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold uppercase tracking-wider">
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
                  <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16.5px] leading-[1.32]">
                    {art.title}
                  </h3>
                  <div className="meta-row mt-3">
                    <span
                      className={`font-bold uppercase ${
                        art.badgeType === "pink"
                          ? "text-[var(--magenta)]"
                          : "text-[var(--lime)]"
                      }`}
                    >
                      {art.platform}
                    </span>
                    <span className="dot-sep">◆</span>
                    <span>{art.readOrTime || art.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Binge or Skip Radar Section */}
        <section className="section" id="binge-or-skip">
          <div className="section-head">
            <h2>
              Binge <span className="accent">or Skip</span>
            </h2>
          </div>
          <p className="sub text-[14.5px] text-[var(--muted)] -mt-2 mb-5 max-w-[560px]">
            Our no-spoiler verdicts on what’s worth your weekend.
          </p>
          <div className="radar">
            <div className="rr">
              <span className="text-white">Midnight Mumbai · Netflix</span>
              <b className="st ok">BINGE</b>
            </div>
            <div className="rr">
              <span className="text-white">Campus Code · Prime Video</span>
              <b className="st ok">BINGE</b>
            </div>
            <div className="rr">
              <span className="text-white">The Last Dome · JioHotstar</span>
              <b className="st un">WAIT FOR REVIEWS</b>
            </div>
            <div className="rr">
              <span className="text-white">Family Frequency · ZEE5</span>
              <b className="st no">SKIP</b>
            </div>
          </div>
        </section>

        {/* CTA Band: Never miss a plot twist again */}
        <section className="cta-band">
          <h2 className="disp text-white">
            Never miss a <span>plot twist</span> again
          </h2>
          <p>
            Drop your email. Get the juiciest updates before your group chat does.
          </p>
          <form className="cta-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address for Web Series updates"
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
