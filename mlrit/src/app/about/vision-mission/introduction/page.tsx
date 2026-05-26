import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About MLRIT — Introduction | MLR Institute of Technology",
  description:
    "Since 2005, MLR Institute of Technology has grown into a campus where learning extends far beyond the classroom — building confident, capable graduates ready for a rapidly changing world.",
};

export default function IntroductionPage() {
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
              <span>Introduction</span>
            </nav>
            <div className="about-hero__eyebrow">About MLRIT</div>
            <h1 className="about-hero__title">
              Built Beyond <em>Classrooms</em>
            </h1>
            <p className="about-hero__subtitle">
              Since 2005, MLR Institute of Technology has been shaping engineers, thinkers,
              and leaders — through academics, innovation, and the culture of a campus that
              never stops growing.
            </p>
          </div>
        </section>

        {/* Sub-nav */}
        <nav className="about-subnav" aria-label="About section navigation">
          <div className="about-subnav__inner">
            <Link href="/about/vision-mission/introduction" className="about-subnav__link active">
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
            <Link href="/about/brochure" className="about-subnav__link">
              Brochure
            </Link>
          </div>
        </nav>

        {/* Body Content */}
        <div className="intro-body">

          {/* Pull quote */}
          <p className="intro-body__pull about-reveal">
            Somewhere between deadlines, hackathons, placements, sports practice, and team
            projects — college becomes more than a degree.{" "}
            <em>At MLRIT, it always was.</em>
          </p>

          {/* Stats mini-strip */}
          <div className="intro-stats about-reveal" data-delay="1" aria-label="Key statistics">
            <div className="intro-stat">
              <div className="intro-stat__num">2005<span>–</span></div>
              <div className="intro-stat__label">Est. Dundigal, Hyderabad</div>
            </div>
            <div className="intro-stat">
              <div className="intro-stat__num">UGC <span>'15</span></div>
              <div className="intro-stat__label">Autonomous since 2015</div>
            </div>
            <div className="intro-stat">
              <div className="intro-stat__num">10<span>+</span></div>
              <div className="intro-stat__label">Disciplines &amp; Programmes</div>
            </div>
          </div>

          {/* Main text */}
          <div className="intro-body__text about-reveal" data-delay="2">
            <p>
              At MLR Institute of Technology, students are encouraged to build, question,
              compete, collaborate, and evolve — through academics, practical experience,
              innovation, and the culture around them.
            </p>
            <p>
              Located in Dundigal, Hyderabad, and autonomous since 2015, the Institute is
              built on a simple belief: <strong>how students learn matters just as much as
              what they learn.</strong> That belief shapes everything here.
            </p>
          </div>

          {/* Callout */}
          <div className="intro-body__callout about-reveal" data-delay="1">
            <div className="intro-body__callout-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <p className="intro-body__callout-text">
              "From core engineering to emerging fields like Artificial Intelligence &amp;
              Machine Learning, Data Science, Aeronautical and Aerospace Engineering — MLRIT
              combines academic foundations with industry relevance and hands-on exposure.
              Affiliated to JNTUH, the institution continues to create an environment that
              prepares students not only for careers, but for a rapidly changing world."
            </p>
          </div>

          {/* More text */}
          <div className="intro-body__text about-reveal" data-delay="2">
            <p>
              But what truly defines the MLRIT experience cannot be measured only through
              classrooms or curriculum. It is found in the confidence built over time, the
              challenges solved together, the discipline shaped through sports and teamwork,
              and the people who become part of your journey along the way.
            </p>
            <p>
              Because education was never meant to stop at placements.
            </p>
            <p>
              <strong>It was meant to prepare you for everything that comes after.</strong>
            </p>
          </div>

          {/* Pillars */}
          <div className="intro-pillars about-reveal" data-delay="1" role="list" aria-label="Core pillars">
            {pillars.map((p, i) => (
              <div key={p.label} className="intro-pillar" role="listitem" data-delay={String(i + 1)}>
                <div className="intro-pillar__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: p.icon }} />
                </div>
                <div className="intro-pillar__label">{p.label}</div>
              </div>
            ))}
          </div>

        </div>

      </main>
      <Footer />
    </>
  );
}

const pillars = [
  {
    label: "Academics",
    icon: `<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>`,
  },
  {
    label: "Innovation",
    icon: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>`,
  },
  {
    label: "Employability",
    icon: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
  },
  {
    label: "Sports",
    icon: `<circle cx="12" cy="12" r="10"/><path d="M12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z"/>`,
  },
];
