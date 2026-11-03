import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Mira Rajput Says Shahid Kapoor Loves Gossip",
  description:
    "Mira Rajput says Shahid Kapoor “knows everything” about film gossip. Read the funniest moments from the unseen Great Indian Kapil Show segment.",
  keywords: [
    "Mira Rajput Shahid Kapoor gossip",
    "Great Indian Kapil Show",
    "Shahid Kapoor Mira Rajput Kapil Sharma Show",
    "Ishaan Khatter Kapil Sharma Show",
    "Kapil Sharma Show unseen clip",
    "Great Indian Kapil Show Season 5",
    "Great Indian Kapil Show Diwali special",
    "Mira Rajput Kapil Sharma Show",
    "Mira Rajput on Shahid Kapoor gossip",
    "Shahid Kapoor Mira Rajput Ishaan Khatter Netflix episode",
    "Kapil Sharma Show Shahid Kapoor Shaandaar",
    "Mira Rajput funny moments Kapil Sharma Show",
    "Kapil Sharma Show new episode today",
    "Mira Rajput",
    "Shahid Kapoor",
    "Ishaan Khatter",
    "Kapil Sharma",
    "Bollywood gossip",
    "Netflix India",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Mira Rajput Says Shahid Kapoor Loves Gossip",
    description:
      "Mira Rajput says Shahid Kapoor “knows everything” about film gossip. Read the funniest moments from the unseen Great Indian Kapil Show segment.",
    url: "https://www.buzzoriginals.com/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show.jpg",
        width: 1024,
        height: 576,
        alt: "Mira Rajput Says Shahid Kapoor Loves Gossip: Funniest Moments From Kapil Sharma Unseen Clip",
      },
    ],
    type: "article",
    publishedTime: "2026-11-04T01:30:00.000Z",
    authors: ["Buzz Originals Reality TV & Bollywood Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira Rajput Says Shahid Kapoor Loves Gossip",
    description:
      "Mira Rajput says Shahid Kapoor “knows everything” about film gossip. Read the funniest moments from the unseen Great Indian Kapil Show segment.",
    images: ["/images/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show.jpg"],
  },
  alternates: {
    canonical: "/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show",
  },
};

export default function MiraRajputShahidKapoorGossipPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show";
  const pageTitle =
    "Mira Rajput Says Shahid Kapoor Loves Gossip: Funniest Moments From Kapil Sharma’s Unseen Clip";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show.jpg",
    ],
    datePublished: "2026-11-04T01:30:00+05:30",
    dateModified: "2026-11-04T01:30:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Reality TV & Bollywood Desk",
        url: "https://www.buzzoriginals.com/about",
      },
    ],
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Buzz Originals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/assets/buzzog-logo.png",
      },
    },
    description:
      "Mira Rajput says Shahid Kapoor “knows everything” about film gossip. Read the funniest moments from the unseen Great Indian Kapil Show segment.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
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
        name: "Bollywood",
        item: "https://www.buzzoriginals.com/bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Reality Shows",
        item: "https://www.buzzoriginals.com/reality-shows",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Mira Rajput Shahid Kapoor Gossip",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Navigation */}
      <Header activeNav="Bollywood" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <Link href="/reality-shows">REALITY SHOWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>MIRA RAJPUT &amp; SHAHID GOSSIP</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">☕ Gossip King Revealed</span>
            <span className="badge lime">The Great Indian Kapil Show</span>
            <span className="badge">Netflix Unseen Clip</span>
          </div>

          <h1 className="article-title">
            Mira Rajput Says Shahid Kapoor Loves Gossip: Funniest Moments From Kapil Sharma’s Unseen Clip
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Reality TV &amp; Bollywood Desk</span>
            <span>·</span>
            <time dateTime="2026-11-04">November 4, 2026</time>
            <span>·</span>
            <span>4 MIN READ</span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <figure className="article-hero-media">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show.jpg"
              alt="Mira Rajput Says Shahid Kapoor Loves Gossip: Funniest Moments From Kapil Sharma Unseen Clip"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 900px"
            />
          </div>
          <figcaption
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-space-mono)",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            Mira Rajput, Shahid Kapoor, and Ishaan Khatter light up The Great Indian Kapil Show on Netflix with unseen family confessions. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Mira Rajput Says Shahid Kapoor Loves Gossip"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Who is the undisputed gossip king of the Kapoor household? According to <strong>Mira Rajput</strong>, the crown belongs squarely to her husband, <strong>Shahid Kapoor</strong>. In a hilarious <strong>Mira Rajput Shahid Kapoor gossip</strong> revelation from <em>The Great Indian Kapil Show</em>, host Kapil Sharma shared an exclusive unseen bonus clip on his YouTube channel featuring Shahid, Mira, and <strong>Ishaan Khatter</strong>. Packed with unrestrained family banter, Mira stole the spotlight with witty one-liners and candid confessions.
          </p>

          <p>
            The newly released bonus footage offers fans an intimate, unfiltered glimpse into the Kapoors’ domestic dynamics, debunking Shahid’s poised exterior and exposing his undercover appetite for Bollywood’s juiciest grapevine scoops.
          </p>

          {/* Fast Breakdown Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px",
              margin: "28px 0",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                color: "var(--lime)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              ⚡ Fast Breakdown: Unseen Kapil Sharma Show Highlights
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>The Gossip King:</strong> Mira reveals Shahid “knows everything about industry gossip” while pretending he never indulges in it.
              </li>
              <li>
                <strong>The Dad Advice:</strong> Mira’s father told her to laugh out loud like Archana Puran Singh so everyone thinks she understood the jokes.
              </li>
              <li>
                <strong>The Film Game:</strong> Both Shahid and Mira independently picked <em>Shaandaar</em> (2015) as the movie she disliked the most.
              </li>
              <li>
                <strong>Serious Cinema Snooze:</strong> Mira confessed she takes a “silence break” and once fell asleep when Shahid and Ishaan started discussing serious cinema.
              </li>
            </ul>
          </div>

          <h2>When Did This Episode Come Out?</h2>
          <p>
            The main Diwali special episode of <em>The Great Indian Kapil Show</em> premiered on <strong>Netflix on October 31 at 8 PM</strong>, marking the first time Shahid Kapoor, Mira Rajput, and Ishaan Khatter shared the screen together on an OTT talk platform. Following enthusiastic audience reception, Kapil Sharma delighted fans by uploading never-before-seen segments on Tuesday that didn’t make the final Netflix broadcast cut.
          </p>

          <h2>Mira’s Dad Gave Her a Funny Tip: “Laugh Like Archana Ji”</h2>
          <p>
            Opening up about her pre-show nervousness, Mira shared a hilarious piece of advice her father passed on before she walked onto Kapil’s set:
          </p>
          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            “I told my dad that I am going on Kapil ji’s show, so he said, ‘Laugh wholeheartedly; they should feel that you have understood the joke.’ He said, ‘Laugh like Archana ji, it should feel like you are laughing.’”
          </blockquote>
          <p>
            Archana Puran Singh beamed and called the gesture “so cute,” while Ishaan chimed in with a cheeky reality check: “You shouldn’t have said this at the start! Now, you’ll be caught if you laugh non-stop.”
          </p>

          {/* Contextual Internal Link */}
          <div
            style={{
              borderLeft: "3px solid var(--pink)",
              background: "rgba(255, 0, 128, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Related Reality Scoop:{" "}
            <Link
              href="/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Koffee With Karan 9: Kareena Kapoor Calls Herself No. 1, Saif Says He Is “Miscast”
            </Link>
          </div>

          <h2>The Shahid Film Game: Shaandaar vs Batti Gul Meter Chalu</h2>
          <p>
            Kapil orchestrated a high-stakes guessing game to test family camaraderie. Wearing noise-canceling headphones, Mira and Ishaan couldn’t hear as Shahid was asked to name one of his own films that his wife and brother secretly disliked.
          </p>
          <p>
            Without hesitation, Shahid whispered into Kapil’s mic: <strong>“Shaandaar (2015).”</strong>
          </p>
          <p>
            When Kapil removed Mira’s headphones and posed the question, Mira paused, evaluated her husband’s vast filmography, and exclaimed: <em>Shaandaar</em>. The couple celebrated the uncanny synchronization with high-fives.
          </p>
          <p>
            Next, Ishaan was tasked with naming a Shahid film he found intensely boring. When Ishaan hesitated, Mira playfully egged on the timer, shouting, <em>“Ho gaya tik tik 25!”</em> (His 25 seconds are up). Under pressure, Ishaan finally named <strong>Batti Gul Meter Chalu (2018)</strong>, crowning Mira the definitive winner of the segment.
          </p>

          <h2>Mira Wants Shahid to Do More Romantic Films</h2>
          <p>
            Shahid shared that Mira frequently petitions him to sign more charming romantic comedies rather than intense, dark thrillers:
          </p>
          <blockquote
            style={{
              borderLeft: "4px solid var(--pink)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            “She says, ‘Sometimes it shows which movie you’re working on.’”
          </blockquote>
          <p>
            Mira wholeheartedly agreed, citing Saif Ali Khan’s effortless charm in <em>Cocktail</em>: “Yes, he’s so romantic and so happy in it.” Kapil quipped that Indian wives secretly wish their husbands only worked in Sooraj Barjatya family sagas, eliciting a hearty nod from Shahid.
          </p>

          {/* Contextual Link */}
          <div
            style={{
              borderLeft: "3px solid var(--lime)",
              background: "rgba(0, 255, 128, 0.05)",
              padding: "12px 18px",
              margin: "24px 0",
              fontFamily: "var(--font-space-mono)",
              fontSize: "14px",
            }}
          >
            Also Read:{" "}
            <Link
              href="/tusshar-kapoor-extortion-call-bishnoi-gang-fake"
              style={{ color: "var(--pink)", textDecoration: "underline", fontWeight: "bold" }}
            >
              Tusshar Kapoor Gets Rs 5 Crore Extortion Call in Bishnoi Gang’s Name: Police Suspect Hoax
            </Link>
          </div>

          <h2>Mira Gets Bored of “Serious Cinema” Talks: “I Take a Silence Break”</h2>
          <p>
            When conversation shifts to deep cinematic theories at home, Mira admits she quickly loses patience. “When these two start discussing serious cinema, I take a silence break,” she confessed.
          </p>
          <p>
            Shahid immediately exposed an incident where Mira physically zoned out: “She fell asleep on the bed during our conversation, saying, ‘I can’t tolerate anymore.’”
          </p>
          <p>
            Shahid teased her about her true conversational preference: “What kind of conversations do you like? ‘What’s happening in the film industry? What’s the latest gossip?’”
          </p>

          <h2>Who Loves Gossip More? “He Knows Everything But Never Says Anything”</h2>
          <p>
            When Archana Puran Singh asked who between the two is genuinely hooked on industry gossip, Shahid gestured for her to take a wild guess. Mira instantly called out her husband:
          </p>
          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              paddingLeft: "18px",
              fontStyle: "italic",
              color: "#fff",
              margin: "22px 0",
              fontSize: "17px",
              lineHeight: "1.6",
            }}
          >
            “He knows everything but he never says anything!”
          </blockquote>
          <p>
            Mimicking Shahid’s sanctimonious hand gestures, Mira joked that Shahid always poses as an innocent monk saying, <em>“I don’t indulge in gossip.”</em>
          </p>
          <p>
            Ishaan complained that he usually ends up being the subject of their domestic debriefs. Mira laughed and fired back: “It’s your gossip that we get to know!”
          </p>

          <h2>Shahid Goes Quiet Around His Sister-in-Law</h2>
          <p>
            In another hilarious confession, Shahid admitted he feels slightly inhibited sharing the stage with his wife and sister-in-law. “Now that you’ve called me here with her, I go quiet. When I come alone, I feel free. So, call me with someone I can balance things out with,” he told Kapil.
          </p>
          <p>
            Seizing the comedic opening, Kapil instantly teased him: “Whom do you want to come with? Tell us, we’ll also get an idea!”
          </p>

          <h2>Quick Facts: The Great Indian Kapil Show (Diwali Special)</h2>
          <div
            style={{
              overflowX: "auto",
              margin: "24px 0",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(255, 255, 255, 0.05)", borderBottom: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Detail</th>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Highlights</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Show &amp; Episode</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>The Great Indian Kapil Show (Diwali Special)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Featured Guests</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Shahid Kapoor, Mira Rajput &amp; Ishaan Khatter</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Streaming Platform</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Netflix (Main Ep) &amp; YouTube (Unseen Bonus Clip)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Standout Moment</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}>Mira naming Shahid as the Bollywood “Gossip King”</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold", color: "#fff" }}>Agreed Bad Film</td>
                  <td style={{ padding: "12px 16px", color: "var(--lavender)" }}><em>Shaandaar</em> (2015) independently picked by both</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Other Viral Moments From the Promo</h2>
          <p>
            The extended promo delivered several other riotous exchanges. Shahid joked about having changed Ishaan’s diapers when his younger brother was an infant. When Kapil asked Mira if Shahid possesses any single habit that genuinely annoys her, Mira arched an eyebrow and shot back: <strong>“One?”</strong> — leaving Shahid utterly stunned and the audience in splits.
          </p>

          <p>
            Fans can stream the complete episode of <em>The Great Indian Kapil Show</em> exclusively on Netflix, and catch the viral unseen footage on Kapil Sharma’s official YouTube channel.
          </p>

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for the latest Bollywood inside scoops, reality television recaps, and exclusive celebrity interviews.
          </p>

          {/* Tags List */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {[
              "MiraRajput",
              "ShahidKapoor",
              "IshaanKhatter",
              "TheGreatIndianKapilShow",
              "KapilSharma",
              "BollywoodGossip",
              "NetflixIndia",
              "Shaandaar",
              "RealityTV",
              "BuzzOriginals",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "4px 10px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--lavender)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Sharing Bar Bottom */}
          <div style={{ marginTop: "32px" }}>
            <SocialShare
              title="Mira Rajput Says Shahid Kapoor Loves Gossip"
              url={pageUrl}
            />
          </div>

          {/* Navigation Back Links */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Link
              href="/bollywood"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              ← Back to Bollywood
            </Link>
            <Link
              href="/reality-shows"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              Reality Shows Desk →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
