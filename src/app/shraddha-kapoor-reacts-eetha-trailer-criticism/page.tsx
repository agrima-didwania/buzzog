import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Shraddha Kapoor Reacts to Eetha Trailer Trolling",
  description:
    "Shraddha Kapoor says she won’t handle online criticism after fans questioned her Marathi accent in the Eetha trailer. Here is what she said.",
  keywords: [
    "Shraddha Kapoor",
    "Eetha",
    "Eetha trailer",
    "Shraddha Kapoor Marathi accent",
    "Vithabai Narayangaonkar",
    "Shraddha Kapoor Eetha trolling",
    "Laxman Utekar",
    "Ajay-Atul Eetha",
    "Bollywood gossip",
    "Bollywood news today",
  ],
  alternates: {
    canonical: "/shraddha-kapoor-reacts-eetha-trailer-criticism",
  },
  openGraph: {
    title: "Shraddha Kapoor Reacts to Eetha Trailer Trolling",
    description:
      "Shraddha Kapoor says she won’t handle online criticism after fans questioned her Marathi accent in the Eetha trailer. Here is what she said.",
    url: "https://www.buzzoriginals.com/shraddha-kapoor-reacts-eetha-trailer-criticism",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/shraddha-kapoor-reacts-eetha-trailer-criticism.jpg",
        width: 1200,
        height: 675,
        alt: "Shraddha Kapoor Reacts to Eetha Trailer Trolling: I Can't Even Handle My WhatsApp",
      },
    ],
    type: "article",
    publishedTime: "2026-11-05T06:45:00.000Z",
    authors: ["Buzz Originals Cinema & Bollywood Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shraddha Kapoor Reacts to Eetha Trailer Trolling",
    description:
      "Shraddha Kapoor says she won’t handle online criticism after fans questioned her Marathi accent in the Eetha trailer. Here is what she said.",
    images: ["/images/shraddha-kapoor-reacts-eetha-trailer-criticism.jpg"],
  },
};

export default function ShraddhaKapoorEethaTrollingPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/shraddha-kapoor-reacts-eetha-trailer-criticism";
  const pageTitle =
    "Shraddha Kapoor Reacts to Eetha Trailer Trolling";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/shraddha-kapoor-reacts-eetha-trailer-criticism.jpg",
    ],
    datePublished: "2026-11-05T12:15:00+05:30",
    dateModified: "2026-11-05T12:15:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Cinema & Bollywood Desk",
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
      "Shraddha Kapoor says she won’t handle online criticism after fans questioned her Marathi accent in the Eetha trailer. Here is what she said.",
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
        name: "Shraddha Kapoor Reacts to Eetha Trolling",
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
          <Link href="/bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>SHRADDHA KAPOOR EETHA TROLLING</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">⚡ Trolling Response</span>
            <span className="badge pink">Eetha Trailer</span>
            <span className="badge">Bollywood Exclusive</span>
          </div>

          <h1 className="article-title">
            Shraddha Kapoor Breaks Silence on Eetha Trolling: “I Can’t Even Handle My WhatsApp”
          </h1>

          <div className="article-meta-bar">
            <span>By Buzz Originals Cinema &amp; Bollywood Desk</span>
            <span>·</span>
            <time dateTime="2026-11-05">November 5, 2026</time>
            <span>·</span>
            <span>3 MIN READ</span>
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
              src="/images/shraddha-kapoor-reacts-eetha-trailer-criticism.jpg"
              alt="Shraddha Kapoor Reacts to Eetha Trailer Trolling: I Can't Even Handle My WhatsApp"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 900px"
            />
          </div>
          <figcaption className="article-media-caption">
            Shraddha Kapoor portrays legendary Lavani performer Vithabai Narayangaonkar in Laxman Utekar’s Eetha, releasing December 4, 2026. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Shraddha Kapoor Reacts to Eetha Trailer Trolling"
            url={pageUrl}
          />
        </div>

        {/* Fast Facts Breakdown Box */}
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
            ⚡ Eetha Trailer &amp; Shraddha Kapoor Trolling: Fast Breakdown
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
              <strong>The Controversy:</strong> Online users debated Shraddha’s Marathi accent, dialogue diction, and vocal modulation following the October 30 trailer launch.
            </li>
            <li>
              <strong>Shraddha’s Reaction:</strong> Stated during an Instagram AMA that she doesn&apos;t handle criticism because she “can’t even handle my WhatsApp” and only focuses on work.
            </li>
            <li>
              <strong>Ajay-Atul’s Defense:</strong> Music maestro Ajay Gogavale publicly defended her, praising her authentic pronunciation of ‘Nauvari’ and traditional Marathi roots.
            </li>
            <li>
              <strong>The Biopic:</strong> Chronicles the life of Padma Shri recipient Vithabai Narayangaonkar, Maharashtra’s iconic Lavani and Tamasha maestro.
            </li>
            <li>
              <strong>Theatrical Release:</strong> Releasing worldwide in cinemas on December 4, 2026, clashing alongside Prabhas’s <em>Fauzi</em>.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            <strong>Shraddha Kapoor</strong> has finally reacted to the online noise around her upcoming folk biopic <em>Eetha</em>. Her answer is delightfully simple: she is not here to spar with internet trolls—she is here to focus purely on her craft.
          </p>

          <p>
            Following the release of the film’s grand trailer, debates erupted across social media platforms regarding her Marathi dialect and vocal portrayal of Lavani icon Vithabai Narayangaonkar. During an interactive session with fans, the Bollywood star addressed the chatter with her characteristic wit and breezy candour.
          </p>

          <h2>What Shraddha Kapoor Said</h2>
          <p>
            The actress held an unscripted Ask Me Anything (AMA) session on her official Instagram handle. When a curious follower asked how she handles criticism and harsh trolling in today&apos;s hyper-opinionated digital landscape, her response was funny, unapologetically honest, and very on-brand.
          </p>

          <blockquote>
            “I actually don’t handle criticism. What’s there to handle in that? I can’t even handle my WhatsApp. I don’t even have a manager, nor am I affiliated with any agency. My friends, directors, and producers keep scolding me for not checking my phone.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Shraddha Kapoor via Instagram AMA
            </footer>
          </blockquote>

          <p>
            Unfazed by the digital noise, Shraddha did not stop there. She doubled down on her grounded work ethic, adding:
          </p>

          <blockquote>
            “I’m not interested in handling any criticism. All I want to do is work, and more and more work. That’s it.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Shraddha Kapoor on tuning out social media noise
            </footer>
          </blockquote>

          <h2>Why Is Eetha Getting Criticism?</h2>
          <p>
            The theatrical promo of <em>Eetha</em> was unveiled on October 30 amidst huge fanfare. However, soon after the trailer debuted on YouTube, social media cinephiles and cultural commentators began scrutinizing specific elements of Shraddha’s performance:
          </p>

          <ul>
            <li>
              <strong>Marathi Accent &amp; Diction:</strong> Debates on whether her rural Maharashtrian cadence felt organic or dramatized for mainstream cinema.
            </li>
            <li>
              <strong>Dialogue Delivery:</strong> Scrutiny over the pacing and vocal modulation during high-octane stage monologues.
            </li>
            <li>
              <strong>Voice &amp; Expressions:</strong> Some viewers labelled her dialect “unnatural,” while others noted that portraying a folkloric legend carries immense historical weight where every gesture is examined under a microscope.
            </li>
          </ul>

          <p>
            The discussions gained further traction when{" "}
            <Link
              href="/bhansali-productions-gangubai-post-eetha-trailer-backlash"
              className="text-[var(--lime)] hover:underline font-bold"
            >
              Bhansali Productions shared an archival Gangubai Kathiawadi clip
            </Link>{" "}
            referencing raw screen command, which netizens quickly compared to the ongoing <em>Eetha</em> trailer feedback.
          </p>

          <h2>Not Everyone Agrees: Industry Voices and Fans Back Shraddha</h2>
          <p>
            Despite the localized online scrutiny, the trailer has accumulated massive praise. Millions of viewers applauded Shraddha’s transformation, the lush production design, and the pulsating folk rhythms orchestrated by Ajay-Atul.
          </p>
          <p>
            At the Mumbai trailer launch, national award-winning music composer <strong>Ajay Gogavale</strong> of the celebrated Ajay-Atul duo took to the mic to passionately defend her accent and preparation, particularly in the pivotal Nauvari saree sequence:
          </p>

          <blockquote>
            “There are many ways to say Nauvari. But the accent that Marathi people have when they say Nauvari is very difficult. So, it was important to have her (in the film). The accent is perfect, and it sounds amazing.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Ajay Gogavale (Ajay-Atul) at the Eetha Trailer Launch
            </footer>
          </blockquote>

          <p>
            It is also worth noting that Shraddha possesses deep maternal Marathi roots. Her mother, <strong>Shivangi Kolhapure</strong>, hails from a venerable Marathi musical family, and Shraddha grew up speaking the language and participating in Maharashtrian cultural traditions at home.
          </p>

          <h2>Who Was Vithabai Narayangaonkar?</h2>
          <p>
            <em>Eetha</em> is an ambitious biographical drama chronicling the illustrious, turbulent life of <strong>Vithabai Narayangaonkar</strong>. Born into a community of traditional folk performers, Vithabai transcended deep-rooted social marginalization to become Maharashtra’s most revered Lavani and Tamasha empress.
          </p>
          <p>
            Honoured with the President&apos;s National Award and celebrated across rural and urban circuits alike, her life was marked by fierce independence, artistic grit, and sacrifice. Stepping into the shoes of a cultural icon of this stature is inherently challenging, which explains why cultural enthusiasts are scrutinizing every frame so intensely.
          </p>

          <h2>Eetha: Cast, Director, Clash &amp; Release Date</h2>
          <p>
            Here are the key details about the upcoming release:
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
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "var(--lavender)" }}>
              <div>
                <strong style={{ color: "var(--lime)" }}>Director:</strong> Laxman Utekar (<em>Mimi</em>, <em>Luka Chuppi</em>, <em>Zara Hatke Zara Bachke</em>)
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Lead Role:</strong> Shraddha Kapoor as Vithabai Narayangaonkar
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Ensemble Cast:</strong> Randeep Hooda and Mohammed Zeeshan Ayyub in pivotal dramatic roles
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Producers:</strong> Dinesh Vijan (Maddock Films), Laxman Utekar, and Karishma Sharma
              </div>
              <div>
                <strong style={{ color: "var(--magenta)" }}>Theatrical Release Date:</strong> <strong>December 4, 2026</strong> (previously scheduled for August 28)
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Box Office Clash:</strong> Opens in the same window as Prabhas’s epic actioner <em>Fauzi</em> (December 3) and an Anees Bazmee-directed Akshay Kumar comedy slated for December 4.
              </div>
            </div>
          </div>

          <h2>What Happens Next?</h2>
          <p>
            Rather than getting entangled in social media arguments or hiring PR crisis machinery, Shraddha Kapoor is maintaining a remarkably zen posture. In an era where online trolls often dictate celebrity narratives, her tongue-in-cheek admission that she cannot even stay on top of her WhatsApp messages is a breath of fresh air.
          </p>
          <p>
            The definitive verdict will not be written on Twitter feeds or comment sections—it will be delivered by theatre audiences when{" "}
            <Link
              href="/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar"
              className="text-[var(--lime)] hover:underline font-bold"
            >
              Eetha arrives on the silver screen on December 4, 2026
            </Link>
            .
          </p>
          <p>
            <em>
              Stay tuned to Buzz Originals for in-depth reviews, box office tracking, and exclusive interviews from the sets of Bollywood’s biggest upcoming releases.
            </em>
          </p>
        </div>

        {/* Social Sharing Bar Bottom */}
        <div style={{ margin: "32px 0 24px" }}>
          <SocialShare
            title="Shraddha Kapoor Reacts to Eetha Trailer Trolling"
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
            Related Bollywood Stories
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <Link
              href="/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar"
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
                  src="/images/eetha-trailer-shraddha-kapoor-vithabai-narayangaonkar.jpg"
                  alt="Eetha Trailer Shraddha Kapoor"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge lime" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Trailer Breakdown
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Eetha Trailer: Shraddha Kapoor as Vithabai Narayangaonkar in Folk Biopic
                </h4>
              </div>
            </Link>

            <Link
              href="/bhansali-productions-gangubai-post-eetha-trailer-backlash"
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
                  src="/images/bhansali-productions-gangubai-post-eetha-trailer-backlash.jpg"
                  alt="Bhansali Productions Gangubai Post"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge pink" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Bollywood Viral
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Bhansali Productions Drops Gangubai Clip Amidst Eetha Backlash
                </h4>
              </div>
            </Link>

            <Link
              href="/salman-khan-teri-sexy-beauty-maatrubhumi-song"
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
                  src="/images/salman-khan-teri-sexy-beauty-maatrubhumi-song.jpg"
                  alt="Salman Khan Teri Sexy Beauty Maatrubhumi"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Music Exclusive
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Salman Khan Sings Again After 11 Years with “Teri Sexy Beauty” in Maatrubhumi
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
