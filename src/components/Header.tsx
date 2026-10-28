"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeNav?: string;
}

export default function Header({ activeNav = "Home" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Reality Shows", href: "/#reality-shows" },
    { label: "Bollywood", href: "/#bollywood" },
    { label: "Movies", href: "/#movies" },
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

        {/* Shimmer Buttons for Desktop Nav Menu */}
        <div className="navlinks" style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {navLinks.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <Link key={item.label} href={item.href} style={{ textDecoration: "none" }}>
                <ShimmerButton
                  shimmerColor="#6FCF4A"
                  shimmerSize="0.12em"
                  shimmerDuration="3s"
                  borderRadius="999px"
                  background={
                    isActive
                      ? "linear-gradient(135deg, #6FCF4A, #1F6B2C)"
                      : "linear-gradient(135deg, #181818 0%, #0d2313 100%)"
                  }
                  className={cn(
                    "px-4 py-2 text-xs font-semibold tracking-wide border transition-all",
                    isActive
                      ? "text-black font-extrabold shadow-[0_0_18px_rgba(111,207,74,0.45)] border-[#6FCF4A]/60"
                      : "text-[#d6d6d6] border-white/10 hover:text-white hover:border-[#6FCF4A]/40"
                  )}
                >
                  {item.label}
                </ShimmerButton>
              </Link>
            );
          })}
        </div>

        <div className="navcta">
          <button
            className="btn-follow"
            onClick={() =>
              window.open(
                "https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg==",
                "_blank"
              )
            }
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

      {/* Shimmer Buttons for Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {navLinks.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <ShimmerButton
                  shimmerColor="#6FCF4A"
                  shimmerSize="0.1em"
                  shimmerDuration="3s"
                  borderRadius="12px"
                  background={
                    isActive
                      ? "linear-gradient(135deg, #6FCF4A, #1F6B2C)"
                      : "linear-gradient(135deg, #181818, #0d2313)"
                  }
                  className={cn(
                    "w-full justify-start px-4 py-2.5 text-sm font-semibold",
                    isActive ? "text-black font-extrabold" : "text-[#d6d6d6]"
                  )}
                >
                  {item.label}
                </ShimmerButton>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
