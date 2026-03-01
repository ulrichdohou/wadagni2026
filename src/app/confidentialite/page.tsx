import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles — HORIZON BÉNIN 2026.",
  alternates: { canonical: "/confidentialite" },
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <section className="py-24">
          <div className="container-narrow prose prose-lg max-w-3xl mx-auto text-ink">
            <h1 className="editorial-heading text-4xl md:text-5xl text-ink mb-12">
              Politique de Confidentialité
            </h1>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Collecte des données</h2>
            <p className="text-ink-secondary leading-relaxed">
              Le site HORIZON BÉNIN collecte uniquement les données que vous fournissez volontairement : numéro de téléphone WhatsApp et département de résidence lors de votre inscription à la plateforme citoyenne.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Finalité du traitement</h2>
            <p className="text-ink-secondary leading-relaxed">
              Vos données sont utilisées exclusivement pour vous informer des activités de campagne, des rencontres citoyennes dans votre département et des actualités du duo Wadagni-Talata. Elles ne sont jamais vendues ni cédées à des tiers.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Conservation des données</h2>
            <p className="text-ink-secondary leading-relaxed">
              Vos données personnelles sont conservées pendant la durée de la campagne électorale et supprimées dans un délai de 3 mois après le scrutin du 12 avril 2026, sauf obligation légale contraire.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Vos droits</h2>
            <p className="text-ink-secondary leading-relaxed">
              Conformément à la loi n°2009-09 du 22 mai 2009 portant protection des données à caractère personnel en République du Bénin, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@wadagnitalata2026.bj" className="text-benin-green font-semibold hover:underline">
                contact@wadagnitalata2026.bj
              </a>.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Sécurité</h2>
            <p className="text-ink-secondary leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, altération, divulgation ou destruction.
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
