import Link from "next/link";
import type { ResearchHeroData } from "@/data/research-types";

type Props = {
  data: ResearchHeroData;
  /** When `true`, the crumb chain includes a link back to the Research overview. */
  showResearchCrumb?: boolean;
};

export default function ResearchHero({ data, showResearchCrumb = true }: Props) {
  return (
    <section className="res-hero">
      <div className="res-hero__inner">
        <nav className="res-hero__crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          {showResearchCrumb ? (
            <>
              <Link href="/research/overview">Research</Link>
              <span>/</span>
              {data.crumbLabel}
            </>
          ) : (
            <>Research<span>/</span>{data.crumbLabel}</>
          )}
        </nav>
        <h1 className="res-hero__title">
          {data.title}
          {data.titleEm && (
            <>
              <br />
              <em>{data.titleEm}</em>
            </>
          )}
        </h1>
        <p className="res-hero__lede">{data.lede}</p>
        {data.meta && data.meta.length > 0 && (
          <div className="res-hero__meta">
            {data.meta.map((item) => (
              <div key={item.label} className="res-hero__meta-item">
                {item.label}
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
