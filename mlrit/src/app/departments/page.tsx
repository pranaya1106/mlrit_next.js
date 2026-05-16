import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import DepartmentListingCard from "@/components/departments/DepartmentListingCard";
import { deptListingCards } from "@/data/departments-listing";

export const metadata: Metadata = {
  title: "Undergraduate Programmes — MLRIT",
  description:
    "Choose from 11 B.Tech disciplines at MLRIT with NBA accreditation, industry partnerships, and 840+ annual intake across all branches.",
};

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />
      <main className="dept-listing-page">
        <section className="prog-hero" aria-labelledby="prog-hero-title">
          <div className="prog-hero__eyebrow">B.Tech Programmes</div>
          <h1 id="prog-hero-title" className="prog-hero__title">
            Undergraduate Programmes
          </h1>
          <p className="prog-hero__sub">
            Choose from 5 B.Tech disciplines with NBA accreditation, industry
            partnerships, and 840+ annual intake across all branches.
          </p>
        </section>

        <div className="prog-content">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>

          <div className="prog-grid">
            {deptListingCards.map((card) => (
              <DepartmentListingCard key={card.slug} card={card} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
