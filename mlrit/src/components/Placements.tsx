"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const STATS = [
  { target: 44, suffix: "LPA", label: "Highest Package" },
  { target: 5, suffix: "K+", label: "Students Placed in Top MNCs" },
  { target: 18, suffix: "LPA", label: "Avg. Salary — Top 25%" },
  { target: 200, suffix: "+", label: "Recruiters incl. IIT/IIM/NIT Hirers" },
];

const RECRUITERS = [
  "p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg",
  "p7.png", "p8.png", "p9.png", "p10.png", "p11.png", "p12.png",
  "p13.png", "p14.png", "p15.png", "p16.png",
];

export default function Placements() {
  const statsRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statsEl = statsRef.current;
    if (statsEl) {
      const counters =
        statsEl.querySelectorAll<HTMLElement>(".placement-stat__count");
      const io = new IntersectionObserver(
        (entries) => {
          if (!entries[0].isIntersecting) return;
          io.disconnect();
          counters.forEach((el) => {
            const target = Number(el.dataset.target);
            const duration = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              el.textContent = String(Math.round(ease * target));
              if (p < 1) requestAnimationFrame(tick);
              else el.textContent = String(target);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.4 }
      );
      io.observe(statsEl);
    }

    const band = bandRef.current;
    const track = trackRef.current;
    if (band && track) {
      const onEnter = () => (track.style.animationPlayState = "paused");
      const onLeave = () => (track.style.animationPlayState = "running");
      band.addEventListener("mouseenter", onEnter);
      band.addEventListener("mouseleave", onLeave);

      const onMove = (e: MouseEvent) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>(
          ".recruiter-band__item"
        );
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        card.style.transform = `perspective(500px) rotateX(${-dy * 8}deg) rotateY(${dx * 12}deg) scale(1.06)`;
      };

      const onOut = (e: MouseEvent) => {
        const card = (e.target as HTMLElement).closest<HTMLElement>(
          ".recruiter-band__item"
        );
        if (card && !card.contains(e.relatedTarget as Node | null)) {
          card.style.transform = "";
        }
      };

      track.addEventListener("mousemove", onMove);
      track.addEventListener("mouseout", onOut);

      return () => {
        band.removeEventListener("mouseenter", onEnter);
        band.removeEventListener("mouseleave", onLeave);
        track.removeEventListener("mousemove", onMove);
        track.removeEventListener("mouseout", onOut);
      };
    }
  }, []);

  return (
    <section className="placements" id="placements">
      <svg
        className="placements__network"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="5%" y1="15%" x2="28%" y2="42%" />
        <line x1="28%" y1="42%" x2="55%" y2="20%" />
        <line x1="55%" y1="20%" x2="80%" y2="38%" />
        <line x1="80%" y1="38%" x2="95%" y2="12%" />
        <line x1="28%" y1="42%" x2="45%" y2="68%" />
        <line x1="45%" y1="68%" x2="70%" y2="75%" />
        <line x1="70%" y1="75%" x2="80%" y2="38%" />
        <line x1="55%" y1="20%" x2="45%" y2="68%" />
        <line x1="10%" y1="70%" x2="28%" y2="42%" />
        <line x1="10%" y1="70%" x2="45%" y2="68%" />
        <line x1="70%" y1="75%" x2="92%" y2="85%" />
        <line x1="80%" y1="38%" x2="92%" y2="85%" />
        <line x1="5%" y1="15%" x2="55%" y2="20%" />
        <line x1="92%" y1="85%" x2="95%" y2="12%" />
        <circle cx="5%" cy="15%" r="3" />
        <circle cx="28%" cy="42%" r="4" />
        <circle cx="55%" cy="20%" r="3" />
        <circle cx="80%" cy="38%" r="4" />
        <circle cx="95%" cy="12%" r="2.5" />
        <circle cx="45%" cy="68%" r="3.5" />
        <circle cx="70%" cy="75%" r="3" />
        <circle cx="10%" cy="70%" r="2.5" />
        <circle cx="92%" cy="85%" r="3" />
      </svg>

      <div className="section-wrap">
        <div className="placements__header">
          <span className="placements__label reveal">Placements</span>
          <h2 className="placements__title reveal" data-delay="1">
            From Campus to Corporate
          </h2>
          <p className="placements__sub reveal" data-delay="2">
            Our placement records reflect the quality of education and industry
            readiness we build in every student.
          </p>
        </div>

        <div className="placements__divider" />

        <div className="placements__stats" ref={statsRef}>
          {STATS.map((s) => (
            <div className="placement-stat" key={s.label}>
              <div className="placement-stat__num">
                <span
                  className="placement-stat__count"
                  data-target={s.target}
                  data-suffix={s.suffix}
                >
                  0
                </span>
              </div>
              <div className="placement-stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="placements__partners-label">Global Hiring Partners</p>
      </div>

      <div className="recruiter-band" id="recruiterBand" ref={bandRef}>
        <div className="recruiter-band__track" id="recruiterTrack" ref={trackRef}>
          {RECRUITERS.map((file) => (
            <div className="recruiter-band__item" key={file}>
              <Image
                src={`/placements/${file}`}
                alt="Recruiter"
                width={160}
                height={80}
                loading="lazy"
              />
            </div>
          ))}
          {RECRUITERS.map((file) => (
            <div
              className="recruiter-band__item"
              key={`dup-${file}`}
              aria-hidden="true"
            >
              <Image
                src={`/placements/${file}`}
                alt=""
                width={160}
                height={80}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "40px 0 20px" }}>
        <Link
          href="/placements"
          className="btn btn-ghost"
          style={{
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            letterSpacing: "0.1em",
            fontSize: "0.85rem",
            textTransform: "uppercase",
          }}
        >
          Explore More →
        </Link>
      </div>
    </section>
  );
}
