"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

export default function Home() {
  // Category Filter State
  const [activeCategory, setActiveCategory] = useState("🔥 All Buzz");

  // Poll State
  const [pollVoted, setPollVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"A" | "B" | null>(null);
  const [pollCounts, setPollCounts] = useState({
    A: 62,
    B: 38,
    total: 14208,
  });

  // Newsletter State
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [subscribeError, setSubscribeError] = useState("");

  // Handle Poll Vote
  const handleVote = (option: "A" | "B") => {
    if (pollVoted) return;
    setSelectedOption(option);
    setPollVoted(true);
    setPollCounts((prev) => {
      const newTotal = prev.total + 1;
      return {
        A: option === "A" ? 63 : 61,
        B: option === "B" ? 39 : 37,
        total: newTotal,
      };
    });
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
    "Reality Shows",
    "Bollywood",
    "Movies",
    "Web Series",
    "News",
    "Videos",
  ];

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* ===== TICKER ===== */}
      <Ticker />

      {/* ===== NAV ===== */}
      <Header activeNav="Home" />

      {/* ===== HERO ===== */}
      <section className="hero">
        <Link
          href="/godzilla-minus-zero-india-release-delayed-ramayana"
          className="feature-card block transition-all hover:border-[var(--magenta)]"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="feature-media" style={{ overflow: "hidden", position: "relative" }}>
            <Image
              src="/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
              alt="Godzilla Minus Zero India Release Delayed vs Ramayana IMAX Clash"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="noise" style={{ pointerEvents: "none" }}></div>
            <span className="badge pink feature-tag">🔥 Breaking Exclusive</span>
          </div>
          <div className="feature-body">
            <h1 className="disp" style={{ color: "#fff" }}>
              Godzilla Minus Zero India Release Delayed: Skips Ramayana Clash
            </h1>
            <p>
              Godzilla Minus Zero’s India release is reportedly delayed by two weeks. Here is why IMAX screens are the reason and what it means for Ramayana.
            </p>
            <div className="meta-row">
              <span>MOVIES</span>
              <span className="dot-sep">◆</span>
              <span>3 MIN READ</span>
              <span className="dot-sep">◆</span>
              <span style={{ color: "var(--lime)" }}>JUST NOW</span>
            </div>
          </div>
        </Link>

        <div className="trend-panel">
          <h2>⚡ Trending Right Now</h2>
          <div className="trend-item">
            <span className="trend-rank">01</span>
            <div className="trend-text">
              <Link
                href="/godzilla-minus-zero-india-release-delayed-ramayana"
                style={{ color: "inherit" }}
              >
                <h3>Godzilla Minus Zero reportedly delayed by 2 weeks over Ramayana IMAX clash</h3>
                <span>MOVIES · 64K REACTIONS</span>
              </Link>
            </div>
          </div>
          <div className="trend-item">
            <span className="trend-rank">02</span>
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
            <span className="trend-rank">03</span>
            <div className="trend-text">
              <h3>Splitsvilla&apos;s most talked-about couple just called it quits on camera</h3>
              <span>SPLITSVILLA · 38K REACTIONS</span>
            </div>
          </div>
          <div className="trend-item">
            <span className="trend-rank">04</span>
            <div className="trend-text">
              <h3>KKK contestant&apos;s stunt fail has the internet holding its breath</h3>
              <span>KHATRON KE KHILADI · 29K REACTIONS</span>
            </div>
          </div>
          <div className="trend-item">
            <span className="trend-rank">05</span>
            <div className="trend-text">
              <h3>Bigg Boss task turns personal — captaincy war gets ugly fast</h3>
              <span>BIGG BOSS · 19K REACTIONS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY STRIP ===== */}
      <div className="cat-strip" id="categories">
        {categories.map((cat) => (
          <button
            key={cat}
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
          <a href="#">View all →</a>
        </div>
        <div className="grid">
          {/* Card 1: Godzilla Blog Post */}
          <Link
            href="/godzilla-minus-zero-india-release-delayed-ramayana"
            className="card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card-media" style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src="/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
                alt="Godzilla Minus Zero delayed"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="badge pink">Box Office</span>
            </div>
            <div className="card-body">
              <h3>Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir&apos;s Ramayana</h3>
              <div className="meta-row">
                <span>MOVIES</span>
                <span className="dot-sep">◆</span>
                <span>JUST NOW</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Vijay & Rashmika Live Story */}
          <Link
            href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
            className="card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card-media" style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src="/images/celebrity-cybercrime-complaint-thumbnail.jpg"
                alt="Vijay and Rashmika cyber crime complaint"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="badge">Breaking</span>
            </div>
            <div className="card-body">
              <h3>Vijay & Rashmika team files cyber crime complaint over KWK 9 online trolling</h3>
              <div className="meta-row">
                <span>BOLLYWOOD</span>
                <span className="dot-sep">◆</span>
                <span>2H AGO</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Celebrity Couple Insider */}
          <Link
            href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
            className="card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card-media" style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src="/images/celebrity-couple-amid-cybercrime-buzz.jpg"
                alt="Vijay and Rashmika amid cybercrime buzz"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="badge pink">Exclusive</span>
            </div>
            <div className="card-body">
              <h3>Vijay & Rashmika legal team: &ldquo;This is not about silencing criticism&rdquo;</h3>
              <div className="meta-row">
                <span>BOLLYWOOD</span>
                <span className="dot-sep">◆</span>
                <span>3H AGO</span>
              </div>
            </div>
          </Link>

          {/* POLL CARD */}
          <div className="poll-card" id="polls">
            <span className="badge pink">🗳️ Vote Now</span>
            <h3>Who&apos;s walking out this weekend?</h3>

            <button
              type="button"
              className={`poll-opt ${selectedOption === "A" ? "selected" : ""}`}
              onClick={() => handleVote("A")}
              disabled={pollVoted}
            >
              <div className="poll-opt-label">
                <span>Contestant A</span>
                <span className="pct">{pollCounts.A}%</span>
              </div>
              <div className="poll-bar-track">
                <div className="poll-bar-fill" style={{ width: `${pollCounts.A}%` }}></div>
              </div>
            </button>

            <button
              type="button"
              className={`poll-opt ${selectedOption === "B" ? "selected" : ""}`}
              onClick={() => handleVote("B")}
              disabled={pollVoted}
            >
              <div className="poll-opt-label">
                <span>Contestant B</span>
                <span className="pct">{pollCounts.B}%</span>
              </div>
              <div className="poll-bar-track">
                <div className="poll-bar-fill" style={{ width: `${pollCounts.B}%` }}></div>
              </div>
            </button>

            <div className="poll-votes">
              {pollCounts.total.toLocaleString()} votes so far
            </div>

            {pollVoted && (
              <div className="poll-locked-msg">
                ✓ Vote counted — thanks for playing!
              </div>
            )}
          </div>

          <div className="card m4">
            <div className="card-media">
              <span className="badge">Trending</span>
            </div>
            <div className="card-body">
              <h3>KKK&apos;s scariest stunt this season made two contestants tap out instantly</h3>
              <div className="meta-row">
                <span>KKK</span>
                <span className="dot-sep">◆</span>
                <span>5H AGO</span>
              </div>
            </div>
          </div>

          <div className="card m5">
            <div className="card-media">
              <span className="badge pink">Hot Take</span>
            </div>
            <div className="card-body">
              <h3>Unpopular opinion: this &quot;villain&quot; edit might be the most unfair one yet</h3>
              <div className="meta-row">
                <span>OPINION</span>
                <span className="dot-sep">◆</span>
                <span>6H AGO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUZZ-O-METER ===== */}
      <section className="meter-section" id="buzz-o-meter">
        <div className="meter-inner">
          <div className="meter-head">
            <h2 className="disp">The Buzz-O-Meter</h2>
            <p>
              Who&apos;s serving drama, who&apos;s playing it safe — ranked live by how much the
              internet is talking.
            </p>
          </div>
          <div className="meter-list">
            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "var(--lime)" }}>
                  G
                </span>
                Godzilla vs Ramayana
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "99%" }}></div>
              </div>
              <div className="meter-score">99</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "var(--magenta)" }}>
                  V
                </span>
                Vijay & Rashmika
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "94%" }}></div>
              </div>
              <div className="meter-score">94</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "#8b6fe0" }}>
                  K
                </span>
                Kabir
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "74%" }}></div>
              </div>
              <div className="meter-score">74</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "#e08b6f" }}>
                  M
                </span>
                Meher
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "58%" }}></div>
              </div>
              <div className="meter-score">58</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "#6fd0e0" }}>
                  Z
                </span>
                Zeeshan
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "41%" }}></div>
              </div>
              <div className="meter-score">41</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="cta-band">
        <h2 className="disp">
          Never miss a <span>plot twist</span> again
        </h2>
        <p>Drop your email. Get the juiciest updates before your group chat does.</p>
        <form className="cta-form" onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (subscribeError) setSubscribeError("");
            }}
            placeholder="you@email.com"
            required
            disabled={submitting}
          />
          <button type="submit" disabled={submitting}>
            {submitting ? "Joining..." : "Join the Buzz Squad"}
          </button>
        </form>
        <div
          className="cta-note"
          id="ctaNote"
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

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
