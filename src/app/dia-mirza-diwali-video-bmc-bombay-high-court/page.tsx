import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dia Mirza Diwali Video: HC Orders BMC to Re-Upload | Buzz Originals",
  description:
    "BMC deleted Dia Mirza’s no-firecracker Diwali video after a political row. The Bombay High Court said put it back. Here’s the full story, in simple words.",
  keywords: [
    "Dia Mirza Diwali video",
    "Dia Mirza video row",
    "BMC Dia Mirza video",
    "Bombay High Court Dia Mirza",
    "Dia Mirza firecracker video",
    "BMC Diwali campaign",
    "why did BMC remove Dia Mirza’s video",
    "Bombay High Court order Dia Mirza video",
    "Dia Mirza Diwali video controversy",
    "Dia Mirza reaction to video removal",
    "Ameet Satam Dia Mirza video",
    "is Dia Mirza video back on BMC page",
    "Devendra Fadnavis Dia Mirza",
    "Ritu Tawde Dia Mirza",
  ],
  alternates: {
    canonical: "/dia-mirza-diwali-video-bmc-bombay-high-court",
  },
  openGraph: {
    title: "Dia Mirza Diwali Video: HC Orders BMC to Re-Upload | Buzz Originals",
    description:
      "BMC deleted Dia Mirza’s no-firecracker Diwali video after a political row. The Bombay High Court said put it back. Here’s the full story, in simple words.",
    url: "https://www.buzzoriginals.com/dia-mirza-diwali-video-bmc-bombay-high-court",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/dia-mirza-diwali-video-bmc-bombay-high-court.jpg",
        width: 1200,
        height: 675,
        alt: "Dia Mirza Diwali Video Row: Bombay High Court Orders BMC to Re-Upload Campaign Clip",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dia Mirza Diwali Video: HC Orders BMC to Re-Upload",
    description:
      "BMC deleted Dia Mirza’s no-firecracker Diwali video after a political row. The Bombay High Court said put it back. Here’s the full story, in simple words.",
    images: ["/images/dia-mirza-diwali-video-bmc-bombay-high-court.jpg"],
  },
};

export default function DiaMirzaDiwaliVideoPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Dia Mirza Diwali Video: HC Orders BMC to Re-Upload",
    description:
      "BMC deleted Dia Mirza’s no-firecracker Diwali video after a political row. The Bombay High Court said put it back. Here’s the full story, in simple words.",
    image: [
      "https://www.buzzoriginals.com/images/dia-mirza-diwali-video-bmc-bombay-high-court.jpg",
    ],
    datePublished: "2026-11-05T07:25:00Z",
    dateModified: "2026-11-05T07:25:00Z",
    author: {
      "@type": "Organization",
      name: "Buzz Originals News Desk",
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
      "@id": "https://www.buzzoriginals.com/dia-mirza-diwali-video-bmc-bombay-high-court",
    },
    keywords: [
      "Dia Mirza Diwali video",
      "Dia Mirza video row",
      "BMC Dia Mirza video",
      "Bombay High Court Dia Mirza",
      "Dia Mirza firecracker video",
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
        name: "News",
        item: "https://www.buzzoriginals.com/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Dia Mirza Diwali Video Row: Court Orders BMC to Re-Upload",
        item: "https://www.buzzoriginals.com/dia-mirza-diwali-video-bmc-bombay-high-court",
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
            href="/news"
            className="hover:text-[var(--lime)] transition-colors"
          >
            News
          </Link>
          <span>/</span>
          <span className="text-[var(--lime)]">Dia Mirza Diwali Video Row</span>
        </nav>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ High Court Order</span>
          <span className="badge pink">Dia Mirza</span>
          <span className="badge">BMC Row</span>
          <span className="badge">Diwali Campaign</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp font-black uppercase tracking-tight text-white mb-4"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", lineHeight: 1.15 }}
        >
          Dia Mirza Diwali Video Row: Court Says Put It Back, BMC Still Hasn’t
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--mist)] border-y border-white/[0.08] py-3 mb-6">
          <span className="text-white font-medium">By Buzz Originals Legal &amp; Entertainment Desk</span>
          <span className="dot-sep">◆</span>
          <time dateTime="2026-11-05">November 5, 2026</time>
          <span className="dot-sep">◆</span>
          <span>4 MIN READ</span>
          <span className="dot-sep">◆</span>
          <span className="text-[var(--lime)]">MUMBAI NEWS</span>
        </div>

        {/* Hero Cover Image */}
        <figure className="mb-8">
          <div
            className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
            style={{ width: "100%", aspectRatio: "16 / 9" }}
          >
            <Image
              src="/images/dia-mirza-diwali-video-bmc-bombay-high-court.jpg"
              alt="Dia Mirza Diwali Video Row: Bombay High Court Orders BMC to Re-Upload Awareness Clip"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          <figcaption className="text-xs font-mono text-[var(--mist)] text-center mt-2">
            The Bombay High Court has directed the BMC to re-upload actor Dia Mirza&apos;s anti-pollution Diwali awareness video after it was deleted following a political controversy. (Photo: Buzz Originals)
          </figcaption>
        </figure>

        {/* Social Share Bar */}
        <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/[0.06] text-xs font-mono">
          <span className="text-[var(--mist)] uppercase tracking-wider">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Dia%20Mirza%20Diwali%20Video:%20HC%20Orders%20BMC%20to%20Re-Upload%20https://www.buzzoriginals.com/dia-mirza-diwali-video-bmc-bombay-high-court"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Dia%20Mirza%20Diwali%20Video:%20HC%20Orders%20BMC%20to%20Re-Upload&url=https://www.buzzoriginals.com/dia-mirza-diwali-video-bmc-bombay-high-court"
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
            ⚡ Dia Mirza Diwali Video Controversy: Fast Facts
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
              <strong>High Court Directive:</strong> A Bombay High Court bench comprising Justice Girish Kulkarni and Justice Neela Gokhale pulled up the BMC, expressing “deep pain and displeasure” and ordering the deleted video to be put back online.
            </li>
            <li>
              <strong>Selective Deletion:</strong> The BMC took down only Dia Mirza’s video after Mumbai BJP chief Ameet Satam objected on social media, while awareness videos by Madhuri Dixit, Nishigandha Wad, and cricketer Ajinkya Rahane remained untouched.
            </li>
            <li>
              <strong>Judicial Reprimand:</strong> The court slammed the “petty mindset” behind giving a communal colour to public health awareness, noting that all citizens breathe the same air regardless of religion or caste.
            </li>
            <li>
              <strong>Current Status:</strong> As of November 5, 2026, the BMC has not yet re-uploaded the video as its legal cell reviews the formal court order before Municipal Commissioner Ashwini Bhide makes the final call.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            A simple public health awareness message for an eco-friendly Diwali has exploded into a high-stakes constitutional and political showdown in Mumbai.
          </p>

          <p>
            The <strong>Bombay High Court</strong> has categorically directed the Brihanmumbai Municipal Corporation (BMC) to re-upload Bollywood actor and UN Goodwill Ambassador <strong>Dia Mirza&apos;s</strong> anti-firecracker campaign video. However, as of Thursday, November 5, the civic body is yet to bring the clip back online.
          </p>

          <h2>What Happened?</h2>
          <p>
            Ahead of the festive season, the BMC rolled out an eco-friendly Diwali public awareness drive. The civic campaign urged Mumbai citizens to refrain from bursting firecrackers on public roads and highlighted the severe hazards of seasonal air and noise pollution.
          </p>

          <p>
            Crucially, this campaign was designed in direct compliance with previous directions issued by the Bombay High Court concerning urban air quality. Several notable cultural figures volunteered their voices to champion the cause, including <strong>Dia Mirza</strong>, superstar <strong>Madhuri Dixit</strong>, Marathi actor <strong>Nishigandha Wad</strong>, and Indian cricketer <strong>Ajinkya Rahane</strong>.
          </p>

          <h2>Why Was Dia’s Video Taken Down?</h2>
          <p>
            The controversy erupted when Mumbai BJP chief <strong>Ameet Satam</strong> posted an objection on X (formerly Twitter), directly tagging the civic administration’s official handle.
          </p>

          <p>
            Yielding swiftly to political pressure, the BMC pulled down Dia Mirza’s clip from its social media feeds late on Sunday night. The following morning, Mumbai Mayor <strong>Ritu Tawde</strong> defended the civic body’s decision and stoked further outrage by publicly labelling Mirza “anti-Hindu.”
          </p>

          <p>
            Here lies the glaring twist that drew legal scrutiny: while identical anti-pollution awareness clips featuring Madhuri Dixit, Nishigandha Wad, and Ajinkya Rahane remained proudly hosted on the BMC&apos;s channels, only Dia Mirza&apos;s video was singled out and erased.
          </p>

          <h2>What Did Dia Mirza Say?</h2>
          <p>
            Responding to the unfair targeting and political uproar, Dia Mirza hit back with clarity and poise, pointing out that public health should never be weaponized for religious polarisation:
          </p>

          <blockquote>
            “Why should anyone be critical of a video that the Honourable Bombay High Court and BMC have made me record in public interest?”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Dia Mirza responding to the video removal
            </footer>
          </blockquote>

          <p>
            She reiterated that her voluntary appeal was strictly anchored in environmental preservation and respiratory health for children and senior citizens, having absolutely nothing to do with faith or festival traditions.
          </p>

          <h2>What Did the Bombay High Court Say?</h2>
          <p>
            Taking suo motu cognisance of the deletion, a division bench of <strong>Justice Girish Kulkarni</strong> and <strong>Justice Neela Gokhale</strong> expressed profound shock and displeasure at the civic body&apos;s capitulation to communal rhetoric.
          </p>

          <p>
            Calling out the “petty mindset” of those who attacked the awareness initiative, the High Court bench delivered a stern reminder of constitutional values:
          </p>

          <blockquote>
            “There has to be a secular spirit, and the Constitution expects citizens to foster the same. If the clip was taken off, then it would be ideal that the same should be re-uploaded.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Bombay High Court Bench of Justice Girish Kulkarni &amp; Justice Neela Gokhale
            </footer>
          </blockquote>

          <p>
            The judges emphasized that toxic air does not discriminate on religious lines:
          </p>

          <blockquote>
            “We are a secular country. We are really hurt by this. The issue pertains to the environment and every person, irrespective of their religion and caste, is breathing the same air.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Bombay High Court Bench
            </footer>
          </blockquote>

          <p>
            The bench also clarified two critical legal positions:
          </p>

          <ul>
            <li>
              <strong>Autonomy in Celebrity Outreach:</strong> The BMC was completely within its rights to enlist celebrities to disseminate public health warnings, and external political entities have no standing to dictate its choice of spokesperson.
            </li>
            <li>
              <strong>Year-Round Firecracker Prohibition:</strong> The judicial ban on bursting crackers on public thoroughfares applies all 365 days of the year, not exclusively during Diwali.
            </li>
          </ul>

          <h2>Who Is Dia Mirza in the Environment Space?</h2>
          <p>
            Dia Mirza’s environmental activism is neither reactionary nor ceremonial. In 2017, she was officially appointed as the <strong>UN Environment Programme (UNEP) Goodwill Ambassador for India</strong>. By 2019, the United Nations Secretary-General designated her an <strong>Advocate for Sustainable Development Goals (SDGs)</strong>.
          </p>

          <p>
            For more than a decade, Mirza has been on the frontlines of grassroots conservation, combating single-use plastic waste, championing wildlife corridors, and spearheading clean air initiatives across metropolitan India.
          </p>

          <h2>What Did the Maharashtra CM Say?</h2>
          <p>
            Maharashtra Chief Minister <strong>Devendra Fadnavis</strong> downplayed the judicial intervention, arguing that civic media administration falls under municipal discretion:
          </p>

          <blockquote>
            “I don’t know whether the High Court reprimanded anyone or expressed any opinion, because this matter did not even go to the High Court. So, where is the question of a reprimand? The video was deleted at the BMC’s discretion.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Maharashtra CM Devendra Fadnavis
            </footer>
          </blockquote>

          <h2>How Did the Opposition React?</h2>
          <p>
            Opposition parties welcomed the High Court’s sharp rebuke. AIMIM spokesperson <strong>Waris Pathan</strong> lauded the judiciary’s stance, stating: <em>“They (BMC) received a proper reprimand for their bias.”</em>
          </p>

          <p>
            NCP (SP) MLA <strong>Rohit Pawar</strong> and other leaders alleged that Dia was singled out purely because of her Muslim surname, condemning the municipal corporation for buckling under sectarian intimidation. Meanwhile, Congress municipal corporator <strong>Ashraf Azmi</strong> ignited fiery debates at the BMC standing committee meeting, clashing aggressively with ruling coalition members over institutional cowardice.
          </p>

          <h2>Is the Video Back Yet?</h2>
          <p>
            As of Thursday afternoon, the video has not been restored. Senior BMC officials stated that the formal copy of the High Court order was received late on Wednesday evening.
          </p>

          <p>
            The municipal legal cell is currently reviewing the directive, after which Municipal Commissioner <strong>Ashwini Bhide</strong> will take the definitive decision on re-uploading the media clip.
          </p>

          <h2>What’s Next?</h2>
          <p>
            With the judiciary taking a definitive stand on public health over sectarian politics, all eyes are squarely on the BMC headquarters. Whether the civic administration demonstrates the constitutional backbone to comply with the High Court&apos;s order will set a precedent for Mumbai&apos;s urban discourse.
          </p>

          <p>
            Stay connected with <strong>Buzz Originals</strong> for real-time updates as this story develops.
          </p>

          {/* Related Coverage Box */}
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
              Related Political &amp; Entertainment Headlines
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
                  href="/munna-bhai-3-farhad-samji-writing-script"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Munna Bhai 3: Farhad Samji Begins Writing the Script for Rajkumar Hirani
                </Link>
              </li>
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
                  href="/tusshar-kapoor-extortion-call-bishnoi-gang-fake"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Tusshar Kapoor Gets Rs 5 Crore Extortion Call in Bishnoi Gang’s Name: Police Suspect Hoax
                </Link>
              </li>
              <li>
                <Link
                  href="/honey-trehan-slams-new-cbfc-advisory-satluj"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Satluj Director Honey Trehan Slams CBFC’s New Advisory: “Cowardice and Dictatorship”
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {["Dia Mirza", "BMC", "Bombay High Court", "Diwali Controversy", "Ameet Satam", "Bollywood News"].map(
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
