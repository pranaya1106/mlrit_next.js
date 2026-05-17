"use client";

import { useState } from "react";
import type { PublicationsBlock } from "@/data/research-types";

type Props = { data: PublicationsBlock };

/**
 * Year-pill filter + per-year publication tables / download buttons.
 * Client component because the year filter is interactive.
 */
export default function PublicationsSection({ data }: Props) {
  const [activeYear, setActiveYear] = useState(
    data.years[0]?.year ?? "",
  );

  return (
    <>
      <div className="year-filter" role="tablist" aria-label="Publication year">
        {data.years.map((y) => {
          const isActive = y.year === activeYear;
          return (
            <button
              key={y.year}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`year-pill${isActive ? " is-active" : ""}`}
              onClick={() => setActiveYear(y.year)}
            >
              {y.year}
            </button>
          );
        })}
      </div>

      {data.years.map((y) => {
        const isActive = y.year === activeYear;
        return (
          <div
            key={y.year}
            role="tabpanel"
            className={`year-block${isActive ? " is-active" : ""}`}
            hidden={!isActive}
          >
            <div className="year-head">
              <h3>{y.year} Publications</h3>
              <span className="year-meta">{y.meta}</span>
            </div>

            {y.table && (
              <div className="res-table-wrap">
                <table className="res-table">
                  <thead>
                    <tr>
                      {y.table.columns.map((c) => (
                        <th key={c}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {y.table.rows.map((row) => (
                      <tr key={row.dept}>
                        <td>{row.dept}</td>
                        <td>{row.indexing}</td>
                        <td>{row.count}</td>
                        <td>
                          <a href={row.href} className="res-dl">
                            PDF ↓
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {y.download && (
              <a
                href={y.download.href}
                className="callout__btn"
                style={{ display: "inline-block" }}
              >
                {y.download.label}
              </a>
            )}
          </div>
        );
      })}
    </>
  );
}
