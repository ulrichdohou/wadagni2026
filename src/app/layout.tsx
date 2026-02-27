import type { Metadata } from "next";
import { outfit, newsreader, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";
import { ChatWidget } from "@/components/assistant/chat-widget";

export const metadata: Metadata = {
  title: {
    default: "HORIZON BÉNIN — WadagniTalata2026",
    template: "%s | HORIZON BÉNIN",
  },
  description:
    "HORIZON BÉNIN : La vision du duo Romuald Wadagni & Mariam Chabi Talata pour le Bénin. 10 ans de résultats concrets, une ambition pour 2026-2031.",
  metadataBase: new URL("https://horizonbenin2026.bj"),
  keywords: ["Bénin", "HORIZON BÉNIN", "WadagniTalata2026", "Romuald Wadagni", "Mariam Chabi Talata", "Programme 2026", "Développement Bénin"],
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    siteName: "HORIZON BÉNIN",
    title: "HORIZON BÉNIN — L'Avenir en Confiance",
    description:
      "Découvrez la trajectoire de progrès portée par le duo Wadagni-Talata. Ensemble vers de nouveaux horizons pour le Bénin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HORIZON BÉNIN — WadagniTalata2026",
    description:
      "10 ans de preuves, une vision claire pour l'avenir du Bénin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${newsreader.variable} ${jetbrainsMono.variable} overflow-x-hidden`}
    >
      <body className="font-sans bg-surface text-ink antialiased overflow-x-hidden">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
