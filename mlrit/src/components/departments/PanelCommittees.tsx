import type { CommitteesContent } from "@/data/departments-types";

type Props = {
  content: CommitteesContent;
  active: boolean;
};

export default function PanelCommittees({ content, active }: Props) {
  return (
    <div
      className={`dept-panel${active ? " is-active" : ""}`}
      id="panel-committees"
      role="tabpanel"
      aria-labelledby="tab-committees"
    >
      <h2 className="panel-heading">Departmental Committees</h2>
      <p>{content.intro}</p>

      {content.cards.map((c) => (
        <div key={c.heading + c.h3}>
          <div className="panel-sub">{c.heading}</div>
          <div className="dept-card-base" style={{ marginBottom: 20 }}>
            <h3>{c.h3}</h3>
            <p>{c.body}</p>
            {c.docHref && (
              <a
                href={c.docHref}
                download
                className="doc-link doc-link--orange"
              >
                ↓ {c.docLabel ?? "Document"}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
