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
    return { title: `${meta.title} — Matthew Antolin` };
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

  const formattedDate = new Date(meta.date + "-01").toLocaleDateString(
    "en-CA",
    { month: "long", year: "numeric" }
  );

  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900">

      {/* Header */}
      <section className="mx-auto max-w-2xl px-6 pt-16 pb-10">
        <Link
          href="/case-studies"
          className="mb-10 inline-block text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-700"
        >
          ← All work
        </Link>

        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          {meta.company} &middot; {meta.role} &middot; {formattedDate}
        </p>

        <h1 className="mb-5 text-3xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-4xl">
          {meta.title}
        </h1>

        <p className="text-base leading-relaxed text-zinc-500">
          {meta.summary}
        </p>
      </section>

      {/* Impact */}
      {meta.impact?.length > 0 && (
        <section className="mx-auto max-w-2xl px-6 pb-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Impact
          </p>
          <ul className="flex flex-col gap-2 border-l-2 border-zinc-100 pl-5">
            {meta.impact.map((point) => (
              <li key={point} className="text-sm leading-relaxed text-zinc-600">
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tags */}
      {meta.tags?.length > 0 && (
        <section className="mx-auto max-w-2xl px-6 pb-12">
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-500"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Body */}
      <section className="mx-auto max-w-2xl px-6 pb-16 border-t border-zinc-100 pt-12">
        <article
          className="
            prose prose-zinc max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-zinc-900
            prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3
            prose-p:text-zinc-600 prose-p:leading-relaxed
            prose-strong:text-zinc-900 prose-strong:font-semibold
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-li:text-zinc-600
          "
        >
          <MDXRemote source={source} />
        </article>
      </section>

      {/* Artifacts */}
      {meta.artifacts?.length > 0 && (
        <section className="mx-auto max-w-2xl px-6 pb-10 border-t border-zinc-100 pt-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Artifacts
          </p>
          <div className="flex flex-wrap gap-3">
            {meta.artifacts.map((a) =>
              a.available ? (
                <a
                  key={a.label}
                  href={a.file}
                  download
                  className="inline-flex h-10 items-center gap-2 rounded-md border border-zinc-200 px-4 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
                >
                  <span>↓</span> {a.label}
                </a>
              ) : (
                <span
                  key={a.label}
                  title="Coming soon — artifact not yet uploaded"
                  className="inline-flex h-10 cursor-not-allowed items-center gap-2 rounded-md border border-zinc-100 px-4 text-sm font-medium text-zinc-300 select-none"
                >
                  <span>↓</span> {a.label}
                  <span className="text-xs">(coming soon)</span>
                </span>
              )
            )}
          </div>
        </section>
      )}

      {/* Footer nav */}
      <section className="mx-auto max-w-2xl px-6 pb-28 pt-10 border-t border-zinc-100">
        <div className="flex items-center justify-between">
          <Link
            href="/case-studies"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-700"
          >
            ← All work
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Get in touch
          </Link>
        </div>
      </section>

    </main>
  );
}
