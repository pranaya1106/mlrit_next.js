import AccreditationCard from "./AccreditationCard";
import { accreditationDirectory } from "@/data/accreditation";

/**
 * "Explore Accreditation" hub block, rendered as a trailing slot on the
 * `/iqac` landing page. Reads `accreditationDirectory` so the cards stay
 * in lockstep with the available `/accreditation/[slug]` routes.
 */
export default function CTASection() {
  return (
    <section id="accreditation">
      <h2>Explore Accreditation</h2>
      <p>
        Marri Laxman Reddy Institute of Technology is assessed by multiple
        national bodies. Use the links below to view documents and accreditation
        status for each framework.
      </p>
      <div className="iq-accreditation-hub">
        {accreditationDirectory.map((c) => (
          <AccreditationCard key={c.slug} title={c.title} body={c.body} href={c.href} />
        ))}
      </div>
    </section>
  );
}
