import Link from "next/link";

type Props = {
  title: string;
  body: string;
  href: string;
};

/**
 * A single tile in the Accreditation hub grid shown on `/iqac`.
 * Links into `/accreditation/[slug]`.
 */
export default function AccreditationCard({ title, body, href }: Props) {
  return (
    <Link href={href} className="iq-accred-card">
      <h3 className="iq-accred-card__title">{title}</h3>
      <p className="iq-accred-card__body">{body}</p>
      <span className="iq-accred-card__cta">View Details →</span>
    </Link>
  );
}
