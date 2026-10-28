"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PollData {
  id: string;
  question: string;
  category: string;
  options: {
    id: string;
    label: string;
    votes: number;
    percentage: number;
  }[];
  totalVotes: number;
}

function getOrCreateVoterToken(): string {
  if (typeof window === "undefined") return "voter_ssr";
  let token = localStorage.getItem("buzz_voter_token");
  if (!token) {
    token = "voter_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 8);
    localStorage.setItem("buzz_voter_token", token);
  }
  return token;
}

export default function Home() {
  // Category Filter State (All + 5 categories: Latest, Exclusive, Reality TV Updates, Bollywood, News)
  const [activeCategory, setActiveCategory] = useState("All");

  // Community Poll State (real persistence via /api/poll)
  const [poll, setPoll] = useState<PollData>({
    id: "diwali-imax-clash-2026",
    question: "Big Screen Clash: Which epic are you watching first on IMAX?",
    category: "IMAX Box Office",
    options: [
      { id: "A", label: "Ramayana: Part 1 (Ranbir & Yash)", votes: 142, percentage: 68 },
      { id: "B", label: "Godzilla Minus Zero (Monsterverse)", votes: 67, percentage: 32 },
    ],
    totalVotes: 209,
  });
  const [pollVoted, setPollVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [votingLoading, setVotingLoading] = useState(false);

  // Newsletter State
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [subscribeError, setSubscribeError] = useState("");

  // Check if user has already voted on this device & fetch latest poll data
  useEffect(() => {
    let isMounted = true;
    const loadPollState = async () => {
      const hasVotedLocal = localStorage.getItem("buzz_poll_voted_diwali-imax-clash-2026");
      try {
        const res = await fetch("/api/poll");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data?.options) {
            setPoll(data);
            if (hasVotedLocal) {
              setPollVoted(true);
              setSelectedOption(hasVotedLocal);
            }
          }
        }
      } catch {
        if (isMounted && hasVotedLocal) {
          setPollVoted(true);
          setSelectedOption(hasVotedLocal);
        }
      }
    };

    loadPollState();
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle Poll Vote Submission
  const handleVote = async (optionId: string) => {
    if (pollVoted || votingLoading) return;
    setVotingLoading(true);

    try {
      const voterToken = getOrCreateVoterToken();

      const res = await fetch("/api/poll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ optionId, voterToken }),
      });

      const data = await res.json();
      if (res.ok && data.poll) {
        setPoll(data.poll);
        setPollVoted(true);
        setSelectedOption(optionId);
        localStorage.setItem("buzz_poll_voted_diwali-imax-clash-2026", optionId);
      }
    } catch (err) {
      console.error("[Poll Vote Error]:", err);
    } finally {
      setVotingLoading(false);
    }
  };

  // Handle Newsletter Join & Welcome Email
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setSubscribeError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Subscription failed. Please check your email and try again.");
      }

      setNewsletterSubmitted(true);
      setSubscribeMessage(data.message || "YOU'RE IN. WELCOME TO THE BUZZ SQUAD 🎉 Check your email!");
      setEmail("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubscribeError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  // The 5 requested categories: Latest, Exclusive, Reality TV Updates, Bollywood & Hollywood, News (plus All filter option)
  const categories = [
    "All",
    "Latest",
    "Exclusive",
    "Reality TV Updates",
    "Bollywood & Hollywood",
    "News",
  ];

  // 5 Verified editorial stories mapped directly to the 5 requested categories (Latest published article in Latest)
  interface EditorialArticle {
    id: string;
    anchorId: string;
    href?: string;
    title: string;
    excerpt: string;
    category: string;
    secondaryCategory?: string;
    displayCategory: string;
    badge: string;
    badgeType: string;
    readTime: string;
    image?: string;
    bgGradient?: string;
    watermarkText?: string;
    watermarkColor?: string;
  }

  const editorialArticles: EditorialArticle[] = [
    {
      id: "shreya-kalra-karan-patel-latest",
      anchorId: "latest-story",
      href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      title: "Shreya Kalra Hits Back at Karan Patel Over His Reels Comment",
      excerpt: "Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya fires back: 'stop demeaning people from reality TV.'",
      category: "Latest",
      displayCategory: "LATEST",
      badge: "Latest",
      badgeType: "lime",
      readTime: "3 MIN READ",
      image: "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
    },
    {
      id: "vijay-rashmika-cybercrime",
      anchorId: "exclusive",
      href: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      title: "Vijay & Rashmika team files cyber crime complaint over KWK 9 online trolling",
      excerpt: "Formal police complaint registered in Hyderabad against malicious fan accounts circulating defamatory morphed clips.",
      category: "Exclusive",
      displayCategory: "EXCLUSIVE",
      badge: "Exclusive",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/celebrity-cybercrime-complaint-thumbnail.jpg",
    },
    {
      id: "shreya-kalra-karan-patel-reality",
      anchorId: "reality-shows",
      href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      title: "Shreya Kalra Hits Back at Karan Patel Over His Reels Comment",
      excerpt: "Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya fires back: 'stop demeaning people from reality TV.'",
      category: "Reality TV Updates",
      displayCategory: "REALITY TV UPDATES",
      badge: "Reality TV Updates",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
    },
    {
      id: "ramayana-la-premiere-buzz",
      anchorId: "bollywood",
      href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      title: "Ramayana LA Premiere: Actors Steal the Red Carpet",
      excerpt: "Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Academy Museum in Los Angeles for the ₹4,000 Cr global premiere.",
      category: "Bollywood & Hollywood",
      displayCategory: "BOLLYWOOD & HOLLYWOOD",
      badge: "🔥 Bollywood & Hollywood",
      badgeType: "pink",
      readTime: "4 MIN READ",
      image: "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
    },
    {
      id: "godzilla-imax-delay",
      anchorId: "industry-news",
      href: "/godzilla-minus-zero-india-release-delayed-ramayana",
      title: "Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir's Ramayana",
      excerpt: "Legendary monster flick shifts India theatrical rollout to give Nitesh Tiwari's mythological epic a clean premium screen window.",
      category: "News",
      displayCategory: "NEWS",
      badge: "News",
      badgeType: "lime",
      readTime: "3 MIN READ",
      image: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    },
  ];

  const visibleArticles =
    activeCategory === "All"
      ? editorialArticles
      : editorialArticles.filter(
          (art) =>
            art.category === activeCategory ||
            (activeCategory === "Bollywood & Hollywood" &&
              (art.category === "Bollywood" || art.category === "Bollywood & Hollywood")) ||
            (activeCategory === "Bollywood" &&
              (art.category === "Bollywood" || art.category === "Bollywood & Hollywood"))
        );

  // Instructed preservation: "and keep the live community poll as it is. dont chnage that"
  const showPollCard = true;

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* ===== NAV ===== */}
      <Header activeNav="Home" />

      {/* ===== HERO: MAIN FEATURED STORY & TRENDING ===== */}
      <main>
        <section className="hero" id="featured">
          {/* 1. Main Featured Story (Commanding Top Story Presentation) */}
          <Link
            href="/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2"
            className="feature-card block transition-all hover:border-[var(--lime)] focus-visible:ring-2 focus-visible:ring-[var(--lime)] group"
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="Read full article: Shreya Kalra Hits Back at Karan Patel Over His Reels Comment"
          >
            <div className="feature-media" style={{ overflow: "hidden", position: "relative" }}>
              <Image
                src="/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
                alt="Shreya Kalra Hits Back at Karan Patel Over His Reels Comment on Rise and Fall 2"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="noise" style={{ pointerEvents: "none" }}></div>
              <div className="feature-tag flex items-center gap-2">
                <span className="badge pink">🔥 Cover Story</span>
                <span className="badge">Rise and Fall 2</span>
              </div>
            </div>
            <div className="feature-body">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[var(--lime)] font-bold tracking-wider uppercase">
                <span>★ TOP STORY · REALITY TV SCOOP</span>
              </div>
              <h1 className="disp" style={{ color: "#fff" }}>
                Shreya Kalra Hits Back at Karan Patel Over His Reels Comment
              </h1>
              <p>
                Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya hits back in viral response: &ldquo;Stop demeaning people just because they come from reality TV.&rdquo; Inside the Rise and Fall 2 clash.
              </p>
              <div className="meta-row mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span>REALITY TV UPDATES</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                  <span className="dot-sep">◆</span>
                  <span style={{ color: "var(--lime)" }}>EDITORIAL DESK</span>
                </div>
                <span className="text-xs font-mono font-bold text-[var(--lime)] hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Story →
                </span>
              </div>
            </div>
          </Link>

          {/* 2. Trending Stories Panel (Genuine, Non-Repeating Stories) */}
          <div className="trend-panel" aria-label="Trending Stories Panel">
            <h2>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--lime)] animate-pulse inline-block"></span>
              ⚡ Trending Stories
            </h2>
            <div className="trend-item">
              <span className="trend-rank">01</span>
              <div className="trend-text">
                <Link
                  href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
                  style={{ color: "inherit" }}
                >
                  <h3>Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi stun Hollywood</h3>
                  <span>BOLLYWOOD · 68K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">02</span>
              <div className="trend-text">
                <Link
                  href="/godzilla-minus-zero-india-release-delayed-ramayana"
                  style={{ color: "inherit" }}
                >
                  <h3>Godzilla Minus Zero reportedly delayed by 2 weeks over Ramayana IMAX clash</h3>
                  <span>CINEMA · 64K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">03</span>
              <div className="trend-text">
                <Link
                  href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
                  style={{ color: "inherit" }}
                >
                  <h3>Vijay & Rashmika team takes legal action against fake posts & KWK 9 trolling</h3>
                  <span>EXCLUSIVE · 52K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">04</span>
              <div className="trend-text">
                <h3>Splitsvilla&apos;s most talked-about couple just called it quits on camera</h3>
                <span>SPLITSVILLA · 38K REACTIONS</span>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">05</span>
              <div className="trend-text">
                <h3>Bigg Boss Weekend Ka Vaar: Nominations ignite fiery house confrontations</h3>
                <span>BIGG BOSS · 45K REACTIONS</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LATEST NEWS & FRESH BUZZ SECTION ===== */}
        <section className="section" id="news">
          <div className="section-head">
            <div>
              <h2>
                Fresh <span className="accent">Buzz</span> & Latest News
              </h2>
              <p className="text-xs font-mono text-[var(--muted)] mt-1 tracking-wider uppercase">
                Verified reporting across Bollywood, Cinema & Reality TV
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold hidden sm:inline-block">
              UPDATED HOURLY
            </span>
          </div>

          {/* Category Filter Strip: The 5 Requested Categories (Latest, Exclusive, Reality TV Updates, Bollywood, News) */}
          <div className="cat-strip mb-6" id="categories" role="tablist" aria-label="Filter Buzz by Category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(activeCategory === cat ? "All" : cat)}
                className={`cat-chip ${activeCategory === cat ? "on" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid">
            {/* Editorial Article Cards */}
            {visibleArticles.map((article) => {
              const cardContent = (
                <>
                  <div
                    className="card-media relative overflow-hidden"
                    style={{
                      background: article.bgGradient || undefined,
                      position: "relative",
                    }}
                  >
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    {article.watermarkText && (
                      <>
                        <div
                          className={`absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center font-anton text-7xl ${article.watermarkColor} font-extrabold select-none tracking-widest`}
                        >
                          {article.watermarkText}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111115] to-transparent pointer-events-none" />
                      </>
                    )}
                    <span className={`badge ${article.badgeType === "pink" ? "pink" : ""}`}>
                      {article.badge}
                    </span>
                  </div>
                  <div className="card-body">
                    <h3>{article.title}</h3>
                    <p className="card-excerpt">{article.excerpt}</p>
                    <div className="meta-row">
                      <span>{article.displayCategory}</span>
                      <span className="dot-sep">◆</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </>
              );

              if (article.href) {
                return (
                  <Link
                    key={article.id}
                    id={article.anchorId}
                    href={article.href}
                    className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={article.id}
                  id={article.anchorId}
                  className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
                >
                  {cardContent}
                </div>
              );
            })}

            {/* REAL COMMUNITY POLL CARD (Persisted via /api/poll) */}
            {showPollCard && (
              <div className="poll-card" id="polls">
                <span className="badge pink">🗳️ Live Community Poll</span>
                <h3>{poll.question}</h3>

                {poll.options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      className={`poll-opt ${isSelected ? "selected" : ""}`}
                      onClick={() => handleVote(opt.id)}
                      disabled={pollVoted || votingLoading}
                      aria-label={`Vote for ${opt.label}. Currently at ${opt.percentage}%`}
                    >
                      <div className="poll-opt-label">
                        <span>{opt.label}</span>
                        <span className="pct font-mono font-bold">{opt.percentage}%</span>
                      </div>
                      <div className="poll-bar-track">
                        <div
                          className="poll-bar-fill"
                          style={{
                            width: `${opt.percentage}%`,
                            background: isSelected ? "var(--lime)" : undefined,
                          }}
                        ></div>
                      </div>
                    </button>
                  );
                })}

                <div className="poll-votes font-mono text-xs text-[var(--muted)] mt-2">
                  {poll.totalVotes.toLocaleString()} verified community votes recorded
                </div>

                {pollVoted && (
                  <div
                    className="poll-locked-msg text-xs text-[var(--lime)] font-mono font-bold mt-2"
                    role="status"
                  >
                    ✓ Vote recorded — thanks for having your say!
                  </div>
                )}

                <div className="meta-row mt-auto pt-3 border-t border-white/[0.06]">
                  <span>COMMUNITY FORUM</span>
                  <span className="dot-sep">◆</span>
                  <span>LIVE PERSISTED</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ===== BUZZ-O-METER (Transparent Editorial Heat Index) ===== */}
        <section className="meter-section" id="buzz-o-meter">
          <div className="meter-inner">
            <div className="meter-head">
              <h2 className="disp">The Buzz-O-Meter</h2>
              <p>
                Weekly Entertainment Heat Index — measured by search volume, social sentiment & box office tracking.
              </p>
            </div>
            <div className="meter-list">
              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">01</span>
                  <span className="meter-avatar" style={{ background: "var(--lime)" }}>
                    R
                  </span>
                  <span>Ramayana in LA World Premiere</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "98%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">98</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">02</span>
                  <span className="meter-avatar" style={{ background: "var(--magenta)" }}>
                    G
                  </span>
                  <span>Godzilla Minus Zero IMAX Release</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "92%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">92</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">03</span>
                  <span className="meter-avatar" style={{ background: "#8b6fe0" }}>
                    V
                  </span>
                  <span>Vijay & Rashmika Legal Complaint</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "87%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">87</div>
              </div>

              <div className="meter-row" id="bigg-boss">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">04</span>
                  <span className="meter-avatar" style={{ background: "#e08b6f" }}>
                    B
                  </span>
                  <span>Bigg Boss Weekend Nominations</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "81%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">81</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">05</span>
                  <span className="meter-avatar" style={{ background: "#6fd0e0" }}>
                    S
                  </span>
                  <span>Splitsvilla Elimination Heat</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "74%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">74</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEWSLETTER CTA BAND ===== */}
        <section className="cta-band" aria-labelledby="ctaHeading">
          <h2 className="disp" id="ctaHeading">
            Never miss a <span>plot twist</span> again
          </h2>
          <p>Drop your email. Get the juiciest updates before your group chat does.</p>
          <form className="cta-form" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletterEmail" className="sr-only">
              Email Address for Buzz Squad Newsletter
            </label>
            <input
              id="newsletterEmail"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (subscribeError) setSubscribeError("");
              }}
              placeholder="Enter your email address..."
              required
              disabled={submitting}
              className="focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
            />
            <button
              type="submit"
              disabled={submitting}
              className="focus-visible:ring-2 focus-visible:ring-[var(--lime)] cursor-pointer"
            >
              {submitting ? "Joining..." : "Join the Buzz Squad"}
            </button>
          </form>
          <div
            className="cta-note"
            id="ctaNote"
            role="status"
            aria-live="polite"
            style={
              subscribeError
                ? { color: "var(--magenta)", fontWeight: "bold" }
                : newsletterSubmitted
                ? { color: "var(--lime)", fontWeight: "bold" }
                : {}
            }
          >
            {subscribeError
              ? `⚠️ ${subscribeError}`
              : newsletterSubmitted
              ? subscribeMessage
              : "NO SPAM. JUST DRAMA. UNSUBSCRIBE ANYTIME."}
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
