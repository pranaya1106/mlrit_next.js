import SectionShell from "./SectionShell";
import PlacementCard from "./PlacementCard";
import YearHistory from "./YearHistory";
import {
  performanceStats,
  yearwiseStats,
  yearwiseDetails,
} from "@/app/placements/_data";

export default function PlacementStatsSection() {
  const [latest, ...older] = yearwiseStats;

  return (
    <SectionShell id="pl-performance" className="pl-performance">
      <span className="pl-label pl-fade">By the Numbers</span>
      <h2 className="pl-heading pl-fade">Placement Performance</h2>

      <div className="pl-statgrid__grid">
        {performanceStats.map((s) => (
          <PlacementCard key={s.label} {...s} />
        ))}
      </div>

      <div className="pl-perf-history">
        <span className="pl-perf-history__label">Track Record</span>
        <YearHistory latest={latest} older={older} details={yearwiseDetails} />
      </div>
    </SectionShell>
  );
}
