import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { QGContent } from "@/components/qg/qg-content";

export const metadata: Metadata = {
  title: "QG Citoyen — Wadagni 2026",
  description:
    "Votre quartier général de campagne. Missions citoyennes, défis et engagement pour l'avenir.",
};

export default function QGPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen">
        <QGContent />
      </main>
      <Footer />
    </>
  );
}
