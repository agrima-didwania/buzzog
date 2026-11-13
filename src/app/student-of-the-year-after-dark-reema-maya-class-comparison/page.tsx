import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Student of the Year After Dark vs Class: Reema Maya Reacts | Buzz Originals",
  description:
    "Reema Maya says Student of the Year: After Dark is a fresh take on the young-adult murder mystery genre, not a copy of Netflix’s Class. Here’s what she said.",
  keywords: [
    "Student of the Year After Dark",
    "Reema Maya",
    "Student of the Year After Dark vs Class",
    "Shanaya Kapoor web series",
    "Karan Johar web series",
    "Student of the Year After Dark JioHotstar",
    "Student of the Year After Dark release date",
    "Student of the Year After Dark cast",
    "Is Student of the Year After Dark copied from Class",
    "Student of the Year After Dark story",
    "Reema Maya reacts to Class comparison",
    "Dharmatic Entertainment",
    "Bollywood news",
    "OTT web series",
  ],
  alternates: {
    canonical: "/student-of-the-year-after-dark-reema-maya-class-comparison",
  },
  openGraph: {
    title: "Student of the Year After Dark vs Class: Reema Maya Reacts | Buzz Originals",
    description:
      "Reema Maya says Student of the Year: After Dark is a fresh take on the young-adult murder mystery genre, not a copy of Netflix’s Class. Here’s what she said.",
    url: "https://www.buzzoriginals.com/student-of-the-year-after-dark-reema-maya-class-comparison",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/student-of-the-year-after-dark-reema-maya-class-comparison.jpg",
        width: 1200,
        height: 675,
        alt: "Student of the Year After Dark vs Class: Reema Maya Reacts",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student of the Year After Dark vs Class: Reema Maya Reacts",
    description:
      "Reema Maya says Student of the Year: After Dark is a fresh take on the young-adult murder mystery genre, not a copy of Netflix’s Class. Here’s what she said.",
    images: ["/images/student-of-the-year-after-dark-reema-maya-class-comparison.jpg"],
  },
};

export default function SOTYAfterDarkReemaMayaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Student of the Year After Dark vs Class: Reema Maya Reacts",
    description:
      "Reema Maya says Student of the Year: After Dark is a fresh take on the young-adult murder mystery genre, not a copy of Netflix’s Class. Here’s what she said.",
    image: [
      "https://www.buzzoriginals.com/images/student-of-the-year-after-dark-reema-maya-class-comparison.jpg",
    ],
    datePublished: "2026-11-13T05:58:00Z",
    dateModified: "2026-11-13T05:58:00Z",
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.buzzoriginals.com/student-of-the-year-after-dark-reema-maya-class-comparison",
    },
    keywords: [
      "Student of the Year After Dark",
      "Reema Maya",
      "Student of the Year After Dark vs Class",
      "Shanaya Kapoor web series",
      "Karan Johar web series",
      "Student of the Year After Dark JioHotstar",
    ],
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
        name: "SOTY: After Dark vs Class",
        item: "https://www.buzzoriginals.com/student-of-the-year-after-dark-reema-maya-class-comparison",
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
          <span className="text-[var(--lime)]">SOTY: After Dark vs Class</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Exclusive Interview</span>
          <span className="badge pink">SOTY: After Dark</span>
          <span className="badge">Reema Maya</span>
          <span className="badge">JioHotstar</span>
          <span className="badge">Shanaya Kapoor</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Student of the Year After Dark vs Class: Reema Maya Reacts
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-13">November 13, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD &amp; OTT</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/student-of-the-year-after-dark-reema-maya-class-comparison.jpg"
            alt="Student of the Year After Dark vs Class: Reema Maya Reacts"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Director Reema Maya addresses comparisons between Student of the Year: After Dark and Netflix’s Class, explaining how Karan Johar encouraged her gritty murder mystery reboot. (Photo: Buzz Originals / JioHotstar)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Student%20of%20the%20Year%20After%20Dark%20vs%20Class:%20Reema%20Maya%20Reacts%20-%20https://www.buzzoriginals.com/student-of-the-year-after-dark-reema-maya-class-comparison"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Student%20of%20the%20Year%20After%20Dark%20vs%20Class:%20Reema%20Maya%20Reacts&url=https://www.buzzoriginals.com/student-of-the-year-after-dark-reema-maya-class-comparison"
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
            <span>SOTY: After Dark vs Class: Key Takeaways</span>
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
              <strong>Genre Expectations:</strong> Director Reema Maya clarified that high school rivalries, romantic tension, and a murder are hallmarks of the young-adult murder mystery genre, not signs of copying Netflix’s <em>Class</em>.
            </li>
            <li>
              <strong>Praise for Ashim Ahluwalia:</strong> Reema lauded Netflix’s <em>Class</em> as a “wonderful show” and called director Ashim Ahluwalia an “amazing filmmaker,” while noting the fundamental thematic differences.
            </li>
            <li>
              <strong>Twin Mystery Plot:</strong> Shanaya Kapoor makes her digital debut in a double role playing twin sisters at St. Teresa Heritage School, fighting cutthroat competition to identify her sibling’s killer.
            </li>
            <li>
              <strong>Karan Johar’s Zero Pushback:</strong> Franchise creator Karan Johar gave Reema complete freedom to darken the franchise, encouraging her to “just push it and have fun.”
            </li>
            <li>
              <strong>Streaming Platform &amp; Date:</strong> Produced by Dharmatic Entertainment, the series streams on JioHotstar starting November 13, 2026.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Karan Johar’s <em>Student of the Year</em> franchise used to be synonymous with glossy campus romance, designer uniforms, dance battles, and sun-drenched sports days. With <em>Student of the Year: After Dark</em>, that glamorous world is radically swapped for shadowy corridors, bloodstains, and an ominous murder mystery.
          </p>

          <p>
            The internet noticed the sudden stylistic overhaul the moment the teaser arrived. Almost immediately, viewers began drawing swift comparisons to Netflix’s gritty high school crime drama <em>Class</em>. Now, director Reema Maya has candidly responded to the discourse. Here is everything she had to say about the inspiration, the genre, and Karan Johar’s reaction.
          </p>

          <h2>What is Student of the Year: After Dark about?</h2>
          <p>
            The new web series is set inside the elite walls of St. Teresa Heritage School. Taking center stage is Shanaya Kapoor in a double role playing twin sisters. When one twin is mysteriously murdered, her sister enters the prestigious yet cutthroat Student of the Year competition to uncover the truth and pinpoint the killer among her affluent classmates.
          </p>

          <p>
            Along the way, she is forced to navigate toxic rivalries, privilege, campus politics, and deep personal betrayals. The ensemble cast features:
          </p>

          <ul>
            <li><strong>Shanaya Kapoor</strong> (making her digital acting debut in twin roles)</li>
            <li><strong>Abhinav Singh</strong> and <strong>Divik Sharma</strong></li>
            <li><strong>Manya Grover</strong>, <strong>Deeya Damani</strong>, and <strong>Adi Malik</strong></li>
            <li>Veteran performers <strong>Sheeba Chaddha</strong> and <strong>Vivek Gomber</strong></li>
          </ul>

          <p>
            Produced under Karan Johar’s digital arm, Dharmatic Entertainment, the high-octane thriller begins streaming on JioHotstar from November 13, 2026.
          </p>

          <h2>Why are people comparing it to Class?</h2>
          <p>
            <em>Class</em>, released on Netflix in 2023 and helmed by acclaimed director Ashim Ahluwalia, was the official Indian adaptation of the Spanish hit series <em>Elite</em>. It tracked working-class scholarship students entering Hampton International, an ultra-wealthy Delhi school, and the explosive clash of socioeconomic strata that culminated in murder.
          </p>

          <p>
            Because both shows anchor themselves in elite boarding-school subcultures with teenage anti-heroes and a shocking death at the core, social media users drew swift parallels.
          </p>

          <p>
            Comment threads under the trailer also cited international touchstones like <em>Riverdale</em>, <em>Euphoria</em>, and even <em>Squid Game</em>. One viral comment quipped:
          </p>

          <blockquote>
            “ELITE + Squid Game = Student of the Year: After Dark.”
          </blockquote>

          <h2>What did Reema Maya say?</h2>
          <p>
            Addressing the comparisons head-on, Reema Maya was gracious and appreciative of Ashim Ahluwalia’s work, praising <em>Class</em> as an extraordinary production. However, she emphasized that sharing genre DNA is very different from copying another show’s voice:
          </p>

          <blockquote>
            “That is the expectation of the genre. A young-adult murder mystery will have a murder, an elite school, teenage characters, and their complex relationships. There is a huge difference between being derivative and simply belonging to an established genre.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Reema Maya on Student of the Year: After Dark
            </footer>
          </blockquote>

          <p>
            Reema explained that her team set out to channel the innate energy and suspense of young-adult fiction while injecting an authentically fresh, modern Indian perspective. She described the series as:
          </p>

          <blockquote>
            “Grit, angst and heart. It is made for the youth of now.”
          </blockquote>

          <h2>Did Karan Johar have any problem with the dark twist?</h2>
          <p>
            Given that the original 2012 film <em>Student of the Year</em> was directed by Karan Johar himself—launching Alia Bhatt, Varun Dhawan, and Sidharth Malhotra into stardom with bubblegum pop exuberance—many wondered whether KJo was hesitant to turn the franchise into a blood-splattered thriller.
          </p>

          <p>
            According to Reema, Karan was completely on board from the very first pitch:
          </p>

          <blockquote>
            “There was none (pushback); only excitement and encouragement. Karan told me, ‘Just push it and have fun.’ It felt like an honor that he trusted me with a franchise that is so deeply personal to him.”
          </blockquote>

          <h2>Our take</h2>
          <p>
            The <em>Student of the Year</em> moniker guarantees immediate brand curiosity, and taking the darker, psychological route has sparked undeniable buzz before the premiere. Whether audiences embrace it as a distinctive Indian high-school noir or draw ongoing parallels to <em>Class</em> will depend entirely on how the suspense unfolds across episodes.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for episodic reviews, character breakdowns, and the latest OTT scoops.
          </p>

          {/* Related Articles Box */}
          <div
            style={{
              marginTop: "40px",
              padding: "24px",
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "14px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "12px",
                color: "var(--lime)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "14px",
                fontWeight: "bold",
              }}
            >
              Related Bollywood &amp; OTT Stories
            </div>
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
                  href="/ananya-panday-aarav-bhatia-my-heart-post"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral: Diwali Party Scoop
                </Link>
              </li>
              <li>
                <Link
                  href="/the-royals-season-2-goes-on-floors"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → The Royals Season 2 Goes on Floors: Ishaan Khatter and Zeenat Aman Return on Netflix
                </Link>
              </li>
              <li>
                <Link
                  href="/amyra-dastur-farah-khan-titanic-kung-fu-yoga"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Amyra Dastur Reveals Farah Khan’s “Titanic” Remark: Candid Scoop on Kung Fu Yoga Set
                </Link>
              </li>
              <li>
                <Link
                  href="/karan-johar-kareena-kapoor-diwali-pout-pic"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Karan Johar Calls Kareena Kapoor Pout Queen in Diwali Pic: See Festive Reunion
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Student of the Year After Dark",
            "Reema Maya",
            "Class",
            "Shanaya Kapoor",
            "Karan Johar",
            "JioHotstar",
            "Dharmatic Entertainment",
            "Ashim Ahluwalia",
            "Elite",
            "Bollywood News",
            "Web Series",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[var(--paper)] border border-white/[0.08]"
            >
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
