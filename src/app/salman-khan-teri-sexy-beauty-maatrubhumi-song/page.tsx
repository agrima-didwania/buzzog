import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Teri Sexy Beauty Song: Salman Khan Sings After 11 Years",
  description:
    "Salman Khan sings again after 11 years in Teri Sexy Beauty from Maatrubhumi. Know the song details, fan reactions and release date update.",
  keywords: [
    "Teri Sexy Beauty",
    "Salman Khan new song",
    "Teri Sexy Beauty song",
    "Maatrubhumi song",
    "Maatrubhumi release date",
    "Salman Khan singing after 11 years",
    "Salman Khan Chitrangda Singh",
    "Maatrubhumi movie",
    "Salman Khan Maatrubhumi",
    "Sajid Khan",
    "Apoorva Lakhia",
    "Battle of Galwan",
    "Main Hoon Hero Tera",
    "Kick Hangover",
    "Bollywood music news",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Teri Sexy Beauty Song: Salman Khan Sings After 11 Years",
    description:
      "Salman Khan sings again after 11 years in Teri Sexy Beauty from Maatrubhumi. Know the song details, fan reactions and release date update.",
    url: "https://www.buzzoriginals.com/salman-khan-teri-sexy-beauty-maatrubhumi-song",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/salman-khan-teri-sexy-beauty-maatrubhumi-song.jpg",
        width: 1024,
        height: 576,
        alt: "Salman Khan Sings Again After 11 Years: Teri Sexy Beauty from Maatrubhumi",
      },
    ],
    type: "article",
    publishedTime: "2026-11-04T13:30:00.000Z",
    authors: ["Buzz Originals Cinema & Music Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teri Sexy Beauty Song: Salman Khan Sings After 11 Years",
    description:
      "Salman Khan sings again after 11 years in Teri Sexy Beauty from Maatrubhumi. Know the song details, fan reactions and release date update.",
    images: ["/images/salman-khan-teri-sexy-beauty-maatrubhumi-song.jpg"],
  },
  alternates: {
    canonical: "/salman-khan-teri-sexy-beauty-maatrubhumi-song",
  },
};

export default function SalmanKhanTeriSexyBeautyPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/salman-khan-teri-sexy-beauty-maatrubhumi-song";
  const pageTitle =
    "Salman Khan Is Singing Again After 11 Years with “Teri Sexy Beauty”";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/salman-khan-teri-sexy-beauty-maatrubhumi-song.jpg",
    ],
    datePublished: "2026-11-04T13:30:00+05:30",
    dateModified: "2026-11-04T13:30:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Cinema & Music Desk",
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
      "Salman Khan sings again after 11 years in Teri Sexy Beauty from Maatrubhumi. Know the song details, fan reactions and release date update.",
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
        name: "Teri Sexy Beauty: Salman Khan Sings After 11 Years",
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
          <span style={{ color: "var(--lavender)" }}>TERI SEXY BEAUTY SALMAN KHAN</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🎵 Music Exclusive</span>
            <span className="badge lime">Salman Khan Sings</span>
            <span className="badge">Maatrubhumi</span>
          </div>

          <h1 className="article-title">
            Salman Khan Is Singing Again After 11 Years with “Teri Sexy Beauty”
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Cinema &amp; Music Desk</span>
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
              src="/images/salman-khan-teri-sexy-beauty-maatrubhumi-song.jpg"
              alt="Salman Khan Sings Again After 11 Years in Teri Sexy Beauty from Maatrubhumi"
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
            Salman Khan returns to playback singing after 11 years alongside Chitrangda Singh in “Teri Sexy Beauty” from Maatrubhumi. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Share Toolbar */}
        <SocialShare url={pageUrl} title={pageTitle} />

        {/* Quick Facts Callout Box */}
        <div
          style={{
            background: "rgba(255, 0, 128, 0.05)",
            border: "1px solid rgba(255, 0, 128, 0.25)",
            borderRadius: "8px",
            padding: "20px",
            margin: "24px 0 32px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              color: "var(--lime)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "8px",
              fontWeight: "bold",
            }}
          >
            ⚡ “Teri Sexy Beauty” Song &amp; Film Breakdown
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              fontSize: "14px",
              lineHeight: "1.7",
              color: "rgba(255, 255, 255, 0.85)",
            }}
          >
            <li>
              <strong>Track Name:</strong> “Teri Sexy Beauty”
            </li>
            <li>
              <strong>Film:</strong> <em>Maatrubhumi: May War Rest in Peace</em> (Directed by Apoorva Lakhia)
            </li>
            <li>
              <strong>Singers:</strong> Salman Khan and Muskaan
            </li>
            <li>
              <strong>Music &amp; Lyrics:</strong> Sajid Khan
            </li>
            <li>
              <strong>Lead Pair:</strong> Salman Khan and Chitrangda Singh (first on-screen collaboration)
            </li>
            <li>
              <strong>Milestone:</strong> Salman Khan’s first film playback singing credit in 11 years since 2015’s <em>Hero</em>
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph">
            <strong>Salman Khan</strong> has caught Bollywood and his millions of fans by surprise once again. The superstar has stepped behind the microphone to lend his own vocals to <strong>“Teri Sexy Beauty,”</strong> the newly unveiled track from his highly awaited military action-drama <em>Maatrubhumi</em>. The song marks Salman Khan’s first time singing in a feature film soundtrack in 11 years.
          </p>

          <p>
            From his unconventional early morning release announcement to his vibrant chemistry opposite Chitrangda Singh, the track has quickly become one of the most talked-about pop-culture drops of the week.
          </p>

          <h2>What Happened? The 5 AM Drop</h2>
          <p>
            Salman dropped the song unannounced early on Wednesday, November 4, 2026. The track went live at around 5 AM IST—an unusually early hour for major Bollywood music launches.
          </p>

          <p>
            Shortly after the release, Salman took to his official handle on X (formerly Twitter) to share the music video with a characteristically witty and humorous caption:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 0, 128, 0.06)",
              padding: "16px 20px",
              margin: "24px 0",
              fontStyle: "italic",
              color: "#fff",
              borderRadius: "0 8px 8px 0",
            }}
          >
            “Departure time 5:12 am…. Flight on time , 2 pegs down taking off with my sexy beauty… pata nahi kahaan mai land karoon #TeriSexyBeauty Out Now”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Salman Khan on X (@BeingSalmanKhan)
            </footer>
          </blockquote>

          <h2>About the Song: Visuals, Sound &amp; Setting</h2>
          <p>
            Here are the full creative details behind <em>Teri Sexy Beauty</em>:
          </p>

          <ul>
            <li>
              <strong>Film:</strong> <em>Maatrubhumi</em>, a high-stakes military drama helmed by director Apoorva Lakhia.
            </li>
            <li>
              <strong>Composition &amp; Words:</strong> Music and lyrics composed by long-time collaborator Sajid Khan.
            </li>
            <li>
              <strong>Playback Vocals:</strong> Sung by Salman Khan alongside co-singer Muskaan.
            </li>
            <li>
              <strong>Official Platform:</strong> Streaming on the Salman Khan Films Music YouTube channel and major audio streaming apps.
            </li>
          </ul>

          <p>
            The video opens in meta fashion, showing Salman Khan walking into a professional recording studio, adjusting his headphones, and taking to the mic. Soon, Chitrangda Singh makes a glamorous entrance playing an electric acoustic guitar draped in a striking red sari.
          </p>

          <p>
            The setting then transitions into a bustling aeroplane hangar. Chitrangda and a troupe of backup dancers sport red retro air hostess outfits while playing brass trumpets. Salman is seen grooving with a battalion of fellow army comrades celebrating their day off, before joining Chitrangda—who plays his character’s wife in the narrative—on the dance floor. This also marks the very first time Salman Khan and Chitrangda Singh are sharing screen space together.
          </p>

          <h2>Salman’s Earlier Songs: An 11-Year Singing Hiatus</h2>
          <p>
            While Salman Khan frequently hums tracks and has released independent singles during the pandemic lockdowns, his last credited playback singing appearances for major film albums came more than a decade ago:
          </p>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              padding: "20px",
              margin: "20px 0 28px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div>
                <strong style={{ color: "var(--lime)" }}>“Main Hoon Hero Tera” (Hero, 2015):</strong> Salman’s romantic ballad was a massive chartbuster and marked his last full-fledged theatrical playback performance until today.
              </div>
              <div>
                <strong style={{ color: "var(--magenta)" }}>“Hangover” (Kick, 2014):</strong> His duet with Shreya Ghoshal from Sajid Nadiadwala’s action blockbuster that dominated airwaves throughout 2014.
              </div>
            </div>
          </div>

          <h2>How Did Fans React?</h2>
          <p>
            Online reaction to the track has been characteristically polarized across social media:
          </p>
          <ul>
            <li>
              <strong>The Bhai Fans:</strong> Loyal fans cheered Salman’s energetic vocals, catchy rhythm, and light-hearted screen charisma, celebrating his return to playback singing after 11 long years.
            </li>
            <li>
              <strong>The 5 AM Humor:</strong> Hundreds of fans on X poked good-natured fun at the 5 AM drop time, playfully urging the superstar to fix his nocturnal sleep routine and questioning who approved a crack-of-dawn song launch.
            </li>
            <li>
              <strong>The Thematic Critique:</strong> Other cinema enthusiasts questioned whether a playful, party-style hangar anthem suited a patriotic war drama inspired by serious border conflicts.
            </li>
          </ul>

          <h2>What Else Is Out from Maatrubhumi?</h2>
          <p>
            “Teri Sexy Beauty” is the latest addition to an already diverse musical roster for <em>Maatrubhumi</em>. The makers had previously unveiled several soulful and stirring patriotic anthems, including:
          </p>
          <ul>
            <li>
              <strong>“Maatrubhumi” (Title Track):</strong> The emotional core of the film, rendered by Shreya Ghoshal and Arijit Singh.
            </li>
            <li>
              <strong>“Main Hoon”:</strong> An evocative soldier’s oath track.
            </li>
            <li>
              <strong>“Chand Dekh Lena”:</strong> A romantic melody highlighting longing on the frontlines.
            </li>
            <li>
              <strong>“Jai Hind”:</strong> A high-energy patriotic battle anthem.
            </li>
          </ul>
          <p>
            Among all the released tracks so far, “Teri Sexy Beauty” stands out as the most upbeat, commercial, and mass-oriented number on the soundtrack.
          </p>

          <h2>Maatrubhumi Release Date: Where Does the Film Stand?</h2>
          <p>
            The film’s journey to the big screen has seen substantial developments:
          </p>
          <p>
            The project was initially titled <em>Battle of Galwan</em>, taking its premise from the deadly June 2020 face-off between Indian and Chinese forces in the Galwan Valley in Eastern Ladakh. The production team later broadened the scope and retitled the epic to <strong>Maatrubhumi: May War Rest in Peace</strong>.
          </p>
          <p>
            Originally slated for theatrical release in April 2026, the film missed its target date. Industry insiders report that certain portions of the film were reshot to balance heavy combat realism with family-oriented emotional resonance. Additionally, the Ministry of Defence reviewed the military portrayal and reportedly granted clearance.
          </p>
          <p>
            While government clearance is reportedly in place, formal certification from the Central Board of Film Certification (CBFC) remains pending. Trade analysts suggest the film could hit cinemas either later this month or in December 2026, though an official release announcement from Salman Khan Films is still awaited.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            Whether you love the unexpected 5 AM timing or the upbeat hangar dance moves, Salman Khan’s return behind the microphone demonstrates that the megastar still loves surprising his audience. “Teri Sexy Beauty” adds a distinct commercial spark to <em>Maatrubhumi</em> as fans count down to the film’s eventual theatrical rollout.
          </p>

          <p>
            <em>
              Stay tuned to Buzz Originals for exclusive music reviews, box office tracking, and verified release date confirmations on Salman Khan’s Maatrubhumi.
            </em>
          </p>
        </div>

        {/* Contextual Read Next Section */}
        <section
          style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "24px",
              color: "#fff",
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Read Next on Buzz Originals
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            <Link
              href="/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "16px",
                display: "block",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "var(--magenta)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                KWK 9 TELL-ALL
              </span>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "8px 0 0",
                  lineHeight: "1.4",
                }}
              >
                Saif Ali Khan Stabbing Night: Kareena Kapoor Opens Up on KWK 9 →
              </h4>
            </Link>

            <Link
              href="/tu-mil-jaaye-ed-sheeran-shah-rukh-khan-king"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "16px",
                display: "block",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "var(--lime)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                MUSIC COLLAB
              </span>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "8px 0 0",
                  lineHeight: "1.4",
                }}
              >
                Tu Mil Jaaye: How Shah Rukh Khan Got Ed Sheeran on King’s First Song →
              </h4>
            </Link>

            <Link
              href="/ramayana-part-2-postponed-2028-namit-malhotra-trilogy"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "8px",
                padding: "16px",
                display: "block",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: "var(--magenta)",
                  fontSize: "11px",
                  fontWeight: "bold",
                  fontFamily: "var(--font-space-mono)",
                }}
              >
                CINEMA SCOOP
              </span>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "8px 0 0",
                  lineHeight: "1.4",
                }}
              >
                Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms Delay and Hints at Trilogy →
              </h4>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
