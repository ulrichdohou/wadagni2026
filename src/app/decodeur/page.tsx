import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DecoderContent } from "@/components/decoder/decoder-content";

export const metadata: Metadata = {
  title: "Le Décodeur",
  description:
    "Vrai ou faux ? Vérifiez les rumeurs sur le bilan du gouvernement béninois avec des sources officielles.",
};

export default function DecodeurPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen">
        <DecoderContent />
      </main>
      <Footer />
    </>
  );
}
