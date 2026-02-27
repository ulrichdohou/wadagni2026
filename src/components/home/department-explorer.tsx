"use client";

import { useState } from "react";
import { Search, MapPin, CheckCircle2, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WhatsAppShareButton } from "@/components/shared/whatsapp-share-button";
import { departments } from "@/data/departments";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function DepartmentExplorer() {
  const [search, setSearch] = useState("");
  
  const filtered = departments.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase()) || 
    d.capital.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-surface-alt/50 py-20">
      <div className="mx-auto max-w-[--content-max] px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
             <span className="section-eyebrow mb-2 block">Proximité</span>
             <h2 className="editorial-heading text-3xl md:text-4xl text-ink mb-4">
               Partout au Bénin, <br/>
               <span className="text-benin-green">des vies changent</span>.
             </h2>
             <p className="text-ink-secondary text-lg">
               Découvrez les réalisations concrètes dans votre département.
             </p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <Input 
              placeholder="Rechercher votre département..." 
              className="pl-10 bg-white border-border rounded-full h-12 shadow-sm focus-visible:ring-benin-green"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((dept, i) => (
              <motion.div
                key={dept.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white rounded-[24px] border border-border/60 p-6 hover:shadow-xl hover:border-benin-green/20 transition-all duration-300 group flex flex-col"
              >
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-benin-green transition-colors">
                      {dept.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-ink-muted mt-1 text-sm">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{dept.capital}</span>
                    </div>
                  </div>
                  <div className="bg-surface-alt px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-benin-green" />
                    <span className="text-xs font-bold text-ink tabular-nums">
                      {dept.supporters.toLocaleString("fr-FR")}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-4 mb-8 flex-1">
                  {dept.achievements.map((a, j) => (
                    <div key={j} className="flex gap-3 items-start">
                      {a.status === 'done' ? (
                        <CheckCircle2 className="h-5 w-5 text-benin-green shrink-0 mt-0.5" />
                      ) : (
                        <Clock className="h-5 w-5 text-benin-yellow shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="text-sm font-semibold text-ink leading-tight">{a.title}</p>
                        <p className="text-xs text-ink-secondary mt-0.5 leading-relaxed">{a.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer Actions */}
                <div className="mt-auto pt-6 border-t border-border/50 flex flex-col gap-3">
                  <Button className="w-full rounded-full bg-surface-alt hover:bg-benin-green hover:text-white text-ink-secondary font-medium transition-colors justify-between group/btn">
                    <span>Rejoindre la communauté</span>
                    <span className="bg-white group-hover/btn:bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-colors">→</span>
                  </Button>
                  {/* WhatsApp Share hidden by default to declutter, or could be icon only */}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink-muted">
            Aucun département trouvé pour "{search}".
          </div>
        )}

      </div>
    </section>
  );
}
