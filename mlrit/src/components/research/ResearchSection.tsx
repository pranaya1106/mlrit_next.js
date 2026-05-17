import type { Section } from "@/data/research-types";

type Props = {
  section: Section;
  children: React.ReactNode;
};

export default function ResearchSection({ section, children }: Props) {
  const classes = ["res-section"];
  if (section.tight) classes.push("res-section--tight");
  if (section.variant === "surface") classes.push("res-section--surface");
  if (section.variant === "ink") classes.push("res-section--ink");

  const wrapStyle = section.wrapMaxWidth
    ? ({ maxWidth: section.wrapMaxWidth } as React.CSSProperties)
    : undefined;

  return (
    <section className={classes.join(" ")} id={section.id}>
      <div className="res-wrap" style={wrapStyle}>
        {section.eyebrow && <span className="res-eyebrow">{section.eyebrow}</span>}
        {section.heading && <h2 className="res-h2">{section.heading}</h2>}
        {section.rule && <div className="res-rule" />}
        {section.lede && <p className="res-lede">{section.lede}</p>}
        {children}
      </div>
    </section>
  );
}
