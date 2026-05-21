export default function HeroSection() {
  return (
    <section className="hero hero--v2">
      <video
        className="hero__bg hero__bg--a is-active"
        id="heroA"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero2.mp4" type="video/mp4" />
      </video>

      <div className="hero__content">
        <h1 className="hero__title">
          Engineering
          <span className="hero__title-italic">the Future.</span>
        </h1>
        <p className="hero__sub">
          Two decades of shaping minds. 11,000+ engineers and counting. At
          MLRIT, we don&apos;t just teach the future — we build it.
        </p>
        <a href="#stats" className="hero__cta">
          <span className="hero__cta-chev" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </span>
          <span>Explore Programs</span>
        </a>
      </div>
    </section>
  );
}
