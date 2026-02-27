"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Search, Fingerprint, MapPin, ArrowUpRight } from "lucide-react";
import { VOTER_REGISTRATION_INFO } from "@/data/campaign";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const iconMap = [Fingerprint, Search, MapPin];

export function VoterInfoSection() {
  return (
    <section className="py-24 md:py-32 bg-benin-green relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none select-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="container-safe relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Side */}
          <div className="lg:w-1/2 text-white">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-4 block">
              Civisme & Engagement
            </span>
            <h2 className="editorial-heading text-4xl md:text-6xl mb-8 leading-tight">
              Votre vote est <br/>
              <span className="text-benin-yellow italic">votre pouvoir.</span>
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-12 max-w-xl">
              {VOTER_REGISTRATION_INFO.description} Ne laissez personne décider à votre place le 12 avril prochain.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-benin-yellow hover:bg-benin-yellow-dark text-benin-green-dark font-bold h-14 px-8 rounded-full shadow-xl">
                Guide du Voter 2026
              </Button>
              <Button variant="outline-inverse" className="h-14 px-8 rounded-full border-2">
                Besoin d'aide ?
              </Button>
            </div>
          </div>

          {/* Steps Side */}
          <div className="lg:w-1/2 w-full">
            <div className="grid gap-4">
              {VOTER_REGISTRATION_INFO.steps.map((step, i) => {
                const Icon = iconMap[i] || CheckCircle2;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[32px] flex gap-6 hover:bg-white/10 transition-all group"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center text-benin-yellow shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed mb-4">{step.description}</p>
                      
                      {step.link && (
                        <a 
                          href={step.link} 
                          target="_blank" 
                          className="inline-flex items-center gap-1.5 text-benin-yellow text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all"
                        >
                          {step.linkText}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
