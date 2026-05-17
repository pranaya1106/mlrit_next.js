import Link from "next/link";

type Props = {
  num: string;
  title: string;
  body: string;
  cta: string;
  href: string;
};

/**
 * The "hub-tile" used in the Overview hub grid and anywhere else we want
 * a numbered, hover-lifted research link card.
 */
export default function ResearchCard({ num, title, body, cta, href }: Props) {
  const isExternal = /^(https?:|mailto:|tel:)/i.test(href);
  const content = (
    <>
      <div className="hub-tile__num">{num}</div>
      <div className="hub-tile__title">{title}</div>
      <p className="hub-tile__body">{body}</p>
      <span className="hub-tile__cta">{cta}</span>
    </>
  );
  if (isExternal) {
    return (
      <a href={href} className="hub-tile">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className="hub-tile">
      {content}
    </Link>
  );
}
