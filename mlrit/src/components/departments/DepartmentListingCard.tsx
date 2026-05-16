import Link from "next/link";
import type { DeptListingCard } from "@/data/departments-listing";

type Props = {
  card: DeptListingCard;
};

export default function DepartmentListingCard({ card }: Props) {
  return (
    <Link
      href={`/departments/${card.slug}`}
      className="dept-card"
      aria-label={`${card.name} department`}
    >
      <div className="dept-card__code">{card.code}</div>
      <div className="dept-card__name">{card.name}</div>
      <div className="dept-card__desc">{card.description}</div>
      <div className="dept-card__stats">
        {card.stats.map((s) => (
          <div key={s.label} className="dept-card__stat">
            {s.value} <span>{s.label}</span>
          </div>
        ))}
      </div>
    </Link>
  );
}
