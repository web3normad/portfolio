export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Rust", "Python", "Solidity", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue", "Nuxt", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL"],
  },
  {
    title: "Web3",
    items: ["viem", "wagmi", "ethers.js", "Solana web3.js", "Hardhat", "Foundry"],
  },
  {
    title: "DevOps",
    items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Sentry", "Turborepo"],
  },
  {
    title: "AI / Tooling",
    items: ["Claude Code", "Sanity MCP", "Vercel AI SDK", "OpenTelemetry", "LangChain"],
  },
];
