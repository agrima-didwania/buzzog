import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Himesh Reshammiya Calls Deepika Padukone “Irreplaceable”",
  description:
    "Himesh Reshammiya picked Sandeep Reddy Vanga over Mohit Suri and Aditya Dhar, and named Salman Khan and Akshay Kumar as musically aware heroes.",
  keywords: [
    "Deepika Padukone",
    "Sandeep Reddy Vanga",
    "Salman Khan",
    "Akshay Kumar",
    "Bhushan Kumar",
    "T-Series",
    "Ramesh Taurani",
    "Kumar Taurani",
    "Ratan Jain",
    "Mohit Suri",
    "Aditya Dhar",
    "Om Shanti Om",
    "Aap Kaa Surroor",
    "Spirit",
    "Triptii Dimri",
    "Himesh Reshammiya",
    "Komal Nahta",
    "Bollywood news",
  ],
  openGraph: {
    title: "Himesh Reshammiya Calls Deepika Padukone “Irreplaceable”",
    description:
      "Himesh Reshammiya picked Sandeep Reddy Vanga over Mohit Suri and Aditya Dhar, and named Salman Khan and Akshay Kumar as musically aware heroes.",
    url: "https://www.buzzoriginals.com/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga.jpg",
        width: 1024,
        height: 576,
        alt: "Himesh Reshammiya Says Deepika Padukone Is Irreplaceable — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-11-01T14:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himesh Reshammiya Calls Deepika Padukone “Irreplaceable”",
    description:
      "Himesh Reshammiya picked Sandeep Reddy Vanga over Mohit Suri and Aditya Dhar, and named Salman Khan and Akshay Kumar as musically aware heroes.",
    images: [
      "/images/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga.jpg",
    ],
  },
  alternates: {
    canonical:
      "/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga",
  },
};

export default function HimeshDeepikaVangaPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga";
  const pageTitle =
    "Himesh Reshammiya Says Deepika Padukone Is “Irreplaceable”";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga.jpg",
    ],
    datePublished: "2026-11-01T14:45:00+05:30",
    dateModified: "2026-11-01T14:45:00+05:30",
    author: [
      {
        "@type": "NewsMediaOrganization",
        name: "Buzz Originals Entertainment Desk",
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
      "Himesh Reshammiya picked Sandeep Reddy Vanga over Mohit Suri and Aditya Dhar, and named Salman Khan and Akshay Kumar as musically aware heroes.",
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
        name: "Bollywood",
        item: "https://www.buzzoriginals.com/bollywood",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Himesh Reshammiya Deepika Padukone Irreplaceable",
        item: pageUrl,
      },
    ],
  };

  return (
    <div
      style={{
        background: "var(--ink)",
        minHeight: "100vh",
        color: "var(--lavender)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <Header activeNav="Bollywood" />

      {/* Main Content Area */}
      <main
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "32px 16px 64px 16px",
        }}
      >
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "12px",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "var(--muted-lavender)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{ color: "var(--muted-lavender)", textDecoration: "none" }}
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/bollywood"
            style={{ color: "var(--lime)", textDecoration: "none" }}
          >
            Bollywood
          </Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>
            Himesh Reshammiya Deepika Padukone Irreplaceable
          </span>
        </nav>

        <article>
          {/* Category Badges */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: "var(--magenta)",
                color: "#000",
                fontSize: "11px",
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: "3px",
                fontFamily: "var(--font-space-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              🎙️ Rapid Fire Exclusive
            </span>
            <span
              style={{
                background: "var(--lime)",
                color: "#000",
                fontSize: "11px",
                fontWeight: 800,
                padding: "3px 8px",
                borderRadius: "3px",
                fontFamily: "var(--font-space-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Himesh Reshammiya
            </span>
            <span
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                color: "var(--lavender)",
                fontSize: "11px",
                fontWeight: 700,
                padding: "3px 8px",
                borderRadius: "3px",
                fontFamily: "var(--font-space-mono)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Bollywood
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(36px, 6vw, 64px)",
              lineHeight: 1.05,
              color: "#fff",
              letterSpacing: "0.5px",
              marginBottom: "18px",
            }}
          >
            Himesh Reshammiya Says Deepika Padukone Is “Irreplaceable”
          </h1>

          {/* Subtitle / Excerpt */}
          <p
            style={{
              fontSize: "clamp(16px, 2.5vw, 20px)",
              lineHeight: 1.5,
              color: "var(--muted-lavender)",
              marginBottom: "24px",
              fontWeight: 400,
            }}
          >
            In a candid rapid-fire chat with trade analyst Komal Nahta, hit composer Himesh Reshammiya called Deepika Padukone irreplaceable, picked Sandeep Reddy Vanga over Mohit Suri and Aditya Dhar, and named Salman Khan and Akshay Kumar as the most musically aware superstars.
          </p>

          {/* Author & Dateline Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "12px 0",
              marginBottom: "28px",
              fontFamily: "var(--font-space-mono)",
              fontSize: "12px",
              color: "var(--muted-lavender)",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>
                BY{" "}
                <strong style={{ color: "#fff" }}>
                  BUZZ ORIGINALS ENTERTAINMENT DESK
                </strong>
              </span>
              <span>◆</span>
              <span style={{ color: "var(--magenta)" }}>
                INTERVIEWS DESK
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span>NOV 1, 2026</span>
              <span>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>

          {/* Cover Image (16:9 Aspect Ratio) */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "8px",
              overflow: "hidden",
              marginBottom: "32px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              background: "#111",
            }}
          >
            <Image
              src="/images/himesh-reshammiya-deepika-padukone-irreplaceable-sandeep-reddy-vanga.jpg"
              alt="Himesh Reshammiya Says Deepika Padukone Is Irreplaceable — Buzz Originals"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 860px"
              style={{ objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
                padding: "20px 16px 12px 16px",
                fontSize: "13px",
                color: "var(--muted-lavender)",
                fontFamily: "var(--font-space-mono)",
              }}
            >
              🎙️ Himesh Reshammiya reflects on Deepika Padukone, Sandeep Reddy Vanga, Salman Khan, and Akshay Kumar in a new rapid-fire interview with Komal Nahta. (Photo: Buzz Originals)
            </div>
          </div>

          {/* Quick Summary Takeaway Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              borderLeft: "4px solid var(--lime)",
              padding: "20px 24px",
              borderRadius: "0 8px 8px 0",
              marginBottom: "36px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "22px",
                color: "var(--lime)",
                letterSpacing: "0.5px",
                marginBottom: "12px",
              }}
            >
              Key Takeaways
            </h3>
            <ul
              style={{
                listStyleType: "disc",
                paddingLeft: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "#ddd",
              }}
            >
              <li>
                <strong>Deepika Is Irreplaceable:</strong> Himesh said that if his 2006 blockbuster video <em>“Naam Hai Tera”</em> were remade today, nobody could replace Deepika Padukone.
              </li>
              <li>
                <strong>Destined Superstar:</strong> Himesh clarified that he gave breaks to many models, but only Deepika became a global superstar through her own hard work and destiny.
              </li>
              <li>
                <strong>110% Sandeep Reddy Vanga:</strong> When asked to pick between Mohit Suri, Aditya Dhar, and Sandeep Reddy Vanga, Himesh instantly chose Vanga.
              </li>
              <li>
                <strong>Musically Conscious Heroes:</strong> He named Salman Khan and Akshay Kumar as heroes with an exceptional ear and consciousness for music.
              </li>
              <li>
                <strong>Producers With Deep Music Ears:</strong> Bhushan Kumar (T-Series), the Taurani brothers (Tips), and Ratan Jain (Venus) were picked as producers with unmatched music knowledge.
              </li>
            </ul>
          </div>

          {/* Article Body */}
          <div
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#e0e0e0",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <p>
              Himesh Reshammiya sat down with veteran trade analyst Komal Nahta for a candid rapid-fire round, and his unfiltered answers are now making waves across Bollywood and social media. Known for churning out era-defining chartbusters throughout the 2000s and 2010s, the hit composer-singer opened up about <strong>Deepika Padukone</strong>, director <strong>Sandeep Reddy Vanga</strong>, and superstar collaborators <strong>Salman Khan</strong> and <strong>Akshay Kumar</strong>.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              Himesh on Deepika Padukone: “Deepika Is Irreplaceable”
            </h2>

            <p>
              Long before her historic Bollywood debut opposite Shah Rukh Khan in <em>Om Shanti Om</em> (2007), Deepika Padukone made heads turn across the country in Himesh’s iconic music video <strong>“Naam Hai Tera”</strong> from the historic album <em>Aap Kaa Surroor</em> (2006).
            </p>

            <p>
              During the conversation, Komal Nahta asked Himesh who he would cast in her place if the celebrated music video were remade today.
            </p>

            <p>
              Himesh’s answer was instant and definitive:
            </p>

            <blockquote
              style={{
                background: "rgba(255, 0, 110, 0.08)",
                borderLeft: "4px solid var(--magenta)",
                padding: "16px 20px",
                margin: "8px 0",
                borderRadius: "0 6px 6px 0",
                fontStyle: "italic",
                fontSize: "19px",
                color: "#fff",
              }}
            >
              “Deepika is irreplaceable.”
            </blockquote>

            <p>
              He added that even back in 2006 during the shoot of <em>“Naam Hai Tera,”</em> everyone on set knew she was destined to become a massive superstar. Addressing the frequent claims that he gave Deepika her initial breakthrough, Himesh took a humble and realistic stance. He pointed out that he gave breaks to numerous new faces and models across his music videos over the years, but none reached the heights Deepika did. In his view, he played no decisive role in whether she became a superstar or not — her historic career was purely a result of her undeniable charisma, dedication, and destiny.
            </p>

            {/* Also Read Box */}
            <div
              style={{
                background: "rgba(184, 255, 44, 0.06)",
                border: "1px solid rgba(184, 255, 44, 0.2)",
                padding: "16px 20px",
                borderRadius: "6px",
                margin: "12px 0",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "12px",
                  color: "var(--lime)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Also Read on Buzz Originals
              </span>
              <Link
                href="/prakash-raj-wife-pony-varma-lost-films-ads"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "underline",
                  lineHeight: 1.5,
                }}
              >
                Prakash Raj Lost Films and Ad Deals for Speaking Out, Says Wife Pony Varma →
              </Link>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              Himesh Picks Sandeep Reddy Vanga: “110%, I Love Him!”
            </h2>

            <p>
              Moving to modern filmmakers, Himesh was asked which contemporary director he would most like to collaborate with as a music composer: Mohit Suri, Aditya Dhar, or Sandeep Reddy Vanga.
            </p>

            <p>
              Without missing a single beat, Himesh replied:
            </p>

            <blockquote
              style={{
                background: "rgba(184, 255, 44, 0.08)",
                borderLeft: "4px solid var(--lime)",
                padding: "16px 20px",
                margin: "8px 0",
                borderRadius: "0 6px 6px 0",
                fontStyle: "italic",
                fontSize: "19px",
                color: "#fff",
              }}
            >
              “110%, I’ll choose Sandeep Reddy Vanga. I love him!”
            </blockquote>

            <p>
              The choice caught instant attention because Sandeep Reddy Vanga has been at the centre of intense industry buzz concerning Deepika Padukone and his upcoming mega-budget action film <em>Spirit</em> starring Prabhas. Deepika exited the film in 2025, after which Triptii Dimri was brought on board as the female lead. In August 2026, Vanga’s brother and producer Pranay Reddy Vanga claimed that Deepika’s exit was tied to contract negotiations, including an alleged demand for a 10% share in profits (claims made specifically from the Vanga camp). Himesh, however, focused strictly on his artistic admiration for Vanga’s raw, cinematic storytelling and intense musical instincts.
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              Salman Khan and Akshay Kumar: “Musically Conscious” Heroes
            </h2>

            <p>
              When Komal Nahta asked Himesh to identify leading Bollywood heroes who possess an instinctive understanding of music, Himesh wasted no time highlighting two of the industry’s biggest megastars.
            </p>

            <p>
              “Of course, Salman Khan for sure,” Himesh noted, explaining that Salman is “very, very conscious” when it comes to musical arrangements and catchiness. He promptly added that Akshay Kumar shares that same sharp consciousness.
            </p>

            <p>
              The praise comes from decades of shared history. Salman Khan gave Himesh his big Bollywood breakthrough as an independent composer with <em>Pyaar Kiya To Darna Kya</em> (1998), which delivered the timeless cult hit <em>“O O Jaane Jaana.”</em> Salman continued to champion Himesh across blockbusters like <em>Tere Naam</em> and <em>Bodyguard</em>.
            </p>

            <p>
              Similarly, Himesh co-produced and starred alongside Akshay Kumar in <em>Khiladi 786</em> under his own banner HR Musik, creating energetic hits like <em>“Hookah Bar.”</em> Years later, the duo reunited when Himesh scored the emotionally charged soundtrack of Aanand L. Rai’s <em>Raksha Bandhan</em> (2022).
            </p>

            <h2
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "32px",
                color: "#fff",
                letterSpacing: "0.5px",
                marginTop: "12px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "8px",
              }}
            >
              The Three Producers He Trusts for Music
            </h2>

            <p>
              Finally, Himesh was asked to name three producers with an unmatched ear for music. He singled out <strong>Bhushan Kumar</strong>, the <strong>Taurani brothers</strong> (Ramesh Taurani and Kumar Taurani), and <strong>Ratan Jain</strong>, saying:
            </p>

            <blockquote
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                borderLeft: "4px solid #fff",
                padding: "16px 20px",
                margin: "8px 0",
                borderRadius: "0 6px 6px 0",
                fontStyle: "italic",
                fontSize: "18px",
                color: "#fff",
              }}
            >
              “They have deep knowledge.”
            </blockquote>

            <p>
              All three are synonymous with India’s most influential music empires. Bhushan Kumar spearheads <strong>T-Series</strong>, the Taurani brothers head <strong>Tips Industries</strong>, and Ratan Jain leads <strong>Venus Worldwide Entertainment</strong>. Decades of producing gold-standard chartbusters have given these producers a rare intuition for what connects with listeners across India and globally.
            </p>
          </div>

          <p
            style={{
              marginTop: "32px",
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--muted-lavender)",
            }}
          >
            Stay tuned to <strong>Buzz Originals</strong> for the latest unfiltered scoops across Bollywood, music, and exclusive industry conversations.
          </p>

          {/* Tags */}
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
              "HimeshReshammiya",
              "DeepikaPadukone",
              "SandeepReddyVanga",
              "SalmanKhan",
              "AkshayKumar",
              "BhushanKumar",
              "KomalNahta",
              "BollywoodNews",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  padding: "4px 10px",
                  borderRadius: "4px",
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

          {/* Back to Hubs Navigation */}
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/bollywood"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← Back to Bollywood Hub
            </Link>
            <Link
              href="/news"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              The News Desk →
            </Link>
            <Link
              href="/movies"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Movies Hub →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
