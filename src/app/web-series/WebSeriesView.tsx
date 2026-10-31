"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface WebSeriesArticle {
  id: string;
  category: string;
  title: string;
  badge: string;
  badgeType?: "pink" | "lime" | "default";
  mediaClass?: string;
  image: string;
  href: string;
  readOrTime: string;
  excerpt?: string;
}

// All verified web series and OTT articles in reverse chronological order
const webSeriesArticles: WebSeriesArticle[] = [
  {
    id: "radhika-apte-rudra-akka",
    category: "Netflix Original",
    title: "Radhika Apte on Playing Rudra in Netflix’s Akka: Why This Role Is Different",
    badge: "Akka Netflix",
    badgeType: "pink",
    image: "/images/radhika-apte-rudra-akka-netflix.jpg",
    href: "/radhika-apte-rudra-akka-netflix",
    readOrTime: "3 MIN READ",
    excerpt:
      "Radhika Apte shares why playing Rudra in Netflix's 1980s retro gangster series Akka alongside Keerthy Suresh is unlike any character she has tackled before.",
  },
  {
    id: "iifa-2026-winners",
    category: "IIFA Digital Awards",
    title: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards, The Ba***ds of Bollywood Best Series",
    badge: "IIFA Winners",
    badgeType: "lime",
    image: "/images/iifa-2026-winners-list.jpg",
    href: "/iifa-2026-winners-list",
    readOrTime: "4 MIN READ",
    excerpt:
      "Aryan Khan's The Ba***ds of Bollywood wins Best Series and Best Direction, while Paatal Lok 2 and Baramulla take top digital honors at the 26th IIFA Awards.",
  },
  {
    id: "parivarik-manuranjan-ott-release",
    category: "Sony LIV Original",
    title: "Parivarik ManuRanjan: Pankaj Tripathi & Aditi Rao Hydari's Rom-Com Sets Sony LIV Date",
    badge: "OTT Premiere",
    badgeType: "lime",
    image: "/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg",
    href: "/parivarik-manuranjan-ott-release-date-sony-liv",
    readOrTime: "3 MIN READ",
    excerpt:
      "Parivarik ManuRanjan starring Pankaj Tripathi and Aditi Rao Hydari premieres on Sony LIV on November 13. Know the story, cast, director and more.",
  },
  {
    id: "mirzapur-the-movie-ott",
    category: "Prime Video Original",
    title: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
    badge: "Extended Cut",
    badgeType: "pink",
    image: "/images/mirzapur-the-movie-prime-video-extended-cut.jpg",
    href: "/mirzapur-the-movie-prime-video-extended-cut",
    readOrTime: "3 MIN READ",
    excerpt:
      "Mirzapur: The Movie is now on Prime Video with an extended cut and unseen scenes. Check the runtime, cast, language and how to watch.",
  },
  {
    id: "priyanka-chopra-we-were-here",
    category: "Digital Premiere",
    title: "Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here",
    badge: "Oscar Qualified",
    badgeType: "lime",
    image: "/images/priyanka-chopra-we-were-here-executive-producer.jpg",
    href: "/priyanka-chopra-we-were-here-executive-producer",
    readOrTime: "3 MIN READ",
    excerpt:
      "Priyanka Chopra Jonas is now an executive producer on “We Were Here,” an Indian short film streaming on digital platforms that has qualified for the Oscars.",
  },
];

export default function WebSeriesView() {
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

        {/* Lead Section: Latest Published Web Series (Cover Story) + 2-Card Stack */}
        <section className="lead">
          {/* Featured Cover Story */}
          <Link
            href={webSeriesArticles[0].href}
            className="feature-card group block"
            aria-label={`Read full article: ${webSeriesArticles[0].title}`}
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src={webSeriesArticles[0].image}
                alt={webSeriesArticles[0].title}
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="noise" />
              <span
                className={`badge ${
                  webSeriesArticles[0].badgeType === "lime" ? "lime" : "pink"
                } feature-tag z-10`}
              >
                {webSeriesArticles[0].badgeType === "lime" ? "📺" : "💥"}{" "}
                {webSeriesArticles[0].badge}
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                {webSeriesArticles[0].title}
              </h2>
              <p>{webSeriesArticles[0].excerpt}</p>
              <div className="meta-row mt-3">
                <span className="text-[var(--lime)] font-bold">
                  {webSeriesArticles[0].category.toUpperCase()}
                </span>
                <span className="dot-sep">◆</span>
                <span>{webSeriesArticles[0].readOrTime}</span>
                <span className="dot-sep">◆</span>
                <span className="text-[var(--magenta)] font-bold">
                  STREAMING NOW
                </span>
              </div>
            </div>
          </Link>

          {/* Right Stack: 2 Recent Stories */}
          <div className="stack">
            {webSeriesArticles.slice(1, 3).map((art) => (
              <Link
                key={art.id}
                href={art.href}
                className="card m1 group block"
              >
                <div className="card-media relative overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 980px) 100vw, 35vw"
                  />
                  <span
                    className={`badge ${
                      art.badgeType === "lime" ? "lime" : "pink"
                    } z-10 relative`}
                  >
                    {art.badge}
                  </span>
                </div>
                <div className="card-body">
                  <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                    {art.title}
                  </h3>
                  <div className="meta-row mt-2">
                    <span
                      className={`font-bold ${
                        art.badgeType === "lime"
                          ? "text-[var(--lime)]"
                          : "text-[var(--magenta)]"
                      }`}
                    >
                      {art.category.toUpperCase()}
                    </span>
                    <span className="dot-sep">◆</span>
                    <span>{art.readOrTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* All Web Series Buzz Grid */}
        <section className="section" id="webseries-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                All <span className="accent">Web Series Buzz</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              {webSeriesArticles.length} STORIES PUBLISHED
            </span>
          </div>

          <div className="grid">
            {webSeriesArticles.map((art) => (
              <Link
                key={art.id}
                href={art.href}
                className={`card ${art.mediaClass || "m1"} group flex flex-col justify-between`}
              >
                <div className="card-media relative overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                  <span
                    className={`badge ${
                      art.badgeType === "lime" ? "lime" : "pink"
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
                        art.badgeType === "lime"
                          ? "text-[var(--lime)]"
                          : "text-[var(--magenta)]"
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
            Drop your email. Get the juiciest web series updates and streaming scoops before your group chat does.
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
