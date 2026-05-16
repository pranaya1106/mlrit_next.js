import Link from "next/link";
import type { ObjectivesContent } from "@/data/departments-types";

type Props = {
  content: ObjectivesContent;
  active: boolean;
};

export default function PanelObjectives({ content, active }: Props) {
  const {
    peos,
    obeBTech,
    obeMTech,
    obePortalHref,
    handbookTitle,
    handbookSub,
  } = content;

  return (
    <div
      className={`dept-panel${active ? " is-active" : ""}`}
      id="panel-objectives"
      role="tabpanel"
      aria-labelledby="tab-objectives"
    >
      <h2 className="panel-heading" id="peo-section">
        Programme Educational Objectives
      </h2>
      <div className="three-col">
        {peos.map((peo) => (
          <div
            key={peo.num}
            className="dept-card-base dept-card-accent"
            style={{ textAlign: "center" }}
          >
            <div className="peo-num">{peo.num}</div>
            <p>{peo.text}</p>
          </div>
        ))}
      </div>

      <div className="panel-sub" id="obe-section">
        Outcome Based Education (OBE)
      </div>
      <div className="obe-grid">
        <div className="obe-col">
          <h4>B.Tech</h4>
          <ul className="obe-list">
            {obeBTech.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {obeMTech && (
          <div className="obe-col">
            <h4>M.Tech</h4>
            <ul className="obe-list">
              {obeMTech.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {obePortalHref && (
        <>
          <div className="panel-sub">OBE Portal</div>
          <div className="dept-card-base" style={{ maxWidth: 500 }}>
            <h3>OBE Assessment System</h3>
            <p>
              Access the Outcome Based Education portal for CO/PO attainment
              data and assessment tools.
            </p>
            <a
              href={obePortalHref}
              target="_blank"
              rel="noreferrer"
              className="cta-link"
            >
              Open OBE Portal →
            </a>
          </div>
        </>
      )}

      <div className="panel-sub" id="handbook-section">
        Handbook
      </div>
      <div className="dept-card-base" style={{ maxWidth: 500 }}>
        <h3>{handbookTitle}</h3>
        <p>{handbookSub}</p>
      </div>
    </div>
  );
}
