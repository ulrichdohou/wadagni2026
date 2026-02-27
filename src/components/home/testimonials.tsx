"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="bg-benin-green-muted/30 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--benin-green) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="mx-auto max-w-[--content-max] px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="section-eyebrow mb-3 block">Témoignages</span>
          <h2 className="editorial-heading text-3xl md:text-5xl text-ink mb-6">
            Ils racontent leur <span className="text-benin-green">Bénin</span>.
          </h2>
          <p className="text-lg text-ink-secondary">
            Derrière chaque projet, il y a une histoire, une famille, un avenir transformé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow border border-border/50 relative group"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-benin-yellow/20 group-hover:text-benin-yellow/40 transition-colors" />
              
              <div className="flex flex-col h-full">
                <blockquote className="font-serif text-lg leading-relaxed text-ink mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                  <div className="h-10 w-10 rounded-full bg-surface-alt flex items-center justify-center text-benin-green font-bold font-serif text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-ink-muted uppercase tracking-wider">
                      {t.department} &bull; {t.age} ans
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
