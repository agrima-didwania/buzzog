import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Disha Patani Launches Her Own Clothing Brand DZ | Buzz Originals",
  description:
    "Disha Patani is now a fashion entrepreneur! Know all about DZ, her new clothing brand with baggy fits, alien-themed designs and a bold new music video.",
  keywords: [
    "Disha Patani clothing brand DZ",
    "Disha Patani DZ",
    "Disha Patani clothing brand",
    "DZ clothing brand",
    "Disha Patani brand DZ",
    "Disha Patani new look",
    "Disha Patani bleached eyebrows",
    "Disha Patani music video",
    "celebrity fashion",
    "Bollywood entrepreneurs",
    "baggy fits alien designs",
    "Bollywood news",
    "Disha Patani fashion label",
  ],
  openGraph: {
    title: "Disha Patani Launches Her Own Clothing Brand DZ",
    description:
      "Disha Patani is now a fashion entrepreneur! Know all about DZ, her new clothing brand with baggy fits, alien-themed designs and a bold new music video.",
    url: "https://www.buzzoriginals.com/disha-patani-launches-clothing-brand-dz",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/disha-patani-launches-clothing-brand-dz.jpg",
        width: 1024,
        height: 576,
        alt: "Disha Patani Launches Her Own Clothing Brand DZ",
      },
    ],
    type: "article",
    publishedTime: "2026-10-29T15:20:00.000Z",
    authors: ["Buzz Originals Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disha Patani Launches Her Own Clothing Brand DZ",
    description:
      "Disha Patani is now a fashion entrepreneur! Know all about DZ, her new clothing brand with baggy fits, alien-themed designs and a bold new music video.",
    images: ["/images/disha-patani-launches-clothing-brand-dz.jpg"],
  },
  alternates: {
    canonical: "/disha-patani-launches-clothing-brand-dz",
  },
};

export default function DishaPataniDZArticlePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/disha-patani-launches-clothing-brand-dz";
  const pageTitle = "Disha Patani Launches Her Own Clothing Brand DZ";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/disha-patani-launches-clothing-brand-dz.jpg",
    ],
    datePublished: "2026-10-29T20:50:00+05:30",
    dateModified: "2026-10-29T20:50:00+05:30",
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
      "Disha Patani is now a fashion entrepreneur! Know all about DZ, her new clothing brand with baggy fits, alien-themed designs and a bold new music video.",
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
        name: "Disha Patani Launches Clothing Brand DZ",
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
      <Header activeNav="Bollywood" />

      {/* Article Container */}
      <main className="article-wrap">
        {/* Breadcrumb Navigation */}
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <Link href="/bollywood">BOLLYWOOD</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>DZ CLOTHING BRAND</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge pink">🔥 Fashion Entrepreneur</span>
            <span className="badge">Bollywood</span>
            <span className="badge lime">DZ Brand</span>
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
              <span>BOLLYWOOD DESK</span>
            </div>
            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <span>OCT 29, 2026</span>
              <span style={{ color: "var(--magenta)" }}>◆</span>
              <span style={{ color: "var(--lime)" }}>3 MIN READ</span>
            </div>
          </div>
        </header>

        {/* Featured Hero Thumbnail */}
        <div className="article-media-box">
          <Image
            src="/images/disha-patani-launches-clothing-brand-dz.jpg"
            alt="Disha Patani Launches Her Own Clothing Brand DZ with Baggy Fits and Alien-Themed Designs"
            width={1024}
            height={576}
            priority
            sizes="(max-width: 768px) 100vw, 840px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div className="article-media-caption">
            📸 Disha Patani turns entrepreneur with DZ: a fashion label featuring oversized fits, alien-themed designs, and a bold music video.
          </div>
        </div>

        {/* Article Body */}
        <article className="article-content">
          <p className="article-lead">
            Disha Patani is no longer just an actress. She is now a business owner too. After more than 10 years in Bollywood, she has launched her own fashion label called <strong>DZ</strong>, and it is not your usual celebrity brand.
          </p>

          <h2>What Is DZ by Disha Patani?</h2>
          <p>
            <strong>DZ</strong> is a clothing brand built around relaxed, loose-fitting clothes. Think baggy outfits, big silhouettes and designs that look a little out of this world, literally. Many pieces take their ideas from outer space and aliens.
          </p>
          <p>
            The brand is now live on its official website, so fans can shop the collection online.
          </p>

          <h2>Disha Patani’s New Look in the DZ Track</h2>
          <p>
            To announce the brand, Disha also dropped a music track for DZ. In the video, she shows a look her fans have never seen before. The biggest talking point is her <strong>bleached eyebrows</strong>, which she pairs with her trademark loose outfits.
          </p>
          <p>
            The video gives a clear idea of what DZ stands for: comfort, confidence and a bit of fun.
          </p>

          <h2>Why DZ Feels Personal to Disha</h2>
          <p>
            This brand did not come out of nowhere. Disha has been spotted in baggy and comfy clothes for years, both at airports and in her casual looks. She has also always liked offbeat styles that are different from regular glam.
          </p>
          <p>
            With DZ, she is turning her own style into a business. So the brand feels like an extension of who she is.
          </p>

          <h2>Who Is DZ Made For?</h2>
          <p>
            DZ is for people who like to experiment with their wardrobe. If you enjoy loose fits, graphic designs and clothes that stand out, this brand is aimed at you.
          </p>

          <h2>What This Means for Disha’s Career</h2>
          <p>
            Disha has worked in films for over ten years. In an earlier interview about her 10 years in Bollywood, she said: <em>&ldquo;I don’t want to be defined by one particular kind of role or image.&rdquo;</em> DZ looks like a natural next step, since it lets her show a side of herself that goes beyond acting.
          </p>

          <h2>Quick Facts About DZ</h2>
          <ul>
            <li>
              <strong>Founder:</strong> Disha Patani
            </li>
            <li>
              <strong>Type:</strong> Clothing brand
            </li>
            <li>
              <strong>Style:</strong> Baggy, oversized, space and alien-inspired designs
            </li>
            <li>
              <strong>Launch:</strong> Announced October 28, 2026
            </li>
            <li>
              <strong>Where to buy:</strong> Official DZ website
            </li>
            <li>
              <strong>Launch extra:</strong> A promotional music track featuring Disha
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

          <p>
            Stay tuned to <strong>Buzz Originals</strong> for more Bollywood and celebrity updates.
          </p>

          {/* Tags & Keywords */}
          <div className="tags-cluster">
            <span className="tag-badge">#DishaPatani</span>
            <span className="tag-badge">#DZ</span>
            <span className="tag-badge">#DZClothingBrand</span>
            <span className="tag-badge">#BollywoodNews</span>
            <span className="tag-badge">#CelebrityFashion</span>
            <span className="tag-badge">#DishaPataniNewLook</span>
            <span className="tag-badge">#BollywoodEntrepreneurs</span>
          </div>

          {/* Accessible Social Share Component */}
          <SocialShare title={pageTitle} url={pageUrl} />

          {/* Back to Home */}
          <div style={{ marginTop: "32px", paddingTop: "20px", borderTop: "1px solid var(--line)" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--lime)",
              }}
            >
              ← Back to All Buzz
            </Link>
          </div>
        </article>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
