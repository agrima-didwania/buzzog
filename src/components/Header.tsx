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

        {/* Outer Shimmer Menu Capsule */}
        <div className="navlinks relative z-0 overflow-hidden rounded-full p-[1.5px] border border-white/10 [background:linear-gradient(135deg,#1c1c1c_0%,#0e2614_100%)] shadow-[0_0_24px_rgba(111,207,74,0.2)]">
          {/* Magic UI Shimmer traveling around the outer perimeter */}
          <div className="pointer-events-none -z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
            <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-full rounded-none">
              <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_225deg,transparent_0,#6FCF4A_90deg,transparent_90deg)]" />
            </div>
          </div>

          {/* Inner Capsule Menu Items */}
          <div className="relative z-10 flex items-center gap-1.5 rounded-full px-2 py-1.5 [background:rgba(18,18,18,0.95)]">
            {navLinks.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold transition-all whitespace-nowrap",
                    isActive
                      ? "bg-gradient-to-r from-[#6FCF4A] to-[#1F6B2C] text-black font-extrabold shadow-[0_2px_12px_rgba(111,207,74,0.45)]"
                      : "text-neutral-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right CTA & Mobile Burger */}
        <div className="navcta flex items-center gap-3">
          <ShimmerButton
            shimmerColor="#6FCF4A"
            shimmerSize="0.1em"
            shimmerDuration="3s"
            borderRadius="999px"
            background="linear-gradient(135deg, var(--magenta), var(--magenta-dim))"
            className="hidden sm:inline-flex px-5 py-2.5 text-xs font-bold text-white shadow-[0_4px_20px_rgba(228,34,46,0.4)]"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu sm:hidden px-6 py-4 bg-[rgba(20,20,20,0.98)] border-b border-[var(--line)]">
          <div className="relative z-0 overflow-hidden rounded-2xl p-[1.5px] border border-white/10 [background:linear-gradient(135deg,#1c1c1c_0%,#0e2614_100%)]">
            {/* Shimmer light on outer perimeter */}
            <div className="pointer-events-none -z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]">
              <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-full rounded-none">
                <div className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_225deg,transparent_0,#6FCF4A_90deg,transparent_90deg)]" />
              </div>
            </div>

            <div className="relative z-10 flex flex-col gap-1.5 p-2 rounded-2xl [background:rgba(18,18,18,0.96)]">
              {navLinks.map((item) => {
                const isActive = activeNav === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-2.5 text-sm font-semibold transition-all",
                      isActive
                        ? "bg-gradient-to-r from-[#6FCF4A] to-[#1F6B2C] text-black font-extrabold"
                        : "text-neutral-300 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-3">
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
