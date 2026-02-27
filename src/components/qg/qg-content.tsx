"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DynamicIcon } from "@/components/shared/icon-map";
import { weeklyMissions, levels } from "@/data/missions";
import { departments } from "@/data/departments";
import { Check, Trophy, Users, Star, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const topDepartments = [...departments]
  .sort((a, b) => b.supporters - a.supporters)
  .slice(0, 5);

export function QGContent() {
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

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-benin-green/5 to-transparent -z-10" />

      <div className="container-safe">
        
        {/* Header - Editorial Engagement Card */}
        <div className="bg-benin-green rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-4 block">
                Votre Espace Citoyen
              </span>
              <h1 className="editorial-heading text-4xl md:text-6xl mb-6">
                Chaque action <br/>
                <span className="text-benin-yellow italic">compte.</span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-3xl border border-white/20">
                <div className="h-12 w-12 rounded-2xl bg-benin-yellow flex items-center justify-center text-white shadow-lg text-2xl">
                  {currentLevel.badge}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">{currentLevel.name}</p>
                  <p className="text-xs text-white/60">
                    Niveau actuel &bull; <span className="text-benin-yellow font-bold">{points} points</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-72 bg-white/5 backdrop-blur-md p-6 rounded-[32px] border border-white/10 self-center md:self-end">
              <div className="flex justify-between items-end mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">Progression</span>
                <span className="text-xs font-bold">{Math.round(progressPct)}%</span>
              </div>
              <Progress value={progressPct} className="h-2 bg-white/10 [&>div]:bg-benin-yellow" />
              {nextLevel && (
                <p className="text-[10px] text-white/40 mt-3 text-center uppercase tracking-widest">
                   Plus que {nextLevel.minPoints - points} pts pour le grade {nextLevel.name}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Missions Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="editorial-heading text-2xl md:text-3xl text-ink">Actions de la semaine</h2>
              <span className="text-xs font-bold text-benin-green uppercase tracking-widest">Nouveaux Défis</span>
            </div>

            <div className="space-y-4">
              {weeklyMissions.map((mission) => {
                const isDone = completed.includes(mission.id);
                return (
                  <div
                    key={mission.id}
                    className={cn(
                      "group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-[32px] border transition-all duration-300",
                      isDone 
                        ? "bg-surface-alt border-border/40 opacity-70" 
                        : "bg-white border-border shadow-sm hover:shadow-md hover:border-benin-green/20"
                    )}
                  >
                    <div className={cn(
                      "h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
                      isDone ? "bg-benin-green text-white" : "bg-benin-green/5 text-benin-green"
                    )}>
                      {isDone ? <Check className="h-6 w-6" /> : <DynamicIcon name={mission.icon} className="h-6 w-6" />}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={cn("font-bold text-lg", isDone ? "text-ink-muted line-through" : "text-ink")}>
                          {mission.title}
                        </h3>
                        <span className="text-xs font-bold text-benin-green">+{mission.points} pts</span>
                      </div>
                      <p className="text-sm text-ink-secondary leading-relaxed">
                        {mission.description}
                      </p>
                    </div>

                    <Button 
                      variant={isDone ? "ghost" : "default"} 
                      size="sm" 
                      className="rounded-full w-full sm:w-auto"
                      disabled={isDone}
                    >
                      {isDone ? "Terminé" : mission.actionLabel}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar: Leaderboard & Card */}
          <div className="space-y-12">
            
            {/* Leaderboard */}
            <div className="bg-white rounded-[32px] border border-border p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                 <Trophy className="h-6 w-6 text-benin-yellow" />
                 <h2 className="editorial-heading text-xl text-ink">Dynamique Régionale</h2>
              </div>
              
              <div className="space-y-4">
                {topDepartments.map((dept, i) => (
                  <div key={dept.slug} className="flex items-center gap-4 group">
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold",
                      i === 0 ? "bg-benin-yellow text-white" : "bg-surface-alt text-ink-muted"
                    )}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-ink group-hover:text-benin-green transition-colors">{dept.name}</p>
                      <p className="text-[10px] text-ink-muted uppercase tracking-widest">{dept.supporters.toLocaleString("fr-FR")} citoyens</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-border group-hover:text-benin-green transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Militant Card - Updated to "Citizen Card" */}
            <div className="bg-gradient-to-br from-benin-green to-benin-green-dark rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-12">
                   <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                     <Star className="h-5 w-5 text-benin-yellow" fill="currentColor" />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">ID: W26-{points}</span>
                 </div>
                 
                 <p className="text-xs font-bold text-white/60 uppercase tracking-widest mb-1">Carte de Citoyen Engagé</p>
                 <p className="font-serif text-2xl font-bold mb-6">Bénin 2026</p>
                 
                 <div className="flex items-end justify-between">
                   <div>
                     <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Grade</p>
                     <p className="font-bold text-benin-yellow">{currentLevel.name}</p>
                   </div>
                   <div className="h-12 w-12 rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl">{currentLevel.badge}</span>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
