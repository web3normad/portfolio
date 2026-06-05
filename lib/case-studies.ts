import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type CaseStudyFrontmatter = {
  title: string;
  project: string;
  year: string;
  role: string;
  stack: string[];
  github?: string;
  demo?: string;
  problem: string;
  outcome: string;
  metrics?: { label: string; value: string }[];
};

const ROOT = path.join(process.cwd(), "content", "case-studies");

export async function listCaseStudies() {
  const files = await fs.readdir(ROOT);
  return Promise.all(
    files
      .filter((f) => f.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const raw = await fs.readFile(path.join(ROOT, file), "utf8");
        const { data } = matter(raw);
        return { slug, frontmatter: data as CaseStudyFrontmatter };
      })
  );
}

export async function getCaseStudy(slug: string) {
  const file = path.join(ROOT, `${slug}.mdx`);
  try {
    const raw = await fs.readFile(file, "utf8");
    const { content, data } = matter(raw);
    return { slug, content, frontmatter: data as CaseStudyFrontmatter };
  } catch {
    return null;
  }
}
