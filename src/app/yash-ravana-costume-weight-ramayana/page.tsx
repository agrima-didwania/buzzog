import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg | Buzz Originals",
  description:
    "Costume designer Saniya Sardhariya reveals Yash’s Ravana looks in Ramayana weighed up to 33 kg, and his crown alone was 1.8 kg. Read the full details.",
  keywords: [
    "Yash Ravana costume",
    "Ramayana Yash look",
    "Saniya Sardhariya",
    "Ravana crown weight",
    "Ramayana Nitesh Tiwari",
    "Ranbir Kapoor",
    "Yash",
    "House of Amrapali Yash jewellery",
    "Ramayana movie Yash Ravana",
    "Bollywood costume design",
  ],
  alternates: {
    canonical: "/yash-ravana-costume-weight-ramayana",
  },
  openGraph: {
    title: "Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg | Buzz Originals",
    description:
      "Costume designer Saniya Sardhariya reveals Yash’s Ravana looks in Ramayana weighed up to 33 kg, and his crown alone was 1.8 kg. Read the full details.",
    url: "https://www.buzzoriginals.com/yash-ravana-costume-weight-ramayana",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/yash-ravana-costume-weight-ramayana.jpg",
        width: 1200,
        height: 675,
        alt: "Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg",
    description:
      "Costume designer Saniya Sardhariya reveals Yash’s Ravana looks in Ramayana weighed up to 33 kg, and his crown alone was 1.8 kg. Read the full details.",
    images: ["/images/yash-ravana-costume-weight-ramayana.jpg"],
  },
};

export default function YashRavanaCostumeWeightPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg",
    description:
      "Costume designer Saniya Sardhariya reveals Yash’s Ravana looks in Ramayana weighed up to 33 kg, and his crown alone was 1.8 kg. Read the full details.",
    image: [
      "https://www.buzzoriginals.com/images/yash-ravana-costume-weight-ramayana.jpg",
    ],
    datePublished: "2026-11-10T05:35:00Z",
    dateModified: "2026-11-10T05:35:00Z",
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
      "@id": "https://www.buzzoriginals.com/yash-ravana-costume-weight-ramayana",
    },
    keywords: [
      "Yash Ravana costume",
      "Ramayana Yash look",
      "Saniya Sardhariya",
      "Ravana crown weight",
      "Ramayana Nitesh Tiwari",
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
        name: "Yash Ravana Costume Weight",
        item: "https://www.buzzoriginals.com/yash-ravana-costume-weight-ramayana",
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
          <span className="text-[var(--lime)]">Yash Ravana Costume in Ramayana</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Exclusive Reveal</span>
          <span className="badge pink">Ramayana 2026</span>
          <span className="badge">Yash as Ravana</span>
          <span className="badge">Costume Design</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-10">November 10, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">RAMAYANA SCOOP</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/yash-ravana-costume-weight-ramayana.jpg"
            alt="Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Rocking Star Yash as Ravana in Nitesh Tiwari’s Ramayana: costume designer Saniya Sardhariya reveals the mind-boggling craft, 1.8 kg crown, and 33 kg royal armor. (Photo: Buzz Originals / DNEG)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Yash’s%20Ravana%20Costume%20in%20Ramayana%20Weighed%20Up%20to%2033%20kg%20-%20https://www.buzzoriginals.com/yash-ravana-costume-weight-ramayana"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Yash’s%20Ravana%20Costume%20in%20Ramayana%20Weighed%20Up%20to%2033%20kg&url=https://www.buzzoriginals.com/yash-ravana-costume-weight-ramayana"
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
            <span>Yash as Ravana: Costume &amp; Weight Fast Facts</span>
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
              <strong>Standard Outfits:</strong> Most of Yash&apos;s looks weighed between <strong>16 and 20 kg</strong>, including heavy fabrics and baseline armour.
            </li>
            <li>
              <strong>Heaviest Costumes (30 to 33 kg):</strong> Three specific royal looks reached an estimated 30–33 kg: the primary Lanka court look, his wedding costume, and the attire worn for Surpanakha&apos;s wedding.
            </li>
            <li>
              <strong>The 1.8 kg Crown:</strong> The hardest piece to create; designed using multiple 3D mockups before trimming down to 1.8 kg, the absolute lightest possible limit.
            </li>
            <li>
              <strong>6 to 7 kg of Royal Jewellery:</strong> Crafted by the heritage jewellers <strong>House of Amrapali</strong> in collaboration with costume stylist Saniya Sardhariya.
            </li>
            <li>
              <strong>Yash&apos;s Reaction:</strong> Maintained high energy on set and joked with the crew about his sharp armour edges, stating: <em>“My heavy, grand crown helped me get into the role every single day.”</em>
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Rocking Star Yash&apos;s imposing portrayal of Ravana in Nitesh Tiwari&apos;s <em>Ramayana</em> has captivated audiences since the first glimpse was revealed. Beyond the visual grandeur and ferocious screen presence, the sheer physical dedication behind his transformation is now coming to light—and the numbers are truly staggering.
          </p>

          <p>
            Renowned costume designer <strong>Saniya Sardhariya</strong>, who conceptualized the look alongside an elite crew of artisans, spoke to <em>India Today</em> about the monumental weight of Yash&apos;s outfits. From hand-carved crowns to authentic metallic breastplates, here is the full breakdown of how Yash brought the King of Lanka to life.
          </p>

          <h2>How Heavy Were the Costumes?</h2>
          <p>
            According to Saniya, stepping into Ravana&apos;s shoes required carrying unprecedented physical baggage. Most of Yash&apos;s standard sequences required him to wear outfits that tipped the scales at well over a dozen kilograms.
          </p>

          <p>
            Her words:
          </p>

          <blockquote>
            “Most of the costumes used to weigh around 16 to 20 kg, jewellery included.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Saniya Sardhariya, Costume Designer
            </footer>
          </blockquote>

          <p>
            However, three key cinematic sequences pushed the boundaries of period costume engineering, requiring outfits weighing an astonishing <strong>30 to 33 kg</strong>:
          </p>

          <ul>
            <li><strong>The Core Lanka Look:</strong> The dark-gold and obsidian armour associated with his seat of power in Lanka.</li>
            <li><strong>The Royal Wedding Costume:</strong> An opulent ceremonial robe woven with dense metallic threads, bullion embroidery, and precious stone settings.</li>
            <li><strong>Surpanakha’s Wedding Attire:</strong> The celebratory, heavily layered dynastic look worn during his sister Surpanakha’s wedding festivities.</li>
          </ul>

          <p>
            Saniya clarified that because of the layered metals, natural stones, and multi-piece draping, 30–33 kg is an estimate, with the exact load varying slightly across shooting days.
          </p>

          <h2>The Crown Was the Hardest Part: 1.8 kg on the Head</h2>
          <p>
            While bearing 30 kg on the shoulders and chest is strenuous, bearing excessive weight directly on the skull poses extreme fatigue and balance hazards for an actor during long 12-hour shooting shifts.
          </p>

          <p>
            Saniya revealed that Ravana&apos;s iconic <em>Mukut</em> (crown) was easily the toughest item to construct:
          </p>

          <blockquote>
            “Even a little weight on the head feels tiring after just a few minutes. We made multiple 3D mock crowns first to test the balance and weight distribution, and then worked backwards using specialized alloys to shave off every gram possible.”
          </blockquote>

          <p>
            In the end, the royal crown settled at <strong>1.8 kg</strong>. The design team determined that making it any lighter would have compromised its structural integrity, sharp architectural spires, and rich metallic texture. Impressively, Yash never once complained or let the physical strain reflect on his face while the cameras were rolling.
          </p>

          <h2>Jewellery Alone Was 6 to 7 kg: House of Amrapali Craftsmanship</h2>
          <p>
            A separate report quoting an interview with <em>Variety India</em> detailed that Yash&apos;s bespoke jewellery suite alone accounted for <strong>6 to 7 kg</strong> of weight.
          </p>

          <p>
            The jewellery—spanning intricate armlets (<em>bajuband</em>), layered neckplates (<em>hansli</em>), signet rings, and jewel-encrusted waistbands—was crafted in partnership with the prestigious <strong>House of Amrapali</strong>, with Saniya serving as lead costume stylist. Authentic heritage techniques were deployed to reflect the mythical wealth of the Golden City of Lanka.
          </p>

          <h2>Yash Had Fun on Set: Making Sharp Edges “Everyone’s Problem”</h2>
          <p>
            Naturally, wearing over 30 kg of metal, brocade, and jewels restricted Yash’s physical agility between shots. Yet, the <em>KGF</em> superstar took the challenge in his stride and kept spirits high on set.
          </p>

          <p>
            Saniya recalled that Yash quickly grasped how demanding the ensemble was. Rather than retreat into a private vanity van, he embraced the persona and regularly teased the crew and assistant directors, playfully bumping his sharp shoulder spikes and crown points against them to make the costume “everyone’s problem” and keep the atmosphere lively.
          </p>

          <h2>Yash on the Crown: Channeling Ravana’s Grandeur</h2>
          <p>
            Yash himself has reflected warmly on the transformative experience of embodying Indian mythology’s most complex antihero. Describing the mental shift required, Yash remarked:
          </p>

          <blockquote>
            “My heavy, grand crown helped me get into the role every single day. The moment that weight rested on my head, I wasn’t just playing a character—I was standing in the shoes of Ravana.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Yash on playing Ravana in Ramayana
            </footer>
          </blockquote>

          <h2>About Nitesh Tiwari’s Ramayana Magnum Opus</h2>
          <p>
            Directed by National Award-winning filmmaker <strong>Nitesh Tiwari</strong>, <em>Ramayana</em> stands as one of the most ambitious and expensive cinematic undertakings in Indian film history.
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
                gap: "10px",
                fontSize: "15px",
              }}
            >
              <li>✦ <strong>Ranbir Kapoor:</strong> Portraying Lord Ram</li>
              <li>✦ <strong>Sai Pallavi:</strong> Portraying Sita Mata</li>
              <li>✦ <strong>Yash:</strong> Portraying Lankesh / Ravana</li>
              <li>✦ <strong>Ravie Dubey:</strong> Portraying Lakshman</li>
              <li>✦ <strong>Producers:</strong> Namit Malhotra (Prime Focus / DNEG) and Yash via his banner <strong>Monster Mind Creations</strong></li>
              <li>✦ <strong>Music Maestros:</strong> Academy Award winners <strong>AR Rahman</strong> and <strong>Hans Zimmer</strong></li>
              <li>✦ <strong>Release Roadmap:</strong> Part One is scheduled for <strong>Diwali 2026</strong>, while Part Two will arrive in <strong>Diwali 2028</strong>.</li>
            </ul>
          </div>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for daily unfiltered reporting, behind-the-scenes exclusives, and complete box office tracking from the world of Indian cinema.
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
              Related Ramayana &amp; Bollywood Stories
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
                  href="/sai-pallavi-sita-fight-scene-ramayana-controversy"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sai Pallavi Sita Fight Scene in Ramayana Divides the Internet: Scriptural Context &amp; Debate
                </Link>
              </li>
              <li>
                <Link
                  href="/karan-johar-ramayana-part-1-review-ranbir-kapoor-yash"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Karan Johar Calls Ramayana Part 1 a “Miracle”: Praises Ranbir Kapoor &amp; Yash’s Ravana
                </Link>
              </li>
              <li>
                <Link
                  href="/ramayana-part-2-postponed-2028-namit-malhotra-trilogy"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ramayana Part 2 Locked for Diwali 2028: Namit Malhotra Confirms Multi-Part Epic Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/diljit-dosanjh-aura-india-tour-chandigarh-kolkata-dates"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Diljit Dosanjh Adds Chandigarh and Kolkata Shows to Aura India Tour 2026: Full Schedule
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Yash",
            "Ravana",
            "Ramayana",
            "Ranbir Kapoor",
            "Sai Pallavi",
            "Saniya Sardhariya",
            "House of Amrapali",
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
