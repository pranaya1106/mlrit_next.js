"use client";

import { useEffect } from "react";

export default function TimelineActivate() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".vtl-item"));
    if (!items.length || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vtl-active");
          } else {
            entry.target.classList.remove("vtl-active");
          }
        });
      },
      { threshold: 0.35 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
