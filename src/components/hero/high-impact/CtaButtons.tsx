import type { Cta } from "./types";

type CtaButtonsProps = {
  primaryCta: Cta;
  secondaryCta: Cta;
};

export default function CtaButtons({
  primaryCta,
  secondaryCta,
}: CtaButtonsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
      <a
        href={primaryCta.href}
        data-cta="get-quote"
        className="inline-flex min-h-12 min-w-36 items-center justify-center rounded-full bg-[#b7b86b] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#cbcc7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cbcc7a]"
      >
        {primaryCta.label}
      </a>

      <a
        href={secondaryCta.href}
        data-cta="book-online"
        className="inline-flex min-h-12 min-w-36 items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-wide text-black transition hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {secondaryCta.label}
      </a>
    </div>
  );
}