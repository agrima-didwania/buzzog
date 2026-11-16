import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Panchayat Season 5 Not Releasing in 2026: Prime Video | Buzz Originals",
  description:
    "Prime Video says Panchayat Season 5 will not release in 2026. Here is what the post said, what happened in Season 4, and what we know so far.",
  keywords: [
    "Panchayat Season 5",
    "Panchayat Season 5 release date",
    "Panchayat Season 5 delay",
    "Panchayat 5 not releasing in 2026",
    "Panchayat Season 5 Prime Video",
    "Panchayat Season 5 update",
    "When will Panchayat Season 5 release",
    "Is Panchayat Season 5 cancelled",
    "Panchayat Season 5 kab aayega",
    "Panchayat Season 5 iss saal nahi aayega",
    "Panchayat Season 5 cast",
    "Panchayat Season 5 story",
    "Who is the new Pradhan in Panchayat",
    "Jitendra Kumar Panchayat 5",
    "Banrakas Phulera",
    "Web series news",
  ],
  alternates: {
    canonical: "/panchayat-season-5-not-releasing-2026",
  },
  openGraph: {
    title: "Panchayat Season 5 Not Releasing in 2026: Prime Video | Buzz Originals",
    description:
      "Prime Video says Panchayat Season 5 will not release in 2026. Here is what the post said, what happened in Season 4, and what we know so far.",
    url: "https://www.buzzoriginals.com/panchayat-season-5-not-releasing-2026",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/panchayat-season-5-not-releasing-2026.jpg",
        width: 1200,
        height: 675,
        alt: "Panchayat Season 5 Not Releasing in 2026 Prime Video",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panchayat Season 5 Not Releasing in 2026: Prime Video",
    description:
      "Prime Video says Panchayat Season 5 will not release in 2026. Here is what the post said, what happened in Season 4, and what we know so far.",
    images: ["/images/panchayat-season-5-not-releasing-2026.jpg"],
  },
};

export default function PanchayatSeason5Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Panchayat Season 5 Will Not Release in 2026, Says Prime Video",
    description:
      "Prime Video says Panchayat Season 5 will not release in 2026. Here is what the post said, what happened in Season 4, and what we know so far.",
    image: [
      "https://www.buzzoriginals.com/images/panchayat-season-5-not-releasing-2026.jpg",
    ],
    datePublished: "2026-11-16T07:10:00Z",
    dateModified: "2026-11-16T07:10:00Z",
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
      "@id": "https://www.buzzoriginals.com/panchayat-season-5-not-releasing-2026",
    },
    keywords: [
      "Panchayat Season 5",
      "Panchayat Season 5 release date",
      "Panchayat Season 5 delay",
      "Panchayat 5 not releasing in 2026",
      "Panchayat Season 5 Prime Video",
      "Panchayat Season 5 update",
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
        name: "Panchayat Season 5 Not Releasing in 2026",
        item: "https://www.buzzoriginals.com/panchayat-season-5-not-releasing-2026",
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
          <span className="text-[var(--lime)]">Panchayat Season 5 Delay</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ STREAMING UPDATE</span>
          <span className="badge pink">Panchayat 5</span>
          <span className="badge">Prime Video</span>
          <span className="badge">Phulera News</span>
          <span className="badge">Banrakas</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Panchayat Season 5 Will Not Release in 2026, Says Prime Video
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">WEB SERIES SCOOP</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/panchayat-season-5-not-releasing-2026.jpg"
            alt="Panchayat Season 5 Will Not Release in 2026, Says Prime Video"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Prime Video India confirmed that Panchayat Season 5 will not premiere in 2026, asking fans to wait a little longer before their next visit to Phulera. (Photo: Buzz Originals / Prime Video)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Panchayat%20Season%205%20Not%20Releasing%20in%202026:%20Prime%20Video%20-%20https://www.buzzoriginals.com/panchayat-season-5-not-releasing-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Panchayat%20Season%205%20Not%20Releasing%20in%202026:%20Prime%20Video&url=https://www.buzzoriginals.com/panchayat-season-5-not-releasing-2026"
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
            <span>Panchayat Season 5: Key Takeaways</span>
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
              <strong>No 2026 Release:</strong> Amazon Prime Video officially confirmed that <em>Panchayat Season 5</em> will not be released this calendar year, ruling out speculative late-2026 drops.
            </li>
            <li>
              <strong>Witty Instagram Update:</strong> The streaming giant shared a viral graphic reading <em>“Panchayat Season 5 Iss Saal Nahi Aayega”</em> with the caption: <em>“Batate hue khed hai, Panchayat ka agla season qaid hai.”</em>
            </li>
            <li>
              <strong>Not Cancelled:</strong> The beloved rural comedy-drama is already deep in production; filming commenced on April 3, 2026, marking the show’s 6th anniversary.
            </li>
            <li>
              <strong>Season 4 Cliffhanger:</strong> The story picks up after the dramatic panchayat elections where Pradhan Ji (Raghubir Yadav) lost power to Kranti Devi (Sunita Rajwar), putting Banrakas (Durgesh Kumar) at the helm.
            </li>
            <li>
              <strong>What Lies Ahead:</strong> Abhishek Tripathi (Jitendra Kumar) will have to navigate official duties under the antagonistic new regime while juggling his MBA ambitions.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Bad news for <em>Panchayat</em> enthusiasts across India. The eagerly anticipated return to the beloved fictional village of Phulera will have to wait. In a witty but heartbreaking social media disclosure, streaming platform <strong>Amazon Prime Video</strong> confirmed that <strong>Panchayat Season 5</strong> will not be releasing in 2026.
          </p>

          <p>
            On Sunday, November 15, Prime Video India took to Instagram to share an official teaser post that quickly caught the attention of millions of fans. The visual carried bold lettering in the series’ signature yellow wall-paint aesthetic, declaring unequivocally: <em>“Panchayat Season 5 iss saal nahin aayega.”</em>
          </p>

          {/* Prime Video Instagram Update Graphic */}
          <div className="my-8 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-black/40 p-4 sm:p-6 text-center">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] max-w-md mx-auto rounded-xl overflow-hidden mb-3">
              <Image
                src="/images/panchayat-season-5-prime-video-post.jpg"
                alt="Prime Video Instagram Post on Panchayat Season 5 Delay"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 450px"
              />
            </div>
            <p className="font-mono text-xs text-[var(--mist)] italic">
              Prime Video shared on Instagram: “Batate hue khed hai, Panchayat ka agla season qaid hai 👀”
            </p>
          </div>

          <p>
            Accompanying the post was the caption: <em>“Batate hue khed hai, Panchayat ka agla season qaid hai 👀”</em> (We regret to inform you that Panchayat’s next season is imprisoned). It is a humorous, tongue-in-cheek nod to the show’s rural politics, but the message is crystal clear: fans must brace for a longer hiatus.
          </p>

          <h2>What Does This Mean for Season 5?</h2>
          <p>
            Simply put, viewers will not get to watch <em>Panchayat Season 5</em> during the 2026 calendar year. Prime Video has refrained from providing a finalized release date or window, and has not cited specific reasons behind the extended timeline.
          </p>

          <p>
            Crucially, however, the show is <strong>not cancelled</strong>. Season 5 was officially announced at Prime Video’s marquee 2026 slate showcase in Mumbai back in March. Principal photography kicked off on April 3, 2026—deliberately timed to celebrate the 6th anniversary of the franchise’s premiere in 2020.
          </p>

          <p>
            With extensive location shoots in Mahodiya village (Sehore, Madhya Pradesh) and meticulous post-production routines typical of creators The Viral Fever (TVF), the series is simply taking its time to deliver top-tier writing and performance standards.
          </p>

          <h2>A Quick Recap of Season 4: The Phulera Revolution</h2>
          <p>
            <em>Panchayat Season 4</em> premiered worldwide on Prime Video on June 24, 2025, and culminated in seismic political upheaval across the panchayat:
          </p>
          <ul>
            <li>
              <strong>The Fall of Pradhan Ji:</strong> Long-standing village head Brij Bhushan Dubey (Raghubir Yadav) and his wife Manju Devi (Neena Gupta) were defeated in the fierce local panchayat elections.
            </li>
            <li>
              <strong>Kranti Devi’s Triumph:</strong> Rival Kranti Devi (Sunita Rajwar) emerged victorious as the newly elected Gram Pradhan.
            </li>
            <li>
              <strong>Banrakas in Charge:</strong> Standing closely behind her victory is her scheming husband Bhushan Sharma, famously known across the internet as <strong>Banrakas</strong> (Durgesh Kumar). Netizens widely believe Banrakas now holds the de facto reins of village power.
            </li>
          </ul>

          <p>
            That context explains why Prime Video playfully stated that the next season is <em>“qaid”</em> (imprisoned). With Banrakas now running the show in Phulera, it feels like the new administration has metaphorically locked up the upcoming season!
          </p>

          <h2>What to Expect in Panchayat Season 5</h2>
          <p>
            Based on early script reports and creator interviews, Season 5 will pick up immediately in the aftermath of the election shake-up:
          </p>

          <div
            style={{
              padding: "20px",
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              margin: "24px 0",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <li>
                <strong className="text-[var(--lime)]">✦ Abhishek’s Bureaucratic Nightmare:</strong> Panchayat Secretary Abhishek Tripathi (Jitendra Kumar) will now have to report to a hostile, unpredictable leadership, testing his diplomacy and patience like never before.
              </li>
              <li>
                <strong className="text-[var(--lime)]">✦ The MBA Ambition:</strong> Abhishek continues to prepare for the CAT and higher studies, but unresolved emotional bonds—especially his evolving equation with Rinki (Sanvikaa)—and village commitments keep pulling him back.
              </li>
              <li>
                <strong className="text-[var(--lime)]">✦ Pradhan Ji’s Existential Crisis:</strong> Stripped of his ceremonial chair, Brij Bhushan must confront life without authority, navigating the emotional fallout of defeat with Prahlad Pandey (Faisal Malik) and Vikas (Chandan Roy) by his side.
              </li>
            </ul>
          </div>

          <h2>Who Is Behind the Magic of Panchayat?</h2>
          <p>
            Produced by <strong>The Viral Fever (TVF)</strong>, <em>Panchayat</em> is directed by Deepak Kumar Mishra and written by the sharp-witted Chandan Kumar. The stellar ensemble cast brings together some of the finest character actors in Indian cinema:
          </p>
          <ul>
            <li><strong>Jitendra Kumar</strong> as Abhishek Tripathi (Sachiv Ji)</li>
            <li><strong>Raghubir Yadav</strong> as Brij Bhushan Dubey (Pradhan Ji)</li>
            <li><strong>Neena Gupta</strong> as Manju Devi</li>
            <li><strong>Faisal Malik</strong> as Prahladcha (Prahlad Pandey)</li>
            <li><strong>Chandan Roy</strong> as Vikas</li>
            <li><strong>Sanvikaa</strong> as Rinki</li>
            <li><strong>Durgesh Kumar</strong> as Bhushan (Banrakas)</li>
            <li><strong>Ashok Pathak</strong> as Vinod</li>
            <li><strong>Sunita Rajwar</strong> as Kranti Devi</li>
          </ul>

          <h2>Where to Watch Panchayat Right Now</h2>
          <p>
            All four seasons of <em>Panchayat</em> are currently streaming on <strong>Amazon Prime Video</strong> in Hindi with multiple regional language dubs and subtitles. While the wait for Season 5 stretches into 2027, there has never been a better time to revisit Phulera’s heartwarming humor and grounded countryside tales.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for verified premiere announcements, official teasers, and exclusive cast interviews as <em>Panchayat Season 5</em> nears completion.
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
              Related Web Series &amp; OTT Scoops
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
                  href="/the-royals-season-2-goes-on-floors"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → The Royals Season 2 Goes on Floors: Ishaan Khatter and Zeenat Aman Return
                </Link>
              </li>
              <li>
                <Link
                  href="/maharani-season-5-release-date-january-2027"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Maharani Season 5 Release Date: Huma Qureshi’s Political Drama Eyes Jan 2027
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
            "Panchayat Season 5",
            "Panchayat 5 Delay",
            "Prime Video",
            "Banrakas",
            "Phulera",
            "Jitendra Kumar",
            "TVF",
            "Web Series News",
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
