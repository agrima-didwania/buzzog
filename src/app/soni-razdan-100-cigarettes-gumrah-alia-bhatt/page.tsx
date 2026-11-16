import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Soni Razdan Smoked 100 Cigarettes Pregnant With Alia | Buzz Originals",
  description:
    "Soni Razdan says she smoked 100 cigarettes on the Gumrah set without knowing she was pregnant with Alia Bhatt. Read her full story.",
  keywords: [
    "Soni Razdan Gumrah",
    "Soni Razdan 100 cigarettes",
    "Soni Razdan pregnant with Alia Bhatt",
    "Alia Bhatt mother Soni Razdan",
    "Gumrah movie 1993",
    "Soni Razdan interview SCREEN",
    "Soni Razdan pregnancy shooting",
    "Bollywood actress working while pregnant",
    "did Soni Razdan smoke 100 cigarettes in Gumrah",
    "was Soni Razdan pregnant with Alia during Gumrah",
    "Soni Razdan Gumrah smoking scene",
    "Alia Bhatt birth date and mother’s film",
    "Bollywood news",
    "Bollywood throwback",
  ],
  alternates: {
    canonical: "/soni-razdan-100-cigarettes-gumrah-alia-bhatt",
  },
  openGraph: {
    title: "Soni Razdan Smoked 100 Cigarettes Pregnant With Alia | Buzz Originals",
    description:
      "Soni Razdan says she smoked 100 cigarettes on the Gumrah set without knowing she was pregnant with Alia Bhatt. Read her full story.",
    url: "https://www.buzzoriginals.com/soni-razdan-100-cigarettes-gumrah-alia-bhatt",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/soni-razdan-100-cigarettes-gumrah-alia-bhatt.jpg",
        width: 1200,
        height: 675,
        alt: "Soni Razdan Smoked 100 Cigarettes Pregnant With Alia",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soni Razdan Smoked 100 Cigarettes Pregnant With Alia",
    description:
      "Soni Razdan says she smoked 100 cigarettes on the Gumrah set without knowing she was pregnant with Alia Bhatt. Read her full story.",
    images: ["/images/soni-razdan-100-cigarettes-gumrah-alia-bhatt.jpg"],
  },
};

export default function SoniRazdanGumrahPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Soni Razdan Smoked 100 Cigarettes Pregnant With Alia",
    description:
      "Soni Razdan says she smoked 100 cigarettes on the Gumrah set without knowing she was pregnant with Alia Bhatt. Read her full story.",
    image: [
      "https://www.buzzoriginals.com/images/soni-razdan-100-cigarettes-gumrah-alia-bhatt.jpg",
    ],
    datePublished: "2026-11-16T05:58:00Z",
    dateModified: "2026-11-16T05:58:00Z",
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
      "@id": "https://www.buzzoriginals.com/soni-razdan-100-cigarettes-gumrah-alia-bhatt",
    },
    keywords: [
      "Soni Razdan Gumrah",
      "Soni Razdan 100 cigarettes",
      "Soni Razdan pregnant with Alia Bhatt",
      "Alia Bhatt mother Soni Razdan",
      "Gumrah movie 1993",
      "Soni Razdan interview SCREEN",
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
        name: "Bollywood",
        item: "https://www.buzzoriginals.com/bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Soni Razdan Gumrah Pregnancy Story",
        item: "https://www.buzzoriginals.com/soni-razdan-100-cigarettes-gumrah-alia-bhatt",
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

      <Header activeNav="Bollywood" />

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
          <Link href="/bollywood" className="hover:text-[var(--lime)] transition-colors">
            Bollywood
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">Soni Razdan on Gumrah</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Candid Throwback</span>
          <span className="badge pink">Gumrah (1993)</span>
          <span className="badge">Soni Razdan</span>
          <span className="badge">Alia Bhatt</span>
          <span className="badge">SCREEN Interview</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Soni Razdan Smoked 100 Cigarettes in a Day on Gumrah Set, Not Knowing She Was Pregnant With Alia Bhatt
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD THROWBACK</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/soni-razdan-100-cigarettes-gumrah-alia-bhatt.jpg"
            alt="Soni Razdan Smoked 100 Cigarettes Pregnant With Alia"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Soni Razdan revealed in a candid interview with SCREEN that she smoked nearly 100 cigarettes in a day while filming Mahesh Bhatt’s 1993 thriller Gumrah, completely unaware that she was expecting daughter Alia Bhatt. (Photo: Buzz Originals / SCREEN)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Soni%20Razdan%20Smoked%20100%20Cigarettes%20Pregnant%20With%20Alia%20-%20https://www.buzzoriginals.com/soni-razdan-100-cigarettes-gumrah-alia-bhatt"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Soni%20Razdan%20Smoked%20100%20Cigarettes%20Pregnant%20With%20Alia&url=https://www.buzzoriginals.com/soni-razdan-100-cigarettes-gumrah-alia-bhatt"
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
            <span>Soni Razdan &amp; Gumrah: Key Takeaways</span>
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
              <strong>100 Cigarettes in One Day:</strong> During retakes for a prison sequence in Mahesh Bhatt’s <em>Gumrah</em> (1993), non-smoker Soni Razdan smoked nearly 100 cigarettes without knowing she was already expecting Alia Bhatt.
            </li>
            <li>
              <strong>Total Shock &amp; Relief:</strong> Soni revealed she had “no clue Alia was inside me” and was terrified once she found out, though she jokingly admitted craving cigarettes after the shoot.
            </li>
            <li>
              <strong>Gumrah (1993) Legacy:</strong> The crime thriller starring Sridevi and Sanjay Dutt became the 7th highest-grossing film of 1993. Alia was born on March 15, 1993, while Soni was still in production breaks.
            </li>
            <li>
              <strong>Hiding Kids in the 90s:</strong> Soni spoke about how working actresses had to conceal motherhood from producers in the 1990s out of fear of losing roles.
            </li>
            <li>
              <strong>Alia Following Suit:</strong> Decades later, Alia Bhatt also worked rigorously through her 2022 pregnancy with daughter Raha Kapoor, performing action scenes in Hollywood’s <em>Heart of Stone</em>.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Veteran actor Soni Razdan has shared an astonishing behind-the-scenes revelation that has caught Bollywood enthusiasts by complete surprise. Decades ago, while shooting a sequence that demanded chain-smoking on a film set, she had no inkling that she was already pregnant with superstar daughter Alia Bhatt.
          </p>

          <p>
            In a recent candid interaction with <em>SCREEN</em>, the veteran actor walked down memory lane to reflect on working relentlessly through both of her pregnancies. While parts of the recollection bring laughter today, the story also offers a sobering glimpse into the demanding challenges working women navigated in 1990s Hindi cinema.
          </p>

          <h2>What Happened on the Gumrah Set</h2>
          <p>
            Soni played an inmate in Mahesh Bhatt’s 1993 hit crime drama <em>Gumrah</em>. Recounting a pivotal prison sequence that required repeated retakes from multiple camera angles, Soni revealed that she ended up smoking close to 100 cigarettes across a grueling single day of filming.
          </p>

          <p>
            Remarkably, Soni was never a smoker in her personal life. She only discovered she was expecting Alia several weeks after the sequence wrapped.
          </p>

          <blockquote>
            “I had no clue Alia was inside me! We did so many takes that I must have smoked almost 100 cigarettes that day.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Soni Razdan in conversation with SCREEN
            </footer>
          </blockquote>

          <p>
            Laughing as she looked back at the surreal memory, Soni confessed that she surprisingly developed random cigarette cravings for days following the shoot before discovering her pregnancy.
          </p>

          <h2>Not the First Time She Spoke About It</h2>
          <p>
            Long-time Bollywood followers might recall hints of this anecdote from years ago. Back in July 2019, Soni tweeted a nostalgic still from <em>Gumrah</em>, expressing gratitude for sharing screen space with legendary actress Sridevi. In that post, she fondly noted that she was pregnant with Alia during filming without knowing it and had smoked “soooo many cigarettes” for the sequence.
          </p>

          <p>
            In another retrospective interview, she candidly confessed that once her pregnancy was confirmed, she felt an overwhelming sense of panic, terrified that the heavy nicotine exposure from that intense shoot day might harm her unborn child. Thankfully, Alia was delivered healthy and safe on March 15, 1993.
          </p>

          <h2>About the Film: Gumrah (1993)</h2>
          <p>
            Directed by Mahesh Bhatt and produced by Yash Johar under Dharma Productions, <em>Gumrah</em> starred Sridevi, Sanjay Dutt, and Rahul Roy alongside Soni Razdan and Anupam Kher. It was celebrated for Sridevi’s commanding performance and emerged as the seventh highest-grossing Hindi film of 1993.
          </p>

          <p>
            Soni shot the film’s dramatic gallows scene while pregnant. Following a five-month production break, her costumes no longer fit due to her growing baby bump, prompting the wardrobe department to make swift emergency alterations.
          </p>

          <h2>Working Through Her First Pregnancy on Buniyaad</h2>
          <p>
            Juggling film schedules with pregnancy was not new for Soni. Her first pregnancy—with elder daughter Shaheen Bhatt—arrived while she was starring in the landmark Doordarshan television drama <em>Buniyaad</em> (1986–1987), directed by Ramesh Sippy and Jyoti Swarup.
          </p>

          <p>
            At the time, Soni lived in Lokhandwala, Andheri, which was considered far from the city center in the 1980s, making it nearly impossible to hail a taxi for a 6:00 AM call time. Soni praised the Sippy family for their extraordinary warmth: they dispatched a dedicated car every morning and ensured she had the most comfortable resting room on set. Shaheen was born in 1988.
          </p>

          <h2>“We Had to Hide That We Had Children”</h2>
          <p>
            Beyond humorous anecdotes, Soni opened up about the deeply entrenched biases female actors confronted during that era. In the late 1980s and 1990s, women often felt compelled to actively conceal their marriages and children from filmmakers.
          </p>

          <blockquote>
            “Back then, producers worried that if an actor had a child, she would run off mid-shoot if the baby fell sick. We literally had to hide that we had kids.”
          </blockquote>

          <p>
            She recalled an alarming incident from 1995 while filming <em>A Mouthful of Sky</em> in Saki Naka. Soni received an urgent pager alert informing her that both young daughters, Shaheen and Alia, were accidentally locked out of their apartment. Stranded on set miles away without mobile phones, she frantically coordinated from the studio landline to get neighbours to shelter them safely.
          </p>

          <p>
            Soni expressed deep joy that times have progressed, and today’s generation of actresses—including Alia—can openly embrace motherhood without fearing career exile. She quipped about her relentless work ethic: <em>“I never took a break; the break took me.”</em>
          </p>

          <h2>The Company That Supported Her: Cinevistaas</h2>
          <p>
            Soni also expressed heartfelt gratitude to production house Cinevistaas Limited. After marrying Mahesh Bhatt, many industry insiders cynically assumed she would stop working or questioned why she needed roles.
          </p>

          <p>
            Cinevistaas stood by her, casting her in prominent television serials like <em>Junoon</em> (1994–1998) and <em>Saahil</em> (1995–1996), treating her like family and ensuring she worked at least 10 days every month.
          </p>

          <h2>Alia Bhatt Follows a Similar Trailblazing Path</h2>
          <p>
            Decades later, Alia Bhatt has embraced that same unyielding dedication. During her 2022 pregnancy with daughter Raha Kapoor, Alia completed intense action choreography for her Hollywood debut <em>Heart of Stone</em> alongside Gal Gadot, promoted <em>Brahmāstra: Part One – Shiva</em> across India, and produced the acclaimed dark comedy <em>Darlings</em> right up to welcoming her child.
          </p>

          <h2>Medical &amp; Health Disclaimer</h2>
          <p style={{ fontSize: "14px", color: "var(--mist)", fontStyle: "italic", borderLeft: "2px solid var(--lime)", paddingLeft: "12px" }}>
            <strong>Disclaimer:</strong> This article recounts a personal historical memory shared in a celebrity retrospective interview for archival reporting. Smoking during pregnancy carries severe health risks for both mother and child. Expectant mothers are strongly advised to consult qualified healthcare professionals for all prenatal care and safety guidance.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for more unfiltered Bollywood retrospectives, celebrity archives, and exclusive interviews.
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
              Related Bollywood &amp; Retro Scoops
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
                  href="/student-of-the-year-after-dark-reema-maya-class-comparison"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Student of the Year After Dark vs Class: Reema Maya Reacts to Copy Claims
                </Link>
              </li>
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
            "Soni Razdan",
            "Alia Bhatt",
            "Gumrah",
            "Mahesh Bhatt",
            "Bollywood News",
            "Bollywood Throwback",
            "SCREEN Interview",
            "Sridevi",
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
