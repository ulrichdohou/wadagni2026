import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BilanTimeline } from "@/components/bilan/timeline";

export const metadata: Metadata = {
  title: "Bilan 2016–2026",
  description:
    "10 ans de transformations concrètes : énergie, eau, routes, industrie, social. Le bilan complet du Bénin.",
};

export default function BilanPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <BilanTimeline />
      </main>
      <Footer />
    </>
  );
}
