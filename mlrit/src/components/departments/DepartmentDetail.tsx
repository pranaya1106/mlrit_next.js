import type { DepartmentContent } from "@/data/departments-types";
import DeptNav from "./DeptNav";
import DeptHero from "./DeptHero";
import DeptShell from "./DeptShell";
import PanelOverview from "./PanelOverview";
import PanelObjectives from "./PanelObjectives";
import PanelFaculty from "./PanelFaculty";
import PanelAcademics from "./PanelAcademics";
import PanelAchievements from "./PanelAchievements";
import PanelCommittees from "./PanelCommittees";

type Props = {
  dept: DepartmentContent;
};

export default function DepartmentDetail({ dept }: Props) {
  return (
    <article className="dept-detail-page">
      <DeptNav
        deptName={dept.deptNavName}
        activeLevel={dept.slug === "mba" ? "pg" : "ug"}
      />
      <DeptHero hero={dept.hero} />
      <DeptShell sidebar={dept.sidebar}>
        <PanelOverview content={dept.overview} active />
        <PanelObjectives content={dept.objectives} active={false} />
        <PanelFaculty faculty={dept.faculty} active={false} />
        <PanelAcademics
          slug={dept.slug}
          content={dept.academics}
          active={false}
        />
        <PanelAchievements content={dept.achievements} active={false} />
        <PanelCommittees content={dept.committees} active={false} />
      </DeptShell>
    </article>
  );
}
