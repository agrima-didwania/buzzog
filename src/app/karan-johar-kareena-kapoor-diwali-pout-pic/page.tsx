import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Karan Johar Calls Kareena Kapoor Pout Queen in Diwali Pic | Buzz Originals",
  description:
    "Karan Johar shared a Diwali photo with Kareena Kapoor and said it was \"The yearly pout pose pic.\" See the pic details, fan love, and Kareena's King update.",
  keywords: [
    "Karan Johar Kareena Kapoor Diwali pic",
    "Kareena Kapoor pout",
    "Kareena Kapoor Diwali 2026",
    "Karan Johar Diwali party",
    "Kareena Kapoor King Shah Rukh Khan",
    "Daddy Cool song",
    "Kareena Kapoor turban look Diwali",
    "Karan Johar yearly pout pic",
    "Kareena Kapoor Poo",
    "King movie Kareena Kapoor",
  ],
  alternates: {
    canonical: "/karan-johar-kareena-kapoor-diwali-pout-pic",
  },
  openGraph: {
    title: "Karan Johar Calls Kareena Kapoor Pout Queen in Diwali Pic | Buzz Originals",
    description:
      "Karan Johar shared a Diwali photo with Kareena Kapoor and said it was \"The yearly pout pose pic.\" See the pic details, fan love, and Kareena's King update.",
    url: "https://www.buzzoriginals.com/karan-johar-kareena-kapoor-diwali-pout-pic",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/karan-johar-kareena-kapoor-diwali-pout-pic.jpg",
        width: 1200,
        height: 675,
        alt: "Karan Johar Calls Kareena Kapoor the 'Pout Queen' in Diwali Pic",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Johar Calls Kareena Kapoor Pout Queen in Diwali Pic",
    description:
      "Karan Johar shared a Diwali photo with Kareena Kapoor and said it was \"The yearly pout pose pic.\" See the pic details, fan love, and Kareena's King update.",
    images: ["/images/karan-johar-kareena-kapoor-diwali-pout-pic.jpg"],
  },
};

export default function KaranKareenaDiwaliPoutPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Karan Johar Calls Kareena Kapoor Pout Queen in Diwali Pic",
    description:
      "Karan Johar shared a Diwali photo with Kareena Kapoor and said it was \"The yearly pout pose pic.\" See the pic details, fan love, and Kareena's King update.",
    image: [
      "https://www.buzzoriginals.com/images/karan-johar-kareena-kapoor-diwali-pout-pic.jpg",
    ],
    datePublished: "2026-11-09T17:50:00Z",
    dateModified: "2026-11-09T17:50:00Z",
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
      "@id": "https://www.buzzoriginals.com/karan-johar-kareena-kapoor-diwali-pout-pic",
    },
    keywords: [
      "Karan Johar Kareena Kapoor Diwali pic",
      "Kareena Kapoor pout",
      "Kareena Kapoor King Shah Rukh Khan",
      "Daddy Cool song",
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
        name: "Karan Johar Kareena Kapoor Diwali Pic",
        item: "https://www.buzzoriginals.com/karan-johar-kareena-kapoor-diwali-pout-pic",
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
          <span className="text-[var(--lime)]">Karan Johar &amp; Kareena Kapoor Diwali Pic</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Festive Exclusive</span>
          <span className="badge pink">Diwali Pout</span>
          <span className="badge">Kareena Kapoor Khan</span>
          <span className="badge">Karan Johar</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Karan Johar Calls Kareena Kapoor the &apos;Pout Queen&apos; in a Fun Diwali Photo
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-09">November 9, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">FESTIVE BUZZ</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/karan-johar-kareena-kapoor-diwali-pout-pic.jpg"
            alt="Karan Johar Calls Kareena Kapoor the 'Pout Queen' in Diwali Pic"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Karan Johar reunited with Kareena Kapoor Khan for their traditional festive pout snapshot, celebrating decades of friendship and teasing her upcoming reunion with Shah Rukh Khan in King. (Photo: Buzz Originals / Instagram)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Karan%20Johar%20Calls%20Kareena%20Kapoor%20Pout%20Queen%20in%20Diwali%20Pic%20-%20https://www.buzzoriginals.com/karan-johar-kareena-kapoor-diwali-pout-pic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Karan%20Johar%20Calls%20Kareena%20Kapoor%20Pout%20Queen%20in%20Diwali%20Pic&url=https://www.buzzoriginals.com/karan-johar-kareena-kapoor-diwali-pout-pic"
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
            <span>Kareena Kapoor &amp; Karan Johar Diwali Pout: Key Takeaways</span>
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
              <strong>The Annual Ritual:</strong> Karan Johar posted their customary Diwali selfie with the witty caption: <em>“The yearly pout pose pic.”</em>
            </li>
            <li>
              <strong>Couture Statements:</strong> Kareena dazzled in a metallic silver kaftan paired with an artisanal cream turban headpiece, while Karan sported classic black and gold.
            </li>
            <li>
              <strong>Poo&apos;s Everlasting Trademark:</strong> Kareena has championed the Bollywood pout since her career-defining portrayal of Poo in <em>Kabhi Khushi Kabhie Gham</em> (2001).
            </li>
            <li>
              <strong>King Movie Reunion:</strong> Follows Kareena’s viral birthday post for Shah Rukh Khan teasing their high-energy dance number &apos;Daddy Cool&apos; in Siddharth Anand&apos;s <em>King</em>, hitting theatres on December 24, 2026.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Kareena Kapoor Khan and her world-famous pout are back in the headlines. This Diwali, long-time collaborator and confidant Karan Johar treated fans to an adorable festive snapshot of the duo, setting social media abuzz. Accompanied by a delightfully witty caption, the post proved that some Bollywood traditions never go out of style.
          </p>

          <p>
            Here is the full story behind the festive picture and Kareena&apos;s massive theatrical reunion on the horizon.
          </p>

          <h2>What Karan Johar Posted</h2>
          <p>
            Karan took to his Instagram handles to share an intimate glimpse from a star-studded Diwali bash. In the photo, Karan and Kareena are seated closely on a plush sofa, radiating festive warmth and striking their trademark poses for the cameras.
          </p>

          <p>
            Karan donned a regal black sherwani adorned with intricate gold detailing, while Kareena made heads turn in a fluid silver kaftan complemented by an exquisite cream turban-style headpiece featuring delicate pearl and stone embellishments. And true to form, she delivered her flawless, sculpted pout.
          </p>

          <p>
            Karan&apos;s caption summed up the timeless camaraderie effortlessly:
          </p>

          <blockquote>
            “The yearly pout pose pic.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Karan Johar on Instagram
            </footer>
          </blockquote>

          <p>
            The caption offered a playful nod to their enduring friendship: no matter the year or season, their festive gathering isn’t complete without clicking their ritualistic pout portrait together.
          </p>

          <h2>Why Kareena Is Called the Pout Queen</h2>
          <p>
            Kareena’s pout has been etched into Hindi cinema folklore for well over two decades. Audiences first fell under its spell when she immortalized the iconic, unapologetic diva Poo in Karan Johar’s 2001 multi-starrer <em>Kabhi Khushi Kabhie Gham</em>.
          </p>

          <p>
            Ever since, the expression has become her signature calling card—gracing international red carpets, impromptu vanity van mirrors, holiday travel snapshots, and casual group chats. Karan Johar himself has frequently engaged in self-deprecating humor about his own pout poses, making this annual snap an entertaining pout face-off between two of Bollywood’s most famous arbiters of glam.
          </p>

          <p>
            Fans quickly recalled a hilarious throwback from 2022, when Karan shared a home video where his son, Yash Johar, candidly told his father that he disliked his pout expression. Kareena had famously chimed into the comment section, writing: <em>“Love you Yash..only you can tell him ....well done beta.”</em>
          </p>

          <h2>Kareena’s Own Diwali Posts</h2>
          <p>
            Kareena also gave her millions of followers an intimate look into her family traditions on Instagram. Uploading a carousel of celebration glimpses, she captioned her post:
          </p>

          <blockquote>
            “Diwali is all about traditions done right.”
          </blockquote>

          <p>
            Content creator and influencer Kusha Kapila left a cheeky comment that fans of <em>Kabhi Khushi Kabhie Gham</em> celebrated immediately: <em>“never not PHAT (Pretty Hot And Tempting).”</em>
          </p>

          <p>
            Earlier in the day, Kareena spent quiet, meaningful moments with her parents, veteran actors Randhir Kapoor and Babita Kapoor, alongside elder sister Karisma Kapoor. Celebrating the matriarch and patriarch, Kareena playfully adapted the lyrics of Raj Kapoor’s legendary <em>Mera Naam Joker</em> anthem: <em>“Jeena Yahan Marna Yahan, Maa and Papa Ke Seeva Jaana Kaha.”</em>
          </p>

          <h2>Kareena Kapoor and Shah Rukh Khan: The King Update</h2>
          <p>
            Beyond festive soirees, Kareena has sent anticipation through the roof with her upcoming silver-screen commitments. On Shah Rukh Khan’s 61st birthday on November 2, she shared a striking black-and-white silhouette picture showcasing the two stars in an energetic dance freeze.
          </p>

          <p>
            Her electric caption read:
          </p>

          <blockquote>
            “Happy Birthday King. The forever Ruler of the kingdom. Let&apos;s dance together... Can&apos;t wait. 24-12-26.”
          </blockquote>

          <p>
            The date <strong>December 24, 2026</strong> marks the official worldwide theatrical release of Siddharth Anand’s high-octane action spectacle <em>King</em>. Fueling the frenzy, Shah Rukh’s wife, producer Gauri Khan, commented under the post: <em>“It’s going to be insane.”</em>
          </p>

          <h2>What We Know So Far About &apos;Daddy Cool&apos; &amp; King</h2>
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
              <li>✦ <strong>Special Track Appearance:</strong> Trade reports indicate Kareena will make a high-voltage cameo appearance in <em>King</em>, headlining a dance anthem titled <em>Daddy Cool</em>.</li>
              <li>✦ <strong>Musical Duo:</strong> The chartbuster is composed by celebrated hitmakers <strong>Sachin-Jigar</strong>.</li>
              <li>✦ <strong>A 15-Year Milestone Reunion:</strong> If confirmed, this marks Kareena and Shah Rukh’s first cinematic reunion since <em>Ra.One</em> (2011), continuing an illustrious legacy that includes <em>Asoka</em> (2001), <em>Kabhi Khushi Kabhie Gham</em> (2001), and <em>Don</em> (2006).</li>
              <li>✦ <strong>Father-Daughter Dynamic:</strong> <em>King</em> also marks the historic first on-screen collaboration between Shah Rukh Khan and his daughter, Suhana Khan.</li>
            </ul>
          </div>

          <h2>Final Thoughts</h2>
          <p>
            A glamorous Diwali evening, one effortless caption, and the quintessential Kapoor pout were all it took to capture the nation’s attention. Between celebrating heritage with her family and preparing to shake the box office alongside Shah Rukh Khan next month, Kareena Kapoor Khan continues to reign supreme.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for daily unfiltered scoops, celebrity style breakdowns, and the biggest updates from Indian cinema.
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
              Related Bollywood &amp; Cinema Stories
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
                  href="/farah-khan-fake-fire-video-clickbait"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Farah Khan Reacts to Fake Fire Videos: “Clickbait Can’t Be Everything”
                </Link>
              </li>
              <li>
                <Link
                  href="/ranbir-kapoor-directorial-debut-last-decade-as-actor"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away and What He Meant by “Last Decade as an Actor”
                </Link>
              </li>
              <li>
                <Link
                  href="/king-first-song-tu-mil-jaaye-shah-rukh-khan-deepika-padukone"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → King First Song ‘Tu Mil Jaaye’ Is Out: SRK and Deepika Light Up His 61st Birthday
                </Link>
              </li>
              <li>
                <Link
                  href="/saif-ali-khan-kareena-kapoor-koffee-with-karan-stabbing-night"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Saif Ali Khan Calls Stabbing Night “Worst Night”: Kareena Kapoor’s Confession on Koffee With Karan 9
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Kareena Kapoor",
            "Karan Johar",
            "Diwali 2026",
            "Pout Queen",
            "Shah Rukh Khan",
            "King",
            "Daddy Cool",
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
