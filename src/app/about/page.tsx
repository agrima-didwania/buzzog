import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Buzz Originals",
  description:
    "Learn about Buzz Originals — our mission, editorial team, and unfiltered coverage of Reality Shows, Bollywood, Movies, Web Series, and News.",
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
            <li>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 flex-1">
                <strong className="text-white font-bold sm:min-w-[150px] flex-shrink-0">
                  <Link href="/reality-shows" className="hover:text-[var(--lime)] transition-colors">
                    Reality Shows:
                  </Link>
                </strong>
                <span className="text-[#d4d4d8]">
                  Eliminations, fights, fan wars, dome drama, and 24/7 live feed scoops across Bigg Boss, Splitsvilla, Khatron Ke Khiladi, and Rise and Fall — minus the filler.
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 flex-1">
                <strong className="text-white font-bold sm:min-w-[150px] flex-shrink-0">
                  <Link href="/bollywood" className="hover:text-[var(--lime)] transition-colors">
                    Bollywood:
                  </Link>
                </strong>
                <span className="text-[#d4d4d8]">
                  Red carpets, celebrity scoops, airport looks, festival premieres, and the unfiltered gossip your group chat is already talking about.
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 flex-1">
                <strong className="text-white font-bold sm:min-w-[150px] flex-shrink-0">
                  <Link href="/movies" className="hover:text-[var(--lime)] transition-colors">
                    Movies:
                  </Link>
                </strong>
                <span className="text-[#d4d4d8]">
                  Theatrical release trackers, IMAX &amp; box office clash analysis, trailer breakdowns, and fan-first movie reviews spanning Bollywood and Hollywood.
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 flex-1">
                <strong className="text-white font-bold sm:min-w-[150px] flex-shrink-0">
                  <Link href="/#web-series" className="hover:text-[var(--lime)] transition-colors">
                    Web Series:
                  </Link>
                </strong>
                <span className="text-[#d4d4d8]">
                  OTT premiere calendars, digital release scoops, binge recommendations, and candid reviews across Netflix, Prime Video, JioCinema, and Hotstar.
                </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 flex-1">
                <strong className="text-white font-bold sm:min-w-[150px] flex-shrink-0">
                  <Link href="/#news" className="hover:text-[var(--lime)] transition-colors">
                    News:
                  </Link>
                </strong>
                <span className="text-[#d4d4d8]">
                  Breaking entertainment scoops, verified cyber crime filings, legal notices, and industry developments without the PR spin.
                </span>
              </div>
            </li>
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
