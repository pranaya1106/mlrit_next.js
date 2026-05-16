import type { FacultyCard } from "@/data/departments-types";
import FacultyCardItem from "./FacultyCardItem";

type Props = {
  faculty: FacultyCard[];
  active: boolean;
};

export default function PanelFaculty({ faculty, active }: Props) {
  return (
    <div
      className={`dept-panel${active ? " is-active" : ""}`}
      id="panel-faculty"
      role="tabpanel"
      aria-labelledby="tab-faculty"
    >
      <h2 className="panel-heading">Faculty Profiles</h2>
      <p>Hover for details. Click &ldquo;View Research&rdquo; for full profile.</p>
      <div id="faculty-grid-section" className="fcard-grid">
        {faculty.map((f) => (
          <FacultyCardItem key={f.name + f.photo} faculty={f} />
        ))}
      </div>
    </div>
  );
}
