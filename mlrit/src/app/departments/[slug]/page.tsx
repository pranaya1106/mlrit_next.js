import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import DepartmentDetail from "@/components/departments/DepartmentDetail";
import { departmentsContent } from "@/data/departments-content";
import { deptListingCards } from "@/data/departments-listing";
import { pgMTechCards, pgMbaCards } from "@/data/departments-pg-listing";

type RouteParams = { slug: string };

export function generateStaticParams(): RouteParams[] {
  return Object.keys(departmentsContent).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ug = deptListingCards.find((d) => d.slug === slug);
  const pg = [...pgMTechCards, ...pgMbaCards].find((d) => d.slug === slug);
  const card = ug ?? pg;
  if (!card) return { title: "Department — MLRIT" };
  return {
    title: `${card.name} — MLRIT`,
    description: card.description,
  };
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const dept = departmentsContent[slug];
  if (!dept) notFound();

  return (
    <>
      <Navbar />
      <DepartmentDetail dept={dept} />
    </>
  );
}
