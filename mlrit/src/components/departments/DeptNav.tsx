import Link from "next/link";

type Props = {
  deptName: string;
  activeLevel?: "ug" | "pg";
};

export default function DeptNav({ deptName, activeLevel = "ug" }: Props) {
  const ugActive = activeLevel === "ug";
  return (
    <nav className="dept-nav" aria-label="Department breadcrumb">
      <Link href="/" className="dept-nav__link">
        Home
      </Link>
      <span className="dept-nav__sep" aria-hidden="true" />
      <Link
        href="/departments"
        className={`dept-nav__link${ugActive ? " dept-nav__link--active" : ""}`}
      >
        Undergraduate
      </Link>
      <Link
        href="/departments/pg"
        className={`dept-nav__link${ugActive ? "" : " dept-nav__link--active"}`}
      >
        Postgraduate
      </Link>
      <span className="dept-nav__sep" aria-hidden="true" />
      <span className="dept-nav__link dept-nav__link--dept">{deptName}</span>
    </nav>
  );
}
