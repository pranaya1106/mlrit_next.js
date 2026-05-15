export default function HeroSection() {
  return (
    <section className="hero">
      <video
        className="hero__bg hero__bg--a is-active"
        id="heroA"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dhqhhtvym/video/upload/v1777367629/hero1_hq.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero__content">
        <div className="hero__headline">
          <h1>
            <span className="hero__line hero__line--1">Where</span>
            <span className="hero__line hero__line--2">Innovation</span>
            <span className="hero__line hero__line--3">
              Meets <em className="hero__gold">Excellence.</em>
            </span>
          </h1>
          <p className="hero__sub">
            MLRIT shapes engineers, thinkers, and leaders ready to solve
            tomorrow&apos;s challenges — right here in Hyderabad.
          </p>
        </div>
      </div>

      <a href="#stats" className="hero__scroll" aria-label="Scroll down">
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}
