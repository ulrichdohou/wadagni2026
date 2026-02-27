"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WhatsAppShareButton } from "@/components/shared/whatsapp-share-button";
import { decoderItems } from "@/data/decoder";
import { Bot, HelpCircle, CheckCircle2, ShieldCheck, ArrowRight, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function DecoderContent() {
  return (
    <section className="py-24 relative overflow-hidden min-h-screen">
      {/* Editorial background elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.02] pointer-events-none select-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-benin-red) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container-narrow relative">
        
        {/* Magazine-style Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20 md:mb-32">
          <div>
            <div className="inline-flex items-center gap-2 bg-benin-red/10 text-benin-red px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <ShieldCheck className="h-4 w-4" />
              Observatoire de la Vérité
            </div>
            <h1 className="editorial-heading text-5xl md:text-7xl text-ink mb-8">
              Le <span className="text-benin-red">Décodeur</span>.
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed max-w-xl">
              À l'heure des réseaux sociaux, la vérité est un bien précieux. Nous analysons les rumeurs pour vous apporter des réponses factuelles et documentées.
            </p>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="bg-surface-alt/50 border border-border p-6 rounded-[32px] max-w-xs rotate-3 shadow-sm">
               <p className="font-serif italic text-lg text-ink-muted">
                 "La transparence est le fondement de la confiance citoyenne."
               </p>
            </div>
          </div>
        </div>

        {/* Improved Decoder Cards Grid */}
        <div className="grid grid-cols-1 gap-12">
          {decoderItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white rounded-[40px] border border-border/60 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row h-full">
                
                {/* Rumor Side - Left */}
                <div className="lg:w-5/12 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-1.5 w-12 bg-benin-red rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-red">
                      Question / Rumeur
                    </span>
                  </div>
                  
                  <div className="relative">
                    <HelpCircle className="absolute -left-10 -top-4 h-20 w-20 text-benin-red/5 -z-10" />
                    <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight italic">
                      &ldquo;{item.rumor}&rdquo;
                    </h3>
                  </div>
                  
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-ink-muted uppercase tracking-widest">
                    Catégorie : <span className="text-ink">{item.category}</span>
                  </div>
                </div>

                {/* Vertical Divider for large screens */}
                <div className="hidden lg:flex items-center">
                   <div className="h-3/4 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                </div>

                {/* Reality Side - Right */}
                <div className="lg:w-7/12 p-8 md:p-12 bg-benin-green/[0.02] flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <CheckCircle2 className="h-24 w-24 text-benin-green" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-1.5 w-12 bg-benin-green rounded-full" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-green">
                        La Réalité
                      </span>
                    </div>

                    <p className="text-ink text-lg md:text-xl leading-relaxed mb-8">
                      {item.reality}
                    </p>
                    
                    {/* Meta info & Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-border/40">
                      <div className="flex items-center gap-3">
                         <span className="text-[9px] font-bold text-ink-muted uppercase tracking-widest">Preuve :</span>
                         <span className="text-xs font-bold bg-white border border-border px-4 py-2 rounded-full shadow-sm text-benin-green inline-flex items-center gap-2">
                           <ShieldCheck className="h-3.5 w-3.5" />
                           {item.source}
                         </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <WhatsAppShareButton
                          message={item.whatsappText}
                          label="Partager la vérité"
                          size="sm"
                          className="rounded-full h-11 px-6 bg-white hover:bg-surface-alt text-ink border border-border shadow-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced CTA */}
        <div className="mt-32 relative group">
           <div className="absolute inset-0 bg-gradient-to-br from-benin-green to-benin-yellow opacity-5 rounded-[48px] blur-2xl -z-10 group-hover:opacity-10 transition-opacity" />
           <div className="bg-white rounded-[40px] border border-border/80 p-10 md:p-20 text-center shadow-sm">
             <div className="max-w-2xl mx-auto">
               <div className="h-16 w-16 rounded-3xl bg-surface-alt flex items-center justify-center text-benin-green mx-auto mb-8 shadow-inner">
                  <Bot className="h-8 w-8" />
               </div>
               <h2 className="editorial-heading text-4xl text-ink mb-6">Une question spécifique ?</h2>
               <p className="text-lg text-ink-secondary mb-12">
                 Row & Talata ont été entraînés sur l'intégralité des rapports officiels pour vous répondre avec précision sur n'importe quel sujet du bilan.
               </p>
               <Button size="lg" className="rounded-full px-10 h-16 text-lg shadow-xl hover:shadow-2xl transition-all group/btn" asChild>
                 <Link href="/assistant">
                   Discuter avec Row & Talata
                   <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                 </Link>
               </Button>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
