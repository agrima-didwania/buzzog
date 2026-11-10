import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral | Buzz Originals",
  description:
    "Ananya Panday shared a photo with Aarav Bhatia from Manish Malhotra’s Diwali party with the caption “My heart.” Here is what we know.",
  keywords: [
    "Ananya Panday Aarav Bhatia",
    "Ananya Panday My Heart post",
    "Aarav Bhatia Akshay Kumar son",
    "Ananya Panday Diwali 2026",
    "Manish Malhotra Diwali party 2026",
    "Ananya Panday Shava Shava lehenga",
    "Are Ananya Panday and Aarav Bhatia dating",
    "Who is Aarav Bhatia",
    "Ananya Panday My Heart caption meaning",
    "Ananya Panday Rani Mukerji K3G look",
    "Ananya Panday Karan Johar Diwali puja",
    "Akshay Kumar son Aarav Bhatia photo",
    "Bollywood news",
    "Bollywood gossip",
  ],
  alternates: {
    canonical: "/ananya-panday-aarav-bhatia-my-heart-post",
  },
  openGraph: {
    title: "Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral | Buzz Originals",
    description:
      "Ananya Panday shared a photo with Aarav Bhatia from Manish Malhotra’s Diwali party with the caption “My heart.” Here is what we know.",
    url: "https://www.buzzoriginals.com/ananya-panday-aarav-bhatia-my-heart-post",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ananya-panday-aarav-bhatia-my-heart-post.jpg",
        width: 1200,
        height: 675,
        alt: "Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral",
    description:
      "Ananya Panday shared a photo with Aarav Bhatia from Manish Malhotra’s Diwali party with the caption “My heart.” Here is what we know.",
    images: ["/images/ananya-panday-aarav-bhatia-my-heart-post.jpg"],
  },
};

export default function AnanyaPandayAaravBhatiaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral",
    description:
      "Ananya Panday shared a photo with Aarav Bhatia from Manish Malhotra’s Diwali party with the caption “My heart.” Here is what we know.",
    image: [
      "https://www.buzzoriginals.com/images/ananya-panday-aarav-bhatia-my-heart-post.jpg",
    ],
    datePublished: "2026-11-10T06:15:00Z",
    dateModified: "2026-11-10T06:15:00Z",
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
      "@id": "https://www.buzzoriginals.com/ananya-panday-aarav-bhatia-my-heart-post",
    },
    keywords: [
      "Ananya Panday Aarav Bhatia",
      "Ananya Panday My Heart post",
      "Aarav Bhatia Akshay Kumar son",
      "Ananya Panday Diwali 2026",
      "Manish Malhotra Diwali party 2026",
      "Ananya Panday Shava Shava lehenga",
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
        name: "Ananya Panday & Aarav Bhatia Post",
        item: "https://www.buzzoriginals.com/ananya-panday-aarav-bhatia-my-heart-post",
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
          <span className="text-[var(--lime)]">Ananya Panday &amp; Aarav Bhatia</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Viral Scoop</span>
          <span className="badge pink">Diwali 2026</span>
          <span className="badge">Ananya Panday</span>
          <span className="badge">Aarav Bhatia</span>
          <span className="badge">Manish Malhotra Party</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-10">November 10, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD BUZZ</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/ananya-panday-aarav-bhatia-my-heart-post.jpg"
            alt="Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Ananya Panday sent social media into overdrive after sharing an intimate Diwali snapshot alongside Akshay Kumar’s son Aarav Bhatia with the caption “My heart ❤️”. (Photo: Buzz Originals / Instagram)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Ananya%20Panday’s%20“My%20Heart”%20Post%20With%20Aarav%20Bhatia%20Goes%20Viral%20-%20https://www.buzzoriginals.com/ananya-panday-aarav-bhatia-my-heart-post"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Ananya%20Panday’s%20“My%20Heart”%20Post%20With%20Aarav%20Bhatia%20Goes%20Viral&url=https://www.buzzoriginals.com/ananya-panday-aarav-bhatia-my-heart-post"
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
            <span>Ananya Panday &amp; Aarav Bhatia: Key Takeaways</span>
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
              <strong>The Viral Photo:</strong> Ananya Panday posted a cozy picture with Aarav Bhatia, son of Akshay Kumar and Twinkle Khanna, from Manish Malhotra’s Diwali 2026 party with the caption: <em>“My heart ❤️”</em>.
            </li>
            <li>
              <strong>Coordinated Festive Looks:</strong> The duo twinned seamlessly in festive finery—Ananya in an ethereal silver ensemble and Aarav looking sharp in an ivory embroidered traditional kurta.
            </li>
            <li>
              <strong>Relationship Speculation:</strong> While dating rumors instantly ignited across social media, neither Ananya nor Aarav has confirmed a romance, and they share close circle friendships.
            </li>
            <li>
              <strong>London Connection:</strong> Internet detectives pointed out that the two were also spotted together in London this past October enjoying artisanal bakery treats.
            </li>
            <li>
              <strong>K3G Nostalgia Lehenga:</strong> Ananya recreated Rani Mukerji’s iconic <em>“Shava Shava”</em> look from <em>Kabhi Khushi Kabhie Gham</em> (2001), designed by Manish Malhotra, and even performed the signature hook steps.
            </li>
            <li>
              <strong>Festive Circuit:</strong> Ananya later attended Karan Johar’s Dharma Productions Diwali puja wearing her mother Bhavna Pandey’s vintage 20-year-old mauve outfit.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Ananya Panday’s Diwali 2026 celebrations are commanding massive attention across social media. While fans and fashion critics were busy raving over her festive wardrobe choices, one particular photograph sent social feeds into total meltdown.
          </p>

          <p>
            In the viral snapshot, Ananya posed warmly alongside Aarav Bhatia, the 24-year-old son of Bollywood superstar Akshay Kumar and author Twinkle Khanna. Her caption was succinct yet electric: just two words—<em>“My heart.”</em>
          </p>

          <p>
            Here is everything we know so far about the picture, the star-studded event, and the romance chatter dominating Bollywood circles.
          </p>

          <h2>What Is the Ananya Panday and Aarav Bhatia Photo?</h2>
          <p>
            The picture was clicked at celebrated Bollywood designer Manish Malhotra’s grand Diwali bash in Mumbai, held on Thursday evening, November 5, 2026.
          </p>

          <p>
            Ananya took to her official Instagram Stories to share the candid moment. In the frame, she stands closely beside Aarav, resting her arm affectionately around him with a wide, glowing smile. Beside the image, she typed:
          </p>

          <blockquote>
            “My heart ❤️”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Ananya Panday on Instagram Stories
            </footer>
          </blockquote>

          <p>
            The pair also complemented each other’s aesthetics effortlessly. Ananya wore an intricately shimmering silver outfit paired with delicate diamond jewelry, while Aarav looked dashing in an ivory embroidered bandhgala-inspired ensemble, sporting his effortless natural curls.
          </p>

          <h2>Are Ananya Panday and Aarav Bhatia Dating?</h2>
          <p>
            Despite the wildfire speculation on Reddit, X, and Instagram fan pages, <strong>nothing has been officially confirmed</strong>. A sweet, heartfelt caption between close family friends is far from a formal relationship announcement.
          </p>

          <p>
            The post does not label Aarav as her partner, and neither Ananya nor Aarav has made any statement regarding their relationship status. However, eagle-eyed fans were quick to piece together recent sightings:
          </p>

          <ul>
            <li>
              <strong>The London Sighting:</strong> In October 2026, snapshots from Ananya’s autumn London getaway showed the two hanging out casually over baked goods and coffee with mutual acquaintances.
            </li>
            <li>
              <strong>Aarav’s Low-Profile Nature:</strong> Despite hailing from one of Indian cinema’s premier dynasties, Aarav has intentionally stayed away from the media glare and paparazzi, choosing to complete his higher education abroad.
            </li>
            <li>
              <strong>Rare Family Outing:</strong> Akshay Kumar and Twinkle Khanna attended Manish Malhotra’s party alongside Aarav, making it a rare and high-profile public appearance for the family unit together.
            </li>
          </ul>

          <p>
            For now, the image remains a heartwarming festive memory and fodder for online excitement. Until either representative speaks out, it underscores a warm bond within Bollywood’s close-knit circle.
          </p>

          <h2>Ananya’s Lehenga Was Inspired by a Famous K3G Look</h2>
          <p>
            Apart from the mystery caption, Ananya’s fashion statement at Manish Malhotra’s party sparked equal admiration. The actress paid homage to Karan Johar’s iconic 2001 family saga <em>Kabhi Khushi Kabhie Gham</em> (K3G), recreating Rani Mukerji’s legendary look from the chartbuster track <em>“Say ‘Shava Shava’”</em>.
          </p>

          <p>
            Crafted meticulously by Manish Malhotra himself, the silver-pearl embellished lehenga and cropped corset blouse paid direct tribute to Rani Mukerji’s memorable screen appearance. Ananya accessorized with:
          </p>

          <ul>
            <li>Statement diamond choker necklace</li>
            <li>Traditional jhumka earrings and cocktail rings</li>
            <li>Loose romantic cascading waves</li>
            <li>Softly defined smokey eyes with glossy nude-pink lips</li>
          </ul>

          <p>
            Videos from inside the party later showed Ananya enthusiastically matching steps to <em>Shava Shava</em>’s signature hook moves alongside friends, sending 2000s Bollywood nostalgia soaring through the roof.
          </p>

          <h2>Who Else Was at Manish Malhotra’s Diwali Party?</h2>
          <p>
            Manish Malhotra’s annual Diwali gathering remains one of the premier highlights of Mumbai’s festive calendar. The guest list reads like a veritable who’s who of Indian cinema and high society, including:
          </p>

          <ul>
            <li>Aishwarya Rai Bachchan</li>
            <li>Kareena Kapoor Khan &amp; Saif Ali Khan</li>
            <li>Janhvi Kapoor</li>
            <li>Suhana Khan</li>
            <li>Nita Ambani (stunning in a bespoke fuchsia pink satin saree by Manish Malhotra)</li>
            <li>Akshay Kumar, Twinkle Khanna, and Aarav Bhatia</li>
            <li>Karan Johar, Rekha, and Kajol</li>
          </ul>

          <h2>Ananya at Karan Johar’s Diwali Puja</h2>
          <p>
            Ananya’s packed festive itinerary continued into the weekend. On Saturday, November 7, 2026, she attended filmmaker Karan Johar’s traditional Lakshmi Puja at the Dharma Productions headquarters in Khar, Mumbai.
          </p>

          <p>
            She arrived alongside her mother, Bhavna Pandey, opting for sustainable heritage style. Reports confirmed that Ananya wore a gorgeous 20-year-old vintage mauve embroidered salwar suit borrowed straight from Bhavna’s personal bridal-era trousseau.
          </p>

          <p>
            Other notable attendees at the intimate Dharma office puja included Janhvi Kapoor, Shanaya Kapoor, Wamiqa Gabbi, Lakshya, and musician-entrepreneur Ananya Birla.
          </p>

          <h2>Final Words</h2>
          <p>
            Between jaw-dropping throwback fashion, nostalgic Bollywood choreography, and an affectionate two-word caption that broke the internet, Ananya Panday definitely owned the Diwali 2026 spotlight. Until she or Aarav clarifies the nature of their bond, “My heart” remains the sweetest festive mystery in town.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for verified scoops, festival diaries, and breaking Bollywood entertainment news.
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
              Related Bollywood &amp; Festive Buzz
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
                  href="/karan-johar-kareena-kapoor-diwali-pout-pic"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Karan Johar Calls Kareena Kapoor Pout Queen in Diwali Pic: See Festive Reunion
                </Link>
              </li>
              <li>
                <Link
                  href="/amyra-dastur-farah-khan-titanic-kung-fu-yoga"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Amyra Dastur Reveals Farah Khan’s “Titanic” Remark: Candid Scoop on Kung Fu Yoga Set
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
              <li>
                <Link
                  href="/yash-ravana-costume-weight-ramayana"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Yash’s Ravana Costume in Ramayana Weighed Up to 33 kg: Saniya Sardhariya Reveals Details
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Ananya Panday",
            "Aarav Bhatia",
            "Ananya Panday Diwali 2026",
            "Manish Malhotra Diwali party",
            "Bollywood Diwali",
            "Ananya Panday lehenga",
            "Akshay Kumar son",
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
