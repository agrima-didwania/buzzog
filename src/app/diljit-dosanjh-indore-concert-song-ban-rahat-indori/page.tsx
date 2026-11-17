import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diljit Dosanjh Hits Back at Indore Song Ban | Buzz Originals",
  description:
    "Diljit Dosanjh was told not to sing four songs at his Indore concert. His reply on stage, a famous Rahat Indori couplet, is going viral. Here is the full story.",
  keywords: [
    "Diljit Dosanjh Indore concert",
    "Diljit Dosanjh song ban",
    "Rahat Indori couplet",
    "Aura India Tour 2026",
    "Diljit Dosanjh Indore controversy",
    "Kisi Ke Baap Ka Hindustan Thodi Hai",
    "Patiala Peg",
    "Indore concert song restrictions",
    "Diljit Dosanjh Mahakal chant",
    "Bollywood News",
    "Live Concerts",
  ],
  alternates: {
    canonical: "/diljit-dosanjh-indore-concert-song-ban-rahat-indori",
  },
  openGraph: {
    title: "Diljit Dosanjh Hits Back at Indore Song Ban | Buzz Originals",
    description:
      "Diljit Dosanjh was told not to sing four songs at his Indore concert. His reply on stage, a famous Rahat Indori couplet, is going viral. Here is the full story.",
    url: "https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-song-ban-rahat-indori",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/diljit-dosanjh-indore-concert-song-ban-rahat-indori.jpg",
        width: 1200,
        height: 675,
        alt: "Diljit Dosanjh Answers Indore Song Ban With Rahat Indori Famous Lines",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diljit Dosanjh Hits Back at Indore Song Ban",
    description:
      "Diljit Dosanjh was told not to sing four songs at his Indore concert. His reply on stage, a famous Rahat Indori couplet, is going viral. Here is the full story.",
    images: ["/images/diljit-dosanjh-indore-concert-song-ban-rahat-indori.jpg"],
  },
};

export default function DiljitIndoreSongBanPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Diljit Dosanjh Answers Indore Song Ban With Rahat Indori’s Famous Lines",
    description:
      "Diljit Dosanjh was told not to sing four songs at his Indore concert. His reply on stage, a famous Rahat Indori couplet, is going viral. Here is the full story.",
    image: [
      "https://www.buzzoriginals.com/images/diljit-dosanjh-indore-concert-song-ban-rahat-indori.jpg",
    ],
    datePublished: "2026-11-17T06:00:00Z",
    dateModified: "2026-11-17T06:00:00Z",
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
      "@id": "https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-song-ban-rahat-indori",
    },
    keywords: [
      "Diljit Dosanjh Indore concert",
      "Diljit Dosanjh song ban",
      "Rahat Indori couplet",
      "Kisi Ke Baap Ka Hindustan Thodi Hai",
      "Aura India Tour 2026",
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
        name: "Diljit Dosanjh Indore Song Ban",
        item: "https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-song-ban-rahat-indori",
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
          <span className="text-[var(--lime)]">Diljit Indore Song Ban</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ LIVE CONCERT SCOOP</span>
          <span className="badge pink">Diljit Dosanjh</span>
          <span className="badge">Aura India Tour</span>
          <span className="badge">Rahat Indori Couplet</span>
          <span className="badge">Indore Controversy</span>
          <span className="badge">Song Ban</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Diljit Dosanjh Answers Indore Song Ban With Rahat Indori’s Famous Lines
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-17">November 17, 2026</time>
          <span>◆</span>
          <span>4 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD &amp; CONCERTS</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/diljit-dosanjh-indore-concert-song-ban-rahat-indori.jpg"
            alt="Diljit Dosanjh Answers Indore Song Ban With Rahat Indori Famous Lines"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Diljit Dosanjh hits back at authorities who placed restrictions on his setlist, reciting late poet Rahat Indori’s iconic verses on stage in Indore. (Photo: Buzz Originals / Aura India Tour)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Diljit%20Dosanjh%20Hits%20Back%20at%20Indore%20Song%20Ban%20-%20https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-song-ban-rahat-indori"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Diljit%20Dosanjh%20Hits%20Back%20at%20Indore%20Song%20Ban&url=https://www.buzzoriginals.com/diljit-dosanjh-indore-concert-song-ban-rahat-indori"
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
            <span>Diljit Dosanjh Indore Concert: Key Highlights</span>
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
              <strong>Stage Reply to 4-Song Ban:</strong> Told not to perform four chartbusters in Indore, Diljit addressed the curbs mid-concert before delivering a fiery recitation of Rahat Indori’s poetry.
            </li>
            <li>
              <strong>Iconic Rahat Indori Couplet:</strong> Recited <em>“Sabhi ka khoon hai shamil yahan ki mitti mein, kisi ke baap ka Hindustan thodi hai”</em> to roaring applause from tens of thousands of attendees.
            </li>
            <li>
              <strong>“Land of Mahakal”:</strong> Diljit began the performance chanting <em>“Jai Shri Mahakal”</em> and declared that no power could stop him from singing on sacred soil.
            </li>
            <li>
              <strong>The Poha Promise Kept:</strong> Diljit fulfilled his pre-show promise to eat authentic Indori poha before rocking the stage, posting photos of the breakfast on his Instagram Stories.
            </li>
            <li>
              <strong>Hoax Bomb Threats Neutralized:</strong> The concert proceeded safely despite hoax emails threatening blasts across schools and the Indore Mayor’s office prior to the event.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            <strong>Diljit Dosanjh’s</strong> Indore concert made headlines even before it started. Days before the show, he was told not to sing four of his popular songs. On stage, he answered in his own style, with a famous couplet by the late poet <strong>Rahat Indori</strong>. The video is now going viral.
          </p>

          <h2>What Happened at the Indore Concert?</h2>
          <p>
            The concert took place on <strong>Sunday, November 15, 2026</strong>, at C21 Estate in Indore. It was part of Diljit’s nationwide <strong>Aura India Tour 2026</strong>.
          </p>
          <p>
            Midway through the show, Diljit spoke about the restrictions placed on his setlist. He was heard saying:
          </p>
          <blockquote>
            “Ye nahin gaana, wo nahin gaana, ye nahin kar sakte, wo nahin kar sakte (Don’t sing this, don’t sing that, you can’t do this, you can’t do that).”
          </blockquote>
          <p>
            He then recited Rahat Indori’s well-known lines:
          </p>
          <blockquote>
            “Humare mooh se jo nikle wahi sadaqat hai, humare munh mein tumhari zubaan thodi hai. Agar khilaf hain toh hone do, jaan thodi hai, Ye sab dhuan hai, koi aasman thodi hai. Main jaanta hoon ki dushman bhi kam nahin lekin humari tarah hatheli pe jaan thodi hai. Sabhi ka khoon hai shamil yahan ki mitti mein, kisi ke baap ka Hindustan thodi hai.”
            <footer style={{ marginTop: "10px", fontSize: "14px", color: "var(--mist)", fontStyle: "normal" }}>
              <em>(What comes out of our mouths is the truth, We don’t have your tongue in our mouths. If they are against us, let them be, it’s not life, it’s all smoke, it’s not the sky. I know the enemy is no less, but they don’t have their life on the palm of their hand like we do. Everyone’s blood is mixed in this soil, This isn’t anyone’s father’s India.)</em>
            </footer>
          </blockquote>
          <p>
            The crowd reportedly cheered loudly. Diljit later posted a video of the moment on his official Instagram account.
          </p>

          <h2>“This Is the Land of Mahakal”</h2>
          <p>
            Diljit also said that attempts were made to stop him from coming to Indore. As reported by PTI:
          </p>
          <blockquote>
            “Look, this is the land of Mahakal, and nobody can stop us from coming here. We weren’t afraid earlier and aren’t afraid today. And where is the question of you being afraid? It is your power that has brought us here today.”
          </blockquote>
          <p>
            Reports also say he began the show by asking the massive audience to chant <strong>“Jai Shri Mahakal.”</strong>
          </p>

          <h2>The Poha Promise</h2>
          <p>
            A week before the show, Diljit went live on Instagram and told fans not to believe the negative reports. He said:
          </p>
          <blockquote>
            “No matter what they say, I am coming to Indore on the 15th. First we will eat poha, 101 per cent and then, with that energy, we will rock the show. You don’t need to worry or listen to any reports.”
          </blockquote>
          <p>
            He kept his word. After the concert, he shared a plate of fresh Indori poha on his Instagram Stories, along with high-energy clips from the evening’s performance.
          </p>

          <h2>Which 4 Songs Were Restricted?</h2>
          <p>
            On November 6, the District Child Protection Officer in Indore told the management of C-21 Mall to make sure Diljit did not perform four songs. The songs named were:
          </p>
          <ul>
            <li><strong>Patiala Peg</strong></li>
            <li><strong>5 Taara Theeke</strong></li>
            <li><strong>Jeeb Vicho Labbhiya</strong> (also written as “Case”)</li>
            <li><strong>Jatt Uthe Fire Karda Jithe Pabandi Hathiyara Di</strong> (also called “Jatt Fire Karda”)</li>
          </ul>
          <p>
            <em>Note: Different news outlets spell these song names differently. We have used the spellings from the official report.</em>
          </p>

          <h2>Why Were They Restricted?</h2>
          <p>
            The order came after a formal complaint from Dr Panditrao Dharennavar, a professor from Chandigarh. He stated that the lyrics promote alcohol, drugs, and firearms. The order also pointed to a 2019 Punjab and Haryana High Court direction concerning tracks that glorify intoxicants and violence, citing the potential impact on minors attending the concert.
          </p>
          <p>
            The venue organizers were instructed to adhere strictly to these guidelines.
          </p>

          <h2>Did Diljit Still Sing “Patiala Peg”?</h2>
          <p>
            According to PTI, Diljit shared a fan’s video from the concert on his Instagram Stories in which he appeared to be performing <strong>“Patiala Peg.”</strong> Reports have not confirmed exactly how the setlist was managed on the night or whether altered lyrics were utilized.
          </p>

          <h2>Bomb Threat Emails Before the Show</h2>
          <p>
            The concert was also shadowed by an earlier security scare. Three private schools and the office of Indore Mayor Pushyamitra Bhargava received bomb threat emails referencing the upcoming tour date. The emails warned of potential blasts on November 15 and advised schools to withhold students.
          </p>
          <p>
            Local police responded swiftly:
          </p>
          <ul>
            <li>Bomb disposal squads inspected all three schools thoroughly and confirmed no explosives were present.</li>
            <li>Additional Deputy Commissioner of Police Rajesh Dandotiya stated that the emails appeared to be hoaxes intended to generate panic.</li>
            <li>The Indore Crime Branch is analyzing IP logs and technical data to identify the origin of the transmissions.</li>
            <li>Investigators noted that the threat messages were composed in Punjabi.</li>
          </ul>

          <h2>Not the First Time in Indore</h2>
          <p>
            This is not the first time Diljit has invoked Rahat Indori’s poetry in Indore. On December 8, 2024, during his <em>Dil-Luminati India Tour</em>, he recited the exact same ghazal at the same venue. That earlier show had also faced pre-concert legal notices, prompting him to dedicate his stage performance to the revered late poet.
          </p>

          <h2>Trouble Elsewhere on the Tour</h2>
          <p>
            Indore is not the only stop where Diljit has encountered hurdles during the 2026 tour:
          </p>
          <ul>
            <li>
              <strong>Delhi (October 30):</strong> Delhi Police initially held back clearance at Jawaharlal Nehru Stadium over crowd control and traffic logistics. Organizers submitted an augmented security blueprint involving 2,000 personnel and a 700-metre no-vehicle perimeter before permissions were granted. Following the show, Diljit publicly thanked Delhi Police.
            </li>
            <li>
              <strong>Bihar:</strong> In an Instagram Live interaction, Diljit revealed that proposed tour dates in Bihar could not materialize because authorities asked him to assume full legal liability for crowd safety, a responsibility he felt belonged to the civic administration.
            </li>
          </ul>

          <h2>Where Will Diljit Perform Next?</h2>
          <p>
            Here are the remaining confirmed stops on Diljit Dosanjh’s <strong>Aura India Tour 2026</strong>:
          </p>

          {/* Tour Dates Table */}
          <div
            style={{
              margin: "24px 0",
              overflowX: "auto",
              borderRadius: "12px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
              }}
            >
              <thead>
                <tr style={{ background: "rgba(223, 255, 0, 0.08)", borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>City</th>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Date</th>
                  <th style={{ padding: "12px 16px", color: "var(--lime)" }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold" }}>Ahmedabad</td>
                  <td style={{ padding: "12px 16px" }}>November 21, 2026</td>
                  <td style={{ padding: "12px 16px", color: "var(--lime)" }}>Next Stop</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold" }}>Mumbai</td>
                  <td style={{ padding: "12px 16px" }}>November 27, 2026</td>
                  <td style={{ padding: "12px 16px" }}>Confirmed</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold" }}>Bengaluru</td>
                  <td style={{ padding: "12px 16px" }}>November 29, 2026</td>
                  <td style={{ padding: "12px 16px" }}>Confirmed</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold" }}>Lucknow</td>
                  <td style={{ padding: "12px 16px" }}>December 5, 2026</td>
                  <td style={{ padding: "12px 16px" }}>Confirmed</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "12px 16px", fontWeight: "bold" }}>Chandigarh</td>
                  <td style={{ padding: "12px 16px" }}>December 12, 2026</td>
                  <td style={{ padding: "12px 16px" }}>Added Show</td>
                </tr>
                <tr>
                  <td style={{ padding: "12px 16px", fontWeight: "bold" }}>Kolkata</td>
                  <td style={{ padding: "12px 16px" }}>December 19, 2026</td>
                  <td style={{ padding: "12px 16px" }}>Added Show</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for more OTT reviews, reality show updates and Bollywood gossip.
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
                  href="/yogesh-rawat-justin-dcruz-roadies-rebirth-pi"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Yogesh Rawat Takes a Dig at Justin D’Cruz After Roadies Rebirth PI Round
                </Link>
              </li>
              <li>
                <Link
                  href="/shilpa-shetty-host-pyaar-ka-pressure-cooker"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Shilpa Shetty to Host Pyaar Ka Pressure Cooker on Colors
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
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "DiljitDosanjh",
            "AuraIndiaTour2026",
            "RahatIndori",
            "IndoreConcert",
            "PatialaPeg",
            "KisiKeBaapKaHindustanThodiHai",
            "BollywoodNews",
            "LiveConcerts",
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
