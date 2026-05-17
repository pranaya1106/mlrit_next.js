import type { IQACPage, IQACSection } from "./iqac-types";

/* ───────────────────────────────────────────────────────────────
   NBA accreditation page sections.
   ─────────────────────────────────────────────────────────────── */

const nbaAbout: IQACSection = {
  id: "about",
  label: "About NBA",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The National Board of Accreditation (NBA) is an autonomous quality assurance body constituted under AICTE. It evaluates engineering and technology programmes at the undergraduate and postgraduate levels against defined quality benchmarks, with an emphasis on graduate attributes, student outcomes, and the institution's commitment to continuous quality improvement.",
        "MLRIT has actively pursued NBA accreditation for its B.Tech programmes under the Outcome-Based Education (OBE) framework, following the Discipline Specific Criteria (DCS) pathway applicable to Tier-I autonomous institutions. The UGC Autonomous Status granted to MLRIT in 2015 enables the institution to design OBE-compliant curricula, conduct independent examinations, and carry out systematic attainment analysis at the course, programme, and institutional levels.",
      ],
    },
    { kind: "h3", text: "Key Details" },
    {
      kind: "table",
      columns: ["Parameter", "Details"],
      rows: [
        ["Accrediting Body", "National Board of Accreditation (NBA), New Delhi"],
        ["Accreditation Tier", "Tier-I (UGC Autonomous Institution)"],
        ["Accreditation Pathway", "Discipline Specific Criteria (DCS)"],
        ["Affiliated University", "Jawaharlal Nehru Technological University, Hyderabad (JNTUH)"],
        ["UGC Autonomous Status", "Granted 2015"],
        ["AICTE Approval", "Continuous — AY 2005–06 through AY 2025–26"],
        ["NBA Coordinator", "Dr. Radhika Devi V (Director & Dean H&S, Head IQAC)"],
      ],
    },
  ],
};

const nbaProgrammes: IQACSection = {
  id: "programmes",
  label: "Accredited Programmes",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The following B.Tech programmes at MLRIT have been accredited or have submitted Self-Assessment Reports (SAR) under the NBA DCS pathway. Detailed Curriculum Programme (DCP) documents are available for download.",
      ],
    },
    {
      kind: "table",
      columns: ["S.No.", "Programme", "Cycle", "DCP Document"],
      rows: [
        ["1", "B.Tech – Computer Science and Engineering (CSE)", "Cycle II", { kind: "link", label: "Download", href: "https://files.mlrit.ac.in/DCP_CSE.pdf", external: true }],
        ["2", "B.Tech – Electronics and Communication Engineering (ECE)", "Cycle II", { kind: "link", label: "Download", href: "https://files.mlrit.ac.in/DCP_ECE.pdf", external: true }],
        ["3", "B.Tech – Mechanical Engineering (ME)", "Cycle II", { kind: "link", label: "Download", href: "https://files.mlrit.ac.in/DCP_ME.pdf", external: true }],
        ["4", "B.Tech – Aeronautical Engineering", "Cycle I", { kind: "link", label: "Download", href: "https://files.mlrit.ac.in/DCP_AERO.pdf", external: true }],
        ["5", "B.Tech – CSE (Data Science)", "Cycle I", { kind: "link", label: "Download", href: "https://files.mlrit.ac.in/DCP_DS.pdf", external: true }],
        ["6", "B.Tech – CSE (AI & Machine Learning)", "Cycle I", { kind: "link", label: "Download", href: "https://files.mlrit.ac.in/DCP_AIML.pdf", external: true }],
      ],
    },
    {
      kind: "note",
      text: "* For current accreditation validity periods and peer-team visit dates, contact the NBA Cell / IQAC office.",
    },
  ],
};

const nbaObe: IQACSection = {
  id: "obe",
  label: "OBE Framework",
  heading: "Outcome-Based Education (OBE) Framework",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "MLRIT implements a structured Outcome-Based Education framework across all B.Tech programmes in alignment with NBA's Washington Accord graduate attributes. The key elements of the OBE framework are:",
      ],
    },
    {
      kind: "ul",
      items: [
        { strong: "Programme Educational Objectives (PEOs):", text: "Long-range career and professional goals of graduates, framed with structured inputs from alumni, employers, and faculty." },
        { strong: "Programme Outcomes (POs):", text: "Twelve graduate attributes aligned with NBA's competency framework and Washington Accord signatory standards." },
        { strong: "Programme Specific Outcomes (PSOs):", text: "Discipline-specific technical competencies defined for each B.Tech programme." },
        { strong: "Course Outcomes (COs):", text: "Measurable learning outcomes for every course, mapped to POs using Bloom's Taxonomy cognitive levels." },
        { strong: "Continuous Internal Evaluation (CIE) and End-Semester Examinations (ESE):", text: "Assessment rubrics designed to directly measure CO attainment." },
        { strong: "Annual Attainment Analysis:", text: "CO, PO, and PSO attainment is computed at the end of each academic year with documented corrective actions and curriculum revision decisions." },
        { strong: "Stakeholder Feedback Integration:", text: "Structured surveys from students, alumni, parents, and employers are analysed and integrated into the curriculum review cycle." },
      ],
    },
  ],
};

const nbaStatus: IQACSection = {
  id: "status",
  label: "Accreditation Status",
  blocks: [
    {
      kind: "table",
      columns: ["Programme", "Cycle", "Status"],
      rows: [
        ["B.Tech – Computer Science and Engineering (CSE)", "Cycle II", "Accredited"],
        ["B.Tech – Electronics and Communication Engineering (ECE)", "Cycle II", "Accredited"],
        ["B.Tech – Mechanical Engineering (ME)", "Cycle II", "Accredited"],
        ["B.Tech – Aeronautical Engineering", "Cycle I", "SAR Submitted"],
        ["B.Tech – CSE (Data Science)", "Cycle I", "SAR Submitted"],
        ["B.Tech – CSE (AI & Machine Learning)", "Cycle I", "SAR Submitted"],
      ],
    },
    {
      kind: "note",
      text: "* Status is updated following each NBA peer-team visit. Contact the IQAC office for current accreditation certificates and validity dates.",
    },
  ],
};

const nbaDcp: IQACSection = {
  id: "dcp",
  label: "DCP Documents",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "Detailed Curriculum Programme (DCP) documents describe the programme structure, course contents, PEOs, POs, PSOs, and assessment methodology for each programme.",
      ],
    },
    {
      kind: "table",
      columns: ["S.No.", "Document", "Department"],
      rows: [
        ["1", { kind: "link", label: "DCP — B.Tech Computer Science and Engineering", href: "https://files.mlrit.ac.in/DCP_CSE.pdf", external: true }, "CSE"],
        ["2", { kind: "link", label: "DCP — B.Tech Electronics and Communication Engineering", href: "https://files.mlrit.ac.in/DCP_ECE.pdf", external: true }, "ECE"],
        ["3", { kind: "link", label: "DCP — B.Tech Electrical and Electronics Engineering", href: "#", external: false }, "EEE"],
        ["4", { kind: "link", label: "DCP — B.Tech Mechanical Engineering", href: "https://files.mlrit.ac.in/DCP_ME.pdf", external: true }, "Mechanical"],
        ["5", { kind: "link", label: "DCP — B.Tech Aeronautical Engineering", href: "https://files.mlrit.ac.in/DCP_AERO.pdf", external: true }, "Aeronautical"],
        ["6", { kind: "link", label: "DCP — B.Tech CSE (Data Science)", href: "https://files.mlrit.ac.in/DCP_DS.pdf", external: true }, "CSE (DS)"],
        ["7", { kind: "link", label: "DCP — B.Tech CSE (AI & Machine Learning)", href: "https://files.mlrit.ac.in/DCP_AIML.pdf", external: true }, "CSE (AI&ML)"],
      ],
    },
    {
      kind: "note",
      text: "* EEE DCP will be updated when available. Contact the IQAC office for the latest document.",
    },
  ],
};

const nbaReports: IQACSection = {
  id: "reports",
  label: "Reports",
  blocks: [
    { kind: "h3", text: "AICTE Approvals" },
    {
      kind: "prose",
      paragraphs: [
        "MLRIT holds continuous AICTE approval since AY 2005–06. Annual approval letters are available for download.",
      ],
    },
    {
      kind: "doc-list",
      items: [
        { label: "AICTE Approval 2025–26", href: "https://files.mlrit.ac.in/AICTE%20Approvals/Aicte_Approvals_AY2025-2026.PDF", yearTag: "2025", external: true },
        { label: "AICTE Approval 2024–25", href: "https://files.mlrit.ac.in/AICTE%20Approvals/AICTE_Approval_2024-25.pdf", yearTag: "2024", external: true },
        { label: "AICTE Approval 2023–24", href: "https://files.mlrit.ac.in/AICTE%20Approvals/AICTE_Approval_2023-24.PDF", yearTag: "2023", external: true },
        { label: "All AICTE Approvals (2005–06 onwards)", href: "https://mlrit.ac.in/aicte-approvals/", yearTag: "Archive", external: true },
      ],
    },
    { kind: "h3", text: "Strategic Documents" },
    {
      kind: "doc-list",
      items: [
        { label: "Strategic Perspective Plan 2022–27", href: "https://files.mlrit.ac.in/uploads/Committees/Strategic_Plan_2022-27.pdf", yearTag: "2022", external: true },
      ],
    },
  ],
};

const nbaContact: IQACSection = {
  id: "contact",
  label: "Contact",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "For queries regarding NBA accreditation, SAR submissions, DCP documents, or OBE implementation at MLRIT, contact the NBA Cell.",
      ],
    },
    { kind: "h3", text: "NBA Cell / IQAC Office" },
    {
      kind: "prose",
      paragraphs: [
        '<strong>Marri Laxman Reddy Institute of Technology</strong><br />Dundigal V, Survey No. 444, Dundigal<br />Medchal Malkajgiri, Telangana – 500 043<br /><br />NBA Coordinator: Dr. Radhika Devi V (Director &amp; Dean H&amp;S, Head IQAC)<br />Phone: <a href="tel:+919652226061">+91 96522 26061</a><br />Email: <a href="mailto:iqac@mlrit.ac.in">iqac@mlrit.ac.in</a><br />DCP Portal: <a href="https://mlrit.ac.in/dcp/" target="_blank" rel="noopener">mlrit.ac.in/dcp</a>',
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
   NAAC accreditation page.
   ─────────────────────────────────────────────────────────────── */

const naacAbout: IQACSection = {
  id: "about",
  label: "About NAAC",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The National Assessment and Accreditation Council (NAAC) is an autonomous body of the University Grants Commission (UGC) that assesses and accredits higher education institutions in India. NAAC evaluates institutions across seven criteria covering curricular aspects, teaching-learning, research, infrastructure, student support, governance, and institutional values.",
        "MLRIT is accredited by NAAC with Grade A in the 2nd cycle. The institution maintains a dedicated NAAC portal documenting its Self Study Report (SSR), AQAR submissions, and supporting evidence across all NAAC criteria.",
      ],
    },
    { kind: "h3", text: "Accreditation Snapshot" },
    {
      kind: "table",
      columns: ["Parameter", "Details"],
      rows: [
        ["Accrediting Body", "National Assessment and Accreditation Council (NAAC), Bangalore"],
        ["Current Grade", "A — 2nd Cycle"],
        ["Affiliated University", "Jawaharlal Nehru Technological University, Hyderabad (JNTUH)"],
        ["UGC Autonomous Status", "Granted 2015"],
        ["IQAC Established", "2007"],
        ["NAAC Coordinator", "Dr. Radhika Devi V (Director & Dean H&S, Head IQAC)"],
        [
          "NAAC Portal",
          { kind: "link", label: "naac.mlrit.ac.in", href: "https://naac.mlrit.ac.in/", external: true },
        ],
      ],
    },
  ],
};

const naacDocuments: IQACSection = {
  id: "documents",
  label: "NAAC Documents",
  blocks: [
    { kind: "h3", text: "Self Study Reports & SSR" },
    {
      kind: "doc-list",
      items: [
        { label: "Self Study Report (SSR) — NAAC 2nd Cycle", href: "https://naac.mlrit.ac.in/assets/2ndcyclessr.pdf", yearTag: "SSR", external: true },
        { label: "NAAC Portal — Full Documentation", href: "https://naac.mlrit.ac.in/", yearTag: "Portal", external: true },
      ],
    },
    { kind: "h3", text: "AQAR Submissions" },
    {
      kind: "doc-list",
      items: [
        { label: "AQAR 2023–24", href: "https://files.mlrit.ac.in/iqac/2023-24-AQAR.pdf", yearTag: "2024", external: true },
        { label: "AQAR 2021–22", href: "https://files.mlrit.ac.in/iqac/aqar21-22.pdf", yearTag: "2022", external: true },
        { label: "AQAR 2020–21", href: "https://mlrit.ac.in/wp-content/uploads/iqac/aqar/AQAR_A.Y.2020-21.pdf", yearTag: "2021", external: true },
        { label: "AQAR 2019–20", href: "https://mlrit.ac.in/wp-content/uploads/iqac/aqar/AQAR_A.Y.2019-20.pdf", yearTag: "2020", external: true },
      ],
    },
  ],
};

const naacContact: IQACSection = {
  id: "contact",
  label: "Contact",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "For queries regarding NAAC accreditation, SSR documents, or AQAR submissions at MLRIT, contact the NAAC Cell / IQAC office.",
      ],
    },
    { kind: "h3", text: "NAAC Cell / IQAC Office" },
    {
      kind: "prose",
      paragraphs: [
        '<strong>Marri Laxman Reddy Institute of Technology</strong><br />Dundigal V, Survey No. 444, Dundigal<br />Medchal Malkajgiri, Telangana – 500 043<br /><br />NAAC Coordinator: Dr. Radhika Devi V (Director &amp; Dean H&amp;S, Head IQAC)<br />Phone: <a href="tel:+919652226061">+91 96522 26061</a><br />Email: <a href="mailto:iqac@mlrit.ac.in">iqac@mlrit.ac.in</a><br />NAAC Portal: <a href="https://naac.mlrit.ac.in/" target="_blank" rel="noopener">naac.mlrit.ac.in</a>',
      ],
    },
  ],
};

/* ───────────────────────────────────────────────────────────────
   NIRF page.
   ─────────────────────────────────────────────────────────────── */

const nirfAbout: IQACSection = {
  id: "about",
  label: "About NIRF",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "The National Institutional Ranking Framework (NIRF) was launched by the Ministry of Education, Government of India to rank institutions of higher education across the country. NIRF evaluates institutions on five broad parameters: Teaching, Learning and Resources; Research and Professional Practice; Graduation Outcomes; Outreach and Inclusivity; and Perception.",
        "MLRIT participates in NIRF every year, submitting institutional data through the official NIRF portal. The framework helps the institution benchmark its performance against peer institutions nationally.",
      ],
    },
    { kind: "h3", text: "Ranking Snapshot" },
    {
      kind: "table",
      columns: ["Parameter", "Details"],
      rows: [
        ["Ranking Year", "2025"],
        ["Category", "Engineering"],
        ["Rank Band", "201–300"],
        ["Submitted via", "NIRF Portal (nirfindia.org)"],
        ["NIRF Coordinator", "Dr. Radhika Devi V (Director & Dean H&S, Head IQAC)"],
      ],
    },
  ],
};

const nirfReports: IQACSection = {
  id: "reports",
  label: "NIRF Reports",
  blocks: [
    { kind: "h3", text: "Public Disclosures" },
    {
      kind: "doc-list",
      items: [
        { label: "NIRF Ranking Report 2025 — Engineering (201–300)", href: "https://mlrit.ac.in/nirf-ranked-institution/", yearTag: "2025", external: true },
        { label: "NIRF India — National Portal", href: "https://www.nirfindia.org/", yearTag: "Portal", external: true },
      ],
    },
  ],
};

const nirfContact: IQACSection = {
  id: "contact",
  label: "Contact",
  blocks: [
    {
      kind: "prose",
      paragraphs: [
        "For queries regarding NIRF submissions or institutional rankings data at MLRIT, contact the NIRF Cell / IQAC office.",
      ],
    },
    { kind: "h3", text: "NIRF Cell / IQAC Office" },
    {
      kind: "prose",
      paragraphs: [
        '<strong>Marri Laxman Reddy Institute of Technology</strong><br />Dundigal V, Survey No. 444, Dundigal<br />Medchal Malkajgiri, Telangana – 500 043<br /><br />NIRF Coordinator: Dr. Radhika Devi V (Director &amp; Dean H&amp;S, Head IQAC)<br />Phone: <a href="tel:+919652226061">+91 96522 26061</a><br />Email: <a href="mailto:iqac@mlrit.ac.in">iqac@mlrit.ac.in</a>',
      ],
    },
  ],
};

/* ───────────────────────────────────────────────────────────────
   Pages keyed by slug.
   ─────────────────────────────────────────────────────────────── */

export const accreditationPages: Record<string, IQACPage> = {
  nba: {
    slug: "nba",
    sideTitle: "NBA",
    metaTitle: "NBA Accreditation — MLRIT",
    metaDescription:
      "National Board of Accreditation (NBA) status, OBE framework, accredited B.Tech programmes, and DCP documents at MLRIT.",
    banner: {
      eyebrow: "Accreditation",
      title: "National Board of Accreditation (NBA)",
      watermark: "NBA",
    },
    sections: [nbaAbout, nbaProgrammes, nbaObe, nbaStatus, nbaDcp, nbaReports, nbaContact],
  },
  naac: {
    slug: "naac",
    sideTitle: "NAAC",
    metaTitle: "NAAC Accreditation — MLRIT",
    metaDescription:
      "National Assessment and Accreditation Council (NAAC) status, SSR documents, and AQAR submissions at MLRIT.",
    banner: {
      eyebrow: "Accreditation",
      title: "National Assessment and Accreditation Council (NAAC)",
      watermark: "NAAC",
    },
    sections: [naacAbout, naacDocuments, naacContact],
  },
  nirf: {
    slug: "nirf",
    sideTitle: "NIRF",
    metaTitle: "NIRF Ranking — MLRIT",
    metaDescription:
      "National Institutional Ranking Framework (NIRF) participation, ranking band, and public disclosures at MLRIT.",
    banner: {
      eyebrow: "Rankings",
      title: "National Institutional Ranking Framework (NIRF)",
      watermark: "NIRF",
    },
    sections: [nirfAbout, nirfReports, nirfContact],
  },
};

export const accreditationSlugs = Object.keys(accreditationPages);

/** Cards rendered on `/iqac` for the Accreditation hub block. */
export const accreditationDirectory = [
  {
    slug: "naac",
    title: "NAAC",
    body: "Grade A — 2nd Cycle. Self Study Report (SSR), AQAR submissions, and full NAAC portal access.",
    href: "/accreditation/naac",
  },
  {
    slug: "nba",
    title: "NBA",
    body: "B.Tech programme accreditation under the DCS pathway with OBE framework implementation.",
    href: "/accreditation/nba",
  },
  {
    slug: "nirf",
    title: "NIRF",
    body: "Engineering category 201–300 (2025). National benchmarking under MoE's ranking framework.",
    href: "/accreditation/nirf",
  },
];
