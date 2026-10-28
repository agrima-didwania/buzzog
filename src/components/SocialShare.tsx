"use client";

import { useState } from "react";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement("input");
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="social-share-wrap flex items-center gap-2.5 flex-wrap pt-4">
      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
        Share story:
      </span>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share this story on WhatsApp"
        className="px-3 py-1.5 rounded-full bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-black font-semibold text-xs transition-colors inline-flex items-center gap-1.5"
      >
        <span>💬</span> WhatsApp
      </a>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share this story on X (formerly Twitter)"
        className="px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white hover:text-black font-semibold text-xs transition-colors inline-flex items-center gap-1.5"
      >
        <span>𝕏</span> Post
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share this story on Facebook"
        className="px-3 py-1.5 rounded-full bg-[#1877F2]/15 text-[#1877F2] hover:bg-[#1877F2] hover:text-white font-semibold text-xs transition-colors inline-flex items-center gap-1.5"
      >
        <span>f</span> Share
      </a>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy article link to clipboard"
        className="px-3 py-1.5 rounded-full bg-[var(--ink-3)] text-neutral-300 hover:text-[var(--lime)] hover:border-[var(--lime)] border border-white/10 font-semibold text-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
      >
        <span>🔗</span> {copied ? "Copied! ✓" : "Copy Link"}
      </button>

      {copied && (
        <span
          className="text-xs font-mono text-[var(--lime)] animate-fade-in"
          role="status"
          aria-live="polite"
        >
          Link copied to clipboard!
        </span>
      )}
    </div>
  );
}
