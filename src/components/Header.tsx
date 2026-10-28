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

  // New navigation layout matching Buzz Originals reality TV & entertainment lineup
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Bigg Boss", href: "/#bigg-boss" },
    { label: "Splitsvilla", href: "/#splitsvilla" },
    { label: "Khatron Ke Khiladi", href: "/#khatron-ke-khiladi" },
    { label: "Bollywood", href: "/#bollywood" },
    { label: "Web Series", href: "/#web-series" },
  ];

  // Map legacy "Movies" active state to Bollywood if needed
  const normalizedActive = activeNav === "Movies" ? "Bollywood" : activeNav;

  return (
    <header className="sticky top-0 z-50 bg-[rgba(14,11,20,0.92)] backdrop-blur-md border-b border-[var(--line)]">
      <nav className="max-w-[1320px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo */}
        <Link href="/" className="logo flex-shrink-0">
          <Image
            src="/assets/buzzog-logo.png"
            alt="Buzz OG"
            width={142}
            height={40}
            priority
            style={{ height: "38px", width: "auto", objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Nav: Spacious Layout with Outer Green Layer & Hover Shimmer */}
        <div className="navlinks hidden md:flex items-center gap-2 lg:gap-3 xl:gap-[18px]">
          {navLinks.map((item) => {
            const isActive = normalizedActive === item.label;
            return (
              <ShimmerButton
                key={item.label}
                href={item.href}
                shimmerColor="#FFFFFF"
                shimmerSize="2px"
                shimmerDuration="2.5s"
                borderRadius="9999px"
                shimmerAlways={isActive}
                shimmerOnHover={!isActive}
                background={isActive ? "#6FCF4A" : "transparent"}
                hoverBackground="#6FCF4A"
                className={cn(
                  "h-[42px] text-[14px] rounded-full border transition-all duration-200",
                  isActive
                    ? "px-6 text-[#050505] font-bold border-[#6FCF4A] shadow-[0_0_20px_rgba(111,207,74,0.45)]"
                    : "px-5 text-neutral-300 font-semibold border-transparent hover:border-[#6FCF4A] hover:text-[#050505] hover:font-bold hover:shadow-[0_0_20px_rgba(111,207,74,0.45)]"
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
            className="hidden sm:inline-flex h-10 px-5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(228,34,46,0.35)] hover:shadow-[0_4px_24px_rgba(111,207,74,0.4)] transition-all"
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

      {/* Mobile Drawer Menu: Lineup with Green Active Capsule */}
      {mobileMenuOpen && (
        <div className="mobile-menu md:hidden px-6 py-4 bg-[rgba(20,20,20,0.98)] border-b border-[var(--line)] flex flex-col gap-2">
          {navLinks.map((item) => {
            const isActive = normalizedActive === item.label;
            return (
              <ShimmerButton
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                shimmerColor="#FFFFFF"
                shimmerSize="2px"
                shimmerDuration="2.5s"
                borderRadius="12px"
                shimmerAlways={isActive}
                shimmerOnHover={!isActive}
                background={isActive ? "#6FCF4A" : "transparent"}
                hoverBackground="#6FCF4A"
                className={cn(
                  "w-full justify-start h-11 px-4 text-sm font-semibold rounded-xl border transition-all",
                  isActive
                    ? "text-[#050505] font-bold border-[#6FCF4A] shadow-[0_0_16px_rgba(111,207,74,0.35)]"
                    : "text-neutral-300 border-transparent hover:border-[#6FCF4A] hover:text-[#050505] hover:font-bold"
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
