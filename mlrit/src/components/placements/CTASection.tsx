import SectionShell from "./SectionShell";
import { contactInfo } from "@/app/placements/_data";

export default function CTASection() {
  return (
    <SectionShell id="pl-contact" className="pl-contact" innerClassName="pl-contact__inner">
      <div>
        <span className="pl-label pl-fade">Get in Touch</span>
        <h2 className="pl-heading pl-fade">Placement Cell</h2>
        <p className="pl-contact__name">{contactInfo.name}</p>
        <p className="pl-contact__role">{contactInfo.role}</p>

        <div className="pl-contact__details">
          {contactInfo.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s+/g, "")}`}
              className="pl-contact__item"
            >
              <span className="pl-contact__icon" aria-hidden="true">
                ☏
              </span>
              {p}
            </a>
          ))}
          <a href={`mailto:${contactInfo.email}`} className="pl-contact__item">
            <span className="pl-contact__icon" aria-hidden="true">
              ✉
            </span>
            {contactInfo.email}
          </a>
        </div>
      </div>

      <div className="pl-contact__address">
        <h3 className="pl-contact__addr-heading">Address</h3>
        <p>
          {contactInfo.address.map((line, i) => (
            <span key={line}>
              {line}
              {i < contactInfo.address.length - 1 && <br />}
            </span>
          ))}
        </p>
        <p className="pl-contact__eapcet">
          EAPCET Code: <strong>MLID</strong>
        </p>
      </div>
    </SectionShell>
  );
}
