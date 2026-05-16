import type { AcademicsContent } from "@/data/departments-types";
import SyllabusExplorer from "./SyllabusExplorer";

type Props = {
  slug: string;
  content: AcademicsContent;
  active: boolean;
};

export default function PanelAcademics({ slug, content, active }: Props) {
  const { syllabusPdfs, courseCatalog, regulations, subjectDetails } = content;

  return (
    <div
      className={`dept-panel${active ? " is-active" : ""}`}
      id="panel-academics"
      role="tabpanel"
      aria-labelledby="tab-academics"
    >
      <h2 className="panel-heading">Academics</h2>

      <div className="panel-sub" id="syll-pdfs">
        Syllabus PDFs
      </div>
      <div className="catalog-grid catalog-grid--one">
        {syllabusPdfs.map((pdf) => (
          <div
            key={pdf.label + pdf.viewHref}
            className="catalog-item catalog-item--split"
          >
            <div>
              <span className="catalog-item__text">{pdf.label}</span>
              {pdf.sublabel && (
                <span className="catalog-item__sub">{pdf.sublabel}</span>
              )}
            </div>
            <div className="syll-actions">
              <a
                href={pdf.viewHref}
                target="_blank"
                rel="noreferrer"
                className="syll-btn syll-btn--view"
              >
                View
              </a>
              <a
                href={pdf.downloadHref}
                download
                className="syll-btn syll-btn--download"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {courseCatalog.length > 0 && (
        <>
          <div className="panel-sub" id="catalog-section">
            Online Course Catalog
          </div>
          <div className="catalog-grid">
            {courseCatalog.map((c) => (
              <a
                key={c.href + c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="catalog-item"
              >
                <div>
                  <span className="catalog-item__text">{c.label}</span>
                  {c.sublabel && (
                    <span className="catalog-item__sub">{c.sublabel}</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </>
      )}

      {regulations && Object.keys(regulations).length > 0 && (
        <>
          <div className="panel-sub" id="syll-explorer">
            Semester-wise Syllabus Explorer
          </div>
          <p style={{ fontStyle: "italic", color: "#666" }}>
            Select regulation, year and semester to browse subjects. Click a
            subject to see unit-wise topics.
          </p>
          <SyllabusExplorer
            slug={slug}
            regulations={regulations}
            subjectDetails={subjectDetails}
          />
        </>
      )}
    </div>
  );
}
