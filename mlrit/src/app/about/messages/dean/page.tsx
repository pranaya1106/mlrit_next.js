"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DeanMessagePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <section className="about-hero">
          <div className="about-hero__inner">
            <nav className="about-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="about-hero__breadcrumb-sep" aria-hidden="true">›</span>
              <span>About</span>
              <span className="about-hero__breadcrumb-sep" aria-hidden="true">›</span>
              <span>Messages</span>
              <span className="about-hero__breadcrumb-sep" aria-hidden="true">›</span>
              <span>Dean</span>
            </nav>
            <div className="about-hero__eyebrow">From the Dean of Academics</div>
            <h1 className="about-hero__title">
              Dean&apos;s <em>Message</em>
            </h1>
            <p className="about-hero__subtitle">
              A word from the academic leadership shaping curriculum and faculty excellence at MLRIT.
            </p>
          </div>
        </section>

        {/* Sub-nav */}
        <nav className="about-subnav" aria-label="About section navigation">
          <div className="about-subnav__inner">
            <Link href="/about/vision-mission/introduction" className="about-subnav__link">Introduction</Link>
            <Link href="/about/vision-mission/vision-mission" className="about-subnav__link">Vision &amp; Mission</Link>
            <Link href="/about/legacy" className="about-subnav__link">Legacy</Link>
            <Link href="/about/rankings-awards" className="about-subnav__link">Rankings &amp; Awards</Link>
            <Link href="/about/brochure" className="about-subnav__link">Brochure</Link>
            <Link href="/about/messages/principal" className="about-subnav__link active">Messages</Link>
          </div>
        </nav>

        {/* Message card */}
        <div className="msg-page-wrap">

          {/* toggle strip */}
          <div className="msg-page-tabs about-reveal">
            <Link href="/about/messages/principal" className="msg-page-tab">Principal</Link>
            <Link href="/about/messages/dean" className="msg-page-tab active">Dean of Academics</Link>
          </div>

          {/* card */}
          <div className="msg-page-card about-reveal" data-delay="1">
            <div className="msg-page-card__left">
              <div className="msg-page-card__avatar" style={{ background: "linear-gradient(135deg, rgba(232,80,10,0.12), rgba(232,80,10,0.05))", borderColor: "rgba(232,80,10,0.2)", color: "#E8500A" }} aria-hidden="true">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <div className="msg-page-card__identity">
                <div className="msg-page-card__role" style={{ color: "#E8500A" }}>Dean of Academics</div>
                <div className="msg-page-card__name">Dr. Anitha Sheela Rani</div>
                <div className="msg-page-card__since">MLR Institute of Technology</div>
              </div>
              <button
                className="msg-page-card__read-btn"
                style={{ background: "#E8500A" }}
                onClick={() => setModalOpen(true)}
                aria-label="Read full message from Dean Dr. Anitha Sheela Rani"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Read Full Message
              </button>
            </div>

            <div className="msg-page-card__right">
              <div className="msg-page-card__quote-mark" style={{ color: "rgba(232,80,10,0.12)" }} aria-hidden="true">&ldquo;</div>
              <blockquote className="msg-page-card__excerpt">
                A curriculum that does not evolve is a curriculum that fails. At MLRIT, we build academic programmes not just for the present industry — but for the industry our students will shape in the future.
              </blockquote>
              <div className="msg-page-card__preview-paras">
                <p>Dear Students and Faculty,</p>
                <p>
                  Academic excellence is something we build together — not through policies or rankings alone, but through the daily commitment of every faculty member who steps into a classroom and every student who chooses to engage deeply with what they learn.
                </p>
                <p>
                  As Dean of Academics, my role is to ensure that MLRIT's academic environment remains challenging, relevant, and responsive. The programmes we design are shaped by the realities of the industry, the needs of research, and the aspirations of the students who trust us with their education.
                </p>
              </div>
              <button
                className="msg-page-card__pop-btn"
                style={{ color: "#E8500A", borderColor: "rgba(232,80,10,0.25)" }}
                onClick={() => setModalOpen(true)}
                aria-label="Open full message"
              >
                Continue Reading
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Modal */}
        {modalOpen && (
          <div
            className="msg-modal-overlay"
            onClick={() => setModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Full message from Dean Dr. Anitha Sheela Rani"
          >
            <div className="msg-modal" onClick={(e) => e.stopPropagation()}>
              <button className="msg-modal__close" onClick={() => setModalOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div className="msg-modal__top" style={{ background: "linear-gradient(135deg, #E8500A 0%, #a33600 100%)" }}>
                <div className="msg-modal__avatar" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <div className="msg-modal__identity">
                  <div className="msg-modal__role">Dean of Academics</div>
                  <div className="msg-modal__name">Dr. Anitha Sheela Rani</div>
                </div>
              </div>
              <div className="msg-modal__body">
                <div className="msg-modal__quote-mark" aria-hidden="true">&ldquo;</div>
                {deanMessage.map((para, i) => (
                  <p key={i} className="msg-modal__para">{para}</p>
                ))}
                <div className="msg-modal__sig">
                  — Dr. Anitha Sheela Rani
                  <span>Dean of Academics, MLRIT</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

const deanMessage = [
  "Dear Students and Faculty,",
  "Academic excellence is something we build together — not through policies or rankings alone, but through the daily commitment of every faculty member who steps into a classroom and every student who chooses to engage deeply with what they learn.",
  "As Dean of Academics, my role is to ensure that MLRIT's academic environment remains challenging, relevant, and responsive. The programmes we design are shaped by the realities of industry, the needs of research, and the aspirations of the students who trust us with their education.",
  "A curriculum that does not evolve is a curriculum that fails. At MLRIT, we build academic programmes not just for the present industry — but for the industry our students will shape in the future. Our autonomous status has been a powerful enabler of this: allowing us to move quickly, integrate emerging fields, and maintain a curriculum that stays genuinely current.",
  "To our students: engage with your coursework not as a requirement but as an opportunity. The concepts you encounter in your four years here will be the foundation of every professional decision you make.",
  "To our faculty: your expertise and dedication are what make this institution worth attending. I am grateful for your continued commitment to teaching, mentorship, and research.",
  "The academic culture at MLRIT is one we build every single day — and I am proud of how far we have come.",
];
