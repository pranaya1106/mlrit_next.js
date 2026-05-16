"use client";

import { useEffect, useRef, useState } from "react";
import type { YearStat, YearDetail } from "@/app/placements/_data";

type Props = {
  latest: YearStat;
  older: YearStat[];
  details: Record<string, YearDetail[]>;
};

export default function YearHistory({ latest, older, details }: Props) {
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState<Set<string>>(new Set());

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        older.forEach((y, i) => {
          setTimeout(() => {
            setVisible((prev) => new Set(prev).add(y.year));
          }, i * 80);
        });
        io.disconnect();
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [older]);

  return (
    <>
      <div className="pl-year-featured pl-fade">
        <div className="pl-year-featured__year">{latest.year}</div>
        <div className="pl-year-featured__stat">
          <span className="pl-year-featured__val">{latest.offers}</span>
          <span className="pl-year-featured__lbl">Job Offers</span>
        </div>
        <div className="pl-year-featured__stat">
          <span className="pl-year-featured__val">{latest.companies}</span>
          <span className="pl-year-featured__lbl">Companies</span>
        </div>
        <div className="pl-year-featured__stat">
          <span className="pl-year-featured__val">₹{latest.highest} LPA</span>
          <span className="pl-year-featured__lbl">Highest Package</span>
        </div>
      </div>

      <div ref={listRef} className="pl-year-list">
        {older.map((y) => {
          const list = details[y.year] || [];
          const has = list.length > 0;
          const isActive = active === y.year;
          const isVisible = visible.has(y.year);
          return (
            <div
              key={y.year}
              className={`pl-year-wrap${isActive ? " is-hovered" : ""}`}
              onMouseEnter={() => has && setActive(y.year)}
              onMouseLeave={() => setActive((v) => (v === y.year ? null : v))}
            >
              <div className={`pl-year-row${isVisible ? " is-visible" : ""}`}>
                <span className="pl-year-row__year">{y.year}</span>
                <div className="pl-year-row__val">
                  {y.offers}
                  <span className="pl-year-row__lbl">Offers</span>
                </div>
                <div className="pl-year-row__val">
                  {y.companies}
                  <span className="pl-year-row__lbl">Companies</span>
                </div>
                <div className="pl-year-row__val">
                  ₹{y.highest} LPA
                  <span className="pl-year-row__lbl">Highest</span>
                </div>
              </div>
              {has && (
                <div className={`pl-year-detail${isActive ? " is-active" : ""}`}>
                  <div className="pl-year-detail__inner">
                    <table className="pl-year-detail__table">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Company</th>
                          <th>Role</th>
                          <th>Salary</th>
                          <th>Selects</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((d, i) => (
                          <tr key={d.company + i}>
                            <td>{i + 1}</td>
                            <td>{d.company}</td>
                            <td>{d.role}</td>
                            <td>{d.salary}</td>
                            <td>{d.selects}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
