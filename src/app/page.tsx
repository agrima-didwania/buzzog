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
  // Category Filter State
  const [activeCategory, setActiveCategory] = useState("🔥 All Buzz");

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

  const categories = [
    "🔥 All Buzz",
    "Bigg Boss",
    "Splitsvilla",
    "Khatron Ke Khiladi",
    "Bollywood",
    "Web Series",
    "Videos",
  ];

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* ===== NAV ===== */}
      <Header activeNav="Home" />

      {/* ===== HERO ===== */}
      <main>
        <section className="hero">
          <Link
            href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
            className="feature-card block transition-all hover:border-[var(--magenta)] focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="Read full article: Ramayana LA Premiere: Actors Steal the Red Carpet"
          >
            <div className="feature-media" style={{ overflow: "hidden", position: "relative" }}>
              <Image
                src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
                alt="Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi on the red carpet"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="noise" style={{ pointerEvents: "none" }}></div>
              <span className="badge pink feature-tag">🔥 Global Premiere</span>
            </div>
            <div className="feature-body">
              <h1 className="disp" style={{ color: "#fff" }}>
                Ramayana LA Premiere: Actors Steal the Red Carpet
              </h1>
              <p>
                Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Ramayana LA premiere. See who attended, what they wore, and the release date.
              </p>
              <div className="meta-row">
                <span>BOLLYWOOD & CINEMA</span>
                <span className="dot-sep">◆</span>
                <span>4 MIN READ</span>
                <span className="dot-sep">◆</span>
                <span style={{ color: "var(--lime)" }}>EDITORIAL DESK</span>
              </div>
            </div>
          </Link>

          <div className="trend-panel" aria-label="Trending Stories Panel">
            <h2>⚡ Trending Right Now</h2>
            <div className="trend-item">
              <span className="trend-rank">01</span>
              <div className="trend-text">
                <Link
                  href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
                  style={{ color: "inherit" }}
                >
                  <h3>Ramayana LA Premiere: Ranbir Kapoor, Yash & Sai Pallavi stun Hollywood</h3>
                  <span>BOLLYWOOD · 85K REACTIONS</span>
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
                  <span>BOLLYWOOD · 52K REACTIONS</span>
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
                <h3>KKK contestant&apos;s stunt fail has the internet holding its breath</h3>
                <span>KHATRON KE KHILADI · 29K REACTIONS</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CATEGORY STRIP ===== */}
        <div className="cat-strip" id="categories" role="tablist" aria-label="Filter Buzz by Category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`cat-chip ${activeCategory === cat ? "on" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== LATEST GRID ===== */}
        <section className="section" id="news">
          <div className="section-head">
            <h2>
              Fresh <span className="accent">Buzz</span>
            </h2>
            <span className="text-xs font-mono text-[var(--muted)]">UPDATED HOURLY</span>
          </div>
          <div className="grid">
            {/* Card 1: Ramayana LA Premiere */}
            <Link
              href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
              className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card-media" style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
                  alt="Ramayana LA Premiere Red Carpet"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  style={{ objectFit: "cover" }}
                />
                <span className="badge pink">Hollywood Gala</span>
              </div>
              <div className="card-body">
                <h3>Inside Ramayana’s LA Premiere: Jada Pinkett Smith, Hollywood stars & ₹4,000 Cr buzz</h3>
                <div className="meta-row">
                  <span>BOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>4 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Godzilla Blog Post */}
            <Link
              href="/godzilla-minus-zero-india-release-delayed-ramayana"
              className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card-media" style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
                  alt="Godzilla Minus Zero delayed"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  style={{ objectFit: "cover" }}
                />
                <span className="badge">Box Office</span>
              </div>
              <div className="card-body">
                <h3>Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir&apos;s Ramayana</h3>
                <div className="meta-row">
                  <span>CINEMA</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Card 3: Vijay & Rashmika Live Story */}
            <Link
              href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
              className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="card-media" style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/celebrity-cybercrime-complaint-thumbnail.jpg"
                  alt="Vijay and Rashmika cyber crime complaint"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  style={{ objectFit: "cover" }}
                />
                <span className="badge pink">Exclusive</span>
              </div>
              <div className="card-body">
                <h3>Vijay & Rashmika team files cyber crime complaint over KWK 9 online trolling</h3>
                <div className="meta-row">
                  <span>BOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* REAL COMMUNITY POLL CARD (Persisted via /api/poll) */}
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
                <div className="poll-locked-msg text-xs text-[var(--lime)] font-mono font-bold mt-2" role="status">
                  ✓ Vote recorded — thanks for having your say!
                </div>
              )}
            </div>

            <div className="card m4 focus-visible:ring-2 focus-visible:ring-[var(--lime)]" id="khatron-ke-khiladi">
              <div className="card-media" style={{ background: "linear-gradient(135deg, #1f2937, #111827)", position: "relative" }}>
                <span className="badge">Khatron Ke Khiladi</span>
              </div>
              <div className="card-body">
                <h3>KKK&apos;s scariest stunt this season made two contestants tap out instantly</h3>
                <div className="meta-row">
                  <span>KHATRON KE KHILADI</span>
                  <span className="dot-sep">◆</span>
                  <span>EPISODE RECAP</span>
                </div>
              </div>
            </div>

            <div className="card m5 focus-visible:ring-2 focus-visible:ring-[var(--lime)]" id="splitsvilla">
              <div className="card-media" style={{ background: "linear-gradient(135deg, #371f29, #1a0f14)", position: "relative" }}>
                <span className="badge pink">Dome Drama</span>
              </div>
              <div className="card-body">
                <h3>Splitsvilla dome session breakdown: ideal match broken and power shifted</h3>
                <div className="meta-row">
                  <span>SPLITSVILLA</span>
                  <span className="dot-sep">◆</span>
                  <span>UNFILTERED</span>
                </div>
              </div>
            </div>
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
                  <span className="meter-avatar" style={{ background: "var(--lime)" }}>
                    R
                  </span>
                  Ramayana in LA World Premiere
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "98%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">98</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="meter-avatar" style={{ background: "var(--magenta)" }}>
                    G
                  </span>
                  Godzilla Minus Zero IMAX Release
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "92%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">92</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="meter-avatar" style={{ background: "#8b6fe0" }}>
                    V
                  </span>
                  Vijay & Rashmika Legal Complaint
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "87%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">87</div>
              </div>

              <div className="meter-row" id="bigg-boss">
                <div className="meter-name">
                  <span className="meter-avatar" style={{ background: "#e08b6f" }}>
                    B
                  </span>
                  Bigg Boss Weekend Nominations
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "81%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">81</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="meter-avatar" style={{ background: "#6fd0e0" }}>
                    S
                  </span>
                  Splitsvilla Elimination Heat
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
              placeholder="you@email.com"
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
