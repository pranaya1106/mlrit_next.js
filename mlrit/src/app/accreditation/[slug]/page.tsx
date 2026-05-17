import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AccreditationLayout from "@/components/iqac/AccreditationLayout";
import { accreditationPages, accreditationSlugs } from "@/data/accreditation";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return accreditationSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = accreditationPages[slug];
  if (!page) return { title: "Accreditation — MLRIT" };
  return { title: page.metaTitle, description: page.metaDescription };
}

/**
 * `/accreditation/[slug]` — dynamic accreditation pages (naac, nba, nirf).
 * Reuses the IQAC layout chrome and renders accreditation data sourced
 * from `src/data/accreditation.ts`.
 */
export default async function AccreditationSubpage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = accreditationPages[slug];
  if (!page) notFound();

  return <AccreditationLayout page={page} />;
}
