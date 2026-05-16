import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import PgListingCard from "@/components/departments/PgListingCard";
import { pgMTechCards, pgMbaCards } from "@/data/departments-pg-listing";

export const metadata: Metadata = {
  title: "Postgraduate Programmes — MLRIT",
  description:
    "Advance your career with M.Tech specialisations across 5 engineering disciplines or pursue an MBA in management studies.",
};

export default function PostgraduatePage() {
  return (
    <>
      <Navbar />
      <main className="dept-listing-page dept-listing-page--pg">
        <section className="prog-hero" aria-labelledby="pg-hero-title">
          <div className="prog-hero__eyebrow">M.Tech and MBA Programmes</div>
          <h1 id="pg-hero-title" className="prog-hero__title">
            Postgraduate Programmes
          </h1>
          <p className="prog-hero__sub">
            Advance your career with M.Tech specialisations across 5
            engineering disciplines or pursue an MBA in management studies.
          </p>
        </section>

        <div className="prog-content">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>

          <div className="section-label">M.Tech Programmes</div>
          <div className="prog-grid">
            {pgMTechCards.map((card) => (
              <PgListingCard key={card.slug} card={card} />
            ))}
          </div>

          <div className="section-label">MBA Programme</div>
          <div className="prog-grid">
            {pgMbaCards.map((card) => (
              <PgListingCard key={card.slug} card={card} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
