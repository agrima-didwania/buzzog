import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Buzz Originals",
  description:
    "Learn about Buzz Originals — our mission, editorial team, and unfiltered coverage of Indian reality TV, Bigg Boss, Splitsvilla, Bollywood, and Web Series.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      <Header />

      <main className="article-wrap" style={{ maxWidth: "840px" }}>
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>ABOUT US</span>
        </nav>

        <header className="article-header" style={{ marginBottom: "32px" }}>
          <span className="badge pink">Who We Are</span>
          <h1 className="article-title" style={{ marginTop: "12px" }}>
            The Buzz Never Sleeps
          </h1>
          <p style={{ fontSize: "18px", color: "var(--muted)", lineHeight: 1.6, marginTop: "12px" }}>
            Raw, unfiltered, and deeply plugged into the cultural zeitgeist — Buzz Originals was built for the group chat.
          </p>
        </header>

        <div className="article-content">
          <h2>Our Mission</h2>
          <p>
            At Buzz Originals, we believe entertainment journalism shouldn&apos;t read like a dry press release. We cover Indian reality TV, Bollywood cinema, OTT web series, and internet culture with speed, editorial rigor, and an authentic fan-first perspective.
          </p>

          <h2>What We Cover</h2>
          <ul>
            <li><strong>Bigg Boss & Reality TV:</strong> Weekend ka Vaar recaps, nomination breakdowns, live feed scoops, and eviction analysis.</li>
            <li><strong>Splitsvilla & Dating Shows:</strong> Unfiltered commentary on dome sessions, connection drama, and contestant dynamics.</li>
            <li><strong>Khatron Ke Khiladi:</strong> High-octane stunt tracking, contestant journeys, and elimination updates.</li>
            <li><strong>Bollywood & Indian Cinema:</strong> Box office analysis, red carpet moments, release date trackers, and industry developments.</li>
            <li><strong>Web Series & Streaming:</strong> OTT premiere calendars, binge recommendations, and candid reviews.</li>
          </ul>

          <h2>Editorial Integrity</h2>
          <p>
            We take verification seriously. Rumours are labelled as rumours; confirmed news is backed by police filings, production releases, or direct quotes. When errors happen, we correct them transparently.
          </p>
          <p>
            Read our full <Link href="/editorial-policy" style={{ color: "var(--lime)", textDecoration: "underline" }}>Editorial & Corrections Policy</Link> to learn how our desk operates.
          </p>

          <h2>Get In Touch</h2>
          <p>
            Have a scoop, press release, or feedback? Reach out to our editorial desk at{" "}
            <a href="mailto:hello@buzzoriginals.com" style={{ color: "var(--lime)", textDecoration: "underline" }}>
              hello@buzzoriginals.com
            </a>{" "}
            or visit our <Link href="/contact" style={{ color: "var(--lime)", textDecoration: "underline" }}>Contact Page</Link>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
