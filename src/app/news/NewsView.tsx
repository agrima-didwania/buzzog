"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

interface NewsArticle {
  id: string;
  category: "Reality" | "Bollywood" | "Movies" | "Web Series";
  timeAgo: string;
  badge: string;
  badgeType?: "pink" | "default";
  title: string;
  excerpt?: string;
  href: string;
}

interface TrendingStory {
  id: string;
  title: string;
  category: string;
  reactions: string;
  href: string;
}

// All verified entertainment news articles in reverse chronological order
const newsArticles: NewsArticle[] = [
  {
    id: "sara-ali-khan-fatwa",
    category: "Bollywood",
    timeAgo: "NOW",
    badge: "Breaking",
    badgeType: "pink",
    title: "Sara Ali Khan Faces Fatwa After Kedarnath Visit: Cleric Issues Strong Statement",
    excerpt:
      "A prominent cleric criticizes Sara Ali Khan's recent visit to the Kedarnath temple, calling it contrary to Islamic tenets, while fans defend her devotion.",
    href: "/sara-ali-khan-fatwa-kedarnath-temple-visit",
  },
  {
    id: "eetha-trailer-shraddha",
    category: "Movies",
    timeAgo: "1H",
    badge: "Trailer Out",
    title: "Eetha Trailer Out: Shraddha Kapoor Stuns as Tamasha Legend Vithabai Narayangaonkar",
    excerpt:
      "Shraddha Kapoor sheds her glam avatar for a gritty, transformative portrayal of Marathi folk legend Vithabai Narayangaonkar in the highly anticipated biopic.",
    href: "/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
  },
  {
    id: "patrick-stewart-dies",
    category: "Movies",
    timeAgo: "2H",
    badge: "Cinema",
    badgeType: "pink",
    title: "Patrick Stewart Dies at 86: Avengers Doomsday Marked Legendary Actor’s Final Marvel Role",
    excerpt:
      "Sir Patrick Stewart passes away at 86. Fans worldwide celebrate the Star Trek icon and Professor X actor whose final scene in Avengers: Doomsday leaked online.",
    href: "/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
  },
  {
    id: "mirzapur-the-movie",
    category: "Web Series",
    timeAgo: "3H",
    badge: "OTT Premieres",
    badgeType: "pink",
    title: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
    excerpt:
      "Mirzapur: The Movie hits Prime Video featuring 18 minutes of unseen footage, extended action sequences, and high-stakes drama from the Purvanchal underworld.",
    href: "/mirzapur-the-movie-prime-video-extended-cut",
  },
  {
    id: "siddharth-anand-king",
    category: "Bollywood",
    timeAgo: "4H",
    badge: "Exclusive",
    title: "Siddharth Anand Cryptic Post: 'Time for the World to Meet the King' — SRK Birthday Reveal?",
    excerpt:
      "Filmmaker Siddharth Anand sets social media ablaze with a cryptic 'King' teaser ahead of Shah Rukh Khan's birthday, fueling massive fan speculation.",
    href: "/siddharth-anand-time-for-the-world-king-srk-birthday",
  },
  {
    id: "junglywood-trailer",
    category: "Movies",
    timeAgo: "5H",
    badge: "New Release",
    title: "Junglywood Trailer Out: Shaan R Grover Stars in High-Stakes Bollywood Action Thriller",
    excerpt:
      "The explosive trailer for Junglywood showcases high-octane stunts, sharp underworld espionage, and Shaan R Grover leading an ensemble cast.",
    href: "/junglywood-trailer-shaan-r-grover",
  },
  {
    id: "disha-patani-dz",
    category: "Bollywood",
    timeAgo: "7H",
    badge: "Fashion Scoop",
    title: "Disha Patani Launches Her Own Clothing Brand DZ: 'Fashion That Moves With You'",
    excerpt:
      "Bollywood star Disha Patani steps into entrepreneurship with the launch of DZ, an athleisure and streetwear label designed for effortless everyday comfort.",
    href: "/disha-patani-launches-clothing-brand-dz",
  },
  {
    id: "bigg-boss-20-gullu",
    category: "Reality",
    timeAgo: "8H",
    badge: "Eviction Row",
    badgeType: "pink",
    title: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Captaincy Fight?",
    excerpt:
      "Gullu and Yung DSA’s physical altercation during the captaincy task has viewers demanding an immediate red card eviction.",
    href: "/bigg-boss-20-gullu-evicted-yung-dsa-fight",
  },
  {
    id: "bigg-boss-20-ration",
    category: "Reality",
    timeAgo: "10H",
    badge: "100% Ration",
    title: "Bigg Boss 20: Housemates Get 100% Ration for the First Time as BB Relents",
    excerpt:
      "After weeks of rationing punishment and hunger strikes, the housemates successfully complete the task to win a complete luxury food supply.",
    href: "/bigg-boss-20-100-per-cent-ration-housemates",
  },
  {
    id: "janhvi-concert-advice",
    category: "Reality",
    timeAgo: "12H",
    badge: "KWK 9",
    title: "Janhvi Kapoor's 'Concert' Advice for Veer Pahariya on Koffee With Karan Goes Viral",
    excerpt:
      "On Koffee With Karan Season 9, Janhvi Kapoor leaves host Karan Johar in splits after dishing candid, no-filter dating advice for Veer Pahariya.",
    href: "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
  },
  {
    id: "bigg-boss-20-uditi",
    category: "Reality",
    timeAgo: "14H",
    badge: "Heartbreak",
    title: "Bigg Boss 20: Uditi Singh Opens Up About Painful Breakup With Scout: 'I Was Completely Broken'",
    excerpt:
      "In a tearful late-night garden conversation, Uditi Singh opens up about her emotional fallout with gamer Scout and finding closure inside the house.",
    href: "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
  },
  {
    id: "kbc-18-proposal",
    category: "Reality",
    timeAgo: "16H",
    badge: "KBC 18",
    title: "KBC 18 Diwali Special: Amitabh Bachchan Grills Ranbir Kapoor About Alia Bhatt Proposal",
    excerpt:
      "Ranbir Kapoor recounts his Maasai Mara proposal to Alia Bhatt on KBC 18, prompting witty banter and warm life lessons from host Amitabh Bachchan.",
    href: "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
  },
  {
    id: "bhumi-pednekar-akshay",
    category: "Movies",
    timeAgo: "18H",
    badge: "Casting Scoop",
    title: "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan’s Next Comedy: Everything We Know",
    excerpt:
      "Following their hits Toilet and Raksha Bandhan, Bhumi Pednekar teams up with Akshay Kumar once again for Priyadarshan's upcoming horror-comedy.",
    href: "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
  },
  {
    id: "priyanka-chopra-mehendi",
    category: "Bollywood",
    timeAgo: "20H",
    badge: "Karwa Chauth",
    title: "Priyanka Chopra Shows Off DIY Karwa Chauth Mehendi With Nick Jonas & Malti Marie Initials",
    excerpt:
      "Priyanka Chopra Jonas celebrates Karwa Chauth in London with custom henna featuring Nick Jonas and daughter Malti Marie's initials.",
    href: "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
  },
  {
    id: "janhvi-peddi-controversy",
    category: "Reality",
    timeAgo: "22H",
    badge: "KWK Exclusive",
    badgeType: "pink",
    title: "Janhvi Kapoor Breaks Silence on Peddi Controversy on Koffee With Karan Season 9",
    excerpt:
      "Janhvi Kapoor addresses online rumors head-on during the KWK 9 premiere, clarifying the viral airport footage that sparked social media debate.",
    href: "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
  },
  {
    id: "ramayana-la-premiere",
    category: "Movies",
    timeAgo: "1D",
    badge: "Global Buzz",
    title: "Ramayana LA Premiere: Ranbir Kapoor, Yash & Sai Pallavi Stun Hollywood Red Carpet",
    excerpt:
      "Nitesh Tiwari's mythological epic makes global waves with a dazzling Los Angeles red carpet premiere attended by Ranbir Kapoor, Yash, and Hollywood executives.",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
  },
  {
    id: "godzilla-minus-zero",
    category: "Movies",
    timeAgo: "1D",
    badge: "Box Office",
    title: "Godzilla Minus Zero India Release Reportedly Delayed by 2 Weeks Over Ramayana IMAX Clash",
    excerpt:
      "IMAX screen negotiations between Toho's monster blockbuster and Nitesh Tiwari's Ramayana reportedly prompt a strategic 14-day shift in theatrical rollout.",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
  },
  {
    id: "vijay-rashmika-complaint",
    category: "Bollywood",
    timeAgo: "2D",
    badge: "Legal Action",
    badgeType: "pink",
    title: "Vijay Deverakonda & Rashmika Mandanna’s Team Files Cyber Crime Complaint in Hyderabad",
    excerpt:
      "The actors' management approaches Hyderabad cyber crime authorities following coordinated defamation campaigns and manipulated audio clips across social platforms.",
    href: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
  },
  {
    id: "shreya-kalra-karan-patel",
    category: "Reality",
    timeAgo: "2D",
    badge: "Reality Clash",
    title: "Shreya Kalra Hits Back at Karan Patel Over Reels Comment on Rise and Fall 2",
    excerpt:
      "Shreya Kalra claps back at Karan Patel's remarks on digital creators: 'Stop demeaning people from reality TV and digital media.' The showdown that rocked the set.",
    href: "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
  },
];

// Top trending stories for sidebar
const trendingStories: TrendingStory[] = [
  {
    id: "ramayana-trend",
    title: "Ramayana LA Premiere: Ranbir, Yash & Sai Pallavi stun Hollywood",
    category: "Bollywood",
    reactions: "85K REACTIONS",
    href: "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
  },
  {
    id: "godzilla-trend",
    title: "Godzilla Minus Zero reportedly delayed by 2 weeks over IMAX clash",
    category: "Cinema",
    reactions: "64K REACTIONS",
    href: "/godzilla-minus-zero-india-release-delayed-ramayana",
  },
  {
    id: "vijay-rashmika-trend",
    title: "Vijay & Rashmika team takes legal action over fake posts",
    category: "Bollywood",
    reactions: "52K REACTIONS",
    href: "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
  },
  {
    id: "sara-fatwa-trend",
    title: "Sara Ali Khan Faces Fatwa After Kedarnath Visit",
    category: "Bollywood",
    reactions: "48K REACTIONS",
    href: "/sara-ali-khan-fatwa-kedarnath-temple-visit",
  },
  {
    id: "patrick-stewart-trend",
    title: "Patrick Stewart Dies at 86: Professor X's Final Marvel Role",
    category: "Movies",
    reactions: "41K REACTIONS",
    href: "/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
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

      <main className="min-h-screen">
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

        {/* Filter Strip */}
        <div className="wrap py-4">
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

        {/* Main News Layout: Left Timeline, Right Sidebar */}
        <section className="section">
          <div className="news-layout">
            {/* Timeline Column */}
            <div>
              <div className="tl" role="feed" aria-busy="false">
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={article.href}
                      className="tl-item group"
                      data-t={article.category}
                    >
                      <span className="tl-time">{article.timeAgo}</span>
                      <div>
                        <span
                          className={cn(
                            "badge",
                            article.badgeType === "pink" && "pink"
                          )}
                        >
                          {article.badge}
                        </span>
                        <h3>{article.title}</h3>
                        {article.excerpt && (
                          <p className="text-sm text-[var(--muted)] mt-1.5 line-clamp-2 leading-relaxed">
                            {article.excerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="py-12 text-center text-[var(--muted)]">
                    No articles found for this category yet.
                  </div>
                )}
              </div>
            </div>

            {/* Trending & Editorial Aside */}
            <aside>
              <div className="trend-panel">
                <h2>⚡ Trending Right Now</h2>
                {trendingStories.map((item, idx) => (
                  <Link key={item.id} href={item.href} className="trend-item">
                    <span className="trend-rank">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="trend-text">
                      <h3>{item.title}</h3>
                      <span>
                        {item.category.toUpperCase()} · {item.reactions}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="note">
                Every story is tagged and corrected in the open. Spotted an error or have a tip?
                <Link href="/editorial-policy">Editorial &amp; Corrections →</Link>
                <Link href="/contact">Pitch a story →</Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Newsletter CTA Band */}
        <section className="cta-band">
          <h2 className="disp">
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
