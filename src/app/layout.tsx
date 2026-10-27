import type { Metadata, Viewport } from "next";
import { Anton, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buzzog.com"),
  title: "Buzz Originals — The Buzz Never Sleeps",
  description:
    "Raw, unfiltered entertainment coverage of Indian reality TV and Bollywood — built for the group chat.",
  keywords: [
    "Bigg Boss",
    "Splitsvilla",
    "Khatron Ke Khiladi",
    "Bollywood Gossip",
    "Reality TV",
    "Buzz Originals",
  ],
  authors: [{ name: "Buzz Originals" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceMono.variable} ${plusJakartaSans.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
