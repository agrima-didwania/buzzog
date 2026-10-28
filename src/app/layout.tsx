import type { Metadata, Viewport } from "next";
import { Anton, Space_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
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
  metadataBase: new URL("https://www.buzzoriginals.com"),
  title: {
    default: "Buzz Originals — The Buzz Never Sleeps",
    template: "%s | Buzz Originals",
  },
  description:
    "Raw, unfiltered entertainment coverage of Indian reality TV, Bigg Boss, Splitsvilla, Bollywood & Web Series — built for the group chat.",
  keywords: [
    "Buzz Originals",
    "Bigg Boss",
    "Splitsvilla",
    "Khatron Ke Khiladi",
    "Bollywood Gossip",
    "Indian Reality TV",
    "Web Series",
    "Movie Reviews",
  ],
  authors: [{ name: "Buzz Originals Editorial Team" }],
  creator: "Buzz Originals",
  publisher: "Buzz Originals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.buzzoriginals.com",
    siteName: "Buzz Originals",
    title: "Buzz Originals — The Buzz Never Sleeps",
    description:
      "Raw, unfiltered entertainment coverage of Indian reality TV, Bigg Boss, Splitsvilla, Bollywood & Web Series — built for the group chat.",
    images: [
      {
        url: "/assets/buzzog-logo.png",
        width: 1200,
        height: 630,
        alt: "Buzz Originals Entertainment Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buzz Originals — The Buzz Never Sleeps",
    description:
      "Raw, unfiltered entertainment coverage of Indian reality TV, Bollywood & Web Series.",
    images: ["/assets/buzzog-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/favicon.ico"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Buzz Originals",
    url: "https://www.buzzoriginals.com",
    logo: "https://www.buzzoriginals.com/assets/buzzog-logo.png",
    email: "hello@buzzoriginals.com",
    sameAs: [
      "https://www.instagram.com/buzzoriginals?exln=MWdhNTk5dWdlYnF5cg==",
      "https://www.facebook.com/share/1bxo95CLHq/",
      "https://www.threads.com/@buzzoriginals",
      "https://www.youtube.com/@buzzoriginals",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Buzz Originals",
    url: "https://www.buzzoriginals.com",
    description:
      "Raw, unfiltered entertainment coverage of Indian reality TV, Bollywood and Web Series.",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Buzz Originals",
    },
  };

  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceMono.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#news"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:px-4 focus:py-2 focus:bg-[var(--lime)] focus:text-black focus:font-bold focus:rounded-md"
        >
          Skip to main content
        </a>
        <SmoothCursor />
        {children}
      </body>
    </html>
  );
}
