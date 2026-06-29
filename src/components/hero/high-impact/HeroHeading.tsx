import type { Category } from "./types";

type HeroHeadingProps = {
  category: Category;
};

export default function HeroHeading({ category }: HeroHeadingProps) {
  return (
    <div className="mx-auto max-w-[560px] text-center lg:mx-0 lg:text-left">
      <h1
        id="transportation-heading"
        className="font-serif text-[2.65rem] font-normal uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.25rem]"
      >
        <span className="block">{category.headingTop}</span>
        <span className="block font-serif text-[0.82em] italic normal-case leading-[0.92] tracking-[-0.08em] text-[#b7b86b]">
          {category.headingAccent}
        </span>
        <span className="block">{category.headingBottom}</span>
      </h1>

      <p className="mx-auto mt-5 max-w-[520px] text-sm leading-6 text-[#d9d9d9] lg:mx-0 lg:text-[0.92rem]">
        {category.intro}
      </p>
    </div>
  );
}