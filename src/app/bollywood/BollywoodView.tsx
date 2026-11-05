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
    id: "munna-bhai-3-farhad-samji-writing-script",
    category: "Franchise Update",
    title: "Munna Bhai 3: Farhad Samji Begins Writing the Script",
    badge: "⚡ Script Begins",
    badgeType: "lime",
    image: "/images/munna-bhai-3-farhad-samji-writing-script.jpg",
    href: "/munna-bhai-3-farhad-samji-writing-script",
    readOrTime: "3 MIN READ",
  },
  {
    id: "karan-johar-ramayana-part-1-review-ranbir-kapoor-yash",
    category: "Ramayana Review",
    title: "Karan Johar Calls Ramayana Part 1 a “Miracle” and Praises Ranbir Kapoor’s Lord Ram",
    badge: "✨ Industry Review",
    badgeType: "lime",
    image: "/images/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash.jpg",
    href: "/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash",
    readOrTime: "4 MIN READ",
  },
  {
    id: "shraddha-kapoor-reacts-eetha-trailer-criticism",
    category: "Trailer Reaction",
    title: "Shraddha Kapoor Reacts to Eetha Trailer Trolling: “I Can’t Even Handle My WhatsApp”",
    badge: "⚡ Reacts to Trolls",
    badgeType: "lime",
    image: "/images/shraddha-kapoor-reacts-eetha-trailer-criticism.jpg",
    href: "/shraddha-kapoor-reacts-eetha-trailer-criticism",
    readOrTime: "3 MIN READ",
  },
  {
    id: "salman-khan-teri-sexy-beauty-maatrubhumi-song",
    category: "Music Exclusive",
    title: "Salman Khan Is Singing Again After 11 Years with “Teri Sexy Beauty”",
    badge: "🎵 11 Years Later",
    badgeType: "pink",
    image: "/images/salman-khan-teri-sexy-beauty-maatrubhumi-song.jpg",
    href: "/salman-khan-teri-sexy-beauty-maatrubhumi-song",
    readOrTime: "4 MIN READ",
  },
  {
    id: "saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night",
    category: "KWK 9 Tell-All",
    title: "Saif Ali Khan Calls Stabbing Night “Worst Night”: Kareena Kapoor’s Emotional Confession on Koffee With Karan",
    badge: "⚡ KWK 9 Tell-All",
    badgeType: "pink",
    image: "/images/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night.jpg",
    href: "/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night",
    readOrTime: "4 MIN READ",
  },
  {
    id: "ramayana-part-2-postponed-2028-namit-malhotra-trilogy",
    category: "Release Date Scoop",
    title: "Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms, Hints at a Trilogy",
    badge: "⚡ Big Release Update",
    badgeType: "pink",
    image: "/images/ramayana-part-2-postponed-2028-namit-malhotra-trilogy.jpg",
    href: "/ramayana-part-2-postponed-2028-namit-malhotra-trilogy",
    readOrTime: "4 MIN READ",
  },
  {
    id: "mira-rajput-shahid-kapoor-gossip-kapil-sharma-show",
    category: "Reality & Gossip",
    title: "Mira Rajput Says Shahid Kapoor Loves Gossip: Funniest Moments From Kapil Sharma’s Unseen Clip",
    badge: "☕ Gossip King",
    badgeType: "pink",
    image: "/images/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show.jpg",
    href: "/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show",
    readOrTime: "4 MIN READ",
  },
  {
    id: "tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king",
    category: "Music & Bollywood",
    title: "Tu Mil Jaaye: How Shah Rukh Khan Got Ed Sheeran on King's First Song",
    badge: "🔥 Global Collab",
    badgeType: "pink",
    image: "/images/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king.jpg",
    href: "/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king",
    readOrTime: "3 MIN READ",
  },
  {
    id: "tusshar-kapoor-extortion-call-bishnoi-gang-fake",
    category: "Crime & Underworld",
    title: "Tusshar Kapoor Gets Rs 5 Crore Extortion Call in Bishnoi Gang’s Name: Police Suspect Hoax",
    badge: "🚨 ₹5 Cr Threat",
    badgeType: "pink",
    image: "/images/tusshar-kapoor-extortion-call-bishnoi-gang-fake.jpg",
    href: "/tusshar-kapoor-extortion-call-bishnoi-gang-fake",
    readOrTime: "4 MIN READ",
  },
  {
    id: "chandan-roy-aakhri-ride-interview",
    category: "Exclusive Interview",
    title: "Chandan Roy on Aakhri Ride: Nine Years in Mumbai & Why He Said Yes to Anurag Kashyap",
    badge: "🎬 Exclusive Interview",
    badgeType: "pink",
    image: "/images/chandan-roy-aakhri-ride-interview.jpg",
    href: "/chandan-roy-aakhri-ride-interview",
    readOrTime: "4 MIN READ",
  },
  {
    id: "honey-trehan-slams-new-cbfc-advisory-satluj",
    category: "Censorship Row",
    title: "Satluj Director Honey Trehan Slams CBFC’s New Advisory: “Cowardice and Dictatorship”",
    badge: "⚡ CBFC Advisory Row",
    badgeType: "pink",
    image: "/images/honey-trehan-slams-new-cbfc-advisory-satluj.jpg",
    href: "/honey-trehan-slams-new-cbfc-advisory-satluj",
    readOrTime: "4 MIN READ",
  },
  {
    id: "orry-sara-ali-khan-disappeared-friendship-fallout",
    category: "Celebrity Feud",
    title: "Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most",
    badge: "💔 Friendship Over?",
    badgeType: "pink",
    image: "/images/orry-sara-ali-khan-disappeared-friendship-fallout.jpg",
    href: "/orry-sara-ali-khan-disappeared-friendship-fallout",
    readOrTime: "4 MIN READ",
  },
  {
    id: "janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws",
    category: "Cyber Controversy",
    title: "Janhvi Kapoor and Keerthy Suresh Hit by Deepfakes: Expert Demands Strict AI Laws",
    badge: "⚠️ AI Misuse Row",
    badgeType: "pink",
    image: "/images/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws.jpg",
    href: "/janhvi-kapoor-keerthy-suresh-deepfake-expert-new-laws",
    readOrTime: "4 MIN READ",
  },
  {
    id: "ramayana-advance-booking-73-crore-ranbir-kapoor",
    category: "Box Office Record",
    title: "Ramayana Advance Booking: Ranbir Kapoor’s Film Crosses Rs 73.40 Crore Before Release",
    badge: "🎟️ ₹73.40 Cr Advance",
    badgeType: "lime",
    image: "/images/ramayana-advance-booking-73-crore-ranbir-kapoor.jpg",
    href: "/ramayana-advance-booking-73-crore-ranbir-kapoor",
    readOrTime: "4 MIN READ",
  },
  {
    id: "tiger-shroff-firing-case-13th-arrest-karnal-woman",
    category: "Crime & Bollywood",
    title: "Tiger Shroff Firing Case: Woman Arrested From Karnal, 13 Accused Now in Custody",
    badge: "🚨 13th Arrest Made",
    badgeType: "pink",
    image: "/images/tiger-shroff-firing-case-13th-arrest-karnal-woman.jpg",
    href: "/tiger-shroff-firing-case-13th-arrest-karnal-woman",
    readOrTime: "4 MIN READ",
  },
  {
    id: "udta-teer-aakash-kaushik-remembers-mukul-dev",
    category: "Director Tribute",
    title: "Udta Teer Director Aakash Kaushik Gets Emotional Remembering Mukul Dev",
    badge: "🎬 Director Scoop",
    badgeType: "lime",
    image: "/images/udta-teer-aakash-kaushik-remembers-mukul-dev.jpg",
    href: "/udta-teer-aakash-kaushik-remembers-mukul-dev",
    readOrTime: "4 MIN READ",
  },
  {
    id: "srk-61st-birthday-mannat-balcony",
    category: "Shah Rukh Khan Birthday",
    title: "Shah Rukh Khan Skips Midnight Greeting, Then Appears at Mannat on His 61st Birthday",
    badge: "👑 61st Birthday",
    badgeType: "lime",
    image: "/images/shah-rukh-khan-61st-birthday-mannat-balcony.jpg",
    href: "/shah-rukh-khan-61st-birthday-mannat-balcony",
    readOrTime: "3 MIN READ",
  },
  {
    id: "king-first-song-tu-mil-jaaye",
    category: "Music & Bollywood",
    title: "King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday",
    badge: "🎵 Song Out Now",
    badgeType: "lime",
    image: "/images/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone.jpg",
    href: "/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone",
    readOrTime: "3 MIN READ",
  },
  {
    id: "drishyam-3-ott-release-date-netflix",
    category: "OTT Premiere",
    title: "Drishyam 3 OTT Release Date: When Will Ajay Devgn’s Film Come to Netflix?",
    badge: "📺 Netflix OTT",
    badgeType: "lime",
    image: "/images/drishyam-3-ott-release-date-netflix.jpg",
    href: "/drishyam-3-ott-release-date-netflix",
    readOrTime: "3 MIN READ",
  },
  {
    id: "srk-61st-birthday-mannat-note",
    category: "Shah Rukh Khan Birthday",
    title: "Shah Rukh Khan Skips Mannat Balcony on 61st Birthday, Thanks Fans With a Handwritten Note",
    badge: "🎂 61st Birthday",
    badgeType: "lime",
    image: "/images/shah-rukh-khan-61st-birthday-mannat-handwritten-note.jpg",
    href: "/shah-rukh-khan-61st-birthday-mannat-handwritten-note",
    readOrTime: "3 MIN READ",
  },
  {
    id: "diljit-dosanjh-aura-tour-hurdles",
    category: "Music & Tour",
    title: "Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles",
    badge: "Breaking Silence",
    badgeType: "lime",
    image: "/images/diljit-dosanjh-aura-india-tour-hurdles.jpg",
    href: "/diljit-dosanjh-aura-india-tour-hurdles",
    readOrTime: "3 MIN READ",
  },
  {
    id: "bhansali-gangubai-eetha-backlash",
    category: "Social Media Backlash",
    title: "Bhansali Productions Trolled for Gangubai Kathiawadi Post on Eetha Trailer Day",
    badge: "Social Media Backlash",
    badgeType: "pink",
    image: "/images/bhansali-productions-gangubai-post-eetha-trailer-backlash.jpg",
    href: "/bhansali-productions-gangubai-post-eetha-trailer-backlash",
    readOrTime: "3 MIN READ",
  },
  {
    id: "rgv-legal-notice-29-crore",
    category: "Legal & Crime",
    title: "Ram Gopal Varma in Legal Trouble Over ₹29.67 Crore",
    badge: "Legal Trouble",
    badgeType: "pink",
    image: "/images/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore.jpg",
    href: "/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore",
    readOrTime: "3 MIN READ",
  },
  {
    id: "himesh-deepika-irreplaceable-vanga",
    category: "Exclusive Interview",
    title: "Himesh Reshammiya Says Deepika Padukone Is “Irreplaceable”",
    badge: "Rapid Fire Scoop",
    badgeType: "pink",
    image: "/images/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga.jpg",
    href: "/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga",
    readOrTime: "3 MIN READ",
  },
  {
    id: "prakash-raj-lost-films-ads",
    category: "Exclusive Interview",
    title: "Prakash Raj Lost Films and Ad Deals for Speaking Out, Says Wife Pony Varma",
    badge: "Interview Scoop",
    badgeType: "pink",
    image: "/images/prakash-raj-wife-pony-varma-lost-films-ads.jpg",
    href: "/prakash-raj-wife-pony-varma-lost-films-ads",
    readOrTime: "3 MIN READ",
  },
  {
    id: "tiger-shroff-firing-appearance",
    category: "Exclusive & Crime",
    title: "Tiger Shroff to Make First Appearance After Firing Incident",
    badge: "Exclusive Scoop",
    badgeType: "pink",
    image: "/images/tiger-shroff-first-public-appearance-after-firing-incident.jpg",
    href: "/tiger-shroff-first-public-appearance-after-firing-incident",
    readOrTime: "3 MIN READ",
  },
  {
    id: "manoj-bajpayee-women-cinema",
    category: "Women in Cinema",
    title: "Manoj Bajpayee Says Women Have Been Leading Bollywood for Years",
    badge: "Cinema & Culture",
    badgeType: "pink",
    image: "/images/manoj-bajpayee-vidya-balan-kajol-women-in-cinema.jpg",
    href: "/manoj-bajpayee-vidya-balan-kajol-women-in-cinema",
    readOrTime: "3 MIN READ",
  },
  {
    id: "sanjay-gupta-funeral",
    category: "In Memoriam & Funeral",
    title: "Sanjay Gupta Funeral: Last Rites Today in Mumbai, Bollywood Mourns Kaante Director",
    badge: "Funeral Details",
    badgeType: "pink",
    image: "/images/sanjay-gupta-funeral-pawan-hans-crematorium.jpg",
    href: "/sanjay-gupta-funeral-pawan-hans-crematorium",
    readOrTime: "3 MIN READ",
  },
  {
    id: "orry-halloween-competition",
    category: "Halloween 2026",
    title: "Orry Names Janhvi and Khushi Kapoor as His Biggest Halloween Competition",
    badge: "Halloween 2026",
    badgeType: "pink",
    image: "/images/orry-halloween-2026-janhvi-khushi-kapoor-competition.jpg",
    href: "/orry-halloween-2026-janhvi-khushi-kapoor-competition",
    readOrTime: "3 MIN READ",
  },
  {
    id: "sanjay-dutt-kaante-2-promise",
    category: "In Memoriam & Sequel",
    title: "Sanjay Dutt Promises to Make Kaante 2 in Memory of Sanjay Gupta",
    badge: "Kaante 2 Promise",
    badgeType: "lime",
    image: "/images/sanjay-dutt-kaante-2-promise-sanjay-gupta-death.jpg",
    href: "/sanjay-dutt-kaante-2-promise-sanjay-gupta-death",
    readOrTime: "3 MIN READ",
  },
  {
    id: "varun-sidharth-reunion",
    category: "Reunion & Friendship",
    title: "Varun Dhawan Sidharth Malhotra Reunion: “Never a Rivalry” With Kiara Advani",
    badge: "SOTY Reunion",
    badgeType: "pink",
    image: "/images/varun-dhawan-sidharth-malhotra-kiara-advani-reunion.jpg",
    href: "/varun-dhawan-sidharth-malhotra-kiara-advani-reunion",
    readOrTime: "3 MIN READ",
  },
  {
    id: "sanjay-gupta-passes-away",
    category: "In Memoriam",
    title: "Sanjay Gupta Passes Away: Bollywood Loses the Director of Kaante and Shootout at Wadala",
    badge: "In Memoriam",
    badgeType: "pink",
    image: "/images/sanjay-gupta-passes-away-shootout-at-wadala-director.jpg",
    href: "/sanjay-gupta-passes-away-shootout-at-wadala-director",
    readOrTime: "3 MIN READ",
  },
  {
    id: "iifa-2026-winners",
    category: "IIFA Awards 2026",
    title: "IIFA 2026 Winners List: Dhurandhar Wins 12 Awards, Ranveer Singh & Aneet Padda Win Big",
    badge: "IIFA Winners",
    badgeType: "lime",
    image: "/images/iifa-2026-winners-list.jpg",
    href: "/iifa-2026-winners-list",
    readOrTime: "4 MIN READ",
  },
  {
    id: "ibrahim-ali-khan-palak-tiwari-breakup",
    category: "Relationship & Breakup",
    title: "Ibrahim Ali Khan and Palak Tiwari Reportedly Break Up After 3 Years",
    badge: "Breakup Scoop",
    badgeType: "pink",
    image: "/images/ibrahim-ali-khan-palak-tiwari-breakup.jpg",
    href: "/ibrahim-ali-khan-palak-tiwari-breakup",
    readOrTime: "3 MIN READ",
  },
  {
    id: "jiya-shankar-unfollows-kd",
    category: "Relationship & Breakup",
    title: "Jiya Shankar Follows Fiancé KD Again After Breakup Rumours: Full Timeline",
    badge: "Halloween Update",
    badgeType: "lime",
    image: "/images/jiya-shankar-unfollows-fiance-kd-instagram.jpg",
    href: "/jiya-shankar-unfollows-fiance-kd-instagram",
    readOrTime: "3 MIN READ",
  },
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
          {/* Cover Story: Latest Published Bollywood Story (Munna Bhai 3: Farhad Samji Begins Writing) */}
          <Link
            href="/munna-bhai-3-farhad-samji-writing-script"
            className="feature-card group block"
            aria-label="Read full cover story: Munna Bhai 3: Farhad Samji Begins Writing the Script"
          >
            <div className="feature-media relative overflow-hidden">
              <Image
                src="/images/munna-bhai-3-farhad-samji-writing-script.jpg"
                alt="Munna Bhai 3 Update: Farhad Samji Begins Writing Script for Rajkumar Hirani"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 980px) 100vw, 65vw"
              />
              <div className="noise" />
              <span className="badge lime feature-tag z-10">
                ⚡ Script Begins
              </span>
            </div>
            <div className="feature-body">
              <h2 className="disp text-white group-hover:text-[var(--lime)] transition-colors">
                Munna Bhai 3: Farhad Samji Begins Writing the Script
              </h2>
              <p>
                Munna Bhai 3 is moving ahead. Farhad Samji is reportedly writing the script for Rajkumar Hirani’s film. Read all the details here.
              </p>
              <div className="meta-row mt-3">
                <span className="text-[var(--magenta)] font-bold">BOLLYWOOD &amp; CINEMA</span>
                <span className="dot-sep">◆</span>
                <span>3 MIN READ</span>
                <span className="dot-sep">◆</span>
                <span className="text-[var(--lime)] font-bold">NOV 05</span>
              </div>
            </div>
          </Link>

          {/* Right Stack: The last 2 blogs uploaded before the latest one */}
          <div className="stack">
            {/* Card 1: Karan Johar Calls Ramayana Part 1 a Miracle */}
            <Link
              href="/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash.jpg"
                  alt="Karan Johar Calls Ramayana Part 1 a Miracle and Praises Ranbir Kapoor’s Lord Ram"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge lime z-10 relative">✨ Industry Review</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Karan Johar Calls Ramayana Part 1 a “Miracle” and Praises Ranbir Kapoor’s Lord Ram
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">BOLLYWOOD &amp; CINEMA</span>
                  <span className="dot-sep">◆</span>
                  <span>4 MIN READ</span>
                </div>
              </div>
            </Link>

            {/* Card 2: Shraddha Kapoor Breaks Silence on Eetha Trolling */}
            <Link
              href="/shraddha-kapoor-reacts-eetha-trailer-criticism"
              className="card m1 group block"
            >
              <div className="card-media relative overflow-hidden">
                <Image
                  src="/images/shraddha-kapoor-reacts-eetha-trailer-criticism.jpg"
                  alt="Shraddha Kapoor Reacts to Eetha Trailer Trolling: I Can't Even Handle My WhatsApp"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 980px) 100vw, 35vw"
                />
                <span className="badge lime z-10 relative">⚡ Reacts to Trolls</span>
              </div>
              <div className="card-body">
                <h3 className="group-hover:text-[var(--lime)] transition-colors font-bold text-white text-[16px] leading-snug">
                  Shraddha Kapoor Breaks Silence on Eetha Trolling: “I Can’t Even Handle My WhatsApp”
                </h3>
                <div className="meta-row mt-2">
                  <span className="text-[var(--magenta)] font-bold">BOLLYWOOD &amp; CINEMA</span>
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
              {bollywoodArticles.length} STORIES PUBLISHED
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
