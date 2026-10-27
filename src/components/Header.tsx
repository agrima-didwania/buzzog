"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  activeNav?: string;
}

export default function Header({ activeNav = "Home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Reality Shows", href: "/#reality-shows" },
    { label: "Bollywood", href: "/#bollywood" },
    { label: "Movie Reviews", href: "/#movie-reviews" },
    { label: "Web Series", href: "/#web-series" },
    { label: "News", href: "/#news" },
  ];

  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image
            src="/assets/buzzog-logo.png"
            alt="Buzz OG"
            width={142}
            height={40}
            priority
            style={{ height: "38px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        <div className="navlinks">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={activeNav === item.label ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="navcta">
          <button
            className="btn-follow"
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            📸 Follow the Buzz
          </button>
          <button
            className="burger"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={activeNav === item.label ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
