"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface BollywoodArticle {
  id: string;
  category: "Red Carpet" | "Gossip" | "Exclusives";
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
    id: "ramayana-la-premiere-buzz",
    category: "Red Carpet",
    title: "Inside Ramayana’s LA Premiere: Jada Pinkett Smith, Hollywood stars & ₹4,000 Cr buzz",
    badge: "Global Premiere",
    badgeType: "pink",
    mediaClass: "m3",
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
    image: "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
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
    id: "star-kid-debut-insider",
    category: "Exclusives",
    title: "Industry insider on which star-kid debut is quietly the most anticipated",
    badge: "Exclusive",
    badgeType: "pink",
    mediaClass: "m4",
    href: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
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

const categoryFilters = [
  { filter: "all", label: "🔥 All" },
  { filter: "Red Carpet", label: "Red Carpet" },
  { filter: "Gossip", label: "Gossip" },
  { filter: "Exclusives", label: "Exclusives" },
] as const;

export default function BollywoodView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
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

  const filteredArticles =
    activeFilter === "all"
      ? bollywoodArticles
      : bollywoodArticles.filter((art) => art.category === activeFilter);

  return (
    <>
      {/* Live Breaking Ticker Bar */}
      <div className="ticker-bar" role="region" aria-label="Bollywood Breaking Ticker">
        <div className="ticker-track">
          <span>RAMAYANA LA PREMIERE: RANBIR, YASH &amp; SAI PALLAVI STUN HOLLYWOOD</span>
          <span>AIRPORT SIGHTING HAS FANS IN FULL DETECTIVE MODE</span>
          <span>VIJAY &amp; RASHMIKA TEAM TAKES LEGAL ACTION OVER FAKE POSTS</span>
          <span>RAMAYANA LA PREMIERE: RANBIR, YASH &amp; SAI PALLAVI STUN HOLLYWOOD</span>
          <span>AIRPORT SIGHTING HAS FANS IN FULL DETECTIVE MODE</span>
          <span>VIJAY &amp; RASHMIKA TEAM TAKES LEGAL ACTION OVER FAKE POSTS</span>
        </div>
      </div>

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

        {/* Category Filter Strip */}
        <div className="cat-strip max-w-[1320px] mx-auto px-4 sm:px-6">
          {categoryFilters.map((cat) => (
            <button
              key={cat.filter}
              type="button"
              className={cn(
                "cat-chip magenta-active",
                activeFilter === cat.filter && "on"
              )}
              onClick={() => setActiveFilter(cat.filter)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Lead Section: Featured Bollywood Card + 2-Item Stack */}
        <section className="lead">
          {/* Featured Card (Linking directly to Ramayana LA Premiere) */}
          <Link
            href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
            className="feature-card group block"
            aria-label="Read full article on Ramayana LA Premiere"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
                alt="Ramayana LA Premiere: Actors Steal the Red Carpet"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/40 pointer-events-none" />
              <div className="noise" />
              <span className="badge pink feature-tag z-10">
                🔥 Global Premiere
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Ramayana LA Premiere: Actors Steal the Red Carpet
              </h2>
              <p>
                Ranbir Kapoor, Yash and Sai Pallavi walked the red carpet at the Ramayana LA premiere. See who attended, what they wore, and the release date.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--magenta)] font-bold">BOLLYWOOD &amp; CINEMA</span>
                <span className="dot-sep">◆</span>
                <span>4 MIN READ</span>
              </div>
            </div>
          </Link>

          {/* Right Stack */}
          <div className="stack">
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

            <Link
              href="/janhvi-kapoor-peddi-controversy-koffee-with-karan-9"
              className="card m6 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
                  alt="Bollywood power couple spotted together"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-2)] via-transparent to-black/30 pointer-events-none" />
                <span className="badge z-10 relative">New</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Bollywood power couple spotted together after months of breakup rumours
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--lime)] font-bold">GOSSIP</span>
                  <span className="dot-sep">◆</span>
                  <span>7H AGO</span>
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
            {filteredArticles.map((art) => (
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

        {/* Rumour Radar Section */}
        <section className="section" id="rumour-radar">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                Rumour <span className="accent">Radar</span>
              </h2>
            </div>
          </div>
          <p className="sub">
            We tag every whisper so you know what’s real, what’s unverified and what’s busted.
          </p>
          <div className="radar">
            <div className="rr">
              <span className="text-white">Two leads reuniting for a big-screen project</span>
              <b className="st un">UNVERIFIED</b>
            </div>
            <div className="rr">
              <span className="text-white">A reality-show winner in talks for a film debut</span>
              <b className="st un">UNVERIFIED</b>
            </div>
            <div className="rr">
              <span className="text-white">Viral “secret wedding” photos</span>
              <b className="st no">BUSTED</b>
            </div>
            <div className="rr">
              <span className="text-white">A franchise sequel getting an official release date</span>
              <b className="st ok">CONFIRMED</b>
            </div>
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
