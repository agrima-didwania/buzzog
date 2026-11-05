import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Karan Johar’s Ramayana Part 1 Review: “Miracle”",
  description:
    "Karan Johar has shared a long Instagram note on Ramayana Part 1. Here is what he said about Ranbir Kapoor, Sai Pallavi, Yash and Ravie Dubey.",
  keywords: [
    "Karan Johar Ramayana Part 1 review",
    "Ramayana Part 1",
    "Karan Johar Ramayana",
    "Ramayana Part 1 review",
    "Ranbir Kapoor Lord Ram",
    "Yash Ravana",
    "Sai Pallavi Sita",
    "Ramayana Part 1 reaction",
    "Bollywood news today",
    "Karan Johar reaction to Ramayana",
    "What did Karan Johar say about Ramayana",
    "Karan Johar praises Ranbir Kapoor",
    "Ramayana Part 1 release date",
    "Ramayana Part 1 cast",
    "Ramayana Part 2 release date",
    "Ranbir Kapoor Ramayana review",
  ],
  alternates: {
    canonical: "/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash",
  },
  openGraph: {
    title: "Karan Johar’s Ramayana Part 1 Review: “Miracle”",
    description:
      "Karan Johar has shared a long Instagram note on Ramayana Part 1. Here is what he said about Ranbir Kapoor, Sai Pallavi, Yash and Ravie Dubey.",
    url: "https://www.buzzoriginals.com/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash.jpg",
        width: 1200,
        height: 675,
        alt: "Karan Johar Calls Ramayana Part 1 a Miracle and Praises Ranbir Kapoor’s Lord Ram",
      },
    ],
    type: "article",
    publishedTime: "2026-11-05T07:00:00.000Z",
    authors: ["Buzz Originals Cinema Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Johar’s Ramayana Part 1 Review: “Miracle”",
    description:
      "Karan Johar has shared a long Instagram note on Ramayana Part 1. Here is what he said about Ranbir Kapoor, Sai Pallavi, Yash and Ravie Dubey.",
    images: ["/images/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash.jpg"],
  },
};

export default function KaranJoharRamayanaReviewPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash";
  const pageTitle =
    "Karan Johar’s Ramayana Part 1 Review: “Miracle”";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash.jpg",
    ],
    datePublished: "2026-11-05T12:30:00+05:30",
    dateModified: "2026-11-05T12:30:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Cinema Desk",
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
      "Karan Johar has shared a long Instagram note on Ramayana Part 1. Here is what he said about Ranbir Kapoor, Sai Pallavi, Yash and Ravie Dubey.",
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
        name: "Karan Johar Ramayana Part 1 Review",
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
          <span style={{ color: "var(--lavender)" }}>KARAN JOHAR RAMAYANA REVIEW</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">✨ Industry Verdict</span>
            <span className="badge pink">Karan Johar Review</span>
            <span className="badge">Ramayana Release Day</span>
          </div>

          <h1 className="article-title">
            Karan Johar Calls Ramayana Part 1 a “Miracle” and Praises Ranbir Kapoor’s Lord Ram
          </h1>

          <div className="article-meta-bar">
            <span>By Buzz Originals Cinema &amp; Entertainment Desk</span>
            <span>·</span>
            <time dateTime="2026-11-05">November 5, 2026</time>
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
              src="/images/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash.jpg"
              alt="Karan Johar Calls Ramayana Part 1 a Miracle and Praises Ranbir Kapoor, Sai Pallavi, Yash and Ravie Dubey"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 900px"
            />
          </div>
          <figcaption className="article-media-caption">
            Filmmaker Karan Johar hails Nitesh Tiwari’s Ramayana: Part 1 as a cinematic miracle, praising Ranbir Kapoor’s meditative Lord Ram and Yash’s mesmerizing Ravana. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Karan Johar’s Ramayana Part 1 Review: “Miracle”"
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
            ⚡ Karan Johar on Ramayana Part 1: Key Takeaways
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
              <strong>The “Miracle” Verdict:</strong> Karan Johar declared the cinematic adaptation “no short of a Miracle,” saluting producer Namit Malhotra and director Nitesh Tiwari for conviction and craft.
            </li>
            <li>
              <strong>Ranbir Kapoor as Shri Ram:</strong> Praised his portrayal as “deeply MEDITATIVE,” noting his eyes do all the heavy lifting without needing theatrical bells and whistles.
            </li>
            <li>
              <strong>Sai Pallavi as Sita Ma:</strong> Described her as “divine, sublime and so beautifully convincing,” portraying unconditional love and sacrifice.
            </li>
            <li>
              <strong>Yash as Ravana:</strong> Highlighted the Rocking Star&apos;s magnetic screen presence: “MESMERISING and POWERFULL... Mega stardom is just in your DNA!”
            </li>
            <li>
              <strong>Business Distribution Connection:</strong> Karan&apos;s Dharma Productions is spearheading the theatrical distribution of the mythological epic across the Hindi-speaking territory.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            <strong>Ramayana: Part 1</strong> is officially in theatres worldwide, and Bollywood is already buzzing with high-profile industry verdicts. Leading Bollywood filmmaker <strong>Karan Johar</strong> took to Instagram on release morning to share a heartfelt, extensive review of the epic mythological spectacle.
          </p>

          <p>
            Calling the film a triumph of storytelling, Karan’s note represents one of the earliest and most passionate reactions from inside the film fraternity. From breaking down Ranbir Kapoor’s subtle character choices to praising Yash’s electrifying aura, Johar delivered high praise for everyone who brought the grand vision to life.
          </p>

          <h2>What Karan Johar Said About Ramayana</h2>
          <p>
            Karan began his note by reflecting on the cultural gravitas that the epic holds for millions of Indian households across generations:
          </p>

          {/* User Requested Instagram Post Image Embed */}
          <figure
            style={{
              margin: "28px auto",
              maxWidth: "520px",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--line)",
              background: "var(--ink-2)",
              boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 4" }}>
              <Image
                src="/images/karan-johar-instagram-post-ramayana-part-1.jpg"
                alt="Karan Johar Instagram post review note praising Ramayana Part 1"
                fill
                style={{ objectFit: "contain", background: "#000" }}
                sizes="(max-width: 600px) 100vw, 520px"
              />
            </div>
            <figcaption
              style={{
                padding: "10px 16px",
                fontSize: "12px",
                fontFamily: "var(--font-space-mono)",
                color: "#a1a1aa",
                background: "var(--ink-3)",
                borderTop: "1px solid var(--line)",
                textAlign: "center",
              }}
            >
              Filmmaker Karan Johar’s full Instagram post review on Ramayana: Part 1, calling the adaptation a “Miracle”. (Photo: Karan Johar / Instagram)
            </figcaption>
          </figure>

          <blockquote>
            “RAMAYANA ..... a story immersed in our cultural veins… a story generations have grown up on… a story that is an embodiment of Values, traditions and pure humanity….”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar on Instagram
            </footer>
          </blockquote>

          <p>
            Describing his awe upon seeing the ancient Sanskrit epic translated onto modern IMAX screens, he added:
          </p>

          <blockquote>
            “You have read it, seen it, told it… and YET to be BLOWN away by its cinematic adaptation is no short of a Miracle! I salute, I applaud and I have the deepest respect for each and every team member of Ramayana…. All of us can dream it… they actually went out and achieved it!!!!”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar on Ramayana Part 1
            </footer>
          </blockquote>

          <p>
            He specifically credited producer <strong>Namit Malhotra</strong> and director <strong>Nitesh Tiwari</strong> by name. Karan noted that Namit inspired him “to be brave, to be audacious and to stand for the most essential ingredient of a creator…. CONVICTION!!” He also praised Nitesh Tiwari’s “immaculate craft and solid confidence to tell a simple story so simply and yet soo solidly.”
          </p>

          <h2>Karan Johar on Ranbir Kapoor as Lord Ram</h2>
          <p>
            The bulk of Karan’s emotional note was reserved for his frequent collaborator and close friend <strong>Ranbir Kapoor</strong>, who steps into the monumental role of Lord Ram.
          </p>

          <blockquote>
            “Ranbir… to be able to make a country believe in you as a divine force of goodness and humanity without any bells and whistles … without and frills and fancies takes immeasurable talent and you my dearest friend are a gifted artist and beyond…. you are deeply MEDITATIVE in your portrayal or Shri Ram… your eyes do alll the heavy lifting… its your most challenging role ever and you have mega succeeded with divine PERFECTION….”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar on Ranbir Kapoor’s Lord Ram
            </footer>
          </blockquote>

          <p>
            Put simply, Karan believes Ranbir interprets Lord Ram through a calm, internal, and meditative restraint rather than melodramatic excess—making the divinity feel deeply human and emotionally grounded.
          </p>

          <h2>Karan Johar on Sai Pallavi as Sita</h2>
          <p>
            Karan was equally enamoured with <strong>Sai Pallavi</strong>, who makes her major Hindi cinema debut as Goddess Sita:
          </p>

          <blockquote>
            “Sai… you are divine, sublime and so so beautifully convincing in your portrayal of Sita Ma… @saipallavi.senthamarai …. The agency of the portrayal is so heartening and you made me believe in the power of your sacrifice and unconditional love … so brilliant!”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar on Sai Pallavi
            </footer>
          </blockquote>

          <h2>Karan Johar on Yash as Ravana</h2>
          <p>
            Kannada superstar <strong>Yash</strong> commands the screen as the formidable Lankesh, Ravana. Karan lauded his magnetic persona:
          </p>

          <blockquote>
            “AND @thenameisyash you are so so MESMERISING and POWERFULL!!! Each and every time you appear on screen, you command attention and applause…. Mega stardom is just in your DNA!!!!”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar on Yash as Ravana
            </footer>
          </blockquote>

          <p>
            He also highlighted a standout sequence in the film: “Special mention to the applaudable sequence of Ravana and his multiple inner voices …. Outstanding!”
          </p>

          <h2>Karan Johar on Ravie Dubey as Laxman</h2>
          <p>
            Television and OTT stalwart <strong>Ravie Dubey</strong>, who plays Lakshman, also earned high praise from the filmmaker. Johar wrote:
          </p>

          <blockquote>
            “Ravi Dubey @ravidubey2312 is so BRILLIANT as LAXMAN! The depiction of a loyal and loving brother is so heartening and your goodness ( both internal and external ) moved me and made me smile wide….”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar on Ravie Dubey
            </footer>
          </blockquote>

          <h2>Karan’s Direct Message to the Audience</h2>
          <p>
            Summarizing his overwhelming emotional experience, Karan concluded his note with an impassioned call to cinema lovers:
          </p>

          <blockquote>
            “To every actor ( terrific ensemble) … to every technician… to each and every team member of this EPIC!!! Huge congratulations !!!! Am an inspired filmmaker and a proud Indian cinegoer today… GO WATCH this divine blessing of a film with your families as soon as you can”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar
            </footer>
          </blockquote>

          <h2>Karan Johar’s Business Link to Ramayana</h2>
          <p>
            Beyond his creative admiration, Karan Johar also holds a substantial commercial stake in the project. His studio, <strong>Dharma Productions</strong>, is distributing <em>Ramayana: Part 1</em> across the Hindi-speaking theatrical territory in India, while Sony Pictures handles global and overseas release networks.
          </p>
          <p>
            Earlier on November 1, Johar had posted a cryptic teaser note on his Instagram Story after an early private cut: <em>“Mind is blown! Won’t say anymore! All I will say is that it’s going to be a very, very exceptionally HAPPY DIWALI.”</em> This full post marks his complete public endorsement now that ticket gates are open.
          </p>

          <h2>What Early Viewers Said Before Release</h2>
          <p>
            While Karan’s review is effusively positive, reactions from an earlier private screening in Los Angeles presented a more nuanced picture. While critics in Hollywood hailed the visual scale, VFX fidelity, and Hans Zimmer’s evocative background score, a few observers felt certain narrative transitions felt measured.
          </p>
          <p>
            Now that the film has rolled out across thousands of screens in India with historic{" "}
            <Link
              href="/ramayana-advance-booking-73-crore-ranbir-kapoor"
              className="text-[var(--lime)] hover:underline font-bold"
            >
              advance booking numbers exceeding ₹73 crore
            </Link>
            , regular ticket-paying audiences will deliver the final verdict.
          </p>

          <h2>About Ramayana: Part 1 &amp; Future Sequels</h2>
          <p>
            Here are the verified production and creative details for <em>Ramayana: Part 1</em>:
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
                <strong style={{ color: "var(--lime)" }}>Director:</strong> Nitesh Tiwari (<em>Dangal</em>, <em>Chhichhore</em>)
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Key Cast:</strong> Ranbir Kapoor (Lord Ram), Sai Pallavi (Sita), Yash (Ravana), Sunny Deol (Lord Hanuman), Ravie Dubey (Lakshman), Lara Dutta (Kaikeyi), Arun Govil (King Dasharatha).
              </div>
              <div>
                <strong style={{ color: "var(--magenta)" }}>Theatrical Release:</strong> November 5, 2026 worldwide in 2D, 3D and IMAX 3D.
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Part 2 Timeline:</strong> Producer Namit Malhotra confirmed that{" "}
                <Link
                  href="/ramayana-part-2-postponed-2028-namit-malhotra-trilogy"
                  className="text-[var(--lime)] hover:underline font-bold"
                >
                  Ramayana Part 2 is now slated for 2028
                </Link>
                , with discussions underway to expand the saga into a grand trilogy depending on audience reception.
              </div>
              <div>
                <strong style={{ color: "#fff" }}>Fun Trivia:</strong> Yash previously confirmed that he and Ranbir Kapoor share zero screen time in Part 1, as the narrative establishes Lord Ram’s exile in Ayodhya and Dandakaranya while Ravana’s golden Lanka is set up concurrently.
              </div>
            </div>
          </div>

          <h2>Final Word</h2>
          <p>
            For a cinematic event as colossal as <em>Ramayana</em>, early industry reactions set the tone for opening weekend momentum. Karan Johar’s passionate endorsement cements the epic as one of the defining cinematic occasions of 2026.
          </p>
          <p>
            <em>
              Stay tuned to Buzz Originals for ongoing box office tracking, live audience reactions, and in-depth scene breakdowns of Ramayana: Part 1.
            </em>
          </p>
        </div>

        {/* Social Sharing Bar Bottom */}
        <div style={{ margin: "32px 0 24px" }}>
          <SocialShare
            title="Karan Johar’s Ramayana Part 1 Review: “Miracle”"
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
            Related Ramayana &amp; Bollywood Coverage
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <Link
              href="/ramayana-part-2-postponed-2028-namit-malhotra-trilogy"
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
                  src="/images/ramayana-part-2-postponed-2028-namit-malhotra-trilogy.jpg"
                  alt="Ramayana Part 2 Postponed to 2028"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge pink" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Ramayana Sequel Scoop
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms Delay and Hints at Trilogy
                </h4>
              </div>
            </Link>

            <Link
              href="/ramayana-advance-booking-73-crore-ranbir-kapoor"
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
                  src="/images/ramayana-advance-booking-73-crore-ranbir-kapoor.jpg"
                  alt="Ramayana Advance Booking 73 Crore"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge lime" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Box Office Record
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Ramayana Advance Booking Crosses ₹73.40 Crore in India Ahead of Historic Opening Day
                </h4>
              </div>
            </Link>

            <Link
              href="/shraddha-kapoor-reacts-eetha-trailer-criticism"
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
                  src="/images/shraddha-kapoor-reacts-eetha-trailer-criticism.jpg"
                  alt="Shraddha Kapoor Reacts to Eetha Trolling"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <span className="badge" style={{ fontSize: "10px", marginBottom: "8px" }}>
                  Bollywood Viral
                </span>
                <h4 style={{ fontSize: "15px", fontWeight: "bold", color: "#fff", marginTop: "6px" }}>
                  Shraddha Kapoor Breaks Silence on Eetha Trolling: “I Can’t Even Handle My WhatsApp”
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
