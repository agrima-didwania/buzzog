import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "The Royals Season 2 Shooting Begins: Cast & Updates",
  description:
    "The Royals Season 2 is now filming. See who is returning, who is new, who is directing and what the makers have said.",
  keywords: [
    "The Royals Season 2",
    "The Royals 2",
    "The Royals Season 2 cast",
    "The Royals Season 2 release date",
    "The Royals Season 2 shooting",
    "Ishaan Khatter",
    "Zeenat Aman",
    "Sakshi Tanwar",
    "Sini Shetty",
    "Bhumi Pednekar The Royals 2",
    "Nitya Mehra",
    "Tanuj Chopra",
    "Netflix India",
    "Morpur royal family",
    "Web Series Buzz Originals",
  ],
  alternates: {
    canonical: "/the-royals-season-2-goes-on-floors",
  },
  openGraph: {
    title: "The Royals Season 2 Shooting Begins: Cast & Updates",
    description:
      "The Royals Season 2 is now filming. See who is returning, who is new, who is directing and what the makers have said.",
    url: "https://www.buzzoriginals.com/the-royals-season-2-goes-on-floors",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/the-royals-season-2-goes-on-floors.jpg",
        width: 1200,
        height: 675,
        alt: "The Royals Season 2 Shooting Begins: Cast and Updates — Netflix India",
      },
    ],
    type: "article",
    publishedTime: "2026-11-04T09:30:00.000Z",
    authors: ["Buzz Originals OTT & Web Series Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Royals Season 2 Shooting Begins: Cast & Updates",
    description:
      "The Royals Season 2 is now filming. See who is returning, who is new, who is directing and what the makers have said.",
    images: ["/images/the-royals-season-2-goes-on-floors.jpg"],
  },
};

export default function TheRoyalsSeason2Page() {
  const pageUrl =
    "https://www.buzzoriginals.com/the-royals-season-2-goes-on-floors";
  const pageTitle =
    "The Royals Season 2 Shooting Begins: Cast & Updates";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/the-royals-season-2-goes-on-floors.jpg",
    ],
    datePublished: "2026-11-04T15:00:00+05:30",
    dateModified: "2026-11-04T15:00:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals OTT & Web Series Desk",
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
      "The Royals Season 2 is now filming. See who is returning, who is new, who is directing and what the makers have said.",
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
        name: "Web Series",
        item: "https://www.buzzoriginals.com/web-series",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "The Royals Season 2 Goes on Floors",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/web-series">WEB SERIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>THE ROYALS SEASON 2</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">👑 Netflix Original</span>
            <span className="badge pink">Season 2 on Floors</span>
            <span className="badge">Web Series</span>
          </div>

          <h1 className="article-title">
            The Royals Season 2 Goes on Floors: Ishaan Khatter and Zeenat Aman Return
          </h1>

          <div className="article-meta-bar">
            <span>By Buzz Originals OTT &amp; Web Series Desk</span>
            <span>·</span>
            <time dateTime="2026-11-04">November 4, 2026</time>
            <span>·</span>
            <span>4 MIN READ</span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <figure className="article-media-box">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
            }}
          >
            <Image
              src="/images/the-royals-season-2-goes-on-floors.jpg"
              alt="The Royals Season 2 Shooting Begins: Ishaan Khatter and Zeenat Aman Return on Netflix"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 900px"
            />
          </div>
          <figcaption className="article-media-caption">
            The Royals Season 2 has officially commenced filming across Rajasthan with Ishaan Khatter, Zeenat Aman, and Sakshi Tanwar leading the royal chaos. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="The Royals Season 2 Shooting Begins: Cast & Updates"
            url={pageUrl}
          />
        </div>

        {/* Fast Breakdown Box */}
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
            ⚡ The Royals Season 2: Production &amp; Cast Breakdown
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
              <strong>Filming Status:</strong> Officially commenced September 18 in Rajasthan; shoot schedule extends through December.
            </li>
            <li>
              <strong>Expected Release Date:</strong> Second half of 2027 exclusively on Netflix India.
            </li>
            <li>
              <strong>Returning Royalty:</strong> Ishaan Khatter, Zeenat Aman, Sakshi Tanwar, Vihaan Samat, Kavya Trehan, Milind Soman, Dino Morea, and Lisa Mishra.
            </li>
            <li>
              <strong>Reported New Additions:</strong> Miss India World 2022 Sini Shetty and actor Gurfateh Pirzada join the ensemble; Nora Fatehi spotted on set.
            </li>
            <li>
              <strong>Directional Duo:</strong> Helmed by Nitya Mehra and Tanuj Chopra, produced by Pritish Nandy Communications.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Good news for Netflix fans! <strong>The Royals Season 2</strong> is officially in production. <strong>Ishaan Khatter</strong>, screen icon <strong>Zeenat Aman</strong>, powerhouse performer <strong>Sakshi Tanwar</strong>, and the rest of the Morpur royal dynasty are returning to stream screens with an even grander cocktail of palace romance, regal intrigue, and high-stakes aristocratic chaos.
          </p>

          <p>
            Following the monumental global success of its debut chapter, Netflix India has greenlit an expanded world for the glamorous rom-com drama. With cameras rolling on location, fans are eagerly looking ahead to discover what lies in store for the eccentric royal family.
          </p>

          <h2>The Royals Season 2 Has Started Filming</h2>
          <p>
            The first season became an undisputed sensation on OTT, captivating viewers across India and overseas. Now, the makers have confirmed that <strong>The Royals Season 2</strong> has officially gone on the floors.
          </p>
          <p>
            Industry reports confirm that principal photography kicked off on <strong>September 18 in Rajasthan</strong>, utilizing magnificent heritage palaces and desert backdrops to capture Morpur’s opulent aesthetic. The marathon shoot schedule is slated to continue through December, with the second season tentatively eyeing a worldwide premiere in the <strong>second half of 2027</strong>.
          </p>

          <h2>Who Is Returning in The Royals Season 2?</h2>
          <p>
            The Morpur palace wouldn’t be complete without its eccentric ensemble of royal matriarchs, ambitious heirs, and glamorous confidants. Key actors reprising their celebrated roles in the <strong>The Royals Season 2 cast</strong> include:
          </p>

          <ul>
            <li>
              <strong>Ishaan Khatter:</strong> Returning as the charismatic, conflicted young royal whose princely responsibilities clash with personal passions.
            </li>
            <li>
              <strong>Zeenat Aman:</strong> The veteran cinematic royalty reprises her commanding, effortlessly chic matriarchal presence that anchored the show’s glamour.
            </li>
            <li>
              <strong>Sakshi Tanwar:</strong> Back as the calculating, sharp-witted royal figure delivering masterclasses in palace politics.
            </li>
            <li>
              <strong>Vihaan Samat:</strong> Reprising his role as a pivotal palace compatriot navigating royal rivalries.
            </li>
            <li>
              <strong>Kavya Trehan:</strong> Returning to add spice, modern flair, and musical verve to Morpur’s inner circle.
            </li>
          </ul>

          <p>
            Other reliable reports from the Rajasthan schedule confirm that <strong>Milind Soman</strong>, <strong>Dino Morea</strong>, <strong>Lisa Mishra</strong>, <strong>Chunky Panday</strong>, and <strong>Neena Kulkarni</strong> are also reprising their respective characters. In addition, dance sensation and actress <strong>Nora Fatehi</strong> has reportedly joined the sets for a high-octane special sequence.
          </p>
          <p>
            A handful of fresh faces are joining the sprawling royal ensemble too, though the makers have kept specific character details under strict wraps for now.
          </p>

          <h2>What Is New in Season 2? Cast Shifts &amp; New Directors</h2>
          <p>
            While the core royal family returns intact, <strong>The Royals Season 2</strong> brings major shifts both in front of and behind the cameras:
          </p>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px",
              margin: "24px 0",
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
              👑 Season 2 Highlights &amp; Creative Shakeups
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                color: "var(--lavender)",
              }}
            >
              <li>
                <strong>A New Female Lead:</strong> Miss India World 2022 <strong>Sini Shetty</strong> has reportedly joined the cast opposite Ishaan Khatter, accompanied by young talent <strong>Gurfateh Pirzada</strong>.
              </li>
              <li>
                <strong>Bhumi Pednekar’s Status:</strong> Multiple trade buzz reports suggest that{" "}
                <Link
                  href="/bhumi-pednekar-akshay-kumar-priyadarshan-next-film"
                  className="text-[var(--lime)] hover:underline font-bold"
                >
                  Bhumi Pednekar
                </Link>{" "}
                will not be returning for the sophomore run. Sources indicate the creators chose to pivot focus heavily toward royal family dynasties and feudal power struggles rather than continuing the initial romance arc. The production house has not released an official statement on this creative transition.
              </li>
              <li>
                <strong>New Directorial Vision:</strong> The season is being co-directed by <strong>Nitya Mehra</strong> (<em>Baar Baar Dekho</em>, <em>Made in Heaven</em>) and <strong>Tanuj Chopra</strong> (<em>Delhi Crime Season 2</em>).
              </li>
              <li>
                <strong>Director Transitions Addressed:</strong> The project saw behind-the-scenes adjustments during pre-production. Reports revealed that Jasmeet K Reen was initially attached to direct before Mitakshara Kumar briefly stepped in, after which Tanuj Chopra took charge alongside showrunner Nitya Mehra. Both Reen and producer Rangita Pritish Nandy have publicly cleared the air, clarifying that scheduling alignments dictated the evolution of the creative steering committee.
              </li>
            </ul>
          </div>

          <h2>What the Makers Said</h2>
          <p>
            Creators and showrunners <strong>Rangita Pritish Nandy</strong> and <strong>Ishita Pritish Nandy</strong> expressed their joy at the show&apos;s soaring cultural reception and outlined what viewers can look forward to in Season 2:
          </p>

          <blockquote>
            “Morpur has clearly found a place in the hearts of audiences far beyond its palace walls, and we couldn’t be happier. With Season 2, we’re looking forward to taking the story forward, bringing back the characters audiences have come to love, and turning up the romance, humour and family drama. There’s so much more to explore in Morpur, and we can’t wait for audiences to join us for another season of love, laughter and royally entertaining chaos!”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Rangita &amp; Ishita Pritish Nandy, Creators of The Royals
            </footer>
          </blockquote>

          <h2>What Can We Expect from The Royals 2?</h2>
          <p>
            Expect a much bigger and more complex playground this time around. While Season 1 established the boundaries and quirks of Morpur, Season 2 is expanding the narrative map to introduce neighboring rival princely states, contentious ancestral alliances, and high-society feuds.
          </p>
          <p>
            With the induction of Sini Shetty and Gurfateh Pirzada into the court, viewers can expect fresh romantic chemistry, competing royal claims, and razor-sharp dinner table verbal duels designed to elevate the drama to succession-level intensity.
          </p>

          <h2>A Quick Look Back at Season 1: A Record-Breaking OTT Run</h2>
          <p>
            When <em>The Royals</em> first premiered on <strong>May 9, 2025</strong>, it made OTT history for Indian streaming television. It became the <strong>first Indian series ever to trend in Netflix’s Global Top 10 Non-English TV Shows across 58 countries</strong> simultaneously.
          </p>
          <p>
            Thanks to massive viewership figures and viral chatter across social media, Netflix took the unprecedented step of officially renewing the series within just three weeks of its premiere—a testament to its universal entertainment value.
          </p>

          <h2>Final Words</h2>
          <p>
            With a celebrated returning cast led by Ishaan Khatter and Zeenat Aman, intriguing new additions like Sini Shetty, and seasoned directors at the helm, <strong>The Royals Season 2</strong> stands out as one of the most keenly awaited Indian series on Netflix.
          </p>
          <p>
            <em>
              Stay tuned to Buzz Originals for exclusive on-set scoops, teaser breakdowns, and confirmed release dates across all your favourite shows and stars.
            </em>
          </p>
        </div>

        {/* Social Sharing Bar Bottom */}
        <div style={{ margin: "32px 0 24px" }}>
          <SocialShare
            title="The Royals Season 2 Shooting Begins: Cast & Updates"
            url={pageUrl}
          />
        </div>

        {/* Contextual Read Next Section */}
        <section
          style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px dashed var(--line)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "22px",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Related OTT &amp; Web Series Stories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <Link
              href="/maharani-season-5-release-date-january-2027"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "var(--ink-2)",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image
                  src="/images/maharani-season-5-release-date-january-2027.jpg"
                  alt="Maharani Season 5 Release Date"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge lime" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  SonyLIV
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Maharani Season 5 Release Date: Huma Qureshi’s Political Drama Eyes Jan 2027
                </h4>
              </div>
            </Link>

            <Link
              href="/radhika-apte-rudra-akka-netflix"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "var(--ink-2)",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image
                  src="/images/radhika-apte-rudra-akka-netflix.jpg"
                  alt="Radhika Apte on Her Akka Role Rudra"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge pink" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Netflix Original
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Radhika Apte on Playing Rudra in Akka: Why This Role Breaks New Ground
                </h4>
              </div>
            </Link>

            <Link
              href="/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "var(--ink-2)",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--line)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                <Image
                  src="/images/mira-rajput-shahid-kapoor-gossip-kapil-sharma-show.jpg"
                  alt="Mira Rajput on Shahid Kapoor Gossip with Ishaan Khatter"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Kapil Sharma Show
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Mira Rajput Says Shahid Kapoor Loves Gossip: Unseen Clip with Ishaan Khatter
                </h4>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
