"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  visual: React.ReactNode;
}

const milestones: Milestone[] = [
  {
    year: "2005",
    title: "Founding of MLRIT",
    desc: "MLR Institute of Technology established in Dundigal, Hyderabad — a vision to deliver quality engineering education.",
    visual: (
      <div className="stl-visual stl-visual--logo">
        <Image src="/mlrit-logo-main.png" alt="MLRIT Logo" width={120} height={120} style={{ objectFit: "contain", maxHeight: 120 }} />
      </div>
    ),
  },
  {
    year: "2006",
    title: "JNTUH Affiliation",
    desc: "Formally affiliated to Jawaharlal Nehru Technological University Hyderabad, launching structured B.Tech programmes.",
    visual: (
      <div className="stl-visual stl-visual--badge">
        <svg viewBox="0 0 80 80" fill="none" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" stroke="rgba(31,107,36,0.35)" strokeWidth="2" />
          <circle cx="40" cy="40" r="28" stroke="rgba(31,107,36,0.2)" strokeWidth="1" />
          <path d="M26 40 L34 48 L54 28" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="40" y="66" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">JNTUH</text>
        </svg>
      </div>
    ),
  },
  {
    year: "2009",
    title: "AICTE Approval",
    desc: "Received AICTE approval, enabling expansion of academic offerings and state-of-the-art infrastructure.",
    visual: (
      <div className="stl-visual stl-visual--nirf">
        <Image src="/nirf/aicte.svg" alt="AICTE" width={100} height={100} style={{ objectFit: "contain", maxHeight: 100 }} />
      </div>
    ),
  },
  {
    year: "2011",
    title: "First Graduation",
    desc: "MLRIT's inaugural batch of B.Tech graduates enters the workforce — the first milestone in producing industry-ready engineers.",
    visual: (
      <div className="stl-visual stl-visual--badge">
        <svg viewBox="0 0 80 80" fill="none" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" stroke="rgba(31,107,36,0.35)" strokeWidth="2" />
          <path d="M20 44 L40 28 L60 44" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="28" y="44" width="24" height="16" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <path d="M48 28 L48 36" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" />
          <circle cx="48" cy="38" r="3" fill="rgba(31,107,36,0.5)" />
          <text x="40" y="72" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="sans-serif">CLASS OF 2011</text>
        </svg>
      </div>
    ),
  },
  {
    year: "2013",
    title: "Sports Infrastructure",
    desc: "Commissioning of dedicated sports facilities, embedding athletics as a core pillar of the MLRIT experience.",
    visual: (
      <div className="stl-visual stl-visual--video">
        <video
          src="/sports.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
          aria-label="MLRIT Sports"
        />
      </div>
    ),
  },
  {
    year: "2015",
    title: "Autonomous Status — UGC",
    desc: "Granted autonomous status by the UGC, allowing MLRIT to design its own curriculum and conduct independent examinations.",
    visual: (
      <div className="stl-visual stl-visual--badge">
        <svg viewBox="0 0 80 80" fill="none" width="80" height="80" aria-hidden="true">
          <circle cx="40" cy="40" r="36" stroke="rgba(31,107,36,0.35)" strokeWidth="2" />
          <path d="M30 30 L50 30 L50 52 L40 58 L30 52 Z" stroke="#4caf50" strokeWidth="2" strokeLinejoin="round" />
          <path d="M35 40 L38 44 L46 36" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="40" y="72" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="sans-serif">UGC</text>
        </svg>
      </div>
    ),
  },
  {
    year: "2018",
    title: "NBA Accreditation",
    desc: "Multiple B.Tech programmes received NBA accreditation, benchmarking engineering education quality nationally.",
    visual: (
      <div className="stl-visual stl-visual--nirf">
        <Image src="/nirf/nba.svg" alt="NBA Accreditation" width={100} height={100} style={{ objectFit: "contain", maxHeight: 100 }} />
      </div>
    ),
  },
  {
    year: "2021",
    title: "NAAC Recognition",
    desc: "Accredited by NAAC — a landmark recognition of institutional quality across teaching, research, and governance.",
    visual: (
      <div className="stl-visual stl-visual--nirf">
        <Image src="/nirf/naac.svg" alt="NAAC" width={100} height={100} style={{ objectFit: "contain", maxHeight: 100 }} />
      </div>
    ),
  },
  {
    year: "2023",
    title: "AI, ML & Aerospace",
    desc: "Launch of B.Tech programmes in AI & Machine Learning, Data Science, and Aeronautical Engineering.",
    visual: (
      <div className="stl-visual stl-visual--video">
        <video
          src="/inno.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }}
          aria-label="MLRIT Innovation"
        />
      </div>
    ),
  },
  {
    year: "2025",
    title: "20 Years of Excellence",
    desc: "MLRIT celebrates two decades — 10,000+ alumni, 620+ placements annually, and a campus that continues to grow.",
    visual: (
      <div className="stl-visual stl-visual--logo">
        <Image src="/mlrit-logo-main.png" alt="MLRIT 20 Years" width={120} height={120} style={{ objectFit: "contain", maxHeight: 120 }} />
        <div className="stl-years-badge">20<span>Years</span></div>
      </div>
    ),
  },
];

export default function ScrollTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const isMobile = () => window.innerWidth <= 768;

    function update() {
      const s = sectionRef.current;
      const t = trackRef.current;
      if (!s || !t) return;

      if (isMobile()) {
        t.style.transform = "";
        return;
      }
      const rect = s.getBoundingClientRect();
      const sectionH = s.offsetHeight;
      const viewH = window.innerHeight;
      const trackW = t.scrollWidth - window.innerWidth;

      const scrolled = -rect.top;
      const total = sectionH - viewH;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      const shift = progress * trackW;

      t.style.transform = `translateX(-${shift}px)`;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress * 100}%`;
      }

      const items = t.querySelectorAll<HTMLElement>(".stl-item");
      items.forEach((item, i) => {
        const threshold = i / (items.length - 1);
        if (progress >= threshold - 0.05) {
          item.classList.add("stl-active");
        } else {
          item.classList.remove("stl-active");
        }
      });
    }

    function onScroll() {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial run

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="stl-section" ref={sectionRef} aria-label="MLRIT institutional timeline">
      <div className="stl-sticky">
        <div className="stl-header">
          <div className="section-label stl-label">Institutional Timeline</div>
          <h2 className="legacy-section-title stl-title">Milestones That Shaped MLRIT</h2>
        </div>
        <div className="stl-track" ref={trackRef}>
          {/* Horizontal connector line */}
          <div className="stl-connector" aria-hidden="true" />

          {milestones.map((item, i) => (
            <div key={item.year} className={`stl-item${i === 0 ? " stl-active" : ""}`}>
              <div className="stl-item__visual">{item.visual}</div>
              <div className="stl-item__dot" aria-hidden="true">
                <div className="stl-item__dot-inner" />
              </div>
              <div className="stl-item__year">{item.year}</div>
              <div className="stl-item__content">
                <div className="stl-item__title">{item.title}</div>
                <div className="stl-item__desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll progress bar */}
        <div className="stl-progress-wrap" aria-hidden="true">
          <div className="stl-progress-bar" ref={progressRef} />
        </div>

        {/* Mobile hint */}
        <div className="stl-scroll-hint" aria-hidden="true">
          <span>Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
