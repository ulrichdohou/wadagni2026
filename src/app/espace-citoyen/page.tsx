import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { EspaceCitoyenContent } from "@/components/espace-citoyen/espace-citoyen-content";

export const metadata: Metadata = {
  title: "Espace Citoyen — Wadagni 2026",
  description:
    "Votre espace de mobilisation citoyenne. Missions, défis et engagement pour l'avenir.",
};

export default function EspaceCitoyenPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <EspaceCitoyenContent />
      </main>
      <Footer />
    </>
  );
}
