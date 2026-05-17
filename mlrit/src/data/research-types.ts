/**
 * Type definitions for the data-driven Research section.
 *
 * Every research subpage is a `ResearchPage`. A page is an ordered
 * list of `Section`s, and each section holds a list of `Block`s.
 * `ResearchPageView` walks the structure and renders the correct
 * component for each block kind.
 */

export type SectionVariant = "default" | "surface" | "ink";

export type HeroMetaItem = {
  label: string;
  value: string;
};

export type ResearchHeroData = {
  crumbLabel: string;
  title: string;
  /** Optional italic, gold-toned subtitle rendered as a second line. */
  titleEm?: string;
  lede: string;
  meta?: HeroMetaItem[];
};

/* ───────────────── Block primitives ───────────────── */

export type ProseBlock = {
  kind: "prose";
  paragraphs: string[];
};

export type LedeBlock = {
  kind: "lede";
  text: string;
};

export type H3Block = {
  kind: "h3";
  text: string;
};

export type PullQuoteBlock = {
  kind: "pull-quote";
  text: string;
  cite?: string;
};

export type SplitFigureBlock = {
  kind: "split-figure";
  paragraphs: string[];
  pullQuote?: { text: string; cite?: string };
  image: { src: string; alt: string; caption?: string; width?: number; height?: number };
};

export type StatStripBlock = {
  kind: "stat-strip";
  items: { num: string; label: string }[];
};

export type TableCell =
  | string
  | { kind: "download"; label: string; href: string };

export type TableBlock = {
  kind: "table";
  columns: string[];
  rows: TableCell[][];
};

export type DefListBlock = {
  kind: "def-list";
  items: { term: string; description: string }[];
  onInk?: boolean;
};

export type CheckListItem = {
  /** Optional bold lead-in shown before the dash. */
  strong?: string;
  /** Inline HTML/text after the lead-in. */
  text: string;
};

export type CheckListBlock = {
  kind: "check-list";
  items: CheckListItem[];
};

export type HubListBlock = {
  kind: "hub-list";
  tiles: {
    num: string;
    title: string;
    body: string;
    cta: string;
    href: string;
  }[];
};

export type CentreBlock = {
  kind: "centre-block";
  num: string;
  title: string;
  paragraphs: string[];
  chips: string[];
  visual: string;
  flip?: boolean;
};

export type ServiceGridBlock = {
  kind: "service-grid";
  cells: { title: string; body: string }[];
};

export type ProcessBlock = {
  kind: "process";
  steps: { title: string; body: string }[];
};

export type DlCardsBlock = {
  kind: "dl-cards";
  cards: { kicker: string; title: string; meta: string; href: string }[];
};

export type CalloutBlock = {
  kind: "callout";
  kicker: string;
  title: string;
  body?: string;
  cta: { label: string; href: string };
};

export type InkCtaBlock = {
  kind: "ink-cta";
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
};

export type PublicationYear = {
  year: string;
  meta: string;
  table?: {
    columns: string[];
    rows: { dept: string; indexing: string; count: string; href: string }[];
  };
  download?: { label: string; href: string };
};

export type PublicationsBlock = {
  kind: "publications";
  years: PublicationYear[];
};

export type FacultyTabsBlock = {
  kind: "faculty-tabs";
  tabs: {
    id: string;
    label: string;
    rows: { faculty: string; designation: string; areas: string }[];
  }[];
};

export type Block =
  | ProseBlock
  | LedeBlock
  | H3Block
  | PullQuoteBlock
  | SplitFigureBlock
  | StatStripBlock
  | TableBlock
  | DefListBlock
  | CheckListBlock
  | HubListBlock
  | CentreBlock
  | ServiceGridBlock
  | ProcessBlock
  | DlCardsBlock
  | CalloutBlock
  | InkCtaBlock
  | PublicationsBlock
  | FacultyTabsBlock;

export type Section = {
  id?: string;
  variant?: SectionVariant;
  tight?: boolean;
  eyebrow?: string;
  heading?: string;
  rule?: boolean;
  lede?: string;
  /** Max-width override applied to the inner wrap. */
  wrapMaxWidth?: string;
  blocks: Block[];
};

export type ResearchPage = {
  slug: string;
  label: string;
  metaTitle: string;
  metaDescription: string;
  hero: ResearchHeroData;
  sections: Section[];
};
