"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Bell } from "lucide-react";
import { UPCOMING_MEETINGS } from "@/data/campaign";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MeetingsSection() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-safe">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="section-eyebrow mb-3 block">Agenda de Mobilisation</span>
            <h2 className="editorial-heading text-4xl md:text-6xl text-ink">
              Sur le terrain, <br/>
              <span className="text-benin-green italic">avec vous.</span>
            </h2>
          </div>
          <Button variant="outline" className="rounded-full h-12 px-6 group">
            <Bell className="mr-2 h-4 w-4 text-benin-green" />
            M'alerter des rencontres
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {UPCOMING_MEETINGS.map((meeting, i) => (
            <motion.div
              key={meeting.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface-alt/40 rounded-[32px] p-8 border border-transparent hover:border-benin-green/20 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-benin-green/10 text-benin-green text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {meeting.type}
                </span>
                <div className="flex flex-col items-end">
                  <span className="font-serif text-2xl font-bold text-ink leading-none">
                    {new Date(meeting.date).getDate()}
                  </span>
                  <span className="text-[10px] font-bold uppercase text-ink-muted">
                    {new Date(meeting.date).toLocaleString('fr-FR', { month: 'short' })}
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-ink mb-4 group-hover:text-benin-green transition-colors">
                {meeting.title}
              </h3>

              <p className="text-sm text-ink-secondary leading-relaxed mb-8 flex-1">
                {meeting.description}
              </p>

              <div className="space-y-3 pt-6 border-t border-border/40">
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <MapPin className="h-3.5 w-3.5 text-benin-green" />
                  <span className="font-medium">{meeting.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-muted">
                  <Calendar className="h-3.5 w-3.5 text-benin-green" />
                  <span className="font-medium">
                    {new Date(meeting.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
              
              <Button variant="ghost" className="mt-6 w-full justify-between hover:bg-benin-green/5 group/btn px-4">
                <span className="text-xs font-bold text-ink">Détails & Inscription</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
