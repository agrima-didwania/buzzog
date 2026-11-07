import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away | Buzz Originals",
  description:
    "Ranbir Kapoor plans to direct his first film in 2-3 years. Here’s what he really meant by “last decade as an actor” and the kind of film he wants to make.",
  keywords: [
    "Ranbir Kapoor directorial debut",
    "Ranbir Kapoor last decade as an actor",
    "Ranbir Kapoor director",
    "Ranbir Kapoor",
    "Ranbir Kapoor retirement",
    "Ranbir Kapoor first film as director",
    "Ranbir Kapoor Sai Pallavi interview",
    "Is Ranbir Kapoor retiring from acting",
    "When will Ranbir Kapoor direct his first film",
    "What kind of film will Ranbir Kapoor direct",
    "Ranbir Kapoor BBC Asian Network interview",
    "Ranbir Kapoor upcoming movies after Ramayana",
  ],
  alternates: {
    canonical: "/ranbir-kapoor-directorial-debut-last-decade-as-actor",
  },
  openGraph: {
    title: "Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away | Buzz Originals",
    description:
      "Ranbir Kapoor plans to direct his first film in 2-3 years. Here’s what he really meant by “last decade as an actor” and the kind of film he wants to make.",
    url: "https://www.buzzoriginals.com/ranbir-kapoor-directorial-debut-last-decade-as-actor",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/ranbir-kapoor-directorial-debut-last-decade-as-actor.jpg",
        width: 1200,
        height: 675,
        alt: "Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away and What He Meant by Last Decade as an Actor",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away",
    description:
      "Ranbir Kapoor plans to direct his first film in 2-3 years. Here’s what he really meant by “last decade as an actor” and the kind of film he wants to make.",
    images: ["/images/ranbir-kapoor-directorial-debut-last-decade-as-actor.jpg"],
  },
};

export default function RanbirKapoorDirectorialDebutPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away",
    description:
      "Ranbir Kapoor plans to direct his first film in 2-3 years. Here’s what he really meant by “last decade as an actor” and the kind of film he wants to make.",
    image: [
      "https://www.buzzoriginals.com/images/ranbir-kapoor-directorial-debut-last-decade-as-actor.jpg",
    ],
    datePublished: "2026-11-07T12:00:00Z",
    dateModified: "2026-11-07T12:00:00Z",
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
      "@id": "https://www.buzzoriginals.com/ranbir-kapoor-directorial-debut-last-decade-as-actor",
    },
    keywords: [
      "Ranbir Kapoor directorial debut",
      "Ranbir Kapoor director",
      "Ranbir Kapoor last decade as an actor",
      "Ranbir Kapoor Sai Pallavi",
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
        name: "Ranbir Kapoor Directorial Debut",
        item: "https://www.buzzoriginals.com/ranbir-kapoor-directorial-debut-last-decade-as-actor",
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
          <span className="text-[var(--lime)]">Ranbir Kapoor Directorial Debut</span>
        </nav>

        {/* Category Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge lime">⚡ Career Milestone</span>
          <span className="badge pink">Directorial Debut</span>
          <span className="badge">Ranbir Kapoor</span>
          <span className="badge">BBC Asian Network</span>
        </div>

        {/* Article Headline */}
        <h1
          className="disp text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          Ranbir Kapoor Wants to Direct a Film: What He Meant by “Last Decade as an Actor”
        </h1>

        {/* Byline & Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--mist)] pb-6 mb-8 border-b border-white/[0.08]">
          <span>By Buzz Originals Entertainment Desk</span>
          <span>◆</span>
          <time dateTime="2026-11-07">November 7, 2026</time>
          <span>◆</span>
          <span>4 MIN READ</span>
          <span>◆</span>
          <span className="text-[var(--lime)]">EXCLUSIVE CHAT</span>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/[0.08] shadow-2xl">
          <Image
            src="/images/ranbir-kapoor-directorial-debut-last-decade-as-actor.jpg"
            alt="Ranbir Kapoor Directorial Debut Plans: 2-3 Years Away and What He Meant by Last Decade as an Actor"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 900px"
            className="object-cover"
          />
        </div>
        <p className="text-xs font-mono text-[var(--mist)] text-center mb-8">
          Ranbir Kapoor opens up on scripting his directorial debut within 2 to 3 years and clarifying his “last decade as an actor” comment during a BBC Asian Network conversation. (Photo: Buzz Originals / BBC Asian Network)
        </p>

        {/* Social Share Bar */}
        <div className="flex items-center gap-3 mb-10 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--mist)]">Share Story:</span>
          <a
            href="https://api.whatsapp.com/send?text=Ranbir%20Kapoor%20Directorial%20Debut%20Plans%20-%20https://www.buzzoriginals.com/ranbir-kapoor-directorial-debut-last-decade-as-actor"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-mono rounded-md bg-white/[0.06] hover:bg-white/[0.12] transition-colors"
          >
            WhatsApp
          </a>
          <a
            href="https://twitter.com/intent/tweet?text=Ranbir%20Kapoor%20Directorial%20Debut%20Plans&url=https://www.buzzoriginals.com/ranbir-kapoor-directorial-debut-last-decade-as-actor"
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
            <span>Ranbir Kapoor Directorial Plans: Fast Breakdown</span>
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
              <strong>Directorial Debut in 2-3 Years:</strong> Ranbir revealed he has started writing a script and plans to get on floors as a director within the next 24 to 36 months.
            </li>
            <li>
              <strong>Behind the Camera Only:</strong> The actor confirmed he has zero intention of directing himself, opting instead to direct another ensemble entirely.
            </li>
            <li>
              <strong>Not Retiring Tomorrow:</strong> Clarified that “last decade as an actor” refers to the physical prime needed to headline grand commercial spectacles like <em>Ramayana</em>.
            </li>
            <li>
              <strong>Warm Family Vibe:</strong> Drew creative inspiration from <em>Life Is Beautiful</em>, Frank Capra’s <em>It’s a Wonderful Life</em>, and Rajkumar Hirani’s heartwarming films.
            </li>
          </ul>
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="article-lead">
            Ranbir Kapoor has shocked fans with a big career update. The actor says he wants to step behind the camera and direct his first film within the next 2-3 years. He also said this could be his “last decade as an actor”, and the internet reacted fast.
          </p>

          <p>
            Here’s the full story, in simple words.
          </p>

          <h2>Where Did Ranbir Say This?</h2>
          <p>
            Ranbir spoke about his future plans in a candid chat with <strong>BBC Asian Network</strong>. His <em>Ramayana</em> co-star <strong>Sai Pallavi</strong> was sitting next to him during the interview. Ranbir shared that he has already started writing a script, but he says it is much harder than he thought.
          </p>

          <h2>“It’s So Hard to Create”: Ranbir on Writing</h2>
          <p>
            Ranbir confessed that picking up the pen has given him immense respect for screenwriters. Crafting an original screenplay from scratch is a humbling process:
          </p>

          <blockquote>
            “I just started writing a script a couple of months back, and it’s so hard to create. I have so much respect for writers and creators.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Ranbir Kapoor on BBC Asian Network
            </footer>
          </blockquote>

          <p>
            He also explained why the art of directing excites him on a much deeper level than stepping in front of the camera:
          </p>

          <blockquote>
            “An actor’s high is very superficial but the director, when he directs a movie, however good or bad, the opportunity to tell a story and get all these people together to tell your story, it’s just a beautiful experience and I hope I can do it.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Ranbir Kapoor on the directorial calling
            </footer>
          </blockquote>

          <h2>What Did “Last Decade as an Actor” Really Mean?</h2>
          <p>
            This line spread quickly on social media. Many fans feared Ranbir was planning an early retirement from Bollywood. Sai Pallavi also looked taken aback during the interview and reacted with an instinctive “Ohhh...”.
          </p>

          <p>
            Ranbir quickly cleared up the confusion. He explained that he was referring specifically to the demanding, larger-than-life roles he currently headlines, such as playing Lord Rama in Nitesh Tiwari’s monumental trilogy:
          </p>

          <blockquote>
            “What I mean is where I can get to play these parts.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Ranbir Kapoor clarifying his timeline
            </footer>
          </blockquote>

          <p>
            So he is not quitting acting tomorrow. He simply wants to slowly move towards direction as his creative focus matures over the coming years.
          </p>

          <h2>How Will He Balance Acting and Directing?</h2>
          <p>
            Ranbir pointed out that his disciplined work schedule—shooting only 100 to 125 days in a year—provides ample breathing room to brainstorm and write:
          </p>

          <blockquote>
            “I work only 100-125 days a year; I have a lot of time to write stories. I’ve never ever been so busy, never ever been so committed. I’ve always had one film out, and then I would start working on the other film. But, I guess, it’s my last decade as an actor; will I get to play these parts? I do want to kind of pivot towards direction. I don’t want to direct myself for sure. I really want to get these films done (Brahmastra 2, Animal 2 and Ramayana Part 2), and really get on floors with my directorial debut within 2 or 3 years, I hope.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Ranbir Kapoor on balancing writing and blockbuster commitments
            </footer>
          </blockquote>

          <p>
            Two key insights emerge from this candid confession:
          </p>
          <ul>
            <li>
              <strong>No self-direction:</strong> He has strictly ruled out starring in his own directorial debut, choosing to focus purely on filmmaking from behind the monitor.
            </li>
            <li>
              <strong>Finishing the mega franchises:</strong> He will complete his committed tentpoles—including <em>Brahmāstra Part 2</em>, Sandeep Reddy Vanga&apos;s <em>Animal Park</em>, and <em>Ramayana Part 2</em>—before taking the director&apos;s chair.
            </li>
          </ul>

          <h2>What Kind of Film Does Ranbir Want to Make?</h2>
          <p>
            While he has not finalized the precise narrative yet, Ranbir knows the emotional resonance he wants to evoke in audiences. He cited cinematic masterpieces like <em>Life Is Beautiful</em>, Frank Capra’s festive classic <em>It’s a Wonderful Life</em>, and Rajkumar Hirani’s warmhearted dramedies as his greatest touchstones.
          </p>

          <p>
            Instead of dark thrillers or heavy epics, Ranbir aims to craft a warm family drama that leaves viewers with a smile and a lighter heart.
          </p>

          <h2>This Is Not the First Time</h2>
          <p>
            Ranbir has harboured directorial ambitions for years. Back in September 2025, during an Instagram Live session with fans, he openly admitted:
          </p>

          <blockquote>
            “I am dying to direct a movie.”
            <footer style={{ marginTop: "8px", fontSize: "13px", color: "var(--lime)", fontStyle: "normal" }}>
              — Ranbir Kapoor during an Instagram Live session
            </footer>
          </blockquote>

          <p>
            At that time, he shared that he had put together a writers’ room and was actively developing two distinct conceptual outlines. His latest BBC chat proves that the vision is steadily taking shape, even though no formal title or production banner has been officially unveiled yet.
          </p>

          <h2>Ranbir Kapoor’s Upcoming Films</h2>
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
                gap: "12px",
                fontSize: "15px",
              }}
            >
              <li>
                <strong>Love &amp; War:</strong> Directed by Sanjay Leela Bhansali, co-starring Alia Bhatt and Vicky Kaushal. Scheduled for a nationwide theatrical release on <strong>January 21, 2027</strong>.
              </li>
              <li>
                <strong>Animal Park:</strong> Directed by Sandeep Reddy Vanga; the highly anticipated sequel to the blockbuster <em>Animal</em>.
              </li>
              <li>
                <strong>Ramayana: Part Two:</strong> Directed by Nitesh Tiwari, continuing the epic saga with Yash and Sai Pallavi. Expected in <strong>2028</strong>.
              </li>
            </ul>
          </div>

          <h2>Buzz Originals Take</h2>
          <p>
            A director Ranbir in the next few years actually makes total sense. Having worked under cinematic maestros like Sanjay Leela Bhansali, Imtiaz Ali, Anurag Basu, and Rajkumar Hirani, he possesses an instinctive masterclass education in filmmaking. Choosing high-voltage action and mythic epics now, followed by a heartfelt, family-style story behind the camera, is a natural artistic evolution.
          </p>

          <p>
            Whether he truly slows down on acting or seamlessly juggles both hats like Clint Eastwood or Bradley Cooper is something only time will tell.
          </p>

          <p>
            Stay tuned to <strong>Buzz OG</strong> for all the latest Bollywood updates, exclusive scoops, and deep-dive industry reporting.
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
                  href="/farah-khan-bollywood-insecure-youtube-channel-dilip"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Farah Khan Says Bollywood Makes People Insecure, Reveals Why She Started Her YouTube Channel
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
                  href="/sai-pallavi-sita-fight-scene-ramayana-controversy"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Sai Pallavi’s Sita Fight Scene in Ramayana Divides the Internet
                </Link>
              </li>
              <li>
                <Link
                  href="/maatrubhumi-trailer-release-date-salman-khan"
                  style={{ color: "var(--paper)", textDecoration: "none" }}
                  className="hover:text-[var(--lime)] transition-colors"
                >
                  → Maatrubhumi Trailer Gets CBFC Nod: Salman Khan Fans, Get Ready
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-white/[0.08]">
          <span className="text-xs font-mono text-[var(--mist)] uppercase tracking-wider mr-2">Tags:</span>
          {[
            "Ranbir Kapoor",
            "Ramayana",
            "Sai Pallavi",
            "Bollywood News",
            "Directorial Debut",
            "Love and War",
            "Animal Park",
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
