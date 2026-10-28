import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Buzz Originals",
  description:
    "Get in touch with the Buzz Originals team for editorial inquiries, press tips, scoops, corrections, or advertising partnerships.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      <Header />

      <main className="article-wrap" style={{ maxWidth: "840px" }}>
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>CONTACT US</span>
        </nav>

        <header className="article-header" style={{ marginBottom: "32px" }}>
          <span className="badge">Editorial Desk</span>
          <h1 className="article-title" style={{ marginTop: "12px" }}>
            Reach the Buzz Squad
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.6, marginTop: "12px" }}>
            Have a breaking scoop, correction request, or commercial enquiry? We&apos;d love to hear from you.
          </p>
        </header>

        <div className="article-content">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", margin: "28px 0" }}>
            <div style={{ background: "var(--ink-2)", padding: "24px", borderRadius: "16px", border: "1px solid var(--line)" }}>
              <h3 style={{ color: "var(--lime)", marginTop: 0 }}>📧 Editorial & Scoops</h3>
              <p style={{ fontSize: "14px", color: "var(--muted)" }}>Send press releases, story pitches, and news tips directly to our writers.</p>
              <a href="mailto:hello@buzzoriginals.com" style={{ color: "var(--lavender)", fontWeight: 700, textDecoration: "underline" }}>
                hello@buzzoriginals.com
              </a>
            </div>

            <div style={{ background: "var(--ink-2)", padding: "24px", borderRadius: "16px", border: "1px solid var(--line)" }}>
              <h3 style={{ color: "var(--magenta)", marginTop: 0 }}>⚖️ Corrections & Legal</h3>
              <p style={{ fontSize: "14px", color: "var(--muted)" }}>For factual corrections, takedown notices, or rights management.</p>
              <a href="mailto:hello@buzzoriginals.com" style={{ color: "var(--lavender)", fontWeight: 700, textDecoration: "underline" }}>
                hello@buzzoriginals.com
              </a>
            </div>
          </div>

          <h2>Official Social Channels</h2>
          <p>
            You can also connect with our community directly across our official social channels:
          </p>
          <ul>
            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg==" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime)" }}>@buzzoriginals</a></li>
            <li><strong>Threads:</strong> <a href="https://www.threads.com/@buzzoriginals" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime)" }}>@buzzoriginals</a></li>
            <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@buzzoriginals" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime)" }}>@buzzoriginals</a></li>
            <li><strong>Facebook:</strong> <a href="https://www.facebook.com/share/1bxo95CLHq/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--lime)" }}>Buzz Originals Official</a></li>
          </ul>

          <h2>Response Time</h2>
          <p>
            Our desk monitors incoming communications continuously during active news cycles. We typically respond to verified press releases and editorial inquiries within 24 to 48 business hours.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
