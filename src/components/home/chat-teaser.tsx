"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, User } from "lucide-react";

export function ChatTeaser() {
  return (
    <section className="bg-gradient-to-br from-benin-green/5 via-surface to-benin-yellow/5 py-20">
      <div className="container-safe max-w-4xl">
        
        <div className="text-center mb-12">
          <span className="section-eyebrow mb-2 block">Transparence</span>
          <h2 className="editorial-heading text-3xl md:text-5xl text-ink mb-4">
            Une question ? <br/>
            <span className="text-benin-green">Une réponse immédiate.</span>
          </h2>
          <p className="text-lg text-ink-secondary max-w-2xl mx-auto">
            Notre assistant intelligent analyse des milliers de documents officiels pour vous répondre en toute transparence, 24h/24.
          </p>
        </div>

        <Link href="/assistant" className="block group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-benin-green/20 to-benin-yellow/20 rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
          
          <div className="relative bg-white rounded-[28px] border border-border/50 shadow-xl p-6 md:p-8 overflow-hidden">
            
            {/* Header of Chat */}
            <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-benin-green to-benin-green-light flex items-center justify-center text-white shadow-sm">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-ink text-sm">Assistant Wadagni</div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-ink-muted font-medium">En ligne</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-alt rounded-full px-3 py-1 text-xs font-medium text-ink-secondary">
                IA 2.0
              </div>
            </div>

            {/* Chat Area */}
            <div className="space-y-6">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-benin-green text-white px-5 py-3 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%] md:max-w-[70%]">
                  <p className="text-[15px] leading-relaxed">
                    Qu'est-ce qui a été fait concrètement pour l'eau potable ces dernières années ? 💧
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-benin-green/10 flex items-center justify-center text-benin-green shrink-0 mt-1">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="space-y-2 max-w-[90%] md:max-w-[80%]">
                  <div className="bg-surface-alt px-5 py-4 rounded-2xl rounded-tl-sm text-ink text-[15px] leading-relaxed shadow-sm">
                    <p className="mb-2">
                      L'accès à l'eau potable a fait un bond spectaculaire : on est passé de <span className="font-bold text-benin-green">46% à 80%</span> de couverture nationale.
                    </p>
                    <p>
                      Concrètement, c'est plus de <span className="font-bold">20 000 forages</span> réalisés, surtout dans les zones rurales qui étaient délaissées.
                    </p>
                  </div>
                  
                  {/* Sources chips */}
                  <div className="flex flex-wrap gap-2 pl-1">
                    <span className="text-[10px] font-medium bg-white border border-border px-2 py-0.5 rounded-full text-ink-muted uppercase tracking-wider">
                      Source : PAG 2021-2026
                    </span>
                    <span className="text-[10px] font-medium bg-white border border-border px-2 py-0.5 rounded-full text-ink-muted uppercase tracking-wider">
                      Source : Banque Mondiale
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Fake */}
            <div className="mt-8 pt-4 border-t border-border/40">
              <div className="bg-surface px-4 py-3 rounded-full text-ink-muted text-sm flex justify-between items-center group-hover:bg-surface-alt transition-colors">
                <span>Posez votre question...</span>
                <div className="h-8 w-8 rounded-full bg-benin-green flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                   <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>

          </div>
        </Link>

      </div>
    </section>
  );
}
