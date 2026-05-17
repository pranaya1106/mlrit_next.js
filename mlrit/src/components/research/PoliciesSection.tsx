import type { DlCardsBlock } from "@/data/research-types";

type Props = { data: DlCardsBlock };

/**
 * Download-card grid for policy / form libraries.
 */
export default function PoliciesSection({ data }: Props) {
  return (
    <div className="dl-cards">
      {data.cards.map((card) => (
        <a key={card.title} href={card.href} className="dl-card">
          <span className="dl-card__kicker">{card.kicker}</span>
          <span className="dl-card__title">{card.title}</span>
          <span className="dl-card__meta">{card.meta}</span>
          <span className="dl-card__link">Download PDF →</span>
        </a>
      ))}
    </div>
  );
}
