"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface NewsArticle {
  id: string;
  category: "Reality" | "Bollywood" | "Movies" | "Web Series";
  title: string;
  badge: string;
  badgeType?: "pink" | "lime" | "default";
  image: string;
  href: string;
  readOrTime: string;
  excerpt?: string;
}

// Only verified breaking entertainment news stories (fatwas, obituaries, police complaints, eviction rows, box-office shifts)
const newsArticles: NewsArticle[] = [
  {
    id: "ibrahim-ali-khan-palak-tiwari-breakup",
    category: "Bollywood",
    title: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years",
    badge: "Breakup Scoop",
    badgeType: "pink",
    image: "/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg",
    href: "/ibrahim-ali-khan-palak-tiwari-breakup",
    readOrTime: "3 MIN READ",
    excerpt:
      "Ibrahim Ali Khan and Palak Tiwari have reportedly parted ways after 3 years. Know who ended it, the shoot cancellations, and what we know so far.",
  },
  {
    id: "ramayana-advance-booking-us",
    category: "Movies",
    title: "Ramayana Advance Booking: US Sales Jump 27% After LA Premiere",
    badge: "Box Office Spike",
    badgeType: "lime",
    image: "/images/ramayana-advance-booking-us-jump-la-premiere.jpg",
    href: "/ramayana-advance-booking-us-jump-la-premiere",
    readOrTime: "3 MIN READ",
    excerpt:
      "Ramayana: Part One is getting stronger bookings in the US after its LA premiere. Here are the booking numbers, the early reactions and the release date.",
  },
  {
    id: "sara-ali-khan-fatwa",
    category: "Bollywood",
    title: "Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit",
    badge: "Fatwa Row",
    badgeType: "pink",
    image: "/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg",
    href: "/sara-ali-khan-fatwa-kedarnath-temple-visit",
    readOrTime: "3 MIN READ",
    excerpt:
      "A UP cleric has issued a fatwa against Sara Ali Khan after her Kedarnath visit. Here is what he said, what happened at the temple, and the affidavit rule.",
  },
  {
    id: "priyanka-chopra-we-were-here",
    category: "Movies",
    title: "Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here",
    badge: "Oscar Qualified",
    badgeType: "lime",
    image: "/images/priyanka-chopra-we-were-here-executive-producer.jpg",
    href: "/priyanka-chopra-we-were-here-executive-producer",
    readOrTime: "3 MIN READ",
    excerpt:
      "Priyanka Chopra Jonas is now an executive producer on “We Were Here,” an Indian short film that has qualified for the Oscars.",
  },
  {
    id: "patrick-stewart-dies",
    category: "Movies",
    title: "Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Role",
    badge: "In Memoriam",
    badgeType: "pink",
    image: "/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg",
    href: "/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
    readOrTime: "4 MIN READ",
    excerpt:
      "Sir Patrick Stewart passes away at 86. Fans worldwide celebrate the Star Trek icon and Professor X actor whose final scene in Avengers: Doomsday was officially confirmed.",
  },
  {
    id: "bigg-boss-20-gullu",
    category: "Reality",
    title: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?",
    badge: "Eviction Row",
    badgeType: "pink",
    image: "/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg",
    href: "/bigg-boss-20-gullu-evicted-yung-dsa-fight",
    readOrTime: "3 MIN READ",
    excerpt:
      "Gullu and Yung DSA’s heated captaincy clash has fans demanding eviction, drawing fierce parallels with Nakul Dhull’s dramatic exit.",
  },
  {
    id: "janhvi-peddi-controversy",
    category: "Reality",
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy: 'A Violating Experience'",
    badge: "KWK 9 Scoop",
    badgeType: "pink",
    image: "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
    readOrTime: "4 MIN READ",
    excerpt:
      "Janhvi Kapoor addresses online rumors head-on during the KWK 9 premiere, clarifying the viral airport footage and calling out privacy violations.",
  },
  {
    id: "godzilla-minus-zero",
    category: "Movies",
    title: "Godzilla Minus Zero India Release Delayed Over Ramayana IMAX Battle",
    badge: "Box Office Clash",
    badgeType: "lime",
    image: "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
    readOrTime: "3 MIN READ",
    excerpt:
      "IMAX screen negotiations between Toho's monster blockbuster and Nitesh Tiwari's Ramayana prompt a strategic 14-day shift in theatrical rollout.",
  },
  {
    id: "vijay-rashmika-complaint",
    category: "Bollywood",
    title: "Vijay & Rashmika Team Files Cyber Crime Complaint Over KWK 9 Online Trolling",
    badge: "Police Complaint",
    badgeType: "pink",
    image: "/images/celebrity-cybercrime-complaint-thumbnail.jpg",
    href: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
    readOrTime: "3 MIN READ",
    excerpt:
      "The actors' management approaches Hyderabad cyber crime authorities following coordinated defamation campaigns and manipulated audio clips across social platforms.",
  },
];

const categoryTabs = [
  { id: "all", label: "🔥 All News" },
  { id: "Bollywood", label: "Bollywood" },
  { id: "Movies", label: "Movies" },
  { id: "Reality", label: "Reality Shows" },
] as const;

export default function NewsView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [email, setEmail] = useState("");
  const [ctaStatus, setCtaStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Top 3 cover & stack stories
  const coverStory = newsArticles[0];
  const stackStories = newsArticles.slice(1, 3);

  // Filtered stories for the grid (only articles that are actually news)
  const filteredArticles =
    selectedCategory === "all"
      ? newsArticles
      : newsArticles.filter((article) => article.category === selectedCategory);

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
      {/* Main Navigation Header with News Marked Active */}
      <Header activeNav="News" />

      <main className="min-h-screen bg-[var(--ink)]">
        {/* Page Hero Header Banner */}
        <section className="ph-wrap">
          <div className="ph">
            <div className="crumb">
              <Link href="/">HOME</Link> / NEWS
            </div>
            <h1 className="disp">
              The <em>News</em> Desk
            </h1>
            <p>
              Verified reporting, legal filings, controversy updates and breaking entertainment scoops — raw, unfiltered, built for the group chat.
            </p>
          </div>
        </section>

        {/* Lead Section: Breaking Cover Story + Top 2 Stack Stories */}
        {newsArticles.length > 0 && (
          <section className="lead">
            {/* Featured Cover Story */}
            <Link
              href={coverStory.href}
              className="feature-card group block"
              aria-label={`Read full story: ${coverStory.title}`}
            >
              <div className="feature-media relative overflow-hidden">
                <Image
                  src={coverStory.image}
                  alt={coverStory.title}
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 65vw"
                />
                <div className="noise" />
                <span className="badge pink feature-tag z-10">
                  🔥 {coverStory.badge}
                </span>
              </div>
              <div className="feature-body">
                <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                  {coverStory.title}
                </h2>
                <p>{coverStory.excerpt}</p>
                <div className="meta-row mt-3">
                  <span className="text-[var(--magenta)] font-bold uppercase">
                    {coverStory.category} &amp; NEWS
                  </span>
                  <span className="dot-sep">◆</span>
                  <span>{coverStory.readOrTime}</span>
                  <span className="dot-sep">◆</span>
                  <span className="text-[var(--lime)] font-bold">LATEST SCOOP</span>
                </div>
              </div>
            </Link>

            {/* Right Stack: 2 Recent News Stories */}
            <div className="stack">
              {stackStories.map((art) => (
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
                      className={cn(
                        "badge z-10 relative",
                        art.badgeType === "pink" && "pink",
                        art.badgeType === "lime" && "lime"
                      )}
                    >
                      {art.badge}
                    </span>
                  </div>
                  <div className="card-body">
                    <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                      {art.title}
                    </h3>
                    <div className="meta-row mt-2">
                      <span className="text-[var(--magenta)] font-bold uppercase">
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
        )}

        {/* Category Filter Chips */}
        <div className="wrap pt-8 pb-2">
          <div className="cat-strip" role="tablist" aria-label="News Categories">
            {categoryTabs.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={cn("cat-chip", isActive && "on")}
                  role="tab"
                  aria-selected={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Only Published News Stories (No blank boxes or non-news content) */}
        <section className="section" id="news-grid">
          <div className="section-head">
            <div>
              <h2 className="text-white">
                All <span className="accent">News Stories</span>
              </h2>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold">
              {filteredArticles.length} STORIES PUBLISHED
            </span>
          </div>

          <div className="grid">
            {filteredArticles.map((art) => (
              <Link
                key={art.id}
                href={art.href}
                className="card m1 group flex flex-col justify-between"
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
                    className={cn(
                      "badge z-10 relative",
                      art.badgeType === "pink" && "pink",
                      art.badgeType === "lime" && "lime"
                    )}
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
                      className={cn(
                        "font-bold uppercase",
                        art.badgeType === "pink"
                          ? "text-[var(--magenta)]"
                          : "text-[var(--lime)]"
                      )}
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

        {/* Newsletter CTA Band */}
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
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email for Buzz Originals newsletter"
              required
            />
            <button type="submit" disabled={submitting}>
              {submitting ? "Joining..." : "Join the Buzz Squad"}
            </button>
          </form>
          <div className="cta-note">
            {ctaStatus || "NO SPAM. JUST DRAMA. UNSUBSCRIBE ANYTIME."}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
