import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./globals.css";
import "@/styles/main.css";
import "@/styles/navbar.css";
import "@/styles/chronicles-dropdown.css";
import "@/styles/hero.css";
import "@/styles/rankings.css";
import "@/styles/success-stories.css";
import "@/styles/why-mlrit.css";
import "@/styles/testimonials.css";
import "@/styles/events-disc.css";
import "@/styles/mobile.css";
import "@/styles/placements.css";
import "@/styles/departments-module.css";
import "@/styles/research.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MLRIT — Marri Laxman Reddy Institute of Technology",
  description:
    "MLRIT shapes engineers, thinkers, and leaders ready to solve tomorrow's challenges — right here in Hyderabad. Industry-integrated curriculum, sports scholarships, top placements.",
  keywords: [
    "MLRIT",
    "Marri Laxman Reddy Institute of Technology",
    "engineering college Hyderabad",
    "B.Tech admissions",
    "MBA Hyderabad",
    "NAAC accredited",
    "NBA accredited",
  ],
  openGraph: {
    title: "MLRIT — Where Innovation Meets Excellence",
    description:
      "Engineering, M.Tech, MBA programs with industry-integrated curriculum and sports scholarships in Hyderabad.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <RevealOnScroll />
      </body>
    </html>
  );
}
