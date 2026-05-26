import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rankings & Awards | MLR Institute of Technology",
  description:
    "MLRIT's national rankings, accreditations, research achievements, patents, publications, and recognition from leading bodies across India.",
};

export default function RankingsAwardsPage() {
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
              <span>Rankings &amp; Awards</span>
            </nav>
            <div className="about-hero__eyebrow">Recognition</div>
            <h1 className="about-hero__title">
              Rankings &amp; <em>Awards</em>
            </h1>
            <p className="about-hero__subtitle">
              National rankings, institutional accreditations, research achievements, and
              recognitions that reflect the quality MLRIT delivers.
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
            <Link href="/about/rankings-awards" className="about-subnav__link active">
              Rankings &amp; Awards
            </Link>
            <Link href="/about/brochure" className="about-subnav__link">
              Brochure
            </Link>
          </div>
        </nav>

        <div className="rankings-page">
          <div className="rankings-page__inner">

            {/* Hero stats */}
            <div className="rankings-hero-stats about-reveal" aria-label="Key recognition highlights">
              {heroStats.map((s) => (
                <div key={s.label} className="rankings-hero-stat">
                  <div className="rankings-hero-stat__num">
                    {s.num}<span>{s.suffix}</span>
                  </div>
                  <div className="rankings-hero-stat__label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* National Rankings */}
            <section aria-labelledby="rankings-heading">
              <div className="legacy-section-head about-reveal">
                <div className="section-label">National Rankings</div>
                <h2 className="legacy-section-title" id="rankings-heading">
                  Nationally Ranked &amp; Recognised
                </h2>
              </div>

              <div className="rankings-grid">
                {rankings.map((r, i) => (
                  <div key={r.title} className="ranking-card about-reveal" data-delay={String((i % 2) + 1)}>
                    <div className="ranking-card__body">
                      <div className="ranking-card__badge" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: r.icon }} />
                      </div>
                      <div className="ranking-card__info">
                        <div className="ranking-card__source">{r.source}</div>
                        <div className="ranking-card__title">{r.title}</div>
                        <div className="ranking-card__detail">{r.detail}</div>
                      </div>
                      <div className="ranking-card__rank">{r.rank}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Accreditations */}
            <section className="accred-section about-reveal" data-delay="1" aria-labelledby="accred-heading">
              <div className="legacy-section-head">
                <div className="section-label">Accreditations</div>
                <h2 className="legacy-section-title" id="accred-heading">
                  Quality Certified at Every Level
                </h2>
              </div>
              <div className="accred-strip">
                {accreditations.map((a) => (
                  <div key={a.label} className="accred-badge">
                    <div className="accred-badge__dot" aria-hidden="true" />
                    <div>
                      <div className="accred-badge__label">{a.label}</div>
                      <div className="accred-badge__detail">{a.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Innovation & Research */}
            <section className="innovation-section about-reveal" data-delay="1" aria-labelledby="innovation-heading">
              <div className="legacy-section-head" style={{ marginBottom: "0" }}>
                <div className="section-label">Research &amp; Innovation</div>
                <h2 className="legacy-section-title" id="innovation-heading">
                  Building a Culture of Discovery
                </h2>
              </div>
              <div className="innovation-grid">
                {innovationStats.map((s, i) => (
                  <div key={s.label} className="innovation-card about-reveal" data-delay={String(i + 1)}>
                    <div className="innovation-card__num">{s.num}</div>
                    <div className="innovation-card__label">{s.label}</div>
                    <div className="innovation-card__desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards & Recognition */}
            <section aria-labelledby="awards-heading">
              <div className="legacy-section-head about-reveal">
                <div className="section-label">Awards &amp; Honours</div>
                <h2 className="legacy-section-title" id="awards-heading">
                  Recognised for Excellence
                </h2>
              </div>
              <div className="rankings-grid">
                {awards.map((a, i) => (
                  <div key={a.title} className="ranking-card about-reveal" data-delay={String((i % 2) + 1)}>
                    <div className="ranking-card__body">
                      <div className="ranking-card__badge" aria-hidden="true">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: a.icon }} />
                      </div>
                      <div className="ranking-card__info">
                        <div className="ranking-card__source">{a.source}</div>
                        <div className="ranking-card__title">{a.title}</div>
                        <div className="ranking-card__detail">{a.detail}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* CTA */}
        <section style={{ background: "#f5efe5", borderTop: "1px solid #e8e2d8", padding: "56px var(--page-pad)" }}>
          <div style={{ maxWidth: "1060px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <div className="section-label">Explore More</div>
              <h2 className="section-heading" style={{ marginTop: "6px" }}>Download the MLRIT Brochure</h2>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/about/brochure" className="btn btn-green">
                Get Brochure →
              </Link>
              <Link href="/iqac" className="btn btn-ghost">
                View IQAC
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const heroStats = [
  { num: "NAAC", suffix: "", label: "Accredited Institution" },
  { num: "NBA", suffix: "", label: "Accredited Programmes" },
  { num: "20", suffix: "+", label: "Years of Excellence" },
  { num: "621", suffix: "+", label: "Placements in 2025–26" },
];

const rankings = [
  {
    source: "DataQuest",
    title: "Top Engineering Institutions — T-School Ranking",
    detail: "Recognised among India's top technical schools for academic quality, placements, and infrastructure.",
    rank: "Top T",
    icon: `<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>`,
  },
  {
    source: "NIRF — Ministry of Education",
    title: "National Institutional Ranking Framework",
    detail: "MLRIT participates in the NIRF rankings, evaluated across Teaching, Research, Graduation Outcomes, and Perception.",
    rank: "NIRF",
    icon: `<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h6M9 17h4"/>`,
  },
  {
    source: "Times Engineering Survey",
    title: "Top Engineering Colleges — Telangana",
    detail: "Ranked among the leading private engineering colleges in Telangana for academic outcomes and student satisfaction.",
    rank: "Top 10",
    icon: `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  },
  {
    source: "Silicon India",
    title: "Most Promising Engineering Colleges",
    detail: "Recognised as one of the most promising engineering colleges in Andhra Pradesh & Telangana for innovation and excellence.",
    rank: "★★★★",
    icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  },
];

const accreditations = [
  { label: "NAAC", detail: "National Assessment & Accreditation Council" },
  { label: "NBA", detail: "National Board of Accreditation — Multiple Programmes" },
  { label: "AICTE", detail: "All India Council for Technical Education" },
  { label: "JNTUH", detail: "Affiliated to Jawaharlal Nehru Technological University Hyderabad" },
  { label: "UGC Autonomous", detail: "Autonomous Status since 2015" },
];

const innovationStats = [
  {
    num: "50+",
    label: "Patents Filed & Granted",
    desc: "Faculty and student innovations protected under the Intellectual Property Rights framework, spanning engineering, technology, and design.",
  },
  {
    num: "200+",
    label: "Research Publications",
    desc: "Peer-reviewed papers published in national and international journals with SCI/Scopus indexing.",
  },
  {
    num: "15+",
    label: "Funded Research Projects",
    desc: "Sponsored research projects from DST, AICTE, and industry partners driving applied research across departments.",
  },
  {
    num: "10+",
    label: "Research Centres",
    desc: "Dedicated research centres in AI/ML, IoT, Aerospace, and VLSI, enabling advanced experimentation and collaboration.",
  },
  {
    num: "30+",
    label: "Student Startups",
    desc: "Ventures incubated through MLRIT's entrepreneurship cell, supported by mentors, seed funding, and co-working infrastructure.",
  },
  {
    num: "5+",
    label: "MoUs with Industry",
    desc: "Formal collaborations with technology and engineering companies enabling internships, co-development, and curriculum co-design.",
  },
];

const awards = [
  {
    source: "2025",
    title: "Best Engineering College — Telangana State",
    detail: "Recognised at the state level for consistent academic outcomes, placement records, and campus facilities.",
    icon: `<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>`,
  },
  {
    source: "AICTE",
    title: "Best Technical Institute — Innovation Category",
    detail: "Awarded for outstanding contributions to engineering education innovation and student skill development.",
    icon: `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>`,
  },
  {
    source: "Outlook India",
    title: "Top Private Engineering College",
    detail: "Recognised in Outlook India's annual ranking of top private engineering institutions for academic quality.",
    icon: `<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/>`,
  },
  {
    source: "2023",
    title: "Sports Excellence Award — JNTUH",
    detail: "Awarded for outstanding achievements in inter-university sports competitions, reflecting MLRIT's unique sports-integrated education model.",
    icon: `<circle cx="12" cy="12" r="10"/><path d="M12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/>`,
  },
];
