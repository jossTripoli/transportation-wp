import type { Subcategory } from "./types";

type DesktopSubcategoryTabsProps = {
  subcategories: readonly Subcategory[];
  activeSubcategoryIndex: number;
  onSubcategoryClick: (index: number) => void;
};

export default function DesktopSubcategoryTabs({
  subcategories,
  activeSubcategoryIndex,
  onSubcategoryClick,
}: DesktopSubcategoryTabsProps) {
  return (
    <div className="mt-10 hidden max-w-[430px] lg:block">
      {subcategories.map((subcategory, index) => {
        const isActive = index === activeSubcategoryIndex;

        return (
          <button
            key={subcategory.label}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSubcategoryClick(index)}
            className={[
              "flex min-h-[72px] w-full items-center gap-5 border-b border-[#262626] px-5 text-left transition duration-200",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#b7b86b]",
              isActive
                ? "bg-[#121212] text-[#b7b86b]"
                : "bg-transparent text-white hover:bg-[#121212] hover:text-[#b7b86b]",
            ].join(" ")}
          >
            {subcategory.icon && (
              <img
                src={subcategory.icon}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 shrink-0 object-contain"
              />
            )}

            <span className="text-[0.83rem] font-bold uppercase leading-snug tracking-[0.12em]">
              {subcategory.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}