import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BilanTimeline } from "@/components/bilan/timeline";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Le Bilan 2016-2026",
  description:
    "10 ans de transformations concrètes au Bénin : 180+ MW d'énergie, 80% d'eau potable, 1M+ repas scolaires, 2 600+ km de routes. Le bilan complet de l'élection présidentielle Bénin 2026.",
  alternates: { canonical: "/bilan" },
};

const bilanSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Le Bilan 2016-2026 du Bénin",
    description:
      "Chronologie complète des réalisations du Bénin entre 2016 et 2026 : énergie, eau, routes, industrie, social, tourisme.",
    author: { "@type": "Organization", name: "HORIZON BÉNIN" },
    publisher: { "@type": "Organization", name: "HORIZON BÉNIN" },
    inLanguage: "fr-BJ",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://horizonbenin2026.bj" },
      { "@type": "ListItem", position: 2, name: "Le Bilan", item: "https://horizonbenin2026.bj/bilan" },
    ],
  },
];

export default function BilanPage() {
  return (
    <>
      <JsonLd data={bilanSchema} />
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <BilanTimeline />
      </main>
      <Footer />
    </>
  );
}
