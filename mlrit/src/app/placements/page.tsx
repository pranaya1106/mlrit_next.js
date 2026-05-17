import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PlacementHeroSection from "@/components/placements/PlacementHeroSection";
import PlacementSidebar from "@/components/placements/PlacementSidebar";
import PlacementStatsSection from "@/components/placements/PlacementStatsSection";
import RecruitersSection from "@/components/placements/RecruitersSection";
import PlacementHighlightsSection from "@/components/placements/PlacementHighlightsSection";
import MoUSection from "@/components/placements/MoUSection";
import PlacementDrivesSection from "@/components/placements/PlacementDrivesSection";
import CTASection from "@/components/placements/CTASection";
import PlacementSectionRevealer from "@/components/placements/PlacementSectionRevealer";
import { heroStats, sidebarLinks } from "./_data";

export const metadata: Metadata = {
  title: "Placements — MLRIT",
  description:
    "From campus to corporate — MLRIT's placement record reflects the quality of education and industry readiness we build in every student. 80%+ placements every year, 33 LPA highest package, 7000+ alumni placed.",
};

export default function PlacementsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PlacementHeroSection
          eyebrow="Placements at MLRIT"
          headline={
            <>
              Engineering careers
              <br />
              are built here.
            </>
          }
          statement="80% and above placements every year — engineers from MLRIT land roles at the world's most respected organisations."
          stats={heroStats}
          videoSrc="/placements/place vid.mp4"
        />

        <div className="pl-layout">
          <PlacementSidebar links={sidebarLinks} />
          <div className="pl-page-content">
            <PlacementStatsSection />
            <RecruitersSection />
            <PlacementHighlightsSection />
            <MoUSection />
            <PlacementDrivesSection />
            <CTASection />
          </div>
        </div>

        <PlacementSectionRevealer />
      </main>
    </>
  );
}
