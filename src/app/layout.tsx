import type { Metadata } from "next";
import { outfit, newsreader, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";
import { ChatWidget } from "@/components/assistant/chat-widget";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: {
    default: "HORIZON BÉNIN — WadagniTalata2026",
    template: "%s | HORIZON BÉNIN",
  },
  description:
    "HORIZON BÉNIN : Plateforme citoyenne indépendante de soutien au duo Romuald Wadagni & Mariam Chabi Talata. Décryptage du bilan et partage de la vision pour 2026-2031.",
  metadataBase: new URL("https://horizonbenin2026.bj"),
  keywords: ["Bénin", "HORIZON BÉNIN", "soutien Wadagni", "Mariam Chabi Talata", "mouvement citoyen Bénin", "Programme 2026"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    siteName: "HORIZON BÉNIN",
    title: "HORIZON BÉNIN — Mouvement de Soutien Citoyen",
    description:
      "Initiative citoyenne pour porter la trajectoire de progrès du duo Wadagni-Talata. Ensemble vers de nouveaux horizons pour le Bénin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HORIZON BÉNIN — Plateforme de Soutien",
    description:
      "10 ans de preuves, une vision partagée par les citoyens pour l'avenir du Bénin.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HORIZON BÉNIN",
  url: "https://horizonbenin2026.bj",
  description:
    "Mouvement citoyen indépendant de soutien au duo Romuald Wadagni & Mariam Chabi Talata pour l'élection présidentielle du Bénin 2026.",
  email: "contact@horizonbenin2026.bj",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cotonou",
    addressCountry: "BJ",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HORIZON BÉNIN",
  url: "https://horizonbenin2026.bj",
  description:
    "Plateforme citoyenne de décryptage et de soutien pour la dynamique Wadagni-Talata 2026.",
  inLanguage: "fr-BJ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-BJ"
      className={`${outfit.variable} ${newsreader.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="font-sans bg-surface text-ink antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:bg-benin-green focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <JsonLd data={[organizationSchema, webSiteSchema]} />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
