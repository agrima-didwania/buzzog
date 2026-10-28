import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Buzz Originals",
  description:
    "Buzz Originals Privacy Policy: Learn how we protect subscriber emails, collect non-personal analytics, and ensure transparent data privacy.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--lavender)] flex flex-col justify-between">
      <Header />

      <main className="article-wrap" style={{ maxWidth: "840px" }}>
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span style={{ color: "var(--lavender)" }}>PRIVACY POLICY</span>
        </nav>

        <header className="article-header" style={{ marginBottom: "32px" }}>
          <span className="badge">Legal & Privacy</span>
          <h1 className="article-title" style={{ marginTop: "12px" }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: "14px", color: "var(--muted)", marginTop: "8px" }}>
            Last Updated: October 28, 2026
          </p>
        </header>

        <div className="article-content">
          <p>
            Welcome to <strong>Buzz Originals</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are committed to protecting the personal information you share with us when browsing our entertainment portal or subscribing to the Buzz Squad newsletter.
          </p>

          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Newsletter Information:</strong> When you subscribe to the Buzz Squad, we collect your email address, subscription timestamp, and confirmation status.</li>
            <li><strong>Community Participation:</strong> When voting on editorial polls, we process temporary hashed identifiers (such as anonymized IP hashes) solely to prevent duplicate voting. We do not link poll responses to personal identities.</li>
            <li><strong>Device & Browsing Data:</strong> Standard server logs, approximate geographic location (country/city), browser type, and referrer headers collected anonymously for performance optimization and abuse prevention.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use your data solely to:
          </p>
          <ul>
            <li>Deliver the Buzz Squad newsletter, breaking scoops, and entertainment roundups you opted into.</li>
            <li>Maintain security, prevent spam, and protect our interactive services from automated abuse.</li>
            <li>Analyze aggregate reading trends to improve our coverage and user experience.</li>
          </ul>

          <h2>3. We Never Sell Your Data</h2>
          <p>
            Buzz Originals does not sell, rent, trade, or monetize subscriber email addresses or personal data to third parties under any circumstances.
          </p>

          <h2>4. Data Retention & Unsubscribing</h2>
          <p>
            You can unsubscribe from the Buzz Squad newsletter at any time by clicking the &quot;Unsubscribe&quot; link present in any marketing email, or by contacting our desk at{" "}
            <a href="mailto:hello@buzzoriginals.com" style={{ color: "var(--lime)", textDecoration: "underline" }}>
              hello@buzzoriginals.com
            </a>. Upon request, your email record is permanently purged from our active distribution lists.
          </p>

          <h2>5. Cookies & Local Storage</h2>
          <p>
            We use lightweight browser local storage to preserve your reading preferences (such as poll vote completion and cookie consent states) without cross-site tracking.
          </p>

          <h2>6. Contact Our Privacy Desk</h2>
          <p>
            If you have questions regarding this Privacy Policy or data handling practices, reach us directly at{" "}
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
