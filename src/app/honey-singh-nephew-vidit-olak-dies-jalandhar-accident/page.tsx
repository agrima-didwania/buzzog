import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Honey Singh’s Nephew Vidit Olak Dies in Car Accident",
  description:
    "Yo Yo Honey Singh’s nephew Vidit Olak died in a car accident in Jalandhar on November 1. Here is what happened and what the singer said.",
  keywords: [
    "Honey Singh nephew Vidit Olak",
    "Honey Singh nephew death",
    "Vidit Olak death",
    "Vidit Olak accident",
    "Vidit Auluck",
    "Yo Yo Honey Singh nephew",
    "Jalandhar car accident",
    "Jalandhar flyover accident",
    "Aarav Talwar accident",
    "Punjabi singer",
    "Speed Records",
    "road accident in Punjab",
    "tractor-trolley",
    "Baradari police",
    "Police Lines Jalandhar",
    "Honey Singh latest news",
  ],
  openGraph: {
    title: "Honey Singh’s Nephew Vidit Olak Dies in Car Accident",
    description:
      "Yo Yo Honey Singh’s nephew Vidit Olak died in a car accident in Jalandhar on November 1. Here is what happened and what the singer said.",
    url: "https://www.buzzoriginals.com/honey-singh-nephew-vidit-olak-dies-jalandhar-accident",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/honey-singh-nephew-vidit-olak-dies-jalandhar-accident.jpg",
        width: 1024,
        height: 576,
        alt: "Honey Singh’s Nephew Vidit Olak Dies in Jalandhar Car Accident — Buzz Originals",
      },
    ],
    type: "article",
    publishedTime: "2026-11-01T17:15:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honey Singh’s Nephew Vidit Olak Dies in Car Accident",
    description:
      "Yo Yo Honey Singh’s nephew Vidit Olak died in a car accident in Jalandhar on November 1. Here is what happened and what the singer said.",
    images: [
      "/images/honey-singh-nephew-vidit-olak-dies-jalandhar-accident.jpg",
    ],
  },
  alternates: {
    canonical:
      "/honey-singh-nephew-vidit-olak-dies-jalandhar-accident",
  },
};

export default function HoneySinghNephewAccidentPage() {
  const pageUrl =
    "https://www.buzzoriginals.com/honey-singh-nephew-vidit-olak-dies-jalandhar-accident";
  const pageTitle =
    "Honey Singh’s Nephew Vidit Olak Dies in Jalandhar Car Accident";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/honey-singh-nephew-vidit-olak-dies-jalandhar-accident.jpg",
    ],
    datePublished: "2026-11-01T17:15:00+05:30",
    dateModified: "2026-11-01T17:15:00+05:30",
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
      "Yo Yo Honey Singh’s nephew Vidit Olak died in a car accident in Jalandhar on November 1. Here is what happened and what the singer said.",
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
        name: "News",
        item: "https://www.buzzoriginals.com/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Honey Singh Nephew Vidit Olak Dies",
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
      <Header activeNav="News" />

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
            href="/news"
            style={{ color: "var(--lime)", textDecoration: "none" }}
          >
            News
          </Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>
            Honey Singh Nephew Vidit Olak Dies
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
              🚨 Breaking News
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
              Yo Yo Honey Singh
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
              News
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
            Honey Singh’s Nephew Vidit Olak Dies in Jalandhar Car Accident
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
            Yo Yo Honey Singh’s nephew Vidit Olak and friend Aarav Talwar died in the early hours of Sunday after their car crashed into a stationary Municipal Corporation tractor-trolley in Jalandhar.
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
                BREAKING NEWS DESK
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
              src="/images/honey-singh-nephew-vidit-olak-dies-jalandhar-accident.jpg"
              alt="Honey Singh’s Nephew Vidit Olak Dies in Jalandhar Car Accident — Buzz Originals"
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
              💔 Yo Yo Honey Singh’s nephew Vidit Olak and friend Aarav Talwar lost their lives in a collision with a parked tractor-trolley in Jalandhar. (Photo: Buzz Originals)
            </div>
          </div>

          {/* Key Facts Summary Box */}
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
              Key Facts of the Incident
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
                <strong>Tragic Collision:</strong> The crash took place around 3:00 am on Sunday, November 1, 2026, on a flyover near Police Lines in Jalandhar, Punjab.
              </li>
              <li>
                <strong>Victims:</strong> Vidit Olak (nephew of Honey Singh and son of Speed Records owner Dinesh Auluck) and Aarav Talwar (son of Pappy Sweets owner) died on the spot.
              </li>
              <li>
                <strong>Vehicles Involved:</strong> A Volkswagen car carrying five friends collided with a stationary Municipal Corporation tractor-trolley parked by sanitation workers during garbage collection.
              </li>
              <li>
                <strong>Survivors:</strong> Three other youths in the vehicle survived the impact with minor injuries and returned home.
              </li>
              <li>
                <strong>No Legal Action:</strong> Families of the deceased decided against initiating legal proceedings, and police handed over the bodies following formal verification.
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
              Punjabi music superstar <strong>Yo Yo Honey Singh</strong> and his family are in deep mourning. The singer’s nephew, <strong>Vidit Olak</strong>, passed away in a devastating road collision in Jalandhar, Punjab, in the early morning hours of Sunday, November 1, 2026. Another young man, identified as <strong>Aarav Talwar</strong>, also tragically lost his life in the crash.
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
              What Happened in Jalandhar?
            </h2>

            <p>
              According to local authorities, Vidit Olak and Aarav Talwar were returning home from a friend’s birthday gathering alongside three other acquaintances. Around 3:00 am, their speeding Volkswagen car crashed head-on into a tractor-trolley parked on the flyover near the Police Lines area in Jalandhar.
            </p>

            <p>
              The tractor-trolley belonged to the local Municipal Corporation. Police officials confirmed that sanitation workers had stationed the vehicle on the flyover while cleaning the road surface and loading garbage collection containers.
            </p>

            <p>
              Baradari Police Station SHO Sahil Chaudhary shared initial findings, explaining that the car was traveling from BMC Chowk towards BSF Chowk when the driver failed to notice the parked municipal vehicle in the darkness and slammed directly into its rear section. The force of the impact was so severe that both Vidit Olak and Aarav Talwar succumbed to their injuries on the spot.
            </p>

            <p>
              A total of five youths were traveling inside the car at the time of the collision. The other three passengers miraculously survived the high-impact crash with non-fatal injuries and were able to return to their homes after receiving first aid.
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
              Who Was Vidit Olak?
            </h2>

            <p>
              Vidit Olak (also referenced as <em>Vidit Auluck</em> in several regional reports) was the nephew of Yo Yo Honey Singh. He was the son of Dinesh Auluck, the head and founder of <strong>Speed Records</strong> — India’s premier Punjabi music record label and production house that has played a defining role in launching and producing numerous Punjabi chartbusters and artists over the past two decades.
            </p>

            <p>
              Aarav Talwar, who was seated alongside Vidit, was the son of the prominent business owner behind Jalandhar’s well-known sweetmeat and culinary institution, Pappy Sweets.
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
                href="/ram-gopal-varma-legal-notice-eclatant-films-29-67-crore"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "underline",
                  lineHeight: 1.5,
                }}
              >
                Ram Gopal Varma in Legal Trouble Over ₹29.67 Crore: Full Story →
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
              What Did Honey Singh Say?
            </h2>

            <p>
              Yo Yo Honey Singh took to his official Instagram account on Sunday morning to share his profound grief and disbelief at the sudden demise of his nephew. Posting an emotional black-and-white note on his Instagram Story, the singer wrote:
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
              “Its dark decade for me Loss of my nephew Is Devastating Bhole nath mehr Mehr Mehr @dineshauluck”
            </blockquote>

            <p>
              Honey Singh tagged Vidit’s father, Dinesh Auluck, expressing prayers to Lord Shiva (Bhole Nath) for strength during this unimaginable family tragedy.
            </p>

            {/* Honey Singh Instagram Story Screenshot */}
            <div
              style={{
                margin: "24px auto",
                maxWidth: "380px",
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                background: "#000",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "678 / 1024" }}>
                <Image
                  src="/images/honey-singh-instagram-story-nephew-vidit-olak-death.jpg"
                  alt="Yo Yo Honey Singh Instagram Story mourning nephew Vidit Olak"
                  fill
                  sizes="(max-width: 480px) 100vw, 380px"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                style={{
                  padding: "12px 16px",
                  background: "#0a0a0a",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "12px",
                  color: "var(--muted-lavender)",
                  fontFamily: "var(--font-space-mono)",
                  textAlign: "center",
                }}
              >
                📸 Yo Yo Honey Singh’s heartbreaking note shared on his Instagram Story following the demise of nephew Vidit Olak.
              </div>
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
              Police Action and Family’s Decision
            </h2>

            <p>
              Police patrol teams and emergency emergency personnel arrived at the scene shortly after receiving the distress call around 3:15 am. Officers secured the damaged Volkswagen car and took custody of the bodies of both victims for post-mortem examinations at the Civil Hospital.
            </p>

            <p>
              However, the grieving families conveyed to the authorities that they did not wish to initiate any legal proceedings or register criminal complaints against the municipal workers or vehicle operators. Following the completion of mandatory police paperwork and medico-legal formalities, the bodies of Vidit Olak and Aarav Talwar were formally released to their respective families for final rites.
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
            The entire Punjabi music fraternity and film fraternity have expressed deep shock and offered condolences to Honey Singh and Dinesh Auluck’s family. Stay tuned to <strong>Buzz Originals</strong> for further verified updates.
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
              "HoneySingh",
              "ViditOlak",
              "ViditAuluck",
              "SpeedRecords",
              "JalandharAccident",
              "YoYoHoneySingh",
              "PunjabNews",
              "BreakingNews",
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
              href="/news"
              style={{
                color: "var(--lime)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              ← The News Desk
            </Link>
            <Link
              href="/bollywood"
              style={{
                color: "var(--magenta)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Bollywood Hub →
            </Link>
            <Link
              href="/"
              style={{
                color: "var(--lavender)",
                fontSize: "14px",
                fontFamily: "var(--font-space-mono)",
                fontWeight: 700,
                textDecoration: "underline",
              }}
            >
              Home →
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
