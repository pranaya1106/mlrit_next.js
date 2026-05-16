"use client";

import { useMemo, useState } from "react";
import type { Publication } from "@/data/departments-types";

type Props = {
  publications: Publication[];
};

export default function PublicationsList({ publications }: Props) {
  const years = useMemo(() => {
    const set = new Set<string>();
    publications.forEach((p) => set.add(p.year));
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  }, [publications]);

  const [filter, setFilter] = useState<string>("all");

  if (publications.length === 0) return null;

  return (
    <>
      <div className="pub-filters" id="pubFilters">
        <button
          type="button"
          className={`pub-filter${filter === "all" ? " is-active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {years.map((y) => (
          <button
            key={y}
            type="button"
            className={`pub-filter${filter === y ? " is-active" : ""}`}
            onClick={() => setFilter(y)}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="pub-list" id="pubList">
        {publications.map((p) => {
          const dimmed = filter !== "all" && p.year !== filter;
          return (
            <div
              key={p.title + p.authors}
              className={`pub-card${dimmed ? " is-dimmed" : ""}`}
              data-pub-year={p.year}
            >
              <div className="pub-card__body">
                <div className="pub-card__title">{p.title}</div>
                <div className="pub-card__authors">{p.authors}</div>
                <div className="pub-card__journal">{p.journal}</div>
                <span className="pub-tag">Published</span>
              </div>
              <span className="pub-card__year">{p.year}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
