import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ResearchHero from "./ResearchHero";
import type { ResearchHeroData } from "@/data/research-types";

type Props = {
  hero: ResearchHeroData;
  /** Hide the breadcrumb link to /research/overview (used by the overview page itself). */
  isOverview?: boolean;
  children: React.ReactNode;
};

/** Shared chrome for every research page: Navbar → Hero → content → Footer. */
export default function ResearchLayout({ hero, isOverview, children }: Props) {
  return (
    <>
      <Navbar />
      <main className="research-page">
        <ResearchHero data={hero} showResearchCrumb={!isOverview} />
        {children}
      </main>
      <Footer />
    </>
  );
}
