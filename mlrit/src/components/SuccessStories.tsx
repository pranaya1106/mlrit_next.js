"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Story = {
  img: string;
  alt: string;
  tag: string;
  name: string;
  role: string;
  company: string;
};

const STORIES: Story[] = [
  {
    img: "https://i.ibb.co/MxvbKjRH/8.jpg",
    alt: "Microsoft Internship — 51 LPA",
    tag: "Placement · Batch 2026",
    name: "Microsoft Internship",
    role: "Sai Loukhya Chundi and Kakumanu Sailatha",
    company: "Microsoft · 51 LPA · ₹1.25 Lakh/month Stipend",
  },
  {
    img: "https://i.ibb.co/670CTVrD/6.png",
    alt: "Mrs. Vijay Keerthika — Wipro Certified Faculty",
    tag: "Faculty · Certification",
    name: "Mrs. Vijay Keerthika",
    role: "MLRIT CSE-AIML Faculty",
    company: "Wipro TalentNext · Java Full Stack · 87%",
  },
  {
    img: "https://i.ibb.co/99JB52L2/4.jpg",
    alt: "MLRIT Football Team — 1st Place",
    tag: "Sports · Football",
    name: "MLRIT Football Team",
    role: "Sports Tournament · March 21–22",
    company: "1st Place · St. Peter's Engineering College",
  },
  {
    img: "https://i.ibb.co/YFgQdGgx/1.jpg",
    alt: "19 Students Placed at Eidiko",
    tag: "Placement · Batch 2025",
    name: "19 Students at Eidiko",
    role: "Right Education, Bright Placements",
    company: "Eidiko Systems Integrators · 4.70 LPA",
  },
  {
    img: "https://i.ibb.co/S4L7YCQY/2.jpg",
    alt: "Careers360 AAAA Rating",
    tag: "Recognition · Rating",
    name: "Careers360 AAAA",
    role: "Four-A Accredited Institution",
    company: "Careers360 · Top Engineering College",
  },
  {
    img: "https://i.ibb.co/Xf6Vbj44/5.jpg",
    alt: "3 Students Placed at Mehta Hitech",
    tag: "Placements · 2025",
    name: "Mehta Hitech Industries",
    role: "3 Students · Batch 2025",
    company: "Bright Placements · Right Education",
  },
];

const INTERVAL = 2000;

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((next: number) => {
    setCurrent((prev) => {
      const nextIdx = ((next % STORIES.length) + STORIES.length) % STORIES.length;
      if (nextIdx === prev) return prev;
      setLeaving(prev);
      setTimeout(() => setLeaving(null), 700);
      return nextIdx;
    });
  }, []);

  const start = useCallback(() => {
    stop();
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % STORIES.length),
      INTERVAL
    );
  }, []);
  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    start();
    return stop;
  }, [start]);

  const reset = () => {
    stop();
    start();
  };

  return (
    <section className="ss-section" id="ssSection">
      <div className="ss-container">
        <div className="ss-header">
          <span className="ss-eyebrow">Wall of Achievements</span>
          <h2 className="ss-heading">
            Success<br />
            <em>Stories.</em>
          </h2>
          <p className="ss-desc">
            Students, faculty and athletes — every banner tells a story of
            excellence.
          </p>
        </div>

        <div
          className="ss-carousel"
          id="ssCarousel"
          aria-label="Success Stories Carousel"
          onMouseEnter={stop}
          onMouseLeave={start}
        >
          <div className="ss-track" id="ssTrack">
            {STORIES.map((s, i) => {
              const cls = [
                "ss-card",
                i === current ? "is-active" : "",
                i === leaving ? "is-leaving" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <div
                  key={s.name + i}
                  className={cls}
                  role="group"
                  aria-label={`Slide ${i + 1} of ${STORIES.length}`}
                >
                  <div className="ss-card__img-wrap">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <div className="ss-card__info">
                      <span className="ss-card__tag">{s.tag}</span>
                      <h3 className="ss-card__name">{s.name}</h3>
                      <p className="ss-card__role">{s.role}</p>
                      <p className="ss-card__company">{s.company}</p>
                    </div>
                  </div>
                  <div className="ss-card__name-badge">
                    <span className="ss-card__tag">{s.tag}</span>
                    <h3 className="ss-card__name">{s.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className="ss-arrow ss-arrow--prev"
            id="ssPrev"
            aria-label="Previous slide"
            onClick={() => {
              goTo(current - 1);
              reset();
            }}
          >
            ←
          </button>
          <button
            className="ss-arrow ss-arrow--next"
            id="ssNext"
            aria-label="Next slide"
            onClick={() => {
              goTo(current + 1);
              reset();
            }}
          >
            →
          </button>

          <div className="ss-dots" id="ssDots" aria-hidden="true">
            {STORIES.map((_, i) => (
              <button
                key={i}
                className={`ss-dot${i === current ? " ss-dot--active" : ""}`}
                data-idx={i}
                onClick={() => {
                  goTo(i);
                  reset();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
