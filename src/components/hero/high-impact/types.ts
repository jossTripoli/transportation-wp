export type Cta = {
  label: string;
  href: string;
  target?: string | null;
};

export type MediaImage = {
  node?: {
    sourceUrl?: string | null;
    altText?: string | null;
  } | null;
};

export type Subcategory = {
  label: string;
  heading: string;
  body: string;
  icon?: MediaImage | null;
  image?: MediaImage | null;
};

export type Category = {
  label: string;
  headingTop: string;
  headingAccent: string;
  headingBottom: string;
  intro: string;
  icon?: MediaImage | null;
  subcategories: readonly Subcategory[];
};

export type TransportationTabsData = {
  primaryCta: Cta;
  secondaryCta: Cta;
  categories: readonly Category[];
};