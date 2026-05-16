"use client";

import { useRef } from "react";
import type { DepartmentHero } from "@/data/departments-types";

type Props = {
  hero: DepartmentHero;
};

export default function DeptHero({ hero }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.readyState === 0) v.load();
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
    v.classList.add("is-visible");
  };

  const onLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.classList.remove("is-visible");
    setTimeout(() => {
      v.pause();
      v.currentTime = 0;
    }, 650);
  };

  return (
    <div
      className="dept-hero"
      id="page-top"
      onMouseEnter={hero.video ? onEnter : undefined}
      onMouseLeave={hero.video ? onLeave : undefined}
    >
      {hero.video && (
        <video
          ref={videoRef}
          className="dept-hero__video"
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={hero.video} type="video/mp4" />
        </video>
      )}
      <div className="dept-hero__overlay" aria-hidden="true" />
      <div className="dept-hero__eyebrow">{hero.eyebrow}</div>
      <h1 className="dept-hero__title">{hero.title}</h1>
    </div>
  );
}
