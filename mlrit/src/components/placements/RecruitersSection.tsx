import Image from "next/image";
import SectionShell from "./SectionShell";
import { recruiters } from "@/app/placements/_data";

export default function RecruitersSection() {
  const loop = [...recruiters, ...recruiters];

  return (
    <SectionShell id="pl-recruiters" className="pl-recruiters">
      <span className="pl-label pl-fade">Our Recruiters</span>
      <h2 className="pl-heading pl-fade">Top Hiring Partners</h2>
      <p className="pl-recruiters__sub pl-fade">
        Leading organisations across IT, product, consulting, and core
        engineering sectors recruit regularly from MLRIT.
      </p>

      <div className="pl-logo-band">
        <div className="pl-logo-track pl-logo-track--fwd">
          {loop.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="pl-logo-item"
              title={r.name}
            >
              <Image
                src={r.logo}
                alt={r.name}
                width={150}
                height={70}
                loading="lazy"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
