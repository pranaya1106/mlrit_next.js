"use client";

import { useEffect } from "react";

/**
 * Mirrors the original placements.js scroll-reveal: for every `.pl-section-inner`,
 * stagger-fade its `.pl-fade` children once it scrolls into view.
 */
export default function PlacementSectionRevealer() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(".pl-section-inner");
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          const items = entry.target.querySelectorAll<HTMLElement>(
            ".pl-fade:not(.is-visible)"
          );
          items.forEach((el, i) => {
            el.style.transitionDelay = `${i * 60}ms`;
            el.classList.add("is-visible");
          });
          io.disconnect();
        },
        { threshold: 0.08 }
      );
      io.observe(section);
      observers.push(io);
    });

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return null;
}
