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
          <div className="footer-social" style={{ marginTop: "16px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Buzz Originals on Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1bxo95CLHq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Buzz Originals on Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.com/@buzzoriginals"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
              title="Buzz Originals on Threads"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.186 24C5.454 24 0 18.618 0 12.001 0 5.385 5.454 0 12.186 0c6.643 0 12.009 5.334 12.009 11.968 0 .61-.044 1.23-.131 1.838-.174 1.198-1.25 2.036-2.454 1.865-1.197-.174-2.036-1.252-1.862-2.454.053-.374.079-.757.079-1.134 0-4.757-3.844-8.625-8.641-8.625-4.82 0-8.742 3.89-8.742 8.672 0 4.78 3.922 8.671 8.742 8.671 2.378 0 4.582-.934 6.196-2.585.837-.858 2.21-.88 3.067-.043.857.838.88 2.21.043 3.068C18.47 23.082 15.447 24 12.186 24zm2.146-13.882c-.378-.456-.91-.708-1.5-.708-.95 0-1.748.665-1.939 1.616-.017.086-.03.174-.038.264.444.086.922.146 1.433.177.34.02.673.03.998.03.414 0 .779-.02 1.096-.062-.012-.47-.212-.907-.05-1.317zm-1.879 5.66c-1.42 0-2.583-.496-3.275-1.396-.64-.834-.84-1.92-.56-3.056.347-1.412 1.545-2.52 2.978-2.757.344-.058.7-.087 1.057-.087 1.077 0 2.052.29 2.82.84.774.556 1.255 1.353 1.355 2.247.16 1.432-.472 2.677-1.734 3.42-.76.446-1.688.678-2.641.789zm.417-3.951c-.347-.024-.694-.067-1.037-.13-.016.14-.025.284-.025.433 0 1.246.772 1.944 1.838 1.944.524 0 1.02-.187 1.399-.526.257-.23.414-.526.467-.882-.77.106-1.637.161-2.642.161z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@buzzoriginals"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="Buzz Originals on YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
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
