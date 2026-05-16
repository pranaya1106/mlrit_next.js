import SectionShell from "./SectionShell";
import { mous } from "@/app/placements/_data";

export default function MoUSection() {
  return (
    <SectionShell id="pl-mou" className="pl-mou">
      <span className="pl-label pl-fade">Industry Partnerships</span>
      <h2 className="pl-heading pl-fade">MoUs and Centres of Excellence</h2>
      <p className="pl-mou__sub">
        MLRIT has established formal partnerships and Centres of Excellence
        with leading industry organisations to provide students with advanced
        domain training and direct placement pathways.
      </p>

      <div className="pl-mou__stack">
        {mous.map((m, i) => {
          const isCoe = m.type === "Centre of Excellence";
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <article
              key={m.name}
              className="pl-mou-card pl-fade"
              data-type={isCoe ? "coe" : "partner"}
              data-side={side}
              tabIndex={0}
            >
              <div className="pl-mou-card__glow" aria-hidden="true" />
              <div className="pl-mou-card__inner">
                <div className="pl-mou-card__head">
                  <span className="pl-mou-card__type">{m.type}</span>
                  {m.package && (
                    <span className="pl-mou-card__metric">{m.package}</span>
                  )}
                </div>
                <h3 className="pl-mou-card__name">{m.name}</h3>
                <p className="pl-mou-card__desc">{m.domain}</p>
              </div>
              <span className="pl-mou-card__shine" aria-hidden="true" />
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}
