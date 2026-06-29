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
      className="min-h-screen bg-black px-4 py-10 text-white sm:px-6 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">
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
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div>
              <HeroHeading category={activeCategory} />

              <div className="mt-8 lg:hidden">
                <CategoryTabs
                  categories={data.categories}
                  activeCategoryIndex={activeCategoryIndex}
                  onCategoryClick={handleCategoryClick}
                />
              </div>

              <DesktopSubcategoryTabs
                subcategories={activeCategory.subcategories}
                activeSubcategoryIndex={activeSubcategoryIndex}
                onSubcategoryClick={handleSubcategoryClick}
              />
            </div>

            <DesktopContentPanel
              subcategory={activeSubcategory}
              primaryCta={data.primaryCta}
              secondaryCta={data.secondaryCta}
            />
          </div>

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