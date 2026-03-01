import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { DuoSection } from "@/components/home/duo-section";
import { BeforeAfter } from "@/components/home/before-after";
import { ChatTeaser } from "@/components/home/chat-teaser";
import { VoterInfoSection } from "@/components/home/voter-info-section";
import { DepartmentExplorer } from "@/components/home/department-explorer";
import { MeetingsSection } from "@/components/home/meetings-section";
import { BlogSection } from "@/components/home/blog-section";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCTA } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "HORIZON BÉNIN — Élection Présidentielle 2026 | Wadagni & Talata",
  description:
    "10 ans de résultats concrets pour le Bénin : 180+ MW d'électricité, 80% d'accès à l'eau, 1M+ repas scolaires/jour. Découvrez la vision du duo Wadagni-Talata pour l'élection présidentielle Bénin 2026.",
  alternates: { canonical: "/" },
};

const personSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Romuald Wadagni",
    jobTitle: "Candidat à la Présidence de la République du Bénin",
    description:
      "Économiste, ancien Ministre de l'Économie et des Finances du Bénin (2016-2026), architecte des réformes économiques du Bénin.",
    nationality: { "@type": "Country", name: "Bénin" },
    sameAs: ["https://www.wikidata.org/wiki/Q24951128"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mariam Chabi Talata",
    jobTitle: "Candidate à la Vice-Présidence de la République du Bénin",
    description:
      "Vice-Présidente de la République du Bénin, engagée pour l'éducation, la santé et l'autonomisation des femmes.",
    nationality: { "@type": "Country", name: "Bénin" },
    sameAs: ["https://www.wikidata.org/wiki/Q105423567"],
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchemas} />
      <Header />
      <main id="main-content">
        <Hero />
        <DuoSection />
        <BeforeAfter />
        <ChatTeaser />
        <VoterInfoSection />
        <DepartmentExplorer />
        <MeetingsSection />
        <BlogSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
