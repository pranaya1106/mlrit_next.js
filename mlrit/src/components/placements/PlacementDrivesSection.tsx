"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionShell from "./SectionShell";
import { driveGallery } from "@/app/placements/_data";

export default function PlacementDrivesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        });
      },
      { threshold: 0.1 }
    );
    grid.querySelectorAll<HTMLElement>(".pl-drive-card").forEach((c) =>
      io.observe(c)
    );
    return () => io.disconnect();
  }, []);

  return (
    <SectionShell id="pl-gallery" className="pl-gallery">
      <span className="pl-label pl-fade">On Campus</span>
      <h2 className="pl-heading pl-fade">Placement Drives</h2>
      <p className="pl-gallery__context">
        Dozens of companies. Hundreds of offers. Every placement season, MLRIT
        brings industry directly to campus.
      </p>

      <div ref={gridRef} className="pl-gallery__layout">
        {driveGallery.map((img, i) => (
          <figure key={img.src + i} className="pl-drive-card">
            <div className="pl-drive-card__img">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <figcaption className="pl-drive-card__overlay">
                <span className="pl-drive-card__tag">On Campus</span>
                <span className="pl-drive-card__title">{img.alt}</span>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
