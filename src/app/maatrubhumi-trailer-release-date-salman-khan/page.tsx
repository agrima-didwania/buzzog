import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maatrubhumi Trailer Gets CBFC Nod: Release Date Update | Buzz Originals",
  description:
    "Salman Khan’s Maatrubhumi trailer is cleared by CBFC and may release on Nov 6. Check runtime, certificate and release date buzz.",
  keywords: [
    "Maatrubhumi trailer",
    "Maatrubhumi release date",
    "Salman Khan new movie",
    "Maatrubhumi CBFC",
    "Maatrubhumi trailer release date",
    "Salman Khan Maatrubhumi",
    "Battle of Galwan",
    "Maatrubhumi cast",
    "Maatrubhumi trailer runtime",
    "Salman Khan Chitrangda Singh",
    "when will Maatrubhumi trailer release",
    "Maatrubhumi trailer U/A 16+ certificate",
    "Maatrubhumi movie release date November 2026",
    "Maatrubhumi based on Galwan Valley clash",
    "Salman Khan upcoming war drama",
    "Colonel Santosh Babu Salman Khan",
    "Apoorva Lakhia Maatrubhumi",
  ],
  alternates: {
    canonical: "/maatrubhumi-trailer-release-date-salman-khan",
  },
  openGraph: {
    title: "Maatrubhumi Trailer Gets CBFC Nod: Release Date Update | Buzz Originals",
    description:
      "Salman Khan’s Maatrubhumi trailer is cleared by CBFC and may release on Nov 6. Check runtime, certificate and release date buzz.",
    url: "https://www.buzzoriginals.com/maatrubhumi-trailer-release-date-salman-khan",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/maatrubhumi-trailer-release-date-salman-khan.jpg",
        width: 1200,
        height: 675,
        alt: "Maatrubhumi Trailer Cleared by CBFC — Salman Khan Release Date Update",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maatrubhumi Trailer Gets CBFC Nod: Release Date Update",
    description:
      "Salman Khan’s Maatrubhumi trailer is cleared by CBFC and may release on Nov 6. Check runtime, certificate and release date buzz.",
    images: ["/images/maatrubhumi-trailer-release-date-salman-khan.jpg"],
  },
};

export default function MaatrubhumiTrailerPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Maatrubhumi Trailer Gets CBFC Nod: Release Date Update",
    description:
      "Salman Khan’s Maatrubhumi trailer is cleared by CBFC and may release on Nov 6. Check runtime, certificate and release date buzz.",
    image: [
      "https://www.buzzoriginals.com/images/maatrubhumi-trailer-release-date-salman-khan.jpg",
    ],
    datePublished: "2026-11-05T10:20:00Z",
    dateModified: "2026-11-05T10:20:00Z",
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
      "@id": "https://www.buzzoriginals.com/maatrubhumi-trailer-release-date-salman-khan",
    },
    keywords: [
      "Maatrubhumi trailer",
      "Maatrubhumi release date",
      "Salman Khan new movie",
      "Maatrubhumi CBFC",
      "Battle of Galwan",
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
        name: "Movies",
        item: "https://www.buzzoriginals.com/movies",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Maatrubhumi Trailer CBFC Clearance",
        item: "https://www.buzzoriginals.com/maatrubhumi-trailer-release-date-salman-khan",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink-0)] text-[var(--paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-[var(--mist)] mb-6 uppercase tracking-wider"
        >
          <Link href="/" className="hover:text-[var(--lime)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/bollywood"
            className="hover:text-[var(--lime)] transition-colors"
          >
            Bollywood
          </Link>
          <span>/</span>
          <Link
            href="/movies"
            className="hover:text-[var(--lime)] transition-colors"
          >
            Movies
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">Maatrubhumi Trailer</span>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ CBFC Cleared</span>
          <span className="badge pink">Trailer Update</span>
          <span className="badge">Salman Khan</span>
          <span className="badge">War Drama</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp font-black uppercase tracking-tight text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.15 }}
        >
          Maatrubhumi Trailer Gets CBFC Nod: Salman Khan Fans, Get Ready
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--mist)] border-y border-white/[0.08] py-3 mb-6">
          <span className="text-white font-medium">By Buzz Originals Entertainment Desk</span>
          <span className="dot-sep">◆</span>
          <time dateTime="2026-11-05">November 5, 2026</time>
          <span className="dot-sep">◆</span>
          <span>4 MIN READ</span>
          <span className="dot-sep">◆</span>
          <span className="text-[var(--lime)]">EXCLUSIVE VERDICT</span>
        </div>

        {/* Hero Cover Image */}
        <figure className="mb-8">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          >
            <Image
              src="/images/maatrubhumi-trailer-release-date-salman-khan.jpg"
              alt="Maatrubhumi Trailer Cleared by CBFC — Salman Khan Release Date Update"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <figcaption className="text-xs font-mono text-[var(--mist)] text-center mt-2">
            Salman Khan as Colonel B. Santosh Babu in Apoorva Lakhia’s Galwan Valley war drama Maatrubhumi. The official trailer has received a U/A 16+ certificate from CBFC. (Photo: Buzz Originals / Salman Khan Films)
          </figcaption>
        </figure>

        {/* Social Share Bar */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/[0.06] text-xs font-mono">
          <span className="text-[var(--mist)] uppercase tracking-wider">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Maatrubhumi%20Trailer%20Gets%20CBFC%20Nod%20https://www.buzzoriginals.com/maatrubhumi-trailer-release-date-salman-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Maatrubhumi%20Trailer%20Gets%20CBFC%20Nod%20Release%20Date%20Update&url=https://www.buzzoriginals.com/maatrubhumi-trailer-release-date-salman-khan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors"
          >
            X Post
          </a>
        </div>

        {/* Key Takeaways Box */}
        <div
          style={{
            background: "rgba(195, 255, 0, 0.05)",
            border: "1px solid var(--lime)",
            borderRadius: "12px",
            padding: "22px",
            margin: "28px 0 32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "13px",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            ⚡ Maatrubhumi Trailer Clearance: Fast Breakdown
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              fontSize: "15px",
              lineHeight: "1.7",
              color: "rgba(255, 255, 255, 0.9)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li>
              <strong>CBFC Certificate:</strong> The trailer has been officially certified <strong>U/A 16+</strong> by the Central Board of Film Certification on November 4, 2026.
            </li>
            <li>
              <strong>Massive Runtime:</strong> Clocking in at <strong>4 minutes and 43 seconds</strong>, it ranks among Bollywood’s longest theatrical trailers.
            </li>
            <li>
              <strong>Release Window:</strong> Industry insiders anticipate the digital trailer drop on Friday, November 6, 2026.
            </li>
            <li>
              <strong>Theatrical Release Date Buzz:</strong> While November 13 was initially targeted, the pending film sensor clearance shifts the prime release window to November 20 or December 11, 2026.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Salman Khan fans have waited a long time for this. The trailer of his highly anticipated war drama <strong>Maatrubhumi</strong> has officially been cleared by the Central Board of Film Certification (CBFC). With the certificate formally signed, the trailer is set to hit the internet as early as Friday, November 6.
          </p>

          <p>
            The project has had a long and meticulous road to the silver screen. Originally conceptualized under the working title <em>Battle of Galwan</em>, the film documents one of the Indian Armed Forces’ most courageous and intense confrontations in high-altitude warfare.
          </p>

          <h2>Maatrubhumi Trailer: Key Details &amp; Runtime</h2>
          <p>
            According to the official censor certificate listing on the CBFC portal, the promotional asset has been thoroughly reviewed and cleared for public exhibition. Here are the confirmed technical specifics:
          </p>

          <ul>
            <li>
              <strong>Certificate:</strong> The CBFC granted the trailer a <strong>U/A 16+</strong> certification, indicating intense combat sequences and war violence.
            </li>
            <li>
              <strong>Exact Runtime:</strong> The trailer spans a whopping <strong>4 minutes and 43 seconds</strong> (283 seconds).
            </li>
            <li>
              <strong>Clearance Date:</strong> Censor records confirm clearance was officially granted on Wednesday, November 4, 2026.
            </li>
            <li>
              <strong>Expected Launch:</strong> Multiple trade sources indicate a nationwide digital release on Friday, November 6. While Salman Khan Films has not yet pinned down the exact hour, fans are advised to keep notifications on.
            </li>
          </ul>

          <h2>One of Bollywood’s Longest Trailers</h2>
          <p>
            At nearly five minutes in duration, this is an unusually expansive trailer by modern Bollywood standards. In an era where two-and-a-half-minute promos dominate YouTube, the makers have opted for a grand, long-format showcase.
          </p>

          <p>
            For historical comparison, Rohit Shetty’s multi-starrer <em>Singham Again</em> ran for 4 minutes and 58 seconds, while Nitesh Tiwari’s recently released <em>Ramayana: Rise of a Legend</em> clocked its debut trailer at 4 minutes and 15 seconds. The extended duration signals that Apoorva Lakhia and Salman Khan want to establish the emotional core and historical gravity of the Galwan valley before diving into visceral action.
          </p>

          <h2>Maatrubhumi Release Date: Still Not Confirmed</h2>
          <p>
            Here is the critical catch for moviegoers eagerly mapping their cinema calendars. While the promotional trailer has sailed through censor scrutiny, the feature-length film itself has not yet received its final CBFC censor certificate.
          </p>

          <p>
            Without the primary censor certificate in hand, exhibitors cannot open advance bookings, nor can distributors lock physical theatrical prints across multiplex and single-screen chains.
          </p>

          <blockquote>
            “The trailer is cleared and ready for rollout. However, because the feature film involves delicate military portrayals, the final censor screening requires thorough clearances. As a result, the earlier planned November 13 date is virtually out of reach. The production team is weighing November 20 or December 11 as the most viable theatrical windows.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Trade Source to Bollywood Hungama
            </footer>
          </blockquote>

          <p>
            Until Salman Khan Films or distribution partner Jio Studios issues an official poster stamping the theatrical release date, these target windows should be viewed as informed trade tracking rather than finalized bookings.
          </p>

          <h2>What Is Maatrubhumi About?</h2>
          <p>
            <em>Maatrubhumi</em> dramatizes the fierce June 2020 clash between Indian Army personnel and Chinese People’s Liberation Army (PLA) troops in Eastern Ladakh’s Galwan Valley. The violent hand-to-hand skirmish took place in freezing sub-zero temperatures along the Line of Actual Control (LAC).
          </p>

          <p>
            Salman Khan portrays the real-life war hero <strong>Colonel B. Santosh Babu</strong>, the Commanding Officer of the 16 Bihar Regiment who led his men with exceptional gallantry and was posthumously conferred the Maha Vir Chakra, India’s second-highest military decoration.
          </p>

          <p>
            Acclaimed actress <strong>Chitrangda Singh</strong> stars opposite Khan as Colonel Babu’s wife, bringing an emotional anchor to the sacrifices made on the home front while soldiers defend the remote frontier.
          </p>

          <h2>Why Has the War Drama Faced Delays?</h2>
          <p>
            The film was originally scheduled for a grand Eid holiday release on April 17, 2026. However, adapting a modern, real-life geopolitical encounter required stringent clearances from the Ministry of Defence (MoD) and external affairs bodies before reaching the CBFC.
          </p>

          <p>
            Reports confirm that the government and armed forces review committees have now granted formal approvals, paving the way for the censor board to conclude its final certification without diplomatic or national security friction.
          </p>

          <h2>Fast Facts: Everything About Maatrubhumi</h2>
          <div
            style={{
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              padding: "20px",
              margin: "24px 0",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "15px",
              }}
            >
              <li>
                <strong>Title:</strong> Maatrubhumi (formerly <em>Battle of Galwan</em>)
              </li>
              <li>
                <strong>Director:</strong> Apoorva Lakhia (<em>Shootout at Lokhandwala</em>, <em>Ek Hasina Thi</em>)
              </li>
              <li>
                <strong>Lead Cast:</strong> Salman Khan, Chitrangda Singh, Sharad Kelkar, Abhimanyu Singh
              </li>
              <li>
                <strong>Production Banner:</strong> Salman Khan Films (SKF)
              </li>
              <li>
                <strong>Theatrical Distributor:</strong> Jio Studios
              </li>
              <li>
                <strong>Trailer Runtime:</strong> 4 minutes, 43 seconds (CBFC Rating: U/A 16+)
              </li>
              <li>
                <strong>Target Release Window:</strong> Late November / December 2026
              </li>
            </ul>
          </div>

          <h2>Salman Khan’s Busy Slate</h2>
          <p>
            Even as anticipation for <em>Maatrubhumi</em> reaches fever pitch, Salman Khan has kept the pop culture circuit buzzing on multiple fronts:
          </p>

          <ul>
            <li>
              <strong>Music Comeback:</strong> Just 24 hours ago, Salman dropped the surprise single <em>Teri Sexy Beauty</em> at 5 AM on social media. Marking his return behind the microphone after 11 years (his previous vocal credit being 2015’s <em>Main Hoon Hero Tera</em>), the track also features his <em>Maatrubhumi</em> co-star Chitrangda Singh.
            </li>
            <li>
              <strong>Reality Television:</strong> Salman continues his weekend duties anchoring <strong>Bigg Boss 20</strong>, delivering blockbuster TRP ratings week after week.
            </li>
            <li>
              <strong>Upcoming Features:</strong> He is slated to headline the high-octane actioner tentatively titled <em>SVC63</em> alongside lady superstar Nayanthara, helmed by National Award-winning director Vamshi Paidipally.
            </li>
          </ul>

          <h2>What to Expect Next</h2>
          <p>
            If the current trade projections hold, movie buffs won’t have to wait long. The 4-minute-and-43-second trailer should debut online within the next 24 to 48 hours. Once the trailer is unleashed, all eyes will turn to the CBFC certificate hearing for the main feature and the formal announcement of the locked theatrical release date.
          </p>

          <p>
            Stay locked to <strong>Buzz OG</strong> for lightning-fast trailer breakdowns, box office tracking, and verified Bollywood updates.
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
              Related Bollywood &amp; Cinema Coverage
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
                  href="/salman-khan-teri-sexy-beauty-maatrubhumi-song"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Teri Sexy Beauty Song: Salman Khan Sings After 11 Years from Maatrubhumi
                </Link>
              </li>
              <li>
                <Link
                  href="/sai-pallavi-sita-fight-scene-ramayana-controversy"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sai Pallavi’s Sita Fight Scene in Ramayana Divides the Internet
                </Link>
              </li>
              <li>
                <Link
                  href="/munna-bhai-3-farhad-samji-writing-script"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Munna Bhai 3: Farhad Samji Begins Writing the Script for Rajkumar Hirani
                </Link>
              </li>
              <li>
                <Link
                  href="/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Karan Johar Calls Ramayana Part 1 a “Miracle” and Praises Ranbir Kapoor’s Lord Ram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Maatrubhumi",
            "Salman Khan",
            "Chitrangda Singh",
            "CBFC",
            "Battle of Galwan",
            "Bollywood News",
            "Movie Trailers",
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
