import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogSection } from "@/components/home/blog-section";

export const metadata: Metadata = {
  title: "Actualités & Vision — HORIZON BÉNIN",
  description:
    "Suivez toute l'actualité de la campagne et découvrez les articles de fond sur notre vision pour le Bénin.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <div className="py-12">
          <BlogSection />
        </div>
        
        {/* We could add more specific blog listing components here if needed */}
        <div className="container-safe pb-24">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
             {/* Repeat or add more articles here as the data grows */}
           </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
