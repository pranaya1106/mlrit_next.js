"use client";

import { useEffect, useRef, useState } from "react";

type Card = {
  name: string;
  role: string;
  src: string;
  rotate: number;
  ty: number;
  center?: boolean;
};

const CARDS: Card[] = [
  {
    name: "Ishant",
    role: "SDE @ Amazon",
    src: "https://res.cloudinary.com/dhqhhtvym/video/upload/v1777495632/alumni_card1.mp4",
    rotate: -18,
    ty: 40,
  },
  {
    name: "Snigdha Reddy",
    role: "DBS",
    src: "https://res.cloudinary.com/dhqhhtvym/video/upload/v1777495647/alumni_card2.mp4",
    rotate: -9,
    ty: 15,
  },
  {
    name: "Gopi Pavani",
    role: "Safran",
    src: "https://res.cloudinary.com/dhqhhtvym/video/upload/v1777366676/av3.mp4",
    rotate: 0,
    ty: 0,
    center: true,
  },
  {
    name: "Sravya Lingisetty",
    role: "Infosys",
    src: "https://res.cloudinary.com/dhqhhtvym/video/upload/v1777371368/sneha_patel.mp4",
    rotate: 9,
    ty: 15,
  },
  {
    name: "Aishwarya",
    role: "Cognizant",
    src: "https://res.cloudinary.com/dhqhhtvym/video/upload/v1777495652/alumni_card5.mp4",
    rotate: 18,
    ty: 40,
  },
];

export default function GallerySection() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSound = () => {
    setSoundEnabled((s) => {
      const next = !s;
      const cards =
        sectionRef.current?.querySelectorAll<HTMLVideoElement>(
          ".testi-card__video"
        ) ?? [];
      cards.forEach((v) => (v.muted = !next));
      return next;
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards =
      section.querySelectorAll<HTMLElement>(".testi-card");

    cards.forEach((card) => {
      const video = card.querySelector<HTMLVideoElement>(".testi-card__video");
      if (video && !video.autoplay) {
        const onLoaded = () => {
          if (video.currentTime === 0) video.currentTime = 0.1;
        };
        video.addEventListener("loadeddata", onLoaded, { once: true });
      }
    });

    const playCard = (target: HTMLElement) => {
      cards.forEach((c) => {
        const v = c.querySelector<HTMLVideoElement>(".testi-card__video");
        if (v && c !== target) v.pause();
        c.classList.remove("testi-card--active");
      });
      const v = target.querySelector<HTMLVideoElement>(".testi-card__video");
      if (!v) return;
      v.muted = !soundEnabled;
      v.play().catch(() => {});
      target.classList.add("testi-card--active");
    };

    const pauseCard = (target: HTMLElement) => {
      const v = target.querySelector<HTMLVideoElement>(".testi-card__video");
      v?.pause();
      target.classList.remove("testi-card--active");
    };

    const isMobile = window.matchMedia("(max-width: 768px)");

    const cleanup: Array<() => void> = [];
    cards.forEach((card) => {
      let tapped = false;

      const onEnter = () => playCard(card);
      const onLeave = () => {
        if (!card.classList.contains("testi-card--center") || isMobile.matches) {
          pauseCard(card);
        }
      };
      const onTouchEnd = (e: TouchEvent) => {
        if (!isMobile.matches) return;
        tapped = true;
        e.preventDefault();
        if (card.classList.contains("testi-card--active")) pauseCard(card);
        else playCard(card);
      };
      const onClick = () => {
        if (!isMobile.matches) return;
        if (tapped) {
          tapped = false;
          return;
        }
        if (card.classList.contains("testi-card--active")) pauseCard(card);
        else playCard(card);
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("touchend", onTouchEnd, { passive: false });
      card.addEventListener("click", onClick);

      cleanup.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("touchend", onTouchEnd);
        card.removeEventListener("click", onClick);
      });
    });

    return () => cleanup.forEach((c) => c());
  }, [soundEnabled]);

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="testi-topbar" />
      <div className="section-wrap">
        <div className="testi-header">
          <span className="section-label reveal">Alumni Voices</span>
          <h2 className="section-heading reveal" data-delay="1">
            What Our Graduates Say
          </h2>
          <p className="section-sub reveal" data-delay="2">
            Hover over the deck to explore their stories.
          </p>
        </div>

        <div className="testi-fan">
          {CARDS.map((c) => (
            <div
              key={c.name}
              className={`testi-card${c.center ? " testi-card--center testi-card--active" : ""}`}
              style={
                {
                  "--rotate": `${c.rotate}deg`,
                  "--ty": `${c.ty}px`,
                } as React.CSSProperties
              }
            >
              <video
                className="testi-card__video"
                src={c.src}
                muted
                loop
                playsInline
                preload="metadata"
                autoPlay={c.center}
              />
              <div className="testi-card__overlay" />
              <div className="testi-card-label">
                <span className="testi-card-name">{c.name}</span>
                <span className="testi-card-role">{c.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-sound-bar">
          {mounted && (
          <button
            className={`testi-mute${soundEnabled ? " is-unmuted" : ""}`}
            id="testiMute"
            aria-label="Toggle testimonial sound"
            onClick={toggleSound}
          >
            <svg
              className="testi-mute-icon testi-mute-icon--on"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            <svg
              className="testi-mute-icon testi-mute-icon--off"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
            <span className="testi-mute-label">Sound</span>
          </button>
          )}
        </div>
      </div>
    </section>
  );
}
