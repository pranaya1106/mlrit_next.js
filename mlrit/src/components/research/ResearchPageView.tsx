import { Fragment } from "react";
import Image from "next/image";
import type { Block, ResearchPage } from "@/data/research-types";
import ResearchSection from "./ResearchSection";
import ResearchCard from "./ResearchCard";
import CTASection from "./CTASection";
import PoliciesSection from "./PoliciesSection";
import PublicationsSection from "./PublicationsSection";
import FacultyResearchSection from "./FacultyResearchSection";
import { renderInline } from "./inlineFormat";

/**
 * Walks a ResearchPage's typed `Section[]`/`Block[]` structure and renders
 * the correct primitive for every block kind. Adding a new block kind is
 * a matter of extending the `Block` union and adding one switch case here.
 */
export default function ResearchPageView({ page }: { page: ResearchPage }) {
  return (
    <>
      {page.sections.map((section, idx) => (
        <ResearchSection key={idx} section={section}>
          {section.blocks.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </ResearchSection>
      ))}
    </>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <div className="res-prose">
          {block.paragraphs.map((p, i) => (
            <p key={i}>{renderInline(p)}</p>
          ))}
        </div>
      );

    case "lede":
      return <p className="res-lede">{renderInline(block.text)}</p>;

    case "h3":
      return <h3 className="res-h3">{block.text}</h3>;

    case "pull-quote":
      return (
        <blockquote className="res-pull">
          {block.text}
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      );

    case "split-figure": {
      const img = block.image;
      return (
        <div className="res-split">
          <div className="res-split__text">
            <div className="res-prose">
              {block.paragraphs.map((p, i) => (
                <p key={i}>{renderInline(p)}</p>
              ))}
            </div>
            {block.pullQuote && (
              <blockquote className="res-pull">
                {block.pullQuote.text}
                {block.pullQuote.cite && <cite>{block.pullQuote.cite}</cite>}
              </blockquote>
            )}
          </div>
          <figure className="res-figure res-split__figure">
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width ?? 800}
              height={img.height ?? 600}
              sizes="(max-width: 860px) 100vw, 480px"
              style={{ width: "100%", height: "auto", maxHeight: 480, objectFit: "contain" }}
            />
            {img.caption && <figcaption>{img.caption}</figcaption>}
          </figure>
        </div>
      );
    }

    case "stat-strip":
      return (
        <div className="stat-strip">
          {block.items.map((item) => (
            <div key={item.label} className="stat-strip__item">
              <div className="stat-strip__num">{item.num}</div>
              <div className="stat-strip__label">{item.label}</div>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <div className="res-table-wrap">
          <table className="res-table">
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
                  {row.map((cell, ci) =>
                    typeof cell === "string" ? (
                      <td key={ci}>{cell}</td>
                    ) : (
                      <td key={ci}>
                        <a href={cell.href} className="res-dl">
                          {cell.label}
                        </a>
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "def-list":
      return (
        <dl className={`def-list${block.onInk ? " def-list--ink" : ""}`}>
          {block.items.map((item) => (
            <Fragment key={item.term}>
              <dt>{item.term}</dt>
              <dd>{renderInline(item.description)}</dd>
            </Fragment>
          ))}
        </dl>
      );

    case "check-list":
      return (
        <ul className="check-list">
          {block.items.map((item, i) => (
            <li key={i}>
              {item.strong && <strong>{item.strong}</strong>}
              {item.strong ? " " : null}
              {renderInline(item.text)}
            </li>
          ))}
        </ul>
      );

    case "hub-list":
      return (
        <div className="hub-list">
          {block.tiles.map((tile) => (
            <ResearchCard key={tile.title} {...tile} />
          ))}
        </div>
      );

    case "centre-block": {
      const cls = `centre-block${block.flip ? " centre-block--flip" : ""}`;
      return (
        <div className={cls}>
          <div>
            <div className="centre-block__num">{block.num}</div>
            <h2 className="centre-block__title">{block.title}</h2>
            {block.paragraphs.map((p, i) => (
              <p key={i} className="centre-block__body">
                {p}
              </p>
            ))}
            <div className="centre-block__chips">
              {block.chips.map((c) => (
                <span key={c} className="centre-chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="centre-block__visual">
            <span>{block.visual}</span>
          </div>
        </div>
      );
    }

    case "service-grid":
      return (
        <div className="service-grid">
          {block.cells.map((cell) => (
            <div key={cell.title} className="service-cell">
              <div className="service-cell__title">{cell.title}</div>
              <p className="service-cell__body">{cell.body}</p>
            </div>
          ))}
        </div>
      );

    case "process":
      return (
        <div className="process">
          {block.steps.map((s) => (
            <div key={s.title} className="process__step">
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      );

    case "dl-cards":
      return <PoliciesSection data={block} />;

    case "callout":
      return <CTASection data={block} />;

    case "ink-cta":
      return (
        <div className="ink-cta">
          <div className="ink-cta__lead">
            <span className="res-eyebrow">{block.eyebrow}</span>
            <h2 className="res-h2 ink-cta__title">{block.title}</h2>
            <p className="ink-cta__body">{block.body}</p>
          </div>
          <a href={block.cta.href} className="callout__btn">
            {block.cta.label}
          </a>
        </div>
      );

    case "publications":
      return <PublicationsSection data={block} />;

    case "faculty-tabs":
      return <FacultyResearchSection data={block} />;
  }
}
