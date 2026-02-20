import Link from "next/link";

export const metadata = {
  title: "Contact — Matthew Antolin",
  description: "Get in touch with Matthew Antolin, Product Director.",
};

const links = [
  {
    label: "Email",
    href: "mailto:matt@matthewantolin.com",
    display: "matt@matthewantolin.com",
    external: false,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/matthewantolin",
    display: "linkedin.com/in/matthewantolin",
    external: true,
  },
  {
    label: "Book a call",
    href: "https://calendly.com/mattantolin/product-leadership-15-min",
    display: "calendly.com/mattantolin/product-leadership-15-min",
    external: true,
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-white font-sans text-zinc-900">
      <section className="mx-auto max-w-2xl px-6 pt-24 pb-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-mustard">
          Contact
        </p>
        <h1 className="mb-4 text-3xl font-semibold leading-snug tracking-tight text-zinc-900 sm:text-4xl">
          Let&rsquo;s talk.
        </h1>
        <p className="mb-12 max-w-md text-base leading-relaxed text-zinc-500">
          Open to VP Product and Director Product conversations in regulated
          enterprise SaaS — health IT, pharma digital enablement, and adjacent.
          Canada/US remote; willing to relocate for the right fit.
        </p>

        <div className="flex flex-col gap-px border border-zinc-100 rounded-lg overflow-hidden">
          {links.map(({ label, href, display, external }) => (
            <a
              key={label}
              href={href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-center justify-between bg-white px-6 py-5 border-b border-zinc-100 last:border-b-0 transition-colors hover:bg-zinc-50"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                  {label}
                </p>
                <p className="text-sm font-medium text-zinc-900 group-hover:text-mustard transition-colors">
                  {display}
                </p>
              </div>
              <span className="text-zinc-300 group-hover:text-mustard/70 transition-colors">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            ← Back
          </Link>
        </div>
      </section>
    </main>
  );
}
