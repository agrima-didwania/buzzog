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

  // Exact 6 pages requested: Home, Reality Shows, Bollywood, Movies, Web Series, News
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Reality Shows", href: "/reality-shows" },
    { label: "Bollywood", href: "/bollywood" },
    { label: "Movies", href: "/movies" },
    { label: "Web Series", href: "/#web-series" },
    { label: "News", href: "/#news" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[rgba(14,11,20,0.92)] backdrop-blur-md border-b border-[var(--line)]">
      <nav className="w-full px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo */}
        <Link href="/" className="logo flex-shrink-0" aria-label="Buzz Originals Home">
          <Image
            src="/assets/buzzog-logo.png"
            alt="Buzz Originals"
            width={142}
            height={40}
            priority
            style={{ height: "38px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav: Individual Capsules with Outer Green Layer & Hover Shimmer */}
        <div className="navlinks hidden md:flex items-center gap-2.5 lg:gap-3 xl:gap-3.5">
          {navLinks.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <ShimmerButton
                key={item.label}
                href={item.href}
                shimmerColor={isActive ? "#FFFFFF" : "#6FCF4A"}
                shimmerSize="2px"
                shimmerDuration="2.5s"
                borderRadius="9999px"
                shimmerAlways={isActive}
                shimmerOnHover={!isActive}
                background={isActive ? "#6FCF4A" : "#141417"}
                hoverBackground={isActive ? "#6FCF4A" : "#1a1a1f"}
                className={cn(
                  "h-10 px-8 min-w-[96px] text-[13.5px] font-semibold tracking-wide rounded-full border transition-all duration-200",
                  isActive
                    ? "text-white font-bold border-[#6FCF4A] shadow-[0_0_20px_rgba(111,207,74,0.5)]"
                    : "text-neutral-300 border-white/10 hover:border-[#6FCF4A]/80 hover:text-white hover:shadow-[0_0_16px_rgba(111,207,74,0.35)]"
                )}
              >
                {item.label}
              </ShimmerButton>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Burger */}
        <div className="navcta flex items-center gap-3 flex-shrink-0">
          <ShimmerButton
            shimmerColor="#6FCF4A"
            shimmerSize="2px"
            shimmerDuration="2.5s"
            shimmerOnHover={true}
            borderRadius="9999px"
            background="linear-gradient(135deg, var(--magenta), var(--magenta-dim))"
            className="hidden sm:inline-flex h-10 px-7 text-xs font-bold text-white shadow-[0_4px_20px_rgba(228,34,46,0.35)] hover:shadow-[0_4px_24px_rgba(111,207,74,0.4)] transition-all"
            onClick={() =>
              window.open(
                "https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg==",
                "_blank"
              )
            }
          >
            📸 Follow the Buzz
          </ShimmerButton>

          <button
            className="burger text-2xl text-[var(--lavender)] p-1 cursor-pointer md:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden px-6 py-4 bg-[rgba(20,20,20,0.98)] border-b border-[var(--line)] flex flex-col gap-2">
          {navLinks.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <ShimmerButton
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                shimmerColor={isActive ? "#FFFFFF" : "#6FCF4A"}
                shimmerSize="2px"
                shimmerDuration="2.5s"
                borderRadius="12px"
                shimmerAlways={isActive}
                shimmerOnHover={!isActive}
                background={isActive ? "#6FCF4A" : "#161616"}
                hoverBackground={isActive ? "#6FCF4A" : "#1e1e1e"}
                className={cn(
                  "w-full justify-start h-11 px-4 text-sm font-semibold rounded-xl border transition-all",
                  isActive
                    ? "text-white font-bold border-[#6FCF4A] shadow-[0_0_16px_rgba(111,207,74,0.35)]"
                    : "text-neutral-300 border-white/10 hover:border-[#6FCF4A]/80 hover:text-white"
                )}
              >
                {item.label}
              </ShimmerButton>
            );
          })}

          <div className="mt-2 pt-2 border-t border-[var(--line)]">
            <button
              className="w-full btn-follow justify-center py-3 text-xs"
              onClick={() => {
                setMobileMenuOpen(false);
                window.open(
                  "https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg==",
                  "_blank"
                );
              }}
            >
              📸 Follow the Buzz
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
