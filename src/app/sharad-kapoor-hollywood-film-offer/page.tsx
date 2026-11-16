import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sharad Kapoor Hollywood Film Offer After Viral Video | Buzz Originals",
  description:
    "Josh actor Sharad Kapoor says he has a Hollywood film offer, shooting starts in January. Here is what he said about his viral video, his health and his comeback.",
  keywords: [
    "Sharad Kapoor Hollywood film",
    "Sharad Kapoor viral video",
    "Sharad Kapoor Josh",
    "Sharad Kapoor appeal for work",
    "Sharad Kapoor news",
    "Bollywood news",
    "Sharad Kapoor comeback",
    "Josh movie Prakash",
    "Sharad Kapoor health",
    "AICWA Sharad Kapoor",
    "Sonu Sood Sharad Kapoor",
  ],
  alternates: {
    canonical: "/sharad-kapoor-hollywood-film-offer",
  },
  openGraph: {
    title: "Sharad Kapoor Hollywood Film Offer After Viral Video | Buzz Originals",
    description:
      "Josh actor Sharad Kapoor says he has a Hollywood film offer, shooting starts in January. Here is what he said about his viral video, his health and his comeback.",
    url: "https://www.buzzoriginals.com/sharad-kapoor-hollywood-film-offer",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/sharad-kapoor-hollywood-film-offer.jpg",
        width: 1200,
        height: 675,
        alt: "Sharad Kapoor Hollywood Film Offer After Viral Video",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharad Kapoor Hollywood Film Offer After Viral Video",
    description:
      "Josh actor Sharad Kapoor says he has a Hollywood film offer, shooting starts in January. Here is what he said about his viral video, his health and his comeback.",
    images: ["/images/sharad-kapoor-hollywood-film-offer.jpg"],
  },
};

export default function SharadKapoorHollywoodPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Sharad Kapoor Gets a Hollywood Film Offer After His Viral Video Asking for Work",
    description:
      "Josh actor Sharad Kapoor says he has a Hollywood film offer, shooting starts in January. Here is what he said about his viral video, his health and his comeback.",
    image: [
      "https://www.buzzoriginals.com/images/sharad-kapoor-hollywood-film-offer.jpg",
    ],
    datePublished: "2026-11-16T06:28:00Z",
    dateModified: "2026-11-16T06:28:00Z",
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
      "@id": "https://www.buzzoriginals.com/sharad-kapoor-hollywood-film-offer",
    },
    keywords: [
      "Sharad Kapoor Hollywood film",
      "Sharad Kapoor viral video",
      "Sharad Kapoor Josh",
      "Sharad Kapoor appeal for work",
      "Sharad Kapoor news",
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
        name: "Sharad Kapoor Hollywood Film Offer",
        item: "https://www.buzzoriginals.com/sharad-kapoor-hollywood-film-offer",
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
          <span className="text-[var(--lime)]">Sharad Kapoor Hollywood Film</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ EXCLUSIVE SCOOP</span>
          <span className="badge pink">Hollywood Debut</span>
          <span className="badge">Sharad Kapoor</span>
          <span className="badge">Josh Actor</span>
          <span className="badge">Bollywood Comeback</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Sharad Kapoor Gets a Hollywood Film Offer After His Viral Video Asking for Work
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-16">November 16, 2026</time>
          <span>◆</span>
          <span>3 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">BOLLYWOOD COMEBACK</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/sharad-kapoor-hollywood-film-offer.jpg"
            alt="Sharad Kapoor Gets a Hollywood Film Offer After His Viral Video Asking for Work"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Sharad Kapoor, best known for his menacing role in Josh (2000), revealed he has received a Hollywood project offer after an emotional video asking for work went viral online. (Photo: Buzz Originals / HT City)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Sharad%20Kapoor%20Hollywood%20Film%20Offer%20After%20Viral%20Video%20-%20https://www.buzzoriginals.com/sharad-kapoor-hollywood-film-offer"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Sharad%20Kapoor%20Hollywood%20Film%20Offer%20After%20Viral%20Video&url=https://www.buzzoriginals.com/sharad-kapoor-hollywood-film-offer"
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
            <span>Sharad Kapoor Comeback: Key Takeaways</span>
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
              <strong>Hollywood Debut in January:</strong> <em>Josh</em> actor Sharad Kapoor revealed he has been offered an international Hollywood film, with filming slated to kick off this January.
            </li>
            <li>
              <strong>Viral Video Context:</strong> Sharad clarified that his recent video asking for industry roles was meant to seek creative engagement after returning from New York, not a plea for financial charity.
            </li>
            <li>
              <strong>Mental Health &amp; Past Turmoil:</strong> The actor candidly spoke about battling deep depression and spending nearly three years bedridden following distress caused by a 2024 harassment case.
            </li>
            <li>
              <strong>Injury &amp; Pets:</strong> Sharad suffered a severe leg injury while playing football in Barcelona and is currently on doctor-ordered bed rest, temporarily housing his four dogs at a shelter until moving to a Madh Island bungalow.
            </li>
            <li>
              <strong>Industry Solidarity:</strong> The All Indian Cine Workers Association (AICWA) issued an appeal to top casting directors and filmmakers, while reports indicate Sonu Sood has shown interest in collaborating.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Sharad Kapoor is back in the spotlight, and this time, there is promising news on the horizon. Days after an emotional video clip surfaced online showing the veteran actor openly appealing to Hindi film industry peers for acting opportunities, Sharad has revealed that a Hollywood film offer has landed at his doorstep.
          </p>

          <p>
            The surprising career development marks a dramatic turnaround for the actor, who has endured a difficult hiatus marked by severe health setbacks, depression, and personal isolation.
          </p>

          <h2>Who Is Sharad Kapoor?</h2>
          <p>
            To an entire generation of 1990s and 2000s Bollywood filmgoers, Sharad Kapoor remains synonymous with high-voltage screen intensity. He made his striking debut in Mahesh Bhatt’s <em>Dastak</em> (1996) opposite Sushmita Sen, earning widespread acclaim.
          </p>

          <p>
            His most recognizable breakthrough came in Mansoor Khan’s cult action romance <em>Josh</em> (2000), where he played the fierce rival gang leader Prakash Sharma opposite Shah Rukh Khan’s Max and Aishwarya Rai Bachchan’s Shirley. Kapoor went on to star in memorable hits such as <em>LOC Kargil</em>, <em>Hathyar</em>, <em>Aankhen</em>, and <em>Lakshya</em>, before gradually receding from mainstream cinema.
          </p>

          <h2>Hollywood Debut in January</h2>
          <p>
            Speaking in an exclusive interview with <em>HT City</em>, Sharad shared that an international production house has approached him with a film offer that could serve as his Hollywood debut. Production on the project is tentatively planned to commence in January 2027.
          </p>

          <p>
            While the title of the project and the production studio remain under wraps, Sharad firmly reiterated that he has no intention of walking away from Indian cinema:
          </p>

          <blockquote>
            “If we badmouth each other, it gives the public a reason to badmouth us too. I’ve already got an offer for a Hollywood film, which I’m going to start in January. I am also going to continue working on Bollywood projects. This is my country. As soon as I recover fully in two months, things will get back on track.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Sharad Kapoor in conversation with HT City
            </footer>
          </blockquote>

          <h2>Why the Viral Video Happened</h2>
          <p>
            In his recent video that circulated widely on Instagram and YouTube, Sharad addressed his prolonged absence from show business and appealed to directors, producers, and colleagues with whom he had previously worked.
          </p>

          <p>
            The video sparked intense speculation among netizens that the actor was facing extreme financial insolvency. Setting the record straight, Sharad emphasized that he had spent the last seven years living in New York and returned to Mumbai only a year ago:
          </p>

          <blockquote>
            “I was staying in New York for the past seven years. I came back only a year ago. The purpose of the video was not to badmouth my peers. My industry is full of my people. They’re like my family. I don’t need monetary help, and I’ve never chosen to do projects for that reason either.”
          </blockquote>

          <p>
            Sharad expressed enthusiasm for exploring contemporary storytelling avenues across feature films, television, and OTT streaming platforms, explicitly expressing his eagerness to collaborate with major players like Netflix and Jio Studios.
          </p>

          <h2>Health Struggles and Battles With Depression</h2>
          <p>
            During his candid revelation, Sharad did not shy away from detailing the emotional toll the past few years took on him. He confessed that he had spent nearly two to three years largely bedridden, with family interactions dwindled down to occasional phone calls.
          </p>

          <p>
            A major catalyst for his mental decline was a distressing legal controversy in 2024, when a complaint alleging sexual harassment was filed against him by Mumbai Police following accusations from a 32-year-old actor and producer. Sharad denied the allegations, but the public fallout triggered acute clinical depression:
          </p>

          <blockquote>
            “When somebody blames you for nothing, you obviously feel pained by it. I went into depression. I didn’t feel like working or meeting anybody. But now, I’ve decided. I appeal to the film industry; please help me. Whatever crisis I face, I want to work and get out of it. I really need help financially, morally, and mentally.”
          </blockquote>

          <p>
            Reaffirming his reverence for his peers, he added: <em>“I’m a big fan of all my senior actors. I always look at them as heroes.”</em>
          </p>

          <h2>The Football Injury and Care for His Four Dogs</h2>
          <p>
            Physical adversity further complicated his comeback. Sharad revealed to <em>HT City</em> that during a recent trip to Barcelona to play football, he sustained a severe leg injury.
          </p>

          <p>
            Due to the immobility and doctor-prescribed two months of strict bed rest, he found himself unable to physically attend to his four pet dogs. Rather than neglect them, he temporarily entrusted them to an animal care shelter.
          </p>

          <p>
            He noted that this arrangement is strictly interim. Sharad is currently finalizing plans to sell his existing residence and move into a spacious seven-bedroom bungalow on Madh Island, which will offer ample open ground and comfort for his pets once he completes his recovery.
          </p>

          <h2>Industry Solidarity: AICWA and Sonu Sood Step Forward</h2>
          <p>
            Sharad’s emotional plea did not go unnoticed. The <strong>All Indian Cine Workers Association (AICWA)</strong> took immediate cognizance of the video. AICWA President Suresh Shyamla Gupta issued a public appeal urging producers, streaming executives, and casting directors across India to extend work opportunities to Kapoor, emphasizing that he remains an esteemed member of the film fraternity.
          </p>

          <p>
            Additionally, reports from the <em>Free Press Journal</em> suggested that actor-philanthropist Sonu Sood took notice of Sharad’s situation and explored scheduling a meeting to discuss prospective film collaborations. While an official confirmation from Sood’s office is awaited, the gesture reflects widespread goodwill within the industry.
          </p>

          <h2>What Next for Sharad Kapoor?</h2>
          <p>
            With two months of rehabilitation ahead to allow his leg to mend, Sharad is laser-focused on his physical and mental preparation for the January international production. For cinema lovers who grew up on the edgy charisma of 1990s action cinema, a potential resurgence of Sharad Kapoor across Hollywood and Bollywood is a welcome narrative of resilience.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for verified updates, production details, and exclusive interviews as Sharad Kapoor prepares for his international screen comeback.
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
              Related Bollywood &amp; Industry Scoops
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
              <li>
                <Link
                  href="/ananya-panday-aarav-bhatia-my-heart-post"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Ananya Panday’s “My Heart” Post With Aarav Bhatia Goes Viral: Diwali Party Scoop
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Sharad Kapoor",
            "Josh Movie",
            "Hollywood Debut",
            "Bollywood News",
            "AICWA",
            "Sonu Sood",
            "Bollywood Comeback",
            "HT City",
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
