"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTimeline from "@/components/ScrollTimeline";

export default function LegacyPage() {
  const [openMsg, setOpenMsg] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero__inner">
            <nav className="about-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="about-hero__breadcrumb-sep" aria-hidden="true">›</span>
              <span>About</span>
              <span className="about-hero__breadcrumb-sep" aria-hidden="true">›</span>
              <span>Legacy</span>
            </nav>
            <div className="about-hero__eyebrow">Two Decades</div>
            <h1 className="about-hero__title">
              The MLRIT <em>Legacy</em>
            </h1>
            <p className="about-hero__subtitle">
              From a single campus in Dundigal to a nationally recognised institution — a
              timeline of milestones and the leadership that built them.
            </p>
          </div>
        </section>

        {/* Sub-nav */}
        <nav className="about-subnav" aria-label="About section navigation">
          <div className="about-subnav__inner">
            <Link href="/about/vision-mission/introduction" className="about-subnav__link">Introduction</Link>
            <Link href="/about/vision-mission/vision-mission" className="about-subnav__link">Vision &amp; Mission</Link>
            <Link href="/about/legacy" className="about-subnav__link active">Legacy</Link>
            <Link href="/about/rankings-awards" className="about-subnav__link">Rankings &amp; Awards</Link>
            <Link href="/about/brochure" className="about-subnav__link">Brochure</Link>
            <Link href="/about/messages/principal" className="about-subnav__link">Messages</Link>
          </div>
        </nav>

        {/* ── HORIZONTAL SCROLL TIMELINE ── */}
        <ScrollTimeline />

        {/* ── LEADER MESSAGES — fully inline ── */}
        <section className="ldr-section">
          <div className="ldr-inner">

            <div className="vtl-head">
              <div className="section-label">Founding Leadership</div>
              <h2 className="legacy-section-title">Messages from Our Leaders</h2>
            </div>

            <div className="ldr-grid">
              {leaderMessages.map((leader, i) => (
                <div key={leader.name} className="ldr-card">
                  <div className="ldr-card__accent" style={{ background: leader.accent }} />

                  <div className="ldr-card__header">
                    <div className="ldr-card__avatar" style={{ borderColor: leader.avatarBorder, color: leader.avatarColor }} aria-hidden="true">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                        <circle cx="12" cy="8" r="4"/>
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                      </svg>
                    </div>
                    <div>
                      <div className="ldr-card__role" style={{ color: leader.avatarColor }}>{leader.role}</div>
                      <div className="ldr-card__name">{leader.name}</div>
                    </div>
                  </div>

                  <div className="ldr-card__quote">&ldquo;{leader.preview}&rdquo;</div>

                  <div className={`ldr-card__body${openMsg === i ? " ldr-card__body--open" : ""}`}>
                    {leader.message.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                    <div className="ldr-card__sig">— {leader.name}, {leader.role}</div>
                  </div>

                  <button
                    className="ldr-card__toggle"
                    onClick={() => setOpenMsg(openMsg === i ? null : i)}
                    aria-expanded={openMsg === i}
                    style={{ color: leader.avatarColor, borderColor: leader.avatarBorder }}
                  >
                    {openMsg === i ? "Close Message" : "Read Full Message"}
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                      aria-hidden="true"
                      style={{ transform: openMsg === i ? "rotate(90deg)" : "none", transition: "transform 0.3s" }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

const leaderMessages = [
  {
    role: "Founder & Chairman",
    name: "Sri Marri Laxman Reddy",
    accent: "linear-gradient(90deg, #1F6B24, #4caf50)",
    avatarColor: "#1F6B24",
    avatarBorder: "rgba(31,107,36,0.25)",
    preview: "Education is not merely the transfer of knowledge — it is the shaping of character, the building of confidence, and the preparation of individuals who can contribute meaningfully to society.",
    message: [
      "When I founded MLR Institute of Technology in 2005, it was with a single belief: that every student deserves access to education that goes beyond examination scores — an education that values curiosity, rewards effort, and builds resilience.",
      "Two decades later, seeing thousands of MLRIT graduates across the world — leading companies, building startups, serving communities — I am reminded that the mission we set out with was the right one.",
      "To every student here: your time at MLRIT is not simply a step toward a degree. It is the foundation of a life built with purpose. Make the most of every opportunity this campus offers — and carry with you the values of integrity, discipline, and service that MLRIT stands for.",
    ],
  },
  {
    role: "Treasurer",
    name: "Sri Marri Rajasekhar Reddy",
    accent: "linear-gradient(90deg, #b85c00, #e8a000)",
    avatarColor: "#b85c00",
    avatarBorder: "rgba(184,92,0,0.25)",
    preview: "Sustainable institutions are not built on ambition alone — they are built on integrity, transparency, and a commitment to every stakeholder who places their trust in the institution.",
    message: [
      "From the very beginning, our approach to building MLRIT has been grounded in responsible governance. Every investment made here — in infrastructure, faculty, research, and student welfare — has been made with a long-term vision in mind.",
      "We believe that when an institution manages its resources with discipline and accountability, the benefits flow directly to the students and faculty who give the institution its life.",
      "MLRIT stands today as proof that doing things right — not just fast — is what creates lasting impact. Our continued investment in facilities, scholarships, and research is a commitment we intend to honour for generations to come.",
    ],
  },
];
