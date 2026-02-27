import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AssistantChat } from "@/components/assistant/assistant-chat";

export const metadata: Metadata = {
  title: "L'Assistant Intelligent — HORIZON BÉNIN",
  description:
    "Posez vos questions sur le bilan du duo Romuald Wadagni & Mariam Chabi Talata. Une IA répond avec des sources officielles.",
};

export default function AssistantPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-surface flex flex-col">
        <AssistantChat />
      </main>
      <Footer />
    </div>
  );
}
