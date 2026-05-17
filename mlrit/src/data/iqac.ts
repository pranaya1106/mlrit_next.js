import type { IQACPage, IQACSection } from "./iqac-types";

/* ───────────────────────────────────────────────────────────────
   Section atoms — defined once, reused across overview + subpages.
   ─────────────────────────────────────────────────────────────── */

const aboutSection: IQACSection = {
  id: "about",
  label: "About IQAC",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The Internal Quality Assurance Cell (IQAC) at Marri Laxman Reddy Institute of Technology was established in 2007 in accordance with the guidelines of the National Assessment and Accreditation Council (NAAC). The Cell was set up to institutionalise the pursuit of excellence through systematic and sustained quality enhancement across all academic and administrative functions of the institution.",
        "IQAC functions as the nodal agency for all quality-related activities at MLRIT. It coordinates with departments, examination cell, administrative offices, and external regulatory bodies — including NAAC, NBA, AICTE, UGC, and JNTUH — to develop quality benchmarks, monitor performance, and drive continuous improvement. The Cell is responsible for preparing the Annual Quality Assurance Report (AQAR) submitted to NAAC each year and for facilitating self-study and peer review processes.",
      ],
    },
    { kind: "h3", text: "Institutional Profile" },
    {
      kind: "table",
      columns: ["Parameter", "Details"],
      rows: [
        ["Year of Establishment of Institution", "2005–06"],
        ["Year of Establishment of IQAC", "2007"],
        ["Affiliated University", "Jawaharlal Nehru Technological University, Hyderabad (JNTUH)"],
        ["UGC Autonomous Status", "Granted 2015"],
        ["Regulatory Bodies", "AICTE, NAAC, NBA, UGC"],
        ["NAAC Accreditation", "Grade A — 2nd Cycle"],
        ["NBA Accreditation", "CSE, ECE, ME (Cycle II); Aeronautical, DS, AI&ML (Cycle I)"],
        ["NIRF Ranking 2025", "201–300, Engineering Category"],
        [
          "NAAC Portal",
          { kind: "link", label: "naac.mlrit.ac.in", href: "https://naac.mlrit.ac.in/", external: true },
        ],
      ],
    },
  ],
};

const coordinatorSection: IQACSection = {
  id: "coordinator",
  label: "Head IQAC",
  blocks: [
    {
      kind: "coordinator",
      photo: {
        src: "/departments/images/freshman/radhika-devi.jpg",
        alt: "Dr. Radhika Devi V",
      },
      name: "Dr. Radhika Devi V",
      designation:
        "Director &amp; Dean, Humanities and Sciences — Head IQAC<br />Marri Laxman Reddy Institute of Technology, Dundigal",
      bio: [
        "Dr. Radhika Devi V is an acclaimed academician and administrator with over 21 years of experience in technical education. She holds a Master's degree and Ph.D in Physics from the University of Hyderabad, with research specialisations in Density Functional Theory, Transparent Conducting Oxides, Smart Materials, and ICT in Higher Education.",
        "She has published approximately 20 research papers in national and international journals and has been recognised with the Swarna Jayanti Puruskar by the National Academy of Sciences India for research excellence, and two IUCEE Showcase Awards for academic leadership and teaching excellence. As Head IQAC, she oversees all quality assurance, accreditation, and continuous improvement initiatives at MLRIT.",
        '<strong>Email:</strong> <a href="mailto:iqac@mlrit.ac.in">iqac@mlrit.ac.in</a>',
      ],
    },
  ],
};

const visionSection: IQACSection = {
  id: "vision",
  label: "Vision",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "To ensure quality culture as the prime concern of the institution through institutionalising and internalising all initiatives undertaken with internal and external support — making MLRIT a centre of excellence in technical education and research.",
      ],
    },
  ],
};

const missionSection: IQACSection = {
  id: "mission",
  label: "Mission",
  blocks: [
    {
      kind: "ul",
      items: [
        { text: "To develop a system of conscious, consistent, and catalytic improvement in the overall performance of the institution." },
        { text: "To foster a learner-centric environment through robust quality assurance frameworks and participatory teaching-learning practices." },
        { text: "To promote transparency and institutional growth through systematic performance evaluation and stakeholder feedback." },
        { text: "To build and sustain industry and academic collaborations that enhance faculty development and student outcomes." },
        { text: "To develop and implement quality benchmarks and parameters across all academic and administrative activities." },
        { text: "To document and disseminate best practices and quality improvements institution-wide." },
      ],
    },
  ],
};

const objectivesSection: IQACSection = {
  id: "objectives",
  label: "Key Objectives",
  heading: "Key Objectives for Quality Enhancement",
  blocks: [
    {
      kind: "ol",
      items: [
        { text: "Ensure timely, efficient, and progressive performance of academic, administrative, and financial tasks." },
        { text: "Ensure the relevance and quality of academic and research programmes through regular curriculum review." },
        { text: "Equip students with knowledge, skills, and values necessary for global competitiveness and lifelong learning." },
        { text: "Set benchmarks for teaching, research, and administrative performance and monitor Key Performance Indicators (KPIs)." },
        { text: "Implement self-assessment tools and conduct periodic academic and administrative audits." },
        { text: "Collect, analyse, and act upon feedback from students, alumni, parents, employers, and faculty." },
        { text: "Optimise and integrate modern methods of teaching, learning, and evaluation." },
        { text: "Promote research sharing and collaborative networking with institutions in India and abroad." },
        { text: "Ensure adequate maintenance and proper allocation of infrastructure, support structures, and services." },
        { text: "Prepare and submit the Annual Quality Assurance Report (AQAR) to NAAC each academic year." },
      ],
    },
  ],
};

const functionalitiesSection: IQACSection = {
  id: "functionalities",
  label: "Functionalities",
  blocks: [
    { kind: "h3", text: "1. Quality Standards and Benchmarks" },
    {
      kind: "prose",
      paragraphs: [
        "Development and application of quality standards, benchmarks, and parameters for the various academic and administrative activities of the institution.",
      ],
    },
    { kind: "h3", text: "2. Curriculum and Academic Process Evaluation" },
    {
      kind: "prose",
      paragraphs: [
        "Facilitating the creation of a learner-centric environment conducive to quality education through periodic curriculum review, adoption of Outcome-Based Education, and integration of industry-aligned syllabi.",
      ],
    },
    { kind: "h3", text: "3. Assessment and Feedback Mechanisms" },
    {
      kind: "prose",
      paragraphs: [
        "Collection and analysis of feedback from students, alumni, employers, and academic peers on teaching quality, infrastructure, support services, and overall institutional performance.",
      ],
    },
    { kind: "h3", text: "4. Academic and Administrative Audits" },
    {
      kind: "prose",
      paragraphs: [
        "Organisation and conduct of academic audits, administrative audits, green audits, energy audits, and environmental audits to ensure compliance with quality standards and regulatory requirements.",
      ],
    },
    { kind: "h3", text: "5. Quality Documentation and Reporting" },
    {
      kind: "prose",
      paragraphs: [
        "Maintaining systematic documentation of all quality-related activities and programmes. Preparation and submission of AQAR to NAAC, coordination of NBA Self-Assessment Reports (SAR), and management of NAAC documentation.",
      ],
    },
    { kind: "h3", text: "6. Capacity Building Programmes" },
    {
      kind: "prose",
      paragraphs: [
        "Organisation of faculty development programmes, workshops, seminars, and induction training aimed at enhancing the professional competence of teaching and non-teaching staff.",
      ],
    },
    { kind: "h3", text: "7. Performance Monitoring" },
    {
      kind: "prose",
      paragraphs: [
        "Semester-wise review of academic performance, student outcomes, faculty development, and research activity. Monitoring of CO, PO, and PSO attainment levels and documenting corrective actions taken.",
      ],
    },
    { kind: "h3", text: "8. Infrastructure and Resource Planning" },
    {
      kind: "prose",
      paragraphs: [
        "Assisting in the planning and management of physical infrastructure, learning resources, library facilities, laboratory equipment, and ICT infrastructure in line with institutional quality goals.",
      ],
    },
    { kind: "h3", text: "9. Data Management and Transparency" },
    {
      kind: "prose",
      paragraphs: [
        "Maintaining institutional data for AISHE, NIRF, NAAC, and NBA submissions. Ensuring transparency in academic and administrative processes through systematic record-keeping and public disclosure.",
      ],
    },
    { kind: "h3", text: "10. Liaison and Advisory Coordination" },
    {
      kind: "prose",
      paragraphs: [
        "Acting as the central liaison between the institution and external accreditation and assessment bodies — NAAC, NBA, AICTE, UGC, and JNTUH — and providing advisory support to departments on quality initiatives.",
      ],
    },
  ],
};

const compositionSection: IQACSection = {
  id: "composition",
  label: "IQAC Composition",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The IQAC is constituted as per NAAC guidelines with representation from management, senior faculty, administrative staff, industry, alumni, and students. The committee is reconstituted annually.",
      ],
    },
    {
      kind: "table",
      columns: ["S.No.", "Name", "Designation / Department", "Role in IQAC"],
      rows: [
        ["1", "Dr. P. Ravinder Reddy", "Principal", "Chairperson"],
        ["2", "Dr. Radhika Devi V", "Director & Dean, Humanities and Sciences", "Head IQAC / Coordinator"],
        ["3", "—", "Dean, Academics", "Member"],
        ["4", "—", "Head of Department, CSE", "Member"],
        ["5", "—", "Head of Department, ECE", "Member"],
        ["6", "—", "Head of Department, EEE", "Member"],
        ["7", "—", "Head of Department, Mechanical Engineering", "Member"],
        ["8", "—", "Head of Department, Civil Engineering", "Member"],
        ["9", "—", "Controller of Examinations", "Member (Administration)"],
        ["10", "—", "Industry / Corporate Representative", "External Member"],
        ["11", "—", "Alumni Representative", "External Member"],
        ["12", "—", "Student Representative", "Student Member"],
      ],
    },
    {
      kind: "note",
      text: "* Committee membership is revised annually. Contact the IQAC office for the current list with faculty names.",
    },
  ],
};

const aqarSection: IQACSection = {
  id: "aqar",
  label: "AQAR Reports",
  heading: "Annual Quality Assurance Report (AQAR)",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The Annual Quality Assurance Report (AQAR) is prepared by the IQAC and submitted to NAAC each academic year. It documents the quality initiatives undertaken, performance indicators monitored, and improvements achieved during the year.",
      ],
    },
    {
      kind: "doc-list",
      items: [
        { label: "AQAR 2023–24", href: "https://files.mlrit.ac.in/iqac/2023-24-AQAR.pdf", yearTag: "2024", external: true },
        { label: "AQAR 2021–22", href: "https://files.mlrit.ac.in/iqac/aqar21-22.pdf", yearTag: "2022", external: true },
        { label: "AQAR 2020–21", href: "https://mlrit.ac.in/wp-content/uploads/iqac/aqar/AQAR_A.Y.2020-21.pdf", yearTag: "2021", external: true },
        { label: "AQAR 2019–20", href: "https://mlrit.ac.in/wp-content/uploads/iqac/aqar/AQAR_A.Y.2019-20.pdf", yearTag: "2020", external: true },
        { label: "AQAR 2018–19", href: "https://mlrit.ac.in/wp-content/uploads/iqac/aqar/AQAR_A.Y.2018-19.pdf", yearTag: "2019", external: true },
        { label: "AQAR 2017–18", href: "https://mlrit.ac.in/wp-content/uploads/aqar/AQAR-2017-18.pdf", yearTag: "2018", external: true },
        { label: "AQAR 2016–17", href: "https://mlrit.ac.in/wp-content/uploads/aqar/AQAR-2016-17.pdf", yearTag: "2017", external: true },
      ],
    },
  ],
};

const minutesSection: IQACSection = {
  id: "minutes",
  label: "Minutes of Meeting",
  heading: "Minutes of Meeting and Action Taken Reports",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The IQAC conducts regular meetings to review quality initiatives, monitor progress on action items, and plan upcoming activities. Minutes of meetings and corresponding action taken reports are maintained for institutional records.",
      ],
    },
    {
      kind: "doc-list",
      items: [
        { label: "IQAC Meeting Minutes — 2024–25", href: "https://mlrit.ac.in/iqac/", yearTag: "2025", external: true },
        { label: "IQAC Meeting Minutes — 2023–24", href: "https://mlrit.ac.in/iqac/", yearTag: "2024", external: true },
        { label: "IQAC Meeting Minutes — 2022–23", href: "https://mlrit.ac.in/iqac/", yearTag: "2023", external: true },
      ],
    },
    {
      kind: "note",
      text: "* For complete meeting records, visit the IQAC office or the MLRIT IQAC portal.",
    },
  ],
};

const documentsSection: IQACSection = {
  id: "documents",
  label: "Documents",
  blocks: [
    { kind: "h3", text: "Strategic and Policy Documents" },
    {
      kind: "doc-list",
      items: [
        { label: "Strategic Perspective Plan 2022–27", href: "https://files.mlrit.ac.in/uploads/Committees/Strategic_Plan_2022-27.pdf", yearTag: "2022", external: true },
        { label: "Institutional Policies", href: "https://mlrit.ac.in/iqac/policies/", yearTag: "Online", external: true },
        { label: "IQAC Newsletters", href: "https://mlrit.ac.in/newsletters/", yearTag: "Online", external: true },
      ],
    },
    { kind: "h3", text: "Accreditation Documents" },
    {
      kind: "doc-list",
      items: [
        { label: "Self Study Report (SSR) — NAAC 2nd Cycle", href: "https://naac.mlrit.ac.in/assets/2ndcyclessr.pdf", yearTag: "NAAC", external: true },
        { label: "NIRF Ranking Report 2025 — Engineering (201–300)", href: "https://mlrit.ac.in/nirf-ranked-institution/", yearTag: "NIRF", external: true },
        { label: "AICTE Approvals Archive", href: "https://mlrit.ac.in/aicte-approvals/", yearTag: "AICTE", external: true },
      ],
    },
  ],
};

const contactSection: IQACSection = {
  id: "contact",
  label: "Contact",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "For queries related to IQAC activities, accreditation, AQAR reports, or quality assurance, contact the IQAC office directly.",
      ],
    },
    { kind: "h3", text: "IQAC Office" },
    {
      kind: "prose",
      paragraphs: [
        '<strong>Marri Laxman Reddy Institute of Technology</strong><br />Dundigal V, Survey No. 444, Dundigal<br />Medchal Malkajgiri, Telangana – 500 043<br /><br />Head IQAC: Dr. Radhika Devi V (Director &amp; Dean, Humanities and Sciences)<br />Phone: <a href="tel:+919652226061">+91 96522 26061</a><br />Email: <a href="mailto:iqac@mlrit.ac.in">iqac@mlrit.ac.in</a><br />Website: <a href="https://mlrit.ac.in/iqac/" target="_blank" rel="noopener">mlrit.ac.in/iqac</a>',
      ],
    },
    { kind: "h3", text: "Office Hours" },
    {
      kind: "prose",
      paragraphs: [
        "Monday – Friday: 9:00 AM – 5:00 PM<br />Saturday: 9:00 AM – 1:00 PM<br />Sunday and Public Holidays: Closed",
      ],
    },
  ],
};

/* ───────────────────────────────────────────────────────────────
   Pages.
   ─────────────────────────────────────────────────────────────── */

const banner = {
  eyebrow: "Quality Assurance",
  title: "Internal Quality Assurance Cell (IQAC)",
  watermark: "IQAC",
};

/**
 * `/iqac` — the full IQAC landing page mirroring the original `iqac.html`.
 * Renders every section with a sticky sidebar TOC.
 */
export const iqacOverview: IQACPage = {
  slug: "overview",
  sideTitle: "IQAC",
  metaTitle: "IQAC — MLRIT",
  metaDescription:
    "Internal Quality Assurance Cell (IQAC) at MLRIT — vision, mission, objectives, composition, AQAR reports, and meeting minutes.",
  banner,
  sections: [
    aboutSection,
    coordinatorSection,
    visionSection,
    missionSection,
    objectivesSection,
    functionalitiesSection,
    compositionSection,
    aqarSection,
    minutesSection,
    documentsSection,
    contactSection,
  ],
};

/**
 * Dynamic subpages under `/iqac/[slug]`. Each subpage is a curated
 * subset of the master section list, paired with its own banner copy.
 */
export const iqacPages: Record<string, IQACPage> = {
  about: {
    slug: "about",
    sideTitle: "About IQAC",
    metaTitle: "About IQAC — MLRIT",
    metaDescription:
      "About the IQAC at MLRIT — institutional profile, head IQAC, vision, mission, objectives, and functionalities.",
    banner: { eyebrow: "Quality Assurance", title: "About IQAC", watermark: "ABOUT" },
    sections: [
      aboutSection,
      coordinatorSection,
      visionSection,
      missionSection,
      objectivesSection,
      functionalitiesSection,
      compositionSection,
      contactSection,
    ],
  },
  "minutes-of-meetings": {
    slug: "minutes-of-meetings",
    sideTitle: "IQAC Minutes",
    metaTitle: "IQAC Minutes of Meetings — MLRIT",
    metaDescription:
      "Minutes of meetings and action-taken reports from the IQAC at MLRIT.",
    banner: { eyebrow: "Quality Assurance", title: "Minutes of Meeting", watermark: "MINUTES" },
    sections: [minutesSection, contactSection],
  },
  "aqar-reports": {
    slug: "aqar-reports",
    sideTitle: "AQAR",
    metaTitle: "AQAR Reports — MLRIT",
    metaDescription:
      "Annual Quality Assurance Reports (AQAR) submitted to NAAC by MLRIT.",
    banner: { eyebrow: "Quality Assurance", title: "AQAR Reports", watermark: "AQAR" },
    sections: [aqarSection, contactSection],
  },
  "best-practices": {
    slug: "best-practices",
    sideTitle: "Best Practices",
    metaTitle: "Best Practices & Documents — MLRIT IQAC",
    metaDescription:
      "Strategic plans, institutional policies, newsletters, and accreditation documents at MLRIT.",
    banner: { eyebrow: "Quality Assurance", title: "Best Practices & Documents", watermark: "DOCS" },
    sections: [documentsSection, contactSection],
  },
};

/** Slugs that appear in dynamic [slug] route generation. */
export const iqacSubpageSlugs = Object.keys(iqacPages);
