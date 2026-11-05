import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sai Pallavi Sita Fight Scene in Ramayana Sparks Debate | Buzz Originals",
  description:
    "Sita fights demons in Ramayana: Rise of a Legend and fans are divided. See what scriptures say and what Nitesh Tiwari explained.",
  keywords: [
    "Sai Pallavi Sita fight scene",
    "Ramayana controversy",
    "Ramayana Rise of a Legend",
    "Nitesh Tiwari Ramayana",
    "Adbhuta Ramayana",
    "Sai Pallavi warrior Sita",
    "Sita fights demons Ramayana",
    "Khara Dushana battle Sita",
    "Valmiki Ramayana vs Adbhuta Ramayana",
    "Ranbir Kapoor Ramayana",
    "Sai Pallavi Ramayana scene",
    "Ramayana movie controversy 2026",
  ],
  alternates: {
    canonical: "/sai-pallavi-sita-fight-scene-ramayana-controversy",
  },
  openGraph: {
    title: "Sai Pallavi Sita Fight Scene in Ramayana Sparks Debate | Buzz Originals",
    description:
      "Sita fights demons in Ramayana: Rise of a Legend and fans are divided. See what scriptures say and what Nitesh Tiwari explained.",
    url: "https://www.buzzoriginals.com/sai-pallavi-sita-fight-scene-ramayana-controversy",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sai-pallavi-sita-fight-scene-ramayana-controversy.jpg",
        width: 1200,
        height: 675,
        alt: "Sai Pallavi Sita Fight Scene in Ramayana Divides the Internet",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Pallavi Sita Fight Scene in Ramayana Sparks Debate",
    description:
      "Sita fights demons in Ramayana: Rise of a Legend and fans are divided. See what scriptures say and what Nitesh Tiwari explained.",
    images: ["/images/sai-pallavi-sita-fight-scene-ramayana-controversy.jpg"],
  },
};

export default function SaiPallaviSitaFightScenePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Sai Pallavi Sita Fight Scene in Ramayana Sparks Debate",
    description:
      "Sita fights demons in Ramayana: Rise of a Legend and fans are divided. See what scriptures say and what Nitesh Tiwari explained.",
    image: [
      "https://www.buzzoriginals.com/images/sai-pallavi-sita-fight-scene-ramayana-controversy.jpg",
    ],
    datePublished: "2026-11-05T08:50:00Z",
    dateModified: "2026-11-05T08:50:00Z",
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
      "@id": "https://www.buzzoriginals.com/sai-pallavi-sita-fight-scene-ramayana-controversy",
    },
    keywords: [
      "Sai Pallavi Sita fight scene",
      "Ramayana controversy",
      "Ramayana Rise of a Legend",
      "Nitesh Tiwari Ramayana",
      "Adbhuta Ramayana",
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
        name: "Sai Pallavi Sita Fight Scene in Ramayana",
        item: "https://www.buzzoriginals.com/sai-pallavi-sita-fight-scene-ramayana-controversy",
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
          <span className="text-[var(--lime)]">Sita Fight Scene Debate</span>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Viral Debate</span>
          <span className="badge pink">Ramayana: Rise of a Legend</span>
          <span className="badge">Sai Pallavi</span>
          <span className="badge">Nitesh Tiwari</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp font-black uppercase tracking-tight text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.15 }}
        >
          Sai Pallavi’s Sita Fight Scene in Ramayana Divides the Internet
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--mist)] border-y border-white/[0.08] py-3 mb-6">
          <span className="text-white font-medium">By Buzz Originals Cinema &amp; Culture Desk</span>
          <span className="dot-sep">◆</span>
          <time dateTime="2026-11-05">November 5, 2026</time>
          <span className="dot-sep">◆</span>
          <span>4 MIN READ</span>
          <span className="dot-sep">◆</span>
          <span className="text-[var(--lime)]">CINEMA DEBATE</span>
        </div>

        {/* Hero Cover Image */}
        <figure className="mb-8">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          >
            <Image
              src="/images/sai-pallavi-sita-fight-scene-ramayana-controversy.jpg"
              alt="Sai Pallavi Sita Fight Scene in Ramayana Sparks Debate"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <figcaption className="text-xs font-mono text-[var(--mist)] text-center mt-2">
            Sai Pallavi as Sita in Nitesh Tiwari’s Ramayana: Rise of a Legend. Her action sequence fighting demons in the forest has sparked heated social media debate. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Share Bar */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/[0.06] text-xs font-mono">
          <span className="text-[var(--mist)] uppercase tracking-wider">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Sai%20Pallavi%20Sita%20Fight%20Scene%20in%20Ramayana%20Sparks%20Debate%20https://www.buzzoriginals.com/sai-pallavi-sita-fight-scene-ramayana-controversy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Sai%20Pallavi%20Sita%20Fight%20Scene%20in%20Ramayana%20Sparks%20Debate&url=https://www.buzzoriginals.com/sai-pallavi-sita-fight-scene-ramayana-controversy"
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
            ⚡ Sita Fight Scene Controversy: Key Takeaways
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
              <strong>The Scene in Question:</strong> In <em>Ramayana: Rise of a Legend</em>, Sai Pallavi’s Sita is depicted fighting demons in the forest alongside Lord Ram during the Khara and Dushana battle.
            </li>
            <li>
              <strong>Online Backlash:</strong> Critics argue that in Valmiki’s Aranyakanda, Lord Ram sent Lakshman and Sita away to a safe cave before defeating the 14,000 demons single-handedly.
            </li>
            <li>
              <strong>Scriptural Basis:</strong> Supporters point to the <em>Adbhuta Ramayana</em>, where Sita is venerated as a fierce incarnation of Goddess Shakti who manifests as Mahakali to conquer evil.
            </li>
            <li>
              <strong>Nitesh Tiwari’s Stance:</strong> Director Nitesh Tiwari clarified in LA that while Lord Ram remains inviolable, borrowing Sita’s warrior dimension from the Adbhuta Ramayana gives her character powerful agency.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Nitesh Tiwari’s magnum opus <strong>Ramayana: Rise of a Legend</strong> is officially in theatres across the globe. But within hours of its theatrical release, one particular creative sequence has ignited a fiery debate across social media feeds.
          </p>

          <p>
            In the scene, <strong>Sai Pallavi’s</strong> Sita is seen actively fighting demons in the Dandakaranya forest. While a segment of viewers has celebrated her fierce, warrior-like agency, traditionalists argue that putting weapons in Sita’s hands departs significantly from the sacred text they grew up reading.
          </p>

          <p>
            Here is the full story, the scriptural roots, and the filmmaker’s explanation in simple words.
          </p>

          <h2>What Is the Fight Scene About?</h2>
          <p>
            The sequence unfolds during the pivotal Dandakaranya forest episode, where Lord Ram confronts the demon generals Khara and Dushana and their menacing battalion. On screen, Sita is shown physically defending herself and taking down attacking demons alongside Ram.
          </p>

          <p>
            Many viewers immediately noted that this does not align with the standard cinematic or literary tellings of the epic. The discussion comes at a time when the film is already receiving divided critical reactions, and Sai Pallavi has faced scrutiny from orthodox circles ever since her casting was announced.
          </p>

          <p>
            Notably, this creative choice was not a complete surprise. An official behind-the-scenes video released by the production house on October 17 had previously teased Sita wielding weapons in a combat-ready avatar.
          </p>

          <h2>What Did the Internet Say?</h2>
          <p>
            The viral storm began gaining traction following a widely-shared post on X (formerly Twitter) on November 3. The post pointed out that in the classical epic, Lord Ram deliberately insulated Sita and Lakshman from the clash:
          </p>

          <blockquote>
            “Ram fought 14,000 demons alone and sent Lakshman and Sita away to safety. Another fraud from #Ramayana, or should I say Scamyana.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Viral criticism on X (Twitter)
            </footer>
          </blockquote>

          <p>
            Other netizens echoed similar objections, claiming that Lord Ram fought the entire demonic army alone and that Sita would never have been permitted onto the chaotic frontline. One user quipped with humour: <em>“First in my bloodline to know that Sita mata fought with demons.”</em>
          </p>

          <h2>Fans Who Back Sita’s Warrior Look</h2>
          <p>
            However, a large faction of moviegoers has come out strongly in defence of the film’s vision. They argued that depicting Sita purely as a passive, helpless damsel does a disservice to her divine divinity.
          </p>

          <p>
            Supporters highlighted alternate canonical texts—specifically the <strong>Adbhuta Ramayana</strong>—where Sita is explicitly celebrated as a powerful warrior manifestation of Goddess Shakti who slays cosmic demons when even the gods falter.
          </p>

          <h2>What Do the Scriptures Say?</h2>
          <p>
            To understand the debate fairly, one has to examine how different versions of the Ramayana treat Sita:
          </p>

          <ul>
            <li>
              <strong>Valmiki Ramayana:</strong> In Maharishi Valmiki’s original Sanskrit text, there is no mention of Sita participating in physical combat during the 14-year forest exile. Lakshman disfigured Surpanakha, both brothers fought the demon Viradha together, and Lord Ram single-handedly destroyed Khara, Dushana, and their 14,000 warriors.
            </li>
            <li>
              <strong>The Khara-Dushana Battle in Aranyakanda:</strong> Valmiki explicitly writes that before engaging Khara’s massive army, Lord Ram instructed Lakshman to escort Sita to a concealed, secure mountain cave for her protection. This directly validates the purists&apos; critique.
            </li>
            <li>
              <strong>Adbhuta Ramayana:</strong> Attributed to sage Valmiki as well, this Shakta-oriented text presents Sita as the supreme Mahakali. When Lord Ram collapses while facing Sahasramukha Ravana (the thousand-headed demon king), Sita assumes her terrifying cosmic warrior form to annihilate the demon army and save the universe. Thus, Sita as a battle-ready deity is deeply rooted in Hindu lore, though the specific forest skirmish in Tiwari&apos;s film adapts this spirit into a new setting.
            </li>
          </ul>

          <h2>What Did Nitesh Tiwari Say?</h2>
          <p>
            Director <strong>Nitesh Tiwari</strong> had preemptively addressed this creative decision during the film&apos;s Los Angeles press premiere prior to the controversy breaking out.
          </p>

          <p>
            Tiwari explained that cinematic adaptations require balancing reverence with narrative dynamism:
          </p>

          <blockquote>
            “She does have action in hers too… Lord Ram stays the same in every version. But some characters allow creative liberties, and drawing Sita’s warrior princess dimension from the Adbhuta Ramayana kind of adds a nice dimension to her as a character.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Nitesh Tiwari explaining Sita’s warrior dimension
            </footer>
          </blockquote>

          <p>
            Tiwari underscored that exploring Sita’s inner resilience and physical strength honors her divine lineage as Janaka’s brave daughter rather than diminishing it.
          </p>

          <h2>About the Film: Fast Facts</h2>
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
                <strong>Title:</strong> Ramayana: Rise of a Legend (Part 1)
              </li>
              <li>
                <strong>Director:</strong> Nitesh Tiwari
              </li>
              <li>
                <strong>Starring:</strong> Ranbir Kapoor (Lord Ram), Sai Pallavi (Sita), Yash (Ravana), Sunny Deol (Hanuman), Ravi Dubey (Lakshman), Lara Dutta (Kaikeyi), Rakul Preet Singh (Surpanakha)
              </li>
              <li>
                <strong>Music &amp; Score:</strong> Hans Zimmer and A.R. Rahman
              </li>
              <li>
                <strong>Budget:</strong> Estimated around ₹4,000 crore across both parts
              </li>
              <li>
                <strong>Theatrical Rollout:</strong> November 5, 2026 worldwide; Part 2 is slated for 2028
              </li>
            </ul>
          </div>

          <h2>Our Take</h2>
          <p>
            The debate ultimately boils down to a timeless dilemma in mythological cinema: should a film strictly mirror Valmiki’s literal verses, or can it weave in traditions from the 300+ diverse Ramayana versions that have enriched Indian culture for centuries?
          </p>

          <p>
            While the forest battle scene takes obvious cinematic liberties with Valmiki’s Aranyakanda, the filmmakers have grounded their creative choice in the philosophical traditions of the Adbhuta Ramayana. Now that the film is running on thousands of screens, the ticket-buying public will deliver the ultimate verdict.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for continuous box office numbers, audience reactions, and in-depth Bollywood analysis.
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
              Related Ramayana &amp; Cinema Coverage
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
                  href="/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Karan Johar Calls Ramayana Part 1 a “Miracle” and Praises Ranbir Kapoor’s Lord Ram
                </Link>
              </li>
              <li>
                <Link
                  href="/ramayana-part-2-postponed-2028-namit-malhotra-trilogy"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ramayana Part 2 Postponed to 2028: Namit Malhotra Confirms, Hints at a Trilogy
                </Link>
              </li>
              <li>
                <Link
                  href="/ramayana-advance-booking-us-jump-la-premiere"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ramayana Advance Booking: US Sales Jump 27% After LA Premiere
                </Link>
              </li>
              <li>
                <Link
                  href="/ramayana-la-premiere-ranbir-kapoor-yash-sai-pallavi"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Inside Ramayana’s LA Premiere: Ranbir Kapoor, Yash &amp; Sai Pallavi Steal the Red Carpet
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {["Ramayana", "Sai Pallavi", "Ranbir Kapoor", "Nitesh Tiwari", "Bollywood News", "Ramayana Controversy"].map(
            (tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[var(--paper)] border border-white/[0.08]"
              >
                #{tag.replace(/\s+/g, "")}
              </span>
            )
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
