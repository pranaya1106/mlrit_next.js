import Link from "next/link";
import type { PgListingCard as PgCard } from "@/data/departments-pg-listing";

type Props = {
  card: PgCard;
};

export default function PgListingCard({ card }: Props) {
  const cls = card.variant === "mba" ? "dept-card dept-card--mba" : "dept-card";
  return (
    <Link
      href={`/departments/${card.slug}`}
      className={cls}
      aria-label={`${card.name} ${card.code} programme`}
    >
      <div className="dept-card__code">{card.code}</div>
      <div className="dept-card__name">{card.name}</div>
      <div className="dept-card__desc">{card.description}</div>
    </Link>
  );
}
