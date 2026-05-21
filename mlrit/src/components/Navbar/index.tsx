import Link from "next/link";
import NavInteractions from "./NavInteractions";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="masthead masthead--v2">
        <div className="masthead__inner">
          <Link href="/" className="masthead__logo" aria-label="MLRIT Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/mlrit-logo-main.png"
              alt="MLRIT Logo"
              className="masthead__logo-img"
            />
          </Link>

          <div className="masthead__institute">
            <div className="masthead__mlr">
              M<span className="dot">·</span>L<span className="dot">·</span>R
            </div>
            <div className="masthead__institute-name">Institute of Technology</div>
            <div className="masthead__rule" />
            <div className="masthead__institute-caption">ENGINEERING · SCIENCES · SPORT</div>
          </div>

          <div className="masthead__est">
            <div className="masthead__est-top">
              <span className="masthead__est-dot" />
              <span className="masthead__est-text">EST · 2005</span>
            </div>
            <div className="masthead__est-loc">DUNDIGAL · HYDERABAD</div>
            <div className="masthead__est-badge">AUTONOMOUS · UGC &#x2019;15</div>
          </div>

          <div className="masthead__spacer" aria-hidden="true" />

          <a href="#contact" className="masthead__contact">
            <span className="masthead__contact-chev" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
            <span>Contact Us</span>
          </a>
        </div>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <div className="container main-nav__inner">
          <ul className="main-nav__list" id="mainNavList">
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                About <span className="chevron" />
              </a>
              <div className="dropdown">
                <div className="dropdown__col">
                  <h4>Institution</h4>
                  <a href="#">Vision and Mission</a>
                  <a href="#">Accreditations</a>
                </div>
              </div>
            </li>

            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                Academics <span className="chevron" />
              </a>
              <div className="dropdown">
                <div className="dropdown__col">
                  <h4>Programmes</h4>
                  <Link href="/departments">Undergraduate (B.Tech)</Link>
                  <Link href="/departments/pg">Postgraduate (M.Tech and MBA)</Link>
                </div>
                <div className="dropdown__col">
                  <h4>Resources</h4>
                  <a href="#">ERP</a>
                  <a href="#">LMS</a>
                  <a href="#">Academic Calendar</a>
                  <a href="#">Edmit - Course Registration</a>
                  <a href="#">Exam Portal</a>
                </div>
              </div>
            </li>

            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                Admissions <span className="chevron" />
              </a>
              <div className="dropdown">
                <div className="dropdown__col">
                  <h4>Undergraduate</h4>
                  <a href="#">How to Apply</a>
                  <a href="#">Eligibility</a>
                  <a href="#">Fee Structure</a>
                  <a href="#">Scholarships</a>
                </div>
              </div>
            </li>

            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                Research <span className="chevron" />
              </a>
              <div className="dropdown">
                <div className="dropdown__col">
                  <h4>Programs and Centres</h4>
                  <Link href="/research/overview">Overview</Link>
                  <Link href="/research/centers">Research Centers</Link>
                  <Link href="/research/sponsored-projects">Sponsored Projects</Link>
                  <Link href="/research/scholars">Research Scholars</Link>
                  <Link href="/research/doctoral-faculty">Doctoral Faculty</Link>
                  <Link href="/research/ipfc">IPFC Centre</Link>
                </div>
                <div className="dropdown__col">
                  <h4>Resources</h4>
                  <Link href="/research/publications">Publications</Link>
                  <Link href="/research/patents">Patents (IPRs)</Link>
                  <Link href="/research/consultancy">Consultancy</Link>
                  <Link href="/research/entrepreneurship">Entrepreneurship</Link>
                  <Link href="/research/policies">Policies and Forms</Link>
                </div>
              </div>
            </li>

            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                Campus <span className="chevron" />
              </a>
              <div className="dropdown">
                <div className="dropdown__col">
                  <h4>Facilities</h4>
                  <a href="#">Hostels</a>
                  <a href="#">Sports</a>
                  <a href="#">Cafeteria</a>
                  <a href="#">Transport</a>
                </div>
                <div className="dropdown__col">
                  <h4>Student Life</h4>
                  <a href="#">Clubs and Societies</a>
                  <a href="#">Events</a>
                </div>
              </div>
            </li>

            <li className="main-nav__item">
              <a href="#" className="main-nav__link">
                IQAC <span className="chevron" />
              </a>
              <div className="dropdown">
                <div className="dropdown__col">
                  <h4>Quality &amp; Accreditation</h4>
                  <Link href="/iqac">IQAC</Link>
                  <a href="https://naac.mlrit.ac.in/" target="_blank" rel="noopener">NAAC</a>
                  <Link href="/accreditation/nba">NBA</Link>
                </div>
              </div>
            </li>

            <li className="main-nav__item">
              <Link href="/placements" className="main-nav__link">
                Placements
              </Link>
            </li>

            <li
              className="main-nav__item main-nav__item--right main-nav__item--chronicles"
              style={{ marginRight: "8px" }}
            >
              <Link href="/chronicles" className="main-nav__link">
                MLRIT Chronicles <span className="chevron" />
              </Link>
              <div
                className="dropdown dropdown--right dropdown--chronicles"
                role="region"
                aria-label="MLRIT Chronicles"
              >
                <div className="chron-ep__header" data-reveal>
                  <div className="chron-ep__header-left">
                    <span className="chron-ep__eyebrow">MLRIT Chronicles</span>
                    <span className="chron-ep__subtitle">
                      Stories, events &amp; campus life
                    </span>
                  </div>
                  <Link href="/chronicles" className="chron-ep__header-cta">
                    Explore Full Edition{" "}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 6.5h9M8 3.5l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="chron-ep__main">
                  <Link href="/chronicles" className="chron-ep__hero" data-reveal>
                    <div className="chron-ep__hero-img-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://mlrit.ac.in/wp-content/uploads/2026/04/annual-day2.jpeg"
                        alt="21st Annual Day at MLRIT"
                        className="chron-ep__hero-img"
                        loading="eager"
                      />
                    </div>
                    <div className="chron-ep__hero-overlay">
                      <span className="chron-ep__chip chron-ep__chip--campus">
                        Campus
                      </span>
                      <h2 className="chron-ep__hero-headline">
                        621 placement offers, ₹51 LPA highest — MLRIT closes its
                        strongest season yet
                      </h2>
                      <div className="chron-ep__hero-meta">
                        <span>Apr 2026</span>
                        <span className="chron-ep__hero-read">Read Story →</span>
                      </div>
                    </div>
                  </Link>
                  <div className="chron-ep__rail" data-reveal>
                    <div className="chron-ep__rail-head">Today at MLRIT</div>
                    <ul className="chron-ep__rail-list">
                      {railItems.map((it) => (
                        <li key={it.title} className="chron-ep__rail-item">
                          <Link
                            href="/chronicles"
                            className="chron-ep__rail-link"
                          >
                            <span
                              className={`chron-ep__rail-tag chron-ep__rail-tag--${it.tagClass}`}
                            >
                              {it.tag}
                            </span>
                            <span className="chron-ep__rail-title">
                              {it.title}
                            </span>
                            <span className="chron-ep__rail-date">{it.date}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/chronicles" className="chron-ep__rail-all">
                      All notices &amp; circulars →
                    </Link>
                  </div>
                </div>
                <div className="chron-ep__stories" data-reveal>
                  <div className="chron-ep__stories-head">Featured Stories</div>
                  <div className="chron-ep__stories-grid">
                    {featuredStories.map((s) => (
                      <Link
                        key={s.title}
                        href="/chronicles"
                        className="chron-ep__story-card"
                      >
                        <div className="chron-ep__story-img-wrap">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={s.img}
                            alt={s.alt}
                            className="chron-ep__story-img"
                            loading="lazy"
                          />
                        </div>
                        <div className="chron-ep__story-body">
                          <span className={`chron-ep__chip chron-ep__chip--${s.chip}`}>
                            {s.chipLabel}
                          </span>
                          <p className="chron-ep__story-title">{s.title}</p>
                          <span className="chron-ep__story-date">{s.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="chron-ep__media" data-reveal>
                  <span className="chron-ep__media-label">In the News</span>
                  <div className="chron-ep__media-list">
                    {pressItems.map((p) => (
                      <Link
                        key={p.headline}
                        href="/chronicles"
                        className="chron-ep__media-item"
                      >
                        <span className="chron-ep__media-pub">{p.pub}</span>
                        <span className="chron-ep__media-dot">·</span>
                        <span className="chron-ep__media-headline">
                          {p.headline}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="main-nav__item main-nav__item--support">
              <a href="#" className="main-nav__link main-nav__link--support">
                <span className="support-avatar" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle
                      cx="9"
                      cy="6"
                      r="3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 15.5c0-3.038 3.134-5.5 7-5.5s7 2.462 7 5.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Support
              </a>
              <div className="support-panel">
                <div className="support-panel__divider" />
                <p className="support-panel__heading">Talk with us</p>
                <div className="support-panel__call-row">
                  <a
                    href="tel:18005724363"
                    className="support-panel__call-btn"
                    aria-label="Call toll free"
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="16" fill="#1F6B24" />
                      <path
                        d="M11.5 10h2.8l1.2 3-1.6 1a9.1 9.1 0 0 0 4.1 4.1l1-1.6 3 1.2v2.8A1.5 1.5 0 0 1 20.5 22C13.6 22 10 18.4 10 11.5A1.5 1.5 0 0 1 11.5 10Z"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                  <span className="support-panel__call-text">
                    Toll Free: 1800 572 4363
                  </span>
                </div>
                <div className="support-panel__divider" />
                <p className="support-panel__heading">Connect with us</p>
                <div className="support-panel__socials">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className="support-panel__social"
                      aria-label={s.label}
                      dangerouslySetInnerHTML={{ __html: s.svg }}
                    />
                  ))}
                </div>
                <p className="support-panel__heading">Find us</p>
                <div className="support-panel__map">
                  <iframe
                    src="https://maps.google.com/maps?q=MLR+Institute+of+Technology+Dundigal+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      borderRadius: "15px",
                      display: "block",
                      background: "#1a1a1a",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MLRIT Location"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <NavInteractions />
    </header>
  );
}

const railItems = [
  {
    tag: "EXAM",
    tagClass: "exam",
    title: "I B.Tech II Sem R25 MID-2 Timetable — June 2026",
    date: "4 May 2026",
  },
  {
    tag: "MARKS",
    tagClass: "marks",
    title: "II B.Tech II Sem CIE-II Internal Marks — check portal",
    date: "8 May 2026",
  },
  {
    tag: "EVENT",
    tagClass: "event",
    title: "Workshop Carnival 2026 — 10–11 April",
    date: "10 Apr 2026",
  },
  {
    tag: "PLACE",
    tagClass: "placement",
    title: "Cognizant, Infosys, HCL Tech — 621 offers this season",
    date: "Apr 2026",
  },
  {
    tag: "SUPP",
    tagClass: "supp",
    title: "II B.Tech Supplementary Exams — June 2026 Timetable",
    date: "4 May 2026",
  },
  {
    tag: "EVENT",
    tagClass: "event",
    title: "Zenith — Annual Tech Fest, Dec 18–20 2025",
    date: "Dec 2025",
  },
];

const featuredStories = [
  {
    img: "https://mlrit.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-06-at-18.34.19.jpeg",
    alt: "Koduri Viplav",
    chip: "student",
    chipLabel: "Student",
    title: "Koduri Viplav chosen for Viksit Bharat Young Leaders Dialogue 2026",
    date: "8 Jan 2026",
  },
  {
    img: "https://mlrit.ac.in/wp-content/uploads/2026/01/WhatsApp-Image-2025-12-30-at-18.32.07.jpeg",
    alt: "TSFA-UNESCO workshop",
    chip: "workshop",
    chipLabel: "Workshop",
    title:
      "TSFA–UNESCO workshop on sustainable development hosted at MLRIT",
    date: "2 Jan 2026",
  },
  {
    img: "https://files.mlrit.ac.in/zenith.jpg",
    alt: "Zenith 2025",
    chip: "fest",
    chipLabel: "Tech Fest",
    title:
      "Zenith 2025 — three days, dozens of events, one campus fully switched on",
    date: "20 Dec 2025",
  },
];

const pressItems = [
  {
    pub: "The Hindu",
    headline: "MLRIT ranked among top T-schools in India by DataQuest 2026",
  },
  {
    pub: "Times of India",
    headline:
      "Hyderabad college student selected for PM's Young Leaders programme",
  },
  {
    pub: "Eenadu",
    headline: "MLRIT places 621 students in 2026 campus recruitment drive",
  },
];

const socials = [
  {
    label: "X / Twitter",
    href: "https://x.com/mlritin",
    svg: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="35" fill="#000"/><path d="M39.77 32.36L46.88 24h-1.68l-6.18 7.26L33.6 24H27l7.47 10.97L27 43.5h1.68l6.53-7.67 5.21 7.67H47l-7.23-11.14zm-2.31 2.71l-.76-1.09-6.02-8.7h2.59l4.86 7.02.76 1.09 6.32 9.14h-2.59l-5.16-7.46z" fill="#fff"/></svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/school/mlr-institute-of-technology/",
    svg: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="35" fill="#0A66C2"/><text x="35" y="43" text-anchor="middle" font-size="26" font-family="Arial" fill="#fff" font-weight="bold">in</text></svg>`,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCAfZfemyTCM-965RZy6QiGA",
    svg: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="35" fill="#FF0000"/><polygon points="28,24 28,46 50,35" fill="#fff"/></svg>`,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Mlrit/",
    svg: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none"><circle cx="35" cy="35" r="35" fill="#1877F2"/><text x="35" y="44" text-anchor="middle" font-size="30" font-family="Arial" fill="#fff" font-weight="bold">f</text></svg>`,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/mlritofficial/",
    svg: `<svg width="70" height="70" viewBox="0 0 70 70" fill="none"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#fdf497"/><stop offset="45%" stop-color="#fd5949"/><stop offset="60%" stop-color="#d6249f"/><stop offset="90%" stop-color="#285AEB"/></radialGradient></defs><circle cx="35" cy="35" r="35" fill="url(#ig)"/><rect x="20" y="20" width="30" height="30" rx="8" stroke="#fff" stroke-width="2.5" fill="none"/><circle cx="35" cy="35" r="7" stroke="#fff" stroke-width="2.5" fill="none"/><circle cx="44" cy="26" r="2" fill="#fff"/></svg>`,
  },
];
