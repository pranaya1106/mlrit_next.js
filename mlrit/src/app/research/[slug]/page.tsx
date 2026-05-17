import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResearchLayout from "@/components/research/ResearchLayout";
import ResearchPageView from "@/components/research/ResearchPageView";
import { researchPages } from "@/data/research";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return Object.keys(researchPages)
    .filter((slug) => slug !== "overview")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = researchPages[slug];
  if (!page) return { title: "Research — MLRIT" };
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function ResearchSubpage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = researchPages[slug];
  if (!page || slug === "overview") notFound();

  return (
    <ResearchLayout hero={page.hero}>
      <ResearchPageView page={page} />
    </ResearchLayout>
  );
}
