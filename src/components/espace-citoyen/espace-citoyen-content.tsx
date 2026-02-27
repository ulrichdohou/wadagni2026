"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DynamicIcon } from "@/components/shared/icon-map";
import { weeklyMissions, levels } from "@/data/missions";
import { departments } from "@/data/departments";
import { Check, Trophy, Users, Star, ArrowRight, ShieldCheck, Heart, Mail, Phone, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const topDepartments = [...departments]
  .sort((a, b) => b.supporters - a.supporters)
  .slice(0, 5);

export function EspaceCitoyenContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [points] = useState(175);
  const [completed] = useState<string[]>(["share-bilan"]);

  const currentLevel =
    levels.find((l) => points >= l.minPoints && points <= l.maxPoints) ??
    levels[0];
  const nextLevel = levels[levels.indexOf(currentLevel) + 1];
  const progressPct = nextLevel
    ? ((points - currentLevel.minPoints) /
        (nextLevel.minPoints - currentLevel.minPoints)) *
      100
    : 100;

  if (!isAuthenticated) {
    return (
      <section className="py-24 md:py-32 relative overflow-hidden min-h-[80vh] flex items-center">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-benin-green/5 to-transparent -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-benin-yellow/5 rounded-full blur-[120px] -z-10" />

        <div className="container-narrow">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-benin-green/10 text-benin-green px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Lock className="h-3.5 w-3.5" />
              Espace Réservé aux Membres
            </div>
            <h1 className="editorial-heading text-5xl md:text-7xl mb-8 leading-tight text-ink">
              Prêt à devenir un <br/>
              <span className="text-benin-green italic">acteur du changement ?</span>
            </h1>
            <p className="text-xl text-ink-secondary leading-relaxed">
              Rejoignez l'Espace Citoyen pour accéder aux défis hebdomadaires, suivre votre impact local et obtenir votre carte de membre exclusive.
            </p>
          </div>

          <div className="bg-white rounded-[48px] border border-border/60 shadow-2xl p-8 md:p-16 max-w-xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Heart className="h-32 w-32 text-benin-green" />
            </div>
            
            <div className="relative z-10 space-y-10">
              <div className="grid gap-6">
                <div className="relative">
                  <Phone className="absolute left-5 top-1/2 -translate-y-1/2 size-5 text-ink-muted" />
                  <input 
                    type="tel" 
                    placeholder="Votre numéro WhatsApp" 
                    className="w-full h-16 bg-surface-alt rounded-2xl pl-14 pr-6 outline-none focus:ring-2 focus:ring-benin-green/20 transition-all text-base"
                  />
                </div>
              </div>

              <Button 
                onClick={() => setIsAuthenticated(true)}
                className="w-full h-16 rounded-2xl bg-benin-green text-white font-bold text-xl shadow-xl shadow-benin-green/20 hover:scale-[1.02] transition-transform"
              >
                Rejoindre le mouvement
                <ArrowRight className="ml-2 size-6" />
              </Button>

              <div className="flex flex-col items-center gap-4 pt-4">
                <p className="text-xs font-bold text-ink-muted uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4" />
                  Accès gratuit et sécurisé
                </p>
                <div className="h-px w-12 bg-border" />
                <button 
                  onClick={() => setIsAuthenticated(true)}
                  className="text-sm font-bold text-benin-green hover:underline underline-offset-4"
                >
                  Déjà inscrit ? Connectez-vous ici
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-benin-green/5 to-transparent -z-10" />

      <div className="container-safe">
        
        {/* Header - Editorial Engagement Card */}
        <div className="bg-benin-green rounded-[48px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center lg:items-start justify-between">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 mb-8 border border-white/10">
                <ShieldCheck className="h-4 w-4 text-benin-yellow" />
                Espace Engagement Citoyen
              </div>
              <h1 className="editorial-heading text-5xl md:text-7xl mb-8 leading-tight">
                Votre voix <br/>
                <span className="text-benin-yellow italic">construit la nation.</span>
              </h1>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-[32px] border border-white/20">
                  <div className="h-14 w-14 rounded-2xl bg-benin-yellow flex items-center justify-center text-[#0C1A13] shadow-lg text-3xl">
                    {currentLevel.badge}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-1">Grade Actuel</p>
                    <p className="text-xl font-serif font-bold text-white">{currentLevel.name}</p>
                  </div>
                </div>
                <div className="text-left px-4">
                  <p className="text-3xl font-serif font-bold text-benin-yellow leading-none">{points}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mt-2">Points Cumulés</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-80 bg-[#0C1A13]/40 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 self-center lg:self-end">
              <div className="flex justify-between items-end mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Progression Grade</span>
                <span className="text-sm font-bold text-benin-yellow">{Math.round(progressPct)}%</span>
              </div>
              <Progress value={progressPct} className="h-2.5 bg-white/10 [&>div]:bg-benin-yellow" />
              {nextLevel && (
                <p className="text-[10px] font-bold text-white/40 mt-4 text-center uppercase tracking-[0.2em] leading-relaxed">
                   Plus que <span className="text-white">{nextLevel.minPoints - points} points</span> <br/> pour le grade {nextLevel.name}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Actions Column */}
          <div className="lg:col-span-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border pb-8">
              <div className="max-w-md">
                <h2 className="editorial-heading text-3xl md:text-4xl text-ink mb-4">Actions de la semaine</h2>
                <p className="text-ink-secondary">Participez à la mobilisation en réalisant ces quelques actions simples et concrètes.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-benin-green uppercase tracking-widest bg-benin-green/5 px-4 py-2 rounded-full">
                <Star className="h-3.5 w-3.5" fill="currentColor" />
                Mis à jour
              </div>
            </div>

            <div className="grid gap-6">
              {weeklyMissions.map((mission) => {
                const isDone = completed.includes(mission.id);
                return (
                  <motion.div
                    key={mission.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={cn(
                      "group flex flex-col sm:flex-row items-start sm:items-center gap-8 p-8 rounded-[40px] border transition-all duration-500",
                      isDone 
                        ? "bg-surface-alt border-border/40 opacity-70" 
                        : "bg-white border-border shadow-sm hover:shadow-xl hover:border-benin-green/20"
                    )}
                  >
                    <div className={cn(
                      "h-16 w-16 rounded-[24px] flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110",
                      isDone ? "bg-benin-green text-white" : "bg-benin-green/5 text-benin-green"
                    )}>
                      {isDone ? <Check className="h-8 w-8" strokeWidth={3} /> : <DynamicIcon name={mission.icon} className="h-8 w-8" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className={cn("font-serif text-2xl", isDone ? "text-ink-muted line-through" : "text-ink")}>
                          {mission.title}
                        </h3>
                        <span className="text-[10px] font-bold bg-benin-yellow/10 text-benin-yellow-dark px-3 py-1 rounded-full uppercase tracking-widest">+{mission.points} pts</span>
                      </div>
                      <p className="text-ink-secondary leading-relaxed">
                        {mission.description}
                      </p>
                    </div>

                    <Button 
                      variant={isDone ? "ghost" : "default"} 
                      size="lg" 
                      className="rounded-full w-full sm:w-auto h-12 px-8 font-bold"
                      disabled={isDone}
                    >
                      {isDone ? "Terminé" : mission.actionLabel}
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Citizen Card */}
            <div className="bg-gradient-to-br from-benin-green to-[#0C1A13] rounded-[48px] p-10 text-white relative overflow-hidden shadow-2xl group transition-all hover:scale-[1.02]">
               <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all" />
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-16">
                   <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                     <Heart className="h-6 w-6 text-benin-yellow animate-pulse" fill="currentColor" />
                   </div>
                   <div className="text-right">
                     <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 block mb-1">Citoyen ID</span>
                     <span className="text-xs font-mono font-bold text-white/60 tracking-wider">#W26-{points.toString().padStart(5, '0')}</span>
                   </div>
                 </div>
                 
                 <div className="mb-12">
                   <p className="text-[10px] font-bold text-benin-yellow uppercase tracking-[0.3em] mb-3">Carte de Citoyen Engagé</p>
                   <p className="font-serif text-4xl font-bold tracking-tight">Bénin 2026</p>
                 </div>
                 
                 <div className="flex items-end justify-between pt-8 border-t border-white/10">
                   <div>
                     <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Grade de Mobilisation</p>
                     <p className="font-serif text-2xl font-bold text-white">{currentLevel.name}</p>
                   </div>
                   <div className="h-16 w-16 rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center shadow-inner">
                      <span className="text-3xl">{currentLevel.badge}</span>
                   </div>
                 </div>
               </div>
            </div>

            {/* Leaderboard */}
            <div className="bg-white rounded-[48px] border border-border p-10 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-border/60">
                 <div className="h-12 w-12 rounded-2xl bg-benin-yellow/10 flex items-center justify-center text-benin-yellow">
                    <Trophy className="h-6 w-6" />
                 </div>
                 <h2 className="font-serif text-2xl font-bold text-ink leading-tight">Dynamique <br/>Régionale</h2>
              </div>
              
              <div className="space-y-6">
                {topDepartments.map((dept, i) => (
                  <div key={dept.slug} className="flex items-center gap-5 group cursor-pointer">
                    <div className={cn(
                      "h-10 w-10 rounded-2xl flex items-center justify-center text-sm font-bold transition-all",
                      i === 0 ? "bg-benin-yellow text-[#0C1A13] shadow-lg" : "bg-surface-alt text-ink-muted group-hover:bg-benin-green group-hover:text-white"
                    )}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-ink group-hover:text-benin-green transition-colors">{dept.name}</p>
                      <p className="text-[10px] font-bold text-ink-muted uppercase tracking-widest">{dept.supporters.toLocaleString("fr-FR")} Citoyens</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-border group-hover:text-benin-green group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
              
              <Button variant="ghost" className="w-full mt-10 rounded-full border border-border hover:bg-surface-alt font-bold group">
                Classement Complet
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
