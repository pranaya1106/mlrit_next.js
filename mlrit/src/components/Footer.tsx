"use client";

import Image from "next/image";
import Link from "next/link";

const ACADEMICS = [
  { href: "https://mlrit.ac.in/about-us/course-intake/", label: "B.Tech Programs" },
  { href: "https://mlrit.ac.in/about-us/course-intake/", label: "M.Tech Programs" },
  { href: "https://mlrit.ac.in/mba/", label: "MBA" },
  { href: "https://mlrit.ac.in/research/details-of-research-scholar/", label: "Ph.D" },
  { href: "https://mlrit.ac.in/examinations/", label: "Academic Calendar" },
  { href: "https://mlrit.ac.in/examinations/", label: "Syllabus and Curriculum" },
  { href: "https://mlrit.ac.in/campus-life/library/", label: "Library" },
  { href: "https://mlrit.ac.in/examinations/", label: "Examinations" },
  { href: "https://mlrit.ac.in/innovation-cell/innovation-overview/", label: "Innovation Cell" },
];

const ADMISSIONS = [
  { href: "https://mlrit.ac.in/admissions/", label: "How to Apply" },
  { href: "https://mlrit.ac.in/admissions/", label: "Eligibility Criteria" },
  { href: "https://mlrit.ac.in/admissions/", label: "Fee Structure" },
  { href: "https://mlrit.ac.in/scholarships/", label: "Scholarships" },
  { href: "https://mlrit.ac.in/admissions/", label: "EAMCET Counselling" },
  { href: "https://mlrit.ac.in/admissions/", label: "International Students" },
  { href: "https://mlrit.ac.in/admissions/", label: "Lateral Entry" },
  { href: "https://files.mlrit.ac.in/uploads/ADMISSION_FORM_2024-25.pdf", label: "Application Form" },
];

const CAMPUS = [
  { href: "https://mlrit.ac.in/campus-life/", label: "Clubs and Societies" },
  { href: "https://mlrit.ac.in/sports/", label: "Sports and Fitness" },
  { href: "https://mlrit.ac.in/events/", label: "Cultural Events" },
  { href: "https://mlrit.ac.in/campus-life/hostel-facility/", label: "Hostel" },
  { href: "https://mlrit.ac.in/campus-life/cafeteria/", label: "Cafeteria" },
  { href: "https://mlrit.ac.in/campus-life/transport-facility/", label: "Transport" },
  { href: "https://mlrit.ac.in/campus-life/", label: "Health Centre" },
  { href: "https://mlrit.ac.in/virtual-tour/", label: "Virtual Tour" },
  { href: "https://mlrit.ac.in/campus-life/auditorium/", label: "Auditorium" },
];

const CONNECT = [
  { href: "https://mlrit.ac.in/about-us/", label: "About MLRIT" },
  { href: "https://mlrit.ac.in/about-us/governing-body/", label: "Leadership" },
  { href: "/placements", label: "Placements", internal: true },
  { href: "https://mlrit.ac.in/research/", label: "Research" },
  { href: "https://mlrit.ac.in/nirf-ranked-institution/", label: "NIRF Rankings" },
  { href: "https://mlrit.ac.in/category/news/", label: "Press and Media" },
  { href: "https://mlrit.ac.in/contactus/", label: "Contact Us" },
  { href: "https://alumni.mlrit.ac.in/", label: "Alumni" },
  { href: "https://mlrit.ac.in/careers/", label: "Careers" },
  { href: "https://mlrit.ac.in/iqac/", label: "IQAC" },
  { href: "https://naac.mlrit.ac.in/", label: "NAAC" },
];

export default function Footer() {
  return (
    <footer className="sticky-footer">
      <div className="sticky-footer__inner">
        <div className="sticky-footer__content">
          <div className="sticky-footer__bg" aria-hidden="true">
            <div className="sfbg sfbg--1" />
            <div className="sfbg sfbg--2" />
            <div className="sfbg sfbg--3" />
          </div>

          <div className="sf-cta">
            <div className="sf-cta__text">
              <h3>Start Your Journey at MLRIT</h3>
              <p>
                Applications open for B.Tech, M.Tech and MBA — limited seats.
              </p>
            </div>
            <div className="sf-cta__right">
              <div className="sf-cta__actions">
                <a
                  href="https://mlrit.ac.in/admissions/"
                  className="btn btn--primary"
                >
                  Apply Now
                </a>
                <a
                  href="https://mlrit.ac.in/wp-content/uploads/2024/05/MLRIT_Brochure.pdf"
                  className="btn btn--white"
                >
                  Download Brochure
                </a>
              </div>
              <form
                className="sf-newsletter sf-newsletter--cta"
                onSubmit={(e) => e.preventDefault()}
              >
                <input type="email" placeholder="Your email address" />
                <button type="submit" aria-label="Subscribe">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          <div className="sf-grid">
            <div className="sf-brand">
              <Image
                src="/mlrit-logo-main.png"
                alt="MLRIT"
                className="sf-brand__logo"
                width={180}
                height={60}
              />
              <p className="sf-brand__desc">
                MLR Institute of Technology, Dundigal, Hyderabad — shaping
                engineers and leaders since 2005.
              </p>
              <div className="sf-brand__contact">
                <a href="tel:+919652226061">+91 96522 26061</a>
                <a href="mailto:info@mlrinstitutions.ac.in">
                  info@mlrinstitutions.ac.in
                </a>
              </div>
              <div className="sf-brand__socials">
                <a
                  href="https://www.facebook.com/Mlrit/"
                  aria-label="Facebook"
                  className="sf-social-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mlr_institute_of_technology/"
                  aria-label="Instagram"
                  className="sf-social-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCAfZfemyTCM-965RZy6QiGA"
                  aria-label="YouTube"
                  className="sf-social-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="#0a0a0a"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/school/mlr-institute-of-technology/"
                  aria-label="LinkedIn"
                  className="sf-social-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/mlritin"
                  aria-label="X / Twitter"
                  className="sf-social-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            <FooterColumn title="Academics" items={ACADEMICS} />
            <FooterColumn title="Admissions" items={ADMISSIONS} />
            <FooterColumn title="Campus Life" items={CAMPUS} />
            <FooterColumn title="Connect" items={CONNECT} />
          </div>

          <div className="sf-bottom">
            <span>&copy; 2025 KMR Educational Society. All rights reserved.</span>
            <span className="sf-legal">
              <a href="https://mlrit.ac.in/mandatory-disclosures/">
                Mandatory Disclosures
              </a>
              <a href="https://mlrit.ac.in/aicte-approvals/">AICTE Approvals</a>
              <a href="https://mlrit.edugrievance.com/">Grievance Portal</a>
            </span>
          </div>

          <div className="sf-watermark" aria-hidden="true">
            MLRIT
          </div>
        </div>
      </div>
    </footer>
  );
}

type Item = { href: string; label: string; internal?: boolean };

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly Item[];
}) {
  return (
    <div className="sf-col">
      <h5>{title}</h5>
      <ul>
        {items.map((item) =>
          item.internal ? (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ) : (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
