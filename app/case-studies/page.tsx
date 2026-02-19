import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight mb-10">
        Case Studies
      </h1>
      <ul className="space-y-12">
        {studies.map((s) => (
          <li key={s.slug}>
            <Link href={`/case-studies/${s.slug}`} className="group block">
              <p className="text-xs text-zinc-400 mb-1">
                {s.company} · {s.role} · {s.date}
              </p>
              <h2 className="text-lg font-medium group-hover:underline underline-offset-4">
                {s.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {s.summary}
              </p>
              {s.impact?.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {s.impact.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-zinc-700 dark:text-zinc-300 before:content-['→_']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
