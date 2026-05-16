"use client";

import { useEffect, useState } from "react";
import type { SidebarLink } from "@/app/placements/_data";

type Props = { links: SidebarLink[] };

export default function PlacementSidebar({ links }: Props) {
  const [active, setActive] = useState(links[0]?.id ?? "");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-20% 0px -55% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [links]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <aside className="pl-sidebar" id="plSidebar" aria-label="Page sections">
      <div className="pl-sidebar__inner">
        <div className="pl-sidebar__title">Quick Nav</div>
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            data-section={l.id}
            onClick={(e) => onClick(e, l.id)}
            className={`pl-sidebar__item${active === l.id ? " is-active" : ""}`}
          >
            <span className="pl-sidebar__dot" />
            <span className="pl-sidebar__label">{l.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
