import type { Cta, Subcategory } from "./types";
import CtaButtons from "./CtaButtons";

type DesktopContentPanelProps = {
  subcategory: Subcategory;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export default function DesktopContentPanel({
  subcategory,
  primaryCta,
  secondaryCta,
}: DesktopContentPanelProps) {
  return (
    <article className="hidden lg:block">
      {subcategory.image && (
        <img
          src={subcategory.image}
          alt={subcategory.imageAlt || ""}
          className="aspect-[1.45/1] w-full object-cover"
        />
      )}

      <div className="mt-10 max-w-[650px]">
        <h2 className="text-[3rem] font-light leading-[0.98] tracking-[-0.04em] text-white xl:text-[3.55rem]">
          {subcategory.heading}
        </h2>

        <p className="mt-5 text-[0.95rem] leading-6 text-[#d0d0d0]">
          {subcategory.body}
        </p>

        <CtaButtons primaryCta={primaryCta} secondaryCta={secondaryCta} />
      </div>
    </article>
  );
}