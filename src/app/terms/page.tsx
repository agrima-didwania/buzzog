import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Buzz Originals",
  description:
    "Terms and conditions for accessing Buzz Originals entertainment articles, newsletters, community polls, and multimedia coverage.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      <Header />

      <main className="article-wrap" style={{ maxWidth: "840px" }}>
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>TERMS OF SERVICE</span>
        </nav>

        <header className="article-header" style={{ marginBottom: "32px" }}>
          <span className="badge">Terms & Conditions</span>
          <h1 className="article-title" style={{ marginTop: "12px" }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "8px" }}>
            Effective Date: October 28, 2026
          </p>
        </header>

        <div className="article-content">
          <p>
            By accessing and reading <strong>Buzz Originals</strong> (accessible at buzzog.com and buzzoriginals.com), you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2>1. Editorial & Intellectual Property</h2>
          <p>
            All original articles, editorial commentary, headlines, graphics, logos, and custom layouts published on Buzz Originals are the property of Buzz Originals and protected by applicable copyright laws. You may quote short excerpts with clear attribution and a direct clickable link to the original article on our site.
          </p>

          <h2>2. Media & Fair Use Disclaimers</h2>
          <p>
            Movie stills, red carpet photographs, television screengrabs, and promotional posters referenced in our editorial reviews are used under the doctrine of fair use/fair dealing for criticism, review, commentary, and news reporting. Copyrights remain with their respective production houses, studios, and photographers.
          </p>

          <h2>3. User Conduct on Community Features</h2>
          <p>
            When participating in community features (such as polls, comments, or reaction tools), users agree not to:
          </p>
          <ul>
            <li>Deploy automated scripts, bots, or crawlers to manipulate voting figures or flood subscription endpoints.</li>
            <li>Post unlawful, defamatory, abusive, or infringing content.</li>
            <li>Attempt to breach or probe the website&apos;s security or rate-limiting architecture.</li>
          </ul>

          <h2>4. Disclaimer of Warranties</h2>
          <p>
            While our editorial desk strives for accuracy and timely reporting, entertainment news involves developing stories and industry reports. All content is provided on an &quot;as is&quot; basis without warranty of any kind.
          </p>

          <h2>5. Changes to These Terms</h2>
          <p>
            Buzz Originals reserves the right to modify these Terms of Service at any time. Continued use of the website following any changes constitutes acceptance of the revised terms.
          </p>

          <h2>6. Contact Information</h2>
          <p>
            For questions regarding these terms, reach our legal desk at{" "}
            <a href="mailto:hello@buzzoriginals.com" style={{ color: "var(--lime)", textDecoration: "underline" }}>
              hello@buzzoriginals.com
            </a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
