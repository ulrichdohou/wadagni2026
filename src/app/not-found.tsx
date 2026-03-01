import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20 flex items-center justify-center">
        <div className="container-narrow text-center py-32">
          <p className="font-mono text-7xl md:text-9xl font-bold text-benin-green/20 mb-8">404</p>
          <h1 className="editorial-heading text-3xl md:text-5xl text-ink mb-6">
            Page introuvable
          </h1>
          <p className="text-lg text-ink-secondary mb-12 max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-benin-green text-white font-semibold hover:bg-benin-green-dark transition-colors"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/assistant"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-benin-green text-benin-green font-semibold hover:bg-benin-green/5 transition-colors"
            >
              Poser une question à l'IA
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
