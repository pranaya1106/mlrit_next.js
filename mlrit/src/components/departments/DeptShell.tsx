"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { SidebarItem } from "@/data/departments-types";

export const TAB_ORDER = [
  { id: "overview", label: "Overview" },
  { id: "objectives", label: "Objectives" },
  { id: "faculty", label: "Faculty Profiles" },
  { id: "academics", label: "Academics" },
  { id: "achievements", label: "Achievements" },
  { id: "committees", label: "Committees" },
] as const;

export type TabId = (typeof TAB_ORDER)[number]["id"];

type Props = {
  sidebar: SidebarItem[];
  children: ReactNode;
};

export default function DeptShell({ sidebar, children }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const [activeSidebar, setActiveSidebar] = useState<string | null>(null);
  const [presentTargets, setPresentTargets] = useState<Set<string> | null>(
    null
  );
  const streakRef = useRef<HTMLDivElement>(null);
  const panelsRootRef = useRef<HTMLDivElement>(null);
  const suppressScrollSpy = useRef(false);
  const suppressTimer = useRef<number | null>(null);

  // Until we've measured the DOM, show every sidebar entry that belongs to the
  // active tab. After mount we filter to only those whose targets actually
  // rendered so empty sections don't show up as dead Quick Nav links.
  const visibleSidebar = sidebar.filter(
    (it) =>
      it.tab === activeTab &&
      (presentTargets === null || presentTargets.has(it.targetId))
  );

  // Toggle .is-active on each panel based on activeTab
  useEffect(() => {
    const root = panelsRootRef.current;
    if (!root) return;
    const panels = root.querySelectorAll<HTMLElement>(".dept-panel");
    panels.forEach((p) => {
      const id = p.id; // panel-overview, panel-faculty, ...
      const isMatch = id === `panel-${activeTab}`;
      p.classList.toggle("is-active", isMatch);
    });
  }, [activeTab]);

  // After each tab switch, recompute which sidebar targets actually exist in
  // the DOM. Conditional sections (e.g. an empty Syllabus PDFs list) won't
  // emit their target id, so we filter the Quick Nav to match what's rendered.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const ids = new Set<string>();
    for (const item of sidebar) {
      if (item.tab !== activeTab) continue;
      if (document.getElementById(item.targetId)) ids.add(item.targetId);
    }
    setPresentTargets(ids);
  }, [activeTab, sidebar]);

  const fireStreak = useCallback(() => {
    const el = streakRef.current;
    if (!el) return;
    el.classList.remove("is-firing");
    void el.offsetWidth;
    el.classList.add("is-firing");
  }, []);

  const handleTab = useCallback(
    (id: TabId) => {
      setActiveTab(id);
      setActiveSidebar(null);
      fireStreak();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [fireStreak]
  );

  const handleSidebarClick = useCallback((targetId: string) => {
    setActiveSidebar(targetId);
    suppressScrollSpy.current = true;
    if (suppressTimer.current !== null) {
      window.clearTimeout(suppressTimer.current);
    }
    suppressTimer.current = window.setTimeout(() => {
      suppressScrollSpy.current = false;
      suppressTimer.current = null;
    }, 800);
    if (typeof document === "undefined") return;
    const el = document.getElementById(targetId);
    if (!el) return;

    // If the target sits inside a collapsed sub-accordion (Labs, History, etc.),
    // open it so the user actually sees content after the scroll. Also open
    // when the target IS the accordion wrapper itself.
    const accordion =
      (el.classList.contains("sub-accordion")
        ? el
        : el.closest(".sub-accordion")) as HTMLElement | null;
    if (accordion && !accordion.classList.contains("is-open")) {
      const header = accordion.querySelector<HTMLButtonElement>(
        ".sub-accordion__header"
      );
      header?.click();
    }

    // Use a small delay so the accordion can start expanding before we measure.
    const doScroll = () => {
      const tabBar = document.querySelector<HTMLElement>(".dept-tabs");
      const offset = (tabBar?.offsetHeight ?? 48) + 8;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    };
    if (accordion) {
      window.setTimeout(doScroll, 120);
    } else {
      doScroll();
    }
  }, []);

  useEffect(() => {
    if (visibleSidebar.length > 0) {
      setActiveSidebar(visibleSidebar[0].targetId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  // Scroll-spy: highlight the Quick Nav item whose section is currently in view.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const tabIds = sidebar.filter((it) => it.tab === activeTab).map((it) => it.targetId);
    if (tabIds.length === 0) return;

    const targets = tabIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (targets.length === 0) return;

    const visibleIds = new Set<string>();

    const pickActive = () => {
      if (suppressScrollSpy.current) return;
      if (visibleIds.size === 0) return;
      // Of the currently-intersecting targets, pick the one nearest the top.
      let bestId: string | null = null;
      let bestTop = Number.POSITIVE_INFINITY;
      visibleIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        if (top < bestTop) {
          bestTop = top;
          bestId = id;
        }
      });
      if (bestId !== null) setActiveSidebar(bestId);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) visibleIds.add(id);
          else visibleIds.delete(id);
        });
        pickActive();
      },
      { threshold: 0, rootMargin: "-25% 0px -55% 0px" }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [activeTab, sidebar]);

  useEffect(() => {
    return () => {
      if (suppressTimer.current !== null) {
        window.clearTimeout(suppressTimer.current);
      }
    };
  }, []);

  return (
    <>
      <nav className="dept-tabs" aria-label="Department sections">
        {TAB_ORDER.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`dept-tab${activeTab === tab.id ? " is-active" : ""}`}
            onClick={() => handleTab(tab.id)}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div ref={streakRef} className="streak" aria-hidden="true" />

      <div className="dept-body">
        <aside className="dark-sidebar" aria-label="Quick navigation">
          <div className="dark-sidebar__title">Quick Nav</div>
          {visibleSidebar.map((item) => (
            <button
              key={item.targetId + item.label}
              type="button"
              className={`ds-item${
                activeSidebar === item.targetId ? " is-active" : ""
              }`}
              onClick={() => handleSidebarClick(item.targetId)}
            >
              <span className="ds-item__dot" aria-hidden="true" />
              <span className="ds-item__label">{item.label}</span>
            </button>
          ))}
        </aside>

        <div ref={panelsRootRef} className="dept-body__panels">
          {children}
        </div>
      </div>
    </>
  );
}
