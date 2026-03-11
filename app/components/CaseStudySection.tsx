import Link from "next/link";

interface CaseStudySectionProps {
  slug: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  invertLayout?: boolean;
  divider?: boolean;
  compact?: boolean;
}

export default function CaseStudySection({
  slug,
  logoSrc,
  logoAlt,
  title,
  description,
  imageSrc,
  imageAlt,
  invertLayout = false,
  divider = false,
  compact = false,
}: CaseStudySectionProps) {
  const py = compact ? "py-14 sm:py-16" : "py-20 sm:py-24";

  return (
    <section className="bg-white">
      {divider && <div className="mx-auto max-w-5xl px-6"><hr className="border-zinc-200" /></div>}
      <div className={`mx-auto max-w-5xl px-6 ${py}`}>
        <div
          className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
            invertLayout ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Image */}
          {imageSrc && (
            <div className="w-full flex items-center justify-center lg:w-[55%]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageSrc}
                alt={imageAlt ?? ""}
                className="w-full max-w-sm lg:max-w-none object-contain"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col items-start lg:w-[45%]">
            {/* Logo */}
            <div className="mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} alt={logoAlt} className="h-5 w-auto" />
            </div>

            <h2 className="mb-4 text-2xl font-semibold leading-snug tracking-tight text-primary">
              {title}
            </h2>

            <p className="mb-8 leading-relaxed text-secondary">{description}</p>

            <Link
              href={`/case-studies/${slug}`}
              className="inline-flex h-10 items-center rounded-md bg-amber px-5 text-sm font-medium text-white transition-colors hover:opacity-80"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
