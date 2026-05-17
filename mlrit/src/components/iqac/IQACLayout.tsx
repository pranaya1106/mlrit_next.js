import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHero from "./SectionHero";
import IQACSidebar from "./IQACSidebar";
import IQACPageView from "./IQACPageView";
import type { IQACPage } from "@/data/iqac-types";

type Props = {
  page: IQACPage;
  /**
   * Slot rendered inside `.iq-main` AFTER the data-driven sections.
   * Used by the `/iqac` landing page to inject the Accreditation hub
   * grid without duplicating the surrounding chrome.
   */
  trailing?: React.ReactNode;
};

/**
 * Shared chrome for every IQAC / Accreditation page:
 *   Navbar → banner → sidebar + main content → Footer.
 *
 * The sidebar is a client component (it tracks the active section via
 * IntersectionObserver); everything else here is server-rendered.
 */
export default function IQACLayout({ page, trailing }: Props) {
  return (
    <>
      <Navbar />
      <SectionHero banner={page.banner} />
      <main>
        <div className="iq-page">
          <IQACSidebar title={page.sideTitle} sections={page.sections} />
          <div className="iq-main">
            <IQACPageView page={page} />
            {trailing}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
