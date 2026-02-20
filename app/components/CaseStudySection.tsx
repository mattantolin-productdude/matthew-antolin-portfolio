import Link from "next/link";

interface CaseStudySectionProps {
  slug: string;
  year: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  invertLayout?: boolean;
  background?: "white" | "tertiary";
  compact?: boolean;
}

export default function CaseStudySection({
  slug,
  year,
  logoSrc,
  logoAlt,
  title,
  description,
  imageSrc,
  imageAlt,
  invertLayout = false,
  background = "white",
  compact = false,
}: CaseStudySectionProps) {
  const py = compact ? "py-14 sm:py-16" : "py-20 sm:py-24";
  const bg = background === "tertiary" ? "bg-tertiary" : "bg-white";

  return (
    <section className={bg}>
      <div className={`mx-auto max-w-5xl px-6 ${py}`}>
        <div
          className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
            invertLayout ? "lg:flex-row-reverse" : "lg:flex-row"
          }`}
        >
          {/* Image */}
          <div className="w-full overflow-hidden rounded-xl lg:w-[55%]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-[3/2] w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-start lg:w-[45%]">
            {/* Logo + year */}
            <div className="mb-5 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} alt={logoAlt} className="h-5 w-auto" />
              <span className="text-sm text-secondary">{year}</span>
            </div>

            <h2 className="mb-4 text-2xl font-semibold leading-snug tracking-tight text-primary">
              {title}
            </h2>

            <p className="mb-8 leading-relaxed text-secondary">{description}</p>

            <Link
              href={`/case-studies/${slug}`}
              className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-white transition-colors hover:opacity-80"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
