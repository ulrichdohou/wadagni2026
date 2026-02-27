"use client";

import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/shared/icon-map";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

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

      <div className="mx-auto max-w-6xl px-6 relative">
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

        {/* Final CTA link */}
        <div className="mt-20 text-center">
           <p className="font-serif italic text-2xl text-ink-muted">
             "Le développement n'est pas une destination, c'est un voyage."
           </p>
        </div>
      </div>
    </section>
  );
}
