"use client";

import { useEffect, useRef, useState } from "react";
import type { IQACSection } from "@/data/iqac-types";

type Props = {
  title: string;
  sections: IQACSection[];
};

/**
 * Sticky left-rail TOC with active-section tracking via IntersectionObserver
 * — mirrors the inline script from `iqac.html`. Marked "use client" because
 * it owns scroll-driven state.
 */
export default function IQACSidebar({ title, sections }: Props) {
  const [activeId, setActiveId] = useState<string | undefined>(sections[0]?.id);
  const readyRef = useRef(false);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const timer = window.setTimeout(() => {
      readyRef.current = true;
    }, 400);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!readyRef.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { threshold: 0.25, rootMargin: "-100px 0px -45% 0px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [sections]);

  return (
    <aside className="iq-side" aria-label={`${title} navigation`}>
      <p className="iq-side__title">{title}</p>
      <ul className="iq-side__list">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={s.id === activeId ? "is-active" : undefined}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
