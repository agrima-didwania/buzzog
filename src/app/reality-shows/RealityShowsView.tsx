"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface RealityArticle {
  id: string;
  show: "Bigg Boss" | "Splitsvilla" | "Khatron Ke Khiladi" | "Rise and Fall" | "KBC 18" | "Koffee With Karan" | string;
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

// Only real, verified reality show articles with authentic news & images
// Non-repeating: Lead cover & stack stories do not duplicate in this grid
const realityArticles: RealityArticle[] = [
  {
    id: "kbc-18-ranbir-kapoor-proposal",
    show: "Kaun Banega Crorepati 18",
    title: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
    excerpt:
      "The cast of Ramayana joins Amitabh Bachchan on KBC 18 Diwali special. Ranbir Kapoor reveals the thrilling Masai Mara proposal story.",
    badge: "Diwali Special",
    badgeType: "pink",
    image: "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg",
    href: "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
    readTime: "4 MIN READ",
    timeAgo: "JUST IN",
  },
  {
    id: "shreya-karan-rise-and-fall",
    show: "Rise and Fall 2",
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
];

export default function RealityShowsView() {
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
              Eliminations, fights, fan wars and dome drama — every Bigg Boss, Koffee With Karan,
              KBC, and Rise and Fall moment, minus the filler.
            </p>
          </div>
        </section>

        {/* Lead Section: Featured Reality Card + 2-Item Stack */}
        <section className="lead">
          {/* Featured Cover Story: Bigg Boss 20 100% Ration Milestone */}
          <Link
            href="/bigg-boss-20-100-per-cent-ration-housemates"
            className="feature-card group block"
            aria-label="Read full cover story: Bigg Boss 20: Housemates Get 100% Ration for the First Time"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
                alt="Bigg Boss 20: Housemates Get 100% Ration for the First Time"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/40 pointer-events-none" />
              <div className="noise" />
              <span className="badge lime feature-tag z-10">
                🔥 100% Ration Milestone
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating
              </h2>
              <p>
                Good news has finally come to the Bigg Boss 20 house. After weeks of low supplies and captaincy clashes, the contestants have secured a rare 100% full ration.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--lime)] font-bold">BIGG BOSS 20</span>
                <span className="dot-sep">◆</span>
                <span>3 MIN READ</span>
                <span className="dot-sep">◆</span>
                <span className="text-[var(--magenta)] font-bold">JUST IN</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: 2 Real Reality Stories */}
          <div className="stack">
            {/* Card 1: Janhvi Kapoor on KWK 9 */}
            <Link
              href="/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
                  alt="Janhvi Kapoor's Concert Advice for Veer Pahariya on Koffee With Karan"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
                <span className="badge pink z-10 relative">KWK 9 Scoop</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Janhvi Kapoor&apos;s &ldquo;Concert&rdquo; Advice for Veer Pahariya on Koffee With Karan Is Going Viral
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">KWK 9</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Bigg Boss 20 Uditi Singh Breakup */}
            <Link
              href="/bigg-boss-20-uditi-singh-painful-breakup-scout-love"
              className="card m2 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
                  alt="Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
                <span className="badge pink z-10 relative">Trending</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">BIGG BOSS 20</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Reality Buzz Grid - Only authentic published stories */}
        <section className="section" id="reality-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                Latest <span className="accent">Reality Buzz</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              UPDATED HOURLY
            </span>
          </div>

          <div className="grid">
            {realityArticles.map((art) => (
              <Link
                key={art.id}
                href={art.href}
                className={`card ${art.mediaClass || "m1"} group flex flex-col justify-between`}
              >
                <div className="card-media relative overflow-hidden">
                  {art.image && (
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                    />
                  )}
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
                    <span>{art.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
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
