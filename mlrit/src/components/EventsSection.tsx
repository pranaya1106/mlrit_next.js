"use client";

import { useEffect, useRef, useState } from "react";

type EventItem = {
  type?: "video" | "embed";
  video?: string;
  embed?: string;
  logo: string;
  tag: string;
  title: string;
  desc: string;
};

const EVENTS: EventItem[] = [
  {
    type: "video",
    video:
      "/events-bg.mp4",
    logo: "/assets/logo.svg",
    tag: "Entrepreneurship Summit · 2024",
    title: "The Equinox<br>E-Summit 2K24",
    desc: "MLRIT's flagship annual summit bringing together entrepreneurs, investors, and innovators to inspire the next generation of leaders.",
  },
  {
    type: "video",
    video: "/inno.mp4",
    logo: "/assets/main logo.svg",
    tag: "Technical & Cultural Fest · 2025",
    title: "Zignasa<br>2025",
    desc: "MLRIT's grand annual extravaganza featuring technical competitions, hackathons, cultural performances, and celebrity nights.",
  },
];

export default function EventsSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const embedRef = useRef<HTMLIFrameElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const event = EVENTS[current];

  const goTo = (idx: number) => {
    const next = ((idx % EVENTS.length) + EVENTS.length) % EVENTS.length;
    if (next === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(next);
      setFading(false);
    }, 400);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
    if (!section || !cursor) return;

    let cursorX = 0,
      cursorY = 0,
      hasMoved = false,
      raf = 0;

    const moveCursor = () => {
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      raf = requestAnimationFrame(moveCursor);
    };

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      cursorX = e.clientX - rect.left;
      cursorY = e.clientY - rect.top;
      if (!hasMoved) {
        hasMoved = true;
        section.classList.add("cursor-visible");
        raf = requestAnimationFrame(moveCursor);
      }
    };

    const onLeave = () => {
      hasMoved = false;
      section.classList.remove("cursor-visible", "cursor-shrink");
      cancelAnimationFrame(raf);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);

    const interactive = section.querySelectorAll<HTMLElement>(
      'button, a, [role="button"]'
    );
    const enter = () => section.classList.add("cursor-shrink");
    const exit = () => section.classList.remove("cursor-shrink");
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", exit);
    });

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", exit);
      });
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0 }
    );
    io.observe(section);
    section.classList.add("is-muted");
    return () => io.disconnect();
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    video.muted = !video.muted;
    section.classList.toggle("is-muted", video.muted);
  };

  const isEmbed = event.type === "embed";

  return (
    <section className="event-showcase" id="events" ref={sectionRef}>
      <video
        className="es__video"
        id="esVideo"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ display: isEmbed ? "none" : "block" }}
      >
        <source
          src={EVENTS[0].video!}
          type="video/mp4"
          key={event.video ?? "no-video"}
        />
      </video>

      <iframe
        className="es__embed"
        id="esEmbed"
        ref={embedRef}
        allowFullScreen
        frameBorder="0"
        scrolling="no"
        src={isEmbed ? event.embed : undefined}
        style={{ display: isEmbed ? "block" : "none" }}
      />

      <div className="es__overlay" />

      <div className="es__cursor" id="esCursor" ref={cursorRef} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <span>PLAY</span>
      </div>

      <div className="es__info" id="esInfo">
        <div className={`es__info-inner${fading ? " es-fading" : ""}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="es__info-logo"
            id="esInfoLogo"
            src={event.logo}
            alt="Event logo"
          />
          <p className="es__info-tag" id="esInfoTag">
            {event.tag}
          </p>
          <h2
            className="es__info-title"
            id="esInfoTitle"
            dangerouslySetInnerHTML={{ __html: event.title }}
          />
          <p className="es__info-desc" id="esInfoDesc">
            {event.desc}
          </p>
          <a href="#" className="btn btn--white es__info-cta">
            <span className="btn__chevron">
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
            <span className="btn__label">Explore Event</span>
          </a>
        </div>
      </div>

      <button
        className="es__next"
        id="esNext"
        aria-label="Next event"
        onClick={() => goTo(current + 1)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7 4L13 10L7 16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="es__bottom-bar">
        <div className="es__dots" id="esDots">
          {EVENTS.map((_, i) => (
            <button
              key={i}
              className={`es__dot${i === current ? " is-active" : ""}`}
              data-index={i}
              aria-label={`Event ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          className="es__mute"
          id="esMute"
          aria-label="Toggle mute"
          onClick={toggleMute}
        >
          <svg
            className="es__mute-icon es__mute-icon--on"
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
            className="es__mute-icon es__mute-icon--off"
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
          <span className="es__mute-label">Sound</span>
        </button>
      </div>
    </section>
  );
}
