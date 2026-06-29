export type Cta = {
  label: string;
  href: string;
};

export type Subcategory = {
  label: string;
  heading: string;
  body: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
};

export type Category = {
  label: string;
  headingTop: string;
  headingAccent: string;
  headingBottom: string;
  intro: string;
  icon?: string;
  subcategories: readonly Subcategory[];
};

export type TransportationTabsData = {
  primaryCta: Cta;
  secondaryCta: Cta;
  categories: readonly Category[];
};