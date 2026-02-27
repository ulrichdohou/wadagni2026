"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WhatsAppShareButton } from "@/components/shared/whatsapp-share-button";
import { decoderItems } from "@/data/decoder";
import { Bot, HelpCircle, CheckCircle2, ShieldCheck, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export function DecoderContent() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-benin-red/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-benin-green/5 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-[--content-max] px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-benin-red/10 text-benin-red px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <ShieldCheck className="h-4 w-4" />
            Vérification des faits
          </div>
          <h1 className="editorial-heading text-4xl md:text-6xl text-ink mb-6">
            Le <span className="text-benin-red">Décodeur</span> Citoyen.
          </h1>
          <p className="text-xl text-ink-secondary leading-relaxed">
            Dans un monde d'informations rapides, nous prenons le temps de rétablir la vérité. 
            Sources officielles à l'appui.
          </p>
        </div>

        {/* Decoder List */}
        <div className="space-y-6">
          {decoderItems.map((item, i) => (
            <div 
              key={i}
              className="group bg-white rounded-[32px] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  
                  {/* Rumor Side */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-red bg-benin-red/5 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <HelpCircle className="h-6 w-6 text-benin-red shrink-0 mt-1" />
                      <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug italic">
                        &ldquo;{item.rumor}&rdquo;
                      </h3>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:flex flex-col items-center justify-center">
                    <div className="h-12 w-px bg-border" />
                    <span className="my-2 text-[10px] font-bold text-ink-muted">VS</span>
                    <div className="h-12 w-px bg-border" />
                  </div>

                  {/* Reality Side */}
                  <div className="flex-1 bg-benin-green/5 p-6 rounded-2xl border border-benin-green/10">
                    <div className="flex items-start gap-4 mb-4">
                       <CheckCircle2 className="h-6 w-6 text-benin-green shrink-0 mt-1" />
                       <div>
                         <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-benin-green mb-2">La Réalité</p>
                         <p className="text-ink text-[15px] leading-relaxed">
                           {item.reality}
                         </p>
                       </div>
                    </div>
                    
                    {/* Source Tag */}
                    <div className="mt-4 pt-4 border-t border-benin-green/10 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2">
                         <span className="text-[9px] font-bold text-ink-muted uppercase tracking-widest">Source :</span>
                         <span className="text-[11px] font-medium bg-white border border-border px-3 py-1 rounded-full shadow-sm text-ink">
                           {item.source}
                         </span>
                      </div>
                      <WhatsAppShareButton
                        message={item.whatsappText}
                        label="Partager"
                        size="sm"
                        className="bg-white hover:bg-white text-ink-secondary border border-border hover:border-benin-green h-9"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-surface-alt p-12 rounded-[40px] border border-border/50">
          <div className="max-w-xl mx-auto">
            <h2 className="editorial-heading text-3xl text-ink mb-4">Une rumeur non traitée ?</h2>
            <p className="text-ink-secondary mb-8">
              Notre assistant est là pour vérifier n'importe quelle information sur le bilan national avec vous.
            </p>
            <Button size="lg" className="rounded-full px-8 h-14 text-lg" asChild>
              <Link href="/assistant">
                <Bot className="size-5 mr-2" />
                Interroger l'Assistant
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
