import type { ResearchPage } from "./research-types";

const overview: ResearchPage = {
  slug: "overview",
  label: "Overview",
  metaTitle: "Research and Development — MLRIT",
  metaDescription:
    "MLR Institute of Technology runs research programmes through an independent R and D Cell — covering centres, sponsored projects, scholars, publications, patents and consultancy.",
  hero: {
    crumbLabel: "Overview",
    title: "Research and Development",
    titleEm: "at MLR Institute of Technology.",
    lede:
      "MLR Institute of Technology focuses on research programmes through an independent R and D Cell — established to promote, monitor and elevate the research culture of the college across faculty, scholars and student innovators.",
    meta: [
      { label: "Research Centres", value: "3" },
      { label: "Publications", value: "2016 – 2025" },
      { label: "IPFC Established", value: "2019" },
      { label: "Doctoral Faculty", value: "25+" },
    ],
  },
  sections: [
    {
      eyebrow: "Research Hub",
      heading: "Explore the Research section.",
      lede:
        "Centres, scholars, projects, publications, patents and the policies behind it all — start anywhere.",
      blocks: [
        {
          kind: "hub-list",
          tiles: [
            {
              num: "01",
              title: "Research Centres",
              body:
                "Three JNTUH-recognised research centres — CSE, ECE and Mechanical — driving doctoral and sponsored research.",
              cta: "Explore Centres →",
              href: "/research/centers",
            },
            {
              num: "02",
              title: "Sponsored Projects",
              body:
                "Externally funded projects from DST, AICTE, DRDO, DBT, MSME and industry partners.",
              cta: "View Projects →",
              href: "/research/sponsored-projects",
            },
            {
              num: "03",
              title: "Research Scholars",
              body:
                "Full-time and part-time Ph.D. scholars working under JNTUH-recognised supervisors.",
              cta: "Meet the Scholars →",
              href: "/research/scholars",
            },
            {
              num: "04",
              title: "Doctoral Faculty",
              body:
                "Recognised research supervisors at MLRIT — browse by department and area of specialisation.",
              cta: "Find a Supervisor →",
              href: "/research/doctoral-faculty",
            },
            {
              num: "05",
              title: "IPFC Centre",
              body:
                "MSME-supported Intellectual Property Facilitation Centre, established in 2019.",
              cta: "Visit the IPFC →",
              href: "/research/ipfc",
            },
            {
              num: "06",
              title: "Publications",
              body:
                "Year-wise journal and conference publications from 2016 onwards.",
              cta: "Browse Publications →",
              href: "/research/publications",
            },
            {
              num: "07",
              title: "Patents (IPRs)",
              body:
                "Filed, published and granted patents — and how to file your own through the IPFC.",
              cta: "Patents and IPRs →",
              href: "/research/patents",
            },
            {
              num: "08",
              title: "Consultancy",
              body:
                "Industry, MSME and government engagements via MLRIT faculty and labs.",
              cta: "Engage MLRIT →",
              href: "/research/consultancy",
            },
            {
              num: "09",
              title: "Entrepreneurship",
              body:
                "Innovation Cell, incubation, IP and mentorship for student and faculty ventures.",
              cta: "Build a Venture →",
              href: "/research/entrepreneurship",
            },
            {
              num: "10",
              title: "Policies and Forms",
              body:
                "IP, R and D, Consultancy and Innovation policies — plus all downloadable forms.",
              cta: "Open the Library →",
              href: "/research/policies",
            },
          ],
        },
      ],
    },
    {
      wrapMaxWidth: "1320px",
      eyebrow: "The R and D Cell",
      heading: "An independent cell, nurturing research across the institute.",
      rule: true,
      blocks: [
        {
          kind: "split-figure",
          paragraphs: [
            "MLR Institute of Technology has established an independent R and D Cell to promote and monitor the research programmes of the college. The cell is steered by an advisory board comprising senior faculty members from various organisations, and it conducts periodic research review meetings to examine the quality of research output.",
            "The cell coordinates sponsored projects, doctoral programmes, faculty publications, IP protection, consultancy and entrepreneurship — drawing together the work happening inside our three departmental research centres, the IPFC, and the wider faculty.",
          ],
          pullQuote: {
            text:
              "We focus on need-based technology — research that solves a real problem, whether for industry, for society, or for the next student that walks into the lab.",
            cite: "— MLRIT R and D Cell",
          },
          image: {
            src: "/research/research-portfolio.png",
            alt:
              "MLRIT Research Portfolio illustration — programmes, scholars, publications, patents.",
            caption:
              "MLRIT Research Portfolio — programmes, scholars, publications and patents at a glance.",
          },
        },
      ],
    },
    {
      variant: "surface",
      wrapMaxWidth: "1240px",
      eyebrow: "Research Centres",
      heading: "Three departmental centres carry the day-to-day work.",
      blocks: [
        {
          kind: "lede",
          text:
            "Each centre is JNTUH-recognised, hosts doctoral scholars, and supports sponsored projects.",
        },
        {
          kind: "def-list",
          items: [
            {
              term: "Centre 01 · CSE",
              description:
                "Computer Science and Engineering — machine learning, data engineering, cyber security, cloud computing, and software systems research.",
            },
            {
              term: "Centre 02 · ECE",
              description:
                "Electronics and Communication — VLSI design, embedded and IoT systems, communications, signal processing and imaging.",
            },
            {
              term: "Centre 03 · Mechanical",
              description:
                "Mechanical Engineering — composite materials, thermal and fluids, manufacturing, robotics, and renewable energy.",
            },
          ],
        },
      ],
    },
    {
      wrapMaxWidth: "1240px",
      eyebrow: "R and D Committee",
      heading: "Steering the work across the three centres.",
      blocks: [
        {
          kind: "lede",
          text:
            "The R and D Committee — comprising the Principal, the R and D Coordinator, heads of departments and senior faculty — reviews ongoing research, approves new proposals, and ensures the institute's policies are followed in spirit and in detail.",
        },
        {
          kind: "check-list",
          items: [
            {
              strong: "Reviews",
              text:
                "— quarterly review of sponsored projects, doctoral progress and publications.",
            },
            {
              strong: "Approvals",
              text: "— sanctioning new project proposals and consultancy engagements.",
            },
            {
              strong: "Mentorship",
              text: "— guidance to junior faculty pursuing their first funded grants.",
            },
            {
              strong: "Policy",
              text:
                "— periodic review of IP, R and D, Consultancy and Innovation and Entrepreneurship policies.",
            },
          ],
        },
      ],
    },
    {
      variant: "surface",
      wrapMaxWidth: "1240px",
      eyebrow: "Research Facilities",
      heading: "Labs and resources that support the work.",
      blocks: [
        {
          kind: "lede",
          text:
            "MLRIT's three centres operate purpose-built laboratories backed by industry-grade tooling and compute. Faculty and scholars get day-to-day access to the resources they need.",
        },
        {
          kind: "check-list",
          items: [
            {
              strong: "AI / ML Lab",
              text:
                "— workstations with NVIDIA GPUs, JupyterHub, Spark cluster, and curated datasets.",
            },
            {
              strong: "VLSI and FPGA Lab",
              text:
                "— Cadence, Synopsys, Mentor and Xilinx Vivado licences; Spartan, Artix, Zynq and Cyclone boards.",
            },
            {
              strong: "IoT and Embedded Lab",
              text:
                "— ESP32, STM32, Raspberry Pi, Arduino, BeagleBone, Jetson Nano; LoRa, Zigbee and BLE bench setups.",
            },
            {
              strong: "Materials and Manufacturing",
              text: "— CNC machines, 3D printers, composite layup, and mechanical testing.",
            },
            {
              strong: "Cloud Access",
              text: "— AWS, GCP, Azure and Snowflake credits for student and faculty research.",
            },
            {
              strong: "Digital Library",
              text: "— IEEE, Springer, Elsevier and ACM subscriptions.",
            },
          ],
        },
      ],
    },
    {
      tight: true,
      blocks: [
        {
          kind: "callout",
          kicker: "Get in touch",
          title:
            "Looking to collaborate, sponsor a project, or join as a research scholar?",
          body:
            "Write to the R and D Cell — we'll route you to the right faculty within two working days.",
          cta: { label: "Email R and D Cell", href: "mailto:research@mlrit.ac.in" },
        },
      ],
    },
  ],
};

const centers: ResearchPage = {
  slug: "centers",
  label: "Research Centres",
  metaTitle: "Research Centres — MLRIT",
  metaDescription:
    "Three JNTUH-recognised research centres at MLRIT in Computer Science, Electronics and Communication, and Mechanical Engineering — each hosting doctoral scholars and sponsored projects.",
  hero: {
    crumbLabel: "Research Centres",
    title: "Research Centres",
    lede:
      "Three JNTUH-recognised research centres at MLRIT — in Computer Science, Electronics and Communication, and Mechanical Engineering. Each hosts doctoral scholars, runs sponsored projects, and produces the bulk of the institute's published research.",
  },
  sections: [
    {
      id: "cse",
      blocks: [
        {
          kind: "centre-block",
          num: "Centre 01 / CSE",
          title: "Computer Science and Engineering Research Centre",
          paragraphs: [
            "The CSE centre supports doctoral research and sponsored projects in machine learning, data engineering, software engineering, cyber security and cloud computing. Scholars work alongside faculty in the AI/ML lab and the centre's high-performance compute facility.",
            "The centre is JNTUH-recognised, with full-time and part-time research scholars under recognised supervisors.",
          ],
          chips: [
            "Machine Learning",
            "Data Engineering",
            "Cyber Security",
            "Cloud Computing",
            "Software Engineering",
          ],
          visual: "CSE",
        },
      ],
    },
    {
      id: "ece",
      variant: "surface",
      blocks: [
        {
          kind: "centre-block",
          num: "Centre 02 / ECE",
          title: "Electronics and Communication Research Centre",
          paragraphs: [
            "The ECE centre advances research in VLSI design, embedded and IoT systems, wireless communications and signal processing. Industry-grade EDA tooling — Cadence, Synopsys, Xilinx — supports both teaching and doctoral work.",
            "Research scholars contribute to sponsored projects from DST, DRDO, and industry sponsors in the semiconductor and telecom space.",
          ],
          chips: [
            "VLSI Design",
            "Embedded Systems",
            "IoT",
            "Image Processing",
            "Wireless Comms",
          ],
          visual: "ECE",
          flip: true,
        },
      ],
    },
    {
      id: "mech",
      blocks: [
        {
          kind: "centre-block",
          num: "Centre 03 / Mechanical",
          title: "Mechanical Engineering Research Centre",
          paragraphs: [
            "Mechanical Engineering research at MLRIT spans composite materials, thermal and fluid engineering, manufacturing processes, robotics and renewable energy. Hands-on laboratories — including CNC, 3D-printing and materials testing — support both experimental and computational work.",
            "The centre collaborates with aerospace and manufacturing partners on applied projects.",
          ],
          chips: [
            "Composite Materials",
            "Manufacturing",
            "Thermal and Fluids",
            "Robotics",
            "Renewable Energy",
          ],
          visual: "ME",
        },
      ],
    },
    {
      variant: "surface",
      eyebrow: "R and D Committee",
      heading: "Steering the work across the three centres.",
      lede:
        "The R and D Committee — comprising the principal, the R and D coordinator, heads of departments and senior faculty — reviews ongoing research, approves new proposals, and ensures the institute's policies are followed in spirit and in detail.",
      blocks: [
        {
          kind: "check-list",
          items: [
            {
              strong: "Reviews",
              text:
                "— quarterly review of sponsored projects, doctoral progress, and publications.",
            },
            {
              strong: "Approvals",
              text: "— sanctioning new project proposals and consultancy engagements.",
            },
            {
              strong: "Mentorship",
              text: "— guidance to junior faculty pursuing their first funded grants.",
            },
            {
              strong: "Policy",
              text:
                "— periodic review of IP, R and D, Consultancy and Innovation policies.",
            },
          ],
        },
      ],
    },
  ],
};

const sponsoredProjects: ResearchPage = {
  slug: "sponsored-projects",
  label: "Sponsored Projects",
  metaTitle: "Sponsored Research Projects — MLRIT",
  metaDescription:
    "Externally-funded research at MLRIT — supported by national agencies and industry partners. 25+ active projects, ₹3 Cr+ in funding.",
  hero: {
    crumbLabel: "Sponsored Projects",
    title: "Sponsored Research Projects",
    lede:
      "Externally-funded research at MLRIT — supported by national agencies and industry partners. Faculty across departments lead projects from initial proposal through completion and outcome reporting.",
  },
  sections: [
    {
      tight: true,
      blocks: [
        {
          kind: "stat-strip",
          items: [
            { num: "25+", label: "Active Projects" },
            { num: "₹3 Cr+", label: "Total Funding" },
            { num: "8", label: "Funding Agencies" },
            { num: "40+", label: "Faculty PIs" },
          ],
        },
      ],
    },
    {
      eyebrow: "Ongoing Projects",
      heading: "Selected projects currently underway.",
      lede: "A snapshot of funded projects from the three departmental research centres.",
      blocks: [
        {
          kind: "table",
          columns: [
            "Project Title",
            "Principal Investigator",
            "Department",
            "Sponsor",
            "Outlay",
          ],
          rows: [
            ["AI for Crop Disease Detection", "Dr. R. Kumar", "CSE", "DST-SERB", "₹28 L"],
            ["Low-Power VLSI for IoT Edge", "Dr. S. Reddy", "ECE", "AICTE-RPS", "₹15 L"],
            ["Smart Irrigation with WSN", "Dr. K. Iyer", "ECE", "MSME-IPFC", "₹10 L"],
            ["Wearable Cardiac Monitor", "Dr. P. Sharma", "ECE", "DBT", "₹22 L"],
            [
              "Composite Materials for Aerospace",
              "Dr. M. Joshi",
              "Mechanical",
              "DRDO",
              "₹35 L",
            ],
            [
              "Federated Learning for Healthcare",
              "Dr. A. Verma",
              "CSE",
              "Industry",
              "₹18 L",
            ],
            ["Energy Harvesting Sensor Nodes", "Dr. N. Krishnan", "ECE", "DST", "₹14 L"],
            [
              "Additive Manufacturing of Bio-implants",
              "Dr. B. Rao",
              "Mechanical",
              "DBT",
              "₹20 L",
            ],
          ],
        },
      ],
    },
    {
      variant: "ink",
      eyebrow: "Funding Partners",
      heading: "Where our research grants come from.",
      lede:
        "MLRIT faculty have secured grants from a broad mix of central agencies and industry.",
      blocks: [
        {
          kind: "def-list",
          onInk: true,
          items: [
            {
              term: "DST and SERB",
              description:
                "Science and Engineering Research Board grants for fundamental and applied research in engineering and sciences.",
            },
            {
              term: "AICTE",
              description:
                "RPS, MODROBS and AQIS schemes for academic and infrastructure projects.",
            },
            {
              term: "DRDO",
              description:
                "Defence R and D collaborations on materials, embedded systems and signal processing.",
            },
            {
              term: "DBT",
              description:
                "Department of Biotechnology grants for healthcare, bio-engineering, and bio-implant projects.",
            },
            {
              term: "MSME and IPFC",
              description:
                "Ministry of MSME schemes including IPFC operational support and MSME tech-dev funding.",
            },
            {
              term: "Industry",
              description:
                "Sponsored R and D from semiconductor, IT, manufacturing and pharmaceutical partners.",
            },
          ],
        },
      ],
    },
    {
      tight: true,
      blocks: [
        {
          kind: "callout",
          kicker: "Proposal Support",
          title: "Faculty: working on a grant proposal?",
          body:
            "The R and D Cell helps with budgeting, agency selection, formatting and reviewer-style internal review before submission.",
          cta: { label: "Talk to R and D Cell", href: "mailto:research@mlrit.ac.in" },
        },
      ],
    },
  ],
};

const scholars: ResearchPage = {
  slug: "scholars",
  label: "Research Scholars",
  metaTitle: "Research Scholars — MLRIT",
  metaDescription:
    "Full-time and part-time Ph.D. scholars at MLRIT working with JNTUH-recognised supervisors across CSE, ECE, Mechanical, Electrical and Management.",
  hero: {
    crumbLabel: "Research Scholars",
    title: "Details of Research Scholars",
    lede:
      "A growing cohort of full-time and part-time Ph.D. scholars at MLRIT — working alongside JNTUH-recognised supervisors and contributing to the institute's publications, patents, and sponsored projects.",
  },
  sections: [
    {
      wrapMaxWidth: "1240px",
      eyebrow: "About the cohort",
      heading: "Doctoral research at MLRIT.",
      rule: true,
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "Scholars are admitted under JNTU Hyderabad's Ph.D. regulations, working with recognised supervisors across CSE, ECE, Mechanical, Electrical and Electronics, Management Studies, and Humanities and Sciences.",
            "The R and D Cell tracks progress through annual progress seminars, supports thesis submissions, and provides travel grants for scholars to attend international conferences.",
          ],
        },
      ],
    },
    {
      variant: "surface",
      eyebrow: "Department-wise Distribution",
      heading: "Scholars by department.",
      blocks: [
        {
          kind: "table",
          columns: ["Department", "Full-Time", "Part-Time", "Total", "Awarded so far"],
          rows: [
            ["Computer Science and Engineering", "6", "10", "16", "5"],
            ["Electronics and Communication", "4", "8", "12", "4"],
            ["Mechanical Engineering", "3", "5", "8", "2"],
            ["Electrical and Electronics", "1", "3", "4", "1"],
            ["Management Studies", "1", "2", "3", "—"],
            ["Humanities and Sciences", "—", "2", "2", "—"],
          ],
        },
      ],
    },
    {
      eyebrow: "Joining as a Scholar",
      heading: "What it takes to enrol.",
      blocks: [
        {
          kind: "def-list",
          items: [
            {
              term: "Eligibility",
              description:
                "M.Tech / M.E. (or equivalent) with first class in the relevant discipline. For management, an MBA with first class.",
            },
            {
              term: "Recognition",
              description:
                "Admissions are under JNTU Hyderabad; supervisors are JNTUH-recognised research guides.",
            },
            {
              term: "Selection",
              description:
                "Entrance test and interview conducted by the affiliating university, plus an internal research proposal review.",
            },
            {
              term: "Modes",
              description:
                "Full-time (with research assistantship eligibility) and part-time tracks available.",
            },
            {
              term: "Duration",
              description:
                "Typically 3–6 years, including a comprehensive examination, open seminars, and final thesis defence.",
            },
            {
              term: "Support",
              description:
                "Conference travel grants, publication incentives, and access to all institute labs and digital library resources.",
            },
          ],
        },
      ],
    },
  ],
};

const doctoralFaculty: ResearchPage = {
  slug: "doctoral-faculty",
  label: "Doctoral Faculty",
  metaTitle: "Doctoral Faculty — MLRIT",
  metaDescription:
    "JNTU Hyderabad-recognised research supervisors at MLRIT, listed by department with research areas. Find a guide whose interests align with your proposed research.",
  hero: {
    crumbLabel: "Doctoral Faculty",
    title: "Doctoral Faculty Research Areas",
    lede:
      "JNTU Hyderabad-recognised research supervisors at MLRIT — listed by department with their areas of specialisation. Prospective Ph.D. candidates can use this index to find a guide whose interests align with their proposed research.",
  },
  sections: [
    {
      blocks: [
        {
          kind: "faculty-tabs",
          tabs: [
            {
              id: "cse",
              label: "CSE",
              rows: [
                {
                  faculty: "Dr. R. Kumar",
                  designation: "Professor",
                  areas: "Machine Learning · Computer Vision · Healthcare AI",
                },
                {
                  faculty: "Dr. A. Verma",
                  designation: "Professor",
                  areas: "Distributed Systems · Cloud Computing · Federated Learning",
                },
                {
                  faculty: "Dr. S. Murthy",
                  designation: "Associate Professor",
                  areas: "NLP · Information Retrieval · Indic-Language Models",
                },
                {
                  faculty: "Dr. T. Rao",
                  designation: "Associate Professor",
                  areas: "Cyber Security · Blockchain · Privacy-Preserving ML",
                },
                {
                  faculty: "Dr. V. Naidu",
                  designation: "Professor",
                  areas: "Software Engineering · Empirical SE · Quality Models",
                },
              ],
            },
            {
              id: "ece",
              label: "ECE",
              rows: [
                {
                  faculty: "Dr. S. Reddy",
                  designation: "Professor",
                  areas: "VLSI · Low-Power Design · FPGA · RISC-V",
                },
                {
                  faculty: "Dr. P. Sharma",
                  designation: "Professor",
                  areas: "Biomedical Signal Processing · Wearable Sensors",
                },
                {
                  faculty: "Dr. N. Krishnan",
                  designation: "Associate Professor",
                  areas: "Wireless Communications · 5G · IoT Networks",
                },
                {
                  faculty: "Dr. L. Devi",
                  designation: "Associate Professor",
                  areas: "Image Processing · Medical Imaging · Deep Learning",
                },
              ],
            },
            {
              id: "mech",
              label: "Mechanical",
              rows: [
                {
                  faculty: "Dr. M. Joshi",
                  designation: "Professor",
                  areas: "Composite Materials · Aerospace Materials",
                },
                {
                  faculty: "Dr. K. Iyer",
                  designation: "Professor",
                  areas: "Thermal Engineering · Renewable Energy",
                },
                {
                  faculty: "Dr. B. Rao",
                  designation: "Associate Professor",
                  areas: "CAD/CAM · Manufacturing · Additive Manufacturing",
                },
                {
                  faculty: "Dr. C. Prasad",
                  designation: "Associate Professor",
                  areas: "Robotics · Mechatronics · Smart Materials",
                },
              ],
            },
            {
              id: "eee",
              label: "EEE",
              rows: [
                {
                  faculty: "Dr. G. Rao",
                  designation: "Professor",
                  areas: "Power Electronics · Renewable Integration · Smart Grids",
                },
              ],
            },
            {
              id: "mba",
              label: "MBA",
              rows: [
                {
                  faculty: "Dr. N. Iyer",
                  designation: "Professor",
                  areas: "Marketing Analytics · Consumer Behaviour · HR Analytics",
                },
              ],
            },
            {
              id: "hs",
              label: "H and S",
              rows: [
                {
                  faculty: "Dr. R. Subramanian",
                  designation: "Professor",
                  areas: "Applied Mathematics · Optimisation · Statistics",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const ipfc: ResearchPage = {
  slug: "ipfc",
  label: "IPFC Centre",
  metaTitle: "IPFC — Intellectual Property Facilitation Centre — MLRIT",
  metaDescription:
    "The IPFC at MLRIT, established in 2019 with the Ministry of MSME, supports startups, academics and entrepreneurs across the full IP lifecycle.",
  hero: {
    crumbLabel: "IPFC",
    title: "Intellectual Property",
    titleEm: "Facilitation Centre.",
    lede:
      "Established at MLR Institute of Technology in 2019, in association with the Ministry of MSME, Government of India — supporting startups, academics and entrepreneurs in protecting intellectual property.",
    meta: [
      { label: "Established", value: "2019" },
      { label: "Patents filed", value: "60+" },
      { label: "Consultations", value: "100+" },
    ],
  },
  sections: [
    {
      wrapMaxWidth: "1240px",
      eyebrow: "About",
      heading: "A central facility for IP support.",
      rule: true,
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "The Intellectual Property Facilitation Centre (IPFC) at MLRIT was established in 2019 in association with the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India. The centre supports startups, academics and entrepreneurs seeking IP protection and technical consultation.",
            "The IPFC works through the entire IP lifecycle — prior-art search, drafting, filing, prosecution, and commercialisation — under the institute's [IP Policy](/research/policies).",
          ],
        },
      ],
    },
    {
      variant: "surface",
      eyebrow: "Who we serve",
      heading: "Beneficiaries of the IPFC.",
      blocks: [
        {
          kind: "check-list",
          items: [
            {
              strong: "Faculty and Research Scholars",
              text: "— protecting research output from MLRIT departments.",
            },
            {
              strong: "Students",
              text: "— converting capstone and project ideas into protected intellectual property.",
            },
            {
              strong: "MSMEs",
              text: "— registered MSMEs in Telangana, eligible under the Ministry's IPFC scheme.",
            },
            {
              strong: "Startups",
              text: "— early-stage ventures seeking patent or trademark protection.",
            },
            {
              strong: "External Entrepreneurs",
              text: "— individuals and small businesses needing IP guidance.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "Services",
      heading: "From idea disclosure to grant.",
      lede: "A full-stack IP service operated by the centre.",
      blocks: [
        {
          kind: "service-grid",
          cells: [
            {
              title: "Prior-Art Searches",
              body:
                "Comprehensive novelty searches against Indian and international patent databases.",
            },
            {
              title: "Drafting Support",
              body:
                "Specifications, claims and abstracts drafted by empanelled patent attorneys.",
            },
            {
              title: "Filing Assistance",
              body:
                "Provisional and complete specifications filed with the Indian Patent Office and PCT routes.",
            },
            {
              title: "Prosecution and Hearings",
              body: "Office-action responses, examiner hearings, and grant follow-up.",
            },
            {
              title: "Trademarks and Copyrights",
              body:
                "Filing assistance for trademarks, copyrights, designs and geographical indications.",
            },
            {
              title: "Awareness Programmes",
              body:
                "Workshops, expert lectures and student outreach on IP rights and innovation.",
            },
          ],
        },
      ],
    },
    {
      variant: "ink",
      tight: true,
      blocks: [
        {
          kind: "ink-cta",
          eyebrow: "Talk to us",
          title: "Got an idea you want to protect?",
          body:
            "Submit an invention disclosure to the IPFC. We respond within three working days with next steps.",
          cta: { label: "Email the IPFC", href: "mailto:ipfc@mlrit.ac.in" },
        },
      ],
    },
  ],
};

const publications: ResearchPage = {
  slug: "publications",
  label: "Publications",
  metaTitle: "Research Publications — MLRIT",
  metaDescription:
    "Journal and conference publications by MLRIT faculty and research scholars from 2016 onwards, browsable by year.",
  hero: {
    crumbLabel: "Publications",
    title: "Research Publications",
    lede:
      "Journal and conference publications by MLRIT faculty and research scholars from 2016 onwards. Each year's consolidated list is available as a downloadable PDF; pick a year below to view.",
  },
  sections: [
    {
      eyebrow: "Browse by Year",
      heading: "Publications by year.",
      blocks: [
        {
          kind: "publications",
          years: [
            {
              year: "2025",
              meta: "120+ papers · CSE / ECE / Mech / EEE / MBA / H and S",
              table: {
                columns: ["Department", "Indexing", "Count", "Document"],
                rows: [
                  {
                    dept: "Computer Science and Engineering",
                    indexing: "SCI · Scopus · UGC-CARE",
                    count: "40+",
                    href: "#",
                  },
                  {
                    dept: "Electronics and Communication",
                    indexing: "SCI · Scopus",
                    count: "30+",
                    href: "#",
                  },
                  {
                    dept: "Mechanical Engineering",
                    indexing: "Scopus · UGC-CARE",
                    count: "20+",
                    href: "#",
                  },
                  {
                    dept: "Electrical and Electronics",
                    indexing: "Scopus",
                    count: "15+",
                    href: "#",
                  },
                  {
                    dept: "MBA / Humanities and Sciences",
                    indexing: "UGC-CARE · ABDC",
                    count: "15+",
                    href: "#",
                  },
                ],
              },
            },
            {
              year: "2024",
              meta: "110+ papers",
              download: { label: "Download 2024 PDF ↓", href: "#" },
            },
            {
              year: "2023",
              meta: "95+ papers",
              download: { label: "Download 2023 PDF ↓", href: "#" },
            },
            {
              year: "2022",
              meta: "85+ papers",
              download: { label: "Download 2022 PDF ↓", href: "#" },
            },
            {
              year: "2021",
              meta: "80+ papers",
              download: { label: "Download 2021 PDF ↓", href: "#" },
            },
            {
              year: "2020",
              meta: "70+ papers",
              download: { label: "Download 2020 PDF ↓", href: "#" },
            },
            {
              year: "2019",
              meta: "65+ papers",
              download: { label: "Download 2019 PDF ↓", href: "#" },
            },
            {
              year: "2018",
              meta: "55+ papers",
              download: { label: "Download 2018 PDF ↓", href: "#" },
            },
            {
              year: "2017",
              meta: "50+ papers",
              download: { label: "Download 2017 PDF ↓", href: "#" },
            },
            {
              year: "2016",
              meta: "45+ papers",
              download: { label: "Download 2016 PDF ↓", href: "#" },
            },
          ],
        },
      ],
    },
    {
      variant: "surface",
      tight: true,
      eyebrow: "Note",
      blocks: [
        {
          kind: "lede",
          text:
            "Faculty submitting a new publication for the year-wise list should send the citation and a PDF of the published paper to [research@mlrit.ac.in](mailto:research@mlrit.ac.in). Eligible publications are also considered for the [Research Incentive Scheme](/research/policies).",
        },
      ],
    },
  ],
};

const patents: ResearchPage = {
  slug: "patents",
  label: "Patents (IPRs)",
  metaTitle: "Patents and IPRs — MLRIT",
  metaDescription:
    "Patents filed, published and granted to MLRIT faculty and students — supported end-to-end by the institute's IPFC.",
  hero: {
    crumbLabel: "Patents",
    title: "Patents and IPRs",
    lede:
      "Patents filed, published and granted to MLRIT faculty and students — supported end-to-end by the institute's [IPFC](/research/ipfc).",
  },
  sections: [
    {
      tight: true,
      blocks: [
        {
          kind: "stat-strip",
          items: [
            { num: "60+", label: "Filed" },
            { num: "40+", label: "Published" },
            { num: "8", label: "Granted" },
            { num: "2019", label: "IPFC since" },
          ],
        },
      ],
    },
    {
      eyebrow: "Granted",
      heading: "Recently granted patents.",
      blocks: [
        {
          kind: "table",
          columns: ["Title", "Inventors", "Year", "Status"],
          rows: [
            [
              "Smart Irrigation Controller with Soil-Moisture Sensing",
              "Dr. R. Kumar et al.",
              "2024",
              "Granted",
            ],
            [
              "Low-Power SRAM Cell for IoT Processors",
              "Dr. S. Reddy et al.",
              "2024",
              "Granted",
            ],
            [
              "Wearable Cardiac Monitor with On-Device Arrhythmia Detection",
              "Dr. P. Sharma et al.",
              "2023",
              "Granted",
            ],
            [
              "FPGA-based CNN Accelerator for Image Classification",
              "Dr. A. Verma et al.",
              "2023",
              "Granted",
            ],
            [
              "Composite Material with Improved Thermal Conductivity",
              "Dr. K. Iyer et al.",
              "2022",
              "Granted",
            ],
          ],
        },
      ],
    },
    {
      variant: "surface",
      eyebrow: "Published",
      heading: "Recently published patents.",
      lede:
        "A selection of MLRIT faculty patents currently in the published / pre-grant stage.",
      blocks: [
        {
          kind: "check-list",
          items: [
            {
              strong: "AI-driven crop-disease diagnosis system",
              text: "— CSE Faculty, 2024.",
            },
            {
              strong: "Edge-AI module for industrial vibration monitoring",
              text: "— ECE Faculty, 2024.",
            },
            {
              strong: "RAG-based educational chatbot for vernacular languages",
              text: "— CSE Faculty, 2024.",
            },
            {
              strong: "Energy-harvesting wireless sensor node",
              text: "— ECE Faculty, 2023.",
            },
            {
              strong: "Adaptive traffic-signal controller using sensor fusion",
              text: "— CSE Faculty, 2023.",
            },
            {
              strong: "Bio-degradable composite for packaging applications",
              text: "— Mechanical Faculty, 2023.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "How to file",
      heading: "The filing process at MLRIT.",
      lede:
        "Faculty and students approach the IPFC with an invention disclosure. From there, the centre runs the full process.",
      blocks: [
        {
          kind: "process",
          steps: [
            {
              title: "Disclosure",
              body: "Submit an invention disclosure form to the IPFC for novelty evaluation.",
            },
            {
              title: "Prior Art",
              body: "IPFC conducts patent searches and assesses patentability.",
            },
            {
              title: "Drafting",
              body: "Specifications and claims drafted with empanelled patent attorneys.",
            },
            {
              title: "Filing",
              body:
                "Provisional or complete specifications filed with the Indian Patent Office.",
            },
            {
              title: "Prosecution",
              body: "Examination, office actions and hearings handled with IPFC support.",
            },
            {
              title: "Grant",
              body: "Grant certificate received. Commercialisation and licensing explored.",
            },
          ],
        },
      ],
    },
  ],
};

const consultancy: ResearchPage = {
  slug: "consultancy",
  label: "Consultancy",
  metaTitle: "Consultancy — MLRIT",
  metaDescription:
    "MLRIT faculty take on consultancy assignments for industry, MSMEs and government — covering AI, IoT, VLSI, materials, software and management.",
  hero: {
    crumbLabel: "Consultancy",
    title: "Consultancy",
    lede:
      "MLRIT faculty take on consultancy assignments for industry, MSMEs and government — leveraging deep technical expertise, institute laboratories, and a track record of applied projects.",
  },
  sections: [
    {
      wrapMaxWidth: "1240px",
      eyebrow: "What we offer",
      heading: "Technical advisory and applied project services.",
      blocks: [
        {
          kind: "lede",
          text:
            "Engagements range from short technical advisories — a few hours of expert consultation — through to multi-month applied projects with deliverables, milestones, and on-site work. All assignments are routed through the R and D Cell and governed by the institute's [Consultancy Policy](/research/policies).",
        },
      ],
    },
    {
      variant: "surface",
      tight: true,
      blocks: [
        {
          kind: "service-grid",
          cells: [
            {
              title: "AI and Data Science",
              body:
                "Custom model development, analytics dashboards, MLOps, and proof-of-concept builds for industry.",
            },
            {
              title: "IoT Solutions",
              body:
                "Sensor design, edge prototyping, gateways, and end-to-end IoT product development.",
            },
            {
              title: "VLSI and FPGA",
              body:
                "RTL design, verification, FPGA prototyping, and physical-design support for chip companies.",
            },
            {
              title: "Materials and Testing",
              body:
                "Material characterisation, composite design and mechanical testing services from the MLRIT labs.",
            },
            {
              title: "Software and Cloud",
              body: "Application development, cloud architecture, DevOps, and cybersecurity audits.",
            },
            {
              title: "Management Studies",
              body:
                "Market research, organisational studies and analytics for corporate clients via the MBA faculty.",
            },
          ],
        },
      ],
    },
    {
      eyebrow: "How an engagement runs",
      heading: "From enquiry to closure.",
      blocks: [
        {
          kind: "process",
          steps: [
            {
              title: "Enquiry",
              body:
                "You send a brief to the R and D Cell describing scope and the outcomes you expect.",
            },
            {
              title: "Scoping",
              body:
                "A faculty lead is identified. Scope, timeline and deliverables are agreed in writing.",
            },
            {
              title: "Agreement",
              body:
                "A consultancy agreement is executed per the institute's policy, including NDA where needed.",
            },
            {
              title: "Execution",
              body:
                "Faculty and student teams deliver milestones with periodic reviews and demos.",
            },
            {
              title: "Closure",
              body:
                "Final deliverables handed over, IP handled per agreement, and a closure report filed.",
            },
          ],
        },
      ],
    },
    {
      variant: "ink",
      eyebrow: "Executive Development Program",
      heading: "Training corporate teams alongside consultancy.",
      lede:
        "Where consultancy delivers a solution, the Executive Development Program (EDP) builds the skills inside the client team. Short-term, hands-on certification programs run by MLRIT faculty for working professionals and corporate teams.",
      blocks: [
        {
          kind: "table",
          columns: ["Program", "Duration", "Audience", "Delivery"],
          rows: [
            ["Applied AI for Business", "40 hours", "Professionals · Managers", "Weekend cohort"],
            ["Data Science Bootcamp", "60 hours", "Analysts · Engineers", "Weekend / Online"],
            ["IoT Solution Design", "30 hours", "Embedded engineers", "In-house / Campus"],
            ["VLSI Design Bootcamp", "80 hours", "Fresh hires · Chip companies", "In-house"],
            ["Cyber Security Essentials", "40 hours", "IT teams · SOC analysts", "Online / Hybrid"],
            ["Project Management", "24 hours", "Engineering managers", "Weekend"],
          ],
        },
        {
          kind: "lede",
          text:
            "**Delivery modes:** in-person at MLRIT (weekend cohorts) · in-house at client site · online / hybrid via Zoom or MS Teams · fully customised tracks for organisations.",
        },
      ],
    },
    {
      tight: true,
      blocks: [
        {
          kind: "callout",
          kicker: "Start an engagement",
          title: "Have a problem we could help solve — or a team to upskill?",
          body:
            "Send a one-page brief to the R and D Cell — we'll come back within two working days with a recommended faculty lead, an EDP track, and next steps.",
          cta: { label: "Submit a Brief", href: "mailto:research@mlrit.ac.in" },
        },
      ],
    },
  ],
};

const entrepreneurship: ResearchPage = {
  slug: "entrepreneurship",
  label: "Entrepreneurship",
  metaTitle: "Innovation and Entrepreneurship — MLRIT",
  metaDescription:
    "Translating research, ideas and projects into ventures — through MLRIT's Innovation Cell, IPFC, and the institute's Innovation and Entrepreneurship policy.",
  hero: {
    crumbLabel: "Entrepreneurship",
    title: "Entrepreneurship",
    lede:
      "Translating research, ideas and projects into ventures — through the Innovation Cell, IPFC, and the institute's Innovation and Entrepreneurship policy.",
  },
  sections: [
    {
      wrapMaxWidth: "1240px",
      eyebrow: "Approach",
      heading: "From idea to enterprise.",
      rule: true,
      blocks: [
        {
          kind: "prose",
          paragraphs: [
            "MLRIT runs an Innovation and Entrepreneurship programme that nurtures startup ideas from early ideation through to incorporation. The Innovation Cell, IPFC and R and D Cell work together to provide mentorship, IP protection, lab access, and connections to investors.",
          ],
        },
        {
          kind: "pull-quote",
          text:
            "Every venture that walks out of MLRIT carries IP we helped protect, a mentor we helped find, and a pitch we helped sharpen.",
          cite: "— MLRIT Innovation Cell",
        },
      ],
    },
    {
      variant: "surface",
      eyebrow: "Support on offer",
      heading: "What students and faculty can access.",
      blocks: [
        {
          kind: "def-list",
          items: [
            {
              term: "Innovation Cell",
              description:
                "Campus body running ideation bootcamps, design challenges, and hackathons through the academic year.",
            },
            {
              term: "Incubation",
              description:
                "Co-working desks, mentorship and access to MLRIT laboratories for early-stage ventures.",
            },
            {
              term: "IP and Legal",
              description:
                "IPFC assists with patents, trademarks and IP licensing arrangements for ventures originating at MLRIT.",
            },
            {
              term: "Seed Funding",
              description:
                "Pre-seed grants, plus connections to angel investors and venture funds active in the Hyderabad ecosystem.",
            },
            {
              term: "Mentor Network",
              description:
                "Industry CEOs, alumni founders and senior faculty offering periodic 1:1 mentorship sessions.",
            },
            {
              term: "Showcase Events",
              description:
                "Demo days, investor meets and innovation expos to give visibility to MLRIT startups.",
            },
          ],
        },
      ],
    },
    {
      wrapMaxWidth: "1240px",
      eyebrow: "Backed by policy",
      heading: "Innovation and Entrepreneurship Policy.",
      blocks: [
        {
          kind: "lede",
          text:
            "The institute's policy sets out the framework under which student and faculty ventures operate at MLRIT — covering IP ownership, equity participation in spin-offs, leave provisions for faculty entrepreneurs, and rules for using institute facilities for venture-related work. See the [policies and forms library](/research/policies) for the full document.",
        },
      ],
    },
  ],
};

const policies: ResearchPage = {
  slug: "policies",
  label: "Policies and Forms",
  metaTitle: "Policies and Forms — MLRIT Research",
  metaDescription:
    "Institutional policies governing research, IP, consultancy and entrepreneurship at MLRIT — along with downloadable forms and the Research Incentive Scheme.",
  hero: {
    crumbLabel: "Policies and Forms",
    title: "Policies and Forms",
    lede:
      "Institutional policies governing research, intellectual property, consultancy, innovation and entrepreneurship at MLRIT — along with downloadable forms.",
  },
  sections: [
    {
      eyebrow: "Policies",
      heading: "Approved by the institute's Governing Council.",
      lede:
        "All four policy documents are reviewed periodically by the R and D Committee and revised as needed.",
      blocks: [
        {
          kind: "dl-cards",
          cards: [
            {
              kicker: "Policy · IP",
              title: "IP Policy",
              meta:
                "Ownership, inventor share, institute share, and procedures for patent filing, licensing and commercialisation.",
              href: "#",
            },
            {
              kicker: "Policy · R and D",
              title: "Research and Development Policy",
              meta:
                "Institute's commitment to research, structure of the R and D Cell, and incentives for faculty researchers.",
              href: "#",
            },
            {
              kicker: "Policy · Consultancy",
              title: "Consultancy Policy",
              meta:
                "How faculty undertake consultancy — revenue sharing, NDAs, and use of institute facilities.",
              href: "#",
            },
            {
              kicker: "Policy · Innovation",
              title: "Innovation and Entrepreneurship Policy",
              meta:
                "Framework for student and faculty ventures — incubation, equity, leave provisions, incentives.",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      variant: "surface",
      eyebrow: "Forms",
      heading: "Downloadable forms.",
      blocks: [
        {
          kind: "table",
          columns: ["Form", "Purpose", "Document"],
          rows: [
            [
              "Publication Incentive Form",
              "Claim cash incentive for published journal / conference papers",
              { kind: "download", label: "PDF ↓", href: "#" },
            ],
            [
              "Patent Filing Form",
              "Initiate a patent filing through the IPFC",
              { kind: "download", label: "PDF ↓", href: "#" },
            ],
            [
              "Sponsored Project Proposal Form",
              "Submit a new project proposal for R and D Cell review",
              { kind: "download", label: "PDF ↓", href: "#" },
            ],
            [
              "Consultancy Agreement Template",
              "Standard MLRIT consultancy agreement for industry engagements",
              { kind: "download", label: "PDF ↓", href: "#" },
            ],
            [
              "Patent Incentive Claim Form",
              "Claim patent filing / grant incentive after approval",
              { kind: "download", label: "PDF ↓", href: "#" },
            ],
            [
              "Travel Support — Conference Form",
              "Apply for conference travel grants for faculty",
              { kind: "download", label: "PDF ↓", href: "#" },
            ],
          ],
        },
      ],
    },
    {
      eyebrow: "Research Incentive Scheme",
      heading: "Cash awards for publications, patents, and projects.",
      blocks: [
        {
          kind: "lede",
          text:
            "MLRIT rewards verified research outputs through the Research Incentive Scheme. It applies to all permanent faculty across departments. Claims are evaluated by the R and D Committee against transparent criteria and disbursed through the accounts office in the next cycle. Download the **Publication Incentive Form** from the forms table above.",
        },
        { kind: "h3", text: "Publications — journals and conferences" },
        {
          kind: "table",
          columns: ["Category", "Indexing", "Award"],
          rows: [
            ["Journal — Q1", "SCI / SCIE — Q1", "₹25,000"],
            ["Journal — Q2", "SCI / SCIE — Q2", "₹15,000"],
            ["Journal — Q3/Q4", "SCI / SCIE — Q3 / Q4", "₹10,000"],
            ["Journal — Scopus", "Scopus · UGC-CARE", "₹5,000"],
            ["Conference", "IEEE · Springer · Scopus", "₹3,000"],
            ["Book / Chapter", "Reputed publisher", "₹10,000"],
          ],
        },
        { kind: "h3", text: "Patents — across the lifecycle" },
        {
          kind: "table",
          columns: ["Stage", "Award"],
          rows: [
            ["Patent Filed (India)", "₹5,000"],
            ["Patent Published", "₹10,000"],
            ["Patent Granted (India)", "₹50,000"],
            ["Patent Granted (International)", "₹1,00,000"],
            ["Patent Commercialised", "Royalty share per IP Policy"],
          ],
        },
        { kind: "h3", text: "Sponsored projects — rewards for funded research" },
        {
          kind: "check-list",
          items: [
            {
              strong: "Up to ₹10 lakhs",
              text: "— institute reward of ₹15,000 + 5% overhead support to the PI.",
            },
            {
              strong: "₹10 – 25 lakhs",
              text: "— institute reward of ₹30,000 + 7% overhead support.",
            },
            {
              strong: "Above ₹25 lakhs",
              text: "— institute reward of ₹50,000 + 10% overhead support.",
            },
            {
              strong: "Industry Consultancy",
              text: "— share to PI per the Consultancy Policy.",
            },
          ],
        },
      ],
    },
    {
      tight: true,
      eyebrow: "Need help?",
      heading: "Reach the right desk.",
      blocks: [
        {
          kind: "check-list",
          items: [
            {
              strong: "R and D Cell",
              text:
                "— for policy interpretation, proposals, and project support · [research@mlrit.ac.in](mailto:research@mlrit.ac.in)",
            },
            {
              strong: "IPFC",
              text:
                "— for patents, trademarks, and IP-related forms · [ipfc@mlrit.ac.in](mailto:ipfc@mlrit.ac.in)",
            },
            {
              strong: "Innovation Cell",
              text:
                "— for incubation and startup-related queries · [innovation@mlrit.ac.in](mailto:innovation@mlrit.ac.in)",
            },
          ],
        },
      ],
    },
  ],
};

export const researchPages: Record<string, ResearchPage> = {
  overview,
  centers,
  "sponsored-projects": sponsoredProjects,
  scholars,
  "doctoral-faculty": doctoralFaculty,
  ipfc,
  publications,
  patents,
  consultancy,
  entrepreneurship,
  policies,
};
