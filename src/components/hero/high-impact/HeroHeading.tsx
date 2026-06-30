import type { Category } from "./types";

type HeroHeadingProps = {
  category: Category;
};

export default function HeroHeading({ category }: HeroHeadingProps) {
  return (
    <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
      <h1
        id="transportation-heading"
        className="font-serif text-5xl font-normal uppercase leading-none tracking-normal text-white sm:text-6xl lg:text-7xl"
      >
        <span className="block">{category.headingTop}</span>

        <span className="mb-1 -mt-1 block font-serif text-4xl font-normal italic normal-case leading-normal tracking-normal text-brand-accent sm:text-5xl">
          {category.headingAccent}
        </span>

        <span className="block">{category.headingBottom}</span>
      </h1>

      <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#d9d9d9] lg:mx-0">
        {category.intro}
      </p>
    </div>
  );
}