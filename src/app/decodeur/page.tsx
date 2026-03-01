import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DecoderContent } from "@/components/decoder/decoder-content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Le Décodeur — Vrai ou Faux",
  description:
    "Vrai ou faux ? Décryptage des rumeurs et faits vérifiés sur le bilan du Bénin 2016-2026. Sources officielles : FMI, Banque Mondiale, INSAE.",
  alternates: { canonical: "/decodeur" },
};

const decodeurSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Le Décodeur — Vrai ou Faux sur le Bilan du Bénin",
    description:
      "Vérification des faits et décryptage des rumeurs sur le bilan du Bénin 2016-2026 avec sources officielles.",
    author: { "@type": "Organization", name: "HORIZON BÉNIN" },
    publisher: { "@type": "Organization", name: "HORIZON BÉNIN" },
    inLanguage: "fr-BJ",
    about: {
      "@type": "ClaimReview",
      claimReviewed: "Rumeurs sur le bilan du Bénin 2016-2026",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://horizonbenin2026.bj" },
      { "@type": "ListItem", position: 2, name: "Le Décodeur", item: "https://horizonbenin2026.bj/decodeur" },
    ],
  },
];

export default function DecodeurPage() {
  return (
    <>
      <JsonLd data={decodeurSchema} />
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <DecoderContent />
      </main>
      <Footer />
    </>
  );
}
