import type { Metadata } from "next";
import ResearchLayout from "@/components/research/ResearchLayout";
import ResearchPageView from "@/components/research/ResearchPageView";
import { researchPages } from "@/data/research";

const page = researchPages["overview"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ResearchOverviewPage() {
  return (
    <ResearchLayout hero={page.hero} isOverview>
      <ResearchPageView page={page} />
    </ResearchLayout>
  );
}
