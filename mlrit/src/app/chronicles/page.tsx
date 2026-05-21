import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import "@/styles/chronicles.css";

export const metadata: Metadata = {
  title: "MLRIT Chronicles — The campus broadsheet",
  description:
    "All the campus that's fit to print — a broadsheet of stories, ideas and updates from MLR Institute of Technology.",
};

export default function ChroniclesPage() {
  return (
    <div className="chronicles-page">
      <Navbar />

      {/* ── MASTHEAD ── */}
      <header className="bw-mast">
        <div className="bw-mast__supra">
          <span className="live">Live · Spring &apos;26 Edition</span>
          <span>Vol. V · Issue 23</span>
        </div>
        <span className="bw-mast__rule-top" aria-hidden="true" />
        <h1 className="bw-mast__name">
          MLRIT <em>Chronicles</em>
        </h1>
        <p className="bw-mast__tagline">
          &ldquo;All the campus that&apos;s fit to print&rdquo; — a broadsheet of stories, ideas and
          updates from MLR Institute of Technology.
        </p>
        <span className="bw-mast__rule-bottom" aria-hidden="true" />
        <div className="bw-mast__meta">
          <span>
            Saturday, <strong>16 May 2026</strong>
          </span>
          <span>Dundigal · Hyderabad</span>
          <span>62 pages · ₹0</span>
          <span>Reading time · 4 min</span>
        </div>
      </header>

      {/* ── SECTION RIBBON ── */}
      <nav className="bw-ribbon" aria-label="Sections">
        <div className="bw-ribbon__inner">
          {[
            "Front Page",
            "Campus",
            "Placements",
            "Research",
            "Sports",
            "Student Voice",
            "Alumni",
            "Events",
            "Faculty",
            "Opinion",
            "Archive",
          ].map((s, i) => (
            <a
              key={s}
              className={`bw-ribbon__item${i === 0 ? " is-active" : ""}`}
              href="#"
            >
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* ── FRONT PAGE ── */}
      <main className="bw-front">
        {/* LEFT — Lead story */}
        <article className="bw-col">
          <span className="bw-lead__kicker">
            <span className="dot" /> Cover Story · Campus
          </span>
          <h2 className="bw-lead__title">
            21st Annual Day at MLRIT — <em>Trishna 2K26</em> brings the
            institution together
          </h2>
          <p className="bw-lead__dek">
            From founders' speeches to student awards, the day stitched two
            decades of the institute's story into one evening — and reset what
            the next decade should look like.
          </p>
          <div className="bw-lead__byline">
            <span>
              By <strong>Campus Desk</strong>
            </span>
            <span className="bw-lead__byline-sep">•</span>
            <span>14 Mar 2026</span>
            <span className="bw-lead__byline-sep">•</span>
            <span>8 min read</span>
          </div>
          <a
            href="https://mlrit.ac.in/21st-annual-day-celebrations/news/"
            className="bw-lead__media"
            target="_blank"
            rel="noopener"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mlrit.ac.in/wp-content/uploads/2026/04/annual-day2.jpeg"
              alt="MLRIT 21st Annual Day — Trishna 2K26 celebrations"
              loading="eager"
            />
          </a>
          <p className="bw-lead__caption">
            <strong>FILE PHOTO ·</strong> Trishna 2K26 — the 21st Annual Day at
            MLR Institute of Technology, Dundigal.
          </p>
          <div className="bw-lead__body">
            <p>
              MLR Institute of Technology celebrated its 21st Annual Day,
              Trishna 2K26, on Friday — bringing together students, faculty,
              management and guests to commemorate the institution&apos;s
              achievements and recognise excellence in academics, research and
              co-curricular activities.
            </p>
            <p>
              Sri Bala Prasad Peddigari, Chief Innovation Officer at Tata
              Consultancy Services and Vice-Chair of the IEEE Hyderabad Section,
              urged a balanced focus on academics and physical activities
              essential for the holistic development of students.
            </p>
            <p>
              Sri Marri Rajashekhar Reddy, MLA of Malkajgiri and Founder
              Secretary, reiterated that the institution was founded with a
              vision of promoting academic excellence, research, innovation and
              entrepreneurship while nurturing graduates with human values.
            </p>
            <a
              href="https://mlrit.ac.in/21st-annual-day-celebrations/news/"
              className="bw-lead__continue"
              target="_blank"
              rel="noopener"
            >
              Continue reading →
            </a>
          </div>
        </article>

        {/* MIDDLE — Secondary stories */}
        <div className="bw-col">
          <article className="bw-mid-story">
            <span className="bw-mid-story__section">Student Voice</span>
            <a
              href="https://mlrit.ac.in/mlrit-student-koduri-viplav-selected-for-national-level-viksit-bharat-young-leaders-dialogue-2026/news/"
              className="bw-mid-story__media"
              target="_blank"
              rel="noopener"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://mlrit.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-06-at-18.34.19.jpeg"
                alt="Koduri Viplav at Viksit Bharat Young Leaders Dialogue 2026"
                loading="lazy"
              />
            </a>
            <h3 className="bw-mid-story__title">
              Koduri Viplav picked for the national{" "}
              <em>Viksit Bharat Young Leaders Dialogue 2026</em>
            </h3>
            <p className="bw-mid-story__dek">
              An MLRIT student joins a national cohort in Delhi — and returns
              with a sharper read on what India is asking from its campuses.
            </p>
            <p className="bw-mid-story__meta">Newsroom · 08 Jan 2026 · 6 min</p>
          </article>

          <article className="bw-mid-story">
            <span className="bw-mid-story__section">Research</span>
            <a
              href="https://mlrit.ac.in/tsfa-unesco-workshop-at-mlrit/news/"
              className="bw-mid-story__media"
              target="_blank"
              rel="noopener"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://mlrit.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-30-at-18.32.07.jpeg"
                alt="TSFA–UNESCO Workshop hosted at MLRIT"
                loading="lazy"
              />
            </a>
            <h3 className="bw-mid-story__title">
              TSFA–UNESCO workshop marks the{" "}
              <em>International Day of Light</em> at MLRIT
            </h3>
            <p className="bw-mid-story__dek">
              A two-day workshop blends sustainability, optics and outreach —
              bringing UNESCO scholars onto the second-floor seminar hall.
            </p>
            <p className="bw-mid-story__meta">
              Research Desk · 02 Jan 2026 · 7 min
            </p>
          </article>

          <article className="bw-mid-story">
            <span className="bw-mid-story__section">Campus</span>
            <a
              href="https://mlrit.ac.in/national-integration-camp-at-mlrit/news/"
              className="bw-mid-story__media"
              target="_blank"
              rel="noopener"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://mlrit.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-23-at-06.52.51.jpeg"
                alt="National Integration Camp at MLRIT"
                loading="lazy"
              />
            </a>
            <h3 className="bw-mid-story__title">
              National Integration Camp — five states, one stage, fortnight of
              fellowship
            </h3>
            <p className="bw-mid-story__dek">
              NSS volunteers from five states converge at MLRIT for a fortnight
              of cultural exchange, field service and shared meals.
            </p>
            <p className="bw-mid-story__meta">NSS Cell · 24 Dec 2025 · 5 min</p>
          </article>
        </div>

        {/* RIGHT — Most Read + In Brief */}
        <aside className="bw-col">
          <section>
            <h3 className="bw-rail__head">
              Most Read <span className="pill">This week</span>
            </h3>
            <div className="bw-most">
              {mostRead.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                >
                  <div>
                    <p className="bw-most__title">{item.title}</p>
                    <p className="bw-most__meta">{item.meta}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h3 className="bw-rail__head">
              In Brief <span className="pill">Today</span>
            </h3>
            <ul className="bw-brief">
              {inBrief.map((item) => (
                <li key={item.date + item.text}>
                  <span className="bw-brief__date">{item.date}</span>
                  <span dangerouslySetInnerHTML={{ __html: item.text }} />
                </li>
              ))}
            </ul>
          </section>
        </aside>
      </main>

      {/* ── SECOND TIER — More from this issue ── */}
      <section className="bw-tier">
        <div className="bw-tier__head">
          <h3 className="bw-tier__title">
            More from <em>this issue</em>
          </h3>
          <span className="bw-tier__rule" aria-hidden="true" />
          <a
            className="bw-tier__see"
            href="https://mlrit.ac.in/category/news/"
            target="_blank"
            rel="noopener"
          >
            See all stories
          </a>
        </div>
        <div className="bw-tier__grid">
          {moreTiles.map((tile) => (
            <a
              key={tile.title}
              className="bw-tile"
              href={tile.href}
              target="_blank"
              rel="noopener"
            >
              <div className="bw-tile__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tile.img} alt={tile.alt} loading="lazy" />
              </div>
              <span className="bw-tile__section">{tile.section}</span>
              <h4
                className="bw-tile__title"
                dangerouslySetInnerHTML={{ __html: tile.title }}
              />
              <p className="bw-tile__meta">{tile.meta}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── PHOTO ESSAY ── */}
      <section className="bw-essay">
        <div className="bw-essay__head">
          <h3 className="bw-essay__title">
            Photo essay · <em>The year in frames</em>
          </h3>
          <span className="bw-essay__rule" aria-hidden="true" />
          <span className="bw-essay__sub">Twelve months, one campus</span>
        </div>
        <div className="bw-essay__grid">
          {photoEssay.map((cell) => (
            <a
              key={cell.title}
              className="bw-essay__cell"
              href={cell.href}
              target="_blank"
              rel="noopener"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cell.img} alt={cell.alt} loading="lazy" />
              <div className="bw-essay__overlay">
                <span className="bw-essay__overlay-tag">{cell.tag}</span>
                <h4 className="bw-essay__overlay-title">{cell.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── ARCHIVES ── */}
      <section className="bw-tier">
        <div className="bw-tier__head">
          <h3 className="bw-tier__title">
            From the <em>archives</em>
          </h3>
          <span className="bw-tier__rule" aria-hidden="true" />
          <span className="bw-tier__see" style={{ cursor: "default" }}>
            2024 · in review
          </span>
        </div>
        <div className="bw-tier__grid">
          {archiveTiles.map((tile) => (
            <a
              key={tile.title}
              className="bw-tile"
              href={tile.href}
              target="_blank"
              rel="noopener"
            >
              <div className="bw-tile__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tile.img} alt={tile.alt} loading="lazy" />
              </div>
              <span className="bw-tile__section">{tile.section}</span>
              <h4
                className="bw-tile__title"
                dangerouslySetInnerHTML={{ __html: tile.title }}
              />
              <p className="bw-tile__meta">{tile.meta}</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── CHRONICLES FOOTER ── */}
      <footer className="bw-footer">
        <div className="bw-footer__top">
          <div>
            <h4 className="bw-footer__name">
              MLRIT <em>Chronicles</em>
            </h4>
            <p className="bw-footer__tag">
              &ldquo;All the campus that&apos;s fit to print&rdquo; — a broadsheet of MLR
              Institute of Technology · est. 2021.
            </p>
          </div>
          <div className="bw-footer__cols">
            <div className="bw-footer__col">
              <h5>Sections</h5>
              <a href="#">Front Page</a>
              <a href="#">Campus</a>
              <a href="#">Placements</a>
              <a href="#">Research</a>
              <a href="#">Sports</a>
            </div>
            <div className="bw-footer__col">
              <h5>Series</h5>
              <a href="#">Student Voice</a>
              <a href="#">Faculty Diaries</a>
              <a href="#">Alumni Letters</a>
              <a href="#">Photo Essays</a>
              <a href="#">In Brief</a>
            </div>
            <div className="bw-footer__col">
              <h5>The Paper</h5>
              <a
                href="https://mlrit.ac.in/category/news/"
                target="_blank"
                rel="noopener"
              >
                All news
              </a>
              <a href="#">Editorial board</a>
              <a href="#">Submit a story</a>
              <a href="#">Letters</a>
              <a href="#">Archive</a>
            </div>
            <div className="bw-footer__col">
              <h5>MLRIT</h5>
              <Link href="/">Home</Link>
              <a href="#">Admissions</a>
              <Link href="/departments">Departments</Link>
              <a href="#">Contact</a>
              <a href="#">Press</a>
            </div>
          </div>
        </div>
        <div className="bw-footer__bot">
          <span>© 2026 MLR Institute of Technology</span>
          <span>Vol. V · Issue 23 · 16 May 2026</span>
          <span>Set in Playfair Display, Source Serif 4 and Inter</span>
        </div>
      </footer>
    </div>
  );
}

/* ── Data ── */
const mostRead = [
  {
    href: "https://mlrit.ac.in/21st-annual-day-celebrations/news/",
    title: "21st Annual Day — Trishna 2K26 brings two decades of MLRIT together",
    meta: "Campus · 14 Mar 2026",
  },
  {
    href: "https://mlrit.ac.in/mlrit-student-koduri-viplav-selected-for-national-level-viksit-bharat-young-leaders-dialogue-2026/news/",
    title: "Koduri Viplav selected for Viksit Bharat Young Leaders Dialogue 2026",
    meta: "Student Voice · 08 Jan 2026",
  },
  {
    href: "https://mlrit.ac.in/cybage-scholarships-granted-for-mlrit-students/news/",
    title: "Cybage scholarships granted to MLRIT students for academic year 2025–26",
    meta: "Placements · 12 Dec 2025",
  },
  {
    href: "https://mlrit.ac.in/mlrit-students-shine-in-drone-development-competition-at-chennai/news/",
    title: "MLRIT students shine at the National Drone Development Competition, Chennai",
    meta: "Aeronautical · 02 Apr 2025",
  },
  {
    href: "https://mlrit.ac.in/free-sports-quota-seats/news/",
    title: "Free Sports Quota seats — MLRIT's pitch to athlete-students",
    meta: "Sports · 08 Sep 2025",
  },
];

const inBrief = [
  { date: "06 Sep", text: "<strong>NIRF 2025</strong> — MLRIT retains its band in the engineering category for a third successive year." },
  { date: "01 Sep", text: "<strong>Prerna outreach</strong> — MLRIT teams visit ZPHS Dundigal for a one-day mentoring drive with class X students." },
  { date: "01 Sep", text: "<strong>New sports grounds</strong> — Chairman inaugurates the resurfaced multi-sport grounds inside the campus." },
  { date: "21 Aug", text: "<strong>Orientation 2025</strong> — first-year students are welcomed across all eight engineering branches." },
  { date: "28 Jul", text: "<strong>Graduation Day 2025</strong> — the class of 2025 walks the stage at the main auditorium." },
  { date: "10 Apr", text: "<strong>Cisco ThingQbator</strong> — MLRIT named among the top ten institutions in Cohort 7 of the programme." },
];

const moreTiles = [
  {
    href: "https://mlrit.ac.in/cybage-scholarships-granted-for-mlrit-students/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-18-at-07.43.56.jpeg",
    alt: "Cybage Scholarships granted to MLRIT students",
    section: "Placements",
    title: "Cybage scholarships granted to <em>MLRIT students</em>",
    meta: "Newsroom · 12 Dec 2025 · 4 min",
  },
  {
    href: "https://mlrit.ac.in/nirf-2025/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/09/nirf-2.jpeg",
    alt: "NIRF 2025",
    section: "Recognition",
    title: "NIRF 2025 — MLRIT holds its band in the <em>engineering</em> category",
    meta: "Newsroom · 06 Sep 2025 · 3 min",
  },
  {
    href: "https://mlrit.ac.in/mlrit-organizes-prerna-outreach-programme-at-zphs-dundigal/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/09/Press-science1.jpeg",
    alt: "Prerna outreach at ZPHS Dundigal",
    section: "Outreach",
    title: "Prerna — MLRIT runs a science-outreach day at <em>ZPHS Dundigal</em>",
    meta: "Outreach Cell · 01 Sep 2025 · 4 min",
  },
  {
    href: "https://mlrit.ac.in/new-sports-grounds-inaugural-at-mlrit/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/09/Sports-inaugural.jpeg",
    alt: "New sports grounds inaugurated at MLRIT",
    section: "Sports",
    title: "New sports grounds inaugurated — a campus that now plays in <em>four codes</em>",
    meta: "Sports Desk · 01 Sep 2025 · 3 min",
  },
  {
    href: "https://mlrit.ac.in/orientation-day-2025/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/08/or.jpeg",
    alt: "Orientation Day 2025",
    section: "Campus",
    title: "Orientation 2025 — eight branches, one auditorium, the first first day",
    meta: "Campus Desk · 21 Aug 2025 · 5 min",
  },
  {
    href: "https://mlrit.ac.in/graduation-day-2025/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/07/Grad.jpg",
    alt: "Graduation Day 2025",
    section: "Campus",
    title: "Graduation Day 2025 — the class of &apos;25 takes the stage",
    meta: "Newsroom · 28 Jul 2025 · 6 min",
  },
  {
    href: "https://mlrit.ac.in/mlrit-among-top-10-in-cisco-thingqbator-cohort-7/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/04/ThingQ-1.jpeg",
    alt: "MLRIT among Top 10 in Cisco ThingQbator Cohort 7",
    section: "Innovation",
    title: "MLRIT among the <em>top ten</em> in Cisco ThingQbator Cohort 7",
    meta: "CIE-MLRIT · 10 Apr 2025 · 5 min",
  },
  {
    href: "https://mlrit.ac.in/mlrit-students-shine-in-drone-development-competition-at-chennai/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/04/Aero1.jpeg",
    alt: "MLRIT students at Chennai Drone Development Competition",
    section: "Aeronautical",
    title: "MLRIT students shine in the national <em>drone development</em> competition, Chennai",
    meta: "Aeronautical · 02 Apr 2025 · 6 min",
  },
];

const photoEssay = [
  {
    href: "https://mlrit.ac.in/21st-annual-day-celebrations/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2026/04/annual-day2.jpeg",
    alt: "21st Annual Day at MLRIT",
    tag: "14 Mar 2026 · Annual Day",
    title: "Trishna 2K26 — when two decades took a bow",
  },
  {
    href: "https://mlrit.ac.in/graduation-day-2025/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/07/Grad.jpg",
    alt: "Graduation Day 2025",
    tag: "28 Jul 2025 · Graduation",
    title: "Caps in the air, a class on its way out",
  },
  {
    href: "https://mlrit.ac.in/new-sports-grounds-inaugural-at-mlrit/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/09/Sports-inaugural.jpeg",
    alt: "New sports grounds at MLRIT",
    tag: "01 Sep 2025 · Sport",
    title: "First lap on the new grounds",
  },
];

const archiveTiles = [
  {
    href: "https://mlrit.ac.in/mlrit-hyderabad-receives-semi-humanoid-robot-from-aira/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2024/08/AIRA_Bot.jpeg",
    alt: "MLRIT receives semi-humanoid robot from AIRA",
    section: "Innovation",
    title: "MLRIT Hyderabad receives a <em>semi-humanoid robot</em> from AIRA",
    meta: "Newsroom · 03 Aug 2024 · 4 min",
  },
  {
    href: "https://mlrit.ac.in/cie-mlrit-hosts-equinox-2k24/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2024/12/Equinox-English.jpeg",
    alt: "CIE-MLRIT hosts Equinox 2K24",
    section: "Events",
    title: "CIE-MLRIT hosts <em>Equinox 2K24</em> — three days of pitches, prototypes and grants",
    meta: "CIE-MLRIT · 02 Dec 2024 · 5 min",
  },
  {
    href: "https://mlrit.ac.in/mlr-chairman-bagged-5-medals-in-swimming/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2025/04/Swimming1.jpeg",
    alt: "MLR Chairman wins 5 medals in swimming",
    section: "Sports",
    title: "The Chairman swims — and brings home <em>five medals</em>",
    meta: "Sports Desk · 08 Apr 2025 · 3 min",
  },
  {
    href: "https://mlrit.ac.in/acm-student-chapter-inaugurated-at-mlrit/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2024/11/ACMnews1.jpeg",
    alt: "ACM Student Chapter inaugurated at MLRIT",
    section: "Academics",
    title: "ACM Student Chapter inaugurated — a new home for the <em>CS community</em>",
    meta: "CSE Dept · 15 Sep 2024 · 4 min",
  },
  {
    href: "https://mlrit.ac.in/csi-organizes-guide-to-health-and-cyber-defense/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2024/12/CSI1.jpeg",
    alt: "CSI organizes guide to health and cyber defense",
    section: "Academics",
    title: "CSI hosts a one-day guide to <em>health & cyber defense</em>",
    meta: "CSI Chapter · 29 Nov 2024 · 3 min",
  },
  {
    href: "https://mlrit.ac.in/mlrit-mou-with-patpl/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2024/11/Aeronews1.jpeg",
    alt: "MLRIT MoU with PATPL",
    section: "Industry",
    title: "MLRIT signs an <em>MoU with PATPL</em> — aeronautical pipeline strengthened",
    meta: "Aeronautical · 15 Oct 2024 · 3 min",
  },
  {
    href: "https://mlrit.ac.in/indian-express-article-about-mlrit/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2024/07/MLRIT-article.jpeg",
    alt: "Indian Express article about MLRIT",
    section: "In the press",
    title: "The <em>Indian Express</em> profiles MLRIT — a quiet decade of student work",
    meta: "Press · 01 Jul 2024 · 6 min",
  },
  {
    href: "https://mlrit.ac.in/robotek-2k24-organized-by-dept-of-ece/news/",
    img: "https://mlrit.ac.in/wp-content/uploads/2024/05/Robotics.png",
    alt: "RoboTek 2K24 organized by ECE Dept",
    section: "Events",
    title: "RoboTek 2K24 — ECE department hosts a <em>national robotics</em> meet",
    meta: "ECE Dept · 15 May 2024 · 5 min",
  },
];
