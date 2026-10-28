import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Editorial & Corrections Policy | Buzz Originals",
  description:
    "Buzz Originals editorial guidelines, verification standards, rumour distinction, attribution rules, and transparent corrections policy.",
  alternates: {
    canonical: "/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      <Header />

      <main className="article-wrap" style={{ maxWidth: "840px" }}>
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>EDITORIAL POLICY</span>
        </nav>

        <header className="article-header" style={{ marginBottom: "32px" }}>
          <span className="badge pink">Standards & Ethics</span>
          <h1 className="article-title" style={{ marginTop: "12px" }}>
            Editorial & Corrections Policy
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.6, marginTop: "12px" }}>
            How Buzz Originals approaches entertainment reporting, verification, and accountability.
          </p>
        </header>

        <div className="article-content">
          <h2>1. Fact-Checking & Verification</h2>
          <p>
            Entertainment moves at lightning speed, but accuracy comes first. Before publishing reports involving legal complaints, official announcements, box office collections, or casting news, our writers verify details against credible primary sources, official statements, court/police filings, or verified production houses.
          </p>

          <h2>2. Clear Distinction Between News and Opinion</h2>
          <p>
            Our readers always know what they are reading:
          </p>
          <ul>
            <li><strong>News & Reports:</strong> Objective reporting based on corroborated facts, verified statements, and credited trade reports.</li>
            <li><strong>Rumours & Speculation:</strong> Clearly labelled with appropriate caveats (e.g., &quot;Reportedly&quot;, &quot;According to sources&quot;).</li>
            <li><strong>Opinion & Commentary:</strong> Fan reactions, contestant reviews, and cultural critiques marked as hot takes or reviews.</li>
          </ul>

          <h2>3. Source Attribution</h2>
          <p>
            We respect fellow journalists and industry reporters. When an exclusive scoop or report originates from an external publication, trade portal, or broadcaster, we prominently credit and link to the source.
          </p>

          <h2>4. Corrections & Updates Policy</h2>
          <p>
            When a factual error is identified, Buzz Originals updates the story promptly and transparently:
          </p>
          <ul>
            <li><strong>Minor Updates:</strong> Typographical errors or minor phrasing adjustments are corrected immediately.</li>
            <li><strong>Substantive Corrections:</strong> When a key fact, date, or name is corrected, an explicit correction notice is appended at the top or bottom of the article noting the change and timestamp.</li>
            <li><strong>Developing Stories:</strong> When new information emerges on breaking news (e.g. cyber crime updates or box office delays), stories are marked as &quot;Updated&quot; with new context.</li>
          </ul>

          <h2>5. Submit a Correction Request</h2>
          <p>
            If you notice an inaccuracy in any of our published articles, please email us at{" "}
            <a href="mailto:hello@buzzoriginals.com" style={{ color: "var(--lime)", textDecoration: "underline" }}>
              hello@buzzoriginals.com
            </a>{" "}
            with the subject line &quot;Correction Request&quot; and a link to the article. Our editorial desk reviews all requests promptly.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
