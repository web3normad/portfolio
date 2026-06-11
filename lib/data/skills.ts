export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React 19",
      "Next.js 16",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "TanStack Query",
      "Vite",
      "next-intl",
    ],
  },
  {
    title: "Architecture",
    items: ["Turborepo", "pnpm workspaces", "Changesets", "Monorepo", "Design systems", "ECharts"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "Express", "PostgreSQL", "SQLite", "Redis", "Sanity", "GROQ"],
  },
  {
    title: "Web3",
    items: [
      "viem",
      "wagmi",
      "RainbowKit",
      "ethers.js",
      "@solana/web3.js",
      "Hardhat",
      "Foundry",
      "Solidity",
    ],
  },
  {
    title: "Desktop & systems",
    items: ["Tauri 2", "Rust", "sqlx", "reqwest", "WASM", "Local LLM"],
  },
  {
    title: "AI · DevOps · Ops",
    items: [
      "Claude Code",
      "Sanity MCP",
      "Vercel AI SDK",
      "PostHog",
      "OpenTelemetry",
      "Vercel",
      "GitHub Actions",
    ],
  },
];
