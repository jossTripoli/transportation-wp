import type { Cta, Subcategory } from "./types";
import CtaButtons from "./CtaButtons";
import { getMediaAlt, getMediaUrl } from "./media";

type MobileAccordionProps = {
  categoryIndex: number;
  subcategories: readonly Subcategory[];
  activeSubcategoryIndex: number;
  onSubcategoryClick: (index: number) => void;
  primaryCta: Cta;
  secondaryCta: Cta;
};

export default function MobileAccordion({
  categoryIndex,
  subcategories,
  activeSubcategoryIndex,
  onSubcategoryClick,
  primaryCta,
  secondaryCta,
}: MobileAccordionProps) {
  return (
    <div className="mt-10 lg:hidden">
      {subcategories.map((subcategory, index) => {
        const isOpen = index === activeSubcategoryIndex;
        const panelId = `mobile-accordion-panel-${categoryIndex}-${index}`;
        const buttonId = `mobile-accordion-button-${categoryIndex}-${index}`;
        const iconUrl = getMediaUrl(subcategory.icon);
        const imageUrl = getMediaUrl(subcategory.image);
        const imageAlt = getMediaAlt(subcategory.image);

        return (
          <div
            key={subcategory.label}
            className={[
              "border-b border-neutral-800",
              isOpen ? "bg-neutral-900" : "bg-black",
            ].join(" ")}
          >
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => onSubcategoryClick(index)}
                className={[
                  "flex w-full items-start gap-5 px-4 py-6 text-left transition",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#b7b86b]",
                  isOpen ? "text-[#b7b86b]" : "text-white",
                ].join(" ")}
              >
                {iconUrl && (
                  <img
                    src={iconUrl}
                    alt=""
                    aria-hidden="true"
                    className="mt-1 h-7 w-7 shrink-0 object-contain"
                  />
                )}

                <span className="text-xs font-bold uppercase leading-6 tracking-widest">
                  {subcategory.label}
                </span>
              </button>
            </h2>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-4 pb-7"
            >
              <div className="pt-2">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="mb-7 aspect-video w-full object-cover"
                  />
                )}

                <h3 className="text-2xl font-light leading-tight tracking-tight text-white">
                  {subcategory.heading}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#d0d0d0]">
                  {subcategory.body}
                </p>

                <CtaButtons
                  primaryCta={primaryCta}
                  secondaryCta={secondaryCta}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}