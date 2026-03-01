import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlogSection } from "@/components/home/blog-section";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Actualités & Vision",
  description:
    "Suivez l'actualité de la campagne présidentielle Bénin 2026 et découvrez les articles de fond sur la vision économique et sociale du duo Wadagni-Talata.",
  alternates: { canonical: "/blog" },
};

const blogSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Actualités & Vision — HORIZON BÉNIN",
    description:
      "Articles d'actualité et de fond sur la campagne présidentielle Bénin 2026 et la vision du duo Wadagni-Talata.",
    publisher: { "@type": "Organization", name: "HORIZON BÉNIN" },
    inLanguage: "fr-BJ",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://horizonbenin2026.bj" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://horizonbenin2026.bj/blog" },
    ],
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <Header />
      <main className="bg-surface min-h-screen pt-20">
        <div className="py-12">
          <BlogSection />
        </div>

        <div className="container-safe pb-24">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
