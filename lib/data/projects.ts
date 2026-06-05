export type Project = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  outcome: string;
  github?: string;
  demo?: string;
  caseStudy?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "foniolabs",
    index: "01",
    title: "Foniolabs",
    tagline: "Sanity + Next.js CMS migration with Claude Code MCP wired into the editor flow.",
    year: "2026",
    role: "Lead engineer",
    stack: ["Next.js 16", "Sanity", "GROQ", "Vercel", "Claude Code MCP"],
    outcome:
      "Marketing team ships content via natural-language prompts. Lighthouse 95+ across the board, zero SEO drop after cutover.",
    github: "https://github.com/foniolabs/website",
    demo: "https://foniolabs.xyz",
    caseStudy: "foniolabs-sanity-migration",
  },
  {
    slug: "rabit",
    index: "02",
    title: "Rabit Wallet",
    tagline: "Open-source embedded wallet SDK. 12-package Turborepo, EVM + Solana, 2-of-3 Shamir keys.",
    year: "2025",
    role: "Creator / maintainer",
    stack: ["TypeScript", "Turborepo", "Changesets", "viem", "@solana/web3.js"],
    outcome:
      "MIT-licensed SDK with create-rabit-app scaffolder, full CONTRIBUTING/SECURITY/CoC, and non-custodial key recovery.",
    github: "https://github.com/web3normad/rabit-wallet",
    caseStudy: "rabit-wallet",
  },
  {
    slug: "pagrin",
    index: "03",
    title: "Pagrin",
    tagline: "Multi-app Turborepo with shared AI chat, analytics, and i18n packages.",
    year: "2025",
    role: "Architect",
    stack: ["Next.js 16", "Turborepo", "OpenTelemetry", "Vercel AI SDK"],
    outcome:
      "Partner dashboard and web SDK consume the same component library and analytics signals through internal packages.",
    github: "https://github.com/web3normad/pagrin",
    caseStudy: "pagrin-monorepo",
  },
  {
    slug: "schoolbox",
    index: "04",
    title: "Schoolbox",
    tagline: "Offline-first AI tutor for low-connectivity learners. Tauri 2 + Rust + local LLM.",
    year: "2025",
    role: "Full-stack engineer",
    stack: ["Tauri 2", "Rust", "React 18", "SQLite", "KaTeX"],
    outcome:
      "Desktop app ships an AI tutor that works without internet. DOCX ingestion, math rendering, encrypted local storage.",
    github: "https://github.com/web3normad/schoolbox",
    caseStudy: "schoolbox-offline-ai",
  },
];
