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
      "id": "disha-patani-clothing-brand-dz",
      "anchorId": "latest-story",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "Disha Patani Launches Her Own Clothing Brand DZ",
      "excerpt": "Disha Patani turns fashion entrepreneur with DZ, her brand featuring relaxed baggy fits, alien-themed designs and a bold new music video.",
      "category": "Latest",
      "secondaryCategory": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Latest",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
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
      "id": "ranbir-yash-academy-museum-0",
      "anchorId": "story-archive-0",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "Ranbir Kapoor & Yash Receive Standing Ovation at Academy Museum Premiere",
      "excerpt": "Hollywood producers and critics praise the scale and visual fidelity of Ramayana as Ranbir and Yash take the LA stage.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Global Buzz",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "bb20-secret-pact-ration-1",
      "anchorId": "story-archive-1",
      "href": "/bigg-boss-20-100-per-cent-ration-housemates",
      "title": "Inside the Secret Midnight Pact That Secured the 100% Weekly Ration",
      "excerpt": "Unseen footage reveals how the housemates agreed on duty swaps before the morning buzzer sounded.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Behind The Scenes",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
    },
    {
      "id": "priyanka-family-traditions-2",
      "anchorId": "story-archive-2",
      "href": "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
      "title": "Priyanka Chopra on Blending Global Stardom with Traditional Indian Festivals",
      "excerpt": "How Priyanka balances international shooting schedules while hosting authentic Indian festivities in LA.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Lifestyle",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
    },
    {
      "id": "cybercrime-legal-update-3",
      "anchorId": "story-archive-3",
      "href": "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      "title": "Cyber Crime Cell Issues First Summons to Admin of Defamatory Social Handles",
      "excerpt": "Authorities act quickly as Hyderabad police track IP addresses tied to malicious clip tampering.",
      "category": "Exclusive",
      "displayCategory": "EXCLUSIVE",
      "badge": "Breaking Legal",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/celebrity-cybercrime-complaint-thumbnail.jpg"
    },
    {
      "id": "akshay-priyadarshan-comedy-code-4",
      "anchorId": "story-archive-4",
      "href": "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
      "title": "Priyadarshan on Why Akshay Kumar Remains India\u2019s Gold Standard in Slapstick Comedy",
      "excerpt": "The legendary filmmaker discusses their signature comedic chemistry and what Bhumi Pednekar brings to the mix.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Cinema Special",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
    },
    {
      "id": "shreya-kalra-creator-economy-5",
      "anchorId": "story-archive-5",
      "href": "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      "title": "The Reel Debate: Why the Television vs Digital Divide Is Deepening on Reality Sets",
      "excerpt": "Industry insiders weigh in on Karan Patel\u2019s comment and Shreya Kalra\u2019s defense of creator hustle.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Debate",
      "badgeType": "lime",
      "readTime": "4 MIN READ",
      "image": "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
    },
    {
      "id": "kbc18-amitabh-ranbir-bond-6",
      "anchorId": "story-archive-6",
      "href": "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
      "title": "Amitabh Bachchan Reminisces Watching Ranbir Kapoor Grow Up on Film Sets",
      "excerpt": "Big B shares heartfelt childhood memories of Ranbir accompanying Rishi Kapoor to RK Studios.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV & BOLLYWOOD",
      "badge": "Heartfelt",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
    },
    {
      "id": "disha-dz-streetwear-trends-7",
      "anchorId": "story-archive-7",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "Baggy Fits and Sci-Fi Tropes: How Disha Patani Designed the Debut DZ Drop",
      "excerpt": "A breakdown of the fabric choices, oversized silhouettes and extraterrestrial aesthetics defining DZ.",
      "category": "Latest",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Fashion Edit",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
    },
    {
      "id": "imax-format-monopoly-india-8",
      "anchorId": "story-archive-8",
      "href": "/godzilla-minus-zero-india-release-delayed-ramayana",
      "title": "The High-Stakes Battle for Premium Large Formats in Indian Multiplexes",
      "excerpt": "Why distributors are paying record advances to lock IMAX and 4DX exclusivity for holiday weekends.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "Analysis",
      "badgeType": "lime",
      "readTime": "4 MIN READ",
      "image": "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
    },
    {
      "id": "kwk9-unfiltered-conversations-9",
      "anchorId": "story-archive-9",
      "href": "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
      "title": "Why Season 9 of Koffee With Karan Is Hitting Harder on Real Industry Issues",
      "excerpt": "From consent in cinema to online bullying, the couch is no longer just for frivolous banter.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Deep Dive",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
    },
    {
      "id": "uditi-singh-housemate-support-10",
      "anchorId": "story-archive-10",
      "href": "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
      "title": "How Uditi Singh Turned Vulnerability into Fan Support Across Social Media",
      "excerpt": "Audience sentiment surges in favor of Uditi as live-feed viewers rally behind her honesty.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Fan Pulse",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
    },
    {
      "id": "veer-pahariya-dating-repartee-11",
      "anchorId": "story-archive-11",
      "href": "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
      "title": "Viral Soundbite Breakdown: Janhvi Kapoor\u2019s Concert Advice Sparks Meme Wave",
      "excerpt": "Over 2 million reels created using Janhvi\u2019s witty dating warning to Veer Pahariya on KWK.",
      "category": "Reality TV Updates",
      "displayCategory": "BOLLYWOOD & REALITY",
      "badge": "Viral Trend",
      "badgeType": "pink",
      "readTime": "2 MIN READ",
      "image": "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
    },
    {
      "id": "ramayana-vfx-breakdown-la-12",
      "anchorId": "story-archive-12",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "DNEG and Hollywood Technicians Reveal Scale of Visual Effects in Ramayana",
      "excerpt": "Behind the 3,500 VFX shots rendered across London, Mumbai, and Los Angeles studios.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "Tech in Cinema",
      "badgeType": "lime",
      "readTime": "4 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "fashion-influencers-praise-dz-13",
      "anchorId": "story-archive-13",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "Top Indian Streetwear Creators Review Disha Patani\u2019s First DZ Collection",
      "excerpt": "Fit checks, quality inspections and verdict on whether DZ delivers on its cyberpunk promise.",
      "category": "Latest",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Review",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
    },
    {
      "id": "bb20-kitchen-politics-ration-14",
      "anchorId": "story-archive-14",
      "href": "/bigg-boss-20-100-per-cent-ration-housemates",
      "title": "Breakfast Scrambles to Lavish Dinners: The Mood Shift in the Bigg Boss Kitchen",
      "excerpt": "The culinary peace might be temporary, but the housemates celebrate a full grocery shelf for once.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "House Report",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
    },
    {
      "id": "alia-ranbir-safari-proposal-15",
      "anchorId": "story-archive-15",
      "href": "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
      "title": "Masai Mara Magic: How Ranbir Planned the Secret Ring Handover in the Wild",
      "excerpt": "Ranbir reveals how safari guides kept the ring hidden until the sunset moment over the savanna.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV & BOLLYWOOD",
      "badge": "Romance",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
    },
    {
      "id": "trolling-impact-celebrities-16",
      "anchorId": "story-archive-16",
      "href": "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      "title": "Why Top Stars Are Drawing the Line at Coordinated Cyber Bullying Campaigns",
      "excerpt": "Industry experts explain how coordinated smear campaigns operate and why legal action was necessary.",
      "category": "Exclusive",
      "displayCategory": "EXCLUSIVE",
      "badge": "Industry Trend",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/celebrity-couple-amid-cybercrime-buzz.jpg"
    },
    {
      "id": "diwali-box-office-records-17",
      "anchorId": "story-archive-17",
      "href": "/godzilla-minus-zero-india-release-delayed-ramayana",
      "title": "Diwali Box Office Outlook: Historic Advance Bookings Across Metro Theatres",
      "excerpt": "Trade analysts break down screen counts, early morning shows, and weekend revenue forecasts.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "Trade Report",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
    },
    {
      "id": "comedy-universe-priyadarshan-18",
      "anchorId": "story-archive-18",
      "href": "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
      "title": "From Hera Pheri to the New Era: The Evolution of Priyadarshan\u2019s Film Universe",
      "excerpt": "A look back at classic comedic set pieces and what audiences can expect in the upcoming project.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Cinema History",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
    },
    {
      "id": "karwa-chauth-celebrity-looks-19",
      "anchorId": "story-archive-19",
      "href": "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
      "title": "Red Carpet to Living Room: Inside Celebrity Karwa Chauth Celebrations",
      "excerpt": "Bollywood divas share intimate festival moments from Mumbai, Delhi, and Beverly Hills.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Festive",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
    },
    {
      "id": "reality-stars-pivot-films-20",
      "anchorId": "story-archive-20",
      "href": "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      "title": "From Reality TV Villa to Mainstream Cinema: The Success Stories Shaping 2026",
      "excerpt": "A deep dive into how former reality contestants built durable mainstream acting careers.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Special Report",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
    },
    {
      "id": "objectification-row-aftermath-21",
      "anchorId": "story-archive-21",
      "href": "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
      "title": "Director Issues Unconditional Apology Following Janhvi Kapoor\u2019s KWK Statement",
      "excerpt": "The director responds to Janhvi's remarks with a public clarification pledging respectful collaboration.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Industry Impact",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
    },
    {
      "id": "jada-pinkett-smith-ramayana-la-22",
      "anchorId": "story-archive-22",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "Jada Pinkett Smith Praises Sai Pallavi\u2019s Grace on the Hollywood Red Carpet",
      "excerpt": "Jada Pinkett Smith talks global cinema, epic storytelling and her admiration for Indian craftsmanship.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Red Carpet Buzz",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "dz-clothing-music-video-23",
      "anchorId": "story-archive-23",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "Disha Patani Directs and Stars in Cyberpunk Music Video for DZ Brand Launch",
      "excerpt": "High energy choreography, neon lighting, and futuristic styling mark Disha\u2019s directorial debut.",
      "category": "Latest",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Video Exclusive",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
    },
    {
      "id": "bb20-captaincy-fallout-24",
      "anchorId": "story-archive-24",
      "href": "/bigg-boss-20-100-per-cent-ration-housemates",
      "title": "The Hidden Costs of 100% Ration: Captain Under Fire as Privilege Tasks Loom",
      "excerpt": "How the captaincy contender traded luxury points to guarantee staple foods for the house.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Strategy",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
    },
    {
      "id": "kbc18-sai-pallavi-moment-25",
      "anchorId": "story-archive-25",
      "href": "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
      "title": "Sai Pallavi Leaves Amitabh Bachchan Speechless with Her Simple Diwali Wish",
      "excerpt": "The acclaimed actress wins hearts nationwide with her grounded outlook on fame and fortune.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV & BOLLYWOOD",
      "badge": "Heartwarming",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
    },
    {
      "id": "scout-op-uditi-confrontation-26",
      "anchorId": "story-archive-26",
      "href": "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
      "title": "Scout OP Clarifies His Position After Uditi\u2019s Emotional Response in the Garden",
      "excerpt": "Scout explains his intentions behind the relationship conversation with Love Gill.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Confrontation",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
    },
    {
      "id": "hollywood-monsterverse-response-27",
      "anchorId": "story-archive-27",
      "href": "/godzilla-minus-zero-india-release-delayed-ramayana",
      "title": "Monsterverse Producers Comment on Rescheduling India Release Date",
      "excerpt": "Producers express excitement for Indian audiences to experience Godzilla in optimized solo IMAX slots.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "Official Note",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
    },
    {
      "id": "nick-jonas-karwa-chauth-reaction-28",
      "anchorId": "story-archive-28",
      "href": "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
      "title": "Nick Jonas Fasting Tradition: How the Pop Star Celebrates Alongside Priyanka",
      "excerpt": "Nick shares an adorable family portrait honoring Indian cultural traditions with daughter Malti.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Family Special",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
    },
    {
      "id": "bhumi-akshay-script-readings-29",
      "anchorId": "story-archive-29",
      "href": "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
      "title": "Inside the First Table Read: Bhumi Pednekar and Akshay Kumar Crack Up the Crew",
      "excerpt": "Behind closed doors in Mumbai, rehearsals for Priyadarshan's comic thriller get underway.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Rehearsals",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
    },
    {
      "id": "social-media-cybercrime-protocols-30",
      "anchorId": "story-archive-30",
      "href": "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      "title": "Digital Forensics Team Tracks Network of Coordinated Troll Accounts",
      "excerpt": "How cybersecurity specialists uncovered automated bots inflating hate trends against the star couple.",
      "category": "Exclusive",
      "displayCategory": "EXCLUSIVE",
      "badge": "Investigation",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/celebrity-cybercrime-complaint-thumbnail.jpg"
    },
    {
      "id": "karan-patel-reels-clarification-31",
      "anchorId": "story-archive-31",
      "href": "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      "title": "Karan Patel Responds to Backlash Over Digital Creators Comment on Rise and Fall",
      "excerpt": "Karan explains the context behind his observation regarding long-term craft versus algorithmic fame.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Clarification",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
    },
    {
      "id": "kwk9-tara-sutaria-reaction-32",
      "anchorId": "story-archive-32",
      "href": "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
      "title": "Internet Reacts as Fans Link Janhvi\u2019s Concert Warning to Tara Sutaria Sightings",
      "excerpt": "Netizens compile concert footage as viral threads dissect the playful reference on the Koffee couch.",
      "category": "Reality TV Updates",
      "displayCategory": "BOLLYWOOD & REALITY",
      "badge": "Netizen Buzz",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
    },
    {
      "id": "women-empowerment-cinema-33",
      "anchorId": "story-archive-33",
      "href": "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
      "title": "How Leading Actresses Are Reshaping Contract Clauses on South and Bollywood Sets",
      "excerpt": "Intimacy coordinators and character dignity clauses become mandatory in top studio contracts.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Industry Reform",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
    },
    {
      "id": "yash-hollywood-press-conference-34",
      "anchorId": "story-archive-34",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "Rocking Star Yash Discusses Taking Indian Mythological Epics Global",
      "excerpt": "Yash explains why Ravana's complexity requires a performance that transcends conventional villain tropes.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Press Conference",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "oversized-streetwear-phenomenon-35",
      "anchorId": "story-archive-35",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "Why Indian Youth Are Trading Skinny Fits for Oversized Japanese Streetwear",
      "excerpt": "Fashion analysts explain the cultural shift driving high demand for brands like Disha\u2019s DZ.",
      "category": "Latest",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Trend Analysis",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
    },
    {
      "id": "bb20-weekend-ka-vaar-preview-36",
      "anchorId": "story-archive-36",
      "href": "/bigg-boss-20-100-per-cent-ration-housemates",
      "title": "Weekend Ka Vaar Preview: Host to Question Luxury Task Sacrifices",
      "excerpt": "Sneak peek of the weekend episode where alliances will be tested over kitchen politics.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Sneak Peek",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
    },
    {
      "id": "ravie-dubey-kbc-story-37",
      "anchorId": "story-archive-37",
      "href": "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
      "title": "Ravie Dubey on Sharing the Hot Seat with Ranbir Kapoor and Amitabh Bachchan",
      "excerpt": "Ravie reflects on his journey from television sets to the grand stage of KBC 18 alongside superstars.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV & BOLLYWOOD",
      "badge": "Exclusive Chat",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
    },
    {
      "id": "uditi-arishfa-sisterhood-38",
      "anchorId": "story-archive-38",
      "href": "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
      "title": "Sisterhood in the Bigg Boss House: How Arishfa and Uditi Bonded Over Hard Truths",
      "excerpt": "Fans celebrate an authentic female friendship forming amidst the chaos of reality competition.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Bonding",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
    },
    {
      "id": "screen-allocation-multiplexes-39",
      "anchorId": "story-archive-39",
      "href": "/godzilla-minus-zero-india-release-delayed-ramayana",
      "title": "Multiplex Chains Announce Record 24-Hour Round-the-Clock Screenings",
      "excerpt": "Top chains schedule 2 AM and 5 AM shows in Mumbai, Bengaluru, and Hyderabad to meet demand.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "Showtimes",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
    },
    {
      "id": "festive-fashion-priyanka-40",
      "anchorId": "story-archive-40",
      "href": "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
      "title": "Deep Red and Gold: Priyanka Chopra\u2019s Sabyasachi Saree Details Decoded",
      "excerpt": "Handwoven textures and custom embroidery that made Priyanka\u2019s festival ensemble stand out.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Fashion Breakdown",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
    },
    {
      "id": "priyadarshan-tips-films-deal-41",
      "anchorId": "story-archive-41",
      "href": "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
      "title": "Tips Films Backs Priyadarshan-Akshay Comic Thriller with Massive Production Budget",
      "excerpt": "Producers announce ambitious multi-city shooting schedule covering London and coastal Kerala.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Production News",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
    },
    {
      "id": "legal-precedents-online-trolling-42",
      "anchorId": "story-archive-42",
      "href": "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      "title": "Legal Experts on How Vijay & Rashmika's Police Case Sets a High Bar for Cyber Crimes",
      "excerpt": "A landmark test case for protecting celebrity privacy against coordinated deepfake campaigns.",
      "category": "Exclusive",
      "displayCategory": "EXCLUSIVE",
      "badge": "Legal Analysis",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/celebrity-cybercrime-complaint-thumbnail.jpg"
    },
    {
      "id": "rise-and-fall-elimination-shock-43",
      "anchorId": "story-archive-43",
      "href": "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      "title": "Rise and Fall Season 2: Surprise Elimination Shakes the Villa After Voting Round",
      "excerpt": "Tensions reach boiling point as allies turn rivals in an unexpected blindside elimination.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Elimination",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
    },
    {
      "id": "karan-johar-industry-dialogue-44",
      "anchorId": "story-archive-44",
      "href": "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
      "title": "Karan Johar Speaks on Addressing Sensitive Topics on Prime Time Chat Shows",
      "excerpt": "Karan addresses the evolving editorial responsibility of talk shows in the digital era.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Showrunner Note",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
    },
    {
      "id": "ranbir-kapoor-la-red-carpet-look-45",
      "anchorId": "story-archive-45",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "Ranbir Kapoor\u2019s Bespoke Bandhgala Turn Heads on the Academy Museum Red Carpet",
      "excerpt": "Elegance meets heritage: A close look at Ranbir's handcrafted festive silhouette in LA.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Red Carpet Style",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "dz-clothing-global-shipping-46",
      "anchorId": "story-archive-46",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "DZ Clothing Label Announces Worldwide Shipping Following Overwhelming Demand",
      "excerpt": "Within 48 hours of launch, orders poured in from London, Dubai, New York, and Melbourne.",
      "category": "Latest",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Brand Milestone",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
    },
    {
      "id": "bb20-luxury-budget-surprise-47",
      "anchorId": "story-archive-47",
      "href": "/bigg-boss-20-100-per-cent-ration-housemates",
      "title": "Bigg Boss 20: Secret Task Delivers Luxury Dessert Hamper to Winning Trio",
      "excerpt": "Housemates celebrate an unexpected dessert reward after enduring physical endurance challenges.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Reward Task",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
    },
    {
      "id": "kbc18-charity-donation-48",
      "anchorId": "story-archive-48",
      "href": "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
      "title": "KBC 18 Diwali Special: Winnings Donated to Environmental & Heritage Restoration Funds",
      "excerpt": "The Ramayana trio pledges full game winnings toward tree plantation and river revitalization.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV & BOLLYWOOD",
      "badge": "Charity",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
    },
    {
      "id": "uditi-singh-fan-letters-49",
      "anchorId": "story-archive-49",
      "href": "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
      "title": "Over 50,000 Messages Pour In Supporting Uditi Singh\u2019s Journey on Bigg Boss",
      "excerpt": "Fan clubs organize trend campaigns celebrating Uditi\u2019s resilience and composure under pressure.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Audience Voice",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
    },
    {
      "id": "godzilla-vs-kong-legacy-50",
      "anchorId": "story-archive-50",
      "href": "/godzilla-minus-zero-india-release-delayed-ramayana",
      "title": "How India Became One of the Monsterverse\u2019s Most Lucrative Theatrical Markets",
      "excerpt": "Looking back at the explosive box office runs of Godzilla and Kong across Indian metros.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "Box Office Legacy",
      "badgeType": "lime",
      "readTime": "4 MIN READ",
      "image": "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
    },
    {
      "id": "malti-marie-festive-cuteness-51",
      "anchorId": "story-archive-51",
      "href": "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
      "title": "Malti Marie\u2019s Tiny Henna Heart Steals the Spotlight on Social Media",
      "excerpt": "Fans swoon over Priyanka\u2019s tender touch including her daughter's name in her festive mehendi.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Trending",
      "badgeType": "pink",
      "readTime": "2 MIN READ",
      "image": "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
    },
    {
      "id": "bhumi-pednekar-comedy-prep-52",
      "anchorId": "story-archive-52",
      "href": "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
      "title": "Bhumi Pednekar on Mastering Comic Timing: 'Priyadarshan Demands Zero Hesitation'",
      "excerpt": "Bhumi discusses unlearning dramatic pacing to match Akshay Kumar\u2019s legendary speed.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Actor's Craft",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
    },
    {
      "id": "celebrity-social-security-53",
      "anchorId": "story-archive-53",
      "href": "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      "title": "How Talent Agencies Are Investing in Specialized Cyber Security Protection for Stars",
      "excerpt": "From AI detection tools to round-the-clock IP monitoring, celebrity management gets a digital armor.",
      "category": "Exclusive",
      "displayCategory": "EXCLUSIVE",
      "badge": "Tech & Law",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/celebrity-cybercrime-complaint-thumbnail.jpg"
    },
    {
      "id": "shreya-kalra-fitness-regime-54",
      "anchorId": "story-archive-54",
      "href": "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      "title": "Behind the Stunts: Shreya Kalra\u2019s High-Intensity Fitness Regimen on Reality TV",
      "excerpt": "Strength training, calisthenics, and endurance routines that keep Shreya ready for physical face-offs.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Fitness",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
    },
    {
      "id": "kwk9-fan-questions-selection-55",
      "anchorId": "story-archive-55",
      "href": "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
      "title": "Inside the Rapid Fire Vault: How Fan Questions Are Curated for Season 9",
      "excerpt": "Producers explain the vetting process behind the cheekiest questions fired at celebrity guests.",
      "category": "Reality TV Updates",
      "displayCategory": "BOLLYWOOD & REALITY",
      "badge": "Behind the Scenes",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
    },
    {
      "id": "women-in-film-dialogues-56",
      "anchorId": "story-archive-56",
      "href": "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
      "title": "Roundtable: Why Frank Conversations on Talk Shows Are Setting Precedents",
      "excerpt": "Senior film journalists analyze how Janhvi\u2019s candid responses shifted public discourse.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Roundtable",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
    },
    {
      "id": "nitesh-tiwari-vision-la-57",
      "anchorId": "story-archive-57",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "Director Nitesh Tiwari on Adapting the Ramayana with Reverence and Cutting-Edge Tech",
      "excerpt": "Tiwari explains his decade-long research process and commitment to honoring every shloka.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Director Interview",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "disha-patani-fitness-dz-58",
      "anchorId": "story-archive-58",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "How Disha Patani\u2019s Martial Arts Training Influenced the Mobility of DZ Apparel",
      "excerpt": "Reinforced seams and breathable textiles designed to withstand workouts and parkour.",
      "category": "Latest",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Athleisure",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
    },
    {
      "id": "bb20-live-feed-unseen-59",
      "anchorId": "story-archive-59",
      "href": "/bigg-boss-20-100-per-cent-ration-housemates",
      "title": "Unseen 24/7 Live Feed: The Late Night Conversations You Missed on TV",
      "excerpt": "Housemates open up about home, career anxieties and survival strategies under the stars.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Live Feed",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-100-per-cent-ration-housemates.jpg"
    },
    {
      "id": "ranbir-kbc-trivia-master-60",
      "anchorId": "story-archive-60",
      "href": "/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story",
      "title": "Ranbir Kapoor\u2019s Impressive Knowledge of Indian Wildlife Surprises Big B on KBC",
      "excerpt": "Ranbir breezes through nature and geography questions during his hot seat performance.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV & BOLLYWOOD",
      "badge": "Trivia",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story.jpg"
    },
    {
      "id": "uditi-singh-style-statement-61",
      "anchorId": "story-archive-61",
      "href": "/bigg-boss-20-uditi-singh-painful-breakup-scout-love",
      "title": "Uditi Singh\u2019s Casual Chic Looks Become Style Inspiration for College Goers",
      "excerpt": "Comfortable co-ord sets, effortless ponytails, and minimalist makeup defining Uditi\u2019s vibe.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Fashion",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/bigg-boss-20-uditi-singh-painful-breakup-scout-love.jpg"
    },
    {
      "id": "imax-ticket-pricing-trends-62",
      "anchorId": "story-archive-62",
      "href": "/godzilla-minus-zero-india-release-delayed-ramayana",
      "title": "Understanding Ticket Price Dynamics for Holiday Weekend Big Screen Clashes",
      "excerpt": "Why Indian moviegoers are willing to pay \u20b91,500 for recliner IMAX seats during festive releases.",
      "category": "News",
      "displayCategory": "NEWS",
      "badge": "Consumer Trends",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/godzilla-minus-zero-india-release-delayed-ramayana.jpg"
    },
    {
      "id": "priyanka-chopra-future-projects-63",
      "anchorId": "story-archive-63",
      "href": "/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti",
      "title": "What\u2019s Next for Priyanka Chopra: Upcoming Action Thrillers and Hollywood Features",
      "excerpt": "A roundup of Priyanka's confirmed slate including high-octane international productions.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Film Slate",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/priyanka-chopra-karwa-chauth-mehendi-nick-jonas-malti.jpg"
    },
    {
      "id": "comedy-writing-secrets-64",
      "anchorId": "story-archive-64",
      "href": "/bhumi-pednekar-akshay-kumar-priyadarshan-next-film",
      "title": "The Art of Situational Comedy: Behind the Chaos of Priyadarshan\u2019s Masterpieces",
      "excerpt": "How misunderstood identities, overlapping phone calls, and chaotic climax scenes come together.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Film Craft",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/bhumi-pednekar-akshay-kumar-priyadarshan-next-film.jpg"
    },
    {
      "id": "online-safety-actors-65",
      "anchorId": "story-archive-65",
      "href": "/vijay-deverakonda-rashmika-mandanna-cyber-crime-complaint-hyderabad",
      "title": "Cyber Safety 101: How Indian Celebrities Are Safeguarding Their Digital Footprint",
      "excerpt": "Expert tips on recognizing impersonators, reporting coordinated attacks, and legal remedies.",
      "category": "Exclusive",
      "displayCategory": "EXCLUSIVE",
      "badge": "Safety Guide",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/celebrity-couple-amid-cybercrime-buzz.jpg"
    },
    {
      "id": "rise-and-fall-finale-odds-66",
      "anchorId": "story-archive-66",
      "href": "/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2",
      "title": "Rise and Fall Finale Odds: Who Has the Strongest Alliance to Claim the Trophy?",
      "excerpt": "A statistical breakdown of task wins, social currency, and voting trends inside the house.",
      "category": "Reality TV Updates",
      "displayCategory": "REALITY TV UPDATES",
      "badge": "Predictions",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/shreya-kalra-karan-patel-reels-comment-rise-and-fall-2.jpg"
    },
    {
      "id": "veer-pahariya-interview-preview-67",
      "anchorId": "story-archive-67",
      "href": "/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan",
      "title": "Veer Pahariya on His Upcoming Acting Debut: 'Ready to Put in the 10,000 Hours'",
      "excerpt": "Veer speaks candidly about expectations, industry mentors, and finding his own artistic voice.",
      "category": "Reality TV Updates",
      "displayCategory": "BOLLYWOOD & REALITY",
      "badge": "Rising Star",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan.jpg"
    },
    {
      "id": "janhvi-kapoor-upcoming-films-68",
      "anchorId": "story-archive-68",
      "href": "/janhvi-kapoor-peddi-controversy-koffee-with-karan-9",
      "title": "Janhvi Kapoor\u2019s Diverse 2026 Roster: Pan-India Epics to Gritty Drama",
      "excerpt": "From high-stakes political thrillers to mythological fantasy, Janhvi tests every dramatic muscle.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Future Slate",
      "badgeType": "pink",
      "readTime": "3 MIN READ",
      "image": "/images/janhvi-kapoor-peddi-controversy-koffee-with-karan-9.jpg"
    },
    {
      "id": "ramayana-box-office-projections-69",
      "anchorId": "story-archive-69",
      "href": "/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi",
      "title": "Global Trade Analysts Project \u20b91,000 Cr Worldwide Opening for Ramayana Part 1",
      "excerpt": "International pre-sales and unprecedented overseas theatre counts indicate record-shattering run.",
      "category": "Bollywood & Hollywood",
      "displayCategory": "BOLLYWOOD & HOLLYWOOD",
      "badge": "Box Office Forecast",
      "badgeType": "pink",
      "readTime": "4 MIN READ",
      "image": "/images/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi.jpg"
    },
    {
      "id": "disha-patani-entrepreneurial-vision-70",
      "anchorId": "story-archive-70",
      "href": "/disha-patani-launches-clothing-brand-dz",
      "title": "Disha Patani on Building a Youth Brand: 'DZ Is an Authentic Extension of My Wardrobe'",
      "excerpt": "The actress looks ahead to pop-up stores, international runway showcases, and community drops.",
      "category": "Latest",
      "displayCategory": "BOLLYWOOD & FASHION",
      "badge": "Entrepreneur",
      "badgeType": "lime",
      "readTime": "3 MIN READ",
      "image": "/images/disha-patani-launches-clothing-brand-dz.jpg"
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
            href="/disha-patani-launches-clothing-brand-dz"
            className="feature-card block transition-all hover:border-[var(--lime)] focus-visible:ring-2 focus-visible:ring-[var(--lime)] group"
            style={{ textDecoration: "none", color: "inherit" }}
            aria-label="Read full article: Disha Patani Launches Her Own Clothing Brand DZ"
          >
            <div className="feature-media" style={{ overflow: "hidden", position: "relative" }}>
              <Image
                src="/images/disha-patani-launches-clothing-brand-dz.jpg"
                alt="Disha Patani Launches Her Own Clothing Brand DZ"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 750px"
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
                className="group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="noise" style={{ pointerEvents: "none" }}></div>
              <div className="feature-tag flex items-center gap-2">
                <span className="badge pink">🔥 Cover Story</span>
                <span className="badge">Bollywood</span>
                <span className="badge lime">DZ Brand</span>
              </div>
            </div>
            <div className="feature-body">
              <div className="flex items-center gap-2 mb-2 font-mono text-xs text-[var(--lime)] font-bold tracking-wider uppercase">
                <span>★ TOP STORY · FASHION ENTREPRENEUR</span>
              </div>
              <h1 className="disp" style={{ color: "#fff" }}>
                Disha Patani Launches Her Own Clothing Brand DZ
              </h1>
              <p>
                Disha Patani is no longer just an actress. After more than 10 years in Bollywood, she has launched her own fashion label called DZ, built around oversized fits, alien-themed designs and a bold new music video.
              </p>
              <div className="meta-row mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span>BOLLYWOOD</span>
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
                  href="/disha-patani-launches-clothing-brand-dz"
                  style={{ color: "inherit" }}
                >
                  <h3>Disha Patani launches her own clothing brand DZ with baggy fits and alien themes</h3>
                  <span>BOLLYWOOD &amp; FASHION · 158K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">02</span>
              <div className="trend-text">
                <Link
                  href="/bigg-boss-20-100-per-cent-ration-housemates"
                  style={{ color: "inherit" }}
                >
                  <h3>Bigg Boss 20: Housemates get 100% full weekly ration for first time this season</h3>
                  <span>REALITY TV · 142K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">03</span>
              <div className="trend-text">
                <Link
                  href="/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan"
                  style={{ color: "inherit" }}
                >
                  <h3>Janhvi Kapoor&apos;s concert advice for Veer Pahariya on Koffee With Karan 9</h3>
                  <span>BOLLYWOOD &amp; REALITY · 134K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">04</span>
              <div className="trend-text">
                <Link
                  href="/bigg-boss-20-uditi-singh-painful-breakup-scout-love"
                  style={{ color: "inherit" }}
                >
                  <h3>Bigg Boss 20: Uditi Singh opens up on painful breakup after Scout-Love conversation</h3>
                  <span>REALITY TV · 128K REACTIONS</span>
                </Link>
              </div>
            </div>
            <div className="trend-item">
              <span className="trend-rank">05</span>
              <div className="trend-text">
                <Link
                  href="/kbc-18-diwali-special-ranbir-kapoor-alia-bhatt-proposal-story"
                  style={{ color: "inherit" }}
                >
                  <h3>KBC 18 Diwali special: Ranbir Kapoor reveals Masai Mara proposal to Alia Bhatt</h3>
                  <span>REALITY TV &amp; BOLLYWOOD · 112K REACTIONS</span>
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
