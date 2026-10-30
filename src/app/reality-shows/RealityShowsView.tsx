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

// All verified reality show articles in reverse chronological order
const realityArticles: RealityArticle[] = [
  {
    id: "jiya-shankar-unfollows-kd",
    show: "Bigg Boss OTT 2",
    title: "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far",
    excerpt:
      "Jiya Shankar has unfollowed fiancé Kaaran Dhanak (KD) and shared emotional reposts. Here is what fans noticed and what she said in her statement.",
    badge: "Breakup Rumours",
    badgeType: "pink",
    image: "/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
    href: "/jiya-shankar-unfollows-fiance-kd-instagram",
    readTime: "3 MIN READ",
    timeAgo: "JUST IN",
  },
  {
    id: "bigg-boss-20-gullu-eviction",
    show: "Bigg Boss 20",
    title: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?",
    excerpt:
      "Gullu and Yung DSA’s captaincy task fight has fans demanding eviction, just like Nakul Dhull’s exit. Here’s what we know about Bigg Boss 20 so far.",
    badge: "Eviction Row",
    badgeType: "pink",
    image: "/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg",
    href: "/bigg-boss-20-gullu-evicted-yung-dsa-fight",
    readTime: "3 MIN READ",
    timeAgo: "JUST IN",
  },
  {
    id: "bigg-boss-20-100-percent-ration",
    show: "Bigg Boss 20",
    title: "Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating",
    excerpt:
      "Good news has finally come to the Bigg Boss 20 house as the contestants secure a full 100% ration after weeks of low supplies and high drama.",
    badge: "100% Ration",
    badgeType: "lime",
    image: "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg",
    href: "/bigg-boss-20-100-per-cent-ration-housemates",
    readTime: "3 MIN READ",
    timeAgo: "3H AGO",
  },
  {
    id: "janhvi-veer-concert-advice",
    show: "Koffee With Karan 9",
    title: "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
    excerpt:
      "Janhvi Kapoor drops witty dating advice for Veer Pahariya on Koffee With Karan Season 9: “उसे कभी किसी कॉन्सर्ट में मत ले जाना!” Fans connect the viral dots to Tara Sutaria.",
    badge: "Viral Scoop",
    badgeType: "pink",
    image: "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
    href: "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
    readTime: "3 MIN READ",
    timeAgo: "5H AGO",
  },
  {
    id: "bigg-boss-20-uditi-singh-breakup",
    show: "Bigg Boss 20",
    title: "Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh’s Painful Breakup Memory",
    excerpt:
      "Scout OP’s talk with Love Gill stirs up the house as Uditi Singh opens up to Arishfa Khan about her own past heartbreak and Karan Wahi memories.",
    badge: "Trending",
    badgeType: "pink",
    image: "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg",
    href: "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
    readTime: "3 MIN READ",
    timeAgo: "7H AGO",
  },
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
    timeAgo: "9H AGO",
  },
  {
    id: "janhvi-kapoor-peddi-controversy",
    show: "Koffee With Karan 9",
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy: “A Violating Experience”",
    excerpt:
      "Janhvi Kapoor opens up on the Peddi objectification row on KWK 9. Read what she said, the director’s apology and reactions.",
    badge: "KWK 9 Scoop",
    badgeType: "pink",
    image: "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    readTime: "4 MIN READ",
    timeAgo: "1D AGO",
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
    timeAgo: "1D AGO",
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

        {/* Lead Section: Latest Reality Published Article (Cover Story) + The Last 2 Blogs Uploaded Before It */}
        <section className="lead">
          {/* Featured Cover Story: Jiya Shankar Unfollows KD */}
          <Link
            href="/jiya-shankar-unfollows-fiance-kd-instagram"
            className="feature-card group block"
            aria-label="Read full cover story: Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg"
                alt="Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="noise" />
              <span className="badge pink feature-tag z-10">
                💔 Breakup Rumours
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far
              </h2>
              <p>
                Jiya Shankar has unfollowed fiancé Kaaran Dhanak (KD) and shared emotional reposts. Here is what fans noticed and what she said in her statement.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--lime)] font-bold">BIGG BOSS OTT 2</span>
                <span className="dot-sep">◆</span>
                <span>3 MIN READ</span>
                <span className="dot-sep">◆</span>
                <span className="text-[var(--magenta)] font-bold">JUST IN</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: The last 2 blogs uploaded before the latest one */}
          <div className="stack">
            {/* Card 1: Bigg Boss 20 Gullu Eviction Row */}
            <Link
              href="/bigg-boss-20-gullu-evicted-yung-dsa-fight"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg"
                  alt="Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge pink z-10 relative">Eviction Row</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">BIGG BOSS 20</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Bigg Boss 20 100% Ration */}
            <Link
              href="/bigg-boss-20-100-per-cent-ration-housemates"
              className="card m2 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
                  alt="Bigg Boss 20: Housemates Get 100% Ration for the First Time"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge lime z-10 relative">100% Ration</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Bigg Boss 20: Housemates Get 100% Ration for the First Time
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

        {/* All Reality Buzz Grid - All authentic published stories in order */}
        <section className="section" id="reality-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                All <span className="accent">Reality Buzz</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              8 STORIES PUBLISHED
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
