export type Stat = {
  value: string;
  label: string;
  note?: string;
};

export type YearStat = {
  year: string;
  offers: string;
  companies: string;
  highest: string;
};

export type YearDetail = {
  company: string;
  role: string;
  salary: string;
  selects: string;
};

export type Recruiter = {
  name: string;
  logo: string;
};

export type MoU = {
  name: string;
  type: "Centre of Excellence" | "Industry Partner" | "Training Partner";
  domain: string;
  package?: string;
};

export type DriveImage = {
  src: string;
  alt: string;
};

export type SidebarLink = {
  id: string;
  label: string;
};

export const heroStats: Stat[] = [
  { value: "33 LPA", label: "Highest Package" },
  { value: "536+", label: "Offers · 2025" },
  { value: "62+", label: "Companies" },
  { value: "7000+", label: "Alumni Placed" },
];

export const performanceStats: Stat[] = [
  { value: "33 LPA", label: "Highest Package", note: "ServiceNow · 2025" },
  { value: "536", label: "Total Job Offers", note: "Academic Year 2025" },
  { value: "62+", label: "Companies Visited", note: "MNCs and product firms" },
  { value: "7000+", label: "Students Placed", note: "Cumulative · all years" },
];

export const yearwiseStats: YearStat[] = [
  { year: "2026", offers: "544", companies: "36", highest: "51" },
  { year: "2025", offers: "536", companies: "62", highest: "33" },
  { year: "2024", offers: "674", companies: "55", highest: "28.5" },
  { year: "2023", offers: "734", companies: "32", highest: "58" },
  { year: "2022", offers: "1236", companies: "42", highest: "25" },
  { year: "2021", offers: "740", companies: "49", highest: "18.1" },
];

export const yearwiseDetails: Record<string, YearDetail[]> = {
  "2025": [
    { company: "ServiceNow", role: "Software Engineer", salary: "33 LPA", selects: "4" },
    { company: "Virtusa", role: "Data/AWS Engineer", salary: "5.5 LPA", selects: "45" },
    { company: "EPAM Systems", role: "Fullstack Developer", salary: "8 LPA", selects: "38" },
    { company: "TCS", role: "Systems Engineer", salary: "4.0 LPA", selects: "72" },
    { company: "Capgemini", role: "Assoc. Consultant", salary: "4.5 LPA", selects: "58" },
    { company: "Infosys", role: "Systems Engineer", salary: "4.0 LPA", selects: "65" },
    { company: "Wipro", role: "Project Engineer", salary: "4.0 LPA", selects: "52" },
    { company: "LTI Mindtree", role: "Software Engineer", salary: "5.5 LPA", selects: "34" },
    { company: "NTT Data", role: "Associate Analyst", salary: "4.5 LPA", selects: "28" },
    { company: "Mphasis", role: "Software Engineer", salary: "4.0 LPA", selects: "22" },
  ],
  "2024": [
    { company: "Boeing", role: "Aerospace Engineer", salary: "28.5 LPA", selects: "3" },
    { company: "EPAM Systems", role: "Fullstack Developer", salary: "8 LPA", selects: "42" },
    { company: "Amazon", role: "SDE I", salary: "12 LPA", selects: "6" },
    { company: "Virtusa", role: "Data Engineer", salary: "5.5 LPA", selects: "48" },
    { company: "TCS", role: "Systems Engineer", salary: "4.0 LPA", selects: "88" },
    { company: "Infosys", role: "Systems Engineer", salary: "4.0 LPA", selects: "76" },
    { company: "Capgemini", role: "Assoc. Consultant", salary: "4.5 LPA", selects: "64" },
    { company: "Tata Technologies", role: "Design Engineer", salary: "4.5 LPA", selects: "52" },
    { company: "Tech Mahindra", role: "Software Engineer", salary: "4.0 LPA", selects: "46" },
    { company: "Optum", role: "Associate Developer", salary: "5.8 LPA", selects: "38" },
  ],
  "2023": [
    { company: "Amazon", role: "SDE I", salary: "58 LPA", selects: "2" },
    { company: "Virtusa", role: "Data Engineer", salary: "5.5 LPA", selects: "52" },
    { company: "Boeing", role: "Aerospace Engineer", salary: "16 LPA", selects: "4" },
    { company: "LTI Mindtree", role: "Software Engineer", salary: "5.5 LPA", selects: "44" },
    { company: "TCS", role: "Systems Engineer", salary: "4.0 LPA", selects: "96" },
    { company: "Capgemini", role: "Assoc. Consultant", salary: "4.5 LPA", selects: "72" },
    { company: "Infosys", role: "Systems Engineer", salary: "4.0 LPA", selects: "84" },
    { company: "Cyient", role: "Engineering Analyst", salary: "4.5 LPA", selects: "38" },
    { company: "NTT Data", role: "Associate Analyst", salary: "4.5 LPA", selects: "32" },
    { company: "GlobalEdge", role: "Software Engineer", salary: "4.0 LPA", selects: "28" },
  ],
  "2022": [
    { company: "Prolifics", role: "Fullstack Developer", salary: "25 LPA", selects: "3" },
    { company: "Capgemini", role: "Assoc. Consultant", salary: "4.5 LPA", selects: "142" },
    { company: "TCS", role: "Systems Engineer", salary: "4.0 LPA", selects: "188" },
    { company: "Infosys", role: "Systems Engineer", salary: "3.8 LPA", selects: "156" },
    { company: "Tata Technologies", role: "Design Engineer", salary: "4.5 LPA", selects: "62" },
    { company: "Wipro", role: "Project Engineer", salary: "4.0 LPA", selects: "96" },
    { company: "Cognizant", role: "Programmer Analyst", salary: "4.0 LPA", selects: "84" },
    { company: "Tech Mahindra", role: "Software Engineer", salary: "3.8 LPA", selects: "74" },
    { company: "Virtusa", role: "Associate Engineer", salary: "5.0 LPA", selects: "58" },
    { company: "Sonata Software", role: "Software Engineer", salary: "4.0 LPA", selects: "44" },
  ],
  "2021": [
    { company: "Mphasis", role: "Senior Associate", salary: "18.1 LPA", selects: "8" },
    { company: "TCS", role: "Systems Engineer", salary: "3.5 LPA", selects: "162" },
    { company: "Infosys", role: "Systems Engineer", salary: "3.5 LPA", selects: "118" },
    { company: "Wipro", role: "Project Engineer", salary: "3.5 LPA", selects: "96" },
    { company: "Capgemini", role: "Assoc. Consultant", salary: "4.0 LPA", selects: "88" },
    { company: "DXC Technology", role: "Associate", salary: "3.8 LPA", selects: "64" },
    { company: "Virtusa", role: "Associate Engineer", salary: "4.5 LPA", selects: "44" },
    { company: "Cyient", role: "Engineering Analyst", salary: "4.0 LPA", selects: "38" },
    { company: "MEIL", role: "Graduate Engineer", salary: "3.5 LPA", selects: "32" },
    { company: "ValueLabs", role: "Software Engineer", salary: "3.8 LPA", selects: "28" },
  ],
};

export const recruiters: Recruiter[] = Array.from({ length: 16 }, (_, i) => {
  const n = i + 1;
  const ext = n <= 6 ? "jpg" : "png";
  return { name: `Recruiter ${n}`, logo: `/placements/p${n}.${ext}` };
});

export const mous: MoU[] = [
  {
    name: "EPAM Systems",
    type: "Centre of Excellence",
    domain: "Advanced software engineering training and direct placement pathway for top-performing students.",
    package: "8–14 LPA",
  },
  {
    name: "Virtusa",
    type: "Centre of Excellence",
    domain: "Full-stack and cloud-engineering curriculum with embedded internships and recruitment commitments.",
    package: "6–10 LPA",
  },
  {
    name: "ICT Academy",
    type: "Training Partner",
    domain: "Industry-aligned skill development across emerging technologies — AI, cybersecurity, and data engineering.",
  },
  {
    name: "TASK (Telangana Academy for Skill and Knowledge)",
    type: "Industry Partner",
    domain: "State-level skill certification, employability training, and access to industry-led learning modules.",
  },
  {
    name: "NPTEL · IIT Madras",
    type: "Training Partner",
    domain: "Online certification courses, faculty development programmes, and student-led research mentorship.",
  },
];

export const driveGallery: DriveImage[] = [
  { src: "/placements/p1.jpg", alt: "Microsoft on-campus drive" },
  { src: "/placements/p2.jpg", alt: "Amazon recruitment session" },
  { src: "/placements/p3.jpg", alt: "Cognizant interview panel" },
  { src: "/placements/p4.jpg", alt: "Infosys pre-placement talk" },
  { src: "/placements/p5.jpg", alt: "TCS mass recruitment drive" },
  { src: "/placements/p6.jpg", alt: "Wipro coding round" },
];

export const infrastructureHighlights: string[] = [
  "800+ networked computer systems with webcams and 1 Gbps internet connectivity",
  "Auditorium with 1,200-seat capacity for pre-placement talks and mass drives",
  "Dedicated placement block with seminar halls, GD rooms, and interview panels",
  "Uninterrupted power backup across all placement facilities",
  "Centres of Excellence with Virtusa and EPAM Systems for advanced domain training",
];

export const infrastructureStats: Stat[] = [
  { value: "800+", label: "Systems" },
  { value: "1200", label: "Seat Auditorium" },
  { value: "1 Gbps", label: "Connectivity" },
];

export const sidebarLinks: SidebarLink[] = [
  { id: "pl-wall", label: "Overview" },
  { id: "pl-performance", label: "Year Stats" },
  { id: "pl-recruiters", label: "Recruiters" },
  { id: "pl-infra", label: "Infrastructure" },
  { id: "pl-mou", label: "MOU" },
  { id: "pl-gallery", label: "Placement Drives" },
  { id: "pl-contact", label: "Contact" },
];

export const contactInfo = {
  name: "Ravi Chandra P",
  role: "Head of Placements",
  phones: ["+91 98499 91299", "+91 96522 26061"],
  email: "ravichandra@mlrinstitutions.ac.in",
  address: [
    "MLR Institute of Technology",
    "Survey No. 444, Dundigal",
    "Medchal Malkajgiri",
    "Telangana – 500 043",
  ],
};
