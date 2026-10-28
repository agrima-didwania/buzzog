"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      {/* ===== NAV ===== */}
      <Header activeNav="Home" />

      {/* ===== HERO ===== */}
      <section className="hero">
        <Link
          href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
          className="feature-card block transition-all hover:border-[var(--magenta)]"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="feature-media" style={{ overflow: "hidden", position: "relative" }}>
            <Image
              src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
              alt="Ramayana LA Premiere: Ranbir Kapoor, Yash and Sai Pallavi"
              fill
              priority
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
              <span>MOVIES</span>
              <span className="dot-sep">◆</span>
              <span>4 MIN READ</span>
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
                href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
                style={{ color: "inherit" }}
              >
                <h3>Ramayana LA Premiere: Ranbir Kapoor, Yash & Sai Pallavi stun Hollywood</h3>
                <span>MOVIES · 85K REACTIONS</span>
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
                <span>MOVIES · 64K REACTIONS</span>
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
          {/* Card 1: Ramayana LA Premiere */}
          <Link
            href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
            className="card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card-media" style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
                alt="Ramayana LA Premiere Red Carpet"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className="badge pink">Hollywood Gala</span>
            </div>
            <div className="card-body">
              <h3>Inside Ramayana’s LA Premiere: Jada Pinkett Smith, Hollywood stars & ₹4,000 Cr buzz</h3>
              <div className="meta-row">
                <span>MOVIES</span>
                <span className="dot-sep">◆</span>
                <span>JUST NOW</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Godzilla Blog Post */}
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
              <span className="badge">Box Office</span>
            </div>
            <div className="card-body">
              <h3>Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir&apos;s Ramayana</h3>
              <div className="meta-row">
                <span>MOVIES</span>
                <span className="dot-sep">◆</span>
                <span>2H AGO</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Vijay & Rashmika Live Story */}
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
              <span className="badge pink">Exclusive</span>
            </div>
            <div className="card-body">
              <h3>Vijay & Rashmika team files cyber crime complaint over KWK 9 online trolling</h3>
              <div className="meta-row">
                <span>BOLLYWOOD</span>
                <span className="dot-sep">◆</span>
                <span>4H AGO</span>
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
                <span>6H AGO</span>
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
                <span>7H AGO</span>
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
                  R
                </span>
                Ramayana in LA
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "99%" }}></div>
              </div>
              <div className="meter-score">99</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "var(--magenta)" }}>
                  G
                </span>
                Godzilla vs Ramayana
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "95%" }}></div>
              </div>
              <div className="meter-score">95</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "#8b6fe0" }}>
                  V
                </span>
                Vijay & Rashmika
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "88%" }}></div>
              </div>
              <div className="meter-score">88</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "#e08b6f" }}>
                  K
                </span>
                Kabir
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "65%" }}></div>
              </div>
              <div className="meter-score">65</div>
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
