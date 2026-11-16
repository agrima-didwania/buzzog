import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diljit Dosanjh Indore Concert: Song Ban, Couplet & Threats | Buzz Originals",
  description:
    "Diljit Dosanjh performed in Indore despite a 4-song ban and hoax bomb threats. Read what he said and the Rahat Indori couplet he recited.",
  keywords: [
    "Diljit Dosanjh Indore concert",
    "Diljit Dosanjh Aura India Tour 2026",
    "Diljit Dosanjh Rahat Indori couplet",
    "Kisi ke baap ka Hindustan thodi hai",
    "Diljit Dosanjh banned songs Indore",
    "Diljit Dosanjh bomb threat Indore",
    "Which songs are banned at Diljit’s Indore concert",
    "Who wrote Kisi ke baap ka Hindustan thodi hai",
    "Diljit Dosanjh Ahmedabad concert date",
    "Diljit Dosanjh Aura India Tour dates and cities",
    "Patiala Peg ban",
    "5 Taara Diljit Indore",
    "Bollywood news",
    "Punjabi music",
  ],
  alternates: {
    canonical: "/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai",
  },
  openGraph: {
    title: "Diljit Dosanjh Indore Concert: Song Ban, Couplet & Threats | Buzz Originals",
    description:
      "Diljit Dosanjh performed in Indore despite a 4-song ban and hoax bomb threats. Read what he said and the Rahat Indori couplet he recited.",
    url: "https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai.jpg",
        width: 1200,
        height: 675,
        alt: "Diljit Dosanjh Indore Concert Song Ban and Couplet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diljit Dosanjh Indore Concert: Song Ban, Couplet & Threats",
    description:
      "Diljit Dosanjh performed in Indore despite a 4-song ban and hoax bomb threats. Read what he said and the Rahat Indori couplet he recited.",
    images: ["/images/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai.jpg"],
  },
};

export default function DiljitIndoreConcertPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Diljit Dosanjh Recites “Kisi Ke Baap Ka Hindustan Thodi Hai” at Indore Concert After Song Ban and Bomb Threats",
    description:
      "Diljit Dosanjh performed in Indore despite a 4-song ban and hoax bomb threats. Read what he said and the Rahat Indori couplet he recited.",
    image: [
      "https://www.buzzoriginals.com/images/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai.jpg",
    ],
    datePublished: "2026-11-16T06:10:00Z",
    dateModified: "2026-11-16T06:10:00Z",
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
      "@id": "https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai",
    },
    keywords: [
      "Diljit Dosanjh Indore concert",
      "Diljit Dosanjh Aura India Tour 2026",
      "Diljit Dosanjh Rahat Indori couplet",
      "Kisi ke baap ka Hindustan thodi hai",
      "Diljit Dosanjh banned songs Indore",
      "Diljit Dosanjh bomb threat Indore",
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
        name: "Diljit Dosanjh Indore Concert",
        item: "https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai",
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
          <span className="text-[var(--lime)]">Diljit Indore Concert</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ LIVE UPDATE</span>
          <span className="badge pink">Aura Tour 2026</span>
          <span className="badge">Indore Concert</span>
          <span className="badge">Rahat Indori</span>
          <span className="badge">Song Ban Controversy</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Diljit Dosanjh Recites “Kisi Ke Baap Ka Hindustan Thodi Hai” at Indore Concert After Song Ban and Bomb Threats
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>4 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">LIVE CONCERT SCOOP</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai.jpg"
            alt="Diljit Dosanjh Recites Kisi Ke Baap Ka Hindustan Thodi Hai at Indore Concert"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Diljit Dosanjh addressed thousands in Indore on Sunday, November 15, reciting Rahat Indori’s iconic lines in defiance of last-minute bans and security hoaxes. (Photo: Buzz Originals / Live Concert)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Diljit%20Dosanjh%20Indore%20Concert:%20Song%20Ban,%20Couplet%20%26%20Threats%20-%20https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Diljit%20Dosanjh%20Indore%20Concert:%20Song%20Ban,%20Couplet%20%26%20Threats&url=https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai"
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
            <span>Diljit Dosanjh Indore Concert: Key Takeaways</span>
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
              <strong>Unstoppable Show:</strong> Diljit Dosanjh delivered a high-octane performance in Indore on Sunday, November 15, for his Aura India Tour 2026, refusing to back down in the face of bureaucratic hurdles and threats.
            </li>
            <li>
              <strong>Poetic Thunder:</strong> Diljit recited Indore’s own legendary poet Rahat Indori’s immortal couplet: <em>“Sabhi ka khoon hai shamil yahan ki mitti men, kisi ke baap ka hindustan thodi hai!”</em>
            </li>
            <li>
              <strong>4-Song Ban:</strong> Child Protection authorities issued a notice to drop four chart-toppers—<em>Patiala Peg</em>, <em>5 Taara</em>, <em>Jeeb Vicho Afeem (Case)</em>, and <em>Jatt Uthe Fire Karda</em>—citing youth influence.
            </li>
            <li>
              <strong>Hoax Bomb Threats:</strong> Bluff bomb threats targeted Indore institutions hours before the gig; police swept the locations, declared them false, and issued show clearances right before gates opened.
            </li>
            <li>
              <strong>Next Up Ahmedabad:</strong> The tour heads to Ahmedabad’s Narendra Modi Stadium on November 21, where similar song restrictions have reportedly been proposed.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Diljit Dosanjh’s Indore concert was not just a night of music—it turned into an electrifying cultural statement. On Sunday, November 15, the global Punjabi superstar took the stage in Indore for the second stop of his massive <strong>Aura India Tour 2026</strong>, following his blockbuster opening in Delhi.
          </p>

          <p>
            The lead-up to the performance was fraught with dramatic tension, marked by an eleventh-hour four-song setlist ban, hoax bomb threats sent to civic authorities, and nerve-wracking permission delays. But when the spotlight hit, Diljit silenced detractors by invoking the iconic poetry of Indore’s own literary giant, Rahat Indori.
          </p>

          <h2>What Did Diljit Say on Stage in Indore?</h2>
          <p>
            Diljit kicked off the show by invoking the spiritual patron of the region, asking the tens of thousands in attendance to chant <em>“Jai Shri Mahakal”</em>. Acknowledging the swirl of controversy and opposition that attempted to derail the event, he made it abundantly clear that he was never going to disappoint his followers.
          </p>

          <blockquote>
            “People of Indore, this is the land of Mahakal, and nobody can stop us from coming here. We weren’t afraid earlier and aren’t afraid today. And where is the question of you being afraid? It is your strength that has brought us here today.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Diljit Dosanjh to the Indore crowd
            </footer>
          </blockquote>

          <p>
            Reiterating his dedication to his craft and his audience, Diljit added:
          </p>

          <blockquote>
            “Although many attempts were made to stop me from coming here, I still came. Once I tell someone that I will come, I never back out. Despite all the restrictions, I am standing here.”
          </blockquote>

          <h2>The Couplet That Won the Night</h2>
          <p>
            The crowning moment of the night arrived when Diljit commanded the mic with impassioned intensity to recite words written by Indore’s celebrated late poet, Rahat Indori:
          </p>

          <div
            style={{
              padding: "20px 24px",
              background: "rgba(255, 45, 85, 0.08)",
              borderLeft: "4px solid var(--pink)",
              borderRadius: "0 12px 12px 0",
              margin: "24px 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "24px",
                lineHeight: "1.4",
                color: "#ffffff",
                letterSpacing: "0.5px",
                marginBottom: "8px",
              }}
            >
              “Sabhi ka khoon hai shamil yahan ki mitti men, kisi ke baap ka hindustan thodi hai!”
            </p>
            <p style={{ fontSize: "14px", color: "var(--mist)", fontStyle: "italic", margin: 0 }}>
              (Translation: Everyone’s blood is mingled in this soil; India is not the personal property of anyone’s father!)
            </p>
          </div>

          <p>
            He also recited the poignant line <em>“Agar khilaf hain hone do, jaan thodi hai”</em> (If they oppose, let them; it is not a matter of life and death) from the same ghazal. According to <em>The Hindu</em>, Diljit delivered the lines with biting conviction, aiming a sharp rebuke at those lobbying to censor and cancel his show.
          </p>

          <h2>Why Was This Concert Controversial? 3 Major Flashpoints</h2>
          <p>
            The tension surrounding Sunday’s show in Indore stemmed from three distinct challenges that emerged in the week preceding the event:
          </p>

          <h3>1. Four Signature Tracks Banned</h3>
          <p>
            On November 6, the District Child Protection Officer issued a formal notice instructing concert organizers to exclude four of Diljit’s biggest commercial hits from the setlist:
          </p>
          <ul>
            <li><strong>Patiala Peg</strong></li>
            <li><strong>5 Taara</strong></li>
            <li><strong>Jeeb Vicho Afeem</strong> (also known as <em>Case</em>)</li>
            <li><strong>Jatt Uthe Fire Karda</strong></li>
          </ul>
          <p>
            The authority cited child welfare concerns, arguing that because entry was permitted for minors aged five and above, tracks referencing alcohol, narcotics, and firearms could adversely impact young listeners. While the order did not halt the concert, it placed legal shackles on the musical lineup.
          </p>

          <h3>2. The Complaint and Legal Precedents</h3>
          <p>
            The regulatory action was triggered by a petition submitted on November 1 by Chandigarh-based professor Panditrao Dharenavar. The notice cited a 2019 directive from the Punjab and Haryana High Court regulating songs that glorify substance abuse, alcohol consumption, and violence.
          </p>

          <h3>3. Hoax Bomb Threat Emails</h3>
          <p>
            Adding to the pre-show anxiety, anonymous emails threatening coordinated bomb blasts were sent to the Indore Mayor’s office, three commercial banks, and three prominent private schools. Local police and bomb disposal squads mobilized immediately, conducting thorough sweeps before confirming the communications were hoax threats.
          </p>

          <p>
            Because of these security protocols, final police authorization for the concert was signed and delivered merely hours before the stadium gates opened to the public.
          </p>

          <h2>Diljit Had Already Promised He Would Come</h2>
          <p>
            Despite rampant online speculation that the Indore gig would be scrapped, Diljit had personally put all doubts to rest days earlier. As reported by <em>Outlook India</em>, the singer stated that he was <em>“101%”</em> making the journey to Indore.
          </p>

          <p>
            According to <em>India TV</em>, the singer braved an exhausting 34-hour travel route across continents and domestic transit to reach Indore on schedule, even while administrative discussions regarding permissions were hanging by a thread.
          </p>

          <h2>A Poetic Tradition in Indore: Echoes of 2024</h2>
          <p>
            Long-time Diljit followers noted that this was not the first time the singer used Rahat Indori’s timeless verse in the city. On December 8, 2024, during his previous <em>Dil-Luminati Tour</em> show at Indore’s C21 Estate grounds, Diljit had similarly dedicated his stage to the revered poet after facing localized protests.
          </p>

          <p>
            Fans immediately celebrated the parallel, with clips of both the 2024 and 2026 recitations surging across Instagram Reels and X (formerly Twitter).
          </p>

          <h2>Next Stop: Ahmedabad and Narendra Modi Stadium</h2>
          <p>
            The administrative scrutiny around Diljit’s setlist may follow him to his next destination. Reports suggest authorities in Gujarat have also requested that four tracks with alcohol references be skipped during his upcoming show on November 21 at the colossal Narendra Modi Stadium in Ahmedabad.
          </p>

          <h3>Aura India Tour 2026: Confirmed Schedule</h3>
          <div
            style={{
              padding: "20px",
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              margin: "24px 0",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontFamily: "var(--font-space-mono)", fontSize: "14px" }}>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Ahmedabad (Narendra Modi Stadium)</span>
                <span className="text-[var(--lime)]">November 21, 2026</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Mumbai</span>
                <span className="text-[var(--lime)]">November 27, 2026</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Bengaluru</span>
                <span className="text-[var(--lime)]">November 29, 2026</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Lucknow</span>
                <span className="text-[var(--lime)]">December 5, 2026</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Chandigarh</span>
                <span className="text-[var(--pink)]">December 12, 2026</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="text-white font-bold">Kolkata</span>
                <span className="text-[var(--pink)]">December 19, 2026</span>
              </li>
            </ul>
          </div>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for continuous live coverage, concert reviews, and breaking entertainment developments from Diljit Dosanjh’s <em>Aura India Tour 2026</em>.
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
              Related Bollywood &amp; Music Scoops
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
                  href="/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Diljit Dosanjh Aura India Tour: Chandigarh and Kolkata Dates Announced
                </Link>
              </li>
              <li>
                <Link
                  href="/soni-razdan-100-cigarettes-gumrah-alia-bhatt"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Soni Razdan Smoked 100 Cigarettes in a Day on Gumrah Set Pregnant With Alia
                </Link>
              </li>
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
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Diljit Dosanjh",
            "Aura India Tour",
            "Indore Concert",
            "Rahat Indori",
            "Patiala Peg",
            "5 Taara",
            "Bollywood News",
            "Concert News",
            "Narendra Modi Stadium",
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
