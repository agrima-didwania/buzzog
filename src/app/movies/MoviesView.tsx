"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MovieArticle {
  id: string;
  category: "Box Office" | "Releases" | "Reviews";
  title: string;
  badge: string;
  badgeType?: "pink" | "lime" | "default";
  mediaClass?: string;
  image?: string;
  href: string;
  readOrTime: string;
}

const movieArticles: MovieArticle[] = [
  {
    id: "opening-weekend-numbers",
    category: "Box Office",
    title: "Opening weekend numbers: what’s working and what’s not",
    badge: "Trending",
    badgeType: "default",
    mediaClass: "m5",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "10H AGO",
  },
  {
    id: "trailer-breakdown-90-sec",
    category: "Releases",
    title: "Trailer breakdown: every detail you missed in the first 90 seconds",
    badge: "New",
    badgeType: "pink",
    mediaClass: "m2",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "1D AGO",
  },
  {
    id: "unpopular-opinion-sequel",
    category: "Reviews",
    title: "Unpopular opinion: the sequel is better than the original",
    badge: "Hot Take",
    badgeType: "default",
    mediaClass: "m6",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "1D AGO",
  },
  {
    id: "big-releases-month-calendar",
    category: "Releases",
    title: "Every big release landing this month, in one scroll",
    badge: "Calendar",
    badgeType: "default",
    mediaClass: "m3",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "2D AGO",
  },
  {
    id: "why-clashes-are-back",
    category: "Box Office",
    title: "Why clashes are back — and who wins when two epics share screens",
    badge: "Explained",
    badgeType: "default",
    mediaClass: "m1",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "2D AGO",
  },
  {
    id: "godzilla-minus-zero-skips-diwali",
    category: "Box Office",
    title: "Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir’s Ramayana",
    badge: "Box Office",
    badgeType: "default",
    mediaClass: "m4",
    image: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "3 MIN READ",
  },
];

export default function MoviesView() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [email, setEmail] = useState("");
  const [ctaStatus, setCtaStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Poll state
  const [pollVotedIndex, setPollVotedIndex] = useState<number | null>(null);
  const [pollVotes, setPollVotes] = useState({
    ramayana: 142,
    godzilla: 67,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("buzzog_movies_poll_vote");
      if (saved !== null) {
        setPollVotedIndex(parseInt(saved, 10));
      }
    } catch {}
  }, []);

  const totalVotes = pollVotes.ramayana + pollVotes.godzilla;
  const ramayanaPct = Math.round((pollVotes.ramayana / totalVotes) * 100);
  const godzillaPct = 100 - ramayanaPct;

  const handleVote = (index: number) => {
    if (pollVotedIndex !== null) return;
    setPollVotedIndex(index);
    if (index === 0) {
      setPollVotes((prev) => ({ ...prev, ramayana: prev.ramayana + 1 }));
    } else {
      setPollVotes((prev) => ({ ...prev, godzilla: prev.godzilla + 1 }));
    }
    try {
      localStorage.setItem("buzzog_movies_poll_vote", index.toString());
    } catch {}
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

  const filteredArticles =
    selectedFilter === "all"
      ? movieArticles
      : movieArticles.filter((art) => art.category === selectedFilter);

  return (
    <>
      {/* Main Navigation Header with Movies Marked Active */}
      <Header activeNav="Movies" />

      <main className="min-h-screen bg-[var(--ink)]">
        {/* Page Hero Header Banner with Category Filter Chips */}
        <section className="ph-wrap">
          <div className="ph">
            <div className="crumb">
              <Link href="/">HOME</Link> / MOVIES
            </div>
            <h1 className="disp">
              <em>Movies</em>
            </h1>
            <p>
              Trailers, box office, clashes and spoiler-free verdicts — what to watch and what to skip.
            </p>
            <div className="cat-strip" role="tablist" aria-label="Filter movies by category">
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === "all"}
                className={`cat-chip ${selectedFilter === "all" ? "on" : ""}`}
                onClick={() => setSelectedFilter("all")}
              >
                🔥 All
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === "Releases"}
                className={`cat-chip ${selectedFilter === "Releases" ? "on" : ""}`}
                onClick={() => setSelectedFilter("Releases")}
              >
                Releases
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === "Box Office"}
                className={`cat-chip ${selectedFilter === "Box Office" ? "on" : ""}`}
                onClick={() => setSelectedFilter("Box Office")}
              >
                Box Office
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === "Reviews"}
                className={`cat-chip ${selectedFilter === "Reviews" ? "on" : ""}`}
                onClick={() => setSelectedFilter("Reviews")}
              >
                Reviews
              </button>
            </div>
          </div>
        </section>

        {/* Lead Section: Featured Movie Card + 2-Item Stack */}
        <section className="lead">
          {/* Featured Card (Godzilla Minus Zero Delay over Ramayana IMAX) */}
          <Link
            href="/godzilla-minus-zero-india-release-delayed-ramayana"
            className="feature-card group block"
            aria-label="Read full article: Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ramayana"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
                alt="Godzilla Minus Zero and Ramayana IMAX Clash"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
              <div className="noise" />
              <span className="badge pink feature-tag z-10">
                🎬 Box Office
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ramayana
              </h2>
              <p>
                Reports say the Monsterverse film is delayed by two weeks, handing Ranbir’s Ramayana the IMAX screens to itself.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--lime)] font-bold">CINEMA</span>
                <span className="dot-sep">·</span>
                <span>3 MIN READ</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: Global Premiere + Review */}
          <div className="stack">
            {/* Ramayana LA Premiere Card */}
            <Link
              href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
              className="card m3 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
                  alt="Ramayana LA Premiere: Jada Pinkett Smith and ₹4,000 Cr buzz"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
                <span className="badge pink z-10 relative">Global Premiere</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Inside Ramayana’s LA Premiere: Jada Pinkett Smith, Hollywood stars &amp; ₹4,000 Cr buzz
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">RELEASES</span>
                  <span className="dot-sep">◆</span>
                  <span>4 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Spoiler-free verdict Card */}
            <Link
              href="/godzilla-minus-zero-india-release-delayed-ramayana"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <span className="badge z-10 relative">Review</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Our spoiler-free verdict: is this weekend’s big release worth the ticket?
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">REVIEWS</span>
                  <span className="dot-sep">◆</span>
                  <span>8H AGO</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Movie Buzz Grid */}
        <section className="section" id="movie-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                Latest <span className="accent">Movie Buzz</span>
              </h2>
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
                      {art.category}
                    </span>
                    <span className="dot-sep">◆</span>
                    <span>{art.readOrTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Release Radar & Live Community Poll Section */}
        <section className="section" id="release-radar">
          <div className="two">
            {/* Left: Release Radar */}
            <div>
              <div className="section-head">
                <h2 className="text-white">
                  Release <span className="accent">Radar</span>
                </h2>
              </div>
              <p className="sub">The big-screen face-offs on our watchlist.</p>
              <div className="radar">
                <div className="rr">
                  <span>Ramayana: Part 1 — solo IMAX run</span>
                  <b className="st ok">IMAX</b>
                </div>
                <div className="rr">
                  <span>Godzilla Minus Zero — reportedly pushed by 2 weeks</span>
                  <b className="st un">IMAX · DELAYED</b>
                </div>
              </div>
            </div>

            {/* Right: Live Community Poll */}
            <div className="poll-card" data-voted={pollVotedIndex !== null ? "1" : undefined}>
              <span className="badge pink">🗳️ Live Community Poll</span>
              <h3>Big Screen Clash: Which epic are you watching first on IMAX?</h3>

              {/* Option 1: Ramayana */}
              <div
                className={`poll-opt transition-all ${
                  pollVotedIndex === 0
                    ? "ring-2 ring-[var(--lime)] rounded-[12px] bg-[rgba(111,207,74,0.12)]"
                    : ""
                }`}
                onClick={() => handleVote(0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleVote(0);
                }}
                aria-label="Vote for Ramayana: Part 1"
              >
                <div className="poll-opt-label">
                  <span className="font-semibold text-white">Ramayana: Part 1 (Ranbir &amp; Yash)</span>
                  <span className="pct font-mono text-[var(--lime)] font-bold">{ramayanaPct}%</span>
                </div>
                <div className="poll-bar-track">
                  <div
                    className="poll-bar-fill"
                    style={{ width: `${ramayanaPct}%` }}
                  />
                </div>
              </div>

              {/* Option 2: Godzilla */}
              <div
                className={`poll-opt transition-all ${
                  pollVotedIndex === 1
                    ? "ring-2 ring-[var(--lime)] rounded-[12px] bg-[rgba(111,207,74,0.12)]"
                    : ""
                }`}
                onClick={() => handleVote(1)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleVote(1);
                }}
                aria-label="Vote for Godzilla Minus Zero"
              >
                <div className="poll-opt-label">
                  <span className="font-semibold text-white">Godzilla Minus Zero (Monsterverse)</span>
                  <span className="pct font-mono text-[var(--lime)] font-bold">{godzillaPct}%</span>
                </div>
                <div className="poll-bar-track">
                  <div
                    className="poll-bar-fill"
                    style={{ width: `${godzillaPct}%` }}
                  />
                </div>
              </div>

              <div className="poll-votes">
                {totalVotes} verified community votes
              </div>

              {pollVotedIndex !== null && (
                <div className="poll-locked-msg text-[var(--lime)] block mt-2 text-xs font-mono font-bold">
                  ✓ Vote counted — thanks for playing!
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Band: Never miss a plot twist again */}
        <section className="cta-band">
          <h2 className="disp text-white">
            Never miss a <span>plot twist</span> again
          </h2>
          <p>
            Drop your email. Get the juiciest movie updates, trailers and box office scoops before your group chat does.
          </p>
          <form className="cta-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address for Movies updates"
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
