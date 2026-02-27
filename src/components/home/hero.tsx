"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircleHeart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  { label: "Accès à l'eau", value: "80%", icon: "💧" },
  { label: "Électricité", value: "180MW", icon: "⚡" },
  { label: "Vies impactées", value: "1M+", icon: "🤝" },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div className="container-safe">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-benin-green/10 text-benin-green px-4 py-1.5 rounded-full text-sm font-medium">
              <Sparkles className="size-4" />
              <span>10 ans de transformation</span>
            </div>

            <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-7xl text-ink">
              Construire <br className="hidden lg:block" />
              <span className="text-benin-green">l&apos;avenir</span>, <br className="hidden lg:block" />
              <span className="relative inline-block">
                ensemble.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-benin-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
              Une décennie de fondations solides pour un Bénin plus fort. 
              Découvrez notre bilan et rejoignez une dynamique humaine et durable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="rounded-full h-14 px-8 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all bg-benin-green hover:bg-benin-green-light" asChild>
                <Link href="#subscribe">
                  Je m&apos;engage
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-2 hover:bg-surface-alt text-ink" asChild>
                <Link href="/assistant">
                  <MessageCircleHeart className="mr-2 size-5 text-benin-red" />
                  Discuter avec l&apos;IA
                </Link>
              </Button>
            </div>
            
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-ink-muted">
              <p>Déjà <span className="font-bold text-ink">12,450</span> citoyens engagés</p>
              <div className="flex -space-x-3">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                     {/* Placeholder avatars */}
                     <div className={`w-full h-full bg-gradient-to-br from-benin-green/${20 + i*10} to-benin-yellow/${20 + i*10}`} />
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
             {/* Organic Background Shape */}
             <div className="absolute inset-0 bg-gradient-to-tr from-benin-green/5 via-benin-yellow/10 to-benin-red/5 organic-blob animate-float opacity-70 blur-3xl scale-90" />
             
             {/* Main Image Container (Placeholder) */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative z-10 w-full max-w-md aspect-[4/5] bg-surface-alt rounded-[40px] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
             >
               {/* Using a CSS gradient to represent a warm, natural scene instead of an external image for safety */}
               <div className="w-full h-full bg-gradient-to-br from-benin-green-light to-benin-green-dark relative">
                  <div className="absolute inset-0 bg-[url('/globe.svg')] opacity-10 bg-center bg-no-repeat bg-cover mix-blend-overlay"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <p className="font-serif italic text-2xl">"Le développement ça y est."</p>
                    <p className="text-sm opacity-80 mt-2">Cotonou, Bénin</p>
                  </div>
               </div>
             </motion.div>

             {/* Floating Cards */}
             {achievements.map((item, i) => (
               <motion.div
                 key={item.label}
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 + i * 0.1 }}
                 className={`absolute z-20 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-3
                   ${i === 0 ? 'top-[10%] -left-[5%]' : ''}
                   ${i === 1 ? 'bottom-[20%] -right-[5%]' : ''}
                   ${i === 2 ? 'bottom-[5%] left-[10%]' : ''}
                 `}
               >
                 <span className="text-2xl">{item.icon}</span>
                 <div>
                   <p className="text-sm font-bold text-ink">{item.value}</p>
                   <p className="text-xs text-ink-muted uppercase tracking-wider">{item.label}</p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}