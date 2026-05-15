"use client";

import { useEffect, useRef } from "react";

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    const right = rightRef.current;
    if (!video || !section) return;

    const slideIn = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && right) {
          right.classList.add("is-visible");
          slideIn.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (right) slideIn.observe(right);

    const playToggle = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          video.play().catch(() => {});
          video.classList.add("is-playing");
        } else {
          video.pause();
          video.classList.remove("is-playing");
        }
      },
      { threshold: 0.5 }
    );
    playToggle.observe(section);

    return () => {
      slideIn.disconnect();
      playToggle.disconnect();
    };
  }, []);

  return (
    <section className="why-section" id="why-mlrit" ref={sectionRef}>
      <div className="why-section__bg" aria-hidden="true" />
      <div className="why-section__inner">
        <div className="why-section__left">
          <span className="section-label reveal">Why MLRIT</span>
          <h2 className="why-section__heading reveal" data-delay="1">
            <span className="why-quote">“</span>
            <span className="why-section__dropcap">I</span>
            ndustry Integrated Curriculum Blended With Sports
            <span className="why-quote">”</span>
          </h2>
          <p className="why-section__body reveal" data-delay="2">
            MLRIT is the only engineering college in Telangana where athletic
            performance is built into your degree — with national-level
            coaching, sports scholarships, and dedicated training hours. Our
            students compete at state and national levels across cricket,
            badminton, athletics, and more, backed by professional
            infrastructure and full institutional support.
          </p>
        </div>

        <div className="why-section__right" ref={rightRef}>
          <video
            className="why-section__video"
            id="whyVideo"
            ref={videoRef}
            src="https://res.cloudinary.com/dhqhhtvym/video/upload/v1777366655/sports.mp4"
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
