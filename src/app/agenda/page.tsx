import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MeetingsSection } from "@/components/home/meetings-section";

export const metadata: Metadata = {
  title: "Agenda de Mobilisation — HORIZON BÉNIN",
  description:
    "Découvrez les prochaines rencontres citoyennes, conférences et actions de terrain partout au Bénin.",
};

export default function AgendaPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <div className="py-12">
          <MeetingsSection isPage={true} />
        </div>
        
        <div className="container-safe pb-24 text-center">
           <p className="text-ink-secondary italic max-w-2xl mx-auto">
             "Chaque rencontre est une occasion d'enrichir notre vision commune. Rejoignez-nous sur le terrain."
           </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
