export type DeptListingCard = {
  slug: string;
  code: string;
  name: string;
  description: string;
  stats: { value: string; label: string }[];
};

export const deptListingCards: DeptListingCard[] = [
  {
    slug: "freshman",
    code: "First Year",
    name: "Freshman Engineering",
    description:
      "Foundation department for all branches. Physics, Chemistry, Mathematics, English, and Engineering Sciences. 10 labs, EPICS, COTS.",
    stats: [
      { value: "All", label: "Branches" },
      { value: "57", label: "Faculty" },
      { value: "10", label: "Labs" },
    ],
  },
  {
    slug: "cse",
    code: "B.Tech",
    name: "Computer Science and Engineering",
    description:
      "Established 2005. Covers AI, ML, Data Science, Cloud Computing, Cybersecurity. NBA accredited since 2008.",
    stats: [
      { value: "840", label: "Intake" },
      { value: "64", label: "Faculty" },
      { value: "2005", label: "Est." },
    ],
  },
  {
    slug: "aiml",
    code: "B.Tech",
    name: "CSE — Artificial Intelligence and Machine Learning",
    description:
      "Specialised AI/ML curriculum focused on industry-grade innovation, real-world model deployment, and applied research.",
    stats: [
      { value: "180", label: "Intake" },
      { value: "35", label: "Faculty" },
      { value: "2020", label: "Est." },
    ],
  },
  {
    slug: "cse-ds",
    code: "B.Tech",
    name: "CSE — Data Science",
    description:
      "Hands-on data engineering, analytics, and predictive modelling. Career pathway into the booming data-science industry.",
    stats: [
      { value: "60", label: "Intake" },
      { value: "47", label: "Faculty" },
      { value: "2020", label: "Est." },
    ],
  },
  {
    slug: "cse-cs",
    code: "B.Tech",
    name: "CSE — Cyber Security",
    description:
      "Network security, ethical hacking, cryptography, and incident response — for the world's most in-demand security roles.",
    stats: [
      { value: "60", label: "Intake" },
      { value: "15", label: "Faculty" },
      { value: "2020", label: "Est." },
    ],
  },
  {
    slug: "csit",
    code: "B.Tech",
    name: "Computer Science and Information Technology",
    description:
      "Combines core Computer Science with the breadth of IT — software, networks, databases, cloud, and modern web stacks.",
    stats: [
      { value: "60", label: "Intake" },
      { value: "20", label: "Faculty" },
      { value: "2020", label: "Est." },
    ],
  },
  {
    slug: "it",
    code: "B.Tech",
    name: "Information Technology",
    description:
      "Established 2005. Strong foundation in software engineering, networking, databases, and emerging IT industry skills.",
    stats: [
      { value: "180", label: "Intake" },
      { value: "22", label: "Faculty" },
      { value: "2005", label: "Est." },
    ],
  },
  {
    slug: "ece",
    code: "B.Tech",
    name: "Electronics and Communication Engineering",
    description:
      "Established 2005. Covers VLSI, Signal Processing, IoT, Wireless Communications, Embedded Systems. NBA accredited.",
    stats: [
      { value: "120", label: "Intake" },
      { value: "36", label: "Faculty" },
      { value: "2005", label: "Est." },
    ],
  },
  {
    slug: "eee",
    code: "B.Tech",
    name: "Electrical and Electronics Engineering",
    description:
      "State-of-the-art labs with modern instruments. Covers Power Systems, Smart Grids, Renewable Energy, Electric Drives.",
    stats: [
      { value: "120", label: "Intake" },
      { value: "17", label: "Faculty" },
      { value: "2005", label: "Est." },
    ],
  },
  {
    slug: "mech",
    code: "B.Tech",
    name: "Mechanical Engineering",
    description:
      "Centres of Excellence in Composite Materials, NDT, and Welding. Industry ties with Mahindra, Pennar Industries.",
    stats: [
      { value: "120", label: "Intake" },
      { value: "20", label: "Faculty" },
      { value: "2005", label: "Est." },
    ],
  },
  {
    slug: "aero",
    code: "B.Tech",
    name: "Aeronautical Engineering",
    description:
      "Flight Simulation Lab, Digital Manufacturing Lab. Collaborations with DRDO, Tata Advanced Systems, Boeing India.",
    stats: [
      { value: "60", label: "Intake" },
      { value: "19", label: "Faculty" },
      { value: "2008", label: "Est." },
    ],
  },
];
