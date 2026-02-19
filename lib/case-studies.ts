import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content/case-studies");

export type Artifact = {
  label: string;
  file: string;
  available: boolean;
};

export type CaseStudyMeta = {
  slug: string;
  title: string;
  company: string;
  role: string;
  date: string;
  summary: string;
  impact: string[];
  tags: string[];
  artifacts: Artifact[];
};

export function getAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const { data } = matter(
        fs.readFileSync(path.join(DIR, filename), "utf8")
      );
      return { slug, ...(data as Omit<CaseStudyMeta, "slug">) };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getCaseStudy(slug: string): {
  meta: CaseStudyMeta;
  source: string;
} {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return {
    meta: { slug, ...(data as Omit<CaseStudyMeta, "slug">) },
    source: content,
  };
}
