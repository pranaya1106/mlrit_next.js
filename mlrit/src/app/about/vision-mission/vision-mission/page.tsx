import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vision & Mission | MLR Institute of Technology",
  description:
    "MLRIT's vision is to promote academic excellence, research, innovation, and entrepreneurial skills to produce graduates with human values and leadership qualities to serve the nation.",
};

export default function VisionMissionPage() {
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
              <span>Vision &amp; Mission</span>
            </nav>
            <div className="about-hero__eyebrow">Our Purpose</div>
            <h1 className="about-hero__title">
              Vision &amp; <em>Mission</em>
            </h1>
            <p className="about-hero__subtitle">
              The foundational beliefs that guide every decision, programme, and experience
              at MLR Institute of Technology.
            </p>
          </div>
        </section>

        {/* Sub-nav */}
        <nav className="about-subnav" aria-label="About section navigation">
          <div className="about-subnav__inner">
            <Link href="/about/vision-mission/introduction" className="about-subnav__link">
              Introduction
            </Link>
            <Link href="/about/vision-mission/vision-mission" className="about-subnav__link active">
              Vision &amp; Mission
            </Link>
            <Link href="/about/legacy" className="about-subnav__link">
              Legacy
            </Link>
            <Link href="/about/rankings-awards" className="about-subnav__link">
              Rankings &amp; Awards
            </Link>
            <Link href="/about/brochure" className="about-subnav__link">
              Brochure
            </Link>
          </div>
        </nav>

        {/* Vision & Mission content */}
        <div className="vm-page">
          <div className="vm-page__inner">

            {/* Vision */}
            <div className="vm-vision about-reveal">
              <div className="vm-vision__icon" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div className="vm-vision__content">
                <span className="vm-vision__tag">Vision</span>
                <h2 className="vm-vision__heading">
                  Academic Excellence, Research &amp; Innovation
                </h2>
                <div className="vm-vision__divider" />
                <p className="vm-vision__text">
                  Promote academic excellence, research, innovation, and entrepreneurial skills
                  to produce graduates with human values and leadership qualities to serve the nation.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="vm-mission about-reveal" data-delay="1">
              <div className="vm-mission__icon" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </div>
              <div>
                <span className="vm-mission__tag">Mission</span>
                <h2 className="vm-mission__heading">
                  Student-Centric. Globally Competitive. Socially Responsible.
                </h2>
                <div className="vm-mission__divider" />
                <ul className="vm-mission__list" aria-label="Mission statements">
                  {missions.map((m, i) => (
                    <li key={i} className="vm-mission__item">
                      <span className="vm-mission__item-dot" aria-hidden="true" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Values */}
            <div className="vm-values about-reveal" data-delay="2">
              <h3 className="vm-values__title">Core Values</h3>
              <div className="vm-values__grid">
                {values.map((v, i) => (
                  <div key={v.title} className="vm-value-card about-reveal" data-delay={String(i + 1)}>
                    <div className="vm-value-card__num">{String(i + 1).padStart(2, "0")}</div>
                    <div className="vm-value-card__title">{v.title}</div>
                    <div className="vm-value-card__desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* CTA strip */}
        <section style={{ background: "#f5efe5", borderTop: "1px solid #e8e2d8", padding: "56px var(--page-pad)" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <div className="section-label">Our story</div>
              <h2 className="section-heading" style={{ marginTop: "6px" }}>Two decades of purposeful growth</h2>
            </div>
            <Link href="/about/legacy" className="btn btn-green">
              Explore Our Legacy →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const missions = [
  "Provide student-centric education and training on cutting-edge technologies to make the students globally competitive and socially responsible citizens.",
  "Create an environment to strengthen the research, innovation and entrepreneurship to solve societal problems.",
];

const values = [
  {
    title: "Academic Excellence",
    desc: "Rigorous, industry-relevant curriculum that builds strong engineering fundamentals across all disciplines.",
  },
  {
    title: "Innovation & Research",
    desc: "A culture that encourages students and faculty to pursue new ideas, publish research, and protect intellectual property.",
  },
  {
    title: "Human Values & Ethics",
    desc: "Instilling integrity, responsibility, and compassion — qualities that define leaders in every walk of life.",
  },
  {
    title: "Entrepreneurship",
    desc: "Supporting ventures, startups, and creative initiatives through mentorship, incubation, and hands-on exposure.",
  },
  {
    title: "Sports & Holistic Growth",
    desc: "Athletics are as central as academics — nurturing discipline, teamwork, and resilience through sport.",
  },
  {
    title: "Social Responsibility",
    desc: "Preparing graduates who contribute meaningfully to society, communities, and the nation.",
  },
];
