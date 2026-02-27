"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/shared/icon-map";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";

function TimelineDot({ status }: { status: "done" | "now" | "future" }) {
  if (status === "now") {
    return (
      <div className="absolute left-[0px] md:left-1/2 md:-translate-x-1/2 top-0 z-10 flex items-center justify-center">
        <div className="size-8 rounded-full bg-benin-yellow/20 flex items-center justify-center">
          <div className="size-3 rounded-full bg-benin-yellow shadow-lg animate-pulse" />
        </div>
      </div>
    );
  }

  if (status === "done") {
    return (
      <div className="absolute left-[4px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-10 size-6 rounded-full border-4 border-surface bg-benin-green shadow-sm" />
    );
  }

  return (
    <div className="absolute left-[4px] md:left-1/2 md:-translate-x-1/2 top-1.5 z-10 size-6 rounded-full border-2 border-border bg-surface-alt" />
  );
}

function TimelineCard({
  event,
  index,
}: {
  event: (typeof timeline)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;
  
  const statusColors = {
    done: "bg-benin-green/5 border-benin-green/20 text-benin-green",
    now: "bg-benin-yellow/5 border-benin-yellow/20 text-benin-yellow-dark",
    future: "bg-surface-alt border-border text-ink-muted",
  };

  return (
    <div className="relative mb-16 md:mb-24 last:mb-0">
      {/* Year Display for Mobile */}
      <div className="md:hidden flex items-center gap-3 mb-4 pl-12">
        <span className="font-serif text-2xl font-bold text-ink">{event.year}</span>
        <span className={cn("text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border", statusColors[event.status])}>
          {event.status === 'done' ? 'Réalisé' : event.status === 'now' ? 'En cours' : 'Vision'}
        </span>
      </div>

      <TimelineDot status={event.status} />

      <div className={cn(
        "flex flex-col md:flex-row items-start md:items-center",
        isEven ? "md:flex-row-reverse" : ""
      )}>
        {/* Year Display for Desktop */}
        <div className="hidden md:flex w-1/2 px-12 justify-center">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-center"
           >
             <span className="font-serif text-6xl lg:text-8xl font-bold text-ink/10 block leading-none select-none">
               {event.year}
             </span>
             <span className={cn("inline-block mt-2 text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1 rounded-full border", statusColors[event.status])}>
               {event.status === 'done' ? 'Réalisé' : event.status === 'now' ? 'En cours' : 'Vision'}
             </span>
           </motion.div>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 pl-12 md:px-12"
        >
          <div className="bg-white rounded-[32px] p-8 shadow-sm border border-border/50 hover:shadow-xl hover:border-benin-green/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-alt text-benin-green shrink-0">
                <DynamicIcon name={event.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-ink leading-tight">
                {event.title}
              </h3>
            </div>

            {event.keyFigure && (
              <div className="mb-4">
                <span className="font-mono text-3xl font-bold text-benin-green tracking-tight">
                  {event.keyFigure}
                </span>
                <span className="text-xs uppercase tracking-widest text-ink-muted ml-2 block mt-1">
                  Impact Mesuré
                </span>
              </div>
            )}

            <p className="text-ink-secondary leading-relaxed">
              {event.description}
            </p>
            
            <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-ink-muted uppercase tracking-widest">
              <span className="h-1 w-8 bg-border rounded-full" />
              <span>{event.category}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function BilanTimeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--benin-green) 1px, transparent 0)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="container-safe relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="section-eyebrow mb-3 block">Chronologie</span>
          <h1 className="editorial-heading text-4xl md:text-6xl text-ink mb-6">
            Une décennie de <br/>
            <span className="text-benin-green">transformation</span>.
          </h1>
          <p className="text-xl text-ink-secondary leading-relaxed">
            De 2016 à aujourd'hui, revivez les étapes clés qui ont redéfini l'avenir du Bénin. 
            Une marche résolue vers le progrès.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical line with gradient */}
          <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-benin-green via-benin-yellow to-surface-alt" />

          <div className="space-y-4">
            {timeline.map((event, i) => (
              <TimelineCard key={`${event.year}-${i}`} event={event} index={i} />
            ))}
          </div>
        </div>

        {/* Contribution CTA Section */}
        <div className="mt-32 md:mt-48 relative">
           <div className="absolute inset-0 bg-benin-green/5 rounded-[48px] -z-10 blur-xl" />
           <div className="bg-white rounded-[40px] border border-border/60 p-8 md:p-16 text-center relative overflow-hidden shadow-sm">
             {/* Decorative patterns */}
             <div className="absolute top-0 left-0 w-32 h-32 bg-benin-yellow/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-benin-green/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
             
             <div className="relative z-10 max-w-2xl mx-auto">
               <div className="inline-flex items-center gap-2 bg-benin-green/10 text-benin-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                 <Sparkles className="h-4 w-4" />
                 L'aventure continue
               </div>
               
               <h2 className="editorial-heading text-4xl md:text-5xl text-ink mb-8">
                 Et demain ? <br/>
                 <span className="text-benin-green">Le prochain chapitre s'écrit avec vous.</span>
               </h2>
               
               <p className="text-lg text-ink-secondary mb-12">
                 Le bilan est solide, mais l'avenir demande votre énergie. Rejoignez le mouvement Wadagni 2026 pour contribuer activement à la transformation de votre département.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Button size="lg" className="rounded-full h-14 px-10 text-lg shadow-xl hover:shadow-2xl transition-all" asChild>
                    <Link href="/qg">
                      Devenir contributeur
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                 </Button>
                 <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg border-2" asChild>
                    <Link href="/assistant">
                      <Users className="mr-2 h-5 w-5" />
                      Rejoindre un cercle citoyen
                    </Link>
                 </Button>
               </div>
               
               <div className="mt-12 pt-12 border-t border-border/40 flex flex-wrap justify-center gap-8 text-sm text-ink-muted">
                 <div className="flex items-center gap-2">
                   <Heart className="h-4 w-4 text-benin-red" fill="currentColor" />
                   <span>Engagement volontaire</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="h-2 w-2 rounded-full bg-benin-green" />
                   <span>Action locale</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <div className="h-2 w-2 rounded-full bg-benin-yellow" />
                   <span>Vision 2030</span>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Quote placeholder */}
        <div className="mt-24 text-center">
           <p className="font-serif italic text-2xl text-ink-muted/60">
             "Le développement n'est pas une destination, c'est un voyage."
           </p>
        </div>
      </div>
    </section>
  );
}
