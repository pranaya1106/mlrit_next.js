import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IQACLayout from "@/components/iqac/IQACLayout";
import { iqacPages, iqacSubpageSlugs } from "@/data/iqac";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return iqacSubpageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = iqacPages[slug];
  if (!page) return { title: "IQAC — MLRIT" };
  return { title: page.metaTitle, description: page.metaDescription };
}

/**
 * `/iqac/[slug]` — dynamic IQAC subpages (about, aqar-reports,
 * minutes-of-meetings, best-practices). Each slug picks a curated
 * subset of the master section list defined in `src/data/iqac.ts`.
 */
export default async function IQACSubpage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = iqacPages[slug];
  if (!page) notFound();

  return <IQACLayout page={page} />;
}
