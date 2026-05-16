import SectionShell from "./SectionShell";
import {
  infrastructureHighlights,
  infrastructureStats,
} from "@/app/placements/_data";

export default function PlacementHighlightsSection() {
  return (
    <SectionShell id="pl-infra" className="pl-infra" innerClassName="pl-infra__inner">
      <div className="pl-infra__text">
        <span className="pl-label pl-label--light pl-fade">Facilities</span>
        <h2 className="pl-heading pl-heading--light pl-fade">
          Placement Infrastructure
        </h2>
        <p className="pl-infra__sub">
          MLRIT maintains a dedicated placement block equipped to host
          large-scale campus recruitment drives throughout the year.
        </p>
        <ul className="pl-infra__list">
          {infrastructureHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="pl-infra__stats">
        {infrastructureStats.map((s) => (
          <div key={s.label} className="pl-infra__stat pl-fade">
            <span className="pl-infra__stat-num">{s.value}</span>
            <span className="pl-infra__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
