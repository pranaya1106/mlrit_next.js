import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Brochure | MLR Institute of Technology",
  description:
    "Download the official MLRIT institutional brochure — programmes, facilities, admissions, placements, research, and campus life.",
};

export default function BrochurePage() {
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
              <span>Brochure</span>
            </nav>
            <div className="about-hero__eyebrow">Official Brochure</div>
            <h1 className="about-hero__title">
              Everything about MLRIT,{" "}
              <em>in one document</em>
            </h1>
            <p className="about-hero__subtitle">
              Programmes, campus life, research, sports, facilities, admissions — the complete
              MLRIT story, ready to download.
            </p>
          </div>
        </section>

        {/* Sub-nav */}
        <nav className="about-subnav" aria-label="About section navigation">
          <div className="about-subnav__inner">
            <Link href="/about/vision-mission/introduction" className="about-subnav__link">
              Introduction
            </Link>
            <Link href="/about/vision-mission/vision-mission" className="about-subnav__link">
              Vision &amp; Mission
            </Link>
            <Link href="/about/legacy" className="about-subnav__link">
              Legacy
            </Link>
            <Link href="/about/rankings-awards" className="about-subnav__link">
              Rankings &amp; Awards
            </Link>
            <Link href="/about/brochure" className="about-subnav__link active">
              Brochure
            </Link>
          </div>
        </nav>

        <div className="brochure-page">
          <div className="brochure-page__inner">

            {/* Brochure preview card */}
            <div className="brochure-preview about-reveal">
              <div className="brochure-preview__cover" aria-hidden="true">
                <div className="brochure-preview__cover-text">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/mlrit-logo-main.png"
                    alt=""
                    style={{ height: "60px", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9, marginBottom: "16px" }}
                  />
                  <h2>MLR Institute of Technology</h2>
                  <p>Institutional Brochure 2025–26</p>
                </div>
              </div>
              <div className="brochure-preview__meta">
                <div className="brochure-preview__meta-left">
                  <div className="brochure-preview__title">MLRIT Institutional Brochure 2025–26</div>
                  <div className="brochure-preview__detail">
                    PDF · 10.5 MB · English
                  </div>
                </div>
                <a
                  href="/BROCHURE.pdf"
                  download="MLRIT-Brochure.pdf"
                  className="brochure-download-btn"
                  aria-label="Download MLRIT Institutional Brochure PDF"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>

            {/* What's inside */}
            <div className="about-reveal" data-delay="1" style={{ marginBottom: "12px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>What&apos;s inside</div>
            </div>

            <div className="brochure-features about-reveal" data-delay="2">
              {brochureFeatures.map((f, i) => (
                <div key={f.title} className="brochure-feature" data-delay={String(i + 1)}>
                  <div className="brochure-feature__icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: f.icon }} />
                  </div>
                  <div>
                    <div className="brochure-feature__title">{f.title}</div>
                    <div className="brochure-feature__desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Also available */}
            <div className="about-reveal" data-delay="1" style={{ marginTop: "48px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>Also available</div>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://mlrit.ac.in/admissions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-green"
                >
                  Apply Now
                </a>
                <Link href="/departments" className="btn btn-ghost">
                  Explore Programmes
                </Link>
                <Link href="/about/rankings-awards" className="btn btn-ghost">
                  Rankings &amp; Awards
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

const brochureFeatures = [
  {
    title: "Academic Programmes",
    desc: "Complete list of B.Tech, M.Tech, and MBA programmes with curriculum highlights and specialisations.",
    icon: `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,
  },
  {
    title: "Campus & Facilities",
    desc: "Hostels, sports grounds, laboratories, cafeteria, and all campus infrastructure detailed with specifications.",
    icon: `<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>`,
  },
  {
    title: "Placements & Careers",
    desc: "Placement statistics, top recruiters, salary trends, and career development programmes offered at MLRIT.",
    icon: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
  },
  {
    title: "Research & Innovation",
    desc: "Research centres, funded projects, patents, publications, and the startup ecosystem at MLRIT.",
    icon: `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>`,
  },
  {
    title: "Admissions & Scholarships",
    desc: "Eligibility criteria, application process, fee structure, and available scholarship programmes.",
    icon: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
  },
  {
    title: "Sports & Student Life",
    desc: "Sports scholarships, clubs, annual events, student organisations, and life at the MLRIT campus.",
    icon: `<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>`,
  },
];
