export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Dominion Academy & Firm Foundation School",
    role: "Proprietor",
    period: "2026 — Present",
    location: "Northern Nigeria",
    summary:
      "Took on the proprietorship of two schools founded by my parents. Running academic operations, faculty oversight, and the rollout of SkoolBox — an offline-first AI tutor I co-built — as in-classroom infrastructure. Treating school operations like a product: clear systems, observable outcomes.",
    stack: ["Operations", "Curriculum", "Edu-tech rollout", "Stakeholder ops"],
  },
  {
    company: "Pagrin",
    role: "Frontend Engineer",
    period: "2025 — Present",
    location: "Remote",
    summary:
      "Lead the frontend across a multi-app Turborepo: partners dashboard, embeddable web SDK, and the shared @pagrin/ai-chat, /analytics, /i18n, /ui packages. Designed and shipped the dashboard interface, the embeddable SDK surface, and the i18n + analytics pipeline that powers both apps.",
    stack: ["Next.js 16", "Turborepo", "next-intl", "PostHog", "React 19", "ECharts"],
  },
  {
    company: "Tita Group",
    role: "Senior Frontend Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Lead frontend across Tita Group's product portfolio. Shipped TitaCenter (fintech super-app — on/off-ramp, exchange, invoicing, payment gateway, wallet) and Stim (real-money Web3 PvP gaming on Base, plus a separate Next.js + wagmi admin panel). Built the animation language, design tokens, and data-fetching patterns the engineering team extends.",
    stack: ["Next.js 16", "React 19", "TanStack Query", "Framer Motion", "viem", "wagmi"],
  },
  {
    company: "Foniolabs",
    role: "Lead Engineer (Sanity Migration)",
    period: "2025 — 2026",
    location: "Remote",
    summary:
      "Led the end-to-end CMS migration of foniolabs.xyz to Sanity + Next.js + Vercel. Modelled 9 document types and 8 reusable section blocks, built custom Studio components (slug-with-auto-redirect, SEO preview, OG preview, presentation tool), and integrated Claude Code + Sanity MCP so the marketing team publishes content by prompting. Lighthouse 95+ across the board.",
    stack: ["Next.js 16", "Sanity", "GROQ", "Claude Code MCP", "HubSpot", "Vercel"],
  },
  {
    company: "Independent / Open Source",
    role: "Full-Stack & Web3 Engineer",
    period: "2020 — Present",
    location: "Jos, Nigeria",
    summary:
      "Built and maintain Rabit, a MIT-licensed embedded wallet SDK with non-custodial Shamir-based key recovery — 11 packages, EVM + Solana, `create-rabit-app` scaffolder. Earlier: shipped wallets, on/off-ramps, PvP dApps, and fintech tools for clients across Africa and Europe.",
    stack: ["TypeScript", "Solidity", "viem", "@solana/web3.js", "Tauri", "Rust"],
  },
];
