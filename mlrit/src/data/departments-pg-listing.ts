export type PgListingCard = {
  slug: string;
  code: "M.Tech" | "MBA";
  name: string;
  description: string;
  variant?: "mba";
};

export const pgMTechCards: PgListingCard[] = [
  {
    slug: "cse",
    code: "M.Tech",
    name: "Computer Science and Engineering",
    description:
      "Advanced algorithms, architecture, data structures. Research-focused with dissertation in Year 2.",
  },
  {
    slug: "ece",
    code: "M.Tech",
    name: "Electronics and Communication Engineering",
    description:
      "Advanced DSP, communication systems, microprocessor systems. Embedded Systems specialisation.",
  },
  {
    slug: "eee",
    code: "M.Tech",
    name: "Electrical and Electronics Engineering",
    description:
      "Advanced power systems, smart grid technology, renewable energy systems and power electronics.",
  },
  {
    slug: "mech",
    code: "M.Tech",
    name: "Mechanical Engineering",
    description:
      "Advanced thermodynamics, manufacturing processes, composite materials and FEM.",
  },
  {
    slug: "aero",
    code: "M.Tech",
    name: "Aeronautical Engineering",
    description:
      "Advanced aerodynamics, propulsion systems, aeroelasticity and aircraft design.",
  },
];

export const pgMbaCards: PgListingCard[] = [
  {
    slug: "mba",
    code: "MBA",
    name: "Master of Business Administration",
    description:
      "2-year programme focusing on innovation, research, entrepreneurial skills. Specialisations in Finance, Marketing, HR, Operations.",
    variant: "mba",
  },
];
