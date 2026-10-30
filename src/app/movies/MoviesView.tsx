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
    id: "eetha-trailer-shraddha-kapoor",
    category: "Trailer & Folk Drama",
    title: "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar",
    badge: "Trailer Out",
    badgeType: "pink",
    image: "/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg",
    href: "/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
    readOrTime: "3 MIN READ",
  },
  {
    id: "patrick-stewart-dies-at-86",
    category: "Hollywood & Marvel",
    title: "Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role",
    badge: "In Memoriam",
    badgeType: "pink",
    image: "/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg",
    href: "/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
    readOrTime: "4 MIN READ",
  },
  {
    id: "siddharth-anand-king-srk",
    category: "Action Thriller",
    title: "Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?",
    badge: "Cover Story",
    badgeType: "pink",
    image: "/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg",
    href: "/siddharth-anand-time-for-the-world-king-srk-birthday",
    readOrTime: "3 MIN READ",
  },
  {
    id: "junglywood-trailer-shaan-grover",
    category: "Trailer & Thriller",
    title: "Junglywood Trailer Out: Shaan R Grover Takes On Bollywood's Insider vs Outsider Debate",
    badge: "Trailer Out",
    badgeType: "pink",
    image: "/images/junglywood-trailer-shaan-r-grover.jpg",
    href: "/junglywood-trailer-shaan-r-grover",
    readOrTime: "3 MIN READ",
  },
  {
    id: "bhumi-akshay-priyadarshan-movie",
    category: "Comedy Thriller",
    title: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
    badge: "Exclusive Scoop",
    badgeType: "pink",
    image: "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg",
    href: "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
    readOrTime: "3 MIN READ",
  },
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

        {/* Lead Section: Latest Movie Published Article (Cover Story) + The Last 2 Blogs Uploaded Before It */}
        <section className="lead">
          {/* Featured Card: Eetha Trailer Out */}
          <Link
            href="/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar"
            className="feature-card group block"
            aria-label="Read full article: Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg"
                alt="Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="noise" />
              <span className="badge pink feature-tag z-10">
                🔥 Trailer Out
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar
              </h2>
              <p>
                The Eetha trailer is out! See Shraddha Kapoor as Lavani legend Vithabai Narayangaonkar, plus cast, director, new release date and what to expect.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--lime)] font-bold">BOLLYWOOD &amp; CINEMA</span>
                <span className="dot-sep">·</span>
                <span>3 MIN READ</span>
                <span className="dot-sep">·</span>
                <span className="text-[var(--magenta)] font-bold">DECEMBER 4, 2026</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: The last 2 movie blogs uploaded before this one */}
          <div className="stack">
            {/* Card 1: Patrick Stewart In Memoriam */}
            <Link
              href="/patrick-stewart-dies-at-86-avengers-doomsday-final-role"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg"
                  alt="Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge pink z-10 relative">In Memoriam</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Role
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">HOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>4 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Siddharth Anand King SRK Update */}
            <Link
              href="/siddharth-anand-time-for-the-world-king-srk-birthday"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg"
                  alt="Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge pink z-10 relative">King Update</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">CINEMA</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
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
              8 STORIES PUBLISHED
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
