"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MovieArticle {
  id: string;
  category: string;
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
    id: "janhvi-peddi-controversy-movie",
    category: "Cinema & Censorship",
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy: “A Violating Experience”",
    badge: "Exclusive",
    badgeType: "pink",
    image: "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    readOrTime: "4 MIN READ",
  },
  {
    id: "ramayana-la-premiere-movie",
    category: "Releases & Premiere",
    title: "Inside Ramayana’s LA Premiere: Jada Pinkett Smith & ₹4,000 Cr Global Buzz",
    badge: "Global Premiere",
    badgeType: "pink",
    image: "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "4 MIN READ",
  },
  {
    id: "godzilla-minus-zero-skips-diwali",
    category: "Box Office Clash",
    title: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
    badge: "Box Office",
    badgeType: "lime",
    image: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "3 MIN READ",
  },
];

export default function MoviesView() {
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

  return (
    <>
      {/* Main Navigation Header with Movies Marked Active */}
      <Header activeNav="Movies" />

      <main className="min-h-screen bg-[var(--ink)]">
        {/* Page Hero Header Banner */}
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

            {/* Janhvi Kapoor Peddi Row Card */}
            <Link
              href="/janhvi-kapoor-peddi-controversy-koffee-with-karan-9"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
                  alt="Janhvi Kapoor Breaks Silence on Peddi Controversy"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
                <span className="badge pink z-10 relative">Film Row</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Janhvi Kapoor Breaks Silence on Peddi Controversy: &ldquo;A Violating Experience&rdquo;
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">CINEMA</span>
                  <span className="dot-sep">◆</span>
                  <span>4 MIN READ</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All Movie Buzz Grid */}
        <section className="section" id="movie-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                All <span className="accent">Movie Buzz</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              3 STORIES PUBLISHED
            </span>
          </div>

          <div className="grid">
            {movieArticles.map((art) => (
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
