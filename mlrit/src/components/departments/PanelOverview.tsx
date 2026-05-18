import type { OverviewContent } from "@/data/departments-types";
import HodPhoto from "./HodPhoto";
import SubAccordion from "./SubAccordion";

type Props = {
  content: OverviewContent;
  active: boolean;
};

export default function PanelOverview({ content, active }: Props) {
  const { hod, visionMission, teachingMethod, history, labs, labsHeading } =
    content;

  return (
    <div
      className={`dept-panel${active ? " is-active" : ""}`}
      id="panel-overview"
      role="tabpanel"
      aria-labelledby="tab-overview"
    >
      <h2 id="about-dept" className="panel-heading">
        Introduction
      </h2>

      <div id="hod-msg" className="hod-msg">
        <div className="hod-msg__photo">
          <HodPhoto src={hod.photo} name={hod.name} />
        </div>
        <div className="hod-msg__content">
          <div className="hod-msg__label">From the HOD&apos;s Desk</div>
          <p className="hod-msg__text">&ldquo;{hod.quote}&rdquo;</p>
          <div className="hod-msg__name">
            — {hod.name}
            {hod.role ? `, ${hod.role}` : ", HOD"}
          </div>
        </div>
      </div>

      <div className="panel-sub" id="vm-section">
        Vision and Mission
      </div>
      <div className="two-col">
        <div className="dept-card-base dept-card-accent">
          <h3>Vision</h3>
          <p>{visionMission.vision}</p>
        </div>
        <div className="dept-card-base dept-card-accent">
          <h3>Mission</h3>
          <p>{visionMission.mission}</p>
        </div>
      </div>
      {visionMission.docHref && (
        <div className="doc-link-row">
          <a href={visionMission.docHref} download className="doc-link">
            ↓ {visionMission.docLabel ?? "Vision Mission Process Document"}
          </a>
        </div>
      )}

      <div className="panel-sub" id="teaching-method">
        Innovative Teaching Methodology
      </div>
      <p>{teachingMethod}</p>

      <div style={{ marginTop: 32 }}>
        <SubAccordion id="history-section" title="History of the Department">
          <p>{history}</p>
        </SubAccordion>
        <SubAccordion
          id="labs-section"
          title={labsHeading ?? `Academic Laboratories (${labs.length} Labs)`}
        >
          <div className="lab-grid">
            {labs.map((lab) => (
              <div key={lab.name} className="lab-card">
                <div className="lab-card__name">{lab.name}</div>
                <div className="lab-card__desc">{lab.desc}</div>
              </div>
            ))}
          </div>
        </SubAccordion>
      </div>
    </div>
  );
}
