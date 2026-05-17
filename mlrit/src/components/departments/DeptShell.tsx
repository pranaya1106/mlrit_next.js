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
  const streakRef = useRef<HTMLDivElement>(null);
  const panelsRootRef = useRef<HTMLDivElement>(null);

  const visibleSidebar = sidebar.filter((it) => it.tab === activeTab);

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
