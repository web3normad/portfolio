export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  org?: string;
  stack: string[];
  outcome: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "pagrin",
    index: "01",
    title: "Pagrin",
    tagline:
      "Partners dashboard + embeddable web SDK on a multi-app Turborepo with shared AI chat, analytics, and i18n packages.",
    year: "2025 — Present",
    role: "Frontend engineer",
    org: "Pagrin",
    stack: ["Next.js 16", "Turborepo", "React 19", "next-intl", "@pagrin/ai-chat", "PostHog"],
    outcome:
      "Two product surfaces ship from one source of truth. Designed and shipped the partners dashboard UI, the embeddable web SDK, and the shared design system that powers both.",
    caseStudy: "pagrin-frontend",
  },
  {
    slug: "titacenter",
    index: "02",
    title: "TitaCenter",
    tagline:
      "Fintech super-app: on-ramp, off-ramp, exchange, trade, invoicing, payment-gateway, and wallet — one product, one team.",
    year: "2024 — 2025",
    role: "Lead frontend engineer",
    org: "Tita Group",
    stack: ["Next.js 16", "React 19", "TanStack Query", "Framer Motion", "Recharts"],
    outcome:
      "Shipped seven financial product surfaces inside a single coherent interface. Built the design system, animation language, and data-fetching patterns the rest of the engineering team now extends.",
    caseStudy: "titacenter",
  },
  {
    slug: "stim",
    index: "03",
    title: "Stim",
    tagline:
      "Real-money Web3 PvP gaming PWA. Tic-tac-toe in USDC on Base, with a minimax AI fallback when no opponent is online.",
    year: "2024 — 2025",
    role: "Full-stack engineer",
    org: "Tita Group",
    stack: ["React", "Vite", "viem", "wagmi", "RainbowKit", "Socket.IO", "Express"],
    outcome:
      "Wallet-connected PvP, real-money escrow, minimax + alpha-beta AI for solo play, full-stack i18n, PWA installability. Shipped admin panel separately on Next.js + wagmi.",
  },
  {
    slug: "rabit",
    index: "04",
    title: "Rabit",
    tagline:
      "Open-source embedded wallet SDK. 11-package Turborepo, EVM + Solana, 2-of-3 Shamir Secret Sharing for non-custodial recovery.",
    year: "2025",
    role: "Creator · Maintainer",
    org: "Open source",
    stack: ["TypeScript", "Turborepo", "Changesets", "viem", "@solana/web3.js"],
    outcome:
      "MIT-licensed SDK with a `create-rabit-app` scaffolder, full CONTRIBUTING / SECURITY / CoC, and key recovery that doesn't require a custodian. The wallet layer that should have existed.",
    github: "https://github.com/web3normad/rabit-wallet",
    caseStudy: "rabit-wallet",
  },
  {
    slug: "schoolbox",
    index: "05",
    title: "SkoolBox",
    tagline:
      "Offline-first AI tutor for Nigerian secondary schools. Tauri 2 + Rust + local LLM. Designed for the schools I help operate.",
    year: "2025 — Present",
    role: "Product engineer",
    org: "Foniolabs · Dominion Academy pilot",
    stack: ["Tauri 2", "Rust", "React 18", "SQLite", "KaTeX", "mammoth"],
    outcome:
      "A ~12MB desktop app that gives teachers AI-assisted lesson planning and students an AI tutor — without depending on the internet. Pilot deploys into the schools I run.",
    caseStudy: "schoolbox-offline-ai",
  },
  {
    slug: "foniolabs",
    index: "06",
    title: "Foniolabs",
    tagline:
      "End-to-end Sanity + Next.js CMS migration. Custom Studio components, Claude Code MCP wired into the editor flow.",
    year: "2026",
    role: "Lead engineer",
    org: "Foniolabs",
    stack: ["Next.js 16", "Sanity", "GROQ", "Vercel", "Claude Code MCP", "HubSpot"],
    outcome:
      "Marketing publishes content by prompting Claude Code. Lighthouse 95+ across the board, zero SEO ranking drop after DNS cutover.",
    github: "https://github.com/foniolabs/website",
    demo: "https://foniolabs.xyz",
    caseStudy: "foniolabs-sanity-migration",
  },
];
