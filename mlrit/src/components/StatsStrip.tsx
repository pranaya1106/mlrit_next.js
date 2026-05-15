"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { target: 20, suffix: "+", label: "Years of Excellence" },
  { target: 11, suffix: "K+", label: "Students Enrolled" },
  { target: 98, suffix: "%", label: "Placement Rate" },
  { target: 200, suffix: "+", label: "Recruiting Companies" },
];

const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

export default function StatsStrip() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const onMove = (e: MouseEvent) => {
      const rect = strip.getBoundingClientRect();
      const pct = (((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
      strip.style.setProperty("--mx", `${pct}%`);
    };
    strip.addEventListener("mousemove", onMove);

    const counters = strip.querySelectorAll<HTMLElement>(".stat-count");

    const spawnSparkles = (el: HTMLElement) => {
      const item = el.closest<HTMLElement>(".stat-item");
      if (!item) return;
      for (let i = 0; i < 8; i++) {
        const s = document.createElement("span");
        s.className = "stat-sparkle";
        const angle = (i / 8) * 360;
        const dist = 28 + Math.random() * 20;
        s.style.setProperty(
          "--sx",
          `${Math.cos((angle * Math.PI) / 180) * dist}px`
        );
        s.style.setProperty(
          "--sy",
          `${Math.sin((angle * Math.PI) / 180) * dist}px`
        );
        s.style.top = "40%";
        s.style.left = "50%";
        item.appendChild(s);
        requestAnimationFrame(() => s.classList.add("burst"));
        setTimeout(() => s.remove(), 750);
      }
    };

    const animateCounter = (el: HTMLElement) => {
      const target = Number(el.dataset.target);
      const duration = 1800;
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        el.textContent = String(Math.floor(easeOutQuart(progress) * target));
        if (progress < 1) requestAnimationFrame(step);
        else {
          el.textContent = String(target);
          el.classList.add("done");
          spawnSparkles(el);
        }
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((el, i) =>
              setTimeout(() => animateCounter(el), i * 120)
            );
            io.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(strip);

    return () => {
      strip.removeEventListener("mousemove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <div className="stats-strip" id="stats" ref={stripRef}>
      <div className="section-wrap">
        <div className="stats-strip__inner">
          {STATS.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-item__number">
                <span className="stat-count" data-target={s.target}>
                  0
                </span>
                <span className="stat-suffix">{s.suffix}</span>
              </div>
              <div className="stat-item__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
