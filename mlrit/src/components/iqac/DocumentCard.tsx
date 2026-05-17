import type { DocItem } from "@/data/iqac-types";

type Props = {
  item: DocItem;
};

/**
 * A single row inside an `.iq-doc-list` — orange dot + link + year pill.
 */
export default function DocumentCard({ item }: Props) {
  const external = item.external ?? /^https?:\/\//i.test(item.href);
  return (
    <li>
      <a
        href={item.href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {item.label}
      </a>
      {item.yearTag && <span className="iq-doc__year">{item.yearTag}</span>}
    </li>
  );
}
