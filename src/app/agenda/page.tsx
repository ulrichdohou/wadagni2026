import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MeetingsSection } from "@/components/home/meetings-section";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Agenda de Mobilisation",
  description:
    "Calendrier des rencontres citoyennes, conférences et actions de terrain pour l'élection présidentielle Bénin 2026. Retrouvez le duo Wadagni-Talata partout au Bénin.",
  alternates: { canonical: "/agenda" },
};

const agendaSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://horizonbenin2026.bj" },
      { "@type": "ListItem", position: 2, name: "Agenda", item: "https://horizonbenin2026.bj/agenda" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Rencontres citoyennes — Campagne Wadagni-Talata 2026",
    description: "Rencontres citoyennes et conférences organisées dans le cadre de la campagne présidentielle 2026 au Bénin.",
    organizer: { "@type": "Organization", name: "HORIZON BÉNIN" },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: { "@type": "Country", name: "Bénin" },
  },
];

export default function AgendaPage() {
  return (
    <>
      <JsonLd data={agendaSchema} />
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <div className="py-12">
          <div className="container-safe mb-8">
            <h1 className="editorial-heading text-4xl md:text-6xl text-ink">
              Agenda de <span className="text-benin-green italic">mobilisation</span>
            </h1>
          </div>
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
