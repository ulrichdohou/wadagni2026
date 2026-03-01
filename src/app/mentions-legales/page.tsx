import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description:
    "Mentions légales du site HORIZON BÉNIN — Campagne présidentielle Wadagni & Talata 2026.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <section className="py-24">
          <div className="container-narrow prose prose-lg max-w-3xl mx-auto text-ink">
            <h1 className="editorial-heading text-4xl md:text-5xl text-ink mb-12">
              Mentions Légales
            </h1>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Éditeur du site</h2>
            <p className="text-ink-secondary leading-relaxed">
              Le site <strong>horizonbenin2026.bj</strong> est édité par le comité de campagne du duo Romuald Wadagni &amp; Mariam Chabi Talata dans le cadre de l'élection présidentielle du 12 avril 2026 en République du Bénin.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Directeur de publication</h2>
            <p className="text-ink-secondary leading-relaxed">
              Le directeur de publication est le responsable légal du comité de campagne.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Hébergement</h2>
            <p className="text-ink-secondary leading-relaxed">
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Propriété intellectuelle</h2>
            <p className="text-ink-secondary leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, graphismes, logos, icônes) sont la propriété du comité de campagne, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Contact</h2>
            <p className="text-ink-secondary leading-relaxed">
              Pour toute question relative au site, vous pouvez nous contacter à l'adresse :{" "}
              <a href="mailto:contact@wadagnitalata2026.bj" className="text-benin-green font-semibold hover:underline">
                contact@wadagnitalata2026.bj
              </a>
            </p>

            <div className="mt-16 pt-8 border-t border-border">
              <Link href="/" className="text-benin-green font-semibold hover:underline">
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
