import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Munna Bhai 3 Update: Farhad Samji Begins Writing | Buzz Originals",
  description:
    "Munna Bhai 3 is moving ahead. Farhad Samji is reportedly writing the script for Rajkumar Hirani’s film. Read all the details here.",
  keywords: [
    "Munna Bhai 3",
    "Munna Bhai 3 update",
    "Munna Bhai 3 news",
    "Munna Bhai 3 script",
    "Munna Bhai 3 release date",
    "Munna Bhai 3 cast",
    "Farhad Samji",
    "Rajkumar Hirani new film",
    "Sanjay Dutt Munna Bhai 3",
    "Arshad Warsi Circuit",
    "Munna Bhai 3 writer",
    "Is Munna Bhai 3 confirmed",
    "Who is writing Munna Bhai 3",
    "When will Munna Bhai 3 release",
    "Munna Bhai 3 Rajkumar Hirani Farhad Samji",
    "Munna Bhai 3 latest news today",
  ],
  alternates: {
    canonical: "/munna-bhai-3-farhad-samji-writing-script",
  },
  openGraph: {
    title: "Munna Bhai 3 Update: Farhad Samji Begins Writing | Buzz Originals",
    description:
      "Munna Bhai 3 is moving ahead. Farhad Samji is reportedly writing the script for Rajkumar Hirani’s film. Read all the details here.",
    url: "https://www.buzzoriginals.com/munna-bhai-3-farhad-samji-writing-script",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/munna-bhai-3-farhad-samji-writing-script.jpg",
        width: 1200,
        height: 675,
        alt: "Munna Bhai 3 Update: Farhad Samji Begins Writing Script for Rajkumar Hirani",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munna Bhai 3 Update: Farhad Samji Begins Writing",
    description:
      "Munna Bhai 3 is moving ahead. Farhad Samji is reportedly writing the script for Rajkumar Hirani’s film. Read all the details here.",
    images: ["/images/munna-bhai-3-farhad-samji-writing-script.jpg"],
  },
};

export default function MunnaBhai3UpdatePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Munna Bhai 3 Update: Farhad Samji Begins Writing",
    description:
      "Munna Bhai 3 is moving ahead. Farhad Samji is reportedly writing the script for Rajkumar Hirani’s film. Read all the details here.",
    image: [
      "https://www.buzzoriginals.com/images/munna-bhai-3-farhad-samji-writing-script.jpg",
    ],
    datePublished: "2026-11-05T07:10:00Z",
    dateModified: "2026-11-05T07:10:00Z",
    author: {
      "@type": "Organization",
      name: "Buzz Originals Cinema Desk",
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
      "@id": "https://www.buzzoriginals.com/munna-bhai-3-farhad-samji-writing-script",
    },
    keywords: [
      "Munna Bhai 3",
      "Munna Bhai 3 update",
      "Munna Bhai 3 script",
      "Farhad Samji",
      "Rajkumar Hirani",
      "Sanjay Dutt",
      "Arshad Warsi",
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
        name: "Munna Bhai 3 Update: Farhad Samji Begins Writing",
        item: "https://www.buzzoriginals.com/munna-bhai-3-farhad-samji-writing-script",
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
          <span className="text-[var(--lime)]">Munna Bhai 3 Script Update</span>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Exclusive Update</span>
          <span className="badge pink">Munna Bhai 3</span>
          <span className="badge">Rajkumar Hirani</span>
          <span className="badge">Farhad Samji</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp font-black uppercase tracking-tight text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.15 }}
        >
          Munna Bhai 3: Farhad Samji Begins Writing the Script
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--mist)] border-y border-white/[0.08] py-3 mb-6">
          <span className="text-white font-medium">By Buzz Originals Cinema &amp; Entertainment Desk</span>
          <span className="dot-sep">◆</span>
          <time dateTime="2026-11-05">November 5, 2026</time>
          <span className="dot-sep">◆</span>
          <span>3 MIN READ</span>
          <span className="dot-sep">◆</span>
          <span className="text-[var(--lime)]">FRANCHISE UPDATE</span>
        </div>

        {/* Hero Cover Image */}
        <figure className="mb-8">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          >
            <Image
              src="/images/munna-bhai-3-farhad-samji-writing-script.jpg"
              alt="Munna Bhai 3 Update: Farhad Samji Begins Writing Script for Rajkumar Hirani"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <figcaption className="text-xs font-mono text-[var(--mist)] text-center mt-2">
            Sanjay Dutt, Arshad Warsi as Munna and Circuit, alongside director Rajkumar Hirani. Writer Farhad Samji has reportedly commenced scripting Munna Bhai 3. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Share Bar */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/[0.06] text-xs font-mono">
          <span className="text-[var(--mist)] uppercase tracking-wider">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Munna%20Bhai%203%20Update:%20Farhad%20Samji%20Begins%20Writing%20https://www.buzzoriginals.com/munna-bhai-3-farhad-samji-writing-script"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Munna%20Bhai%203%20Update:%20Farhad%20Samji%20Begins%20Writing&url=https://www.buzzoriginals.com/munna-bhai-3-farhad-samji-writing-script"
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
            ⚡ Munna Bhai 3: Key Takeaways
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
              <strong>Screenplay In Motion:</strong> Veteran comedy and dialogue writer <strong>Farhad Samji</strong> has reportedly been roped in to write the screenplay for <em>Munna Bhai 3</em>.
            </li>
            <li>
              <strong>Rajkumar Hirani Directing:</strong> Master storyteller Rajkumar Hirani will return to direct, reuniting Samji with Hirani and producer Vidhu Vinod Chopra 23 years after the original 2003 film.
            </li>
            <li>
              <strong>Anu Malik &amp; SRK Connection:</strong> Samji’s initial link to the franchise began late at night in 2003 when Anu Malik called him to pen the hook of “M Bole Toh” when Shah Rukh Khan was being considered for the lead.
            </li>
            <li>
              <strong>Why The Wait:</strong> Hirani has maintained that he will only roll cameras once a bulletproof script is ready, having simultaneously developed ideas for <em>3 Idiots</em> sequel.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Good news for Indian cinema fans who have waited nearly two decades for the return of Bollywood’s most beloved bhai: <strong>Munna Bhai 3</strong> is finally taking a real step forward.
          </p>

          <p>
            As per a <em>Variety India</em> report, writer <strong>Farhad Samji</strong> has been roped in to write the script for the third installment of the iconic franchise. Master filmmaker <strong>Rajkumar Hirani</strong> will helm the director’s chair. This development also marks a reunion for Samji with Hirani and producer <strong>Vidhu Vinod Chopra</strong>, 23 years after the release of <em>Munna Bhai M.B.B.S.</em> in 2003.
          </p>

          <p>
            Right now, nothing else is official. The full ensemble cast, specific storyline and theatrical release date have not been formally announced by the studio.
          </p>

          <h2>Who Is Farhad Samji, and Why Does This Matter?</h2>
          <p>
            Farhad Samji is certainly not new to the cinematic world of Munna and Circuit. Interestingly, his connection with the Munna Bhai universe traces all the way back to the very first film in 2003—and it began with a chartbuster song rather than a script.
          </p>

          <p>
            Veteran music composer <strong>Anu Malik</strong> had called Samji late one night, requesting him to write the opening lines (mukhda) of the track <em>“M Bole Toh”</em> for a crucial creative meeting the very next day.
          </p>

          <blockquote>
            “According to the report, Shah Rukh Khan was being considered for the lead role at that time. So the song had to match Munna Bhai’s street-style tapori language and still suit a big star’s image. In the end, Sanjay Dutt played Munna Bhai.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Variety India Report on the Franchise Origins
            </footer>
          </blockquote>

          <p>
            Having written dialogues and screenplays for several massive Hindi blockbusters over the last two decades, Samji’s proven pulse on mainstream mass comedy makes him an intriguing collaborator to help Hirani crack the much-awaited sequel.
          </p>

          <h2>Why Has Munna Bhai 3 Taken So Long?</h2>
          <p>
            Movie buffs and industry insiders have been asking this question ever since <em>Lage Raho Munna Bhai</em> shattered box office records in 2006. The reason behind the delay has always been simple and uncompromising: the script.
          </p>

          <p>
            Rajkumar Hirani has maintained a golden rule throughout his filmmaking career: he will not embark on a sequel merely to cash in on a franchise title unless the script genuinely surpasses the original.
          </p>

          <p>
            Hirani has shared occasional progress reports over the years. In an earlier conversation with <em>Variety India</em>, he confirmed that he was exploring a fresh Munna Bhai storyline while also toying with a concept for a <em>3 Idiots</em> follow-up:
          </p>

          <blockquote>
            “I’m actually working on both the films.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Rajkumar Hirani on developing Munna Bhai 3 and 3 Idiots sequel
            </footer>
          </blockquote>

          <p>
            Actor <strong>Arshad Warsi</strong>, who immortalized the character of Circuit, has also consistently affirmed that Hirani is dead serious about getting the third part right. Hiring Farhad Samji to focus on the screenplay indicates that the project is officially moving past brainstorms into concrete pre-production writing.
          </p>

          <h2>A Quick Look Back at the Munna Bhai Films</h2>
          <p>
            The franchise revolutionized Hindi popular entertainment by blending street-level humour with profound social messages:
          </p>

          <ul>
            <li>
              <strong>Munna Bhai M.B.B.S. (2003):</strong> A lovable street thug named Murli Prasad Sharma (Munna Bhai) decides to fulfill his father’s lifelong dream of seeing him wear a doctor’s white coat. With the unyielding support of his sidekick Circuit (Arshad Warsi), he infiltrates a medical college. The film featured a stellar cast including the late Sunil Dutt, Gracy Singh, Boman Irani, and Jimmy Sheirgill. It emerged as a historic blockbuster and bagged the 2004 National Film Award for Best Popular Film Providing Wholesome Entertainment, marking Sunil Dutt’s final screen appearance.
            </li>
            <li>
              <strong>Lage Raho Munna Bhai (2006):</strong> Sanjay Dutt and Arshad Warsi returned as the unforgettable duo. This time, Munna embraces Gandhian philosophy (popularizing the term <em>Gandhigiri</em>) to resolve complex modern conflicts with kindness, honesty, and flowers, co-starring Vidya Balan and Dilip Prabhavalkar.
            </li>
          </ul>

          <h2>What We Know About Munna Bhai 3 (So Far)</h2>
          <p>
            Here is a quick summary of verified facts regarding the third film:
          </p>

          <ul>
            <li>
              <strong>Farhad Samji</strong> is reportedly writing the screenplay.
            </li>
            <li>
              <strong>Rajkumar Hirani</strong> will return to direct.
            </li>
            <li>
              Cast, storyline, and official release date are yet to be announced.
            </li>
            <li>
              Official announcement from Rajkumar Hirani Films and Vinod Chopra Films is awaited.
            </li>
          </ul>

          <p>
            We will update this space the moment official casting or filming schedules are made public. Stay tuned to <strong>Buzz OG</strong> for the latest verified Bollywood and entertainment scoops.
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
              Related Bollywood Coverage
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
                  href="/shraddha-kapoor-reacts-eetha-trailer-criticism"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Shraddha Kapoor Reacts to Eetha Trailer Trolling: “I Can’t Even Handle My WhatsApp”
                </Link>
              </li>
              <li>
                <Link
                  href="/salman-khan-teri-sexy-beauty-maatrubhumi-song"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Salman Khan Is Singing Again After 11 Years with “Teri Sexy Beauty” from Maatrubhumi
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
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {["Munna Bhai 3", "Farhad Samji", "Rajkumar Hirani", "Sanjay Dutt", "Arshad Warsi", "Bollywood News"].map(
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
