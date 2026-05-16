import type { AchievementsContent } from "@/data/departments-types";
import AchieveCard from "./AchieveCard";
import PublicationsList from "./PublicationsList";

type Props = {
  content: AchievementsContent;
  active: boolean;
};

export default function PanelAchievements({ content, active }: Props) {
  const {
    achievementCards,
    honourTable,
    studentAchievements,
    publications,
    internStats,
    internCards,
    placementStats,
    placementNote,
  } = content;

  return (
    <div
      className={`dept-panel${active ? " is-active" : ""}`}
      id="panel-achievements"
      role="tabpanel"
      aria-labelledby="tab-achievements"
    >
      <h2 className="panel-heading">Achievements</h2>

      {achievementCards.length > 0 && (
        <div id="achieve-section" className="achieve-grid">
          {achievementCards.map((a) => (
            <AchieveCard key={a.title} title={a.title} body={a.body} />
          ))}
        </div>
      )}

      {honourTable.length > 0 && (
        <>
          <div className="panel-sub" id="honour-section">
            Roll of Honour
          </div>
          <table className="honour-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Name</th>
                <th>Achievement</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {honourTable.map((row, i) => (
                <tr key={i}>
                  <td>{row.year}</td>
                  <td>
                    <span className="honour-name">{row.name}</span>
                  </td>
                  <td>
                    <span
                      className={`honour-badge honour-badge--${row.badgeKind}`}
                    >
                      {row.badge}
                    </span>
                  </td>
                  <td>
                    <span className="honour-score">{row.score}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {studentAchievements.length > 0 && (
        <>
          <div className="panel-sub">Student Achievements</div>
          <ul className="achieve-list">
            {studentAchievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </>
      )}

      {publications.length > 0 && (
        <>
          <div className="panel-sub" id="pub-section">
            Publications
          </div>
          <PublicationsList publications={publications} />
        </>
      )}

      {(internStats.length > 0 || internCards.length > 0) && (
        <>
          <div className="panel-sub" id="intern-section">
            Internships and Placements
          </div>
          {internStats.length > 0 && (
            <div className="intern-stats">
              {internStats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-card__num">{s.num}</div>
                  <div className="stat-card__label">{s.label}</div>
                </div>
              ))}
            </div>
          )}
          {internCards.length > 0 && (
            <div className="intern-grid">
              {internCards.map((c, i) => (
                <div key={i} className="intern-card">
                  <div className="intern-card__inner">
                    <div className="intern-card__front">
                      <div className="intern-card__name">{c.company}</div>
                      <div className="intern-card__type">{c.type}</div>
                    </div>
                    <div className="intern-card__back">
                      <div className="intern-card__back-num">{c.count}</div>
                      <div className="intern-card__back-label">
                        Students — {c.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {placementStats.length > 0 && (
        <>
          <div className="panel-sub" id="placement-section">
            Placements
          </div>
          <div className="placement-stats">
            {placementStats.map((s) => (
              <div key={s.label} className="placement-stat">
                <div className="placement-stat__num">{s.num}</div>
                <div className="placement-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
          {placementNote && <p>{placementNote}</p>}
        </>
      )}
    </div>
  );
}
