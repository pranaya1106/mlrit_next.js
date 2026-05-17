import { Fragment, type ReactNode } from "react";
import Link from "next/link";

/**
 * Render a single string with very small inline-Markdown support:
 *   - **bold**
 *   - [label](href)   (mailto: → <a>, http/https → external <a>, else next/link)
 * Anything else is rendered as-is.
 */
export function renderInline(text: string): ReactNode {
  // Combined regex captures either a link or bold span.
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={`t-${key++}`}>{text.slice(lastIndex, match.index)}</Fragment>,
      );
    }

    if (match[1] !== undefined && match[2] !== undefined) {
      const label = match[1];
      const href = match[2];
      if (href.startsWith("mailto:") || href.startsWith("tel:")) {
        parts.push(
          <a key={`l-${key++}`} href={href}>
            {label}
          </a>,
        );
      } else if (/^https?:\/\//i.test(href)) {
        parts.push(
          <a key={`l-${key++}`} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>,
        );
      } else {
        parts.push(
          <Link key={`l-${key++}`} href={href}>
            {label}
          </Link>,
        );
      }
    } else if (match[3] !== undefined) {
      parts.push(<strong key={`b-${key++}`}>{match[3]}</strong>);
    }

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(<Fragment key={`t-${key++}`}>{text.slice(lastIndex)}</Fragment>);
  }

  return parts.length > 0 ? parts : text;
}
