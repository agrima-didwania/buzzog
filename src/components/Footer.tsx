import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-col" style={{ maxWidth: "260px" }}>
          <Link href="/" className="logo" style={{ marginBottom: "14px" }}>
            <Image
              src="/assets/buzzog-logo.png"
              alt="Buzz OG"
              width={128}
              height={36}
              style={{ height: "34px", width: "auto", objectFit: "contain" }}
            />
          </Link>
          <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>
            Raw, unfiltered entertainment coverage of Indian reality TV and Bollywood — built for
            the group chat.
          </p>
          <div className="footer-social" style={{ marginTop: "16px" }}>
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              📸
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              ▶️
            </a>
            <a href="#" aria-label="Twitter/X">
              ✕
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Categories</h4>
          <Link href="/#reality-shows">Reality Shows</Link>
          <Link href="/#bollywood">Bollywood</Link>
          <Link href="/#movies">Movies</Link>
          <Link href="/#web-series">Web Series</Link>
          <Link href="/#news">News</Link>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <Link href="/#videos">Videos</Link>
          <Link href="/#polls">Polls & Games</Link>
          <Link href="#">About Buzz Originals</Link>
          <Link href="#">Contact Us</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 BUZZ ORIGINALS. ALL RIGHTS RESERVED.</span>
        <span>PRIVACY · TERMS · CONTACT</span>
      </div>
    </footer>
  );
}
