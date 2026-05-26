import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Academics — MLR Institute of Technology",
  description:
    "Outcome-based, autonomous engineering education at MLRIT. UG / PG programmes across 10 branches, research-led curriculum, JNTUH-affiliated, AICTE-approved, NBA accredited.",
};

const FRAMEWORKS = [
  {
    tag: "OBE",
    title: "Outcome-Based Education",
    body: "Every course maps to defined Course Outcomes (COs), Programme Outcomes (POs) and Programme Educational Objectives (PEOs) — measured at every internal and external assessment.",
  },
  {
    tag: "Autonomy",
    title: "Autonomous Regulations",
    body: "UGC-granted autonomous status. MLRIT designs its own regulations (R22, R25), reviews syllabi each academic year, and assesses students through internal evaluations.",
  },
  {
    tag: "Industry",
    title: "Industry Integration",
    body: "Centres of Excellence with Virtusa, EPAM, Tata Technologies and Boeing — embedded into the curriculum. Capstone projects with live datasets and industry mentors.",
  },
  {
    tag: "Research",
    title: "Research-Led Teaching",
    body: "Doctoral faculty bring active research into UG courses. Three JNTUH-recognised research centres and the IPFC support student innovation from year one.",
  },
];

const HUB_LINKS = [
  {
    href: "/departments",
    title: "Undergraduate Programmes",
    body: "Ten B.Tech branches — from CSE and AI/ML to Aeronautical Engineering.",
    tag: "B.Tech",
  },
  {
    href: "/departments/pg",
    title: "Postgraduate Programmes",
    body: "M.Tech specialisations across CSE, VLSI, Power Systems and Aerospace — plus the MBA programme.",
    tag: "M.Tech / MBA",
  },
  {
    href: "/departments/faculty-profile",
    title: "Faculty Profiles",
    body: "Department heads, professors and researchers — meet the people shaping the academic programmes.",
    tag: "Faculty",
  },
  {
    href: "/research",
    title: "Research and Development",
    body: "Three JNTUH-recognised centres, 1,200+ publications, 42 patents, ongoing DRDO/DST/AICTE projects.",
    tag: "R&D",
  },
  {
    href: "/iqac",
    title: "Internal Quality Assurance",
    body: "IQAC — coordinating audits, AQAR submissions, NAAC and NBA accreditation cycles.",
    tag: "Quality",
  },
  {
    href: "/chronicles",
    title: "Chronicles",
    body: "The campus broadsheet — stories from students, faculty and alumni.",
    tag: "Stories",
  },
];

const REGULATIONS = [
  {
    code: "R25",
    note: "Latest autonomous regulation — applied to 2025 intake onwards.",
    live: true,
  },
  {
    code: "R22",
    note: "Autonomous regulation effective 2022 — currently mid-degree batches.",
    live: true,
  },
  {
    code: "MLR-20",
    note: "Affiliated JNTUH regulation 2020 — graduating cohort.",
    live: false,
  },
  {
    code: "MLR-18",
    note: "Earlier JNTUH regulation 2018 — archive only.",
    live: false,
  },
];

export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="about-hero academics-hero">
          <div className="about-hero__inner">
            <nav className="about-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="about-hero__breadcrumb-sep" aria-hidden="true">›</span>
              <span>Academics</span>
            </nav>
            <div className="about-hero__eyebrow">Academic Excellence</div>
            <h1 className="about-hero__title">
              Education that <em>adapts faster than industry.</em>
            </h1>
            <p className="about-hero__subtitle">
              An autonomous, outcome-based, research-led academic system. Ten engineering
              branches at the undergraduate level, four M.Tech specialisations, an MBA
              programme, and doctoral research across five disciplines.
            </p>
          </div>
        </section>

        {/* Four Frameworks */}
        <section className="acad-section acad-section--white">
          <div className="acad-inner">
            <div className="acad-head">
              <div className="section-label">How We Teach</div>
              <h2 className="acad-title">The four <em>frameworks.</em></h2>
              <p className="acad-lede">
                Every academic decision at MLRIT runs through four lenses — outcome-based
                teaching, autonomy of regulation, industry integration, and research-led depth.
              </p>
            </div>
            <div className="acad-frameworks">
              {FRAMEWORKS.map((f) => (
                <div key={f.tag} className="acad-framework-card about-reveal">
                  <div className="acad-framework-card__tag">{f.tag}</div>
                  <h3 className="acad-framework-card__title">{f.title}</h3>
                  <p className="acad-framework-card__body">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Hub */}
        <section className="acad-section acad-section--cream">
          <div className="acad-inner">
            <div className="acad-head">
              <div className="section-label">Navigate Academics</div>
              <h2 className="acad-title">The academic <em>hub.</em></h2>
              <p className="acad-lede">
                Everything from programme guides and faculty profiles to research centres and
                quality assurance — in one place.
              </p>
            </div>
            <div className="acad-hub-grid">
              {HUB_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="acad-hub-card about-reveal">
                  <div className="acad-hub-card__tag">{l.tag}</div>
                  <h3 className="acad-hub-card__title">{l.title}</h3>
                  <p className="acad-hub-card__body">{l.body}</p>
                  <span className="acad-hub-card__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regulations */}
        <section className="acad-section acad-section--white">
          <div className="acad-inner acad-inner--narrow">
            <div className="acad-head">
              <div className="section-label">Regulations</div>
              <h2 className="acad-title">Academic <em>regulations.</em></h2>
              <p className="acad-lede">
                MLRIT operates under its own autonomous regulations for current batches, with
                earlier JNTUH-affiliated regulations for graduating cohorts.
              </p>
            </div>
            <div className="acad-regs">
              {REGULATIONS.map((r) => (
                <div key={r.code} className={`acad-reg-row${r.live ? " acad-reg-row--live" : ""}`}>
                  <div className="acad-reg-row__code">{r.code}</div>
                  <div className="acad-reg-row__note">{r.note}</div>
                  <div className="acad-reg-row__badge">
                    {r.live ? "Active" : "Archive"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="acad-cta">
          <div className="acad-cta__inner">
            <h2 className="acad-cta__title">Ready to explore a programme?</h2>
            <p className="acad-cta__sub">Browse all B.Tech branches or contact admissions.</p>
            <div className="acad-cta__btns">
              <Link href="/departments" className="acad-cta__btn acad-cta__btn--primary">
                View All Programmes
              </Link>
              <Link href="/departments/pg" className="acad-cta__btn acad-cta__btn--outline">
                Postgraduate Programmes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
