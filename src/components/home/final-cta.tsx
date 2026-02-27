"use client";

import { ArrowRight, MessageCircle, Heart, Mail, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TOTAL_SUPPORTERS } from "@/data/constants";
import { waUrl } from "@/lib/whatsapp";
import { useState } from "react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <section className="relative overflow-hidden py-32 md:py-48" id="subscribe">
      {/* Deep Natural Background */}
      <div className="absolute inset-0 bg-[#0C1A13]" />
      
      {/* Decorative Organic Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-benin-green/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-benin-yellow/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container-safe relative z-10 max-w-4xl mx-auto text-center text-white">
        
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-10 border border-white/10">
          <Heart className="size-4 text-benin-yellow animate-pulse" fill="currentColor" />
          <span>Déjà {TOTAL_SUPPORTERS.toLocaleString("fr-FR")} citoyens engagés</span>
        </div>

        <h2 className="editorial-heading text-5xl md:text-7xl mb-8 leading-tight">
          Écrivons la suite <br/>
          <span className="text-benin-yellow italic">ensemble.</span>
        </h2>

        <p className="text-lg md:text-xl text-white/60 mb-16 leading-relaxed max-w-2xl mx-auto">
          Rejoignez la dynamique citoyenne pour être informé en priorité et participer aux grands rendez-vous de la nation.
        </p>

        {/* Dual Input Collection Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-[40px] shadow-2xl max-w-2xl mx-auto mb-12 overflow-hidden">
          <form className="flex flex-col md:flex-row items-stretch" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 relative flex items-center">
              <Mail className="absolute left-6 size-4 text-benin-yellow/60" />
              <input 
                type="email" 
                placeholder="Votre email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 bg-transparent pl-14 pr-4 outline-none focus:bg-white/5 transition-all text-sm"
              />
            </div>
            
            <div className="hidden md:flex items-center px-2">
              <div className="w-px h-8 bg-white/20" />
            </div>
            
            <div className="flex-1 relative flex items-center">
              <Phone className="absolute left-6 size-4 text-benin-yellow/60" />
              <input 
                type="tel" 
                placeholder="Téléphone (WhatsApp)" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-16 bg-transparent pl-14 pr-4 outline-none focus:bg-white/5 transition-all text-sm"
              />
            </div>

            <Button 
              className="h-14 md:h-auto px-10 m-1 rounded-full bg-benin-yellow hover:bg-benin-yellow-dark text-[#0C1A13] font-bold shadow-lg"
            >
              S'engager
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </form>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40">
            <ShieldCheck className="size-3.5" />
            Vos données sont protégées et ne seront jamais partagées.
          </div>
          
          <div className="h-px w-12 bg-white/10" />
          
          <a
            href={waUrl("Je souhaite rejoindre la dynamique Bénin 2026 !")}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-white/60 hover:text-benin-yellow transition-colors"
          >
            <MessageCircle className="size-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Préférer WhatsApp pour s'inscrire</span>
          </a>
        </div>
      </div>
    </section>
  );
}
