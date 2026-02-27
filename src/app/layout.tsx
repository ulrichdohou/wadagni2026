import type { Metadata } from "next";
import { outfit, newsreader, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bénin 2026 — 10 ans de preuves",
    template: "%s | Bénin 2026",
  },
  description:
    "Plateforme officielle de la campagne présidentielle 2026 au Bénin. 10 ans de résultats concrets : routes, électricité, eau, éducation, industrie. Rejoignez le mouvement.",
  metadataBase: new URL("https://benin2026.bj"),
  openGraph: {
    type: "website",
    locale: "fr_BJ",
    siteName: "Bénin 2026",
    title: "Bénin 2026 — 10 ans de preuves",
    description:
      "10 ans de résultats concrets. Sécurisons l'avenir du Bénin ensemble.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bénin 2026 — 10 ans de preuves",
    description:
      "10 ans de résultats concrets. Sécurisons l'avenir du Bénin ensemble.",
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
      </body>
    </html>
  );
}
