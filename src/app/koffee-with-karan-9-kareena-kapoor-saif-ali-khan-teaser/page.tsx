import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Koffee With Karan 9: Kareena Says She Is No. 1",
  description:
    "Kareena Kapoor and Saif Ali Khan return to Koffee With Karan 9 after 16 years. See teaser highlights and when to watch episode 4.",
  keywords: [
    "Koffee With Karan 9",
    "Kareena Kapoor Saif Ali Khan Koffee With Karan",
    "Koffee With Karan season 9 episode 4",
    "KWK 9 teaser",
    "Koffee With Karan 9 promo",
    "Kareena Kapoor number one actress",
    "Saif Ali Khan miscast",
    "Koffee With Karan final season",
    "Kareena Kapoor Khan",
    "Saif Ali Khan",
    "Karan Johar",
    "The Peacock Hub",
    "JioHotstar",
    "Buzz Originals",
    "Bollywood gossip",
    "Reality TV updates",
  ],
  openGraph: {
    title: "Koffee With Karan 9: Kareena Says She Is No. 1",
    description:
      "Kareena Kapoor and Saif Ali Khan return to Koffee With Karan 9 after 16 years. See teaser highlights and when to watch episode 4.",
    url: "https://www.buzzoriginals.com/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser.jpg",
        width: 1024,
        height: 576,
        alt: "Koffee With Karan 9: Kareena Kapoor and Saif Ali Khan Return to the Couch",
      },
    ],
    type: "article",
    publishedTime: "2026-11-03T13:30:00.000Z",
    authors: ["Buzz Originals Reality TV Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koffee With Karan 9: Kareena Says She Is No. 1",
    description:
      "Kareena Kapoor and Saif Ali Khan return to Koffee With Karan 9 after 16 years. See teaser highlights and when to watch episode 4.",
    images: ["/images/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser.jpg"],
  },
  alternates: {
    canonical: "/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser",
  },
};

export default function KoffeeWithKaran9KareenaSaifTeaserPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser";
  const pageTitle =
    "Koffee With Karan 9: Kareena Kapoor Calls Herself No. 1, Saif Ali Khan Says He Is “Miscast”";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser.jpg",
    ],
    datePublished: "2026-11-03T13:30:00+05:30",
    dateModified: "2026-11-03T13:30:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Reality TV Desk",
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
      "Kareena Kapoor and Saif Ali Khan return to Koffee With Karan 9 after 16 years. See teaser highlights and when to watch episode 4.",
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
        name: "Reality Shows",
        item: "https://www.buzzoriginals.com/reality-shows",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Koffee With Karan 9: Kareena & Saif Teaser",
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
      <Header activeNav="Reality Shows" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/reality-shows">REALITY SHOWS</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>KWK 9: KAREENA &amp; SAIF TEASER</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">☕ Koffee With Karan 9</span>
            <span className="badge lime">Saifeena Returns</span>
            <span className="badge">Episode 4 Teaser</span>
          </div>

          <h1 className="article-title">
            Koffee With Karan 9: Kareena Kapoor Calls Herself No. 1, Saif Ali Khan Says He Is “Miscast”
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Reality TV Desk</span>
            <span>·</span>
            <time dateTime="2026-11-03">November 3, 2026</time>
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
              src="/images/koffee-with-karan-9-kareena-kapoor-saif-ali-khan-teaser.jpg"
              alt="Koffee With Karan 9: Kareena Kapoor Calls Herself No. 1, Saif Ali Khan Says He Is Miscast"
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
            Kareena Kapoor Khan and Saif Ali Khan reunite on the Koffee With Karan couch for Season 9 Episode 4 after 16 years. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Koffee With Karan 9: Kareena Says She Is No. 1"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            The famous Koffee couch is getting a very spicy guest list. Bollywood royalty <strong>Kareena Kapoor Khan</strong> and <strong>Saif Ali Khan</strong> are returning together on <strong>Koffee With Karan Season 9</strong>, and the explosive new teaser has already set social media ablaze. Packed with razor-sharp retorts, vintage Bebo self-confidence, and Nawab Saif’s deadpan charm, the promo proves why this reunion was worth the 16-year wait.
          </p>

          <p>
            From Kareena declaring herself Bollywood’s undisputed Number 1 actress to Saif openly quipping that he feels “slightly miscast” for the glossy gossip show, here is everything revealed in the viral promo.
          </p>

          {/* Key Facts Summary Box */}
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
              ⚡ Fast Facts: Koffee With Karan Season 9 Episode 4
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px", color: "var(--lavender)" }}>
              <li>
                <strong>Guests:</strong> Kareena Kapoor Khan &amp; Saif Ali Khan (appearing together on the couch for the first time since 2010).
              </li>
              <li>
                <strong>Episode Number:</strong> Episode 4 of the farewell 9th season.
              </li>
              <li>
                <strong>Release Date &amp; Time:</strong> Wednesday, November 4, 2026, at 7:00 PM IST.
              </li>
              <li>
                <strong>Streaming Platform:</strong> The Peacock Hub on JioHotstar.
              </li>
              <li>
                <strong>Headline Moment:</strong> Kareena points to herself as Bollywood’s No. 1 leading lady.
              </li>
            </ul>
          </div>

          <h2>Kareena and Saif Are Back Together After 16 Long Years</h2>
          <p>
            Believe it or not, this marks only the second time that Saif Ali Khan and Kareena Kapoor Khan have shared the Koffee couch as a pair. Their very first joint appearance happened way back in <strong>Season 3 in 2010</strong>, when they were secretly dating during the filming of <em>Kurbaan</em> and <em>Tashan</em>, before tying the knot in October 2012.
          </p>
          <p>
            While Kareena has appeared on the talk show almost every single season with different co-stars (including Sonam Kapoor, Priyanka Chopra, Aamir Khan, and Alia Bhatt), this is a monumental comeback for the duo as husband and wife.
          </p>
          <p>
            Their episode will serve as the headline fourth installment of <strong>Koffee With Karan’s farewell season</strong>. The final chapter was opened by <strong>Salman Khan</strong> in Episode 1, followed by Telugu cinema stars <strong>Rashmika Mandanna and Vijay Deverakonda</strong> in Episode 2, and <strong>Janhvi Kapoor with Varun Dhawan</strong> in Episode 3.
          </p>

          {/* Social Teaser Embed Link */}
          <div
            style={{
              margin: "24px 0",
              padding: "16px 20px",
              background: "rgba(255, 0, 110, 0.06)",
              borderLeft: "3px solid var(--magenta)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--magenta)", textTransform: "uppercase", display: "block", marginBottom: "6px" }}>
              Watch the Teaser
            </span>
            <a
              href="https://www.instagram.com/reel/DfQAR0utu8t/?xtok=MWdmZW40NjF1Mjh4aQ=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              Watch: Kareena Kapoor and Saif Ali Khan on Koffee With Karan Season 9 Promo on Instagram →
            </a>
          </div>

          <h2>“Happy and Relieved”: Kareena’s Reaction to the Show Ending</h2>
          <p>
            Host Karan Johar opens the teaser by reminding the couple with dramatic sentimentality that Season 9 is officially the final season of the franchise that redefined celebrity gossip in India since 2004.
          </p>
          <p>
            Instead of giving the customary nostalgic speech, Kareena delivered a characteristically unfiltered Bebo zinger that caught Karan entirely off-guard:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17.5px",
              color: "#fff",
            }}
          >
            “Quite happy and relieved. Because now we don’t have to keep coming on Koffee With Karan.”
            <br />
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontStyle: "normal",
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--magenta)",
              }}
            >
              — Kareena Kapoor Khan to Karan Johar
            </span>
          </blockquote>

          <p>
            Karan, looking mock-offended, fired back with his legendary theatrical sarcasm: <em>“Thank you for showing your sensitivity to my last season!”</em>
          </p>

          <h2>Saif Ali Khan: “I Am Slightly Miscast for This Show”</h2>
          <p>
            Saif quickly chimed in with his signature self-deprecating dry humor:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17.5px",
              color: "#fff",
            }}
          >
            “I think I’m slightly miscast for this show.”
            <br />
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontStyle: "normal",
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--lime)",
              }}
            >
              — Saif Ali Khan on the Koffee couch
            </span>
          </blockquote>

          <p>
            Insiders who watched the advanced cut also noted that when Karan pressed Kareena on why she felt so relieved about the show wrapping up its historic run, Saif slammed the buzzer and quipped: <em>“Because of you!”</em>, sending the crew into splits.
          </p>

          {/* Contextual Link */}
          <div
            style={{
              margin: "24px 0",
              padding: "14px 18px",
              background: "rgba(255, 218, 0, 0.06)",
              borderLeft: "3px solid var(--lime)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
              Also Read
            </span>
            <Link
              href="/janhvi-kapoor-veer-pahariya-concert-advice-koffee-with-karan"
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              Janhvi Kapoor’s “Concert” Advice for Veer Pahariya on Koffee With Karan Goes Viral →
            </Link>
          </div>

          <h2>Who Is Bollywood’s No. 1 Actress? Kareena Has the Perfect Answer</h2>
          <p>
            No visit by Kareena to Koffee With Karan is complete without a headline-grabbing declaration. During the rapid-fire questionnaire, Karan asked her point-blank who she currently views as the top female star of Hindi cinema.
          </p>
          <p>
            Without batting an eyelid, Kareena gestured directly at herself:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "20px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17.5px",
              color: "#fff",
            }}
          >
            “The one sitting opposite to you.”
            <br />
            <span
              style={{
                display: "block",
                marginTop: "10px",
                fontStyle: "normal",
                fontSize: "13px",
                fontFamily: "var(--font-space-mono)",
                color: "var(--magenta)",
              }}
            >
              — Kareena Kapoor Khan naming herself Bollywood’s No. 1 actress
            </span>
          </blockquote>

          <p>
            The response left Karan grinning, while Saif added his own hilarious commentary, joking that Kareena is famously “very generous with compliments when it comes to other people.”
          </p>

          <h2>Saif Takes a Light Dig at Karan Over Star Kids</h2>
          <p>
            Another moment generating widespread excitement across Reddit and X (formerly Twitter) occurs when Karan Johar proudly remarks that new-age Bollywood star kids are becoming global icons.
          </p>
          <p>
            Saif responds with a subtle, razor-sharp observation that netizens immediately interpreted as a good-natured dig at Karan’s longstanding reputation as the godfather of star children. Social media users applauded Saif’s impeccable timing and ability to puncture Karan’s bubbles with aristocratic nonchalance.
          </p>
          <p>
            The promo also previews a high-stakes buzzer round where Karan challenges the couple to name leading Bollywood actors whose names start with the letter <strong>“K”</strong>—sparking an immediate battle between Saif and Kareena to buzz in first.
          </p>

          {/* Contextual Link */}
          <div
            style={{
              margin: "24px 0",
              padding: "14px 18px",
              background: "rgba(255, 218, 0, 0.06)",
              borderLeft: "3px solid var(--lime)",
              borderRadius: "4px",
            }}
          >
            <span style={{ fontSize: "12px", fontFamily: "var(--font-space-mono)", color: "var(--lime)", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
              Also Read
            </span>
            <Link
              href="/orry-sara-ali-khan-disappeared-friendship-fallout"
              style={{
                color: "#fff",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "15px",
              }}
            >
              Orry Says Sara Ali Khan “Disappeared” When He Needed Her Most: Friendship Fallout Timeline →
            </Link>
          </div>

          {/* Episode Broadcast Details Card */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(255, 0, 110, 0.08), rgba(200, 255, 0, 0.04))",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderRadius: "8px",
              padding: "24px",
              margin: "32px 0",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "15px",
                color: "var(--lime)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              📺 When &amp; Where to Watch KWK 9 Episode 4
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", fontFamily: "var(--font-space-mono)", fontSize: "13.5px" }}>
              <div>
                <span style={{ color: "rgba(255, 255, 255, 0.5)", display: "block", fontSize: "11px" }}>SHOW</span>
                <strong style={{ color: "#fff" }}>Koffee With Karan Season 9</strong>
              </div>
              <div>
                <span style={{ color: "rgba(255, 255, 255, 0.5)", display: "block", fontSize: "11px" }}>EPISODE</span>
                <strong style={{ color: "var(--magenta)" }}>Episode 4 (Final Season)</strong>
              </div>
              <div>
                <span style={{ color: "rgba(255, 255, 255, 0.5)", display: "block", fontSize: "11px" }}>RELEASE DATE</span>
                <strong style={{ color: "#fff" }}>Wednesday, November 4, 2026</strong>
              </div>
              <div>
                <span style={{ color: "rgba(255, 255, 255, 0.5)", display: "block", fontSize: "11px" }}>STREAMING TIME</span>
                <strong style={{ color: "var(--lime)" }}>7:00 PM IST</strong>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <span style={{ color: "rgba(255, 255, 255, 0.5)", display: "block", fontSize: "11px" }}>WHERE TO STREAM</span>
                <strong style={{ color: "#fff" }}>Exclusively on The Peacock Hub on JioHotstar</strong>
              </div>
            </div>
          </div>

          <h2>Why This Episode Matters</h2>
          <p>
            When <em>Koffee With Karan</em> debuted twenty-two years ago in 2004, it dismantled the barrier between guarded celebrity public relations and authentic group-chat gossip. Season 9 represents the curtain call for this era-defining talk show.
          </p>
          <p>
            Both Kareena and Saif boast rich legacies on this set. Saif memorably charmed audiences in Season 8 alongside his legendary mother, <strong>Sharmila Tagore</strong>, while Kareena’s past moments—from inventing the term “pooh-isms” to iconic banter with Shahid Kapoor and Priyanka Chopra—remain pop-culture cornerstones.
          </p>
          <p>
            With Kareena’s unapologetic star power, Saif’s effortless wit, and Karan’s seasoned chemistry with both, Episode 4 promises to be the undisputed highlight of the final season.
          </p>
          <p>
            Stay locked to <strong>Buzz Originals</strong> for full episode breakdowns, rapid-fire winner scoops, and unfiltered reality TV analysis as soon as the episode drops.
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
              "KoffeeWithKaran9",
              "KareenaKapoorKhan",
              "SaifAliKhan",
              "KaranJohar",
              "KWK9Teaser",
              "Saifeena",
              "ThePeacockHub",
              "JioHotstar",
              "BollywoodGossip",
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
              title="Koffee With Karan 9: Kareena Says She Is No. 1"
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
              href="/reality-shows"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              ← Back to Reality Shows
            </Link>
            <Link
              href="/"
              style={{
                color: "var(--lime)",
                textDecoration: "none",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
              }}
            >
              Back to Home →
            </Link>
          </div>
        </div>
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
