import type { Category } from "./types";

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
      className="mx-auto mb-10 flex max-w-fit flex-wrap items-center justify-center gap-3 rounded-none lg:mb-16 lg:rounded-full lg:border lg:border-[#3c3c3c] lg:bg-[#111] lg:px-6 lg:py-3"
    >
      {categories.map((category, index) => {
        const isActive = index === activeCategoryIndex;

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
              "group relative flex min-h-10 items-center gap-2 rounded-full border px-6 py-2 text-xs font-normal uppercase tracking-[0.12em] transition duration-200",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7b86b]",
              "lg:border-0 lg:px-3 lg:py-0",
              isActive
                ? "border-[#b7b86b] text-[#b7b86b]"
                : "border-[#3c3c3c] text-white hover:text-[#b7b86b]",
            ].join(" ")}
          >
            {category.icon && (
              <img
                src={category.icon}
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain"
              />
            )}

            <span>{category.label}</span>

            {isActive && (
              <span
                aria-hidden="true"
                className="absolute -bottom-3 left-1/2 hidden h-px w-20 -translate-x-1/2 bg-[#b7b86b] lg:block"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}