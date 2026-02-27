import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DecoderContent } from "@/components/decoder/decoder-content";

export const metadata: Metadata = {
  title: "Vrai ou Faux — HORIZON BÉNIN",
  description:
    "Vrai ou faux ? Nous décryptons les rumeurs et les faits sur le bilan national avec le duo Wadagni-Talata.",
};

export default function DecodeurPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <DecoderContent />
      </main>
      <Footer />
    </>
  );
}
