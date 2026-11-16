import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jalsa Property Dispute: Ramola Bachchan Challenges Deed | Buzz Originals",
  description:
    "Amitabh Bachchan’s Jalsa bungalow is in a family property dispute. Read what Ramola Bachchan claims, what the officials said, and how Jalsa got its name.",
  keywords: [
    "Jalsa property dispute",
    "Amitabh Bachchan Jalsa",
    "Ramola Bachchan",
    "Jalsa bungalow ownership",
    "Jalsa gift deed 1993",
    "Bachchan family property dispute",
    "Jaya Bachchan Jalsa",
    "who owns Jalsa",
    "who is Ramola Bachchan",
    "Jalsa earlier name Mansa",
    "Jalsa bungalow price",
    "Amitabh Bachchan",
    "Jalsa",
    "Jaya Bachchan",
    "Bachchan family",
    "Bollywood news",
  ],
  alternates: {
    canonical: "/amitabh-bachchan-jalsa-property-dispute",
  },
  openGraph: {
    title: "Jalsa Property Dispute: Ramola Bachchan Challenges Deed | Buzz Originals",
    description:
      "Amitabh Bachchan’s Jalsa bungalow is in a family property dispute. Read what Ramola Bachchan claims, what the officials said, and how Jalsa got its name.",
    url: "https://www.buzzoriginals.com/amitabh-bachchan-jalsa-property-dispute",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/amitabh-bachchan-jalsa-property-dispute.jpg",
        width: 1200,
        height: 675,
        alt: "Amitabh Bachchan Jalsa Property Dispute Ramola Bachchan Challenges Deed",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jalsa Property Dispute: Ramola Bachchan Challenges Deed",
    description:
      "Amitabh Bachchan’s Jalsa bungalow is in a family property dispute. Read what Ramola Bachchan claims, what the officials said, and how Jalsa got its name.",
    images: ["/images/amitabh-bachchan-jalsa-property-dispute.jpg"],
  },
};

export default function JalsaPropertyDisputePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Amitabh Bachchan’s Jalsa Property Dispute: What Is Going On?",
    description:
      "Amitabh Bachchan’s Jalsa bungalow is in a family property dispute. Read what Ramola Bachchan claims, what the officials said, and how Jalsa got its name.",
    image: [
      "https://www.buzzoriginals.com/images/amitabh-bachchan-jalsa-property-dispute.jpg",
    ],
    datePublished: "2026-11-16T08:00:00Z",
    dateModified: "2026-11-16T08:00:00Z",
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
      "@id": "https://www.buzzoriginals.com/amitabh-bachchan-jalsa-property-dispute",
    },
    keywords: [
      "Jalsa property dispute",
      "Amitabh Bachchan Jalsa",
      "Ramola Bachchan",
      "Jalsa bungalow ownership",
      "Jalsa gift deed 1993",
      "Bachchan family property dispute",
      "Jaya Bachchan Jalsa",
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
        name: "Jalsa Property Dispute",
        item: "https://www.buzzoriginals.com/amitabh-bachchan-jalsa-property-dispute",
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
          <span className="text-[var(--lime)]">Jalsa Property Dispute</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ PROPERTY DISPUTE</span>
          <span className="badge pink">Amitabh Bachchan</span>
          <span className="badge">Jalsa</span>
          <span className="badge">Ramola Bachchan</span>
          <span className="badge">Jaya Bachchan</span>
          <span className="badge">Bachchan Family</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Amitabh Bachchan’s Jalsa Property Dispute: What Is Going On?
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>4 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD &amp; NEWS</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/amitabh-bachchan-jalsa-property-dispute.jpg"
            alt="Amitabh Bachchan Jalsa Property Dispute Ramola Bachchan Challenges Deed"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Amitabh Bachchan’s iconic Juhu bungalow Jalsa is under scrutiny after sister-in-law Ramola Bachchan challenged the validity of a 1993 gift deed transferring the property to Jaya Bachchan. (Photo: Buzz Originals)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Jalsa%20Property%20Dispute:%20Ramola%20Bachchan%20Challenges%20Deed%20-%20https://www.buzzoriginals.com/amitabh-bachchan-jalsa-property-dispute"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Jalsa%20Property%20Dispute:%20Ramola%20Bachchan%20Challenges%20Deed&url=https://www.buzzoriginals.com/amitabh-bachchan-jalsa-property-dispute"
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
            <span>Jalsa Property Dispute: Key Takeaways</span>
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
              <strong>Conflicting Records:</strong> Kapol Housing Society records reportedly name Jaya Bachchan as the registered owner of Jalsa, whereas the Maharashtra government’s official Property Card lists Ramola Bachchan.
            </li>
            <li>
              <strong>1993 Gift Deed Challenged:</strong> Ramola Bachchan, wife of Amitabh Bachchan’s younger brother Ajitabh, alleges the transfer was drafted on plain paper without stamp duty, witnesses, or her consent, and belatedly registered in 2006 under the Abhay Yojana scheme.
            </li>
            <li>
              <strong>Official Hearing Underway:</strong> Mumbai Deputy Registrar Faiyaz Mulani confirmed receipt of the complaint and stated that formal hearings have begun, with written responses requested from the involved parties.
            </li>
            <li>
              <strong>Bungalow Heritage:</strong> The 10,125 sq ft Juhu landmark, reportedly valued at Rs 100 crore, was originally named <em>Mansa</em> by filmmaker NC Sippy, gifted to Amitabh for <em>Satte Pe Satta</em> (1982), sold, repurchased, and christened <em>Jalsa</em>.
            </li>
            <li>
              <strong>Prateeksha Unaffected:</strong> The family’s historic first home <em>Prateeksha</em> (16,840 sq ft, estimated at Rs 50 crore) remains separate, where Shweta Bachchan resides with Agastya and Navya Naveli Nanda.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            <strong>Jalsa</strong>, the famous Juhu home of <strong>Amitabh Bachchan</strong>, is in the news for a family property dispute. His sister-in-law, <strong>Ramola Bachchan</strong>, has questioned how the bungalow was transferred to <strong>Jaya Bachchan</strong>. The matter is now being heard by officials in Mumbai.
          </p>

          <p>
            Here is a simple breakdown of the Jalsa property dispute.
          </p>

          <h2>What Is the Dispute About?</h2>
          <p>
            The fight is over who legally owns Jalsa. The two sides point to different records:
          </p>
          <ul>
            <li>
              <strong>Kapol Housing Society records</strong> reportedly show Jaya Bachchan as the owner.
            </li>
            <li>
              <strong>The Maharashtra government’s Property Card</strong> shows Ramola Bachchan as the owner.
            </li>
          </ul>
          <p>
            This mismatch is at the heart of the case.
          </p>

          <h2>What Is Ramola Bachchan Claiming?</h2>
          <p>
            Ramola is married to Amitabh’s younger brother, <strong>Ajitabh Bachchan</strong>. She is questioning a 1993 gift deed that moved the bungalow to Jaya Bachchan. Her main claims are:
          </p>
          <ul>
            <li>The transfer happened without her knowledge or consent.</li>
            <li>The deed was not valid in the eyes of the law.</li>
            <li>The paper was reportedly made on plain paper, with no stamp duty paid and no witness signatures.</li>
            <li>The deed was registered only in 2006, and she says she never agreed to it.</li>
            <li>
              The deed was later accepted under the Maharashtra government’s <em>Abhay Yojana</em>, a scheme for old papers with unpaid stamp duty. She has questioned this too.
            </li>
            <li>There were attempts to replace her name on the Property Card with Jaya Bachchan’s name.</li>
          </ul>

          <blockquote>
            “Ramola Bachchan has reportedly filed complaints over the past seven months with multiple authorities, including the Deputy Registrar in Andheri and the Inspector General of Registration in Pune. These remain allegations under review; no final legal order has been issued.”
          </blockquote>

          <p>
            Reports say she has filed complaints for about seven months with several offices, including the Deputy Registrar in Andheri and the Inspector General of Registration in Pune. These are still claims. Nothing has been proven yet.
          </p>

          <h2>What Have the Officials Said?</h2>
          <p>
            Deputy Registrar <strong>Faiyaz Mulani</strong> has confirmed that a complaint was received and a hearing has begun. The people involved have been asked to give their replies. No final decision has been announced yet.
          </p>

          <h2>Who Is Ramola Bachchan?</h2>
          <p>
            Ramola has stayed away from the spotlight for most of her life. She is a businesswoman and creative director. She also runs a food venture called <em>The Accidental Chef</em>. She married Ajitabh Bachchan in 1973.
          </p>

          <h2>Jalsa’s Story: From Mansa to Jalsa</h2>
          <p>
            The dispute has brought the history of Jalsa back into talks. It is a two-storey bungalow of about 10,125 sq ft. It is reportedly worth around Rs 100 crore. Amitabh and Jaya live there with Abhishek, Aishwarya and Aaradhya.
          </p>
          <ul>
            <li>Jalsa was first called <strong>Mansa</strong>. It was the home of producer NC Sippy.</li>
            <li>It was reportedly given to Amitabh as payment for his work in <em>Satte Pe Satta</em> (1982).</li>
            <li>Amitabh later sold the house, then bought it back at a higher price. Reports say Jaya Bachchan wanted it back.</li>
            <li>Amitabh himself described the journey in a social media post: <em>“we bought it, then sold it, then bought it back again”</em>.</li>
            <li>After that, it was renamed <strong>Jalsa</strong>, which means “celebration”.</li>
            <li>Some reports say the name was changed on an astrologer’s advice. Many films, including <em>Anand</em>, <em>Namak Haraam</em> and <em>Chupke Chupke</em>, were shot at this house.</li>
          </ul>

          <h2>What About Prateeksha?</h2>
          <p>
            Amitabh’s other bungalow, <strong>Prateeksha</strong>, is about 16,840 sq ft and is estimated at Rs 50 crore. His daughter Shweta Bachchan lives there with her children, Agastya Nanda and Navya Naveli Nanda.
          </p>
          <p>
            The Bachchans moved into Prateeksha in 1976. Amitabh once described it as “the first house that this generation had ever bought and built”. It was named by his father, the poet Harivansh Rai Bachchan.
          </p>

          <h2>What Happens Next?</h2>
          <p>
            The case is at an early stage. The next step is the replies from the people involved. Then the Deputy Registrar will look at the papers and records. We will update this story when there is news.
          </p>
          <p>
            Follow <strong>Buzz OG</strong> for more updates.
          </p>

          {/* Related Articles */}
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
              Related Stories on Buzz Originals
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
                  href="/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sunny Deol’s Suryaa: Ant Se Aarambh Tak Postponed to 2027 After IMA Objection
                </Link>
              </li>
              <li>
                <Link
                  href="/panchayat-season-5-not-releasing-2026"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Panchayat Season 5 Will Not Release in 2026, Says Prime Video
                </Link>
              </li>
              <li>
                <Link
                  href="/sharad-kapoor-hollywood-film-offer"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sharad Kapoor Gets a Hollywood Film Offer After His Viral Video Asking for Work
                </Link>
              </li>
              <li>
                <Link
                  href="/diljit-dosanjh-indore-concert-kisi-ke-baap-ka-hindustan-thodi-hai"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Diljit Dosanjh Recites “Kisi Ke Baap Ka Hindustan Thodi Hai” at Indore Concert After Song Ban
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Amitabh Bachchan",
            "Jalsa",
            "Jaya Bachchan",
            "Ramola Bachchan",
            "Bachchan Family",
            "Bollywood News",
            "Property Dispute",
            "Prateeksha",
            "Mumbai Real Estate",
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
