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
    id: "parivarik-manuranjan-ott-release",
    category: "OTT Premiere",
    title: "Parivarik ManuRanjan: Pankaj Tripathi & Aditi Rao Hydari's Rom-Com Sets Sony LIV Date",
    badge: "OTT Premiere",
    badgeType: "lime",
    image: "/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg",
    href: "/parivarik-manuranjan-ott-release-date-sony-liv",
    readOrTime: "3 MIN READ",
  },
  {
    id: "ramayana-advance-booking-us",
    category: "Box Office",
    title: "Ramayana Advance Booking: US Sales Jump 27% After LA Premiere",
    badge: "Box Office Jump",
    badgeType: "lime",
    image: "/images/ramayana-advance-booking-us-jump-la-premiere.jpg",
    href: "/ramayana-advance-booking-us-jump-la-premiere",
    readOrTime: "3 MIN READ",
  },
  {
    id: "sara-ali-khan-fatwa-kedarnath",
    category: "Controversy",
    title: "Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit",
    badge: "Fatwa Row",
    badgeType: "pink",
    image: "/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg",
    href: "/sara-ali-khan-fatwa-kedarnath-temple-visit",
    readOrTime: "3 MIN READ",
  },
  {
    id: "eetha-trailer-shraddha-kapoor",
    category: "Trailer Out",
    title: "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar",
    badge: "Trailer Out",
    badgeType: "pink",
    image: "/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg",
    href: "/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
    readOrTime: "3 MIN READ",
  },
  {
    id: "mirzapur-the-movie-ott",
    category: "OTT Premiere",
    title: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
    badge: "Extended Cut",
    badgeType: "pink",
    image: "/images/mirzapur-the-movie-prime-video-extended-cut.jpg",
    href: "/mirzapur-the-movie-prime-video-extended-cut",
    readOrTime: "3 MIN READ",
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
    id: "disha-patani-clothing-brand-dz",
    category: "Fashion Entrepreneur",
    title: "Disha Patani Launches Her Own Clothing Brand DZ",
    badge: "Latest Scoop",
    badgeType: "pink",
    image: "/images/disha-patani-launches-clothing-brand-dz.jpg",
    href: "/disha-patani-launches-clothing-brand-dz",
    readOrTime: "3 MIN READ",
  },
  {
    id: "janhvi-veer-concert-advice",
    category: "KWK 9 Scoop",
    title: "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
    badge: "Viral Scoop",
    badgeType: "pink",
    image: "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
    href: "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
    readOrTime: "3 MIN READ",
  },
  {
    id: "kbc-18-diwali-ranbir-kapoor-proposal",
    category: "Diwali Special",
    title: "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
    badge: "Diwali Exclusive",
    badgeType: "pink",
    image: "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg",
    href: "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
    readOrTime: "3 MIN READ",
  },
  {
    id: "bhumi-pednekar-akshay-kumar-next-film",
    category: "Casting Exclusive",
    title: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
    badge: "Exclusive Scoop",
    badgeType: "pink",
    image: "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg",
    href: "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
    readOrTime: "3 MIN READ",
  },
  {
    id: "priyanka-chopra-karwa-chauth",
    category: "Festivals & Culture",
    title: "Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too",
    badge: "Trending Scoop",
    badgeType: "pink",
    image: "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg",
    href: "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
    readOrTime: "3 MIN READ",
  },
  {
    id: "janhvi-kapoor-peddi-controversy",
    category: "Exclusive Interview",
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy: “A Violating Experience”",
    badge: "KWK 9 Scoop",
    badgeType: "pink",
    image: "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    readOrTime: "4 MIN READ",
  },
  {
    id: "ramayana-la-premiere-buzz",
    category: "Red Carpet",
    title: "Inside Ramayana’s LA Premiere: Jada Pinkett Smith & ₹4,000 Cr Global Buzz",
    badge: "Global Premiere",
    badgeType: "pink",
    image: "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "4 MIN READ",
  },
  {
    id: "godzilla-ramayana-clash",
    category: "Cinema & Box Office",
    title: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
    badge: "Box Office Clash",
    badgeType: "lime",
    image: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "3 MIN READ",
  },
  {
    id: "vijay-rashmika-cybercrime-action",
    category: "Legal & Exclusives",
    title: "Vijay & Rashmika Team Files Cyber Crime Complaint Over KWK 9 Online Trolling",
    badge: "Exclusive",
    badgeType: "pink",
    image: "/images/celebrity-cybercrime-complaint-thumbnail.jpg",
    href: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
    readOrTime: "3 MIN READ",
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

        {/* Lead Section: Latest Bollywood Published Article (Cover Story) + The Last 2 Blogs Uploaded Before It */}
        <section className="lead">
          {/* Cover Story: Latest Published Bollywood Story (Parivarik ManuRanjan) */}
          <Link
            href="/parivarik-manuranjan-ott-release-date-sony-liv"
            className="feature-card group block"
            aria-label="Read full cover story: Parivarik ManuRanjan Release Date: Pankaj Tripathi and Aditi Rao Hydari’s Film Is Coming to Sony LIV"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg"
                alt="Parivarik ManuRanjan OTT Release Date: Sony LIV"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="noise" />
              <span className="badge lime feature-tag z-10">
                📺 OTT Premiere
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Parivarik ManuRanjan Release Date: Pankaj Tripathi and Aditi Rao Hydari’s Film Is Coming to Sony LIV
              </h2>
              <p>
                Parivarik ManuRanjan starring Pankaj Tripathi and Aditi Rao Hydari premieres on Sony LIV on November 13. Know the story, cast, director and more.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--magenta)] font-bold">BOLLYWOOD &amp; OTT</span>
                <span className="dot-sep">◆</span>
                <span>3 MIN READ</span>
                <span className="dot-sep">◆</span>
                <span className="text-[var(--lime)] font-bold">PREMIERE NOV 13</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: The last 2 blogs uploaded before the latest one */}
          <div className="stack">
            {/* Card 1: Ramayana Advance Booking */}
            <Link
              href="/ramayana-advance-booking-us-jump-la-premiere"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/ramayana-advance-booking-us-jump-la-premiere.jpg"
                  alt="Ramayana Advance Booking: US Sales Jump 27% After LA Premiere"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge lime z-10 relative">Box Office Jump</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Ramayana Advance Booking: US Sales Jump 27% After LA Premiere
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">BOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Sara Ali Khan Fatwa */}
            <Link
              href="/sara-ali-khan-fatwa-kedarnath-temple-visit"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg"
                  alt="Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge pink z-10 relative">Fatwa Row</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">BOLLYWOOD</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* All Bollywood Buzz Grid */}
        <section className="section" id="bollywood-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                All <span className="accent">Bollywood Buzz</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              16 STORIES PUBLISHED
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
