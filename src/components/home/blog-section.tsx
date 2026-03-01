"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const posts = [
  {
    title: "Le Bénin, nouveau hub logistique de l'Afrique de l'Ouest",
    excerpt: "Comment les investissements massifs dans les infrastructures portuaires et routières transforment l'économie nationale.",
    date: "24 Fév 2026",
    readTime: "5 min",
    category: "Économie",
    image: "bg-benin-green/10",
  },
  {
    title: "Éducation : 100% de cantines scolaires d'ici la rentrée prochaine",
    excerpt: "L'ambition du gouvernement pour garantir au moins un repas équilibré par jour à chaque enfant scolarisé.",
    date: "20 Fév 2026",
    readTime: "4 min",
    category: "Social",
    image: "bg-benin-yellow/10",
  },
  {
    title: "GDIZ : 10 000 nouveaux emplois créés en 24 mois",
    excerpt: "Retour sur le succès fulgurant de la Zone Industrielle de Glo-Djigbé et son impact sur la jeunesse béninoise.",
    date: "15 Fév 2026",
    readTime: "6 min",
    category: "Emploi",
    image: "bg-benin-red/10",
  }
];

export function BlogSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-safe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="section-eyebrow mb-3 block">Actualités & Vision</span>
            <h2 className="editorial-heading text-4xl md:text-6xl text-ink">
              Décrypter le <span className="text-benin-green italic">mouvement.</span>
            </h2>
          </div>
          <Link href="/blog" className="group inline-flex items-center gap-2 text-benin-green font-bold hover:gap-3 transition-all">
            Voir tous les articles
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={cn(
                "aspect-[16/10] rounded-[32px] mb-6 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]",
                post.image
              )}>
                {/* Image placeholder with subtle pattern */}
                <div className="w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-ink-muted">
                  <span className="text-benin-green">{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-border" />
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="font-serif text-2xl text-ink leading-tight group-hover:text-benin-green transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-ink-secondary text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-ink group-hover:gap-3 transition-all">
                  Lire l'article
                  <ArrowRight className="h-4 w-4 text-benin-green" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
