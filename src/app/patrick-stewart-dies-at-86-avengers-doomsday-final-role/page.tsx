import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Patrick Stewart Dies at 86: Professor X's Final Role | Buzz Originals",
  description:
    "Patrick Stewart, Star Trek's Picard and X-Men's Professor X, died at 86. Marvel confirms Avengers: Doomsday is his final on-screen role.",
  keywords: [
    "Patrick Stewart dies",
    "Patrick Stewart death",
    "Professor X actor dies",
    "Patrick Stewart last movie",
    "Avengers Doomsday Professor X",
    "Star Trek Picard actor dies",
    "Patrick Stewart cause of death",
    "Sir Patrick Stewart obituary",
    "Marvel Avengers Doomsday",
    "Captain Jean-Luc Picard",
    "Hollywood news",
  ],
  openGraph: {
    title: "Patrick Stewart Dies at 86: Professor X's Final Role",
    description:
      "Patrick Stewart, Star Trek's Picard and X-Men's Professor X, died at 86. Marvel confirms Avengers: Doomsday is his final on-screen role.",
    url: "https://www.buzzoriginals.com/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg",
        width: 1024,
        height: 576,
        alt: "Patrick Stewart Dies at 86: Professor X's Final Role",
      },
    ],
    type: "article",
    publishedTime: "2026-10-30T14:30:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Stewart Dies at 86: Professor X's Final Role",
    description:
      "Patrick Stewart, Star Trek's Picard and X-Men's Professor X, died at 86. Marvel confirms Avengers: Doomsday is his final on-screen role.",
    images: ["/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg"],
  },
  alternates: {
    canonical: "/patrick-stewart-dies-at-86-avengers-doomsday-final-role",
  },
};

export default function PatrickStewartArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/patrick-stewart-dies-at-86-avengers-doomsday-final-role";
  const pageTitle =
    "Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg",
    ],
    datePublished: "2026-10-30T14:35:00+05:30",
    dateModified: "2026-10-30T14:35:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Desk",
        url: "https://www.buzzoriginals.com/about",
      },
    ],
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Buzz Originals",
      logo: {
        "@type": "ImageObject",
        url: "https://www.buzzoriginals.com/assets/buzzog-logo.png",
      },
    },
    description:
      "Patrick Stewart, Star Trek's Picard and X-Men's Professor X, died at 86. Marvel confirms Avengers: Doomsday is his final on-screen role.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
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
        name: "Movies",
        item: "https://www.buzzoriginals.com/movies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Patrick Stewart Obituary",
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      {/* Structured JSON-LD Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Main Navigation */}
      <Header activeNav="Movies" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/movies">MOVIES</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>PATRICK STEWART</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🕊️ In Memoriam</span>
            <span className="badge">Hollywood Legend</span>
            <span className="badge lime">Avengers: Doomsday</span>
          </div>

          <h1 className="article-title">{pageTitle}</h1>

          <div className="article-meta-bar">
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>
                BY{" "}
                <Link href="/about" style={{ textDecoration: "underline", color: "inherit" }}>
                  BUZZ ORIGINALS DESK
                </Link>
              </span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span>CINEMA BUREAU</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 30, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>4 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/patrick-stewart-dies-at-86-avengers-doomsday-final-role.jpg"
            alt="Patrick Stewart Dies at 86: Avengers: Doomsday Will Be His Final Screen Role"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            🎬 Sir Patrick Stewart passes away at 86 — Marvel confirms Avengers: Doomsday will mark the legendary actor&apos;s final appearance as Professor Charles Xavier.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Hollywood has lost a true legend. <strong>Sir Patrick Stewart</strong>, the actor who gave us Captain Jean-Luc Picard in <em>Star Trek: The Next Generation</em> and Professor X in the <em>X-Men</em> films, has died at the age of 86.
          </p>

          <p>
            His last big-screen moment is still to come. Marvel has confirmed that <strong>Avengers: Doomsday</strong> will be his final on-screen appearance.
          </p>

          <div className="article-quote-box">
            <p>
              <strong>In Memoriam:</strong> Sir Patrick Stewart (1940–2026) has passed away peacefully at age 86 following a battle with Alzheimer’s and Lewy Body Dementia. Marvel Studios confirmed that his appearance as Professor Charles Xavier in <em>Avengers: Doomsday</em> will serve as his final on-screen role.
            </p>
            <span style={{ fontSize: "12px", color: "var(--lavender)", marginTop: "8px", display: "block" }}>
              — Buzz Originals Cinema &amp; News Desk
            </span>
          </div>

          <h2>What Happened?</h2>
          <p>
            Patrick Stewart passed away on Wednesday, October 28, 2026, at his home in Los Angeles. His family shared the news on his official X account the next day.
          </p>
          <p>
            The statement began with the words <em>&ldquo;We announce with great sorrow the passing of Sir Patrick Stewart.&rdquo;</em> It said he was in the loving care of his wife, Sunny, and that he had faced <em>&ldquo;a brief and poignant journey with Alzheimer&apos;s Disease and Lewy Body Dementia.&rdquo;</em>
          </p>
          <p>
            His wife is American musician Sunny Ozell. He also has two children from his first marriage.
          </p>

          <h2>Avengers: Doomsday Will Be His Last Film</h2>
          <p>
            Fans will get to see Stewart one more time. He returns as Charles Xavier (Professor X) in <strong>Avengers: Doomsday</strong>. Reports say this will be his ninth time playing the character on the big screen.
          </p>
          <p>
            Marvel Studios released a tribute soon after the news broke. It said, <em>&ldquo;All of us at Marvel Studios are deeply saddened by the passing of Sir Patrick Stewart.&rdquo;</em>
          </p>
          <p>
            The studio also praised his work over the last 25 years, saying he brought <em>&ldquo;a gravitas and profundity to the character.&rdquo;</em> It then called the new film his <strong>&ldquo;final on-screen appearance.&rdquo;</strong>
          </p>

          <p>A few more things to know:</p>
          <ul>
            <li>
              <strong>Release date:</strong> <em>Avengers: Doomsday</em> releases in the US on December 18, and in Indian theatres a day earlier, on December 17.
            </li>
            <li>
              <strong>Iconic portrayal:</strong> Stewart first played Professor X in the 2000 film <em>X-Men</em>. He came back to the role many times, including in <em>Logan</em> and <em>Doctor Strange in the Multiverse of Madness</em>.
            </li>
            <li>
              <strong>Tributes pouring in:</strong> Hugh Jackman, his on-screen partner in the X-Men world, was among the stars who paid tribute.
            </li>
            <li>
              <strong>His legacy:</strong> In one of his last interviews, Stewart reportedly said, <em>&ldquo;I&apos;ll always and forever be an actor.&rdquo;</em>
            </li>
          </ul>

          <p>
            Follow us on Instagram for the latest updates:{" "}
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline", fontWeight: 700 }}
            >
              Buzz Originals
            </a>
          </p>

          <h2>From a Poor Childhood to the Stage</h2>
          <p>
            Stewart was born on July 13, 1940, in Mirfield, a small town in Yorkshire, England. He grew up in poverty. He once spoke about his father, a World War II veteran who came home struggling with trauma and alcohol, and about trying to shield his mother during those hard years.
          </p>
          <p>
            Acting became his safe place. A school teacher introduced him to Shakespeare through <em>The Merchant of Venice</em> when he was just 12. At 18, he became a professional actor. He trained at the Bristol Old Vic Theatre School and later became a name on stage with the Royal Shakespeare Company in the 1960s.
          </p>

          <h2>Becoming Captain Picard</h2>
          <p>
            Fame on TV came late. Stewart was 47 when he was hired for <em>Star Trek: The Next Generation</em>, which ran from 1987 to 1994. He played Picard in 176 episodes across seven seasons. He then returned for several <em>Star Trek</em> films and the series <em>Star Trek: Picard</em>, which started in 2020.
          </p>
          <p>
            He almost said no. His close friend and fellow Shakespearean Ian McKellen had advised him to stay in theatre. Stewart took the job anyway, and Picard&apos;s lines <em>&ldquo;Make it so&rdquo;</em> and <em>&ldquo;Engage&rdquo;</em> became part of pop culture.
          </p>
          <p>
            Looking back in 2022, he told <em>The Guardian</em>, <em>&ldquo;So much of what I believed and felt went into that show.&rdquo;</em>
          </p>
          <p>
            He also had a funny story from the set. He once told his cast that they should stop fooling around. A cast member said they needed to have some fun, and Stewart replied, <em>&ldquo;We are not here to have fun.&rdquo;</em> His co-stars, he said, have never let him forget it.
          </p>

          <h2>Why He Almost Skipped X-Men Too</h2>
          <p>
            Stewart was not sure about <em>X-Men</em> either. He thought a comic book fantasy was not for him. After the makers convinced him, he joined the first film in 2000. Looking back, he said, <em>&ldquo;And yet again I was proved wrong.&rdquo;</em>
          </p>
          <p>
            That role made him a hero for a whole new generation of fans.
          </p>

          <h2>Knighted by the Queen</h2>
          <p>
            In 2010, Queen Elizabeth II knighted him for his services to drama. He said his heroes were British acting greats Laurence Olivier, John Gielgud and Alec Guinness, who were also knighted. Being <em>&ldquo;in that company is the grandest thing that has professionally happened to me,&rdquo;</em> he told reporters.
          </p>
          <p>
            Off screen, Stewart was married three times. He has a son, Daniel, and a daughter, Sophia, from his first marriage to Sheila Falconer. In 2013, he married Sunny Ozell.
          </p>

          <h2>Quick Facts: Sir Patrick Stewart</h2>
          <ul>
            <li>
              <strong>Born:</strong> July 13, 1940 (Mirfield, Yorkshire, England)
            </li>
            <li>
              <strong>Died:</strong> October 28, 2026 (Los Angeles, California, aged 86)
            </li>
            <li>
              <strong>Iconic Roles:</strong> Captain Jean-Luc Picard (<em>Star Trek</em>), Professor Charles Xavier (<em>X-Men</em>)
            </li>
            <li>
              <strong>Final Film:</strong> <em>Avengers: Doomsday</em> (December 2026)
            </li>
            <li>
              <strong>Honours:</strong> Knighted by Queen Elizabeth II in 2010
            </li>
            <li>
              <strong>Surviving Family:</strong> Wife Sunny Ozell, children Daniel and Sophia
            </li>
          </ul>

          <h2>Final Word</h2>
          <p>
            From Shakespeare on stage to the bridge of the USS Enterprise and the halls of Xavier&apos;s school, Patrick Stewart spent his life giving characters a voice and a heart. Fans around the world will now watch <em>Avengers: Doomsday</em> with a heavier heart, and a lot of love for the man who made Picard and Professor X unforgettable.
          </p>

          {/* Tags & Keywords */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {[
              "Patrick Stewart Dies",
              "Patrick Stewart Death",
              "Professor X Actor Dies",
              "Patrick Stewart Last Movie",
              "Avengers Doomsday Professor X",
              "Star Trek Picard",
              "Captain Picard",
              "Marvel Studios",
              "X-Men",
              "Hollywood News",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontFamily: "var(--font-space-mono)",
                  color: "var(--lavender)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Social Share Component */}
          <SocialShare url={pageUrl} title={pageTitle} />

          {/* Back to Movies Navigation */}
          <div style={{ marginTop: "32px", textAlign: "center" }}>
            <Link
              href="/movies"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to All Movie Buzz
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
