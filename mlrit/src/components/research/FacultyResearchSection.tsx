"use client";

import { useState } from "react";
import type { FacultyTabsBlock } from "@/data/research-types";

type Props = { data: FacultyTabsBlock };

/**
 * Dept tabs + per-department faculty table.
 * Client component because tab switching is interactive.
 */
export default function FacultyResearchSection({ data }: Props) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]?.id ?? "");

  return (
    <>
      <div className="res-dept-tabs" role="tablist" aria-label="Department">
        {data.tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`res-dept-tab${isActive ? " is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {data.tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <div
            key={tab.id}
            role="tabpanel"
            className={`fac-panel${isActive ? " is-active" : ""}`}
            hidden={!isActive}
          >
            <div className="res-table-wrap">
              <table className="res-table">
                <thead>
                  <tr>
                    <th>Faculty</th>
                    <th>Designation</th>
                    <th>Research Areas</th>
                  </tr>
                </thead>
                <tbody>
                  {tab.rows.map((row) => (
                    <tr key={row.faculty}>
                      <td>{row.faculty}</td>
                      <td>{row.designation}</td>
                      <td>{row.areas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
}
