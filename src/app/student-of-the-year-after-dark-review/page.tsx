import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Student of the Year After Dark Review: Worth Watching? | Buzz Originals",
  description:
    "Student of the Year: After Dark review on JioHotstar. See ratings from NDTV, India TV and more, plus story, cast and Shanaya Kapoor’s double role.",
  keywords: [
    "Student of the Year After Dark review",
    "Shanaya Kapoor web series",
    "Student of the Year After Dark cast",
    "Student of the Year After Dark JioHotstar",
    "Student of the Year After Dark rating",
    "SOTY After Dark",
    "Student of the Year After Dark story explained",
    "Is Student of the Year After Dark worth watching",
    "Student of the Year After Dark release date",
    "Student of the Year After Dark episodes",
    "Shanaya Kapoor double role web series",
    "Student of the Year After Dark critics review",
    "Reema Maya",
    "Karan Johar",
    "Dharmatic Entertainment",
  ],
  alternates: {
    canonical: "/student-of-the-year-after-dark-review",
  },
  openGraph: {
    title: "Student of the Year After Dark Review: Worth Watching? | Buzz Originals",
    description:
      "Student of the Year: After Dark review on JioHotstar. See ratings from NDTV, India TV and more, plus story, cast and Shanaya Kapoor’s double role.",
    url: "https://www.buzzoriginals.com/student-of-the-year-after-dark-review",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/student-of-the-year-after-dark-review.jpg",
        width: 1200,
        height: 675,
        alt: "Student of the Year After Dark Review Shanaya Kapoor JioHotstar Worth Watching",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student of the Year After Dark Review: Worth Watching?",
    description:
      "Student of the Year: After Dark review on JioHotstar. See ratings from NDTV, India TV and more, plus story, cast and Shanaya Kapoor’s double role.",
    images: ["/images/student-of-the-year-after-dark-review.jpg"],
  },
};

export default function SOTYAfterDarkReviewPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    headline: "Student of the Year: After Dark Review – Shanaya Kapoor’s Dark Campus Thriller Gets Mixed Reactions",
    description:
      "Student of the Year: After Dark review on JioHotstar. See ratings from NDTV, India TV and more, plus story, cast and Shanaya Kapoor’s double role.",
    image: [
      "https://www.buzzoriginals.com/images/student-of-the-year-after-dark-review.jpg",
    ],
    datePublished: "2026-11-16T10:45:00Z",
    dateModified: "2026-11-16T10:45:00Z",
    author: {
      "@type": "Organization",
      name: "Buzz Originals Entertainment Desk",
      url: "https://www.buzzoriginals.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Buzz Originals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/images/logo.png",
      },
    },
    itemReviewed: {
      "@type": "TVSeries",
      name: "Student of the Year: After Dark",
      genre: ["Thriller", "Mystery", "Teen Drama"],
      actor: [
        { "@type": "Person", name: "Shanaya Kapoor" },
        { "@type": "Person", name: "Divik Sharma" },
        { "@type": "Person", name: "Manya Grover" },
        { "@type": "Person", name: "Sheeba Chaddha" },
      ],
      director: {
        "@type": "Person",
        name: "Reema Maya",
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "3.0",
      bestRating: "5",
      worstRating: "1",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.buzzoriginals.com/student-of-the-year-after-dark-review",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.buzzoriginals.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Web Series",
        item: "https://www.buzzoriginals.com/web-series",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SOTY After Dark Review",
        item: "https://www.buzzoriginals.com/student-of-the-year-after-dark-review",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--paper)]">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header activeNav="Web Series" />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-mono text-xs text-[var(--mist)] uppercase tracking-wider mb-6"
        >
          <Link href="/" className="hover:text-[var(--lime)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/web-series" className="hover:text-[var(--lime)] transition-colors">
            Web Series
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">SOTY After Dark Review</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ OTT SERIES REVIEW</span>
          <span className="badge pink">3 / 5 STARS</span>
          <span className="badge">Shanaya Kapoor</span>
          <span className="badge">JioHotstar</span>
          <span className="badge">Dharmatic</span>
          <span className="badge">Campus Mystery</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Student of the Year: After Dark Review – Shanaya Kapoor’s Dark Campus Thriller Gets Mixed Reactions
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>5 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">WEB SERIES &amp; BOLLYWOOD</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/student-of-the-year-after-dark-review.jpg"
            alt="Student of the Year After Dark Review Shanaya Kapoor JioHotstar Worth Watching"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Shanaya Kapoor headlines Dharmatic Entertainment’s gritty campus reboot Student of the Year: After Dark on JioHotstar in a double role as twin sisters Aayesha and Aditi. (Photo: Buzz Originals / JioHotstar)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Review:</span>
          <a
            href="https://api.whatsapp.com/send?text=Student%20of%20the%20Year%20After%20Dark%20Review:%20Worth%20Watching?%20-%20https://www.buzzoriginals.com/student-of-the-year-after-dark-review"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Student%20of%20the%20Year%20After%20Dark%20Review:%20Worth%20Watching?&url=https://www.buzzoriginals.com/student-of-the-year-after-dark-review"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            X Post
          </a>
        </div>

        {/* Key Takeaways Box */}
        <div
          style={{
            background: "rgba(223, 255, 0, 0.04)",
            border: "1px solid rgba(223, 255, 0, 0.25)",
            borderRadius: "14px",
            padding: "24px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "12px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>⚡</span>
            <span>SOTY: After Dark Review Takeaways</span>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "15px",
              lineHeight: "1.6",
            }}
          >
            <li>
              <strong>Bold Genre Shift:</strong> Karan Johar’s glittery campus franchise pivots into a somber, noir murder mystery directed by Reema Maya.
            </li>
            <li>
              <strong>Shanaya Kapoor Shines in Double Role:</strong> Reviewers widely laud Shanaya’s de-glammed performance navigating estranged identical twin sisters Aayesha and Aditi.
            </li>
            <li>
              <strong>Polarized Critic Verdict:</strong> Ratings span between 2.5/5 (NDTV) and 4/5 (India.com), settling at an aggregate score of 3.0/5.
            </li>
            <li>
              <strong>Strengths:</strong> Moody cinematography, atmospheric score by Achint Thakkar, tension-building sound design, and spirited young ensemble cast.
            </li>
            <li>
              <strong>Shortcomings:</strong> Pacing inconsistencies in the middle episodes, convoluted subplots, and an over-reliance on familiar teen thriller tropes.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Remember <em>Student of the Year</em>? It was all about stylish designer outfits, college romance, and peppy dance anthems. Karan Johar’s famous franchise is back, but this time the mood is very different.
          </p>

          <p>
            <strong>Student of the Year: After Dark</strong> is now streaming on <strong>JioHotstar</strong>. It stars <strong>Shanaya Kapoor</strong> in a double role. Critics are divided, with ratings ranging from 2.5 to 4 out of 5.
          </p>

          <p>
            So is it worth your time? Let’s break it down.
          </p>

          <h2>Student of the Year: After Dark – Quick Details</h2>
          <ul>
            <li><strong>Where to watch:</strong> JioHotstar</li>
            <li><strong>Release date:</strong> 13 November 2026</li>
            <li><strong>Episodes:</strong> 6</li>
            <li><strong>Director:</strong> Reema Maya</li>
            <li><strong>Produced by:</strong> Dharmatic Entertainment, backed by Karan Johar, Adar Poonawalla and Apoorva Mehta</li>
            <li><strong>Music:</strong> Achint Thakkar. Background score by Night Song and Shalom Benjamin</li>
            <li><strong>Languages:</strong> Hindi, Tamil, Telugu, Malayalam, Bengali, Bhojpuri, Kannada and Marathi</li>
            <li><strong>Lead actor:</strong> Shanaya Kapoor</li>
          </ul>

          <h2>What Is the Story About?</h2>
          <p>
            Aayesha Malik is the most popular girl at St. Teresa’s Heritage School. One day, she is found dead in a frozen lake. The police think it was an accident and want to close the case.
          </p>
          <p>
            Her twin sister Aditi (also played by Shanaya Kapoor) does not agree. The two sisters were not close, but Aditi wants the truth. She asks for a post-mortem and then pushes the school dean to give her admission.
          </p>
          <p>
            At the school, Aditi meets Aayesha’s circle of friends:
          </p>
          <ul>
            <li><strong>Tara Barman (Manya Grover):</strong> Aayesha’s best friend</li>
            <li><strong>Siddharth “Sid” Saraiya (Divik Sharma):</strong> Aayesha’s boyfriend</li>
            <li><strong>Rehaan Rizvi (Abhinav Singh):</strong> A close friend</li>
            <li><strong>Babydoll (Deeya Damini):</strong> Her roommate</li>
            <li><strong>Jay-D (Adi Malik):</strong> Tara’s boyfriend</li>
          </ul>
          <p>
            Soon, she finds out about a secret competition called <em>Student of the Year</em>, in which Aayesha was also taking part. Everyone seems to be hiding something, and anyone could be the killer.
          </p>

          <h2>Who Is in the Cast?</h2>
          <p>
            Along with Shanaya Kapoor, the series features a vibrant youth ensemble:
          </p>
          <ul>
            <li>Divik Sharma</li>
            <li>Manya Grover</li>
            <li>Abhinav Singh</li>
            <li>Deeya Damini</li>
            <li>Adi Malik</li>
            <li>Yash Raghuvanshi</li>
            <li>Anushree Shukla</li>
            <li>Mannat Duggal</li>
            <li>Sahil Rihani</li>
          </ul>
          <p>
            Experienced industry veterans like <strong>Sheeba Chaddha</strong>, <strong>Neeraj Kabi</strong>, <strong>Vivek Gomber</strong>, <strong>Harsh Chhaya</strong> and <strong>Khalid Siddiqui</strong> also deliver heavyweight performances in the series.
          </p>

          <h2>What Are Critics Saying? (Ratings from Top Outlets)</h2>
          <p>
            Critics are divided, and the ratings show the wide split in critical consensus:
          </p>

          <div className="overflow-x-auto my-6">
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(223, 255, 0, 0.08)", borderBottom: "1px solid rgba(223, 255, 0, 0.2)" }}>
                  <th style={{ padding: "14px 16px", textAlign: "left", color: "var(--lime)", fontFamily: "var(--font-space-mono)", fontSize: "13px" }}>OUTLET</th>
                  <th style={{ padding: "14px 16px", textAlign: "left", color: "var(--lime)", fontFamily: "var(--font-space-mono)", fontSize: "13px" }}>RATING</th>
                  <th style={{ padding: "14px 16px", textAlign: "left", color: "var(--lime)", fontFamily: "var(--font-space-mono)", fontSize: "13px" }}>OVERALL VERDICT</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "14.5px" }}>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>NDTV</td>
                  <td style={{ padding: "12px 16px", color: "var(--magenta)", fontWeight: "bold" }}>2.5 / 5</td>
                  <td style={{ padding: "12px 16px", color: "#d4d4d8" }}>Disappointing, with weak writing</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>India TV</td>
                  <td style={{ padding: "12px 16px", color: "var(--lime)", fontWeight: "bold" }}>3.0 / 5</td>
                  <td style={{ padding: "12px 16px", color: "#d4d4d8" }}>Fresh idea, but not fully convincing</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Bollywood Hungama</td>
                  <td style={{ padding: "12px 16px", color: "var(--lime)", fontWeight: "bold" }}>3.0 / 5</td>
                  <td style={{ padding: "12px 16px", color: "#d4d4d8" }}>Stylish and interesting thriller</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>India.com</td>
                  <td style={{ padding: "12px 16px", color: "var(--lime)", fontWeight: "bold" }}>4.0 / 5</td>
                  <td style={{ padding: "12px 16px", color: "#d4d4d8" }}>Promising and a good weekend binge</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <em>ETV Bharat</em> also reviewed the show and found it interesting but noted that several emotional beats are not always convincing.
          </p>

          <h2>What Most Critics Liked</h2>
          <ul>
            <li>
              <strong>Shanaya Kapoor’s double role:</strong> Almost every review praises her. She plays two very different sisters, and critics say she handles both nuanced roles with restraint and conviction.
            </li>
            <li>
              <strong>The dark mood and look:</strong> The school setting, chilly camera work, and high production design values earned appreciation across major entertainment desks.
            </li>
            <li>
              <strong>The background score:</strong> Critics liked how Achint Thakkar, Night Song, and Shalom Benjamin build tension without overpowering the scenes.
            </li>
            <li>
              <strong>The supporting cast:</strong> Divik Sharma, Manya Grover, and Deeya Damini received special mentions for their screen presence.
            </li>
            <li>
              <strong>A new take on the franchise:</strong> Moving from a bright, sugary college romance into an atmospheric murder mystery was lauded as a bold, ambitious step for Dharmatic.
            </li>
          </ul>

          <h2>What Critics Did Not Like</h2>
          <ul>
            <li>
              <strong>Slow pace and messy writing:</strong> Some reviewers found the central investigation confusing and repetitive in the middle episodes.
            </li>
            <li>
              <strong>Plot holes:</strong> <em>Bollywood Hungama</em> pointed out that it is never adequately explained how Aayesha reached a lake located 112 km from the campus premises.
            </li>
            <li>
              <strong>Too many secrets:</strong> After a while, every single secondary character harboring a dark, shadowy secret begins to feel exhausting.
            </li>
            <li>
              <strong>Too similar to other shows:</strong> Several reviewers noted that the competitive mind games and grim school aesthetics draw heavy inspiration from <em>Squid Game</em>, <em>The Hunger Games</em>, and <em>Class</em>.
            </li>
            <li>
              <strong>The hypnosis finale:</strong> Both NDTV and Bollywood Hungama found the final resolution slightly convoluted.
            </li>
            <li>
              <strong>A guessable twist:</strong> According to trade watchers, seasoned mystery fans might deduce the killer’s identity well before the finale.
            </li>
          </ul>

          <h2>What Did NDTV Say?</h2>
          <p>
            NDTV’s review was the most critical, awarding the series a 2.5/5 rating. Their primary observations were:
          </p>
          <ul>
            <li>
              <strong>Shanaya is good, but the writing lets her down:</strong> The review acknowledged that Shanaya possesses charm and screen confidence, but needs tighter scripts. She delivers an authentic, unglamorous turn that contrasts with earlier franchise leads.
            </li>
            <li>
              <strong>The mystery gets diluted:</strong> The show kicks off as a high-stakes whodunit, but gradually gets bogged down in personal drama, toxic relationships, and domestic friction.
            </li>
            <li>
              <strong>Tries too hard to sound Gen Z:</strong> The dialogue occasionally feels overburdened with forced slang and trendy buzzwords.
            </li>
            <li>
              <strong>The competition feels watered down:</strong> In the original films, the Student of the Year contest involved elaborate dance battles and sports triathlons; here, tasks often devolve into psychological insult exchanges.
            </li>
            <li>
              <strong>The classic Dharma sparkle is absent:</strong> The reviewer longed for the grand party songs and larger-than-life campus energy that originally defined the franchise.
            </li>
          </ul>

          <h2>Who Will Like This Series?</h2>
          <p>
            Trade analysts believe the series will find significant resonance with viewers under 25, especially given the rarity of homegrown young-adult dark mysteries in Indian streaming.
          </p>

          <blockquote>
            “If you are stepping in expecting the bubbly, technicolor college universe of Karan Johar’s 2012 original, After Dark will give you a stark culture shock. But if you enjoy moody teen noir and want to see Shanaya Kapoor prove her acting mettle without the safety net of high glam, it is an engaging weekend watch.”
          </blockquote>

          <p><strong>Watch it if:</strong></p>
          <ul>
            <li>You enjoy murder mysteries set within high-pressure academic institutions</li>
            <li>You want to witness Shanaya Kapoor in a promising, stripped-down double role</li>
            <li>You appreciate dark young-adult psychological suspense</li>
          </ul>

          <p><strong>Skip it if:</strong></p>
          <ul>
            <li>You are looking for the carefree, colorful college nostalgia of the 2012 original</li>
            <li>You demand airtight, leak-proof procedural writing without pacing dips</li>
          </ul>

          <h2>Our Take</h2>
          <p>
            Across major review portals, <strong>Student of the Year: After Dark</strong> averages around <strong>3 out of 5 stars</strong>. Shanaya Kapoor’s committed performance and the series’ slick aesthetic are its undeniable triumphs, even if erratic writing holds it back from greatness. With just six compact episodes, you can easily stream the first two to see if its grim mood clicks with you.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for more OTT reviews, reality show updates, and Bollywood scoops.
          </p>

          {/* Related Stories */}
          <div
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--lime)",
                marginBottom: "16px",
                fontFamily: "var(--font-anton)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Related Stories on Buzz Originals
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "15px",
              }}
            >
              <li>
                <Link
                  href="/student-of-the-year-after-dark-reema-maya-class-comparison"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Student of the Year After Dark vs Class: Reema Maya Reacts to Copy Claims
                </Link>
              </li>
              <li>
                <Link
                  href="/panchayat-season-5-not-releasing-2026"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Panchayat Season 5 Will Not Release in 2026, Says Prime Video
                </Link>
              </li>
              <li>
                <Link
                  href="/amitabh-bachchan-jalsa-property-dispute"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Amitabh Bachchan’s Jalsa Property Dispute: What Is Going On?
                </Link>
              </li>
              <li>
                <Link
                  href="/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sunny Deol’s Suryaa: Ant Se Aarambh Tak Postponed to 2027 After IMA Objection
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "StudentOfTheYearAfterDark",
            "SOTYAfterDark",
            "ShanayaKapoor",
            "JioHotstar",
            "SeriesReview",
            "ReemaMaya",
            "KaranJohar",
            "Dharmatic",
            "WebSeriesReview",
            "CampusThriller",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[var(--paper)] border border-white/[0.08]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
