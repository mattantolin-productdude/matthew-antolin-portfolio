import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllCaseStudies, getCaseStudy } from "@/lib/case-studies";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getCaseStudy(slug);
    return { title: meta.title };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;

  let study: ReturnType<typeof getCaseStudy>;
  try {
    study = getCaseStudy(slug);
  } catch {
    notFound();
    throw new Error("unreachable");
  }

  const { meta, source } = study;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/case-studies"
        className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
      >
        ← All case studies
      </Link>

      <div className="mt-8">
        <p className="text-xs text-zinc-400 mb-2">
          {meta.company} · {meta.role} · {meta.date}
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">{meta.title}</h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {meta.summary}
        </p>
      </div>

      {meta.impact?.length > 0 && (
        <ul className="mt-6 mb-8 space-y-1.5 border-l-2 border-zinc-200 dark:border-zinc-700 pl-4">
          {meta.impact.map((point) => (
            <li
              key={point}
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              {point}
            </li>
          ))}
        </ul>
      )}

      <article className="prose prose-zinc dark:prose-invert mt-10 max-w-none">
        <MDXRemote source={source} />
      </article>

      {meta.artifacts?.length > 0 && (
        <div className="mt-14 border-t border-zinc-200 dark:border-zinc-800 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
            Artifacts
          </h2>
          <div className="flex flex-wrap gap-3">
            {meta.artifacts.map((a) =>
              a.available ? (
                <a
                  key={a.label}
                  href={a.file}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  ↓ {a.label}
                </a>
              ) : (
                <span
                  key={a.label}
                  title="PDF not yet uploaded — see /content/artifacts for source"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded border border-zinc-200 dark:border-zinc-800 text-zinc-400 select-none cursor-not-allowed"
                >
                  ↓ {a.label}
                  <span className="text-xs opacity-70">(coming soon)</span>
                </span>
              )
            )}
          </div>
        </div>
      )}
    </main>
  );
}
