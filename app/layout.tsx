import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import Nav from "./components/Nav";
import Loader from "./components/Loader";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emmanueldoji.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Emmanuel Doji — Full-Stack & Web3 Engineer",
    template: "%s — Emmanuel Doji",
  },
  description:
    "Senior full-stack and Web3 engineer building production AI-native products with Next.js, TypeScript, Rust, and Solidity. Available for contract work.",
  keywords: [
    "Emmanuel Doji",
    "Claude Code portfolio",
    "Full-Stack Developer",
    "Web3 Engineer",
    "Next.js Developer",
    "Sanity CMS",
    "TypeScript",
    "React",
    "Rust",
    "Solidity",
  ],
  authors: [{ name: "Emmanuel Doji" }],
  creator: "Emmanuel Doji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Emmanuel Doji",
    title: "Emmanuel Doji — Full-Stack & Web3 Engineer",
    description:
      "Senior full-stack and Web3 engineer. Production AI-native products with Next.js, TypeScript, Rust, and Solidity.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Emmanuel Doji" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Doji — Full-Stack & Web3 Engineer",
    description: "Senior full-stack and Web3 engineer building AI-native products.",
    images: ["/api/og"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#fafaf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <LenisProvider>
          <Loader />
          <Nav />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
