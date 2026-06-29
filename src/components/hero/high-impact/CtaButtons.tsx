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
    <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
      <a
        href={primaryCta.href}
        data-cta="get-quote"
        className="inline-flex min-h-12 min-w-[150px] items-center justify-center rounded-full bg-[#b7b86b] px-7 py-3 text-xs font-bold uppercase tracking-[0.05em] text-white transition hover:bg-[#cbcc7a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cbcc7a]"
      >
        {primaryCta.label}
      </a>

      <a
        href={secondaryCta.href}
        data-cta="book-online"
        className="inline-flex min-h-12 min-w-[150px] items-center justify-center rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.05em] text-black transition hover:bg-[#eeeeee] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {secondaryCta.label}
      </a>
    </div>
  );
}