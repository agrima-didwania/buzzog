import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Suryaa Ant Se Aarambh Tak Postponed to 2027: Why? | Buzz Originals",
  description:
    "Sunny Deol’s Suryaa: Ant Se Aarambh Tak will not release on November 20. Here is why the film is postponed to 2027 and what happens next.",
  keywords: [
    "Suryaa Ant Se Aarambh Tak postponed",
    "Sunny Deol new movie",
    "Suryaa release date",
    "IMA objection",
    "Suryaa CBFC",
    "Sunny Deol 2026 releases",
    "Suryaa movie postponed 2027",
    "Joseph remake Hindi",
    "Sunny Deol Border 2",
    "Bollywood news",
    "Ashwini Vaishnaw Suryaa teaser",
    "M Padmakumar Sunny Deol",
  ],
  alternates: {
    canonical: "/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027",
  },
  openGraph: {
    title: "Suryaa Ant Se Aarambh Tak Postponed to 2027: Why? | Buzz Originals",
    description:
      "Sunny Deol’s Suryaa: Ant Se Aarambh Tak will not release on November 20. Here is why the film is postponed to 2027 and what happens next.",
    url: "https://www.buzzoriginals.com/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027.jpg",
        width: 1200,
        height: 675,
        alt: "Sunny Deol Suryaa Ant Se Aarambh Tak Postponed to 2027",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suryaa Ant Se Aarambh Tak Postponed to 2027: Why?",
    description:
      "Sunny Deol’s Suryaa: Ant Se Aarambh Tak will not release on November 20. Here is why the film is postponed to 2027 and what happens next.",
    images: ["/images/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027.jpg"],
  },
};

export default function SuryaaPostponedPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Sunny Deol’s Suryaa: Ant Se Aarambh Tak Postponed to 2027 After IMA Objection",
    description:
      "Sunny Deol’s Suryaa: Ant Se Aarambh Tak will not release on November 20. Here is why the film is postponed to 2027 and what happens next.",
    image: [
      "https://www.buzzoriginals.com/images/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027.jpg",
    ],
    datePublished: "2026-11-16T06:50:00Z",
    dateModified: "2026-11-16T06:50:00Z",
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
      "@id": "https://www.buzzoriginals.com/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027",
    },
    keywords: [
      "Suryaa Ant Se Aarambh Tak postponed",
      "Sunny Deol new movie",
      "Suryaa release date",
      "IMA objection",
      "Suryaa CBFC",
      "Sunny Deol 2026 releases",
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
        name: "Suryaa Postponed to 2027",
        item: "https://www.buzzoriginals.com/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027",
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
          <span className="text-[var(--lime)]">Suryaa Postponed to 2027</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ BREAKING DELAY</span>
          <span className="badge pink">Suryaa (2027)</span>
          <span className="badge">Sunny Deol</span>
          <span className="badge">IMA Objection</span>
          <span className="badge">CBFC Update</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Sunny Deol’s Suryaa: Ant Se Aarambh Tak Postponed to 2027 After IMA Objection
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>4 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD NEWS</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027.jpg"
            alt="Sunny Deol Suryaa Ant Se Aarambh Tak Postponed to 2027"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Sunny Deol’s upcoming investigative drama Suryaa: Ant Se Aarambh Tak has been deferred from its November 20, 2026 date following objections by the Indian Medical Association (IMA). (Photo: Buzz Originals / T-Series)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Suryaa%20Ant%20Se%20Aarambh%20Tak%20Postponed%20to%202027:%20Why?%20-%20https://www.buzzoriginals.com/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Suryaa%20Ant%20Se%20Aarambh%20Tak%20Postponed%20to%202027:%20Why?&url=https://www.buzzoriginals.com/sunny-deol-suryaa-ant-se-aarambh-tak-postponed-2027"
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
            <span>Suryaa Postponement: Key Takeaways</span>
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
              <strong>Release Pushed to 2027:</strong> Sunny Deol’s hard-hitting investigative thriller <em>Suryaa: Ant Se Aarambh Tak</em> will not release on its scheduled November 20, 2026 date and is now eyeing early 2027.
            </li>
            <li>
              <strong>IMA Protest to Centre:</strong> The Indian Medical Association formally petitioned Information &amp; Broadcasting Minister Ashwini Vaishnaw, claiming the teaser maligns doctors and risks public hostility against healthcare workers.
            </li>
            <li>
              <strong>Clearances Over Rush:</strong> Makers chose to resolve grievances through ministerial channels and secure complete CBFC certification rather than enter an overcrowded December box office.
            </li>
            <li>
              <strong>Court &amp; Censor Stand:</strong> Delhi High Court dismissed a parallel PIL on November 4 to avoid overlapping proceedings, while the CBFC stated the movie had not yet completed certification.
            </li>
            <li>
              <strong>Historic 4 Releases Intact:</strong> Even with <em>Suryaa</em> moving to 2027, Sunny Deol celebrates a rare 4-project year in 2026 with <em>Border 2</em>, <em>Batwara 1947</em>, <em>Ramayana</em> (Lord Hanuman cameo), and <em>Ikka</em> on Netflix.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Sunny Deol fans awaiting his next high-octane theatrical ride will have to hold their horses a little longer. <strong>Suryaa: Ant Se Aarambh Tak</strong>, which was locked for a nationwide theatrical release on November 20, 2026, will not be arriving on its scheduled date.
          </p>

          <p>
            The production team has reportedly made the strategic call to push the film into early 2027 following formal objections raised by the Indian Medical Association (IMA) regarding the portrayal of medical professionals in the promotional material.
          </p>

          <h2>Why Was Suryaa: Ant Se Aarambh Tak Postponed?</h2>
          <p>
            The controversy erupted shortly after the teaser of <em>Suryaa: Ant Se Aarambh Tak</em> was unveiled on October 19, coinciding with Sunny Deol’s birthday. While trade analysts and cinephiles lauded the teaser’s gritty visual tone and intense action sequences, representatives of the medical fraternity took sharp umbrage at the narrative premise shown on screen.
          </p>

          <p>
            According to a comprehensive report by <em>Bollywood Hungama</em>, the producers concluded that navigating the mounting ministerial notices and legal petitions required sufficient breathing room, opting to defer the theatrical bow rather than rush into theaters under regulatory clouds.
          </p>

          <h2>What Did the IMA Object To?</h2>
          <p>
            On October 22, the Indian Medical Association sent a strongly worded formal letter to Information and Broadcasting Minister Ashwini Vaishnaw. The communication was signed directly by IMA National President Dr. Anilkumar J. Nayak, with copies forwarded to the Ministry of Health and Family Welfare, the Ministry of Home Affairs, and the chairperson of the National Medical Commission (NMC).
          </p>

          <p>
            In their petition, the medical body argued that the teaser:
          </p>
          <ul>
            <li>Portrays the medical fraternity and hospital networks in a sweeping, criminalized light</li>
            <li>Depicts gratuitous physical violence directed against healthcare practitioners</li>
            <li>Threatens to erode public faith in critical medical infrastructure and heightens workplace safety hazards for duty doctors</li>
          </ul>

          <blockquote>
            “The teaser paints the entire medical profession as corrupt and promotes hostility against doctors who serve on the frontlines. This will severely damage trust between patients and physicians.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Excerpt from IMA’s representation to the Union Government
            </footer>
          </blockquote>

          <p>
            The IMA urged the Centre to re-evaluate the teaser’s certification and explore administrative remedies, including potential exhibition stays. Furthermore, reports indicated that as many as 34 state and Union Territory chapters of the IMA stood prepared to escalate the representation.
          </p>

          <h2>What Do the Makers Say?</h2>
          <p>
            A source closely connected to the production confirmed to <em>Bollywood Hungama</em> that the matter is currently under review by the Health Ministry. The creators maintain that the film is a fictionalized drama and has no intention of defaming medical professionals or glorifying vigilantism against healthcare personnel.
          </p>

          <p>
            The producers have laid out a clear roadmap for moving forward:
          </p>
          <ol>
            <li>Engage transparently with ministerial authorities to provide necessary narrative clarifications and context</li>
            <li>Submit the final edit to the Central Board of Film Certification (CBFC) for formal review and censor certification</li>
            <li>Announce a revitalized marketing campaign and confirmed release date once all official clearances are securely in hand</li>
          </ol>

          <p>
            With the December 2026 theatrical corridor already intensely packed with major Bollywood tentpoles and international Hollywood releases, the makers are currently eyeing <strong>January 15, 2027</strong> as a potential release window, though no official date will be finalized until regulatory procedures conclude.
          </p>

          <h2>CBFC and Court Proceedings: The Legal Timeline</h2>
          <p>
            The postponement comes against the backdrop of fast-moving institutional and judicial developments:
          </p>
          <ul>
            <li><strong>CBFC Update (October 22):</strong> The Censor Board officially stated that the feature film had not yet been formally submitted by the makers for censorship scrutiny.</li>
            <li><strong>Delhi High Court Ruling (November 4):</strong> A division bench of the Delhi High Court declined to entertain a Public Interest Litigation (PIL) filed by two practicing doctors seeking a stay on the release. The bench observed that an identical petition by doctors was already pending before a single judge, noting: <em>“We see no reason for multiplicity of proceedings.”</em></li>
            <li><strong>Court Testimony:</strong> During the hearing, counsel representing the CBFC confirmed that the film had not yet received its censor certificate.</li>
          </ul>

          <h2>About the Film: The Hindi Adaptation of Joseph</h2>
          <p>
            <em>Suryaa: Ant Se Aarambh Tak</em> is the official Hindi adaptation of the critically acclaimed 2018 Malayalam investigative thriller <em>Joseph</em>, which originally starred Joju George. Acclaimed filmmaker M. Padmakumar, who helmed the Malayalam original, is making his Hindi directorial debut with this project.
          </p>

          <p>
            In the film, Sunny Deol stars as Soorya Pratap Singh, a retired police investigator dealing with personal bereavement and complex organ trade syndicates. The ensemble features powerhouse performers including Ravi Kishan, Pragya Jaiswal, and Jisshu U. Sengupta.
          </p>

          <p>
            The soundtrack also generated massive nostalgia earlier this year with the romantic track <em>“Suniyo Zara”</em>, which reunited legendary playback icons Udit Narayan and Kumar Sanu for a joint duet after a 21-year gap.
          </p>

          <h2>Sunny Deol Still Marks a Historic 4-Release Year in 2026</h2>
          <p>
            Even with <em>Suryaa</em> shifting to 2027, 2026 remains a monumental milestone year for Sunny Deol. For the first time in 19 years, the action superstar boasts four high-profile projects across cinema halls and digital streaming platforms:
          </p>
          <div
            style={{
              padding: "20px",
              background: "var(--ink-2)",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              margin: "24px 0",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontFamily: "var(--font-space-mono)", fontSize: "14px" }}>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Border 2</span>
                <span className="text-[var(--lime)]">Theatrical Tentpole</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Batwara 1947</span>
                <span className="text-[var(--lime)]">Historical Drama</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
                <span className="text-white font-bold">Ramayana</span>
                <span className="text-[var(--lime)]">Lord Hanuman Cameo (End Credits)</span>
              </li>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="text-white font-bold">Ikka</span>
                <span className="text-[var(--pink)]">Direct-to-Digital on Netflix</span>
              </li>
            </ul>
          </div>

          <p>
            The last time Sunny Deol commanded four releases in a single calendar year was in 2007, when <em>Big Brother</em>, <em>Fool N Final</em>, <em>Apne</em>, and <em>Kaafila</em> all premiered.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for continuous updates on the Delhi High Court hearings, CBFC certification, and the confirmed 2027 theatrical release date for <em>Suryaa: Ant Se Aarambh Tak</em>.
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
              Related Bollywood &amp; Movie Exclusives
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
              <li>
                <Link
                  href="/soni-razdan-100-cigarettes-gumrah-alia-bhatt"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Soni Razdan Smoked 100 Cigarettes in a Day on Gumrah Set Pregnant With Alia
                </Link>
              </li>
              <li>
                <Link
                  href="/student-of-the-year-after-dark-reema-maya-class-comparison"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Student of the Year After Dark vs Class: Reema Maya Reacts to Copy Claims
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Sunny Deol",
            "Suryaa",
            "Suryaa Ant Se Aarambh Tak",
            "Bollywood News",
            "Movie Postponed",
            "Indian Medical Association",
            "CBFC",
            "M Padmakumar",
            "Border 2",
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
