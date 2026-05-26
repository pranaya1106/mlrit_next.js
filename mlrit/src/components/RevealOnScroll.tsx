"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
  useEffect(() => {
    // ── Standard .reveal elements (existing behaviour) ──────────
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    // ── About pages: opt-in to animation only after JS hydrates ──
    // Elements start visible (opacity:1). We add .about-pre here to
    // enable the CSS transition, then immediately observe — so anything
    // already in the viewport fires is-revealed on the first tick.
    const aboutEls = Array.from(document.querySelectorAll<HTMLElement>(".about-reveal"));
    aboutEls.forEach((el) => el.classList.add("about-pre"));

    const allEls = [...revealEls, ...aboutEls];
    if (!allEls.length) return;

    if (typeof IntersectionObserver === "undefined") {
      allEls.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );

    allEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
