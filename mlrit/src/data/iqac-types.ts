/**
 * Type definitions for the data-driven IQAC + Accreditation pages.
 *
 * Every IQAC / Accreditation page is an `IQACPage`. A page is composed of
 * an ordered list of `IQACSection`s, each holding a list of `Block`s.
 * `IQACPageView` walks the structure and renders the correct primitive
 * for each block kind.
 */

export type DocItem = {
  label: string;
  href: string;
  yearTag?: string;
  external?: boolean;
};

export type TableCell =
  | string
  | { kind: "link"; label: string; href: string; external?: boolean };

/* ───────────────── Block primitives ───────────────── */

export type ProseBlock = {
  kind: "prose";
  /** Each string is one paragraph. May contain inline tags: <strong>, <em>, <a href="…">…</a>, <br/>. */
  paragraphs: string[];
};

export type H3Block = {
  kind: "h3";
  text: string;
};

export type UListBlock = {
  kind: "ul";
  items: { strong?: string; text: string }[];
};

export type OListBlock = {
  kind: "ol";
  items: { strong?: string; text: string }[];
};

export type TableBlock = {
  kind: "table";
  columns: string[];
  rows: TableCell[][];
};

export type DocListBlock = {
  kind: "doc-list";
  items: DocItem[];
};

export type NoteBlock = {
  kind: "note";
  text: string;
};

export type CoordinatorBlock = {
  kind: "coordinator";
  photo: { src: string; alt: string };
  name: string;
  /** May contain <br/> for line breaks. */
  designation: string;
  /** Each string is one bio paragraph. May contain inline tags. */
  bio: string[];
};

export type Block =
  | ProseBlock
  | H3Block
  | UListBlock
  | OListBlock
  | TableBlock
  | DocListBlock
  | NoteBlock
  | CoordinatorBlock;

/* ───────────────── Page primitives ───────────────── */

export type IQACSection = {
  /** Anchor id used by the sidebar (e.g. "about", "aqar"). */
  id: string;
  /** Label shown in the sidebar TOC. */
  label: string;
  /** Heading shown above the section body. Defaults to `label`. */
  heading?: string;
  blocks: Block[];
};

export type IQACBanner = {
  eyebrow: string;
  title: string;
  /** Large faded background watermark text (e.g. "IQAC", "NBA"). */
  watermark: string;
};

export type IQACPage = {
  slug: string;
  /** Sidebar group title (e.g. "IQAC", "NBA"). */
  sideTitle: string;
  metaTitle: string;
  metaDescription: string;
  banner: IQACBanner;
  sections: IQACSection[];
};
