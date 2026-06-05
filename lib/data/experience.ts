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
    company: "Foniolabs",
    role: "Senior Full-Stack Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Led the Sanity + Next.js migration of foniolabs.xyz end-to-end: 9 document types, 8 reusable section blocks, Claude Code MCP wired into the editor flow. Shipped a desktop AI tutor (Schoolbox) on Tauri + Rust.",
    stack: ["Next.js 16", "Sanity", "Tauri", "Rust", "Claude Code"],
  },
  {
    company: "Pagrin",
    role: "Founding Engineer",
    period: "2024 — 2025",
    location: "Remote",
    summary:
      "Architected the Pagrin partners dashboard + web SDK monorepo. Built shared AI chat, analytics, and i18n packages used across both apps.",
    stack: ["Turborepo", "Next.js", "OpenTelemetry", "Vercel AI SDK"],
  },
  {
    company: "Independent Contract / OSS",
    role: "Full-Stack & Web3 Engineer",
    period: "2020 — 2024",
    location: "Jos, Nigeria",
    summary:
      "Shipped wallets, on/off-ramps, PvP gaming dApps, and fintech tools for clients across Africa and Europe. Maintainer of Rabit, a MIT-licensed embedded wallet SDK.",
    stack: ["React", "TypeScript", "Solidity", "viem", "Socket.IO"],
  },
];
