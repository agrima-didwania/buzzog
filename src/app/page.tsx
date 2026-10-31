"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PollData {
  id: string;
  question: string;
  category: string;
  options: {
    id: string;
    label: string;
    votes: number;
    percentage: number;
  }[];
  totalVotes: number;
}

function getOrCreateVoterToken(): string {
  if (typeof window === "undefined") return "voter_ssr";
  let token = localStorage.getItem("buzz_voter_token");
  if (!token) {
    token = "voter_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 8);
    localStorage.setItem("buzz_voter_token", token);
  }
  return token;
}

export default function Home() {
  // Category Filter State (All + 5 categories: Latest, Exclusive, Reality TV Updates, Bollywood, News)
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Community Poll State (real persistence via /api/poll)
  const [poll, setPoll] = useState<PollData>({
    id: "diwali-imax-clash-2026",
    question: "Big Screen Clash: Which epic are you watching first on IMAX?",
    category: "IMAX Box Office",
    options: [
      { id: "A", label: "Ramayana: Part 1 (Ranbir & Yash)", votes: 142, percentage: 68 },
      { id: "B", label: "Godzilla Minus Zero (Monsterverse)", votes: 67, percentage: 32 },
    ],
    totalVotes: 209,
  });
  const [pollVoted, setPollVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [votingLoading, setVotingLoading] = useState(false);

  // Newsletter State
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [subscribeError, setSubscribeError] = useState("");

  // Check if user has already voted on this device & fetch latest poll data
  useEffect(() => {
    let isMounted = true;
    const loadPollState = async () => {
      const hasVotedLocal = localStorage.getItem("buzz_poll_voted_diwali-imax-clash-2026");
      try {
        const res = await fetch("/api/poll");
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data?.options) {
            setPoll(data);
            if (hasVotedLocal) {
              setPollVoted(true);
              setSelectedOption(hasVotedLocal);
            }
          }
        }
      } catch {
        if (isMounted && hasVotedLocal) {
          setPollVoted(true);
          setSelectedOption(hasVotedLocal);
        }
      }
    };

    loadPollState();
    return () => {
      isMounted = false;
    };
  }, []);

  // Handle Poll Vote Submission
  const handleVote = async (optionId: string) => {
    if (pollVoted || votingLoading) return;
    setVotingLoading(true);

    try {
      const voterToken = getOrCreateVoterToken();

      const res = await fetch("/api/poll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ optionId, voterToken }),
      });

      const data = await res.json();
      if (res.ok && data.poll) {
        setPoll(data.poll);
        setPollVoted(true);
        setSelectedOption(optionId);
        localStorage.setItem("buzz_poll_voted_diwali-imax-clash-2026", optionId);
      }
    } catch (err) {
      console.error("[Poll Vote Error]:", err);
    } finally {
      setVotingLoading(false);
    }
  };

  // Handle Newsletter Join & Welcome Email
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setSubscribeError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Subscription failed. Please check your email and try again.");
      }

      setNewsletterSubmitted(true);
      setSubscribeMessage(data.message || "YOU'RE IN. WELCOME TO THE BUZZ SQUAD 🎉 Check your email!");
      setEmail("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setSubscribeError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  // The 5 requested categories: Latest, Exclusive, Reality TV Updates, Bollywood & Hollywood, News (plus All filter option)
  const categories = [
    "All",
    "Latest",
    "Exclusive",
    "Reality TV Updates",
    "Bollywood & Hollywood",
    "News",
  ];

  // 5 Verified editorial stories mapped directly to the 5 requested categories (Latest published article in Latest)
  interface EditorialArticle {
    id: string;
    anchorId: string;
    href?: string;
    title: string;
    excerpt: string;
    category: string;
    secondaryCategory?: string;
    displayCategory: string;
    badge: string;
    badgeType: string;
    readTime: string;
    image?: string;
    bgGradient?: string;
    watermarkText?: string;
    watermarkColor?: string;
  }

  const editorialArticles: EditorialArticle[] = [
    {
      id: "sanjay-dutt-kaante-2-promise",
      anchorId: "sanjay-dutt-story",
      href: "/sanjay-dutt-kaante-2-promise-sanjay-gupta-death",
      title: "Sanjay Dutt Promises to Make Kaante 2 in Memory of Sanjay Gupta",
      excerpt: "Sanjay Dutt shares an emotional tribute to late filmmaker Sanjay Gupta, promising to fulfill his dream project Kaante 2 following Gupta’s sudden demise.",
      category: "Bollywood",
      secondaryCategory: "News",
      displayCategory: "BOLLYWOOD & NEWS",
      badge: "Kaante 2 Promise",
      badgeType: "lime",
      readTime: "3 MIN READ",
      image: "/images/sanjay-dutt-kaante-2-promise-sanjay-gupta-death.jpg",
    },
    {
      id: "varun-sidharth-reunion",
      anchorId: "varun-sid-story",
      href: "/varun-dhawan-sidharth-malhotra-kiara-advani-reunion",
      title: "Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry” With Kiara Advani",
      excerpt: "Varun Dhawan visits Sidharth Malhotra and Kiara Advani in Mumbai, sparking viral Student of the Year nostalgia with Karan Johar joining the fun.",
      category: "Bollywood",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "BOLLYWOOD REUNION",
      badge: "SOTY Reunion",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/varun-dhawan-sidharth-malhotra-kiara-advani-reunion.jpg",
    },
    {
      id: "sanjay-gupta-passes-away",
      anchorId: "sanjay-gupta-story",
      href: "/sanjay-gupta-passes-away-shootout-at-wadala-director",
      title: "Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala",
      excerpt: "Filmmaker Sanjay Gupta, pioneer of stylish action blockbusters including Kaante and Shootout at Wadala, passes away in Mumbai.",
      category: "Bollywood",
      secondaryCategory: "News",
      displayCategory: "BOLLYWOOD & NEWS",
      badge: "In Memoriam",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg",
    },
    {
      id: "iifa-2026-winners",
      anchorId: "iifa-story",
      href: "/iifa-2026-winners-list",
      title: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards, Ranveer & Aneet Top Acting Prizes",
      excerpt: "Aditya Dhar's Dhurandhar dominates the 26th IIFA Awards with 12 trophies while Aryan Khan's The Ba***ds of Bollywood takes Best Series.",
      category: "Bollywood",
      secondaryCategory: "News",
      displayCategory: "BOLLYWOOD & WEB SERIES",
      badge: "IIFA 2026",
      badgeType: "lime",
      readTime: "4 MIN READ",
      image: "/images/iifa-2026-winners-list.jpg",
    },
    {
      id: "ibrahim-palak-breakup",
      anchorId: "ibrahim-palak-story",
      href: "/ibrahim-ali-khan-palak-tiwari-breakup",
      title: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years",
      excerpt: "Bollywood’s young pair Ibrahim Ali Khan and Palak Tiwari have reportedly parted ways after more than three years together. Here is what sources say about the calm split.",
      category: "Bollywood",
      secondaryCategory: "News",
      displayCategory: "BOLLYWOOD & NEWS",
      badge: "Breakup Scoop",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg",
    },
    {
      id: "jiya-shankar-unfollows-kd",
      anchorId: "jiya-kd-story",
      href: "/jiya-shankar-unfollows-fiance-kd-instagram",
      title: "Jiya Shankar Unfollows Fiancé KD on Instagram: What We Know So Far",
      excerpt: "Bigg Boss OTT 2 star Jiya Shankar sparks breakup rumours after unfollowing fiancé Kaaran Dhanak (KD) and sharing emotional notes before issuing a statement.",
      category: "Bollywood",
      secondaryCategory: "Reality TV Updates",
      displayCategory: "BOLLYWOOD & REALITY",
      badge: "Breakup Rumours",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
    },
    {
      id: "parivarik-manuranjan-ott-release",
      anchorId: "manuranjan-story",
      href: "/parivarik-manuranjan-ott-release-date-sony-liv",
      title: "Parivarik ManuRanjan: Pankaj Tripathi & Aditi Rao Hydari's Rom-Com Sets Sony LIV Date",
      excerpt: "Pankaj Tripathi and Aditi Rao Hydari come together for the first time in Parivarik ManuRanjan, premiering directly on Sony LIV on November 13.",
      category: "Bollywood",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "MOVIES & BOLLYWOOD",
      badge: "OTT Premiere",
      badgeType: "lime",
      readTime: "3 MIN READ",
      image: "/images/parivarik-manuranjan-ott-release-date-sony-liv.jpg",
    },
    {
      id: "ramayana-advance-booking-us",
      anchorId: "ramayana-booking-story",
      href: "/ramayana-advance-booking-us-jump-la-premiere",
      title: "Ramayana Advance Booking: US Sales Jump 27% After LA Premiere",
      excerpt: "Ramayana: Part One US premiere ticket sales surged 27% in 24 hours following its starry LA screening, while Indian advance bookings crossed ₹15 crore.",
      category: "Bollywood",
      secondaryCategory: "Movies",
      displayCategory: "BOLLYWOOD, MOVIES & NEWS",
      badge: "Box Office Jump",
      badgeType: "lime",
      readTime: "3 MIN READ",
      image: "/images/ramayana-advance-booking-us-jump-la-premiere.jpg",
    },
    {
      id: "priyanka-chopra-we-were-here",
      anchorId: "priyanka-story",
      href: "/priyanka-chopra-we-were-here-executive-producer",
      title: "Priyanka Chopra Joins Oscar-Qualified Short Film We Were Here",
      excerpt: "Priyanka Chopra Jonas is now an executive producer on “We Were Here,” an Indian short film that has qualified for the Oscars.",
      category: "News",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "MOVIES & NEWS",
      badge: "Oscar Qualified",
      badgeType: "lime",
      readTime: "3 MIN READ",
      image: "/images/priyanka-chopra-we-were-here-executive-producer.jpg",
    },
    {
      id: "sara-ali-khan-fatwa-kedarnath",
      anchorId: "sara-fatwa-story",
      href: "/sara-ali-khan-fatwa-kedarnath-temple-visit",
      title: "Sara Ali Khan Faces Fatwa After Kedarnath Temple Visit",
      excerpt: "A UP cleric has issued a fatwa against Sara Ali Khan after her Kedarnath visit. Here is what he said, what happened at the temple, and the affidavit rule.",
      category: "Bollywood",
      secondaryCategory: "News",
      displayCategory: "BOLLYWOOD & NEWS",
      badge: "Fatwa Row",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/sara-ali-khan-fatwa-kedarnath-temple-visit.jpg",
    },
    {
      id: "eetha-trailer-shraddha-kapoor",
      anchorId: "eetha-story",
      href: "/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar",
      title: "Eetha Trailer Out: Shraddha Kapoor Becomes Tamasha Queen Vithabai Narayangaonkar",
      excerpt: "The Eetha trailer dropped on 30 October 2026, offering a powerful look at Shraddha Kapoor as Maharashtra’s folk legend Vithabai Narayangaonkar.",
      category: "Bollywood",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "BOLLYWOOD & MOVIES",
      badge: "Trailer Out",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg",
    },
    {
      id: "patrick-stewart-dies-at-86",
      anchorId: "latest-story",
      href: "/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
      title: "Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role",
      excerpt: "Patrick Stewart, Star Trek's Picard and X-Men's Professor X, died at 86. Marvel confirms Avengers: Doomsday is his final on-screen role.",
      category: "News",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "HOLLYWOOD & MOVIES",
      badge: "In Memoriam",
      badgeType: "pink",
      readTime: "4 MIN READ",
      image: "/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg",
    },
    {
      id: "mirzapur-the-movie-ott",
      anchorId: "mirzapur-story",
      href: "/mirzapur-the-movie-prime-video-extended-cut",
      title: "Mirzapur: The Movie Is Now Streaming on Prime Video With an Extended Cut",
      excerpt: "Mirzapur: The Movie is streaming on Prime Video with an extended cut packing 14 extra minutes of unseen scenes.",
      category: "Latest",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "BOLLYWOOD & WEB SERIES",
      badge: "Extended Cut",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/mirzapur-the-movie-prime-video-extended-cut.jpg",
    },
    {
      id: "siddharth-anand-king-srk",
      anchorId: "king-story",
      href: "/siddharth-anand-time-for-the-world-king-srk-birthday",
      title: "Siddharth Anand’s “Time For The World” Post Has SRK Fans Guessing: Is a King Update Coming?",
      excerpt: "Siddharth Anand posted “It’s” and then “Time For The World” on X. With SRK’s 61st birthday days away, fans are anticipating a massive King reveal.",
      category: "Latest",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "BOLLYWOOD & MOVIES",
      badge: "King Update",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/siddharth-anand-time-for-the-world-king-srk-birthday.jpg",
    },
    {
      id: "junglywood-trailer-shaan-grover",
      anchorId: "junglywood-story",
      href: "/junglywood-trailer-shaan-r-grover",
      title: "Junglywood Trailer Out: Shaan R Grover Takes On Bollywood's Insider vs Outsider Debate",
      excerpt: "The Junglywood trailer is out. Shaan R Grover stars in Chand Mohammad’s zero-VFX dark comedy thriller exploring Bollywood's insider vs outsider debate.",
      category: "Latest",
      secondaryCategory: "Bollywood & Hollywood",
      displayCategory: "BOLLYWOOD & MOVIES",
      badge: "Trailer Out",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/junglywood-trailer-shaan-r-grover.jpg",
    },
    {
      id: "bigg-boss-20-gullu-eviction",
      anchorId: "reality-gullu-story",
      href: "/bigg-boss-20-gullu-evicted-yung-dsa-fight",
      title: "Bigg Boss 20: Will Gullu Be Evicted After Yung DSA Fight?",
      excerpt: "Gullu and Yung DSA’s captaincy task fight has fans demanding eviction, drawing parallels with Nakul Dhull’s exit. Here’s what we know about Bigg Boss 20 so far.",
      category: "Reality TV Updates",
      displayCategory: "REALITY TV & BIGG BOSS 20",
      badge: "Eviction Row",
      badgeType: "lime",
      readTime: "3 MIN READ",
      image: "/images/bigg-boss-20-gullu-evicted-yung-dsa-fight.jpg",
    },
    {
      id: "disha-patani-clothing-brand-dz",
      anchorId: "disha-dz-story",
      href: "/disha-patani-launches-clothing-brand-dz",
      title: "Disha Patani Launches Her Own Clothing Brand DZ",
      excerpt: "Disha Patani turns fashion entrepreneur with DZ, her brand featuring relaxed baggy fits, alien-themed designs and a bold new music video.",
      category: "Bollywood & Hollywood",
      displayCategory: "BOLLYWOOD & FASHION",
      badge: "Fashion Label",
      badgeType: "pink",
      readTime: "3 MIN READ",
      image: "/images/disha-patani-launches-clothing-brand-dz.jpg",
    },
    {
      "id": "bigg-boss-20-100-percent-ration",
      "anchorId": "reality-ration-story",
      "href": "/bigg-boss-20-100-per-cent-ration-housemates",
      "title": "Bigg Boss 20: Housemates Get 100% Ration for the First Time, and the House Is Celebrating",
      "excerpt": "Good news has finally come to the Bigg Boss 20 house as the contestants secure a full 100% ration after weeks of low supplies and high drama.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "100% Ration",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
    },
    {
      "id": "janhvi-veer-concert-latest",
      "anchorId": "kwk-story",
      "href": "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
      "title": "Janhvi Kapoor's \"Concert\" Advice for Veer Pahariya on Koffee With Karan Is Going Viral",
      "excerpt": "Janhvi Kapoor drops witty dating advice for Veer Pahariya on Koffee With Karan Season 9: \u201c\u0909\u0938\u0947 \u0915\u092d\u0940 \u0915\u093f\u0938\u0940 \u0915\u0949\u0928\u094d\u0938\u0930\u094d\u091f \u092e\u0947\u0902 \u092e\u0924 \u0932\u0947 \u091c\u093e\u0928\u093e!\u201d Fans connect the viral dots to Tara Sutaria.",
      "category": "Reality TV Updates",
      "secondaryCategory": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & REALITY",
      "badge": "Viral Scoop",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
    },
    {
      "id": "bigg-boss-20-uditi-singh-story",
      "anchorId": "reality-story",
      "href": "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
      "title": "Bigg Boss 20: Scout-Love Talk Brings Back Uditi Singh\u2019s Painful Breakup Memory",
      "excerpt": "Scout OP\u2019s talk with Love Gill stirs up the house as Uditi Singh opens up to Arishfa Khan about her own past heartbreak and Karan Wahi memories.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Trending",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
    },
    {
      "id": "kbc-18-ranbir-proposal-latest",
      "anchorId": "reality-kbc",
      "href": "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
      "title": "KBC 18 Diwali Special: Ramayana Cast Joins Big B, Ranbir Shares Alia Bhatt Proposal Story",
      "excerpt": "Ranbir Kapoor, Sai Pallavi and Ravie Dubey join Amitabh Bachchan on KBC 18 Diwali special, where Ranbir reveals his Masai Mara proposal.",
      "category": "Reality TV Updates",
      "secondaryCategory": "Bollywood & Hollywood",
      "displayCategory": "REALITY TV & BOLLYWOOD",
      "badge": "Diwali Special",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
    },
    {
      "id": "bhumi-akshay-priyadarshan-story",
      "anchorId": "bollywood-casting",
      "href": "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
      "title": "Bhumi Pednekar Joins Akshay Kumar in Priyadarshan\u2019s Next Film",
      "excerpt": "Bhumi Pednekar is set to star opposite Akshay Kumar in Priyadarshan\u2019s next comedy thriller produced by Tips Films.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Casting Exclusive",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
    },
    {
      "id": "priyanka-chopra-karwa-chauth-story",
      "anchorId": "bollywood-lifestyle",
      "href": "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
      "title": "Priyanka Chopra Does Her Own Karwa Chauth Mehendi for Nick Jonas, and Malti Is Part of It Too",
      "excerpt": "Priyanka Chopra made her own Karwa Chauth mehendi for Nick Jonas with a sweet touch for daughter Malti Marie. See what she wrote.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Trending",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
    },
    {
      "id": "janhvi-kapoor-peddi-bollywood",
      "anchorId": "bollywood",
      "href": "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
      "title": "Janhvi Kapoor Breaks Silence on Peddi Controversy: 'A Violating Experience'",
      "excerpt": "Janhvi Kapoor opens up on the Peddi objectification row on KWK 9. Read what she said, the director's apology and reactions.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "\ud83d\udd25 Bollywood & Hollywood",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
    },
    {
      "id": "shreya-kalra-karan-patel-reality",
      "anchorId": "reality-shows",
      "href": "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      "title": "Shreya Kalra Hits Back at Karan Patel Over His Reels Comment",
      "excerpt": "Karan Patel asked Shreya Kalra and Rishabh Jaiswal how long they will stay in reels. Shreya fires back: 'stop demeaning people from reality TV.'",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Reality TV Updates",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
    },
    {
      "id": "ramayana-la-premiere-buzz",
      "anchorId": "bollywood-premiere",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "Ramayana LA Premiere: Ranbir Kapoor, Yash & Sai Pallavi Stun Hollywood",
      "excerpt": "Inside the \u20b94,000 Cr global premiere at the Academy Museum in Los Angeles with Jada Pinkett Smith and global press.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Global Premiere",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "godzilla-imax-delay",
      "anchorId": "industry-news",
      "href": "/godzilla-minus-zero-india-release-delayed-ramayana",
      "title": "Godzilla Minus Zero skips Diwali clash: solo IMAX run for Ranbir's Ramayana",
      "excerpt": "Legendary monster flick shifts India theatrical rollout to give Nitesh Tiwari's mythological epic a clean premium screen window.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "News",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
    },
    {
      "id": "vijay-rashmika-cybercrime",
      "anchorId": "exclusive",
      "href": "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      "title": "Vijay & Rashmika team files cyber crime complaint over KWK 9 online trolling",
      "excerpt": "Formal police complaint registered in Hyderabad against malicious fan accounts circulating defamatory morphed clips.",
      "category": "Exclusive",
      "displayCategory": "EXCLUSIVE",
      "badge": "Exclusive",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/celebrity-cybercrime-complaint-thumbnail.jpg"
    }
  ];

  const visibleArticles =
    activeCategory === "All"
      ? editorialArticles
      : editorialArticles.filter(
          (art) =>
            art.category === activeCategory ||
            art.secondaryCategory === activeCategory ||
            (activeCategory === "Bollywood & Hollywood" &&
              (art.category === "Bollywood" || art.category === "Bollywood & Hollywood" || art.secondaryCategory === "Bollywood & Hollywood")) ||
            (activeCategory === "Bollywood" &&
              (art.category === "Bollywood" || art.category === "Bollywood & Hollywood"))
        );

  // Pagination logic:
  // Page 1 has 11 articles + 12th box is the Live Community Poll (12 boxes total).
  // Subsequent pages (Page 2, 3...) each contain up to 24 boxes.
  const PAGE_1_ARTICLES_COUNT = 11;
  const PAGE_N_ARTICLES_COUNT = 24;

  const totalArticles = visibleArticles.length;
  const totalPages =
    totalArticles <= PAGE_1_ARTICLES_COUNT
      ? 1
      : 1 + Math.ceil((totalArticles - PAGE_1_ARTICLES_COUNT) / PAGE_N_ARTICLES_COUNT);

  let pageArticles: EditorialArticle[] = [];
  if (currentPage === 1) {
    pageArticles = visibleArticles.slice(0, PAGE_1_ARTICLES_COUNT);
  } else {
    const startIndex = PAGE_1_ARTICLES_COUNT + (currentPage - 2) * PAGE_N_ARTICLES_COUNT;
    pageArticles = visibleArticles.slice(startIndex, startIndex + PAGE_N_ARTICLES_COUNT);
  }

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);
    const el = document.getElementById("news");
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Instructed preservation: "and keep the live community poll as it is. dont chnage that"
  const showPollCard = true;

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* ===== NAV ===== */}
      <Header activeNav="Home" />

      {/* ===== HERO: MAIN FEATURED STORY & TRENDING ===== */}
      <main>
        <section className="hero" id="featured">
          {/* 1. Main Featured Story (Commanding Top Story Presentation) */}
          <Link
            href="/sanjay-dutt-kaante-2-promise-sanjay-gupta-death"
            className="feature-card block transition-all hover:border-[var(--lime)] focus-visible:ring-2 focus-visible:ring-[var(--lime)] group"
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="Read full article: Sanjay Dutt Promises Kaante 2 After Sanjay Gupta's Death"
          >
            <div className="feature-media" style={{ overflow: "hidden", position: "relative" }}>
              <Image
                src="/images/sanjay-dutt-kaante-2-promise-sanjay-gupta-death.jpg"
                alt="Sanjay Dutt Promises Kaante 2 After Sanjay Gupta’s Death"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                style={{ objectFit: "cover", objectPosition: "center" }}
                className="group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="noise" style={{ pointerEvents: "none" }}></div>
              <div className="feature-tag flex items-center gap-2">
                <span className="badge pink">💔 In Memoriam</span>
                <span className="badge lime">Kaante 2</span>
                <span className="badge">Bollywood Tribute</span>
              </div>
            </div>
            <div className="feature-body">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[var(--lime)] font-bold tracking-wider uppercase">
                <span>★ TOP STORY · KAANTE 2 PROMISE</span>
              </div>
              <h1 className="disp" style={{ color: "#fff" }}>
                Sanjay Dutt Promises to Make Kaante 2 in Memory of Sanjay Gupta
              </h1>
              <p>
                Bollywood mourns filmmaker Sanjay Gupta as his longtime friend and collaborator Sanjay Dutt pens an emotional tribute, vowing to fulfill his dream of bringing Kaante 2 to life.
              </p>
              <div className="meta-row mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span>BOLLYWOOD &amp; NEWS</span>
                  <span className="dot-sep">◆</span>
                  <span>3 MIN READ</span>
                  <span className="dot-sep">◆</span>
                  <span style={{ color: "var(--lime)" }}>EDITORIAL DESK</span>
                </div>
                <span className="text-xs font-mono font-bold text-[var(--lime)] hidden sm:inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Full Story →
                </span>
              </div>
            </div>
          </Link>

          {/* 2. Trending Stories Panel (Genuine, Non-Repeating Stories) */}
          <div className="trend-panel" aria-label="Trending Stories Panel">
            <h2>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--lime)] animate-pulse inline-block"></span>
              ⚡ Trending Stories
            </h2>
            <div className="trend-item">
              <span className="trend-rank">01</span>
              <div className="trend-text">
                <Link
                  href="/sanjay-dutt-kaante-2-promise-sanjay-gupta-death"
                  style={{ color: "inherit" }}
                >
                  <h3>Sanjay Dutt promises Kaante 2 in memory of Sanjay Gupta: “I will make your dream come true”</h3>
                  <span>BOLLYWOOD &amp; NEWS · 410K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">02</span>
              <div className="trend-text">
                <Link
                  href="/varun-dhawan-sidharth-malhotra-kiara-advani-reunion"
                  style={{ color: "inherit" }}
                >
                  <h3>Varun Dhawan &amp; Sidharth Malhotra reunion: “Never a rivalry” photo with Kiara Advani goes viral</h3>
                  <span>BOLLYWOOD · 390K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">03</span>
              <div className="trend-text">
                <Link
                  href="/sanjay-gupta-passes-away-shootout-at-wadala-director"
                  style={{ color: "inherit" }}
                >
                  <h3>Sanjay Gupta passes away: Kaante &amp; Shootout at Wadala director dies in Mumbai</h3>
                  <span>BOLLYWOOD &amp; NEWS · 380K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">04</span>
              <div className="trend-text">
                <Link
                  href="/iifa-2026-winners-list"
                  style={{ color: "inherit" }}
                >
                  <h3>IIFA 2026 winners: Dhurandhar wins 12 awards; Ranveer Singh &amp; Aneet Padda bag top honors</h3>
                  <span>BOLLYWOOD &amp; WEB SERIES · 350K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">05</span>
              <div className="trend-text">
                <Link
                  href="/ibrahim-ali-khan-palak-tiwari-breakup"
                  style={{ color: "inherit" }}
                >
                  <h3>Ibrahim Ali Khan &amp; Palak Tiwari reportedly break up after 3 years: Joint shoots on hold</h3>
                  <span>BOLLYWOOD &amp; NEWS · 340K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">06</span>
              <div className="trend-text">
                <Link
                  href="/jiya-shankar-unfollows-fiance-kd-instagram"
                  style={{ color: "inherit" }}
                >
                  <h3>Jiya Shankar unfollows fiancé KD on Instagram: Cryptic posts spark breakup speculation</h3>
                  <span>BOLLYWOOD &amp; REALITY · 325K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">07</span>
              <div className="trend-text">
                <Link
                  href="/parivarik-manuranjan-ott-release-date-sony-liv"
                  style={{ color: "inherit" }}
                >
                  <h3>Parivarik ManuRanjan: Pankaj Tripathi &amp; Aditi Rao Hydari rom-com premieres Nov 13 on Sony LIV</h3>
                  <span>MOVIES &amp; BOLLYWOOD · 310K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">08</span>
              <div className="trend-text">
                <Link
                  href="/ramayana-advance-booking-us-jump-la-premiere"
                  style={{ color: "inherit" }}
                >
                  <h3>Ramayana advance booking: US sales jump 27% after starry LA premiere</h3>
                  <span>BOLLYWOOD &amp; MOVIES · 295K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">09</span>
              <div className="trend-text">
                <Link
                  href="/priyanka-chopra-we-were-here-executive-producer"
                  style={{ color: "inherit" }}
                >
                  <h3>Priyanka Chopra joins Oscar-qualified short film We Were Here as executive producer</h3>
                  <span>MOVIES &amp; NEWS · 275K REACTIONS</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LATEST NEWS & FRESH BUZZ SECTION ===== */}
        <section className="section" id="news">
          <div className="section-head">
            <div>
              <h2>
                Fresh <span className="accent">Buzz</span> & Latest News
              </h2>
              <p className="text-xs font-mono text-[var(--muted)] mt-1 tracking-wider uppercase">
                Verified reporting across Bollywood, Cinema & Reality TV
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--lime)] font-bold hidden sm:inline-block">
              UPDATED HOURLY
            </span>
          </div>

          {/* Category Filter Strip: The 5 Requested Categories (Latest, Exclusive, Reality TV Updates, Bollywood, News) */}
          <div className="cat-strip mb-6" id="categories" role="tablist" aria-label="Filter Buzz by Category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => { setActiveCategory(activeCategory === cat ? "All" : cat); setCurrentPage(1); }}
                className={`cat-chip ${activeCategory === cat ? "on" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid">
            {/* Editorial Article Cards */}
            {pageArticles.map((article) => {
              const cardContent = (
                <>
                  <div
                    className="card-media relative overflow-hidden"
                    style={{
                      background: article.bgGradient || undefined,
                      position: "relative",
                    }}
                  >
                    {article.image && (
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                    {article.watermarkText && (
                      <>
                        <div
                          className={`absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center font-anton text-7xl ${article.watermarkColor} font-extrabold select-none tracking-widest`}
                        >
                          {article.watermarkText}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#111115] to-transparent pointer-events-none" />
                      </>
                    )}
                    <span className={`badge ${article.badgeType === "pink" ? "pink" : ""}`}>
                      {article.badge}
                    </span>
                  </div>
                  <div className="card-body">
                    <h3>{article.title}</h3>
                    <p className="card-excerpt">{article.excerpt}</p>
                    <div className="meta-row">
                      <span>{article.displayCategory}</span>
                      <span className="dot-sep">◆</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </>
              );

              if (article.href) {
                return (
                  <Link
                    key={article.id}
                    id={article.anchorId}
                    href={article.href}
                    className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={article.id}
                  id={article.anchorId}
                  className="card focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
                >
                  {cardContent}
                </div>
              );
            })}

            {/* REAL COMMUNITY POLL CARD (Persisted via /api/poll) */}
            {currentPage === 1 && showPollCard && (
              <div className="poll-card" id="polls">
                <span className="badge pink">🗳️ Live Community Poll</span>
                <h3>{poll.question}</h3>

                {poll.options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      className={`poll-opt ${isSelected ? "selected" : ""}`}
                      onClick={() => handleVote(opt.id)}
                      disabled={pollVoted || votingLoading}
                      aria-label={`Vote for ${opt.label}. Currently at ${opt.percentage}%`}
                    >
                      <div className="poll-opt-label">
                        <span>{opt.label}</span>
                        <span className="pct font-mono font-bold">{opt.percentage}%</span>
                      </div>
                      <div className="poll-bar-track">
                        <div
                          className="poll-bar-fill"
                          style={{
                            width: `${opt.percentage}%`,
                            background: isSelected ? "var(--lime)" : undefined,
                          }}
                        ></div>
                      </div>
                    </button>
                  );
                })}

                <div className="poll-votes font-mono text-xs text-[var(--muted)] mt-2">
                  {poll.totalVotes.toLocaleString()} verified community votes recorded
                </div>

                {pollVoted && (
                  <div
                    className="poll-locked-msg text-xs text-[var(--lime)] font-mono font-bold mt-2"
                    role="status"
                  >
                    ✓ Vote recorded — thanks for having your say!
                  </div>
                )}

                <div className="meta-row mt-auto pt-3 border-t border-white/[0.06]">
                  <span>COMMUNITY FORUM</span>
                  <span className="dot-sep">◆</span>
                  <span>LIVE PERSISTED</span>
                </div>
              </div>
            )}
          </div>

          {/* Pagination Navigation Bar */}
          {totalPages > 1 && (
            <nav
              className="pagination flex items-center justify-center gap-1.5 sm:gap-2 mt-12 mb-4 py-3 flex-wrap"
              aria-label="Fresh Buzz articles pagination"
            >
              {/* Previous Page Arrow Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10 px-3.5 rounded-xl bg-[var(--ink-2)] border border-white/10 text-[var(--muted)] hover:text-white hover:border-[var(--lime)] hover:bg-[var(--ink-3)] font-mono font-semibold text-xs flex items-center gap-1.5 transition-all disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
                aria-label="Previous Page"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
                <span className="hidden sm:inline">Prev</span>
              </button>

              {/* Numbered Page Buttons with increasing numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    aria-current={isActive ? "page" : undefined}
                    className={`h-10 min-w-10 px-3 rounded-xl font-mono font-bold text-sm flex items-center justify-center transition-all cursor-pointer ${
                      isActive
                        ? "bg-[var(--lime)] text-[var(--ink)] shadow-[0_0_16px_rgba(111,207,74,0.35)] scale-105"
                        : "bg-[var(--ink-2)] border border-white/10 text-[var(--muted)] hover:text-white hover:border-[var(--lime)] hover:bg-[var(--ink-3)]"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Page Arrow Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-10 px-3.5 rounded-xl bg-[var(--ink-2)] border border-white/10 text-[var(--muted)] hover:text-white hover:border-[var(--lime)] hover:bg-[var(--ink-3)] font-mono font-semibold text-xs flex items-center gap-1.5 transition-all disabled:opacity-25 disabled:pointer-events-none cursor-pointer"
                aria-label="Next Page"
              >
                <span className="hidden sm:inline">Next</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </nav>
          )}
        </section>

        {/* ===== BUZZ-O-METER (Transparent Editorial Heat Index) ===== */}
        <section className="meter-section" id="buzz-o-meter">
          <div className="meter-inner">
            <div className="meter-head">
              <h2 className="disp">The Buzz-O-Meter</h2>
              <p>
                Weekly Entertainment Heat Index — measured by search volume, social sentiment & box office tracking.
              </p>
            </div>
            <div className="meter-list">
              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">01</span>
                  <span className="meter-avatar" style={{ background: "var(--lime)" }}>
                    R
                  </span>
                  <span>Ramayana in LA World Premiere</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "98%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">98</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">02</span>
                  <span className="meter-avatar" style={{ background: "var(--magenta)" }}>
                    G
                  </span>
                  <span>Godzilla Minus Zero IMAX Release</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "92%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">92</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">03</span>
                  <span className="meter-avatar" style={{ background: "#8b6fe0" }}>
                    V
                  </span>
                  <span>Vijay & Rashmika Legal Complaint</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "87%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">87</div>
              </div>

              <div className="meter-row" id="bigg-boss">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">04</span>
                  <span className="meter-avatar" style={{ background: "#e08b6f" }}>
                    B
                  </span>
                  <span>Bigg Boss Weekend Nominations</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "81%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">81</div>
              </div>

              <div className="meter-row">
                <div className="meter-name">
                  <span className="font-anton text-base text-neutral-500 w-5">05</span>
                  <span className="meter-avatar" style={{ background: "#6fd0e0" }}>
                    S
                  </span>
                  <span>Splitsvilla Elimination Heat</span>
                </div>
                <div className="meter-track">
                  <div className="meter-fill" style={{ width: "74%" }}></div>
                </div>
                <div className="meter-score font-mono font-bold">74</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== NEWSLETTER CTA BAND ===== */}
        <section className="cta-band" aria-labelledby="ctaHeading">
          <h2 className="disp" id="ctaHeading">
            Never miss a <span>plot twist</span> again
          </h2>
          <p>Drop your email. Get the juiciest updates before your group chat does.</p>
          <form className="cta-form" onSubmit={handleNewsletterSubmit}>
            <label htmlFor="newsletterEmail" className="sr-only">
              Email Address for Buzz Squad Newsletter
            </label>
            <input
              id="newsletterEmail"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (subscribeError) setSubscribeError("");
              }}
              placeholder="Enter your email address..."
              required
              disabled={submitting}
              className="focus-visible:ring-2 focus-visible:ring-[var(--lime)]"
            />
            <button
              type="submit"
              disabled={submitting}
              className="focus-visible:ring-2 focus-visible:ring-[var(--lime)] cursor-pointer"
            >
              {submitting ? "Joining..." : "Join the Buzz Squad"}
            </button>
          </form>
          <div
            className="cta-note"
            id="ctaNote"
            role="status"
            aria-live="polite"
            style={
              subscribeError
                ? { color: "var(--magenta)", fontWeight: "bold" }
                : newsletterSubmitted
                ? { color: "var(--lime)", fontWeight: "bold" }
                : {}
            }
          >
            {subscribeError
              ? `⚠️ ${subscribeError}`
              : newsletterSubmitted
              ? subscribeMessage
              : "NO SPAM. JUST DRAMA. UNSUBSCRIBE ANYTIME."}
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
