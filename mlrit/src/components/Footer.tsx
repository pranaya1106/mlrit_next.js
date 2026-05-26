"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="nf-footer" id="footer">
      <div className="nf-cols">
        <div className="nf-col">
          <h5>About</h5>
          <ul>
            <li><Link href="/about/vision-mission/introduction">Our Story</Link></li>
            <li><Link href="/about/legacy">Leadership &amp; Legacy</Link></li>
            <li><Link href="/about/rankings-awards">Rankings &amp; Awards</Link></li>
            <li><Link href="/iqac">Accreditations</Link></li>
            <li><a href="https://mlrit.ac.in/careers/" target="_blank" rel="noopener">Careers at MLRIT</a></li>
          </ul>
        </div>

        <div className="nf-col">
          <h5>Academics</h5>
          <ul>
            <li><Link href="/departments">Undergraduate</Link></li>
            <li><Link href="/departments/pg">Postgraduate</Link></li>
            <li><Link href="/research/overview">Research</Link></li>
            <li><a href="https://mlrit.ac.in/faculty/" target="_blank" rel="noopener">Faculty</a></li>
          </ul>
        </div>

        <div className="nf-col">
          <h5>Admissions</h5>
          <ul>
            <li><a href="https://mlrit.ac.in/admissions/" target="_blank" rel="noopener">Apply Now</a></li>
            <li><a href="https://mlrit.ac.in/admissions/" target="_blank" rel="noopener">Fee Structure</a></li>
            <li><a href="https://mlrit.ac.in/scholarships/" target="_blank" rel="noopener">Scholarships</a></li>
            <li><a href="https://mlrit.ac.in/admissions/" target="_blank" rel="noopener">FAQs</a></li>
          </ul>
        </div>

        <div className="nf-col">
          <h5>Follow</h5>
          <ul>
            <li><a href="https://www.linkedin.com/school/mlr-institute-of-technology/" target="_blank" rel="noopener">LinkedIn <span className="nf-ext" aria-hidden="true">↗</span></a></li>
            <li><a href="https://www.instagram.com/mlritofficial/" target="_blank" rel="noopener">Instagram <span className="nf-ext" aria-hidden="true">↗</span></a></li>
            <li><a href="https://www.facebook.com/Mlrit/" target="_blank" rel="noopener">Facebook <span className="nf-ext" aria-hidden="true">↗</span></a></li>
            <li><a href="https://x.com/mlritin" target="_blank" rel="noopener">X.com <span className="nf-ext" aria-hidden="true">↗</span></a></li>
            <li><a href="https://www.youtube.com/channel/UCAfZfemyTCM-965RZy6QiGA" target="_blank" rel="noopener">YouTube <span className="nf-ext" aria-hidden="true">↗</span></a></li>
          </ul>
        </div>
      </div>

      <div className="nf-accred">
        <span className="nf-accred-label">Accredited by</span>
        <div className="nf-accred-logos">
          <img src="/nirf/naac.svg" alt="NAAC" />
          <img src="/nirf/aicte.svg" alt="AICTE" />
          <img src="/nirf/nba.svg" alt="NBA" />
        </div>
        <button
          type="button"
          className="nf-back-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top
          <span className="nf-back-top__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </span>
        </button>
      </div>

      <div className="nf-watermark-row" aria-hidden="true">
        <div className="nf-watermark">MLRIT</div>
      </div>

      <div className="nf-crafted">
        <em>Crafted with passion by</em> <strong>the Students</strong> <em>of MLRIT</em>
      </div>

      <div className="nf-bottom">
        <div className="nf-bottom__left">
          <span>© 2026 KMR Educational Society</span>
          <span className="dot">·</span>
          <span>Affiliated to JNTUH</span>
          <span className="dot">·</span>
          <span>Approved by AICTE</span>
        </div>
        <div className="nf-bottom__right">
          <a href="https://mlrit.ac.in/mandatory-disclosures/" target="_blank" rel="noopener">Privacy</a>
          <a href="https://mlrit.ac.in/aicte-approvals/" target="_blank" rel="noopener">Terms</a>
          <a href="#footer">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
