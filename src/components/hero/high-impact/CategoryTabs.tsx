import type { CSSProperties } from "react";
import type { Category } from "./types";
import { getMediaUrl } from "./media";

type CategoryTabsProps = {
  categories: readonly Category[];
  activeCategoryIndex: number;
  onCategoryClick: (index: number) => void;
};

export default function CategoryTabs({
  categories,
  activeCategoryIndex,
  onCategoryClick,
}: CategoryTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Transportation service categories"
      className="mx-auto mb-8 flex max-w-fit flex-wrap items-center justify-center gap-4 lg:mb-10 lg:rounded-full lg:border lg:border-neutral-700 lg:bg-neutral-950 lg:px-8 lg:py-2"
    >
      {categories.map((category, index) => {
        const isActive = index === activeCategoryIndex;
        const iconUrl = getMediaUrl(category.icon);

        return (
          <button
            key={category.label}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={`category-panel-${index}`}
            id={`category-tab-${index}`}
            onClick={() => onCategoryClick(index)}
            className={[
              "group relative flex min-h-10 cursor-pointer items-center gap-2 rounded-full border px-6 py-2 text-xs font-normal uppercase tracking-widest transition duration-200",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent",
              "lg:border-0 lg:px-3",
              isActive
                ? "border-brand-accent text-brand-accent"
                : "border-neutral-700 text-white hover:text-brand-accent",
            ].join(" ")}
          >
            {iconUrl && (
              <img
                src={iconUrl}
                alt=""
                aria-hidden="true"
                className={[
                  "h-5 w-5 shrink-0 object-contain transition duration-200",
                  isActive
                    ? "[filter:brightness(0)_saturate(100%)_invert(70%)_sepia(15%)_saturate(692%)_hue-rotate(22deg)_brightness(92%)_contrast(87%)]"
                    : "",
                ].join(" ")}
              />
            )}

            <span>{category.label}</span>

            {isActive && (
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-1/2 hidden h-px w-28 -translate-x-1/2 bg-[#b7b86b] lg:block"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}