"use client";

import { useEffect } from "react";

export default function NavInteractions() {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".main-nav__item");

    const closeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".main-nav__item.is-open")
        .forEach((i) => i.classList.remove("is-open"));
    };

    const keyHandlers = new Map<HTMLElement, (e: KeyboardEvent) => void>();
    const clickHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();

    items.forEach((item) => {
      const link = item.querySelector<HTMLAnchorElement>(".main-nav__link");
      const dropdown = item.querySelector(".dropdown");
      if (!link) return;

      if (dropdown) {
        const onKey = (e: KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            const isOpen = item.classList.contains("is-open");
            closeAll();
            if (!isOpen) item.classList.add("is-open");
          }
          if (e.key === "Escape") closeAll();
        };
        link.addEventListener("keydown", onKey);
        keyHandlers.set(link, onKey);
      }

      const onClick = (e: MouseEvent) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") e.preventDefault();
      };
      link.addEventListener("click", onClick);
      clickHandlers.set(link, onClick);
    });

    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest(".main-nav__item")) closeAll();
    };
    document.addEventListener("click", onDocClick);

    const chronicles = document.querySelector<HTMLElement>(
      ".main-nav__item--chronicles"
    );
    const panel = chronicles?.querySelector(".dropdown--chronicles");
    const reveals = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("[data-reveal]"))
      : [];

    const trigger = () => {
      reveals.forEach((el, i) => {
        el.style.transitionDelay = `${i * 40}ms`;
        el.classList.add("chron-ep--visible");
      });
    };
    const reset = () => {
      reveals.forEach((el) => {
        el.classList.remove("chron-ep--visible");
        el.style.transitionDelay = "0ms";
      });
    };

    chronicles?.addEventListener("mouseenter", trigger);
    chronicles?.addEventListener("mouseleave", reset);
    chronicles?.addEventListener("focusin", trigger);
    chronicles?.addEventListener("focusout", reset);

    return () => {
      keyHandlers.forEach((handler, link) =>
        link.removeEventListener("keydown", handler)
      );
      clickHandlers.forEach((handler, link) =>
        link.removeEventListener("click", handler)
      );
      document.removeEventListener("click", onDocClick);
      chronicles?.removeEventListener("mouseenter", trigger);
      chronicles?.removeEventListener("mouseleave", reset);
      chronicles?.removeEventListener("focusin", trigger);
      chronicles?.removeEventListener("focusout", reset);
    };
  }, []);

  return null;
}
