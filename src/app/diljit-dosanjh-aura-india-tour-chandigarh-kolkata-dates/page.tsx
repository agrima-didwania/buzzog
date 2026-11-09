import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diljit Dosanjh Aura India Tour: Chandigarh and Kolkata Dates | Buzz Originals",
  description:
    "Diljit Dosanjh's Aura India Tour now includes Chandigarh on December 12 and Kolkata on December 19. See the full 2026 schedule, venues and ticket sale dates.",
  keywords: [
    "Diljit Dosanjh Aura India Tour",
    "Diljit Dosanjh concert Kolkata",
    "Diljit Dosanjh Chandigarh concert date",
    "Aura India Tour 2026 schedule",
    "Diljit Dosanjh ticket booking",
    "Diljit Dosanjh",
    "New PCA Stadium Mullanpur Chandigarh",
    "Salt Lake Stadium Kolkata Diljit concert",
    "Diljit Dosanjh Indore concert controversy",
    "BookMyShow Live Diljit tour",
    "Bollywood music news",
  ],
  alternates: {
    canonical: "/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates",
  },
  openGraph: {
    title: "Diljit Dosanjh Aura India Tour: Chandigarh and Kolkata Dates | Buzz Originals",
    description:
      "Diljit Dosanjh's Aura India Tour now includes Chandigarh on December 12 and Kolkata on December 19. See the full 2026 schedule, venues and ticket sale dates.",
    url: "https://www.buzzoriginals.com/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates.jpg",
        width: 1200,
        height: 675,
        alt: "Diljit Dosanjh Adds Chandigarh and Kolkata Shows to Aura India Tour 2026",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diljit Dosanjh Aura India Tour: Chandigarh and Kolkata Dates",
    description:
      "Diljit Dosanjh's Aura India Tour now includes Chandigarh on December 12 and Kolkata on December 19. See the full 2026 schedule, venues and ticket sale dates.",
    images: ["/images/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates.jpg"],
  },
};

export default function DiljitAuraTourChandigarhKolkataPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Diljit Dosanjh Aura India Tour: Chandigarh and Kolkata Dates",
    description:
      "Diljit Dosanjh's Aura India Tour now includes Chandigarh on December 12 and Kolkata on December 19. See the full 2026 schedule, venues and ticket sale dates.",
    image: [
      "https://www.buzzoriginals.com/images/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates.jpg",
    ],
    datePublished: "2026-11-09T18:15:00Z",
    dateModified: "2026-11-09T18:15:00Z",
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
      "@id": "https://www.buzzoriginals.com/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates",
    },
    keywords: [
      "Diljit Dosanjh Aura India Tour",
      "Diljit Dosanjh concert Kolkata",
      "Diljit Dosanjh Chandigarh concert date",
      "Aura India Tour 2026 schedule",
      "Diljit Dosanjh ticket booking",
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
        name: "Diljit Dosanjh Aura Tour Dates",
        item: "https://www.buzzoriginals.com/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates",
      },
    ],
  };

  const tourSchedule = [
    { date: "October 30", city: "Delhi-NCR", venue: "Jawaharlal Nehru Stadium", status: "Completed" },
    { date: "November 15", city: "Indore", venue: "C21 Estate", status: "Upcoming" },
    { date: "November 21", city: "Ahmedabad", venue: "Narendra Modi Stadium", status: "Upcoming" },
    { date: "November 27", city: "Mumbai", venue: "Mahalaxmi Race Course", status: "Upcoming" },
    { date: "November 29", city: "Bengaluru", venue: "NICE Grounds", status: "Upcoming" },
    { date: "December 5", city: "Lucknow", venue: "19th National Jamboree Ground", status: "Upcoming" },
    { date: "December 12", city: "Chandigarh", venue: "New PCA Stadium, Mullanpur", status: "New Added" },
    { date: "December 19", city: "Kolkata", venue: "Vivekananda Yuba Bharati Krirangan (Salt Lake Stadium)", status: "New Added" },
  ];

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
          <span className="text-[var(--lime)]">Diljit Dosanjh Aura India Tour</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Tour Exclusive</span>
          <span className="badge pink">Concert Update</span>
          <span className="badge">Aura Tour 2026</span>
          <span className="badge">Chandigarh &amp; Kolkata</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Diljit Dosanjh Adds Chandigarh and Kolkata Shows to Aura India Tour 2026
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-09">November 9, 2026</time>
          <span>◆</span>
          <span>4 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">CONCERT TOUR</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates.jpg"
            alt="Diljit Dosanjh Adds Chandigarh and Kolkata Shows to Aura India Tour 2026"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Diljit Dosanjh extends his blockbuster Aura India Tour 2026, officially locking dates for Chandigarh (Dec 12) and Kolkata (Dec 19). (Photo: Buzz Originals / BookMyShow Live)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Diljit%20Dosanjh%20Aura%20India%20Tour:%20Chandigarh%20and%20Kolkata%20Dates%20-%20https://www.buzzoriginals.com/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Diljit%20Dosanjh%20Aura%20India%20Tour%20Chandigarh%20and%20Kolkata%20Dates&url=https://www.buzzoriginals.com/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates"
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
            <span>Aura India Tour 2026: Fast Facts &amp; Important Dates</span>
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
              <strong>Chandigarh Date:</strong> December 12, 2026, at the New PCA Stadium in Mullanpur.
            </li>
            <li>
              <strong>Kolkata Date:</strong> December 19, 2026, at the Vivekananda Yuba Bharati Krirangan (Salt Lake Stadium).
            </li>
            <li>
              <strong>Ticket Pre-Sale:</strong> Sunday, November 10, 2026, starting at 12:00 PM (Noon) exclusively on BookMyShow.
            </li>
            <li>
              <strong>General Ticket Sale:</strong> Tuesday, November 12, 2026, starting at 3:00 PM.
            </li>
            <li>
              <strong>Tour Extension:</strong> The tour will now run until late December across 8 major Indian cities before heading to Abu Dhabi for New Year&apos;s Eve.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Diljit Dosanjh fans in Chandigarh and Kolkata, your wait is officially over. The global Punjabi superstar has shared the long-awaited confirmed dates and stadium venues for his record-smashing Aura India Tour in both cities. Chandigarh will host him on <strong>December 12</strong>, and Kolkata will witness the spectacle on <strong>December 19</strong>.
          </p>

          <p>
            This major announcement also means the tour will run considerably longer than initially anticipated. Earlier, Lucknow on December 5 was slated as the final stop of the nationwide India leg. With these two high-demand additions, the tour will wrap up just before Christmas before Diljit heads overseas.
          </p>

          <h2>Diljit Dosanjh Chandigarh and Kolkata Concert Details</h2>
          <p>
            Diljit unveiled the official tour poster and confirmed the twin city additions on his verified Instagram page. Here is everything confirmed about the two stadium stops:
          </p>

          <ul>
            <li>
              <strong>Chandigarh:</strong> December 12, 2026 — <strong>New PCA Stadium in Mullanpur</strong>
            </li>
            <li>
              <strong>Kolkata:</strong> December 19, 2026 — <strong>Vivekananda Yuba Bharati Krirangan (Salt Lake Stadium)</strong>
            </li>
          </ul>

          <p>
            A key clarification for concertgoers: Chandigarh was already on the tentative tour city list from the initial teaser, but its official date and stadium venue were kept under wraps until now. Kolkata, on the other hand, is a brand new, highly requested addition to the tour route.
          </p>

          {/* Diljit Instagram Post Embed Image */}
          <div className="my-8 rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl max-w-lg mx-auto bg-black/[0.4]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/diljit-dosanjh-instagram-post-chandigarh-kolkata.jpg"
                alt="Diljit Dosanjh Official Instagram Tour Announcement for Chandigarh and Kolkata"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-contain"
              />
            </div>
            <p className="text-xs font-mono text-[var(--mist)] text-center p-3 bg-white/[0.02] border-t border-white/[0.06]">
              Diljit Dosanjh&apos;s official Instagram tour poster locking in December 12 at New PCA Stadium, Mullanpur (Chandigarh) and December 19 at Vivekananda Yuba Bharati Krirangan (Kolkata). (Source: @diljitdosanjh / Instagram)
            </p>
          </div>

          <h2>Ticket Sale Dates for the New Shows</h2>
          <p>
            As expected with Diljit Dosanjh live tours, tickets are predicted to trigger intense digital queues and sell out within minutes. The ticketing rollout for both Chandigarh and Kolkata will occur in two distinct phases:
          </p>

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
                gap: "12px",
                fontSize: "15px",
              }}
            >
              <li>
                🎟️ <strong>Pre-Sale Window:</strong> Opens on <strong>November 10 at 12:00 PM (Noon) IST</strong> for eligible early-access bank cardholders.
              </li>
              <li>
                🎟️ <strong>General Ticket Sale:</strong> Goes live on <strong>November 12 at 3:00 PM IST</strong> for all users.
              </li>
            </ul>
          </div>

          <p>
            The Aura India Tour is promoted and produced by <strong>BookMyShow Live</strong>, and ticketing for all previous legs was handled exclusively through the BookMyShow app and website. Concert veterans advise having your account pre-authenticated and valid payment gateways configured well ahead of the noon counter to avoid checkout dropouts.
          </p>

          <h2>Aura India Tour 2026: Full Schedule</h2>
          <p>
            With the addition of Chandigarh and Kolkata, here is the updated, definitive tour calendar across India:
          </p>

          {/* Schedule Table */}
          <div className="overflow-x-auto my-6 border border-white/[0.1] rounded-xl">
            <table className="w-full text-left text-sm font-mono">
              <thead className="bg-white/[0.06] text-[var(--lime)] uppercase text-xs tracking-wider border-b border-white/[0.1]">
                <tr>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Venue</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {tourSchedule.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 font-semibold text-white whitespace-nowrap">{item.date}</td>
                    <td className="py-3 px-4 text-[var(--paper)]">{item.city}</td>
                    <td className="py-3 px-4 text-[var(--mist)]">{item.venue}</td>
                    <td className="py-3 px-4 text-right">
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full font-sans uppercase font-bold ${
                          item.status === "Completed"
                            ? "bg-white/[0.08] text-[var(--mist)]"
                            : item.status === "New Added"
                            ? "bg-[var(--lime)] text-black"
                            : "bg-[var(--pink)] text-white"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            Following the monumental Indian finale in Kolkata on December 19, Diljit will fly to the UAE for a massive New Year&apos;s Eve headline stadium concert in Abu Dhabi.
          </p>

          <h2>The Tour Has Not Been Smooth: Hurdles &amp; Permissions</h2>
          <p>
            While the concerts have witnessed overwhelming fan passion, the Aura India Tour has navigated high-profile logistical hurdles from day one. Just days before the kickoff performance, the Delhi Police initially declined security permissions for the October 30 concert at Jawaharlal Nehru (JLN) Stadium, citing traffic choke points and safety protocols.
          </p>

          <p>
            Following intense deliberations and an urgent high-level review, authorities granted clearance. BookMyShow Live immediately clarified that false rumors of cancellation had circulated prematurely.
          </p>

          <p>
            The Delhi concert took place seamlessly before a stadium packed with tens of thousands of cheering fans. Addressing the behind-the-scenes storm during an Instagram Live session and later right from the stage, Diljit candidly told the crowd:
          </p>

          <blockquote>
            “There were a lot of attempts made to stop me... but nothing will come between me and my fans.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Diljit Dosanjh on stage in Delhi
            </footer>
          </blockquote>

          <p>
            He reassured the audience that he would be stationed in India till December 20, determined to bring his music directly to listeners across every scheduled city.
          </p>

          <h2>Indore Concert: Four Songs Under Scrutiny &amp; Bomb Hoax Probe</h2>
          <p>
            The next scheduled stop is Indore on <strong>November 15</strong>, which has already stirred legal and public debate. Reports revealed that the District Child Protection Officer in Indore issued a formal notice to the concert venue on November 6.
          </p>

          <p>
            The notice requested event organizers to restrict the live performance of four specific chartbusters:
          </p>

          <ul>
            <li><em>Patiala Peg</em></li>
            <li><em>5 Taara Theke</em></li>
            <li><em>Case (Jeb Vichon Afeem Labhiya)</em></li>
            <li><em>Jatt Fire Karda</em></li>
          </ul>

          <p>
            The advisory followed a formal representation submitted by a Chandigarh-based academician who alleged that the lyrics glamorize alcohol and weapons, claiming they could negatively influence underage attendees. The petition cited a 2019 Punjab and Haryana High Court ruling against songs promoting substance abuse and firearm glorification.
          </p>

          <p>
            Adding to the operational tension, three private schools in Indore and the Indore Mayor&apos;s administrative office received hoax bomb threat emails earlier this week. Swift inspections by local police and bomb disposal units verified that the threats were malicious hoaxes.
          </p>

          <p>
            Unfazed by the surrounding controversy, Diljit responded directly to the noise with characteristic calm and determination:
          </p>

          <blockquote>
            “Anyone can say anything, but I will meet you in Indore on 15th November.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Diljit Dosanjh on Indore concert
            </footer>
          </blockquote>

          <h2>What Fans Can Expect Next</h2>
          <p>
            With the addition of two major northern and eastern cultural hubs, enthusiasm around the Aura India Tour has hit a fever pitch. Here is the immediate checklist for fans:
          </p>

          <ul>
            <li><strong>Ticket Pre-Sale for Chandigarh &amp; Kolkata:</strong> Starts November 10 at 12:00 PM IST on BookMyShow.</li>
            <li><strong>General Sale:</strong> Starts November 12 at 3:00 PM IST.</li>
            <li><strong>Next Up Live:</strong> Indore on November 15, followed by the mega Narendra Modi Stadium show in Ahmedabad on November 21.</li>
          </ul>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for real-time ticket queue updates, setlist reveals, and exclusive backstage reporting from Diljit Dosanjh&apos;s Aura India Tour 2026.
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
              Related Concert &amp; Bollywood News
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
                  href="/diljit-dosanjh-aura-india-tour-hurdles"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Diljit Dosanjh Breaks Silence on Aura India Tour Hurdles: “Attempts Made to Stop Me”
                </Link>
              </li>
              <li>
                <Link
                  href="/diljit-dosanjh-cjp-delhi-concert-abhijeet-dipke-response"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → CJP Delhi Concert Notice: What Diljit Dosanjh Said in Response
                </Link>
              </li>
              <li>
                <Link
                  href="/karan-johar-kareena-kapoor-diwali-pout-pic"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Karan Johar Calls Kareena Kapoor the &apos;Pout Queen&apos; in a Fun Diwali Photo
                </Link>
              </li>
              <li>
                <Link
                  href="/farah-khan-fake-fire-video-clickbait"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Farah Khan Reacts to Fake House Fire Videos: “Clickbait Can’t Be Everything”
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
            "Chandigarh Concert",
            "Kolkata Concert",
            "Salt Lake Stadium",
            "BookMyShow Live",
            "Indore Concert",
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
