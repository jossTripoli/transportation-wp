import type { Cta, Subcategory } from "./types";
import CtaButtons from "./CtaButtons";
import { getMediaAlt, getMediaUrl } from "./media";

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
  const imageUrl = getMediaUrl(subcategory.image);
  const imageAlt = getMediaAlt(subcategory.image);

  return (
    <article className="hidden lg:block">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-80 w-full object-cover xl:h-96"
        />
      )}

      <div className="mt-8 max-w-2xl">
        <h2 className="text-4xl font-light leading-tight tracking-tight text-white xl:text-5xl">
          {subcategory.heading}
        </h2>

        <p className="mt-4 text-sm leading-6 text-[#d0d0d0]">
          {subcategory.body}
        </p>

        <CtaButtons primaryCta={primaryCta} secondaryCta={secondaryCta} />
      </div>
    </article>
  );
}