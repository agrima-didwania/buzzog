import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Amyra Dastur Reveals Farah Khan’s “Titanic” Remark | Buzz Originals",
  description:
    "Amyra Dastur shared how Farah Khan’s joke on the Kung Fu Yoga set almost made her cry. Read what Farah said and her Boman Irani story.",
  keywords: [
    "Amyra Dastur Farah Khan",
    "Amyra Dastur Titanic",
    "Farah Khan Titanic comment",
    "Amyra Dastur Kung Fu Yoga",
    "Farah Khan vlog Amyra Dastur",
    "Farah Khan Boman Irani Happy New Year",
    "Farah Khan yelling on set",
    "what did Farah Khan say to Amyra Dastur",
    "Amyra Dastur almost cried on Kung Fu Yoga set",
    "Farah Khan Boman Irani coma story",
    "Amyra Dastur Farah Khan house vlog",
    "Farah Khan choreographed Kung Fu Yoga song",
    "Chumbak Netflix series Amyra Dastur",
    "Bollywood news",
  ],
  alternates: {
    canonical: "/amyra-dastur-farah-khan-titanic-kung-fu-yoga",
  },
  openGraph: {
    title: "Amyra Dastur Reveals Farah Khan’s “Titanic” Remark | Buzz Originals",
    description:
      "Amyra Dastur shared how Farah Khan’s joke on the Kung Fu Yoga set almost made her cry. Read what Farah said and her Boman Irani story.",
    url: "https://www.buzzoriginals.com/amyra-dastur-farah-khan-titanic-kung-fu-yoga",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/amyra-dastur-farah-khan-titanic-kung-fu-yoga.jpg",
        width: 1200,
        height: 675,
        alt: "Amyra Dastur Reveals Farah Khan’s “Titanic” Remark",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amyra Dastur Reveals Farah Khan’s “Titanic” Remark",
    description:
      "Amyra Dastur shared how Farah Khan’s joke on the Kung Fu Yoga set almost made her cry. Read what Farah said and her Boman Irani story.",
    images: ["/images/amyra-dastur-farah-khan-titanic-kung-fu-yoga.jpg"],
  },
};

export default function AmyraDasturFarahKhanPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Amyra Dastur Reveals Farah Khan’s “Titanic” Remark",
    description:
      "Amyra Dastur shared how Farah Khan’s joke on the Kung Fu Yoga set almost made her cry. Read what Farah said and her Boman Irani story.",
    image: [
      "https://www.buzzoriginals.com/images/amyra-dastur-farah-khan-titanic-kung-fu-yoga.jpg",
    ],
    datePublished: "2026-11-10T05:52:00Z",
    dateModified: "2026-11-10T05:52:00Z",
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
      "@id": "https://www.buzzoriginals.com/amyra-dastur-farah-khan-titanic-kung-fu-yoga",
    },
    keywords: [
      "Amyra Dastur Farah Khan",
      "Amyra Dastur Titanic",
      "Farah Khan Titanic comment",
      "Amyra Dastur Kung Fu Yoga",
      "Farah Khan Boman Irani Happy New Year",
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
        name: "Amyra Dastur Farah Khan Titanic Remark",
        item: "https://www.buzzoriginals.com/amyra-dastur-farah-khan-titanic-kung-fu-yoga",
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
          <span className="text-[var(--lime)]">Amyra Dastur on Farah Khan</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Candid Scoop</span>
          <span className="badge pink">Farah Khan Vlog</span>
          <span className="badge">Kung Fu Yoga</span>
          <span className="badge">Amyra Dastur</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Amyra Dastur Says Farah Khan’s “Titanic” Comment Almost Made Her Cry
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-10">November 10, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD &amp; OTT</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/amyra-dastur-farah-khan-titanic-kung-fu-yoga.jpg"
            alt="Amyra Dastur Reveals Farah Khan’s “Titanic” Remark"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Amyra Dastur looks back at Farah Khan’s razor-sharp wit during the choreography of Kung Fu Yoga alongside Jackie Chan, which left her stunned and fighting back tears on set. (Photo: Buzz Originals / YouTube)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Amyra%20Dastur%20Reveals%20Farah%20Khan’s%20“Titanic”%20Remark%20-%20https://www.buzzoriginals.com/amyra-dastur-farah-khan-titanic-kung-fu-yoga"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Amyra%20Dastur%20Reveals%20Farah%20Khan’s%20“Titanic”%20Remark&url=https://www.buzzoriginals.com/amyra-dastur-farah-khan-titanic-kung-fu-yoga"
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
            <span>Amyra Dastur &amp; Farah Khan: Key Takeaways</span>
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
              <strong>The “Titanic” Remark:</strong> While shooting the song &apos;Goosebump&apos; for <em>Kung Fu Yoga</em> with Jackie Chan, Farah Khan jokingly congratulated Amyra and told her: <em>“You are going to be my Titanic and ruin my career!”</em>
            </li>
            <li>
              <strong>Near Tears on Set:</strong> An anxious Amyra did not know Farah’s dry wit and took the comment seriously, almost breaking down in tears right before the cameras.
            </li>
            <li>
              <strong>Geeta Kapur to the Rescue:</strong> Co-choreographer Geeta Kapur immediately consoled Amyra, advising her not to take Farah’s bluster to heart and focus on rehearsals.
            </li>
            <li>
              <strong>Farah’s Boman Irani “Coma” Story:</strong> Farah shared a hilarious anecdote about screaming at Boman Irani on <em>Happy New Year</em> because he was staying so motionless in character that she thought he had slipped into a coma.
            </li>
            <li>
              <strong>Current Projects:</strong> Farah is riding high on digital popularity with her viral YouTube channel alongside cook Dilip, while Amyra recently earned acclaim in Netflix&apos;s series <em>Chumbak</em>.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Amyra Dastur has shared a delightfully funny yet frightening memory from the sets of the international action-comedy <em>Kung Fu Yoga</em>. Renowned choreographer and filmmaker Farah Khan delivered a comment so unexpectedly savage that the young actress almost broke down in tears in front of the crew.
          </p>

          <p>
            Here is the full story behind the viral confession and Farah Khan’s legendary reputation on film sets.
          </p>

          <h2>How the Story Came Out</h2>
          <p>
            The incident came to light during Farah Khan’s latest YouTube vlog, where she visited Amyra Dastur’s elegant Mumbai residence for a candid home-tour chat. As the two reminisced about working together years ago, Amyra brought up a sharp exchange that has remained vividly etched in her memory.
          </p>

          <h2>What Happened on the Set of Kung Fu Yoga</h2>
          <p>
            Back in 2017, Farah Khan was roped in to choreograph a high-energy Indo-Chinese dance number titled <em>Goosebump</em> for Stanley Tong’s <em>Kung Fu Yoga</em>, starring global martial arts icon Jackie Chan alongside Amyra Dastur and Sonu Sood.
          </p>

          <p>
            Amyra admitted she had arrived on set intimidated by Farah’s fierce reputation as a no-nonsense perfectionist. Desperate not to make mistakes during rehearsals, Amyra pushed herself to the limit. That was when Farah approached her.
          </p>

          <p>
            Amyra recalled the surreal moment:
          </p>

          <blockquote>
            “Farah has a very good sense of humour, but I did not know that back then. I had only heard that Farah ma’am will yell at you, so don’t mess up... Then she came up to me and said, ‘Congratulations!’ So I thought I was doing such a good job. She said, ‘You are going to be my Titanic and ruin my career!’”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Amyra Dastur on Farah Khan&apos;s YouTube Vlog
            </footer>
          </blockquote>

          <p>
            Amyra admitted she was completely stunned and felt tears welling up in her eyes right there in front of the entire rehearsal unit.
          </p>

          <h2>Amyra Says It Didn’t Feel Like a Joke Then</h2>
          <p>
            Hearing the story during the vlog, Farah looked genuinely surprised and burst into laughter, asking: <em>“Did I really say that to you?”</em>
          </p>

          <p>
            Amyra insisted that at the time, it felt like the end of the world. Seeking comfort, she turned to fellow choreographer Geeta Kapur, who was assisting on the set. Geeta quickly stepped in, calming the frightened actress:
          </p>

          <blockquote>
            “Don’t cry, don’t take it seriously. Go practice.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Geeta Kapur reassuring Amyra Dastur
            </footer>
          </blockquote>

          <h2>Farah’s Own Story About Boman Irani on Happy New Year</h2>
          <p>
            Farah chuckled and offered her own playful justification: in Bollywood folklore, getting scolded by Farah Khan is considered good luck, as actors who face her wrath usually go on to enjoy flourishing careers.
          </p>

          <p>
            She then recounted a memorable clash with veteran actor Boman Irani on the sets of her 2014 blockbuster <em>Happy New Year</em>. According to Farah, Boman was deeply absorbed in Method acting and stayed so completely frozen between takes that she grew concerned.
          </p>

          <p>
            Unable to contain herself, Farah shouted across the set:
          </p>

          <blockquote>
            “Will you do something, or will you stay in a coma?”
          </blockquote>

          <p>
            A startled Boman snapped out of his stillness and protested that he was merely internalizing his character. The anecdote had both Farah and Amyra in splits during the vlog.
          </p>

          <h2>What Are Farah and Amyra Doing Now?</h2>
          <p>
            Farah Khan’s last feature directorial venture was the multi-starrer heist comedy <em>Happy New Year</em> (2014), which starred Shah Rukh Khan, Deepika Padukone, Abhishek Bachchan, Sonu Sood, Boman Irani, Vivaan Shah, and Jackie Shroff. While fans eagerly await her next directorial announcement, Farah has reinvented herself as one of the digital space’s biggest sensations, racking up millions of views through her culinary vlogs and warm celebrity house tours alongside her beloved cook, Dilip.
          </p>

          <p>
            Amyra Dastur, meanwhile, continues to build a versatile body of work across films and streaming series. She was most recently seen in the acclaimed Netflix series <em>Chumbak</em>, sharing the screen with veteran talents Neena Gupta, Deven Bhojani, Arjun Bijlani, and Sumeet Vyas.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Farah Khan’s trademark humor is razor-sharp and unfiltered—qualities that have made her one of Indian cinema’s most beloved personalities. While the “Titanic” jab gave a young Amyra sleepless nights at the time, it has evolved into a fond industry memory that both artists can laugh over today.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for daily unfiltered celebrity scoops, backstage stories, and streaming reviews.
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
              Related Bollywood &amp; Web Series Stories
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
                  href="/farah-khan-fake-fire-video-clickbait"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Farah Khan Reacts to Fake House Fire Videos: “Clickbait Can’t Be Everything”
                </Link>
              </li>
              <li>
                <Link
                  href="/farah-khan-bollywood-insecure-youtube-channel-dilip"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Farah Khan Says Bollywood Makes People Insecure: Opens Up on YouTube Channel with Cook Dilip
                </Link>
              </li>
              <li>
                <Link
                  href="/yash-ravana-costume-weight-ramayana"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg: Saniya Sardhariya Reveals Details
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
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Amyra Dastur",
            "Farah Khan",
            "Kung Fu Yoga",
            "Happy New Year",
            "Boman Irani",
            "Geeta Kapur",
            "Jackie Chan",
            "Chumbak",
            "Bollywood News",
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
