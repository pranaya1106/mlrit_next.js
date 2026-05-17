import type { Metadata } from "next";
import IQACLayout from "@/components/iqac/IQACLayout";
import CTASection from "@/components/iqac/CTASection";
import { iqacOverview } from "@/data/iqac";

export const metadata: Metadata = {
  title: iqacOverview.metaTitle,
  description: iqacOverview.metaDescription,
};

/**
 * `/iqac` — the canonical IQAC landing page. Mirrors the original
 * `iqac.html`: full sidebar TOC, every section, plus an Accreditation
 * hub block injected at the bottom.
 */
export default function IQACOverviewPage() {
  return (
    <IQACLayout page={iqacOverview} trailing={<CTASection />} />
  );
}
