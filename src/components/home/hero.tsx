"use client";

import { ArrowRight, MessageCircleHeart, Sparkles, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { cn } from "@/lib/utils";

const slides = [
  {
    type: "image",
    content: "L'industrialisation en marche",
    sub: "GDIZ — Zone Industrielle de Glo-Djigbé",
    color: "from-benin-green-light to-benin-green-dark",
    icon: "🏗️",
  },
  {
    type: "video",
    content: "L'énergie pour tous",
    sub: "Maria Gléta — Autonomie énergétique",
    color: "from-benin-yellow to-benin-yellow-dark",
    icon: "⚡",
  },
  {
    type: "text",
    content: "L'accès à l'eau potable",
    sub: "80% de couverture nationale",
    color: "from-blue-500 to-blue-700",
    icon: "💧",
  }
];

const achievements = [
  { label: "Accès à l'eau", value: "80%", icon: "💧" },
  { label: "Électricité", value: "180MW", icon: "⚡" },
  { label: "Vies impactées", value: "1M+", icon: "🤝" },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-surface pt-28 pb-12 lg:pt-40 lg:pb-20">
      <div className="container-safe relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col gap-8 text-center lg:text-left"
          >
            <div className="flex flex-col gap-2 self-center lg:self-start">
              <div className="inline-flex items-center gap-2 bg-benin-green/10 text-benin-green px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit">
                <Sparkles className="size-3.5" />
                <span>HORIZON BÉNIN — Mouvement Indépendant</span>
              </div>
              <span className="text-[9px] font-bold text-ink-muted uppercase tracking-[0.2em] ml-4">Initiative de soutien citoyen</span>
            </div>

            <h1 className="editorial-heading text-4xl sm:text-5xl lg:text-7xl text-ink leading-[1.0]">
              Ouvrir de <br className="hidden lg:block" />
              <span className="text-benin-green">nouveaux horizons</span>, <br className="hidden lg:block" />
              <span className="relative inline-block">
                en confiance.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-benin-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Le duo de l'expérience et de l'ambition pour un Bénin industriel, solidaire et souverain. Explorez 10 ans de transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="rounded-full h-12 px-10 text-base shadow-xl shadow-benin-green/20 bg-benin-green hover:bg-benin-green-dark text-white font-bold transition-all hover:scale-105">
                    Rejoindre le mouvement
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button variant="outline" size="lg" className="rounded-full h-12 px-8 text-base border-2 hover:bg-surface-alt text-ink font-bold" asChild>
                <Link href="/assistant">
                  <MessageCircleHeart className="mr-2 size-4 text-benin-red" />
                  Dialoguer avec l'IA
                </Link>
              </Button>
            </div>
            
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-sm text-ink-muted">
              <p>Déjà <span className="font-bold text-ink">51,347</span> citoyens engagés</p>
              <div className="flex -space-x-3">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                     <div className={`w-full h-full bg-gradient-to-br from-benin-green/${20 + i*10} to-benin-yellow/${20 + i*10}`} />
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Multi-slide Carousel */}
          <div className="relative lg:h-[600px] w-full flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-tr from-benin-green/5 via-benin-yellow/10 to-benin-red/5 organic-blob animate-float opacity-70 blur-3xl scale-90" />
             
             <div className="relative z-10 w-full max-w-md aspect-[4/5] bg-white rounded-[48px] overflow-hidden shadow-2xl group rotate-3 hover:rotate-0 transition-transform duration-700 border border-border/40">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={currentSlide}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20 }}
                   transition={{ duration: 0.5 }}
                   className={cn(
                     "absolute inset-0 bg-gradient-to-br flex flex-col items-center justify-center p-12 text-white text-center",
                     slides[currentSlide].color
                   )}
                 >
                   <div className="mb-8 text-6xl">{slides[currentSlide].icon}</div>
                   <h3 className="font-serif text-3xl font-bold mb-4">{slides[currentSlide].content}</h3>
                   <p className="text-white/80 text-sm">{slides[currentSlide].sub}</p>
                   
                   {slides[currentSlide].type === "video" && (
                     <div className="mt-8 h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform cursor-pointer border border-white/30">
                        <Play className="h-6 w-6 fill-white" />
                     </div>
                   )}
                 </motion.div>
               </AnimatePresence>

               {/* Navigation Controls */}
               <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
                 {slides.map((_, i) => (
                   <button
                     key={i}
                     onClick={() => setCurrentSlide(i)}
                     className={cn(
                       "h-1.5 rounded-full transition-all",
                       i === currentSlide ? "w-8 bg-white" : "w-2 bg-white/40"
                     )}
                   />
                 ))}
               </div>
             </div>

             {/* Floating Cards - Positioned to not hide the main slider */}
             {achievements.map((item, i) => (
               <motion.div
                 key={item.label}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.8 + i * 0.1 }}
                 className={cn(
                   "absolute z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-border/50",
                   i === 0 ? "top-[5%] -left-[10%] lg:-left-[15%]" : "",
                   i === 1 ? "top-1/2 -right-[10%] lg:-right-[15%] -translate-y-1/2" : "",
                   i === 2 ? "bottom-[5%] -left-[10%] lg:-left-[15%]" : ""
                 )}
               >
                 <span className="text-2xl">{item.icon}</span>
                 <div>
                   <p className="text-sm font-bold text-ink">{item.value}</p>
                   <p className="text-[10px] text-ink-muted uppercase tracking-wider font-bold">{item.label}</p>
                 </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
