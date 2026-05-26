"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrincipalMessagePage() {
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
              <span>Principal</span>
            </nav>
            <div className="about-hero__eyebrow">From the Principal</div>
            <h1 className="about-hero__title">
              Principal&apos;s <em>Message</em>
            </h1>
            <p className="about-hero__subtitle">
              A word from the academic and administrative head of MLR Institute of Technology.
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
            <Link href="/about/messages/principal" className="msg-page-tab active">Principal</Link>
            <Link href="/about/messages/dean" className="msg-page-tab">Dean of Academics</Link>
          </div>

          {/* card */}
          <div className="msg-page-card about-reveal" data-delay="1">
            <div className="msg-page-card__left">
              <div className="msg-page-card__avatar" aria-hidden="true">
                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <div className="msg-page-card__identity">
                <div className="msg-page-card__role">Principal</div>
                <div className="msg-page-card__name">Dr. V. Srinivas Rao</div>
                <div className="msg-page-card__since">MLR Institute of Technology</div>
              </div>
              <button
                className="msg-page-card__read-btn"
                onClick={() => setModalOpen(true)}
                aria-label="Read full message from Principal Dr. V. Srinivas Rao"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Read Full Message
              </button>
            </div>

            <div className="msg-page-card__right">
              <div className="msg-page-card__quote-mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="msg-page-card__excerpt">
                Excellence at MLRIT is not confined to ranks or placements — it is reflected in the kind of person a student becomes during their time here. We build engineers who think, question, and lead.
              </blockquote>
              <div className="msg-page-card__preview-paras">
                <p>Dear Students, Faculty, and Well-Wishers,</p>
                <p>
                  It gives me immense pride to lead an institution that has consistently placed students at the heart of everything it does. At MLRIT, our purpose has always been clear: to create an environment where learning is not passive, where questioning is encouraged, and where every student is pushed to discover what they are truly capable of.
                </p>
                <p>
                  Over the years, we have built strong academic foundations across engineering, technology, and management. But what makes MLRIT distinctive is not merely our curriculum — it is the culture of determination, discipline, and care that pervades this campus every day.
                </p>
              </div>
              <button
                className="msg-page-card__pop-btn"
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
            aria-label="Full message from Principal Dr. V. Srinivas Rao"
          >
            <div className="msg-modal" onClick={(e) => e.stopPropagation()}>
              <button className="msg-modal__close" onClick={() => setModalOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <div className="msg-modal__top" style={{ background: "linear-gradient(135deg, #1F6B24 0%, #0e3d12 100%)" }}>
                <div className="msg-modal__avatar" aria-hidden="true">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                  </svg>
                </div>
                <div className="msg-modal__identity">
                  <div className="msg-modal__role">Principal</div>
                  <div className="msg-modal__name">Dr. V. Srinivas Rao</div>
                </div>
              </div>
              <div className="msg-modal__body">
                <div className="msg-modal__quote-mark" aria-hidden="true">&ldquo;</div>
                {principalMessage.map((para, i) => (
                  <p key={i} className="msg-modal__para">{para}</p>
                ))}
                <div className="msg-modal__sig">
                  — Dr. V. Srinivas Rao
                  <span>Principal, MLRIT</span>
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

const principalMessage = [
  "Dear Students, Faculty, and Well-Wishers,",
  "It gives me immense pride to lead an institution that has consistently placed students at the heart of everything it does. At MLRIT, our purpose has always been clear: to create an environment where learning is not passive, where questioning is encouraged, and where every student is pushed to discover what they are truly capable of.",
  "Over the years, we have built strong academic foundations across engineering, technology, and management. But what makes MLRIT distinctive is not merely our curriculum — it is the culture of determination, discipline, and care that pervades this campus every day.",
  "Excellence at MLRIT is not confined to ranks or placements. It is reflected in the kind of person a student becomes during their time here. We build engineers who think, question, lead — and who carry with them a sense of responsibility toward the communities they will one day serve.",
  "To our students: you are the reason this institution exists. Make the most of every opportunity this campus offers — academic, extracurricular, and personal. The habits you build here will define the professional you become.",
  "To our faculty: your commitment to teaching and mentorship is what transforms potential into achievement. I am proud to work alongside you.",
  "MLRIT's journey is far from over. The best chapters are still ahead.",
];
