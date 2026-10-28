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
    <header className="sticky top-0 z-50 bg-[rgba(14,11,20,0.92)] backdrop-blur-md border-b border-[var(--line)]">
      <nav className="max-w-[1240px] mx-auto px-6 py-3.5 flex items-center justify-between gap-6">
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

        {/* Desktop Nav: Individual Separated Shimmer Buttons */}
        <div className="navlinks flex items-center gap-2">
          {navLinks.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <Link key={item.label} href={item.href} className="no-underline">
                <ShimmerButton
                  shimmerColor="#6FCF4A"
                  shimmerSize="0.1em"
                  shimmerDuration="2.5s"
                  shimmerOnHover={!isActive}
                  borderRadius="999px"
                  background={
                    isActive
                      ? "linear-gradient(135deg, #6FCF4A, #1F6B2C)"
                      : "#141414"
                  }
                  className={cn(
                    "px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300",
                    isActive
                      ? "text-black font-extrabold border-[#6FCF4A] shadow-[0_0_16px_rgba(111,207,74,0.45)]"
                      : "text-neutral-300 border-white/10 hover:text-white hover:border-[#6FCF4A]/70 hover:shadow-[0_0_14px_rgba(111,207,74,0.35)]"
                  )}
                >
                  {item.label}
                </ShimmerButton>
              </Link>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Burger */}
        <div className="navcta flex items-center gap-3">
          <ShimmerButton
            shimmerColor="#6FCF4A"
            shimmerSize="0.1em"
            shimmerDuration="2.5s"
            shimmerOnHover={true}
            borderRadius="999px"
            background="linear-gradient(135deg, var(--magenta), var(--magenta-dim))"
            className="hidden sm:inline-flex px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(228,34,46,0.35)] hover:shadow-[0_4px_24px_rgba(111,207,74,0.4)] transition-all"
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
            className="burger text-2xl text-[var(--lavender)] p-1 cursor-pointer sm:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu: Individual Separated Shimmer Items */}
      {mobileMenuOpen && (
        <div className="mobile-menu sm:hidden px-6 py-4 bg-[rgba(20,20,20,0.98)] border-b border-[var(--line)] flex flex-col gap-2">
          {navLinks.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="no-underline"
              >
                <ShimmerButton
                  shimmerColor="#6FCF4A"
                  shimmerSize="0.1em"
                  shimmerDuration="2.5s"
                  shimmerOnHover={!isActive}
                  borderRadius="14px"
                  background={
                    isActive
                      ? "linear-gradient(135deg, #6FCF4A, #1F6B2C)"
                      : "#161616"
                  }
                  className={cn(
                    "w-full justify-start px-4 py-2.5 text-sm font-semibold rounded-xl border transition-all",
                    isActive
                      ? "text-black font-extrabold border-[#6FCF4A]"
                      : "text-neutral-300 border-white/10 hover:text-white hover:border-[#6FCF4A]/60"
                  )}
                >
                  {item.label}
                </ShimmerButton>
              </Link>
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
