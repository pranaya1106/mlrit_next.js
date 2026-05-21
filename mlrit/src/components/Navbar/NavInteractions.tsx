"use client";

import { useEffect } from "react";

export default function NavInteractions() {
  useEffect(() => {
    // ── Mobile detection ──────────────────────────────────────────
    const MQ = window.matchMedia("(max-width: 768px)");

    // ── Desktop dropdown keyboard + click ────────────────────────
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(".main-nav__item")
    );

    const closeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".main-nav__item.is-open")
        .forEach((i) => i.classList.remove("is-open"));
    };

    const keyHandlers = new Map<HTMLElement, (e: KeyboardEvent) => void>();
    const linkClickHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();
    const itemClickHandlers = new Map<HTMLElement, (e: MouseEvent) => void>();

    items.forEach((item) => {
      const link = item.querySelector<HTMLAnchorElement>(".main-nav__link");
      const dropdown = item.querySelector(".dropdown, .support-panel");
      if (!link) return;

      if (dropdown) {
        // Keyboard: Enter/Space opens, Escape closes
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

        // Mobile: tap link row to toggle dropdown accordion
        const onItemClick = (e: MouseEvent) => {
          if (!MQ.matches) return;
          const href = link.getAttribute("href");
          if (!href || href === "#") e.preventDefault();
          const isOpen = item.classList.contains("is-open");
          closeAll();
          if (!isOpen) item.classList.add("is-open");
        };
        item.addEventListener("click", onItemClick);
        itemClickHandlers.set(item, onItemClick);
      }

      // Prevent default on # links
      const onClick = (e: MouseEvent) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") e.preventDefault();
      };
      link.addEventListener("click", onClick);
      linkClickHandlers.set(link, onClick);
    });

    // Click outside → close all
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest(".main-nav__item") && !target?.closest(".nav-hamburger"))
        closeAll();
    };
    document.addEventListener("click", onDocClick);

    // ── Chronicles dropdown staggered reveal ──────────────────────
    const chronicles = document.querySelector<HTMLElement>(
      ".main-nav__item--chronicles"
    );
    const panel = chronicles?.querySelector(".dropdown--chronicles");
    const reveals = panel
      ? Array.from(panel.querySelectorAll<HTMLElement>("[data-reveal]"))
      : [];

    const triggerReveal = () => {
      reveals.forEach((el, i) => {
        el.style.transitionDelay = `${i * 40}ms`;
        el.classList.add("chron-ep--visible");
      });
    };
    const resetReveal = () => {
      reveals.forEach((el) => {
        el.classList.remove("chron-ep--visible");
        el.style.transitionDelay = "0ms";
      });
    };
    chronicles?.addEventListener("mouseenter", triggerReveal);
    chronicles?.addEventListener("mouseleave", resetReveal);
    chronicles?.addEventListener("focusin", triggerReveal);
    chronicles?.addEventListener("focusout", resetReveal);

    // ── Mobile hamburger menu ─────────────────────────────────────
    const masthead = document.querySelector<HTMLElement>(".masthead__inner");
    const mainNav = document.querySelector<HTMLElement>(".main-nav");

    let hamburger: HTMLButtonElement | null = null;

    const buildHamburger = () => {
      if (!MQ.matches || !masthead || !mainNav || hamburger) return;

      hamburger = document.createElement("button");
      hamburger.className = "nav-hamburger";
      hamburger.setAttribute("aria-label", "Toggle navigation");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.innerHTML =
        '<span class="nav-hamburger__bar"></span>' +
        '<span class="nav-hamburger__bar"></span>' +
        '<span class="nav-hamburger__bar"></span>';

      // Insert into masthead before last child (or append)
      const contact = masthead.querySelector(".masthead__contact");
      if (contact) {
        masthead.insertBefore(hamburger, contact);
      } else {
        masthead.appendChild(hamburger);
      }

      // Show/hide main nav
      mainNav.style.display = "none";

      const openDrawer = () => {
        hamburger!.classList.add("is-open");
        hamburger!.setAttribute("aria-expanded", "true");
        mainNav.style.display = "block";
        document.body.style.overflow = "hidden";
      };

      const closeDrawer = () => {
        hamburger!.classList.remove("is-open");
        hamburger!.setAttribute("aria-expanded", "false");
        mainNav.style.display = "none";
        document.body.style.overflow = "";
        closeAll();
      };

      hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        hamburger!.classList.contains("is-open") ? closeDrawer() : openDrawer();
      });

      // Tap outside drawer → close
      document.addEventListener("click", (e) => {
        if (!MQ.matches) return;
        const t = e.target as HTMLElement;
        if (
          hamburger &&
          !t.closest(".main-nav") &&
          !t.closest(".nav-hamburger")
        ) {
          closeDrawer();
        }
      });

      // Esc → close
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && hamburger?.classList.contains("is-open"))
          closeDrawer();
      });
    };

    const destroyHamburger = () => {
      if (!hamburger) return;
      hamburger.remove();
      hamburger = null;
      if (mainNav) mainNav.style.display = "";
      document.body.style.overflow = "";
    };

    // Build on mount if mobile
    buildHamburger();

    // Rebuild/destroy on resize
    const onResize = () => {
      if (MQ.matches) {
        buildHamburger();
      } else {
        destroyHamburger();
        closeAll();
      }
    };
    MQ.addEventListener("change", onResize);

    // ── Cleanup ───────────────────────────────────────────────────
    return () => {
      keyHandlers.forEach((h, el) => el.removeEventListener("keydown", h));
      linkClickHandlers.forEach((h, el) => el.removeEventListener("click", h));
      itemClickHandlers.forEach((h, el) => el.removeEventListener("click", h));
      document.removeEventListener("click", onDocClick);
      chronicles?.removeEventListener("mouseenter", triggerReveal);
      chronicles?.removeEventListener("mouseleave", resetReveal);
      chronicles?.removeEventListener("focusin", triggerReveal);
      chronicles?.removeEventListener("focusout", resetReveal);
      MQ.removeEventListener("change", onResize);
      destroyHamburger();
    };
  }, []);

  return null;
}
