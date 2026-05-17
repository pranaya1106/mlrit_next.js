import Image from "next/image";
import type { Block, IQACPage, TableCell } from "@/data/iqac-types";
import ReportsSection from "./ReportsSection";

/**
 * Walks an `IQACPage`'s typed Section[]/Block[] structure and renders
 * the correct primitive for every block kind. Adding a new block kind
 * is a matter of extending the `Block` union (in `iqac-types.ts`) and
 * adding one switch case below.
 *
 * Body strings inside `prose` / `coordinator.bio` / list items may
 * contain a small whitelist of inline tags (<strong>, <em>, <br/>,
 * <a href>) and HTML entities. Those are rendered via
 * `dangerouslySetInnerHTML` — the content is fully author-controlled
 * (it lives in `src/data/`), never user input.
 */
export default function IQACPageView({ page }: { page: IQACPage }) {
  return (
    <>
      {page.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.heading ?? section.label}</h2>
          {section.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </section>
      ))}
    </>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <>
          {block.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </>
      );

    case "h3":
      return <h3>{block.text}</h3>;

    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              {item.strong && (
                <>
                  <strong>{item.strong}</strong>{" "}
                </>
              )}
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>
              {item.strong && (
                <>
                  <strong>{item.strong}</strong>{" "}
                </>
              )}
              <span dangerouslySetInnerHTML={{ __html: item.text }} />
            </li>
          ))}
        </ol>
      );

    case "table":
      return (
        <div className="iq-table-wrap">
          <table className="iq-table">
            <thead>
              <tr>
                {block.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{renderTableCell(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "doc-list":
      return <ReportsSection data={block} />;

    case "note":
      return <p className="iq-note">{block.text}</p>;

    case "coordinator":
      return (
        <div className="iq-coordinator">
          <div className="iq-coordinator__photo">
            <Image
              src={block.photo.src}
              alt={block.photo.alt}
              fill
              sizes="110px"
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
          </div>
          <div className="iq-coordinator__info">
            <p className="iq-coordinator__name">{block.name}</p>
            <p
              className="iq-coordinator__desig"
              dangerouslySetInnerHTML={{ __html: block.designation }}
            />
            {block.bio.map((p, i) => (
              <p
                key={i}
                className="iq-coordinator__bio"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        </div>
      );
  }
}

function renderTableCell(cell: TableCell) {
  if (typeof cell === "string") {
    return <span dangerouslySetInnerHTML={{ __html: cell }} />;
  }
  const external = cell.external ?? /^https?:\/\//i.test(cell.href);
  return (
    <a
      href={cell.href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {cell.label}
    </a>
  );
}
