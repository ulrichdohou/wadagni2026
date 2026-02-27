"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import { DynamicIcon } from "@/components/shared/icon-map";
import { stats } from "@/data/stats";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Card Component                                                      */
/* ------------------------------------------------------------------ */
function StatCard({
  stat,
  index,
  isHero = false,
}: {
  stat: (typeof stats)[number];
  index: number;
  isHero?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  // Soft natural colors for card backgrounds based on index
  const bgColors = [
    "bg-benin-green/5 border-benin-green/10",
    "bg-benin-yellow/5 border-benin-yellow/10",
    "bg-benin-red/5 border-benin-red/10",
    "bg-surface-alt border-border",
    "bg-benin-green/5 border-benin-green/10",
    "bg-benin-yellow/5 border-benin-yellow/10",
  ];
  
  const bgColor = bgColors[index % bgColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-[24px] border p-6 transition-all duration-300 hover:shadow-lg",
        bgColor,
        isHero ? "col-span-1 md:col-span-2 lg:col-span-2 aspect-auto" : "col-span-1"
      )}
    >
      <div className="flex flex-col h-full justify-between gap-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm text-benin-green">
               <DynamicIcon name={stat.icon} className="h-5 w-5" />
             </div>
             <h3 className="font-sans font-semibold text-ink text-lg leading-tight">
               {stat.label}
             </h3>
          </div>
          {!isHero && (
            <button 
              onClick={() => setExpanded(!expanded)}
              className="md:hidden rounded-full p-1 hover:bg-black/5 transition-colors"
            >
              {expanded ? <ChevronDown className="h-5 w-5 text-ink-muted" /> : <Plus className="h-5 w-5 text-ink-muted" />}
            </button>
          )}
        </div>

        {/* Value Progression */}
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex items-baseline gap-3 flex-wrap">
             <span className="text-sm font-medium text-ink-muted line-through opacity-60">
               {stat.before}
             </span>
             <ArrowRight className="h-4 w-4 text-benin-green/60" />
             <span className="font-serif text-4xl md:text-5xl font-medium text-benin-green">
               {stat.after}
               {stat.unit && <span className="text-lg md:text-xl ml-1 text-benin-green/70">{stat.unit}</span>}
             </span>
          </div>
        </div>

        {/* Details */}
        <div className={cn(
           "text-ink-secondary text-sm leading-relaxed",
           isHero ? "block" : "hidden md:block",
           !isHero && expanded ? "block animate-fade-in-up" : ""
        )}>
          {stat.detail}
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Section                                                        */
/* ------------------------------------------------------------------ */
export function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-benin-yellow/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-benin-green/5 rounded-full blur-3xl -z-10" />

      <div className="container-narrow">
        <div className="mb-12 md:mb-16 text-center md:text-left max-w-2xl">
          <span className="section-eyebrow mb-2 block">Impact Réel</span>
          <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl text-ink mb-4">
            Des avancées concrètes pour <span className="text-benin-green">chaque citoyen</span>.
          </h2>
          <p className="text-lg text-ink-secondary">
            Au-delà des promesses, voici les résultats tangibles de notre action commune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Layout: 
              Row 1: Large (2 cols) | Small | Small
              Row 2: Small | Small | Large (2 cols) 
          */}
          
          <StatCard stat={stats[0]} index={0} isHero={true} />
          <StatCard stat={stats[1]} index={1} />
          <StatCard stat={stats[2]} index={2} />
          
          <StatCard stat={stats[3]} index={3} />
          <StatCard stat={stats[4]} index={4} />
          <StatCard stat={stats[5]} index={5} isHero={true} />
        </div>
      </div>
    </section>
  );
}
