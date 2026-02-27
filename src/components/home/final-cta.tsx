"use client";

import { ArrowRight, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOTAL_SUPPORTERS } from "@/data/constants";
import { waUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32" id="subscribe">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-benin-green via-benin-green-dark to-benin-yellow-dark opacity-90" />
      
      {/* Decorative Organic Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-benin-yellow/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-white/20">
          <Heart className="size-4 text-benin-yellow" fill="currentColor" />
          <span>Déjà {TOTAL_SUPPORTERS.toLocaleString("fr-FR")} citoyens engagés</span>
        </div>

        <h2 className="editorial-heading text-4xl md:text-6xl mb-6 leading-tight">
          Ensemble, continuons <br/>
          <span className="text-benin-yellow italic">la transformation.</span>
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Chaque voix compte, chaque action a un impact. Rejoignez dès maintenant la dynamique pour bâtir le Bénin de demain.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="rounded-full bg-white text-benin-green hover:bg-white/90 font-bold px-8 h-14 text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all w-full sm:w-auto"
            asChild
          >
            <a href="#subscribe">
              Rejoindre le mouvement
              <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full border-2 border-white/30 hover:bg-white/10 text-white font-medium px-8 h-14 text-lg w-full sm:w-auto backdrop-blur-sm"
            asChild
          >
            <a
              href={waUrl(
                `Je rejoins la dynamique Bénin 2026 !`
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 size-5" />
              Partager sur WhatsApp
            </a>
          </Button>
        </div>
        
        <p className="mt-8 text-sm text-white/40">
          Rejoignez-nous. C'est gratuit, ouvert et citoyen.
        </p>
      </div>
    </section>
  );
}
