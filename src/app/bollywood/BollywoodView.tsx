"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BollywoodArticle {
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

const bollywoodArticles: BollywoodArticle[] = [
  {
    id: "godzilla-ramayana-clash",
    category: "Cinema & Box Office",
    title: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
    badge: "Box Office Clash",
    badgeType: "pink",
    image: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "3 MIN READ",
  },
  {
    id: "ramayana-la-premiere-buzz",
    category: "Red Carpet",
    title: "Inside Ramayana’s LA Premiere: Jada Pinkett Smith & ₹4,000 Cr Global Buzz",
    badge: "Red Carpet",
    badgeType: "pink",
    image: "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "4 MIN READ",
  },
  {
    id: "airport-look-just-friends",
    category: "Gossip",
    title: "This Bollywood duo’s “just friends” airport look says otherwise",
    badge: "Trending",
    badgeType: "default",
    mediaClass: "m5",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    readOrTime: "9H AGO",
  },
  {
    id: "best-worst-dressed",
    category: "Red Carpet",
    title: "Best and worst dressed from this week’s red carpets, ranked by the group chat",
    badge: "Fashion",
    badgeType: "default",
    mediaClass: "m1",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "1D AGO",
  },
  {
    id: "looks-broke-timeline",
    category: "Red Carpet",
    title: "Saree, suit or statement jacket: the looks that broke the timeline",
    badge: "Photos",
    badgeType: "default",
    mediaClass: "m2",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "2D AGO",
  },
  {
    id: "just-friends-denials",
    category: "Gossip",
    title: "Why every “just friends” denial reads like a press release now",
    badge: "Hot Take",
    badgeType: "pink",
    mediaClass: "m3",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    readOrTime: "2D AGO",
  },
];

export default function BollywoodView() {
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
      {/* Main Navigation Header with Bollywood Marked Active */}
      <Header activeNav="Bollywood" />

      <main className="min-h-screen bg-[var(--ink)]">
        {/* Page Hero Header Banner */}
        <section className="ph-wrap">
          <div className="ph">
            <div className="crumb">
              <Link href="/">HOME</Link> / BOLLYWOOD
            </div>
            <h1 className="disp">
              Bolly<em>wood</em>
            </h1>
            <p>
              Red carpets, rumours, airport looks and exclusives — the gossip your group chat is already talking about.
            </p>
          </div>
        </section>

        {/* Lead Section: Latest Bollywood Published Article (Cover Story) + Exclusive & Global Premiere Stack */}
        <section className="lead">
          {/* Cover Story: Latest Published Bollywood Story (Janhvi Kapoor) */}
          <Link
            href="/janhvi-kapoor-peddi-controversy-koffee-with-karan-9"
            className="feature-card group block"
            aria-label="Read full cover story: Janhvi Kapoor Breaks Silence on Peddi Controversy"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
                alt="Janhvi Kapoor Breaks Silence on Peddi Controversy on Koffee With Karan 9"
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/40 pointer-events-none" />
              <div className="noise" />
              <span className="badge pink feature-tag z-10">
                🔥 Latest Cover Story
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Janhvi Kapoor Breaks Silence on Peddi Controversy
              </h2>
              <p>
                Janhvi Kapoor opens up on the Peddi objectification row on Koffee With Karan 9. Inside what she said, the director’s apology, and reactions from Rashmika, Vijay and the industry.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--magenta)] font-bold">BOLLYWOOD &amp; CINEMA</span>
                <span className="dot-sep">◆</span>
                <span>4 MIN READ</span>
                <span className="dot-sep">◆</span>
                <span className="text-[var(--lime)] font-bold">JUST IN</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: Exclusive & Global Premiere */}
          <div className="stack">
            {/* Exclusive Card: Vijay & Rashmika Cyber Crime Complaint */}
            <Link
              href="/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad"
              className="card m2 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/celebrity-cybercrime-complaint-thumbnail.jpg"
                  alt="Vijay & Rashmika team files cyber crime complaint"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
                <span className="badge pink z-10 relative">Exclusive</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Vijay &amp; Rashmika team files cyber crime complaint over KWK 9 online trolling
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">EXCLUSIVES</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Global Premiere Card: Ramayana LA Premiere */}
            <Link
              href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
              className="card m6 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
                  alt="Ramayana LA Premiere: Actors Steal the Red Carpet"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
                <span className="badge pink z-10 relative">Global Premiere</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Ramayana LA Premiere: Ranbir Kapoor, Yash &amp; Sai Pallavi Stun Hollywood
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">GLOBAL PREMIERE</span>
                  <span className="dot-sep">◆</span>
                  <span>4 MIN READ</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Latest Bollywood Buzz Grid */}
        <section className="section" id="bollywood-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                Latest <span className="accent">Bollywood Buzz</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              UPDATED HOURLY
            </span>
          </div>

          <div className="grid">
            {bollywoodArticles.map((art) => (
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

        {/* CTA Band: Join the Buzz Squad */}
        <section className="cta-band">
          <h2 className="disp text-white">
            Never miss a <span>plot twist</span> again
          </h2>
          <p>
            Drop your email. Get the juiciest updates before your group chat does.
          </p>
          <form className="cta-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              aria-label="Email address for Bollywood updates"
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
