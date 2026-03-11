import UnlockForm from "./UnlockForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unlock Case Studies - Matthew Antolin",
};

type Props = { searchParams: Promise<{ redirect?: string }> };

export default async function UnlockPage({ searchParams }: Props) {
  const { redirect: redirectTo } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-white font-sans">
      <div className="w-full max-w-sm px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-amber">
          Case Studies
        </p>
        <h1 className="mb-2 text-2xl font-semibold tracking-tight text-zinc-900">
          Password protected
        </h1>
        <p className="mb-8 text-sm leading-relaxed text-zinc-500">
          These case studies contain confidential project details. Enter the
          password to continue.
        </p>
        <UnlockForm redirectTo={redirectTo ?? "/case-studies"} />
      </div>
    </main>
  );
}
