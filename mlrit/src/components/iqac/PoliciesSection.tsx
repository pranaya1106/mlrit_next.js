import type { DocListBlock } from "@/data/iqac-types";
import ReportsSection from "./ReportsSection";

/**
 * Thin semantic alias over `ReportsSection`. Kept as a separate component
 * so policy/strategic doc lists can grow their own styling without
 * affecting AQAR/AICTE report rendering.
 */
export default function PoliciesSection({ data }: { data: DocListBlock }) {
  return <ReportsSection data={data} />;
}
