export type FacultyCard = {
  name: string;
  role: string;
  photo: string;
  initials: string;
  specialty?: string;
  isHod?: boolean;
  profileHref?: string;
};

export type LabCard = {
  name: string;
  desc: string;
};

export type Peo = {
  num: string;
  text: string;
};

export type ObeLink = {
  label: string;
  href: string;
};

export type SyllabusPdf = {
  label: string;
  sublabel?: string;
  viewHref: string;
  downloadHref: string;
};

export type CourseCatalogLink = {
  label: string;
  sublabel?: string;
  href: string;
};

export type AchievementCard = {
  title: string;
  body: string;
};

export type HonourRow = {
  year: string;
  name: string;
  badge: string;
  badgeKind: "topper" | "rank";
  score: string;
};

export type Publication = {
  title: string;
  authors: string;
  journal: string;
  year: string;
};

export type InternStat = {
  num: string;
  label: string;
};

export type InternFlipCard = {
  company: string;
  type: string;
  count: string;
  year: string;
};

export type PlacementStat = {
  num: string;
  label: string;
};

export type CommitteeCard = {
  heading: string;
  h3: string;
  body: string;
  docHref?: string;
  docLabel?: string;
};

export type SidebarItem = {
  tab: string;
  targetId: string;
  label: string;
};

export type DepartmentHero = {
  eyebrow: string;
  title: string;
  video?: string;
};

export type OverviewContent = {
  hod: {
    name: string;
    role?: string;
    photo: string;
    quote: string;
  };
  visionMission: {
    vision: string;
    mission: string;
    docHref?: string;
    docLabel?: string;
  };
  teachingMethod: string;
  history: string;
  labs: LabCard[];
  labsHeading?: string;
};

export type ObjectivesContent = {
  peos: Peo[];
  obeBTech: ObeLink[];
  obeMTech?: ObeLink[];
  obePortalHref?: string;
  handbookTitle: string;
  handbookSub: string;
};

export type RegulationSemester = [string, string][];
export type RegulationData = Record<string, RegulationSemester>;
export type RegulationYears = Record<string, RegulationData>;

export type Regulation = {
  label: string;
  fullSyllabusHref?: string;
  years: RegulationYears;
};

export type AcademicsContent = {
  syllabusPdfs: SyllabusPdf[];
  courseCatalog: CourseCatalogLink[];
  regulations?: Record<string, Regulation>;
  subjectDetails?: Record<string, string[]>;
};

export type AchievementsContent = {
  achievementCards: AchievementCard[];
  honourTable: HonourRow[];
  studentAchievements: string[];
  publications: Publication[];
  internStats: InternStat[];
  internCards: InternFlipCard[];
  placementStats: PlacementStat[];
  placementNote: string;
};

export type CommitteesContent = {
  intro: string;
  cards: CommitteeCard[];
};

export type DepartmentContent = {
  slug: string;
  deptNavName: string;
  hero: DepartmentHero;
  sidebar: SidebarItem[];
  overview: OverviewContent;
  objectives: ObjectivesContent;
  faculty: FacultyCard[];
  academics: AcademicsContent;
  achievements: AchievementsContent;
  committees: CommitteesContent;
};
