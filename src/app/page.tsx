"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // Navigation & Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

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

  // Handle Newsletter Join
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterSubmitted(true);
    setEmail("");
  };

  const navLinks = [
    "Home",
    "Bigg Boss",
    "Splitsvilla",
    "Khatron Ke Khiladi",
    "Bollywood",
    "Web Series",
  ];

  const categories = [
    "🔥 All Buzz",
    "Bigg Boss",
    "Splitsvilla",
    "Khatron Ke Khiladi",
    "Bollywood Gossip",
    "Web Series",
    "Videos",
  ];

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)]">
      {/* ===== TICKER ===== */}
      <div className="ticker-bar">
        <div className="ticker-track">
          <span>BIGG BOSS 19: WILDCARD ENTRY SENDS THE HOUSE INTO CHAOS WITHIN MINUTES</span>
          <span>SPLITSVILLA: CONNECTION OF THE SEASON OR CHAOS OF THE SEASON? YOU DECIDE</span>
          <span>KHATRON KE KHILADI: STUNT GONE WRONG, MEDICAL TEAM RUSHES IN LIVE ON SET</span>
          <span>BOLLYWOOD: SECRET AIRPORT SIGHTING HAS FANS IN FULL DETECTIVE MODE</span>
          <span>BIGG BOSS 19: WILDCARD ENTRY SENDS THE HOUSE INTO CHAOS WITHIN MINUTES</span>
          <span>SPLITSVILLA: CONNECTION OF THE SEASON OR CHAOS OF THE SEASON? YOU DECIDE</span>
          <span>KHATRON KE KHILADI: STUNT GONE WRONG, MEDICAL TEAM RUSHES IN LIVE ON SET</span>
          <span>BOLLYWOOD: SECRET AIRPORT SIGHTING HAS FANS IN FULL DETECTIVE MODE</span>
        </div>
      </div>

      {/* ===== NAV ===== */}
      <header>
        <nav>
          <a href="#" className="logo">
            <Image
              src="/assets/buzzog-logo.png"
              alt="Buzz OG"
              width={136}
              height={34}
              priority
              style={{ height: "34px", width: "auto" }}
            />
          </a>

          <div className="navlinks">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(link);
                }}
                className={activeNav === link ? "active" : ""}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="navcta">
            <button
              className="btn-follow"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              📸 Follow the Buzz
            </button>
            <button
              className="burger"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(link);
                  setMobileMenuOpen(false);
                }}
                className={activeNav === link ? "active" : ""}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="feature-card">
          <div className="feature-media">
            <div className="noise"></div>
            <span className="badge pink feature-tag">🔥 Breaking</span>
          </div>
          <div className="feature-body">
            <h1 className="disp">Bigg Boss 19 house left SHOOK after 2am wildcard twist</h1>
            <p>
              One knock on the door, one dramatic entry, and the whole house dynamic just flipped.
              Here&apos;s every reaction, alliance shift and tear caught on cam.
            </p>
            <div className="meta-row">
              <span>BIGG BOSS</span>
              <span className="dot-sep">◆</span>
              <span>4 MIN READ</span>
              <span className="dot-sep">◆</span>
              <span>2H AGO</span>
            </div>
          </div>
        </div>

        <div className="trend-panel">
          <h2>⚡ Trending Right Now</h2>
          <div className="trend-item">
            <span className="trend-rank">01</span>
            <div className="trend-text">
              <h3>Splitsvilla&apos;s most talked-about couple just called it quits on camera</h3>
              <span>SPLITSVILLA · 38K REACTIONS</span>
            </div>
          </div>
          <div className="trend-item">
            <span className="trend-rank">02</span>
            <div className="trend-text">
              <h3>KKK contestant&apos;s stunt fail has the internet holding its breath</h3>
              <span>KHATRON KE KHILADI · 29K REACTIONS</span>
            </div>
          </div>
          <div className="trend-item">
            <span className="trend-rank">03</span>
            <div className="trend-text">
              <h3>This Bollywood duo&apos;s &quot;just friends&quot; airport look says otherwise</h3>
              <span>BOLLYWOOD · 24K REACTIONS</span>
            </div>
          </div>
          <div className="trend-item">
            <span className="trend-rank">04</span>
            <div className="trend-text">
              <h3>Bigg Boss task turns personal — captaincy war gets ugly fast</h3>
              <span>BIGG BOSS · 19K REACTIONS</span>
            </div>
          </div>
          <div className="trend-item">
            <span className="trend-rank">05</span>
            <div className="trend-text">
              <h3>New web series trailer drops and it&apos;s already breaking timelines</h3>
              <span>WEB SERIES · 15K REACTIONS</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY STRIP ===== */}
      <div className="cat-strip">
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
      <section className="section">
        <div className="section-head">
          <h2>
            Fresh <span className="accent">Buzz</span>
          </h2>
          <a href="#">View all →</a>
        </div>
        <div className="grid">
          <div className="card m1">
            <div className="card-media">
              <span className="badge">New</span>
            </div>
            <div className="card-body">
              <h3>Housemate&apos;s diary room confession leaks — and it&apos;s messier than expected</h3>
              <div className="meta-row">
                <span>BIGG BOSS</span>
                <span className="dot-sep">◆</span>
                <span>1H AGO</span>
              </div>
            </div>
          </div>

          <div className="card m2">
            <div className="card-media">
              <span className="badge pink">Exclusive</span>
            </div>
            <div className="card-body">
              <h3>Splitsvilla insider spills who&apos;s actually calling the shots this season</h3>
              <div className="meta-row">
                <span>SPLITSVILLA</span>
                <span className="dot-sep">◆</span>
                <span>3H AGO</span>
              </div>
            </div>
          </div>

          <div className="card m3">
            <div className="card-media">
              <span className="badge">Video</span>
            </div>
            <div className="card-body">
              <h3>Watch: the 12-second clip everyone&apos;s replaying from last night&apos;s episode</h3>
              <div className="meta-row">
                <span>BIGG BOSS</span>
                <span className="dot-sep">◆</span>
                <span>4H AGO</span>
              </div>
            </div>
          </div>

          {/* POLL CARD */}
          <div className="poll-card">
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

          <div className="card m6">
            <div className="card-media">
              <span className="badge">New</span>
            </div>
            <div className="card-body">
              <h3>Bollywood power couple spotted together after months of breakup rumours</h3>
              <div className="meta-row">
                <span>BOLLYWOOD</span>
                <span className="dot-sep">◆</span>
                <span>7H AGO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUZZ-O-METER ===== */}
      <section className="meter-section">
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
                  A
                </span>
                Aariv
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "92%" }}></div>
              </div>
              <div className="meter-score">92</div>
            </div>

            <div className="meter-row">
              <div className="meter-name">
                <span className="meter-avatar" style={{ background: "var(--magenta)" }}>
                  R
                </span>
                Ritika
              </div>
              <div className="meter-track">
                <div className="meter-fill" style={{ width: "81%" }}></div>
              </div>
              <div className="meter-score">81</div>
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
          />
          <button type="submit">Join the Buzz Squad</button>
        </form>
        <div
          className="cta-note"
          id="ctaNote"
          style={newsletterSubmitted ? { color: "var(--lime)", fontWeight: "bold" } : {}}
        >
          {newsletterSubmitted
            ? "YOU'RE IN. WELCOME TO THE BUZZ SQUAD 🎉"
            : "NO SPAM. JUST DRAMA. UNSUBSCRIBE ANYTIME."}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="footer-inner">
          <div className="footer-col" style={{ maxWidth: "260px" }}>
            <a href="#" className="logo" style={{ marginBottom: "14px" }}>
              <Image
                src="/assets/buzzog-logo.png"
                alt="Buzz OG"
                width={120}
                height={30}
                style={{ height: "30px", width: "auto" }}
              />
            </a>
            <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
              Raw, unfiltered entertainment coverage of Indian reality TV and Bollywood — built for
              the group chat.
            </p>
            <div className="footer-social" style={{ marginTop: "16px" }}>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                📸
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                ▶️
              </a>
              <a href="#" aria-label="Twitter/X">
                ✕
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Shows</h4>
            <a href="#">Bigg Boss</a>
            <a href="#">Splitsvilla</a>
            <a href="#">Khatron Ke Khiladi</a>
            <a href="#">Web Series</a>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <a href="#">Bollywood Gossip</a>
            <a href="#">Videos</a>
            <a href="#">Polls & Games</a>
            <a href="#">About Buzz Originals</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 BUZZ ORIGINALS. ALL RIGHTS RESERVED.</span>
          <span>PRIVACY · TERMS · CONTACT</span>
        </div>
      </footer>
    </div>
  );
}
