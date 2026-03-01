import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Cookies",
  description:
    "Politique d'utilisation des cookies sur le site HORIZON BÉNIN 2026.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <section className="py-24">
          <div className="container-narrow prose prose-lg max-w-3xl mx-auto text-ink">
            <h1 className="editorial-heading text-4xl md:text-5xl text-ink mb-12">
              Politique de Cookies
            </h1>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Qu'est-ce qu'un cookie ?</h2>
            <p className="text-ink-secondary leading-relaxed">
              Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur un site web. Il permet au site de mémoriser vos préférences et d'améliorer votre expérience de navigation.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Cookies utilisés</h2>
            <p className="text-ink-secondary leading-relaxed">
              Le site HORIZON BÉNIN utilise uniquement des cookies strictement nécessaires au fonctionnement du site et des cookies d'analyse anonymisés pour comprendre la fréquentation du site. Aucun cookie publicitaire ou de ciblage n'est utilisé.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Cookies strictement nécessaires</h2>
            <p className="text-ink-secondary leading-relaxed">
              Ces cookies sont indispensables au fonctionnement du site. Ils permettent la navigation et l'accès aux fonctionnalités de base. Ils ne peuvent pas être désactivés.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Cookies d'analyse</h2>
            <p className="text-ink-secondary leading-relaxed">
              Nous utilisons des outils d'analyse pour mesurer l'audience du site de manière anonyme. Ces données nous aident à améliorer le site et son contenu. Vous pouvez refuser ces cookies sans impact sur votre navigation.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">Gestion des cookies</h2>
            <p className="text-ink-secondary leading-relaxed">
              Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies. La suppression des cookies peut affecter certaines fonctionnalités du site.
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
