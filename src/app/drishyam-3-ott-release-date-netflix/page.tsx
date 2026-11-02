import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";

export const metadata: Metadata = {
  title: "Drishyam 3 OTT Release Date: When and Where to Watch",
  description:
    "Drishyam 3 is coming to Netflix. Check the expected OTT date, cast, Jaideep Ahlawat’s role, and what makes Ajay Devgn’s final chapter different.",
  keywords: [
    "Drishyam 3 OTT release date",
    "Drishyam 3 Netflix",
    "Drishyam 3 OTT release",
    "Drishyam 3 OTT platform",
    "Drishyam 3 Netflix release date",
    "Drishyam The Conclusion OTT release",
    "Ajay Devgn Drishyam 3",
    "where to watch Drishyam 3",
    "Jaideep Ahlawat Drishyam 3",
    "Rajveer Tomar Drishyam 3",
    "Drishyam 3 box office collection",
    "Drishyam 3 review",
    "Vijay Salgaonkar",
    "Drishyam The Conclusion",
    "Drishyam 3 cast",
    "Tabu Drishyam 3",
    "Prakash Raj Drishyam 3",
    "Buzz Originals",
  ],
  openGraph: {
    title: "Drishyam 3 OTT Release Date: When and Where to Watch",
    description:
      "Drishyam 3 is coming to Netflix. Check the expected OTT date, cast, Jaideep Ahlawat’s role, and what makes Ajay Devgn’s final chapter different.",
    url: "https://www.buzzoriginals.com/drishyam-3-ott-release-date-netflix",
    siteName: "Buzz Originals",
    images: [
      {
        url: "/images/drishyam-3-ott-release-date-netflix.jpg",
        width: 1024,
        height: 576,
        alt: "Drishyam 3 OTT Release Date: When and Where to Watch on Netflix",
      },
    ],
    type: "article",
    publishedTime: "2026-11-02T12:45:00.000Z",
    authors: ["Buzz Originals Entertainment Desk"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drishyam 3 OTT Release Date: When and Where to Watch",
    description:
      "Drishyam 3 is coming to Netflix. Check the expected OTT date, cast, Jaideep Ahlawat’s role, and what makes Ajay Devgn’s final chapter different.",
    images: ["/images/drishyam-3-ott-release-date-netflix.jpg"],
  },
  alternates: {
    canonical: "/drishyam-3-ott-release-date-netflix",
  },
};

export default function Drishyam3OTTReleaseDatePage() {
  const pageUrl =
    "https://www.buzzoriginals.com/drishyam-3-ott-release-date-netflix";
  const pageTitle =
    "Drishyam 3 OTT Release Date: When Will Ajay Devgn’s Film Come to Netflix?";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: pageTitle,
    image: [
      "https://www.buzzoriginals.com/images/drishyam-3-ott-release-date-netflix.jpg",
    ],
    datePublished: "2026-11-02T12:45:00+05:30",
    dateModified: "2026-11-02T12:45:00+05:30",
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
      "Drishyam 3 is coming to Netflix. Check the expected OTT date, cast, Jaideep Ahlawat’s role, and what makes Ajay Devgn’s final chapter different.",
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
        name: "Drishyam 3 OTT Release Date",
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
          <span style={{ color: "var(--lavender)" }}>DRISHYAM 3 OTT RELEASE</span>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge lime">📺 OTT Premiere</span>
            <span className="badge pink">Netflix</span>
            <span className="badge">Bollywood</span>
          </div>

          <h1 className="article-title">
            Drishyam 3 OTT Release Date: When Will Ajay Devgn’s Film Come to Netflix?
          </h1>

          <div className="article-meta">
            <span>By Buzz Originals Entertainment Desk</span>
            <span>·</span>
            <time dateTime="2026-11-02">November 2, 2026</time>
            <span>·</span>
            <span>3 MIN READ</span>
          </div>
        </header>

        {/* Featured Cover Image */}
        <figure className="article-hero-media">
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 9",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Image
              src="/images/drishyam-3-ott-release-date-netflix.jpg"
              alt="Drishyam 3 OTT Release Date: When & Where to Watch on Netflix"
              fill
              priority
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 900px"
            />
          </div>
          <figcaption
            style={{
              fontSize: "12px",
              fontFamily: "var(--font-space-mono)",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "8px",
              textAlign: "center",
            }}
          >
            Ajay Devgn, Tabu, and Jaideep Ahlawat in Drishyam 3 (Drishyam: The Conclusion). The blockbuster crime thriller is set to arrive on Netflix in November 2026.
          </figcaption>
        </figure>

        {/* Social Sharing Bar Top */}
        <div style={{ margin: "24px 0" }}>
          <SocialShare
            title="Drishyam 3 OTT Release Date: When Will Ajay Devgn’s Film Come to Netflix?"
            url={pageUrl}
          />
        </div>

        {/* Article Body Content */}
        <div className="article-content">
          <p className="lead-paragraph" style={{ fontSize: "19px", lineHeight: "1.7", color: "#fff" }}>
            Missed <em>Drishyam 3</em> in theatres? Good news. The film will soon be on your phone and TV. Here is everything we know about the OTT release, the story, and the cast.
          </p>

          <h2>Where will Drishyam 3 stream?</h2>
          <p>
            <em>Drishyam 3</em> (also marketed as <em>Drishyam: The Conclusion</em>) will stream exclusively on <strong>Netflix</strong>. Reports confirm that Netflix acquired the post-theatrical digital streaming rights for the high-stakes thriller. In fact, audiences who watched the film in cinemas noticed the Netflix logo featured in the film’s opening credits sequence.
          </p>

          <h2>What is the expected OTT release date?</h2>
          <p>
            There is no official premiere date announced yet. Neither Netflix nor the producers have dropped the formal streaming calendar date.
          </p>
          <p>
            Still, industry patterns allow us to make a reliable estimate. Most major Bollywood theatrical blockbusters arrive on OTT platforms roughly <strong>six to eight weeks</strong> after their theatrical debut. With <em>Drishyam 3</em> having hit cinema screens nationwide on <strong>2 October 2026</strong>, that standard window places the likely Netflix arrival between <strong>13 November and 27 November 2026</strong>.
          </p>
          <p>
            This timeline remains an estimate based on prevailing streaming contracts. We will update this post immediately once Netflix makes the formal release announcement.
          </p>

          <p>
            Also Check:{" "}
            <a
              href="https://www.instagram.com/reel/Dd_6DKVTkrS/?exln=MXhkaHFlMThmemVpdA=="
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--lime)", textDecoration: "underline" }}
            >
              Drishyam 3 Review on Instagram
            </a>
          </p>

          <h2>What is Drishyam 3 about?</h2>
          <p>
            Ajay Devgn returns to his iconic role as <strong>Vijay Salgaonkar</strong>, a cable operator turned family patriarch who has spent years shielding his family from the long arm of the law through meticulous planning and sheer psychological fortitude.
          </p>
          <p>
            In this final chapter, a ruthless and analytical new police officer enters the picture. Convinced that previous investigations made critical procedural errors, he believes he has finally uncovered an undeniable crack in the Salgaonkar family’s airtight alibi.
          </p>
          <p>
            The film is directed by <strong>Abhishek Pathak</strong>, who also helmed the second instalment. The screenplay is penned collaboratively by <strong>Aamil Keeyan Khan</strong>, <strong>Abhishek Pathak</strong>, and <strong>Parveez Shaikh</strong>.
          </p>

          <h2>Meet the new cop: Jaideep Ahlawat as Rajveer Tomar</h2>
          <p>
            <strong>Jaideep Ahlawat</strong> steps into the franchise as Crime Branch SP <strong>Rajveer Tomar</strong>. He enters the fray with a single-minded obsession: to bring Vijay Salgaonkar to justice once and for all. He believes his renewed forensic and digital investigation has uncovered fresh physical proof capable of shattering Vijay’s defense.
          </p>
          <p>
            Tomar operates under an entirely different philosophy than the previous interrogators. He believes fear of the law is paramount to preserving order, delivering the chilling line:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--lime)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "24px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#fff",
            }}
          >
            “System ka darr bana rehna chahiye.”
          </blockquote>

          <p>
            Jaideep Ahlawat joined the franchise following the exit of Akshaye Khanna, who previously portrayed IG Tarun Ahlawat in the 2022 chapter.
          </p>

          <h2>Vijay stays confident</h2>
          <p>
            Even in the face of an unrelenting new adversary, Vijay Salgaonkar remains unshakeable. When Rajveer Tomar confronts him, declaring that the law finally has ironclad proof, Vijay responds with a sharp meta-commentary:
          </p>

          <blockquote
            style={{
              borderLeft: "4px solid var(--magenta)",
              background: "rgba(255, 255, 255, 0.04)",
              padding: "16px 20px",
              margin: "24px 0",
              borderRadius: "0 8px 8px 0",
              fontStyle: "italic",
              fontSize: "17px",
              color: "#fff",
            }}
          >
            “Agar hero jail mein gaya, toh audience ko accha lagega?”
          </blockquote>

          <p>
            This memorable dialogue captures the unique essence of the franchise: an audience that wholeheartedly roots for an ordinary family man whose actions continually challenge the moral boundaries of right and wrong.
          </p>

          <h2>What do the reviews say?</h2>
          <p>
            Critics have largely praised the intense pacing and ensemble performances. According to <strong>The Times of India (ETimes)</strong>, the film mostly sticks to the franchise’s familiar psychological style. While some twists land with stunning impact and others feel slightly convenient, the tension keeps viewers glued to their seats trying to guess what happens next.
          </p>
          <p>
            <strong>DNA India</strong> awarded the film <strong>4 stars</strong>, while <strong>The Week</strong> gave it <strong>4 out of 5</strong>, with both publications singling out the powerhouse performances of Jaideep Ahlawat and <strong>Prakash Raj</strong> for special acclaim.
          </p>

          <p>
            Also Read:{" "}
            <Link
              href="/prakash-raj-wife-pony-varma-lost-films-ads"
              style={{ color: "var(--lime)", textDecoration: "underline" }}
            >
              Prakash Raj Lost Films and Ad Deals for Speaking Out, Reveals Wife Pony Varma
            </Link>
          </p>

          <h2>Full Cast</h2>
          <ul>
            <li><strong>Ajay Devgn</strong> as Vijay Salgaonkar</li>
            <li><strong>Tabu</strong> as Meera Deshmukh (former IG)</li>
            <li><strong>Shriya Saran</strong> as Nandini Salgaonkar</li>
            <li><strong>Jaideep Ahlawat</strong> as SP Rajveer Tomar</li>
            <li><strong>Prakash Raj</strong> as lawyer Indrajith Shetty</li>
            <li><strong>Rajat Kapoor</strong> as Mahesh Deshmukh</li>
            <li><strong>Ishita Dutta</strong> as Anju Salgaonkar</li>
            <li><strong>Mrunal Jadhav</strong> as Anu Salgaonkar</li>
            <li><strong>Kamlesh Sawant</strong> as Sub-Inspector Laxmikant Gaitonde</li>
          </ul>

          <h2>Box Office Performance</h2>
          <p>
            <em>Drishyam 3</em> enjoyed an explosive run at the ticket counters. Early box office trackers reported that the film crossed ₹300 crore worldwide within its opening four days. Subsequent trade updates confirmed the film surged past the <strong>₹400 crore worldwide milestone</strong>.
          </p>
          <p>
            The film is currently being celebrated as Ajay Devgn’s biggest box office achievement to date, edging ahead of his previous commercial benchmark <em>Singham Again</em>. As trade estimates vary across analytical trackers, final distributor figures are expected shortly.
          </p>

          <h2>Is it the same as Mohanlal’s Drishyam 3?</h2>
          <p>
            <strong>No.</strong> The storyline of this Hindi film is completely distinct from Jeethu Joseph’s Malayalam <em>Drishyam 3</em> starring Mohanlal.
          </p>
          <p>
            While the first two Hindi films were remakes of the Malayalam originals, the Hindi creative team developed an independent screenplay for the finale. The Malayalam film premiered in theatres on <strong>21 May 2026</strong> and has been available to stream on <strong>Amazon Prime Video</strong> since <strong>18 June 2026</strong>.
          </p>

          <h2>Where to watch the earlier parts</h2>
          <p>
            Before streaming the grand conclusion on Netflix, you can catch up on the earlier chapters:
          </p>
          <ul>
            <li><strong>Drishyam (2015):</strong> Streaming on <strong>Netflix</strong></li>
            <li><strong>Drishyam 2 (2022):</strong> Streaming on <strong>Amazon Prime Video</strong></li>
          </ul>

          {/* Quick Facts Table */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              padding: "20px",
              margin: "32px 0",
              overflowX: "auto",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--lime)",
                marginBottom: "16px",
                fontWeight: 700,
              }}
            >
              ⚡ Quick Facts: Drishyam 3 OTT Release
            </h3>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
                lineHeight: "1.6",
              }}
            >
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)", width: "35%" }}>
                    <strong>Movie Title</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>Drishyam 3 / Drishyam: The Conclusion</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Theatrical Release Date</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>2 October 2026</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>OTT Platform</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "var(--lime)", fontWeight: 700 }}>Netflix</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Expected OTT Date</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    13 November – 27 November 2026 (Tentative Estimate)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Director</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>Abhishek Pathak</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Key Cast</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    Ajay Devgn, Tabu, Shriya Saran, Jaideep Ahlawat, Prakash Raj
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>New Cop Antagonist</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    SP Rajveer Tomar (played by Jaideep Ahlawat)
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Worldwide Box Office</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "var(--lime)", fontWeight: 700 }}>
                    ₹400+ Crore
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 12px", color: "var(--lavender)" }}>
                    <strong>Malayalam Version Comparison</strong>
                  </td>
                  <td style={{ padding: "8px 12px", color: "#fff" }}>
                    Completely independent story from Mohanlal’s Drishyam 3 (released May 2026 on Prime Video)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Final Word</h2>
          <p>
            <em>Drishyam 3</em> is expected to premiere on Netflix in mid to late November 2026, giving thriller fans around the globe an opportunity to witness Ajay Devgn’s climactic showdown with Jaideep Ahlawat from the comfort of their homes.
          </p>
          <p>
            Stay with <strong>Buzz Originals</strong> for the official streaming confirmation, OTT release date announcement, and full digital breakdown.
          </p>

          {/* Related Stories Links */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "6px",
              padding: "18px 22px",
              margin: "32px 0 24px 0",
            }}
          >
            <h4
              style={{
                color: "var(--lime)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "13px",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "10px",
                fontWeight: 700,
              }}
            >
              Also Read on Buzz Originals
            </h4>
            <ul style={{ margin: 0, paddingLeft: "18px", lineHeight: "1.8", fontSize: "15px" }}>
              <li>
                <Link
                  href="/shah-rukh-khan-61st-birthday-mannat-handwritten-note"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Shah Rukh Khan Skips Mannat Balcony on His 61st Birthday, Thanks Fans With a Handwritten Note
                </Link>
              </li>
              <li>
                <Link
                  href="/parivarik-manuranjan-ott-release-date-sony-liv"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Parivarik ManuRanjan: Pankaj Tripathi &amp; Aditi Rao Hydari Film on Sony LIV
                </Link>
              </li>
              <li>
                <Link
                  href="/robert-downey-jr-pedro-pascal-halloween-costume-swap"
                  style={{ color: "var(--magenta)", textDecoration: "underline" }}
                >
                  Robert Downey Jr. and Pedro Pascal Swap Marvel Roles for Halloween
                </Link>
              </li>
            </ul>
          </div>

          {/* Topic Tags */}
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
              "Drishyam3",
              "Drishyam3OTTRelease",
              "NetflixIndia",
              "AjayDevgn",
              "VijaySalgaonkar",
              "JaideepAhlawat",
              "Tabu",
              "PrakashRaj",
              "BollywoodOTT",
              "DrishyamTheConclusion",
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

          {/* Social Sharing Bar Bottom */}
          <div style={{ marginTop: "32px" }}>
            <SocialShare
              title="Drishyam 3 OTT Release Date: When Will Ajay Devgn’s Film Come to Netflix?"
              url={pageUrl}
            />
          </div>

          {/* Navigation Back Links */}
          <div
            style={{
              marginTop: "40px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <Link
              href="/bollywood"
              style={{
                color: "var(--lime)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ← Back to Bollywood
            </Link>
            <Link
              href="/movies"
              style={{
                color: "var(--lavender)",
                fontFamily: "var(--font-space-mono)",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              View Movies Hub →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
