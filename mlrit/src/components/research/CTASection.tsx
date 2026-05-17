import type { CalloutBlock } from "@/data/research-types";
import { renderInline } from "./inlineFormat";

type Props = { data: CalloutBlock };

/**
 * Green gradient callout pill (.callout). Used at the bottom of most pages.
 */
export default function CTASection({ data }: Props) {
  const { kicker, title, body, cta } = data;
  return (
    <div className="callout">
      <div className="callout__lead">
        <div className="callout__kicker">{kicker}</div>
        <div className="callout__title">{title}</div>
        {body && <p className="callout__body">{renderInline(body)}</p>}
      </div>
      <a href={cta.href} className="callout__btn">
        {cta.label}
      </a>
    </div>
  );
}
