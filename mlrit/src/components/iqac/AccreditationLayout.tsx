import IQACLayout from "./IQACLayout";
import type { IQACPage } from "@/data/iqac-types";

/**
 * Thin semantic alias over `IQACLayout`. The accreditation pages
 * (NAAC / NBA / NIRF) share the exact same chrome — sidebar, banner,
 * sections — so we reuse the IQAC layout rather than duplicate it.
 *
 * Kept as a separate component so accreditation-specific chrome
 * (e.g. cycle status badges, accreditor logo strip) can be added later
 * without touching the IQAC pages.
 */
export default function AccreditationLayout({ page }: { page: IQACPage }) {
  return <IQACLayout page={page} />;
}
