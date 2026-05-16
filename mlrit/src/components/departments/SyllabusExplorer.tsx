"use client";

import { useEffect, useMemo, useState } from "react";
import type { Regulation } from "@/data/departments-types";

type Props = {
  slug: string;
  regulations: Record<string, Regulation>;
  subjectDetails?: Record<string, string[]>;
};

const FALLBACK_REG_ORDER = ["r25", "r22", "mlr20", "mlr18"] as const;

export default function SyllabusExplorer({
  slug,
  regulations,
  subjectDetails,
}: Props) {
  const regKeys = useMemo(() => {
    const known = FALLBACK_REG_ORDER.filter((k) => regulations[k]);
    const extra = Object.keys(regulations).filter(
      (k) => !FALLBACK_REG_ORDER.includes(k as (typeof FALLBACK_REG_ORDER)[number])
    );
    return [...known, ...extra];
  }, [regulations]);

  const [reg, setReg] = useState<string | null>(regKeys[0] ?? null);
  const [year, setYear] = useState<string | null>(null);
  const [sem, setSem] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setYear(null);
    setSem(null);
    setExpanded({});
  }, [reg]);

  useEffect(() => {
    setSem(null);
    setExpanded({});
  }, [year]);

  if (!reg) return null;

  const regData = regulations[reg];
  const years = regData ? Object.keys(regData.years) : [];
  const sems = year && regData ? Object.keys(regData.years[year] ?? {}) : [];
  const subjects =
    year && sem && regData ? regData.years[year]?.[sem] ?? [] : [];

  const fullSyllabusHref =
    year && sem ? `/departments/syllabus/${slug}/${reg}/year${year}/sem${sem}.html` : null;

  return (
    <>
      <div className="pill-row" id="regPills">
        {regKeys.map((k) => (
          <button
            key={k}
            type="button"
            className={`pill${reg === k ? " is-active" : ""}`}
            onClick={() => setReg(k)}
          >
            {regulations[k]?.label ?? k.toUpperCase()}
          </button>
        ))}
      </div>

      {years.length > 0 && (
        <div className="pill-row" id="yearPills">
          {years.map((y) => (
            <button
              key={y}
              type="button"
              className={`pill${year === y ? " is-active" : ""}`}
              onClick={() => setYear(y)}
            >
              Year {y}
            </button>
          ))}
        </div>
      )}

      {sems.length > 0 && (
        <div className="pill-row" id="semPills" style={{ display: "flex" }}>
          {sems.map((s) => (
            <button
              key={s}
              type="button"
              className={`pill${sem === s ? " is-active" : ""}`}
              onClick={() => setSem(s)}
            >
              Sem {s}
            </button>
          ))}
        </div>
      )}

      {subjects.length > 0 && (
        <div className="subject-list is-visible">
          {subjects.map(([code, name]) => {
            const units = subjectDetails?.[name];
            const isOpen = !!expanded[code];
            return (
              <div key={code}>
                <div
                  className={`subject-row${isOpen ? " is-expanded" : ""}`}
                  onClick={() =>
                    setExpanded((p) => ({ ...p, [code]: !p[code] }))
                  }
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setExpanded((p) => ({ ...p, [code]: !p[code] }));
                    }
                  }}
                >
                  <span className="subject-code">{code}</span>
                  <span className="subject-name">{name}</span>
                  <span className="subject-toggle" aria-hidden="true">
                    ▶
                  </span>
                  <a
                    href={`/departments/syllabus/pdfs/${reg}/${code}.pdf`}
                    target="_blank"
                    rel="noreferrer"
                    className="subject-pdf"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Syllabus PDF
                  </a>
                </div>
                {units && units.length > 0 && (
                  <div className="subject-units">
                    <ol>
                      {units.map((u, i) => (
                        <li key={i}>{u}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {fullSyllabusHref && (
        <div style={{ marginTop: 20 }}>
          <a
            href={fullSyllabusHref}
            target="_blank"
            rel="noreferrer"
            className="syllabus-view-btn"
          >
            View Semester Syllabus →
          </a>
        </div>
      )}
    </>
  );
}
