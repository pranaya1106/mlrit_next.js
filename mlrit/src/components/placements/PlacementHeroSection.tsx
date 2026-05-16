"use client";

import { useEffect, useRef } from "react";
import type { Stat } from "@/app/placements/_data";

type Props = {
  eyebrow: string;
  headline: React.ReactNode;
  statement: string;
  stats: Stat[];
  videoSrc?: string;
};

export default function PlacementHeroSection({
  eyebrow,
  headline,
  statement,
  stats,
  videoSrc,
}: Props) {
  const wallRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = wallRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("is-visible");
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const wall = wallRef.current;
    const video = videoRef.current;
    if (!wall || !video) return;
    const onEnter = () => {
      video.play().catch(() => {});
      wall.classList.add("video-active");
    };
    const onLeave = () => {
      video.pause();
      video.currentTime = 0;
      wall.classList.remove("video-active");
    };
    wall.addEventListener("mouseenter", onEnter);
    wall.addEventListener("mouseleave", onLeave);
    return () => {
      wall.removeEventListener("mouseenter", onEnter);
      wall.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wall = wallRef.current;
    if (!canvas || !wall) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NODES = 62;
    const MAX_DIST = 180;
    const SPEED = 0.38;
    let w = 0, h = 0, raf = 0;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; accent: boolean };
    let nodes: Node[] = [];

    const resize = () => {
      const rect = wall.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
    };

    const init = () => {
      resize();
      nodes = Array.from({ length: NODES }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: 2.2 + Math.random() * 1.2,
        accent: Math.random() < 0.12,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > MAX_DIST) continue;
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          const accent = a.accent || b.accent;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = accent
            ? `rgba(255,140,30,${alpha * 1.8})`
            : `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = accent ? 0.8 : 0.5;
          ctx.stroke();
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.accent ? "rgba(255,140,30,0.75)" : "rgba(255,255,255,0.35)";
        ctx.fill();
        if (n.accent) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,140,30,0.18)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    };

    const update = () => {
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
    };

    const loop = () => {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    };

    init();
    loop();

    const obs = new MutationObserver(() => {
      if (wall.classList.contains("video-active")) {
        cancelAnimationFrame(raf);
        canvas.style.opacity = "0";
      } else {
        canvas.style.opacity = "1";
        loop();
      }
    });
    obs.observe(wall, { attributes: true, attributeFilter: ["class"] });

    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section ref={wallRef} id="pl-wall" className="pl-wall">
      <canvas ref={canvasRef} className="pl-wall__canvas" aria-hidden="true" />
      {videoSrc && (
        <video
          ref={videoRef}
          className="pl-wall__video"
          playsInline
          muted
          loop
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <div className="pl-wall__overlay" aria-hidden="true" />

      <div className="pl-wall__inner">
        <span className="pl-wall__eyebrow">{eyebrow}</span>
        <h1 className="pl-wall__headline">{headline}</h1>
        <span className="pl-wall__headline-accent" aria-hidden="true" />
        <p className="pl-wall__statement">{statement}</p>

        <div className="pl-wall__statstrip">
          {stats.map((s, i) => (
            <div key={s.label} className="contents">
              {i > 0 && <div className="pl-wall__stat-divider" aria-hidden="true" />}
              <div className="pl-wall__stat">
                <span className="pl-wall__stat-val">{s.value}</span>
                <span className="pl-wall__stat-lbl">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pl-wall__hover-hint" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          <span>Hover to preview</span>
        </div>
      </div>
    </section>
  );
}
