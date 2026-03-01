import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AssistantChat } from "@/components/assistant/assistant-chat";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Le Guide Horizon — HORIZON BÉNIN",
  description:
    "Explorez la vision citoyenne et le bilan du duo Wadagni-Talata avec le Guide Horizon. Une ressource informative indépendante basée sur les faits.",
  alternates: { canonical: "/assistant" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://horizonbenin2026.bj" },
    { "@type": "ListItem", position: 2, name: "Le Guide Horizon", item: "https://horizonbenin2026.bj/assistant" },
  ],
};

export default function AssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={breadcrumbSchema} />
      <Header />
      <main className="flex-1 bg-surface flex flex-col">
        <AssistantChat />
      </main>
      <Footer />
    </div>
  );
}
