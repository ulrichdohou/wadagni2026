import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EspaceCitoyenContent } from "@/components/espace-citoyen/espace-citoyen-content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Espace Citoyen",
  description:
    "Rejoignez la mobilisation citoyenne pour l'élection présidentielle Bénin 2026. Missions, défis hebdomadaires et classement départemental avec le duo Wadagni-Talata.",
  alternates: { canonical: "/espace-citoyen" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://horizonbenin2026.bj" },
    { "@type": "ListItem", position: 2, name: "Espace Citoyen", item: "https://horizonbenin2026.bj/espace-citoyen" },
  ],
};

export default function EspaceCitoyenPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <EspaceCitoyenContent />
      </main>
      <Footer />
    </>
  );
}
