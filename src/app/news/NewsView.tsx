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
  mediaClass?: string;
  image: string;
  href: string;
  readOrTime: string;
  excerpt?: string;
}

// All verified entertainment news articles in reverse chronological order
const newsArticles: NewsArticle[] = [
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
      "Priyanka Chopra Jonas is now an executive producer on ‘We Were Here,’ an Indian short film that has qualified for the Oscars.",
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
    id: "eetha-trailer-shraddha",
    category: "Movies",
    title: "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai",
    badge: "Trailer Out",
    badgeType: "pink",
    image: "/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg",
    href: "/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
    readOrTime: "3 MIN READ",
    excerpt:
      "Shraddha Kapoor sheds her glam avatar for a gritty, transformative portrayal of Marathi folk legend Vithabai Narayangaonkar in the highly anticipated biopic.",
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
      "Sir Patrick Stewart passes away at 86. Fans worldwide celebrate the Star Trek icon and Professor X actor whose final scene in Avengers: Doomsday leaked online.",
  },
  {
    id: "mirzapur-the-movie",
    category: "Web Series",
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
    id: "siddharth-anand-king",
    category: "Bollywood",
    title: "SRK’s King Update? Siddharth Anand’s Cryptic Post Explained",
    badge: "Exclusive Scoop",
    badgeType: "pink",
    image: "/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg",
    href: "/siddharth-anand-time-for-the-world-king-srk-birthday",
    readOrTime: "3 MIN READ",
    excerpt:
      "Filmmaker Siddharth Anand sets social media ablaze with a cryptic 'King' teaser ahead of Shah Rukh Khan's birthday, fueling massive fan speculation.",
  },
  {
    id: "junglywood-trailer",
    category: "Movies",
    title: "Junglywood Trailer Out: Shaan R Grover Stars in High-Stakes Bollywood Action Thriller",
    badge: "New Release",
    image: "/images/junglywood-trailer-shaan-r-grover.jpg",
    href: "/junglywood-trailer-shaan-r-grover",
    readOrTime: "3 MIN READ",
    excerpt:
      "The explosive trailer for Junglywood showcases high-octane stunts, sharp underworld espionage, and Shaan R Grover leading an ensemble cast.",
  },
  {
    id: "disha-patani-dz",
    category: "Bollywood",
    title: "Disha Patani Launches Her Own Clothing Brand DZ: 'Fashion That Moves With You'",
    badge: "Fashion Scoop",
    image: "/images/disha-patani-launches-clothing-brand-dz.jpg",
    href: "/disha-patani-launches-clothing-brand-dz",
    readOrTime: "3 MIN READ",
    excerpt:
      "Bollywood star Disha Patani steps into entrepreneurship with the launch of DZ, an athleisure and streetwear label designed for effortless everyday comfort.",
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
    id: "bigg-boss-20-ration",
    category: "Reality",
    title: "Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating",
    badge: "100% Ration",
    badgeType: "lime",
    image: "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg",
    href: "/bigg-boss-20-100-per-cent-ration-housemates",
    readOrTime: "3 MIN READ",
    excerpt:
      "Good news has finally come to the Bigg Boss 20 house as the contestants secure a full 100% ration after weeks of low supplies and high drama.",
  },
  {
    id: "janhvi-concert-advice",
    category: "Reality",
    title: "Janhvi Kapoor's 'Concert' Advice for Veer Pahariya on Koffee With Karan Goes Viral",
    badge: "KWK 9 Scoop",
    image: "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg",
    href: "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
    readOrTime: "3 MIN READ",
    excerpt:
      "On Koffee With Karan Season 9, Janhvi Kapoor leaves host Karan Johar in splits after dishing candid, no-filter dating advice for Veer Pahariya.",
  },
  {
    id: "bigg-boss-20-uditi",
    category: "Reality",
    title: "Bigg Boss 20: Uditi Singh Opens Up About Painful Breakup With Scout: 'I Was Completely Broken'",
    badge: "Heartbreak",
    badgeType: "pink",
    image: "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg",
    href: "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
    readOrTime: "3 MIN READ",
    excerpt:
      "In a tearful late-night garden conversation, Uditi Singh opens up about her emotional fallout with gamer Scout and finding closure inside the house.",
  },
  {
    id: "kbc-18-proposal",
    category: "Reality",
    title: "KBC 18 Diwali Special: Amitabh Bachchan Grills Ranbir Kapoor About Alia Bhatt Proposal",
    badge: "Diwali Special",
    image: "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg",
    href: "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
    readOrTime: "3 MIN READ",
    excerpt:
      "Ranbir Kapoor recounts his Maasai Mara proposal to Alia Bhatt on KBC 18, prompting witty banter and warm life lessons from host Amitabh Bachchan.",
  },
  {
    id: "bhumi-pednekar-akshay",
    category: "Movies",
    title: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Film",
    badge: "Exclusive Scoop",
    badgeType: "pink",
    image: "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg",
    href: "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
    readOrTime: "3 MIN READ",
    excerpt:
      "Following their hits Toilet and Raksha Bandhan, Bhumi Pednekar teams up with Akshay Kumar once again for Priyadarshan's upcoming horror-comedy.",
  },
  {
    id: "priyanka-chopra-mehendi",
    category: "Bollywood",
    title: "Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too",
    badge: "Trending Scoop",
    badgeType: "pink",
    image: "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg",
    href: "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
    readOrTime: "3 MIN READ",
    excerpt:
      "Priyanka Chopra Jonas celebrates Karwa Chauth in London with custom henna featuring Nick Jonas and daughter Malti Marie's initials.",
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
      "Janhvi Kapoor addresses online rumors head-on during the KWK 9 premiere, clarifying the viral airport footage that sparked social media debate.",
  },
  {
    id: "ramayana-la-premiere",
    category: "Movies",
    title: "Inside Ramayana’s LA Premiere: Jada Pinkett Smith & ₹4,000 Cr Global Buzz",
    badge: "Global Premiere",
    badgeType: "pink",
    image: "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
    readOrTime: "4 MIN READ",
    excerpt:
      "Nitesh Tiwari's mythological epic makes global waves with a dazzling Los Angeles red carpet premiere attended by Ranbir Kapoor, Yash, and Hollywood executives.",
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
      "IMAX screen negotiations between Toho's monster blockbuster and Nitesh Tiwari's Ramayana reportedly prompt a strategic 14-day shift in theatrical rollout.",
  },
  {
    id: "vijay-rashmika-complaint",
    category: "Bollywood",
    title: "Vijay & Rashmika Team Files Cyber Crime Complaint Over KWK 9 Online Trolling",
    badge: "Exclusive",
    badgeType: "pink",
    image: "/images/celebrity-cybercrime-complaint-thumbnail.jpg",
    href: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
    readOrTime: "3 MIN READ",
    excerpt:
      "The actors' management approaches Hyderabad cyber crime authorities following coordinated defamation campaigns and manipulated audio clips across social platforms.",
  },
  {
    id: "shreya-kalra-karan-patel",
    category: "Reality",
    title: "Shreya Kalra Hits Back at Karan Patel Over Reels Comment on Rise and Fall 2",
    badge: "Exclusive",
    badgeType: "pink",
    image: "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
    readOrTime: "3 MIN READ",
    excerpt:
      "Shreya Kalra claps back at Karan Patel's remarks on digital creators: 'Stop demeaning people from reality TV.' The showdown that rocked the set.",
  },
];

const categoryTabs = [
  { id: "all", label: "🔥 All" },
  { id: "Reality", label: "Reality" },
  { id: "Bollywood", label: "Bollywood" },
  { id: "Movies", label: "Movies" },
  { id: "Web Series", label: "Web Series" },
] as const;

export default function NewsView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [email, setEmail] = useState("");
  const [ctaStatus, setCtaStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Top 3 cover & stack stories
  const coverStory = newsArticles[0];
  const stackStories = newsArticles.slice(1, 3);

  // Filtered stories for the grid
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
              Everything breaking across reality TV, Bollywood, movies and OTT — newest first, updated hourly.
            </p>
          </div>
        </section>

        {/* Lead Section: Latest Breaking Cover Story + Top 2 Stack Cards */}
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
              <span
                className={cn(
                  "badge feature-tag z-10",
                  coverStory.badgeType === "lime" ? "lime" : "pink"
                )}
              >
                {coverStory.badgeType === "lime" ? "🏆 " : "🔥 "}
                {coverStory.badge}
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

          {/* Right Stack: 2 Recent Stories */}
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

        {/* Main Grid: All News Stories with Full Images & Badges */}
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
