import { useState } from "react";
import type { TransportationTabsData } from "./types";
import CategoryTabs from "./CategoryTabs";
import HeroHeading from "./HeroHeading";
import DesktopSubcategoryTabs from "./DesktopSubcategoryTabs";
import DesktopContentPanel from "./DesktopContentPanel";
import MobileAccordion from "./MobileAccordion";

type TransportationSectionProps = {
  data: TransportationTabsData;
};

export default function TransportationSection({
  data,
}: TransportationSectionProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeSubcategoryIndex, setActiveSubcategoryIndex] = useState(0);

  const activeCategory = data.categories[activeCategoryIndex];
  const activeSubcategory =
    activeCategory.subcategories[activeSubcategoryIndex];

  function handleCategoryClick(index: number) {
    setActiveCategoryIndex(index);
    setActiveSubcategoryIndex(0);
  }

  function handleSubcategoryClick(index: number) {
    setActiveSubcategoryIndex(index);
  }

  return (
    <section
      aria-labelledby="transportation-heading"
      className="bg-black px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-[1512px]">
        {/* Desktop category tabs */}
        <div className="hidden lg:block">
          <CategoryTabs
            categories={data.categories}
            activeCategoryIndex={activeCategoryIndex}
            onCategoryClick={handleCategoryClick}
          />
        </div>

        <div
          id={`category-panel-${activeCategoryIndex}`}
          role="tabpanel"
          aria-labelledby={`category-tab-${activeCategoryIndex}`}
        >
          {/* Main responsive layout */}
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16 xl:gap-20">
            {/* Left / hero column */}
            <div>
              <HeroHeading category={activeCategory} />

              {/* Mobile category tabs */}
              <div className="mt-8 lg:hidden">
                <CategoryTabs
                  categories={data.categories}
                  activeCategoryIndex={activeCategoryIndex}
                  onCategoryClick={handleCategoryClick}
                />
              </div>

              {/* Desktop subcategory tabs */}
              <DesktopSubcategoryTabs
                subcategories={activeCategory.subcategories}
                activeSubcategoryIndex={activeSubcategoryIndex}
                onSubcategoryClick={handleSubcategoryClick}
              />
            </div>

            {/* Desktop right-side content */}
            <DesktopContentPanel
              subcategory={activeSubcategory}
              primaryCta={data.primaryCta}
              secondaryCta={data.secondaryCta}
            />
          </div>

          {/* Mobile accordion content */}
          <MobileAccordion
            categoryIndex={activeCategoryIndex}
            subcategories={activeCategory.subcategories}
            activeSubcategoryIndex={activeSubcategoryIndex}
            onSubcategoryClick={handleSubcategoryClick}
            primaryCta={data.primaryCta}
            secondaryCta={data.secondaryCta}
          />
        </div>
      </div>
    </section>
  );
}