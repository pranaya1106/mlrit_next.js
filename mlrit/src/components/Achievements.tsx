import Image from "next/image";

const ACCRED_BUBBLES = [
  { idx: 0, size: "center", src: "/nirf/naac.svg", alt: "NAAC", style: undefined },
  {
    idx: 1,
    size: "md",
    src: "/nirf/aicte.svg",
    alt: "AICTE",
    style: { "--lx": "-120px", "--ly": "-120px" },
  },
  {
    idx: 2,
    size: "md",
    src: "/nirf/the-week.svg",
    alt: "The Week",
    style: { "--lx": "120px", "--ly": "-120px" },
  },
  {
    idx: 3,
    size: "sm",
    src: "/nirf/arha.svg",
    alt: "ARIIA",
    style: { "--lx": "155px", "--ly": "20px" },
  },
  {
    idx: 4,
    size: "md",
    src: "/nirf/nba.svg",
    alt: "NBA",
    style: { "--lx": "90px", "--ly": "145px" },
  },
  {
    idx: 5,
    size: "md",
    src: "/nirf/dataquest.svg",
    alt: "Dataquest",
    style: { "--lx": "-90px", "--ly": "145px" },
  },
  {
    idx: 6,
    size: "sm",
    src: "/nirf/gyaanvigyan.svg",
    alt: "Gyaan Vigyan",
    style: { "--lx": "-155px", "--ly": "20px" },
  },
] as const;

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="accred-blob accred-blob--green" aria-hidden="true" />
      <div className="accred-blob accred-blob--gold" aria-hidden="true" />
      <div className="accred-blob accred-blob--orange" aria-hidden="true" />
      <div className="accred-grid-bg" aria-hidden="true" />
      <div className="accred-fade accred-fade--top" aria-hidden="true" />
      <div className="accred-fade accred-fade--bottom" aria-hidden="true" />

      <div className="section-wrap">
        <div className="achievements__grid">
          <div style={{ paddingRight: 40, position: "relative", zIndex: 2 }}>
            <span className="section-label reveal">Recognition</span>
            <h2 className="section-heading reveal" data-delay="1">
              Accreditations and Approvals
            </h2>
            <p className="section-sub reveal" data-delay="2">
              AICTE, NAAC, NBA, ARIIA and more — recognised by leading national
              bodies for academic excellence and quality education.
            </p>

            <div className="achievements__ranks">
              <div className="rank-row">
                <div className="rank-row__num">201</div>
                <div className="rank-row__info">
                  <strong>NIRF Rankings 2024</strong>
                  <span>201–300 Band, Engineering Category</span>
                </div>
              </div>
              <div className="rank-row">
                <div className="rank-row__num">#6</div>
                <div className="rank-row__info">
                  <strong>Times Engineering Survey</strong>
                  <span>6th in Telangana</span>
                </div>
              </div>
              <div className="rank-row">
                <div className="rank-row__num">AAAA</div>
                <div className="rank-row__info">
                  <strong>Career360 Rating</strong>
                  <span>Four-A Accredited Institution</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="logo-cluster-wrap"
            style={{ position: "relative", zIndex: 2, marginTop: -60 }}
          >
            <svg
              className="accred-constellation"
              viewBox="0 0 520 480"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line x1="260" y1="240" x2="90" y2="90" />
              <line x1="260" y1="240" x2="405" y2="75" />
              <line x1="260" y1="240" x2="445" y2="220" />
              <line x1="260" y1="240" x2="410" y2="395" />
              <line x1="260" y1="240" x2="205" y2="420" />
              <line x1="260" y1="240" x2="75" y2="295" />
              <line x1="90" y1="90" x2="405" y2="75" />
              <line x1="405" y1="75" x2="445" y2="220" />
              <line x1="445" y1="220" x2="410" y2="395" />
              <line x1="410" y1="395" x2="205" y2="420" />
              <line x1="205" y1="420" x2="75" y2="295" />
              <line x1="75" y1="295" x2="90" y2="90" />
            </svg>

            <div className="logo-cluster" id="logoCluster">
              {ACCRED_BUBBLES.map((b) => (
                <div
                  key={b.idx}
                  className={`lc-bubble lc-bubble--${b.size}`}
                  data-idx={b.idx}
                  style={b.style as React.CSSProperties | undefined}
                >
                  <Image src={b.src} alt={b.alt} width={80} height={80} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
