"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CANDIDATE_DUO } from "@/data/campaign";
import { cn } from "@/lib/utils";

export function DuoSection() {
  return (
    <section className="py-24 bg-surface-alt/30 relative overflow-hidden">
      <div className="container-safe relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-benin-yellow text-[#0C1A13] font-bold text-xs uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg mb-8 border-2 border-white">
            Le Duo HORIZON BÉNIN
          </div>
          <span className="section-eyebrow mb-3 block">Engagement & Rigueur</span>
          <h2 className="editorial-heading text-4xl md:text-6xl text-ink mb-6">
            Ouvrir de <span className="text-benin-green italic">nouveaux horizons.</span>
          </h2>
          <p className="text-lg text-ink-secondary leading-relaxed">
            {CANDIDATE_DUO.vision}
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-5xl mx-auto pt-8">
          {/* President */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-12 border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-benin-green/5 rounded-full" />
            <div className="h-20 w-20 rounded-3xl bg-benin-green flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-benin-green/20">
              <UserCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-2">
              {CANDIDATE_DUO.president.name}
            </h3>
            <p className="text-benin-green font-bold uppercase tracking-widest text-xs mb-8">
              Candidat à la Présidence
            </p>
            <p className="text-ink-secondary text-lg leading-relaxed mb-8 flex-1">
              {CANDIDATE_DUO.president.bio}
            </p>
            <div className="h-px w-full bg-border/40 mb-8" />
            <Button variant="ghost" className="justify-between px-0 hover:bg-transparent group/btn">
              <span className="font-bold text-ink text-sm">Vision & Parcours</span>
              <ArrowRight className="h-5 w-5 text-benin-green group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Vice President */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-12 border border-border/60 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group relative overflow-hidden"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-benin-yellow/5 rounded-full" />
            <div className="h-20 w-20 rounded-3xl bg-benin-yellow flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-benin-yellow/20">
              <UserCircle2 className="h-10 w-10" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-2">
              {CANDIDATE_DUO.vicePresident.name}
            </h3>
            <p className="text-benin-yellow-dark font-bold uppercase tracking-widest text-xs mb-8">
              Candidate à la Vice-Présidence
            </p>
            <p className="text-ink-secondary text-lg leading-relaxed mb-8 flex-1">
              {CANDIDATE_DUO.vicePresident.bio}
            </p>
            <div className="h-px w-full bg-border/40 mb-8" />
            <Button variant="ghost" className="justify-between px-0 hover:bg-transparent group/btn">
              <span className="font-bold text-ink text-sm">Engagement Citoyen</span>
              <ArrowRight className="h-5 w-5 text-benin-yellow group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Program CTA */}
        <div className="mt-20 flex flex-col items-center">
          <Button size="lg" className="rounded-full h-16 px-10 text-lg shadow-xl hover:shadow-2xl transition-all" asChild>
            <a href={CANDIDATE_DUO.programUrl} target="_blank">
              <FileText className="mr-2 h-5 w-5" />
              Consulter le Programme de Gouvernance
            </a>
          </Button>
          <p className="mt-6 text-sm text-ink-muted font-medium">
            Version 2026-2031 &bull; Document PDF
          </p>
        </div>
      </div>
    </section>
  );
}
