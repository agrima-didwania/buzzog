import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Vvaan 2 Announced: Ektaa Kapoor Reveals Sequel on Chhath | Buzz Originals",
  description:
    "Ektaa Kapoor has announced The Vvaan 2 on Chhath. Know what the video shows, the World of Vvaan plan, and what is still unknown about the cast and release.",
  keywords: [
    "The Vvaan 2",
    "The Vvaan 2 announcement",
    "The Vvaan sequel",
    "Sidharth Malhotra new film",
    "Tamannaah Bhatia The Vvaan",
    "Ektaa Kapoor sequel",
    "World of Vvaan",
    "The Vvaan 2 release date",
    "The Vvaan 2 cast",
    "Balaji Motion Pictures TVF",
    "Chhath Puja",
    "Bollywood News",
    "Bollywood Sequel",
  ],
  alternates: {
    canonical: "/the-vvaan-2-announced-ektaa-kapoor-chhath",
  },
  openGraph: {
    title: "The Vvaan 2 Announced: Ektaa Kapoor Reveals Sequel on Chhath | Buzz Originals",
    description:
      "Ektaa Kapoor has announced The Vvaan 2 on Chhath. Know what the video shows, the World of Vvaan plan, and what is still unknown about the cast and release.",
    url: "https://www.buzzoriginals.com/the-vvaan-2-announced-ektaa-kapoor-chhath",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/the-vvaan-2-announced-ektaa-kapoor-chhath.jpg",
        width: 1024,
        height: 576,
        alt: "The Vvaan 2 Announced Ektaa Kapoor Reveals Sequel on Chhath",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vvaan 2 Announced: Ektaa Kapoor Reveals Sequel on Chhath",
    description:
      "Ektaa Kapoor has announced The Vvaan 2 on Chhath. Know what the video shows, the World of Vvaan plan, and what is still unknown about the cast and release.",
    images: ["/images/the-vvaan-2-announced-ektaa-kapoor-chhath.jpg"],
  },
};

export default function TheVvaan2AnnouncementPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "The Vvaan 2 Is Official: Ektaa Kapoor Announces Sequel on Chhath",
    description:
      "Ektaa Kapoor has announced The Vvaan 2 on Chhath. Know what the video shows, the World of Vvaan plan, and what is still unknown about the cast and release.",
    image: [
      "https://www.buzzoriginals.com/images/the-vvaan-2-announced-ektaa-kapoor-chhath.jpg",
    ],
    datePublished: "2026-11-17T07:15:00Z",
    dateModified: "2026-11-17T07:15:00Z",
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
      "@id": "https://www.buzzoriginals.com/the-vvaan-2-announced-ektaa-kapoor-chhath",
    },
    keywords: [
      "The Vvaan 2",
      "The Vvaan 2 announcement",
      "The Vvaan sequel",
      "Sidharth Malhotra new film",
      "Tamannaah Bhatia The Vvaan",
      "Ektaa Kapoor sequel",
      "World of Vvaan",
      "Bollywood News",
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
        name: "The Vvaan 2 Announced",
        item: "https://www.buzzoriginals.com/the-vvaan-2-announced-ektaa-kapoor-chhath",
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
          <span className="text-[var(--lime)]">The Vvaan 2 Announced</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ BOLLYWOOD EXCLUSIVE</span>
          <span className="badge pink">Sequel Announced</span>
          <span className="badge">The Vvaan 2</span>
          <span className="badge">Ektaa Kapoor</span>
          <span className="badge">Sidharth Malhotra</span>
          <span className="badge">World of Vvaan</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          The Vvaan 2 Is Official: Ektaa Kapoor Announces Sequel on Chhath
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-17">November 17, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD &amp; SEQUELS</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/the-vvaan-2-announced-ektaa-kapoor-chhath.jpg"
            alt="The Vvaan 2 Announced: Ektaa Kapoor Reveals Sequel on Chhath"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Producer Ektaa R Kapoor announces The Vvaan 2 on Chhath Puja, launching a broader supernatural folklore universe. (Photo: Buzz Originals / Balaji Motion Pictures)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=The%20Vvaan%202%20Announced%20-%20https://www.buzzoriginals.com/the-vvaan-2-announced-ektaa-kapoor-chhath"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=The%20Vvaan%202%20Announced%20by%20Ektaa%20Kapoor&url=https://www.buzzoriginals.com/the-vvaan-2-announced-ektaa-kapoor-chhath"
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
            <span>The Vvaan 2 Announcement: Key Takeaways</span>
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
              <strong>Sequel Greenlit:</strong> Producer Ektaa R Kapoor and Balaji Motion Pictures officially announced <em>The Vvaan 2</em> on the auspicious occasion of Chhath Puja.
            </li>
            <li>
              <strong>The World of Vvaan:</strong> Balaji Motion Pictures and TVF are expanding the franchise into a shared folklore universe rooted in Indian supernatural myth, beliefs, and regional folklore.
            </li>
            <li>
              <strong>Chilling Teaser Clue:</strong> The announcement video opens with a little girl during Chhath celebrations pursued by unseen entities, culminating in her eye turning sinister red.
            </li>
            <li>
              <strong>Writing Underway:</strong> Scriptwriting for Part 2 has officially commenced, while casting confirmations and release dates remain closely guarded secrets.
            </li>
            <li>
              <strong>Sidharth Malhotra’s Note:</strong> Days before the reveal, Sidharth shared a heartfelt reflection on the cultural impact and beauty of the film&apos;s Chhath sequences.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Good news for <strong>Sidharth Malhotra</strong> and <strong>Tamannaah Bhatia</strong> fans. <strong>The Vvaan 2</strong> is happening. Producer <strong>Ektaa R Kapoor</strong> announced the sequel on Monday, November 16, 2026, on the occasion of Chhath Puja. The first film released in theatres on September 25 this year.
          </p>

          <h2>How the Makers Announced It</h2>
          <p>
            The news came through a short video on social media. The post carried the caption: <em>“THE VVAAN ki kahaani abhi baaki hai…..”</em>
          </p>

          {/* Instagram Announcement Screenshot Embed */}
          <div className="my-8 flex flex-col items-center">
            <div className="relative w-full max-w-lg aspect-[942/1024] rounded-2xl overflow-hidden border border-white/[0.12] shadow-2xl bg-black">
              <Image
                src="/images/the-vvaan-2-instagram-announcement.jpg"
                alt="The Vvaan 2 Official Announcement Instagram Post by Ektaa Kapoor and Balaji Motion Pictures"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
            <p className="text-xs font-mono text-[var(--mist)] text-center mt-3">
              Ektaa Kapoor and Balaji Motion Pictures announced “The Vvaan 2: Writing Begins” with the caption: “THE VVAAN ki kahaani abhi baaki hai…..” (Source: Instagram / @ektarkapoor)
            </p>
          </div>

          <p>
            The video shows people celebrating Chhath Puja. Chhath is a big part of the world of <em>The Vvaan</em>, which is why the makers picked this day. The clip also gives a small peek at the mystery ahead.
          </p>

          <h2>What Is Shown in the Video</h2>
          <p>
            It starts with a little girl running after a butterfly.
          </p>
          <p>
            Soon, things turn strange. It looks like she is being followed by supernatural forces.
          </p>
          <p>
            The biggest twist comes at the end. Her eye turns red.
          </p>
          <p>
            That red eye reminds fans of the final moments of the first film.
          </p>
          <p>
            The makers do not want this to be just another sequel. <strong>Balaji Motion Pictures</strong> and <strong>TVF</strong> are teaming up again, and they have introduced a bigger idea called <strong>“The World of Vvaan”</strong>. It is a shared universe built on Indian folklore, old beliefs and supernatural stories. In short, more stories and more characters could come after this.
          </p>

          <h2>Writing Has Started, But Many Questions Remain</h2>
          <p>
            According to reports, the makers have said that the writing of Part 2 has begun. Here is what is still unknown:
          </p>
          <ul>
            <li><strong>Cast of The Vvaan 2</strong></li>
            <li><strong>Story details</strong></li>
            <li><strong>Release date</strong></li>
          </ul>
          <p>
            One more thing fans noticed: in the announcement post, the makers were tagged, but Sidharth and Tamannaah were not mentioned or tagged. So nothing is confirmed about whether they will return. For now, it is just something to watch.
          </p>

          <h2>Sidharth Malhotra’s Chhath Note</h2>
          <p>
            A few days before the announcement, Sidharth shared a note on Instagram about his time on the film. He wrote:
          </p>
          <blockquote>
            “Some stories stay with you long after the cameras stop rolling”.
          </blockquote>
          <p>
            He added that working on a film rooted in heartland folklore helped him understand how faith and traditions bring generations together. He also said it felt special to see audiences connect with the film’s Chhath Puja scenes, which he described as the first time this was shown in Hindi cinema in this way. He ended by wishing everyone a happy Chhath Puja.
          </p>

          <h2>About the First Film</h2>
          <ul>
            <li><strong>Director:</strong> Deepak Mishra</li>
            <li><strong>Story:</strong> Arunabh Kumar</li>
            <li><strong>Producers:</strong> Shobha Kapoor, Ektaa R Kapoor, Arunabh Kumar and Niraj Kothari</li>
            <li><strong>Banners:</strong> Balaji Motion Pictures and TVF</li>
            <li><strong>Stars:</strong> Sidharth Malhotra and Tamannaah Bhatia</li>
            <li><strong>Release:</strong> September 25, 2026</li>
          </ul>

          <h2>Final Words</h2>
          <p>
            With a new folklore universe on the way, the makers clearly have big plans. Until the cast and release date are announced, fans will have to wait. Stay tuned to <strong>Buzz OG</strong> for every update on <em>The Vvaan 2</em>.
          </p>

          <p>
            Follow <strong>Buzz OG</strong> for more updates.
          </p>

          {/* Related Stories */}
          <div
            style={{
              marginTop: "48px",
              padding: "24px",
              background: "rgba(255, 255, 255, 0.02)",
              borderRadius: "14px",
              border: "1px solid rgba(255, 255, 255, 0.06)",
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--lime)",
                marginBottom: "16px",
                fontFamily: "var(--font-anton)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Related Bollywood Stories on Buzz Originals
            </h3>
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
                  href="/diljit-dosanjh-indore-concert-song-ban-rahat-indori"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Diljit Dosanjh Answers Indore Song Ban With Rahat Indori’s Famous Lines
                </Link>
              </li>
              <li>
                <Link
                  href="/amitabh-bachchan-jalsa-property-dispute"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Amitabh Bachchan’s Jalsa Property Dispute: What Is Going On?
                </Link>
              </li>
              <li>
                <Link
                  href="/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sunny Deol’s Suryaa: Ant Se Aarambh Tak Postponed to 2027 After IMA Objection
                </Link>
              </li>
              <li>
                <Link
                  href="/sharad-kapoor-hollywood-film-offer"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sharad Kapoor Gets a Hollywood Film Offer After Viral Video Asking for Work
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "TheVvaan2",
            "TheVvaan",
            "SidharthMalhotra",
            "TamannaahBhatia",
            "EktaaKapoor",
            "TVF",
            "BalajiMotionPictures",
            "ChhathPuja",
            "BollywoodNews",
            "BollywoodSequel",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-[var(--paper)] border border-white/[0.08]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
